const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const cards = document.querySelectorAll(".testimonial-card");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

var currentImage = 1;

const toggleImage = (imageNumber) => {
  document.querySelector(`.card-${currentImage}`).classList.add("hidden");
  document.querySelector(`.toggler-${currentImage}`).classList.remove("active");
  document.querySelector(`.card-${imageNumber}`).classList.remove("hidden");
  document.querySelector(`.toggler-${imageNumber}`).classList.add("active");
  currentImage = imageNumber;
};
