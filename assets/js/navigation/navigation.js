/* ==========================================================
   NAVIGATION — Ouverture, fermeture, événements
   ========================================================== */

import { calculerPosition } from "./geometry.js";

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

    sousMenu.style.top  = `${top}px`;
    sousMenu.style.left = `${left}px`;
    sousMenu.classList.add("ouvert");
}

/* ----------------------------------------------------------
   Fermeture d’un panneau
   ---------------------------------------------------------- */

function fermer(li) {
    const sousMenu = li.querySelector(":scope > .sous-menu");
    if (!sousMenu) return;

    sousMenu.classList.remove("ouvert");
}

/* ----------------------------------------------------------
   Événements
   ---------------------------------------------------------- */

items.forEach(li => {

    li.addEventListener("mouseenter", () => ouvrir(li));
    li.addEventListener("focusin", () => ouvrir(li);

});

/* ----------------------------------------------------------
   Fermeture globale
   ---------------------------------------------------------- */

const nav = document.querySelector("nav");

nav.addEventListener("mouseleave", () => {

    document
        .querySelectorAll(".sous-menu.ouvert")
        .forEach(menu => menu.classList.remove("ouvert"));

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
