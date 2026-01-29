const toggle_btn = document.querySelector(".navcircle.Toggle-theme")

// Toggle theme button
toggle_btn.addEventListener("click", () => {
    theme = document.documentElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark";
    document.documentElement.setAttribute("data-theme", theme);
})