---
title: Әзірлеуші құжаттамасы
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Әзірлеуші құжаттамасы

Бұл нұсқаулық әзірлеушілерге Ultimate Multisite-пен интеграциялану, оны кеңейту немесе оған арналған қосымшалар әзірлеу үшін қажеттінің бәрін береді. Ultimate Multisite WordPress Multisite желісін Website-as-a-Service (WaaS) платформасына айналдырады.

## Не қолжетімді

- **[REST API](./rest-api/overview)** — API кілті арқылы аутентификациямен барлық нысандарға (клиенттер, сайттар, мүшеліктер, төлемдер, өнімдер, домендер) арналған толық CRUD операциялары
- **[Hooks анықтамалығы](./hooks/guide)** — Өмірлік цикл оқиғалары мен баптауға арналған 200+ әрекет hook-ы және 280+ сүзгі hook-ы
- **[Интеграция нұсқаулығы](./integration-guide/)** — CRM интеграциясы, аналитика, жеке шлюздер және webhooks үшін мысалдар
- **[Код мысалдары](./code-examples/)** — Динамикалық баға белгілеу, сайт дайындау, жеке шектеулер және бірнеше шлюзбен өңдеу үшін озық үлгілер
- **[Қосымша әзірлеу](./addon-development/getting-started)** — Қосымша plugin-дерін құруға арналған құрылымдалған framework

## Талаптар

- WordPress Multisite орнатылымы
- PHP 7.4 немесе одан жоғары
- Ultimate Multisite plugin-і белсендірілген

## Composer / Bedrock орнату

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ішінде `ultimate-multisite/ultimate-multisite` ретінде қолжетімді. Бұл [Bedrock](https://roots.io/bedrock/) негізіндегі WordPress баптаулары және Composer арқылы басқарылатын басқа орталар үшін ұсынылатын орнату әдісі.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Пакет атауы өзгертілді (v2.6.1+)
Composer пакеті v2.6.1 нұсқасында `devstone/ultimate-multisite` атауынан `ultimate-multisite/ultimate-multisite` атауына өзгертілді. Егер `composer.json` ескі жеткізуші атауына сілтеме жасаса, require жазбасын жаңартып, `composer update` іске қосыңыз.
:::

Орнатудан кейін plugin-ді Network Admin ішінен желі бойынша белсендіріңіз:

```bash
wp plugin activate ultimate-multisite --network
```

Немесе plugin-ді Bedrock autoloader-і арқылы must-use plugin ретінде жүктеп жатсаңыз, белсендіру қорғанысын айналып өту үшін `wp_ultimo_skip_network_active_check` сүзгісін пайдаланыңыз:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Жылдам бастау

### REST API пайдалану

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Оқиғаларға hook қосу

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Қосымша құру

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Толық құжаттама мен мысалдар үшін әр бөлімді қараңыз.
