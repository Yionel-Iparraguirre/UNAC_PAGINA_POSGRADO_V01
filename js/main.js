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
        })
        .catch(error => console.error("Error al cargar el componente:", error));
}

// Ejecutamos la función cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-container", "/components/navbar.html");
    loadComponent("footer-container", "/components/footer.html");
});