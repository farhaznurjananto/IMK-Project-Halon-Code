// navbar
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// darkmode
if (localStorage.getItem("theme") == "dark") setDarkMode();

function setDarkMode() {
  let isDark = document.body.classList.toggle("darkmode");

  if (isDark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
}
