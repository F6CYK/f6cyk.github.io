/* ==========================================================
   NAVIGATION — Version stabilisée et robuste
   ========================================================== */

import { calculerPosition } from "./geometry.js";
import {
    afficherDansOverlay,
    fermerPanneauActuel,
    getPanneauActuel,
    getOverlay
} from "./overlay.js";

const nav = document.querySelector("nav");

if (!nav) {
    console.warn("Navigation introuvable. Module désactivé.");
} else {

    const overlay = getOverlay();

    if (!overlay) {
        console.warn("Overlay introuvable. Module désactivé.");
        return;
    }

    const items = nav.querySelectorAll(".menu-deroulant");

    let itemActuel = null;

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

    function fermerTout() {
        itemActuel = null;
        fermerPanneauActuel();
    }

    function zoneInteractiveContient(node) {
        if (!node) {
            return false;
        }
        return nav.contains(node) || overlay.contains(node);
    }

    items.forEach(li => {
        li.addEventListener("mouseenter", () => ouvrir(li));
        li.addEventListener("focusin", () => ouvrir(li));
    });

    function gererMouseleave(event) {
        const destination = event.relatedTarget;
        if (zoneInteractiveContient(destination)) {
            return;
        }
        fermerTout();
    }

    nav.addEventListener("mouseleave", gererMouseleave);
    overlay.addEventListener("mouseleave", gererMouseleave);

    function gererFocusout(event) {
        const destination = event.relatedTarget;
        if (zoneInteractiveContient(destination)) {
            return;
        }
        fermerTout();
    }

    nav.addEventListener("focusout", gererFocusout);
    overlay.addEventListener("focusout", gererFocusout);

    let resizeEnCours = false;

    window.addEventListener("resize", () => {

        if (!itemActuel || resizeEnCours) {
            return;
        }

        resizeEnCours = true;

        requestAnimationFrame(() => {
            try {
                if (itemActuel) {
                    ouvrir(itemActuel);
                }
            } finally {
                resizeEnCours = false;
            }
        });
    });
}
