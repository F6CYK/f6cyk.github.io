---
layout: default
title: THALES TRC 3600
permalink: /materiel/professionnel/militaire/thales-trc3600
asset_path: /materiel/professionnel/militaire/thales-trc3600
---

# THALES TRC 3600

## Présentation

{% capture introduction %}

Le **THALES TRC 3600** est une station radio tactique HF numérique développée par **Thales Communications** dans le cadre de la famille **SYSTEM 3000**, également connue sous le nom **HF 3000 Skyf@st**. Destinée aux forces terrestres, cette famille d'équipements a été conçue pour assurer des communications à longue distance dans des environnements opérationnels particulièrement contraints, où les moyens satellitaires ou les infrastructures de télécommunications ne sont pas disponibles.

{% endcapture %}

{% assign image = page.asset_path | append: "/trc3600.jpg" %}

{% include media.html
   layout="texte-image"
   content!introduction
   src=image
   alt="Station radio tactique THALES TRC 3600"
   caption="THALES TRC 3600 – station radio HF tactique numérique de la famille SYSTEM 3000."
%}

Le TRC 3600 constitue la version portable de 20 W d'une gamme complète de stations HF comprenant également les modèles **TRC 3610** (20 W véhiculaire), **TRC 3630** (125 W) et **TRC 3640** (400 W). Cette architecture modulaire sera ensuite prolongée par la série **TRC 3700**, qui reprend les mêmes principes de fonctionnement et de nombreux éléments matériels et logiciels.

Contrairement à un émetteur-récepteur HF classique limité aux communications en téléphonie BLU, le TRC 3600 est conçu comme une véritable plateforme de communications numériques. Il intègre des fonctions de téléphonie numérique sécurisée, de transmission de données, de chiffrement, d'établissement automatique des liaisons (ALE), de saut de fréquence, ainsi que des mécanismes d'adaptation automatique aux conditions de propagation ionosphérique.

Deux modes de fonctionnement caractérisent particulièrement cette famille de stations. Le mode **SKYMASTER** automatise l'établissement des liaisons HF en sélectionnant la fréquence, la puissance d'émission et le débit les mieux adaptés aux conditions de propagation. Le mode **SKYHOPPER® 2** met en œuvre un saut de fréquence intelligent permettant d'améliorer la robustesse des communications face aux brouillages et aux perturbations radioélectriques.

Le système ne se limite pas aux communications radio proprement dites. Associé à différents terminaux et logiciels spécialisés, il devient le cœur d'un réseau tactique capable d'assurer l'échange de courrier électronique, le transfert de fichiers, la transmission de télécopies, le routage automatique entre réseaux HF, VHF, GSM ou LAN, ainsi que la gestion centralisée des fréquences et des clés cryptographiques.

Le TRC 3600 couvre la bande **1,5 à 30 MHz** avec un pas de syntonisation de **100 Hz** et dispose de **100 mémoires** en fréquences fixes ainsi que de **30 mémoires** dédiées aux modes ALE ou au saut de fréquence. La puissance d'émission est sélectionnable entre **1 W**, **5 W** et **20 W**. Malgré ses capacités, la station conserve un encombrement réduit avec une masse inférieure à **4 kg** et répond aux exigences militaires de robustesse, notamment une immersion jusqu'à un mètre pendant deux heures.

L'équipement intègre plusieurs modems numériques adaptés aux différents besoins opérationnels, depuis les transmissions très robustes à faible débit jusqu'aux transmissions rapides atteignant **5 400 bit/s** en mode FEC. Les mécanismes de correction d'erreurs (Reed-Solomon, codes convolutifs, entrelacement et ARQ) permettent de maintenir des liaisons fiables même lorsque les conditions de propagation HF sont fortement dégradées.

Compatible avec plusieurs normes de l'OTAN, notamment **STANAG 4203**, **STANAG 4285**, **STANAG 4481** et, selon les versions, **MIL-STD-188-141A**, le TRC 3600 illustre l'évolution des réseaux HF militaires vers des systèmes numériques interopérables capables d'assurer simultanément les communications vocales, les échanges de données et l'intégration dans des architectures de commandement modernes.

Cette rubrique a pour objectif de présenter le système TRC 3600 sous un angle essentiellement technique et documentaire. Les différentes pages décriront progressivement son architecture, ses modes de fonctionnement, ses accessoires, ses terminaux associés, sa documentation technique, ainsi que les essais et expérimentations réalisés autour de cette famille de stations.

{% include flipbook.html
   file="Thales_TRC3600_HF_Combat_Radio_Datasheet.pdf"
   title="Documentation constructeur"
   scale=1.5
%}

