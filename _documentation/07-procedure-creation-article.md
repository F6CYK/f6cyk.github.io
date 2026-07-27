---
layout: default
title: Procédure de création d'un article
permalink: /documentation/procedure-creation-article/
---

# Procédure de création d'un article

## Objectif

Cette procédure décrit la méthode de création d'un nouvel article du site. Elle a pour objectif d'assurer une présentation homogène, une organisation cohérente des fichiers et une maintenance facilitée.

Elle s'applique à toutes les rubriques du site utilisant le même modèle de présentation.

---

# Organisation des fichiers

Chaque article est regroupé dans un répertoire unique contenant l'ensemble des ressources nécessaires à son fonctionnement.

L'organisation recommandée est la suivante :

```text
nom-de-la-rubrique/
└── nom-de-l-article/
    ├── nom-de-l-article.md
    ├── document.pdf            (facultatif)
    ├── photo1.jpg
    ├── photo2.png
    ├── schema.svg
    ├── illustration.webp
    └── ...
```

Toutes les illustrations, schémas, photographies et documents PDF sont placés dans ce même dossier.

L'utilisation de sous-répertoires supplémentaires n'est pas recommandée, sauf nécessité particulière.

---

# Création de la page

Créer un fichier Markdown portant le même nom que le dossier.

Exemple :

```text
nom-de-l-article.md
```

Le document débute obligatoirement par un *front matter*.

```yaml
---
layout: default
title: Titre de l'article
permalink: /rubrique/nom-de-l-article/
asset_path: /rubrique/nom-de-l-article
---
```

## Description des paramètres

| Paramètre | Rôle |
|-----------|------|
| `layout` | Modèle de page utilisé |
| `title` | Titre de l'article |
| `permalink` | Adresse de la page |
| `asset_path` | Répertoire contenant les ressources |

---

# Titre principal

Le document commence par un titre de niveau 1.

```markdown
# Titre de l'article
```

Il doit être identique au titre déclaré dans le front matter.

---

# Introduction

L'introduction peut être mise en valeur au moyen du composant `intro.html`.

Le texte est placé dans un bloc `capture`.

```liquid
{% capture introduction %}

Texte de présentation.

{% endcapture %}
```

Une illustration peut être associée à cette introduction.

---

# Insertion d'une illustration

Les illustrations sont toujours référencées à partir de `asset_path`.

Créer tout d'abord le chemin :

```liquid
{% assign image = page.asset_path | append: "/illustration.png" %}
```

Puis insérer l'image :

```markdown
![Description]({{ image }})
```

Cette méthode garantit l'indépendance de la page vis-à-vis de son emplacement dans l'arborescence.

Il est recommandé de fournir une légende explicite.

---

# Insertion d'un document PDF

Lorsqu'un document PDF accompagne l'article, il est affiché sous forme de flipbook.

Le document est placé dans le même dossier que la page Markdown.

L'insertion s'effectue au moyen du composant :

```liquid
{% include flipbook.html
    file="document.pdf"
    title="Documentation"
    scale=1.5
%}
```

Seul le nom du fichier est indiqué.

Le chemin complet est automatiquement construit à partir de `asset_path`.

---

# Structuration du contenu

Le document est organisé à l'aide de titres hiérarchisés.

Exemple :

```markdown
## Présentation

## Description

## Principe de fonctionnement

## Réalisation

## Réglages

## Essais

## Résultats

## Conclusion
```

Le nombre et l'intitulé des rubriques sont adaptés au sujet traité.

---

# Ajout au menu

Une fois l'article créé, il doit être ajouté au fichier de données correspondant à la rubrique.

Exemple :

```text
_data/realisations.yml
```

Ajouter une entrée de la forme :

```yaml
- titre: Titre de l'article
  url: /rubrique/nom-de-l-article/
```

Si la rubrique est organisée de manière hiérarchique, insérer l'article dans la catégorie appropriée.

---

# Vérifications

Avant publication, vérifier les points suivants :

- le nom du dossier ;
- le nom du fichier Markdown ;
- le contenu du front matter ;
- la valeur de `asset_path` ;
- le bon affichage des illustrations ;
- le fonctionnement éventuel du flipbook ;
- les liens internes ;
- la présence de l'article dans le menu ;
- l'affichage correct sur ordinateur et sur appareil mobile.

---

# Recommandations

- Regrouper toutes les ressources d'un article dans un même dossier.
- Employer des noms de fichiers explicites.
- Utiliser des illustrations de bonne qualité.
- Fournir un texte alternatif pour chaque image.
- Limiter la taille des images afin de réduire le temps de chargement.
- Vérifier systématiquement le résultat après génération du site.

Le respect de cette procédure garantit une présentation homogène de l'ensemble de la documentation et facilite les évolutions ultérieures du site.
