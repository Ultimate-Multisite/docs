---
title: Ŝablono de aldonaĵo
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Ŝablono de aldonaĵo

{{ADDON_DESCRIPTION}}

## Postuloj

- WordPress 5.3 aŭ pli nova
- PHP 7.4 aŭ pli nova
- Multisite Ultimate kromprogramo (aktiva)

## Instalado

1. Alŝutu la dosierojn de la aldonaĵo al via dosierujo `/wp-content/plugins/`
2. Aktivigu la kromprogramon per la menuo 'Kromprogramoj' en WordPress
3. Agordu la agordojn de la aldonaĵo en la reta administrado

## Disvolvado

### Agordo

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

### Projekta strukturo

```
ultimate-multisite-addon-template/
├── inc/                          # PHP-klasoj kaj inkluzivaĵoj
│   ├── class-multisite-ultimate-updater.php  # Ĝisdatiga traktilo
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Ĉefa funkcieco
├── tests/                        # Unuotestoj
│   ├── bootstrap.php            # Testa praŝargo
│   ├── class-*-base.php         # Baza testoklaso
│   └── class-*-test.php         # Testokazoj
├── views/                       # Ŝablonaj dosieroj
├── assets/                      # Statikaj rimedoj
│   ├── css/                     # Stilfolioj
│   ├── js/                      # JavaScript-dosieroj
│   └── images/                  # Bildoj
├── lang/                        # Lingvaj dosieroj
├── composer.json                # PHP-dependaĵoj
├── package.json                 # Node.js-dependaĵoj
├── phpunit.xml.dist             # PHPUnit-agordo
├── .phpcs.xml.dist              # Agordo de kodaj normoj
└── rector.php                   # Reguloj por koda modernigo
```

### Testado

La aldonaĵo inkluzivas ampleksan testan kadron:

- **Unuotestoj**: PHPUnit-bazitaj testoj kun WordPress-testaro
- **Baza testoklaso**: Provizas helpajn metodojn por oftaj testaj scenaroj
- **Testa kovrado**: Agordita por spuri kodan kovradon
- **Multisite-testado**: Testoj ruliĝas en multisite-medio

### Kodaj normoj

- **WordPress-kodaj normoj**: Devigitaj per PHPCS
- **PHP 7.4+ kongrueco**: Modernaj PHP-funkcioj subtenataj
- **Statika analizo**: PHPStan-integriĝo por tipkontrolado
- **Koda modernigo**: Rector-reguloj por PHP-ĝisdatigoj

### Konstrusistemo

- **Rimeda prilaborado**: Minimumigo por CSS/JS-dosieroj
- **Tradukado**: Generado de POT-dosiero
- **Pakado**: Kreado de arkivo por distribuado
- **Disvolva reĝimo**: Nemimimumigitaj rimedoj por sencimigado

## Agordo

La aldonaĵo subtenas diversajn agordajn opciojn alireblajn per la reta administra interfaco.

## Hokoj kaj filtriloj

### Agoj

- `ultimate-multisite-addon-template_init` - Lanĉita post pravalorizo de la aldonaĵo
- `ultimate-multisite-addon-template_loaded` - Lanĉita post kiam ĉiuj dosieroj de la aldonaĵo estas ŝargitaj

### Filtriloj

- `ultimate-multisite-addon-template_settings` - Modifi agordojn de la aldonaĵo
- `ultimate-multisite-addon-template_enabled` - Superregi la staton de ebligo/malebligo de la aldonaĵo

## Permesilo

Ĉi tiu aldonaĵo estas licencita laŭ GPL v3 aŭ posta.

## Subteno

Por subteno kaj dokumentaro, vizitu [MultisiteUltimate.com](https://multisiteultimate.com)
## Ŝanĝprotokolo

- Versio 1.0.1 (2025-09-28): alinomi prefikson al ultimate-multisite; ĝisdatigi tekstan domajnon; versia altigo.


- Versio  (2025-09-28): alinomi prefikson al ultimate-multisite; ĝisdatigi tekstan domajnon; versia altigo.
