export function renderServices(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <section class="services-section">
            <div class="container">
                <h2 class="section-title fade-in">Nuestros Servicios</h2>
                <div class="services-grid">
                    <div class="service-card fade-in">
                        <div class="icon-box"><i class="fa-solid fa-oil-can"></i></div>
                        <h3>Cambio de Aceite</h3>
                        <p>Mantenimiento preventivo con aceites de la mejor calidad.</p>
                    </div>
                    <div class="service-card fade-in">
                        <div class="icon-box"><i class="fa-solid fa-car-burst"></i></div>
                        <h3>Frenos</h3>
                        <p>Revisión y cambio de pastillas y discos para tu seguridad.</p>
                    </div>
                    <div class="service-card fade-in">
                        <div class="icon-box"><i class="fa-solid fa-stethoscope"></i></div>
                        <h3>Diagnóstico</h3>
                        <p>Escaneo computarizado completo para detectar fallas.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}
