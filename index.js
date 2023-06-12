const topSwiper = new Swiper(".top-slider", {
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

const ourTeamSwiper = new Swiper(".our-team__slider", {
  // Optional parameters
  slidesPerView: 2,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
  },
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

/////////// для форми запису.
function getCurrentTime() {
  const dateControl = document.querySelectorAll(".main-form-datetime");
  const today = new Date();
  let tomorrow;
  if (today.getDate().toString() == "9") {
    tomorrow = "10";
  } else if (today.getDate().toString().length == 1) {
    tomorrow = "0" + (+today.getDate() + 1);
  } else {
    tomorrow = today.getDate().toString();
  }
  dateControl.forEach(
    (field) =>
      (field.value = `${today.toISOString().substring(0, 8) + tomorrow}T12:00`)
  );
}
getCurrentTime();
/////////////// для форми запису.

///////////// gallery func
const showMoreImagesBtn = document.querySelector(".show-more-images");
const galleryItems = document.querySelectorAll(".gallery__item-outer");
let basicImagesCount = 4;
let currentImagesCount = 4;
if (window.innerWidth < 482) {
  for (let i = basicImagesCount; i < galleryItems.length; i++) {
    galleryItems[i].classList.add("hide");
  }
}

function showMoreImages() {
  currentImagesCount = currentImagesCount + 2;

  for (let i = basicImagesCount; i < currentImagesCount; i++) {
    if (i >= galleryItems.length) {
      showMoreImagesBtn.innerHTML = "Показати менше";
      showMoreImagesBtn.removeEventListener("click", showMoreImages);
      showMoreImagesBtn.addEventListener("click", hideImages);
      return;
    }
    galleryItems[i].classList.remove("hide");
  }
}
function hideImages() {
  currentImagesCount = 4;
  for (let i = basicImagesCount; i < galleryItems.length; i++) {
    galleryItems[i].classList.add("hide");
  }
  showMoreImagesBtn.innerHTML = "Показати ще";
  showMoreImagesBtn.removeEventListener("click", hideImages);
  showMoreImagesBtn.addEventListener("click", showMoreImages);
}

showMoreImagesBtn.addEventListener("click", showMoreImages);
///////////////////////

////////////// sticky block func
const stickyBlock = document.querySelector(".sticky-block");
const stickyBlockOpener = document
  .querySelector(".tel-icon")
  .addEventListener("click", () => {
    stickyBlock.classList.toggle("open");
  });

document.addEventListener("click", documentActions);
function documentActions(e) {
  const targetElement = e.target;
  if (
    stickyBlock.classList.contains('open') &&
    targetElement.closest(".open") && 
    !targetElement.closest(".tel-icon") ||  
    !targetElement.closest(".open") 
    // targetElement.closest(".sticky-tel__container") ||
    // targetElement.closest(".sticky-social-media")
  ) {
    stickyBlock.classList.remove("open");
  }
}

/////////////////
