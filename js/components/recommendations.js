export function renderRecommendations(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <section class="recommendations-section">
            <div class="container">
                <h2 class="section-title fade-in">Tips y Recomendaciones</h2>
                <div class="recommendations-grid">
                    <div class="rec-card fade-in">
                        <h4><i class="fa-solid fa-gauge-high"></i> Presión de Llantas</h4>
                        <p>Revisa la presión de tus llantas cada 15 días para ahorrar combustible.</p>
                    </div>
                    <div class="rec-card fade-in">
                        <h4><i class="fa-solid fa-droplet"></i> Niveles de Fluidos</h4>
                        <p>Verifica el nivel de refrigerante y aceite antes de viajes largos.</p>
                    </div>
                    <div class="rec-card fade-in">
                        <h4><i class="fa-solid fa-battery-full"></i> Batería</h4>
                        <p>Limpia los bornes de la batería para asegurar un buen arranque.</p>
                    </div>
                </div>
                <div class="text-center fade-in" style="margin-top: 2rem; text-align: center;">
                    <a href="recommendations.html" class="btn btn-secondary" style="color: var(--color-secondary); border-color: var(--color-secondary);">Ver Más Tips</a>
                </div>
            </div>
        </section>
    `;
}
