---
 layout: default
 title: Accueil
 permalink: /
 asset_path: /assets/images/station
---

# F6CYK

{% capture introduction %}

Ce site constitue le carnet de travaux techniques d'un radioamateur expérimentateur.

Il rassemble des réalisations, des restaurations de matériels, des études d'antennes, des expérimentations HF et des méthodes de mesure appliquées à des équipements réels.

Chaque dossier privilégie une démarche fondée sur l'observation, la conception, la réalisation et la vérification par la mesure. Schémas, photographies, relevés et résultats d'essais sont réunis afin de constituer une documentation technique destinée à être comprise, reproduite et enrichie.

{% endcapture %}

{% assign image = page.asset_path | append: "/station_f6cyk-1.png" %}

{% include figure.html
   src=image
   alt="Station radioamateur F6CYK"
   caption="La station F6CYK, où sont réalisés la plupart des travaux présentés sur ce site."
%}

## Rubriques

### Station

Présentation de la station, de son environnement technique, des équipements, des instruments de mesure et des méthodes de travail.

### Réalisations

Montages électroniques, restaurations de matériels, développements spécifiques, fabrication mécanique et expérimentations.

### Antennes

Conception, construction, essais comparatifs, caractérisation et mesures d'antennes.

### Documentation

Notices, composants, dossiers techniques, ressources documentaires et archives classés par domaines.

### Galerie

Photographies de la station, des réalisations, des équipements, des expérimentations et des instruments de mesure.
