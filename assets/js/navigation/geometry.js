/* ==========================================================
   GEOMETRY — Profondeur + coordonnées globales
   ========================================================== */

import { lireRepereGlobal } from "./config.js";

const nav = lireRepereGlobal();

/* ----------------------------------------------------------
   Calcul de la profondeur d’un <li class="menu-deroulant">
   ---------------------------------------------------------- */

export function profondeur(li) {
    let niveau = 0;
    let courant = li.parentElement;

    while (courant && courant.classList) {
        if (courant.classList.contains("sous-menu")) {
            niveau++;
        }
        courant = courant.parentElement;
    }

    return niveau;
}

/* ----------------------------------------------------------
   Calcul des coordonnées globales dans le repère <nav>
   ---------------------------------------------------------- */
export function calculerPosition(li) {

    const sousMenu = li.querySelector(":scope > .sous-menu");
    if (!sousMenu) return null;

    const rectNav = nav.getBoundingClientRect();
    const rectLi  = li.getBoundingClientRect();

    const parentMenu = li.parentElement.closest(".sous-menu");

    let top;
    let left;

    if (!parentMenu) {

        /* premier panneau */

        top  = rectLi.bottom - rectNav.top;
        left = rectLi.left - rectNav.left;

    } else {

        const rectParent = parentMenu.getBoundingClientRect();

        top  = rectLi.top - rectNav.top;

        /* panneau collé au précédent */

        left = rectParent.right - rectNav.left - 1;
    }

    return {
        top,
        left,
        sousMenu
    };
}
