---
title: Historique des modifications Captcha
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
# Captcha Changelog

Version: 1.3.2 - Publié le 2026-01-27
* Corrigé : le widget Cap ne s'affiche pas sur les formulaires de paiement utilisant Elementor ou d'autres constructeurs de pages
* Corrigé : l'élément personnalisé cap-widget est supprimé par la sanitisation wp_kses()
* Amélioré : Utiliser un contenu exécutable pour le champ captcha de paiement afin de contourner le filtrage HTML
* Amélioré : JavaScript simplifié avec un fallback pour les cas limites

Version: 1.3.1 - Publié le 2026-01-26
* Corrigé : le mode invisible de Cap Captcha ne se résout pas automatiquement sur les formulaires de paiement dynamiques d'Ultimate Multisite
* Amélioré : le script de paiement Cap utilise désormais MutationObserver pour détecter les widgets chargés dynamiquement
* Amélioré : ajout d'une interception du bouton de paiement pour attendre le token avant la soumission

Version: 1.3.0 - Publié le 2026-01-27
* Nouveau : intégration de WooCommerce Blocks au paiement avec interception des requêtes Store API
* Nouveau : prise en charge du captcha invisible pour le paiement WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nouveau : page de paramètres autonome pour une utilisation sans Ultimate Multisite
* Nouveau : Jetpack Autoloader pour la prévention des conflits de dépendances
* Corrigé : hCaptcha ne s'affiche pas sur le paiement dynamique d'Ultimate Multisite (contenu chargé via AJAX)
* Corrigé : le captcha ne se rafraîchit pas / ne se réinitialise pas lorsqu'il y a des erreurs de validation du formulaire
* Corrigé : hCaptcha n'apparaît pas sur la page de paiement WooCommerce
* Corrigé : erreur de classe reCAPTCHA introuvable (bibliothèque PHP google/recaptcha ajoutée)
* Amélioré : détection des erreurs via les hooks WordPress, MutationObserver et l'interception AJAX
* Amélioré : les descriptions des paramètres incluent désormais les URL du tableau de bord pour les clés API

Version: 1.2.2 - Publié le 2026-01-24
* Corrigé : le captcha ne s'affiche pas sur l'élément de formulaire de connexion d'Ultimate Multisite (incohérence du nom du filtre de formulaire)
* Corrigé : le HTML du widget Cap est supprimé par la sanitisation wp_kses()
* Corrigé : les sélecteurs JavaScript ne trouvent pas les formulaires avec des barres obliques dans les ID d'élément
* Ajouté : hook de filtre `wu_kses_allowed_html` pour classaddons afin d'étendre les balises HTML autorisées
* Retiré : fichiers JavaScript obsolètes remplacés par des scripts spécifiques au fournisseur

Version: 1.2.1 - Publié le 2026-01-23
* Corrigé : la validation du token Cap Captcha échoue dans les environnements multisite (utilise désormais des transients réseau)
* Corrigé : le captcha s'affiche désormais de façon cohérente pour tous les utilisateurs, quel que soit leur statut de connexion
* Corrigé : incohérence entre l'affichage et la validation du captcha qui provoquait des échecs de paiement

Version: 1.2.0 - Publié le 2026-01-21
* Nouveau : Cap Captcha - captcha proof-of-work auto-hébergé, activé par défaut lors de l'activation
* Nouveau : protection sans configuration - activez l'addon et vous êtes protégé immédiatement
* Nouveau : architecture polymorphique des fournisseurs de captcha pour une extensibilité facile
* Nouveau : protection du paiement WooCommerce Store API contre les attaques de test de carte
* Nouveau : tableau de bord de suivi des statistiques affichant les défis, les vérifications et les attaques bloquées
* Nouveau : préréglages de niveau de sécurité (Fast, Medium, Max) pour la difficulté de Cap Captcha
* Nouveau : classes de base abstraites pour les fournisseurs reCAPTCHA et hCaptcha
* Amélioré : refonte du code en classes de fournisseurs modulaires
* Amélioré : meilleure séparation des responsabilités grâce à une classe gestionnaire dédiée
* Corrigé : améliorations de sécurité pour la sanitisation de la variable $_SERVER
* Corrigé : configuration des tests PHPUnit pour les conventions de nommage WordPress

Version: 1.0.1 - Publié le 2025-09-28
* Renommage du préfixe en ultimate-multisite ; mise à jour du domaine de texte ; mise à jour de la version.
