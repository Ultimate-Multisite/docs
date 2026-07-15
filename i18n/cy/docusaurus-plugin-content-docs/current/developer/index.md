---
title: Doc y ddefnyddiwr
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentasi Arweinydd Defnyddwyr

Mae'r cyfarwyddyd hwn yn rhoi bob amser sydd angen i ddynion ddefnyddwyr i gysylltu â, gyfaddelu neu ddatblygu addonau ar gyfer Ultimate Multisite. Mae Ultimate Multisite yn transformio rheol WordPress Multisite i ffurfwr Gwefan-as-a-Service (WaaS).

## Beth sydd ar gael {#whats-available}

- **[REST API](./rest-api/overview)** — Operau CRUD cyflym am y cyfathrebu allan (gofynwyr, wefanau, chymrydion, peidiadau, produsau, domenau) gyda chybediad API key.
- **[Cyfeiriad Hooks](./hooks/guide)** — 200+ hookau gweithredol a 280+ hookau filtru ar gyfer digwyddiadau bywyd a chydfaddelu.
- **[Cyfarwyddyd Ymysunedol](./integration-guide/)** — Prifau am ymysgyniad CRM, cyfluniadau (analytics), gwyllyddau custom, a webhooks.
- **[Prifau Cod](#code-examples/)** — Modelau cynhwysion am prifau dynamig, cyfaddelu wefanau, gyfyngau custom, a prosessau gwyllyddau am y cyfathrebu.
- **[Datblygu Addonau](./addon-development/getting-started)** — Ffurfwr sydd wedi'i ddatblygu i adeiladu pluginau addon.

## Cyfeiriadau {#requirements}

- Rheol WordPress Multisite
- PHP 7.4 neu fwy
- Plugin Ultimate Multisite wedi'i gweithredu

## Ymwynhau Composer / Bedrock {#composer--bedrock-installation}

Mae Ultimate Multisite ar gael ar [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) fel `ultimate-multisite/ultimate-multisite`. Mae hyn yn ffordd ddatblygu arallangol i setffroi WordPress sydd wedi'i gweithredu ar Bedrock a amgylcheau arall a gyfarwyddwyd gan Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Mae'rchwydrol y pakiad (v2.6.1+)
Mae'r pakiad Composer wedi cael ei newid o `devstone/ultimate-multisite` i `ultimate-multisite/ultimate-multisite` yn v2.6.1. Os oes eich `composer.json` yn cyfeiriad yr enw vendor hwn, gwneudwch y cyfathrebu require ac rhedeg `composer update`.
:::

Ar ôl y chwarae, rhaglenni'r plugin o gyfnodwch (Network Admin):

```bash
wp plugin activate ultimate-multisite --network
```

 neu, os ydych chi'n llwybr y plugin fel plugin sydd angen i ddefnyddio drwy autoloader Bedrock, defnyddiwch y `wp_ultimo_skip_network_active_check` filter i gael ei ddifynnu'r gwarchau chwarae:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Cynhaltas Cyflym (Quick Start) {#quick-start}

### Defnyddio'r REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Cysylltu â Chwaraeon (Hook into Events) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Reagwn ar newidiadau o ddefnyddwyr newydd
});
```

### Cynnal Addon {#build-an-addon}

```bash
# Cyflwyno scaffold addon o'r template
bash create-addon.sh
```

Gwylio pob cynllun am drafiadau cyffredinol a enwystiau.
