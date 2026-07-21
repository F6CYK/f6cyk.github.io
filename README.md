# F6CYK

Site personnel de la station radioamateur **F6CYK**.

Ce dépôt contient l'ensemble des sources du site web publié avec **GitHub Pages**. Il est développé avec **Jekyll** et privilégie une rédaction en **Markdown**, complétée ponctuellement par du HTML lorsque celui-ci est plus adapté.

## Contenu du site

Le site présente notamment :

- la station radioamateur ;
- les activités de trafic ;
- les équipements et accessoires ;
- les antennes ;
- les réalisations et expérimentations ;
- la documentation technique ;
- les photographies et illustrations.

## Organisation du dépôt

```text
.
├── _config.yml                 Configuration Jekyll
├── _data/                      Données du site
├── _includes/                  Éléments communs (head, header, navigation, footer)
├── _layouts/                   Modèles de pages
├── _posts/                     Réservé aux publications Jekyll
├── assets/
│   ├── css/                    Feuilles de style
│   ├── fonts/                  Polices
│   ├── images/                 Illustrations et photographies
│   └── js/                     Scripts éventuels
├── documents/                  Documents téléchargeables
│   ├── notices/
│   ├── pdf/
│   └── schemas/
├── pages/                      Pages du site
└── README.md
```

## Organisation des feuilles de style

Les styles sont répartis par fonction afin de faciliter leur maintenance :

- **base.css** : styles fondamentaux du document ;
- **layout.css** : structure générale du site (bandeau, navigation, contenu, pied de page, responsive) ;
- **components.css** : composants réutilisables (cartes, boutons, tableaux, figures, encadrés, etc.) ;
- **content.css** : styles propres aux différentes pages ;
- **print.css** : présentation pour l'impression ;
- **style.css** : feuille d'agrégation important les différentes feuilles de style.

## Répertoires d'images

Les illustrations sont classées par thème :

- `antennes/`
- `bandeau/`
- `construction/`
- `galerie/`
- `materiel/`
- `realisations/`
- `station/`
- `test/`
- `trafic/`

## Technologies

- Jekyll
- Markdown
- HTML5
- CSS3
- GitHub Pages

Le JavaScript n'est utilisé que lorsqu'il apporte une fonctionnalité réellement nécessaire.

## Publication

Le site est publié automatiquement par **GitHub Pages** à chaque mise à jour de la branche principale.

Adresse du site :

<https://f6cyk.github.io>

## Licence

Sauf mention contraire, l'ensemble des textes, photographies, illustrations et documents présents dans ce dépôt demeure la propriété de leur auteur.

---

© F6CYK
