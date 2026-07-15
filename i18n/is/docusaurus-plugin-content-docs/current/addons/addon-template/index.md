---
title: Viðbótarsniðmát
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Viðbótarsniðmát

Viðbótarsniðmát — Ultimate Multisite.

## Kröfur {#requirements}

- WordPress 5.3 eða nýrra
- PHP 7.4 eða nýrra
- Multisite Ultimate viðbót (virk)

## Uppsetning {#installation}

1. Hladdu viðbótarskránum upp í `/wp-content/plugins/` möppuna þína
2. Virkjaðu viðbótina í gegnum valmyndina 'Plugins' í WordPress
3. Stilltu viðbótarstillingarnar í netkerfisstjórninni

## Þróun {#development}

### Uppsetning {#setup}

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

### Verkefnisskipulag {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klasar og includes
│   ├── class-multisite-ultimate-updater.php  # Uppfærslumeðhöndlari
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Megnin virkni
├── tests/                        # Einingapróf
│   ├── bootstrap.php            # Ræsiskrá prófa
│   ├── class-*-base.php         # Grunnprófsklasi
│   └── class-*-test.php         # Próftilvik
├── views/                       # Sniðmátsskrár
├── assets/                      # Fastar eignir
│   ├── css/                     # Stílsnið
│   ├── js/                      # JavaScript skrár
│   └── images/                  # Myndir
├── lang/                        # Tungumálaskrár
├── composer.json                # PHP háðir pakkar
├── package.json                 # Node.js háðir pakkar
├── phpunit.xml.dist             # PHPUnit stillingar
├── .phpcs.xml.dist              # Stillingar kóðastaðla
└── rector.php                   # Reglur fyrir nútímavæðingu kóða
```

### Prófanir {#testing}

Viðbótin inniheldur yfirgripsmikið prófunarumhverfi:

- **Einingapróf**: PHPUnit-próf með WordPress prófunarsvítu
- **Grunnprófsklasi**: Býður upp á hjálparaðferðir fyrir algengar prófunaraðstæður
- **Prófaþekja**: Stillt til að rekja kóðaþekju
- **Multisite-prófanir**: Prófanir keyra í multisite-umhverfi

### Kóðastaðlar {#code-standards}

- **WordPress kóðastaðlar**: Framfylgt með PHPCS
- **PHP 7.4+ samhæfni**: Nútímalegir PHP eiginleikar studdir
- **Stöðugreining**: PHPStan samþætting fyrir tegundaprófun
- **Nútímavæðing kóða**: Rector-reglur fyrir PHP uppfærslur

### Byggingarkerfi {#build-system}

- **Vinnsla eigna**: Smækkun fyrir CSS/JS skrár
- **Þýðing**: Myndun POT-skrár
- **Pökkun**: Gerð safnskrár fyrir dreifingu
- **Þróunarhamur**: Ósmækkaðar eignir fyrir villuleit

## Stillingar {#configuration}

Viðbótin styður ýmsa stillingarmöguleika sem eru aðgengilegir í gegnum netkerfisstjórnarviðmótið.

## Hooks og Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Keyrt eftir frumstillingu viðbótar
- `ultimate-multisite-addon-template_loaded` - Keyrt eftir að allar viðbótarskrár hafa verið hlaðnar

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Breyta viðbótarstillingum
- `ultimate-multisite-addon-template_enabled` - Hnekkja virkjaðri/óvirkjaðri stöðu viðbótar

## Leyfi {#license}

Þessi viðbót er gefin út undir GPL v3 eða nýrra leyfi.

## Aðstoð {#support}

Fyrir aðstoð og skjölun, heimsæktu [MultisiteUltimate.com](https://multisiteultimate.com)
## Breytingaskrá {#changelog}

- Útgáfa 1.0.1 (2025-09-28): endurnefna forskeyti í ultimate-multisite; uppfæra text domain; hækkun útgáfunúmers.


- Útgáfa  (2025-09-28): endurnefna forskeyti í ultimate-multisite; uppfæra text domain; hækkun útgáfunúmers.
