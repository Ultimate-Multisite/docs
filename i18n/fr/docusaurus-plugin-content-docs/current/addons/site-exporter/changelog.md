---
title: Journal des modifications de l’exportateur de site
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Journal des modifications de Site Exporter

Version : 1.0.6 - Publiée le 2026-05-11
* Nouveau : Les exportations de site incluent désormais un index.php auto-amorçable afin que le ZIP puisse être installé sur un nouvel hébergeur sans installation séparée de plugin
* Nouveau : L’exportation du réseau permet aux administrateurs d’exporter tous les sous-sites dans une seule archive depuis la page d’administration Site Export

Version : 1.0.5 - Publiée le 2026-05-05
* Correction : Ajout de __callStatic au stub polyfill WP_CLI pour gérer les méthodes non simulées comme get_config, évitant ainsi les échecs d’amorçage des tests

Version : 1.0.4 - Publiée le 2025-11-25

* Correction de la compatibilité avec Ultimate Multisite 2.4.

Version : 1.0.2 - Publiée le 2025-09-28

* Renommage du préfixe en ultimate-multisite ; mise à jour du domaine de texte ; incrément de version.

### Version 1.0.1 - Publiée le 2023-08-09 {#version-101---released-on-2023-08-09}

* Amélioration : Garantit désormais que le chemin de fichier correct du fichier d’importation est obtenu.
* Correction : Cache d’objets désactivé pour éviter les erreurs pendant l’importation.
* Correction : Correction du problème où le lien de téléchargement du plugin d’importation ne fonctionnait pas.

### Version 1.0.0 - Publiée le 2022-12-23 {#version-100---released-on-2022-12-23}

* Correction : La fenêtre contextuelle du formulaire d’exportation ne se chargeait pas ;
* Correction : Les fichiers Javascript ne se chargeaient pas sur la page d’exportation ;
* Interne : Nouveau processus de build ;

### Version 1.0.0-beta.4 - Publiée le 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Interne : Générateur de hooks et de filtres ajouté ;
* Interne : Stubs WP Ultimo ajoutés pour améliorer le confort des développeurs ;
