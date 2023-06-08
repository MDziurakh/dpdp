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
  // when window width is >= 480px
  slidesPerView: 1,
  breakpoints: {
    560: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const mobileMenu = document.querySelector(".mobile-nav-menu");
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
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

window.onload = function () {
  $(".popup-with-form").magnificPopup({
    type: "inline",
    preloader: false,
    fixedContentPos: true,
    focus: "#name",
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = "#name";
        }
      },
    },
  });
};

// для форми запису.
function getCurrentTime() {
  const dateControl = document.querySelectorAll(".main-form-datetime");
  const today = new Date();
  let tomorrow;
  if (
    today.getDate().toString().length == 1 &&
    today.getDate().toString() != "9"
  ) {
    tomorrow = "0" + (+today.getDate() + 1);
  } else {
    tomorrow = today.getDate().toString();
  }
  dateControl.forEach(
    (field) =>
      (field.value = `${today.toISOString().substring(0, 8) + tomorrow}T14:00`)
  );
}
getCurrentTime();
// для форми запису.
