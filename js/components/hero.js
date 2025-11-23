export function renderHero(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <header class="hero-section">
            <div class="hero-content fade-in">
                <h1>Expertos en tu auto, <span class="highlight">pasión por el servicio</span></h1>
                <p class="subtitle">Mecánica integral en Quito desde 2022</p>
                <div class="hero-buttons">
                    <a href="#contact-container" class="btn btn-primary">Agendar Cita</a>
                    <a href="#services-container" class="btn btn-secondary">Nuestros Servicios</a>
                </div>
            </div>
        </header>
    `;
}
