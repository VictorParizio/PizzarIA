window.addEventListener("scroll", function () {
  animateSection("how-it-works");
});

window.addEventListener("scroll", function () {
  animateSection("about");
});

window.addEventListener("scroll", function () {
  animateSection("menu");
});

window.addEventListener("scroll", function () {
  animateSection("cta-section");
});

function animateSection(sectionId) {
  var section = document.getElementById(sectionId);
  var position = section.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    section.classList.add("visible");
  } else {
    section.classList.remove("visible");
  }
}
