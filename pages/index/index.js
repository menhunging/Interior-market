$(document).ready(function () {
  if ($(".grettings__slider").length > 0) {
    let swiper = new Swiper(".grettings__slider", {
      slidesPerView: 1,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});
