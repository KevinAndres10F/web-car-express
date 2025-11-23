export function renderServices(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <section class="services-section">
            <div class="container">
                <h2 class="section-title fade-in">Nuestros Servicios</h2>
                <div class="bento-grid">
                    <!-- Featured Item (Spans 2 columns) -->
                    <div class="bento-item featured fade-in">
                        <div class="icon-box"><i class="fa-solid fa-stethoscope"></i></div>
                        <h3>Diagnóstico Computarizado</h3>
                        <p>Análisis profundo con scanners de última generación para detectar fallas electrónicas complejas con precisión milimétrica.</p>
                    </div>

                    <!-- Standard Item -->
                    <div class="bento-item fade-in">
                        <div class="icon-box"><i class="fa-solid fa-oil-can"></i></div>
                        <h3>Mantenimiento Preventivo</h3>
                        <p>Cambios de aceite y filtros para extender la vida útil del motor.</p>
                    </div>

                    <!-- Standard Item -->
                    <div class="bento-item fade-in">
                        <div class="icon-box"><i class="fa-solid fa-car-burst"></i></div>
                        <h3>Sistema de Frenos</h3>
                        <p>Rectificación de discos y cambio de pastillas de alto rendimiento.</p>
                    </div>

                    <!-- Standard Item -->
                    <div class="bento-item fade-in">
                        <div class="icon-box"><i class="fa-solid fa-gear"></i></div>
                        <h3>Transmisión</h3>
                        <p>Reparación y mantenimiento de cajas automáticas y manuales.</p>
                    </div>
                     <!-- Standard Item -->
                    <div class="bento-item fade-in">
                        <div class="icon-box"><i class="fa-solid fa-bolt"></i></div>
                        <h3>Sistema Eléctrico</h3>
                        <p>Solución a problemas de arranque, alternador y cableado.</p>
                    </div>
                </div>
                <div class="text-center fade-in" style="margin-top: 4rem; text-align: center;">
                    <a href="services.html" class="btn btn-primary" style="background: transparent; color: var(--color-accent); border: 1px solid var(--color-accent); box-shadow: none;">Ver Todos los Servicios</a>
                </div>
            </div>
        </section>
    `;
}
