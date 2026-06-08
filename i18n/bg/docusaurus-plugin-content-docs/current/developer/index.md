---
title: Документация за разработчици
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Документация за разработчици

Този гайд предоставя на разработчиците всичко необходимо за интегриране, разширяване или разработване на аддонове за Ultimate Multisite. Ultimate Multisite превръща WordPress Multisite мрежа в платформа за уебсайтове като услуга (Website-as-a-Service, WaaS).

## Какво е налично

- **[REST API](./rest-api/overview)** — Пълни CRUD операции за всички обекти (клиенти, сайтове, членства, плащания, продукти, домейни) с автентикация чрез API ключ
- **[Hooks Reference](./hooks/guide)** — Над 200 action хука и над 280 filter хука за събития в жизнения цикъл и персонализация
- **[Integration Guide](./integration-guide/)** — Примери за интеграция с CRM, аналитика, персонализирани пейджи и webhooks
- **[Code Examples](./code-examples/)** — Напреднали модели за динамично ценообразуване, предоставяне на сайтове, персонализирани ограничения и обработка на множество пейджи
- **[Addon Development](./addon-development/getting-started)** — Структуриран фреймуърк за изграждане на аддон плагини

## Изисквания

- Инсталация на WordPress Multisite
- PHP 7.4 или по-висок
- Активиран плагин Ultimate Multisite

## Инсталация с Composer / Bedrock

Ultimate Multisite е наличен в [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) като `ultimate-multisite/ultimate-multisite`. Това е препоръчителният метод за инсталация за настройки на WordPress, базирани на [Bedrock](https://roots.io/bedrock/)- и други среди, управлявани от Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Преименуван пакет (v2.6.1+)
Composer пакетът беше преименуван от `devstone/ultimate-multisite` на `ultimate-multisite/ultimate-multisite` във версия v2.6.1. Ако вашият `composer.json` се отнася до старото име на вендор, обновете записа за изискване и изпълнете `composer update`.
:::

След инсталацията, активирайте плагина на ниво мрежа от Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Или, ако зареждате плагина като must-use плагин чрез autoloader на Bedrock, използвайте филтъра `wp_ultimo_skip_network_active_check`, за да заобиколите защитата за активиране:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Бързо започване

### Използване на REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Хукане към събития

```php
add_action('wu_customer_post_create', function($customer) {
    // Реагирайте на нови регистрации на клиенти
});
```

Вижте всеки раздел за подробна документация и примери.
