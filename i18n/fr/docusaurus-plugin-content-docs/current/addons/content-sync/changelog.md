---
title: Journal des modifications de Content Sync
sidebar_position: 99
_i18n_hash: 3b44da06636d21415abe77d8cef605f3
---
# Changelog de la synchronisation de contenu

### Version 1.1.0 - Publié le 2025-12-31
* Nouveau : prise en charge de la synchronisation de tous les types de publication (articles, pages, types de publication personnalisés)
* Nouveau : filtrage des types de publication lors de l'étape de sélection de contenu
* Nouveau : étape de sélection du site source - synchronisation depuis n'importe quel site, pas seulement le site principal
* Nouveau : pré-sélection des sites enfants pour les sites de modèles
* Nouveau : extraction de médias depuis post_content pour tous les types de publication
* Nouveau : synchronisation des taxonomies (catégories, étiquettes, taxonomies personnalisées)
* Modifié : renommé de "Elementor Template Sync" à "Content Sync"
* Modifié : l'étape "Select Templates" renommée en "Select Data"
* Amélioré : le code spécifique à Elementor ne s'exécute désormais que pour le type de publication elementor_library

### Version 1.0.0 - Publié le 2025-12-19
* Version initiale
* Assistant à plusieurs étapes pour la sélection de modèles et de sites
* Traitement par lots avec retour d'information en temps réel sur la progression
* Synchronisation complète des médias avec re-mappage automatique des ID
* Intégration des paramètres avec Ultimate Multisite
* Prise en charge de l'exclusion de sites via les paramètres réseau
* Effacement du cache Elementor après la synchronisation
* Préservation de la taxonomie des modèles
