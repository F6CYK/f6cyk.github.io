document.querySelectorAll(".menu-deroulant").forEach((item) => {

    item.addEventListener("mouseenter", () => {

        const submenu = item.querySelector(":scope > .sous-menu");
        if (!submenu) return;

        submenu.classList.remove("ouvre-gauche");

        // Le rendre visible pour pouvoir le mesurer
        submenu.style.visibility = "hidden";
        submenu.style.display = "block";

        const rect = submenu.getBoundingClientRect();

        submenu.style.display = "";
        submenu.style.visibility = "";

        if (rect.right > window.innerWidth - 10) {
            submenu.classList.add("ouvre-gauche");
        }

    });

});
