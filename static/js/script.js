
document.addEventListener('DOMContentLoaded', function() {
    // --- 1. GESTION DE L'HEURE ET DE LA DATE ---
    function updateDateTime() {
        const now = new Date();
        
        // Options pour une date élégante (ex: samedi 31 janvier 2026)
        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        // Ciblage des éléments HTML par ID
        const dateEl = document.getElementById('date-display');
        const timeEl = document.getElementById('time-display');
        const greetingEl = document.getElementById('dynamic-greeting');

        // Mise à jour de la date
        if (dateEl) {
            dateEl.textContent = now.toLocaleDateString('fr-FR', optionsDate);
        }
        
        // Mise à jour de l'heure
        if (timeEl) {
            timeEl.textContent = now.toLocaleTimeString('fr-FR', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            });
        }

        // --- 2. MESSAGE DE BIENVENUE DYNAMIQUE ---
        if (greetingEl) {
            const hours = now.getHours();
            let greeting = "";
            if (hours < 12) {
                greeting = "Bonjour ! Bonne matinée de travail.";
            } else if (hours < 18) {
                greeting = "Bon après-midi !";
            } else {
                greeting = "Bonsoir ! J'espère que votre journée a été productive.";
            }
            greetingEl.textContent = greeting;
        }
    }
    
    // Lancement de l'horloge
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // --- 3. GESTION DU MODE SOMBRE / CLAIR ---
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            const icon = themeBtn.querySelector('i');
            if (body.classList.contains('dark-mode')) {
                // Passage au soleil pour le mode sombre
                icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
                localStorage.setItem('theme', 'dark');
            } else {
                // Retour à la lune pour le mode clair
                icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // --- 4. PERSISTENCE DU THÈME AU CHARGEMENT ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        const icon = themeBtn?.querySelector('i');
        if (icon) {
            icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        }
    }

    // --- 5. GESTION DU FORMULAIRE DE CONTACT (AJAX) ---
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const statusText = document.getElementById("status-text");
    const submitBtn = document.getElementById("submit-btn");

    // On vérifie si le formulaire existe sur la page actuelle avant d'ajouter l'écouteur
    // On vérifie si le formulaire existe sur la page actuelle avant d'ajouter l'écouteur
    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault(); // Empêche la redirection vers Formspree
            
            // On change l'état du bouton
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Envoi en cours...';

            const data = new FormData(event.target);
            const name = document.getElementById("full-name").value;

            fetch(event.target.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    // Succès : On affiche le message personnalisé
                    statusText.innerHTML = "Merci <strong>" + name + "</strong>, votre message a été envoyé avec succès !";
                    status.className = "alert alert-success alert-dismissible fade show shadow-sm mb-4";
                    status.style.display = "block";
                    form.reset(); // Vide les champs

                    // DISPARITION AUTOMATIQUE après 5 secondes
                    setTimeout(function() {
                        // Utilisation des classes Bootstrap pour une sortie en douceur
                        status.classList.remove('show');
                        // On attend la fin de l'animation (150ms) pour masquer l'élément
                        setTimeout(() => status.style.display = "none", 150);
                    }, 5000);

                } else {
                    // Erreur serveur
                    statusText.innerHTML = "Oups ! Un problème est survenu. Veuillez réessayer.";
                    status.className = "alert alert-danger alert-dismissible fade show shadow-sm mb-4";
                    status.style.display = "block";
                }
            }).catch(error => {
                // Erreur réseau
                statusText.innerHTML = "Erreur de connexion. Vérifiez votre internet.";
                status.className = "alert alert-warning alert-dismissible fade show shadow-sm mb-4";
                status.style.display = "block";
            }).finally(() => {
                // On remet le bouton à l'état normal
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="bi bi-send-fill me-2"></i> Envoyer ma demande';
            });
        });
    }
});




















