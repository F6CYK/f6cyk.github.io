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

        item.addEventListener("mouseleave", (event) => {

            if (event.relatedTarget && item.contains(event.relatedTarget))
                return;

            closeBranch(item);

        });

    });

});
