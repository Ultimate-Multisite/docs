---
title: Şablona Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Şablona Pêvekê

{{ADDON_DESCRIPTION}}

## Pêdivî

- WordPress 5.3 an jî bilindtir
- PHP 7.4 an jî bilindtir
- Plugin-a Multisite Ultimate (çalak)

## Sazkirin

1. Pelên pêvekê bar bike nav pelrêça xwe ya `/wp-content/plugins/`
2. Pluginê bi riya menuya 'Pêvek' di WordPress de çalak bike
3. Mîhengên pêvekê di rêveberiya torê de saz bike

## Pêşvebirin

### Sazkirin

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

### Avahiya Projeyê

```
ultimate-multisite-addon-template/
├── inc/                          # Polên PHP û pelên têxistinê
│   ├── class-multisite-ultimate-updater.php  # Rêvebera nûvekirinê
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Karûbarê sereke
├── tests/                        # Testên yekeyî
│   ├── bootstrap.php            # Destpêkirina testê
│   ├── class-*-base.php         # Pola bingehîn a testê
│   └── class-*-test.php         # Rewşên testê
├── views/                       # Pelên şablonê
├── assets/                      # Sermayeyên statîk
│   ├── css/                     # Pelên şêwazê
│   ├── js/                      # Pelên JavaScript
│   └── images/                  # Wêne
├── lang/                        # Pelên zimanî
├── composer.json                # Girêdaniyên PHP
├── package.json                 # Girêdaniyên Node.js
├── phpunit.xml.dist             # Mîhengên PHPUnit
├── .phpcs.xml.dist              # Mîhengên standardên kodê
└── rector.php                   # Rêzikên nûjenkirina kodê
```

### Testkirin

Ev pêvek çarçoveyeke testkirinê ya berfireh dihewîne:

- **Testên Yekeyî**: Testên li ser bingeha PHPUnit bi komika testê ya WordPress
- **Pola Bingehîn a Testê**: Ji bo senaryoyên testê yên hevpar rêbazên alîkar pêşkêş dike
- **Rûmeta Testê**: Ji bo şopandina rûmeta kodê hatî saz kirin
- **Testkirina Multisite**: Test di jîngeha multisite de têne xebitandin

### Standardên Kodê

- **Standardên Kodnivîsê yên WordPress**: Bi PHPCS têne ferzkirin
- **Lihevhatina PHP 7.4+**: Taybetmendiyên nûjen ên PHP têne piştgirîkirin
- **Analîza Statîk**: Yekbûna PHPStan ji bo kontrolkirina cureyan
- **Nûjenkirina Kodê**: Rêzikên Rector ji bo bilindkirinên PHP

### Pergala Avakirinê

- **Pêvajoya Sermayeyan**: Biçûkkirin ji bo pelên CSS/JS
- **Wergerandin**: Çêkirina pela POT
- **Pakêt kirin**: Çêkirina arşîvê ji bo belavkirinê
- **Moda Pêşvebirinê**: Sermayeyên ne-biçûkkirî ji bo şaşîtîgirtinê

## Mîheng

Ev pêvek vebijarkên mîhengê yên cuda piştgirî dike ku bi navrûya rêveberiya torê dikarin bên gihîştin.

## Hook û Filter

### Çalakî

- `ultimate-multisite-addon-template_init` - Piştî destpêkirina pêvekê tê xebitandin
- `ultimate-multisite-addon-template_loaded` - Piştî barkirina hemû pelên pêvekê tê xebitandin

### Filter

- `ultimate-multisite-addon-template_settings` - Mîhengên pêvekê biguherîne
- `ultimate-multisite-addon-template_enabled` - Rewşa çalak/neçalak a pêvekê serwer bike

## Lîsans

Ev pêvek di bin lîsansa GPL v3 an jî ya paş wê de ye.

## Piştgirî

Ji bo piştgirî û belgekirinê, biçin [MultisiteUltimate.com](https://multisiteultimate.com)
## Dîroka Guhertinan

- Guherto 1.0.1 (2025-09-28): pêşnavê bike ultimate-multisite; text domain nûve bike; guhertoyê bilind bike.


- Guherto  (2025-09-28): pêşnavê bike ultimate-multisite; text domain nûve bike; guhertoyê bilind bike.
