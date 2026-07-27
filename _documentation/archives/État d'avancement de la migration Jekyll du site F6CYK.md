# État d'avancement de la migration Jekyll du site F6CYK

**Date : 21 juillet 2026**

## Situation générale

La migration du site HTML vers Jekyll est engagée, mais la priorité est désormais la **stabilisation** plutôt que l'évolution.

Un incident est survenu lors de l'introduction prématurée d'un layout `home.html`, qui a conduit à une page d'accueil blanche. Après retour à une version éprouvée, le site est redevenu parfaitement fonctionnel.

Une règle de travail a été arrêtée :

> **Une seule modification à la fois, validation complète, puis seulement passage à l'étape suivante.**

Aucune évolution architecturale ne devra être introduite sans nécessité démontrée.

---

# Éléments validés

## Layout principal

`_layouts/default.html`

Validé.

Corrections apportées :

* utilisation de `relative_url` pour la feuille de style ;
* simplification du `<title>`.

Ce layout constitue désormais la base de référence du site.

---

## Includes

### `header.html`

Validé.

Responsabilité claire :

* identité du site ;
* slogan ;
* aucun élément de navigation.

Aucune logique Liquid.

---

### `nav.html`

Validé sur le plan architectural.

Évolutions reportées :

* remplacement des liens HTML classiques par `relative_url` ;
* automatisation de la page active ;
* harmonisation avec les permaliens.

Aucune modification pour le moment.

---

### `footer.html`

Validé.

Une seule évolution prévue :

* conversion des liens internes vers `relative_url`.

---

# Pages validées

Validées sans remise en cause de leur structure :

* `index.md`
* `ma_station.md`
* `trafic.md`

Les autres pages avaient déjà été vérifiées précédemment et il est inutile de reprendre cette validation.

---

# Philosophie retenue

Le projet adopte désormais les principes suivants.

## 1. Simplicité

Ne pas créer de layout ou d'include tant qu'il n'apporte aucun bénéfice réel.

Exemple :

* `home.html` n'est pas utilisé tant qu'il ne justifie pas son existence.

---

## 2. Réutilisation raisonnée

Un composant n'est créé que s'il est réellement réutilisé.

Éviter la multiplication des includes uniquement pour "faire du Jekyll".

---

## 3. Progression fonctionnelle

Chaque étape doit produire une amélioration visible et testable.

Interdiction de modifier simultanément plusieurs parties du site.

---

# Décisions importantes

Les fichiers existants sont conservés.

Même inutilisés, ils ne seront supprimés qu'une fois la migration totalement achevée.

Cela concerne notamment :

* `home.html`
* `page.html`
* `figure.html`

---

# État actuel

Le site fonctionne normalement.

L'architecture est stable.

Les layouts et includes principaux sont validés.

La migration peut désormais se concentrer sur les améliorations fonctionnelles.

---

# Prochaine étape

Transformer progressivement toute la navigation interne pour qu'elle exploite pleinement Jekyll.

Ordre proposé :

1. convertir les liens internes vers `relative_url` ;
2. vérifier toutes les pages ;
3. rendre automatiquement active la page courante dans `nav.html` ;
4. seulement ensuite, envisager d'éventuelles factorisations supplémentaires.

Cette feuille de route devra être suivie sans revenir sur les éléments déjà validés, sauf apparition d'un dysfonctionnement réel.