---
title: "DT-0001 - Composant flipbook.html"
date: 2026-07-22
version: "1.0"
author: "F6CYK"
status: "Validé"
---

# Dossier Technique DT-0001

## Composant `flipbook.html`

**Version :** 1.0  
**Date :** 22 juillet 2026  
**Auteur :** F6CYK  
**Statut :** Version validée

---

# Historique

| Version | Date       | Auteur | Objet                                                  |
| ------: | :--------- | :----- | :----------------------------------------------------- |
|     1.0 | 22/07/2026 | F6CYK  | Première version validée du composant `flipbook.html`. |

---

# Objet

Le composant `flipbook.html` permet d'intégrer un document PDF dans une page du site sous la forme d'un livre feuilletable.

Le document PDF constitue l'unique source documentaire. Aucune image intermédiaire n'est générée ni stockée.

L'objectif recherché est de disposer d'un composant entièrement réutilisable, simple à mettre en œuvre et indépendant du contenu des pages Markdown.

---

# Principe de fonctionnement

Le composant repose sur deux bibliothèques JavaScript complémentaires :

- **PDF.js**, chargé du décodage et du rendu des pages du document PDF.
- **StPageFlip**, chargé de l'animation de feuilletage.

Le traitement suit la chaîne suivante :

```text
Document PDF
      │
      ▼
PDF.js
      │
      ▼
Rendu de chaque page dans un élément Canvas
      │
      ▼
Insertion dans des <div class="page">
      │
      ▼
StPageFlip
      │
      ▼
Livre feuilletable
```

---

# Organisation des fichiers

```text
assets/
└── vendor/
    ├── pageflip/
    │   ├── page-flip.browser.js
    │   └── page-flip.module.js
    │
    └── pdfjs/
        ├── pdf.mjs
        └── pdf.worker.mjs

_layouts/
    default.html

_includes/
    flipbook.html
```

---

# Chargement des bibliothèques

Le layout principal du site (`_layouts/default.html`) assure le chargement global des bibliothèques :

- `page-flip.browser.js`
- `pdf.mjs`
- `pdf.worker.mjs`

Aucune page documentaire n'a donc à gérer ces dépendances.

---

# Utilisation

L'insertion d'un document dans une page se limite à l'appel suivant :

```liquid
{% include flipbook.html
   file="XR2206.pdf"
   title="Documentation technique"
   scale=1.5
   width="700px"
%}
```

Le composant prend ensuite en charge automatiquement :

- le chargement du PDF ;
- le rendu des pages ;
- la création du livre ;
- les animations de feuilletage.

---

# Paramètres

## file

Nom du fichier PDF.

**Obligatoire.**

Exemple :

```liquid
file="XR2206.pdf"
```

---

## title

Titre affiché au-dessus du feuilleteur.

**Optionnel.**

---

## scale

Facteur de rendu utilisé par PDF.js.

Valeur actuellement utilisée :

```text
1.5
```

**Optionnel.**

---

## width

Largeur du composant.

Exemple :

```liquid
width="700px"
```

**Optionnel.**

---

# Fonctionnalités actuellement validées

À la date de rédaction de ce document, les fonctionnalités suivantes sont opérationnelles :

- chargement automatique d'un document PDF ;
- rendu de l'ensemble des pages ;
- création du livre feuilletable ;
- animation des pages avec StPageFlip ;
- fonctionnement sous GitHub Pages ;
- intégration complète dans un include Jekyll.

L'ensemble de ces fonctionnalités a été testé et validé.

---

# Choix d'architecture

L'intégralité de la logique JavaScript est centralisée dans :

```text
_includes/flipbook.html
```

Les pages Markdown ne contiennent :

- aucun code JavaScript ;
- aucune manipulation du DOM ;
- aucune référence à PDF.js ;
- aucune référence à StPageFlip.

Cette séparation simplifie considérablement la maintenance du site.

---

# Choix techniques retenus

Le document PDF constitue la source unique de la documentation.

Les solutions suivantes ont été étudiées puis abandonnées :

- génération préalable d'images JPEG ;
- création d'une image de couverture ;
- composant `pdf-card.html`.

Le rendu est désormais effectué exclusivement à partir du document PDF.

Cette architecture présente plusieurs avantages :

- absence de duplication des documents ;
- maintenance simplifiée ;
- qualité d'affichage maximale ;
- mise à jour automatique dès modification du PDF.

---

# Retour d'expérience

Une tentative de paramétrage de l'identifiant HTML du composant (`id=`) a entraîné une régression empêchant l'affichage du feuilleteur.

Après analyse, cette évolution a été abandonnée.

Le composant est revenu à sa version stable.

Cette expérience confirme l'intérêt d'une interface publique limitée aux seuls paramètres réellement utiles.

---

# Philosophie de conception

Le composant doit rester extrêmement simple à utiliser.

L'auteur d'une page documentaire ne doit avoir à connaître ni PDF.js, ni StPageFlip, ni le fonctionnement interne du composant.

L'utilisation idéale reste :

```liquid
{% include flipbook.html
   file="MonDocument.pdf"
%}
```

Toute la complexité doit rester confinée à l'include.

---

# Évolutions prévues

Les développements futurs concerneront uniquement des enrichissements fonctionnels, sans remise en cause de l'architecture actuelle.

L'ordre de priorité envisagé est le suivant :

1. barre de navigation (première, précédente, suivante, dernière page) ;
2. affichage du numéro de page ;
3. adaptation automatique à la largeur disponible (responsive) ;
4. mode plein écran ;
5. téléchargement du document PDF original.

Toute évolution devra préserver la compatibilité avec les appels existants du composant.

---

# Méthode de développement

Le développement suit une démarche incrémentale.

Chaque évolution est :

1. développée ;
2. testée localement ;
3. publiée ;
4. validée ;
5. intégrée à la documentation.

En cas de régression, le retour au dernier état validé est immédiat avant toute nouvelle tentative.

Cette méthode garantit la stabilité du composant tout au long de son évolution.

---

**Fin du document**

**Dossier Technique DT-0001 — Version 1.0 — 22 juillet 2026**