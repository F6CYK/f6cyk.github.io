/* ==========================================================
   GEOMETRY
   ----------------------------------------------------------
   Calcule uniquement :

      - la profondeur
      - la position verticale
      - l'origine horizontale

   Aucun affichage.
   Aucune manipulation du DOM.
   ========================================================== */

import { lireRepereGlobal } from "./config.js";

const nav = lireRepereGlobal();

/* ----------------------------------------------------------
   Profondeur
   ---------------------------------------------------------- */

export function profondeur(li) {

    let niveau = 0;
    let courant = li.parentElement;

    while (courant) {

        if (courant.classList?.contains("sous-menu")) {
            niveau++;
        }

        courant = courant.parentElement;
    }

    return niveau;
}

/* ----------------------------------------------------------
   Menu racine
   ---------------------------------------------------------- */

function menuRacine(li) {

    let courant = li;

    while (courant) {

        const parent = courant.parentElement;
        if (!parent) {
            break;
        }

        // Le menu racine est le <li> dont le parent direct est <nav>
        if (parent.parentElement === nav) {
            return courant;
        }

        courant = parent.closest("li");
    }

    return li;
}

/* ----------------------------------------------------------
   Calcul complet
   ---------------------------------------------------------- */

export function calculerPosition(li) {

    const panneau = li.querySelector(":scope > .sous-menu");
    if (!panneau) {
        return null;
    }

    const rectNav = nav.getBoundingClientRect();
    const rectLi = li.getBoundingClientRect();

    const niveau = profondeur(li);

    const racine = niveau === 0
        ? li
        : menuRacine(li);

    const rectRacine = racine.getBoundingClientRect();

    return {

        panneau,

        niveau,

        // Origine horizontale : alignement sur la racine
        x: rectRacine.left - rectNav.left,

        // Origine verticale : bas du LI au niveau 0, haut du LI sinon
        y: niveau === 0
            ? rectLi.bottom - rectNav.top
            : rectLi.top - rectNav.top
    };
}

