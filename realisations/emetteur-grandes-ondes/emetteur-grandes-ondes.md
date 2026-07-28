---
layout: default
title: Émetteur Grandes Ondes
permalink: /realisations/emetteur-grandes-ondes/
asset_path: /realisations/emetteur-grandes-ondes
---

# Émetteur Grandes Ondes

## Présentation

{% capture introduction %}

L'émetteur Grandes Ondes présenté dans cette réalisation est construit autour d'un module générateur de fonctions à **XR2206** disponible sous forme de kit. Bien que ce module soit initialement destiné à la génération de signaux de laboratoire, quelques modifications simples permettent de l'utiliser comme excitateur RF pour un émetteur AM.

Cette réalisation montre qu'il est possible d'obtenir d'excellents résultats à partir d'un matériel très courant, à condition de respecter quelques précautions de montage et de procéder méthodiquement aux essais. Le principe retenu consiste à utiliser le XR2206 comme générateur de la porteuse, puis à lui adjoindre un modulateur permettant de produire une modulation d'amplitude de bonne qualité.

La présente page constitue le complément de l'article technique présenté ci-dessous sous forme de flipbook. Elle reprend les principales opérations de montage ainsi que les essais indispensables à la validation du module avant son intégration dans l'émetteur complet.

{% endcapture %}

{% assign image = page.asset_path | append: "/module-xr2206.png" %}

{% include intro.html
   content=introduction
   src=image
   alt="Module XR2206"
   caption="Module générateur de fonctions XR2206 utilisé comme excitateur de l'émetteur Grandes Ondes."
%}

{% include flipbook.html
   file="article_emetteur_go_xr2206.pdf"
   title="Documentation complète"
   showCover=false
   scale=1.5
%}

---

# Réalisation

## Le module XR2206

Le kit générateur de fonctions à XR2206 disponible sur les sites de vente en ligne constitue une excellente base pour réaliser l'excitateur d'un émetteur AM Grandes Ondes.

Quelques modifications simples permettent de l'adapter à cette utilisation tout en conservant la quasi-totalité des composants d'origine.

Cette page décrit la procédure de montage et les essais permettant de vérifier le bon fonctionnement de l'excitateur avant de réaliser le modulateur.

{% assign image = page.asset_path | append: "/module-xr2206.png" %}

![Module XR2206]({{ image }})

## Préparation

Avant toute opération :

- vérifier le contenu du kit ;
- identifier tous les composants ;
- repérer le circuit intégré **U1 (XR2206)** ;
- préparer un support tulipe 16 broches.

> Cette procédure doit être suivie dans l'ordre afin d'éviter toute erreur de câblage.

Avant de commencer le montage, il est conseillé d'identifier les différents emplacements des composants sur le circuit imprimé et de contrôler visuellement la qualité des pistes. Cette vérification préliminaire permet d'éviter de nombreuses erreurs lors des opérations de soudage.

Le support du XR2206 sera monté avant l'ensemble des autres composants. Il est recommandé d'utiliser un support tulipe de bonne qualité afin de faciliter les essais et de préserver le circuit intégré lors des différentes manipulations.

---

## Modification du support du XR2206

La broche **1** du XR2206 ne doit **pas** être reliée à la masse.

Pour cela :

- replier la broche correspondante du support afin qu'elle ne pénètre pas dans le circuit imprimé ;
- intercaler un petit isolant entre le support et le circuit imprimé ;
- vérifier soigneusement qu'aucun contact n'est possible.

Un petit morceau d'isolant de transistor de puissance ou un ruban adhésif d'électricien convient parfaitement.

Cette modification constitue l'unique intervention réellement importante sur le module d'origine. Elle permettra, lors de l'installation du modulateur, d'agir sur le fonctionnement du XR2206 conformément au principe décrit dans l'article.

Il est recommandé de contrôler cette isolation à l'ohmmètre avant de poursuivre le montage. Toute liaison accidentelle entre la broche 1 et le plan de masse devra être supprimée avant la première mise sous tension.

Une fois cette vérification effectuée, le montage des composants peut commencer.

---
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

L'illustration ci-dessous permet de localiser les différents composants et les quelques modifications apportées au module d'origine.

