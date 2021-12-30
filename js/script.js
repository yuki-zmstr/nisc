$(document).ready(function() {
  var wh = $(window).height();


    // $(function() {
    //     $("body, html").css({ 'overflow': "hidden", height: '100%' })
    //     setTimeout(function() {
    //         $("body, html").css({ overflow: 'auto', 'overflow-x': 'hidden', height: 'auto' })
    //     }, 8500)

    //     $("#catch")
    //     .css({"background-image": "linear-gradient(to bottom, rgb(255, 255, 255), rgb(0, 0, 255, 0.2))"})
    //     .delay(6500)
    //     .fadeOut(1500)

    //     $("#line1")
    //     .delay(1000)
    //     .css({opacity: 0, "display": "block"})
    //     .animate({opacity:1}, 1500);

    //     $("#line2")
    //     .delay(2500)
    //     .css({opacity: 0, "display": "block"})
    //     .animate({opacity:1}, 1500);

    //     $("#line3")
    //     .delay(4500)
    //     .css({opacity: 0, "display": "block"})
    //     .animate({opacity:1}, 1500);

    //     $("#main")
    //     .delay(8500)
    //     .css({ opacity: 0.0, visibility: "visible" })
    //     .animate({ opacity: 1.0 }, 1000)
    // });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll > $("#message .img1").offset().top - wh / 1.3) {
        $("#message .img1").css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
      } 

      if (scroll > $("#message .img2").offset().top - wh / 1.3) {
        $("#message .img2").css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
      } 

      if (scroll > $("#c1").offset().top - wh / 1.3) {
        $("#c1").animate({opacity: 1.0}, 800)
      } 
      if (scroll > $("#c2").offset().top - wh / 1.3) {
        $("#c2").animate({opacity: 1.0}, 800)
      } 
      if (scroll > $("#c3").offset().top - wh / 1.3) {
        $("#c3").animate({opacity: 1.0}, 800)
      } 


      $(".col-md-3").each(function() {
          var elemPos = $(this).offset().top;
          if (scroll > elemPos - wh / 1.3) {
              $(this).css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
          }
      });
    
    });

    // top background fade in
    setTimeout(function(){
      $('#intro h3').animate({opacity: 1.0}, 1000)
    }
    ,1000)


    
    // member pop up
    $popup = $('.popup');
    $(document).mousemove(function(){
      $popup.each(function() {
        var $this = $(this)
        var to_pop = "#" + $this.data('name');
        var $to_pop = $(to_pop)
        $this.hover(function(){
          $to_pop.fadeIn(300);
        }, function() {
          $to_pop.fadeOut(300)
        })
      })
    })

    function showhide() {
      var btn = $("#btn-menu i")
      var disabled = $("#btn-menu i").attr("disabled");
      if (typeof disabled == typeof undefined) {
          if (btn.hasClass("fas fa-bars")) {
              btn.removeClass("fas fa-bars");
              btn.addClass("fas fa-times");
          } else {
              btn.removeClass("fas fa-times");
              btn.addClass("fas fa-bars");
          }
          var onPage = $("#phonenav").css("display");
          if (onPage == "none") {
              $("#phonenav").css({ opacity: 0.0, "display": "inline-block" }).animate({ opacity: 1.0}, 500);
              // $(".container-fluid").animate({ opacity: 0.5 }, 500);
              console.log("bar is shown");
          } else {
              $("#phonenav").animate({ opacity: 0.0}, 500);
              // $(".container-fluid").animate({ opacity: 1 }, 500);
              setTimeout(function() {
                  $("#phonenav").css({ "display": "none" })
              }, 500)
              console.log("bar is hidden");
          }
          $(this).attr("disabled", true);
          var that = this;
          setTimeout(function() { $(that).removeAttr("disabled") }, 600);
        }
      console.log('clicked');
    }  
    $("#phonenav li").click(showhide);
    $("#btn-menu i").click(showhide);
      
});