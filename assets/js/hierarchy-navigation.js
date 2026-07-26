document.addEventListener("DOMContentLoaded", () => {

    console.log("hierarchy-navigation chargé");

    const items = document.querySelectorAll(".menu-deroulant");
    console.log("Menus trouvés :", items.length);

    function closeBranch(item) {

        item.classList.remove("ouvert");

        item.querySelectorAll(".menu-deroulant").forEach(el => {
            el.classList.remove("ouvert");
        });

        item.querySelectorAll(".sous-menu").forEach(el => {
            el.classList.remove(
                "ouvre-gauche",
                "ouvre-droite"
            );
        });
    }

    function positionMenu(submenu) {

        /* Remise à zéro */

        submenu.classList.remove(
            "ouvre-gauche",
            "ouvre-droite"
        );

        /* Position par défaut */

        submenu.classList.add("ouvre-droite");

        let r = submenu.getBoundingClientRect();

        console.log({
            left: r.left,
            right: r.right,
            width: r.width,
            window: window.innerWidth
        });

        /* Si débordement, on inverse */

        if (r.right > window.innerWidth - 8) {

            console.log("OUVERTURE À GAUCHE");

            submenu.classList.remove("ouvre-droite");
            submenu.classList.add("ouvre-gauche");

            /* Mesure de contrôle */

            r = submenu.getBoundingClientRect();

            console.log({
                gauche: r.left,
                droite: r.right
            });
        }
    }

    items.forEach(item => {

        const submenu = item.querySelector(":scope > .sous-menu");

        if (!submenu)
            return;

        item.addEventListener("mouseenter", () => {

            console.log(
                "Ouverture :",
                item.querySelector(":scope > a")?.textContent.trim()
            );

            item.classList.add("ouvert");

            requestAnimationFrame(() => {
                positionMenu(submenu);
            });

        });

        item.addEventListener("mouseleave", (event) => {

            if (event.relatedTarget && item.contains(event.relatedTarget))
                return;

            console.log(
                "Fermeture :",
                item.querySelector(":scope > a")?.textContent.trim()
            );

            closeBranch(item);

        });

    });

});
