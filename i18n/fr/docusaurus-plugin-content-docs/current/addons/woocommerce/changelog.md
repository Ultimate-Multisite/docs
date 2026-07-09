---
title: Journal des modifications de l’intégration WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Journal des modifications de l’intégration WooCommerce {#woocommerce-integration-changelog}

Version 2.2.0 - Publiée le 2026-07-01
* Nouveau : les montants de taxes Ultimate Multisite apparaissent désormais comme des lignes de frais WooCommerce séparées lors du checkout, ce qui rend les totaux de taxes plus clairs avant le paiement.
* Nouveau : ajout d’un réglage opt-in "Suspend Memberships Immediately on Failed Renewals" et du filtre `wu_woo_suspend_on_payment_failure` pour les sites qui veulent suspendre les adhésions après un échec de renouvellement pendant la fenêtre de nouvelle tentative WooCommerce Subscriptions.
* Correction : réconciliation des statuts WooCommerce Subscription qui pouvaient rester désynchronisés avec les adhésions Ultimate Multisite après des renouvellements échoués ou récupérés.
* Correction : ajout de la devise de la boutique WooCommerce à la liste des devises Ultimate Multisite lorsqu’elle était absente.
* Correction : conservation des détails de facturation client lors de la redirection des abonnés vers le checkout WooCommerce.
* Amélioré : ajout de la compatibilité avec Jetpack Autoloader 5.
* Amélioré : nettoyage de la génération des packages de publication afin que les zips GitHub et marketplace évitent les répertoires de staging imbriqués et les fichiers de développement.

Version 2.0.6 - Publiée le 2026-01-16
* Amélioration : inclut les abonnements cœur dans l’addon. Ne nécessite plus l’extension Woocommerce Subscriptinos.

Version 2.0.5 - Publiée le 2026-01-09
* Amélioration : chargement des traductions depuis l’API glotpress.
* Correction : erreur fatale dans certains constructeurs de pages.
* Correction : redirection infinie lorsque le client est membre du site principal.

Version 2.0.4 - Publiée le 2025-11-14
* Ajouté : traductions pour beaucoup plus de langues.
* Modifié : renommé en Ultimate Multisite: Woocommerce Integration.
* Ajouté : compatibilité avec Woocommerce 10.2.1.
* Ajouté : compatibilité avec Woocommerce Subscriptions 7.7.0.
* Correction : compatibilité avec PHP 8.4
* Correction : redirection lorsque aucune page de compte WC n’existe.

Version 2.0.3 - Publiée le 2025-08-13
* Modifié : mises à jour automatiques activées avec la nouvelle marketplace.

Version 2.0.2 - Publiée le 2025-07-05
* Modifié : renommé en Multisite Ultimate: Woocommerce Integration.
* Ajouté : compatibilité avec Woocommerce 9.8.1.
* Ajouté : compatibilité avec Woocommerce Subscriptions 7.3.0.
* Correction : annulation d’un abonnement par le client.
* Correction : erreur fatale lors de l’utilisation du bloc de checkout.
* Amélioration : désormais compatible avec les tables de commandes personnalisées haute performance de Woocommerce.
* Correction : l’annulation au checkout WooCommerce peut toujours mettre à niveau une adhésion.

Version 2.0.1 - Publiée le 2023-08-09

* Ajouté : compatibilité avec Woocommerce 7.9.0.
* Ajouté : compatibilité avec Woocommerce Subscriptions 5.3.0.
* Ajouté : prise en charge des mises à jour d’adhésion.
* Ajouté : avis concernant les essais et les frais de configuration dans Woocommerce.
* Ajouté : identification des produits Ultimate Multisite Woocommerce avec une valeur méta.
* Ajouté : insertion d’une correction ponctuelle pour marquer tous les produits Woocommerce liés à Ultimate Multisite.
* Ajouté : suppression des produits créés par Ultimate Multisite de la liste Woocommerce.
* Amélioration : création d’une remise Woocommerce non récurrente à appliquer au panier.
* Amélioration : restauration de la remise récurrente sur le produit Woocommerce.
* Amélioration : ajout d’une étiquette de remise récurrente au produit Woocommerce.
* Amélioration : vérification du type de produit au checkout.
* Correction : maintien du statut d’adhésion pendant le processus de rétrogradation.
* Correction : vérification de l’existence d’un abonnement afin d’éviter les erreurs pendant le processus d’annulation.
* Correction : ajout de la date de début d’abonnement à utiliser dans les abonnements Woocommerce.
* Interne : implémentation d’un nouveau processus de build PHP 8.1.

Version 2.0.0 - Réécriture complète.

* Ajouté : méthode de traitement de l’annulation pour supprimer l’abonnement woo lors du changement de passerelle ou de l’annulation de l’adhésion ;
* Ajouté : gestionnaire pour rétrograder et mettre à niveau les adhésions ;
* Amélioration : chargement des dépendances woocommerce sur le formulaire de mise à jour client dans les sous-sites afin de permettre la mise à jour du compte ;
* Amélioration : chargement correct du panier Woocommerce s’il n’existe pas ;
* Amélioration : s’assurer que nous sommes sur les tables du site principal lors du traitement d’un checkout ;
* Amélioration : faire en sorte que la commande de renouvellement Ultimo soit basée sur la valeur de la commande d’abonnement Woocommerce et non sur le dernier paiement ;
* Correction : lien du bouton Aller à l’adhésion WU ;
* Correction : définir la commande Ultimo comme payée lorsque le renouvellement des abonnements Woocommerce a été payé ;
* Build : ajout de MPB comme builder ;

Version 2.0.0-beta-5 - Publiée le 2022-01-21

* Interne : ajout d’un générateur de hooks et de filtres ;
* Interne : ajout de stubs Ultimate Multisite pour améliorer la qualité de vie des développeurs ;
* Corrigé : prévention de la création de plusieurs produits lorsque ce n’est pas nécessaire ;

Version 2.0.0-beta.4 - 2021-09-23

* Correction : exiger que WooCommerce soit actif sur le réseau au lieu du site principal uniquement ;
* Amélioration : ajout d’un filtre pour permettre à l’add-on d’être utilisé comme mu-plugin ;

Version 2.0.0-beta.3 - 2021-05-28

* Correction : le contrôle d’accès au dashboard était trop agressif ;
* Amélioration : ajout de liens d’aide WooCommerce au menu supérieur Ultimate Multisite ;

Version 2.0.0-beta.2 - 2021-05-04

* Amélioration : crée des paiements en attente dans Ultimo lors de la création d’une commande de renouvellement WCS ;
* Amélioration : préremplit les champs de facturation avec les données client Ultimate Multisite ;
* Amélioration : réajoute les champs de facturation pour les passerelles ;

Version 2.0.0-beta.1 - 2021-05-04

* Version bêta initiale

-- Versions héritées --

Version 1.2.6 - 26/03/2020

* Corrigé : petite incompatibilité avec les versions plus récentes de WooCommerce Subscriptions ;

Version 1.2.5 - 26/08/2019

* Corrigé : erreur dans la version précédente ;

Version 1.2.4 - 22/08/2019

* Amélioré : ajout d’une option pour rediriger immédiatement vers l’écran de checkout WooCommerce après l’intégration ;

Version 1.2.3 - 26/05/2019

* Corrigé : l’e-mail de paiement pour WooCommerce disparaissait dans certains cas limites ;

Version 1.2.2 - 27/02/2019

* Ajouté : prise en charge des frais de configuration dans l’intégration WooCommerce Subscription ;

Version 1.2.1 - 17/11/2018

* Corrigé : problèmes de compatibilité avec Ultimate Multisite version 1.9.0 ;

Version 1.2.0 - 10/09/2018

* Amélioré : nouvelle URL de mises à jour pour les add-ons ;
* Ajouté : prise en charge bêta de WooCommerce Subscription ;

Version 1.1.2 - 11/02/2018

* Corrigé : lien vers le paiement généré dynamiquement pour répondre aux changements des endpoints WooCommerce ;
* Amélioré : nous forçons maintenant le statut terminé pour nos commandes lorsque payment_completed est appelé afin de nous assurer que nos hooks de renouvellement s’exécutent quand ils le doivent ;

Version 1.1.1 - 24/01/2018

* Corrigé : désormais, cela vérifie aussi si WooCommerce vient d’être activé sur le site principal ;
* Corrigé : inclusion de surcharges pour permettre à la création de commande d’inclure les taxes ;

Version 1.1.0 - 04/11/2017

* Corrigé : désormais, le libellé du bouton d’intégration change effectivement pour refléter les réglages. Nécessite Ultimate Multisite 1.5.0 ;
* Corrigé : WooCommerce Integration fonctionne désormais même si WooCommerce n’est pas actif sur le réseau et n’est activé que sur le site principal ;

1.0.0 - Version initiale
