(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const page = document.querySelector(".fournisseurs-page");

    if (!page) {
      return;
    }

    const dataUrl =
      page.dataset.fournisseursUrl ||
      "/assets/data/fournisseurs.json";

    const root = document.getElementById(
      "fournisseurs-annuaire"
    );

    const searchInput = document.getElementById(
      "fournisseurs-recherche"
    );

    const countrySelect = document.getElementById(
      "fournisseurs-pays"
    );

    const specialtySelect = document.getElementById(
      "fournisseurs-specialite"
    );

    const counter = document.getElementById(
      "fournisseurs-compteur"
    );

    if (
      !root ||
      !searchInput ||
      !countrySelect ||
      !specialtySelect ||
      !counter
    ) {
      console.error(
        "Annuaire fournisseurs : élément HTML manquant."
      );

      return;
    }

    function normalize(value) {
      return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
    }

    function escapeHtml(value) {
      return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function getSearchText(supplier) {
      const specialties = Array.isArray(
        supplier.specialties
      )
        ? supplier.specialties
        : [];

      const groups = Array.isArray(
        supplier.groups
      )
        ? supplier.groups
        : [];

      const products = Array.isArray(
        supplier.products
      )
        ? supplier.products
        : [];

      const productText = products
        .map(function (product) {
          if (!product || typeof product !== "object") {
            return "";
          }

          return Object.values(product).join(" ");
        })
        .join(" ");

      return normalize(
        [
          supplier.trade_name,
          supplier.country,
          supplier.address,
          supplier.postal_code,
          supplier.city,
          supplier.phone,
          supplier.email,
          supplier.website,
          specialties.join(" "),
          groups.join(" "),
          productText
        ].join(" ")
      );
    }

    function populateSelect(select, values) {
      values
        .filter(Boolean)
        .sort(function (a, b) {
          return a.localeCompare(
            b,
            "fr",
            {
              sensitivity: "base"
            }
          );
        })
        .forEach(function (value) {
          const option =
            document.createElement("option");

          option.value = value;
          option.textContent = value;

          select.appendChild(option);
        });
    }

    function renderAddress(supplier) {
      const lines = [];

      if (supplier.address) {
        lines.push(
          escapeHtml(supplier.address)
        );
      }

      const locality = [
        supplier.postal_code,
        supplier.city
      ]
        .filter(Boolean)
        .join(" ");

      if (locality) {
        lines.push(
          escapeHtml(locality)
        );
      }

      return lines.join("<br>");
    }

    function renderSpecialties(supplier) {
      const specialties =
        Array.isArray(
          supplier.specialties
        )
          ? supplier.specialties
          : [];

      if (!specialties.length) {
        return "";
      }

      return (
        '<div class="fournisseur-specialites">' +
        specialties
          .map(function (specialty) {
            return (
              '<span class="fournisseur-specialite">' +
              escapeHtml(specialty) +
              "</span>"
            );
          })
          .join("") +
        "</div>"
      );
    }

    function renderProducts(supplier) {
      const products =
        Array.isArray(
          supplier.products
        )
          ? supplier.products
          : [];

      if (!products.length) {
        return "";
      }

      const items = products
        .map(function (product) {
          if (
            !product ||
            typeof product !== "object"
          ) {
            return "";
          }

          const values = [
            product.name,
            product.brand,
            product.reference,
            product.description
          ].filter(Boolean);

          if (!values.length) {
            return "";
          }

          return (
            "<li>" +
            escapeHtml(
              values.join(" — ")
            ) +
            "</li>"
          );
        })
        .filter(Boolean)
        .join("");

      if (!items) {
        return "";
      }

      return (
        '<ul class="fournisseur-produits">' +
        items +
        "</ul>"
      );
    }

    function renderSupplier(supplier) {
      const name =
        supplier.trade_name ||
        "Fournisseur";

      const address =
        renderAddress(supplier);

      const specialties =
        renderSpecialties(supplier);

      const products =
        renderProducts(supplier);

      let html =
        '<article class="fournisseur-carte">';

      html +=
        "<h4>" +
        escapeHtml(name) +
        "</h4>";

      if (address) {
        html +=
          '<p class="fournisseur-meta">' +
          "<strong>Adresse</strong><br>" +
          address +
          "</p>";
      }

      if (supplier.phone) {
        html +=
          '<p class="fournisseur-meta">' +
          "<strong>Téléphone</strong><br>" +
          escapeHtml(supplier.phone) +
          "</p>";
      }

      if (supplier.email) {
        html +=
          '<p class="fournisseur-meta">' +
          "<strong>E-mail</strong><br>" +
          '<a href="mailto:' +
          escapeHtml(supplier.email) +
          '">' +
          escapeHtml(supplier.email) +
          "</a>" +
          "</p>";
      }

      html += specialties;
      html += products;

      if (supplier.website) {
        html +=
          '<div class="fournisseur-actions">' +
          '<a href="' +
          escapeHtml(supplier.website) +
          '" target="_blank" rel="noopener noreferrer">' +
          "Site officiel" +
          "</a>" +
          "</div>";
      }

      html += "</article>";

      return html;
    }

    function render(suppliers) {
      if (!suppliers.length) {
        root.innerHTML =
          '<p class="fournisseurs-vide">' +
          "Aucun fournisseur ne correspond aux critères." +
          "</p>";

        return;
      }

      const groups = {};

      suppliers.forEach(function (supplier) {
        const supplierGroups =
          Array.isArray(supplier.groups) &&
          supplier.groups.length
            ? supplier.groups
            : ["Autres"];

        supplierGroups.forEach(
          function (group) {
            const groupName =
              String(group || "Autres");

            const country =
              String(
                supplier.country ||
                  "Pays non précisé"
              );

            if (!groups[groupName]) {
              groups[groupName] = {};
            }

            if (!groups[groupName][country]) {
              groups[groupName][country] = [];
            }

            groups[groupName][country].push(
              supplier
            );
          }
        );
      });

      const groupNames =
        Object.keys(groups).sort(
          function (a, b) {
            return a.localeCompare(
              b,
              "fr",
              {
                sensitivity: "base"
              }
            );
          }
        );

      let html = "";

      groupNames.forEach(
        function (groupName) {
          html +=
            '<section class="fournisseurs-groupe">';

          html +=
            "<h2>" +
            escapeHtml(groupName) +
            "</h2>";

          const countries =
            Object.keys(
              groups[groupName]
            ).sort(function (a, b) {
              return a.localeCompare(
                b,
                "fr",
                {
                  sensitivity: "base"
                }
              );
            });

          countries.forEach(
            function (country) {
              const list =
                groups[groupName][country];

              list.sort(function (a, b) {
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

              html +=
                '<section class="fournisseurs-pays">';

              html +=
                "<h3>" +
                escapeHtml(country) +
                "</h3>";

              html +=
                '<div class="fournisseurs-liste">';

              list.forEach(
                function (supplier) {
                  html +=
                    renderSupplier(
                      supplier
                    );
                }
              );

              html +=
                "</div>";

              html += "</section>";
            }
          );

          html += "</section>";
        }
      );

      root.innerHTML = html;
    }

    function update(suppliers) {
      const query =
        normalize(searchInput.value);

      const country =
        countrySelect.value;

      const specialty =
        specialtySelect.value;

      const terms = query
        ? query
            .split(/\s+/)
            .filter(Boolean)
        : [];

      const filtered =
        suppliers.filter(
          function (supplier) {
            if (
              country &&
              supplier.country !== country
            ) {
              return false;
            }

            if (
              specialty &&
              !(
                Array.isArray(
                  supplier.specialties
                ) &&
                supplier.specialties.includes(
                  specialty
                )
              )
            ) {
              return false;
            }

            const text =
              getSearchText(
                supplier
              );

            return terms.every(
              function (term) {
                return text.includes(term);
              }
            );
          }
        );

      counter.textContent =
        filtered.length +
        " fournisseur" +
        (
          filtered.length > 1
            ? "s"
            : ""
        );

      render(filtered);
    }

    fetch(dataUrl, {
      cache: "no-cache"
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error(
            "HTTP " +
            response.status +
            " lors du chargement de " +
            dataUrl
          );
        }

        return response.json();
      })
      .then(function (data) {
        const suppliers =
          Array.isArray(data.suppliers)
            ? data.suppliers
            : [];

        populateSelect(
          countrySelect,
          [
            ...new Set(
              suppliers
                .map(function (supplier) {
                  return supplier.country;
                })
                .filter(Boolean)
            )
          ]
        );

        populateSelect(
          specialtySelect,
          [
            ...new Set(
              suppliers
                .flatMap(function (supplier) {
                  return Array.isArray(
                    supplier.specialties
                  )
                    ? supplier.specialties
                    : [];
                })
            )
          ]
        );

        searchInput.addEventListener(
          "input",
          function () {
            update(suppliers);
          }
        );

        countrySelect.addEventListener(
          "change",
          function () {
            update(suppliers);
          }
        );

        specialtySelect.addEventListener(
          "change",
          function () {
            update(suppliers);
          }
        );

        update(suppliers);
      })
      .catch(function (error) {
        console.error(
          "Annuaire fournisseurs :",
          error
        );

        counter.textContent = "";

        root.innerHTML =
          '<p class="fournisseurs-vide">' +
          "Impossible d'afficher les fournisseurs." +
          "</p>";
      });
  });
})();
