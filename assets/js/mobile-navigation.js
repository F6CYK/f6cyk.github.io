document.addEventListener("DOMContentLoaded", () => {

    const bouton = document.querySelector(".menu-mobile-toggle");
    const menu = document.querySelector("nav.menu-general");

    if (!bouton || !menu)
        return;

    bouton.addEventListener("click", () => {

        menu.classList.toggle("menu-ouvert");

    });

});
