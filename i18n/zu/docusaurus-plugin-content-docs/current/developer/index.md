---
title: Imibhalo Yonjiniyela
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Imibhalo Yonjiniyela

Lo mhlahlandlela unikeza onjiniyela konke okudingekayo ukuze baxhumane, banwebe, noma bathuthukise ama-addon e-Ultimate Multisite. Ultimate Multisite iguqula inethiwekhi ye-WordPress Multisite ibe yipulatifomu ye-Website-as-a-Service (WaaS).

## Okutholakalayo {#whats-available}

- **[REST API](./rest-api/overview)** — Imisebenzi ephelele ye-CRUD yazo zonke izinhlaka (amakhasimende, amasayithi, ubulungu, izinkokhelo, imikhiqizo, izizinda) ngokugunyazwa nge-API key
- **[Inkomba yama-Hooks](./hooks/guide)** — Ama-action hooks angaphezu kuka-200 nama-filter hooks angaphezu kuka-280 emicimbini yomjikelezo wempilo nokwenza ngokwezifiso
- **[Umhlahlandlela Wokuhlanganisa](./integration-guide/)** — Izibonelo zokuhlanganisa i-CRM, izibalo, amasango enziwe ngokwezifiso, nama-webhook
- **[Izibonelo Zekhodi](./code-examples/)** — Amaphethini athuthukile entengo eguqukayo, ukuhlinzekwa kwamasayithi, imikhawulo eyenziwe ngokwezifiso, nokucubungula ngamasango amaningi
- **[Ukuthuthukiswa kwe-Addon](./addon-development/getting-started)** — Uhlaka oluhlelekile lokwakha ama-plugin e-addon

## Izidingo {#requirements}

- Ukufakwa kwe-WordPress Multisite
- PHP 7.4 noma ngaphezulu
- I-plugin ye-Ultimate Multisite yenziwe yasebenza

## Ukufakwa nge-Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite iyatholakala ku-[Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) njenge-`ultimate-multisite/ultimate-multisite`. Lena indlela yokufaka enconyiwe yokusetha kwe-WordPress okusekelwe ku-[Bedrock](https://roots.io/bedrock/) nezinye izindawo ezilawulwa nge-Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Iphakheji iqanjwe kabusha (v2.6.1+)
Iphakheji ye-Composer yaqanjwa kabusha isuka ku-`devstone/ultimate-multisite` yaba `ultimate-multisite/ultimate-multisite` ku-v2.6.1. Uma i-`composer.json` yakho ibhekisela egameni lomthengisi elidala, buyekeza okufakiwe kwe-require bese usebenzisa `composer update`.
:::

Ngemva kokufaka, yenza i-plugin isebenze enethiwekhi kusuka ku-Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Noma, uma ulayisha i-plugin njenge-plugin okufanele isetshenziswe nge-autoloader ye-Bedrock, sebenzisa i-filter `wp_ultimo_skip_network_active_check` ukuze weqe umqaphi wokwenza isebenze:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Ukuqala Ngokushesha {#quick-start}

### Sebenzisa i-REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Xhuma Emicimbini {#hook-into-events}

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

Bheka isigaba ngasinye ukuze uthole imibhalo enemininingwane nezibonelo.
