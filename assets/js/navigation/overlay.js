/* ==========================================================
   OVERLAY
   ----------------------------------------------------------
   Couche d'affichage indépendante.

   Les sous-menus d'origine ne sont jamais déplacés.

   Chaque colonne contient uniquement une copie temporaire
   du panneau à afficher.

   Responsabilités :
     - création de l'overlay
     - création des colonnes
     - affichage
     - masquage
     - destruction des clones

   Aucun calcul de géométrie n'est effectué ici.
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
   Retourne la colonne correspondant à un niveau.
   ---------------------------------------------------------- */

export function obtenirColonne(niveau, origineX) {

    let colonne = colonnes[niveau];

    if (!colonne) {

        colonne = document.createElement("div");

        colonne.className = "nav-colonne";
        colonne.dataset.level = niveau;

        overlay.appendChild(colonne);

        colonnes[niveau] = colonne;
    }

    colonne.style.left =
        `${origineX + (niveau * largeurColonne)}px`;

    return colonne;
}

/* ==========================================================
   Nettoyage
   ========================================================== */

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

/* ==========================================================
   Affichage
   ========================================================== */

export function afficherPanneau(colonne, panneau, top) {

    colonne.replaceChildren();

    /*
     * IMPORTANT
     *
     * Le DOM logique reste intact.
     *
     * On affiche uniquement un clone.
     */

    const copie = panneau.cloneNode(true);

    copie.classList.add("ouvert");

    colonne.appendChild(copie);

    colonne.style.top = `${top}px`;

    colonne.style.display = "block";

    return copie;
}

/* ==========================================================
   Masquage
   ========================================================== */

export function masquerDepuis(niveau = 0) {

    for (let i = niveau; i < colonnes.length; i++) {

        const colonne = colonnes[i];

        if (!colonne) {
            continue;
        }

        colonne.replaceChildren();

        colonne.style.display = "none";
    }
}

/* ==========================================================
   Destruction complète
   ========================================================== */

export function fermerOverlay() {

    masquerDepuis(0);
}
