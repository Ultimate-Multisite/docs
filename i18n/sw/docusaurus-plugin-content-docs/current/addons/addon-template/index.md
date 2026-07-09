---
title: Muundo wa Ongezeko
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Muundo wa Addon {#addon-template}

{{ADDON_DESCRIPTION}}

## Mahitaji {#requirements}

- WordPress 5.3 au zaidi
- PHP 7.4 au zaidi
- Plugin ya Ultimate Multisite (imefunguliwa)

## Usakinishaji {#installation}

1. Pakia faili za addon kwenye saraka yako ya `/wp-content/plugins/`
2. Fungulia plugin kupitia menyu ya 'Plugins' ndani ya WordPress
3. Sanifisha mipangilio ya addon kwenye network admin

## Uendelezaji {#development}

### Kuandaa (Setup) {#setup}

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

### Muundo wa Mradi (Project Structure) {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Classes za PHP na sehemu zinazojumuishwa
│   ├── class-multisite-ultimate-updater.php  # Msimamizi wa updates
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Utendaji mkuu
├── tests/                        # Vipimo vya kitengo (Unit tests)
│   ├── bootstrap.php            # Kuandaa vipimo
│   ├── class-*-base.php         # Class ya msingi ya vipimo
│   └── class-*-test.php         # Mifano ya vipimo
├── views/                       # Faili za muundo (Template files)
├── assets/                      # Rasilimali zisizobadilika (Static assets)
│   ├── css/                     # Faili za mitindo (Stylesheets)
│   ├── js/                      # Faili za JavaScript
│   └── images/                  # Picha
├── lang/                        # Faili za lugha
├── composer.json                # Dependencies za PHP
├── package.json                 # Dependencies za Node.js
├── phpunit.xml.dist             # Mipangilio ya PHPUnit
├── .phpcs.xml.dist              # Mipangilio ya viwango vya msimbo
└── rector.php                   # Kanuni za kuboresha msimbo
```

### Vipimo (Testing) {#testing}

Addon inajumuisha mfumo kamili wa kufanya vipimo:

- **Unit Tests**: Vipimo vinavyotokana na PHPUnit na seti ya vipimo ya WordPress
- **Base Test Class**: Inatoa njia za msaada kwa ajili ya matukio ya kawaida ya vipimo
- **Test Coverage**: Imewekwa kufuatilia kiwango cha kufunikwa kwa msimbo
- **Multisite Testing**: Vipimo vinatendeka katika mazingira ya multisite

### Viwango vya Msimbo (Code Standards) {#code-standards}

- **WordPress Coding Standards**: Vinatunzwa kupitia PHPCS
- **PHP 7.4+ Compatibility**: Vipengele vya kisasa vya PHP vinasaudiwa
- **Static Analysis**: Ujumuishaji wa PHPStan kwa ajili ya kuangalia aina za data (type checking)
- **Code Modernization**: Kanuni za Rector kwa ajili ya kuboresha PHP

### Mfumo wa Kuunda (Build System) {#build-system}

- **Asset Processing**: Kupunguza ukubwa (Minification) kwa faili za CSS/JS
- **Translation**: Kuunda faili za POT
- **Packaging**: Kuunda hifadhi (Archive) kwa ajili ya usambazaji
- **Development Mode**: Rasilimali zisizopunguzwa kwa ajili ya kutatua matatizo (debugging)

## Mipangilio (Configuration) {#configuration}

Addon inasaidia chaguo mbalimbali za mipangilio ambazo zinaweza kufikiwa kupitia interface ya network admin.

## Hooks na Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Inatokea baada ya kuanzishwa kwa addon
- `ultimate-multisite-addon-template_loaded` - Inatokea baada ya kuingizwa kwa faili zote za addon

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Kubadilisha mipangilio ya addon
- `ultimate-multisite-addon-template_enabled` - Kubatilisha hali ya kuwepo/kutowepo kwa addon

## Leseni (License) {#license}

Addon hii inasimamiwa chini ya GPL v3 au baadaye.

## Msaada (Support) {#support}

Kwa msaada na waraka, tembelea [MultisiteUltimate.com](https://multisiteultimate.com)
## Historia ya Mabadiliko (Changelog) {#changelog}

- Version 1.0.1 (2025-09-28): kubadilisha kiambatanisho (prefix) kuwa ultimate-multisite; kuboresha eneo la maandishi (text domain); kuongeza namba ya toleo.


- Version (2025-09-28): kubadilisha kiambatanisho (prefix) kuwa ultimate-multisite; kuboresha eneo la maandishi (text domain); kuongeza namba ya toleo.
