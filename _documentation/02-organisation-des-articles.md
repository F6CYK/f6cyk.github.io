# Organisation des articles

| Document  | Organisation des articles |
| --------- | ------------------------- |
| Version   | 2.0                       |
| Statut    | Projet                    |
| Auteur    | F6CYK                     |
| Diffusion | Interne                   |

---

# 1. Objet

Le présent document définit les règles d'organisation des articles publiés sur le site **F6CYK**.

Il complète les principes établis par la **Charte éditoriale**, le document **Architecture du site** et le document **Gestion des ressources multimédias**. :contentReference[oaicite:0]{index=0}

Son objectif est de garantir une organisation homogène des contenus, de simplifier leur maintenance et d'assurer la pérennité du fonds documentaire.

Il décrit la manière dont un article est conçu, organisé et maintenu tout au long de son cycle de vie.

---

# 2. L'article comme unité documentaire

L'article constitue l'unité fondamentale du site.

Il ne se limite pas à un simple fichier Markdown.

Il rassemble l'ensemble des éléments nécessaires à la compréhension d'un sujet déterminé :

- le contenu rédactionnel ;
- les illustrations ;
- les schémas ;
- les photographies ;
- les documents associés ;
- les fichiers audio ;
- les vidéos ;
- les autres ressources spécifiques.

L'ensemble de ces éléments forme une unité documentaire cohérente.

L'article est ainsi considéré comme un objet autonome pouvant être créé, déplacé, sauvegardé ou enrichi sans dépendre de l'organisation interne des autres contenus.

---

# 3. Un sujet, un article

Chaque article traite d'un sujet clairement identifié.

Son objectif est défini dès sa conception.

Lorsqu'un domaine devient trop vaste, il est préférable de créer plusieurs articles complémentaires plutôt qu'un document unique difficile à maintenir.

Chaque article possède ainsi un périmètre clairement délimité.

Les relations entre plusieurs sujets sont établies par des liens internes et non par la fusion artificielle de contenus différents.

---

# 4. Autonomie des articles

Chaque article doit pouvoir être compris indépendamment des autres.

Lorsque certaines connaissances préalables sont nécessaires, l'article renvoie vers les contenus correspondants au moyen de liens internes.

Les informations utiles ne sont pas inutilement répétées.

Cette organisation permet de construire progressivement un réseau cohérent de connaissances sans créer de redondances.

L'autonomie concerne également les ressources documentaires.

Toutes les ressources nécessaires à un article sont conservées avec celui-ci, conformément aux principes définis dans les documents précédents.

Cette organisation garantit une maintenance simple et limite les dépendances entre contenus.

# 5. Structure d'un article

Chaque article est organisé autour d'un répertoire qui lui est propre.

Ce répertoire constitue l'unité physique de stockage de l'ensemble des éléments associés au sujet traité.

Il contient :

- le fichier principal de l'article ;
- les illustrations ;
- les photographies ;
- les schémas ;
- les documents complémentaires ;
- les éventuels fichiers audio ;
- les vidéos ;
- toute autre ressource propre à cet article.

L'ensemble de ces éléments est conservé au même endroit afin de préserver la cohérence documentaire.

---

## 5.1 Le fichier principal

Le fichier `index.md` constitue le point d'entrée de l'article.

Il contient l'intégralité du contenu rédactionnel.

Les ressources associées sont référencées depuis ce fichier.

Le recours à un fichier unique facilite la lecture, la maintenance et les évolutions de l'article.

---

## 5.2 Les ressources locales

Les ressources utilisées par un article demeurent locales à celui-ci.

Elles ne sont pas réparties dans des répertoires spécialisés selon leur nature.

Ainsi, une photographie, un schéma ou un document PDF relatif au même sujet sont conservés ensemble.

Cette organisation présente plusieurs avantages :

- elle simplifie la création de nouveaux articles ;
- elle facilite les sauvegardes ;
- elle limite les risques de liens rompus ;
- elle permet de déplacer un article sans opération complémentaire ;
- elle améliore la lisibilité de l'arborescence du projet.

---

# 6. Classement documentaire

Chaque article possède une place unique dans l'organisation documentaire du site. :contentReference[oaicite:0]{index=0}

Son classement est déterminé par son sujet principal.

Lorsqu'un article présente des liens avec plusieurs domaines, il demeure rattaché à une seule rubrique.

Les autres domaines sont reliés au moyen de liens internes, de pages d'index ou de parcours documentaires.

Cette règle garantit l'unicité des contenus et évite les duplications.

---

# 7. Rédaction des articles

Chaque article poursuit un objectif documentaire clairement identifié.

Sa rédaction privilégie la compréhension progressive du sujet.

La structure interne peut varier selon la nature du contenu, mais elle repose généralement sur la progression suivante :

- présentation du sujet ;
- contexte ou principes généraux ;
- développement technique ;
- illustrations et démonstrations ;
- documents complémentaires ;
- références éventuelles ;
- liens vers des sujets associés.

Cette organisation n'a pas un caractère obligatoire.

Elle constitue un modèle destiné à favoriser la cohérence générale de la documentation tout en laissant au rédacteur la liberté d'adapter la structure aux besoins de chaque sujet.

# 8. Évolution des articles

Un article est destiné à évoluer au fil du temps.

Il peut être complété, corrigé ou enrichi dès lors que ces modifications améliorent sa qualité documentaire.

L'objectif n'est pas de produire des versions successives d'un même contenu mais de maintenir un document de référence continuellement amélioré. :contentReference[oaicite:0]{index=0}

Les évolutions peuvent notamment concerner :

- l'ajout d'explications ;
- l'intégration de nouvelles illustrations ;
- la mise à jour de données techniques ;
- la correction d'erreurs ;
- l'ajout de documents complémentaires ;
- l'amélioration de la présentation.

Toute évolution doit préserver la cohérence générale de l'article.

---

# 9. Liens entre les articles

Les articles ne constituent pas des documents isolés.

Ils participent à un ensemble documentaire organisé.

Les liens internes permettent de guider progressivement le lecteur vers les sujets complémentaires.

Ils ont notamment pour objectif :

- d'éviter les répétitions ;
- de faciliter les approfondissements ;
- de replacer chaque sujet dans son contexte ;
- de construire un réseau cohérent de connaissances.

Les liens internes complètent les articles sans modifier leur autonomie.

Chaque article doit conserver sa propre cohérence, même lorsqu'il est consulté indépendamment des autres.

---

# 10. Principes directeurs

L'organisation des articles repose sur quelques règles permanentes.

- Chaque article traite d'un sujet clairement identifié.
- Un article constitue une unité documentaire autonome.
- Toutes les ressources sont conservées avec l'article auquel elles appartiennent.
- Chaque article occupe une place unique dans l'organisation documentaire.
- Les liens internes remplacent les duplications de contenu.
- Les évolutions améliorent progressivement les documents sans remettre en cause leur structure.
- La qualité documentaire prime toujours sur la quantité de contenu publié.

---

# 11. Conclusion

L'organisation des articles constitue l'un des fondements de l'architecture du site F6CYK.

Elle garantit l'autonomie des contenus, la simplicité de leur maintenance et la cohérence du fonds documentaire.

En faisant de l'article l'unité documentaire de référence, cette organisation facilite aussi bien le travail de rédaction que la consultation des connaissances par le lecteur.

---

> *Le présent document définit les règles d'organisation des articles du site F6CYK. Il établit l'article comme unité documentaire fondamentale et précise les principes qui garantissent la cohérence, l'autonomie et la pérennité des contenus.*
