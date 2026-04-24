// Esperamos a que el documento base cargue
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Inyectamos el Header (Asegúrate de que la ruta 'header.html' sea la correcta en tu proyecto)
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // Insertamos el HTML en el contenedor
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }

            // 2. UNA VEZ INYECTADO, EJECUTAMOS LAS FUNCIONES:
            pintarMenuActivo();
            activarCierreMovil();
        })
        .catch(error => console.error('Error cargando el header:', error));
});

/* ==========================================
   FUNCIONES AUXILIARES
========================================== */

// Función para pintar la línea dorada y texto amarillo
function pintarMenuActivo() {
    let rutaCompleta = window.location.pathname;
    let archivoActual = rutaCompleta.substring(rutaCompleta.lastIndexOf('/') + 1);

    if (archivoActual === "" || archivoActual === "index.html") {
        archivoActual = "index.html";
    }

    const enlacesMenu = document.querySelectorAll('.custom-nav-links .nav-link');

    if (enlacesMenu.length > 0) {
        enlacesMenu.forEach(function(enlace) {
            enlace.classList.remove('active'); // Limpiamos por defecto
            let destinoEnlace = enlace.getAttribute('href');

            if (destinoEnlace === archivoActual) {
                enlace.classList.add('active'); // Pintamos el correcto
            }
        });
    }
}

// Función para cerrar el menú móvil al hacer clic (tu código original adaptado)
function activarCierreMovil() {
    const navLinks = document.querySelectorAll('.custom-nav-links .nav-link');
    const menuToggle = document.getElementById('cimemMenu');
    
    if (navLinks.length > 0 && menuToggle) {
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (menuToggle.classList.contains('show')) {
                    // Usamos la API de Bootstrap para colapsarlo
                    var bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
                    bsCollapse.hide();
                }
            });
        });
    }
}

