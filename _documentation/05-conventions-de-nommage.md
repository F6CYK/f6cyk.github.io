# Conventions de nommage

| Document  | Conventions de nommage |
| --------- | ---------------------- |
| Version   | 2.0                    |
| Statut    | Projet                 |
| Auteur    | F6CYK                  |
| Diffusion | Interne                |

---

# 1. Objet

Le présent document définit les conventions de nommage utilisées dans le projet **F6CYK**.

Il complète les principes établis par la **Charte éditoriale**, le document **Architecture du site**, le document **Organisation des articles** et le document **Gestion des ressources multimédias**. :contentReference[oaicite:0]{index=0}

Son objectif est de garantir une organisation homogène, une maintenance simple et une pérennité maximale des contenus.

Les conventions décrites ici s'appliquent aux répertoires, aux articles et à l'ensemble des ressources documentaires utilisées par le site.

---

# 2. Principes généraux

Le nom d'un fichier ou d'un répertoire constitue une information documentaire.

Il doit permettre d'identifier immédiatement la nature et le contenu de la ressource concernée.

Une convention de nommage ne cherche pas uniquement à satisfaire des contraintes techniques.

Elle contribue également à la lisibilité de l'arborescence et facilite les opérations de maintenance.

Les conventions retenues reposent sur quelques principes permanents.

## 2.1 Simplicité

Les noms doivent rester aussi simples que possible.

Ils évitent les formulations longues, les abréviations ambiguës et les informations inutiles.

## 2.2 Lisibilité

Le contenu d'un fichier ou d'un répertoire doit être identifiable sans avoir à l'ouvrir.

Un nom explicite est toujours préférable à un nom générique.

## 2.3 Stabilité

Un nom ne doit être modifié qu'en cas de nécessité.

La stabilité des noms facilite les évolutions du site et limite les risques de liens rompus.

## 2.4 Cohérence

Les mêmes règles s'appliquent à l'ensemble du projet.

Une convention n'a d'intérêt que si elle est respectée de manière uniforme.

---

# 3. Jeux de caractères

Afin de garantir la compatibilité avec les différents systèmes d'exploitation, serveurs web et outils de développement, les noms utilisent un jeu de caractères volontairement limité.

Les noms sont composés exclusivement :

- des lettres minuscules de l'alphabet latin (`a` à `z`) ;
- des chiffres (`0` à `9`) ;
- du caractère `-` utilisé comme séparateur entre les mots.

Les caractères suivants sont exclus :

- les espaces ;
- les lettres accentuées ;
- les apostrophes ;
- les guillemets ;
- les parenthèses ;
- les caractères spéciaux ;
- les caractères de ponctuation inutiles.

Cette règle garantit une excellente portabilité des fichiers et évite de nombreux problèmes liés aux systèmes de fichiers ou aux URL.

Les noms restent volontairement courts tout en demeurant suffisamment explicites pour être compris immédiatement.

# 4. Nommage des répertoires

Les répertoires portent des noms décrivant clairement leur rôle ou leur contenu.

Ils doivent rester suffisamment généraux pour conserver leur pertinence malgré les évolutions futures du site.

Les noms retenus privilégient la simplicité et la stabilité.

Exemples :

```text
assets/
documentation/
pages/
_posts/
_includes/
_layouts/
```

Le choix d'un nom ne dépend pas du nombre de fichiers présents mais de la fonction assurée par le répertoire.

---

# 5. Nommage des articles

Chaque article possède un identifiant unique matérialisé par son nom.

Celui-ci résume le sujet traité de manière concise.

Il ne cherche pas à reproduire le titre complet de l'article.

Les mots significatifs sont séparés par un tiret.

Exemples :

```text
antenne-levy
bobinage-nid-abeille
recepteur-ne602
xr2206
filtre-quartz
```

Le nom demeure stable même si le titre de l'article évolue légèrement.

Cette stabilité facilite les liens internes et limite les modifications de l'arborescence.

---

# 6. Répertoires d'articles

Le répertoire contenant les ressources d'un article reprend exactement le même nom que celui-ci. :contentReference[oaicite:0]{index=0}

