---
title: Journal des modifications de l'intégration WooCommerce
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Journal des modifications d'intégration WooCommerce

Version 2.0.6 - Publié le 2026-01-16
* Amélioration : Inclure les abonnements principaux dans l'addon. Ne nécessite plus l'extension Woocommerce Subscriptinos.
* Correction : Erreur fatale dans certains constructeurs de pages.
* correction : Redirection infinie lorsque le client est membre du site principal.

Version 2.0.5 - Publié le 2026-01-09
* Amélioration : Charger les traductions depuis l'API glotpress.
* Correction : Erreur fatale dans certains constructeurs de pages.
* correction : Redirection infinie lorsque le client est membre du site principal.

Version 2.0.4 - Publié le 2025-11-14
* Ajout : Traductions pour beaucoup plus de langues.
* Changement : Renommé en Ultimate Multisite : Woocommerce Integration.
* Ajout : Compatibilité avec Woocommerce 10.2.1.
* Ajout : Compatibilité avec Woocommerce Subscriptions 7.7.0.
* Correction : Compatibilité avec PHP 8.4
* Correction : Redirection lorsqu'aucune page de compte WC n'existe.

Version 2.0.3 - Publié le 2025-08-13
* Changement : Mise à jour automatique activée avec le nouveau marketplace.

Version 2.0.2 - Publié le 2025-07-05
* Changement : Renommé en Multisite Ultimate : Woocommerce Integration.
* Ajout : Compatibilité avec Woocommerce 9.8.1.
* Ajout : Compatibilité avec Woocommerce Subscriptions 7.3.0.
* Correction : Annulation d'un abonnement par le client.
* Correction : Erreur fatale lors de l'utilisation du bloc de paiement.
* Amélioration : Maintenant compatible avec les tables de commandes personnalisées haute performance de Woocommerce.
* Correction : L'annulation à la caisse WooCommerce peut toujours mettre à niveau un abonnement.

Version 2.0.1 - Publié le 2023-08-09
* Ajout : Compatibilité avec Woocommerce 7.9.0.
* Ajout : Compatibilité avec Woocommerce Subscriptions 5.3.0.
* Ajout : Support des mises à jour d'abonnement.
* Ajout : Avis sur les essais et frais d'installation dans Woocommerce.
* Ajout : Identification des produits Woocommerce Ultimate Multisite avec une valeur méta.
* Ajout : Insertion d'une correction unique pour marquer tous les produits Woocommerce liés à Ultimate Multisite.
* Ajout : Suppression des produits créés par Ultimate Multisite de la liste Woocommerce.
* Amélioration : Création d'une remise Woocommerce non récurrente à appliquer au panier.
* Amélioration : Restauration de la remise récurrente sur le produit Woocommerce.
* Amélioration : Ajout d'une étiquette de remise récurrente au produit Woocommerce.
* Amélioration : Garantie du type de produit à la caisse.
* Correction : Maintien du statut d'abonnement pendant le processus de rétrogradation.
* Correction : Vérification de l'existence d'un abonnement pour éviter les erreurs lors du processus d'annulation.
* Correction : Ajout de la date de début d'abonnement à utiliser dans les abonnements Woocommerce.
* Interne : Mise en œuvre d'un nouveau processus de construction PHP 8.1.

Version 2.0.0 - Réécriture complète.
* Ajout : Méthode de traitement de l'annulation pour supprimer l'abonnement woo lors du changement de passerelle ou de l'annulation de l'abonnement;
* Ajout : Gestionnaire pour rétrograder et mettre à niveau les abonnements;
* Amélioration : Charger les dépendances woocommerce sur le formulaire de mise à jour client dans les sous-sites pour permettre la mise à jour du compte;
* Amélioration : Charger correctement le panier Woocommerce s'il n'existe pas;
* Amélioration : S'assurer que nous sommes sur les tables du site principal lors du traitement d'une caisse;
* Amélioration : Faire en sorte que la commande de renouvellement Ultimo soit basée sur la valeur de la commande d'abonnement Woocommerce et non sur le dernier paiement;
* Correction : Aller au lien du bouton WU Membership;
* Correction : Marquer la commande Ultimo comme payée lorsque le renouvellement des abonnements Woocommerce a été payé;
* Construction : Ajouter MPB comme constructeur;

Version 2.0.0-beta-5 - Publié le 2022-01-21
* Interne : Ajout d'un générateur de hooks et filtres;
* Interne : Ajout de stubs Ultimate Multisite pour la qualité de vie du développeur;
* Correction : Empêcher la création de plusieurs produits lorsqu'ils ne sont pas nécessaires;

Version 2.0.0-beta.4 - 2021-09-23
* Correction : Exiger que WooCommerce soit actif sur le réseau plutôt que seulement sur le site principal;
* Amélioration : Ajout d'un filtre pour permettre à l'addon d'être utilisé comme mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28
* Correction : Le contrôle d'accès du tableau de bord était trop agressif;
* Amélioration : Ajout de liens d'aide WooCommerce au menu principal Ultimate Multisite;

Version 2.0.0-beta.2 - 2021-05-04
* Amélioration : Crée des paiements en attente sur Ultimo lors de la création d'une commande de renouvellement WCS;
* Amélioration : Remplit automatiquement les champs de facturation avec les données client Ultimate Multisite;
* Amélioration : Restaure les champs de facturation pour les passerelles;

Version 2.0.0-beta.1 - 2021-05-04
* Version beta initiale

-- Legacy Versions --

Version 1.2.6 - 26/03/2020
* Correction : Petite incompatibilité avec les versions plus récentes de WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019
* Correction : Erreur sur la version précédente;

Version 1.2.4 - 22/08/2019
* Amélioration : Ajout d'une option pour rediriger vers l'écran de paiement WooCommerce après l'intégration immédiatement;

Version 1.2.3 - 26/05/2019
* Correction : L'e-mail de paiement pour WooCommerce a disparu dans certains cas limites;

Version 1.2.2 - 27/02/2019
* Ajout : Support des frais d'installation sur l'intégration WooCommerce Subscription;

Version 1.2.1 - 17/11/2018
* Correction : Problèmes de compatibilité avec Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018
* Amélioration : Nouvelle URL de mise à jour pour les add-ons;
* Ajout : Support beta pour WooCommerce Subscription;

Version 1.1.2 - 11/02/2018
* Correction : Le lien vers Pay est généré dynamiquement pour répondre aux changements des points de terminaison WooCommerce;
* Amélioration : Nous forçons désormais le statut terminé pour nos commandes lorsque payment_completed est appelé afin de garantir que nos hooks de renouvellement fonctionnent lorsqu'ils le devraient;

Version 1.1.1 - 24/01/2018
* Correction : Il vérifie également si WooCommerce est simplement activé sur le site principal;
* Correction : Inclusion de surcharges pour permettre la création de commandes incluant les taxes;

Version 1.1.0 - 04/11/2017
* Correction : Le libellé du bouton d'intégration change réellement pour refléter les paramètres. Nécessite Ultimate Multisite 1.5.0;
* Correction : L'intégration WooCommerce fonctionne désormais même si WooCommerce n'est pas actif sur le réseau et activé uniquement sur le site principal;

1.0.0 - Version initiale
