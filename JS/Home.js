const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const navLinksList = document.querySelectorAll(".nav-links li a");

navLinksList.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
