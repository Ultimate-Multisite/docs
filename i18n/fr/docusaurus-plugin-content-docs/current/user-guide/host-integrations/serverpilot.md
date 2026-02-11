---
title: Intégration ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Intégration ServerPilot

## Aperçu
ServerPilot est un service cloud pour héberger WordPress et d'autres sites PHP sur des serveurs chez DigitalOcean, Amazon, Google ou tout autre fournisseur de serveurs. Cette intégration permet la synchronisation automatique des domaines et la gestion des certificats SSL entre Ultimate Multisite et ServerPilot.

## Fonctionnalités
- Synchronisation automatique des domaines
- Gestion des certificats SSL avec Let's Encrypt
- Renouvellement automatique du SSL

## Exigences
Les constantes suivantes doivent être définies dans votre fichier `wp-config.php` :

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instructions de configuration

### 1. Obtenez vos identifiants API ServerPilot

1. Connectez-vous à votre tableau de bord ServerPilot
2. Allez dans "Account" > "API"
3. Créez une nouvelle clé API si vous n'en avez pas déjà une
4. Copiez votre Client ID et votre clé API

### 2. Obtenez votre App ID

1. Dans votre tableau de bord ServerPilot, allez dans "Apps"
2. Sélectionnez l'application où votre multisite WordPress est hébergé
3. L'App ID est visible dans l'URL : `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Ajoutez les constantes à wp-config.php

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Activez l'intégration

1. Dans votre administration WordPress, allez dans Ultimate Multisite > Settings
2. Accédez à l'onglet "Domain Mapping"
3. Faites défiler vers le bas jusqu'à "Host Integrations"
4. Activez l'intégration ServerPilot
5. Cliquez sur "Save Changes"

## Comment ça fonctionne

### Synchronisation des domaines

Lorsqu'un domaine est mappé dans Ultimate Multisite :

1. L'intégration récupère la liste actuelle des domaines depuis ServerPilot
2. Elle ajoute le nouveau domaine à la liste (avec une version www si applicable)
3. Elle envoie la liste mise à jour à ServerPilot via l'API
4. ServerPilot met à jour la liste des domaines pour votre application

### Gestion des certificats SSL

Après la synchronisation des domaines :

1. L'intégration active automatiquement AutoSSL pour votre application
2. ServerPilot gère l'émission et l'installation du certificat SSL en utilisant Let's Encrypt
3. ServerPilot gère également le renouvellement automatique des certificats SSL

## Vérification des certificats SSL

L'intégration est configurée pour augmenter le nombre de tentatives de vérification des certificats SSL pour ServerPilot, car il peut prendre un certain temps pour que ServerPilot émette et installe les certificats SSL. Par défaut, elle tentera jusqu'à 5 fois, mais cela peut être ajusté à l'aide de filtres.

## Dépannage

### Problèmes de connexion API

- Vérifiez que votre Client ID et votre clé API sont corrects
- Vérifiez que votre App ID est correct
- Assurez-vous que votre compte ServerPilot possède les autorisations nécessaires

### Problèmes de certificat SSL

- ServerPilot exige que les domaines disposent de registres DNS valides pointant vers votre serveur avant d'émettre des certificats SSL
- Si les certificats SSL ne sont pas émis, vérifiez que vos domaines pointent correctement vers l'adresse IP de votre serveur
- Il peut prendre un certain temps pour que ServerPilot émette et installe les certificats SSL (généralement 5‑15 minutes)

### Domaine non ajouté

- Vérifiez les journaux d'Ultimate Multisite pour tout message d'erreur
- Vérifiez que le domaine n'est pas déjà ajouté à ServerPilot
- Assurez-vous que votre plan ServerPilot prend en charge le nombre de domaines que vous ajoutez

### Suppression de domaine

- Actuellement, l'API ServerPilot ne fournit pas de moyen de supprimer des domaines individuels
- Lorsqu'un mappage de domaine est supprimé dans Ultimate Multisite, l'intégration mettra à jour la liste des domaines dans ServerPilot pour exclure le domaine supprimé
