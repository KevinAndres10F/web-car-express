export function renderNavbar(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <header class="navbar">
            <div class="top-bar">
                ENVÍO GRATIS EN PEDIDOS SUPERIORES A $50 | GARANTÍA DE SERVICIO
            </div>
            <div class="container">
                <div class="nav-main">
                    <a href="index.html" class="logo-container">
                        <img src="assets/images/logo.jpg" alt="Car-Express">
                    </a>
                    
                    <div class="search-container">
                        <input type="text" class="search-input" placeholder="Buscar servicios, repuestos, marcas...">
                        <button class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div class="nav-icons">
                        <a href="#" class="nav-icon-link">
                            <i class="fa-regular fa-user"></i>
                            <span>Cuenta</span>
                        </a>
                        <a href="#" class="nav-icon-link">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span>Carrito</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="nav-categories">
                <div class="container">
                    <ul class="category-list">
                        <li><a href="services.html" class="category-link">SERVICIOS</a></li>
                        <li><a href="parts.html" class="category-link">REPUESTOS</a></li>
                        <li><a href="recommendations.html" class="category-link">TIPS & GUÍAS</a></li>
                        <li><a href="reviews.html" class="category-link">RESEÑAS</a></li>
                        <li><a href="#contact-container" class="category-link">CONTACTO</a></li>
                    </ul>
                </div>
            </div>
        </header>
    `;
}
