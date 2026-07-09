---
title: Документација за програмере
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Документација за програмере

Овај водич пружа програмерима све што је потребно за интеграцију са Ultimate Multisite, његово проширење или развој додатака за њега. Ultimate Multisite претвара WordPress Multisite мрежу у Website-as-a-Service (WaaS) платформу.

## Шта је доступно

- **[REST API](./rest-api/overview)** — Потпуне CRUD операције за све ентитете (клијенти, сајтови, чланства, плаћања, производи, домени) са аутентификацијом API кључем
- **[Референца за hooks](./hooks/guide)** — 200+ action hooks и 280+ filter hooks за догађаје животног циклуса и прилагођавање
- **[Водич за интеграцију](./integration-guide/)** — Примери за CRM интеграцију, аналитику, прилагођене gateway-је и webhooks
- **[Примери кода](./code-examples/)** — Напредни обрасци за динамичко одређивање цена, обезбеђивање сајтова, прилагођена ограничења и обраду преко више gateway-ја
- **[Развој додатака](./addon-development/getting-started)** — Структурисани framework за израду додатака

## Захтеви

- WordPress Multisite инсталација
- PHP 7.4 или новији
- Ultimate Multisite додатак активиран

## Composer / Bedrock инсталација

Ultimate Multisite је доступан на [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) као `ultimate-multisite/ultimate-multisite`. Ово је препоручени метод инсталације за WordPress поставке засноване на [Bedrock](https://roots.io/bedrock/) и друга окружења којима се управља преко Composer-а.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Преименован пакет (v2.6.1+)
Composer пакет је преименован са `devstone/ultimate-multisite` у `ultimate-multisite/ultimate-multisite` у v2.6.1. Ако ваш `composer.json` упућује на старо име добављача, ажурирајте унос require и покрените `composer update`.
:::

Након инсталације, активирајте додатак на мрежи из Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Или, ако учитавате додатак као must-use додатак преко Bedrock-овог autoloader-а, користите филтер `wp_ultimo_skip_network_active_check` да заобиђете заштиту активације:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Брзи почетак

### Користите REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Повежите се са догађајима

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Направите додатак

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Погледајте сваки одељак за детаљну документацију и примере.
