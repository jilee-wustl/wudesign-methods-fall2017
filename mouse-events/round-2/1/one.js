$(document).ready(function () {

    for (var i = 0; i < 50000; i++) {
        var $newdiv = $('<div/>', {
            "class": "divs",
			"id": i,
        });
        $('body').append($newdiv);
    }
	
	$('div').hover(function() {
		$(this).css('background-color', getRandomColor());
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