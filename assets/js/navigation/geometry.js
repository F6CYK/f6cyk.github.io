/* ==========================================================
   GEOMETRY — Niveau hiérarchique et position verticale
   ========================================================== */

import { lireRepereGlobal } from "./config.js";

const nav = lireRepereGlobal();

/* ----------------------------------------------------------
   Profondeur d'un élément
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
   Position verticale du panneau
   ---------------------------------------------------------- */

export function calculerPosition(li) {

    const sousMenu = li.querySelector(":scope > .sous-menu");

    if (!sousMenu) {
        return null;
    }

    const rectNav = nav.getBoundingClientRect();
    const rectLi  = li.getBoundingClientRect();

    const niveau = profondeur(li);

    const top = (niveau === 0)
        ? rectLi.bottom - rectNav.top
        : rectLi.top - rectNav.top;

    return {
        niveau,
        top,
        sousMenu
    };
}
