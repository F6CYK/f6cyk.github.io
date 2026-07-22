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

<div id="pdf-book"></div>

<script type="module">
document.addEventListener("DOMContentLoaded", async () => {

    const url = "{{ page.asset_path }}/XR2206.pdf";

    const loadingTask = window.pdfjsLib.getDocument({ url });
    const pdf = await loadingTask.promise;

    const container = document.getElementById("pdf-book");

    let pageWidth = 0;
    let pageHeight = 0;

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {

        const page = await pdf.getPage(pageNumber);

        const viewport = page.getViewport({ scale: 1.5 });

        if (pageNumber === 1) {
            pageWidth = viewport.width + 20;
            pageHeight = viewport.height + 20;
        }

        const pageDiv = document.createElement("div");
        pageDiv.className = "page";

        pageDiv.style.background = "white";
        pageDiv.style.padding = "10px";
        pageDiv.style.margin = "20px auto";
        pageDiv.style.boxShadow = "0 0 8px rgba(0,0,0,.25)";
        pageDiv.style.width = viewport.width + "px";

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        pageDiv.appendChild(canvas);
        container.appendChild(pageDiv);

        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise;
    }

   const pageFlip = new St.PageFlip(container, {
    width: pageWidth,
    height: pageHeight,
    showCover: true,
    size: "stretch",
    maxShadowOpacity: 0.5
});

pageFlip.loadFromHTML(
    container.querySelectorAll(".page")
);
   

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
