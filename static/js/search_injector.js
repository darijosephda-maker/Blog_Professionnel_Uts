document.addEventListener('DOMContentLoaded', function() {
    // On cherche le paragraphe de description
    const target = document.getElementById('target-description');

    if (target) {
        const searchHTML = `
            <div class="row justify-content-center mb-5 animate__animated animate__fadeIn">
                <div class="col-md-8 col-lg-6">
                    <form action="/search/" method="get" class="d-flex shadow-sm rounded-pill bg-white border p-1">
                        <input type="text" name="q" class="form-control border-0 rounded-pill ps-4" 
                               placeholder="Rechercher une expertise... (ex: Django, Design)" required>
                        <button class="btn btn-primary rounded-pill px-4" type="submit">
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        `;
        // On injecte le bloc juste après le paragraphe
        target.insertAdjacentHTML('afterend', searchHTML);
    }
});