---
title: Flux de migration souveraine
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Flux de migration souveraine

Ultimate Multisite : Multi-Tenancy 1.2.0 ajoute des portes de vérification de migration pour déplacer un sous-site standard vers une infrastructure de locataire souverain.

## Avant de commencer

Vérifiez que vous avez :

- Une sauvegarde actuelle du site source.
- L'addon Multi-Tenancy activé.
- La base de données, le répertoire racine du système de fichiers et le domaine du tenant de destination prêts.
- Un lien d'hôte de base de données qui correspond à l'environnement de destination.
- Un accès pour exécuter des commandes WP-CLI pour le réseau.

## Flux de travail recommandé

1. Préparez la base de données et le système de fichiers du tenant de destination.
2. Enregistrez ou mettez à jour les paramètres d'isolation du tenant.
3. Exécutez la migration du tenant.
4. Provisionnez ou vérifiez les utilisateurs du tenant.
5. Videz les tâches de migration asynchrones.
6. Exécutez la vérification de migration souveraine.
7. Visitez le tenant avec SSO.
8. Changez les DNS ou le routage uniquement après que la vérification soit passée.

## Portes de vérification

Le flux de travail de vérification examine la migration sous plusieurs angles :

- Le schéma du tenant existe et peut être écrit par l'écrivain de base de données du tenant.
- L'hôte de base de données configuré dispose de droits valides.
- Les utilisateurs du tenant sont présents et correspondent au nombre d'utilisateurs d'installation souveraine attendu.
- La file de mise en attente (queue) de poussée asynchrone peut être vidée avec succès.
- Les chemins de données côté réseau hérités ne sont plus nécessaires pour le tenant souverain.

Considérez les échecs de vérification comme des blocages avant le lancement. Corrigez le problème de base de données, d'utilisateur, de file ou de routage signalé, puis réexécutez la vérification avant d'exposer le tenant aux clients.

## Première visite en production

Après que la vérification soit passée, utilisez **Visiter (SSO)** depuis l'écran de gestion du site pour la première visite administrateur. Cela confirme le routage du tenant, la gestion des jetons SSO, le *origin pinning* et le provisionnement des utilisateurs côté tenant en une seule étape contrôlée.
