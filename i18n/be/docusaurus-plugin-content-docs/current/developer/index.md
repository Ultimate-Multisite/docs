---
title: Дакументацыя для праграметнікаў
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Дакументацыя для праграмістаў

Гэўды дапамагае праграмістам збіраць усе, што патрэбна для інтэграцыі, пашырэння або распрацоўкі аддонак для Ultimate Multisite. Ultimate Multisite пераўтварае сетку WordPress Multisite ў платформу Website-as-a-Service (WaaS).

## Што даступна

- **[REST API](./rest-api/overview)** — Поўныя аперацыі CRUD для ўсіх і тэнтаў (klienty, sites, memberships, payments, products, domains) з аўтэнтыфікацыяй па ключы API
- **[Hooks Reference](./hooks/guide)** — 200+ action hooks і 280+ filter hooks для падзей жыцкавага цыклу і кастымізацыі
- **[Integration Guide](./integration-guide/)** — Прыклады інтэграцыі з CRM, аналітыкай, кастымістызаванымі шлюзамі і webhooks
- **[Code Examples](./code-examples/)** — Прод advanced патерны для дынамічнага цэнаўтварэння, правайдання сайтаў, кастымізаваных абмежаванняў і праводзіння мноства шлюзаў
- **[Addon Development](./addon-development/getting-started)** — Структураваны фрэймворк для будавання аддонак-плагінаў

## Патрабаванні

- Устаноўка WordPress Multisite
- PHP 7.4 або больш высокія
- Актываваны плагін Ultimate Multisite

## Устаноўка праз Composer / Bedrock

Ultimate Multisite даступны на [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) як `ultimate-multisite/ultimate-multisite`. Гэты рэкамендаваны спосаб устаноўкі для налад WordPress, аснованых на [Bedrock](https://roots.io/bedrock/) і іншых асяроддзях, кіраваных Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Пакет Composer быў перададзены з `devstone/ultimate-multisite` на `ultimate-multisite/ultimate-multisite` у версіі v2.6.1. Калі ваш `composer.json` спасылаецца на стары імя вендора, абнавіджце ўпытванне `require` і прагоніце `composer update`.
:::

Пасля ўстаноўкі актывуйце плагін на сетцы праз Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Або, калі вы загружаеце плагін як must-use плагін праз autoloader Bedrock, выкарыстоўвайце filter `wp_ultimo_skip_network_active_check`, каб праскочыць праверку актывацыі:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Пачатак працы

### Выкарыстоўвайце REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Падключыцеся да падзей (Hooks)

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Будуйце аддонак (Addon)

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Для больш падрабязной інфармацыі і прыкладаў праглядзіце кожны раздзел.
