export function renderServices(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = `
        <section class="services-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">SERVICIOS POPULARES</h2>
                    <a href="services.html" class="view-all">VER TODOS <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
                <div class="grid-layout">
                    <!-- Service Card 1 -->
                    <div class="card fade-in">
                        <div class="card-image">
                            <i class="fa-solid fa-oil-can" style="color: #ccc;"></i>
                        </div>
                        <div class="card-content">
                            <span class="card-category">MANTENIMIENTO</span>
                            <h3 class="card-title">Cambio de Aceite Sintético</h3>
                            <div class="card-price">Desde $45.00</div>
                            <a href="#" class="btn-card">AGENDAR CITA</a>
                        </div>
                    </div>

                    <!-- Service Card 2 -->
                    <div class="card fade-in">
                        <div class="card-image">
                            <i class="fa-solid fa-car-burst" style="color: #ccc;"></i>
                        </div>
                        <div class="card-content">
                            <span class="card-category">SEGURIDAD</span>
                            <h3 class="card-title">Frenos ABS (Pastillas + Discos)</h3>
                            <div class="card-price">Desde $80.00</div>
                            <a href="#" class="btn-card">AGENDAR CITA</a>
                        </div>
                    </div>

                    <!-- Service Card 3 -->
                    <div class="card fade-in">
                        <div class="card-image">
                            <i class="fa-solid fa-stethoscope" style="color: #ccc;"></i>
                        </div>
                        <div class="card-content">
                            <span class="card-category">DIAGNÓSTICO</span>
                            <h3 class="card-title">Scanner Computarizado</h3>
                            <div class="card-price">Desde $25.00</div>
                            <a href="#" class="btn-card">AGENDAR CITA</a>
                        </div>
                    </div>

                    <!-- Service Card 4 -->
                    <div class="card fade-in">
                        <div class="card-image">
                            <i class="fa-solid fa-bolt" style="color: #ccc;"></i>
                        </div>
                        <div class="card-content">
                            <span class="card-category">ELÉCTRICO</span>
                            <h3 class="card-title">Revisión Sistema Eléctrico</h3>
                            <div class="card-price">Desde $30.00</div>
                            <a href="#" class="btn-card">AGENDAR CITA</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
