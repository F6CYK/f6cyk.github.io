---
layout: default
title: "Antennes End-Fed : EFHW ou Random Wire ?"
permalink: /antennes/efhw-vs-random-wire/
asset_path: /antennes/efhw-vs-random-wire
---

# Antennes End-Fed : EFHW ou Random Wire ?

## Les antennes alimentées en extrémité

Depuis plusieurs années, les antennes **End-Fed** connaissent un succès croissant auprès des radioamateurs. Leur simplicité apparente, leur faible encombrement et leur facilité d'installation en font une solution particulièrement adaptée lorsque l'espace disponible ne permet pas de déployer un dipôle alimenté en son centre.

Le principe semble d'une grande simplicité : un fil rayonnant est alimenté à l'une de ses extrémités par l'intermédiaire d'un transformateur d'impédance raccordé au câble coaxial. Cette architecture permet de n'avoir qu'un seul point de fixation côté station, le second étant simplement tendu vers un arbre, un mât ou tout autre support.

Cette simplicité explique le succès rencontré par ces antennes aussi bien auprès des débutants que des opérateurs expérimentés. Elles sont aujourd'hui proposées par de nombreux fabricants et font l'objet d'innombrables réalisations artisanales.

Pourtant, derrière cette apparente simplicité se cache une réalité plus nuancée. Le terme **End-Fed** ne désigne pas un type d'antenne particulier mais uniquement un mode d'alimentation. Plusieurs antennes très différentes peuvent en effet être alimentées à leur extrémité tout en reposant sur des principes électriques distincts.

Cette confusion est entretenue par de nombreuses publications qui utilisent indifféremment les termes **End-Fed**, **EFHW**, **Random Wire** ou **Long Wire**, laissant croire qu'il s'agit simplement de variantes d'une même antenne.

En réalité, ces antennes ne présentent ni la même impédance, ni le même mode de fonctionnement, ni les mêmes performances. Elles utilisent des transformateurs différents et répondent à des objectifs distincts.

Avant de choisir l'une ou l'autre solution, il est donc indispensable de comprendre ce qui les différencie réellement.

---

## Une confusion largement répandue

L'erreur la plus fréquente consiste à considérer qu'une antenne End-Fed est forcément une **EFHW** (*End-Fed Half Wave*).

Cette idée est renforcée par le commerce, où de nombreuses antennes sont simplement présentées comme des « End-Fed » sans autre précision. L'utilisateur peut alors penser qu'il suffit d'alimenter n'importe quel fil par une extrémité pour obtenir une EFHW.

À l'inverse, certains montages utilisent un transformateur 9:1 et sont qualifiés d'EFHW alors qu'ils correspondent en réalité à des **Random Wire**.

Ces approximations entretiennent une confusion durable.

La différence essentielle ne réside pourtant ni dans le boîtier d'adaptation ni dans la présence d'un transformateur particulier. Elle provient avant tout de la **longueur électrique du fil rayonnant**.

Une antenne peut être :

- accordée sur une demi-onde ;
- volontairement non résonante ;
- accordée sur une autre fraction d'onde.

Dans tous les cas, elle reste alimentée à une extrémité. Le terme *End-Fed* décrit donc uniquement la manière dont l'énergie est injectée dans l'antenne, et non son comportement électrique.

---

## Deux familles d'antennes End-Fed

En pratique, les radioamateurs utilisent principalement deux grandes familles d'antennes alimentées en extrémité.

La première est l'**EFHW (End-Fed Half Wave)**.

Il s'agit d'une antenne **résonante**, dont la longueur correspond approximativement à une demi-longueur d'onde sur la bande principale d'utilisation. Son impédance élevée au point d'alimentation impose l'emploi d'un transformateur présentant un rapport voisin de 49:1.

La seconde est la **Random Wire**, parfois appelée improprement *long-fil*.

Cette antenne est volontairement **non résonante**. Sa longueur est choisie de façon à éviter les résonances les plus marquées sur les différentes bandes HF. Son impédance variant fortement avec la fréquence, elle est généralement associée à un transformateur 9:1 et à un coupleur d'antenne.

Ces deux solutions répondent donc à des philosophies différentes.

