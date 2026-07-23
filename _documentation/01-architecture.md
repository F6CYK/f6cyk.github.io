# Architecture du site F6CYK

| Document | Architecture du site |
|----------|----------------------|
| Version | 2.0 |
| Statut | Projet |
| Auteur | F6CYK |
| Diffusion | Interne |

---

# 1. Objet

Le présent document décrit l'architecture générale du site **F6CYK**.

Il définit les principes retenus pour organiser les contenus, les ressources et les différents éléments constitutifs du site.

Il complète la **Charte éditoriale**, dont il applique les principes dans le domaine de l'organisation technique et documentaire. :contentReference[oaicite:0]{index=0}

Ce document ne décrit ni les règles de rédaction des articles ni les conventions de nommage des fichiers. Ces aspects font l'objet de documents spécifiques.

Son objectif est de fournir une architecture stable, cohérente et évolutive, capable d'accompagner le développement du site pendant de nombreuses années.

---

# 2. Principes d'architecture

L'architecture du site repose sur quelques principes simples qui guident l'ensemble des choix d'organisation.

## 2.1 Simplicité

L'organisation doit rester immédiatement compréhensible.

Chaque répertoire possède une fonction clairement identifiée et ne remplit qu'un seul rôle.

Les structures complexes, les niveaux de répertoires inutiles et les organisations redondantes sont évités.

## 2.2 Cohérence

Une même règle d'organisation s'applique à l'ensemble du site.

Les contenus similaires sont organisés selon des principes identiques afin de faciliter leur localisation, leur maintenance et leur évolution.

## 2.3 Unicité

Chaque information possède un emplacement unique.

Les duplications de contenus sont proscrites.

Lorsqu'une même information concerne plusieurs domaines, elle est reliée par des liens internes plutôt que reproduite dans plusieurs emplacements.

## 2.4 Pérennité

L'architecture ne doit pas dépendre d'une technologie particulière ni d'une organisation temporaire.

Elle doit pouvoir accompagner les évolutions du site sans nécessiter de restructurations importantes.

## Évolutivité

De nouveaux contenus doivent pouvoir être ajoutés sans remettre en cause l'organisation existante.

L'architecture est conçue pour croître progressivement tout en conservant sa lisibilité.

---

# 3. Deux niveaux d'organisation

Conformément aux principes définis dans la Charte éditoriale, le site distingue deux niveaux complémentaires d'organisation.

## 3.1 L'organisation physique

L'organisation physique correspond à la disposition réelle des répertoires et des fichiers.

Elle est destinée au rédacteur et aux opérations de maintenance.

Son objectif est de faciliter :

- la création des contenus ;
- les sauvegardes ;
- les évolutions ;
- la maintenance ;
- la gestion des ressources associées aux articles.

## 3.2 L'organisation documentaire

L'organisation documentaire correspond à la manière dont les contenus sont présentés au lecteur.

Elle traduit la structure des connaissances et non celle des répertoires.

La navigation, les menus, les index et les pages de regroupement sont construits à partir de cette organisation documentaire.

Ainsi, la structure physique du projet peut évoluer sans modifier la logique de consultation proposée au lecteur.

Les deux organisations demeurent cohérentes, mais elles répondent à des objectifs différents.

# 4. Architecture générale

Le projet est organisé en plusieurs ensembles de répertoires, chacun répondant à une fonction clairement identifiée.

Cette séparation permet d'isoler les différents types de contenus tout en facilitant leur maintenance.

Chaque répertoire possède un rôle unique et ne doit pas être utilisé pour d'autres finalités. :contentReference[oaicite:0]{index=0}

---

## 4.1 Documentation interne

Le répertoire `_documentation/` regroupe l'ensemble des documents de conception du projet.

Il constitue la mémoire technique du site.

On y trouve notamment :

- la charte éditoriale ;
- les documents d'architecture ;
- les conventions de rédaction ;
- les règles d'organisation ;
- les documents décrivant les choix techniques.

Ce répertoire est exclusivement destiné au développement et à la maintenance.

Il n'est jamais publié sur le site.

---

## 4.2 Contenus publiés

Les contenus destinés aux visiteurs sont répartis selon leur nature.

Ils comprennent notamment :

- les articles ;
- les pages permanentes ;
- les ressources documentaires ;
- les éléments multimédias.

Chaque catégorie possède sa propre organisation.

Les règles détaillées applicables aux articles sont définies dans le document consacré à leur organisation.

---

## 4.3 Ressources techniques

Les ressources nécessaires au fonctionnement du site sont regroupées dans un ensemble de répertoires spécialisés.

