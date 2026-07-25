/* ==========================================================
   CONFIG — Lecture des variables CSS
   ========================================================== */

export function lireLargeurColonne() {
    return parseFloat(
        getComputedStyle(document.documentElement)
            .getPropertyValue("--nav-largeur-panneau")
    );
}

export function lireRepereGlobal() {
    const nav = document.querySelector("nav");
    if (!nav) {
        console.error("Erreur : aucun <nav> trouvé dans le DOM.");
    }
    return nav;
}
