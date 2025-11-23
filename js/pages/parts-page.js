import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderNavbar('navbar-container');
    renderFooter('footer-container');
    renderFullParts('parts-full-container');
    initAnimations();
});

function renderFullParts(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    // Extended list for the full page
    const parts = [
        { id: 1, name: 'Termostato Haval H5 Turbo', brand: 'Haval Genuine', model: 'H5 Turbo / H6', price: 18.00, oldPrice: 25.00, rating: 5, reviews: 12, image: 'https://placehold.co/400x400/png?text=Termostato+Haval' },
        { id: 2, name: 'Templador Distribución Aveo', brand: 'Chevrolet OEM', model: 'Aveo Family / Emotion', price: 12.50, oldPrice: 18.00, rating: 4, reviews: 45, image: 'https://placehold.co/400x400/png?text=Templador+Aveo' },
        { id: 3, name: 'Zapatas de Freno Sail', brand: 'RTECH', model: 'Chevrolet Sail 1.4/1.5', price: 15.99, oldPrice: 22.00, rating: 5, reviews: 8, image: 'https://placehold.co/400x400/png?text=Zapatas+Sail' },
        { id: 4, name: 'Triceta Aveo Activo', brand: 'Exact', model: 'Aveo / ChevyTaxi', price: 9.50, oldPrice: 14.00, rating: 4, reviews: 23, image: 'https://placehold.co/400x400/png?text=Triceta+Aveo' },
        { id: 5, name: 'Tubo Calefacción', brand: 'GM Original', model: 'Aveo Activo / Emotion', price: 10.00, oldPrice: 15.00, rating: 5, reviews: 5, image: 'https://placehold.co/400x400/png?text=Tubo+Calefaccion' },
        { id: 6, name: 'Zapatas Freno Nissan', brand: 'Kloss', model: 'Sentra B13', price: 14.50, oldPrice: 20.00, rating: 4, reviews: 18, image: 'https://placehold.co/400x400/png?text=Zapatas+Nissan' },
        { id: 7, name: 'Filtro de Aceite', brand: 'Bosch', model: 'Universal', price: 5.50, oldPrice: 8.00, rating: 5, reviews: 120, image: 'https://placehold.co/400x400/png?text=Filtro+Aceite' },
        { id: 8, name: 'Bujías Iridium (Set 4)', brand: 'NGK', model: 'Varios Modelos', price: 32.00, oldPrice: 45.00, rating: 5, reviews: 67, image: 'https://placehold.co/400x400/png?text=Bujias+NGK' },
        { id: 9, name: 'Amortiguador Delantero', brand: 'KYB', model: 'Chevrolet D-Max', price: 45.00, oldPrice: 60.00, rating: 4, reviews: 15, image: 'https://placehold.co/400x400/png?text=Amortiguador' },
        { id: 10, name: 'Batería 12V 60Ah', brand: 'Bosch', model: 'Libre Mantenimiento', price: 85.00, oldPrice: 110.00, rating: 5, reviews: 34, image: 'https://placehold.co/400x400/png?text=Bateria+Bosch' },
        { id: 11, name: 'Pastillas Freno Del.', brand: 'Wagner', model: 'Kia Rio R', price: 28.00, oldPrice: 35.00, rating: 4, reviews: 22, image: 'https://placehold.co/400x400/png?text=Pastillas+Kia' },
        { id: 12, name: 'Refrigerante 50/50', brand: 'Prestone', model: 'Galón', price: 12.00, oldPrice: 16.00, rating: 5, reviews: 89, image: 'https://placehold.co/400x400/png?text=Refrigerante' }
    ];

    container.innerHTML = parts.map(part => {
        const discount = Math.round(((part.oldPrice - part.price) / part.oldPrice) * 100);
        return `
        <div class="retail-card fade-in">
            <div class="badge-sale">SALE</div>
            <div class="card-img-container">
                <img src="${part.image}" alt="${part.name}">
            </div>
            <div class="card-details">
                <div class="card-brand">${part.brand}</div>
                <h3 class="card-name">${part.name}</h3>
                <div class="card-rating">
                    ${getStars(part.rating)} <span class="review-count">(${part.reviews})</span>
                </div>
                <div class="card-meta">${part.model}</div>
                <div class="card-pricing">
                    <span class="price-current">$${part.price.toFixed(2)}</span>
                    <span class="price-old">$${part.oldPrice.toFixed(2)}</span>
                    <span class="price-discount">(-${discount}%)</span>
                </div>
            </div>
            <button class="btn-quick-add"><i class="fa-solid fa-cart-plus"></i> QUICK ADD</button>
        </div>
        `;
    }).join('');
}

function getStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }
    return stars;
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
