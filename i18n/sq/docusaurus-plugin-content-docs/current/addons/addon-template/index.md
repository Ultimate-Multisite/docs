---
title: Shablloni i shtesës
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Shablloni i shtesës

Shablloni i shtesës — Ultimate Multisite.

## Kërkesat {#requirements}

- WordPress 5.3 ose më i lartë
- PHP 7.4 ose më i lartë
- Shtojca Multisite Ultimate (aktive)

## Instalimi {#installation}

1. Ngarkoni skedarët e shtesës në direktorinë tuaj `/wp-content/plugins/`
2. Aktivizoni shtojcën përmes menusë 'Shtojcat' në WordPress
3. Konfiguroni cilësimet e shtesës në administrimin e rrjetit

## Zhvillimi {#development}

### Konfigurimi {#setup}

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

### Struktura e projektit {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Klasa PHP dhe përfshirje
│   ├── class-multisite-ultimate-updater.php  # Trajtuesi i përditësimeve
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Funksionaliteti kryesor
├── tests/                        # Teste njësie
│   ├── bootstrap.php            # Nisja e testit
│   ├── class-*-base.php         # Klasa bazë e testit
│   └── class-*-test.php         # Rastet e testimit
├── views/                       # Skedarët e shablloneve
├── assets/                      # Asete statike
│   ├── css/                     # Fletë stilesh
│   ├── js/                      # Skedarë JavaScript
│   └── images/                  # Imazhe
├── lang/                        # Skedarë gjuhe
├── composer.json                # Varësi PHP
├── package.json                 # Varësi Node.js
├── phpunit.xml.dist             # Konfigurimi i PHPUnit
├── .phpcs.xml.dist              # Konfigurimi i standardeve të kodit
└── rector.php                   # Rregulla për modernizimin e kodit
```

### Testimi {#testing}

Shtesa përfshin një kornizë gjithëpërfshirëse testimi:

- **Teste njësie**: Teste të bazuara në PHPUnit me paketën e testeve WordPress
- **Klasa bazë e testit**: Ofron metoda ndihmëse për skenarë të zakonshëm testimi
- **Mbulimi i testeve**: Konfiguruar për të gjurmuar mbulimin e kodit
- **Testimi Multisite**: Testet ekzekutohen në mjedis multisite

### Standardet e kodit {#code-standards}

- **Standardet e kodimit WordPress**: Zbatohen përmes PHPCS
- **Përputhshmëri me PHP 7.4+**: Mbështeten veçori moderne të PHP
- **Analizë statike**: Integrim me PHPStan për kontrollin e tipeve
- **Modernizimi i kodit**: Rregulla Rector për përmirësime të PHP

### Sistemi i ndërtimit {#build-system}

- **Përpunimi i aseteve**: Minifikim për skedarët CSS/JS
- **Përkthimi**: Gjenerim i skedarit POT
- **Paketimi**: Krijim arkivi për shpërndarje
- **Modaliteti i zhvillimit**: Asete të paminifikuara për debug

## Konfigurimi {#configuration}

Shtesa mbështet opsione të ndryshme konfigurimi të aksesueshme përmes ndërfaqes së administrimit të rrjetit.

## Hooks dhe filtrat {#hooks-and-filters}

### Veprimet {#actions}

- `ultimate-multisite-addon-template_init` - Aktivizohet pas inicializimit të shtesës
- `ultimate-multisite-addon-template_loaded` - Aktivizohet pasi të jenë ngarkuar të gjithë skedarët e shtesës

### Filtrat {#filters}

- `ultimate-multisite-addon-template_settings` - Modifikoni cilësimet e shtesës
- `ultimate-multisite-addon-template_enabled` - Anashkaloni statusin e aktivizimit/çaktivizimit të shtesës

## Licenca {#license}

Kjo shtesë licencohet sipas GPL v3 ose më të vonshme.

## Mbështetje {#support}

Për mbështetje dhe dokumentacion, vizitoni [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog {#changelog}

- Versioni 1.0.1 (2025-09-28): riemërtoni prefiksin në ultimate-multisite; përditësoni domenin e tekstit; rritje versioni.


- Versioni  (2025-09-28): riemërtoni prefiksin në ultimate-multisite; përditësoni domenin e tekstit; rritje versioni.
