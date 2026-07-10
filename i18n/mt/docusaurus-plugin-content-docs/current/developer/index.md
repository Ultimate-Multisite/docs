---
title: Dokumentazzjoni għall-Iżviluppaturi
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentazzjoni għall-Iżviluppaturi {#developer-documentation}

Din il-gwida tipprovdi lill-iżviluppaturi b’dak kollu meħtieġ biex jintegraw ma’, jestendu, jew jiżviluppaw addons għal Ultimate Multisite. Ultimate Multisite jittrasforma netwerk WordPress Multisite fi pjattaforma Website-as-a-Service (WaaS).

## X’Hemm Disponibbli {#whats-available}

- **[REST API](./rest-api/overview)** — Operazzjonijiet CRUD kompluti għall-entitajiet kollha (klijenti, siti, sħubijiet, pagamenti, prodotti, domains) b’awtentikazzjoni permezz ta’ API key
- **[Referenza tal-Hooks](./hooks/guide)** — Aktar minn 200 action hooks u aktar minn 280 filter hooks għal avvenimenti taċ-ċiklu tal-ħajja u personalizzazzjoni
- **[Gwida għall-Integrazzjoni](./integration-guide/)** — Eżempji għal integrazzjoni ma’ CRM, analytics, gateways personalizzati, u webhooks
- **[Eżempji ta’ Kodiċi](./code-examples/)** — Mudelli avvanzati għal prezzijiet dinamiċi, proviżjonament ta’ siti, limitazzjonijiet personalizzati, u pproċessar b’diversi gateways
- **[Żvilupp ta’ Addons](./addon-development/getting-started)** — Qafas strutturat għall-bini ta’ plugins addon

## Rekwiżiti {#requirements}

- Installazzjoni WordPress Multisite
- PHP 7.4 jew ogħla
- plugin Ultimate Multisite attivat

## Installazzjoni Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite huwa disponibbli fuq [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) bħala `ultimate-multisite/ultimate-multisite`. Dan huwa l-metodu ta’ installazzjoni rakkomandat għal setups WordPress ibbażati fuq [Bedrock](https://roots.io/bedrock/) u ambjenti oħra ġestiti minn Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pakkett imsemmi mill-ġdid (v2.6.1+)
Il-pakkett Composer ingħata isem ġdid minn `devstone/ultimate-multisite` għal `ultimate-multisite/ultimate-multisite` f’v2.6.1. Jekk il-`composer.json` tiegħek jirreferi għall-isem antik tal-vendor, aġġorna l-entrata require u ħaddem `composer update`.
:::

Wara l-installazzjoni, attiva l-plugin fuq in-netwerk mill-Amministrazzjoni tan-Netwerk:

```bash
wp plugin activate ultimate-multisite --network
```

Jew, jekk qed ittella’ l-plugin bħala plugin must-use permezz tal-autoloader ta’ Bedrock, uża l-filter `wp_ultimo_skip_network_active_check` biex taqbeż il-protezzjoni tal-attivazzjoni:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Bidu Malajr {#quick-start}

### Uża r-REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Aqbad ma’ Avvenimenti {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Ibni Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Ara kull taqsima għal dokumentazzjoni dettaljata u eżempji.
