---
title: Dokumentacija za developere
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentacija za developere {#developer-documentation}

Ovaj vodič developerima pruža sve što je potrebno za integraciju s Ultimate Multisite, njegovo proširenje ili razvoj addona za njega. Ultimate Multisite pretvara WordPress Multisite mrežu u Website-as-a-Service (WaaS) platformu.

## Što je dostupno {#whats-available}

- **[REST API](./rest-api/overview)** — Potpune CRUD operacije za sve entitete (kupce, web-mjesta, članstva, plaćanja, proizvode, domene) s autentifikacijom putem API ključa
- **[Referenca za hooks](./hooks/guide)** — 200+ action hooks i 280+ filter hooks za događaje životnog ciklusa i prilagodbu
- **[Vodič za integraciju](./integration-guide/)** — Primjeri za CRM integraciju, analitiku, prilagođene pristupnike i webhooks
- **[Primjeri koda](./code-examples/)** — Napredni obrasci za dinamičko određivanje cijena, provisioniranje web-mjesta, prilagođena ograničenja i obradu s više pristupnika
- **[Razvoj addona](./addon-development/getting-started)** — Strukturirani okvir za izgradnju addon pluginova

## Zahtjevi {#requirements}

- WordPress Multisite instalacija
- PHP 7.4 ili noviji
- Ultimate Multisite plugin aktiviran

## Composer / Bedrock instalacija {#composer--bedrock-installation}

Ultimate Multisite dostupan je na [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) kao `ultimate-multisite/ultimate-multisite`. Ovo je preporučena metoda instalacije za WordPress postavke temeljene na [Bedrock](https://roots.io/bedrock/) i druga okruženja kojima upravlja Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Preimenovani paket (v2.6.1+)
Composer paket preimenovan je iz `devstone/ultimate-multisite` u `ultimate-multisite/ultimate-multisite` u v2.6.1. Ako vaš `composer.json` referencira staro ime dobavljača, ažurirajte unos require i pokrenite `composer update`.
:::

Nakon instalacije, mrežno aktivirajte plugin iz Network Admina:

```bash
wp plugin activate ultimate-multisite --network
```

Ili, ako učitavate plugin kao must-use plugin putem Bedrockova autoloadera, upotrijebite filter `wp_ultimo_skip_network_active_check` kako biste zaobišli zaštitu aktivacije:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Brzi početak {#quick-start}

### Koristite REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Spojite se na događaje {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Izgradite addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Pogledajte svaki odjeljak za detaljnu dokumentaciju i primjere.
