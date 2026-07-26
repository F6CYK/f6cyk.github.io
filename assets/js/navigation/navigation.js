/* ==========================================================
   NAVIGATION — Ouverture, fermeture, événements
   ========================================================== */

import { calculerPosition } from "./geometry.js";

/* ----------------------------------------------------------
   Sélection des items
   ---------------------------------------------------------- */

const items = document.querySelectorAll(".menu-deroulant");

/* ----------------------------------------------------------
   Préparation de la couche d'affichage
   ---------------------------------------------------------- */

const nav = document.querySelector("nav");

let overlay = nav.querySelector("#nav-overlay");

if (!overlay) {

    overlay = document.createElement("div");
    overlay.id = "nav-overlay";

    nav.appendChild(overlay);
}

const colonnes = [];

/* ----------------------------------------------------------
   Gestion des colonnes
   ---------------------------------------------------------- */

function obtenirColonne(niveau) {

    if (colonnes[niveau]) {
        return colonnes[niveau];
    }

    const colonne = document.createElement("div");

    colonne.className = "nav-colonne";
    colonne.dataset.level = niveau;

    overlay.appendChild(colonne);

    colonnes[niveau] = colonne;

    return colonne;
}

function viderColonnes(depuis) {

    for (let i = depuis; i < colonnes.length; i++) {

        if (colonnes[i]) {
            colonnes[i].replaceChildren();
        }
    }
}

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

    li.addEventListener("focusout", () => fermer(li);
    );
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
