---
title: Ҳуҷҷатгузории таҳиягарон
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Ҳуҷҷатгузории таҳиягарон

Ин роҳнамо ба таҳиягарон ҳама чизеро медиҳад, ки барои ҳамгироӣ бо Ultimate Multisite, васеъ кардани он ё таҳияи иловаҳо барои он лозим аст. Ultimate Multisite шабакаи WordPress Multisite-ро ба платформаи Вебсайт-ҳамчун-хидмат (WaaS) табдил медиҳад.

## Чӣ дастрас аст {#whats-available}

- **[REST API](./rest-api/overview)** — Амалиётҳои пурраи CRUD барои ҳамаи мавҷудиятҳо (муштариён, сайтҳо, узвиятҳо, пардохтҳо, маҳсулот, доменҳо) бо аутентификатсияи калиди API
- **[Маълумотномаи Hooks](./hooks/guide)** — Зиёда аз 200 action hook ва зиёда аз 280 filter hook барои рӯйдодҳои давраи ҳаёт ва фармоишгарсозӣ
- **[Роҳнамои ҳамгироӣ](./integration-guide/)** — Намунаҳо барои ҳамгироии CRM, таҳлил, дарвозаҳои фармоишӣ ва webhooks
- **[Намунаҳои код](./code-examples/)** — Намунаҳои пешрафта барои нархгузории динамикӣ, омодасозии сайт, маҳдудиятҳои фармоишӣ ва коркарди чанддарвозагӣ
- **[Таҳияи илова](./addon-development/getting-started)** — Чаҳорчӯби сохторёфта барои сохтани плагинҳои иловагӣ

## Талабот {#requirements}

- Насби WordPress Multisite
- PHP 7.4 ё болотар
- Плагини Ultimate Multisite фаъол карда шудааст

## Насби Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite дар [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ҳамчун `ultimate-multisite/ultimate-multisite` дастрас аст. Ин усули тавсияшудаи насб барои танзимоти WordPress дар асоси [Bedrock](https://roots.io/bedrock/) ва муҳитҳои дигаре мебошад, ки бо Composer идора мешаванд.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Номи баста иваз шуд (v2.6.1+)
Бастаи Composer аз `devstone/ultimate-multisite` ба `ultimate-multisite/ultimate-multisite` дар v2.6.1 тағйири ном шуд. Агар `composer.json`-и шумо ба номи кӯҳнаи vendor ишора кунад, сабти require-ро навсозӣ кунед ва `composer update`-ро иҷро кунед.
:::

Пас аз насб, плагинро аз мудири шабака дар сатҳи шабака фаъол кунед:

```bash
wp plugin activate ultimate-multisite --network
```

Ё, агар шумо плагинро ҳамчун плагини must-use тавассути autoloader-и Bedrock бор мекунед, барои гузаштани муҳофизи фаъолсозӣ филтри `wp_ultimo_skip_network_active_check`-ро истифода баред:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Оғози зуд {#quick-start}

### REST API-ро истифода баред {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Ба рӯйдодҳо пайваст шавед {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Илова созед {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Барои ҳуҷҷатгузории муфассал ва намунаҳо ба ҳар як бахш нигаред.
