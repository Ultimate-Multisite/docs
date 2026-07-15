---
title: Mudell taż-Żieda
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Mudell ta' Estensjoni

Mudell taż-Żieda — Ultimate Multisite.

## Rekwiżiti {#requirements}

- WordPress 5.3 jew ogħla
- PHP 7.4 jew ogħla
- plugin Multisite Ultimate (attiv)

## Installazzjoni {#installation}

1. Tella' l-fajls tal-estensjoni fid-direttorju `/wp-content/plugins/` tiegħek
2. Attiva l-plugin permezz tal-menu 'Plugins' f'WordPress
3. Ikkonfigura s-settings tal-estensjoni fl-amministrazzjoni tan-network

## Żvilupp {#development}

### Tħejjija {#setup}

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

### Struttura tal-Proġett {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Klassijiet PHP u includes
│   ├── class-multisite-ultimate-updater.php  # Handler tal-aġġornament
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Funzjonalità ewlenija
├── tests/                        # Testijiet tal-unità
│   ├── bootstrap.php            # Bootstrap tat-test
│   ├── class-*-base.php         # Klassi bażi tat-test
│   └── class-*-test.php         # Każijiet tat-test
├── views/                       # Fajls tal-mudelli
├── assets/                      # Assi statiċi
│   ├── css/                     # Stylesheets
│   ├── js/                      # Fajls JavaScript
│   └── images/                  # Stampi
├── lang/                        # Fajls tal-lingwa
├── composer.json                # Dipendenzi PHP
├── package.json                 # Dipendenzi Node.js
├── phpunit.xml.dist             # Konfigurazzjoni ta' PHPUnit
├── .phpcs.xml.dist              # Konfigurazzjoni tal-istandards tal-kodiċi
└── rector.php                   # Regoli għall-immodernizzar tal-kodiċi
```

### Ittestjar {#testing}

L-estensjoni tinkludi qafas komprensiv għall-ittestjar:

- **Testijiet tal-Unità**: Testijiet ibbażati fuq PHPUnit bis-suite tat-testijiet ta' WordPress
- **Klassi Bażi tat-Test**: Tipprovdi metodi ta' għajnuna għal xenarji ta' test komuni
- **Kopertura tat-Testijiet**: Ikkonfigurata biex issegwi l-kopertura tal-kodiċi
- **Ittestjar Multisite**: It-testijiet jitħaddmu f'ambjent multisite

### Standards tal-Kodiċi {#code-standards}

- **Standards tal-Kodifikazzjoni ta' WordPress**: Infurzati permezz ta' PHPCS
- **Kompatibbiltà ma' PHP 7.4+**: Karatteristiċi moderni ta' PHP appoġġjati
- **Analiżi Statika**: Integrazzjoni ta' PHPStan għall-iċċekkjar tat-tipi
- **Immodernizzar tal-Kodiċi**: Regoli ta' Rector għal aġġornamenti ta' PHP

### Sistema tal-Bini {#build-system}

- **Ipproċessar tal-Assi**: Minifikazzjoni għal fajls CSS/JS
- **Traduzzjoni**: Ġenerazzjoni ta' fajl POT
- **Ippakkjar**: Ħolqien ta' arkivju għad-distribuzzjoni
- **Modalità ta' Żvilupp**: Assi mhux minifikati għad-debugging

## Konfigurazzjoni {#configuration}

L-estensjoni tappoġġja diversi għażliet ta' konfigurazzjoni aċċessibbli permezz tal-interface tal-amministrazzjoni tan-network.

## Hooks u Filtri {#hooks-and-filters}

### Azzjonijiet {#actions}

- `ultimate-multisite-addon-template_init` - Jiġi attivat wara l-inizjalizzazzjoni tal-estensjoni
- `ultimate-multisite-addon-template_loaded` - Jiġi attivat wara li jitgħabbew il-fajls kollha tal-estensjoni

### Filtri {#filters}

- `ultimate-multisite-addon-template_settings` - Immodifika s-settings tal-estensjoni
- `ultimate-multisite-addon-template_enabled` - Issupera l-istatus ta' attivazzjoni/diżattivazzjoni tal-estensjoni

## Liċenzja {#license}

Din l-estensjoni hija lliċenzjata taħt il-GPL v3 jew aktar tard.

## Appoġġ {#support}

Għal appoġġ u dokumentazzjoni, żur [MultisiteUltimate.com](https://multisiteultimate.com)
## Reġistru tal-Bidliet {#changelog}

- Verżjoni 1.0.1 (2025-09-28): semmi mill-ġdid il-prefiss għal ultimate-multisite; aġġorna t-text domain; żieda fil-verżjoni.


- Verżjoni  (2025-09-28): semmi mill-ġdid il-prefiss għal ultimate-multisite; aġġorna t-text domain; żieda fil-verżjoni.
