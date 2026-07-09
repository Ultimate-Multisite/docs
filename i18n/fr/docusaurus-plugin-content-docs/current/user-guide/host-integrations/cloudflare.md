---
title: Intégration Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Intégration Cloudflare

## Vue d’ensemble
Cloudflare est un fournisseur de réseau de diffusion de contenu (CDN) et de sécurité de premier plan qui aide à protéger et accélérer les sites web. Cette intégration permet une gestion automatique des domaines entre Ultimate Multisite et Cloudflare, en particulier pour les installations multisite en sous-domaines.

## Fonctionnalités
- Création automatique de sous-domaines dans Cloudflare
- Prise en charge des sous-domaines proxifiés
- Gestion des enregistrements DNS
- Affichage amélioré des enregistrements DNS dans l’administration Ultimate Multisite

## Exigences
Les constantes suivantes doivent être définies dans votre fichier `wp-config.php` :

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instructions de configuration

### 1. Obtenir votre clé API Cloudflare

1. Connectez-vous à votre Dashboard Cloudflare
2. Allez dans « Mon profil » (cliquez sur votre e-mail dans le coin supérieur droit)
3. Sélectionnez « Jetons API » dans le menu
4. Créez un nouveau jeton API avec les autorisations suivantes :
   - Zone.Zone : Lecture
   - Zone.DNS : Modification
5. Copiez votre jeton API

### 2. Obtenir votre ID de zone

1. Dans votre Dashboard Cloudflare, sélectionnez le domaine que vous souhaitez utiliser
2. L’ID de zone est visible dans l’onglet « Vue d’ensemble », dans la barre latérale droite sous « API »
3. Copiez l’ID de zone

### 3. Ajouter les constantes à wp-config.php

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Activer l’intégration

1. Dans votre administration WordPress, allez dans Ultimate Multisite > Réglages
2. Accédez à l’onglet « Mappage de domaine »
3. Faites défiler jusqu’à « Intégrations d’hôte »
4. Activez l’intégration Cloudflare
5. Cliquez sur « Enregistrer les modifications »

## Fonctionnement

### Gestion des sous-domaines

Lorsqu’un nouveau site est créé dans une installation multisite en sous-domaines :

1. L’intégration envoie une requête à l’API de Cloudflare pour ajouter un enregistrement CNAME pour le sous-domaine
2. Le sous-domaine est configuré pour être proxifié via Cloudflare par défaut (cela peut être modifié avec des filtres)
3. Lorsqu’un site est supprimé, l’intégration retirera le sous-domaine de Cloudflare

### Affichage des enregistrements DNS

L’intégration améliore l’affichage des enregistrements DNS dans l’administration Ultimate Multisite en :

1. Récupérant les enregistrements DNS directement depuis Cloudflare
2. Affichant si les enregistrements sont proxifiés ou non
3. Affichant des informations supplémentaires sur les enregistrements DNS

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (précédemment appelé « Cloudflare for SaaS ») est une fonctionnalité Cloudflare qui permet à vos clients d’utiliser leurs propres domaines avec SSL sur votre réseau multisite. C’est l’approche recommandée pour les installations multisite avec mappage de domaine qui utilisent Cloudflare, car Cloudflare gère automatiquement l’émission et le renouvellement du certificat SSL pour chaque domaine personnalisé.

### En quoi cela diffère de l’intégration Cloudflare standard

| | Intégration standard | Cloudflare Custom Hostnames |
|---|---|---|
| **Objectif** | Crée automatiquement des enregistrements DNS pour les sous-domaines | Permet les domaines personnalisés (mappés) avec SSL géré par Cloudflare |
| **Idéal pour** | Multisite en sous-domaines | Multisite avec mappage de domaine |
| **SSL** | Géré séparément | Géré automatiquement par Cloudflare |

### Configurer Cloudflare Custom Hostnames

1. Dans votre Dashboard Cloudflare, ouvrez la zone de votre domaine principal.
2. Allez dans **SSL/TLS > Custom Hostnames**.
3. Ajoutez une origine de secours pointant vers l’IP ou le nom d’hôte de votre serveur.
4. Pour chaque domaine client mappé dans Ultimate Multisite, ajoutez une entrée Custom Hostname dans Cloudflare. Vous pouvez automatiser cette étape en utilisant l’API Cloudflare.
5. Cloudflare émet et renouvelle automatiquement les certificats TLS pour chaque nom d’hôte personnalisé une fois que le DNS du client pointe vers votre réseau.

Pour la référence complète de l’API, consultez la [documentation Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Mise à jour terminologique
Depuis Ultimate Multisite v2.6.1, cette fonctionnalité est appelée **Cloudflare Custom Hostnames** dans tous les réglages et libellés du plugin. Les versions précédentes utilisaient le nom « Cloudflare for SaaS », qui est le nom du produit Cloudflare sous-jacent.
:::

## Notes importantes

Depuis les récentes mises à jour de Cloudflare, le proxying avec joker est désormais disponible pour tous les clients. Cela signifie que l’intégration DNS Cloudflare standard est moins critique pour les installations multisite en sous-domaines qu’elle ne l’était auparavant, car vous pouvez simplement configurer un enregistrement DNS joker dans Cloudflare.

## Dépannage

### Problèmes de connexion API
- Vérifiez que votre jeton API est correct et dispose des autorisations nécessaires
- Vérifiez que votre ID de zone est correct
- Assurez-vous que votre Account Cloudflare dispose des autorisations nécessaires

### Sous-domaine non ajouté
- Consultez les journaux Ultimate Multisite pour tout message d’erreur
- Vérifiez que le sous-domaine n’est pas déjà ajouté à Cloudflare
- Assurez-vous que votre plan Cloudflare prend en charge le nombre d’enregistrements DNS que vous créez

### Problèmes de proxying
- Si vous ne voulez pas que les sous-domaines soient proxifiés, vous pouvez utiliser le filtre `wu_cloudflare_should_proxy`
- Certaines fonctionnalités peuvent ne pas fonctionner correctement lorsqu’elles sont proxifiées (par exemple, certaines fonctions d’administration WordPress)
- Envisagez d’utiliser les Page Rules de Cloudflare pour contourner le cache des pages d’administration
