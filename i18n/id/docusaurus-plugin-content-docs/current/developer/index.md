---
title: Dokumentasi Pengembang
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentasi Pengembang

Panduan ini menyediakan semua yang dibutuhkan pengembang untuk berintegrasi, memperluas, atau mengembangkan *addon* untuk Ultimate Multisite. Ultimate Multisite mengubah jaringan WordPress Multisite menjadi platform Website-as-a-Service (WaaS).

## Apa yang Tersedia {#whats-available}

- **[REST API](./rest-api/overview)** — Operasi CRUD lengkap untuk semua entitas (pelanggan, situs, keanggotaan, pembayaran, produk, domain) dengan otentikasi kunci API.
- **[Hooks Reference](./hooks/guide)** — Lebih dari 200 *action hook* dan lebih dari 280 *filter hook* untuk *lifecycle events* dan kustomisasi.
- **[Integration Guide](./integration-guide/)** — Contoh integrasi CRM, analitik, *gateway* kustom, dan *webhook*.
- **[Code Examples](./code-examples/)** — Pola lanjutan untuk penetapan harga dinamis, penyediaan situs (*site provisioning*), batasan kustom, dan pemrosesan multi-*gateway*.
- **[Addon Development](./addon-development/getting-started)** — Kerangka kerja terstruktur untuk membangun *plugin addon*.

## Persyaratan {#requirements}

- Instalasi WordPress Multisite
- PHP 7.4 atau lebih tinggi
- Plugin Ultimate Multisite diaktifkan

## Instalasi Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite tersedia di [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) sebagai `ultimate-multisite/ultimate-multisite`. Ini adalah metode instalasi yang direkomendasikan untuk pengaturan WordPress berbasis [Bedrock](https://roots.io/bedrock/) dan lingkungan yang dikelola Composer lainnya.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Paket yang diganti nama (v2.6.1+)
Paket Composer telah diganti nama dari `devstone/ultimate-multisite` menjadi `ultimate-multisite/ultimate-multisite` di v2.6.1. Jika `composer.json` Anda merujuk pada nama vendor lama, perbarui entri `require` dan jalankan `composer update`.
:::

Setelah instalasi, aktifkan plugin di tingkat jaringan (*network-activate*) dari Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Atau, jika Anda memuat plugin sebagai *must-use plugin* melalui *autoloader* Bedrock, gunakan *filter* `wp_ultimo_skip_network_active_check` untuk melewati pemeriksaan aktivasi:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Memulai dengan Cepat {#quick-start}

### Menggunakan REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Menghubungkan ke Event {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Membuat Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Lihat setiap bagian untuk dokumentasi dan contoh yang lebih rinci.
