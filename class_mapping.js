/**    
 * Copyright 2021 Bart Butenaers, Stephen McLaughlin    
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
exports.getClassName = function(classIndex) {
    var soundClasses = [];
    
    // Based on https://raw.githubusercontent.com/tensorflow/models/master/research/audioset/yamnet/yamnet_class_map.csv
    soundClasses[0] = "Speech";    
    soundClasses[1] = ["Child speech", "Kid speaking"];    
    soundClasses[2] = "Conversation";    
    soundClasses[3] = ["Narration", "Monologue"];    
    soundClasses[4] = "Babbling";    
    soundClasses[5] = "Speech synthesizer";    
    soundClasses[6] = "Shout";    
    soundClasses[7] = "Bellow";    
    soundClasses[8] = "Whoop";    
    soundClasses[9] = "Yell";    
    soundClasses[10] = "Children shouting";    
    soundClasses[11] = "Screaming";    
    soundClasses[12] = "Whispering";    
    soundClasses[13] = "Laughter";    
    soundClasses[14] = "Baby laughter";    
    soundClasses[15] = "Giggle";    
    soundClasses[16] = "Snicker";    
    soundClasses[17] = "Belly laugh";    
    soundClasses[18] = ["Chuckle", "Chortle"];    
    soundClasses[19] = ["Crying", "Sobbing"];    
    soundClasses[20] = ["Baby cry", "Infant cry"];    
    soundClasses[21] = "Whimper";    
    soundClasses[22] = ["Wail", "Moan"];    
    soundClasses[23] = "Sigh";    
    soundClasses[24] = "Singing";    
    soundClasses[25] = "Choir";    
    soundClasses[26] = "Yodeling";    
    soundClasses[27] = "Chant";    
    soundClasses[28] = "Mantra";    
    soundClasses[29] = "Child singing";    
    soundClasses[30] = "Synthetic singing";    
    soundClasses[31] = "Rapping";    
    soundClasses[32] = "Humming";    
    soundClasses[33] = "Groan";    
    soundClasses[34] = "Grunt";    
    soundClasses[35] = "Whistling";    
    soundClasses[36] = "Breathing";    
    soundClasses[37] = "Wheeze";    
    soundClasses[38] = "Snoring";    
    soundClasses[39] = "Gasp";    
    soundClasses[40] = "Pant";    
    soundClasses[41] = "Snort";    
    soundClasses[42] = "Cough";    
    soundClasses[43] = "Throat clearing";    
    soundClasses[44] = "Sneeze";    
    soundClasses[45] = "Sniff";    
    soundClasses[46] = "Run";    
    soundClasses[47] = "Shuffle";    
    soundClasses[48] = "Footsteps";    
    soundClasses[49] = ["Chewing", "Mastication"];    
    soundClasses[50] = "Biting";    
    soundClasses[51] = "Gargling";    
    soundClasses[52] = "Stomach rumble";    
    soundClasses[53] = ["Burping", "Eructation"];    
    soundClasses[54] = "Hiccup";    
    soundClasses[55] = "Fart";    
    soundClasses[56] = "Hands";    
    soundClasses[57] = "Finger snapping";    
    soundClasses[58] = "Clapping";    
    soundClasses[59] = ["Heart sounds", "Heartbeat"];    
    soundClasses[60] = "Heart murmur";    
    soundClasses[61] = "Cheering";    
    soundClasses[62] = "Applause";    
    soundClasses[63] = "Chatter";    
    soundClasses[64] = "Crowd";    
    soundClasses[65] = ["Hubbub", "Speech noise", "Speech babble"];    
    soundClasses[66] = "Children playing";    
    soundClasses[67] = "Animal";    
    soundClasses[68] = ["Domestic animals", "Pets"];    
    soundClasses[69] = "Dog";    
    soundClasses[70] = "Bark";    
    soundClasses[71] = "Yip";    
    soundClasses[72] = "Howl";    
    soundClasses[73] = "Bow-wow";    
    soundClasses[74] = "Growling";    
    soundClasses[75] = "Whimper (dog)";    
    soundClasses[76] = "Cat";    
    soundClasses[77] = "Purr";    
    soundClasses[78] = "Meow";    
    soundClasses[79] = "Hiss";    
    soundClasses[80] = "Caterwaul";    
    soundClasses[81] = ["Livestock", "Farm animals", "Working animals"];    
    soundClasses[82] = "Horse";    
    soundClasses[83] = "Clip-clop";    
    soundClasses[84] = ["Neigh", "Whinny"];    
    soundClasses[85] = ["Cattle", "Bovinae"];    
    soundClasses[86] = "Moo";    
    soundClasses[87] = "Cowbell";    
    soundClasses[88] = "Pig";    
    soundClasses[89] = "Oink";    
    soundClasses[90] = "Goat";    
    soundClasses[91] = "Bleat";    
    soundClasses[92] = "Sheep";    
    soundClasses[93] = "Fowl";    
    soundClasses[94] = ["Chicken", "Rooster"];    
    soundClasses[95] = "Cluck";    
    soundClasses[96] = ["Crowing", "Cock-a-doodle-doo"];    
    soundClasses[97] = "Turkey";    
    soundClasses[98] = "Gobble";    
    soundClasses[99] = "Duck";    
    soundClasses[100] = "Quack";    
    soundClasses[101] = "Goose";    
    soundClasses[102] = "Honk";    
    soundClasses[103] = "Wild animals";    
    soundClasses[104] = "Roaring cats (lions, tigers)";    
    soundClasses[105] = "Roar";    
    soundClasses[106] = "Bird";    
    soundClasses[107] = ["Bird vocalization", "Bird call", "Bird song"];    
    soundClasses[108] = ["Chirp", "Tweet"];    
    soundClasses[109] = "Squawk";    
    soundClasses[110] = ["Pigeon", "Dove"];    
    soundClasses[111] = "Coo";    
    soundClasses[112] = "Crow";    
    soundClasses[113] = "Caw";    
    soundClasses[114] = "Owl";    
    soundClasses[115] = "Hoot";    
    soundClasses[116] = ["Bird flight", "Flapping wings"];    
    soundClasses[117] = ["Canidae", "Dogs", "Wolves"];    
    soundClasses[118] = ["Rodents", "Rats", "Mice"];    
    soundClasses[119] = "Mouse";    
    soundClasses[120] = "Patter";    
    soundClasses[121] = "Insect";    
    soundClasses[122] = "Cricket";    
    soundClasses[123] = "Mosquito";    
    soundClasses[124] = ["Fly", "Housefly"];    
    soundClasses[125] = "Buzz";    
    soundClasses[126] = ["Bee", "Wasp"];    
    soundClasses[127] = "Frog";    
    soundClasses[128] = "Croak";    
    soundClasses[129] = "Snake";    
    soundClasses[130] = "Rattle";    
    soundClasses[131] = "Whale vocalization";    
    soundClasses[132] = "Music";    
    soundClasses[133] = "Musical instrument";    
    soundClasses[134] = "Plucked string instrument";    
    soundClasses[135] = "Guitar";    
    soundClasses[136] = "Electric guitar";    
    soundClasses[137] = "Bass guitar";    
    soundClasses[138] = "Acoustic guitar";    
    soundClasses[139] = ["Steel guitar", "Slide guitar"];    
    soundClasses[140] = "Tapping (guitar technique)";    
    soundClasses[141] = "Strum";    
    soundClasses[142] = "Banjo";    
    soundClasses[143] = "Sitar";    
    soundClasses[144] = "Mandolin";    
    soundClasses[145] = "Zither";    
    soundClasses[146] = "Ukulele";    
    soundClasses[147] = "Keyboard (musical)";    
    soundClasses[148] = "Piano";    
    soundClasses[149] = "Electric piano";    
    soundClasses[150] = "Organ";    
    soundClasses[151] = "Electronic organ";    
    soundClasses[152] = "Hammond organ";    
    soundClasses[153] = "Synthesizer";    
    soundClasses[154] = "Sampler";    
    soundClasses[155] = "Harpsichord";    
    soundClasses[156] = "Percussion";    
    soundClasses[157] = "Drum kit";    
    soundClasses[158] = "Drum machine";    
    soundClasses[159] = "Drum";    
    soundClasses[160] = "Snare drum";    
    soundClasses[161] = "Rimshot";    
    soundClasses[162] = "Drum roll";    
    soundClasses[163] = "Bass drum";    
    soundClasses[164] = "Timpani";    
    soundClasses[165] = "Tabla";    
    soundClasses[166] = "Cymbal";    
    soundClasses[167] = "Hi-hat";    
    soundClasses[168] = "Wood block";    
    soundClasses[169] = "Tambourine";    
    soundClasses[170] = "Rattle (instrument)";    
    soundClasses[171] = "Maraca";    
    soundClasses[172] = "Gong";    
    soundClasses[173] = "Tubular bells";    
    soundClasses[174] = "Mallet percussion";    
    soundClasses[175] = ["Marimba", "Xylophone"];    
    soundClasses[176] = "Glockenspiel";    
    soundClasses[177] = "Vibraphone";    
    soundClasses[178] = "Steelpan";    
    soundClasses[179] = "Orchestra";    
    soundClasses[180] = "Brass instrument";    
    soundClasses[181] = "French horn";    
    soundClasses[182] = "Trumpet";    
    soundClasses[183] = "Trombone";    
    soundClasses[184] = "Bowed string instrument";    
    soundClasses[185] = "String section";    
    soundClasses[186] = ["Violin", "Fiddle"];    
    soundClasses[187] = "Pizzicato";    
    soundClasses[188] = "Cello";    
    soundClasses[189] = "Double bass";    
    soundClasses[190] = ["Wind instrument", "Woodwind instrument"];    
    soundClasses[191] = "Flute";    
    soundClasses[192] = "Saxophone";    
    soundClasses[193] = "Clarinet";    
    soundClasses[194] = "Harp";    
    soundClasses[195] = "Bell";    
    soundClasses[196] = "Church bell";    
    soundClasses[197] = "Jingle bell";    
    soundClasses[198] = "Bicycle bell";    
    soundClasses[199] = "Tuning fork";    
    soundClasses[200] = "Chime";    
    soundClasses[201] = "Wind chime";    
    soundClasses[202] = "Change ringing (campanology)";    
    soundClasses[203] = "Harmonica";    
    soundClasses[204] = "Accordion";    
    soundClasses[205] = "Bagpipes";    
    soundClasses[206] = "Didgeridoo";    
    soundClasses[207] = "Shofar";    
    soundClasses[208] = "Theremin";    
    soundClasses[209] = "Singing bowl";    
    soundClasses[210] = "Scratching (performance technique)";    
    soundClasses[211] = "Pop music";    
    soundClasses[212] = "Hip hop music";    
    soundClasses[213] = "Beatboxing";    
    soundClasses[214] = "Rock music";    
    soundClasses[215] = "Heavy metal";    
    soundClasses[216] = "Punk rock";    
    soundClasses[217] = "Grunge";    
    soundClasses[218] = "Progressive rock";    
    soundClasses[219] = "Rock and roll";    
    soundClasses[220] = "Psychedelic rock";    
    soundClasses[221] = "Rhythm and blues";    
    soundClasses[222] = "Soul music";    
    soundClasses[223] = "Reggae";    
    soundClasses[224] = "Country";    
    soundClasses[225] = "Swing music";    
    soundClasses[226] = "Bluegrass";    
    soundClasses[227] = "Funk";    
    soundClasses[228] = "Folk music";    
    soundClasses[229] = "Middle Eastern music";    
    soundClasses[230] = "Jazz";    
    soundClasses[231] = "Disco";    
    soundClasses[232] = "Classical music";    
    soundClasses[233] = "Opera";    
    soundClasses[234] = "Electronic music";    
    soundClasses[235] = "House music";    
    soundClasses[236] = "Techno";    
    soundClasses[237] = "Dubstep";    
    soundClasses[238] = "Drum and bass";    
    soundClasses[239] = "Electronica";    
    soundClasses[240] = "Electronic dance music";    
    soundClasses[241] = "Ambient music";    
    soundClasses[242] = "Trance music";    
    soundClasses[243] = "Music of Latin America";    
    soundClasses[244] = "Salsa music";    
    soundClasses[245] = "Flamenco";    
    soundClasses[246] = "Blues";    
    soundClasses[247] = "Music for children";    
    soundClasses[248] = "New-age music";    
    soundClasses[249] = "Vocal music";    
    soundClasses[250] = "A capella";    
    soundClasses[251] = "Music of Africa";    
    soundClasses[252] = "Afrobeat";    
    soundClasses[253] = "Christian music";    
    soundClasses[254] = "Gospel music";    
    soundClasses[255] = "Music of Asia";    
    soundClasses[256] = "Carnatic music";    
    soundClasses[257] = "Music of Bollywood";    
    soundClasses[258] = "Ska";    
    soundClasses[259] = "Traditional music";    
    soundClasses[260] = "Independent music";    
    soundClasses[261] = "Song";    
    soundClasses[262] = "Background music";    
    soundClasses[263] = "Theme music";    
    soundClasses[264] = "Jingle (music)";    
    soundClasses[265] = "Soundtrack music";    
    soundClasses[266] = "Lullaby";    
    soundClasses[267] = "Video game music";    
    soundClasses[268] = "Christmas music";    
    soundClasses[269] = "Dance music";    
    soundClasses[270] = "Wedding music";    
    soundClasses[271] = "Happy music";    
    soundClasses[272] = "Sad music";    
    soundClasses[273] = "Tender music";    
    soundClasses[274] = "Exciting music";    
    soundClasses[275] = "Angry music";    
    soundClasses[276] = "Scary music";    
    soundClasses[277] = "Wind";    
    soundClasses[278] = "Rustling leaves";    
    soundClasses[279] = "Wind noise (microphone)";    
    soundClasses[280] = "Thunderstorm";    
    soundClasses[281] = "Thunder";    
    soundClasses[282] = "Water";    
    soundClasses[283] = "Rain";    
    soundClasses[284] = "Raindrop";    
    soundClasses[285] = "Rain on surface";    
    soundClasses[286] = "Stream";    
    soundClasses[287] = "Waterfall";    
    soundClasses[288] = "Ocean";    
    soundClasses[289] = ["Waves", "Surf"];    
    soundClasses[290] = "Steam";    
    soundClasses[291] = "Gurgling";    
    soundClasses[292] = "Fire";    
    soundClasses[293] = "Crackle";    
    soundClasses[294] = "Vehicle";    
    soundClasses[295] = ["Boat", "Water vehicle"];    
    soundClasses[296] = ["Sailboat", "Sailing ship"];    
    soundClasses[297] = ["Rowboat", "Canoe", "Kayak"];    
    soundClasses[298] = ["Motorboat", "Speedboat"];    
    soundClasses[299] = "Ship";    
    soundClasses[300] = "Motor vehicle (road)";    
    soundClasses[301] = "Car";    
    soundClasses[302] = ["Vehicle horn", "Car horn", "Honking"];    
    soundClasses[303] = "Toot";    
    soundClasses[304] = "Car alarm";    
    soundClasses[305] = ["Power windows", "Electric windows"];    
    soundClasses[306] = "Skidding";    
    soundClasses[307] = "Tire squeal";    
    soundClasses[308] = "Car passing by";    
    soundClasses[309] = ["Race car", "Auto racing"];    
    soundClasses[310] = "Truck";    
    soundClasses[311] = "Air brake";    
    soundClasses[312] = ["Air horn", "Truck horn"];    
    soundClasses[313] = "Reversing beeps";    
    soundClasses[314] = ["Ice cream truck","Ice cream van"];    
    soundClasses[315] = "Bus";    
    soundClasses[316] = "Emergency vehicle";    
    soundClasses[317] = "Police car (siren)";    
    soundClasses[318] = "Ambulance (siren)";    
    soundClasses[319] = ["Fire engine", "Fire truck (siren)"];    
    soundClasses[320] = "Motorcycle";    
    soundClasses[321] = ["Traffic noise", "Roadway noise"];    
    soundClasses[322] = "Rail transport";    
    soundClasses[323] = "Train";    
    soundClasses[324] = "Train whistle";    
    soundClasses[325] = "Train horn";    
    soundClasses[326] = ["Railroad car", "Train wagon"];    
    soundClasses[327] = "Train wheels squealing";    
    soundClasses[328] = ["Subway, metro", "Underground"];    
    soundClasses[329] = "Aircraft";    
    soundClasses[330] = "Aircraft engine";    
    soundClasses[331] = "Jet engine";    
    soundClasses[332] = ["Propeller", "Airscrew"];    
    soundClasses[333] = "Helicopter";    
    soundClasses[334] = ["Fixed-wing aircraft", "Airplane"];    
    soundClasses[335] = "Bicycle";    
    soundClasses[336] = "Skateboard";    
    soundClasses[337] = "Engine";    
    soundClasses[338] = "Light engine (high frequency)";    
    soundClasses[339] = ["Dental drill", "Dentist's drill"];    
    soundClasses[340] = "Lawn mower";    
    soundClasses[341] = "Chainsaw";    
    soundClasses[342] = "Medium engine (mid frequency)";    
    soundClasses[343] = "Heavy engine (low frequency)";    
    soundClasses[344] = "Engine knocking";    
    soundClasses[345] = "Engine starting";    
    soundClasses[346] = "Idling";    
    soundClasses[347] = ["Accelerating", "Revving", "Vroom"];    
    soundClasses[348] = "Door";    
    soundClasses[349] = "Doorbell";    
    soundClasses[350] = "Ding-dong";    
    soundClasses[351] = "Sliding door";    
    soundClasses[352] = "Slam";    
    soundClasses[353] = "Knock";    
    soundClasses[354] = "Tap";    
    soundClasses[355] = "Squeak";    
    soundClasses[356] = "Cupboard open or close";    
    soundClasses[357] = "Drawer open or close";    
    soundClasses[358] = ["Dishes", "Pots", "Pans"];    
    soundClasses[359] = ["Cutlery", "Silverware"];    
    soundClasses[360] = "Chopping (food)";    
    soundClasses[361] = "Frying (food)";    
    soundClasses[362] = "Microwave oven";    
    soundClasses[363] = "Blender";    
    soundClasses[364] = ["Water tap","Faucet"];    
    soundClasses[365] = "Sink (filling or washing)";    
    soundClasses[366] = "Bathtub (filling or washing)";    
    soundClasses[367] = "Hair dryer";    
    soundClasses[368] = "Toilet flush";    
    soundClasses[369] = "Toothbrush";    
    soundClasses[370] = "Electric toothbrush";    
    soundClasses[371] = "Vacuum cleaner";    
    soundClasses[372] = "Zipper (clothing)";    
    soundClasses[373] = "Keys jangling";    
    soundClasses[374] = "Coin (dropping)";    
    soundClasses[375] = "Scissors";    
    soundClasses[376] = ["Electric shaver", "Electric razor"];    
    soundClasses[377] = "Shuffling cards";    
    soundClasses[378] = "Typing";    
    soundClasses[379] = "Typewriter";    
    soundClasses[380] = "Computer keyboard";    
    soundClasses[381] = "Writing";    
    soundClasses[382] = "Alarm";    
    soundClasses[383] = "Telephone";    
    soundClasses[384] = "Telephone bell ringing";    
    soundClasses[385] = "Ringtone";    
    soundClasses[386] = ["Telephone dialing", "DTMF"];    
    soundClasses[387] = "Dial tone";    
    soundClasses[388] = "Busy signal";    
    soundClasses[389] = "Alarm clock";    
    soundClasses[390] = "Siren";    
    soundClasses[391] = "Civil defense siren";    
    soundClasses[392] = "Buzzer";    
    soundClasses[393] = ["Smoke detector", "Smoke alarm"];    
    soundClasses[394] = "Fire alarm";    
    soundClasses[395] = "Foghorn";    
    soundClasses[396] = "Whistle";    
    soundClasses[397] = "Steam whistle";    
    soundClasses[398] = "Mechanisms";    
    soundClasses[399] = ["Ratchet", "Pawl"];    
    soundClasses[400] = "Clock";    
    soundClasses[401] = "Tick";    
    soundClasses[402] = "Tick-tock";    
    soundClasses[403] = "Gears";    
    soundClasses[404] = "Pulleys";    
    soundClasses[405] = "Sewing machine";    
    soundClasses[406] = "Mechanical fan";    
    soundClasses[407] = "Air conditioning";    
    soundClasses[408] = "Cash register";    
    soundClasses[409] = "Printer";    
    soundClasses[410] = "Camera";    
    soundClasses[411] = "Single-lens reflex camera";    
    soundClasses[412] = "Tools";    
    soundClasses[413] = "Hammer";    
    soundClasses[414] = "Jackhammer";    
    soundClasses[415] = "Sawing";    
    soundClasses[416] = "Filing (rasp)";    
    soundClasses[417] = "Sanding";    
    soundClasses[418] = "Power tool";    
    soundClasses[419] = "Drill";    
    soundClasses[420] = "Explosion";    
    soundClasses[421] = ["Gunshot", "Gunfire"];    
    soundClasses[422] = "Machine gun";    
    soundClasses[423] = "Fusillade";    
    soundClasses[424] = "Artillery fire";    
    soundClasses[425] = "Cap gun";    
    soundClasses[426] = "Fireworks";    
    soundClasses[427] = "Firecracker";    
    soundClasses[428] = ["Burst", "Pop"];    
    soundClasses[429] = "Eruption";    
    soundClasses[430] = "Boom";    
    soundClasses[431] = "Wood";    
    soundClasses[432] = "Chop";    
    soundClasses[433] = "Splinter";    
    soundClasses[434] = "Crack";    
    soundClasses[435] = "Glass";    
    soundClasses[436] = ["Chink", "Clink"];    
    soundClasses[437] = "Shatter";    
    soundClasses[438] = "Liquid";    
    soundClasses[439] = ["Splash", "Splatter"];    
    soundClasses[440] = "Slosh";    
    soundClasses[441] = "Squish";    
    soundClasses[442] = "Drip";    
    soundClasses[443] = "Pour";    
    soundClasses[444] = ["Trickle", "Dribble"];    
    soundClasses[445] = "Gush";    
    soundClasses[446] = "Fill (with liquid)";    
    soundClasses[447] = "Spray";    
    soundClasses[448] = "Pump (liquid)";    
    soundClasses[449] = "Stir";    
    soundClasses[450] = "Boiling";    
    soundClasses[451] = "Sonar";    
    soundClasses[452] = "Arrow";    
    soundClasses[453] = ["Whoosh", "Swoosh", "Swish"];    
    soundClasses[454] = ["Thump", "Thud"];    
    soundClasses[455] = "Thunk";    
    soundClasses[456] = "Electronic tuner";    
    soundClasses[457] = "Effects unit";    
    soundClasses[458] = "Chorus effect";    
    soundClasses[459] = "Basketball bounce";    
    soundClasses[460] = "Bang";    
    soundClasses[461] = ["Slap", "Smack"];    
    soundClasses[462] = ["Whack", "Thwack"];    
    soundClasses[463] = ["Smash", "Crash"];    
    soundClasses[464] = "Breaking";    
    soundClasses[465] = "Bouncing";    
    soundClasses[466] = "Whip";    
    soundClasses[467] = "Flap";    
    soundClasses[468] = "Scratch";    
    soundClasses[469] = "Scrape";    
    soundClasses[470] = "Rub";    
    soundClasses[471] = "Roll";    
    soundClasses[472] = "Crushing";    
    soundClasses[473] = ["Crumpling", "Crinkling"];    
    soundClasses[474] = "Tearing";    
    soundClasses[475] = ["Beep", "Bleep"];    
    soundClasses[476] = "Ping";    
    soundClasses[477] = "Ding";    
    soundClasses[478] = "Clang";    
    soundClasses[479] = "Squeal";    
    soundClasses[480] = "Creak";    
    soundClasses[481] = "Rustle";    
    soundClasses[482] = "Whir";    
    soundClasses[483] = "Clatter";    
    soundClasses[484] = "Sizzle";    
    soundClasses[485] = "Clicking";    
    soundClasses[486] = "Clickety-clack";    
    soundClasses[487] = "Rumble";    
    soundClasses[488] = "Plop";    
    soundClasses[489] = ["Jingle", "Tinkle"];   
    soundClasses[490] = "Hum";    
    soundClasses[491] = "Zing";    
    soundClasses[492] = "Boing";    
    soundClasses[493] = "Crunch";    
    soundClasses[494] = "Silence";    
    soundClasses[495] = "Sine wave";    
    soundClasses[496] = "Harmonic";    
    soundClasses[497] = "Chirp tone";    
    soundClasses[498] = "Sound effect";    
    soundClasses[499] = "Pulse";    
    soundClasses[500] = ["Inside", "Small room"];    
    soundClasses[501] = ["Inside", "Large room", "Hall"];    
    soundClasses[502] = ["Inside", "Public space"];    
    soundClasses[503] = ["Outside", "Urban", "Manmade"];    
    soundClasses[504] = ["Outside", "Rural", "Natural"];    
    soundClasses[505] = "Reverberation";    
    soundClasses[506] = "Echo";    
    soundClasses[507] = "Noise";    
    soundClasses[508] = "Environmental noise";    
    soundClasses[509] = "Static";    
    soundClasses[510] = "Mains hum";    
    soundClasses[511] = "Distortion";    
    soundClasses[512] = "Sidetone";    
    soundClasses[513] = "Cacophony";    
    soundClasses[514] = "White noise";    
    soundClasses[515] = "Pink noise";    
    soundClasses[516] = "Throbbing";    
    soundClasses[517] = "Vibration";    
    soundClasses[518] = "Television";    
    soundClasses[519] = "Radio";    
    soundClasses[520] = "Field recording";
    
    return soundClasses[classIndex];
}
