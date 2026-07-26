/* ==========================================================
   GEOMETRY — Profondeur + coordonnées globales
   ========================================================== */

import { lireLargeurColonne, lireRepereGlobal } from "./config.js";

const nav = lireRepereGlobal();
const LARGEUR_COLONNE = lireLargeurColonne();

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

    const rectLi  = li.getBoundingClientRect();
    const rectNav = nav.getBoundingClientRect();

    const niveau = profondeur(li);

    const top = (niveau === 0)
        ? rectLi.top - rectNav.top + rectLi.height
        : rectLi.top - rectNav.top;

    const left = niveau * LARGEUR_COLONNE;

    return { top, left, sousMenu };
}
