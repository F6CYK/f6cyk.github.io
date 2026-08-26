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
    gap: 20px;

    margin: 1.5rem 0 1.75rem;
    padding: 16px 18px;

    border: 1px solid #d0d0d0;
    border-radius: 4px;

    background: #f7f7f7;

    align-items: end;
}

.fournisseurs-champ {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.fournisseurs-champ label {
    display: block;

    margin: 0 0 7px;

    color: #163b67;
    font-weight: 600;
    line-height: 1.2;
}

.fournisseurs-champ input,
.fournisseurs-champ select {
    display: block;

    width: 100%;
    height: 40px;

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
        align-items: stretch;
    }
}
</style>

<div
    id="fournisseurs-page"
    class="fournisseurs-page"
    data-fournisseurs-url="/assets/data/fournisseurs.json"
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
(() => {
    const root = document.getElementById(
        'fournisseurs-resultats'
    );

    if (!root) return;

    const search = document.getElementById(
        'fournisseurs-recherche'
    );

    const country = document.getElementById(
        'fournisseurs-pays'
    );

    const specialty = document.getElementById(
        'fournisseurs-specialite'
    );

    const counter = document.getElementById(
        'fournisseurs-compteur'
    );

    let suppliers = [];

    const esc = value =>
        String(value ?? '').replace(
            /[&<>'"]/g,
            c => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[c])
        );

    const text = s =>
        [
            s.trade_name,
            s.country,
            s.city,
            s.website,
            ...(s.specialties || []),
            ...(s.products || []).flatMap(
                p => [
                    p.name,
                    p.brand,
                    p.reference,
                    p.description
                ]
            )
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();

    function fillSelects() {
        [
            ...new Set(
                suppliers
                    .map(s => s.country)
                    .filter(Boolean)
            )
        ]
            .sort((a, b) =>
                a.localeCompare(b, 'fr')
            )
            .forEach(v => {
                country.insertAdjacentHTML(
                    'beforeend',
                    `<option value="${esc(v)}">${esc(v)}</option>`
                );
            });

        [
            ...new Set(
                suppliers.flatMap(
                    s => s.specialties || []
                )
            )
        ]
            .sort((a, b) =>
                a.localeCompare(b, 'fr')
            )
            .forEach(v => {
                specialty.insertAdjacentHTML(
                    'beforeend',
                    `<option value="${esc(v)}">${esc(v)}</option>`
                );
            });
    }

    function render() {
        const q = search.value
            .trim()
            .toLowerCase();

        const co = country.value;
        const sp = specialty.value;

        const filtered = suppliers.filter(
            s =>
                (!q || text(s).includes(q)) &&
                (!co || s.country === co) &&
                (
                    !sp ||
                    (s.specialties || []).includes(sp)
                )
        );

        counter.textContent =
            `${filtered.length} fournisseur${
                filtered.length > 1 ? 's' : ''
            }`;

        const groups = {};

        filtered.forEach(s => {
            const key =
                s.country ||
                'Pays non précisé';

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(s);
        });

        root.innerHTML =
            Object.keys(groups)
                .sort((a, b) =>
                    a.localeCompare(b, 'fr')
                )
                .map(
                    countryName => `
                        <section class="fournisseurs-pays">
                            <h2>${esc(countryName)}</h2>

                            ${groups[countryName]
                                .map(
                                    s => `
                                        <article class="fournisseur-card">
                                            <h3>${esc(s.trade_name)}</h3>

                                            ${
                                                s.address
                                                    ? `
                                                        <div class="fournisseur-meta">
                                                            ${esc(s.address)}
                                                        </div>
                                                    `
                                                    : ''
                                            }

                                            ${
                                                s.postal_code ||
                                                s.city
                                                    ? `
                                                        <div class="fournisseur-meta">
                                                            ${esc(
                                                                [
                                                                    s.postal_code,
                                                                    s.city
                                                                ]
                                                                    .filter(Boolean)
                                                                    .join(' ')
                                                            )}
                                                        </div>
                                                    `
                                                    : ''
                                            }

                                            ${
                                                s.phone
                                                    ? `
                                                        <div class="fournisseur-meta">
                                                            Téléphone :
                                                            ${esc(s.phone)}
                                                        </div>
                                                    `
                                                    : ''
                                            }

                                            ${
                                                s.email
                                                    ? `
                                                        <div class="fournisseur-meta">
                                                            E-mail :
                                                            <a href="mailto:${esc(s.email)}">
                                                                ${esc(s.email)}
                                                            </a>
                                                        </div>
                                                    `
                                                    : ''
                                            }

                                            ${
                                                s.specialties?.length
                                                    ? `
                                                        <div class="fournisseur-specialites">
                                                            ${s.specialties
                                                                .map(esc)
                                                                .join(' · ')}
                                                        </div>
                                                    `
                                                    : ''
                                            }

                                            <div class="fournisseur-site">
                                                <a
                                                    href="${esc(s.website)}"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Site officiel
                                                </a>
                                            </div>
                                        </article>
                                    `
                                )
                                .join('')}
                        </section>
                    `
                )
                .join('') ||
            '<p>Aucun fournisseur ne correspond aux critères.</p>';
    }

    fetch('/assets/data/fournisseurs.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
        .then(data => {
            suppliers = data;

            fillSelects();
            render();
        })
        .catch(error => {
            console.error(
                'Erreur annuaire fournisseurs :',
                error
            );

            counter.textContent = '';

            root.innerHTML =
                '<p>Impossible de charger l’annuaire.</p>';
        });

    [search, country, specialty].forEach(
        element =>
            element.addEventListener(
                'input',
                render
            )
    );

    [country, specialty].forEach(
        element =>
            element.addEventListener(
                'change',
                render
            )
    );
})();
</script>