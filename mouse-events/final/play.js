			var soundFile;
			var fft;		
			var filter, filterFreq, filterRes;
			var song;
			var closebutton = false;
			var randR,randG,randB;

			//sets up canvas
			function setup(fileName,songID) {
			  soundFile = loadSound(fileName);
				console.log(soundFile);
				song = songID;

			  if(fileName !== undefined) {
					closebutton = true;
			  }
				
			  createCanvas(windowWidth, windowHeight);
			  fill(255, 40, 255);
							
			  filter = new p5.LowPass();
			
			  // Disconnect soundfile from master output.
			  // Then, connect it to the filter, so that we only hear the filtered sound
			  soundFile.disconnect();
			  soundFile.connect(filter);
			
			  fft = new p5.FFT();
			}
			
			function windowResized() {
				resizeCanvas(windowWidth, windowHeight);
			}

			function mouseClicked() {
				if (mouseX >= windowWidth-100 && mouseX <= windowWidth && mouseY >= 0 && mouseY <= 50 && closebutton) 
					{
					  document.getElementById("defaultCanvas0").style.display = "none";
				    soundFile.stop();
					}
					
				else {
					if(soundFile.isPlaying()){
							soundFile.stop();
						}
					else {
						soundFile.loop();
					}
				}
			}
			
			//generate random color			
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
					randR = 100 + Math.random()*256;
					randG = 20 + Math.random()*256;
					randB = 200 + Math.random()*256;
				}
				else if (number == 7){
					randR = 100+Math.random()*256;
					randG = 100+Math.random()*256;
					randB = 100+Math.random()*256;
				}
				else if (number == 8){
					randR = Math.random()*10;
					randG = 50 + Math.random()*100;
					randB = 230 + Math.random()*256;
				}
				else if (number == 9){
					randR = 200 + Math.random()*256;
					randG = 200 + Math.random()*26;
					randB = 10 + Math.random()*25;
				}
				else if (number == 10){
					randR = 50 + Math.random()*26;
					randG = 10 + Math.random()*256;
					randB = Math.random()*256;
				}
			}
			
			//draw canvas						
			function draw() {

			  clear();
			  background(0, 0, 0, 120);
			  if(soundFile.isPlaying()){
					fill(256);
					textFont("monospace", 13);
					textAlign(CENTER);
					text("move your cursor", width/2, 30);
			  }
				else {
					colorLoop(7);
					fill(randR, randG, randB);
					textFont("monospace", 13);
					textAlign(CENTER);
					text("Turn up the Volume for the best experience!", width/2, height/2-20);
					text("click anywhere", width/2, height/2+20);
			  }

			  fill(256);
			  textFont("monospace", 13);
			  button = text("back", windowWidth-60, 30);
							   
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
				
				//determines the color schemes for each song
				if (song == 17 ||song == 8 || song==0) {
					colorLoop(1);
				}
				else if (song==26 || song==20 || song==13) {
					colorLoop(2);
				}
				else if (song==30 ||song==23 ||song==21 || song==11 ||song==7) {
					colorLoop(3);
				}
				else if (song==43 || song==34|| song==16||song==6 ||song == 15) {
					colorLoop(4);
				}
				else if (song == 48|| song == 46 || song == 42 || song==39 ||song==35 || song==18|| song==3 ) {
					colorLoop(5);
				}
				else if (song==44 || song==37 || song==29|| song==22||song==19 ||  song==2) {
					colorLoop(6);
				}
				else if (song==32 || song==28 || song==14|| song==12 || song==10) {
					colorLoop(7);
				}
				else if (song == 47 || song== 45 ||song==36 || song==27|| song==1) {
					colorLoop(8);
				}
				else if (song == 49||song==25 || song==9 || song==5) {
					colorLoop(9);
				}
				else if (song==41 || song==40 || song==38 ||song==33 || song==31 || song==24 ||  song==4) {
					colorLoop(10);
				}
				fill(randR, randG, randB);
				rect(x, height, width/spectrum.length, h) ;
			  }

			}