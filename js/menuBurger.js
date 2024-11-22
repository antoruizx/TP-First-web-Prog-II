const hamburger = document.getElementById("burger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function() {
    menu.classList.toggle("show");
});
