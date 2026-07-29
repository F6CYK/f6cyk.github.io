document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector(".menu-general");
    const items = document.querySelectorAll(".menu-deroulant");

    function closeBranch(item) {
        item.classList.remove("ouvert", "ouvre-gauche", "ouvre-droite");

        item.querySelectorAll(".menu-deroulant").forEach(el => {
            el.classList.remove("ouvert", "ouvre-gauche", "ouvre-droite");
        });
    }

    function closeAll() {
        items.forEach(closeBranch);
    }

    items.forEach(item => {

        const submenu = item.querySelector(":scope > .sous-menu");
        if (!submenu) return;

        item.addEventListener("mouseenter", () => {

            // Ferme les menus qui ne sont pas dans la branche courante
            items.forEach(menu => {

                if (menu === item) return;
                if (menu.contains(item)) return;
                if (item.contains(menu)) return;

                closeBranch(menu);
            });

            // Choix du sens d'ouverture
            item.classList.remove("ouvre-gauche", "ouvre-droite");

            const rect = item.getBoundingClientRect();
            const largeur = submenu.offsetWidth || 320;

            if (window.innerWidth - rect.right > largeur) {
                item.classList.add("ouvre-droite");
            } else {
                item.classList.add("ouvre-gauche");
            }

            item.classList.add("ouvert");
        });

    });

    if (nav) {
        nav.addEventListener("mouseleave", closeAll);
    }

});
