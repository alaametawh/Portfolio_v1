// Toggle theme button
const toggle_btn = document.querySelector(".navcircle.Toggle-theme")
toggle_btn.addEventListener("click", () => {
    theme = document.documentElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark";
    document.documentElement.setAttribute("data-theme", theme);
})

// Typing effect
const typed = new Typed('.typed', {
  strings: [
    "Web Developer",
    "CS Student",
  ],
  typeSpeed: 40,
  backSpeed: 50,
  startDelay: 500,
  backDelay: 1500,
  loop: true
});
