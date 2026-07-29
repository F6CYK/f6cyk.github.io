---
layout: default
permalink: /documentation/optimisation-images-web/
title: Optimisation des images pour le Web
---

# Optimisation des images pour le Web

## Objectif

Cette procédure décrit les bonnes pratiques permettant d'optimiser les
images destinées au site afin de réduire le temps de chargement,
améliorer le score Lighthouse et conserver une excellente qualité
visuelle.

Elle s'applique à l'ensemble des illustrations du site.

------------------------------------------------------------------------

# Préparation des images

  -----------------------------------------------------------------------
  Type d'image         Format              Largeur recommandée Export
  -------------------- ---------- ---------------------------- ----------
  Photographie         **WebP**                 1200 à 1600 px Qualité 80
                                                               à 85 %

  Photo de couverture  **WebP**                 1600 à 1920 px Qualité 80
                                                               à 85 %

  Illustration         **WebP**                 1000 à 1200 px Qualité 80
  d'article                                                    à 85 %

  Miniature            **WebP**                   300 à 600 px Qualité 75
                                                               à 80 %

  Capture d'écran      **PNG**                   Taille réelle Sans perte

  Schéma électronique  **PNG**                   Taille réelle Sans perte

  Dessin technique     **PNG**                   Taille réelle Sans perte

  Logo                 **SVG**                       Vectoriel ---

  Icône                **SVG**                       Vectoriel ---

  Animation            **WebP                     Selon besoin ---
                       animé**                                 
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Intégration dans les pages

  Élément              Recommandation
  -------------------- ----------------------------
  `alt`                Obligatoire
  `width`              Obligatoire
  `height`             Obligatoire
  `loading="lazy"`     Oui, sauf image principale
  `decoding="async"`   Oui

Exemple :

``` html
<img
    src="{{ page.asset_path }}/station.webp"
    alt="Station radioamateur F6CYK"
    width="900"
    height="600">
```

------------------------------------------------------------------------

# Workflow

   Étape  Action
  ------- --------------------------------------------
     ①    Conserver l'image originale
     ↓    Redimensionner avec GIMP
     ↓    Exporter au format approprié
     ↓    Copier dans le dossier de l'article
     ↓    Insérer dans la page Markdown
     ↓    Vérifier l'affichage
     ↓    Contrôler les performances avec Lighthouse

------------------------------------------------------------------------

# Bonnes pratiques

  -----------------------------------------------------------------------
  Faire                               Éviter
  ----------------------------------- -----------------------------------
  Utiliser WebP pour les              Enregistrer une photographie en PNG
  photographies                       

  Utiliser PNG pour les schémas       Publier une image de 5000 px
                                      affichée en 700 px

  Utiliser SVG pour les logos         Oublier `width` et `height`

  Conserver les originaux             Charger toutes les images
                                      immédiatement

  Employer `loading="lazy"` hors      Conserver les métadonnées EXIF
  écran                               inutiles
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Impact sur les performances

  Format d'une photographie     Taille typique        Gain
  --------------------------- ---------------- -----------
  PNG                                 4 à 8 Mo         ---
  JPEG (qualité 85)               250 à 500 Ko   ×10 à ×20
  WebP (qualité 80 à 85)           80 à 200 Ko   ×20 à ×50

------------------------------------------------------------------------

# Tableau récapitulatif

  Nature de l'illustration   Format              Largeur Remarque
  -------------------------- ---------- ---------------- ------------------
  Photographie               **WebP**     1200 à 1600 px Cas général
  Couverture                 **WebP**     1600 à 1920 px Image principale
  Illustration               **WebP**     1000 à 1200 px Article
  Miniature                  **WebP**       300 à 600 px Navigation
  Capture d'écran            **PNG**       Taille réelle Texte net
  Schéma                     **PNG**       Taille réelle Sans perte
  Logo                       **SVG**           Vectoriel À privilégier
  Icône                      **SVG**           Vectoriel Très léger

------------------------------------------------------------------------

# Vérifications avant publication

   ✓  Vérification
  --- ----------------------------------------
   □  Format adapté
   □  Dimensions adaptées
   □  Poids raisonnable
   □  Attribut `alt` renseigné
   □  Attributs `width` et `height` présents
   □  `loading="lazy"` correctement utilisé
   □  Métadonnées supprimées si inutiles
   □  Affichage correct sur ordinateur
   □  Affichage correct sur mobile
   □  Contrôle Lighthouse effectué

------------------------------------------------------------------------

# Historique des révisions

  -------------------------------------------------------------------------
            Version Date         Auteur          Modifications
  ----------------- ------------ --------------- --------------------------
                1.1 29/07/2026   F6CYK           Simplification et
                                                 restructuration des
                                                 tableaux

  -------------------------------------------------------------------------
