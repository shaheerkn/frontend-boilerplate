let testimonialSliderEl = document.querySelector('.testimonial__slider');

if (testimonialSliderEl) {
  new Swiper(testimonialSliderEl, {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });
}