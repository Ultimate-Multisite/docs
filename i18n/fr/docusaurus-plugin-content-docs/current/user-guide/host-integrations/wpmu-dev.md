---
title: Intégration WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Intégration WPMU DEV

## Vue d'ensemble
WPMU DEV est une plateforme WordPress complète qui propose hébergement, plugins et services pour les sites WordPress. Cette intégration permet la synchronisation automatique des domaines et la gestion des certificats SSL entre Ultimate Multisite et l'hébergement WPMU DEV.

## Fonctionnalités
- Synchronisation automatique des domaines
- Gestion des certificats SSL
- Tentatives étendues de vérification des certificats SSL

## Exigences
L'intégration détecte automatiquement si vous hébergez sur WPMU DEV et utilise l'API intégrée. Aucune configuration supplémentaire n'est requise si vous hébergez sur WPMU DEV.

L'intégration vérifie la présence de la constante `WPMUDEV_HOSTING_SITE_ID`, qui est automatiquement définie lors de l'hébergement sur WPMU DEV.

## Instructions de configuration

### 1. Vérifier l'hébergement WPMU DEV
Si vous hébergez sur WPMU DEV, les constantes nécessaires devraient déjà être définies. Vérifiez que :

1. La constante `WPMUDEV_HOSTING_SITE_ID` est définie dans votre environnement
2. Vous avez un abonnement actif WPMU DEV avec accès à l'API

### 2. Activer l'intégration

1. Dans votre administration WordPress, accédez à Ultimate Multisite > Settings
2. Accédez à l'onglet "Domain Mapping"
3. Faites défiler vers le bas jusqu'à "Host Integrations"
4. Activez l'intégration WPMU DEV
5. Cliquez sur "Save Changes"

## Comment ça fonctionne

### Synchronisation des domaines
Lorsqu'un domaine est mappé dans Ultimate Multisite :

1. L'intégration utilise l'API WPMU DEV pour ajouter le domaine à votre compte d'hébergement
2. Elle ajoute également automatiquement la version www du domaine
3. WPMU DEV gère la configuration du domaine et l'émission du certificat SSL

### Gestion des certificats SSL
L'intégration est configurée pour augmenter le nombre de tentatives de vérification des certificats SSL pour l'hébergement WPMU DEV, car il peut prendre un certain temps pour que les certificats SSL soient délivrés et installés. Par défaut, elle tentera jusqu'à 10 fois la vérification du certificat SSL, contre les 5 tentatives standard.

## Notes importantes

### Suppression de domaine
Actuellement, l'API WPMU DEV ne propose pas de moyen de supprimer des domaines. Lorsqu'un mappage de domaine est supprimé dans Ultimate Multisite, le domaine restera dans votre compte d'hébergement WPMU DEV. Vous devrez le supprimer manuellement depuis le tableau de bord d'hébergement WPMU DEV si nécessaire.

### Authentification API
L'intégration utilise la clé API WPMU DEV qui est stockée dans votre base de données WordPress sous l'option `wpmudev_apikey`. Elle est automatiquement configurée lorsque vous connectez votre site à WPMU DEV.

## Dépannage

### Problèmes de connexion API
- Vérifiez que votre site est correctement connecté à WPMU DEV
- Vérifiez que l'option `wpmudev_apikey` est définie dans votre base de données WordPress
- Assurez-vous que votre abonnement WPMU DEV est actif

### Problèmes de certificat SSL
- WPMU DEV peut prendre un certain temps pour délivrer les certificats SSL (généralement 5 à 15 minutes)
- L'intégration est configurée pour vérifier jusqu'à 10 fois les certificats SSL
- Si les certificats SSL ne sont toujours pas délivrés après plusieurs tentatives, contactez le support WPMU DEV

### Domaine non ajouté
- Vérifiez les journaux d'Ultimate Multisite pour tout message d'erreur
- Vérifiez que le domaine n'est pas déjà ajouté à WPMU DEV
- Assurez-vous que votre plan d'hébergement WPMU DEV prend en charge le nombre de domaines que vous ajoutez
