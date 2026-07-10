---
title: Dokumentacija za programere
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentacija za programere {#developer-documentation}

Ovaj vodič pruža programerima sve što je potrebno za integraciju, proširenje ili razvoj addona za Ultimate Multisite. Ultimate Multisite pretvara WordPress Multisite mrežu u platformu za web stranicu kao uslugu (Website-as-a-Service - WaaS).

## Šta je dostupno {#whats-available}

- **[REST API](./rest-api/overview)** — Potpune CRUD operacije za sve entitete (klijente, stranice, članstva, plaćanja, proizvode, domene) sa autentifikacijom ključem API.
- **[Hooks Reference](./hooks/guide)** — Više od 200 akcionih hook-ova i više od 280 filter hook-ova za događaje životnog ciklusa i prilagođavanje.
- **[Integration Guide](./integration-guide/)** — Primjeri za integraciju sa CRM-om, analitikom, prilagođenim gateway-ima i webhook-ovima.
- **[Code Examples](./code-examples/)** — Napredni obrasci za dinamičko određivanje cijena, dodjelu stranica, prilagođene ograničenje i obradu više gateway-a.
- **[Addon Development](./addon-development/getting-started)** — Strukturirani okvir za izradu addon pluginova.

## Zahtjevi {#requirements}

- Instalacija WordPress Multisite
- PHP 7.4 ili noviji
- Aktiviran Ultimate Multisite plugin

## Instalacija putem Composer-a / Bedrock-a {#composer--bedrock-installation}

Ultimate Multisite je dostupan na [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) kao `ultimate-multisite/ultimate-multisite`. Ovo je preporučena metoda instalacije za WordPress postavke bazirane na [Bedrock](https://roots.io/bedrock/) i druge okruženja upravljana Composer-om.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer paket je preimenovan sa `devstone/ultimate-multisite` na `ultimate-multisite/ultimate-multisite` u verziji v2.6.1. Ako vaš `composer.json` referencira stari vendor naziv, ažurirajte unos za zahtjev i pokrenite `composer update`.
:::

Nakon instalacije, aktivirajte plugin na nivou mreže (Network Admin):

```bash
wp plugin activate ultimate-multisite --network
```

Ili, ako učitavate plugin kao *must-use* plugin putem autoloader-a Bedrock-a, koristite filter `wp_ultimo_skip_network_active_check` da zaobiđete zaštitu aktivacije:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Brzo početak {#quick-start}

### Koristite REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hookovanje u događaje {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Reagujte na nove prijave korisnika
});
```

### Izgradnja Addona {#build-an-addon}

```bash
# Generišite scaffold addona iz šablona
bash create-addon.sh
```

Pogledajte svaki od ovih odeljaka radi detaljne dokumentacije i primjera.