L'EFHW recherche avant tout le meilleur rendement sur un ensemble limité de bandes, tandis que la Random Wire privilégie la polyvalence en acceptant l'utilisation systématique d'un dispositif d'accord.

---

## L'antenne EFHW

L'acronyme **EFHW** signifie **End-Fed Half Wave**, que l'on peut traduire par *antenne demi-onde alimentée à son extrémité*.

Il s'agit d'une véritable antenne résonante.

Son fonctionnement est identique à celui d'un dipôle demi-onde classique. La différence réside uniquement dans le point d'alimentation. Alors que le dipôle est alimenté en son centre, l'EFHW reçoit l'énergie RF à l'une de ses extrémités.

Cette particularité modifie profondément les caractéristiques électriques du point d'alimentation.

Dans un dipôle classique, le courant est maximal au centre tandis que la tension y est relativement faible. L'impédance est voisine de 50 à 75 Ω, ce qui permet une alimentation directe par câble coaxial.

Dans une EFHW, la situation est exactement inverse.

À l'extrémité de la demi-onde, le courant devient très faible tandis que la tension RF atteint une valeur élevée. L'impédance s'élève alors à plusieurs milliers d'ohms.

Cette différence explique la nécessité d'utiliser un transformateur d'impédance adapté.

L'EFHW n'est donc pas une antenne « magique » fonctionnant grâce à son transformateur. Celui-ci ne fait que permettre l'alimentation correcte d'une antenne dont les propriétés électriques sont celles d'une demi-onde résonante.

Sa longueur dépend naturellement de la bande considérée.

À titre indicatif :

| Bande | Longueur approximative |
|--------|-----------------------:|
| 80 m | 40 m |
| 40 m | 20 m |
| 20 m | 10 m |
| 10 m | 5 m |

Ces valeurs constituent un point de départ. La longueur définitive dépend toujours de la hauteur d'installation, du diamètre du conducteur, de son environnement immédiat et du facteur de vélocité du fil utilisé.

## Pourquoi un transformateur 49:1 ?

L'une des particularités de l'EFHW réside dans son impédance extrêmement élevée au point d'alimentation.

Sur une antenne demi-onde, la répartition du courant et de la tension varie tout au long du conducteur. Au centre, le courant est maximal tandis que la tension est minimale. Aux extrémités, la situation est inversée : la tension devient maximale et le courant pratiquement nul.

Cette répartition conduit à une impédance comprise, selon les conditions d'installation, entre **2 000 et 4 000 Ω**.

Or les équipements radioamateurs modernes sont conçus pour fonctionner sous une impédance normalisée de **50 Ω**. Une liaison directe provoquerait un très mauvais transfert de puissance et un rapport d'ondes stationnaires (ROS) très élevé.

Le rôle du transformateur consiste donc à adapter ces deux impédances.

Dans le cas d'une EFHW, le rapport le plus utilisé est le **49:1**.

Ce rapport ne doit pas être interprété comme une simple réduction de la tension. Il s'agit d'un **rapport de transformation d'impédance**. Comme l'impédance est proportionnelle au carré du rapport de transformation des spires, un transformateur présentant un rapport de spires de 7:1 réalise une transformation d'impédance de 49:1.

Ainsi :

- environ 2 450 Ω côté antenne ;
- environ 50 Ω côté coaxial.

Dans certaines réalisations, on rencontre également des transformateurs **64:1**, correspondant à un rapport de spires de 8:1. Leur utilisation dépend principalement de l'impédance réelle de l'antenne, qui varie selon sa hauteur, son environnement et sa longueur exacte.

Le transformateur ne crée donc pas les caractéristiques électriques de l'antenne. Il se contente d'assurer une adaptation correcte entre une antenne résonante à forte impédance et la ligne coaxiale.

---

## Les bandes harmoniques

L'un des principaux avantages de l'EFHW est sa capacité à fonctionner naturellement sur plusieurs bandes radioamateurs.

Une antenne demi-onde résonne non seulement sur sa fréquence fondamentale, mais également sur ses harmoniques.

Ainsi, une EFHW calculée pour le **40 mètres** fonctionne également sur :

- le 20 mètres ;
- le 15 mètres ;
- le 10 mètres.

