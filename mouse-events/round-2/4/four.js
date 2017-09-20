$(document).ready(function () {
    var randomDiv = "#" + randomNumber() + "";
    for (var i = 0; i < 12000; i++) {
        var $newdiv = $('<div/>', {
            "class": "divs",
			"id": i,
        });
        $('body').append($newdiv);
    }
    
    $(randomDiv).click(function() {
        $(randomDiv).css('background-color','white');
        $("#info").text("Congratulations!");
	});
});

function randomNumber() {
    var number = Math.floor(Math.random() * 12000);
    return number;
}