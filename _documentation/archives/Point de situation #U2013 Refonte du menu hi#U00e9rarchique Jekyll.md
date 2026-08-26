# Point de situation – Refonte du menu hiérarchique Jekyll

## Contexte

Le site Jekyll utilise un menu hiérarchique récursif (`recursive-menu.html`) dont les sous-menus sont générés à partir des fichiers YAML.

L'objectif était d'obtenir un comportement proche de l'Explorateur Windows :

- ouverture instantanée des sous-menus ;
- panneaux accolés sans espace horizontal ;
- absence de fermeture intempestive lors du déplacement de la souris ;
- architecture indépendante de la profondeur du menu.

------

# État initial

L'architecture reposait sur :

- `nav.html`
- `recursive-menu.html`
- `geometry.js`
- `navigation.js`
- `hierarchy-navigation.css`

Le principe consistait à :

1. calculer la position d'un `<li>`;
2. calculer les coordonnées absolues du sous-menu ;
3. déplacer le panneau au moyen de

```javascript
style.top
style.left
```

Cette solution fonctionne pour des menus simples mais devient fragile lorsque plusieurs niveaux sont ouverts simultanément.

Les principaux défauts observés étaient :

- espace horizontal entre panneaux ;
- fermeture dès que la souris quitte un panneau ;
- nombreux recalculs géométriques ;
- dépendance forte entre JavaScript et CSS.

------

# Nouvelle architecture retenue

Le principe adopté est différent.

Les sous-menus ne sont plus positionnés individuellement.

Ils sont affichés dans une couche unique ("overlay") composée d'une colonne fixe par niveau hiérarchique.

Schéma :

```
<nav>

menu principal

+--------------------------------------+

overlay

colonne 0
colonne 1
colonne 2
colonne 3
...

</nav>
```

Ainsi :

- la colonne 0 contient toujours les sous-menus de niveau 0 ;
- la colonne 1 contient ceux du niveau 1 ;
- etc.

La position horizontale est donc entièrement déterminée par le CSS.

Le JavaScript ne calcule plus que :

- le niveau hiérarchique ;
- la position verticale.

------

# Travaux réalisés

## geometry.js

Réécriture complète.

Le module :

- calcule la profondeur (`niveau`) ;
- calcule uniquement la coordonnée verticale (`top`) ;
- ne calcule plus `left`.

------

## hierarchy-navigation.css

Ajout de :

```
#nav-overlay
```

et

```
.nav-colonne
```

Chaque colonne possède une largeur fixe :

```
--nav-largeur-panneau
```

Le positionnement horizontal est assuré exclusivement par le CSS.

------

## navigation.js

Début de migration.

Ont été ajoutés :

- création de `#nav-overlay` ;
- création dynamique des colonnes ;
- fonction

```
obtenirColonne()
```

- fonction

```
viderColonnes()
```

En revanche, le fichier reste basé sur l'ancien modèle :

```javascript
sousMenu.style.left
```

et

```javascript
li.querySelector(".sous-menu")
```

La migration est donc inachevée.

------

# Problème identifié

Le nouveau modèle retire physiquement les `<ul class="sous-menu">` de leur `<li>` pour les insérer dans une colonne.

Par conséquent :

```javascript
li.querySelector(".sous-menu")
```

ne fonctionne plus.

De même :

```javascript
li.contains(...)
```

devient faux.

Toute la logique de fermeture doit donc être réécrite.

------

# Conclusion technique

Le projet est arrivé à un point où une évolution incrémentale n'est plus pertinente.

La suite devra être une **refonte complète de `navigation.js`**, conçue directement pour l'architecture par colonnes.

Cette réécriture devra notamment :

- gérer le déplacement des sous-menus dans l'overlay ;
- maintenir une colonne par niveau ;
- fermer automatiquement les colonnes situées à droite de la branche active ;
- gérer correctement les événements `mouseenter`, `mouseleave`, `focusin` et `focusout` ;
- prendre en charge la navigation clavier ;
- repositionner les colonnes lors d'un redimensionnement de la fenêtre.

------

# Fichiers concernés

- `nav.html` : structure générale du menu (adaptation éventuelle pour l'overlay).
- `recursive-menu.html` : inchangé ; la récursivité est conservée.
- `hierarchy-navigation.css` : architecture des colonnes.
- `geometry.js` : simplifié (niveau + position verticale).
- `navigation.js` : à réécrire intégralement selon le nouveau modèle.
- `config.js` : à vérifier pour la récupération du repère global (`<nav>`).

------

# Recommandation pour une reprise ultérieure

Ne pas tenter de poursuivre la migration par petites corrections.

Conserver `recursive-menu.html` et les données YAML, mais repartir d'un **nouveau `navigation.js`**, conçu spécifiquement pour l'architecture « overlay + colonnes ». Cette approche réduira la complexité, supprimera les calculs de position horizontale et rendra le comportement du menu plus robuste et plus facile à maintenir.