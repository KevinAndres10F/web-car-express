export function renderReviews(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <section class="reviews-section">
            <div class="container">
                <h2 class="section-title fade-in">Lo que dicen nuestros clientes</h2>
                <div class="reviews-grid">
                    <div class="review-card fade-in">
                        <div class="stars">★★★★★</div>
                        <p>"Excelente servicio, muy profesionales y rápidos. Mi auto quedó como nuevo."</p>
                        <h5>- Juan Pérez</h5>
                    </div>
                    <div class="review-card fade-in">
                        <div class="stars">★★★★★</div>
                        <p>"Me explicaron todo el proceso y los precios son justos. Recomendado 100%."</p>
                        <h5>- María Fernanda</h5>
                    </div>
                    <div class="review-card fade-in">
                        <div class="stars">★★★★☆</div>
                        <p>"Buen taller, atención amable y cumplen con los tiempos de entrega."</p>
                        <h5>- Carlos Andrade</h5>
                    </div>
                </div>
                <div class="text-center fade-in" style="margin-top: 2rem; text-align: center;">
                    <a href="reviews.html" class="btn btn-secondary" style="border-color: var(--color-white); color: var(--color-white);">Ver Más Reseñas</a>
                </div>
            </div>
        </section>
    `;
}
