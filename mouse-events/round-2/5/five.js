$(document).ready(function () {
    var randomDiv = "#" + randomNumber() + "";
    var randomDiv2 = "#" + randomNumber() + "";
    var clicked = false;

    for (var i = 0; i < 8; i++) {
        var $newdiv = $('<div/>', {
            "class": "divs",
			"id": i,
        });
        $('body').append($newdiv);
    }
    
    $('.divs').click(function() {
        $(this).css('background-color', getRandomColor());
        $(this).css({
        opacity: 1,
        display: 'block',     
    }).animate({opacity:0},600);
        
	});
    
    $(randomDiv).click(function() {
        $(this).css('background-color', 'red');
        $(this).css({
        opacity: 0,
        display: 'block',     
    }).animate({opacity:1},600);
        if (clicked) {
            $("#info").text("Done");
        }
        clicked = true;
	});
    
    $(randomDiv2).click(function() {
        $(this).css('background-color', 'red');
        $(this).css({
        opacity: 0,
        display: 'block',     
    }).animate({opacity:1},600);
        if (clicked) {
            $("#info").text("Done");
        }
        clicked = true;
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

function randomNumber() {
    var number = Math.floor(Math.random() * 8);
    return number;
}

