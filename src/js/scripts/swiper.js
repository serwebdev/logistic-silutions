import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

(function () {
  // 1 swiperWhich===================================================================
  const swiperWhich = new Swiper('.which__slider', {
    // modules: [Pagination, Navigation, Scrollbar],

    // Optional parameters
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.15,
        spaceBetween: 15,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      880: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // 1400: {
      //   slidesPerView: 4,
      //   spaceBetween: 30,
      // },
    },
  });

  // Включение слайдера на разрешении экрана 650px
  const widthBody = 650;
  let isEnable = true;

  const mediaQuery = window.matchMedia(`(max-width: ${widthBody}px)`);

  function handlerMediaQuery(e) {
    if (e.matches) {
      if (!isEnable) {
        swiperWhich.enable();
        isEnable = true;
      }
    } else {
      if (isEnable) {
        swiperWhich.disable();
        isEnable = false;
      }
    }
  }

  mediaQuery.addEventListener('change', handlerMediaQuery);
})();

// 2 swiperCompanies----------------------------------------------------
const swiperCompanies = new Swiper('.companies__slider', {
  modules: [Pagination, Navigation, Scrollbar],

  // Optional parameters
  slidesPerView: 3,
  // loop: true,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    420: {
      slidesPerView: 2.4,
      spaceBetween: 20,
    },
    520: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'progressbar',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },
});

// 3 swiperReviews----------------------------------------------------
const swiperReviews = new Swiper('.reviews__slider', {
  modules: [Pagination, Navigation],

  // Optional parameters
  // slidesPerView: 3,
  // loop: true,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.25,
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'progressbar',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ===========================================================================
