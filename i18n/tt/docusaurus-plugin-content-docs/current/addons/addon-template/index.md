---
title: Өстәмә шаблоны
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Өстәмә шаблоны {#addon-template}

{{ADDON_DESCRIPTION}}

## Таләпләр {#requirements}

- WordPress 5.3 яки югарырак
- PHP 7.4 яки югарырак
- Multisite Ultimate плагины (актив)

## Урнаштыру {#installation}

1. Өстәмә файлларын `/wp-content/plugins/` директориясенә йөкләгез
2. WordPress эчендәге 'Плагиннар' менюсы аша плагинны активлаштырыгыз
3. Өстәмә көйләнмәләрен челтәр администраторында көйләгез

## Эшләү {#development}

### Көйләү {#setup}

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

### Проект төзелеше {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP класслары һәм кертү файллары
│   ├── class-multisite-ultimate-updater.php  # Яңарту эшкәрткече
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Төп функциональлек
├── tests/                        # Берәмлек тестлары
│   ├── bootstrap.php            # Тест bootstrap
│   ├── class-*-base.php         # Төп тест классы
│   └── class-*-test.php         # Тест очраклары
├── views/                       # Шаблон файллары
├── assets/                      # Статик активлар
│   ├── css/                     # Стиль җәдвәлләре
│   ├── js/                      # JavaScript файллары
│   └── images/                  # Рәсемнәр
├── lang/                        # Тел файллары
├── composer.json                # PHP бәйлелекләре
├── package.json                 # Node.js бәйлелекләре
├── phpunit.xml.dist             # PHPUnit конфигурациясе
├── .phpcs.xml.dist              # Код стандартлары конфигурациясе
└── rector.php                   # Кодны заманча итү кагыйдәләре
```

### Тестлау {#testing}

Өстәмә киң колачлы тестлау каркасын үз эченә ала:

- **Берәмлек тестлары**: WordPress тест җыелмасы белән PHPUnit нигезендәге тестлар
- **Төп тест классы**: Гомуми тест сценарийлары өчен ярдәмче методлар бирә
- **Тест капланышы**: Код капланышын күзәтү өчен көйләнгән
- **Multisite тестлавы**: Тестлар multisite мохитендә эшли

### Код стандартлары {#code-standards}

- **WordPress кодлау стандартлары**: PHPCS аша мәҗбүри кулланыла
- **PHP 7.4+ ярашлылыгы**: Заманча PHP мөмкинлекләре хуплана
- **Статик анализ**: Типларны тикшерү өчен PHPStan интеграциясе
- **Кодны заманча итү**: PHP яңартулары өчен Rector кагыйдәләре

### Җыю системасы {#build-system}

- **Активларны эшкәртү**: CSS/JS файллары өчен кечерәйтү
- **Тәрҗемә**: POT файлын булдыру
- **Пакетлау**: Тарату өчен архив булдыру
- **Эшләү режимы**: Төзәтү өчен кечерәйтелмәгән активлар

## Конфигурация {#configuration}

Өстәмә челтәр администраторы интерфейсы аша кереп була торган төрле конфигурация вариантларын хуплый.

## Hook һәм фильтрлар {#hooks-and-filters}

### Гамәлләр {#actions}

- `ultimate-multisite-addon-template_init` - Өстәмә инициализациясеннән соң эшләтелә
- `ultimate-multisite-addon-template_loaded` - Барлык өстәмә файллары йөкләнгәннән соң эшләтелә

### Фильтрлар {#filters}

- `ultimate-multisite-addon-template_settings` - Өстәмә көйләнмәләрен үзгәртү
- `ultimate-multisite-addon-template_enabled` - Өстәмәнең кабызу/сүндерү халәтен яңадан билгеләү

## Лицензия {#license}

Бу өстәмә GPL v3 яки соңрак версия буенча лицензияләнгән.

## Ярдәм {#support}

Ярдәм һәм документация өчен [MultisiteUltimate.com](https://multisiteultimate.com) сайтына керегез
## Үзгәрешләр журналы {#changelog}

- Версия 1.0.1 (2025-09-28): префиксны ultimate-multisite итеп үзгәртү; текст доменын яңарту; версияне арттыру.


- Версия  (2025-09-28): префиксны ultimate-multisite итеп үзгәртү; текст доменын яңарту; версияне арттыру.
