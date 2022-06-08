// Navigation btn
let navBtn = document.querySelector(".nav-toggle-btn");
let headerM = document.querySelector(".main-header");

navBtn.addEventListener("click", function () {
  headerM.classList.toggle("open-nav");
});
