/**
 * Copyright 2021 Bart Butenaers
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
 module.exports = function(RED) {
    var settings = RED.settings;
    const tf = require('@tensorflow/tfjs-node');
    const nodeWav = require('node-wav');
    const classMapping = require('./classMapping');

    function YamNetDetectorNode(config) {
        RED.nodes.createNode(this,config);
        this.inputField     = config.inputField;
        this.outputField    = config.outputField;
        this.useFirst       = config.useFirst;
        this.autoConversion = config.autoConversion;

        var node = this;
        
        const TARGET_SAMPLE_RATE = 16000;
        
        const FILTER = [-0.037935, -0.00089024, 0.040173, 0.019989, 0.0047792, -0.058675, -0.056487, -0.0040653, 0.14527, 0.26927, 0.33913, 
                         0.26927, 0.14527, -0.0040653, -0.056487, -0.058675, 0.0047792, 0.019989, 0.040173, -0.00089024, -0.037935];

        // Downsamples Float32Array audio chunk to 16 kHz 'audio/l16' chunk.
        // See https://github.com/yhwang/node-red-contrib-wav-stft/blob/master/src/audiowav16.ts
        function downsampleTo16K(audioBuff, srcSampleRate, targetSampleRate) {
            const ratio = srcSampleRate / targetSampleRate;
            const outLen = Math.floor((audioBuff.length - FILTER.length) / ratio) + 1;
            const rev = new Float32Array(outLen);
            for (var i = 0, end = audioBuff.length - FILTER.length + 1; i < end; i++) {
                const offset = Math.round(ratio * i);
                var sample = 0;
                for (var j = 0, len = FILTER.length; j < len; ++j) {
                    sample += audioBuff[offset + j] * FILTER[j];
                }
                rev[i] = sample;
            }
            return rev;
        };

        async function loadModel() {
            const modelUrl = 'https://tfhub.dev/google/tfjs-model/yamnet/tfjs/1';
            node.model = await tf.loadGraphModel(modelUrl, { fromTFHub: true });

            node.ready = true;
            node.status({fill:'green', shape:'dot', text:'Model ready'});
            node.modelLoading = false;
        }
        node.status({fill:'yellow', shape:'ring', text:'Loading model...'});
        node.modelLoading = true;
        loadModel();

        node.on("input", function(msg) {
            if (node.modelLoading) {
                node.error("Ignoring input msg, because the model is still loading", msg);
                return;
            }    
            
            try {
                // Get the xsd from the specified input location
                var wav = RED.util.evaluateNodeProperty(node.inputField, "msg", this, msg);
            } 
            catch(err) {
                node.error("Error getting WAV from msg." + node.inputField + " : " + err.message, msg);
                return;
            }
            
            if (wav == undefined) {
                node.error("No WAV has been passed in msg." + node.inputField, msg);
                return;
            }    
            
            try {
                // Decode the WAV, i.e. separate the audio from the informational headers (which are parsed into separate fields)
                const decodedWav = nodeWav.decode(wav);
                
                // Get the first audio channel data (which is a float32 array)
                var audio = decodedWav.channelData[0];
                
                if (node.autoConversion) {
                    if (decodedWav.sampleRate > TARGET_SAMPLE_RATE) {
                        audio = downsampleTo16K(audio, decodedWav.sampleRate, TARGET_SAMPLE_RATE);
                    }
                }

                // Store the audio float32 array in a tensor
                const audioTensor = tf.tensor(audio);

                // Pass a 16kHz mono audio fragment to the analyzer, to check whether it contains a classified sound
                const [scores, embeddings, spectrogram] = node.model.predict(audioTensor);
            
                //scores.print(verbose=true);
                //embeddings.print(verbose=true);
                //spectrogram.print(verbose=true);

                // Find class with the top score when mean-aggregated across frames.
                var classIndex = scores.mean(axis=0).argMax().dataSync()[0];

                // Get the name of the recognized class
                var className = classMapping.getClassName(classIndex);
                
                if (Array.isArray(className) && node.useFirst) {
                    className = className[0];
                }
            } 
            catch(err) {
                node.error("Error processing the wav input: " + err.message, msg);
                return;
            }

            try {
                // Set the class name in the specified output message location
                RED.util.setMessageProperty(msg, node.outputField, {classIndex: classIndex, className: className});
            }
            catch(err) {
                node.error("Error setting result in msg." + node.outputField + " : " + err.message, msg);
                return;
            }
            
            node.send(msg);
        });

        node.on("close", function() {
            if (node.model) {
                node.model.dispose();
            }
            node.modelLoading = false;
        });
    }

    RED.nodes.registerType("tfjs-yamnet-detector", YamNetDetectorNode);
}
