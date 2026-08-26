---
layout: default
title: Annuaire fournisseurs
permalink: /fournisseurs/
---

<div class="fournisseurs-page">
  <h1>Annuaire fournisseurs</h1>
  <p class="fournisseurs-intro">Fournisseurs européens de matériel radioamateur et CB.</p>

  <form class="fournisseurs-outils">
    <div class="champ">
      <label for="fournisseurs-recherche">Recherche</label>
      <input id="fournisseurs-recherche" type="search"
             placeholder="Fournisseur, pays, spécialité, marque, produit..."
             autocomplete="off">
    </div>

    <div class="champ">
      <label for="fournisseurs-pays">Pays</label>
      <select id="fournisseurs-pays">
        <option value="">Tous les pays</option>
      </select>
    </div>

    <div class="champ">
      <label for="fournisseurs-specialite">Spécialité</label>
      <select id="fournisseurs-specialite">
        <option value="">Toutes les spécialités</option>
      </select>
    </div>
  </form>

  <p id="fournisseurs-compteur" class="fournisseurs-compteur">Chargement...</p>
  <div id="fournisseurs-resultats" class="fournisseurs-liste"></div>
</div>

<script src="/assets/js/fournisseurs.js"></script>

<style>
.fournisseurs-outils {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.champ {
  flex: 1 1 250px;
}

.champ label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

input[type="search"], select {
  width: 100%;
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
