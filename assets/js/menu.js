document.querySelectorAll(".menu-deroulant").forEach((item) => {

    item.addEventListener("mouseenter", () => {

        const submenu = item.querySelector(":scope > .sous-menu");
        if (!submenu) return;

        submenu.classList.remove("ouvre-gauche");

        const rect = submenu.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            submenu.classList.add("ouvre-gauche");
        }

    });

});
