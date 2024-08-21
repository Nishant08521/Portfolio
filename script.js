function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("nav-links li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav-links li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// For Darkmode  function

let icons = document.getElementById("mode");
icons.onclick = function () {
  document.body.classList.toggle("dark-theme");
};

var typed = new Typed(".auto-type", {
  strings: ["Front-end Developer", "Web- Design"],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
});
var typed = new Typed(".auto-type2", {
  strings: ["Cricket 🏏", "Football⚽", "Coading💻", "Travalling"],
  typeSpeed: 120,
  backSpeed: 120,
  loop: true,
});
