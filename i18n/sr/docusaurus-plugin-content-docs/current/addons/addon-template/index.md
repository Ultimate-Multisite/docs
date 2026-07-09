---
title: Шаблон додатка
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Шаблон додатка {#addon-template}

{{ADDON_DESCRIPTION}}

## Захтеви {#requirements}

- WordPress 5.3 или новији
- PHP 7.4 или новији
- Multisite Ultimate додатак (активан)

## Инсталација {#installation}

1. Отпремите датотеке додатка у свој `/wp-content/plugins/` директоријум
2. Активирајте додатак кроз мени „Plugins“ у WordPress
3. Конфигуришите подешавања додатка у мрежној администрацији

## Развој {#development}

### Подешавање {#setup}

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

### Структура пројекта {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP класе и укључења
│   ├── class-multisite-ultimate-updater.php  # Руковалац ажурирањем
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Главна функционалност
├── tests/                        # Јединични тестови
│   ├── bootstrap.php            # Покретање тестова
│   ├── class-*-base.php         # Основна тест класа
│   └── class-*-test.php         # Тест случајеви
├── views/                       # Датотеке шаблона
├── assets/                      # Статички ресурси
│   ├── css/                     # Датотеке стилова
│   ├── js/                      # JavaScript датотеке
│   └── images/                  # Слике
├── lang/                        # Језичке датотеке
├── composer.json                # PHP зависности
├── package.json                 # Node.js зависности
├── phpunit.xml.dist             # PHPUnit конфигурација
├── .phpcs.xml.dist              # Конфигурација стандарда кода
└── rector.php                   # Правила за модернизацију кода
```

### Тестирање {#testing}

Додатак укључује свеобухватан оквир за тестирање:

- **Јединични тестови**: Тестови засновани на PHPUnit са WordPress тест пакетом
- **Основна тест класа**: Пружа помоћне методе за уобичајене тест сценарије
- **Покривеност тестовима**: Конфигурисано за праћење покривености кода
- **Multisite тестирање**: Тестови се извршавају у multisite окружењу

### Стандарди кода {#code-standards}

- **WordPress стандарди кодирања**: Спроводе се преко PHPCS
- **PHP 7.4+ компатибилност**: Подржане су модерне PHP функције
- **Статичка анализа**: PHPStan интеграција за проверу типова
- **Модернизација кода**: Rector правила за PHP надоградње

### Систем изградње {#build-system}

- **Обрада ресурса**: Минификација CSS/JS датотека
- **Превод**: Генерисање POT датотеке
- **Паковање**: Креирање архиве за дистрибуцију
- **Развојни режим**: Неминификовани ресурси за отклањање грешака

## Конфигурација {#configuration}

Додатак подржава различите опције конфигурације доступне преко интерфејса мрежне администрације.

## Куке и филтери {#hooks-and-filters}

### Радње {#actions}

- `ultimate-multisite-addon-template_init` - Покреће се након иницијализације додатка
- `ultimate-multisite-addon-template_loaded` - Покреће се након што се учитају све датотеке додатка

### Филтери {#filters}

- `ultimate-multisite-addon-template_settings` - Измените подешавања додатка
- `ultimate-multisite-addon-template_enabled` - Преиначите статус омогућавања/онемогућавања додатка

## Лиценца {#license}

Овај додатак је лиценциран под GPL v3 или новијом лиценцом.

## Подршка {#support}

За подршку и документацију посетите [MultisiteUltimate.com](https://multisiteultimate.com)
## Дневник измена {#changelog}

- Верзија 1.0.1 (2025-09-28): преименовање префикса у ultimate-multisite; ажурирање text domain; повећање верзије.


- Верзија  (2025-09-28): преименовање префикса у ultimate-multisite; ажурирање text domain; повећање верзије.
