---
title: Lisäosan mallipohja
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Lisäosan malli {#addon-template}

{{ADDON_DESCRIPTION}}

## Vaatimukset {#requirements}

- WordPress 5.3 tai uudempi
- PHP 7.4 tai uudempi
- Multisite Ultimate -lisäosa (aktiivinen)

## Asennus {#installation}

1. Lataa lisäosan tiedostot `/wp-content/plugins/`-hakemistoosi
2. Aktivoi plugin WordPressin 'Plugins'-valikon kautta
3. Määritä lisäosan asetukset verkon ylläpidossa

## Kehitys {#development}

### Asennus {#setup}

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

### Projektin rakenne {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP-luokat ja sisällytykset
│   ├── class-multisite-ultimate-updater.php  # Päivityksen käsittelijä
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Päätoiminnallisuus
├── tests/                        # Yksikkötestit
│   ├── bootstrap.php            # Testien käynnistys
│   ├── class-*-base.php         # Perustestiluokka
│   └── class-*-test.php         # Testitapaukset
├── views/                       # Mallitiedostot
├── assets/                      # Staattiset resurssit
│   ├── css/                     # Tyylitiedostot
│   ├── js/                      # JavaScript-tiedostot
│   └── images/                  # Kuvat
├── lang/                        # Kielitiedostot
├── composer.json                # PHP-riippuvuudet
├── package.json                 # Node.js-riippuvuudet
├── phpunit.xml.dist             # PHPUnit-määritys
├── .phpcs.xml.dist              # Koodistandardien määritys
└── rector.php                   # Koodin modernisointisäännöt
```

### Testaus {#testing}

Lisäosa sisältää kattavan testauskehyksen:

- **Yksikkötestit**: PHPUnit-pohjaiset testit WordPress-testipaketilla
- **Perustestiluokka**: Tarjoaa apumenetelmiä yleisiin testiskenaarioihin
- **Testikattavuus**: Määritetty seuraamaan koodikattavuutta
- **Multisite-testaus**: Testit suoritetaan multisite-ympäristössä

### Koodistandardit {#code-standards}

- **WordPress-koodausstandardit**: Valvotaan PHPCS:n kautta
- **PHP 7.4+ -yhteensopivuus**: Moderneja PHP-ominaisuuksia tuetaan
- **Staattinen analyysi**: PHPStan-integraatio tyyppitarkistukseen
- **Koodin modernisointi**: Rector-säännöt PHP-päivityksiin

### Koontijärjestelmä {#build-system}

- **Resurssien käsittely**: CSS/JS-tiedostojen pienennys
- **Käännös**: POT-tiedoston luonti
- **Paketointi**: Arkiston luonti jakelua varten
- **Kehitystila**: Pienentämättömät resurssit virheenkorjausta varten

## Määritykset {#configuration}

Lisäosa tukee erilaisia määritysvaihtoehtoja, jotka ovat käytettävissä verkon ylläpitoliittymän kautta.

## Hookit ja suodattimet {#hooks-and-filters}

### Toiminnot {#actions}

- `ultimate-multisite-addon-template_init` - Käynnistetään lisäosan alustuksen jälkeen
- `ultimate-multisite-addon-template_loaded` - Käynnistetään, kun kaikki lisäosan tiedostot on ladattu

### Suodattimet {#filters}

- `ultimate-multisite-addon-template_settings` - Muokkaa lisäosan asetuksia
- `ultimate-multisite-addon-template_enabled` - Ohita lisäosan käyttöönottotila

## Lisenssi {#license}

Tämä lisäosa on lisensoitu GPL v3 -lisenssillä tai uudemmalla.

## Tuki {#support}

Tukea ja dokumentaatiota varten käy osoitteessa [MultisiteUltimate.com](https://multisiteultimate.com)
## Muutosloki {#changelog}

- Versio 1.0.1 (2025-09-28): nimeä etuliite uudelleen muotoon ultimate-multisite; päivitä text domain; version korotus.


- Versio  (2025-09-28): nimeä etuliite uudelleen muotoon ultimate-multisite; päivitä text domain; version korotus.