Certaines versions permettent également d'exploiter le 17 mètres ou le 12 mètres après un léger accord au moyen du coupleur interne du transceiver.

Cette propriété explique le succès rencontré par les EFHW commerciales. Un seul fil permet de couvrir plusieurs bandes HF avec un excellent rendement, tout en limitant les contraintes mécaniques de l'installation.

En revanche, les bandes obtenues sont imposées par les relations harmoniques. Une EFHW destinée au 40 mètres ne permettra pas d'obtenir automatiquement toutes les bandes HF.

Le choix de la longueur initiale reste donc un compromis entre les bandes recherchées et l'espace disponible.

---

## La Random Wire

La **Random Wire**, parfois appelée **long-fil**, répond à une logique totalement différente.

Contrairement à l'EFHW, il ne s'agit pas d'une antenne résonante.

Sa longueur est volontairement choisie afin d'éviter les résonances franches susceptibles de produire des impédances extrêmes sur certaines bandes.

Le terme anglais *Random* signifie d'ailleurs « aléatoire ». Il ne faut cependant pas comprendre que n'importe quelle longueur convient.

Depuis de nombreuses années, les radioamateurs ont établi des longueurs offrant un comportement satisfaisant sur plusieurs bandes HF.

Parmi les plus courantes figurent notamment :

- 12 m ;
- 17 m ;
- 23 m ;
- 29 m ;
- 35,5 m.

Ces dimensions ne sont pas dues au hasard. Elles permettent simplement d'éviter que le fil ne présente, sur les bandes radioamateurs, des impédances trop faibles ou au contraire extrêmement élevées qui rendraient l'accord difficile.

Contrairement à l'EFHW, la Random Wire ne possède donc pas une impédance relativement stable.

Elle dépend simultanément :

- de la fréquence utilisée ;
- de la longueur exacte du fil ;
- de sa hauteur au-dessus du sol ;
- de la nature du terrain ;
- des objets conducteurs voisins ;
- du système de contrepoids.

Selon les cas, cette impédance peut varier de quelques dizaines d'ohms à plusieurs milliers d'ohms.

Il est donc impossible de concevoir un transformateur assurant une adaptation parfaite sur toutes les bandes.

---

## Pourquoi un transformateur 9:1 ?

La plupart des Random Wire utilisent un **UnUn 9:1**.

Son rôle est souvent mal compris.

Contrairement au transformateur 49:1 d'une EFHW, le 9:1 n'a pas pour objectif d'obtenir une adaptation précise.

Il agit comme un transformateur de compromis.

En ramenant une partie des impédances élevées vers des valeurs plus compatibles avec une ligne coaxiale de 50 Ω, il facilite le travail de la boîte d'accord située dans la station.

Il est donc important de comprendre qu'un transformateur 9:1 ne remplace jamais un coupleur d'antenne.

Une Random Wire correctement installée est presque toujours utilisée avec un dispositif d'accord, intégré au transceiver ou externe.

Le transformateur permet simplement de maintenir l'impédance dans une plage plus facilement exploitable par ce coupleur.

Cette différence constitue probablement la principale distinction entre les deux familles d'antennes.

Une EFHW est conçue pour fonctionner au plus près de la résonance, souvent sans accord supplémentaire.

Une Random Wire, au contraire, est conçue dès l'origine pour fonctionner avec un coupleur chargé de compenser les variations d'impédance selon la bande utilisée.

Une fois correctement ajustée, l'antenne présente une bonne adaptation sur sa bande fondamentale ainsi que sur plusieurs bandes harmoniques, ce qui explique sa popularité auprès des radioamateurs recherchant une antenne multibande simple à mettre en œuvre.

## Balun, UnUn et choke : des fonctions différentes

Les termes **balun**, **UnUn** et **choke** sont souvent employés de manière interchangeable dans les discussions entre radioamateurs. Pourtant, ces dispositifs remplissent des fonctions différentes et ne sont pas toujours interchangeables.

Le mot **Balun** est la contraction de *Balanced to Unbalanced* (*symétrique vers asymétrique*).

Il est destiné à raccorder une antenne symétrique, comme un dipôle ou une boucle fermée (*loop*), à une ligne coaxiale qui, elle, est asymétrique.

