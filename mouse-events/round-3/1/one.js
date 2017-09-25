$(document).ready(function () {
    
    for (var i = 0; i < 50; i++) {
        var $newdiv = $('<div/>', {
            "class": "divs",
			"id": i,
            "style" : "background-image: url(" + 1 + ".jpg);",
        });
        $('body').append($newdiv);
    }

           
	$('div').mouseover(function() {
		$(this).css('-webkit-filter', "grayscale(0%)");
        $(this).css('filter', "grayscale(0%)");
        $(this).css('opacity', "1");
	});
    
    $('div').mouseout(function() {
		$(this).css('-webkit-filter', "grayscale(100%)");
        $(this).css('filter', "grayscale(100%)");
        $(this).css('opacity', "0.75");
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