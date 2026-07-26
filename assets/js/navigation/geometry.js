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

    const rectLi  = li.getBoundingClientRect();
    const rectNav = nav.getBoundingClientRect();

    const niveau = profondeur(li);

    /* Largeur réelle du panneau */
    const largeur = sousMenu.offsetWidth;

    /* Premier niveau sous le menu principal,
       niveaux suivants alignés sur l'item parent */
    const top = (niveau === 0)
        ? rectLi.bottom - rectNav.top
        : rectLi.top - rectNav.top;

    const left = niveau * largeur;

    return {
        top,
        left,
        sousMenu
    };
}