Selon sa conception, un balun peut également limiter les courants de mode commun qui circulent sur la surface extérieure du blindage du câble coaxial.

Le **UnUn** (*Unbalanced to Unbalanced*) relie au contraire deux circuits asymétriques.

C'est cette configuration que l'on retrouve dans les antennes End-Fed. Le câble coaxial est asymétrique et le point d'alimentation de l'antenne l'est également. Il n'y a donc aucune raison d'utiliser un balun au sens strict du terme.

Les transformateurs **49:1** destinés aux EFHW et **9:1** utilisés avec les Random Wire sont donc des **UnUn**.

Enfin, le **choke**, également appelé *balun de courant* ou *common mode choke*, possède une fonction totalement différente.

Il ne transforme pas l'impédance.

Son rôle consiste uniquement à empêcher les courants de mode commun de circuler sur le blindage extérieur du câble coaxial.

Cette distinction est importante.

Le transformateur adapte l'impédance entre l'antenne et le câble.

Le choke empêche le câble de participer au rayonnement de l'antenne.

Ces deux dispositifs sont complémentaires et non concurrents.

---

## Les courants de mode commun

Toute antenne doit former un circuit fermé.

Le courant fourni par l'émetteur quitte celui-ci par le conducteur central du câble coaxial, parcourt l'antenne, puis revient vers l'émetteur par un chemin de retour.

Dans un dipôle alimenté au centre, ce courant se répartit naturellement entre les deux brins rayonnants.

Dans une antenne End-Fed, la situation est différente.

Le courant de retour doit trouver un autre chemin.

Lorsqu'aucun contrepoids n'est prévu ou lorsque celui-ci est insuffisant, une partie du courant emprunte naturellement la surface extérieure du blindage du câble coaxial.

Le câble devient alors un élément rayonnant de l'antenne.

Ce phénomène est connu sous le nom de **courant de mode commun**.

Ses conséquences peuvent être nombreuses.

Le diagramme de rayonnement prévu lors de la conception de l'antenne est modifié.

Le ROS peut varier lorsque le câble coaxial est déplacé.

Des courants HF peuvent apparaître sur les équipements de la station, provoquant des perturbations dans les interfaces informatiques, les microphones, les alimentations ou les appareils électroniques voisins.

Dans certains cas, l'opérateur peut même ressentir une tension RF sur les parties métalliques du manipulateur, du microphone ou du châssis du transceiver.

Ces phénomènes ne traduisent pas un défaut du transformateur mais la présence d'un chemin de retour mal maîtrisé.

---

## Le rôle du choke

Pour limiter ces courants parasites, il est recommandé d'installer un **choke 1:1** à proximité immédiate du transformateur.

Son principe est relativement simple.

Le courant circulant à l'intérieur du câble coaxial n'est pratiquement pas affecté.

En revanche, le courant qui tente de circuler sur la surface extérieure du blindage rencontre une forte impédance.

Il est alors contraint d'emprunter le chemin normalement prévu par la conception de l'antenne.

Plusieurs techniques permettent de réaliser un choke.

Les plus courantes utilisent :

- plusieurs spires de câble coaxial enroulées sur un tore ferrite ;
- plusieurs tores ferrite enfilés directement sur le câble ;
- un bobinage coaxial autoportant pour les bandes basses.

Le choix dépend principalement de la plage de fréquences, de la puissance d'émission et du niveau d'atténuation recherché.

Dans la pratique, un choke correctement réalisé améliore souvent davantage le fonctionnement d'une antenne End-Fed qu'un changement de transformateur ou une recherche obsessionnelle du ROS parfait.

---

## Le contrepoids

L'une des idées reçues les plus répandues consiste à affirmer qu'une antenne End-Fed fonctionne sans contrepoids.

Cette affirmation est inexacte.

Du point de vue des lois de l'électromagnétisme, tout courant doit revenir vers sa source.

Une antenne ne peut donc jamais fonctionner sans chemin de retour.

La seule question est de savoir où circule ce courant.

Dans une EFHW, le courant présent au point d'alimentation reste relativement faible.

Selon les conditions d'installation, le retour peut être assuré par :

