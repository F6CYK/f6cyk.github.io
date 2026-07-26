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
   Sélection des éléments
   ---------------------------------------------------------- */

const nav = document.querySelector("nav");
const items = nav.querySelectorAll(".menu-deroulant");

/* ----------------------------------------------------------
   Etat de la navigation
   ---------------------------------------------------------- */

let itemOuvert = null;

/* ----------------------------------------------------------
   Ouverture d'un panneau
   ---------------------------------------------------------- */

function ouvrir(li) {

    const position = calculerPosition(li);
    if (!position) {
        return;
    }

    const { panneau, niveau, x, y } = position;

    // On ne modifie l’état ouvert que si un panneau existe réellement.
    if (!panneau) {
        return;
    }

    viderColonnes(niveau);

    const colonne = obtenirColonne(niveau);

    // Position horizontale
    colonne.style.left = `${x}px`;

    // Affichage du panneau (copie gérée dans overlay.js)
    afficherColonne(colonne, panneau, y);

    itemOuvert = li;
}

/* ----------------------------------------------------------
   Fermeture globale
   ---------------------------------------------------------- */

function fermerTout() {
    itemOuvert = null;
    viderColonnes(0);
}

/* ----------------------------------------------------------
   Ouverture
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
   Fermeture en quittant la navigation
   ---------------------------------------------------------- */

if (nav) {

    nav.addEventListener("mouseleave", event => {

        const destination = event.relatedTarget;

        // Si la souris reste dans nav, on ne ferme pas.
        if (destination && nav.contains(destination)) {
            return;
        }

        fermerTout();
    });

}

/* ----------------------------------------------------------
   Recalcul après redimensionnement
   ---------------------------------------------------------- */

window.addEventListener("resize", () => {

    if (!itemOuvert) {
        return;
    }

    // Recalcule la position du panneau original
    ouvrir(itemOuvert);

});

