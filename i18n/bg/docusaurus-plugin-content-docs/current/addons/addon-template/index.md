---
title: Добавена шаблона
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Аддон Шаблон

{{ADDON_DESCRIPTION}}

## Изисквания

- WordPress 5.3 или по-висок
- PHP 7.4 или по-висок
- Плъгин Ultimate Multisite (активен)

## Инсталация

1. Качете файловете на аддона в директорията `/wp-content/plugins/`
2. Активирайте плъгина през менюто „Plugins“ в WordPress
3. Настройте настройките на аддона в административната част на мрежата (network admin)

## Разработка

### Настройка

```bash
# Инсталирайте зависимостите
composer install
npm install

# Изпълнете тестовете
npm run test

# Проверете съответствието на кода със стандартите
vendor/bin/phpcs
vendor/bin/phpstan

# Отстранете проблеми със стила на кода
vendor/bin/phpcbf

# Изградете за продукция
npm run build
```

### Структура на проекта

```
ultimate-multisite-addon-template/
├── inc/                          # PHP класове и включвания
│   ├── class-multisite-ultimate-updater.php  # Обработка на актуализации
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Основна функционалност
├── tests/                        # Юнит тестове
│   ├── bootstrap.php            # Стартов файл за тестове
│   ├── class-*-base.php         # Базов клас за тестове
│   └── class-*-test.php         # Тестови случаи
├── views/                       # Файлове на шаблоните
├── assets/                      # Статични ресурси
│   ├── css/                     # Файлове за стилове
│   ├── js/                      # JavaScript файлове
│   └── images/                  # Изображения
├── lang/                        # Езикови файлове
├── composer.json                # PHP зависимости
├── package.json                 # Node.js зависимости
├── phpunit.xml.dist             # Конфигурация на PHPUnit
├── .phpcs.xml.dist              # Конфигурация на стандартите за код
└── rector.php                   # Правила за модернизация на кода
```

### Тестване

Аддонът включва изчерпателен рамка за тестване:

- **Юнит Тестове (Unit Tests)**: Тестове, базирани на PHPUnit и WordPress test suite
- **Базов Тестов Клас (Base Test Class)**: Осигурява помощни методи за често срещани тестови сценарии
- **Покритие на Тестовете (Test Coverage)**: Конфигуриран за проследяване на покритието на кода
- **Тестване на Multisite**: Тестовете се изпълняват в среда за multisite

### Стандарти за Код

- **WordPress Coding Standards**: Налагани чрез PHPCS
- **Съвместимост с PHP 7.4+**: Поддържа модерни PHP функции
- **Статичен Анализ (Static Analysis)**: Интеграция на PHPStan за проверка на типовете
- **Модернизация на Кода (Code Modernization)**: Правила на Rector за ъпгрейд на PHP

### Системата за Изграждане (Build System)

- **Обработка на Ресурси (Asset Processing)**: Минимизиране (Minification) на CSS/JS файлове
- **Превод (Translation)**: Генериране на POT файлове
- **Пакетиране (Packaging)**: Създаване на архиви за разпространение
- **Режим на Разработка (Development Mode)**: Неминимизирани ресурси за дебъгване

## Конфигурация

Аддонът поддържа различни опции за конфигурация, достъпни през интерфейса на администратора на мрежата.

## Хукове и Филтри (Hooks and Filters)

### Действия (Actions)

- `ultimate-multisite-addon-template_init` - Изстрелва се след инициализацията на аддона
- `ultimate-multisite-addon-template_loaded` - Изстрелва се след зареждане на всички файлове на аддона

### Филтри (Filters)

- `ultimate-multisite-addon-template_settings` - Променя настройките на аддона
- `ultimate-multisite-addon-template_enabled` - Презаписва статуса на активиране/деактивиране на аддона

## Лиценз

Този аддон е лицензиран под GPL v3 или по-късен.

## Поддръжка

За поддръжка и документация посетете [MultisiteUltimate.com](https://multisiteultimate.com)
## Журнал на промените (Changelog)

- Версия 1.0.1 (2025-09-28): преименуване на префикс на ultimate-multisite; актуализация на домейна за текст; увеличаване на версията.


- Версия (2025-09-28): преименуване на префикс на ultimate-multisite; актуализация на домейна за текст; увеличаване на версията.
