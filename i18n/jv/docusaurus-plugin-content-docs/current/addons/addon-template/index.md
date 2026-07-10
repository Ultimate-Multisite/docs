---
title: Cithakan Tambahan
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Cithakan Tambahan {#addon-template}

{{ADDON_DESCRIPTION}}

## Syarat {#requirements}

- WordPress 5.3 utawa luwih dhuwur
- PHP 7.4 utawa luwih dhuwur
- Multisite Ultimate plugin (aktif)

## Pamasangan {#installation}

1. Unggah berkas tambahan menyang direktori `/wp-content/plugins/` sampeyan
2. Aktifake plugin liwat menu 'Plugins' ing WordPress
3. Atur setelan tambahan ing admin jaringan

## Pangembangan {#development}

### Setup {#setup}

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
├── inc/                          # Kelas PHP lan include
│   ├── class-multisite-ultimate-updater.php  # Pangatur nganyari
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Fungsi utama
├── tests/                        # Tes unit
│   ├── bootstrap.php            # Bootstrap tes
│   ├── class-*-base.php         # Kelas tes dhasar
│   └── class-*-test.php         # Kasus tes
├── views/                       # Berkas cithakan
├── assets/                      # Aset statis
│   ├── css/                     # Stylesheet
│   ├── js/                      # Berkas JavaScript
│   └── images/                  # Gambar
├── lang/                        # Berkas basa
├── composer.json                # Dependensi PHP
├── package.json                 # Dependensi Node.js
├── phpunit.xml.dist             # Konfigurasi PHPUnit
├── .phpcs.xml.dist              # Konfigurasi standar kode
└── rector.php                   # Aturan modernisasi kode
```

### Pangujian {#testing}

Tambahan iki ngemot kerangka pangujian sing jangkep:

- **Tes Unit**: Tes adhedhasar PHPUnit nganggo paket tes WordPress
- **Kelas Tes Dhasar**: Nyedhiyakake metode pambiyantu kanggo skenario tes umum
- **Cakupan Tes**: Dikonfigurasi kanggo nglacak cakupan kode
- **Pangujian Multisite**: Tes mlaku ing lingkungan multisite

### Standar Kode {#code-standards}

- **Standar Koding WordPress**: Ditegakake liwat PHPCS
- **Kompatibilitas PHP 7.4+**: Fitur PHP modern didhukung
- **Analisis Statis**: Integrasi PHPStan kanggo mriksa jinis
- **Modernisasi Kode**: Aturan Rector kanggo upgrade PHP

### Sistem Build {#build-system}

- **Pangolahan Aset**: Minifikasi kanggo berkas CSS/JS
- **Terjemahan**: Nggawe berkas POT
- **Paket**: Nggawe arsip kanggo distribusi
- **Mode Pangembangan**: Aset sing ora diminifikasi kanggo debugging

## Konfigurasi {#configuration}

Tambahan iki ndhukung macem-macem pilihan konfigurasi sing bisa diakses liwat antarmuka admin jaringan.

## Hook lan Filter {#hooks-and-filters}

### Action {#actions}

- `ultimate-multisite-addon-template_init` - Dipicu sawisé inisialisasi tambahan
- `ultimate-multisite-addon-template_loaded` - Dipicu sawisé kabeh berkas tambahan dimuat

### Filter {#filters}

- `ultimate-multisite-addon-template_settings` - Ngowahi setelan tambahan
- `ultimate-multisite-addon-template_enabled` - Nindhes status aktif/mati tambahan

## Lisensi {#license}

Tambahan iki dilisensi miturut GPL v3 utawa sing luwih anyar.

## Dhukungan {#support}

Kanggo dhukungan lan dokumentasi, bukak [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog {#changelog}

- Versi 1.0.1 (2025-09-28): ngganti jeneng prefix dadi ultimate-multisite; nganyari text domain; mundhakake versi.


- Versi  (2025-09-28): ngganti jeneng prefix dadi ultimate-multisite; nganyari text domain; mundhakake versi.
