---
title: Teamplaid Tuilleadain
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Teamplaid Tuilleadain {#addon-template}

{{ADDON_DESCRIPTION}}

## Riatanasan {#requirements}

- WordPress 5.3 no nas àirde
- PHP 7.4 no nas àirde
- plugin Multisite Ultimate (gnìomhach)

## Stàladh {#installation}

1. Luchdaich suas faidhlichean an tuilleadain dhan eòlaire `/wp-content/plugins/` agad
2. Gnìomhaich am plugin tron chlàr-taice 'Plugins' ann an WordPress
3. Rèitich roghainnean an tuilleadain ann an rianachd an lìonraidh

## Leasachadh {#development}

### Suidheachadh {#setup}

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

### Structar a’ Phròiseict {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Clasaichean PHP agus in-ghabhail
│   ├── class-multisite-ultimate-updater.php  # Làimhsiche ùrachaidh
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Prìomh ghnìomhachd
├── tests/                        # Deuchainnean aonad
│   ├── bootstrap.php            # Bootstrap deuchainn
│   ├── class-*-base.php         # Clas deuchainn bunaiteach
│   └── class-*-test.php         # Cùisean deuchainn
├── views/                       # Faidhlichean teamplaid
├── assets/                      # Maoin statach
│   ├── css/                     # Duilleagan-stoidhle
│   ├── js/                      # Faidhlichean JavaScript
│   └── images/                  # Ìomhaighean
├── lang/                        # Faidhlichean cànain
├── composer.json                # Eisimeileachdan PHP
├── package.json                 # Eisimeileachdan Node.js
├── phpunit.xml.dist             # Rèiteachadh PHPUnit
├── .phpcs.xml.dist              # Rèiteachadh inbhean còd
└── rector.php                   # Riaghailtean ùrachadh còd
```

### Deuchainneachadh {#testing}

Tha frèam-obrach deuchainneachaidh coileanta anns an tuilleadan:

- **Deuchainnean Aonad**: Deuchainnean stèidhichte air PHPUnit le sreath deuchainn WordPress
- **Clas Deuchainn Bunaiteach**: A’ toirt seachad dòighean-cuideachaidh airson suidheachaidhean deuchainn cumanta
- **Còmhdach Deuchainn**: Air a rèiteachadh gus còmhdach còd a leantainn
- **Deuchainneachadh Multisite**: Ruithidh deuchainnean ann an àrainneachd multisite

### Inbhean Còd {#code-standards}

- **Inbhean Còdaidh WordPress**: Air an cur an gnìomh tro PHPCS
- **Co-chòrdalachd PHP 7.4+**: Taic do fheartan PHP ùr-nodha
- **Mion-sgrùdadh Statach**: Amalachadh PHPStan airson sgrùdadh sheòrsaichean
- **Ùrachadh Còd**: Riaghailtean Rector airson ùrachaidhean PHP

### Siostam Togail {#build-system}

- **Làimhseachadh Maoin**: Lùghdachadh airson faidhlichean CSS/JS
- **Eadar-theangachadh**: Gineadh faidhle POT
- **Pacadh**: Cruthachadh tasglainn airson sgaoileadh
- **Modh Leasachaidh**: Maoin gun lùghdachadh airson dì-bhugachadh

## Rèiteachadh {#configuration}

Tha an tuilleadan a’ toirt taic do dhiofar roghainnean rèiteachaidh a gheibhear tro eadar-aghaidh rianachd an lìonraidh.

## Hooks agus Filters {#hooks-and-filters}

### Gnìomhan {#actions}

- `ultimate-multisite-addon-template_init` - Air a chur gu dol às dèidh tòiseachadh an tuilleadain
- `ultimate-multisite-addon-template_loaded` - Air a chur gu dol às dèidh do gach faidhle tuilleadain a bhith air a luchdadh

### Criathragan {#filters}

- `ultimate-multisite-addon-template_settings` - Atharraich roghainnean an tuilleadain
- `ultimate-multisite-addon-template_enabled` - Tar-sgrìobh inbhe comasachaidh/dì-chomasachaidh an tuilleadain

## Ceadachas {#license}

Tha an tuilleadan seo fo cheadachas GPL v3 no nas ùire.

## Taic {#support}

Airson taic agus docamaideadh, tadhail air [MultisiteUltimate.com](https://multisiteultimate.com)
## Loga Atharrachaidhean {#changelog}

- Tionndadh 1.0.1 (2025-09-28): ath-ainmich an ro-leasachan gu ultimate-multisite; ùraich text domain; àrdachadh tionndaidh.


- Tionndadh  (2025-09-28): ath-ainmich an ro-leasachan gu ultimate-multisite; ùraich text domain; àrdachadh tionndaidh.
