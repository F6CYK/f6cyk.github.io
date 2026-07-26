/* ==========================================================
   OVERLAY
   ========================================================== */

let overlay = document.getElementById("nav-overlay");

if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "nav-overlay";
    document.body.appendChild(overlay);
}

const colonnes = [];

/* ----------------------------------------------------------
   Retourne une colonne
   ---------------------------------------------------------- */

export function obtenirColonne(niveau) {

    let colonne = colonnes[niveau];

    if (colonne) {
        return colonne;
    }

    colonne = document.createElement("div");
    colonne.className = "nav-colonne";
    colonne.dataset.level = niveau;

    overlay.appendChild(colonne);
    colonnes[niveau] = colonne;

    return colonne;
}

/* ----------------------------------------------------------
   Affichage
   ---------------------------------------------------------- */

export function afficherColonne(colonne, panneau, top) {

    // Le panneau original reste dans le DOM du menu.
    // On affiche une copie pour préserver la structure CSS.
    const copie = panneau.cloneNode(true);

    colonne.replaceChildren();
    colonne.appendChild(copie);

    colonne.style.top = `${top}px`;
    colonne.style.display = "block";
}

/* ----------------------------------------------------------
   Fermeture
   ---------------------------------------------------------- */

export function viderColonnes(depuis = 0) {

    for (let niveau = depuis; niveau < colonnes.length; niveau++) {

        const colonne = colonnes[niveau];

        if (!colonne) {
            continue;
        }

        colonne.replaceChildren();
        colonne.style.display = "none";
    }
}
