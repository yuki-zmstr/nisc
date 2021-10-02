$(document).ready(function() {


    // Intro
    $(function() {
        $("body, html").css({ 'overflow': "hidden", height: '100%' })
        setTimeout(function() {
            $("body, html").css({ overflow: 'auto', 'overflow-x': 'hidden', height: 'auto' })
        }, 7500)

        $("#catch")
        .css({"background-image": "linear-gradient(to bottom, rgb(255, 255, 255), rgb(0, 0, 255, 0.2))"})
        .delay(5500)
        .fadeOut(1500)

        $("#line1")
        .delay(1000)
        .css({opacity: 0, "display": "block"})
        .animate({opacity:1}, 1500);

        $("#line2")
        .delay(3500)
        .css({opacity: 0, "display": "block"})
        .animate({opacity:1}, 1500);

        $("#main")
        .delay(7500)
        .css({ opacity: 0.0, visibility: "visible" })
        .animate({ opacity: 1.0 }, 1000)
    });
    

    

    

    

    
});