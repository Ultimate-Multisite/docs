---
title: Ontwikkelaardokumentasie
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Ontwikkelaardokumentasie {#developer-documentation}

Hierdie gids voorsien ontwikkelaars van alles wat nodig is om met Ultimate Multisite te integreer, dit uit te brei, of byvoegings daarvoor te ontwikkel. Ultimate Multisite omskep ’n WordPress Multisite-netwerk in ’n Website-as-a-Service (WaaS)-platform.

## Wat beskikbaar is {#whats-available}

- **[REST API](./rest-api/overview)** — Volledige CRUD-bewerkings vir alle entiteite (kliënte, webwerwe, lidmaatskappe, betalings, produkte, domeine) met API-sleutel-verifikasie
- **[Hooks-verwysing](./hooks/guide)** — 200+ aksie-hooks en 280+ filter-hooks vir lewensiklusgebeurtenisse en aanpassing
- **[Integrasiegids](./integration-guide/)** — Voorbeelde vir CRM-integrasie, analitika, pasgemaakte betaalpoorte, en webhooks
- **[Kodevoorbeelde](./code-examples/)** — Gevorderde patrone vir dinamiese pryse, webwerf-voorsiening, pasgemaakte beperkings, en multi-betaalpoort-verwerking
- **[Byvoeging-ontwikkeling](./addon-development/getting-started)** — Gestruktureerde raamwerk vir die bou van byvoeging-plugins

## Vereistes {#requirements}

- WordPress Multisite-installasie
- PHP 7.4 of hoër
- Ultimate Multisite-plugin geaktiveer

## Composer / Bedrock-installasie {#composer--bedrock-installation}

Ultimate Multisite is beskikbaar op [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) as `ultimate-multisite/ultimate-multisite`. Dit is die aanbevole installasiemetode vir [Bedrock](https://roots.io/bedrock/)-gebaseerde WordPress-opstellings en ander Composer-bestuurde omgewings.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Hernoemde pakket (v2.6.1+)
Die Composer-pakket is hernoem van `devstone/ultimate-multisite` na `ultimate-multisite/ultimate-multisite` in v2.6.1. As jou `composer.json` na die ou verskaffernaam verwys, werk die `require`-inskrywing by en voer `composer update` uit.
:::

Ná installasie, netwerkaktiveer die inprop vanuit die Netwerkadministrasie:

```bash
wp plugin activate ultimate-multisite --network
```

Of, as jy die inprop as ’n moet-gebruik-inprop via Bedrock se autoloader laai, gebruik die `wp_ultimo_skip_network_active_check`-filter om die aktiveringswag te omseil:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Vinnige begin {#quick-start}

### Gebruik die REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Haak by gebeure in {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Bou ’n byvoeging {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Sien elke afdeling vir gedetailleerde dokumentasie en voorbeelde.
