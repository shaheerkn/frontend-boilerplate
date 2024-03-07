const progressCircle = document.querySelector(".banner .autoplay-progress svg");
const progressContent = document.querySelector(".banner .autoplay-progress span");

if (progressCircle && progressContent) {
  new Swiper(".banner__slider", {
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });
}
