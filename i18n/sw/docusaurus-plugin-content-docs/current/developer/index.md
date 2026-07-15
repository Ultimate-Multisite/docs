---
title: Waraka wa Maendeleo
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentasi kwa Wataalamu wa Uendelezaji

Mwongozo huu unatoa wataalamu wa uendelezaji kila kitu kinachohitajika ili kuunganisha (integrate), kupanua (extend), au kuunda *addons* kwa Ultimate Multisite. Ultimate Multisite hubadilisha mtandao wa WordPress Multisite kuwa jukwaa la Website-as-a-Service (WaaS).

## Nini Kinapatikana {#whats-available}

- **[REST API](./rest-api/overview)** — Operesheni kamili za CRUD (Kuunda, Kusoma, Kubadilisha, Kufuta) kwa viumbe vyote (wateja, tovuti, ushilingi, malipo, bidhaa, nyanja) kwa uthibitisho wa API key
- **[Hooks Reference](./hooks/guide)** — Hooks zaidi ya 200 za matukio (action hooks) na zaidi ya 280 za kufiliri (filter hooks) kwa matukio ya maisha na kubadilisha mwelekeo
- **[Integration Guide](./integration-guide/)** — Mifano ya kuunganisha na CRM, analytics, malango maalum (custom gateways), na webhooks
- **[Code Examples](./code-examples/)** — Mifumo ya hali ya juu kwa bei za kubadilika, uandaaji wa tovuti, vikwazo maalum, na usindikaji wa malango mengi
- **[Addon Development](./addon-development/getting-started)** — Mfumo uliopangwa kwa ajili ya kujenga *addon plugins*

## Mahitaji {#requirements}

- Usakinishaji wa WordPress Multisite
- PHP 7.4 au zaidi
- Plugin ya Ultimate Multisite imewashwa

## Usakinishaji wa Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite inapatikana kwenye [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) kama `ultimate-multisite/ultimate-multisite`. Hii ndiyo njia inayopendekezwa ya usakinishaji kwa mipangilio ya WordPress inayotumia [Bedrock](https://roots.io/bedrock/)-na pia kwa mazingira mengine yanayosimamiwa na Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
Paketi ya Composer ilibadilisha jina kutoka `devstone/ultimate-multisite` hadi `ultimate-multisite/ultimate-multisite` katika v2.6.1. Ikiwa `composer.json` yako inarejelea jina la zamani la *vendor*, sasisha sehemu ya `require` na uendeshe `composer update`.
:::

Baada ya usakinishaji, washa plugin kwenye Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Au, ikiwa unaleta plugin kama plugin ya lazima kutumika (must-use plugin) kupitia autoloader ya Bedrock, tumia filter ya `wp_ultimo_skip_network_active_check` ili kupita kinga ya uashiri:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Kuanza Haraka {#quick-start}

### Tumia REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Unganisha kwenye Matukio {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Jibu kwa usajili mpya wa mteja
});
```

### Jenga Addon {#build-an-addon}

```bash
# Tunga scaffold ya addon kutoka kwenye template
bash create-addon.sh
```

Tazama kila sehemu kwa hati miliki na mifano ya kina.
