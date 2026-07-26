/* ==========================================================
   NAVIGATION — Ouverture, fermeture, événements
   ========================================================== */

import { calculerPosition } from "./geometry.js";

import {
    obtenirColonne,
    viderColonnes,
    afficherColonne,
    masquerColonne
} from "./overlay.js";

/* ----------------------------------------------------------
   Sélection des items
   ---------------------------------------------------------- */

const items = document.querySelectorAll(".menu-deroulant");

/* ----------------------------------------------------------
   Ouverture d’un panneau
   ---------------------------------------------------------- */

function ouvrir(li) {

    const pos = calculerPosition(li);
    if (!pos) return;

    const { top, left, sousMenu } = pos;

    sousMenu.style.top = `${top}px`;
    sousMenu.style.left = `${left}px`;

    sousMenu.classList.add("ouvert");
}

/* ----------------------------------------------------------
   Fermeture d’un panneau
   ---------------------------------------------------------- */

function fermer(li) {

    const sousMenu = li.querySelector(".sous-menu");

    if (!sousMenu) return;

    sousMenu.classList.remove("ouvert");
}

/* ----------------------------------------------------------
   Événements
   ---------------------------------------------------------- */

items.forEach(li => {

    const sousMenu = li.querySelector(".sous-menu");

    li.addEventListener("mouseenter", () => ouvrir(li));
    li.addEventListener("focusin", () => ouvrir(li));

    if (sousMenu) {

        sousMenu.addEventListener("mouseleave", event => {

            const vers = event.relatedTarget;

            if (vers && li.contains(vers)) {
                return;
            }

            fermer(li);
        });
    }

    li.addEventListener("focusout", () => {
        fermer(li);
    });

});

/* ----------------------------------------------------------
   Recalcul sur redimensionnement
   ---------------------------------------------------------- */

window.addEventListener("resize", () => {

    items.forEach(li => {

        const sousMenu = li.querySelector(".sous-menu");

        if (sousMenu && sousMenu.classList.contains("ouvert")) {
            ouvrir(li);
        }
    });
});
