// Single-reveal for manifest rows. Content is visible by default; the .js
// class opts into the hidden-then-revealed treatment only when this runs.
document.documentElement.classList.add("js");

const rows = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  rows.forEach((row) => observer.observe(row));
} else {
  rows.forEach((row) => row.classList.add("in"));
}
