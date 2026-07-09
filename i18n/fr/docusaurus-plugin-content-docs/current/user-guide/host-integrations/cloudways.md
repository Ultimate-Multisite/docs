---
title: Intégration Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Intégration Cloudways

## Vue d’ensemble
Cloudways est une plateforme d’hébergement cloud infogéré qui vous permet de déployer des sites WordPress chez divers fournisseurs cloud comme DigitalOcean, AWS, Google Cloud, et d’autres. Cette intégration permet la synchronisation automatique des domaines et la gestion des certificats SSL entre Ultimate Multisite et Cloudways.

## Fonctionnalités
- Synchronisation automatique des domaines
- Gestion des certificats SSL
- Prise en charge des domaines supplémentaires
- Validation DNS pour les certificats SSL

## Prérequis
Les constantes suivantes doivent être définies dans votre fichier `wp-config.php` :

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Facultativement, vous pouvez aussi définir :

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Instructions de configuration

### 1. Obtenir vos identifiants API Cloudways

1. Connectez-vous à votre Dashboard Cloudways
2. Allez dans "Account" > "Clés API"
3. Générez une clé API si vous n’en avez pas déjà une
4. Copiez votre e-mail et votre clé API

### 2. Obtenir vos identifiants de serveur et d’application

1. Dans votre Dashboard Cloudways, allez dans "Serveurs"
2. Sélectionnez le serveur où votre multisite WordPress est hébergé
3. L’identifiant du serveur est visible dans l’URL : `https://platform.cloudways.com/server/{SERVER_ID}`
4. Allez dans "Applications" et sélectionnez votre application WordPress
5. L’identifiant de l’application est visible dans l’URL : `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Ajouter les constantes à wp-config.php

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Si vous avez des domaines **externes** supplémentaires (en dehors de votre réseau multisite) qui doivent toujours être conservés dans la liste des alias Cloudways :

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning N’incluez pas le wildcard de votre propre réseau
N’ajoutez **pas** `*.your-network.com` (ni aucun modèle de sous-domaine de votre propre réseau) à
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Consultez [Important — piège du SSL wildcard](#important--wildcard-ssl-pitfall)
ci-dessous pour comprendre pourquoi cela empêche l’émission de certificats SSL par locataire.
:::

### 4. Activer l’intégration

1. Dans votre administration WordPress, allez dans Ultimate Multisite > Paramètres
2. Accédez à l’onglet "Mappage de domaines"
3. Faites défiler jusqu’à "Intégrations d’hébergement"
4. Activez l’intégration Cloudways
5. Cliquez sur "Enregistrer les modifications"

## Fonctionnement

### Synchronisation des domaines

Lorsqu’un domaine est mappé dans Ultimate Multisite :

1. L’intégration récupère tous les domaines actuellement mappés
2. Elle ajoute le nouveau domaine à la liste (avec une version www si applicable)
3. Elle envoie la liste complète à Cloudways via l’API
4. Cloudways met à jour les alias de domaine pour votre application

Remarque : l’API Cloudways exige d’envoyer la liste complète des domaines à chaque fois, et pas seulement d’ajouter ou de supprimer des domaines individuels.

### Gestion des certificats SSL

Une fois les domaines synchronisés :

1. L’intégration vérifie quels domaines ont des enregistrements DNS valides pointant vers votre serveur
2. Elle envoie une requête à Cloudways pour installer des certificats SSL Let's Encrypt pour ces domaines
3. Cloudways gère l’émission et l’installation des certificats SSL

L’intégration demande toujours des certificats Let's Encrypt **standard** (non wildcard) à
Cloudways. Si un modèle wildcard est fourni dans `WU_CLOUDWAYS_EXTRA_DOMAINS`, le préfixe
`*.` est supprimé avant la requête SSL — le wildcard lui-même n’est jamais installé par cette
intégration. Pour utiliser un certificat wildcard sur Cloudways, vous devriez l’installer
manuellement, mais cela bloque l’émission Let's Encrypt par domaine pour les domaines personnalisés mappés
(voir le piège ci-dessous).

## Domaines supplémentaires

La constante `WU_CLOUDWAYS_EXTRA_DOMAINS` vous permet de spécifier des domaines **externes**
supplémentaires qui doivent toujours être conservés dans la liste des alias de l’application Cloudways. Utilisez-la pour :

- Des domaines externes qui ne sont pas gérés par Ultimate Multisite (par exemple un site marketing séparé partageant la même application Cloudways)
- Des domaines parqués ou de staging que vous souhaitez conserver dans la liste des alias de l’application

N’utilisez **pas** cette constante pour le wildcard de sous-domaine de votre propre réseau
(par exemple `*.your-network.com`). Consultez le piège du SSL wildcard ci-dessous.

## Important — piège du SSL wildcard

Une erreur courante lorsque l’on suit la configuration par défaut de Cloudways consiste à ajouter un wildcard comme
`*.your-network.com` à `WU_CLOUDWAYS_EXTRA_DOMAINS`, ou à installer manuellement un certificat SSL wildcard
Cloudways pour ce wildcard.

**Si vous faites cela, Cloudways refusera d’émettre des certificats Let's Encrypt pour les
domaines personnalisés par locataire que Ultimate Multisite mappe.** Cloudways remplace le
certificat SSL actif sur l’application à chaque fois, et un certificat wildcard préexistant sur
l’application bloque l’émission Let's Encrypt par domaine sur laquelle l’intégration s’appuie.

### Configuration SSL Cloudways recommandée pour un réseau Ultimate Multisite

1. Dans l’onglet **Certificat SSL** de l’application Cloudways, installez un **certificat
   Let's Encrypt standard** couvrant uniquement `your-network.com` et `www.your-network.com`
   — **pas** un wildcard.
2. Ne mettez **pas** `*.your-network.com` (ni aucun modèle de sous-domaine de votre propre réseau) dans
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Réservez cette constante aux domaines **externes** uniquement.
3. Créez le wildcard de sous-domaine par locataire uniquement au niveau **DNS** (un enregistrement `A` pour
   `*.your-network.com` pointant vers l’IP de votre serveur Cloudways) afin que les sous-sites se résolvent. Le SSL
   pour les domaines personnalisés mappés individuellement est ensuite émis automatiquement par l’intégration
   via Let's Encrypt.

Si les domaines personnalisés de vos tenants restent bloqués sans SSL, vérifiez l’onglet SSL de Cloudways. Si un
certificat wildcard y est actif, supprimez-le, réémettez un certificat Let's Encrypt standard
pour le domaine principal du réseau uniquement, et supprimez toutes les entrées wildcard de
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Ensuite, relancez un mappage de domaine (ou attendez le suivant)
et l’intégration recommencera à émettre des certificats par domaine.

## Dépannage

### Problèmes de connexion API
- Vérifiez que votre e-mail et votre clé API sont corrects
- Vérifiez que vos ID de serveur et d’application sont corrects
- Assurez-vous que votre compte Cloudways dispose des autorisations nécessaires

### Problèmes de certificat SSL
- Cloudways exige que les domaines aient des enregistrements DNS valides pointant vers votre serveur avant d’émettre des certificats SSL
- L’intégration valide les enregistrements DNS avant de demander des certificats SSL
- Si les certificats SSL ne sont pas émis, vérifiez que vos domaines pointent correctement vers l’adresse IP de votre serveur
- **Domaines personnalisés par tenant bloqués sans SSL ?** Vérifiez l’onglet SSL Certificate de l’application Cloudways. Si un certificat wildcard (installé manuellement, ou couvrant `*.your-network.com`) est actif, Cloudways n’émettra pas de certificats Let's Encrypt pour les domaines personnalisés mappés individuellement. Remplacez-le par un certificat Let's Encrypt standard couvrant uniquement le domaine principal du réseau (`your-network.com`, `www.your-network.com`) et supprimez toutes les entrées wildcard de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ensuite, relancez un mappage de domaine (ou attendez le suivant) et l’intégration demandera des certificats par domaine.

### Domaine non ajouté
- Consultez les journaux Ultimate Multisite pour tout message d’erreur
- Vérifiez que le domaine n’est pas déjà ajouté à Cloudways
- Assurez-vous que votre plan Cloudways prend en charge le nombre de domaines que vous ajoutez
