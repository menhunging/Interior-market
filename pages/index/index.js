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

  if ($(".slider-main").length > 0) {
    let swiper = new Swiper(".slider-main", {
      slidesPerView: 4,
      spaceBetween: 32,

      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return number;
        },
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 16,
        },
        744: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        850: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 32,
          grid: {
            rows: 2,
            fill: "row",
          },
        },
        1441: {
          slidesPerView: 4.68,
          spaceBetween: 32,
          grid: {
            rows: 1,
            fill: "row",
          },
        },
      },
    });
  }

  if ($(".slider-caterogy").length > 0) {
    const sliders = document.querySelectorAll(".slider-caterogy");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 32,
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
              formatFractionCurrent: function (number) {
                return number;
              },
            },
            on: {
              init: function (swiper) {},
              slideChange: function (swiper) {},
            },
            breakpoints: {
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 16,
              },
              744: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              850: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
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
});
