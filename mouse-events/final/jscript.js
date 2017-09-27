$(document).ready(function () {
        
    for (var i = 0; i < 50; i++) {
        var $newdiv = $('<div/>', {
            "class": "divs",
			"id": i,
            "style" : "background-image: url(images/" + i + ".jpg); display:none;",
            "val": i,
        });
        $('#songs').append($newdiv);
    }
    
    fadeImages();

    $('.divs').mouseover(function() {
		$(this).css('-webkit-filter', "grayscale(0%)");
        $(this).css('filter', "grayscale(0%)");
        $(this).css('opacity', "1");
        $(this).text("play");
	});
    
    $('.divs').mouseout(function() {
		$(this).css('-webkit-filter', "grayscale(100%)");
        $(this).css('filter', "grayscale(100%)");
        $(this).css('opacity', "0.75");
        $(this).text("");
	});
    
    $('.divs').click(function() {
        var x = $(this).val();
        $('canvas').css('display', 'block');
        $('canvas').css('position', 'fixed');
        f1(x);
    });
});

function fadeImages() {
    $('.divs').fadeTo(1000,0.75);
}