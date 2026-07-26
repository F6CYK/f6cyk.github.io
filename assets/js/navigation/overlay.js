/* ==========================================================
   OVERLAY
   ----------------------------------------------------------
   Couche de rendu.

   Le DOM logique n'est jamais modifié.

   Les colonnes affichent uniquement une COPIE du sous-menu.

   Aucune géométrie n'est calculée ici.
   ========================================================== */

import {
    lireLargeurColonne,
    lireRepereGlobal
} from "./config.js";

const nav = lireRepereGlobal();

const largeurColonne = lireLargeurColonne();

/* ==========================================================
   Overlay
   ========================================================== */

let overlay = nav.querySelector("#nav-overlay");

if (!overlay) {

    overlay = document.createElement("div");

    overlay.id = "nav-overlay";

    nav.appendChild(overlay);

}

/* ==========================================================
   Colonnes
   ========================================================== */

const colonnes = [];

/* ----------------------------------------------------------
   Retourne la colonne correspondant au niveau demandé.
   ---------------------------------------------------------- */

export function obtenirColonne(niveau, origineX = 0) {

    let colonne = colonnes[niveau];

    if (!colonne) {

        colonne = document.createElement("div");

        colonne.className = "nav-colonne";

        colonne.dataset.level = niveau;

        overlay.appendChild(colonne);

        colonnes[niveau] = colonne;

    }

    colonne.style.left =
        `${origineX + niveau * largeurColonne}px`;

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
   Affiche un panneau.

   IMPORTANT

   panneau est toujours le menu ORIGINAL.

   Celui-ci n'est jamais déplacé.

   On affiche uniquement un clone.
   ---------------------------------------------------------- */

export function afficherPanneau({

    niveau,

    top,

    origineX,

    panneau

}) {

    const colonne = obtenirColonne(

        niveau,

        origineX

    );

    colonne.replaceChildren();

    const copie = panneau.cloneNode(true);

    copie.classList.add("ouvert");

    colonne.appendChild(copie);

    colonne.style.top = `${top}px`;

    colonne.style.display = "block";

    return copie;

}

/* ----------------------------------------------------------
   Masque une colonne.
   ---------------------------------------------------------- */

export function masquerColonne(niveau) {

    const colonne = colonnes[niveau];

    if (!colonne) {
        return;
    }

    colonne.replaceChildren();

    colonne.style.display = "none";

}

/* ----------------------------------------------------------
   Masque toutes les colonnes.
   ---------------------------------------------------------- */

export function fermerOverlay() {

    viderColonnes(0);

}
