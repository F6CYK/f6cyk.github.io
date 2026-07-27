# F6CYK

Le dépôt **F6CYK** contient l'ensemble des sources du site web de la station radioamateur **F6CYK**, développé avec **Jekyll** et publié automatiquement par **GitHub Pages**.

Au-delà d'un simple site personnel, ce projet constitue une base documentaire consacrée au radioamateurisme. Il rassemble des réalisations techniques, des expérimentations, des documentations d'équipements, des photographies et divers documents destinés à être consultés, partagés et conservés dans le temps.

Le développement repose sur quelques principes simples :

- privilégier les technologies ouvertes et pérennes ;
- séparer le contenu, la présentation et la logique du site ;
- limiter le recours au JavaScript aux fonctionnalités réellement utiles ;
- favoriser une architecture simple, cohérente et évolutive ;
- documenter le projet lui-même.

## Objectifs du projet

Le site poursuit plusieurs objectifs complémentaires :

- présenter la station radioamateur **F6CYK** ;
- partager des réalisations et des expérimentations ;
- constituer une base documentaire technique ;
- centraliser des notices, schémas et ressources ;
- conserver des connaissances dans un format pérenne.

## Contenu du site

Le site couvre notamment :

- la station radioamateur ;
- les activités de trafic ;
- les matériels et accessoires ;
- les antennes ;
- les réalisations personnelles ;
- les composants électroniques ;
- la documentation technique ;
- les photographies et illustrations ;
- les documents téléchargeables.

## Organisation des contenus

Les contenus sont organisés sous forme d'articles autonomes.

Chaque sujet dispose de son propre répertoire regroupant le document Markdown principal ainsi que les illustrations, schémas et documents qui lui sont associés.

Cette organisation facilite la maintenance, limite les liens rompus et garantit la cohérence entre le texte et ses ressources.

## Organisation du dépôt

```text
.
├── _config.yml                 Configuration générale de Jekyll
├── _data/                      Données structurées
├── _documentation/             Documentation interne du projet
├── _includes/                  Composants HTML réutilisables
├── _layouts/                   Modèles de pages
├── _posts/                     Publications Jekyll (réservé)
├── assets/
│   ├── css/                    Feuilles de style
│   ├── fonts/                  Polices
│   ├── images/                 Illustrations et photographies
│   └── js/                     Scripts JavaScript
├── documents/                  Documents téléchargeables
├── pages/                      Pages du site
└── README.md
```

## Architecture

Le site repose sur les mécanismes standards de Jekyll.

- Les contenus sont rédigés principalement en Markdown.
- Les modèles de pages sont définis dans `_layouts`.
- Les composants réutilisables sont regroupés dans `_includes`.
- Les données communes sont centralisées dans `_data`.
- Les ressources statiques sont stockées dans `assets`.

Cette séparation facilite les évolutions tout en limitant les duplications.

## Présentation graphique

Les feuilles de style sont réparties par fonction :

| Feuille | Rôle |
|---------|------|
| `base.css` | Styles fondamentaux |
| `layout.css` | Structure générale et responsive |
| `components.css` | Composants réutilisables |
| `content.css` | Styles éditoriaux |
| `print.css` | Impression |
| `style.css` | Agrégation des feuilles de style |

## JavaScript

Le JavaScript est utilisé uniquement lorsqu'il apporte une fonctionnalité réellement nécessaire, notamment pour la navigation dynamique, certains composants interactifs et le lecteur PDF.

## Technologies

- Jekyll
- GitHub Pages
- Markdown
- HTML5
- CSS3
- YAML

## Publication

Le site est publié automatiquement par **GitHub Pages** à chaque mise à jour de la branche principale.

Adresse du site :

<https://f6cyk.github.io>

## Documentation

Le répertoire `_documentation` regroupe la documentation technique du projet : architecture, conventions de rédaction, organisation des contenus et choix techniques.

## Licence

Sauf mention contraire, l'ensemble des textes, photographies, illustrations et documents présents dans ce dépôt demeure la propriété de leur auteur.

---

© F6CYK
