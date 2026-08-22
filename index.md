---

layout: default
title: Accueil
permalink: /
asset_path: /assets/images/station
----------------------------------

# F6CYK

{% capture introduction %}

Ce site est consacré au radioamateurisme, à ses techniques, à son histoire et aux connaissances qui permettent de le comprendre et de le pratiquer.

Il rassemble des réflexions, des recherches historiques, des biographies, des notes techniques, des réalisations, des restaurations, des expérimentations et des documents issus de la pratique du radioamateurisme.

Chaque sujet est traité selon sa nature. Une réflexion peut mettre en perspective une pratique ou une évolution du radioamateurisme ; une recherche historique peut contribuer à en préserver la mémoire ; une note technique peut expliquer un principe ou une méthode ; un compte rendu d'expérimentation peut présenter une démarche, des mesures et des résultats.

L'ensemble constitue progressivement un fonds documentaire destiné à conserver, transmettre et approfondir des connaissances sur le radioamateurisme.

{% endcapture %}

{% assign image = page.asset_path | append: "/station_f6cyk-1.webp" %}

{% include figure.html
src=image
alt="Station radioamateur F6CYK"
caption="La station F6CYK, support d'une partie des activités, recherches et expérimentations présentées sur ce site."
%}

{{ introduction | markdownify }}

## Rubriques

### Station

Présentation de la station, de son environnement technique, des équipements, des instruments de mesure et des méthodes de travail.

### Réalisations

Montages électroniques, restaurations de matériels, développements spécifiques, constructions et expérimentations.

### Antennes

Conception, construction, essais, caractérisation et mesures d'antennes.

### Documentation

Notes techniques, notices, composants, dossiers, archives et ressources documentaires classés par domaines.

### Galerie

Photographies de la station, des matériels, des réalisations, des expérimentations et des documents qui accompagnent les différents sujets.
