const hamburgerButton = document.querySelector(".hamburger-button");
const mobileMenu = document.getElementById("menu");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("open");

  mobileMenu.classList.toggle("hidden");
});
