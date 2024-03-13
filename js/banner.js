const bannerSliderEl = document.querySelector(".banner__slider");
const progressCircleEl = document.querySelector(".banner .autoplay-progress svg");
const progressContentEl = document.querySelector(".banner .autoplay-progress span");
const playPauseButtonEl = document.querySelector(".play-pause");

if (bannerSliderEl) {
  const bannerSlider = new Swiper(bannerSliderEl, {
    centeredSlides: true,
    parallax: true,
    // speed: 600,
    // autoplay: {
    //   delay: 2000
    // },
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
        progressCircleEl.style.setProperty("--progress", 1 - progress);
        progressContentEl.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });

  if (playPauseButtonEl) {
    playPauseButtonEl.addEventListener('click', () => {
      playPauseButtonEl.classList.toggle('play-pause__play')
      playPauseButtonEl.classList.toggle('play-pause__pause')

      if (bannerSlider.autoplay.running) {
        bannerSlider.autoplay.stop();
      } else {
        bannerSlider.autoplay.start();
      }
    });
  }
}
