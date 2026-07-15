---
title: Қолаби иловагӣ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Қолаби илова

Қолаби иловагӣ — Ultimate Multisite.

## Талабот {#requirements}

- WordPress 5.3 ё болотар
- PHP 7.4 ё болотар
- плагини Multisite Ultimate (фаъол)

## Насб {#installation}

1. Файлҳои иловаро ба директорияи `/wp-content/plugins/` боргузорӣ кунед
2. Плагинро тавассути менюи 'Plugins' дар WordPress фаъол кунед
3. Танзимоти иловаро дар мудири шабака танзим кунед

## Рушд {#development}

### Танзим {#setup}

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

### Сохтори лоиҳа {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Классҳои PHP ва файлҳои дохилшаванда
│   ├── class-multisite-ultimate-updater.php  # Коркарди навсозӣ
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Функсионалии асосӣ
├── tests/                        # Санҷишҳои воҳидӣ
│   ├── bootstrap.php            # Оғози санҷиш
│   ├── class-*-base.php         # Класси асосии санҷиш
│   └── class-*-test.php         # Ҳолатҳои санҷиш
├── views/                       # Файлҳои қолаб
├── assets/                      # Дороиҳои статикӣ
│   ├── css/                     # Варақаҳои услуб
│   ├── js/                      # Файлҳои JavaScript
│   └── images/                  # Тасвирҳо
├── lang/                        # Файлҳои забон
├── composer.json                # Вобастагиҳои PHP
├── package.json                 # Вобастагиҳои Node.js
├── phpunit.xml.dist             # Танзимоти PHPUnit
├── .phpcs.xml.dist              # Танзимоти стандартҳои код
└── rector.php                   # Қоидаҳои муосирсозии код
```

### Санҷиш {#testing}

Илова дорои чаҳорчӯбаи фарогири санҷиш мебошад:

- **Санҷишҳои воҳидӣ**: Санҷишҳои асосёфта ба PHPUnit бо маҷмӯаи санҷиши WordPress
- **Класси асосии санҷиш**: Усулҳои ёрирасонро барои сенарияҳои маъмули санҷиш таъмин мекунад
- **Фарогирии санҷиш**: Барои пайгирии фарогирии код танзим шудааст
- **Санҷиши чандсомонаӣ**: Санҷишҳо дар муҳити чандсомонаӣ иҷро мешаванд

### Стандартҳои код {#code-standards}

- **Стандартҳои коднависии WordPress**: Тавассути PHPCS татбиқ мешаванд
- **Мутобиқат бо PHP 7.4+**: Хусусиятҳои муосири PHP дастгирӣ мешаванд
- **Таҳлили статикӣ**: Ҳамгироии PHPStan барои санҷиши намудҳо
- **Муосирсозии код**: Қоидаҳои Rector барои навсозии PHP

### Системаи сохт {#build-system}

- **Коркарди дороиҳо**: Хурдсозӣ барои файлҳои CSS/JS
- **Тарҷума**: Эҷоди файли POT
- **Бастабандӣ**: Эҷоди бойгонӣ барои паҳнкунӣ
- **Реҷаи рушд**: Дороиҳои хурднашуда барои ислоҳи хатоҳо

## Танзимот {#configuration}

Илова имконоти гуногуни танзимро дастгирӣ мекунад, ки тавассути интерфейси мудири шабака дастрасанд.

## Ҳукҳо ва филтрҳо {#hooks-and-filters}

### Амалҳо {#actions}

- `ultimate-multisite-addon-template_init` - Пас аз оғозёбии илова иҷро мешавад
- `ultimate-multisite-addon-template_loaded` - Пас аз бор шудани ҳамаи файлҳои илова иҷро мешавад

### Филтрҳо {#filters}

- `ultimate-multisite-addon-template_settings` - Тағйир додани танзимоти илова
- `ultimate-multisite-addon-template_enabled` - Бознависии ҳолати фаъол/ғайрифаъоли илова

## Иҷозатнома {#license}

Ин илова таҳти GPL v3 ё навтар иҷозатнома дорад.

## Дастгирӣ {#support}

Барои дастгирӣ ва ҳуҷҷатгузорӣ, ба [MultisiteUltimate.com](https://multisiteultimate.com) равед
## Таърихи тағйирот {#changelog}

- Версияи 1.0.1 (2025-09-28): пешванд ба ultimate-multisite тағйири ном шуд; домени матн навсозӣ шуд; баланд бардоштани версия.


- Версияи  (2025-09-28): пешванд ба ultimate-multisite тағйири ном шуд; домени матн навсозӣ шуд; баланд бардоштани версия.
