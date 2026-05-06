document.addEventListener("DOMContentLoaded", function () {

    fetch('components/navbar.html')
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar navbar");
            return response.text();
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            pintarMenuActivo();
            activarCierreMovil();
        })
        .catch(error => console.error(error));

});


function pintarMenuActivo() {
    let ruta = window.location.pathname;

    const enlaces = document.querySelectorAll('.custom-nav-links .nav-link');

    // Limpiar TODOS
    enlaces.forEach(link => link.classList.remove('active'));

    // Detectar si estamos en UPG
    const esUPG =
        ruta.includes('proposito') ||
        ruta.includes('modelo-educativo') ||
        ruta.includes('prestigio') ||
        ruta.includes('mensaje-director') ||
        ruta.includes('consejo') ||
        ruta.includes('gestion');

    enlaces.forEach(link => {
        const texto = link.textContent.trim();
        const href = link.getAttribute('href');

        // 🔵 UPG activo SIEMPRE dentro de su sección
        if (esUPG && texto === 'UPG FIME') {
            link.classList.add('active');
        }

        // 🔵 Otras páginas normales
        else if (!esUPG && href && ruta.includes(href)) {
            link.classList.add('active');
        }
    });
}


function activarCierreMovil() {
    const links = document.querySelectorAll('.custom-nav-links .nav-link:not(.dropdown-toggle)');
    const menu = document.getElementById('fimeMenu');

    if (links.length > 0 && menu) {
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (menu.classList.contains('show')) {
                    new bootstrap.Collapse(menu).hide();
                }
            });
        });
    }
}