---
title: Journal des modifications des forfaits facturés à l’usage
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Journal des modifications de Metered Plans {#metered-plans-changelog}

Version 1.1.0 - Publiée le 2026-05-05
- Nouveau : facturation des tokens AI pour les sous-sites multisite — suivez et facturez l’utilisation des tokens AI sur les sites clients avec des tarifs configurables par token
- Nouveau : application du Connector reconstruite avec découverte dynamique des limites et écriture directe, garantissant une précision en temps réel sur tous les connectors
- Correction : les mises à niveau des tables de base de données sont désormais correctement alignées sur les définitions de schéma BerlinDB, évitant les échecs de mise à niveau sur les nouvelles installations
- Correction : les callbacks de mise à niveau de base de données ont été convertis au bon format, résolvant les échecs de mise à niveau silencieux
- Correction : les valeurs fractionnaires sont désormais acceptées dans le champ de saisie AI Usage Overage Markup
- Correction : erreurs fatales et problèmes de double initialisation résolus lors du chargement du plugin
- Amélioré : ajout du script npm check-env afin que les environnements développeur se configurent automatiquement au premier lancement

### 1.0.3 {#103}
* Mise à jour vers Plugin Update Checker v5
* Ajout d’en-têtes de plugin WordPress modernes
* Compatibilité améliorée avec les dernières versions de WordPress
* Performances de suivi de l’utilisation améliorées

### 1.0.2 {#102}
* Corrections de bugs et améliorations des performances
* Rapports d’utilisation améliorés

### 1.0.0 {#100}
* Version initiale
* Fonctionnalité principale de facturation au compteur
* Suivi de l’utilisation et calcul des dépassements
* Génération automatique de factures
