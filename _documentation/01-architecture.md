# Architecture du site F6CYK

| Document | Architecture du site |
|----------|-----------------------|
| Version | 1.0 |
| Statut | En vigueur |
| Date | 22 juillet 2026 |

---

# 1. Objet

Le présent document décrit l'architecture générale du site F6CYK.

Il précise l'organisation des répertoires et les principes retenus pour le classement des contenus et des ressources.

L'objectif est de garantir une structure simple, cohérente et pérenne.

---

# 2. Principes d'architecture

L'architecture du site repose sur les principes suivants :

- simplicité de l'organisation ;
- séparation des contenus selon leur nature ;
- absence de redondance ;
- facilité de maintenance ;
- évolutivité.

Chaque répertoire possède un rôle unique et clairement défini.

---

# 3. Organisation générale

Le projet est organisé autour des principaux répertoires suivants.

## _documentation/

Documentation interne du projet.

Contient les documents de référence destinés au concepteur du site.

Ce répertoire n'est pas publié.

---

## _posts/

Articles du site.

Chaque article appartient à une rubrique unique.

---

## pages/

Pages permanentes du site.

Exemples :

- Accueil
- Station
- Matériel
- Antennes
- Réalisations
- Trafic
- Documentation
- Galerie
- Contact

---

## documents/

Bibliothèque documentaire destinée aux visiteurs.

Ce répertoire contient notamment :

- ouvrages ;
- revues ;
- notices ;
- datasheets ;
- schémas ;
- archives.

---

## assets/

Ressources utilisées par le site.

Il regroupe notamment :

- feuilles de style ;
- scripts ;
- images ;
- ressources audio ;
- vidéos.

L'organisation détaillée de ce répertoire est définie dans un document spécifique.

---

# 4. Organisation des contenus

Chaque contenu possède une place unique dans l'arborescence.

Les informations ne doivent pas être dupliquées.

Les liens internes permettent de relier les contenus appartenant à des rubriques différentes.

---

# 5. Organisation des ressources

Les ressources associées à un article sont considérées comme faisant partie intégrante de cet article.

Le principe retenu est le suivant :

> **L'article constitue l'unité d'organisation des ressources.**

Les modalités d'organisation des images, fichiers audio, vidéos et autres médias sont décrites dans le document **03-gestion-des-images.md**.

---

# 6. Documentation interne

La documentation interne constitue la mémoire du projet.

Toute décision d'architecture doit être documentée afin d'assurer la continuité du développement et de faciliter la maintenance du site.

---

# 7. Évolution

L'architecture du site est conçue pour évoluer sans remettre en cause son organisation générale.

Toute modification importante devra respecter les principes définis dans le présent document.

---

*Fin du document.*
