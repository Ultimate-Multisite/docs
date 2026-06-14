---
title: Isolation multi-locataire
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolation Multi-Tenancy

Ultimate Multisite : Multi-Tenancy 1.2.0 prend en charge l'isolation de base de données et du système de fichiers par sous-site pour les locataires souverains. Cela permet de garder les données des locataires séparées tout en conservant le provisionnement au niveau du réseau, la facturation et l'administration.

## Stratégie d'isolation

Utilisez l'isolation souveraine pour les clients qui nécessitent une séparation de données plus forte, un stockage de système de fichiers dédié ou une frontière d'hôte distincte.

Chaque locataire souverain doit avoir :

- Une base de données dédiée au locataire ou une stratégie de préfixe de base de données approuvée pour l'hôte.
- Un répertoire racine de système de fichiers dédié au locataire.
- Une entrée dans le registre des locataires qui mappe le site à sa base de données, son chemin racine, son nom d'hôte et son modèle d'isolation.
- Un résultat de vérification de migration avant que le locataire ne soit considéré comme actif.

## Liaison de l'hôte de la base de données

La version 1.2.0 modifie le comportement par défaut de liaison d'hôte sur la même machine pour les installations souveraines. Les valeurs sur la même machine telles que `localhost` sont normalisées afin que Bedrock, FrankenPHP et les installations WordPress conteneurisées puissent accorder et vérifier les permissions par rapport à la chaîne d'hôte MySQL réelle.

Lors de la configuration d'un locataire souverain :

1. Définissez l'hôte de la base de données sur la valeur requise par le runtime du locataire.
2. Utilisez `localhost` pour les installations locales via socket lorsque l'hôte attend des connexions locales.
3. Utilisez `127.0.0.1` ou un nom d'hôte de service uniquement lorsque le serveur de base de données accorde des privilèges à cet hôte.
4. Exécutez la vérification de migration après avoir modifié la liaison de l'hôte.

Si la vérification signale des échecs d'octroi, comparez les octrois d'utilisateur de la base de données du locataire avec la liaison d'hôte configurée. Un utilisateur accordé pour `user@localhost` est différent de `user@127.0.0.1` ou `user@%`.

## Racine du système de fichiers

La racine du locataire doit être stable lors des redémarrages et des déploiements. Évitez les chemins de montage temporaires. Pour les installations de style Bedrock, assurez-vous que la racine du locataire pointe vers la racine web WordPress attendue par le bootstrap du locataire, et pas seulement la racine du projet.

## Ordre de provisionnement

Pour les nouveaux locataires souverains, utilisez cet ordre :

1. Créer l'entrée du registre du locataire.
2. Créer la base de données et l'utilisateur de la base de données du locataire.
3. Initialiser le schéma du locataire (Bootstrap).
4. Provisionner les utilisateurs du locataire.
5. Configurer les chemins du système de fichiers du locataire.
6. Exécuter la vérification de migration.
7. Changer le routage ou le DNS après que la vérification soit passée.

Cet ordre empêche les locataires partiellement isolés de recevoir du trafic avant que l'écrivain de base de données, les utilisateurs et le système de fichiers ne soient prêts.

## Flux de gestion des clients souverains

Ultimate Multisite v2.13.0 maintient les actions de gestion des clients sur le site principal lorsque le mode souverain est activé. Un locataire peut toujours fonctionner comme une installation WordPress isolée, mais les actions liées aux clients qui dépendent de la facturation réseau, de l'adhésion ou des données de compte partagé doivent renvoyer le client au site principal au lieu d'essayer de terminer l'action à l'intérieur de l'exécution du locataire.

Le flux du site principal s'applique à :

- Les changements de panier et de plan.
- La vue d'ensemble du compte et les actions de profil client.
- Les mises à jour des adresses de facturation et les écrans de gestion des paiements.
- Les vues de la facture et de l'historique des paiements.
- Les actions de gestion du site telles que l'ajout ou la suppression d'un site.
- Le changement de modèle (Template switching).
- Le mappage de domaine et les changements de domaine principal.

Lorsque le client commence l'une de ces actions à partir d'un tenant souverain, Ultimate Multisite construit l'URL du site principal correspondant et conserve le tenant source comme cible de retour lorsque cela est sûr. Cela permet aux clients de terminer l'action gérée par rapport aux enregistrements réseau, puis de revenir au contexte du tenant sans dupliquer l'état de facturation ou d'adhésion dans la base de données souveraine.

Pour les opérateurs, la règle pratique est : gardez les pages de facturation, de compte, de paiement (checkout), de facture, de modèle (template) et de gestion du domaine disponibles sur le site principal pour les réseaux souverains. Les tableaux de bord des tenants peuvent se lier à ces pages, mais le site principal reste la source de vérité pour l'action.
