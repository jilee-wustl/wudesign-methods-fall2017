$(document).ready(function () {

    for (var i = 0; i < 2000; i++) {
        var $newdiv = $('<div/>', {
            "class": "divs",
			"id": i,
        });
        $('body').append($newdiv);
    }
    
	$('.divs').mouseover(function() {
        var randomImage = "background-image: url(" + randomNumber() +".jpg)";
        
		$(this).css('border', 'solid red 1px');
        var $image = $('<div/>', {
            "class": "image",
            "style": randomImage,
        });
        $('body').append($image);
	});
	
	$('.divs').mouseout(function() {
		$(this).css('border', 'none');
        $('.image').remove();
	});	
});

function randomNumber() {
    return Math.floor(Math.random() * 10);
}