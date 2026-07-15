---
title: Dokuméntasi Pangembang
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokuméntasi Pamekar

Pituduh ieu nyayogikeun sagala anu diperlukeun ku pamekar pikeun ngahijikeun jeung, ngalegaan, atawa ngamekarkeun addon pikeun Ultimate Multisite. Ultimate Multisite ngarobah jaringan WordPress Multisite jadi platform Website-as-a-Service (WaaS).

## Anu Sadia {#whats-available}

- **[REST API](./rest-api/overview)** — Operasi CRUD lengkep pikeun sadaya éntitas (palanggan, situs, kaanggotaan, pamayaran, produk, domain) kalayan auténtikasi API key
- **[Rujukan Hooks](./hooks/guide)** — 200+ action hooks jeung 280+ filter hooks pikeun kajadian siklus hirup jeung kustomisasi
- **[Pituduh Integrasi](./integration-guide/)** — Conto pikeun integrasi CRM, analytics, gateway kustom, jeung webhooks
- **[Conto Kode](./code-examples/)** — Pola tingkat lanjut pikeun harga dinamis, panyadiaan situs, watesan kustom, jeung pamrosésan multi-gateway
- **[Pamekaran Addon](./addon-development/getting-started)** — Kerangka terstruktur pikeun ngawangun plugin addon

## Sarat {#requirements}

- Instalasi WordPress Multisite
- PHP 7.4 atawa leuwih luhur
- Plugin Ultimate Multisite diaktipkeun

## Instalasi Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite sadia dina [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) salaku `ultimate-multisite/ultimate-multisite`. Ieu métode instalasi anu disarankeun pikeun setup WordPress dumasar [Bedrock](https://roots.io/bedrock/) jeung lingkungan séjén anu dikokolakeun ku Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Paket diganti ngaran (v2.6.1+)
Paket Composer diganti ngaran ti `devstone/ultimate-multisite` jadi `ultimate-multisite/ultimate-multisite` dina v2.6.1. Lamun `composer.json` anjeun ngarujuk kana ngaran vendor heubeul, apdet éntri require jeung jalankeun `composer update`.
:::

Sanggeus instalasi, aktipkeun plugin pikeun jaringan tina Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Atawa, lamun anjeun ngamuat plugin salaku must-use plugin ngaliwatan autoloader Bedrock, pake filter `wp_ultimo_skip_network_active_check` pikeun ngaliwatan panghalang aktivasina:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Mimitian Gancang {#quick-start}

### Paké REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook kana Kajadian {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Ngawangun Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Tingali unggal bagian pikeun dokuméntasi rinci jeung conto.
