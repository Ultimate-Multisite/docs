---
title: Documentation développeur
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentation développeur

Ce guide fournit aux développeurs tout ce qui est nécessaire pour intégrer, étendre ou développer des addons pour Ultimate Multisite. Ultimate Multisite transforme un réseau WordPress Multisite en plateforme Website-as-a-Service (WaaS).

## Ce qui est disponible

- **[REST API](./rest-api/overview)** — Opérations CRUD complètes pour toutes les entités (clients, sites, abonnements, paiements, produits, domaines) avec authentification par clé API
- **[Référence des hooks](./hooks/guide)** — Plus de 200 action hooks et plus de 280 filter hooks pour les événements de cycle de vie et la personnalisation
- **[Guide d’intégration](./integration-guide/)** — Exemples pour l’intégration CRM, l’analytique, les passerelles personnalisées et les webhooks
- **[Exemples de code](./code-examples/)** — Modèles avancés pour la tarification dynamique, le provisionnement de sites, les limitations personnalisées et le traitement multi-passerelle
- **[Développement d’addon](./addon-development/getting-started)** — Cadre structuré pour créer des plugins d’addon

## Exigences

- Installation WordPress Multisite
- PHP 7.4 ou supérieur
- plugin Ultimate Multisite activé

## Installation Composer / Bedrock

Ultimate Multisite est disponible sur [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) en tant que `ultimate-multisite/ultimate-multisite`. C’est la méthode d’installation recommandée pour les configurations WordPress basées sur [Bedrock](https://roots.io/bedrock/) et les autres environnements gérés par Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Package renommé (v2.6.1+)
Le package Composer a été renommé de `devstone/ultimate-multisite` en `ultimate-multisite/ultimate-multisite` dans la v2.6.1. Si votre `composer.json` référence l’ancien nom de fournisseur, mettez à jour l’entrée require et exécutez `composer update`.
:::

Après l’installation, activez le plugin sur le réseau depuis l’administration du réseau :

```bash
wp plugin activate ultimate-multisite --network
```

Ou, si vous chargez le plugin comme must-use plugin via l’autoloader de Bedrock, utilisez le filtre `wp_ultimo_skip_network_active_check` pour contourner la protection d’activation :

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Démarrage rapide

### Utiliser la REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### S’accrocher aux événements

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Créer un addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Consultez chaque section pour une documentation détaillée et des exemples.
