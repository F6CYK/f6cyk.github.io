---
layout: default
title: XR2206 – Générateur de fonctions
permalink: /documentation/composants/circuits-integres/xr2206/

asset_path: /documents/composants/circuits-integres/xr2206
---

# XR2206

## Présentation

Le **XR2206** est un circuit intégré générateur de fonctions capable de produire des signaux sinusoïdaux, triangulaires, carrés ainsi que divers signaux modulés.

Cette fiche documentaire regroupe les principaux documents techniques et quelques exemples de réalisations utilisant ce composant.

---

## Notes d'application

Cliquez sur une image pour l'afficher en taille réelle.

<table>

<tr>

<td align="center">

{% include image.html
   file="function-generator-using-xr2206-1.jpg"
   width="250"
   alt="Application Note AN-14 - Page 1"
%}

<br>
Application Note AN-14 – Page 1

</td>

<td align="center">

{% include image.html
   file="function-generator-using-xr2206-2.jpg"
   width="250"
   alt="Application Note AN-14 - Page 2"
%}

<br>
Application Note AN-14 – Page 2

</td>

</tr>

<tr>

<td align="center">

{% include image.html
   file="function-generator-using-xr2206-3.jpg"
   width="250"
   alt="Application Note AN-14 - Page 3"
%}

<br>
Application Note AN-14 – Page 3

</td>

<td align="center">

{% include image.html
   file="function-generator-using-xr2206-4.jpg"
   width="250"
   alt="Application Note AN-14 - Page 4"
%}

<br>
Application Note AN-14 – Page 4

</td>

</tr>

</table>

---

## Documentation technique

<div id="pdf-pages"></div>

<script type="module">
document.addEventListener("DOMContentLoaded", async () => {

    const url = "{{ page.asset_path }}/XR2206.pdf";

    const loadingTask = window.pdfjsLib.getDocument({ url });
    const pdf = await loadingTask.promise;

    const container = document.getElementById("pdf-pages");

    for (let n = 1; n <= pdf.numPages; n++) {

        const page = await pdf.getPage(n);

        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        canvas.style.display = "block";
        canvas.style.margin = "20px auto";
        canvas.style.boxShadow = "0 0 8px rgba(0,0,0,.25)";

        container.appendChild(canvas);

        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise;
    }

});
</script>

---

## Schémas d'application

### Générateur de fonctions

{% include image.html
   file="function-generator-using-xr2206.jpg"
   width="600"
   alt="Générateur de fonctions utilisant le XR2206"
%}

*Schéma de principe d'un générateur de fonctions utilisant le XR2206.*

---

### Émetteur AM

{% include image.html
   file="emetteur_am_xr2206.png"
   width="700"
   alt="Émetteur AM utilisant le XR2206"
%}

*Exemple d'émetteur AM utilisant le XR2206.*

---

## Documents disponibles

- Notes d'application
- Schémas d'application
- Exemples de réalisations

---

## Sources

- Documentation technique Exar.
- Application Note AN-14.
- Divers montages expérimentaux.
- 
