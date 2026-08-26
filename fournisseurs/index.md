---
layout: default
title: Annuaire fournisseurs
permalink: /fournisseurs/
---

<section class="fournisseurs">

  <h1>Annuaire fournisseurs</h1>

  <p>
    Fournisseurs européens de matériel radioamateur et CB.
  </p>

  <div class="fournisseurs-outils">

    <div class="fournisseurs-champ">
      <label for="fournisseurs-recherche">Recherche</label>

      <input
        id="fournisseurs-recherche"
        type="search"
        placeholder="Fournisseur, pays, spécialité, marque, produit…"
        autocomplete="off"
      >
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

  <p
    id="fournisseurs-compteur"
    class="fournisseurs-compteur"
  ></p>

  <div id="fournisseurs-resultats"></div>

</section>

<link
  rel="stylesheet"
  href="{{ '/assets/css/fournisseurs.css' | relative_url }}"
>

<script
  src="{{ '/assets/js/fournisseurs.js' | relative_url }}"
  defer
></script>
