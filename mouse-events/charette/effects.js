	
	var nextClicked = 0;
	var currentNextClicked = nextClicked;
 
	$(document).ready(function() {
		$('*').on('click', function(event) {
			console.log(event);
		});

		$('#btn').click(function() {
            
            $( "#btn" ).fadeOut();
			currentNextClicked = nextClicked;
            nextClicked = currentNextClicked + 1;
            
			foo();
            
            if (nextClicked < 101) {
                $("#total").fadeOut(function () {
                $('#total').text(parseInt($('#total').text()) + parseInt($('#btn').data('amount'))).fadeIn();
                });
                $( "#btn" ).fadeIn();
            }
            
		});
		
	});
		
	// circle shape change
	function borderRadius(radius) {
		return {
			borderTopLeftRadius: radius,
			borderTopRightRadius: radius,
			borderBottomLeftRadius: radius,
			borderBottomRightRadius: radius,
		};
	}

	//Events
	function foo(){

        // alert
		if(nextClicked == 1){
			alert("Click me again");
		}
        
        // show number counter
        if(nextClicked == 2){
            $('#firsttext').css('display', 'inline-flex');
        }
        
        // number counter
        if(nextClicked == 3){
            $('#firsttext').numerator({
                easing: 'linear', // easing options.
                duration: 1000, // the length of the animation.
                delimiter: ',',
                rounding: 2, // decimal places.
                toValue: 10 // animate to this value.
            });
		}
        
        // change text
        if(nextClicked == 4){
            $('#firsttext').text("Hello World");
		}
        
        // change text color
        if(nextClicked == 5){
            $('.numberCount').css('color', 'black');
		}
        
        // add border
        if(nextClicked == 5){
            $('.numberCount').css('font-style', 'italic');
		}

        // bigger text
        if(nextClicked == 6){
            $('.numberCount').css('font-style', 'normal');
            $('.numberCount').css('font-size', '80px');
		}
        
        // smaller text
        if(nextClicked == 7){
            $('.numberCount').css('font-size', '20px');
		}
        
        // change text spacing
        if(nextClicked == 8){
            $('.numberCount').css('letter-spacing', '0.8em');
		}
        
        // change text style
        if(nextClicked == 9){
            $('.numberCount').css('letter-spacing', '0em');
            $('.numberCount').css('font-family', 'monospace');
            $('.numberCount').css('font-size', '40px');
		}
        
        // add text-decoration
        if(nextClicked == 10){
            $('.numberCount').css('font-family', 'sans-serif');
            $('.numberCount').css('text-decoration', 'line-through');
		}
        
        // text flash
        if(nextClicked == 11){
            $('.numberCount').css('text-decoration', 'none');
            $('#firsttext').css('color', 'pink');
            $('#firsttext').flashMe({ transition: 300 });
		}
        
        // text and background flash
        if(nextClicked == 12){
            $('#flash').flashMe({ backgroundColors: "surprise", transition: 100 });
            $('#firsttext').flashMe({ transition: 500 });
		}

        // text shift
        if(nextClicked == 13){
            $('#flash').remove();
            $('#firsttext').shiftLetters();
            $('#secondtext').text("Hello World");
		}
        
        // change text
        if(nextClicked == 14){
            $('#firsttext').remove();
            $('#secondtext').css('display', 'inline-flex');
            $('.numberCount').css('font-weight', '300');
            $('#secondtext').flashMe({ transition: 100 });
		}
        
        // text shuffle
        if(nextClicked == 15){
            $('#secondtext').text("Click here");
            $('#secondtext').textShuffle({animationSpeed: 50, bindEvent: 'click'});
		}
        
        // text typing
        if(nextClicked == 16){
            $('#secondtext').remove();
            $('#thirdtext').css('display', 'inline-flex');
            $('#thirdtext').animatext();
		}
        
        // text change
        if(nextClicked == 17){
            $('#thirdtext').remove();
            $('#fourthtext').css('display', 'inline-flex');
            var $element = $('#fourthtext');
                bubbleText({
                  element: $element,
                  newText: 'World: "Hello?"',
                });
		}

        // text change
        if(nextClicked == 18){
            $('#fourthtext').remove();
            $('#fifthtext').css('display', 'inline-flex');
            myWords = ["Hello!", "World!", "82!", "More!", "To!", "Go!"];
            $("#fifthtext").cycleText(myWords,{
                fadeInSpeed: 300,
                displayDuration: 600,
                fadeOutSpeed: 300,
                delay: 200
              });
		}
        
        // text change
        if(nextClicked == 19){
            $('#fourthtext').remove();
            $('#fifthtext').css('display', 'inline-flex');
            myWords = ["Hello!", "World!", "82!", "More!", "To!", "Go!"];
            $("#fifthtext").rotate({ count:99999, forceJS:true });
		}
        
        // text change
        if(nextClicked == 20){
            $('#fifthtext').remove();
            $('#sixthtext').css('display', 'inline-flex');
            $('#sixthtext').flashMe({ transition: 100 });
            $('#sixthtext').justFlipIt({Click: true});
		}
        
        // text change
        if(nextClicked == 21){
            $('.panel').remove();
            $('#seventhtext').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#seventhtext p')
                .fitText(0.5)
                .textillate({ in: { effect: 'flash' }});
            });
		}

        // text change
        if(nextClicked == 22){
            $('#seventhtext').remove();
            $('#1').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#1 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'bounce' }});
            });
		}

        // text change
        if(nextClicked == 23){
            $('#1').remove();
            $('#2').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#2 p')
                .textillate({ in: { effect: 'shake' }});
            });
            $('#2').css('font-color', 'red');
            $('#2').css('font-size', '100px');
		}
        
        // text change
        if(nextClicked == 24){
            $('#2').remove();
            $('#3').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#3 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'tada' }});
            });
            $('#3').flashMe({ transition: 100 });
		}
        
        // text change
        if(nextClicked == 25){
            $('#3').remove();
            $('#4').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#4 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'swing' }});
            });
            $('#4').css('font-weight', '900');
            $('#4').css('font-size', '130px');
		}
        
        // text change
        if(nextClicked == 26){
            $('#4').remove();
            $('#5').css('display', 'inline-flex');
            $('#5').flashMe({ transition: 100 });
            $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#5 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'wobble' }});
            });
            $("#5").animate({right: "+=100"}, 500);
		}

        // text change
        if(nextClicked == 27){
            $('#5').remove();
            $('#6').css('display', 'inline-flex');
            $('#6').css('font-size', '200px');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#6 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'pulse' }});
            });
			$("#6").animate({left: "+=100", top:"+=200"}, 500);
		}
        
        // text change
        if(nextClicked == 28){
            $('#6').remove();
            $('#7').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#7 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'flip' }});
            });
		}
        
        // text change
        if(nextClicked == 29){
            $('#7').remove();
            $('#8').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#8 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'flipInX' }});
            });
		}
        
        // text change
        if(nextClicked == 30){
            $('#8').remove();
            $('#9').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#9 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'flipOutX' }});
            });
            $("#5").animate({top: "+=100"}, 300);
		}
        
        // text change
        if(nextClicked == 31){
            $('#9').remove();
            $('#10').css('display', 'inline-flex');
            $('#10').css('opacity', '0.4');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#10 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'flipInY' }});
            });
		}
        
        // text change
        if(nextClicked == 32){
            $('#10').remove();
            $('#11').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#11 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'flipOutY' }});
            });
            $("#11").animate({right: "+=100"}, 800);
		}
        
        // text change
        if(nextClicked == 33){
            $('#11').remove();
            $('#12').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#12 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeIn' }});
            });
            $('#12').css('font-weight', '900');
            $('#12').css('font-size', '90px');
		}
        
        // text change
        if(nextClicked == 34){
            $('#12').remove();
            $('#13').css('display', 'inline-flex');
            $('#13').css('color', 'green');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#13 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeInUp' }});
            });
            $("#13").animate({right: "+=200", top:"+=50"}, 500);
		}
        
        // text change
        if(nextClicked == 35){
            $('#13').remove();
            $('#14').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#14 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeInDown' }});
            });
		}
        
        // text change
        if(nextClicked == 36){
            $('#14').remove();
            $('#15').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#15 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeInLeft' }});
            });
            $("#15").animate({left: "+=200", top:"+=250"}, 900);
		}
        
        // text change
        if(nextClicked == 37){
            $('#15').remove();
            $('#16').css('display', 'inline-flex');
            $('#16').css('color', 'red');
            $('#16').css('font-size', '30px');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#16 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeInRight' }});
            });
		}
        
        // text change
        if(nextClicked == 38){
            $('#16').remove();
            $('#17').css('display', 'inline-flex');
            $('#17').css('letter-spacing', '0.5em');
            $('#17').css('font-size', '30px');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#17 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeInUpBig' }});
            });
		}
        
        // text change
        if(nextClicked == 39){
            $('#17').remove();
            $('#18').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#18 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeInDownBig' }});
            });
		}
        
        // text change
        if(nextClicked == 40){
            $('#18').remove();
            $('#19').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#19 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeInLeftBig' }});
            });
            $("#13").animate({left: "+=200", bottom:"+=150"}, 900);
		}
        
        // text change
        if(nextClicked == 41){
            $('#19').remove();
            $('#20').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#20 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeInRightBig' }});
            });
            $('#20').flashMe({ transition: 50 }); 
		}
        
        // text change
        if(nextClicked == 42){
            $('#20').remove();
            $('#21').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#21 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeOut' }});
            });
		}
        
        // text change
        if(nextClicked == 43){
            $('#21').remove();
            $('#22').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#22 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeOutUp' }});
            });
            $("#22").animate({right: "+=300", bottom:"+=50"}, 700);
		}
        
        // text change
        if(nextClicked == 44){
            $('#22').remove();
            $('#23').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#23 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeOutDown' }});
            });
		}
        
        // text change
        if(nextClicked == 45){
            $('#23').remove();
            $('#24').flashMe({ transition: 300 });
            $('#24').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#24 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeOutLeft' }});
            }); 
		}
        
        // text change
        if(nextClicked == 46){
            $('#24').remove();
            $('#25').css('display', 'inline-flex');
            $('#25').flashMe({ transition: 20 });
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#25 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'fadeOutRight' }});
            });
		}
        
        // text change
        if(nextClicked == 47){
            $('#25').remove();
            $('#26').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#26 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'bounceIn' }});
            });
		}
        
        // text change
        if(nextClicked == 48){
            $('#26').remove();
            $('#27').css('display', 'inline-flex');
            $('#27').flashMe({ transition: 90 });
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#27 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'bounceInDown' }});
            });
		}
        
        // text change
        if(nextClicked == 49){
            $('#27').remove();
            $('#28').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#28 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'bounceInUp' }});
            });
		}
        
        // text change
        if(nextClicked == 50){
            $('#28').remove();
            $('#29').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#29 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'bounceInLeft' }});
            });
		}
        
        // text change
        if(nextClicked == 51){
            $('#29').remove();
            $('#30').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#30 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'bounceOut' }});
            });
		}
        
        // text change
        if(nextClicked == 52){
            $('#30').remove();
            $('#31').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#31 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'bounceOutDown' }});
            });
            $("#31").animate({right: "+=80", top:"+=150"}, 700);
		}
        
        // text change
        if(nextClicked == 53){
            $('#31').remove();
            $('#32').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#32 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'rotateIn' }});
            });
		}
        
        // text change
        if(nextClicked == 54){
            $('#32').remove();
            $('#33').css('display', 'inline-flex');
            $('#33').css('font-size', '100px');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#33 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'rotateInDownRight' }});
            });
		}
        
        // text change
        if(nextClicked == 55){
            $('#33').remove();
            $('#34').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#34 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'rotateOut' }});
            });
            $("#34").animate({left: "+=200", bottom:"+=50"}, 700);
		}
        
        // text change
        if(nextClicked == 56){
            $('#34').remove();
            $('#35').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#35 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'rotateOutUpLeft' }});
            });
		}
        
         // text change
        if(nextClicked == 57){
            $('#35').remove();
            $('#36').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#36 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'hinge' }});
            });
		}
        
         // text change
        if(nextClicked == 58){
            $('#36').remove();
            $('#37').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#37 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'rollIn' }});
            });
            $("#37").animate({left: "+=200"}, 500);
		}
        
         // text change
        if(nextClicked == 59){
            $('#37').remove();
            $('#38').css('display', 'inline-flex');
             $(function (){
                var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
            $('#38 p')
                .fitText(0.5)
                .textillate({ in: { effect: 'rollOut' }});
            });
		}
        
        // change background color
        if(nextClicked == 60){
            $('#38').remove();
			$('html').css('background-color', 'yellow');
		}

        // show shape
		if(nextClicked == 61){
            $('html').css('background-color', 'white');
            $('#div1').css('display', 'flex');
		}
        
		// show shape
		if(nextClicked == 62){
			$('#div1').css('border', 'solid red 5px');
		}
		
		// change shape color
		if(nextClicked == 63){
            $('#div1').css('border', '0px');
			$('#div1').css('background','linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)');
		}
		
        // make shape bigger
		if(nextClicked == 64){
          $('#div1').css('width','250px');
			$('#div1').css('height','250px');
		}
        
        // make shape smaller
		if(nextClicked == 65){
			$('#div1').css('width','50px');
			$('#div1').css('height','50px');
		}
        
		// move shape
		if(nextClicked == 66){
			$("#div1").animate({left: "+=700"}, 1000);
		}
		
		// rotate shape
		if(nextClicked == 67){
			$('#div1').rotate({ count:99999, forceJS:true });	
		}
        
        // stop rotating
		if(nextClicked == 68){
			$('#div1').stop();
		}
        
		// more rotate
		if(nextClicked == 69){
			$('#div1').rotate({ count:1, easing:'ease-in', animate:{ right:300 } }).fadeTo(200, 0.1).fadeTo(100, 1).delay(100).rotate({ endDeg:-360, count:1, easing:'ease-out', animate:{ left:20 } });
		}
		
		// change to circle
		if(nextClicked == 70){
			$('#div1').animate(borderRadius(300), 500);
			$('#div1').css('background','linear-gradient(141deg, #f857a6 0%, #ff5858 75%)');
		}
		
		// bounce
		if(nextClicked == 71){
			$('#div1').effect( "bounce", {times:3}, {distance:40}, 5000 );
			$('#div1').css('background','linear-gradient(141deg, #4b6cb7 0%, #182848 100%)');
		}
		
		// disappear
		if(nextClicked == 72){
			$( "#div1" ).animate({
				width: "0px",
				height: "0px",
				opacity: 0,
			}, 1000 );
		}
        
        //show more shapes
		if(nextClicked == 73){
			$('#div2').css('display', 'inline-flex');
            $('#div3').css('display', 'inline-flex');
            $('#div4').css('display', 'inline-flex');
            $('#div5').css('display', 'inline-flex');
		}

        //change shape color
		if(nextClicked == 74){
            $('#div2').css('opacity', '1');
            $('#div3').css('opacity', '1');
            $('#div4').css('opacity', '1');
            $('#div5').css('opacity', '1');
			$('#div2').css('background','linear-gradient(141deg, #50C9C3 0%, #96DEDA 100%)');
            $('#div3').css('background','linear-gradient(141deg, #c21500 0%, #ffc500 100%)');
            $('#div4').css('background','linear-gradient(141deg, #EFEFBB 0%, #D4D3DD 100%)');
            $('#div5').css('background','linear-gradient(141deg, #DE6262 0%, #FFB88C 100%)');
		}
        
        //add texts
		if(nextClicked == 75){
            $('.div-s').css('display', 'inline-block');
		}
        
        //change opacity
		if(nextClicked == 76){
			$('#div2').css('opacity', '0.6');
            $('#div3').css('opacity', '0.4');
            $('#div4').css('opacity', '0.7');
            $('#div5').css('opacity', '0.5');
		}
        
        //move boxes
		if(nextClicked == 77){
            $('#div2').css('opacity', '1');
            $('#div3').css('opacity', '1');
            $('#div4').css('opacity', '1');
            $('#div5').css('opacity', '1');
            var b1 = $('#div2');
            var b2 = $('#div3');
            var b3 = $('#div4');
            var b4 = $('#div5'); 
            var p1 = new waterFloat(b1,900,3,12);
            var p2 = new waterFloat(b2,700,3,8);
            var p3 = new waterFloat(b3,800,3,10);
            var p4 = new waterFloat(b4,500,3,8);
		}
        
        //move shapes
		if(nextClicked == 78){
            $('#div2').css('background','linear-gradient(141deg, #e43a15 0%, #e65245 100%)');
            $('#div3').css('background','linear-gradient(141deg, #d53369 0%, #cbad6d 100%)');
            $('#div4').css('background','linear-gradient(141deg, #f857a6 0%, #ff5858 100%)');
            $('#div5').css('background','linear-gradient(141deg, #FC354C 0%, #0ABFBC 100%)');
            $("#div2").animate({left: "+=300", top:"-=150"}, 800);
            $("#div3").animate({top: "+=100"}, 1000);
            $("#div4").animate({bottom: "+=100", left: "+=150"}, 400);
            $("#div5").animate({right: "+=100", top:"+=200"}, 600);
		}
        
        // rotate shapes
		if(nextClicked == 79){
			$('#div2').rotate({ count:99999, forceJS:true });
            $('#div3').rotate({ count:99999, forceJS:true });
            $('#div4').rotate({ count:99999, forceJS:true });
            $('#div5').rotate({ count:99999, forceJS:true });	
		}
        
        //stop rotate and hide text
        if(nextClicked == 80){
			$('#div2').stop();
            $('#div3').stop();
            $('#div4').stop();
            $('#div5').stop();
            $('.div-s').css('display', 'none');
            $( "#div2" ).animate({
				width: "0px",
				height: "0px",
				opacity: 0,
			}, 1000 );
            $( "#div3" ).animate({
				width: "0px",
				height: "0px",
				opacity: 0,
			}, 1000 );
            $( "#div4" ).animate({
				width: "0px",
				height: "0px",
				opacity: 0,
			}, 1000 );
            $( "#div5" ).animate({
				width: "0px",
				height: "0px",
				opacity: 0,
			}, 1000 );
		}
        
        // ripple
		if(nextClicked == 81){
            $('#shapecontainer').css('display', 'none');
            $('#btn-clickMe:hover').css('background-color', 'hsla(0, 0%, 90%, 0.4)');
            $('#clickAnywhere').css('display', 'inline-block');
            $('#btn').val('Next');
            $('#ripple1').css('display', 'flex');
            $('html').css('background-color', 'black');
            $('#currentNumber').css('color','white');
            $('.btn-clickMe').css('color','white');
            $('.btn-clickMe').css('border', 'solid white 3px');
			$('#ripple1').ripples({
                // Image Url
                imageUrl: null,
                
                // The width and height of the WebGL texture to render to. 
                // The larger this value, the smoother the rendering and the slower the ripples will propagate.
                resolution: 256,
                
                // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
                dropRadius: 20,
                
                // Basically the amount of refraction caused by a ripple. 
                // 0 means there is no refraction.
                perturbance: 0.09,
                
                // Whether mouse clicks and mouse movement triggers the effect.
                interactive: true,
                
                // The crossOrigin attribute to use for the affected image. 
                crossOrigin: ''
            });
		}
        
        // destroy the ripple plugin and create bubbles
        if(nextClicked == 82){
			$('#ripple1').ripples('destroy');
            $('#ripple1').clickBubble();
            $('#ripple1').clickBubble({
              // color
              color: '#ffffff',
              // size in pixels
              size: 40,
              // animation speed in ms
              time: 400,
              // border width
              borderWidth: 2  
            });
		}

        // different ripples
        if(nextClicked == 83){
            $("#ripple1").removeClass("clickBubble");
            $('#ripple1').css('display', 'none');
            $('#ripple2').css('display', 'flex');
            $('#ripple2').yarp({
                // Colors to be used randomly
                colors: ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple'],
                duration: 550
            });
		}
        
        // waterwaves
        if(nextClicked == 84){
            $('#btn').val('Click Me');
            $('#ripple2').css('display', 'none');
            $('#waterwave').css('display', 'block');
            $('#clickAnywhere').css('display', 'none');
            $("#waterwave").waterwave({
            
                // parent container
                parent : '',
                // color of waves
                color : '#24C6DC',
                // or 'down'
                direction: 'up',
                // background color
                background: ''
            });

		}
        
         // waterwaves change
        if(nextClicked == 85){
            $('#ripple2').css('display', 'none');
            $('#clickAnywhere').css('display', 'none');
            $('#waterwave').css('display', 'block');
            $('#waterwave').css('height', '120%');
            $('#waterwave').css('background', 'linear-gradient(0deg, #283048 0%, #859398 100%)');
            $("#waterwave").waterwave({
                // parent container
                parent : '',
                // color of waves
                color : '#FC354C',
                // or 'down'
                direction: 'down',
                // background color
                background: ''
            });
		}

        // psycar
        if(nextClicked == 86){
            $('#waterwave').css('display', 'none');
            $('#psycar').css('display', 'block');
            $('#psycar').psycar({
                time_interval_ms  : 90,
                cSpeed            : 40 ,
                cAmplitude        : 10,
                cDeformation      : 2,
                backColor         : '#FEC657',
                isBezier           : 'true'
            });
		}
        
        //flurry
        if(nextClicked == 87){
            $('#flurry').css('display', 'block');
            $('#psycar').css('display', 'none');
            $('#flurry').flurry({
                character: "❄",
                color: "white",
                frequency: 100,
                speed: 3000,
                small: 8,
                large: 28,
                wind: 40,
                windVariance: 20,
                rotation: 90,
                rotationVariance: 180,
                startOpacity: 1,
                endOpacity: 0,
                opacityEasing: "cubic-bezier(1,.3,.6,.74)",
                blur: true,
                overflow: "hidden",
                zIndex: 9999
              });
		}
        
        // particles
        if(nextClicked == 88){
            $('#flurry').css('display', 'none');
            $('#particles').css('display', 'block');
            
            $('#particles').particles({
                maxParticles: 150,
                size: 4,
                speed: 0.7,
                color: '#FFFFFF',
                minDist: 140,
                connectParticles: true
            });
		}

        // stars 
        if(nextClicked == 89){
            $('#particles').css('display', 'none');
            $('#stars').css('display', 'block');      
            $('#stars').celebrate({unicode: '\u2B50', color: 'gold', particles: 30});
		}
        
        // random stars
        if(nextClicked == 90){
            $('#stars').celebrate({unicode: '\u2605', color: 'gold', particles:3}).celebrate({unicode: '\u2618', color: 'green', particles: 3}).celebrate({unicode: '\u2665', color: 'purple', particles: 3});
            $('#stars').celebrate({unicode: '\u2605', color: 'gold', particles:8}).celebrate({unicode: '\u2618', color: 'green', particles: 8}).celebrate({unicode: '\u2665', color: 'purple', particles: 8});
        }
        
        // fireworks
        if(nextClicked == 91){
            $('#stars').css('display', 'none');
            $('#fireworks').css('display', 'block');
            $('#fireworks').fireworks({ 
                sound: false, // sound effect
                opacity: 0.9, 
                width: '100%', 
                height: '100%' 
              });
		}
        
        // background lines
        if(nextClicked == 92){
            $('#fireworks').remove();
            $('#lines').css('display', 'block');
            $('#lines').fancyBackground({
                colors : ['#07579c', '#62285a', '#e9b908', '#43af46', '#ee3427', '#00928d']
            });
		}
        
        //
        if(nextClicked == 93){
            $('#lines').remove();
            $('#image').css('display', 'block');
            $('#image').explode();
		}
        
        //
        if(nextClicked == 94){
            $('#image').remove();
            $('#image2').css('display', 'block');
            $('#image2').css('filter', 'grayscale(100%)');
		}
        
        //
        if(nextClicked == 95){
            $('#image2').css('filter', 'brightness(250%)');
		}
        
        //
        if(nextClicked == 96){
            $('#image2').css('filter', 'contrast(280%)');
		}
    
        //
        if(nextClicked == 97){
            $('#image2').css('filter', 'hue-rotate(180deg)');
		}
        
        //
        if(nextClicked == 98){
            $('#image2').css('filter', 'invert(100%)');
		}
        
        //
        if(nextClicked == 99){
            $('#image2').css('filter', 'sepia(100%)');
		}
        
        //
        if(nextClicked == 100){
            $('#image2').css('filter', 'blur(20px)');
		}
        
        if(nextClicked == 101){
            $('#btn').val("Done");
            alert("Done!");
            window.close();
		}

        return true;
    }
	
	/*
	jQuery-Rotate-Plugin v0.2 by anatol.at
	http://jsfiddle.net/Anatol/T6kDR/
	*/
	$.fn.rotate=function(options) {
	  var $this=$(this), prefixes, opts, wait4css=0;
	  prefixes=['-Webkit-', '-Moz-', '-O-', '-ms-', ''];
	  opts=$.extend({
		startDeg: false,
		endDeg: 360,
		duration: 1,
		count: 1,
		easing: 'linear',
		animate: {},
		forceJS: false
	  }, options);
	
	  function supports(prop) {
		var can=false, style=document.createElement('div').style;
		$.each(prefixes, function(i, prefix) {
		  if (style[prefix.replace(/\-/g, '')+prop]==='') {
			can=true;
		  }
		});
		return can;
	  }
	
	  function prefixed(prop, value) {
		var css={};
		if (!supports.transform) {
		  return css;
		}
		$.each(prefixes, function(i, prefix) {
		  css[prefix.toLowerCase()+prop]=value || '';
		});
		return css;
	  }
	
	  function generateFilter(deg) {
		var rot, cos, sin, matrix;
		if (supports.transform) {
		  return '';
		}
		rot=deg>=0 ? Math.PI*deg/180 : Math.PI*(360+deg)/180;
		cos=Math.cos(rot);
		sin=Math.sin(rot);
		matrix='M11='+cos+',M12='+(-sin)+',M21='+sin+',M22='+cos+',SizingMethod="auto expand"';
		return 'progid:DXImageTransform.Microsoft.Matrix('+matrix+')';
	  }
	
	  supports.transform=supports('Transform');
	  supports.transition=supports('Transition');
	
	  opts.endDeg*=opts.count;
	  opts.duration*=opts.count;
	
	  if (supports.transition && !opts.forceJS) { // CSS-Transition
		if ((/Firefox/).test(navigator.userAgent)) {
		  wait4css=(!options||!options.animate)&&(opts.startDeg===false||opts.startDeg>=0)?0:25;
		}
		$this.queue(function(next) {
		  if (opts.startDeg!==false) {
			$this.css(prefixed('transform', 'rotate('+opts.startDeg+'deg)'));
		  }
		  setTimeout(function() {
			$this
			  .css(prefixed('transition', 'all '+opts.duration+'s '+opts.easing))
			  .css(prefixed('transform', 'rotate('+opts.endDeg+'deg)'))
			  .css(opts.animate);
		  }, wait4css);
	
		  setTimeout(function() {
			$this.css(prefixed('transition'));
			if (!opts.persist) {
			  $this.css(prefixed('transform'));
			}
			next();
		  }, (opts.duration*1000)-wait4css);
		});
	
	  } else { // JavaScript-Animation + filter
		if (opts.startDeg===false) {
		  opts.startDeg=$this.data('rotated') || 0;
		}
		opts.animate.perc=100;
	
		$this.animate(opts.animate, {
		  duration: opts.duration*1000,
		  easing: $.easing[opts.easing] ? opts.easing : '',
		  step: function(perc, fx) {
			var deg;
			if (fx.prop==='perc') {
			  deg=opts.startDeg+(opts.endDeg-opts.startDeg)*perc/100;
			  $this
				.css(prefixed('transform', 'rotate('+deg+'deg)'))
				.css('filter', generateFilter(deg));
			}
		  },
		  complete: function() {
			if (opts.persist) {
			  while (opts.endDeg>=360) {
				opts.endDeg-=360;
			  }
			} else {
			  opts.endDeg=0;
			  $this.css(prefixed('transform'));
			}
			$this.css('perc', 0).data('rotated', opts.endDeg);
		  }
		});
	  }
	
	  return $this;
	};
