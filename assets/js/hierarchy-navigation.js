document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".menu-deroulant");

    function closeBranch(item) {
        item.classList.remove("ouvert");

        item.querySelectorAll(".menu-deroulant").forEach(el => {
            el.classList.remove("ouvert");
        });

        item.querySelectorAll(".sous-menu").forEach(el => {
            el.classList.remove("ouvre-gauche");
        });
    }

    function positionMenu(submenu) {

        submenu.classList.remove("ouvre-gauche");

        // première mesure
        let r = submenu.getBoundingClientRect();

        if (r.right > window.innerWidth - 8) {

            submenu.classList.add("ouvre-gauche");

            // seconde mesure après changement de côté
            r = submenu.getBoundingClientRect();
        }

    }

    items.forEach(item => {

        const submenu = item.querySelector(":scope > .sous-menu");
        if (!submenu) return;

        item.addEventListener("mouseenter", () => {

            item.classList.add("ouvert");

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    positionMenu(submenu);
                });
            });

        });

        item.addEventListener("mouseleave", () => {
            closeBranch(item);
        });

    });

});
