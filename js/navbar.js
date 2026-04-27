// Esperamos a que el documento cargue
document.addEventListener("DOMContentLoaded", function() {
    
    // Corregimos la ruta apuntando a tu carpeta components
    fetch('components/navbar.html')
        .then(response => {
            if (!response.ok) throw new Error('No se pudo cargar el navbar');
            return response.text();
        })
        .then(data => {
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }

            pintarMenuActivo();
            activarCierreMovil();
        })
        .catch(error => console.error('Error cargando el header:', error));
});

function pintarMenuActivo() {
    let rutaCompleta = window.location.pathname;
    let archivoActual = rutaCompleta.substring(rutaCompleta.lastIndexOf('/') + 1) || "index.html";

    const enlacesMenu = document.querySelectorAll('.custom-nav-links .nav-link');
    enlacesMenu.forEach(enlace => {
        enlace.classList.remove('active');
        let destinoEnlace = enlace.getAttribute('href');
        
        // Si el enlace coincide, activamos la línea inferior
        if (destinoEnlace === archivoActual || (destinoEnlace === '#' && enlace.classList.contains('active-placeholder'))) {
            enlace.classList.add('active');
        }
    });
}

function activarCierreMovil() {
    const navLinks = document.querySelectorAll('.custom-nav-links .nav-link:not(.dropdown-toggle)');
    const menuToggle = document.getElementById('fimeMenu');
    
    if (navLinks.length > 0 && menuToggle) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuToggle.classList.contains('show')) {
                    var bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
                    bsCollapse.hide();
                }
            });
        });
    }
}
