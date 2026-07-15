---
title: Dokumentasi Pembangun
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentasi Pembangun

Panduan ini menyediakan semua yang diperlukan oleh pembangun untuk berintegrasi, memperluas, atau membangunkan *addon* untuk Ultimate Multisite. Ultimate Multisite mengubah rangkaian WordPress Multisite menjadi platform *Website-as-a-Service* (WaaS).

## Apa yang Tersedia {#whats-available}

- **[REST API](./rest-api/overview)** — Operasi CRUD lengkap untuk semua entiti (pelanggan, tapak, keahlian, pembayaran, produk, domain) dengan pengesahan kunci API
- **[Hooks Reference](./hooks/guide)** — 200+ *action hooks* dan 280+ *filter hooks* untuk acara kitaran hayat dan penyesuaian
- **[Integration Guide](./integration-guide/)** — Contoh untuk integrasi CRM, analitik, *gateway* tersuai, dan *webhooks*
- **[Code Examples](./code-examples/)** — Corak lanjutan untuk penetapan harga dinamik, penyediaan tapak, had tersuai, dan pemprosesan pelbagai *gateway*
- **[Addon Development](./addon-development/getting-started)** — Kerangka kerja berstruktur untuk membina *addon plugin*

## Keperluan {#requirements}

- Pemasangan WordPress Multisite
- PHP 7.4 atau lebih tinggi
- Plugin Ultimate Multisite diaktifkan

## Pemasangan Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite tersedia di [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) sebagai `ultimate-multisite/ultimate-multisite`. Ini adalah kaedah pemasangan yang disyorkan untuk persediaan WordPress berasaskan [Bedrock] dan persekitaran yang diuruskan Composer yang lain.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Pakej Composer telah dinamakan semula daripada `devstone/ultimate-multisite` kepada `ultimate-multisite/ultimate-multisite` dalam v2.6.1. Jika `composer.json` anda merujuk kepada nama vendor lama, kemas kini entri *require* dan jalankan `composer update`.
:::

Selepas pemasangan, aktifkan plugin ini pada peringkat rangkaian (Network Admin):

```bash
wp plugin activate ultimate-multisite --network
```

Atau, jika anda memuatkan plugin ini sebagai plugin wajib guna (*must-use plugin*) melalui *autoloader* Bedrock, gunakan *filter* `wp_ultimo_skip_network_active_check` untuk memintas pemeriksaan pengaktifan:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Permulaan Pantas {#quick-start}

### Gunakan REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Kaitkan ke Acara (Hook into Events) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Bertindak balas terhadap pendaftaran pelanggan baharu
});
```

### Bina Addon {#build-an-addon}

```bash
# Jana rangka kerja addon daripada templat
bash create-addon.sh
```

Sila lihat setiap bahagian untuk dokumentasi dan contoh terperinci.
