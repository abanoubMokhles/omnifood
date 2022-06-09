/*=============================
    DYNAMIC YEAR AT FOOTER
=============================*/
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/*=============================
    MOBILE NAVIGATION BUTTON
=============================*/
let navBtn = document.querySelector(".nav-toggle-btn");
let headerM = document.querySelector(".main-header");

navBtn.addEventListener("click", function () {
  headerM.classList.toggle("open-nav");
});

/*=============================
        SMOOTH SCROLLING
=============================*/
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerM.classList.toggle("nav-open");
  });
});

/*=============================
        STICKY NAVIGATION
=============================*/
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".main-header").classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".main-header").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
