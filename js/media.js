let mediaSliderEl = document.querySelector('.media__slider');

if (mediaSliderEl) {
  new Swiper(mediaSliderEl, {
    slidesPerView: 1,
    spaceBetween: 20,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });
};
