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
    const sousMenu = li.querySelector(".sous-menu");
    if (!sousMenu) return;
    sousMenu.classList.remove("ouvert");
}

items.forEach(li => {
    const sousMenu = li.querySelector(".sous-menu");

    li.addEventListener("mouseenter", () => ouvrir(li));
    li.addEventListener("focusin",    () => ouvrir(li));

    // Fermeture uniquement quand la souris quitte le panneau lui-même
    if (sousMenu) {
        sousMenu.addEventListener("mouseleave", (event) => {
    const vers = event.relatedTarget;

    // Si la souris va vers un descendant, on ne ferme pas
    if (vers && li.contains(vers)) {
        return;
    }

    fermer(li);
});

    }

    // Fermeture au clavier
    li.addEventListener("focusout", () => fermer(li));
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
