const swiper = new Swiper(".top-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
