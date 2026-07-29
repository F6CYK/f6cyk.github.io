document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".menu-deroulant");

    function closeBranch(item) {

        item.classList.remove("ouvert");

        item.querySelectorAll(".menu-deroulant").forEach(el => {
            el.classList.remove("ouvert");
        });
    }

    items.forEach(item => {

        if (!item.querySelector(":scope > .sous-menu"))
            return;

        item.addEventListener("mouseenter", () => {
            item.classList.add("ouvert");
        });

item.addEventListener("mouseenter", () => {

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

});
