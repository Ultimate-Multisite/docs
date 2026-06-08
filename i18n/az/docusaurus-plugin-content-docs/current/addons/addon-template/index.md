---
title: Addon Şablonu
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Şablonu

{{ADDON_DESCRIPTION}}

## Tələblər

- WordPress 5.3 və ya daha yuxarı
- PHP 7.4 və ya daha yuxarı
- Multisite Ultimate eklentisi (aktiv)

## Quraşdırma

1. Addon fayllarını `/wp-content/plugins/` kataloquna yükləyin
2. WordPress-də 'Plugins' menyusundan eklentini aktivləşdirin
3. Addon parametrlərini şəbəkə administrator panelində (network admin) konfiqurasiya edin

## İnkişaf

### Qurulma (Setup)

```bash
# Asılılıqları quraşdırın
composer install
npm install

# Testləri işə salın
npm run test

# Kod standartları yoxlamalarını işə salın
vendor/bin/phpcs
vendor/bin/phpstan

# Kod stil problemlərini düzəldin
vendor/bin/phpcbf

# İstehsal üçün qurulma (Build)
npm run build
```

### Layihə Strukturunda (Project Structure)

```
ultimate-multisite-addon-template/
├── inc/                          # PHP sinifləri və daxil edilənlər
│   ├── class-multisite-ultimate-updater.php  # Yeniləmə idarəçisi
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Əsas funksionallıq
├── tests/                        # Unit testlər
│   ├── bootstrap.php            # Test qurulması (bootstrap)
│   ├── class-*-base.php         # Əsas test sinifi
│   └── class-*-test.php         # Test hallarının sinifləri
├── views/                       # Şablon faylları
├── assets/                      # Statik fayllar
│   ├── css/                     # Stil faylları
│   ├── js/                      # JavaScript faylları
│   └── images/                  # Şəkillər
├── lang/                        # Dil faylları
├── composer.json                # PHP asılılıqları
├── package.json                 # Node.js asılılıqları
├── phpunit.xml.dist             # PHPUnit konfiqurasiyası
├── .phpcs.xml.dist              # Kod standartları konfiqurasiyası
└── rector.php                   # Kod müasirləşdirmə qaydaları
```

### Testləmə (Testing)

Addon kompleks test çərçivəsi ilə gəlir:

- **Unit Testlər**: WordPress test dəsti ilə PHPUnit əsaslı testlər
- **Əsas Test Sinifi**: Ümumi test ssenariləri üçün köməkçi metodlar təmin edir
- **Test Əhatəsi (Test Coverage)**: Kod əhatəsini izləmək üçün konfiqurasiya edilmişdir
- **Multisite Testləmə**: Testlər multisite mühitində işə düşür

### Kod Standartları (Code Standards)

- **WordPress Kod Standartları**: PHPCS vasitəsilə tətbiq edilir
- **PHP 7.4+ Uyğunluğu**: Müasir PHP xüsusiyyətləri dəstəklənir
- **Statik Analiz**: Tip yoxlaması üçün PHPStan inteqrasiyası
- **Kod Müasirləşdirilməsi**: PHP yüksəltmələri üçün Rector qaydaları

### Qurulma Sistemi (Build System)

- **Asset Emalı**: CSS/JS faylları üçün minifikasiya
- **Tərcümə**: POT faylı generasiyası
- **Paketləmə**: Paylanma üçün arxiv yaratmaq
- **İnkişaf Rejimi**: Debugging üçün minifikasiya edilməmiş fayllar

## Konfiqurasiya (Configuration)

Addon, şəbəkə administrator interfeysindən əlçatan müxtəlif konfiqurasiya seçimlərini dəstəkləyir.

## Hooks və Filters

### Actions (Hərəkətlər)

- `ultimate-multisite-addon-template_init` - Addon ilkinləşdirildikdən sonra işə düşür
- `ultimate-multisite-addon-template_loaded` - Bütün addon faylları yükləndikdən sonra işə düşür

### Filters (Filtrlər)

- `ultimate-multisite-addon-template_settings` - Addon parametrlərini dəyişmək
- `ultimate-multisite-addon-template_enabled` - Addonun aktiv/deaktiv vəziyyətini üstələmək

## Lisenziya (License)

Bu addon GPL v3 və ya daha yeni versiyası altında lisenziyalanmışdır.

## Dəstək (Support)

Dəstək və sənədləşmə üçün [MultisiteUltimate.com](https://multisiteultimate.com) saytını ziyarət edin
## Changelog (Dəyişikliklər)

- Versiya 1.0.1 (2025-09-28): prefiksi ultimate-multisite olaraq dəyişdi; mətn domenini yenilədi; versiya artırıldı.


- Versiya (2025-09-28): prefiksi ultimate-multisite olaraq dəyişdi; mətn domenini yenilədi; versiya artırıldı.
