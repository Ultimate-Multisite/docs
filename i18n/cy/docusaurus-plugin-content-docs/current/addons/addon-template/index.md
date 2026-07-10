---
title: Model ychwaneg
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Template Addon {#addon-template}

{{ADDON_DESCRIPTION}}

## Ystyriedion {#requirements}

- WordPress 5.3 neu fwy
- PHP 7.4 neu fwy
- Plugin Multisite Ultimate (defnyddio)

## Rheoliad {#installation}

1. Rhowch y cyfathrebu'r addon i'r gyfarwyddiad `/wp-content/plugins/`
2. Actiwch y plugin drwy'r menyn 'Plugins' yn WordPress
3. Cyflawni'r setegau'r addon yn y admin y rheol (network admin)

## Datblygiad {#development}

### Rheoliad {#setup}

```bash
# Rhowch y cyfathrebu'r cyfyngedigion
composer install
npm install

# Runo'r gwylioedd
npm run test

# Runo'r gwylioedd standard cod
vendor/bin/phpcs
vendor/bin/phpstan

# Gyfeiriad ystrefiadau styl cod
vendor/bin/phpcbf

# Cynllunio ar gyfer proddection
npm run build
```

### Estrwydd Proffesiynol {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes a chwaraethau a gynnwys
│   ├── class-multisite-ultimate-updater.php  # Gweithredwr y cyfathrebu
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Ffynoniol hanfodol
├── tests/                        # Cynodiadau unigol (Unit tests)
│   ├── bootstrap.php            # Cynodiad cynorthwyo y cynodiadau
│   ├── class-*-base.php         # Class cynodiad hanfodol
│   └── class-*-test.php         # Cynodiadau testau
├── views/                       # Fylpenau (Template files)
├── assets/                      # Asetau statol
│   ├── css/                     # Stilioedd CSS
│   ├── js/                      # Fylpenau JavaScript
│   └── images/                  # Imgynau
├── lang/                        # Fylpenau iaith
├── composer.json                # Cynlluniau PHP (PHP dependencies)
├── package.json                 # Cynlluniau Node.js (Node.js dependencies)
├── phpunit.xml.dist             # Cynodiad PHPUnit
├── .phpcs.xml.dist              # Cynodiad standardau cod
└── rector.php                   # Rheoliadau modernau cod
```

### Cynodiadau unigol (Testing) {#testing}

Mae'r addon yn cynnwys ffurf cynaliad testiau amlwg:

- **Cynodiadau Unigol**: Testau sydd ar adalaeth PHPUnit gyda set o testau WordPress.
- **Class Cynodiad Hanfodol**: Mae'n rhoi fforddion cynorthwyo i ddefnyddio mewn scenarii testiau cyffredinol.
- **Cyflenwi Testau (Test Coverage)**: Mae'n cael ei sicr ychwanegu i ddefnyddio ar gyfer cerdded cod.
- **Cynodiadau Multisite**: Cynodiadau sydd yn cael eu gwneud mewn anghytuntrio multisite.

### Standardau Cod (Code Standards) {#code-standards}

**Standardau Codig WordPress**: wedi cael ei gyfyngu trwy PHPCS
**Cyflwyniad PHP 7.4+**: Mae ffychiadau PHP modern yn cael eu chwanegu
**Analysau Statig**: Ychwanegiad PHPStan i gwerto typlau (type checking)
**Modernau Codig**: Rheoli Rector ar gyfer cyfathrydion PHP

### System Gweithredol (Build System) {#build-system}

- **Prosesio Assetau**: Minification ar gyfer ffili CSS/JS
- **Cyfieithiad**: Cynllunio POT file
- **Pencadlu**: Creu archive ar gyfer disgyblhau

- **Modd Cyhoedd (Development Mode)**: Assetau nid wedi'i minify i'r ddarganfod (debugging)

## Cysylltiadau a Fyrddau (Hooks and Filters) {#configuration}

### Gweithgareddau (Actions) {#hooks-and-filters}

- `ultimate-multisite-addon-template_init` - Mae’n cael ei cyflwyno ar ôl ychwanegu addon
- `ultimate-multisite-addon-template_loaded` - Mae’n cael ei cyflwyno ar ôl i gyd y fyliau addon wedi'u chwanegu

### Fyrddau (Filters) {#actions}

- `ultimate-multisite-addon-template_settings` - Redig y setffroi o'r addon
- `ultimate-multisite-addon-template_enabled` - Overridio statws gael/dydy addon

## Licens {#filters}

Mae’r addon hwn yn cael ei licensio o ddefnyddio GPL v3 neu fwy.

## Cysylltiad (Support) {#license}

Ar gyfer cysylltiad a nodau cyflwyniad, yr wynebu [MultisiteUltimate.com](https://multisiteultimate.com)

## Changelog {#support}

- Versi 1.0.1 (2025-09-28): newr y cyfynged i ultimate-multisite; cyfnewid y domena testun; gwneud ymboethau yr unedig.

- Versi  (2025-09-28): newr y cyfynged i ultimate-multisite; cyfnewid y domena testun; gwneud ymboethau yr unedig.
