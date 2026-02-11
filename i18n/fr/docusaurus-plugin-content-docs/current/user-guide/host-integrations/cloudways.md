---
title: Intégration Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Intégration Cloudways

## Aperçu
Cloudways est une plateforme d'hébergement cloud gérée qui vous permet de déployer des sites WordPress sur divers fournisseurs cloud tels que DigitalOcean, AWS, Google Cloud, et plus encore. Cette intégration permet la synchronisation automatique des domaines et la gestion des certificats SSL entre Ultimate Multisite et Cloudways.

## Fonctionnalités
- Synchronisation automatique des domaines
- Gestion des certificats SSL
- Prise en charge des domaines supplémentaires
- Validation DNS pour les certificats SSL

## Exigences
Les constantes suivantes doivent être définies dans votre fichier `wp-config.php` :

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Optionnellement, vous pouvez également définir :

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Instructions de configuration

### 1. Obtenez vos identifiants API Cloudways

1. Connectez-vous à votre tableau de bord Cloudways
2. Accédez à "Account" > "API Keys"
3. Générez une clé API si vous n'en avez pas déjà une
4. Copiez votre e‑mail et votre clé API

### 2. Obtenez vos identifiants de serveur et d'application

1. Dans votre tableau de bord Cloudways, accédez à "Servers"
2. Sélectionnez le serveur où votre multisite WordPress est hébergé
3. L'ID du serveur est visible dans l'URL : `https://platform.cloudways.com/server/{SERVER_ID}`
4. Accédez à "Applications" et sélectionnez votre application WordPress
5. L'ID de l'application est visible dans l'URL : `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Ajoutez les constantes à wp-config.php

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Si vous avez des domaines supplémentaires qui doivent toujours être inclus :

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Activez l'intégration

1. Dans votre administration WordPress, accédez à Ultimate Multisite > Settings
2. Accédez à l'onglet "Domain Mapping"
3. Faites défiler vers le bas jusqu'à "Host Integrations"
4. Activez l'intégration Cloudways
5. Cliquez sur "Save Changes"

## Comment ça fonctionne

### Synchronisation des domaines

Lorsqu'un domaine est mappé dans Ultimate Multisite :

1. L'intégration récupère tous les domaines actuellement mappés
2. Elle ajoute le nouveau domaine à la liste (avec une version www si applicable)
3. Elle envoie la liste complète à Cloudways via l'API
4. Cloudways met à jour les alias de domaine pour votre application

Remarque : L'API Cloudways exige l'envoi de la liste complète des domaines à chaque fois, pas seulement l'ajout ou la suppression de domaines individuels.

### Gestion des certificats SSL

Après la synchronisation des domaines :

1. L'intégration vérifie quels domaines ont des enregistrements DNS valides pointant vers votre serveur
2. Elle envoie une requête à Cloudways pour installer les certificats SSL Let's Encrypt pour ces domaines
3. Cloudways gère l'émission et l'installation du certificat SSL

## Domaines supplémentaires

La constante `WU_CLOUDWAYS_EXTRA_DOMAINS` vous permet de spécifier des domaines supplémentaires qui doivent toujours être inclus lors de la synchronisation avec Cloudways. Cela est utile pour :

- Domaines qui ne sont pas gérés par Ultimate Multisite
- Domaines génériques (par ex., `*.example.com`)
- Domaines de développement ou de mise en scène

## Dépannage

### Problèmes de connexion API

- Vérifiez que votre e‑mail et votre clé API sont corrects
- Vérifiez que vos identifiants de serveur et d'application sont corrects
- Assurez-vous que votre compte Cloudways dispose des autorisations nécessaires

### Problèmes de certificat SSL

- Cloudways exige que les domaines aient des enregistrements DNS valides pointant vers votre serveur avant d'émettre des certificats SSL
- L'intégration valide les enregistrements DNS avant de demander des certificats SSL
- Si les certificats SSL ne sont pas délivrés, vérifiez que vos domaines pointent correctement vers l'adresse IP de votre serveur

### Domaine non ajouté

- Vérifiez les journaux d'Ultimate Multisite pour tout message d'erreur
- Vérifiez que le domaine n'est pas déjà ajouté à Cloudways
- Assurez-vous que votre plan Cloudways prend en charge le nombre de domaines que vous ajoutez
