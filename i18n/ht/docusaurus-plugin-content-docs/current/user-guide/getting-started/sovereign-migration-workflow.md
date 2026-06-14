---
title: Flèch Migrasyon Souverain
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow de Migration Souveraine

Ultimate Multisite: Multi-Tenancy 1.2.0 ajoute des portes de vérification de migration pour déplacer un sous-site standard vers une infrastructure de locataire souverain.

## Avant de commencer

Confirmez que vous avez :

- Une sauvegarde actuelle du site source.
- L'addon Multi-Tenancy actif.
- La base de données, le système de fichiers racine et le domaine du locataire de destination prêts.
- Un lien d'hôte de base de données qui correspond à l'environnement de destination.
- L'accès pour exécuter des commandes WP-CLI pour le réseau.

## Workflow recommandé

1. Préparez la base de données et le système de fichiers du locataire de destination.
2. Enregistrez ou mettez à jour les paramètres d'isolation du locataire.
3. Exécutez la migration du locataire.
4. Provisionnez ou vérifiez les utilisateurs du locataire.
5. Videz les tâches de migration asynchrones.
6. Exécutez la vérification de migration souveraine.
7. Visitez le locataire avec SSO.
8. Changez DNS ou routage seulement après que la vérification soit passée.

## Portes de vérification

Le workflow de vérification contrôle la migration sous plusieurs angles :

- Le schéma du locataire existe et peut être écrit par l'écrivain de base de données du locataire.
- L'hôte de base de données configuré a des autorisations valides.
- Les utilisateurs du locataire sont présents et correspondent au nombre d'utilisateurs d'installation souveraine attendu.
- La file de mise en attente asynchrone (async push queue) peut se vider avec succès.
- Les chemins de données côté réseau hérités ne sont plus nécessaires pour le locataire souverain.

Considérez les échecs de vérification comme des blocages avant le lancement. Corrigez le problème de base de données, d'utilisateur, de file ou de routage signalé, puis réexécutez la vérification avant d'exposer le locataire aux clients.

## Première visite en production

Après que la vérification soit passée, utilisez **Visit (SSO)** depuis l'écran de gestion du site pour la première visite administrateur. Cela confirme le routage du locataire, la gestion des jetons SSO, l'ancrage d'origine et le provisionnement des utilisateurs côté locataire en une seule étape contrôlée.
