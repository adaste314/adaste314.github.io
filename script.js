const hero = document.querySelector(".hero-animate");

const heroObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

heroObserver.observe(hero);

const sections = document.querySelectorAll(".fade-in");

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach(section => {
  sectionObserver.observe(section);
});