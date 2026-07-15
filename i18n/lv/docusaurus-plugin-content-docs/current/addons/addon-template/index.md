---
title: Papildinājuma veidne
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon veidne

Papildinājuma veidne — Ultimate Multisite.

## Prasības {#requirements}

- WordPress 5.3 vai jaunāka
- PHP 7.4 vai jaunāka
- Multisite Ultimate plugin (aktīvs)

## Instalēšana {#installation}

1. Augšupielādējiet papildinājuma failus savā `/wp-content/plugins/` direktorijā
2. Aktivizējiet plugin, izmantojot WordPress izvēlni 'Plugins'
3. Konfigurējiet papildinājuma iestatījumus tīkla administrācijā

## Izstrāde {#development}

### Iestatīšana {#setup}

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

### Projekta struktūra {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klases un iekļaujamie faili
│   ├── class-multisite-ultimate-updater.php  # Atjauninājumu apstrādātājs
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Galvenā funkcionalitāte
├── tests/                        # Vienību testi
│   ├── bootstrap.php            # Testu sāknēšana
│   ├── class-*-base.php         # Pamata testa klase
│   └── class-*-test.php         # Testu gadījumi
├── views/                       # Veidņu faili
├── assets/                      # Statiskie resursi
│   ├── css/                     # Stilu lapas
│   ├── js/                      # JavaScript faili
│   └── images/                  # Attēli
├── lang/                        # Valodu faili
├── composer.json                # PHP atkarības
├── package.json                 # Node.js atkarības
├── phpunit.xml.dist             # PHPUnit konfigurācija
├── .phpcs.xml.dist              # Koda standartu konfigurācija
└── rector.php                   # Koda modernizācijas noteikumi
```

### Testēšana {#testing}

Papildinājums ietver visaptverošu testēšanas ietvaru:

- **Vienību testi**: PHPUnit balstīti testi ar WordPress testu komplektu
- **Pamata testa klase**: Nodrošina palīgmetodes biežiem testēšanas scenārijiem
- **Testu pārklājums**: Konfigurēts koda pārklājuma izsekošanai
- **Multisite testēšana**: Testi darbojas multisite vidē

### Koda standarti {#code-standards}

- **WordPress Coding Standards**: Tiek ievēroti, izmantojot PHPCS
- **PHP 7.4+ saderība**: Atbalstītas modernas PHP funkcijas
- **Statiskā analīze**: PHPStan integrācija tipu pārbaudei
- **Koda modernizācija**: Rector noteikumi PHP jauninājumiem

### Būvēšanas sistēma {#build-system}

- **Resursu apstrāde**: CSS/JS failu minimizācija
- **Tulkošana**: POT faila ģenerēšana
- **Iepakošana**: Arhīva izveide izplatīšanai
- **Izstrādes režīms**: Neminimizēti resursi atkļūdošanai

## Konfigurācija {#configuration}

Papildinājums atbalsta dažādas konfigurācijas opcijas, kas pieejamas tīkla administrācijas saskarnē.

## Āķi un filtri {#hooks-and-filters}

### Darbības {#actions}

- `ultimate-multisite-addon-template_init` - Tiek palaists pēc papildinājuma inicializācijas
- `ultimate-multisite-addon-template_loaded` - Tiek palaists pēc visu papildinājuma failu ielādes

### Filtri {#filters}

- `ultimate-multisite-addon-template_settings` - Mainīt papildinājuma iestatījumus
- `ultimate-multisite-addon-template_enabled` - Pārrakstīt papildinājuma iespējotas/atspējotas statusu

## Licence {#license}

Šis papildinājums ir licencēts saskaņā ar GPL v3 vai jaunāku versiju.

## Atbalsts {#support}

Lai saņemtu atbalstu un dokumentāciju, apmeklējiet [MultisiteUltimate.com](https://multisiteultimate.com)
## Izmaiņu žurnāls {#changelog}

- Versija 1.0.1 (2025-09-28): pārdēvēt prefiksu uz ultimate-multisite; atjaunināt teksta domēnu; versijas palielinājums.


- Versija  (2025-09-28): pārdēvēt prefiksu uz ultimate-multisite; atjaunināt teksta domēnu; versijas palielinājums.
