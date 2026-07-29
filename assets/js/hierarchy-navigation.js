document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".menu-deroulant");

    function closeBranch(item) {

        item.classList.remove("ouvert", "ouvre-gauche", "ouvre-droite");

        item.querySelectorAll(".menu-deroulant").forEach(el => {
            el.classList.remove("ouvert", "ouvre-gauche", "ouvre-droite");
        });
    }

    items.forEach(item => {

        const submenu = item.querySelector(":scope > .sous-menu");
        if (!submenu)
            return;

        item.addEventListener("mouseenter", () => {

            item.classList.remove("ouvre-gauche", "ouvre-droite");

            // Si le menu appartient à Documentation,
            // toute la branche ouvre vers la gauche.
            if (item.closest(".menu-gauche")) {

                item.classList.add("ouvre-gauche");

            } else {

                const rect = item.getBoundingClientRect();
                const largeurSousMenu = submenu.offsetWidth || 320;

                if (window.innerWidth - rect.right >= largeurSousMenu) {
                    item.classList.add("ouvre-droite");
                } else {
                    item.classList.add("ouvre-gauche");
                }

            }

            item.classList.add("ouvert");

        });

        item.addEventListener("mouseleave", (event) => {

            if (event.relatedTarget && item.contains(event.relatedTarget))
                return;

            closeBranch(item);

        });

    });

});
