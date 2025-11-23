export function renderParts(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <section class="parts-section">
            <div class="container">
                <h2 class="section-title fade-in">Repuestos Originales</h2>
                <div class="parts-grid">
                    <div class="part-item fade-in">
                        <div class="part-icon"><i class="fa-solid fa-filter"></i></div>
                        <h4>Filtros</h4>
                        <span>Desde $15.00</span>
                    </div>
                    <div class="part-item fade-in">
                        <div class="part-icon"><i class="fa-solid fa-compact-disc"></i></div>
                        <h4>Pastillas de Freno</h4>
                        <span>Desde $45.00</span>
                    </div>
                    <div class="part-item fade-in">
                        <div class="part-icon"><i class="fa-solid fa-bottle-water"></i></div>
                        <h4>Aceites Sintéticos</h4>
                        <span>Desde $35.00</span>
                    </div>
                    <div class="part-item fade-in">
                        <div class="part-icon"><i class="fa-solid fa-car-battery"></i></div>
                        <h4>Baterías</h4>
                        <span>Desde $80.00</span>
                    </div>
                </div>
            </div>
        </section>
    `;
}
