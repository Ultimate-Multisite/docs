---
title: Иштеп чыгуучулар үчүн документтер
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Иштеп чыгуучунун документациясы

Бул колдонмо иштеп чыгуучуларга Ultimate Multisite менен интеграциялануу, аны кеңейтүү же ага addon'дорду иштеп чыгуу үчүн керектүүнүн баарын берет. Ultimate Multisite WordPress Multisite тармагын Website-as-a-Service (WaaS) платформасына айландырат.

## Эмне жеткиликтүү

- **[REST API](./rest-api/overview)** — API ачкычы аркылуу аутентификация менен бардык объекттер үчүн толук CRUD операциялары (кардарлар, сайттар, мүчөлүктөр, төлөмдөр, өнүмдөр, домендер)
- **[Hooks маалымдамасы](./hooks/guide)** — Жашоо циклиндеги окуялар жана ыңгайлаштыруу үчүн 200+ action hook жана 280+ filter hook
- **[Интеграция колдонмосу](./integration-guide/)** — CRM интеграциясы, аналитика, ыңгайлаштырылган шлюздар жана webhooks үчүн мисалдар
- **[Код мисалдары](./code-examples/)** — Динамикалык баалоо, сайтты даярдоо, ыңгайлаштырылган чектөөлөр жана көп шлюздуу иштетүү үчүн өркүндөтүлгөн үлгүлөр
- **[Addon иштеп чыгуу](./addon-development/getting-started)** — Addon plugin'дерди куруу үчүн түзүмдөлгөн framework

## Талаптар

- WordPress Multisite орнотмосу
- PHP 7.4 же андан жогору
- Ultimate Multisite plugin'и активдештирилген

## Composer / Bedrock орнотуу

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) платформасында `ultimate-multisite/ultimate-multisite` катары жеткиликтүү. Бул [Bedrock](https://roots.io/bedrock/) негизиндеги WordPress жөндөөлөрү жана Composer аркылуу башкарылган башка чөйрөлөр үчүн сунушталган орнотуу ыкмасы.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Пакеттин аталышы өзгөртүлгөн (v2.6.1+)
Composer пакети v2.6.1 версиясында `devstone/ultimate-multisite` аталышынан `ultimate-multisite/ultimate-multisite` аталышына өзгөртүлгөн. Эгер `composer.json` файлыңыз эски vendor аталышына шилтеме кылса, require жазуусун жаңыртып, `composer update` иштетиңиз.
:::

Орнотуудан кийин plugin'ди Network Admin ичинен тармак боюнча активдештириңиз:

```bash
wp plugin activate ultimate-multisite --network
```

Же plugin'ди Bedrock'тун autoloader'и аркылуу must-use plugin катары жүктөп жатсаңыз, активдештирүү коргоосун айланып өтүү үчүн `wp_ultimo_skip_network_active_check` filter'ин колдонуңуз:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Тез баштоо

### REST API колдонуңуз

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Окуяларга hook кошуңуз

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Addon куруңуз

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Толук документация жана мисалдар үчүн ар бир бөлүмдү караңыз.
