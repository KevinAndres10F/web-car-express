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
        { icon: 'fa-oil-can', title: 'Cambio de Aceite', desc: 'Aceites sintéticos y minerales de alta gama.' },
        { icon: 'fa-car-burst', title: 'Frenos ABS', desc: 'Mantenimiento y reparación de sistemas de frenos.' },
        { icon: 'fa-stethoscope', title: 'Diagnóstico Scanner', desc: 'Lectura y borrado de códigos de error.' },
        { icon: 'fa-gear', title: 'Caja de Cambios', desc: 'Reparación de transmisiones automáticas y manuales.' },
        { icon: 'fa-fan', title: 'Aire Acondicionado', desc: 'Carga de gas y limpieza de filtros.' },
        { icon: 'fa-bolt', title: 'Sistema Eléctrico', desc: 'Reparación de alternadores y arranques.' },
        { icon: 'fa-truck-pickup', title: 'Suspensión', desc: 'Amortiguadores, mesas y terminales.' },
        { icon: 'fa-spray-can', title: 'Enderezada y Pintura', desc: 'Acabados profesionales al horno.' }
    ];

    container.innerHTML = services.map(service => `
        <div class="service-card fade-in">
            <div class="icon-box"><i class="fa-solid ${service.icon}"></i></div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
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
