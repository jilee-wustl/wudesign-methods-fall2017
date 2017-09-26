			var soundFile;
			var fft;		
			var filter, filterFreq, filterRes;
			
			var closebutton = false;
			var song;
			
			//function preload(fileName) {
			//  console.log("preload: " + fileName);
			////////  soundFormats('mp3');
			// soundFile = loadSound(fileName);
			//}
			
			function setup(fileName) {
			  soundFile = loadSound(fileName);
			  
			  if(fileName != undefined) {
				closebutton = true;
			  }

			  //console.log("setup: " + fileName);

			  createCanvas(windowWidth, windowHeight);
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
			
			//function startSong() {
			//	soundFile.loop();
			//}
			
			function close() {
				soundFile.stop();

			}
			
			function windowResized() {
				resizeCanvas(windowWidth, windowHeight);
			}

			function mouseClicked() {
				//var fs = fullscreen();
				//fullscreen(!fs);
				
				console.log(windowWidth);
				console.log(mouseX);
				console.log(mouseY);
				if (mouseX >= windowWidth-100 && mouseX <= windowWidth && mouseY >= 0 && mouseY <= 50 && closebutton) 
					{
					  isOverRectangle = true;
					  document.getElementById("defaultCanvas0").style.display = "none";
				      soundFile.stop();
					} else {
					  isOverRectangle = false;
					}
					
				if(soundFile.isPlaying()){
					soundFile.stop();
				}
				else if (isOverRectangle === false) {
					soundFile.loop();
					//soundFile.play();
				}
				
			}
			
			var randR,randG,randB;
			
			function colorLoop(number) {
				if (number == 1){
					randR = 150 + Math.random()*256;
					randG = Math.random()*256;
					randB = Math.random()*256;
				}
				else if (number == 2){
					randR = Math.random()*256;
					randG = 150 + Math.random()*256;
					randB = Math.random()*256;
				}
				else if (number == 3){
					randR = Math.random()*256;
					randG = Math.random()*256;
					randB = 150 + Math.random()*256;
				}
				else if (number == 4){
					randR = 150 + Math.random()*256;
					randG = 50 + Math.random()*256;
					randB = Math.random()*256;
				}
				else if (number == 5){
					randR = Math.random()*256;
					randG = 150 + Math.random()*256;
					randB = 50 + Math.random()*256;
				}
				else if (number == 6){
					randR = 50 + Math.random()*256;
					randG = Math.random()*256;
					randB = 150 + Math.random()*256;
				}
				else if (number == 7){
					randR = 150 + Math.random()*256;
					randG = 150 + Math.random()*256;
					randB = 150 + Math.random()*256;
				}
				else if (number == 8){
					randR = Math.random()*256;
					randG = 50 + Math.random()*256;
					randB = 150 + Math.random()*256;
				}
				else if (number == 9){
					randR = 150 + Math.random()*256;
					randG = Math.random()*256;
					randB = 50 + Math.random()*256;
				}
				else if (number == 10){
					randR = 50 + Math.random()*256;
					randG = 150 + Math.random()*256;
					randB = Math.random()*256;
				}
			}
			
			var isOverRectangle;
						
			function draw() {
			  
			  clear();
			  background(0, 0, 0, 120);
			  if(soundFile.isPlaying()){
				fill(256);
				textFont("monospace", 13);
				text("move your cursor", width/2 - 80, 30);
			  } else {
				colorLoop(7);
				fill(randR, randG, randB);
				textFont("monospace", 13);
				text("click to play", width/2 - 80, height/2);
			  }

			   fill(256);
			  textFont("monospace", 13);
			  button = text("back", windowWidth-60, 30);
			    //rect(windowWidth-80, 20, 50, 30);
							   
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
				colorLoop(1);
				fill(randR, randG, randB);
				rect(x, height, width/spectrum.length, h) ;
			  }

			}
			