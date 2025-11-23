import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderNavbar('navbar-container');
    renderFooter('footer-container');
    renderFullReviews('reviews-full-container');
    initAnimations();
});

function renderFullReviews(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    const reviews = [
        { stars: '★★★★★', text: 'Excelente servicio, muy profesionales y rápidos. Mi auto quedó como nuevo.', author: 'Juan Pérez' },
        { stars: '★★★★★', text: 'Me explicaron todo el proceso y los precios son justos. Recomendado 100%.', author: 'María Fernanda' },
        { stars: '★★★★☆', text: 'Buen taller, atención amable y cumplen con los tiempos de entrega.', author: 'Carlos Andrade' },
        { stars: '★★★★★', text: 'Salvaron mi viaje de fin de semana. Reparación express de calidad.', author: 'Luis Torres' },
        { stars: '★★★★★', text: 'El mejor lugar para cambio de aceite en Quito.', author: 'Ana López' },
        { stars: '★★★★☆', text: 'Buenos precios en repuestos originales.', author: 'Pedro Sánchez' }
    ];

    container.innerHTML = reviews.map(review => `
        <div class="review-card fade-in">
            <div class="stars">${review.stars}</div>
            <p>"${review.text}"</p>
            <h5>- ${review.author}</h5>
        </div>
    `).join('');
}

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, 100);
}
