---
title: Samfurin Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Samfurin Addon {#addon-template}

{{ADDON_DESCRIPTION}}

## Bukatu {#requirements}

- WordPress 5.3 ko sama da haka
- PHP 7.4 ko sama da haka
- plugin na Multisite Ultimate (yana kunne)

## Shigarwa {#installation}

1. Loda fayilolin addon zuwa kundin `/wp-content/plugins/` naka
2. Kunna plugin ta hanyar menu na 'Plugins' a cikin WordPress
3. Saita saitunan addon a cikin gudanarwar cibiyar sadarwa

## Haɓakawa {#development}

### Saitawa {#setup}

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

### Tsarin Aiki {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Ajin PHP da abubuwan haɗawa
│   ├── class-multisite-ultimate-updater.php  # Mai kula da sabuntawa
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Babban aiki
├── tests/                        # Gwaje-gwajen unit
│   ├── bootstrap.php            # Fara gwaji
│   ├── class-*-base.php         # Ajin gwaji na tushe
│   └── class-*-test.php         # Lamuran gwaji
├── views/                       # Fayilolin samfuri
├── assets/                      # Kayayyakin tsaye
│   ├── css/                     # Takardun salo
│   ├── js/                      # Fayilolin JavaScript
│   └── images/                  # Hotuna
├── lang/                        # Fayilolin harshe
├── composer.json                # Dogarorin PHP
├── package.json                 # Dogarorin Node.js
├── phpunit.xml.dist             # Daidaitawar PHPUnit
├── .phpcs.xml.dist              # Daidaitawar ƙa’idodin code
└── rector.php                   # Ka’idojin zamanantar da code
```

### Gwaji {#testing}

Addon ɗin ya ƙunshi cikakken tsarin gwaji:

- **Gwaje-gwajen Unit**: Gwaje-gwaje masu dogaro da PHPUnit tare da WordPress test suite
- **Ajin Gwaji na Tushe**: Yana samar da hanyoyin taimako don yanayin gwaji na gama gari
- **Rufin Gwaji**: An daidaita shi don bibiyar rufin code
- **Gwajin Multisite**: Gwaje-gwaje suna gudana a cikin yanayin multisite

### Ƙa’idodin Code {#code-standards}

- **WordPress Coding Standards**: Ana tilasta su ta hanyar PHPCS
- **Dacewa da PHP 7.4+**: Ana tallafawa fasalolin PHP na zamani
- **Bincike na Tsaye**: Haɗin PHPStan don duba nau’i
- **Zamanantar da Code**: Ka’idojin Rector don haɓaka PHP

### Tsarin Gina {#build-system}

- **Sarrafa Kayayyaki**: Rage girman fayilolin CSS/JS
- **Fassara**: Samar da fayil na POT
- **Kunshi**: Ƙirƙirar archive don rarrabawa
- **Yanayin Haɓakawa**: Kayayyaki marasa rage girma don debugging

## Daidaitawa {#configuration}

Addon ɗin yana tallafawa zaɓuɓɓukan daidaitawa daban-daban da ake iya samu ta hanyar manhajar gudanarwar cibiyar sadarwa.

## Hooks da Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Ana kunna shi bayan fara addon
- `ultimate-multisite-addon-template_loaded` - Ana kunna shi bayan an loda duk fayilolin addon

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Gyara saitunan addon
- `ultimate-multisite-addon-template_enabled` - Sauya matsayin kunna/kashe addon

## Lasisi {#license}

Wannan addon yana ƙarƙashin lasisin GPL v3 ko na baya.

## Tallafi {#support}

Don tallafi da takardu, ziyarci [MultisiteUltimate.com](https://multisiteultimate.com)
## Tarihin Canje-canje {#changelog}

- Siga 1.0.1 (2025-09-28): sake suna prefix zuwa ultimate-multisite; sabunta text domain; ƙara lambar siga.


- Siga  (2025-09-28): sake suna prefix zuwa ultimate-multisite; sabunta text domain; ƙara lambar siga.
