/* ==========================================================
   NAVIGATION — Ouverture, fermeture, événements
   ========================================================== */

import { calculerPosition } from "./geometry.js";

import {
    obtenirColonne,
    viderColonnes,
    afficherColonne
} from "./overlay.js";

/* ----------------------------------------------------------
   Sélection des items
   ---------------------------------------------------------- */

const nav = document.querySelector("nav");
const items = document.querySelectorAll(".menu-deroulant");

/* ----------------------------------------------------------
   Ouverture d’un panneau
   ---------------------------------------------------------- */

function ouvrir(li) {

    const pos = calculerPosition(li);

    if (!pos) {
        return;
    }

    const {
        niveau,
        top,
        leftOrigine,
        sousMenu
    } = pos;

    viderColonnes(niveau);

    const colonne = obtenirColonne(
        niveau,
        leftOrigine
    );

    colonne.replaceChildren();
    colonne.appendChild(sousMenu);

    afficherColonne(colonne, top);

    sousMenu.classList.add("ouvert");
}

/* ----------------------------------------------------------
   Fermeture globale
   ---------------------------------------------------------- */

function fermerTout() {

    document
        .querySelectorAll(".sous-menu.ouvert")
        .forEach(menu => {
            menu.classList.remove("ouvert");
        });

    viderColonnes(0);
}

/* ----------------------------------------------------------
   Événements
   ---------------------------------------------------------- */

items.forEach(li => {

    li.addEventListener("mouseenter", () => {
        ouvrir(li);
    });

    li.addEventListener("focusin", () => {
        ouvrir(li);
    });

});

/* ----------------------------------------------------------
   Fermeture uniquement en quittant la navigation
   ---------------------------------------------------------- */

if (nav) {

    nav.addEventListener("mouseleave", event => {

        const vers = event.relatedTarget;

        if (vers && nav.contains(vers)) {
            return;
        }

        fermerTout();

    });

}

/* ----------------------------------------------------------
   Recalcul sur redimensionnement
   ---------------------------------------------------------- */

window.addEventListener("resize", () => {

    const ouvert = document.querySelector(".sous-menu.ouvert");

    if (!ouvert) {
        return;
    }

    const li = ouvert.closest(".menu-deroulant");

    if (li) {
        ouvrir(li);
    }

});
