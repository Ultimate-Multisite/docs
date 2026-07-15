---
title: Документація для розробників
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Документація для розробників

Цей гайд надає розробникам усе необхідне для інтеграції, розширення або створення аддонів для Ultimate Multisite. Ultimate Multisite перетворює мережу WordPress Multisite на платформу Website-as-a-Service (WaaS).

## Що доступно {#whats-available}

- **[REST API](./rest-api/overview)** — Повні операції CRUD для всіх сутностей (клієнти, сайти, членства, платежі, продукти, домени) з автентифікацією за допомогою API key
- **[Hooks Reference](./hooks/guide)** — Понад 200 action hook та понад 280 filter hook для подій життєвого циклу та кастомізації
- **[Integration Guide](./integration-guide/)** — Приклади інтеграції з CRM, аналітикою, кастомними шлюзами та webhooks
- **[Code Examples](./code-examples/)** — Розширені патерни для динамічного ціноутворення, провізіонування сайтів, кастомних обмежень та обробки кількох шлюзів
- **[Addon Development](./addon-development/getting-started)** — Структурований фреймворк для створення плагінів-аддонів

## Вимоги {#requirements}

- Встановлена мережа WordPress Multisite
- PHP 7.4 або вище
- Активний плагін Ultimate Multisite

## Встановлення через Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite доступний на [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) як `ultimate-multisite/ultimate-multisite`. Це рекомендований метод встановлення для середовищ WordPress, побудованих на [Bedrock](https://roots.io/bedrock/)-, та інших середовищ, керованих Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Composer package було перейменовано з `devstone/ultimate-multisite` на `ultimate-multisite/ultimate-multisite` у версії v2.6.1. Якщо ваш `composer.json` посилається на стару назву вендора, оновіть рядок `require` та виконайте `composer update`.
:::

Після встановлення активуйте плагін на рівні мережі через Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Або, якщо ви завантажуєте плагін як must-use плагін через autoloader Bedrock, використовуйте filter `wp_ultimo_skip_network_active_check`, щоб обійти перевірку активації:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Швидкий старт {#quick-start}

### Використання REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Підключення до подій (Hooks) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Реагування на нових клієнтів
});
```

### Створення аддону {#build-an-addon}

```bash
# Генерація каркасу аддону з шаблону
bash create-addon.sh
```

Дивіться в кожному розділі для детальної документації та прикладів.
