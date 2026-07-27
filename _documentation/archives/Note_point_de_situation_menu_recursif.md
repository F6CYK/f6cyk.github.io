# Point de situation -- Évolution du menu récursif de la documentation

## Contexte

Le site repose sur une architecture Jekyll utilisant des fichiers YAML
pour décrire les arborescences documentaires et un composant Liquid
récursif (`recursive-menu.html`) chargé de générer automatiquement les
menus.

Cette architecture présente plusieurs qualités :

-   récursivité illimitée ;
-   séparation claire entre les données (YAML), la génération (Liquid)
    et la présentation (CSS) ;
-   maintenance simple ;
-   excellente évolutivité.

Les investigations menées jusqu'à présent n'ont révélé aucun
dysfonctionnement dans cette architecture. La génération HTML est
correcte et ne constitue pas l'origine des difficultés rencontrées.

## Contrainte fondamentale

Le bandeau gris de navigation constitue un élément structurant de la
présentation du site.

Cette contrainte est impérative :

-   sa hauteur actuelle doit être conservée ;
-   son comportement ne doit pas être modifié ;
-   l'ouverture des sous-menus ne doit jamais augmenter sa hauteur ;
-   le contenu de la page ne doit jamais être repoussé vers le bas.

Les sous-menus devront donc continuer à apparaître en dehors du flux
normal de la page.

Cette exigence constitue le principal verrou de conception.

## Fonctionnement actuel

Le menu obtenu aujourd'hui correspond au fonctionnement classique d'un
menu déroulant en cascade.

Le premier niveau est présenté horizontalement dans le bandeau
supérieur.

Les niveaux suivants apparaissent sous forme de panneaux successifs
s'ouvrant horizontalement vers la droite.

Ce comportement est cohérent avec les règles CSS actuellement utilisées.

Il ne s'agit donc pas d'un dysfonctionnement mais du résultat attendu du
modèle de présentation actuellement mis en œuvre.

## Objectif recherché

Le premier niveau doit rester identique.

En revanche, tous les niveaux internes doivent être présentés sous la
forme d'une véritable arborescence verticale.

Exemple :

    Documentation

    Composants
    ├── Circuits intégrés
    │   ├── XR2206
    │   └── NE555
    └── Tubes électroniques
        └── Catalogue Tubes Belvu

Aucun développement horizontal ne doit subsister.

## Constats issus des essais

Les différents essais réalisés ont permis d'écarter plusieurs
hypothèses.

-   La structure HTML récursive fonctionne correctement.
-   La génération Liquid ne présente pas d'anomalie.
-   Les données YAML sont correctement interprétées.

Les difficultés rencontrées proviennent exclusivement de la stratégie de
présentation CSS actuellement employée.

Les modifications successives ont notamment mis en évidence plusieurs
régressions :

-   disparition apparente de certains éléments de menu ;
-   impossibilité d'accéder à certains niveaux ;
-   recouvrements entre panneaux ;
-   retour involontaire à un comportement horizontal.

Ces régressions montrent que des modifications ponctuelles du CSS ne
suffisent pas à faire évoluer le modèle actuel vers le comportement
recherché.

## Questions restant ouvertes

### Présentation verticale

Comment obtenir une arborescence verticale tout en maintenant les
sous-menus hors du flux normal afin de préserver la hauteur fixe du
bandeau gris ?

### Interaction

Comment conserver une navigation fluide au survol lorsque plusieurs
niveaux sont ouverts simultanément dans une présentation verticale ?

### Positionnement

Quel mécanisme CSS permettra de conserver une lecture hiérarchique
claire sans revenir au modèle classique des menus en cascade ?

### Compatibilité

Comment faire évoluer uniquement la présentation tout en conservant
intégralement l'architecture existante ?

## Décision

La version actuelle constitue désormais la version de référence.

Les travaux futurs devront respecter les principes suivants :

-   conserver intégralement les fichiers Liquid existants ;
-   conserver le composant récursif actuel ;
-   conserver les fichiers YAML ;
-   conserver le comportement général du site ;
-   conserver la hauteur actuelle du bandeau gris de navigation ;
-   éviter toute régression fonctionnelle.

Les investigations porteront exclusivement sur la conception d'un
nouveau modèle de présentation CSS capable d'afficher une arborescence
verticale tout en respectant l'ensemble des contraintes précédentes.
