document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       Paramètres géométriques
       --------------------------------------------------------- */

    const LARGEUR_COLONNE = 220;   // largeur d'une colonne
    const MARGE_GAUCHE    = 0;     // décalage horizontal global (optionnel)

    const nav = document.querySelector("nav"); // repère global unique


    /* ---------------------------------------------------------
       Calcul de la profondeur d'un <li class="menu-deroulant">
       --------------------------------------------------------- */

    function profondeur(li) {
        let niveau = 0;
        let courant = li.parentElement;

        while (courant && courant.classList) {
            if (courant.classList.contains("sous-menu")) {
                niveau++;
            }
            courant = courant.parentElement;
        }

        return niveau; // 0 = colonne 1, 1 = colonne 2, etc.
    }


    /* ---------------------------------------------------------
       Positionnement géométrique exact d'un sous-menu
       --------------------------------------------------------- */

    function positionnerSousMenu(li) {
        const sousMenu = li.querySelector(".sous-menu");
        if (!sousMenu) return;

        const rectLi  = li.getBoundingClientRect();
        const rectNav = nav.getBoundingClientRect();

        const niveau = profondeur(li);

        /* Calculs géométriques exacts */
        const top  = rectLi.top - rectNav.top + rectLi.height;
        const left = MARGE_GAUCHE + niveau * LARGEUR_COLONNE;

        sousMenu.style.top  = `${top}px`;
        sousMenu.style.left = `${left}px`;
    }


    /* ---------------------------------------------------------
       Activation : survol et focus
       --------------------------------------------------------- */

    const items = document.querySelectorAll(".menu-deroulant");

    items.forEach(li => {
        li.addEventListener("mouseenter", () => positionnerSousMenu(li));
        li.addEventListener("focusin",    () => positionnerSousMenu(li));
    });


    /* ---------------------------------------------------------
       Recalcul en cas de redimensionnement
       --------------------------------------------------------- */

    window.addEventListener("resize", () => {
        items.forEach(li => positionnerSousMenu(li));
    });

});