Elles comprennent notamment :

- les feuilles de style ;
- les scripts ;
- les bibliothèques logicielles ;
- les images de l'interface ;
- les polices de caractères ;
- les ressources utilisées par les composants du site.

Ces ressources participent au fonctionnement de l'application mais ne constituent pas des contenus documentaires.

Leur organisation répond principalement à des critères techniques.

---

# 5. L'article comme unité documentaire

Le principe fondamental de l'architecture est que l'article constitue l'unité élémentaire d'organisation.

Un article ne se limite pas à son fichier Markdown.

Il comprend également toutes les ressources nécessaires à sa compréhension :

- illustrations ;
- photographies ;
- schémas ;
- plans ;
- documents associés ;
- fichiers audio ;
- vidéos ;
- animations ;
- autres ressources spécifiques.

Ces éléments forment un ensemble cohérent.

Ils sont conservés dans le même répertoire afin de simplifier leur gestion et d'éviter toute dispersion.

Cette organisation garantit que chaque sujet demeure autonome et facilement transportable.

Les règles détaillées d'organisation des articles et de leurs ressources sont décrites dans le document correspondant.

---

# 6. Absence de dépendances artificielles

L'architecture privilégie l'autonomie des contenus.

Un article ne doit pas dépendre de l'organisation interne d'un autre article pour fonctionner.

Les ressources communes sont limitées aux éléments techniques réellement partagés, tels que les feuilles de style, les scripts ou les composants génériques.

Cette séparation réduit les risques lors des évolutions et facilite la maintenance du site dans la durée.



# 7. Organisation des ressources

Les ressources utilisées par le site appartiennent à deux catégories distinctes.

Cette distinction contribue à maintenir une architecture claire et facilite la maintenance du projet.

---

## 7.1 Ressources techniques

Les ressources techniques sont partagées par l'ensemble du site.

Elles assurent son fonctionnement ou contribuent à sa présentation.

Elles comprennent notamment :

- les feuilles de style ;
- les scripts JavaScript ;
- les bibliothèques externes ;
- les composants graphiques de l'interface ;
- les icônes ;
- les polices de caractères.

Ces ressources sont indépendantes des contenus documentaires.

Leur évolution ne doit pas modifier l'organisation des articles.

---

## 7.2 Ressources documentaires

Les ressources documentaires sont propres à un article donné.

Elles font partie intégrante du contenu documentaire.

Il peut s'agir notamment :

- d'illustrations ;
- de photographies ;
- de schémas ;
- de plans ;
- de fichiers PDF ;
- d'enregistrements sonores ;
- de vidéos ;
- de modèles ou fichiers associés.

Ces ressources sont conservées avec l'article auquel elles appartiennent.

Elles ne sont pas mutualisées entre plusieurs articles, sauf lorsqu'il s'agit d'une ressource véritablement commune dont la gestion centralisée présente un intérêt clairement identifié.

---

# 8. Navigation et architecture

L'organisation physique du projet ne détermine pas directement la navigation proposée au lecteur.

Les menus, les index, les pages de regroupement et les liens internes traduisent l'organisation documentaire définie dans la Charte éditoriale.

Ils permettent au lecteur de parcourir les connaissances selon une logique thématique plutôt que selon la disposition réelle des fichiers.

L'architecture du site doit donc permettre cette indépendance entre le stockage des contenus et leur présentation.

Les choix de classement des fichiers ne doivent jamais dégrader la qualité de la navigation.

---

# 9. Évolution de l'architecture

L'architecture est conçue pour accompagner le développement progressif du site.

L'ajout d'un nouvel article, d'une nouvelle rubrique ou d'une nouvelle catégorie documentaire ne doit pas remettre en cause les principes d'organisation existants.

Les évolutions doivent préserver :

- la simplicité de l'organisation ;
- la cohérence documentaire ;
- l'absence de redondance ;
- la facilité de maintenance ;
- l'autonomie des contenus.

Lorsqu'une évolution importante devient nécessaire, elle doit être documentée avant sa mise en œuvre afin d'en conserver les motivations et les conséquences.

---

# 10. Conclusion

L'architecture du site F6CYK constitue le cadre d'organisation de l'ensemble des contenus et des ressources.

Elle est fondée sur une séparation claire entre l'organisation physique des fichiers et l'organisation documentaire destinée au lecteur.

Cette architecture privilégie la simplicité, la cohérence, l'autonomie des articles et la pérennité des informations.

Elle fournit un cadre stable permettant au site de s'enrichir progressivement sans remettre en cause ses principes fondateurs.
```
