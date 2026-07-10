---
title: Teimpléad Breiseáin
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Teimpléad Breiseáin {#addon-template}

{{ADDON_DESCRIPTION}}

## Riachtanais {#requirements}

- WordPress 5.3 nó níos airde
- PHP 7.4 nó níos airde
- breiseán Multisite Ultimate (gníomhach)

## Suiteáil {#installation}

1. Uaslódáil comhaid an bhreiseáin chuig do chomhadlann `/wp-content/plugins/`
2. Gníomhachtaigh an breiseán tríd an roghchlár 'Breiseáin' in WordPress
3. Cumraigh socruithe an bhreiseáin i riarachán an líonra

## Forbairt {#development}

### Socrú {#setup}

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

### Struchtúr an Tionscadail {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # aicmí PHP agus cuimsiúcháin
│   ├── class-multisite-ultimate-updater.php  # Láimhseálaí nuashonraithe
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Príomhfheidhmiúlacht
├── tests/                        # Tástálacha aonaid
│   ├── bootstrap.php            # Tosú tástála
│   ├── class-*-base.php         # Bun-aicme tástála
│   └── class-*-test.php         # Cásanna tástála
├── views/                       # Comhaid teimpléid
├── assets/                      # Sócmhainní statacha
│   ├── css/                     # Stílbhileoga
│   ├── js/                      # Comhaid JavaScript
│   └── images/                  # Íomhánna
├── lang/                        # Comhaid teanga
├── composer.json                # Spleáchais PHP
├── package.json                 # Spleáchais Node.js
├── phpunit.xml.dist             # Cumraíocht PHPUnit
├── .phpcs.xml.dist              # Cumraíocht caighdeán cód
└── rector.php                   # Rialacha nua-aoisithe cód
```

### Tástáil {#testing}

Cuimsíonn an breiseán creat tástála cuimsitheach:

- **Tástálacha Aonaid**: Tástálacha bunaithe ar PHPUnit le sraith tástála WordPress
- **Bun-Aicme Tástála**: Soláthraíonn modhanna cúnta do ghnáthchásanna tástála
- **Clúdach Tástála**: Cumraithe chun clúdach cód a rianú
- **Tástáil Multisite**: Ritheann tástálacha i dtimpeallacht multisite

### Caighdeáin Kóid {#code-standards}

- **Caighdeáin Chódaithe WordPress**: Curtha i bhfeidhm trí PHPCS
- **Comhoiriúnacht PHP 7.4+**: Tacaítear le gnéithe nua-aimseartha PHP
- **Anailís Statach**: Comhtháthú PHPStan le haghaidh seiceáil cineáil
- **Nua-Aoisú Cód**: Rialacha Rector le haghaidh uasghráduithe PHP

### Córas Tógála {#build-system}

- **Próiseáil Sócmhainní**: Íoslaghdú do chomhaid CSS/JS
- **Aistriúchán**: Giniúint comhaid POT
- **Pacáistiú**: Cruthú cartlainne le dáileadh
- **Mód Forbartha**: Sócmhainní neamh-íoslaghdaithe le haghaidh dífhabhtaithe

## Cumraíocht {#configuration}

Tacaíonn an breiseán le roghanna cumraíochta éagsúla atá inrochtana trí chomhéadan riarthóra an líonra.

## Crúcaí agus Scagairí {#hooks-and-filters}

### Gníomhartha {#actions}

- `ultimate-multisite-addon-template_init` - Spreagtar é tar éis tosú an bhreiseáin
- `ultimate-multisite-addon-template_loaded` - Spreagtar é tar éis gach comhad breiseáin a bheith luchtaithe

### Scagairí {#filters}

- `ultimate-multisite-addon-template_settings` - Athraigh socruithe an bhreiseáin
- `ultimate-multisite-addon-template_enabled` - Sáraigh stádas cumasaithe/díchumasaithe an bhreiseáin

## Ceadúnas {#license}

Tá an breiseán seo ceadúnaithe faoin GPL v3 nó níos déanaí.

## Tacaíocht {#support}

Le haghaidh tacaíochta agus doiciméadúcháin, tabhair cuairt ar [MultisiteUltimate.com](https://multisiteultimate.com)
## Loga Athruithe {#changelog}

- Leagan 1.0.1 (2025-09-28): athainmnigh an réimír go ultimate-multisite; nuashonraigh an fearann téacs; ardú leagain.


- Leagan  (2025-09-28): athainmnigh an réimír go ultimate-multisite; nuashonraigh an fearann téacs; ardú leagain.
