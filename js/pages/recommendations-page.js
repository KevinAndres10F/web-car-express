import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderNavbar('navbar-container');
    renderFooter('footer-container');
    renderFullRecommendations('recommendations-full-container');
    initAnimations();
});

function renderFullRecommendations(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    const recommendations = [
        { icon: 'fa-gauge-high', title: 'Presión de Llantas', desc: 'Revisar cada 15 días. Una presión correcta ahorra combustible y mejora la seguridad.' },
        { icon: 'fa-droplet', title: 'Niveles de Fluidos', desc: 'Aceite, refrigerante, frenos y dirección. Niveles bajos pueden causar daños graves.' },
        { icon: 'fa-battery-full', title: 'Cuidado de Batería', desc: 'Si no usas el auto por varios días, enciéndelo al menos 10 minutos.' },
        { icon: 'fa-road', title: 'Alineación y Balanceo', desc: 'Realizar cada 10,000 km para evitar desgaste irregular de llantas.' },
        { icon: 'fa-filter', title: 'Filtro de Aire', desc: 'Cambiar regularmente para mantener la potencia del motor.' },
        { icon: 'fa-snowflake', title: 'Limpiaparabrisas', desc: 'Revisar las plumas antes de la temporada de lluvias.' }
    ];

    container.innerHTML = recommendations.map(item => `
        <div class="rec-card fade-in">
            <h4><i class="fa-solid ${item.icon}"></i> ${item.title}</h4>
            <p>${item.desc}</p>
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
