---
title: Zolemba za Opanga
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Zolemba za Developer

Kalozerayu amapatsa ma developer zonse zofunikira kuti alumikizane ndi, awonjezere, kapena apange ma addon a Ultimate Multisite. Ultimate Multisite imasandutsa netiweki ya WordPress Multisite kukhala nsanja ya Website-as-a-Service (WaaS).

## Zomwe Zilipo

- **[REST API](./rest-api/overview)** — Ntchito zonse za CRUD pa zinthu zonse (makasitomala, ma site, umembala, zolipira, zogulitsa, ma domain) pogwiritsa ntchito kutsimikizira kwa API key
- **[Buku la Hooks](./hooks/guide)** — Ma action hooks oposa 200 ndi ma filter hooks oposa 280 a zochitika za lifecycle ndi kusintha makonda
- **[Kalozera wa Kulumikizana](./integration-guide/)** — Zitsanzo za kulumikizana kwa CRM, analytics, ma gateway apadera, ndi ma webhook
- **[Zitsanzo za Code](./code-examples/)** — Njira zapamwamba za mitengo yosinthika, kukonzekera ma site, malire apadera, ndi kusamalira ma gateway angapo
- **[Kupanga Addon](./addon-development/getting-started)** — Framework yokonzedwa bwino yopangira ma addon plugin

## Zofunikira

- Kuyika kwa WordPress Multisite
- PHP 7.4 kapena yapamwamba
- Ultimate Multisite plugin yayatsidwa

## Kuyika kwa Composer / Bedrock

Ultimate Multisite ilipo pa [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) monga `ultimate-multisite/ultimate-multisite`. Iyi ndi njira yolimbikitsidwa yoyikira ma setup a WordPress ochokera pa [Bedrock](https://roots.io/bedrock/) ndi malo ena oyendetsedwa ndi Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Package yosinthidwa dzina (v2.6.1+)
Package ya Composer inasinthidwa dzina kuchokera ku `devstone/ultimate-multisite` kukhala `ultimate-multisite/ultimate-multisite` mu v2.6.1. Ngati `composer.json` yanu imatchula dzina lakale la vendor, sinthani cholowa cha require ndipo yendetsani `composer update`.
:::

Pambuyo poyika, network-activate plugin kuchokera ku Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Kapena, ngati mukutsegula plugin ngati must-use plugin kudzera mu autoloader ya Bedrock, gwiritsani ntchito filter ya `wp_ultimo_skip_network_active_check` kuti mudutse activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Yambani Mwachangu

### Gwiritsani ntchito REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Lumikizanani ndi Zochitika

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Pangani Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Onani gawo lililonse kuti mupeze zolemba ndi zitsanzo zatsatanetsatane.
