---
layout: default
title: Annuaire fournisseurs
permalink: /fournisseurs/
---

<style>
.fournisseurs-page { width: 100%; }
.fournisseurs-page h1 { margin-bottom: 1.4rem; }
.fournisseurs-intro { margin-bottom: 1.6rem; }
.fournisseurs-filtres {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 1rem;
  margin: 1.5rem 0 1.75rem;
  padding: 1rem;
  border: 1px solid #d0d0d0;
  background: #f7f7f7;
  border-radius: 4px;
}
.fournisseurs-champ { min-width: 0; }
.fournisseurs-champ label {
  display: block;
  margin: 0 0 .45rem;
  color: #163b67;
  font-weight: 600;
}
.fournisseurs-champ input,
.fournisseurs-champ select {
  display: block;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  padding: .5rem .65rem;
  border: 1px solid #bcbcbc;
  border-radius: 3px;
  background: #fff;
  color: #222;
  font: inherit;
}
.fournisseurs-compteur { margin: 0 0 1.5rem; color: #555; }
.fournisseurs-groupe { margin: 2rem 0 2.5rem; }
.fournisseurs-groupe > h2 {
  margin: 0 0 1rem;
  padding-bottom: .45rem;
  border-bottom: 1px solid #d4d4d4;
  color: #163b67;
}
.fournisseurs-pays { margin: 1.5rem 0; }
.fournisseurs-pays > h3 { margin: 0 0 .8rem; color: #333; }
.fournisseurs-liste { display: grid; gap: 1rem; }
.fournisseur-carte {
  padding: 1rem 1.15rem;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  background: #fff;
}
.fournisseur-carte h4 { margin: 0 0 .7rem; color: #163b67; font-size: 1.05rem; }
.fournisseur-meta { margin: .45rem 0; }
.fournisseur-specialites { margin: .7rem 0; color: #555; }
.fournisseur-produits { margin: .5rem 0 .7rem 1.2rem; }
.fournisseur-actions { margin-top: .8rem; }
.fournisseur-actions a { color: #003366; font-weight: 600; }
.fournisseurs-vide { margin: 1.5rem 0; color: #666; }
@media (max-width: 800px) {
  .fournisseurs-filtres { grid-template-columns: 1fr; }
}
</style>

<div
  class="fournisseurs-page"
  id="fournisseurs-page"
  data-fournisseurs-url="{{ '/assets/data/fournisseurs.json' | relative_url }}"
>
  <h1>Annuaire fournisseurs</h1>

  <p class="fournisseurs-intro">
    Fournisseurs européens de matériel radioamateur et CB.
  </p>

  <div class="fournisseurs-filtres">
    <div class="fournisseurs-champ">
      <label for="fournisseurs-recherche">Recherche</label>
      <input
        id="fournisseurs-recherche"
        type="search"
        placeholder="Fournisseur, pays, spécialité, marque, produit..."
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

  <p id="fournisseurs-compteur" class="fournisseurs-compteur"></p>
  <div id="fournisseurs-resultats"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const page = document.getElementById('fournisseurs-page');
  const resultats = document.getElementById('fournisseurs-resultats');
  const compteur = document.getElementById('fournisseurs-compteur');
  const recherche = document.getElementById('fournisseurs-recherche');
  const pays = document.getElementById('fournisseurs-pays');
  const specialite = document.getElementById('fournisseurs-specialite');

  function normaliser(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function echapper(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function ajouterOptions(select, valeurs) {
    valeurs.sort(function (a, b) {
      return a.localeCompare(b, 'fr', { sensitivity: 'base' });
    });
    valeurs.forEach(function (valeur) {
      const option = document.createElement('option');
      option.value = valeur;
      option.textContent = valeur;
      select.appendChild(option);
    });
  }

  function texteRecherche(fournisseur) {
    const produits = (fournisseur.products || []).map(function (produit) {
      return Object.values(produit).join(' ');
    }).join(' ');
    return normaliser([
      fournisseur.trade_name,
      fournisseur.country,
      fournisseur.address,
      fournisseur.postal_code,
      fournisseur.city,
      fournisseur.phone,
      fournisseur.email,
      fournisseur.website,
      (fournisseur.specialties || []).join(' '),
      produits
    ].join(' '));
  }

  function afficherAdresse(fournisseur) {
    const lignes = [];
    if (fournisseur.address) lignes.push(echapper(fournisseur.address));
    const localite = [fournisseur.postal_code, fournisseur.city].filter(Boolean).join(' ');
    if (localite) lignes.push(echapper(localite));
    return lignes.join('<br>');
  }

  function afficherFournisseur(fournisseur) {
    let html = '<article class="fournisseur-carte">';
    html += '<h4>' + echapper(fournisseur.trade_name) + '</h4>';

    const adresse = afficherAdresse(fournisseur);
    if (adresse) html += '<p class="fournisseur-meta">' + adresse + '</p>';
    if (fournisseur.phone) html += '<p class="fournisseur-meta">' + echapper(fournisseur.phone) + '</p>';
    if (fournisseur.email) html += '<p class="fournisseur-meta"><a href="mailto:' + echapper(fournisseur.email) + '">' + echapper(fournisseur.email) + '</a></p>';

    if ((fournisseur.specialties || []).length) {
      html += '<p class="fournisseur-specialites">' + fournisseur.specialties.map(echapper).join(' · ') + '</p>';
    }

    const produits = (fournisseur.products || []).filter(function (p) {
      return p.name || p.brand || p.reference || p.description;
    });
    if (produits.length) {
      html += '<ul class="fournisseur-produits">';
      produits.forEach(function (p) {
        const valeurs = [p.name, p.brand, p.reference, p.description].filter(Boolean);
        html += '<li>' + valeurs.map(echapper).join(' — ') + '</li>';
      });
      html += '</ul>';
    }

    if (fournisseur.website) {
      html += '<p class="fournisseur-actions"><a href="' + echapper(fournisseur.website) + '" target="_blank" rel="noopener noreferrer">Site officiel</a></p>';
    }
    html += '</article>';
    return html;
  }

  const groupes = [
    ['Radioamateur', ['Radioamateur', 'Radioamateur généraliste', 'HF / décamétrique', 'VHF / UHF', 'DMR / numérique', 'Kits / QRP', 'Radiocommunication']],
    ['Kits radioamateur', ['Kits radioamateur']],
    ['CB', ['CB', 'CB 27 MHz', 'Antennes CB']],
    ['Antennes radioamateur', ['Antennes radioamateur', 'Antennes']],
    ['Composants électroniques', ['Composants électroniques', 'Composants obsolètes', 'Électronique généraliste', 'Électronique radio']],
    ['SDR et réception', ['SDR', 'Scanners / réception', 'TSF / matériel ancien']],
    ['Mesure et instrumentation RF', ['Instruments de mesure', 'RF / hyperfréquences']],
    ['Accessoires et connectique RF', ['Câbles / coaxiaux / connectique RF', 'Alimentations']],
    ['Réparation et maintenance', ['Réparation / SAV', 'Réparation radio']]
  ];

  function afficher(fournisseurs) {
    const rechercheNormale = normaliser(recherche.value);
    const termes = rechercheNormale ? rechercheNormale.split(/\s+/).filter(Boolean) : [];
    const paysChoisi = pays.value;
    const specialiteChoisie = specialite.value;

    const filtres = fournisseurs.filter(function (fournisseur) {
      if (paysChoisi && fournisseur.country !== paysChoisi) return false;
      if (specialiteChoisie && !(fournisseur.specialties || []).includes(specialiteChoisie)) return false;
      const texte = texteRecherche(fournisseur);
      return termes.every(function (terme) { return texte.includes(terme); });
    });

    compteur.textContent = filtres.length + ' fournisseur' + (filtres.length > 1 ? 's' : '');

    if (!filtres.length) {
      resultats.innerHTML = '<p class="fournisseurs-vide">Aucun fournisseur ne correspond aux critères.</p>';
      return;
    }

    let html = '';
    groupes.forEach(function (groupe) {
      const membres = filtres.filter(function (fournisseur) {
        return (fournisseur.specialties || []).some(function (s) {
          return groupe[1].includes(s);
        });
      });
      if (!membres.length) return;

      html += '<section class="fournisseurs-groupe"><h2>' + echapper(groupe[0]) + '</h2>';
      const parPays = {};
      membres.forEach(function (fournisseur) {
        const nomPays = fournisseur.country || 'Pays non précisé';
        if (!parPays[nomPays]) parPays[nomPays] = [];
        if (!parPays[nomPays].some(function (f) { return f.id === fournisseur.id; })) parPays[nomPays].push(fournisseur);
      });

      Object.keys(parPays).sort(function (a, b) { return a.localeCompare(b, 'fr', { sensitivity: 'base' }); }).forEach(function (nomPays) {
        html += '<section class="fournisseurs-pays"><h3>' + echapper(nomPays) + '</h3><div class="fournisseurs-liste">';
        parPays[nomPays].sort(function (a, b) { return a.trade_name.localeCompare(b.trade_name, 'fr', { sensitivity: 'base' }); }).forEach(function (fournisseur) {
          html += afficherFournisseur(fournisseur);
        });
        html += '</div></section>';
      });
      html += '</section>';
    });

    resultats.innerHTML = html;
  }

  fetch(page.dataset.fournisseursUrl, { cache: 'no-cache' })
    .then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json();
    })
    .then(function (donnees) {
      const fournisseurs = Array.isArray(donnees.suppliers) ? donnees.suppliers : [];
      ajouterOptions(pays, Array.from(new Set(fournisseurs.map(function (f) { return f.country; }).filter(Boolean))));
      ajouterOptions(specialite, Array.from(new Set(fournisseurs.flatMap(function (f) { return f.specialties || []; }))));
      recherche.addEventListener('input', function () { afficher(fournisseurs); });
      pays.addEventListener('change', function () { afficher(fournisseurs); });
      specialite.addEventListener('change', function () { afficher(fournisseurs); });
      afficher(fournisseurs);
    })
    .catch(function (erreur) {
      console.error('Annuaire fournisseurs :', erreur);
      compteur.textContent = '';
      resultats.innerHTML = '<p class="fournisseurs-vide">Impossible de charger l’annuaire.</p>';
    });
});
</script>
