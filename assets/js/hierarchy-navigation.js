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
            el.classList.remove("ouvre-gauche");
        });
    }

function positionMenu(submenu) {

    submenu.classList.remove("ouvre-gauche");

    const r = submenu.getBoundingClientRect();

    console.log({
        left: r.left,
        right: r.right,
        width: r.width,
        window: window.innerWidth
    });

    if (r.right > window.innerWidth - 8) {
        submenu.classList.add("ouvre-gauche");
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
                requestAnimationFrame(() => {
                    positionMenu(submenu);
                });
            });

        });

        item.addEventListener("mouseleave", () => {

            console.log(
                "Fermeture :",
                item.querySelector(":scope > a")?.textContent.trim()
            );

            closeBranch(item);
        });

    });

});
