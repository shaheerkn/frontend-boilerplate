let mediaSliderEl = document.querySelector('.media__slider');

if (mediaSliderEl) {
  new Swiper(mediaSliderEl, {
    slidesPerView: 6,
    spaceBetween: 20,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
};
