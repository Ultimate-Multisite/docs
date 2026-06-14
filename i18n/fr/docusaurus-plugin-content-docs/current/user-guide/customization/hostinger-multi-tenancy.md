---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger

Ultimate Multisite : Multi-Tenancy 1.2.0 ajoute une fonctionnalité de multi-tenancy Hostinger permettant aux domaines hébergés de participer au provisionnement de tenants souverains en parallèle de l'intégration existante de mappage de domaine Hostinger.

Utilisez cette fonctionnalité lorsque les domaines des tenants et l'infrastructure tenant isolée sont gérés via hPanel Hostinger.

## Notes de configuration

1. Configurez l'intégration principale Hostinger sous **Ultimate Multisite > Settings > Host Integrations**.
2. Confirmez que le jeton API Hostinger peut gérer le domaine ou sous-domaine cible.
3. Activez l'add-on Multi-Tenancy.
4. Configurez la stratégie d'isolation du tenant avant de publier le tenant.
5. Exécutez le flux de travail de vérification de migration avant d'envoyer le trafic de production au tenant.

La fonctionnalité Hostinger utilise la connexion Hostinger partagée pour les opérations côté hôte. Le DNS doit toujours pointer vers le compte Hostinger correct, et les limites du compte hPanel s'appliquent toujours.

## Changements spécifiques à la fonctionnalité

- Les tenants souverains peuvent être créés avec des opérations de domaine conscientes de l'hôte.
- Les chaînes d'hôtes de base de données sur la même machine sont normalisées avant la vérification de l'octroi.
- Les tenants gérés par Hostinger doivent utiliser la valeur d'hôte de la base de données affichée dans hPanel, à moins que le runtime WordPress ne nécessite une surcharge locale.
- Les visites SSO reposent sur la résolution du domaine du tenant vers le tenant hébergé par Hostinger.

## Dépannage des tenants Hostinger

- Si l'installation d'un tenant échoue, vérifiez que le domaine est déjà attaché au compte Hostinger.
- Si la vérification de la base de données échoue, comparez le nom d'utilisateur de la base de données du tenant, le nom de la base de données et le lien d'hôte avec hPanel.
- Si **Visit (SSO)** échoue, confirmez que le DNS et le SSL sont actifs pour le domaine du tenant.
- Si la désinstallation laisse des ressources hôtes en arrière, supprimez toute base de données, utilisateur ou dossier restant dans hPanel après avoir confirmé les sauvegardes.
