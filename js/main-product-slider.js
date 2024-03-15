let productSlider;
let init = false;

function handleProductSlider() {

  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      productSlider = new Swiper(".main-product__media-wrapper", {
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: true,
      });
    }
  } else if (init) {
    productSlider.destroy();
    init = false;
  }
}

handleProductSlider();
window.addEventListener("resize", handleProductSlider);