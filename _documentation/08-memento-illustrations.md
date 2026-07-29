---
layout: default
permalink: /documentation/optimisation-images-web/
title: Optimisation des images pour le Web
---

# Optimisation des images pour le Web

## Objectif

Cette procédure décrit les bonnes pratiques permettant d'optimiser les
images destinées au site.

Les objectifs sont :

-   réduire le temps de chargement ;
-   améliorer le score Lighthouse ;
-   diminuer la consommation de bande passante ;
-   conserver une excellente qualité visuelle.

Elle s'applique à l'ensemble des illustrations du site.

------------------------------------------------------------------------

# Choix du format

  Type d'image              Format recommandé   Justification
  ------------------------- ------------------- -----------------------------------
  Photographie              **WebP**            Excellent rapport qualité / poids
  Bannière photographique   **WebP**            Chargement rapide
  Illustration d'article    **WebP**            Optimisé pour le Web
  Miniature                 **WebP**            Très faible poids
  Capture d'écran           **PNG**             Texte parfaitement net
  Schéma électronique       **PNG**             Compression sans perte
  Dessin technique          **PNG**             Conservation des détails
  Logo                      **SVG**             Format vectoriel
  Icône                     **SVG**             Très léger
  Animation                 **WebP animé**      Préférable au GIF

------------------------------------------------------------------------

# Dimensions recommandées

  Utilisation                Largeur conseillée
  ------------------------ --------------------
  Photo principale               1200 à 1600 px
  Bannière                       1600 à 1920 px
  Illustration d'article         1000 à 1200 px
  Miniature                        300 à 600 px

------------------------------------------------------------------------

# Paramètres GIMP

  Paramètre          Valeur recommandée
  ------------------ -----------------------
  Format             WebP
  Compression        Avec perte (Lossy)
  Qualité            80 à 85 %
  Interpolation      LoHalo ou NoHalo
  Métadonnées EXIF   Supprimer si inutiles

------------------------------------------------------------------------

# Intégration dans les pages

  Élément              Recommandation
  -------------------- ----------------------------
  `alt`                Toujours renseigné
  `width`              Toujours renseigné
  `height`             Toujours renseigné
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

# Bonnes pratiques

  -----------------------------------------------------------------------
  Recommandation                           Pourquoi ?
  ---------------------------------------- ------------------------------
  Redimensionner avant publication         Réduit fortement le poids des
                                           fichiers

  Employer WebP pour les photographies     Gain de 70 à 95 % par rapport
                                           au PNG

  Employer PNG pour les schémas            Préserve parfaitement les
                                           détails

  Utiliser SVG pour les logos              Qualité parfaite quelle que
                                           soit la taille

  Conserver les originaux séparément       Permet une nouvelle
                                           exportation si nécessaire

  Utiliser `loading="lazy"` hors écran     Réduit le temps de chargement
                                           initial
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# À éviter

  -----------------------------------------------------------------------
  Mauvaise pratique                          Conséquence
  ------------------------------------------ ----------------------------
  Photo enregistrée en PNG                   Fichier extrêmement
                                             volumineux

  Image de 5000 px affichée en 700 px        Téléchargement inutile

  Oublier `width` et `height`                Dégradation du score CLS

  Charger toutes les images immédiatement    Temps de chargement plus
                                             long

  Conserver les métadonnées EXIF             Poids supplémentaire inutile
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Ordres de grandeur

  Format                     Taille approximative
  ------------------------ ----------------------
  PNG                                    4 à 8 Mo
  JPEG (qualité 85)                  250 à 500 Ko
  WebP (qualité 80 à 85)              80 à 200 Ko

------------------------------------------------------------------------

# Workflow

  Étape   Action                                        Outil
  ------- --------------------------------------------- --------------------------
  1       Conserver l'image originale                   Archivage
  2       Redimensionner l'image                        GIMP
  3       Choisir le format adapté                      Voir tableau de décision
  4       Exporter avec les paramètres recommandés      GIMP
  5       Vérifier le poids du fichier                  Explorateur
  6       Copier l'image dans le dossier de l'article   Site Jekyll
  7       Insérer l'image dans la page Markdown         Markdown
  8       Vérifier l'affichage après génération         Navigateur
  9       Contrôler les performances avec Lighthouse    PageSpeed Insights

------------------------------------------------------------------------

