---
title: Tātauira Tāpiritanga
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Tātauira Tāpiri

Tātauira Tāpiritanga — Ultimate Multisite.

## Ngā Whakaritenga {#requirements}

- WordPress 5.3, teitei ake rānei
- PHP 7.4, teitei ake rānei
- Multisite Ultimate plugin (hohe)

## Tāutanga {#installation}

1. Tukuatu i ngā kōnae tāpiri ki tō whaiaronga `/wp-content/plugins/`
2. Whakahohe i te plugin mā te tahua 'Plugins' i WordPress
3. Whirihora i ngā tautuhinga tāpiri i te kaiwhakahaere whatunga

## Whakawhanaketanga {#development}

### Tatūnga {#setup}

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

### Hanganga Kaupapa {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Ngā karaehe PHP me ngā whakaurunga
│   ├── class-multisite-ultimate-updater.php  # Kaiwhakahaere whakahou
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Mahi matua
├── tests/                        # Ngā whakamātautau wae
│   ├── bootstrap.php            # Pūtakenga whakamātautau
│   ├── class-*-base.php         # Karaehe whakamātautau taketake
│   └── class-*-test.php         # Ngā kēhi whakamātautau
├── views/                       # Ngā kōnae tātauira
├── assets/                      # Ngā rawa pūmau
│   ├── css/                     # Ngā rau kāhua
│   ├── js/                      # Ngā kōnae JavaScript
│   └── images/                  # Ngā atahanga
├── lang/                        # Ngā kōnae reo
├── composer.json                # Ngā whakawhirinakitanga PHP
├── package.json                 # Ngā whakawhirinakitanga Node.js
├── phpunit.xml.dist             # Whirihoranga PHPUnit
├── .phpcs.xml.dist              # Whirihoranga paerewa waehere
└── rector.php                   # Ngā ture whakahōu waehere
```

### Whakamātautau {#testing}

Kei roto i te tāpiri tētahi anga whakamātautau whānui:

- **Ngā Whakamātautau Wae**: Ngā whakamātautau hāngai ki PHPUnit me te huinga whakamātautau WordPress
- **Karaehe Whakamātautau Taketake**: Ka whakarato tikanga āwhina mō ngā horopaki whakamātautau noa
- **Kapinga Whakamātautau**: Kua whirihoratia kia aroturuki i te kapinga waehere
- **Whakamātautau Multisite**: Ka rere ngā whakamātautau i te taiao multisite

### Ngā Paerewa Waehere {#code-standards}

- **Ngā Paerewa Waehere WordPress**: Ka whakaūngia mā PHPCS
- **Hototahitanga PHP 7.4+**: Ka tautokona ngā āhuatanga PHP hou
- **Tātari Pūmau**: Whakaurunga PHPStan mō te arowhai momo
- **Whakahōu Waehere**: Ngā ture Rector mō ngā whakahoutanga PHP

### Pūnaha Hanga {#build-system}

- **Tukatuka Rawa**: Whakaiti mō ngā kōnae CSS/JS
- **Whakamāoritanga**: Waihanga kōnae POT
- **Tākainga**: Waihanga pūranga mō te tohatoha
- **Aratau Whakawhanaketanga**: Ngā rawa kāore i whakaitia mō te patuiro

## Whirihoranga {#configuration}

Ka tautoko te tāpiri i ngā kōwhiringa whirihoranga huhua e wātea ana mā te atanga kaiwhakahaere whatunga.

## Ngā Hooks me ngā Tātari {#hooks-and-filters}

### Ngā Mahi {#actions}

- `ultimate-multisite-addon-template_init` - Ka whakakāngia i muri i te arawhitinga tāpiri
- `ultimate-multisite-addon-template_loaded` - Ka whakakāngia i muri i te utanga o ngā kōnae tāpiri katoa

### Ngā Tātari {#filters}

- `ultimate-multisite-addon-template_settings` - Whakarerekē i ngā tautuhinga tāpiri
- `ultimate-multisite-addon-template_enabled` - Tūhirua i te tūnga whakahohe/whakakore o te tāpiri

## Raihana {#license}

Kua raihanatia tēnei tāpiri i raro i te GPL v3, muri ake rānei.

## Tautoko {#support}

Mō te tautoko me ngā tuhinga, toro atu ki [MultisiteUltimate.com](https://multisiteultimate.com)
## Rangitaki Huringa {#changelog}

- Putanga 1.0.1 (2025-09-28): whakaingoa anō i te kuhimua ki ultimate-multisite; whakahou i te text domain; hiki putanga.


- Putanga  (2025-09-28): whakaingoa anō i te kuhimua ki ultimate-multisite; whakahou i te text domain; hiki putanga.
