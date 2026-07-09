---
title: Документация для разработчиков
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Документация для разработчиков {#developer-documentation}

Это руководство предоставляет разработчикам всё необходимое для интеграции с Ultimate Multisite, его расширения или разработки дополнений для него. Ultimate Multisite превращает сеть WordPress Multisite в платформу Website-as-a-Service (WaaS).

## Что доступно {#whats-available}

- **[REST API](./rest-api/overview)** — Полные CRUD-операции для всех сущностей (клиенты, сайты, членства, платежи, продукты, домены) с аутентификацией по ключу API
- **[Справочник хуков](./hooks/guide)** — Более 200 хуков действий и более 280 хуков фильтров для событий жизненного цикла и настройки
- **[Руководство по интеграции](./integration-guide/)** — Примеры интеграции с CRM, аналитикой, пользовательскими шлюзами и вебхуками
- **[Примеры кода](./code-examples/)** — Продвинутые шаблоны для динамического ценообразования, подготовки сайтов, пользовательских ограничений и обработки через несколько шлюзов
- **[Разработка дополнений](./addon-development/getting-started)** — Структурированный фреймворк для создания плагинов-дополнений

## Требования {#requirements}

- Установка WordPress Multisite
- PHP 7.4 или выше
- Активированный plugin Ultimate Multisite

## Установка через Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite доступен на [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) как `ultimate-multisite/ultimate-multisite`. Это рекомендуемый способ установки для WordPress-конфигураций на базе [Bedrock](https://roots.io/bedrock/) и других окружений, управляемых Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Пакет переименован (v2.6.1+)
Пакет Composer был переименован с `devstone/ultimate-multisite` на `ultimate-multisite/ultimate-multisite` в v2.6.1. Если ваш `composer.json` ссылается на старое имя поставщика, обновите запись require и выполните `composer update`.
:::

После установки активируйте plugin для сети через Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Или, если вы загружаете plugin как must-use plugin через автозагрузчик Bedrock, используйте фильтр `wp_ultimo_skip_network_active_check`, чтобы обойти проверку активации:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Быстрый старт {#quick-start}

### Используйте REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Подключайтесь к событиям через хуки {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Создайте дополнение {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

См. каждый раздел для подробной документации и примеров.
