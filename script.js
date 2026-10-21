// Put the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the nav link for the section you're currently viewing
const sections = document.querySelectorAll("main section");
const links = document.querySelectorAll("nav ul a");

function updateActiveLink() {
  let current = "";
  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  links.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();
