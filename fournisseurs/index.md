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
  margin-bottom: 1.4rem;
}

.fournisseurs-intro {
  margin-bottom: 1.6rem;
}

.fournisseurs-filtres {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0 1.75rem;
  padding: 1rem;
  border: 1px solid #d0d0d0;
  background: #f7f7f7;
  border-radius: 4px;
}

.fournisseurs-champ {
  min-width: 0;
}

.fournisseurs-champ label {
  display: block;
  margin-bottom: .45rem;
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

.fournisseurs-compteur {
  margin: 0 0 1.5rem;
  color: #555;
}

.fournisseurs-liste {
  display: grid;
  gap: 1rem;
}

.fournisseur-carte {
  padding: 1rem 1.15rem;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  background: #fff;
}

.fournisseur-carte h2 {
  margin: 0 0 .7rem;
  color: #163b67;
  font-size: 1.15rem;
}

.fournisseur-meta {
  margin: .45rem 0;
}

.fournisseur-specialites {
  margin: .7rem 0;
  color: #555;
}

.fournisseur-actions {
  margin-top: .8rem;
}

.fournisseur-actions a {
  color: #003366;
  font-weight: 600;
}

.fournisseurs-vide {
  margin: 1.5rem 0;
  color: #666;
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
  data-fournisseurs-url="{{ '/assets/data/fournisseurs.json' | relative_url }}"
>

  <h1>Annuaire fournisseurs</h1>

  <p class="fournisseurs-intro">
    Fournisseurs européens de matériel radioamateur et CB.
  </p>

  <div class="fournisseurs-filtres">

    <div class="fournisseurs-champ">
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

    <div class="fournisseurs-champ">
      <label for="fournisseurs-pays">
        Pays
      </label>

      <select id="fournisseurs-pays">
        <option value="">
          Tous les pays
        </option>
      </select>
    </div>

    <div class="fournisseurs-champ">
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

<script>
document.addEventListener("DOMContentLoaded", function () {

  var page = document.getElementById("fournisseurs-page");
  var compteur = document.getElementById("fournisseurs-compteur");
  var resultats = document.getElementById("fournisseurs-resultats");
  var recherche = document.getElementById("fournisseurs-recherche");
  var pays = document.getElementById("fournisseurs-pays");
  var specialite = document.getElementById("fournisseurs-specialite");

  function texte(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function securiser(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function afficherOptions(select, valeurs) {

    valeurs.sort(function (a, b) {
      return String(a).localeCompare(
        String(b),
        "fr",
        {
          sensitivity: "base"
        }
      );
    });

    valeurs.forEach(function (valeur) {

      var option =
        document.createElement("option");

      option.value = valeur;
      option.textContent = valeur;

      select.appendChild(option);
    });
  }

  function contenuRecherche(fournisseur) {

    var produits =
      Array.isArray(fournisseur.products)
        ? fournisseur.products
        : [];

    var texteProduits = produits
      .map(function (produit) {

        if (
          !produit ||
          typeof produit !== "object"
        ) {
          return "";
        }

        return Object.keys(produit)
          .map(function (cle) {
            return produit[cle] || "";
          })
          .join(" ");
      })
      .join(" ");

    var specialites =
      Array.isArray(fournisseur.specialties)
        ? fournisseur.specialties.join(" ")
        : "";

    return texte([
      fournisseur.trade_name,
      fournisseur.country,
      fournisseur.address,
      fournisseur.postal_code,
      fournisseur.city,
      fournisseur.phone,
      fournisseur.email,
      fournisseur.website,
      specialites,
      texteProduits
    ].join(" "));
  }

  function afficherFournisseur(fournisseur) {

    var html =
      '<article class="fournisseur-carte">';

    html +=
      "<h2>" +
      securiser(
        fournisseur.trade_name ||
        "Fournisseur"
      ) +
      "</h2>";

    if (fournisseur.country) {
      html +=
        '<p class="fournisseur-meta">' +
        "<strong>Pays :</strong> " +
        securiser(fournisseur.country) +
        "</p>";
    }

    var adresse = [];

    if (fournisseur.address) {
      adresse.push(
        securiser(fournisseur.address)
      );
    }

    var ville = [
      fournisseur.postal_code,
      fournisseur.city
    ]
      .filter(Boolean)
      .join(" ");

    if (ville) {
      adresse.push(
        securiser(ville)
      );
    }

    if (adresse.length) {
      html +=
        '<p class="fournisseur-meta">' +
        adresse.join("<br>") +
        "</p>";
    }

    if (fournisseur.phone) {
      html +=
        '<p class="fournisseur-meta">' +
        "<strong>Téléphone :</strong> " +
        securiser(fournisseur.phone) +
        "</p>";
    }

    if (fournisseur.email) {
      html +=
        '<p class="fournisseur-meta">' +
        '<a href="mailto:' +
        securiser(fournisseur.email) +
        '">' +
        securiser(fournisseur.email) +
        "</a>" +
        "</p>";
    }

    if (
      Array.isArray(fournisseur.specialties) &&
      fournisseur.specialties.length
    ) {
      html +=
        '<p class="fournisseur-specialites">' +
        fournisseur.specialties
          .map(function (item) {
            return securiser(item);
          })
          .join(" · ") +
        "</p>";
    }

    if (fournisseur.website) {
      html +=
        '<p class="fournisseur-actions">' +
        '<a href="' +
        securiser(fournisseur.website) +
        '" target="_blank" rel="noopener noreferrer">' +
        "Site officiel" +
        "</a>" +
        "</p>";
    }

    html += "</article>";

    return html;
  }

  function afficher(fournisseurs) {

    var rechercheTexte =
      texte(recherche.value);

    var paysChoisi =
      pays.value;

    var specialiteChoisie =
      specialite.value;

    var termes =
      rechercheTexte
        .split(/\s+/)
        .filter(Boolean);

    var filtres =
      fournisseurs.filter(
        function (fournisseur) {

          if (
            paysChoisi &&
            fournisseur.country !== paysChoisi
          ) {
            return false;
          }

          if (
            specialiteChoisie &&
            (
              !Array.isArray(
                fournisseur.specialties
              ) ||
              fournisseur.specialties.indexOf(
                specialiteChoisie
              ) === -1
            )
          ) {
            return false;
          }

          var rechercheFournisseur =
            contenuRecherche(
              fournisseur
            );

          return termes.every(
            function (terme) {
              return rechercheFournisseur.indexOf(
                terme
              ) !== -1;
            }
          );
        }
      );

    compteur.textContent =
      filtres.length +
      " fournisseur" +
      (
        filtres.length > 1
          ? "s"
          : ""
      );

    if (!filtres.length) {

      resultats.innerHTML =
        '<p class="fournisseurs-vide">' +
        "Aucun fournisseur ne correspond aux critères." +
        "</p>";

      return;
    }

    filtres.sort(function (a, b) {

      return String(
        a.trade_name || ""
      ).localeCompare(
        String(
          b.trade_name || ""
        ),
        "fr",
        {
          sensitivity: "base"
        }
      );
    });

    var html = "";

    filtres.forEach(
      function (fournisseur) {

        html +=
          afficherFournisseur(
            fournisseur
          );
      }
    );

    resultats.innerHTML = html;
  }

  var url =
    page.getAttribute(
      "data-fournisseurs-url"
    );

  fetch(url, {
    cache: "no-cache"
  })
    .then(function (response) {

      if (!response.ok) {
        throw new Error(
          "HTTP " +
          response.status
        );
      }

      return response.json();
    })
    .then(function (donnees) {

      var fournisseurs =
        Array.isArray(
          donnees.suppliers
        )
          ? donnees.suppliers
          : [];

      var paysListe =
        Array.from(
          new Set(
            fournisseurs
              .map(function (fournisseur) {
                return fournisseur.country;
              })
              .filter(Boolean)
          )
        );

      var specialitesListe =
        Array.from(
          new Set(
            fournisseurs.flatMap(
              function (fournisseur) {

                return Array.isArray(
                  fournisseur.specialties
                )
                  ? fournisseur.specialties
                  : [];
              }
            )
          )
        );

      afficherOptions(
        pays,
        paysListe
      );

      afficherOptions(
        specialite,
        specialitesListe
      );

      recherche.addEventListener(
        "input",
        function () {
          afficher(fournisseurs);
        }
      );

      pays.addEventListener(
        "change",
        function () {
          afficher(fournisseurs);
        }
      );

      specialite.addEventListener(
        "change",
        function () {
          afficher(fournisseurs);
        }
      );

      afficher(fournisseurs);
    })
    .catch(function (erreur) {

      console.error(
        "Annuaire fournisseurs :",
        erreur
      );

      compteur.textContent = "";

      resultats.innerHTML =
        '<p class="fournisseurs-vide">' +
        "Erreur lors du chargement des fournisseurs." +
        "</p>";
    });

});
</script>
