const openNavBtn = document.querySelector("#open-nav-menu");
const closeNavBtn = document.querySelector("#close-nav-menu");
const navWrapper = document.querySelector("header nav .wrapper");

openNavBtn.addEventListener("click", function () {
  navWrapper.classList.add("nav-open");
});

closeNavBtn.addEventListener("click", function () {
  navWrapper.classList.remove("nav-open");
});
