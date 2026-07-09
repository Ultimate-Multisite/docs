---
title: Template Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Template Addon {#addon-template}

{{ADDON_DESCRIPTION}}

## Persyaratan {#requirements}

- WordPress 5.3 atau yang lebih tinggi
- PHP 7.4 atau yang lebih tinggi
- Plugin Ultimate Multisite (aktif)

## Instalasi {#installation}

1. Unggah file addon ke direktori `/wp-content/plugins/` Anda
2. Aktifkan plugin melalui menu 'Plugins' di WordPress
3. Konfigurasikan pengaturan addon di admin jaringan

## Pengembangan {#development}

### Pengaturan Awal {#setup}

```bash
# Install dependencies
composer install
npm install

# Run tests
npm run test

# Run code standards checks
vendor/bin/phpcs
vendor/bin/phpstan

# Fix code style issues
vendor/bin/phpcbf

# Build for production
npm run build
```

### Struktur Proyek {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Kelas dan include PHP
│   ├── class-multisite-ultimate-updater.php  # Penangan pembaruan
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Fungsionalitas utama
├── tests/                        # Unit test
│   ├── bootstrap.php            # Bootstrap pengujian
│   ├── class-*-base.php         # Kelas uji dasar
│   └── class-*-test.php         # Kasus uji
├── views/                       # File template
├── assets/                      # Aset statis
│   ├── css/                     # Stylesheet
│   ├── js/                      # File JavaScript
│   └── images/                  # Gambar
├── lang/                        # File bahasa
├── composer.json                # Dependensi PHP
├── package.json                 # Dependensi Node.js
├── phpunit.xml.dist             # Konfigurasi PHPUnit
├── .phpcs.xml.dist              # Konfigurasi standar kode
└── rector.php                   # Aturan modernisasi kode
```

### Pengujian {#testing}

Addon ini dilengkapi dengan kerangka kerja pengujian yang lengkap:

- **Unit Tests**: Pengujian berbasis PHPUnit dengan *WordPress test suite*
- **Base Test Class**: Menyediakan metode bantu untuk skenario pengujian umum
- **Test Coverage**: Dikonfigurasi untuk melacak cakupan kode
- **Multisite Testing**: Pengujian berjalan di lingkungan multisite

### Standar Kode {#code-standards}

- **WordPress Coding Standards**: Diterapkan melalui PHPCS
- **Kompatibilitas PHP 7.4+**: Mendukung fitur PHP modern
- **Static Analysis**: Integrasi PHPStan untuk pemeriksaan tipe data
- **Code Modernization**: Aturan Rector untuk peningkatan versi PHP

### Sistem Build {#build-system}

- **Asset Processing**: Minifikasi untuk file CSS/JS
- **Translation**: Pembuatan file POT
- **Packaging**: Pembuatan arsip untuk distribusi
- **Development Mode**: Aset yang tidak diminifikasi untuk *debugging*

## Konfigurasi {#configuration}

Addon ini mendukung berbagai opsi konfigurasi yang dapat diakses melalui antarmuka admin jaringan.

## Hooks dan Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Dipicu setelah inisialisasi addon
- `ultimate-multisite-addon-template_loaded` - Dipicu setelah semua file addon dimuat

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Mengubah pengaturan addon
- `ultimate-multisite-addon-template_enabled` - Mengganti status aktif/nonaktif addon

## Lisensi {#license}

Addon ini dilisensikan di bawah GPL v3 atau yang lebih baru.

## Dukungan {#support}

Untuk dukungan dan dokumentasi, kunjungi [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog {#changelog}

- Versi 1.0.1 (2025-09-28): ganti awalan menjadi ultimate-multisite; perbarui domain teks; peningkatan versi.


- Versi (2025-09-28): ganti awalan menjadi ultimate-multisite; perbarui domain teks; peningkatan versi.
