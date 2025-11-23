import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderNavbar('navbar-container');
    renderFooter('footer-container');
    renderFullServices('services-full-container');
    initAnimations();
});

function renderFullServices(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    const services = [
        { icon: 'fa-oil-can', title: 'Cambio de Aceite Sintético', category: 'MANTENIMIENTO', price: 45.00 },
        { icon: 'fa-car-burst', title: 'Frenos ABS (Pastillas + Discos)', category: 'SEGURIDAD', price: 80.00 },
        { icon: 'fa-stethoscope', title: 'Scanner Computarizado', category: 'DIAGNÓSTICO', price: 25.00 },
        { icon: 'fa-gear', title: 'Reparación Caja de Cambios', category: 'TRANSMISIÓN', price: 150.00 },
        { icon: 'fa-fan', title: 'Mantenimiento Aire Acondicionado', category: 'CONFORT', price: 35.00 },
        { icon: 'fa-bolt', title: 'Revisión Sistema Eléctrico', category: 'ELÉCTRICO', price: 30.00 },
        { icon: 'fa-truck-pickup', title: 'Suspensión Completa', category: 'MECÁNICA', price: 120.00 },
        { icon: 'fa-spray-can', title: 'Enderezada y Pintura (Pieza)', category: 'ESTÉTICA', price: 75.00 },
        { icon: 'fa-road', title: 'Alineación y Balanceo', category: 'LLANTAS', price: 20.00 },
        { icon: 'fa-filter', title: 'Limpieza de Inyectores', category: 'MOTOR', price: 40.00 },
        { icon: 'fa-battery-full', title: 'Diagnóstico de Batería', category: 'ELÉCTRICO', price: 10.00 },
        { icon: 'fa-water', title: 'Lavado de Motor a Vapor', category: 'LIMPIEZA', price: 15.00 }
    ];

    // Using the 'grid-layout' and 'card' classes from styles.css
    container.innerHTML = services.map(service => `
        <div class="card fade-in">
            <div class="card-image">
                <i class="fa-solid ${service.icon}" style="color: #ccc;"></i>
            </div>
            <div class="card-content">
                <span class="card-category">${service.category}</span>
                <h3 class="card-title">${service.title}</h3>
                <div class="card-price">Desde $${service.price.toFixed(2)}</div>
                <a href="#" class="btn-card">AGENDAR CITA</a>
            </div>
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
