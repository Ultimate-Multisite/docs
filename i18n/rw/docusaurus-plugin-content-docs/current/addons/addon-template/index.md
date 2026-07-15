---
title: Inyandikorugero y’inyongera
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Inyandikorugero y’inyongera

Inyandikorugero y’inyongera — Ultimate Multisite.

## Ibisabwa {#requirements}

- WordPress 5.3 cyangwa irenzeho
- PHP 7.4 cyangwa irenzeho
- plugin ya Multisite Ultimate (ikora)

## Kuyishyiramo {#installation}

1. Ohereza dosiye z’inyongera muri diregiteri yawe ya `/wp-content/plugins/`
2. Kora plugin binyuze muri menu ya 'Plugins' muri WordPress
3. Tunganya igenamiterere ry’inyongera muri admin w’urusobe

## Iterambere {#development}

### Gutegura {#setup}

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

### Imiterere y’Umushinga {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Amakilasi ya PHP n’ibindi byongerwamo
│   ├── class-multisite-ultimate-updater.php  # Umucungamutekano w’amavugurura
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Imikorere nyamukuru
├── tests/                        # Igerageza ry’ibice
│   ├── bootstrap.php            # Gutangiza igerageza
│   ├── class-*-base.php         # Kilasi shingiro y’igerageza
│   └── class-*-test.php         # Imanza z’igerageza
├── views/                       # Dosiye z’inyandikorugero
├── assets/                      # Ibikoresho bidahinduka
│   ├── css/                     # Stylesheets
│   ├── js/                      # Dosiye za JavaScript
│   └── images/                  # Amashusho
├── lang/                        # Dosiye z’indimi
├── composer.json                # Ibyo PHP ishingiraho
├── package.json                 # Ibyo Node.js ishingiraho
├── phpunit.xml.dist             # Igenamiterere rya PHPUnit
├── .phpcs.xml.dist              # Igenamiterere ry’amabwiriza y’imyandikire ya code
└── rector.php                   # Amategeko yo kuvugurura code
```

### Igerageza {#testing}

Iyi nyongera irimo urwego rw’igerageza rwuzuye:

- **Igerageza ry’Ibice**: Igerageza rishingiye kuri PHPUnit hamwe na WordPress test suite
- **Kilasi Shingiro y’Igerageza**: Itanga uburyo bufasha mu bihe bisanzwe by’igerageza
- **Uburemere bw’Igerageza**: Byagenwe gukurikirana aho code igeragezwa hose
- **Igerageza rya Multisite**: Igerageza rikorerwa mu bidukikije bya multisite

### Amabwiriza y’Imyandikire ya Code {#code-standards}

- **Amabwiriza y’Imyandikire ya Code ya WordPress**: Ashyirwa mu bikorwa binyuze kuri PHPCS
- **Guhuza na PHP 7.4+**: Ibiranga PHP bigezweho birashyigikiwe
- **Isesengura Ridahinduka**: Guhuza na PHPStan mu kugenzura ubwoko
- **Kuvugurura Code**: Amategeko ya Rector yo kuzamura PHP

### Sisitemu yo Kubaka {#build-system}

- **Gutunganya Ibikoresho**: Kugabanya ingano ya dosiye za CSS/JS
- **Ubusemuzi**: Gukora dosiye ya POT
- **Gupakira**: Gukora archive yo gukwirakwiza
- **Uburyo bw’Iterambere**: Ibikoresho bitagabanyijwe ingano byo gukemura amakosa

## Igenamiterere {#configuration}

Iyi nyongera ishyigikira amahitamo atandukanye y’igenamiterere aboneka binyuze mu nteruro ya admin w’urusobe.

## Hooks n’Utuyunguruzo {#hooks-and-filters}

### Ibikorwa {#actions}

- `ultimate-multisite-addon-template_init` - Ikorwa nyuma yo gutangiza inyongera
- `ultimate-multisite-addon-template_loaded` - Ikorwa nyuma y’uko dosiye zose z’inyongera zipakiwe

### Utuyunguruzo {#filters}

- `ultimate-multisite-addon-template_settings` - Hindura igenamiterere ry’inyongera
- `ultimate-multisite-addon-template_enabled` - Hindura uko ushaka uko inyongera ifungurwa/ifungwa

## Uruhushya {#license}

Iyi nyongera ifite uruhushya rwa GPL v3 cyangwa uruyikurikira.

## Ubufasha {#support}

Ku bufasha n’inyandiko, sura [MultisiteUltimate.com](https://multisiteultimate.com)
## Urutonde rw’Impinduka {#changelog}

- Verisiyo 1.0.1 (2025-09-28): hindura izina rya prefix ribe ultimate-multisite; vugurura text domain; kongera verisiyo.


- Verisiyo  (2025-09-28): hindura izina rya prefix ribe ultimate-multisite; vugurura text domain; kongera verisiyo.
