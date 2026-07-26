/* ==========================================================
   OVERLAY
   ----------------------------------------------------------
   Gestion de la couche d'affichage et des colonnes.
   ========================================================== */

import { nav, largeurPanneau } from "./config.js";

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

export function obtenirColonne(niveau) {

    if (colonnes[niveau]) {
        return colonnes[niveau];
    }

    const colonne = document.createElement("div");

    colonne.className = "nav-colonne";
    colonne.dataset.level = niveau;

    colonne.style.left = `${niveau * largeurPanneau}px`;

    overlay.appendChild(colonne);

    colonnes[niveau] = colonne;

    return colonne;
}

/* ----------------------------------------------------------
   Vide toutes les colonnes à partir d'un niveau.
   ---------------------------------------------------------- */

export function viderColonnes(depuis = 0) {

    for (let i = depuis; i < colonnes.length; i++) {

        if (!colonnes[i]) {
            continue;
        }

        colonnes[i].replaceChildren();
        colonnes[i].style.display = "none";
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

    colonne.replaceChildren();
    colonne.style.display = "none";
}
