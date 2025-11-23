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

    const parts = [
        { icon: 'fa-filter', title: 'Filtros de Aceite', price: '$15.00' },
        { icon: 'fa-compact-disc', title: 'Pastillas de Freno', price: '$45.00' },
        { icon: 'fa-bottle-water', title: 'Aceite Sintético', price: '$35.00' },
        { icon: 'fa-car-battery', title: 'Baterías', price: '$80.00' },
        { icon: 'fa-lightbulb', title: 'Focos Halógenos', price: '$5.00' },
        { icon: 'fa-gear', title: 'Bandas de Distribución', price: '$25.00' },
        { icon: 'fa-plug', title: 'Bujías', price: '$12.00' },
        { icon: 'fa-wind', title: 'Filtros de Aire', price: '$18.00' }
    ];

    container.innerHTML = parts.map(part => `
        <div class="part-item fade-in">
            <div class="part-icon"><i class="fa-solid ${part.icon}"></i></div>
            <h4>${part.title}</h4>
            <span>Desde ${part.price}</span>
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
