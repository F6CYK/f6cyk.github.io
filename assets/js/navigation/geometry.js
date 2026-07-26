/* ==========================================================
   GEOMETRY — Niveau hiérarchique et géométrie des panneaux
   ----------------------------------------------------------
   Calcule :
     - le niveau hiérarchique
     - la position verticale
     - l'origine horizontale du menu racine
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
   Retrouve le <li> du menu principal auquel appartient
   un élément, quel que soit son niveau.
   ---------------------------------------------------------- */

function menuRacine(li) {

    let courant = li;

    while (courant) {

        const parent = courant.parentElement;

        if (!parent) {
            break;
        }

        if (parent.parentElement === nav) {
            return courant;
        }

        courant = parent.closest("li");
    }

    return li;
}

/* ----------------------------------------------------------
   Position complète d'un panneau
   ---------------------------------------------------------- */

export function calculerPosition(li) {

    const sousMenu = li.querySelector(":scope > .sous-menu");

    if (!sousMenu) {
        return null;
    }

    const rectNav = nav.getBoundingClientRect();
    const rectLi = li.getBoundingClientRect();

    const niveau = profondeur(li);

    const top = (niveau === 0)
        ? rectLi.bottom - rectNav.top
        : rectLi.top - rectNav.top;

    const racine = (niveau === 0)
        ? li
        : menuRacine(li);

    const rectRacine = racine.getBoundingClientRect();

    const leftOrigine = rectRacine.left - rectNav.left;

    return {
        niveau,
        top,
        leftOrigine,
        sousMenu
    };
}
