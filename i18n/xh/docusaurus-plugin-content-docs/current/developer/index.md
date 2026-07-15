---
title: Amaxwebhu oMphuhlisi
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Amaxwebhu oPhuhlisi

Esi sikhokelo sibonelela abaphuhlisi ngayo yonke into efunekayo ukudibanisa nayo, ukuyandisa, okanye ukuphuhlisa ii-addon ze Ultimate Multisite. Ultimate Multisite iguqula inethiwekhi ye WordPress Multisite ibe liqonga le Website-as-a-Service (WaaS).

## Yintoni ekhoyo {#whats-available}

- **[REST API](./rest-api/overview)** — Imisebenzi epheleleyo ye-CRUD yazo zonke izinto (abathengi, iisayithi, ubulungu, iintlawulo, iimveliso, iidomeyini) ngokuqinisekiswa kwe-API key
- **[Isalathiso see-Hooks](./hooks/guide)** — Ngaphezu kwe-200 action hooks kunye ne-280 filter hooks kwiziganeko zomjikelo wobomi kunye nokulungiselela ngokwezifiso
- **[Isikhokelo soDibaniso](./integration-guide/)** — Imizekelo yodibaniso lwe-CRM, uhlalutyo, ii-gateway ezenziwe ngokwezifiso, kunye nee-webhooks
- **[Imizekelo yeKhowudi](./code-examples/)** — Iipateni eziphambili zamaxabiso aguquguqukayo, ukubonelelwa kweesayithi, imida eyenziwe ngokwezifiso, kunye nokusebenza ngee-gateway ezininzi
- **[Uphuhliso lwe-Addon](./addon-development/getting-started)** — Isakhelo esakhiweyo sokwakha ii-plugin ze-addon

## Iimfuno {#requirements}

- Ufakelo lwe WordPress Multisite
- PHP 7.4 okanye ngaphezulu
- I-plugin ye Ultimate Multisite ivuliwe

## Ufakelo lwe-Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite iyafumaneka kwi-[Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) njenge `ultimate-multisite/ultimate-multisite`. Le yeyona ndlela yokufaka ecetyiswayo kwiisetingi ze WordPress ezisekelwe kwi-[Bedrock](https://roots.io/bedrock/) kunye nezinye iimeko ezilawulwa yi-Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Ipakethe ethiwe igama elitsha (v2.6.1+)
Ipakethe ye-Composer yathiwa igama elitsha ukusuka ku-`devstone/ultimate-multisite` ukuya ku-`ultimate-multisite/ultimate-multisite` kwi-v2.6.1. Ukuba i-`composer.json` yakho ibhekisa kwigama lomthengisi elidala, hlaziya ungeno lwe-require uze uqhube `composer update`.
:::

Emva kofakelo, vula i-plugin kwinethiwekhi kwi-Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Okanye, ukuba ulayisha i-plugin njenge-must-use plugin nge-autoloader ye-Bedrock, sebenzisa i-filter `wp_ultimo_skip_network_active_check` ukudlula umgcini wokuvula:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Ukuqalisa ngokukhawuleza {#quick-start}

### Sebenzisa i-REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Nxibelelana neZiganeko nge-Hook {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Yakha i-Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Jonga icandelo ngalinye ukuze ufumane amaxwebhu aneenkcukacha kunye nemizekelo.
