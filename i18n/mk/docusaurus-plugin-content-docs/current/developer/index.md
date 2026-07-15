---
title: Документација за програмери
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Документација за програмери

Овој водич им обезбедува на програмерите сè што е потребно за интеграција со, проширување или развој на додатоци за Ultimate Multisite. Ultimate Multisite трансформира WordPress Multisite мрежа во платформа „веб-страница-како-услуга“ (WaaS).

## Што е достапно {#whats-available}

- **[REST API](./rest-api/overview)** — Целосни CRUD операции за сите ентитети (клиенти, сајтови, членства, плаќања, производи, домени) со автентикација преку API клуч
- **[Референца за hooks](./hooks/guide)** — 200+ action hooks и 280+ filter hooks за настани во животниот циклус и приспособување
- **[Водич за интеграција](./integration-guide/)** — Примери за CRM интеграција, аналитика, прилагодени gateways и webhooks
- **[Примери со код](./code-examples/)** — Напредни обрасци за динамичко ценирање, обезбедување сајтови, прилагодени ограничувања и обработка со повеќе gateways
- **[Развој на додатоци](./addon-development/getting-started)** — Структурирана рамка за градење plugin-и за додатоци

## Барања {#requirements}

- WordPress Multisite инсталација
- PHP 7.4 или понова верзија
- Ultimate Multisite plugin активиран

## Инсталација со Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite е достапен на [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) како `ultimate-multisite/ultimate-multisite`. Ова е препорачаниот метод за инсталација за WordPress поставки базирани на [Bedrock](https://roots.io/bedrock/) и други околини управувани со Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Преименуван пакет (v2.6.1+)
Composer пакетот беше преименуван од `devstone/ultimate-multisite` во `ultimate-multisite/ultimate-multisite` во v2.6.1. Ако вашиот `composer.json` го референцира старото име на добавувачот, ажурирајте го require записот и извршете `composer update`.
:::

По инсталацијата, активирајте го plugin-от на мрежно ниво од Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Или, ако го вчитувате plugin-от како must-use plugin преку autoloader-от на Bedrock, користете го филтерот `wp_ultimo_skip_network_active_check` за да ја заобиколите заштитата за активација:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Брз почеток {#quick-start}

### Користете го REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Поврзете се со настани {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Изградете додаток {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Погледнете го секој оддел за детална документација и примери.
