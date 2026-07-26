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

    if (!pos) {
        return;
    }

    const {
        niveau,
        top,
        leftOrigine,
        sousMenu
    } = pos;

    const colonne = obtenirColonne(
        niveau,
        leftOrigine
    );

    viderColonnes(niveau + 1);

    colonne.replaceChildren();
    colonne.appendChild(sousMenu);

    afficherColonne(colonne, top);

    sousMenu.classList.add("ouvert");
}

/* ----------------------------------------------------------
   Fermeture d’un panneau
   ---------------------------------------------------------- */

function fermer(li) {

    const pos = calculerPosition(li);

    if (!pos) {
        return;
    }

    const {
        niveau,
        sousMenu
    } = pos;

    sousMenu.classList.remove("ouvert");

    viderColonnes(niveau);
}

/* ----------------------------------------------------------
   Événements
   ---------------------------------------------------------- */

items.forEach(li => {

    const sousMenu = li.querySelector(":scope > .sous-menu");

    li.addEventListener("mouseenter", () => {
        ouvrir(li);
    });

    li.addEventListener("focusin", () => {
        ouvrir(li);
    });

    if (sousMenu) {

        sousMenu.addEventListener("mouseleave", event => {

            const vers = event.relatedTarget;

            if (vers && li.contains(vers)) {
                return;
            }

            fermer(li);
        });

    }

    li.addEventListener("focusout", event => {

        const vers = event.relatedTarget;

        if (vers && li.contains(vers)) {
            return;
        }

        fermer(li);
    });

});

/* ----------------------------------------------------------
   Recalcul sur redimensionnement
   ---------------------------------------------------------- */

window.addEventListener("resize", () => {

    items.forEach(li => {

        const sousMenu = li.querySelector(":scope > .sous-menu");

        if (sousMenu && sousMenu.classList.contains("ouvert")) {
            ouvrir(li);
        }

    });

});
