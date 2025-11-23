export function renderHero(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <header class="hero-section">
            <div class="hero-content fade-in">
                <h1>Ingeniería Automotriz <br><span class="highlight">De Precisión</span></h1>
                <p class="subtitle">Especialistas en mecánica integral y diagnóstico avanzado. Tu vehículo en manos de expertos certificados.</p>
                <div class="hero-buttons">
                    <a href="#contact-container" class="btn btn-primary">Cotizar Reparación</a>
                    <a href="#services-container" class="btn btn-secondary">Explorar Servicios</a>
                </div>
            </div>
        </header>
    `;
}
