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

            // Largeur réelle du sous-menu
   const largeurSousMenu = submenu.offsetWidth || 320;

   const placeDroite = window.innerWidth - rect.right;
   const placeGauche = rect.left;

   item.classList.remove("ouvre-gauche", "ouvre-droite");

   if (placeDroite >= largeurSousMenu || placeDroite >= placeGauche) {
       item.classList.add("ouvre-droite");
   } else {
       item.classList.add("ouvre-gauche");
   }         

            item.classList.add("ouvert");

        });

item.addEventListener("mouseenter", () => {

    const parentMenu = item.parentElement.closest(".menu-deroulant");

    item.classList.remove("ouvre-gauche", "ouvre-droite");

    // Si le parent ouvre à gauche, tous les descendants ouvrent à gauche.
    if (parentMenu && parentMenu.classList.contains("ouvre-gauche")) {

        item.classList.add("ouvre-gauche");

    } else {

        const rect = item.getBoundingClientRect();
        const largeurSousMenu = submenu.offsetWidth || 320;

        if (window.innerWidth - rect.right >= largeurSousMenu) {
            item.classList.add("ouvre-droite");
        } else {
            item.classList.add("ouvre-gauche");
        }

    }

    item.classList.add("ouvert");

});
        
