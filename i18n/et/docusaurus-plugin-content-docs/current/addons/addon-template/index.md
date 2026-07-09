---
title: Lisandmooduli mall
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Lisamooduli mall

{{ADDON_DESCRIPTION}}

## Nõuded

- WordPress 5.3 või uuem
- PHP 7.4 või uuem
- Multisite Ultimate plugin (aktiivne)

## Paigaldamine

1. Laadi lisamooduli failid üles oma `/wp-content/plugins/` kataloogi
2. Aktiveeri plugin WordPressi menüü „Pluginad” kaudu
3. Seadista lisamooduli sätted võrgu administraatori vaates

## Arendus

### Seadistamine

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

### Projekti struktuur

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klassid ja kaasatavad failid
│   ├── class-multisite-ultimate-updater.php  # Uuenduste käsitleja
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Põhifunktsionaalsus
├── tests/                        # Ühiktestid
│   ├── bootstrap.php            # Testide käivitusfail
│   ├── class-*-base.php         # Baastestiklass
│   └── class-*-test.php         # Testjuhtumid
├── views/                       # Mallifailid
├── assets/                      # Staatilised ressursid
│   ├── css/                     # Stiililehed
│   ├── js/                      # JavaScripti failid
│   └── images/                  # Pildid
├── lang/                        # Keelefailid
├── composer.json                # PHP sõltuvused
├── package.json                 # Node.js sõltuvused
├── phpunit.xml.dist             # PHPUnit konfiguratsioon
├── .phpcs.xml.dist              # Koodistandardite konfiguratsioon
└── rector.php                   # Koodi moderniseerimise reeglid
```

### Testimine

Lisamoodul sisaldab terviklikku testimisraamistikku:

- **Ühiktestid**: PHPUnit-põhised testid WordPressi testikomplektiga
- **Baastestiklass**: Pakub abimeetodeid levinud testistsenaariumide jaoks
- **Testikattuvus**: Seadistatud koodikattuvuse jälgimiseks
- **Multisite’i testimine**: Testid käivitatakse multisite-keskkonnas

### Koodistandardid

- **WordPressi koodistandardid**: Jõustatakse PHPCS-i kaudu
- **PHP 7.4+ ühilduvus**: Toetatud on kaasaegsed PHP funktsioonid
- **Staatiline analüüs**: PHPStan integratsioon tüübikontrolliks
- **Koodi moderniseerimine**: Rectori reeglid PHP uuenduste jaoks

### Ehitussüsteem

- **Ressursside töötlemine**: CSS/JS failide minimeerimine
- **Tõlkimine**: POT-faili genereerimine
- **Pakendamine**: Arhiivi loomine levitamiseks
- **Arendusrežiim**: Minimeerimata ressursid silumiseks

## Konfiguratsioon

Lisamoodul toetab mitmesuguseid konfiguratsioonivalikuid, millele pääseb ligi võrgu administraatori liidese kaudu.

## Hookid ja filtrid

### Toimingud

- `ultimate-multisite-addon-template_init` - Käivitatakse pärast lisamooduli initsialiseerimist
- `ultimate-multisite-addon-template_loaded` - Käivitatakse pärast kõigi lisamooduli failide laadimist

### Filtrid

- `ultimate-multisite-addon-template_settings` - Muuda lisamooduli sätteid
- `ultimate-multisite-addon-template_enabled` - Kirjuta üle lisamooduli lubamise/keelamise olek

## Litsents

See lisamoodul on litsentsitud GPL v3 või uuema litsentsi alusel.

## Tugi

Toe ja dokumentatsiooni jaoks külasta [MultisiteUltimate.com](https://multisiteultimate.com)
## Muudatuste logi

- Versioon 1.0.1 (2025-09-28): nimeta prefiks ümber väärtuseks ultimate-multisite; uuenda tekstidoomenit; tõsta versiooni.


- Versioon  (2025-09-28): nimeta prefiks ümber väärtuseks ultimate-multisite; uuenda tekstidoomenit; tõsta versiooni.
