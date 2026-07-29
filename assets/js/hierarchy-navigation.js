document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".menu-deroulant");

    function closeBranch(item) {
        item.classList.remove("ouvert", "ouvre-gauche", "ouvre-droite");

        item.querySelectorAll(".menu-deroulant").forEach(el => {
            el.classList.remove("ouvert", "ouvre-gauche", "ouvre-droite");
        });
    }

    items.forEach(item => {

        if (!item.querySelector(":scope > .sous-menu"))
            return;

        item.addEventListener("mouseenter", () => {

            // Ferme toutes les autres branches
            document.querySelectorAll(".menu-deroulant.ouvert").forEach(menu => {

                if (menu === item) return;
                if (menu.contains(item)) return;      // ancêtre
                if (item.contains(menu)) return;      // descendant

                closeBranch(menu);
            });

            const rect = item.getBoundingClientRect();
            const largeurSousMenu = 320;

            item.classList.remove("ouvre-gauche", "ouvre-droite");

            if (window.innerWidth - rect.right > largeurSousMenu) {
                item.classList.add("ouvre-droite");
            } else {
                item.classList.add("ouvre-gauche");
            }

            item.classList.add("ouvert");
        });

    });

    // Fermeture lorsque la souris quitte complètement la barre de menus
    const nav = document.querySelector(".menu-principal");

    if (nav) {
        nav.addEventListener("mouseleave", () => {
            document.querySelectorAll(".menu-deroulant.ouvert").forEach(closeBranch);
        });
    }

});
