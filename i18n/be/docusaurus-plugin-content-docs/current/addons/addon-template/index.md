---
title: Аддаткавы шаблон
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Аддон-шаблон {#addon-template}

{{ADDON_DESCRIPTION}}

## Патраebaванні {#requirements}

- WordPress 5.3 або больш высокія
- PHP 7.4 або больш высокія
- Прэміум-плагін Ultimate Multisite (актыўны)

## Устаноўка {#installation}

1. Загрузіце файлы аддону ў каталог `/wp-content/plugins/`
2. Актывуйце плагін праз меню «Плагіны» у WordPress
3. Наладзьце аддон у адмін-панелі сеткі

## Разработка {#development}

### Наладка {#setup}

```bash
# Устаноўка залежнасцей
composer install
npm install

# Выконванне тэстаў
npm run test

# Праверка стандартаў кода
vendor/bin/phpcs
vendor/bin/phpstan

# Выпраўленне стылістычных памылак кода
vendor/bin/phpcbf

# Пабудова для прадукцыі
npm run build
```

### Структура праекта {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP класы і ўключаелі
│   ├── class-multisite-ultimate-updater.php  # Апрацоўнік абнаўлення
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Асноўная функцыянальнасць
├── tests/                        # Тэставанне ад unit
│   ├── bootstrap.php            # Bootstrap тэставання
│   ├── class-*-base.php         # Базавы клас тэста
│   └── class-*-test.php         # Тэставыя выпадкі
├── views/                       # Файлы шаблонаў
├── assets/                      # Статычныя актывы
│   ├── css/                     # Стылістычныя кастылі
│   ├── js/                      # Файлы JavaScript
│   └── images/                  # Каліграфіі
├── lang/                        # Моўныя файлы
├── composer.json                # PHP залежнасці
├── package.json                 # Залежнасці Node.js
├── phpunit.xml.dist             # Канфігурацыя PHPUnit
├── .phpcs.xml.dist              # Канфігурацыя стандартаў кода
└── rector.php                   # Правілы мадэрнізацыі кода
```

### Тэставанне {#testing}

Аддон ўключае размаўлены тэставы фрэймворк:

- **Unit Tests**: Тэставанне на аснове PHPUnit з наборам тэстаў WordPress
- **Base Test Class**: Прадугледжвае дапаможнікі для агульных тэставых сценарыяў
- **Test Coverage**: Наладжаны для адсоткаў пакрыцця кода
- **Multisite Testing**: Тэсты праходзяць у асяроддзі multisite

### Стандарты кода {#code-standards}

- **WordPress Coding Standards**: Вымушаны праз PHPCS
- **PHP 7.4+ Compatibility**: Падтрымка сучасных функцый PHP
- **Static Analysis**: Інтеграцыя PHPStan для праверкі тыпаў
- **Code Modernization**: Правілы Rector для апаเกрацыі PHP

### Сістэма пабудовы {#build-system}

- **Asset Processing**: Мініфікацыя для файлаў CSS/JS
- **Translation**: Генерацыя файлаў POT
- **Packaging**: Стваৰэнне архіва для распылення
- **Development Mode**: Немініфікаваныя актывы для наладжвання

## Канфігурацыя {#configuration}

Аддон падтрымлівае розныя варыянты канфігурацыі, даступныя праз адмін-панель сеткі.

## Hooks і Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Выконваецца пасля ініцыялізацыі аддону
- `ultimate-multisite-addon-template_loaded` - Выконваецца пасля загрузкі ўсіх файлаў аддону

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Змена налад для аддону
- `ultimate-multisite-addon-template_enabled` - Прымусовая змена статусу ўключэння/выключэння аддону

## Ліцэнцыя {#license}

Гэты аддон ліцэнзіяваны па GPL v3 або больш высокай.

## Падтрымка {#support}

Для падтрымкі і дакументацыі наведайце [MultisiteUltimate.com](https://multisiteultimate.com)
## Журнал змены {#changelog}

- Версія 1.0.1 (2025-09-28): змена прафікса на ultimate-multisite; абнаўленне тэкставай сферы; павышэнне версіі.


- Версія (2025-09-28): змена прафікса на ultimate-multisite; абнаўленне тэкставай сферы; павышэнне версіі.
