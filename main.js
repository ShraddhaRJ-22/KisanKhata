// Search bar toggle
const navSearch = document.getElementById("nav-search");
if (navSearch) {
  navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("open");
  });
}

// Scroll reveal animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  ...scrollRevealOption,
  delay: 400,
});
ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 200,
});
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 300,
});
ScrollReveal().reveal(".client__card", {
  ...scrollRevealOption,
  interval: 400,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});
