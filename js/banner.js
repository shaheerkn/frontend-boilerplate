const progressCircle = document.querySelector(".banner .autoplay-progress svg");
const progressContent = document.querySelector(".banner .autoplay-progress span");
const playPausebButton = document.querySelector(".play-pause");

if (progressCircle && progressContent) {
  const bannerSlider = new Swiper(".banner__slider", {
    centeredSlides: true,
    parallax: true,
    speed: 600,
    autoplay: {
      delay: 2000
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

  playPausebButton.addEventListener('click', () => {
    playPausebButton.classList.toggle('play-pause__play')
    playPausebButton.classList.toggle('play-pause__pause')

    if (bannerSlider.autoplay.running) {
      bannerSlider.autoplay.stop();
    } else {
      bannerSlider.autoplay.start();
    }
  });
}
