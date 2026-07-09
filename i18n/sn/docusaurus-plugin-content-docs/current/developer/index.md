---
title: Zvinyorwa zveVagadziri
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Zvinyorwa zveVagadziri {#developer-documentation}

Gwaro iri rinopa vagadziri zvese zvinodiwa kuti vabatanidze ne, vawedzere, kana kugadzira maaddon eUltimate Multisite. Ultimate Multisite inoshandura network yeWordPress Multisite kuva puratifomu yeWebsite-as-a-Service (WaaS).

## Zviripo {#whats-available}

- **[REST API](./rest-api/overview)** — Mabasa akazara eCRUD ezvinhu zvese (vatengi, masaiti, membership, kubhadhara, zvigadzirwa, madomain) nekusimbiswa kweAPI key
- **[Chirevo cheHooks](./hooks/guide)** — 200+ action hooks uye 280+ filter hooks yezviitiko zvelifecycle nekugadzirisa
- **[Gwaro Rekubatanidza](./integration-guide/)** — Mienzaniso yekubatanidza CRM, analytics, custom gateways, uye webhooks
- **[Mienzaniso yeCode](./code-examples/)** — Mapatani epamusoro emitengo inochinja, kugadzirwa kwesaiti, custom limitations, uye kugadzirisa multi-gateway
- **[Kugadzira Addon](./addon-development/getting-started)** — Framework yakarongeka yekuvaka maaddon plugins

## Zvinodiwa {#requirements}

- Kuiswa kweWordPress Multisite
- PHP 7.4 kana yepamusoro
- Ultimate Multisite plugin yakabatidzwa

## Kuiswa kweComposer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite inowanikwa pa[Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) se`ultimate-multisite/ultimate-multisite`. Iyi ndiyo nzira inokurudzirwa yekuisa yeWordPress setups dzakavakirwa pa[Bedrock](https://roots.io/bedrock/) uye dzimwe nharaunda dzinotungamirirwa neComposer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Package yakapihwa zita idzva (v2.6.1+)
Package yeComposer yakapihwa zita idzva kubva ku`devstone/ultimate-multisite` kuenda ku`ultimate-multisite/ultimate-multisite` muv2.6.1. Kana `composer.json` yako ichireva zita rekare remutengesi, gadziridza require entry uye mhanyisa `composer update`.
:::

Mushure mekuisa, network-activate plugin kubva kuNetwork Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Kana, kana uri kurodha plugin se must-use plugin kuburikidza neautoloader yeBedrock, shandisa filter ye`wp_ultimo_skip_network_active_check` kuti upfuure activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Kutanga Nekukurumidza {#quick-start}

### Shandisa REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Batanidza muZviitiko {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Vaka Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Ona chikamu chimwe nechimwe kuti uwane zvinyorwa zvakadzama nemienzaniso.
