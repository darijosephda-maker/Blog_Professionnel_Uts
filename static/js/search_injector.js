document.addEventListener('DOMContentLoaded', function() {
    const target = document.getElementById('target-description');

    if (target) {
        // Bloc de recherche injecté
        const searchHTML = `
            <div class="row justify-content-center mb-5">
                <div class="col-md-8 col-lg-6">
                    <div class="d-flex shadow-sm rounded-pill bg-white border p-1">
                        <input type="text" id="local-search" class="form-control border-0 rounded-pill ps-4" 
                               placeholder="Tapez 'Infographie' pour tester...">
                    </div>
                </div>
            </div>
        `;
        target.insertAdjacentHTML('afterend', searchHTML);

        const input = document.getElementById('local-search');
        
        input.addEventListener('input', function() {
            const term = this.value.toLowerCase();
            const items = document.querySelectorAll('.service-item'); // Il cible tes blocs

            items.forEach(item => {
                const text = item.innerText.toLowerCase();
                // Si le texte est trouvé, on garde 'block', sinon on cache avec 'none'
                item.style.display = text.includes(term) ? "block" : "none";
            });
        });
    }
});