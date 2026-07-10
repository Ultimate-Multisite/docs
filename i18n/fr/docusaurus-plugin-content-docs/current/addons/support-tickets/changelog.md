---
title: Journal des modifications des tickets d’assistance
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Journal des modifications des tickets de support {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Amélioration : suppression du répertoire vendor/ du suivi Git (déjà couvert par .gitignore), réduisant la taille du dépôt
* Amélioration : testé jusqu’à WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Correction : accepter les valeurs null dans les setters du modèle de ticket nullable
* Correction : stocker tous les tickets dans des tables globales à l’échelle du réseau pour une prise en charge multisite appropriée
* Correction : masquer les champs du personnel et corriger la redirection vers une page blanche sur le formulaire de nouveau ticket client
* Correction : remplacer les appels add_meta() non définis par le bon update_meta() pour le stockage des métadonnées
* Correction : remplacer la vérification de capacité non enregistrée par le bon wu_view_all_support_tickets
* Correction : ajouter les gestionnaires AJAX manquants pour les actions de statut de ticket, d’attribution et de modification rapide
* Correction : corriger le nom de méthode pour la détection des réponses du personnel dans les vues de ticket
* Correction : consolider les gestionnaires de réponse en double et aligner les noms d’action nonce
* Correction : ajouter la vue frontend manquante pour le shortcode [wu_submit_ticket]
* Correction : ajouter la colonne user_id manquante et corriger la méthode Support_Ticket::get_user_id()
* Correction : supprimer le guillemet double supplémentaire dans la balise d’option du filtre de priorité
* Correction : ajouter un panneau de gestion des tickets dans l’administration réseau pour les super administrateurs
* Amélioration : consolider le CSS d’administration dans une seule feuille de style externe
* Amélioration : supprimer le sous-menu Settings du menu d’administration des sous-sites
* Amélioration : charger conditionnellement les ressources frontend uniquement sur les pages de tickets de support
* Amélioration : ignorer l’autoloader du plugin lorsque l’autoloader racine de Bedrock a déjà chargé les dépendances

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Ajout : fonctionnalité complète de consultation des tickets pour l’administration et le frontend
* Ajout : gestionnaire AJAX pour les soumissions de réponses aux tickets
* Ajout : prise en charge de la fonctionnalité de réponse aux tickets avec une gestion appropriée du formulaire
* Ajout : affichage approprié des notices pour les soumissions de tickets et les réponses dans l’administration
* Ajout : association automatique du ticket avec l’utilisateur actuel pour les auto-soumissions des clients
* Ajout : amélioration de la sécurité pour empêcher les clients de modifier la propriété du ticket
* Ajout : fonctions d’aide manquantes (wu_format_date, wu_user_can_view_ticket, etc.)
* Ajout : téléchargement et gestion appropriés des pièces jointes
* Ajout : système de notification par e-mail pour les réponses aux tickets et les changements de statut
* Correction : le formulaire de réponse au ticket inclut désormais l’ID de ticket nécessaire
* Correction : problèmes de visibilité des notices dans les vues de tickets de l’administration
* Correction : erreurs de syntaxe dans les fonctions de tickets de support
* Amélioration : structure de base de données avec des classes de requête et de schéma appropriées pour les réponses et les pièces jointes
* Amélioration : migration vers de vraies propriétés au lieu d’attributs pour les modèles de tickets

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Mise à jour : préfixe renommé en ultimate-multisite pour plus de cohérence
* Mise à jour : standardisation du domaine de texte
* Correction : corrections de bugs mineurs et améliorations

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Version initiale
* Système complet de gestion des tickets
* Contrôle d’accès à plusieurs niveaux
* Système de conversation en fil
* Prise en charge des pièces jointes
* Système de notification par e-mail
* Interfaces d’administration et client
* Statistiques et rapports
