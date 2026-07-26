/* ==========================================================
   CONFIG
   ----------------------------------------------------------
   Point d'accès unique aux paramètres de navigation.
   Aucune logique métier.
   Aucune manipulation du DOM.
   ========================================================== */

/* ----------------------------------------------------------
   Largeur d'une colonne
   ---------------------------------------------------------- */

export function lireLargeurColonne() {

    const valeur = getComputedStyle(document.documentElement)
        .getPropertyValue("--nav-largeur-panneau")
        .trim();

    return Number.parseFloat(valeur);
}

/* ----------------------------------------------------------
   Élément <nav> principal
   ---------------------------------------------------------- */

export function lireRepereGlobal() {

    const nav = document.querySelector("nav");

    if (!nav) {
        throw new Error("Navigation introuvable.");
    }

    return nav;
}
