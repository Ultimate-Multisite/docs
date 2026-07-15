---
title: Opérations du locataire souverain
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Opérations des locataires souverains

Ultimate Multisite : la version 1.2.0 ajoute des outils opérationnels pour les locataires souverains : des sous-sites qui fonctionnent avec leur propre base de données, racine de système de fichiers et contexte de routage, tout en restant visibles par l'administrateur réseau.

Utilisez cette page lorsque vous gérez des sites clients isolés, des transferts de sites distants ou des migrations qui déplacent un sous-site standard vers une infrastructure souveraine.

## Ce qui change pour les administrateurs {#what-changes-for-administrators}

- **Connexion automatique du locataire sans état (Stateless tenant autologin)** — Les administrateurs réseau peuvent visiter un locataire souverain sans dépendre d'un état de session partagé de longue durée. Le jeton SSO est à portée limitée, ancré à l'origine, protégé contre la relecture et limité à une courte fenêtre d'expiration.
- **Routage sensible au contexte souverain (Sovereign-aware routing)** — Les réseaux isolés hérités et les locataires souverains se résolvent via le même chemin de route du site, réduisant ainsi les différences de démarrage entre les anciennes installations isolées et les nouvelles.
- **État de migration vérifié** — La vérification de la migration contrôle l'approvisionnement des utilisateurs, les permissions d'écriture de la base de données, l'état de vidange de la file d'attente (queue drain) et l'absence de tables héritées avant qu'un locataire ne soit considéré comme complet.
- **Démantèlement plus sûr** — Le démontage des locataires souverains supprime désormais les identifiants du locataire proprement afin que les locataires supprimés ne laissent pas d'accès obsolètes à la base de données.

## Visiter un locataire souverain {#visiting-a-sovereign-tenant}

1. Ouvrez **Admin Réseau > Ultimate Multisite > Sites**.
2. Sélectionnez le locataire souverain.
3. Utilisez **Visiter (SSO)** si disponible au lieu de copier des mots de passe ou de créer des comptes administrateurs temporaires.

Le flux de visite crée un jeton de connexion à courte durée pour ce locataire et enregistre l'événement SSO dans la piste d'audit du locataire. Si le bouton échoue, vérifiez que le domaine du locataire se résout vers l'installation attendue et que le locataire peut atteindre le point de terminaison SSO côté réseau.

## Liste de contrôle des opérations sur site distant {#remote-site-operations-checklist}

Avant de modifier un locataire souverain ou distant, confirmez :

## Suppression des tenants souverains {#deleting-sovereign-tenants}

Supprimer un tenant souverain est une opération destructive. Confirmez d'abord le statut de sauvegarde et d'exportation, puis supprimez-le depuis l'écran de gestion du site. Le flux de démantèlement 1.2.0 supprime les identifiants de la base de données du tenant lors du nettoyage, mais les administrateurs doivent toujours vérifier que les utilisateurs de base de données et les dossiers au niveau de l'hôte ont bien disparu lorsque vous utilisez des panneaux d'hébergement externes.

:::warning
Ne supprimez pas un tenant souverain pendant que la vérification de migration est toujours en cours ou pendant que des tâches de poussée asynchrones sont en file d'attente. Attendez que la vérification soit terminée afin que le démantèlement ne supprime pas les identifiants nécessaires aux tâches en attente.
:::
