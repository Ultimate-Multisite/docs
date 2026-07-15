---
title: Udviklerdokumentation
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Udviklerdokumentation

Denne guide giver udviklere alt, de har brug for til at integrere med, udvide eller udvikle addons til Ultimate Multisite. Ultimate Multisite omdanner et WordPress Multisite netværk til en Website-as-a-Service (WaaS) platform.

## Hvad er tilgængeligt {#whats-available}

- **[REST API](./rest-api/overview)** — Fulde CRUD-operationer for alle enheder (kunder, sites, medlemskaber, betalinger, produkter, domæner) med API key autentificering
- **[Hooks Reference](./hooks/guide)** — 200+ action hooks og 280+ filter hooks til livscyklusbegivenheder og tilpasning
- **[Integration Guide](./integration-guide/)** — Eksempler til CRM-integration, analyse, custom gateways og webhooks
- **[Code Examples](./code-examples/)** — Avancerede mønstre for dynamisk prissætning, site provisioning, custom begrænsninger og multi-gateway behandling
- **[Addon Development](./addon-development/getting-started)** — Struktureret framework til opbygning af addon plugins

## Krav {#requirements}

- WordPress Multisite installation
- PHP 7.4 eller højere
- Ultimate Multisite plugin aktiveret

## Composer / Bedrock Installation {#composer--bedrock-installation}

Ultimate Multisite er tilgængelig på [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) som `ultimate-multisite/ultimate-multisite`. Dette er den anbefalede installationsmetode for WordPress opsætninger baseret på [Bedrock](https://roots.io/bedrock/)-baserede miljøer og andre Composer-styrede omgivelser.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Navnet er omdøbt (v2.6.1+)
Composer-pakken er omdøbt fra `devstone/ultimate-multisite` til `ultimate-multisite/ultimate-multisite` i v2.6.1. Hvis din `composer.json` henviser til det gamle vendor-navn, skal du opdatere require-indføringen og køre `composer update`.
:::

Efter installation skal du aktivere plugin'et via Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Eller hvis du indlæser plugin'et som et obligatorisk plugin via Bedrocks autoloader, brug filtert `wp_ultimo_skip_network_active_check` til at omgå aktiveringsbeskyttelsen:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Hurtig start {#quick-start}

### Brug REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook ind i hændelser (Events) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Reager på nye kunderegistreringer
});
```

### Byg en Addon {#build-an-addon}

```bash
# Generer addon-skabelonen fra template
bash create-addon.sh
```

Se hver sektion for detaljeret dokumentation og eksempler.
