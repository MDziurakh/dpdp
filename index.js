const topSwiper = new Swiper(".top-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // autoplay: {
  //   delay: 4000,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const ourTeamSwiper = new Swiper(".our-team__slider", {
  // Optional parameters
  slidesPerView: 2,
  direction: "horizontal",
  loop: true,
  // autoplay: {
  //   delay: 230,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// window.onload = function () {
  const mobileMenu = document.querySelector(".mobile-nav-menu");
  const hamburger = document.querySelector("#hamburger");
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
    document.body.classList.toggle('no-scroll');
  });

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tab.classList.toggle("open");
    });
  });

  
  document.addEventListener("click", documentActions);
  function documentActions(e) {
    const targetElement = e.target;
    if (
      !targetElement.closest(".menu-item") &&
      !targetElement.closest(".mobile-nav-menu") &&
      mobileMenu.classList.contains("open") &&
      !targetElement.closest("#hamburger") &&
      !targetElement.classList.contains("hamburger")
    ) {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
    }
  }
// };
