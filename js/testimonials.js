let testimonialSliderEl = document.querySelector('.testimonial__slider');

if (testimonialSliderEl) {
  new Swiper(testimonialSliderEl, {
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    }
  });
}