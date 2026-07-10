---
title: Intégration Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Intégration Hostinger (hPanel) {#hostinger-hpanel-integration}

## Aperçu {#overview}

Hostinger est un fournisseur d'hébergement web populaire doté d'un panneau de contrôle moderne appelé hPanel. L'intégration Ultimate Multisite Hostinger permet une synchronisation automatique des domaines entre Ultimate Multisite et hPanel de Hostinger, vous permettant de gérer automatiquement les mappages de domaines et les sous-domaines directement depuis votre administrateur WordPress.

## Fonctionnalités {#features}

- Création automatique de domaines additionnels (addon domains) dans hPanel
- Création automatique de sous-domaines dans hPanel (pour les installations multisite par sous-domaine)
- Suppression des domaines lorsque les mappages sont supprimés
- Intégration transparente avec l'API de gestion des domaines de hPanel

## Prérequis {#requirements}

Pour utiliser l'intégration Hostinger, vous avez besoin de :

1. Un compte Hostinger avec accès à hPanel
2. Un jeton API (API token) de Hostinger
3. Les constantes suivantes définies dans votre fichier `wp-config.php` :

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Optionnellement, vous pouvez également définir :

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Point de terminaison API par défaut
```

## Instructions d'installation {#setup-instructions}

### 1. Générer votre jeton API Hostinger {#1-generate-your-hostinger-api-token}

1. Connectez-vous à votre compte Hostinger et accédez à hPanel.
2. Naviguez vers **Paramètres du compte** → **Jetons API** (Account Settings → API Tokens).
3. Cliquez sur **Créer un nouveau jeton** (Create New Token).
4. Donnez un nom descriptif à votre jeton (par exemple, "Ultimate Multisite").
5. Sélectionnez les autorisations nécessaires :
   - Gestion des domaines (Domain management)
   - Gestion des sous-domaines (Subdomain management)
6. Copiez le jeton généré et conservez-le en lieu sûr.

### 2. Trouver votre ID de compte {#2-find-your-account-id}

1. Dans hPanel, allez à **Paramètres du compte** → **Informations du compte** (Account Settings → Account Information).
2. Votre ID de compte y est affiché.
3. Copiez et enregistrez cet ID pour l'étape suivante.

### 3. Ajouter les constantes à wp-config.php {#3-add-constants-to-wp-configphp}

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Si votre compte Hostinger utilise un point de terminaison API différent, vous pouvez le personnaliser :

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Activer l'intégration {#4-enable-the-integration}

1. Dans votre administrateur WordPress, allez à **Ultimate Multisite > Paramètres** (Ultimate Multisite > Settings).
2. Naviguez vers l'onglet **Mappage de domaine** (Domain Mapping).
3. Faites défiler jusqu'à **Intégrations hôtes** (Host Integrations).
4. Activez l'intégration **Hostinger (hPanel)**.
5. Cliquez sur **Enregistrer les modifications** (Save Changes).

## Fonctionnement {#how-it-works}

### Domaines additionnels (Addon Domains) {#addon-domains}

Lorsque vous mappez un domaine dans Ultimate Multisite :

1. L'intégration envoie une requête à l'API de Hostinger pour ajouter le domaine comme domaine additionnel.
2. Le domaine est configuré pour pointer vers votre répertoire racine.
3. Lorsqu'un mappage de domaine est supprimé, l'intégration supprime automatiquement le domaine additionnel de hPanel.

### Sous-domaines {#subdomains}

Pour les installations multisite par sous-domaine, lorsqu'un nouveau site est créé :

1. L'intégration extrait la partie sous-domaine du domaine complet.
2. Elle envoie une requête à l'API de Hostinger pour ajouter le sous-domaine.
3. Le sous-domaine est configuré pour pointer vers votre répertoire racine.

## Notes importantes {#important-notes}

- L'intégration utilise l'API REST de Hostinger pour communiquer avec votre compte.
- Votre jeton API doit disposer des autorisations nécessaires pour la gestion des domaines et des sous-domaines.
- L'intégration ne gère pas la configuration DNS ; les domaines doivent déjà pointer vers votre compte Hostinger.
- Les requêtes API sont effectuées de manière sécurisée via HTTPS.
- Gardez votre jeton API en sécurité et ne le partagez jamais publiquement.

## Dépannage {#troubleshooting}

### Problèmes de connexion API {#api-connection-issues}

- Vérifiez que votre jeton API est correct et n'a pas expiré.
- Assurez-vous que votre ID de compte est correct.
- Vérifiez que votre jeton API dispose des autorisations nécessaires pour la gestion des domaines.
- Confirmez que votre compte Hostinger est actif et en règle.

### Domaine non ajouté {#domain-not-added}

- Vérifiez les journaux (logs) d'Ultimate Multisite pour tout message d'erreur.
- Assurez-vous que le domaine n'est pas déjà ajouté à votre compte Hostinger.
- Confirmez que votre compte Hostinger n'a pas atteint sa limite de domaines additionnels.
- Vérifiez que le domaine pointe correctement vers les serveurs de noms (nameservers) de Hostinger.

### Problèmes de certificat SSL {#ssl-certificate-issues}

- L'intégration ne gère pas l'émission de certificats SSL.
- Hostinger fournit généralement des certificats SSL gratuits via AutoSSL.
- Vous pouvez gérer les certificats SSL directement dans hPanel sous **SSL/TLS**.
- Alternativement, utilisez Let's Encrypt avec la fonctionnalité AutoSSL de Hostinger.

## Support {#support}

Pour toute aide supplémentaire concernant l'intégration Hostinger, veuillez consulter :

- [Documentation API Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Documentation Ultimate Multisite](/)
- [Support Ultimate Multisite](https://ultimatemultisite.com/support)
