---
title: Intégration Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Intégration Cloudflare

## Aperçu
Cloudflare est un réseau de diffusion de contenu (CDN) et un fournisseur de sécurité de premier plan qui aide à protéger et à accélérer les sites Web. Cette intégration permet une gestion automatique des domaines entre Ultimate Multisite et Cloudflare, notamment pour les installations multisite à sous-domaines.

## Fonctionnalités
- Création automatique de sous-domaines dans Cloudflare
- Prise en charge des sous-domaines proxy
- Gestion des enregistrements DNS
- Affichage amélioré des enregistrements DNS dans l'administration Ultimate Multisite

## Exigences
Les constantes suivantes doivent être définies dans votre fichier `wp-config.php` :

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instructions de configuration

### 1. Obtenez votre clé API Cloudflare

1. Connectez-vous à votre tableau de bord Cloudflare
2. Accédez à "Mon profil" (cliquez sur votre e‑mail dans le coin supérieur droit)
3. Sélectionnez "API Tokens" dans le menu
4. Créez un nouveau jeton API avec les autorisations suivantes :
   - Zone.Zone : Lecture
   - Zone.DNS : Modification
5. Copiez votre jeton API

### 2. Obtenez votre ID de zone

1. Dans votre tableau de bord Cloudflare, sélectionnez le domaine que vous souhaitez utiliser
2. L'ID de zone est visible dans l'onglet "Vue d'ensemble", dans la barre latérale droite sous "API"
3. Copiez l'ID de zone

### 3. Ajoutez les constantes à wp-config.php

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Activez l'intégration

1. Dans votre administration WordPress, accédez à Ultimate Multisite > Paramètres
2. Accédez à l'onglet "Domain Mapping"
3. Faites défiler vers le bas jusqu'à "Host Integrations"
4. Activez l'intégration Cloudflare
5. Cliquez sur "Save Changes"

## Comment ça fonctionne

### Gestion des sous-domaines

Lorsqu'un nouveau site est créé dans une installation multisite à sous-domaines :

1. L'intégration envoie une requête à l'API Cloudflare pour ajouter un enregistrement CNAME pour le sous-domaine
2. Le sous-domaine est configuré pour être proxyé via Cloudflare par défaut (cela peut être modifié avec des filtres)
3. Lorsqu'un site est supprimé, l'intégration supprimera le sous-domaine de Cloudflare

### Affichage des enregistrements DNS

L'intégration améliore l'affichage des enregistrements DNS dans l'administration Ultimate Multisite en :

1. Récupération des enregistrements DNS directement depuis Cloudflare
2. Affichage de savoir si les enregistrements sont proxyés ou non
3. Affichage d'informations supplémentaires sur les enregistrements DNS

## Remarques importantes

À la suite des récentes mises à jour de Cloudflare, le proxyage générique est désormais disponible pour tous les clients. Cela signifie que l'intégration Cloudflare est moins critique pour les installations multisite à sous-domaines qu'auparavant, car vous pouvez simplement configurer un enregistrement DNS générique dans Cloudflare.

## Dépannage

### Problèmes de connexion API

- Vérifiez que votre jeton API est correct et possède les autorisations nécessaires
- Vérifiez que votre ID de zone est correct
- Assurez-vous que votre compte Cloudflare possède les autorisations nécessaires

### Sous-domaine non ajouté

- Vérifiez les journaux Ultimate Multisite pour tout message d'erreur
- Vérifiez que le sous-domaine n'est pas déjà ajouté à Cloudflare
- Assurez-vous que votre plan Cloudflare prend en charge le nombre d'enregistrements DNS que vous créez

### Problèmes de proxyage

- Si vous ne souhaitez pas que les sous-domaines soient proxyés, vous pouvez utiliser le filtre `wu_cloudflare_should_proxy`
- Certaines fonctionnalités peuvent ne pas fonctionner correctement lorsqu'elles sont proxyées (par exemple, certaines fonctions d'administration WordPress)
- Envisagez d'utiliser les règles de page Cloudflare pour contourner le cache des pages d'administration
