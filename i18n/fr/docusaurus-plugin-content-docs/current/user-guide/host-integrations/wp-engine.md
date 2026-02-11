---
title: Intégration WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Intégration

## Vue d'ensemble
WP Engine est une plateforme d'hébergement WordPress gérée premium qui offre des performances optimisées, une sécurité et une évolutivité pour les sites WordPress. Cette intégration permet la synchronisation automatique des domaines entre Ultimate Multisite et WP Engine.

## Fonctionnalités
- Synchronisation automatique des domaines
- Support des sous-domaines pour les installations multisite
- Intégration transparente avec les systèmes existants de WP Engine

## Exigences
L'intégration détecte automatiquement si vous hébergez sur WP Engine et utilise l'API intégrée de WP Engine. Aucune configuration supplémentaire n'est requise si le plugin WP Engine est actif et correctement configuré.

Cependant, si vous devez configurer manuellement l'intégration, vous pouvez définir l'une de ces constantes dans votre fichier `wp-config.php` :

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Instructions de configuration

### 1. Vérifier le plugin WP Engine
Si vous hébergez sur WP Engine, le plugin WP Engine devrait déjà être installé et activé. Vérifiez que :

1. Le plugin WP Engine est actif
2. Le fichier `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` existe

### 2. Activer l'intégration
1. Dans votre administration WordPress, allez dans Ultimate Multisite > Paramètres
2. Accédez à l'onglet « Cartographie des domaines »
3. Faites défiler vers le bas jusqu'à « Intégrations d'hébergement »
4. Activez l'intégration WP Engine
5. Cliquez sur « Enregistrer les modifications »

## Comment ça fonctionne

### Synchronisation des domaines
Lorsqu'un domaine est cartographié dans Ultimate Multisite :

1. L'intégration utilise l'API WP Engine pour ajouter le domaine à votre installation WP Engine
2. WP Engine gère la configuration du domaine et l'émission du certificat SSL
3. Lorsqu'une cartographie de domaine est supprimée, l'intégration supprimera le domaine de WP Engine

### Support des sous-domaines
Pour les installations multisite à sous-domaines :

1. L'intégration ajoute chaque sous-domaine à WP Engine lorsqu'un nouveau site est créé
2. WP Engine gère la configuration du sous-domaine
3. Lorsqu'un site est supprimé, l'intégration supprimera le sous-domaine de WP Engine

## Notes importantes

### Domaines génériques
Pour les installations multisite à sous-domaines, il est recommandé de contacter le support WP Engine pour demander une configuration de domaine générique. Cela permet à tous les sous-domaines de fonctionner automatiquement sans avoir besoin d'ajouter chacun d'eux individuellement.

### Certificats SSL
WP Engine gère automatiquement l'émission et le renouvellement des certificats SSL pour tous les domaines ajoutés via cette intégration. Aucune configuration supplémentaire n'est requise.

## Dépannage

### Problèmes de connexion API
- Vérifiez que le plugin WP Engine est actif et correctement configuré
- Si vous avez défini manuellement la clé API, vérifiez qu'elle est correcte
- Contactez le support WP Engine si vous rencontrez des problèmes avec l'API

### Domaine non ajouté
- Vérifiez les journaux d'Ultimate Multisite pour tout message d'erreur
- Vérifiez que le domaine n'est pas déjà ajouté à WP Engine
- Assurez-vous que votre plan WP Engine prend en charge le nombre de domaines que vous ajoutez

### Problèmes de sous-domaine
- Si les sous-domaines ne fonctionnent pas, contactez le support WP Engine pour demander une configuration de domaine générique
- Vérifiez que vos paramètres DNS sont correctement configurés pour le domaine principal et les sous-domaines