- un court fil de contrepoids ;
- le blindage du câble coaxial ;
- les capacités parasites avec le sol ;
- la structure supportant l'antenne.

C'est la raison pour laquelle certaines EFHW semblent fonctionner correctement sans contrepoids apparent.

En réalité, celui-ci existe toujours, mais il est parfois constitué d'éléments que l'utilisateur n'identifie pas immédiatement.

Dans une Random Wire, les courants mis en jeu sont généralement plus importants.

L'installation d'un véritable contrepoids améliore alors sensiblement le rendement, facilite l'accord et réduit les courants de mode commun.

Plusieurs solutions peuvent être utilisées :

- un fil de quelques mètres disposé au sol ;
- plusieurs fils rayonnants courts ;
- un réseau de radiales ;
- une bonne prise de terre HF lorsque les conditions s'y prêtent.

Le choix dépend essentiellement du type d'installation et de l'espace disponible.

Quelle que soit la solution retenue, un contrepoids correctement dimensionné participe directement aux performances de l'antenne.

Il ne s'agit donc pas d'un accessoire facultatif mais d'un élément à part entière du système rayonnant.

## Performances comparées

L'EFHW et la Random Wire répondent à des objectifs différents. Il serait donc réducteur de considérer qu'une solution est systématiquement supérieure à l'autre.

Une **EFHW** correctement dimensionnée présente généralement un excellent rendement sur sa bande fondamentale ainsi que sur ses bandes harmoniques. Son impédance étant proche de la valeur attendue après transformation, les pertes dues au système d'alimentation restent faibles.

Dans de nombreux cas, le transceiver peut être raccordé directement à l'antenne sans utiliser de boîte d'accord externe. Le coupleur interne de l'émetteur, lorsqu'il existe, suffit généralement à compenser les faibles écarts dus à l'environnement ou à la hauteur d'installation.

La **Random Wire** poursuit un objectif différent.

Son principal avantage réside dans sa grande souplesse d'utilisation. Associée à un coupleur efficace, elle peut être exploitée sur pratiquement toutes les bandes HF accessibles au matériel radioamateur.

Cette polyvalence présente toutefois plusieurs contreparties.

L'impédance variant fortement selon la fréquence, le coupleur travaille davantage. Les pertes dans le système d'alimentation peuvent être supérieures à celles d'une antenne résonante, notamment lorsque le ROS est élevé sur la ligne coaxiale reliant l'antenne à la station.

La qualité du contrepoids joue également un rôle beaucoup plus important que dans une EFHW.

Il ne faut cependant pas en conclure qu'une Random Wire est une mauvaise antenne. Installée dans de bonnes conditions, alimentée par un transformateur correctement réalisé et associée à un coupleur performant, elle permet d'obtenir d'excellents résultats, en particulier lorsque les contraintes d'installation interdisent l'utilisation d'une antenne résonante adaptée à chaque bande.

Le choix entre ces deux solutions dépend donc davantage du contexte d'utilisation que d'une hiérarchie de performances.

---

## Comparaison des principales caractéristiques

| Caractéristique | EFHW | Random Wire |
|-----------------|------|-------------|
| Principe | Antenne résonante | Antenne non résonante |
| Longueur | Demi-onde | Longueur optimisée, non harmonique |
| Transformateur | UnUn 49:1 (ou 64:1) | UnUn 9:1 |
| Coupleur | Généralement facultatif | Presque toujours indispensable |
| Impédance | Relativement stable | Très variable |
| Bandes couvertes | Bande fondamentale et harmoniques | Ensemble des bandes HF avec ATU |
| Rendement | Très élevé sur les bandes prévues | Variable selon l'accord |
| Contrepoids | Recommandé | Fortement recommandé |
| Courants de mode commun | Limités avec un choke | Plus sensibles en l'absence de contrepoids |

Ce tableau illustre une différence fondamentale entre les deux familles d'antennes.

L'EFHW recherche une adaptation optimale sur quelques bandes soigneusement choisies.

La Random Wire privilégie la souplesse d'exploitation en acceptant un compromis sur l'adaptation et en confiant au coupleur le soin de compenser les variations d'impédance.

---

## Quelques idées reçues