# Valeurs de référence

  Paramètre                       Valeur recommandée
  ------------------------------- ----------------------------
  Largeur d'une photo             1200 à 1600 px
  Largeur d'une bannière          1600 à 1920 px
  Largeur d'une miniature         300 à 600 px
  Format des photographies        WebP
  Format des schémas              PNG
  Format des logos                SVG
  Qualité WebP                    80 à 85 %
  Métadonnées EXIF                À supprimer si inutiles
  Attribut `alt`                  Obligatoire
  Attributs `width` et `height`   Obligatoires
  `loading="lazy"`                Oui, sauf image principale
  `decoding="async"`              Oui

------------------------------------------------------------------------

# Vérifications avant publication

| Point à contrôler | ✓ |
|-------------------|:-:|
| Format adapté à la nature de l'image | □ |
| Dimensions adaptées à l'affichage | □ |
| Poids du fichier raisonnable | □ |
| Texte alternatif (`alt`) renseigné | □ |
| Attributs `width` et `height` présents | □ |
| `loading="lazy"` correctement utilisé | □ |
| Métadonnées supprimées si inutiles | □ |
| Affichage correct sur ordinateur | □ |
| Affichage correct sur mobile | □ |
| Contrôle Lighthouse effectué | □ |

------------------------------------------------------------------------

# Tableau de décision

  ----------------------------------------------------------------------------------
  Si l'image est...    Format        Largeur conseillée Qualité   Remarques
  -------------------- ---------- --------------------- --------- ------------------
  Une photographie     **WebP**          1200 à 1600 px 80 à 85 % Cas général du
                                                                  site

  Une photographie de  **WebP**          1600 à 1920 px 80 à 85 % Image principale
  couverture                                                      

  Une illustration     **WebP**          1000 à 1200 px 80 à 85 % Format recommandé
  d'article                                                       

  Une miniature        **WebP**            300 à 600 px 75 à 80 % Chargement rapide

  Une capture d'écran  **PNG**            Taille réelle Sans      Préserve
                                                        perte     parfaitement le
                                                                  texte

  Un schéma            **PNG**            Taille réelle Sans      Aucun artefact de
  électronique                                          perte     compression

  Un dessin technique  **PNG**            Taille réelle Sans      Traits
                                                        perte     parfaitement nets

  Un logo              **SVG**                Vectoriel ---       À privilégier
                                                                  systématiquement

  Une icône            **SVG**                Vectoriel ---       Très léger

  Une animation        **WebP              Selon besoin ---       Préférable au GIF
                       animé**                                    
  ----------------------------------------------------------------------------------

---

# Tableau récapitulatif

| Nature de l'illustration | Format | Largeur recommandée | Compression | Remarques |
|---------------------------|--------|--------------------:|-------------|-----------|
| Photographie | **WebP** | 1200 à 1600 px | Qualité 80 à 85 % | Cas général |
| Photo de couverture | **WebP** | 1600 à 1920 px | Qualité 80 à 85 % | Image principale |
| Illustration d'article | **WebP** | 1000 à 1200 px | Qualité 80 à 85 % | Optimisée pour le Web |
| Miniature | **WebP** | 300 à 600 px | Qualité 75 à 80 % | Chargement rapide |
| Capture d'écran | **PNG** | Taille réelle | Sans perte | Texte parfaitement net |
| Schéma électronique | **PNG** | Taille réelle | Sans perte | Aucune perte de détails |
| Dessin technique | **PNG** | Taille réelle | Sans perte | Traits parfaitement nets |
| Logo | **SVG** | Vectoriel | — | Format à privilégier |
| Icône | **SVG** | Vectoriel | — | Très léger |
| Animation | **WebP animé** | Selon besoin | — | Préférable au GIF |

---

# Règles essentielles

| Règle | Valeur |
|--------|--------|
| Publier l'image originale | **Jamais** |
| Conserver l'original | **Toujours** |
| Renseigner `alt` | **Obligatoire** |
| Renseigner `width` et `height` | **Obligatoire** |
| Utiliser `loading="lazy"` | Oui, sauf image principale |
| Utiliser `decoding="async"` | Oui |
| Supprimer les métadonnées EXIF si inutiles | Oui |
| Vérifier le résultat avec Lighthouse | Oui |


Le respect de cette procédure permet de réduire significativement le
poids des pages, d'améliorer les performances du site et d'obtenir de
meilleurs résultats aux audits Lighthouse.

------------------------------------------------------------------------

# Historique des révisions

    Version Date         Auteur   Modifications
  --------- ------------ -------- --------------------------
        1.0 29/07/2026   F6CYK    Création de la procédure
