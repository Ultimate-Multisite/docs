---
title: Operasyon Tanant Souverain
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Opération des Locataires Souverains {#sovereign-tenant-operations}

Ultimate Multisite : Multi-Tenancy 1.2.0 ajoute des outils opérationnels pour les locataires souverains : des subsites qui fonctionnent avec leur propre base de données, racine de système de fichiers et contexte de routage, tout en restant visibles par l'administrateur réseau.

Utilisez cette page lorsque vous gérez des sites clients isolés, des transferts de sites distants ou des migrations qui déplacent un sous-site standard vers une infrastructure souveraine.

## Quels changements pour les administrateurs {#what-changes-for-administrators}

- **Connexion automatique sans état (Stateless tenant autologin)** — Les administrateurs réseau peuvent visiter un locataire souverain sans dépendre d'un état de session partagé de longue durée. Le jeton SSO est limité à un objectif précis, ancré à l'origine, protégé contre la relecture et plafonné à une courte fenêtre d'expiration.
- **Routage conscient du souverain (Sovereign-aware routing)** — Les réseaux isolés hérités et les locataires souverains se résolvent via le même chemin de route du routeur du site, réduisant les différences de démarrage entre les anciennes installations isolées et les nouvelles.
- **État de migration vérifié** — La vérification de la migration contrôle l'approvisionnement des utilisateurs, les permissions d'écriture de la base de données, le statut de vidange de la file (queue drain status) et l'absence de tables héritées avant qu'un locataire ne soit considéré comme complet.
- **Démantèlement plus sûr** — Le démontage souverain supprime maintenant proprement les identifiants du locataire afin que les locataires supprimés ne laissent pas d'accès obsolètes à la base de données derrière eux.

## Visiter un locataire souverain {#visiting-a-sovereign-tenant}

1. Ouvrez **Network Admin > Ultimate Multisite > Sites**.
2. Sélectionnez le locataire souverain.
3. Utilisez **Visit (SSO)** si disponible au lieu de copier des mots de passe ou de créer des comptes administrateurs temporaires.

Le flux de visite crée un jeton de connexion à courte durée pour ce locataire et enregistre l'événement SSO dans la piste d'audit du locataire. Si le bouton échoue, vérifiez que le domaine du locataire se résout vers l'installation attendue et que le locataire peut atteindre le point de terminaison SSO côté réseau.

## Liste de contrôle des opérations sur site distant {#remote-site-operations-checklist}

Avant de modifier un locataire souverain ou distant, confirmez :

- Domaine du locataire pointe vers l'hôte qui possède le système de fichiers du locataire.
- L'hôte de la base de données du locataire correspond au binding d'hôte configuré pour cette installation.
- Les commandes de vérification de migration passent pour le locataire.
- Les files d'attente de migration asynchrone sont vidées avant d'effectuer des changements DNS ou de propriété.
- L'utilisateur administrateur du locataire a été provisionné pendant la migration et peut se connecter via SSO.

## Supprimer les locataires souverains {#deleting-sovereign-tenants}

Supprimer un locataire souverain est destructeur. Confirmez d'abord le statut de sauvegarde et d'exportation, puis supprimez-le depuis l'écran de gestion du site. Le flux de désinstallation 1.2.0 retire les identifiants de la base de données du locataire comme faisant partie du nettoyage, mais les administrateurs doivent toujours vérifier que les utilisateurs de base de données et dossiers au niveau de l'hôte ont disparu lorsque vous utilisez des panneaux d'hébergement externes.

:::warning
Ne supprimez pas un locataire souverain pendant que la vérification de migration est toujours en cours ou pendant que des tâches de poussée asynchrones sont en file d'attente. Attendez que la vérification soit terminée afin que la désinstallation ne supprime pas les identifiants nécessaires aux tâches en attente.
:::
