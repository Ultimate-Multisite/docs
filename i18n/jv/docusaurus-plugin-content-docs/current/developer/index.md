---
title: Dokumentasi Pangembang
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentasi Developer

Pandhuan iki nyedhiyakake kabeh sing dibutuhake developer kanggo ngintegrasikake, ngembangake, utawa nggawe addon kanggo Ultimate Multisite. Ultimate Multisite ngowahi jaringan WordPress Multisite dadi platform Website-as-a-Service (WaaS).

## Sing Kasedhiya {#whats-available}

- **[REST API](./rest-api/overview)** — Operasi CRUD lengkap kanggo kabeh entitas (pelanggan, situs, keanggotaan, pembayaran, produk, domain) nganggo autentikasi API key
- **[Referensi Hooks](./hooks/guide)** — 200+ action hooks lan 280+ filter hooks kanggo prastawa lifecycle lan kustomisasi
- **[Pandhuan Integrasi](./integration-guide/)** — Tuladha kanggo integrasi CRM, analytics, gateway kustom, lan webhooks
- **[Tuladha Kode](./code-examples/)** — Pola lanjut kanggo reregan dinamis, panyedhiyan situs, watesan kustom, lan pangolahan multi-gateway
- **[Pangembangan Addon](./addon-development/getting-started)** — Kerangka terstruktur kanggo nggawe addon plugins

## Syarat {#requirements}

- Instalasi WordPress Multisite
- PHP 7.4 utawa luwih dhuwur
- Ultimate Multisite plugin wis diaktifake

## Instalasi Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite kasedhiya ing [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) minangka `ultimate-multisite/ultimate-multisite`. Iki minangka cara instalasi sing dianjurake kanggo setup WordPress adhedhasar [Bedrock](https://roots.io/bedrock/) lan lingkungan liyane sing dikelola Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Paket diganti jeneng (v2.6.1+)
Paket Composer diganti jeneng saka `devstone/ultimate-multisite` dadi `ultimate-multisite/ultimate-multisite` ing v2.6.1. Yen `composer.json` sampeyan ngrujuk jeneng vendor lawas, nganyari entri require lan jalanake `composer update`.
:::

Sawise instalasi, aktifake plugin ing jaringan saka Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Utawa, yen sampeyan ngemot plugin minangka must-use plugin liwat autoloader Bedrock, gunakake filter `wp_ultimo_skip_network_active_check` kanggo ngliwati activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Miwiti Cepet {#quick-start}

### Gunakake REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Sambungake menyang Prastawa {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Gawe Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Delengen saben bagean kanggo dokumentasi rinci lan tuladha.
