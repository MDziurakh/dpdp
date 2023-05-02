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
  const dateControl = document.querySelector("#form-datetime");
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
// getCurrentTime(); для форми запису
