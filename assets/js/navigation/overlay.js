/* ==========================================================
   OVERLAY
   ----------------------------------------------------------
   Gestion de la couche d'affichage et des colonnes.
   Chaque colonne est positionnée relativement au menu
   principal auquel elle appartient.
   ========================================================== */

import {
    lireLargeurColonne,
    lireRepereGlobal
} from "./config.js";

const nav = lireRepereGlobal();
const largeurPanneau = lireLargeurColonne();

let overlay = nav.querySelector("#nav-overlay");

if (!overlay) {

    overlay = document.createElement("div");
    overlay.id = "nav-overlay";

    nav.appendChild(overlay);
}

const colonnes = [];

/* ----------------------------------------------------------
   Retourne la colonne correspondant au niveau demandé.
   ---------------------------------------------------------- */

export function obtenirColonne(niveau, leftOrigine = 0) {

    let colonne = colonnes[niveau];

    if (!colonne) {

        colonne = document.createElement("div");

        colonne.className = "nav-colonne";
        colonne.dataset.level = niveau;

        overlay.appendChild(colonne);

        colonnes[niveau] = colonne;
    }

    colonne.style.left =
        `${leftOrigine + (niveau * largeurPanneau)}px`;

    return colonne;
}

/* ----------------------------------------------------------
   Vide toutes les colonnes à partir d'un niveau.
   ---------------------------------------------------------- */

export function viderColonnes(depuis = 0) {

    for (let i = depuis; i < colonnes.length; i++) {

        const colonne = colonnes[i];

        if (!colonne) {
            continue;
        }

        colonne.replaceChildren();
        colonne.style.display = "none";
    }
}

/* ----------------------------------------------------------
   Affiche une colonne.
   ---------------------------------------------------------- */

export function afficherColonne(colonne, top) {

    colonne.style.top = `${top}px`;
    colonne.style.display = "block";
}

/* ----------------------------------------------------------
   Masque une colonne.
   ---------------------------------------------------------- */

export function masquerColonne(colonne) {

    if (!colonne) {
        return;
    }

    colonne.replaceChildren();
    colonne.style.display = "none";
}
