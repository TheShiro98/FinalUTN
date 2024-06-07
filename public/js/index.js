//Menu

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});


// Scroll header
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    if (window.scrollY > 50) { // Cambia el número 50 según sea necesario
        header.style.backgroundColor = '#354F52';        // Cambia el color de fondo cuando se desplaza hacia abajo
    } else {
        header.style.backgroundColor = 'transparent'; // Restablece el color de fondo cuando vuelve arriba
    }
});
