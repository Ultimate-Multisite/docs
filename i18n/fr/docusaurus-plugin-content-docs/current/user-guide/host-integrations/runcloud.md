---
title: Intégration RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Intégration RunCloud

## Aperçu
RunCloud est une plateforme de gestion de serveurs basée sur le cloud qui vous permet de déployer et gérer facilement des applications Web sur vos propres serveurs cloud. Cette intégration permet la synchronisation automatique des domaines et la gestion des certificats SSL entre Ultimate Multisite et RunCloud.

## Fonctionnalités
- Synchronisation automatique des domaines
- Gestion des certificats SSL
- Suppression du domaine lorsqu'une correspondance est supprimée

## Exigences
Les constantes suivantes doivent être définies dans votre fichier `wp-config.php` :

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Instructions de configuration

### 1. Obtenez vos identifiants API RunCloud

1. Connectez-vous à votre tableau de bord RunCloud
2. Accédez à "Profil d'utilisateur" (cliquez sur votre photo de profil dans le coin supérieur droit)
3. Sélectionnez "API" dans le menu
4. Cliquez sur "Générer une clé API" si vous n'en avez pas déjà une
5. Copiez votre API Key et votre API Secret

### 2. Obtenez vos identifiants de serveur et d'application

1. Dans votre tableau de bord RunCloud, accédez à "Servers"
2. Sélectionnez le serveur où votre multisite WordPress est hébergé
3. L'ID du serveur est visible dans l'URL : `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Accédez à "Web Applications" et sélectionnez votre application WordPress
5. L'ID de l'application est visible dans l'URL : `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Ajoutez les constantes à wp-config.php

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Activez l'intégration

1. Dans votre administration WordPress, accédez à Ultimate Multisite > Settings
2. Accédez à l'onglet "Cartographie de domaine"
3. Faites défiler vers le bas jusqu'à "Intégrations d'hébergement"
4. Activez l'intégration RunCloud
5. Cliquez sur "Enregistrer les modifications"

## Comment ça fonctionne

Lorsqu'un domaine est mappé dans Ultimate Multisite :

1. L'intégration envoie une requête à l'API RunCloud pour ajouter le domaine à votre application
2. Si le domaine est ajouté avec succès, l'intégration redéploiera également les certificats SSL
3. Lorsqu'une correspondance de domaine est supprimée, l'intégration supprimera le domaine de RunCloud

Pour les installations de sous-domaines, l'intégration gérera automatiquement la création de sous-domaines dans RunCloud lorsqu'un nouveau site est ajouté à votre réseau.

## Dépannage

### Problèmes de connexion API

- Vérifiez que vos identifiants API sont corrects
- Vérifiez que vos identifiants de serveur et d'application sont corrects
- Assurez-vous que votre compte RunCloud dispose des autorisations nécessaires

### Problèmes de certificat SSL

- RunCloud peut prendre un certain temps pour délivrer les certificats SSL
- Vérifiez que vos domaines pointent correctement vers l'adresse IP de votre serveur
- Vérifiez les paramètres SSL RunCloud pour votre application

### Domaine non ajouté

- Vérifiez les journaux Ultimate Multisite pour tout message d'erreur
- Vérifiez que le domaine n'est pas déjà ajouté à RunCloud
- Assurez-vous que votre plan RunCloud prend en charge plusieurs domaines
