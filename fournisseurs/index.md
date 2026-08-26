---
layout: default
title: Annuaire fournisseurs
permalink: /fournisseurs/
---

<style>
.fournisseurs-page {
    width: 100%;
}

.fournisseurs-page h1 {
    margin: 0 0 1.4rem;
}

.fournisseurs-intro {
    margin: 0 0 1.6rem;
}

.fournisseurs-filtres {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 20px;

    margin: 1.5rem 0 1.75rem;
    padding: 18px;

    border: 1px solid #d0d0d0;
    border-radius: 4px;

    background: #f7f7f7;
}

.fournisseurs-filtre {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.fournisseurs-filtre label {
    display: block;
    margin: 0 0 8px;

    color: #163b67;
    font-weight: 600;
    line-height: 1.2;
}

.fournisseurs-filtre input,
.fournisseurs-filtre select {
    display: block;

    width: 100%;
    height: 40px;
    min-height: 40px;

    box-sizing: border-box;

    margin: 0;
    padding: 8px 10px;

    border: 1px solid #bcbcbc;
    border-radius: 3px;

    background: #ffffff;
    color: #222222;

    font: inherit;
}

.fournisseurs-compteur {
    margin: 0 0 1.5rem;
    color: #555555;
}

.fournisseurs-liste {
    display: grid;
    gap: 1rem;
}

.fournisseurs-pays {
    margin: 0 0 2rem;
}

.fournisseurs-pays h2 {
    margin: 0 0 1rem;
    padding-bottom: 0.45rem;

    border-bottom: 1px solid #d4d4d4;

    color: #163b67;
}

.fournisseur-card {
    padding: 1rem 1.15rem;

    border: 1px solid #d8d8d8;
    border-radius: 4px;

    background: #ffffff;
}

.fournisseur-card h3 {
    margin: 0 0 0.7rem;

    color: #163b67;
    font-size: 1.05rem;
}

.fournisseur-meta {
    margin: 0.45rem 0;
}

.fournisseur-specialites {
    margin: 0.7rem 0;

    color: #555555;
}

.fournisseur-site {
    margin-top: 0.8rem;
}

.fournisseur-site a {
    color: #003366;
    font-weight: 600;
}

@media (max-width: 800px) {
    .fournisseurs-filtres {
        grid-template-columns: 1fr;
    }
}
</style>

<div
    id="fournisseurs-page"
    class="fournisseurs-page"
>

    <h1>Annuaire fournisseurs</h1>

    <p class="fournisseurs-intro">
        Fournisseurs européens de matériel radioamateur et CB.
    </p>

    <div class="fournisseurs-filtres">

        <div class="fournisseurs-filtre">
            <label for="fournisseurs-recherche">
                Recherche
            </label>

            <input
                id="fournisseurs-recherche"
                type="search"
                placeholder="Fournisseur, pays, spécialité, marque, produit..."
                autocomplete="off"
            >
        </div>

        <div class="fournisseurs-filtre">
            <label for="fournisseurs-pays">
                Pays
            </label>

            <select id="fournisseurs-pays">
                <option value="">
                    Tous les pays
                </option>
            </select>
        </div>

        <div class="fournisseurs-filtre">
            <label for="fournisseurs-specialite">
                Spécialité
            </label>

            <select id="fournisseurs-specialite">
                <option value="">
                    Toutes les spécialités
                </option>
            </select>
        </div>

    </div>

    <p
        id="fournisseurs-compteur"
        class="fournisseurs-compteur"
    >
        Chargement...
    </p>

    <div
        id="fournisseurs-resultats"
        class="fournisseurs-liste"
    ></div>

</div>

<script src="/assets/js/fournisseurs.js"></script>
