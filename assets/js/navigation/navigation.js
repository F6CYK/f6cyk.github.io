/* ==========================================================
   NAVIGATION — Logique d'ouverture, fermeture et accessibilité
   ========================================================== */

import { calculerPosition } from "./geometry.js";
import {
    afficherDansOverlay,
    fermerPanneauActuel,
    getPanneauActuel,
    getOverlay
} from "./overlay.js";

/* ----------------------------------------------------------
   Sélection du conteneur de navigation
   ---------------------------------------------------------- */

const nav = document.querySelector("nav");

if (!nav) {
    console.warn("Navigation introuvable. Module désactivé.");
} else {

    const overlay = getOverlay();
    const items = nav.querySelectorAll(".menu-deroulant");

    /* ------------------------------------------------------
       État logique : le <li> actif
       ------------------------------------------------------ */

    let itemActuel = null;

    /* ------------------------------------------------------
       Ouverture d'un panneau
       ------------------------------------------------------ */

    function ouvrir(li) {

        const position = calculerPosition(li);
        if (!position) {
            return;
        }

        const { panneau, x, y } = position;

        if (getPanneauActuel() === panneau) {
            return;
        }

        itemActuel = li;

        afficherDansOverlay(panneau, x, y);
    }

    /* ------------------------------------------------------
       Fermeture globale
       ------------------------------------------------------ */

    function fermerTout() {
        itemActuel = null;
        fermerPanneauActuel();
    }

    /* ------------------------------------------------------
       Zone interactive : nav + overlay
       ------------------------------------------------------ */

    function zoneInteractiveContient(node) {
        if (!node) {
            return false;
        }
        return nav.contains(node) || overlay.contains(node);
    }

    /* ------------------------------------------------------
       Événements d'ouverture
       ------------------------------------------------------ */

    items.forEach(li => {
        li.addEventListener("mouseenter", () => ouvrir(li));
        li.addEventListener("focusin", () => ouvrir(li));
    });

    /* ------------------------------------------------------
       Fermeture en quittant nav OU overlay (souris)
       ------------------------------------------------------ */

    function gererMouseleave(event) {
        const destination = event.relatedTarget;
        if (zoneInteractiveContient(destination)) {
            return;
        }
        fermerTout();
    }

    nav.addEventListener("mouseleave", gererMouseleave);
    overlay.addEventListener("mouseleave", gererMouseleave);

    /* ------------------------------------------------------
       Fermeture en quittant nav OU overlay (clavier)
       ------------------------------------------------------ */

    function gererFocusout(event) {
        const destination = event.relatedTarget;
        if (zoneInteractiveContient(destination)) {
            return;
        }
        fermerTout();
    }

    nav.addEventListener("focusout", gererFocusout);
    overlay.addEventListener("focusout", gererFocusout);

    /* ------------------------------------------------------
       Recalcul après redimensionnement (optimisé)
       ------------------------------------------------------ */

    let resizeEnCours = false;

    window.addEventListener("resize", () => {

        if (!itemActuel || resizeEnCours) {
            return;
        }

        resizeEnCours = true;

        requestAnimationFrame(() => {

            resizeEnCours = false;

            if (itemActuel) {
                ouvrir(itemActuel);
            }
        });
    });
}
