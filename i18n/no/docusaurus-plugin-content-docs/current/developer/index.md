---
title: Utviklerdokumentasjon
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Utviklerdokumentasjon {#developer-documentation}

Denne guiden gir utviklere alt de trenger for å integrere med, utvide eller utvikle tillegg (addons) for Ultimate Multisite. Ultimate Multisite transformerer et WordPress Multisite-nettverk til en Website-as-a-Service (WaaS) plattform.

## Hva som er tilgjengelig {#whats-available}

- **[REST API](./rest-api/overview)** — Fullstendige CRUD-operasjoner for alle enheter (kunder, nettsteder, medlemskap, betalinger, produkter, domener) med API-nøkkelautentisering
- **[Hooks Reference](./hooks/guide)** — Over 200 action hooks og over 280 filter hooks for livssyklushendelser og tilpasning
- **[Integration Guide](./integration-guide/)** — Eksempler for CRM-integrasjon, analyse, tilpassede betalingsløsninger og webhooks
- **[Code Examples](./code-examples/)** — Avanserte mønstre for dynamisk prising, nettstedprovisionering, tilpassede begrensninger og multi-gateway-behandling
- **[Addon Development](./addon-development/getting-started)** — Strukturert rammeverk for bygging av tilleggsplugins

## Krav {#requirements}

- WordPress Multisite-installasjon
- PHP 7.4 eller høyere
- Ultimate Multisite-plugin aktivert

## Composer / Bedrock-installasjon {#composer--bedrock-installation}

Ultimate Multisite er tilgjengelig på [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) som `ultimate-multisite/ultimate-multisite`. Dette er den anbefalte installasjonsmetoden for [Bedrock](https://roots.io/bedrock/)-baserte WordPress-oppsett og andre Composer-administrerte miljøer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renommerte pakke (v2.6.1+)
Composer-pakken ble omdøpt fra `devstone/ultimate-multisite` til `ultimate-multisite/ultimate-multisite` i v2.6.1. Hvis din `composer.json` refererer til det gamle vendor-navnet, oppdater require-oppføringen og kjør `composer update`.
:::

Etter installasjon, aktiver pluginet på nettverksnivå fra Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Eller, hvis du laster inn pluginet som et must-use plugin via Bedrocks autoloader, bruk filteret `wp_ultimo_skip_network_active_check` for å omgå aktiveringssikkerheten:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Rask start {#quick-start}

### Bruk REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook til hendelser {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Reager på nye kundeopprettelser
});
```

### Bygg et tillegg {#build-an-addon}

```bash
# Generer addon-skjelett fra malen
bash create-addon.sh
```

Se i hver seksjon for detaljert dokumentasjon og eksempler.
