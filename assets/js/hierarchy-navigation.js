document.addEventListener("DOMContentLoaded", () => {

    const menus = document.querySelectorAll(".menu-deroulant");

    function closeBranch(item) {
        item.classList.remove("ouvert");

        item.querySelectorAll(".menu-deroulant.ouvert").forEach(el => {
            el.classList.remove("ouvert");
        });

        item.querySelectorAll(".sous-menu.ouvre-gauche").forEach(el => {
            el.classList.remove("ouvre-gauche");
        });
    }

    menus.forEach(item => {

        const submenu = item.querySelector(":scope > .sous-menu");
        if (!submenu) return;

        item.addEventListener("mouseenter", () => {

            item.classList.add("ouvert");

            submenu.classList.remove("ouvre-gauche");

            requestAnimationFrame(() => {

                const r = submenu.getBoundingClientRect();

                if (r.right > window.innerWidth - 8) {
                    submenu.classList.add("ouvre-gauche");
                }

                if (r.bottom > window.innerHeight - 8) {
                    submenu.style.top = "auto";
                    submenu.style.bottom = "0";
                } else {
                    submenu.style.bottom = "";
                }

            });

        });

        item.addEventListener("mouseleave", () => {
            closeBranch(item);
        });

    });

});
