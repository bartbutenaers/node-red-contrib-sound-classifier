# node-red-contrib-sound-classifier
A Node-RED node to detect 521 different sounds in a WAV fragment

## Install
Run the following npm command in your Node-RED user directory (typically ~/.node-red):
```
npm install bartbutenaers/node-red-contrib-sound-classifier
```

## Limitations!
+ The Tensorflow.js library will be installed automatically. However Tensorflow.js is only available on certain OS/Hardware/processor combinations. Therfore it might not automatically work on all platforms, if you are unlucky...
+ The recognition runs locally, but the YAMNet model will be loaded from the web (so it cannot be used in offline setups).
+ The recognitions will not always be accurate ...

## Introduction to Yamnet
Based on audio from more than 2 million YouTube videos, a large public dataset of manually annotated audio events has been created (see [Audioset](https://research.google.com/audioset/)).  [Dan Ellis](https://github.com/dpwef) has used this Audioset to train the [YAMNet](https://www.tensorflow.org/hub/tutorials/yamnet) acoustic detection model, which is now able to detect 521 different sounds.  This node uses Tensorflow.js to run the model.

## Node usage
When a 16kHz mono WAV fragment buffer is injected, an output message will be send containing both the ***class index*** and the ***class name***:

![Array output msg](https://user-images.githubusercontent.com/14224149/119165425-c1bc4c80-ba5d-11eb-963a-9a6488bfc5c2.png)

Each different sound has a unique key (= class index) and a description (= class name).  A single key can have multiple descriptions, which is the reason why the class name field is an array.  An overview of all available keys (and the corresponding descriptions) can be found [here](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-sound-classifier/main/class_mapping.js).

The following example flow injects a WAV file (which is fetched via a http request) and tries to recognize the sound:

![Example flow](https://user-images.githubusercontent.com/14224149/119188271-b9bed580-ba7a-11eb-8f31-53ea111ce369.png)

```
[{"id":"afaf00fb.f0cd9","type":"debug","z":"95eeca75.798fe8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"true","targetType":"full","statusVal":"result.className","statusType":"msg","x":1110,"y":240,"wires":[]},{"id":"e337ea47.876c48","type":"http request","z":"95eeca75.798fe8","name":"Load wav fragment","method":"GET","ret":"bin","paytoqs":"ignore","url":"","tls":"","persist":false,"proxy":"","authType":"","x":530,"y":240,"wires":[["f0a64342.df861"]]},{"id":"a094a0d0.44439","type":"inject","z":"95eeca75.798fe8","name":"Baby","props":[{"p":"url","v":"http://cd.textfiles.com/mmplatinum/SOUNDS/WAV/MOREWAV/BABYCRY2.WAV","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","x":310,"y":240,"wires":[["e337ea47.876c48"]]},{"id":"7ee548c1.eff9c8","type":"play audio","z":"95eeca75.798fe8","name":"","voice":"","x":1130,"y":360,"wires":[]},{"id":"ebc9aec1.4b0d4","type":"inject","z":"95eeca75.798fe8","name":"Glass","props":[{"p":"url","v":"http://game.ellco.ru/cstrike/sound/debris/glass3.wav","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","x":310,"y":280,"wires":[["e337ea47.876c48"]]},{"id":"7b15d8ef.50d238","type":"inject","z":"95eeca75.798fe8","name":"Yell","props":[{"p":"url","v":"http://www.lifesatwitch.com/sounds/hey.wav","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","x":310,"y":320,"wires":[["e337ea47.876c48"]]},{"id":"7bf27d75.dcd654","type":"inject","z":"95eeca75.798fe8","name":"Car alarm","props":[{"p":"url","v":"http://cd.textfiles.com/fantaziasampler/WAV/CARALARM.WAV","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","x":320,"y":360,"wires":[["e337ea47.876c48"]]},{"id":"2f74fde1.f77d52","type":"inject","z":"95eeca75.798fe8","name":"Doorbell","props":[{"p":"url","v":"http://www.yuckles.com/dogsounds/doorbell.wav","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","x":320,"y":400,"wires":[["e337ea47.876c48"]]},{"id":"6bf16f3d.ef3f6","type":"comment","z":"95eeca75.798fe8","name":"https://www.findsounds.com/","info":"","x":520,"y":200,"wires":[]},{"id":"76652e71.216a4","type":"tfjs-yamnet-detector","z":"95eeca75.798fe8","inputField":"payload","outputField":"result","inputFieldType":"msg","outputFieldType":"msg","useFirst":true,"autoConversion":true,"name":"","x":920,"y":240,"wires":[["afaf00fb.f0cd9","7ee548c1.eff9c8"]]},{"id":"f0a64342.df861","type":"change","z":"95eeca75.798fe8","name":"Cleanup msg","rules":[{"t":"delete","p":"headers","pt":"msg"},{"t":"delete","p":"url","pt":"msg"},{"t":"delete","p":"responseUrl","pt":"msg"},{"t":"delete","p":"statusCode","pt":"msg"},{"t":"delete","p":"redirectList","pt":"msg"},{"t":"delete","p":"responseCookies","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":730,"y":240,"wires":[["76652e71.216a4"]]},{"id":"ac400206.fdd16","type":"comment","z":"95eeca75.798fe8","name":"node-red-contrib-play-audio","info":"","x":1180,"y":320,"wires":[]}]
```
Note that *node-red-contrib-play-audio* node needs to be installed as an extra dependency, if you want to be able to hear to WAV file playing in the flow editor.  If not required, you can remove that node from the flow.

## Node status
When this node is started, the YAMNet model will automatically be loaded (asynchronously), which will take a few seconds:

![Model loading](https://user-images.githubusercontent.com/14224149/119188541-16ba8b80-ba7b-11eb-8e23-250129a55d63.png)

Once the model has been loaded, this also will be reported in the node status:

![Model loaded](https://user-images.githubusercontent.com/14224149/119188442-f25eaf00-ba7a-11eb-917d-4833c55fc76b.png)

As long as the model is loading, all injected input messages will be ignored...

## Node properties

### Input field
The input message field where the audio fragment needs to be injected, as 16kHz mono WAV.
 
### Output field
The output message field where the information of the recognized sound (i.e. class index and class name) will be send.

In the following example the output is send via `msg.result` to make sure the original WAV input remains untouched in `msg.payload`:

![Output field](https://user-images.githubusercontent.com/14224149/119187630-e0c8d780-ba79-11eb-9d84-6e7b000b9ea3.png)

### Only use first class name, if multiple available
When selected, only the first class name will be used if multiple class names are available.  Otherwise an array of (related) class names will be send.

For example:

![Use first name](https://user-images.githubusercontent.com/14224149/119187185-52545600-ba79-11eb-8e89-3bde6bcfcd20.png)

### Automatic conversion to 16kHz mono WAV
When selected, the input WAV will be converted automatically to a 16kHz mono WAV.  Otherwise the WAV conversion needs to be done in advance by other nodes in the flow. 
