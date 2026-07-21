---
layout: default
title: "Page de test"
permalink: pages/test.html
---

# Page de test

Cette page rassemble les principaux éléments utilisés dans le site.

Son objectif est de vérifier :

- le rendu Markdown ;
- les composants Jekyll ;
- la feuille de style ;
- l'affichage sur ordinateur, tablette et smartphone.

---

## Titres

# Titre niveau 1

## Titre niveau 2

### Titre niveau 3

#### Titre niveau 4

##### Titre niveau 5

###### Titre niveau 6

---

## Paragraphes

Ceci est un paragraphe simple.

Un second paragraphe permet de vérifier les espacements verticaux.

On peut utiliser du **texte en gras**, du *texte en italique*, du ***gras italique***, du `texte monospace`, ainsi que ~~du texte barré~~.

---

## Citations

> La radio est un loisir qui permet d'apprendre tout au long de sa vie.

Citation sur plusieurs lignes.

> Premier paragraphe.
>
> Second paragraphe.

---

## Ligne horizontale

---

Texte après séparation.

---

## Liens

Lien externe :

https://www.arrl.org

Lien Markdown :

[Radioamateur.org](https://www.radioamateur.org)

Lien interne :

[Retour à l'accueil]({{ "/" | relative_url }})

Lien vers une page :

[Station]({{ "/station/" | relative_url }})

Lien vers Contact :

[Contact]({{ "/contact/" | relative_url }})

---

## Listes simples

- Élément 1
- Élément 2
- Élément 3

Liste numérotée :

1. Premier
2. Deuxième
3. Troisième

Liste imbriquée :

- Matériel
  - Transceiver
  - Alimentation
  - Antenne

- Documentation
  - Notices
  - Schémas

---

## Cases à cocher

- [x] Élément validé
- [ ] Élément à faire
- [ ] Élément futur

---

## Tableaux

### Tableau simple

| Paramètre | Valeur |
|-----------|--------|
| Indicatif | F4ABC |
| Locator | JN18XX |
| Puissance | 100 W |
| Antenne | Dipôle 2 × 20 m |

### Tableau avec alignement

| Bande | Mode | Puissance |
|------:|:----:|----------:|
| 80 m | SSB | 100 W |
| 40 m | CW | 50 W |
| 20 m | FT8 | 30 W |
| 2 m | FM | 25 W |

---

## Listes de définitions

Terme
: Définition associée.

ROS
: Rapport d'ondes stationnaires.

Litz
: Fil constitué de nombreux brins isolés destiné à réduire les pertes par effet de peau.

---

## Abréviations

| Abréviation | Signification |
|-------------|---------------|
| CW | Continuous Wave |
| SSB | Single Side Band |
| FM | Frequency Modulation |
| SWR | Standing Wave Ratio |
| QRP | Faible puissance |

---

## Raccourcis clavier

Utiliser <kbd>Ctrl</kbd> + <kbd>C</kbd> pour copier.

Utiliser <kbd>Ctrl</kbd> + <kbd>V</kbd> pour coller.

---

## Code en ligne

Le filtre Jekyll `relative_url` permet de générer des liens internes robustes.

---

## Bloc de code

```liquid
<img
  src="{{ "/assets/images/test/logo.png" | relative_url }}"
  alt="Logo">
```

Bloc shell :

```bash
git add .
git commit -m "Mise à jour"
git push
```

Bloc texte :

```text
CQ CQ CQ de F4ABC
```

---

## Téléchargement de documents

Notice d'utilisation :

- [Notice PDF]({{ "/documents/pdf/notice_test.pdf" | relative_url }})

Schéma :

- [Schéma PDF]({{ "/documents/pdf/schema_test.pdf" | relative_url }})

Document Markdown :

- [Exemple]({{ "/documents/notices/exemple.md" | relative_url }})

---

## Liens vers des ancres

Retour au début :

[Haut de page](#page-de-test)

Accès à la section Images :

[Images](#images)

---

## Caractères spéciaux

© 2026

→ ← ↑ ↓

± × ÷

Ω µ °

¼ ½ ¾

✓ ✗

---

## Texte préformaté

    Ligne 1
    Ligne 2
    Ligne 3

---

## Notes

> **Remarque**
>
> Les téléchargements utilisent systématiquement le filtre
> `relative_url`.

---

## Images

Les illustrations ci-dessous utilisent exclusivement le filtre `relative_url`.

### Image simple

![Transceiver]({{ "/assets/images/test/transceiver.png" | relative_url }})

---

### Image avec texte alternatif

![Vue générale de la station radio]({{ "/assets/images/test/panorama.png" | relative_url }})

---

### Image cliquable

[![Logo]({{ "/assets/images/test/logo.png" | relative_url }})]({{ "/assets/images/test/logo.png" | relative_url }})

Cliquer sur l'image pour l'afficher en taille réelle.

---

### Plusieurs images

| Logo | Antenne |
|------|----------|
| ![Logo]({{ "/assets/images/test/logo.png" | relative_url }}) | ![Antenne]({{ "/assets/images/test/antenne.png" | relative_url }}) |

---

### Cartes QSL

| Recto | Verso |
|-------|-------|
| ![QSL]({{ "/assets/images/test/qsl.png" | relative_url }}) | ![QSL]({{ "/assets/images/test/qsl.png" | relative_url }}) |

---

### Schéma

![Schéma]({{ "/assets/images/test/schema.png" | relative_url }})

---

### Images pointant vers une autre ressource

[![Schéma]({{ "/assets/images/test/schema.png" | relative_url }})]({{ "/documents/pdf/schema_test.pdf" | relative_url }})

---

### Logo dans un lien interne

[![Logo]({{ "/assets/images/test/logo.png" | relative_url }})]({{ "/" | relative_url }})

---

### Image dans une liste

- ![Logo]({{ "/assets/images/test/logo.png" | relative_url }}) Logo du site

- ![Transceiver]({{ "/assets/images/test/transceiver.png" | relative_url }}) Transceiver

- ![Antenne]({{ "/assets/images/test/antenne.png" | relative_url }}) Antenne

---

### Figure avec légende (HTML minimal)

<figure>

<img
src="{{ "/assets/images/test/panorama.png" | relative_url }}"
alt="Panorama">

<figcaption>

Panorama de la station.

</figcaption>

</figure>

---

### Figure cliquable

<figure>

<a href="{{ "/assets/images/test/panorama.png" | relative_url }}">

<img
src="{{ "/assets/images/test/panorama.png" | relative_url }}"
alt="Panorama">

</a>

<figcaption>

Cliquer sur l'image pour l'agrandir.

</figcaption>

</figure>

---

### Image flottante

> Cette section est volontairement laissée vide.

Les images flottantes seront testées au moyen des classes CSS du site plutôt qu'avec des attributs HTML de présentation.

---

### Images responsives

Les images doivent :

- conserver leurs proportions ;
- ne jamais dépasser la largeur disponible ;
- rester nettes sur mobile.

Cette section sert uniquement à vérifier le comportement de la feuille de style.

---

### Vérifications

- transparence du logo PNG ;
- rendu du schéma ;
- ouverture des images cliquables ;
- affichage sur ordinateur ;
- affichage sur tablette ;
- affichage sur smartphone.

---

## Blocs repliables

<details>

<summary>Afficher le contenu</summary>

Ce texte est masqué par défaut.

Il peut contenir :

- des listes ;
- des liens ;
- des images ;
- du code.

</details>

---

## Bloc repliable contenant une image

<details>

<summary>Afficher le schéma</summary>

![Schéma]({{ "/assets/images/test/schema.png" | relative_url }})

</details>

---

## Bloc repliable contenant un téléchargement

<details>

<summary>Documentation</summary>

- [Notice PDF]({{ "/documents/pdf/notice_test.pdf" | relative_url }})
- [Schéma PDF]({{ "/documents/pdf/schema_test.pdf" | relative_url }})

</details>

---

## Avertissement

> **Attention**
>
> Vérifier le ROS avant toute émission.

---

## Information

> **Information**
>
> Cette page sert uniquement de validation des composants du site.

---

## Astuce

> **Astuce**
>
> Utiliser systématiquement le filtre `relative_url` pour les ressources internes.

---

## Citation technique

> « Le meilleur amplificateur est souvent une meilleure antenne. »

---

## Adresse

Association Radio Club

123 avenue des Ondes

75000 Paris

France

---

## Horaires

| Jour | Ouverture |
|------|------------|
| Lundi | Fermé |
| Mardi | 20 h – 23 h |
| Jeudi | 20 h – 23 h |
| Samedi | 14 h – 18 h |

---

## Exemple de fiche technique

| Caractéristique | Valeur |
|-----------------|--------|
| Constructeur | Exemple |
| Modèle | X100 |
| Gammes | HF |
| Modes | CW, SSB, AM, FM |
| Alimentation | 13,8 V |
| Puissance | 100 W |

---

## Coordonnées

| Élément | Valeur |
|---------|--------|
| Indicatif | F4ABC |
| Locator | JN18XX |
| QTH | France |

---

## Bloc HTML personnalisé

<div class="note">

Ce bloc permet de vérifier les styles CSS spécifiques du site.

</div>

---

## Image dans un bloc personnalisé

<div class="note">

![Logo]({{ "/assets/images/test/logo.png" | relative_url }})

</div>

---

## Ancres

### Première section

Texte.

### Deuxième section

Texte.

Retour :

[↑ Haut de page](#page-de-test)

---

## Ressources

- [Accueil]({{ "/" | relative_url }})
- [Station]({{ "/station/" | relative_url }})
- [Contact]({{ "/contact/" | relative_url }})

---

## Vérifications finales

Cette page permet de contrôler :

- les titres ;
- les paragraphes ;
- les listes ;
- les tableaux ;
- les citations ;
- les blocs de code ;
- les téléchargements ;
- les images ;
- les figures ;
- les composants HTML minimaux ;
- les blocs repliables ;
- les liens internes ;
- les liens externes ;
- le comportement responsive.

---

*Fin de la page de test.*
