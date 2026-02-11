---
title: Intégration cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Intégration

## Aperçu
cPanel est l'un des panneaux de contrôle d'hébergement web les plus populaires utilisés par de nombreux fournisseurs d'hébergement partagé et dédié. Cette intégration permet la synchronisation automatique des domaines entre Ultimate Multisite et cPanel, vous permettant d'ajouter automatiquement des alias de domaine et des sous-domaines à votre compte cPanel.

## Fonctionnalités
- Création automatique de domaine supplémentaire dans cPanel
- Création automatique de sous-domaine dans cPanel (pour les installations multisite de sous-domaine)
- Suppression du domaine lorsqu'une correspondance est supprimée

## Exigences
Les constantes suivantes doivent être définies dans votre fichier `wp-config.php` :

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optionnellement, vous pouvez également définir :

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Instructions de configuration

### 1. Obtenez vos identifiants cPanel

1. Obtenez votre nom d'utilisateur et votre mot de passe cPanel auprès de votre fournisseur d'hébergement
2. Déterminez votre hôte cPanel (généralement `cpanel.yourdomain.com` ou `yourdomain.com:2083`)

### 2. Ajoutez les constantes à wp-config.php

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Optionnellement, vous pouvez personnaliser le port et le répertoire racine :

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Activez l'intégration

1. Dans votre administration WordPress, accédez à Ultimate Multisite > Settings
2. Accédez à l'onglet "Domain Mapping"
3. Faites défiler vers le bas jusqu'à "Host Integrations"
4. Activez l'intégration cPanel
5. Cliquez sur "Save Changes"

## Comment ça fonctionne

### Domaines supplémentaires

Lorsqu'un domaine est mappé dans Ultimate Multisite :

1. L'intégration envoie une requête à l'API de cPanel pour ajouter le domaine en tant que domaine supplémentaire
2. Le domaine est configuré pour pointer vers votre répertoire racine
3. Lorsqu'une correspondance de domaine est supprimée, l'intégration supprimera le domaine supplémentaire de cPanel

### Sous-domaines

Pour les installations multisite de sous-domaine, lorsqu'un nouveau site est créé :

1. L'intégration extrait la partie sous-domaine du domaine complet
2. Elle envoie une requête à l'API de cPanel pour ajouter le sous-domaine
3. Le sous-domaine est configuré pour pointer vers votre répertoire racine

## Notes importantes

- L'intégration utilise l'API2 de cPanel pour communiquer avec votre compte cPanel
- Votre compte cPanel doit disposer des autorisations pour ajouter des domaines supplémentaires et des sous-domaines
- Certains fournisseurs d'hébergement peuvent limiter le nombre de domaines supplémentaires ou de sous-domaines que vous pouvez créer
- L'intégration ne gère pas la configuration DNS ; vous devez toujours pointer vos domaines vers l'adresse IP de votre serveur

## Dépannage

### Problèmes de connexion API

- Vérifiez que votre nom d'utilisateur et votre mot de passe cPanel sont corrects
- Vérifiez que votre hôte cPanel est correct et accessible
- Assurez-vous que votre compte cPanel dispose des autorisations nécessaires
- Essayez d'utiliser l'URL complète pour l'hôte (par exemple, `https://cpanel.yourdomain.com`)

### Domaine non ajouté

- Vérifiez les journaux d'Ultimate Multisite pour tout message d'erreur
- Vérifiez que le domaine n'est pas déjà ajouté à cPanel
- Assurez-vous que votre compte cPanel n'a pas atteint sa limite pour les domaines supplémentaires ou les sous-domaines

### Problèmes de certificat SSL

- L'intégration ne gère pas la délivrance de certificats SSL
- Vous devrez utiliser les outils SSL/TLS de cPanel ou la fonction AutoSSL pour délivrer des certificats SSL pour vos domaines
- Alternativement, vous pouvez utiliser un service comme Let’s Encrypt avec AutoSSL de cPanel
