const handleScroll = () => {
  const sections = ["how-it-works", "about", "menu", "cta-section"];
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    const position = section.getBoundingClientRect();

    if (position.top < window.innerHeight) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
};

export const addScrollListener = () => {
  window.addEventListener("scroll", handleScroll);
};

export const removeScrollListener = () => {
  window.removeEventListener("scroll", handleScroll);
};
