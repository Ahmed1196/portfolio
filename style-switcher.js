// toggle style switcher

const StyleSwitcher = document.querySelector(".style-switcher-toggle");

StyleSwitcher.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style switcher on scroll 
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// theme colors
const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        } else {
            style.setAttribute("disabled", "true")
        }
    }
    )
};

// theme light and dark
const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");

})
window.addEventListener("load",() => {
    if (document.body.classList.contains("dark")) {
        daynight.querySelector("i").classList.add("fa-sun")
    } else {
        daynight.querySelector("i").classList.add("fa-moon")
    }
})

let bar = document.querySelector(".bars")
let little = document.querySelector(".little")

bar.onclick = function () {
    little.classList.toggle("open")
}