Le succès des antennes End-Fed s'est accompagné de nombreuses affirmations qui méritent d'être nuancées.

### « Une EFHW est un long-fil équipé d'un transformateur 49:1 »

Cette affirmation est fausse.

Une EFHW est avant tout une **antenne demi-onde résonante**.

Le transformateur 49:1 n'est que la conséquence de son impédance élevée au point d'alimentation.

Remplacer le transformateur 9:1 d'une Random Wire par un 49:1 ne transforme donc pas celle-ci en EFHW.

La longueur électrique de l'antenne demeure le critère déterminant.

### « Une Random Wire peut avoir n'importe quelle longueur »

Là encore, cette idée est inexacte.

Certaines longueurs conduisent à des impédances particulièrement difficiles à adapter sur plusieurs bandes.

Les longueurs généralement recommandées résultent de nombreux essais réalisés par les radioamateurs afin d'éviter ces situations défavorables.

Le terme *Random* doit donc être compris comme **non accordé**, et non comme **choisi au hasard**.

### « Les antennes End-Fed fonctionnent sans contrepoids »

Comme toute antenne, une End-Fed nécessite un chemin de retour pour le courant.

Lorsque celui-ci n'est pas explicitement prévu, le câble coaxial, les structures métalliques voisines ou les capacités parasites avec le sol remplissent partiellement cette fonction.

L'absence apparente de contrepoids ne signifie donc pas son inexistence.

### « Un ROS faible garantit une bonne antenne »

Le rapport d'ondes stationnaires indique uniquement la qualité de l'adaptation entre la ligne et la charge.

Il ne renseigne ni sur le rendement réel de l'antenne ni sur la qualité de son rayonnement.

Une charge fictive présente un ROS pratiquement parfait sans rayonner la moindre énergie.

Inversement, une excellente antenne peut parfois présenter un ROS légèrement supérieur à 1:1 tout en offrant un meilleur rendement global.

Le ROS constitue donc un indicateur utile, mais il ne doit jamais être considéré comme le seul critère d'évaluation d'une installation.

---

## Conclusion

Les antennes alimentées en extrémité occupent aujourd'hui une place importante dans l'équipement des radioamateurs. Leur simplicité d'installation et leur faible encombrement expliquent en grande partie leur succès.

Il convient toutefois de distinguer clairement les deux grandes familles qui composent cette catégorie.

L'**EFHW** est une antenne résonante, optimisée pour fonctionner sur une bande fondamentale et ses harmoniques. Son transformateur 49:1 assure l'adaptation entre son impédance élevée et une ligne coaxiale de 50 Ω, permettant souvent une exploitation sans coupleur externe.

La **Random Wire** est, au contraire, une antenne volontairement non résonante. Associée à un transformateur 9:1 et à une boîte d'accord, elle offre une grande souplesse d'utilisation sur les différentes bandes HF, au prix d'une adaptation moins directe.

Dans les deux cas, la qualité du transformateur, la présence d'un choke efficace, le soin apporté au contrepoids et les conditions d'installation influencent directement les performances obtenues.

Comprendre ces principes permet non seulement de choisir l'antenne la mieux adaptée à ses besoins, mais également d'éviter certaines confusions encore largement répandues dans la littérature radioamateur.

---

## Références et sources complémentaires

Le présent article s'appuie sur les principes généraux de la théorie des antennes ainsi que sur la documentation technique publiée par plusieurs auteurs spécialisés dans les antennes alimentées en extrémité.

### HamAnalyst

**Antenne End-Fed et adaptation d'impédance**

Principes et fabrication DIY

https://hamanalyst.org/antenne-end-fed-et-adaptation-dimpedance-principes-et-fabrication-diy/

### Palomar Engineers

Documentation technique consacrée aux antennes End-Fed, aux transformateurs UnUn, aux ferrites et aux dispositifs de suppression des courants de mode commun.

https://palomar-engineers.com/

Ces deux ressources sont complémentaires. La première présente une synthèse pédagogique particulièrement accessible des principes de fonctionnement des antennes End-Fed. La seconde rassemble une importante documentation technique fondée sur des mesures expérimentales et une longue expérience de terrain concernant les transformateurs d'impédance, les ferrites et la maîtrise des courants de mode commun.
