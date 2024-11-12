// Obtén el elemento del menú hamburguesa y el menú
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Añadir el evento al hacer clic en el icono de hamburguesa
hamburger.addEventListener("click", function() {
    // Toggle entre mostrar y ocultar el menú
    menu.classList.toggle("show");
});
