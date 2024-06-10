var swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  zoom: true,
});

var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  zoom: true,
  loop: true,
});

var swiper = new Swiper('.mySwiper3', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
