---
layout: default
title: Page de validation HTML / CSS
permalink: /test.html
---

# Page de validation HTML / CSS

Cette page sert de banc d'essai permanent pour tous les composants HTML, Markdown et CSS du site.

---

## Sommaire

- Typographie
- Listes
- Liste de définitions
- Citations
- Tableaux
- Caractéristiques techniques
- Téléchargements
- Images
- Remarque
- Avertissement
- Abréviations
- Contact
- Galerie
- Code
- Texte préformaté
- Mesures
- Fiche technique

---

# Typographie

## Titre de niveau 2

### Titre de niveau 3

#### Titre de niveau 4

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Texte **gras**, *italique* et [lien interne](index.html).

---

## Listes

### Liste à puces

- Premier élément
- Deuxième élément
- Troisième élément

### Liste numérotée

1. Préparer
2. Construire
3. Tester

### Liste imbriquée

- Antennes
  - Dipôle
  - Loop
  - Verticale
- Récepteurs
- Accessoires

---

## Liste de définitions

<dl>

<dt>QSO</dt>
<dd>Contact radio entre deux stations.</dd>

<dt>QTH</dt>
<dd>Position géographique d'une station.</dd>

<dt>ROS</dt>
<dd>Rapport d'ondes stationnaires.</dd>

<dt>Balun</dt>
<dd>Adaptateur symétrique / asymétrique.</dd>

</dl>

---

## Citation

<blockquote>

<p>La théorie guide l'expérimentation ; l'expérimentation valide la théorie.</p>

</blockquote>

---

## Tableaux

| Bande | Fréquence | Mode |
|-------|----------:|------|
| 80 m | 3,650 MHz | SSB |
| 40 m | 7,090 MHz | CW |
| 20 m |14,250 MHz | SSB |

---

## Caractéristiques techniques

| Paramètre | Valeur |
|-----------|--------|
| Alimentation | 13,8 V |
| Puissance | 100 W |
| Impédance | 50 Ω |

---

## Téléchargements

- [Notice d'utilisation]({{ "/documents/pdf/exemple.pdf" | relative_url }})
- [Schéma électrique]({{ "/documents/pdf/schema.pdf" | relative_url }})
- [Rapport de mesures]({{ "/documents/pdf/mesures.pdf" | relative_url }})

---

## Images

### Image Markdown

![Image de test]({{ "/assets/images/test/test.png" | relative_url }})

---

### Image avec légende

<figure>

<img src="{{ '/assets/images/test/test.png' | relative_url }}"
     alt="Image de démonstration">

<figcaption>

Figure 1 — Image avec légende.

</figcaption>

</figure>

---

### Image cliquable

<figure>

<a href="{{ '/assets/images/test/test.png' | relative_url }}">

<img src="{{ '/assets/images/test/test.png' | relative_url }}"
     alt="Image agrandissable">

</a>

<figcaption>

Figure 2 — Cliquer pour afficher l'image.

</figcaption>

</figure>

---

### Deux images

<div class="galerie">

<figure>

<img src="{{ '/assets/images/test/test.png' | relative_url }}"
     alt="Vue 1">

<figcaption>Vue 1</figcaption>

</figure>

<figure>

<img src="{{ '/assets/images/test/test.png' | relative_url }}"
     alt="Vue 2">

<figcaption>Vue 2</figcaption>

</figure>

</div>

---

### Trois images

<div class="galerie">

<figure>

<img src="{{ '/assets/images/test/test.png' | relative_url }}"
     alt="Avant">

<figcaption>Avant</figcaption>

</figure>

<figure>

<img src="{{ '/assets/images/test/test.png' | relative_url }}"
     alt="Arrière">

<figcaption>Arrière</figcaption>

</figure>

<figure>

<img src="{{ '/assets/images/test/test.png' | relative_url }}"
     alt="Intérieur">

<figcaption>Intérieur</figcaption>

</figure>

</div>

---

## Remarque

<div class="remarque">

Cette zone permet de tester le style des remarques.

</div>

---

## Avertissement

<div class="attention">

Cette zone permet de tester le style des avertissements.

</div>

---

## Abréviations

Le <abbr title="Rapport d'Ondes Stationnaires">ROS</abbr> doit être le plus faible possible.

---

## Contact

<address>

Pierre-Antoine DUMARQUEZ<br>
Indicatif : F6CYK<br>
Courriel : <a href="mailto:f6cyk@proton.me">f6cyk@proton.me</a>

</address>

---

## Galerie

<div class="galerie">

<img src="{{ '/assets/images/test/test.png' | relative_url }}" alt="">
<img src="{{ '/assets/images/test/test.png' | relative_url }}" alt="">
<img src="{{ '/assets/images/test/test.png' | relative_url }}" alt="">
<img src="{{ '/assets/images/test/test.png' | relative_url }}" alt="">

</div>

---

## Code

```cpp
for (int i = 0; i < 10; i++)
{
    Serial.println(i);
}
```

---

## Texte préformaté

<pre>

Ligne 1
    Ligne 2
        Ligne 3

</pre>

---

## Mesures

| Mesure | Valeur |
|--------:|-------:|
| Tension | 13,82 V |
| Courant | 1,24 A |
| ROS | 1,05 |

---

## Fiche technique

| Élément | Valeur |
|----------|--------|
| Équipement | Transceiver |
| Marque | Exemple |
| Modèle | XYZ-100 |
| Gamme | HF |
| Puissance | 100 W |
| Alimentation | 13,8 V |
| Connecteur | SO-239 |
| Observations | Exemple de fiche technique destinée à valider la mise en page. |
