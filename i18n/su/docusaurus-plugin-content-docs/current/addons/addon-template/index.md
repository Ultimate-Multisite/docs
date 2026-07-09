---
title: Citakan Tambihan
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Citakan Addon

{{ADDON_DESCRIPTION}}

## Sarat

- WordPress 5.3 atawa leuwih luhur
- PHP 7.4 atawa leuwih luhur
- plugin Multisite Ultimate (aktip)

## Pamasangan

1. Unggah berkas addon ka diréktori `/wp-content/plugins/` anjeun
2. Aktipkeun plugin ngaliwatan menu 'Plugins' dina WordPress
3. Konpigurasikeun setélan addon dina admin jaringan

## Pamekaran

### Pangaturan

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

### Struktur Proyék

```
ultimate-multisite-addon-template/
├── inc/                          # Kelas PHP jeung kaasupanna
│   ├── class-multisite-ultimate-updater.php  # Pangurus apdet
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Fungsi utama
├── tests/                        # Tés unit
│   ├── bootstrap.php            # Bootstrap tés
│   ├── class-*-base.php         # Kelas tés dasar
│   └── class-*-test.php         # Kasus tés
├── views/                       # Berkas citakan
├── assets/                      # Aset statis
│   ├── css/                     # Stylesheet
│   ├── js/                      # Berkas JavaScript
│   └── images/                  # Gambar
├── lang/                        # Berkas basa
├── composer.json                # Dépendénsi PHP
├── package.json                 # Dépendénsi Node.js
├── phpunit.xml.dist             # Konfigurasi PHPUnit
├── .phpcs.xml.dist              # Konfigurasi standar kode
└── rector.php                   # Aturan modérnisasi kode
```

### Nguji

Addon ieu ngawengku rangka nguji anu komprehensif:

- **Tés Unit**: Tés dumasar PHPUnit kalayan suite tés WordPress
- **Kelas Tés Dasar**: Nyadiakeun métode panyatur pikeun skenario tés umum
- **Jangkauan Tés**: Dikonpigurasikeun pikeun ngalacak jangkauan kode
- **Nguji Multisite**: Tés dijalankeun dina lingkungan multisite

### Standar Kode

- **Standar Coding WordPress**: Dipaksakeun ngaliwatan PHPCS
- **Kasaluyuan PHP 7.4+**: Fitur PHP modéren dirojong
- **Analisis Statis**: Integrasi PHPStan pikeun mariksa tipe
- **Modérnisasi Kode**: Aturan Rector pikeun pamutahiran PHP

### Sistem Build

- **Ngolah Aset**: Minifikasi pikeun berkas CSS/JS
- **Tarjamahan**: Nyieun berkas POT
- **Paketisasi**: Nyieun arsip pikeun distribusi
- **Modeu Pamekaran**: Aset anu henteu diminifikasi pikeun debugging

## Konfigurasi

Addon ieu ngadukung rupa-rupa pilihan konfigurasi anu bisa diaksés ngaliwatan antarbeungeut admin jaringan.

## Hooks jeung Filters

### Actions

- `ultimate-multisite-addon-template_init` - Dipicu sanggeus inisialisasi addon
- `ultimate-multisite-addon-template_loaded` - Dipicu sanggeus sakabéh berkas addon dimuat

### Filters

- `ultimate-multisite-addon-template_settings` - Robah setélan addon
- `ultimate-multisite-addon-template_enabled` - Timpa status aktip/nonaktip addon

## Lisénsi

Addon ieu dilisénsikeun dina GPL v3 atawa engké.

## Pangrojong

Pikeun pangrojong jeung dokuméntasi, buka [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog

- Vérsi 1.0.1 (2025-09-28): ganti ngaran prefix jadi ultimate-multisite; apdet text domain; naékkeun vérsi.


- Vérsi  (2025-09-28): ganti ngaran prefix jadi ultimate-multisite; apdet text domain; naékkeun vérsi.
