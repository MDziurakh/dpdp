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

// datetime controller
function getCurrentTime() {
  const dateControl = document.querySelector(".main-form-datetime");
  const today = new Date();
  let nextHour = today.getHours() + 1;
  // let minutes = today.getMinutes();
  if (nextHour.toString().length == 1) {
    nextHour = "0" + nextHour;
  }
  // if(minutes.toString().length == 1){
  //   minutes = '0'+minutes;
  // }

  // const time = today.getHours().toString()+today.getMinutes().toString()
  console.dir(nextHour);
  console.log(today.toISOString().substring(0, 10) + "");
  dateControl.min = `${today.toISOString().substring(0, 10) + ""}T14:00`;
}
// getCurrentTime();
// для форми запису.

// window.onload = function () {
  const mobileMenu = document.querySelector(".mobile-nav-menu");
  const hamburger = document.querySelector("#hamburger");
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
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
      mobileMenu.classList.contains("open") &&
      !targetElement.closest(".hamburger") &&
      !targetElement.classList.contains("hamburger")
    ) {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
    }
  
    // if(targetElement.)
  }
// };
