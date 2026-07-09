---
title: Itemplate Yesongezo
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Itemplate yeSongezo {#addon-template}

{{ADDON_DESCRIPTION}}

## Iimfuno {#requirements}

- WordPress 5.3 okanye ngaphezulu
- PHP 7.4 okanye ngaphezulu
- iplagin ye-Multisite Ultimate (iyasebenza)

## Ufakelo {#installation}

1. Layisha iifayile zesongezo kulawulo lwakho lwe-`/wp-content/plugins/`
2. Vula iplagin nge menyu ethi 'Plugins' kwi-WordPress
3. Qwalasela iisetingi zesongezo kulawulo lomlawuli wenethiwekhi

## Uphuhliso {#development}

### Ukuseta {#setup}

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

### Ulwakhiwo lweProjekthi {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Iiklasi ze-PHP kunye nezifakiweyo
│   ├── class-multisite-ultimate-updater.php  # Umphathi wohlaziyo
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Umsebenzi ophambili
├── tests/                        # Iimvavanyo zeeyunithi
│   ├── bootstrap.php            # Isiqalisi sovavanyo
│   ├── class-*-base.php         # Iklasi yovavanyo esisiseko
│   └── class-*-test.php         # Iimeko zovavanyo
├── views/                       # Iifayile zetemplate
├── assets/                      # Ii-asethi ezingatshintshiyo
│   ├── css/                     # Amaxwebhu ezitayile
│   ├── js/                      # Iifayile ze-JavaScript
│   └── images/                  # Imifanekiso
├── lang/                        # Iifayile zolwimi
├── composer.json                # Izixhomekeko ze-PHP
├── package.json                 # Izixhomekeko ze-Node.js
├── phpunit.xml.dist             # Uqwalaselo lwe-PHPUnit
├── .phpcs.xml.dist              # Uqwalaselo lwemigangatho yekhowudi
└── rector.php                   # Imithetho yokuhlaziya ikhowudi
```

### Ukuvavanya {#testing}

Isongezo siquka isakhelo sovavanyo esibanzi:

- **Iimvavanyo zeYunithi**: Iimvavanyo ezisekelwe kwi-PHPUnit kunye neseti yovavanyo ye-WordPress
- **Iklasi yoVavanyo eSisiseko**: Inika iindlela zoncedo kwiimeko zovavanyo eziqhelekileyo
- **Ubungakanani boVavanyo**: Buqwalaselwe ukulandelela ubungakanani bokugutyungelwa kwekhowudi
- **Uvavanyo lwe-Multisite**: Iimvavanyo ziqhutywa kwindawo ye-multisite

### Imigangatho yeKhowudi {#code-standards}

- **Imigangatho yokuKhowuda ye-WordPress**: Inyanzeliswa nge-PHPCS
- **Ukuhambelana ne-PHP 7.4+**: Iimpawu zanamhlanje ze-PHP ziyaxhaswa
- **Uhlalutyo Olungatshintshiyo**: Umdibaniso we-PHPStan wokujonga uhlobo
- **Ukuhlaziywa kweKhowudi**: Imithetho ye-Rector yohlaziyo lwe-PHP

### Inkqubo yoKwakha {#build-system}

- **Ukulungiswa kwee-Asethi**: Ukunciphisa iifayile ze-CSS/JS
- **Uguqulelo**: Ukuveliswa kwefayile ye-POT
- **Ukupakisha**: Ukwenziwa kwe-archive yokusasazwa
- **Imo yoPhuhliso**: Ii-asethi ezingancitshiswanga zokulungisa iimpazamo

## Uqwalaselo {#configuration}

Isongezo sixhasa iinketho zoqwalaselo ezahlukeneyo ezifikeleleka nge-interface yomlawuli wenethiwekhi.

## Iihuku nezihluzi {#hooks-and-filters}

### Iintshukumo {#actions}

- `ultimate-multisite-addon-template_init` - Iqalwa emva kokuqaliswa kwesongezo
- `ultimate-multisite-addon-template_loaded` - Iqalwa emva kokuba zonke iifayile zesongezo zilayishiwe

### Izihluzi {#filters}

- `ultimate-multisite-addon-template_settings` - Guqula iisetingi zesongezo
- `ultimate-multisite-addon-template_enabled` - Gqitha isimo sokuvula/ukuvala isongezo

## Ilayisensi {#license}

Esi songezo sinelayisensi phantsi kwe-GPL v3 okanye kamva.

## Inkxaso {#support}

Ngenkxaso namaxwebhu, ndwendwela [MultisiteUltimate.com](https://multisiteultimate.com)
## Ingxelo yotshintsho {#changelog}

- Inguqulelo 1.0.1 (2025-09-28): tshintsha igama le-prefix libe yi-ultimate-multisite; hlaziya text domain; nyusa inguqulelo.


- Inguqulelo  (2025-09-28): tshintsha igama le-prefix libe yi-ultimate-multisite; hlaziya text domain; nyusa inguqulelo.
