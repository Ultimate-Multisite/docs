---
title: Utvecklar­dokumentation
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Utvecklar-dokumentation {#developer-documentation}

Denna guide ger utvecklare allt de behöver för att integrera med, utöka eller utveckla tillägg (addons) för Ultimate Multisite. Ultimate Multisite förvandlar ett WordPress Multisite-nätverk till en plattform för Webbplats-som-en-tjänst (WaaS).

## Vad som finns tillgängligt {#whats-available}

- **[REST API](./rest-api/overview)** — Fullständiga CRUD-operationer för alla entiteter (kunder, webbplatser, medlemskap, betalningar, produkter, domäner) med autentisering via API-nyckel
- **[Hooks Reference](./hooks/guide)** — Över 200 action hooks och över 280 filter hooks för livscykelhändelser och anpassning
- **[Integration Guide](./integration-guide/)** — Exempel för integration med CRM, analysverktyg, anpassade gateways och webhooks
- **[Code Examples](./code-examples/)** — Avancerade mönster för dynamisk prissättning, webbplatsprovisionering, anpassade begränsningar och flergateway-hantering
- **[Addon Development](./addon-development/getting-started)** — En strukturerad ram för att bygga tilläggsplugins

## Krav {#requirements}

- Installation av WordPress Multisite
- PHP 7.4 eller högre
- Ultimate Multisite-plugin aktiverat

## Composer / Bedrock-installation {#composer--bedrock-installation}

Ultimate Multisite finns tillgängligt på [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) som `ultimate-multisite/ultimate-multisite`. Detta är den rekommenderade installationsmetoden för Bedrock-baserade WordPress-uppsättningar och andra miljöer som hanteras av Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Bytt paketnamn (v2.6.1+)
Composer-paketet byttes namn från `devstone/ultimate-multisite` till `ultimate-multisite/ultimate-multisite` i version 2.6.1. Om din `composer.json` refererar till det gamla vendor-namnet, uppdatera require-posten och kör `composer update`.
:::

Efter installationen, aktivera pluginet på nätverksnivå via Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Eller, om du laddar in pluginet som ett måste-använd-plugin via Bedrocks autoloader, använd filtret `wp_ultimo_skip_network_active_check` för att kringgå aktiveringsskyddet:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Snabbstart {#quick-start}

### Använd REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook till händelser {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Reagera på nya kundregistreringar
});
```

### Bygg ett tillägg {#build-an-addon}

```bash
# Generera addon-skelett från mallen
bash create-addon.sh
```

Se varje sektion för detaljerad dokumentation och exempel.
