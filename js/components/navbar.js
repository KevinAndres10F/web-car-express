export function renderNavbar(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <a href="index.html" class="logo-container">
                    <img src="assets/images/logo.jpg" alt="Car-Express Logo" class="nav-logo">
                </a>
                <ul class="nav-links">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="services.html">Servicios</a></li>
                    <li><a href="parts.html">Repuestos</a></li>
                    <li><a href="reviews.html">Reseñas</a></li>
                    <li><a href="#contact-container">Contacto</a></li>
                </ul>
            </div>
        </nav>
    `;
}
