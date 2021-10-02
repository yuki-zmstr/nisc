$(document).ready(function() {
    $("body")
    .css({ overflow: "hidden"})

    $("#catch")
    .css({"background-image": "linear-gradient(to bottom, rgb(255, 255, 255), rgb(0, 0, 255, 0.2))"})
    .delay(5000)
    .fadeOut(1500)

    $("#line1")
    .delay(500)
    .css({opacity: 0, "display": "block"})
    .animate({opacity:1}, 1500);

    $("#line2")
    .delay(3000)
    .css({opacity: 0, "display": "block"})
    .animate({opacity:1}, 1500);

    $("$main")
    .delay(7000)
    .css({ opacity: 0.0, visibility: "visible" })
    .animate({ opacity: 1.0 }, 1000)
});