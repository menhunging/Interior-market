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

  if ($(".footer").length > 0) {
    if ($(window).width() < 1200) {
      initAccardeon(".footer");
    }
  }

  if ($(".product-info__details").length > 0) {
    initAccardeon(".product-info__details");
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
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
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
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 4,
              },
              1441: {
                slidesPerView: 4.68,
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

  if ($("select").length > 0) {
    $("select").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".catalog-collections").length) {
    initCollection($(".catalog-collections"));
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

$(document).on("fullscreenchange", function (event) {
  document.fullscreenElement
    ? event.target.setAttribute("controls", true)
    : event.target.removeAttribute("controls");
});

$(window).on("resize", function () {
  if ($(".js-head-open").length > 0) {
    if ($(window).width() >= 1199) {
      destroyAccardeon(".footer");
    } else {
      initAccardeon(".footer");
    }
  }

  if ($(".caterogy-title").length) {
    if ($(window).width() < 1200 && !$(".caterogy-title").hasClass("wrap-js")) {
      wrapText("mobile");
    } else {
      wrapText("desktop");
    }
  }
});

function initAccardeon(block) {
  if (!$(block).hasClass("accardeon-initialization")) {
    let content = $(block).find(".js-content");
    let links = $(block).find(".js-head-open");

    $(block).addClass("accardeon-initialization");

    content.stop().slideUp();
    links.removeClass("open");

    links.on("click", function () {
      links.removeClass("open");
      content.stop().slideUp();

      $(this).addClass("open").siblings(".js-content").stop().slideToggle();
    });
  }
}

function destroyAccardeon(block) {
  if ($(block).hasClass("accardeon-initialization")) {
    let content = $(block).find(".js-content");
    let links = $(block).find(".js-head-open");

    links.off("click").removeClass("open");
    content.slideDown();

    $(block).removeClass("accardeon-initialization");
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

function initCollection(block) {
  let minus = block.find(".catalog-collections__more--minus");
  let plus = block.find(".catalog-collections__more--plus");
}

function wrapText(device) {
  let html = $(".caterogy-title").html();
  $(".caterogy-title").remove();

  switch (device) {
    case "mobile":
      $(".caterogy-title").addClass("wrap-js");
      $(".catalog__rightSide").prepend(
        `<div class='caterogy-title'>${html}</div>`
      );
      break;

    case "desktop":
      $(".caterogy-title").removeClass("wrap-js");
      $(".catalog__leftSide").prepend(
        `<div class='caterogy-title'>${html}</div>`
      );
      break;

    default:
      break;
  }
}
