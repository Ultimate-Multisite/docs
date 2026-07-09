---
title: Sgrìobhainnean luchd-leasachaidh
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Sgrìobhainnean do Luchd-leasachaidh {#developer-documentation}

Tha an stiùireadh seo a’ toirt do luchd-leasachaidh a h-uile rud a tha a dhìth gus amalachadh le Ultimate Multisite, a leudachadh, no addons a leasachadh dha. Bidh Ultimate Multisite ag atharrachadh lìonra WordPress Multisite gu àrd-ùrlar Website-as-a-Service (WaaS).

## Na tha ri fhaighinn {#whats-available}

- **[REST API](./rest-api/overview)** — Obrachaidhean CRUD iomlan airson gach eintiteas (luchd-ceannach, làraichean, ballrachdan, pàighidhean, batharan, àrainnean) le dearbhadh API key
- **[Iomradh Hooks](./hooks/guide)** — 200+ action hooks agus 280+ filter hooks airson tachartasan cuairt-beatha agus gnàthachadh
- **[Stiùireadh Amalachaidh](./integration-guide/)** — Eisimpleirean airson amalachadh CRM, anailisean, geataichean gnàthaichte, agus webhooks
- **[Eisimpleirean Còd](./code-examples/)** — Pàtrain adhartach airson prìseadh fiùghantach, ullachadh làraich, cuingealachaidhean gnàthaichte, agus giullachd ioma-gheata
- **[Leasachadh Addon](./addon-development/getting-started)** — Frèam-obrach structaraichte airson plugins addon a thogail

## Riatanasan {#requirements}

- Stàladh WordPress Multisite
- PHP 7.4 no nas àirde
- Plugin Ultimate Multisite air a chur an gnìomh

## Stàladh Composer / Bedrock {#composer--bedrock-installation}

Tha Ultimate Multisite ri fhaighinn air [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) mar `ultimate-multisite/ultimate-multisite`. ’S e seo an dòigh stàlaidh a thathar a’ moladh airson rèiteachaidhean WordPress stèidhichte air [Bedrock](https://roots.io/bedrock/) agus àrainneachdan eile air an stiùireadh le Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pasgan air ath-ainmeachadh (v2.6.1+)
Chaidh am pasgan Composer ath-ainmeachadh bho `devstone/ultimate-multisite` gu `ultimate-multisite/ultimate-multisite` ann an v2.6.1. Ma tha an `composer.json` agad a’ toirt iomradh air an t-seann ainm vendor, ùraich an inntrigeadh require agus ruith `composer update`.
:::

Às dèidh stàlaidh, cuir an gnìomh am plugin air feadh an lìonra bhon Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

No, ma tha thu a’ luchdadh a’ plugin mar must-use plugin tro autoloader Bedrock, cleachd am filter `wp_ultimo_skip_network_active_check` gus an geàrd gnìomhachaidh a sheachnadh:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Toiseach Luath {#quick-start}

### Cleachd an REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Ceangail ri Tachartasan {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Tog Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Faic gach earrann airson sgrìobhainnean mionaideach agus eisimpleirean.
