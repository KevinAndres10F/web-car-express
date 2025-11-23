export function renderNavbar(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <a href="#" class="logo-container">
                    <img src="assets/images/logo.jpg" alt="Car-Express Logo" class="nav-logo">
                    <!-- Optional text if needed, but logo has text -->
                </a>
                <ul class="nav-links">
                    <li><a href="#hero-container">Inicio</a></li>
                    <li><a href="#services-container">Servicios</a></li>
                    <li><a href="#parts-container">Repuestos</a></li>
                    <li><a href="#reviews-container">Reseñas</a></li>
                    <li><a href="#contact-container">Contacto</a></li>
                </ul>
            </div>
        </nav>
    `;
}
