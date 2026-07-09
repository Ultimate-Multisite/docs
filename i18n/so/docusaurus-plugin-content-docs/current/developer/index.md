---
title: Dukumentiyada Horumariyaha
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dukumentiyada Horumariyaha

Hagahan wuxuu horumariyeyaasha siinayaa wax kasta oo loo baahan yahay si ay ula midoobaan, u ballaariyaan, ama ugu horumariyaan addons Ultimate Multisite. Ultimate Multisite wuxuu shabakad WordPress Multisite ah u beddelaa madal Mareeg-adeeg-ahaan (WaaS).

## Waxa La Heli Karo

- **[REST API](./rest-api/overview)** — Hawlgallo CRUD oo dhammaystiran dhammaan hay'adaha (macaamiisha, mareegaha, xubinnimada, lacag-bixinnada, alaabaha, domains) oo leh xaqiijin API key
- **[Tixraaca Hooks](./hooks/guide)** — 200+ action hooks iyo 280+ filter hooks oo loogu talagalay dhacdooyinka wareegga nolosha iyo habaynta
- **[Hagaha Isdhexgalka](./integration-guide/)** — Tusaalooyin loogu talagalay isdhexgalka CRM, falanqaynta, gateways gaar ah, iyo webhooks
- **[Tusaalooyinka Koodhka](./code-examples/)** — Qaabab horumarsan oo loogu talagalay qiimeyn firfircoon, diyaarinta mareegaha, xaddidaado gaar ah, iyo habayn multi-gateway
- **[Horumarinta Addon](./addon-development/getting-started)** — Qaab-dhismeed habaysan oo lagu dhiso plugins addon

## Shuruudaha

- Rakibid WordPress Multisite
- PHP 7.4 ama ka sarreeya
- Ultimate Multisite plugin oo la hawlgeliyay

## Rakibidda Composer / Bedrock

Ultimate Multisite waxaa laga heli karaa [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) sida `ultimate-multisite/ultimate-multisite`. Tani waa habka rakibidda ee lagu talinayo ee dejimaha WordPress ee ku salaysan [Bedrock](https://roots.io/bedrock/) iyo deegaannada kale ee Composer lagu maamulo.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Xirmo magac laga beddelay (v2.6.1+)
Xirmada Composer waxaa laga beddelay `devstone/ultimate-multisite` loona beddelay `ultimate-multisite/ultimate-multisite` gudaha v2.6.1. Haddii `composer.json`-kaagu tixraacayo magaca vendor-kii hore, cusboonaysii gelinta require oo socodsii `composer update`.
:::

Rakibidda ka dib, network-activate plugin-ka ka samee Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Ama, haddii aad plugin-ka u rarayso sida must-use plugin adigoo adeegsanaya autoloader-ka Bedrock, isticmaal filter-ka `wp_ultimo_skip_network_active_check` si aad uga gudubto ilaaliyaha hawlgelinta:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Bilow Degdeg ah

### Isticmaal REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Ku xidh Dhacdooyinka

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Dhis Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Eeg qayb kasta si aad u hesho dukumentiyo faahfaahsan iyo tusaalooyin.
