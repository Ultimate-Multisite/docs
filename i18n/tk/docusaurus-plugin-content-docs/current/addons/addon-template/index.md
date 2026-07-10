---
title: Goşmaça şablony
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Goşmaça şablony {#addon-template}

{{ADDON_DESCRIPTION}}

## Talaplar {#requirements}

- WordPress 5.3 ýa-da has ýokary
- PHP 7.4 ýa-da has ýokary
- Multisite Ultimate plugin (işjeň)

## Gurnama {#installation}

1. Goşmaça faýllaryny `/wp-content/plugins/` katalogyňyza ýükläň
2. WordPress-de 'Plugins' menýusy arkaly plugini işjeňleşdiriň
3. Goşmaça sazlamalaryny tor administratorynda sazlaň

## Ösdüriş {#development}

### Sazlama {#setup}

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

### Taslamanyň gurluşy {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klaslary we goşmalar
│   ├── class-multisite-ultimate-updater.php  # Täzelenme işledijisi
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Esasy funksiýalar
├── tests/                        # Modul synaglary
│   ├── bootstrap.php            # Synag başlangyjy
│   ├── class-*-base.php         # Esasy synag klasy
│   └── class-*-test.php         # Synag ýagdaýlary
├── views/                       # Şablon faýllary
├── assets/                      # Statik serişdeler
│   ├── css/                     # Stil sahypalary
│   ├── js/                      # JavaScript faýllary
│   └── images/                  # Suratlar
├── lang/                        # Dil faýllary
├── composer.json                # PHP garaşlylyklary
├── package.json                 # Node.js garaşlylyklary
├── phpunit.xml.dist             # PHPUnit konfigurasiýasy
├── .phpcs.xml.dist              # Kod standartlary konfigurasiýasy
└── rector.php                   # Kody döwrebaplaşdyrmak düzgünleri
```

### Synag {#testing}

Goşmaça giňişleýin synag çarçuwasyny öz içine alýar:

- **Modul synaglary**: WordPress synag toplumy bilen PHPUnit esasly synaglar
- **Esasy synag klasy**: Umumy synag ýagdaýlary üçin kömekçi usullary üpjün edýär
- **Synag örtügi**: Kod örtügini yzarlamak üçin sazlanan
- **Multisite synagy**: Synaglar multisite gurşawynda işleýär

### Kod standartlary {#code-standards}

- **WordPress kod standartlary**: PHPCS arkaly ýerine ýetirilýär
- **PHP 7.4+ laýyklygy**: Döwrebap PHP aýratynlyklary goldanylýar
- **Statik analiz**: Görnüş barlagy üçin PHPStan integrasiýasy
- **Kody döwrebaplaşdyrmak**: PHP täzelenmeleri üçin Rector düzgünleri

### Gurluş ulgamy {#build-system}

- **Serişdeleri işlemek**: CSS/JS faýllary üçin kiçeltme
- **Terjime**: POT faýlyny döretmek
- **Gaplama**: Paýlamak üçin arhiw döretmek
- **Ösdüriş tertibi**: Düzediş üçin kiçeldilmedik serişdeler

## Konfigurasiýa {#configuration}

Goşmaça tor administratory interfeýsi arkaly elýeterli dürli konfigurasiýa opsiýalaryny goldaýar.

## Hooklar we süzgüçler {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Goşmaça başlangyçdan geçirilenden soň işledilýär
- `ultimate-multisite-addon-template_loaded` - Ähli goşmaça faýllary ýüklenenden soň işledilýär

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Goşmaça sazlamalaryny üýtgediň
- `ultimate-multisite-addon-template_enabled` - Goşmaçanyň işjeňleşdirme/öçürme ýagdaýyny üýtgedip ýazyň

## Lisenziýa {#license}

Bu goşmaça GPL v3 ýa-da soňraky wersiýa boýunça lisenziýalanýar.

## Goldaw {#support}

Goldaw we resminamalar üçin [MultisiteUltimate.com](https://multisiteultimate.com) sahypasyna baryp görüň
## Üýtgeşmeler sanawy {#changelog}

- Wersiýa 1.0.1 (2025-09-28): prefiksi ultimate-multisite görnüşine üýtgetmek; text domain-i täzelmek; wersiýany ýokarlandyrmak.


- Wersiýa  (2025-09-28): prefiksi ultimate-multisite görnüşine üýtgetmek; text domain-i täzelmek; wersiýany ýokarlandyrmak.
