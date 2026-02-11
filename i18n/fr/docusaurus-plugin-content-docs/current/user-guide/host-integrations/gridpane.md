---
title: Intégration GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Intégration GridPane

## Aperçu
GridPane est un panneau de contrôle d'hébergement WordPress spécialisé conçu pour les professionnels WordPress sérieux. Cette intégration permet la synchronisation automatique des domaines et la gestion des certificats SSL entre Ultimate Multisite et GridPane.

## Fonctionnalités
- Synchronisation automatique des domaines
- Gestion des certificats SSL
- Configuration automatique de la constante SUNRISE

## Exigences
Les constantes suivantes doivent être définies dans votre fichier `wp-config.php` :

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Instructions de configuration

### 1. Obtenez vos identifiants API GridPane
1. Connectez-vous à votre tableau de bord GridPane
2. Allez dans "Settings" > "API"
3. Générez une clé API si vous n'en avez pas déjà une
4. Copiez votre clé API

### 2. Obtenez vos identifiants de serveur et de site
1. Dans votre tableau de bord GridPane, allez dans "Servers"
2. Sélectionnez le serveur où votre multisite WordPress est hébergé
3. Notez l'ID du serveur (visible dans l'URL ou sur la page de détails du serveur)
4. Allez dans "Sites" et sélectionnez votre site WordPress
5. Notez l'ID du site (visible dans l'URL ou sur la page de détails du site)

### 3. Ajoutez les constantes à wp-config.php
Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Activez l'intégration
1. Dans votre administration WordPress, allez dans Ultimate Multisite > Settings
2. Accédez à l'onglet "Domain Mapping"
3. Faites défiler vers le bas jusqu'à "Host Integrations"
4. Activez l'intégration GridPane
5. Cliquez sur "Save Changes"

## Comment ça fonctionne
Lorsqu'un domaine est mappé dans Ultimate Multisite :

1. L'intégration envoie une requête à l'API GridPane pour ajouter le domaine à votre site
2. GridPane gère automatiquement la délivrance des certificats SSL
3. Lorsqu'un mappage de domaine est supprimé, l'intégration supprimera le domaine de GridPane

L'intégration gère également automatiquement la constante SUNRISE dans votre fichier wp-config.php, ce qui est nécessaire pour que le mappage de domaine fonctionne correctement.

## Gestion de la constante SUNRISE
Une caractéristique unique de l'intégration GridPane est qu'elle rétablit automatiquement la constante SUNRISE dans wp-config.php afin d'éviter les conflits avec le propre système de mappage de domaine de GridPane. Cela garantit que les deux systèmes peuvent fonctionner ensemble sans problèmes.

## Dépannage

### Problèmes de connexion API
- Vérifiez que votre clé API est correcte
- Vérifiez que vos identifiants de serveur et de site sont corrects
- Assurez-vous que votre compte GridPane dispose des autorisations nécessaires

### Problèmes de certificat SSL
- GridPane peut prendre un certain temps pour délivrer les certificats SSL
- Vérifiez que vos domaines pointent correctement vers l'adresse IP de votre serveur
- Vérifiez les paramètres SSL GridPane pour votre site

### Domaine non ajouté
- Vérifiez les journaux Ultimate Multisite pour tout message d'erreur
- Vérifiez que le domaine n'est pas déjà ajouté à GridPane
- Assurez-vous que les enregistrements DNS de votre domaine sont correctement configurés
