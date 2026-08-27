---
layout: default
title: Annuaire fournisseurs de matériels radioamateur
permalink: /fournisseurs/
---

<link rel="stylesheet" href="{{ '/assets/css/fournisseurs.css' | relative_url }}">

<section class="fournisseurs-page">

    <h1>Fournisseurs européens de matériels radioamateurs (2026)</h1>
    
    <div class="fournisseurs-outils">
    
        <div class="fournisseurs-champ">
            <label for="fournisseurs-pays">
                Pays
            </label>
    
            <select id="fournisseurs-pays">
                <option value="">Tous les pays</option>
            </select>
        </div>
    
        <div class="fournisseurs-champ">
            <label for="fournisseurs-specialite">
                Spécialité
            </label>
    
            <select id="fournisseurs-specialite">
                <option value="">Toutes les spécialités</option>
            </select>
        </div>
    
    </div>
    
    <p
        id="fournisseurs-compteur"
        class="fournisseurs-compteur"
    ></p>
    
    <div
        id="fournisseurs-resultats"
        class="fournisseurs-liste"
    ></div>

</section>

<script src="{{ '/assets/js/fournisseurs.js' | relative_url }}" defer></script>
