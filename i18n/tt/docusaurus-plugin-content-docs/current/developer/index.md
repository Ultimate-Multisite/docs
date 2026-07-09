---
title: Эшләүчеләр өчен документация
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Эшләүчеләр өчен документация

Бу кулланма эшләүчеләргә Ultimate Multisite белән интеграцияләү, аны киңәйтү яки аның өчен addonнар эшләү өчен кирәкле барлык мәгълүматны бирә. Ultimate Multisite WordPress Multisite челтәрен Website-as-a-Service (WaaS) платформасына әйләндерә.

## Нәрсәләр бар

- **[REST API](./rest-api/overview)** — API key аутентификациясе белән барлык сущностьлар (клиентлар, сайтлар, әгъзалыклар, түләүләр, продуктлар, доменнар) өчен тулы CRUD операцияләре
- **[Hooks белешмәсе](./hooks/guide)** — тормыш циклы вакыйгалары һәм көйләү өчен 200+ action hook һәм 280+ filter hook
- **[Интеграция кулланмасы](./integration-guide/)** — CRM интеграциясе, аналитика, махсус gatewayлар һәм webhookлар өчен мисаллар
- **[Код мисаллары](./code-examples/)** — динамик бәяләү, сайт әзерләү, махсус чикләүләр һәм күп gatewayлы эшкәртү өчен алдынгы үрнәкләр
- **[Addon эшләү](./addon-development/getting-started)** — addon pluginнар төзү өчен структураланган framework

## Таләпләр

- WordPress Multisite урнаштыру
- PHP 7.4 яки югарырак
- Ultimate Multisite plugin активлаштырылган

## Composer / Bedrock урнаштыру

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) сайтында `ultimate-multisite/ultimate-multisite` буларак бар. Бу [Bedrock](https://roots.io/bedrock/)-нигезендәге WordPress көйләүләре һәм Composer белән идарә ителә торган башка мохитләр өчен тәкъдим ителгән урнаштыру ысулы.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Пакет исеме үзгәртелде (v2.6.1+)
Composer пакеты v2.6.1 версиясендә `devstone/ultimate-multisite` исеменнән `ultimate-multisite/ultimate-multisite` итеп үзгәртелде. Әгәр сезнең `composer.json` иске vendor исеменә сылтана икән, require язмасын яңартыгыз һәм `composer update` эшләтегез.
:::

Урнаштырганнан соң, Network Admin аша pluginны челтәр дәрәҗәсендә активлаштырыгыз:

```bash
wp plugin activate ultimate-multisite --network
```

Яисә, pluginны Bedrock autoloader аша must-use plugin буларак йөклисез икән, активлаштыру саклагычын урап узу өчен `wp_ultimo_skip_network_active_check` filterын кулланыгыз:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Тиз башлау

### REST API куллану

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Вакыйгаларга hook аша тоташу

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Addon төзү

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Төгәл документация һәм мисаллар өчен һәр бүлекне карагыз.
