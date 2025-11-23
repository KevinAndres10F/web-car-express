export function renderFooter(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <footer id="contact-container" class="footer-section">
            <div class="container footer-content">
                <div class="footer-col">
                    <h3>Car-Express</h3>
                    <p>Tu taller de confianza en Quito.</p>
                </div>
                <div class="footer-col">
                    <h3>Contacto</h3>
                    <p><i class="fa-solid fa-phone"></i> 099 123 4567</p>
                    <p><i class="fa-solid fa-envelope"></i> info@carexpress.com</p>
                    <p><i class="fa-solid fa-location-dot"></i> Av. De los Shyris y Eloy Alfaro</p>
                </div>
                <div class="footer-col">
                    <h3>Síguenos</h3>
                    <div class="social-links">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Car-Express. Todos los derechos reservados.</p>
            </div>
        </footer>
    `;
}
