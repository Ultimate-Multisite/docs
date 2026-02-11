---
title: Шаблон дополнения
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Шаблон дополнения

{{ADDON_DESCRIPTION}}

## Требования

- WordPress 5.3 или выше
- PHP 7.4 или выше
- Multisite Ultimate плагин (активен)

## Установка

1. Загрузите файлы дополнения в ваш каталог `/wp-content/plugins/`
2. Активируйте плагин через меню 'Plugins' в WordPress
3. Настройте параметры дополнения в админке сети

## Разработка

### Настройка

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

### Структура проекта

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes and includes
│   ├── class-multisite-ultimate-updater.php  # Update handler
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Main functionality
├── tests/                        # Unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Test cases
├── views/                       # Template files
├── assets/                      # Static assets
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript files
│   └── images/                  # Images
├── lang/                        # Language files
├── composer.json                # PHP dependencies
├── package.json                 # Node.js dependencies
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Code modernization rules
```

### Тестирование

Дополнение включает всестороннюю тестовую инфраструктуру:

- **Unit Tests**: Тесты на основе PHPUnit с набором тестов WordPress
- **Base Test Class**: Предоставляет вспомогательные методы для общих сценариев тестирования
- **Test Coverage**: Настроено для отслеживания покрытия кода
- **Multisite Testing**: Тесты выполняются в многосайтовой среде

### Стандарты кода

- **WordPress Coding Standards**: Применяются через PHPCS
- **PHP 7.4+ Compatibility**: Поддерживаются современные функции PHP
- **Static Analysis**: Интеграция PHPStan для проверки типов
- **Code Modernization**: Правила Rector для обновления PHP

### Система сборки

- **Asset Processing**: Минификация файлов CSS/JS
- **Translation**: Генерация файлов POT
- **Packaging**: Создание архива для распространения
- **Development Mode**: Ненарезанные ресурсы для отладки

## Конфигурация

Дополнение поддерживает различные параметры конфигурации, доступные через интерфейс админки сети.

## Хуки и фильтры

### Действия

- `ultimate-multisite-addon-template_init` - Вызывается после инициализации дополнения
- `ultimate-multisite-addon-template_loaded` - Вызывается после загрузки всех файлов дополнения

### Фильтры

- `ultimate-multisite-addon-template_settings` - Изменяет настройки дополнения
- `ultimate-multisite-addon-template_enabled` - Перезаписывает статус включения/выключения дополнения

## Лицензия

Это дополнение лицензировано под GPL v3 или более поздней версией.

## Поддержка

Для поддержки и документации посетите [MultisiteUltimate.com](https://multisiteultimate.com)

## Журнал изменений

- Версия 1.0.1 (2025-09-28): переименовать префикс в ultimate-multisite; обновить текстовый домен; обновить версию.

- Версия (2025-09-28): переименовать префикс в ultimate-multisite; обновить текстовый домен; обновить версию.
