---
title: Templat Tambahan
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Templat Addon {#addon-template}

{{ADDON_DESCRIPTION}}

## Keperluan {#requirements}

- WordPress 5.3 atau lebih tinggi
- PHP 7.4 atau lebih tinggi
- Plugin Ultimate Multisite (aktif)

## Pemasangan {#installation}

1. Muat naik fail addon ke direktori `/wp-content/plugins/` anda
2. Aktifkan plugin melalui menu 'Plugins' dalam WordPress
3. Konfigurasi tetapan addon dalam pentadbiran rangkaian (network admin)

## Pembangunan {#development}

### Persediaan {#setup}

```bash
# Pasang kebergantungan
composer install
npm install

# Jalankan ujian
npm run test

# Jalankan semakan standard kod
vendor/bin/phpcs
vendor/bin/phpstan

# Betulkan isu gaya kod
vendor/bin/phpcbf

# Bina untuk pengeluaran
npm run build
```

### Struktur Projek {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Kelas dan inklusi PHP
│   ├── class-multisite-ultimate-updater.php  # Pengendali kemas kini
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Fungsi utama
├── tests/                        # Ujian unit
│   ├── bootstrap.php            # Bootstrap ujian
│   ├── class-*-base.php         # Kelas ujian asas
│   └── class-*-test.php         # Kes ujian
├── views/                       # Fail templat
├── assets/                      # Aset statik
│   ├── css/                     # Lembaran gaya
│   ├── js/                      # Fail JavaScript
│   └── images/                  # Imej
├── lang/                        # Fail bahasa
├── composer.json                # Kebergantungan PHP
├── package.json                 # Kebergantungan Node.js
├── phpunit.xml.dist             # Konfigurasi PHPUnit
├── .phpcs.xml.dist              # Konfigurasi standard kod
└── rector.php                   # Peraturan pemodenan kod
```

### Pengujian {#testing}

Addon ini merangkumi rangka kerja pengujian yang komprehensif:

- **Ujian Unit (Unit Tests)**: Ujian berasaskan PHPUnit dengan set ujian WordPress
- **Kelas Ujian Asas (Base Test Class)**: Menyediakan kaedah bantuan untuk senario ujian biasa
- **Liputan Ujian (Test Coverage)**: Dikonfigurasi untuk menjejaki liputan kod
- **Pengujian Multisite**: Ujian dijalankan dalam persekitaran multisite

### Standard Kod {#code-standards}

- **Standard Kod WordPress**: Dikuatkuasakan melalui PHPCS
- **Keserasian PHP 7.4+**: Menyokong ciri-ciri PHP moden
- **Analisis Statik (Static Analysis)**: Integrasi PHPStan untuk pemeriksaan jenis data
- **Pemodenan Kod (Code Modernization)**: Peraturan Rector untuk peningkatan PHP

### Sistem Bina (Build System) {#build-system}

- **Pemprosesan Aset**: Pemampatan (Minification) untuk fail CSS/JS
- **Terjemahan**: Penghasilan fail POT
- **Pembungkusan (Packaging)**: Penciptaan arkib untuk pengedaran
- **Mod Pembangunan**: Aset yang tidak dimampatkan untuk tujuan penyahpepijatan (debugging)

## Konfigurasi {#configuration}

Addon ini menyokong pelbagai pilihan konfigurasi yang boleh diakses melalui antara muka pentadbiran rangkaian.

## Hooks dan Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Dipicu selepas inisialisasi addon
- `ultimate-multisite-addon-template_loaded` - Dipicu selepas semua fail addon dimuatkan

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Untuk mengubah tetapan addon
- `ultimate-multisite-addon-template_enabled` - Untuk mengatasi status aktif/tidak aktif addon

## Lesen {#license}

Addon ini dilesenkan di bawah GPL v3 atau yang lebih baru.

## Sokongan {#support}

Untuk sokongan dan dokumentasi, lawati [MultisiteUltimate.com](https://multisiteultimate.com)
## Log Perubahan {#changelog}

- Versi 1.0.1 (2025-09-28): menukar prefix kepada ultimate-multisite; kemas kini domain teks; peningkatan versi.


- Versi (2025-09-28): menukar prefix kepada ultimate-multisite; kemas kini domain teks; peningkatan versi.
