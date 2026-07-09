---
title: Izstrādātāju dokumentācija
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Izstrādātāju dokumentācija

Šī rokasgrāmata sniedz izstrādātājiem visu nepieciešamo, lai integrētos ar Ultimate Multisite, to paplašinātu vai izstrādātu tam addon. Ultimate Multisite pārveido WordPress Multisite tīklu par Website-as-a-Service (WaaS) platformu.

## Kas ir pieejams

- **[REST API](./rest-api/overview)** — Pilnas CRUD darbības visām entītijām (klientiem, vietnēm, dalībām, maksājumiem, produktiem, domēniem) ar API atslēgas autentifikāciju
- **[Hooks atsauce](./hooks/guide)** — Vairāk nekā 200 action hooks un vairāk nekā 280 filter hooks dzīves cikla notikumiem un pielāgošanai
- **[Integrācijas rokasgrāmata](./integration-guide/)** — Piemēri CRM integrācijai, analītikai, pielāgotām maksājumu vārtejām un webhooks
- **[Koda piemēri](./code-examples/)** — Paplašināti modeļi dinamiskai cenu noteikšanai, vietņu nodrošināšanai, pielāgotiem ierobežojumiem un vairāku vārteju apstrādei
- **[Addon izstrāde](./addon-development/getting-started)** — Strukturēts ietvars addon pluginu veidošanai

## Prasības

- WordPress Multisite instalācija
- PHP 7.4 vai jaunāka versija
- Aktivizēts Ultimate Multisite plugin

## Composer / Bedrock instalēšana

Ultimate Multisite ir pieejams [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) kā `ultimate-multisite/ultimate-multisite`. Šī ir ieteicamā instalēšanas metode uz [Bedrock](https://roots.io/bedrock/) balstītām WordPress konfigurācijām un citām Composer pārvaldītām vidēm.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pārdēvēta pakotne (v2.6.1+)
Composer pakotne tika pārdēvēta no `devstone/ultimate-multisite` uz `ultimate-multisite/ultimate-multisite` versijā v2.6.1. Ja jūsu `composer.json` atsaucas uz veco piegādātāja nosaukumu, atjauniniet require ierakstu un palaidiet `composer update`.
:::

Pēc instalēšanas aktivizējiet plugin tīklā no Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Vai, ja ielādējat plugin kā must-use plugin, izmantojot Bedrock autoloader, izmantojiet `wp_ultimo_skip_network_active_check` filtru, lai apietu aktivizācijas aizsargmehānismu:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Ātrais sākums

### Izmantojiet REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Piesaistieties notikumiem

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Izveidojiet addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Skatiet katru sadaļu, lai iegūtu detalizētu dokumentāciju un piemērus.