Le montage ne présente pas de difficulté particulière. Comme pour tout kit électronique, il est recommandé de commencer par les composants les moins épais afin de faciliter les opérations de soudage.

Une fois l'ensemble des composants installés, procéder à un examen visuel minutieux du circuit imprimé afin de vérifier :

- l'orientation des composants polarisés ;
- la qualité des soudures ;
- l'absence de court-circuit entre pistes voisines ;
- la bonne isolation de la broche 1 du XR2206.

---

## Premier essai

Avant la mise sous tension :

- relier provisoirement la broche 1 du XR2206 à la masse avec un fil fin ;
- raccorder un potentiomètre de **100 kΩ** sur l'entrée de commande de fréquence ;
- alimenter le montage sous **15 V** (fonctionnement possible sous **12 V**).

Le cavalier **J1** doit être positionné de manière à sélectionner la sortie sinusoïdale.

Le premier essai consiste uniquement à vérifier le bon fonctionnement du générateur avant d'entreprendre les modifications destinées à recevoir le modulateur.

---

## Vérification

À l'oscilloscope :

- raccorder la sonde entre **Terre** et **Sinus** ;
- placer **R2** au maximum ;
- vérifier la présence d'un signal d'environ **30 V crête à crête**.

Cette amplitude varie légèrement avec la fréquence.

En l'absence d'oscilloscope :

- raccorder environ un mètre de fil sur la sortie ;
- vérifier la présence de la porteuse sur un récepteur GO situé à proximité.

Le signal délivré doit être parfaitement stable et exempt de toute distorsion visible.

Si le fonctionnement est conforme, l'excitateur est prêt pour l'étape suivante.

---

## Fin des essais

Lorsque le fonctionnement est validé :

- retirer impérativement la liaison provisoire entre la broche 1 et la masse.

Le montage est alors prêt à recevoir le modulateur.

---

## Vérification du module

Le premier essai permet de vérifier le bon fonctionnement de l'excitateur avant l'installation du modulateur.

À l'oscilloscope :

- raccorder la sonde entre **Terre** et **Sinus** ;
- placer **R2** au maximum ;
- vérifier la présence d'un signal d'environ **30 V crête à crête**.

Cette amplitude varie légèrement avec la fréquence.

En l'absence d'oscilloscope :

- raccorder environ un mètre de fil sur la sortie ;
- vérifier la présence de la porteuse sur un récepteur GO situé à proximité.

Lorsque le fonctionnement est validé :

- retirer impérativement la liaison provisoire entre la broche 1 et la masse.

Le montage est alors prêt à recevoir le modulateur.

---

# Modulateur BF245

La modulation d'amplitude est obtenue au moyen d'un modulateur construit autour d'un transistor **BF245**.

Le circuit imprimé est présenté ci-dessous.

Le modulateur est raccordé au module XR2206 après validation complète de celui-ci.

L'ensemble des détails de fonctionnement est présenté dans la documentation complète accessible au début de cette page.

---

# Modification du module XR2206

La seule modification importante apportée au module concerne la **broche 1** du XR2206.

La broche **1** du XR2206 ne doit **pas** être reliée à la masse.

Pour cela :

- replier la broche correspondante du support afin qu'elle ne pénètre pas dans le circuit imprimé ;
- intercaler un petit isolant entre le support et le circuit imprimé ;
- vérifier soigneusement qu'aucun contact n'est possible.

Un petit morceau d'isolant de transistor de puissance ou un ruban adhésif d'électricien convient parfaitement.

Cette modification doit être réalisée avant l'insertion définitive du circuit intégré.

---

# Composants non utilisés

À l'issue du montage, les composants suivants ne sont pas utilisés :

- **C5**
- **C6**
- **C7**
- **R7**
- **R8**

La résistance **R8** pourra être utilisée provisoirement lors des essais de commande de fréquence.

---

# Documentation

La description complète de la réalisation est disponible dans le document présenté en début de cette page.

Le flipbook rassemble notamment :

- le schéma de principe ;
- les explications détaillées du fonctionnement ;
- les photographies de montage ;
- les essais ;
- les résultats obtenus.

Il constitue la documentation de référence de cette réalisation.

