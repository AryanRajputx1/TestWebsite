const openNavBtn = document.querySelector("#open-nav-menu");
const closeNavBtn = document.querySelector("#close-nav-menu");
const navWrapper = document.querySelector("header nav .wrapper");

if (openNavBtn && closeNavBtn && navWrapper) {
  openNavBtn.addEventListener("click", function () {
    navWrapper.classList.add("nav-open");
  });

  closeNavBtn.addEventListener("click", function () {
    navWrapper.classList.remove("nav-open");
  });
}

function celiusToFah(temperature) {
  let far = (temperature * 9 / 5) + 32;
  return far;
}

const greetingText = "Good Morning";
const weatherCondition = "Sunny";
const userLocation = "New York";
let temperature = 22.635;

let celciusText = `The weather in ${userLocation} is ${weatherCondition} and it's ${temperature.toFixed(1)}°C outside.`;
let fahrText = `The weather in ${userLocation} is ${weatherCondition} and it's ${celiusToFah(temperature).toFixed(1)}°F outside.`;

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("#weather").innerHTML = celciusText;

document.querySelector(".weather-group").addEventListener("click", function (event) {
  console.log(event.target.id);
  if (event.target.id == "celsius") {
    document.querySelector("#weather").innerHTML = celciusText;
  } else if (event.target.id == "fahr") {
    document.querySelector("#weather").innerHTML = fahrText;
  }
});
