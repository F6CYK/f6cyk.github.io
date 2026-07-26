/* ==========================================================
   NAVIGATION — Version finale robuste et faiblement couplée
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

    if (!overlay) {
        console.warn("Overlay introuvable. Module désactivé.");
    } else {

        const items = nav.querySelectorAll(".menu-deroulant");

        let itemActuel = null;

        /* ------------------------------------------------------
           Ouverture d'un panneau
           ------------------------------------------------------ */

        function ouvrir(li) {

            const panneau = li.querySelector(".sous-menu");
            if (!panneau) {
                return;
            }

            const position = calculerPosition(li, panneau);
            if (!position) {
                return;
            }

            const { x, y } = position;

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
           Fermeture souris
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
           Fermeture clavier
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
           Recalcul après redimensionnement (optimisé + durci)
           ------------------------------------------------------ */

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
}
