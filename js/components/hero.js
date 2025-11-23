export function renderHero(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <section class="hero-section">
            <div class="hero-content fade-in">
                <h1>MÁXIMO RENDIMIENTO<br>PARA TU VEHÍCULO</h1>
                <p class="subtitle">Expertos en mecánica integral, repuestos originales y diagnóstico avanzado. Tu auto merece lo mejor.</p>
                <a href="services.html" class="btn btn-primary">VER SERVICIOS</a>
            </div>
        </section>
        
        <!-- Trust Indicators / Features Row -->
        <div class="features-row">
            <div class="container">
                <div class="features-grid">
                    <div class="feature-item">
                        <i class="fa-solid fa-medal"></i>
                        <h4>Garantía Total</h4>
                        <p>En todos nuestros trabajos</p>
                    </div>
                    <div class="feature-item">
                        <i class="fa-solid fa-truck-fast"></i>
                        <h4>Servicio Express</h4>
                        <p>Tu auto listo en 24h</p>
                    </div>
                    <div class="feature-item">
                        <i class="fa-solid fa-certificate"></i>
                        <h4>Certificados</h4>
                        <p>Mecánicos expertos</p>
                    </div>
                    <div class="feature-item">
                        <i class="fa-solid fa-credit-card"></i>
                        <h4>Pagos Seguros</h4>
                        <p>Aceptamos todas las tarjetas</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
