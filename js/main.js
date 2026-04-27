


// Función reutilizable para cargar componentes HTML
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // TRUCO PRO: Si acabamos de cargar el footer, actualizamos el año
            if (elementId === "footer-container") {
                updateFooterYear();
            }
        })
        .catch(error => console.error("Error al cargar el componente:", error));
}

// Función para automatizar el año del copyright
function updateFooterYear() {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Ejecutamos la carga cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-container", "/components/navbar.html");
    loadComponent("footer-container", "/components/footer.html");
});
// Función reutilizable para cargar componentes HTML
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // Lógica específica después de cargar el componente
            if (elementId === "footer-container") {
                updateFooterYear();
            }
            
            if (elementId === "navbar-container") {
                initMobileMenu(); // Iniciamos el menú una vez que el navbar existe
            }
        })
        .catch(error => console.error("Error al cargar el componente:", error));
}

// Función para automatizar el año del copyright (Ya la tenías)
function updateFooterYear() {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// NUEVO: Función para el menú de hamburguesa
function initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links-menu");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            // "toggle" quita la clase si existe, o la pone si no existe
            navLinks.classList.toggle("active");
        });
    }
}

// Ejecutamos la carga cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-container", "/components/navbar.html");
    loadComponent("footer-container", "/components/footer.html");
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".fime-header-wrapper");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});