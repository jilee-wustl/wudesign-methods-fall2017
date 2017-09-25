			var soundFile;
			var fft;		
			var filter, filterFreq, filterRes;
			
			var song;
			
			//function preload(fileName) {
			//  console.log("preload: " + fileName);
			//////  soundFormats('mp3');
			//  soundFile = loadSound(fileName);
			//}
			
			function setup(fileName) {
				soundFile = loadSound(fileName);

			  //console.log("setup: " + fileName);
			
			var width = document.body.clientWidth;
			var height = 800;

			  createCanvas(width, height);
			  fill(255, 40, 255);
			
			  // loop the sound file
			  //soundFile.loop();
			
			  filter = new p5.LowPass();
			
			  // Disconnect soundfile from master output.
			  // Then, connect it to the filter, so that we only hear the filtered sound
			  soundFile.disconnect();
			  soundFile.connect(filter);
			
			  fft = new p5.FFT();
			}
			
			function mouseClicked() {
				//var fs = fullscreen();
				//fullscreen(!fs);
				if(soundFile.isPlaying()){
					soundFile.stop();
				}
				else {
					soundFile.loop();
					//soundFile.play();
				}
			}
			
			var randR,randG,randB;
			
			function colorLoop() {
				randR = Math.random()*256;
				randG = Math.random()*256;
				randB = Math.random()*256;
			}
			
			
			
			function draw() {
			  background(10);
			 
			  // Map mouseX to a the cutoff frequency from the lowest
			  // frequency (10Hz) to the highest (22050Hz) that humans can hear
			  filterFreq = map (mouseX, 0, width, 10, 22050);
			
			  // Map mouseY to resonance (volume boost) at the cutoff frequency
			  filterRes = map(mouseY, 0, height, 15, 5);
			
			  // set filter parameters
			  filter.set(filterFreq, filterRes);
			
			  // Draw every value in the FFT spectrum analysis where
			  // x = lowest (10Hz) to highest (22050Hz) frequencies,
			  // h = energy (amplitude / volume) at that frequency
			  var spectrum = fft.analyze();
			  noStroke();
			  for (var i = 0; i< spectrum.length; i++){
				var x = map(i, 0, spectrum.length, 0, width);
				var h = -height + map(spectrum[i], 0, 255, height, 0);
				colorLoop();
				fill(randR, randG, randB);
				rect(x, height, width/spectrum.length, h) ;
			  }
			
			}    