---
title: Intégration Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Intégration

## Aperçu
Closte est une plateforme d'hébergement WordPress gérée construite sur l'infrastructure Google Cloud.

Cette intégration permet la synchronisation automatique des domaines et la gestion des certificats SSL entre Ultimate Multisite et Closte.

## Fonctionnalités
- Synchronisation automatique des domaines
- Gestion des certificats SSL
- Prise en charge des domaines génériques (wildcard)
- Pas de configuration requise si vous utilisez Closte

## Exigences
La constante suivante doit être définie dans votre fichier `wp-config.php` si vous utilisez Closte :

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Cette constante est généralement déjà définie si vous hébergez sur Closte.

## Instructions de configuration

### 1. Vérifiez votre clé API Closte
Si vous hébergez sur Closte, la constante `CLOSTE_CLIENT_API_KEY` devrait déjà être définie dans votre fichier `wp-config.php`. Vous pouvez vérifier cela en consultant votre fichier `wp-config.php`.

### 2. Activer l'intégration
1. Dans votre administration WordPress, allez dans Ultimate Multisite > Settings
2. Accédez à l'onglet « Domain Mapping »
3. Faites défiler vers le bas jusqu'à « Host Integrations »
4. Activez l'intégration Closte
5. Cliquez sur « Enregistrer les modifications »

## Comment ça fonctionne
Lorsqu'un domaine est mappé dans Ultimate Multisite :

1. L'intégration envoie une requête à l'API de Closte pour ajouter le domaine à votre application
2. Closte gère automatiquement la délivrance du certificat SSL
3. Lorsqu'un mappage de domaine est supprimé, l'intégration supprimera le domaine de Closte

L'intégration fonctionne également avec le paramètre d'intervalle de vérification DNS dans Ultimate Multisite, vous permettant de configurer la fréquence à laquelle le système vérifie la propagation DNS et la délivrance du certificat SSL.

## Création d'enregistrement de domaine
Cette intégration garantit qu'un enregistrement de domaine est automatiquement créé lorsqu'un site est créé ou dupliqué. Cela est particulièrement important pour l'intégration Closte, car la création de l'enregistrement de domaine déclenche l'API de Closte pour créer le domaine et le certificat SSL.

## Dépannage

### Problèmes de connexion API
- Vérifiez que votre clé API Closte est correcte
- Assurez-vous que votre compte Closte dispose des autorisations nécessaires

### Problèmes de certificat SSL
- Closte peut prendre un certain temps pour délivrer les certificats SSL (généralement 5 à 10 minutes)
- Vérifiez que vos domaines pointent correctement vers l'adresse IP de votre serveur Closte
- Vérifiez les enregistrements DNS de votre domaine pour vous assurer qu'ils sont correctement configurés

### Domaine non ajouté
- Vérifiez les journaux d'Ultimate Multisite pour tout message d'erreur
- Vérifiez que le domaine n'est pas déjà ajouté à Closte
- Assurez-vous que les enregistrements DNS de votre domaine sont correctement configurés

### Intervalle de vérification DNS
- Si les certificats SSL prennent trop de temps à être délivrés, vous pouvez ajuster l'intervalle de vérification DNS dans les paramètres de Domain Mapping
- L'intervalle par défaut est de 300 secondes (5 minutes), mais vous pouvez le régler aussi bas que 10 secondes pour des vérifications plus rapides lors des tests
