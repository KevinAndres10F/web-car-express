import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderServices } from './components/services.js';
import { renderRecommendations } from './components/recommendations.js';
import { renderParts } from './components/parts.js';
import { renderReviews } from './components/reviews.js';
import { renderFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    renderNavbar('navbar-container');
    renderHero('hero-container');
    renderServices('services-container');
    renderRecommendations('recommendations-container');
    renderParts('parts-container');
    renderReviews('reviews-container');
    renderFooter('footer-container');

    // Re-initialize animations after rendering
    initAnimations();
});

function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Wait a tick for DOM to update
    setTimeout(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => observer.observe(el));
    }, 100);
}
