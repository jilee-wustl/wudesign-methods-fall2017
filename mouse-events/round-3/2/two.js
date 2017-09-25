$(document).ready(function () {
        
    for (var i = 0; i < 60; i++) {
        var $newdiv = $('<div/>', {
            "class": "divs",
			"id": i,
            "style" : "background-image: url(" + 1 + ".jpg); display:none;",
        });
        $('body').append($newdiv);
    }
    
    window.onload = fadeImages();

    $('div').mouseover(function() {
		$(this).css('-webkit-filter', "grayscale(0%)");
        $(this).css('filter', "grayscale(0%)");
        $(this).css('opacity', "1");
        $(this).text("play");
        $(this).css('line-height', '150px');
	});
    
    $('div').mouseout(function() {
		$(this).css('-webkit-filter', "grayscale(100%)");
        $(this).css('filter', "grayscale(100%)");
        $(this).css('opacity', "0.75");
        $(this).text("");
	});

    $('div').click(function() {
        $(this).text("clicked");
	});
});


function getRandomColor() {
    var letters = '456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
}

function fadeImages() {
    $('div').fadeTo(300,0.75);
}