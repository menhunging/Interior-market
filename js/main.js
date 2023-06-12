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
