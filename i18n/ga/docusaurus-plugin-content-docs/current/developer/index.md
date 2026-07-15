---
title: Doiciméadacht d’Fhorbróirí
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Doiciméadú d'Fhorbróirí

Soláthraíonn an treoir seo gach rud atá de dhíth ar fhorbróirí chun comhtháthú le Ultimate Multisite, é a leathnú, nó breiseáin a fhorbairt dó. Athraíonn Ultimate Multisite líonra WordPress Multisite ina ardán Website-as-a-Service (WaaS).

## Cad atá ar Fáil {#whats-available}

- **[REST API](./rest-api/overview)** — Oibríochtaí CRUD iomlána do gach eintiteas (custaiméirí, suíomhanna, ballraíochtaí, íocaíochtaí, táirgí, fearainn) le fíordheimhniú le heochair API
- **[Tagairt do Hooks](./hooks/guide)** — 200+ action hooks agus 280+ filter hooks d’imeachtaí saolré agus do shaincheapadh
- **[Treoir Chomhtháthaithe](./integration-guide/)** — Samplaí do chomhtháthú CRM, anailísíocht, geataí saincheaptha, agus webhooks
- **[Samplaí Cóid](./code-examples/)** — Patrúin ardleibhéil do phraghsáil dhinimiciúil, soláthar suíomhanna, teorainneacha saincheaptha, agus próiseáil il-gheataí
- **[Forbairt Breiseán](./addon-development/getting-started)** — Creatlach struchtúrtha chun breiseáin a thógáil

## Riachtanais {#requirements}

- Suiteáil WordPress Multisite
- PHP 7.4 nó níos airde
- Breiseán Ultimate Multisite gníomhachtaithe

## Suiteáil Composer / Bedrock {#composer--bedrock-installation}

Tá Ultimate Multisite ar fáil ar [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) mar `ultimate-multisite/ultimate-multisite`. Is é seo an modh suiteála molta do shocruithe WordPress bunaithe ar [Bedrock](https://roots.io/bedrock/) agus do thimpeallachtaí eile atá á mbainistiú ag Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Pacáiste athainmnithe (v2.6.1+)
Athainmníodh an pacáiste Composer ó `devstone/ultimate-multisite` go `ultimate-multisite/ultimate-multisite` in v2.6.1. Má thagraíonn do `composer.json` don seanainm díoltóra, nuashonraigh an iontráil require agus rith `composer update`.
:::

Tar éis na suiteála, gníomhachtaigh an breiseán ar an líonra ón Riarachán Líonra:

```bash
wp plugin activate ultimate-multisite --network
```

Nó, má tá tú ag luchtú an bhreiseáin mar bhreiseán must-use trí autoloader Bedrock, úsáid an filter `wp_ultimo_skip_network_active_check` chun an garda gníomhachtaithe a sheachaint:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Tús Tapa {#quick-start}

### Úsáid an REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Ceangail le hImeachtaí {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Tóg Breiseán {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Féach ar gach rannán le haghaidh doiciméadú mionsonraithe agus samplaí.
