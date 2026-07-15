---
title: Isifanekiso Sesengezo
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Isifanekiso Sesengezo

Isifanekiso Sesengezo — Ultimate Multisite.

## Izidingo {#requirements}

- WordPress 5.3 noma ngaphezulu
- PHP 7.4 noma ngaphezulu
- i-plugin ye-Multisite Ultimate (iyasebenza)

## Ukufaka {#installation}

1. Layisha amafayela esengezo kuhla lwemibhalo yakho ethi `/wp-content/plugins/`
2. Yenza i-plugin isebenze ngemenyu ethi 'Plugins' ku-WordPress
3. Lungiselela izilungiselelo zesengezo kumphathi wenethiwekhi

## Ukuthuthukisa {#development}

### Ukusetha {#setup}

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

### Isakhiwo Sephrojekthi {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # amakilasi e-PHP nokufakiwe
│   ├── class-multisite-ultimate-updater.php  # isiphathi sokubuyekeza
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # ukusebenza okuyinhloko
├── tests/                        # ukuhlolwa kwama-unit
│   ├── bootstrap.php            # ukuqala kokuhlola
│   ├── class-*-base.php         # ikilasi lokuhlola eliyisisekelo
│   └── class-*-test.php         # izimo zokuhlola
├── views/                       # amafayela ezifanekiso
├── assets/                      # amafa angashintshi
│   ├── css/                     # amashidi esitayela
│   ├── js/                      # amafayela e-JavaScript
│   └── images/                  # izithombe
├── lang/                        # amafayela olimi
├── composer.json                # okuncikwe kukho kwe-PHP
├── package.json                 # okuncikwe kukho kwe-Node.js
├── phpunit.xml.dist             # ukulungiselelwa kwe-PHPUnit
├── .phpcs.xml.dist              # ukulungiselelwa kwamazinga ekhodi
└── rector.php                   # imithetho yokwenza ikhodi ibe yesimanje
```

### Ukuhlola {#testing}

Isengezo sifaka uhlaka lokuhlola olubanzi:

- **Ukuhlolwa Kwama-Unit**: Ukuhlolwa okusekelwe ku-PHPUnit ngesethi yokuhlola ye-WordPress
- **Ikilasi Lokuhlola Eliyisisekelo**: Linikeza izindlela zosizo zezimo zokuhlola ezivamile
- **Ukumbozwa Kokuhlola**: Kulungiselelwe ukulandelela ukumbozwa kwekhodi
- **Ukuhlola kwe-Multisite**: Ukuhlolwa kuqhutshwa endaweni ye-multisite

### Amazinga Ekhodi {#code-standards}

- **Amazinga Okubhala Ikhodi e-WordPress**: Aphoqelelwa nge-PHPCS
- **Ukuhambisana ne-PHP 7.4+**: Izici zesimanje ze-PHP ziyasekelwa
- **Ukuhlaziywa Okunganyakazi**: Ukuhlanganiswa kwe-PHPStan kokuhlola izinhlobo
- **Ukwenza Ikhodi Ibe Yesimanje**: Imithetho ye-Rector yokuthuthukiswa kwe-PHP

### Uhlelo Lokwakha {#build-system}

- **Ukucutshungulwa Kwamafa**: Ukuncishiswa kwamafayela e-CSS/JS
- **Ukuhumusha**: Ukwenziwa kwefayela le-POT
- **Ukupakisha**: Ukwakhiwa kwe-archive yokusabalalisa
- **Imodi Yokuthuthukisa**: Amafa angancishisiwe okuthola nokulungisa amaphutha

## Ukulungiselela {#configuration}

Isengezo sisekela izinketho ezihlukahlukene zokulungiselela ezifinyeleleka ngesikhombimsebenzisi somphathi wenethiwekhi.

## Ama-Hooks nama-Filters {#hooks-and-filters}

### Izenzo {#actions}

- `ultimate-multisite-addon-template_init` - Kuqaliswa ngemva kokuqaliswa kwesengezo
- `ultimate-multisite-addon-template_loaded` - Kuqaliswa ngemva kokulayishwa kwawo wonke amafayela esengezo

### Ama-Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Shintsha izilungiselelo zesengezo
- `ultimate-multisite-addon-template_enabled` - Yeqa isimo sokuvula/ukuvala isengezo

## Ilayisensi {#license}

Lesi sengezo sinikezwe ilayisensi ngaphansi kwe-GPL v3 noma yakamuva.

## Ukusekelwa {#support}

Ukuze uthole ukusekelwa nemibhalo, vakashela [MultisiteUltimate.com](https://multisiteultimate.com)
## Ilogu Yezinguquko {#changelog}

- Inguqulo 1.0.1 (2025-09-28): qamba kabusha isiqalo sibe ultimate-multisite; buyekeza i-text domain; ukukhuphula inguqulo.


- Inguqulo  (2025-09-28): qamba kabusha isiqalo sibe ultimate-multisite; buyekeza i-text domain; ukukhuphula inguqulo.
