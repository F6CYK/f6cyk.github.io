---
layout: default
title: Annuaire fournisseurs
permalink: /fournisseurs/
---

<div class="fournisseurs-page" data-fournisseurs-url="{{ '/assets/data/fournisseurs.json' | relative_url }}">

<h1>Annuaire fournisseurs</h1>

<p class="fournisseurs-intro">Annuaire des fournisseurs de matériel radioamateur et CB.</p>

<div class="fournisseurs-filtres" role="search" aria-label="Recherche dans l'annuaire">
    <div class="fournisseurs-champ">
        <label for="fournisseurs-recherche">Recherche</label>
        <input id="fournisseurs-recherche" type="search" placeholder="Fournisseur, pays, spécialité, marque, produit…" autocomplete="off">
    </div>
    <div class="fournisseurs-champ">
        <label for="fournisseurs-pays">Pays</label>
        <select id="fournisseurs-pays">
            <option value="">Tous les pays</option>
        </select>
    </div>
    <div class="fournisseurs-champ">
        <label for="fournisseurs-specialite">Spécialité</label>
        <select id="fournisseurs-specialite">
            <option value="">Toutes les spécialités</option>
        </select>
    </div>
</div>

<div class="fournisseurs-resultats" aria-live="polite">
    <span id="fournisseurs-compteur"></span>
</div>

<div id="fournisseurs-annuaire" class="fournisseurs-annuaire">
    <p>Chargement de l'annuaire…</p>
</div>

<noscript>
    <p class="note">JavaScript doit être activé pour consulter l'annuaire fournisseurs.</p>
</noscript>

</div>

<link rel="stylesheet" href="{{ '/assets/css/fournisseurs.css' | relative_url }}">

<script src="{{ '/assets/js/fournisseurs.js' | relative_url }}" defer></script>
