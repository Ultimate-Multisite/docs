---
title: Exemplar Additamenti
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Additamenti Formula

{{ADDON_DESCRIPTION}}

## Requisita

- WordPress 5.3 aut superior
- PHP 7.4 aut superior
- Multisite Ultimate pluginum (activum)

## Installatio

1. Fasciculos additamenti in directorium tuum `/wp-content/plugins/` imposi
2. Pluginum per indicem 'Plugins' in WordPress activa
3. Optiones additamenti in administratione retis configura

## Progressio

### Institutio

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

### Structura Proiecti

```
ultimate-multisite-addon-template/
├── inc/                          # Classes PHP et inclusa
│   ├── class-multisite-ultimate-updater.php  # Administrator renovationis
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Munus principale
├── tests/                        # Probationes unitatum
│   ├── bootstrap.php            # Initium probationum
│   ├── class-*-base.php         # Classis probationis fundamentalis
│   └── class-*-test.php         # Casus probationum
├── views/                       # Fasciculi formularum
├── assets/                      # Res staticae
│   ├── css/                     # Folia stilorum
│   ├── js/                      # Fasciculi JavaScript
│   └── images/                  # Imagines
├── lang/                        # Fasciculi linguarum
├── composer.json                # Dependentiae PHP
├── package.json                 # Dependentiae Node.js
├── phpunit.xml.dist             # Configuratio PHPUnit
├── .phpcs.xml.dist              # Configuratio normarum codicis
└── rector.php                   # Regulae modernizationis codicis
```

### Probatio

Additamentum structuram probationum comprehensivam includit:

- **Probationes Unitatum**: Probationes in PHPUnit fundatae cum serie probationum WordPress
- **Classis Probationis Fundamentalis**: Methodos auxiliares praebet ad communes probationis casus
- **Ambitus Probationum**: Configuratus ad ambitum codicis investigandum
- **Probatio Multisite**: Probationes in ambitu multisite currunt

### Normae Codicis

- **Normae Codificandi WordPress**: Per PHPCS exiguntur
- **Compatibilitas PHP 7.4+**: Proprietates modernae PHP sustinentur
- **Analysis Statica**: Integratio PHPStan ad typorum inspectionem
- **Modernizatio Codicis**: Regulae Rector ad emendationes PHP

### Systema Aedificationis

- **Processus Rerum**: Minificatio fasciculorum CSS/JS
- **Translatio**: Generatio fasciculi POT
- **Involucratio**: Creatio archivi ad distributionem
- **Modus Progressionis**: Res non minificatae ad depurationem

## Configuratio

Additamentum varias optiones configurationis sustinet, per interfaciem administrationis retis accessibiles.

## Hooks et Filtra

### Actiones

- `ultimate-multisite-addon-template_init` - Post initializationem additamenti excitatur
- `ultimate-multisite-addon-template_loaded` - Postquam omnes fasciculi additamenti onerati sunt excitatur

### Filtra

- `ultimate-multisite-addon-template_settings` - Optiones additamenti modifica
- `ultimate-multisite-addon-template_enabled` - Statum activandi/deactivandi additamenti supera

## Licentia

Hoc additamentum sub GPL v3 aut posteriore licentiatum est.

## Auxilium

Ad auxilium et documentationem, visita [MultisiteUltimate.com](https://multisiteultimate.com)
## Index Mutationum

- Versio 1.0.1 (2025-09-28): prefixum ad ultimate-multisite renominare; dominium textus renovare; incrementum versionis.


- Versio  (2025-09-28): prefixum ad ultimate-multisite renominare; dominium textus renovare; incrementum versionis.
