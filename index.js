let aboutTabContainer = document.getElementById("aboutTab");
let timeToVisitTabContainer = document.getElementById("timeToVisitTab");
let attractionsTabContainer = document.getElementById("attractionsTab");
let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");

timeToVisitTabContainer.classList.add("d-none");
attractionsTabContainer.classList.add("d-none");

function aboutVaranasi() {
  aboutButton.classList.add("selected-button");
  timeToVisitButton.classList.remove("selected-button");
  attractionsButton.classList.remove("selected-button");
  aboutTabContainer.classList.remove("d-none");
  timeToVisitTabContainer.classList.add("d-none");
  attractionsTabContainer.classList.add("d-none");
}

function timeToVisitVaranasi() {
  timeToVisitButton.classList.add("selected-button");
  aboutButton.classList.remove("selected-button");
  attractionsButton.classList.remove("selected-button");
  timeToVisitTabContainer.classList.remove("d-none");
  aboutTabContainer.classList.add("d-none");
  attractionsTabContainer.classList.add("d-none");
}

function attractionsInVaranasi() {
  timeToVisitButton.classList.remove("selected-button");
  aboutButton.classList.remove("selected-button");
  attractionsButton.classList.add("selected-button");
  timeToVisitTabContainer.classList.add("d-none");
  aboutTabContainer.classList.add("d-none");
  attractionsTabContainer.classList.remove("d-none");
}