Cette correspondance permet d'identifier immédiatement les ressources associées.

Par exemple :

```text
xr2206/
    index.md
    01.jpg
    schema-principe.svg
    datasheet.pdf
```

L'association entre le fichier principal et son répertoire demeure ainsi immédiate et ne nécessite aucune convention supplémentaire.

---

# 7. Nommage des illustrations

Les illustrations suivent une convention simple et homogène.

Lorsque plusieurs photographies illustrent successivement un article, elles sont numérotées dans leur ordre d'apparition.

Exemple :

```text
01.jpg
02.jpg
03.jpg
```

Lorsque le document représente un schéma, un plan, un dessin ou une figure particulière, un nom descriptif est préférable.

Exemples :

```text
schema-principe.svg
schema-electrique.svg
implantation-composants.png
courbe-reponse.svg
```

Le nom doit permettre d'identifier immédiatement le contenu de l'illustration sans avoir à l'ouvrir.

Cette règle facilite également les recherches dans l'ensemble du projet.

# 8. Nommage des documents

Les documents associés à un article conservent, lorsque cela présente un intérêt documentaire, leur nom d'origine.

C'est notamment le cas des notices constructeur, des fiches techniques, des publications officielles ou des documents historiques.

Lorsque le nom d'origine est peu explicite ou difficile à exploiter, un nom descriptif est préférable.

Exemples :

```text
manuel-xr2206.pdf
datasheet-ne602.pdf
radio-ref-1978-03.pdf
notice-ftdx101.pdf
```

Le nom doit permettre d'identifier immédiatement le document sans nécessiter son ouverture.

---

# 9. Nommage des fichiers audio

Les fichiers audio décrivent leur contenu de manière concise.

Le nom peut faire apparaître, selon les besoins :

- le type de signal ;
- la bande de fréquences ;
- le mode de transmission ;
- le contexte de l'enregistrement.

Exemples :

```text
cw-14mhz.mp3
qso-am-80m.mp3
ft8-20m.mp3
bruit-bande-160m.mp3
```

Le choix du nom doit privilégier la compréhension immédiate plutôt que l'exhaustivité.

---

# 10. Nommage des vidéos

Les vidéos suivent les mêmes principes que les autres ressources.

Leur nom décrit le sujet principal traité.

Exemples :

```text
construction-antenne-levy.mp4
presentation-xr2206.mp4
mesure-filtre-quartz.mp4
field-day-2026.mp4
```

Les informations secondaires, telles que la date de réalisation ou le numéro de version, ne sont ajoutées que lorsqu'elles présentent un réel intérêt documentaire.

---

# 11. Évolution des noms

Les conventions de nommage privilégient la stabilité.

Un changement de nom ne doit intervenir que lorsqu'il améliore clairement la compréhension ou corrige une erreur. :contentReference[oaicite:0]{index=0}

Toute modification peut entraîner :

- la mise à jour des liens internes ;
- la révision des références croisées ;
- la modification de la documentation ;
- des opérations supplémentaires de maintenance.

Pour cette raison, un nom correctement choisi dès la création d'une ressource est généralement conservé pendant toute sa durée de vie.

---

# 12. Principes directeurs

Les conventions de nommage reposent sur quelques règles permanentes.

- Les noms sont simples, explicites et stables.
- Seules les lettres minuscules, les chiffres et le tiret sont utilisés.
- Les espaces et les caractères accentués sont exclus.
- Les noms permettent d'identifier immédiatement la nature de la ressource.
- Les répertoires d'articles portent le même nom que l'article correspondant.
- Les conventions sont appliquées de manière uniforme à l'ensemble du site.

---

# 13. Conclusion

Les conventions de nommage participent directement à la qualité de l'organisation documentaire du site F6CYK.

En limitant volontairement les variations d'écriture et en privilégiant des noms simples, explicites et durables, elles facilitent la maintenance, améliorent la lisibilité de l'arborescence et garantissent la pérennité des contenus.

---

> *Le présent document définit les conventions de nommage applicables à l'ensemble des fichiers et répertoires du site F6CYK. Il garantit une organisation homogène, stable et durable de toutes les ressources documentaires.*
