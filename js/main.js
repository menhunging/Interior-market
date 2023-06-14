$(document).ready(function () {
  if ($(".burger").length > 0) {
    $(".burger").on("click", function () {
      $(this).toggleClass("active");
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".js-mobile-open").length > 0) {
    if ($(window).width() < 1024) {
      initFooterAccardeon();
    }
  }

  if ($(".video-section").length > 0) {
    $(".video__btn--full").on("click", function () {
      let elem = $(this).parents(".video").find("video")[0];
      openFullVideo(elem);
    });

    $(".video__btn--volume").on("click", function () {
      let elem = $(this).parents(".video").find("video");
      let isMuted = elem.prop("muted");
      elem.prop("muted", isMuted);
    });

    $(".video__btn--play").on("click", function () {
      let elem = $(this).parents(".video").find("video");

      $(this).toggleClass("paused");
      $(this).hasClass("paused") ? elem.trigger("play") : elem.trigger("pause");
    });
  }

  if ($(".products__slider").length > 0) {
    const sliders = document.querySelectorAll(".products__slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 32,
            on: {
              init: function (swiper) {},
              slideChange: function (swiper) {},
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              350: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              740: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  // ---------------------------------------

  // if ($(".phoneInput").length > 0) {
  //   $(".phoneInput").map(function () {
  //     $(this).inputmask({
  //       mask: "+7(999) 999-99-99",
  //       placeholder: "*",
  //       showMaskOnHover: false,
  //       showMaskOnFocus: true,
  //       clearIncomplete: true,
  //     });
  //   });
  // }

  // if ($(".modal").length > 0) {
  //   MicroModal.init({
  //     openTrigger: "data-modal",
  //     disableScroll: true,
  //     awaitOpenAnimation: true,
  //     awaitCloseAnimation: true,

  //     onShow: () => {
  //       $("body").addClass("modal-open");
  //     },

  //     onClose: () => {
  //       $("body").removeClass("modal-open");
  //     },
  //   });

  //   $("[data-modal]").map(function () {
  //     $(this).click((e) => e.preventDefault());
  //   });
  // }

  // if ($("select").length > 0) {
  //   $("select").map(function () {
  //     $(this).selectric({
  //       onOpen: function (element) {},
  //       onChange: function (element) {},
  //       onClose: function (element) {},
  //     });
  //   });
  // }

  // if ($(".tabs").length > 0) {
  //   $(".tabs").tabslet({
  //     mouseevent: "click",
  //     attribute: "href",
  //     animation: true,
  //   });
  // }

  // if ($(".linkFancyBox").length > 0) {
  //   Fancybox.bind("[data-fancybox]", {
  //     speedIn: 600,
  //     speedOut: 600,
  //   });
  // }
});

$(window).on("resize", function () {
  if ($(".js-mobile-open").length > 0) {
    if ($(window).width() >= 1024) {
      destroyFooterAccardeon();
    } else {
      initFooterAccardeon();
    }
  }
});

function initFooterAccardeon() {
  if (!$(".footer").hasClass("accardeon-initialization")) {
    $(".footer").addClass("accardeon-initialization");
    $(".footer-column__body").stop().slideUp();
    $(".js-mobile-open").removeClass("open");

    $(".js-mobile-open").on("click", function () {
      $(".js-mobile-open").removeClass("open");
      $(".footer-column__body").stop().slideUp();

      $(this)
        .addClass("open")
        .siblings(".footer-column__body")
        .stop()
        .slideToggle();
    });
  }
}

function destroyFooterAccardeon() {
  if ($(".footer").hasClass("accardeon-initialization")) {
    $(".js-mobile-open").off("click").removeClass("open");
    $(".footer-column__body").slideDown();
    $(".footer").removeClass("accardeon-initialization");
  }
}

function openFullVideo(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}
