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
});