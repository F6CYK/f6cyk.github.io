/* ==========================================================
   OVERLAY — Déplacement robuste du panneau original
   ========================================================== */

let overlay = document.getElementById("nav-overlay");

if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "nav-overlay";
    overlay.hidden = true;
    document.body.appendChild(overlay);
}

/* ----------------------------------------------------------
   État interne unique
   ---------------------------------------------------------- */

let etat = null;

/* ----------------------------------------------------------
   Déplacement du panneau dans l'overlay
   ---------------------------------------------------------- */

export function afficherDansOverlay(panneau, x, y) {

    // Vérification préalable : ne rien fermer si le panneau est invalide
    if (!panneau?.isConnected) {
        console.warn("Panneau introuvable ou déjà supprimé.");
        return;
    }

    // Fermeture du panneau précédent
    fermerPanneauActuel();

    // Mémorisation de l'état d'origine
    etat = {
        panneau,
        parentOrigine: panneau.parentElement,
        nextSiblingOrigine: panneau.nextSibling,
        styleOrigine: {
            position: panneau.style.position,
            left: panneau.style.left,
            top: panneau.style.top,
            display: panneau.style.display,
            pointerEvents: panneau.style.pointerEvents
        }
    };

    // Positionnement dans l'overlay
    panneau.style.position = "absolute";
    panneau.style.left = `${x}px`;
    panneau.style.top = `${y}px`;
    panneau.style.display = "block";
    panneau.style.pointerEvents = "auto";

    overlay.appendChild(panneau);
    overlay.hidden = false;
}

/* ----------------------------------------------------------
   Restitution du panneau à son emplacement d'origine
   ---------------------------------------------------------- */

export function fermerPanneauActuel() {

    if (!etat) {
        return;
    }

    const {
        panneau,
        parentOrigine,
        nextSiblingOrigine,
        styleOrigine
    } = etat;

    // Restauration des styles d'origine
    panneau.style.position = styleOrigine.position;
    panneau.style.left = styleOrigine.left;
    panneau.style.top = styleOrigine.top;
    panneau.style.display = styleOrigine.display;
    panneau.style.pointerEvents = styleOrigine.pointerEvents;

    // Restauration dans le DOM
    if (parentOrigine?.isConnected) {

        if (
            nextSiblingOrigine &&
            nextSiblingOrigine.parentNode === parentOrigine
        ) {
            parentOrigine.insertBefore(panneau, nextSiblingOrigine);
        } else {
            parentOrigine.appendChild(panneau);
        }

    } else {
        console.warn("Parent d'origine introuvable. Panneau non réinséré.");
    }

    // Nettoyage de l'overlay
    overlay.replaceChildren();
    overlay.hidden = true;
    overlay.scrollTop = 0;
    overlay.scrollLeft = 0;

    etat = null;
}

/* ----------------------------------------------------------
   Accès à l'état interne
   ---------------------------------------------------------- */

export function panneauOuvert() {
    return etat !== null;
}

export function getPanneauActuel() {
    return etat?.panneau ?? null;
}
