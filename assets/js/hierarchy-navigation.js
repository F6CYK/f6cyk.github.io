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

            const rect = item.getBoundingClientRect();

            item.classList.remove("ouvre-gauche", "ouvre-droite");

            if (window.innerWidth - rect.right >= 320) {
                item.classList.add("ouvre-droite");
            } else {
                item.classList.add("ouvre-gauche");
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

/* Ouverture vers la gauche */

.sous-menu .menu-deroulant.ouvre-gauche > .sous-menu{
    top:10px;
    left:auto;
    right:calc(100% - 8px);
}

/* Ouverture vers la droite */

.sous-menu .menu-deroulant.ouvre-droite > .sous-menu{
    top:10px;
    left:calc(100% - 8px);
    right:auto;
}

/* Flèches */

.sous-menu .menu-deroulant.ouvre-gauche > a::before{
    display:inline-block;
    width:16px;
    margin-right:6px;
    content:"◀";
}

.sous-menu .menu-deroulant.ouvre-droite > a::before{
    display:inline-block;
    width:16px;
    margin-right:6px;
    content:"▶";
}

.sous-menu .menu-deroulant > a::after{
    content:none;
}
