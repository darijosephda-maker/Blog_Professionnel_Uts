---
marp: true
theme: gaia
paginate: true
backgroundColor: #121826
style: |
  section {
    font-family: 'Inter', sans-serif;
    color: #f8f9fa;
  }
  h1 { 
    color: #0d6efd; 
    text-shadow: 0 2px 10px rgba(13, 110, 253, 0.3);
  }
  h2 { color: #38bdf8; }
  b { color: #facc15; } /* Pour mettre en avant les mots clés */
  footer { color: rgba(255,255,255,0.5); }
  section.lead {
    background: radial-gradient(circle, #1e293b 0%, #0f172a 100%);
  }
---

# 🚀 Soutenance : Blog Professionnel 
### Ingénierie Web & UX Design

**Développeur :** Joseph DA  
**Sujet :** Optimisation d'interface adaptative

---

# 1. Problématique : Lisibilité UI
### Le défi du contraste
- **Analyse :** Les éléments statistiques étaient invisibles en mode sombre.
- **Solution Technique :** Implémentation de **variables CSS natives** (`var(--bs-emphasis-color)`).
- **Résultat :** Un affichage parfait quel que soit le thème (Clair/Sombre).

---

# 2. Architecture du Formulaire
### Approche "Mobile First"
- **Analyse :** L'alignement horizontal nuisait à la saisie sur petit écran.
- **Refonte :** Passage à une **superposition verticale** pour une ergonomie maximale.
- **Validation :** Amélioration de la lisibilité et de l'accessibilité des champs.

---

# 3. Focus : FAQ & Services
### Une grille intelligente
- **Structure :** Utilisation du système de grille Bootstrap (`row` / `col-md-4`).
- **Composant :** Création de la classe `.faq-card` avec effets de transition.
- **Responsive :** Alignement horizontal sur PC, empilement fluide sur Mobile.

---

# 4. Bilan & Perspectives
### Un projet scalable
- **Maintenant :** Une interface robuste, responsive et accessible.
- **Futur :** Intégration d'un tableau de bord administrateur complet.

**Merci pour votre attention !** *Questions ?*