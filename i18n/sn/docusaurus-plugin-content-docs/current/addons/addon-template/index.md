---
title: Chimiro chewedzero
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Template yeWedzero {#addon-template}

{{ADDON_DESCRIPTION}}

## Zvinodiwa {#requirements}

- WordPress 5.3 kana yepamusoro
- PHP 7.4 kana yepamusoro
- Multisite Ultimate plugin (inoshanda)

## Kuisa {#installation}

1. Isa mafaira ewedzero mudhairekitori rako re`/wp-content/plugins/`
2. Shandisa plugin kuburikidza nemenyu ye'Plugins' muWordPress
3. Gadzirisa marongero ewedzero muadmin yetiweki

## Kuvandudza {#development}

### Kugadzirira {#setup}

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

### Chimiro chePurojekiti {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # makirasi ePHP nezvinosanganisirwa
│   ├── class-multisite-ultimate-updater.php  # mubati wekuvandudza
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # basa guru
├── tests/                        # miedzo yeunit
│   ├── bootstrap.php            # bootstrap yemuyedzo
│   ├── class-*-base.php         # kirasi yemuyedzo yepasi
│   └── class-*-test.php         # nyaya dzemuyedzo
├── views/                       # mafaira etemplate
├── assets/                      # zvinhu zvisingachinji
│   ├── css/                     # stylesheets
│   ├── js/                      # mafaira eJavaScript
│   └── images/                  # mifananidzo
├── lang/                        # mafaira emitauro
├── composer.json                # zvinotsamira zvePHP
├── package.json                 # zvinotsamira zveNode.js
├── phpunit.xml.dist             # kugadziriswa kwePHPUnit
├── .phpcs.xml.dist              # kugadziriswa kwemitemo yekodhi
└── rector.php                   # mitemo yekuvandudza kodhi
```

### Kuyedza {#testing}

Wedzero iyi inosanganisira hurongwa hwakazara hwekuyedza:

- **Miedzo yeUnit**: Miedzo yakavakirwa paPHPUnit ine test suite yeWordPress
- **Kirasi yeMuedzo Yepasi**: Inopa nzira dzinobatsira kune mamiriro akajairika emiedzo
- **Kufukidzwa kweMiedzo**: Yakagadzirirwa kutevera kufukidzwa kwekodhi
- **Kuyedza kweMultisite**: Miedzo inomhanya munharaunda yeMultisite

### Mitemo yeKodhi {#code-standards}

- **WordPress Coding Standards**: Inomanikidzwa kuburikidza nePHPCS
- **Kuenderana nePHP 7.4+**: Zvimiro zvemazuva ano zvePHP zvinotsigirwa
- **Ongororo Isingamhanyisi Kodhi**: Kubatanidzwa kwePHPStan kwekutarisa marudzi
- **Kuvandudzwa kweKodhi**: Mitemo yeRector yekukwidziridza PHP

### Hurongwa Hwekuvaka {#build-system}

- **Kugadziriswa kweZvinhu**: Kuderedzwa kwemafaira eCSS/JS
- **Kushandura Mitauro**: Kugadzirwa kwefaira rePOT
- **Kurongedza**: Kugadzirwa kwearchive yekuparadzira
- **Modhi yeKuvandudza**: Zvinhu zvisina kuderedzwa zvekutsvaga zvikanganiso

## Kugadziriswa {#configuration}

Wedzero iyi inotsigira sarudzo dzakasiyana dzekugadzirisa dzinowanikwa kuburikidza neinterface yeadmin yetiweki.

## Hooks neFilters {#hooks-and-filters}

### Zviito {#actions}

- `ultimate-multisite-addon-template_init` - Inotangwa mushure mekutanga kwewedzero
- `ultimate-multisite-addon-template_loaded` - Inotangwa mushure mekunge mafaira ese ewedzero atakurwa

### Mafilters {#filters}

- `ultimate-multisite-addon-template_settings` - Chinja marongero ewedzero
- `ultimate-multisite-addon-template_enabled` - Tsiva mamiriro ekugonesa/kudzima wedzero

## Rezinesi {#license}

Wedzero iyi ine rezinesi pasi peGPL v3 kana inotevera.

## Rutsigiro {#support}

Kuti uwane rutsigiro nemagwaro, shanyira [MultisiteUltimate.com](https://multisiteultimate.com)
## Nhoroondo Yeshanduko {#changelog}

- Version 1.0.1 (2025-09-28): chinja zita reprefix rive ultimate-multisite; gadziridza text domain; kusimudzira version.


- Version  (2025-09-28): chinja zita reprefix rive ultimate-multisite; gadziridza text domain; kusimudzira version.
