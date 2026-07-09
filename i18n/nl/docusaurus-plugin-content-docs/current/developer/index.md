---
title: Ontwikkelaarsdocumentatie
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Developerdocumentatie {#developer-documentation}

Deze gids biedt ontwikkelaars alles wat nodig is om te integreren met, uit te breiden of addons te ontwikkelen voor Ultimate Multisite. Ultimate Multisite transformeert een WordPress Multisite-netwerk in een Website-as-a-Service (WaaS)-platform.

## Wat is beschikbaar {#whats-available}

- **[REST API](./rest-api/overview)** — Volledige CRUD-bewerkingen voor alle entiteiten (klanten, sites, lidmaatschappen, betalingen, producten, domeinen) met API-sleutelauthenticatie
- **[Hooks-referentie](./hooks/guide)** — 200+ action hooks en 280+ filter hooks voor lifecycle-events en maatwerk
- **[Integratiegids](./integration-guide/)** — Voorbeelden voor CRM-integratie, analytics, aangepaste gateways en webhooks
- **[Codevoorbeelden](./code-examples/)** — Geavanceerde patronen voor dynamische prijzen, site-provisioning, aangepaste beperkingen en multi-gateway-verwerking
- **[Addonontwikkeling](./addon-development/getting-started)** — Gestructureerd framework voor het bouwen van addon-plugins

## Vereisten {#requirements}

- WordPress Multisite-installatie
- PHP 7.4 of hoger
- Ultimate Multisite-plugin geactiveerd

## Composer- / Bedrock-installatie {#composer--bedrock-installation}

Ultimate Multisite is beschikbaar op [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) als `ultimate-multisite/ultimate-multisite`. Dit is de aanbevolen installatiemethode voor op [Bedrock](https://roots.io/bedrock/) gebaseerde WordPress-setups en andere door Composer beheerde omgevingen.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Hernoemd pakket (v2.6.1+)
Het Composer-pakket is hernoemd van `devstone/ultimate-multisite` naar `ultimate-multisite/ultimate-multisite` in v2.6.1. Als je `composer.json` naar de oude vendor-naam verwijst, werk dan de require-vermelding bij en voer `composer update` uit.
:::

Activeer na installatie de plugin netwerkbreed vanuit de Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Of, als je de plugin als een must-use plugin laadt via Bedrock's autoloader, gebruik dan de `wp_ultimo_skip_network_active_check`-filter om de activatiecontrole te omzeilen:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Snel aan de slag {#quick-start}

### Gebruik de REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Haak in op events {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Bouw een Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Bekijk elke sectie voor gedetailleerde documentatie en voorbeelden.
