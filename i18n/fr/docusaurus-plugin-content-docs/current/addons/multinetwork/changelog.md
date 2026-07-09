---
title: Journal des modifications multi-réseau
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Journal des modifications Multi-Network {#multi-network-changelog}

### 1.3.0 {#130}
* Nouveau : prévisualiseur de modèles de réseau — parcourez et prévisualisez les modèles de réseau avec un panneau en direct avant l’achat.
* Nouveau : sélecteur de modèle de réseau au checkout — les clients peuvent sélectionner un modèle de réseau pendant le flux de checkout d’inscription.
* Nouveau : SSO par magic link inter-réseaux — les clients peuvent accéder aux sous-réseaux de manière fluide via une authentification par magic-link.
* Nouveau : clonage des médias de réseau — les médias du site sont correctement dupliqués lors du clonage de réseaux à partir d’un modèle.
* Correctif : le clonage de réseau fonctionne désormais sans l’addon multi-tenant ; les privilèges de super admin sont réattribués après le clonage.
* Correctif : la création de réseau est désormais compatible avec WooCommerce et toutes les passerelles de paiement.
* Correctif : le numéro de port est désormais inclus dans la génération de domaine de secours.
* Correctif : le CSS du sélecteur de modèle a été déplacé vers une feuille de style mise en file d’attente pour un rendu correct sur tous les thèmes.
* Correctif : protection contre la clé `network_id` non définie dans la portée de requête de site.
* Correctif : la vérification des autorisations du réseau avant le changement de contexte empêche les erreurs de propriété de table `wpdb`.

### 1.0.4 {#104}
* Correctif : création d’un nouveau réseau.
* Correctif : rendu des menus.

### 1.0.3 {#103}
* Mis à jour vers Plugin Update Checker v5
* Ajout d’en-têtes de plugin WordPress modernes
* Compatibilité améliorée avec les dernières versions de WordPress

### 1.0.2 {#102}
* Corrections de bugs et améliorations des performances
* Isolation du réseau améliorée

### 1.0.0 {#100}
* Version initiale
* Fonctionnalité multinetwork principale
* Intégration avec Multisite Ultimate
