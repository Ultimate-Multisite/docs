---
title: Àdàkọ Àfikún
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Àdàkọ Àfikún {#addon-template}

{{ADDON_DESCRIPTION}}

## Àwọn ìbéèrè {#requirements}

- WordPress 5.3 tàbí tó ga ju bẹ́ẹ̀ lọ
- PHP 7.4 tàbí tó ga ju bẹ́ẹ̀ lọ
- plugin Multisite Ultimate (ń ṣiṣẹ́)

## Fífìsórí {#installation}

1. Gbé àwọn fáìlì àfikún sí àkójọ `/wp-content/plugins/` rẹ
2. Mú plugin náà ṣiṣẹ́ nípasẹ̀ àkójọ 'Plugins' nínú WordPress
3. Ṣètò àwọn ètò àfikún nínú alábòójútó nẹ́tíwọ́ọ̀kì

## Ìdàgbàsókè {#development}

### Ìṣètò {#setup}

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

### Ìgbékalẹ̀ Iṣẹ́-ọnà {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Àwọn kíláàsì PHP àti àwọn ìfikún
│   ├── class-multisite-ultimate-updater.php  # Olùtọ́jú ìmúdójúìwọ̀n
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Iṣẹ́ pàtàkì
├── tests/                        # Àwọn ìdánwò ẹyọ
│   ├── bootstrap.php            # Ìbẹ̀rẹ̀ ìdánwò
│   ├── class-*-base.php         # Kíláàsì ìdánwò ìpìlẹ̀
│   └── class-*-test.php         # Àwọn ọ̀ràn ìdánwò
├── views/                       # Àwọn fáìlì àdàkọ
├── assets/                      # Àwọn ohun-ìní aláìyípadà
│   ├── css/                     # Àwọn stylesheet
│   ├── js/                      # Àwọn fáìlì JavaScript
│   └── images/                  # Àwọn àwòrán
├── lang/                        # Àwọn fáìlì èdè
├── composer.json                # Àwọn ìgbẹ́kẹ̀lé PHP
├── package.json                 # Àwọn ìgbẹ́kẹ̀lé Node.js
├── phpunit.xml.dist             # Ìṣètò PHPUnit
├── .phpcs.xml.dist              # Ìṣètò àwọn ìlànà kóòdù
└── rector.php                   # Àwọn òfin ìsọ̀dọ̀tun kóòdù
```

### Ìdánwò {#testing}

Àfikún náà ní fireemu iṣẹ́ ìdánwò tó péye:

- **Àwọn Ìdánwò Ẹyọ**: Àwọn ìdánwò tó dá lórí PHPUnit pẹ̀lú àkójọpọ̀ ìdánwò WordPress
- **Kíláàsì Ìdánwò Ìpìlẹ̀**: Pèsè àwọn ọ̀nà ìrànwọ́ fún àwọn ìṣẹ̀lẹ̀ ìdánwò tó wọ́pọ̀
- **Ìbòrí Ìdánwò**: A ṣètò rẹ̀ láti tọpinpin ìbòrí kóòdù
- **Ìdánwò Multisite**: Àwọn ìdánwò máa ń ṣiṣẹ́ nínú àyíká multisite

### Àwọn Ìlànà Kóòdù {#code-standards}

- **Àwọn Ìlànà Kíkọ Kóòdù WordPress**: A fi PHPCS mú wọn ṣẹ
- **Ìbámu PHP 7.4+**: Àwọn àbùdá PHP ìgbàlódé ni a ṣe àtìlẹ́yìn fún
- **Ìtúpalẹ̀ Aláìyípadà**: Ìṣopọ̀ PHPStan fún ṣíṣe àyẹ̀wò irú
- **Ìsọ̀dọ̀tun Kóòdù**: Àwọn òfin Rector fún ìgbéga PHP

### Eto Kíkọ {#build-system}

- **Ṣíṣe Àwọn Ohun-ìní**: Dín fáìlì CSS/JS kù
- **Ìtumọ̀**: Ṣíṣe fáìlì POT
- **Ìṣàkóso Ìṣàkójọ**: Ṣíṣe àkójọ fún pípínkiri
- **Ipò Ìdàgbàsókè**: Àwọn ohun-ìní tí a kò dín kù fún ṣíṣe àtúnṣe àṣìṣe

## Ìṣètò {#configuration}

Àfikún náà ṣe àtìlẹ́yìn fún oríṣiríṣi àwọn àṣàyàn ìṣètò tí a lè wọ̀lé sí nípasẹ̀ ojú-ìbánisọ̀rọ̀ alábòójútó nẹ́tíwọ́ọ̀kì.

## Àwọn Hook àti Filter {#hooks-and-filters}

### Àwọn Action {#actions}

- `ultimate-multisite-addon-template_init` - A dá a ṣiṣẹ́ lẹ́yìn ìbẹ̀rẹ̀ àfikún
- `ultimate-multisite-addon-template_loaded` - A dá a ṣiṣẹ́ lẹ́yìn tí gbogbo fáìlì àfikún bá ti kojọpọ̀

### Àwọn Filter {#filters}

- `ultimate-multisite-addon-template_settings` - Ṣàtúnṣe àwọn ètò àfikún
- `ultimate-multisite-addon-template_enabled` - Borí ipò mímú ṣiṣẹ́/ìmúṣiṣẹ́ àfikún kúrò

## Ìwé-àṣẹ {#license}

Àfikún yìí ní ìwé-àṣẹ lábẹ́ GPL v3 tàbí èyí tó wá lẹ́yìn.

## Àtìlẹ́yìn {#support}

Fún àtìlẹ́yìn àti ìwé ìtọ́nisọ́nà, ṣàbẹ̀wò sí [MultisiteUltimate.com](https://multisiteultimate.com)
## Àkọsílẹ̀ Àyípadà {#changelog}

- Ẹ̀yà 1.0.1 (2025-09-28): tún prefix lorúkọ sí ultimate-multisite; mú text domain dójúìwọ̀n; ìgbéga ẹ̀yà.


- Ẹ̀yà  (2025-09-28): tún prefix lorúkọ sí ultimate-multisite; mú text domain dójúìwọ̀n; ìgbéga ẹ̀yà.
