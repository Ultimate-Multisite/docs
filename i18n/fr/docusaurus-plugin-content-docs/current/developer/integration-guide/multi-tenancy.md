---
title: Intégration multi-locataire
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Intégration multi-tenant

Ultimate Multisite : Multi-Tenancy 1.2.0 modifie plusieurs points de contact d’intégration pour les locataires souverains, la vérification des migrations et l’automatisation du cycle de vie des locataires.

## Flux d’amorçage des locataires {#tenant-bootstrap-flow}

Les intégrations qui créent ou modifient des locataires doivent suivre cet ordre :

1. Résoudre l’enregistrement du registre des locataires et le modèle d’isolation.
2. Créer ou vérifier le rédacteur de base de données du locataire.
3. Amorcer le schéma du locataire.
4. Provisionner les utilisateurs du locataire.
5. Enregistrer le routage du locataire et les chemins du système de fichiers.
6. Exécuter la vérification de migration avant d’exposer le locataire.

Ne supposez pas qu’un locataire souverain peut réutiliser la connexion à la base de données du réseau. Utilisez le registre des locataires et les abstractions de rédacteur fournies par le module complémentaire.

## Hooks SSO et REST {#sso-and-rest-hooks}

La connexion automatique sans état des locataires utilise des tokens à courte durée de vie avec une revendication d’objectif, une protection contre la relecture JTI, un plafond d’expiration et un verrouillage de l’origine. Les intégrations qui ajoutent des boutons de connexion ou des liens de gestion à distance doivent générer les visites des locataires via le flux SSO pris en charge au lieu de construire directement des URL de connexion de locataire.

Les événements d’audit API côté réseau et les résumés quotidiens sont disponibles pour les passerelles de locataires souverains. Utilisez ces journaux lors du débogage de systèmes externes qui appellent des endpoints du cycle de vie des locataires.

## URL d’actions client souveraines {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 redirige les actions client des locataires souverains vers le site principal pour les flux de compte, de paiement, de facturation, de facture, de site, de changement de modèle et de mappage de domaine. Les intégrations qui affichent des liens de gestion côté locataire doivent faire pointer ces actions vers le panneau client du site principal et inclure une cible de retour validée lorsque l’utilisateur doit pouvoir revenir au locataire après avoir terminé l’action.

Utilisez le wrapper SSO principal pour les liens de gestion inter-domaines :

```php
$url = wu_with_sso($main_site_customer_url);
```

L’URL générée reste filtrable via `wu_sso_url`, qui reçoit l’URL SSO, l’utilisateur actuel, l’ID du site cible et le contexte de redirection. Les modules complémentaires peuvent utiliser ce filtre pour ajouter un contexte propre au fournisseur ou pour remplacer l’URL du courtier tout en préservant la validation des tokens d’Ultimate Multisite.

Ne dupliquez pas l’état d’abonnement, de facture, d’adresse de facturation, de modèle ou de gestion de domaine dans le locataire souverain. Traitez le tableau de bord du locataire comme le lanceur et le panneau client du site principal comme le système de référence pour les actions gérées.

## Vérification de migration {#migration-verification}

Après qu’une migration ou une intégration de cycle de vie a modifié les données du locataire, exécutez les barrières de vérification :

- `wp tenant verify-no-legacy --site=<site-id>` confirme que le locataire ne dépend plus des chemins hérités côté réseau.
- `wp tenant verify-sovereign-push --site=<site-id>` confirme que les tâches de push souverain peuvent traiter et se vider.

Les intégrations doivent traiter un échec de vérification comme un blocage de déploiement et éviter de marquer un locataire comme actif tant que l’échec n’est pas résolu.

## Suppression de locataire {#tenant-deletion}

Les flux de suppression doivent appeler le chemin de démontage du module complémentaire afin que les identifiants de base de données du locataire soient nettoyés. Les intégrations externes peuvent supprimer les ressources du fournisseur après la réussite du démontage, mais ne doivent pas supprimer les bases de données ou dossiers de l’hôte tant que la vérification ou les tâches de push asynchrones sont encore en cours d’exécution.

## Routeur de base de données obsolète {#deprecated-database-router}

L’ancien `Database_Router` a été remplacé par un stub d’obsolescence. Les nouvelles intégrations doivent résoudre les locataires via le routeur de site actuel et les APIs de registre des locataires plutôt que de dépendre de l’ancienne classe de routeur.
