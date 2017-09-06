$(document).ready(function() {
    var num = 0;
            
    $('#btn-generation').click(function() {
        $("body").append($('<div>', {class: 'element'}));      // Append the new elements
	});
	
    $('#btn-manipulation').click(function() {
        $('.element').css('background-color', 'red');
        $('.element').css('height', '50px');
        $('.element').css('width', '50px');
    });
    
    $('#btn-randomization').click(function() {
        var divId = "#" + num;
        
        $("body").append($('<div>', {class:'random', id:num}));      // Append the new elements

        $(divId).css('background-color', getRandomColor());
        $(divId).css('height', getRandomWidthHeight());
        $(divId).css('width', getRandomWidthHeight());
        $(divId).css('opacity', getRandomOpacity());
        
        num++;
        
		});
    
    $('#btn-iteration').click(function() {
        var randomNum = 'random' + num;
        var randomNumId = "#" + randomNum;

        $("body").append($('<div>', {class:'random', id:randomNum}));      // Append the new elements
        
        $(randomNumId).css('background-color', getRandomColor());
        $(randomNumId).animate({
				width: getRandomWidthHeight(),
			}, 1000 );
        $(randomNumId).animate({
				height: getRandomWidthHeight(),
			}, 1000 );
        $(randomNumId).animate({
				opacity: getRandomOpacity(),
			}, 1000 );
        
        num++;    
		});
    
});


function getRandomColor() {
    var letters = '56789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
}

function getRandomWidthHeight() {
    var width = Math.random() * 100;
    return width;
}

function getRandomOpacity() {
    var opacity = Math.random() * 2;
    return opacity;
}
