---
title: Dokimantasyon pou Devlopè
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokimantasyon pou Devlopè

Gid sa a bay devlopè yo tout sa yo bezwen pou entegre ak Ultimate Multisite, elaji li, oswa devlope ekstansyon pou li. Ultimate Multisite transfòme yon rezo WordPress Multisite an yon platfòm Website-as-a-Service (WaaS).

## Sa ki Disponib

- **[REST API](./rest-api/overview)** — Operasyon CRUD konplè pou tout antite yo (kliyan, sit, manm, peman, pwodwi, domèn) ak otantifikasyon pa kle API
- **[Referans Hooks](./hooks/guide)** — Plis pase 200 action hooks ak plis pase 280 filter hooks pou evènman sik lavi ak pèsonalizasyon
- **[Gid Entegrasyon](./integration-guide/)** — Egzanp pou entegrasyon CRM, analytics, passerelles pèsonalize, ak webhooks
- **[Egzanp Kòd](./code-examples/)** — Modèl avanse pou pri dinamik, pwovizyonman sit, limit pèsonalize, ak tretman ak plizyè passerelles
- **[Devlopman Ekstansyon](./addon-development/getting-started)** — Kad estriktire pou konstwi plugin ekstansyon

## Kondisyon

- Enstalasyon WordPress Multisite
- PHP 7.4 oswa pi wo
- Ultimate Multisite plugin aktive

## Enstalasyon Composer / Bedrock

Ultimate Multisite disponib sou [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) kòm `ultimate-multisite/ultimate-multisite`. Sa a se metòd enstalasyon rekòmande pou konfigirasyon WordPress ki baze sou [Bedrock](https://roots.io/bedrock/) ak lòt anviwònman Composer jere.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pake ki chanje non (v2.6.1+)
Pake Composer la te chanje non soti nan `devstone/ultimate-multisite` pou vin `ultimate-multisite/ultimate-multisite` nan v2.6.1. Si `composer.json` ou a fè referans ak ansyen non vandè a, mete antre require la ajou epi kouri `composer update`.
:::

Apre enstalasyon, aktive plugin nan sou rezo a depi Administrasyon Rezo a:

```bash
wp plugin activate ultimate-multisite --network
```

Oswa, si w ap chaje plugin nan kòm yon MU plugin atravè autoloader Bedrock la, itilize filter `wp_ultimo_skip_network_active_check` la pou kontoune gad aktivasyon an:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Demaraj Rapid

### Itilize REST API a

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Konekte ak Evènman yo

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Konstwi yon Ekstansyon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Gade chak seksyon pou dokimantasyon detaye ak egzanp.
