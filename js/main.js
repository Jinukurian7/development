"use strict";

(function ($) {
  "use strict";

  var emerald = {
    init: function init() {
      this.scrollListner();
      this.slick();
    },
    settings: {
      desktop: 1200,
      tab: 1024,
      mobile: 768,
      scrollClassTrigger: 200,
      windowWidth: $(window).width(),
      windowheight: $(window).height(),
      scrollBarWidth: 0
    },
    slick: function slick() {
      $(".services-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        // infinite: true,
        easing: "easeOutElastic",
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }]
      });
      $(".vacancies-slider").slick({
        dots: false,
        slidesPerRow: 3,
        rows: 2,
        infinite: true,
        arrows: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesPerRow: 2,
            rows: 2
          }
        }, {
          breakpoint: 640,
          settings: {
            slidesPerRow: 1,
            rows: 2
          }
        }]
      });
    },
    resizeListner: function resizeListner() {
      $(window).on("load resize", function () {
        emerald.settings.windowWidth = $(window).width();
      });
    },
    // ScrollListner
    scrollListner: function scrollListner() {
      $(window).on("load scroll", function () {
        if ($(window).scrollTop() > emerald.settings.scrollClassTrigger) {
          $("body").addClass("scrolled");
        } else {
          $("body").removeClass("scrolled");
        }
      });
    }
  };
  emerald.init();
})(jQuery);