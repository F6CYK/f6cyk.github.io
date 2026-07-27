---
layout: default
title: Émetteur Grandes Ondes
description: Réalisation d'un émetteur AM Grandes Ondes utilisant un module XR2206 modifié.
permalink: /realisations/emetteur-grandes-ondes/
---

# Émetteur Grandes Ondes

## Présentation

Cet émetteur AM pour les Grandes Ondes est construit autour d'un module générateur de fonctions à **XR2206** modifié afin d'être utilisé comme excitateur RF.

Le montage est complété par un modulateur à **BF245**, un amplificateur RF et un circuit d'accord adaptés à la bande des Grandes Ondes.

Cette page présente la réalisation ainsi que les principales étapes de sa mise en œuvre. La documentation complète est disponible sous forme de flipbook.

![Vue générale de l'émetteur](photo-emetteur.jpg)

---

## Documentation

{% include flipbook.html
    title="Documentation complète"
    pdf="article.pdf"
%}

---

# Réalisation

## Module XR2206

Le kit générateur de fonctions à XR2206 disponible sur les sites de vente en ligne constitue une excellente base pour réaliser l'excitateur d'un émetteur AM Grandes Ondes.

Quelques modifications simples permettent de l'adapter à cette utilisation tout en conservant la quasi-totalité des composants d'origine.

Cette procédure décrit le montage et les essais permettant de vérifier le bon fonctionnement de l'excitateur avant de réaliser le modulateur.

![Module XR2206](xr2206-module.png)

## Préparation

Avant toute opération :

- vérifier le contenu du kit ;
- identifier tous les composants ;
- repérer le circuit intégré **U1 (XR2206)** ;
- préparer un support tulipe 16 broches.

> Cette procédure doit être suivie dans l'ordre afin d'éviter toute erreur de câblage.

## Modification du support du XR2206

La broche **1** du XR2206 ne doit **pas** être reliée à la masse.

Pour cela :

- replier la broche correspondante du support afin qu'elle ne pénètre pas dans le circuit imprimé ;
- intercaler un petit isolant entre le support et le circuit imprimé ;
- vérifier soigneusement qu'aucun contact n'est possible.

Un petit morceau d'isolant de transistor de puissance ou un ruban adhésif d'électricien convient parfaitement.

![Modification du module XR2206](xr2206-schema.png)

## Montage des composants

Effectuer toutes les soudures côté cuivre.

Monter ensuite les composants dans l'ordre suivant :

1. support du XR2206 (15 broches seulement) ;
2. potentiomètre **R2 (50 kΩ)** ;
3. résistance **R6 (5,1 kΩ)** ;
4. cavalier **J1** (forme d'onde sinusoïdale) ;
5. condensateur **C1 (100 µF)** ;
6. condensateur **C2 (100 nF)** ;
7. résistance **R3 (5,1 kΩ)** ;
8. résistance **R5 (5,1 kΩ)** ;
9. résistance **R1 (1 kΩ)** ;
10. résistance **R4 (330 Ω)** ;
11. condensateur **C3 (10 µF)** ;
12. bornes de sortie HF ;
13. bornes d'alimentation ;
14. bornes destinées au potentiomètre de fréquence en façade ;
15. condensateur **C8 (100 pF)** ;
16. shunt de liaison de **NC1** vers **C8**.

## Premier essai

Avant la mise sous tension :

- relier provisoirement la broche **1** du XR2206 à la masse avec un fil fin ;
- raccorder un potentiomètre de **100 kΩ** sur l'entrée de commande de fréquence ;
- alimenter le montage sous **15 V** (fonctionnement possible sous **12 V**).

## Vérification

À l'oscilloscope :

- raccorder la sonde entre **Terre** et **Sinus** ;
- placer **R2** au maximum ;
- vérifier la présence d'un signal d'environ **30 V crête à crête**.

Cette amplitude varie légèrement avec la fréquence.

En l'absence d'oscilloscope :

- raccorder environ un mètre de fil sur la sortie ;
- vérifier la présence de la porteuse sur un récepteur GO situé à proximité.

## Fin des essais

Lorsque le fonctionnement est validé :

- retirer impérativement la liaison provisoire entre la broche **1** et la masse.

Le montage est alors prêt à recevoir le modulateur.

---

## Modulateur

Le modulateur est réalisé autour d'un **BF245**. Son implantation est présentée ci-dessous.

![Implantation du modulateur BF245](modulateur-bf245.png)

---

## Remarques

À l'issue du montage, les composants suivants ne sont pas utilisés :

- C5
- C6
- C7
- R7
- R8

La résistance **R8** pourra être utilisée provisoirement lors des essais de commande de fréquence.

---

## Documents complémentaires

La réalisation est complétée par :

- l'article complet présenté dans le flipbook ;
- le schéma du module XR2206 ;
- la photographie annotée du circuit imprimé ;
- l'implantation du modulateur BF245 ;
- les photographies de la réalisation.
