---
title: Dokumentacioni për Zhvilluesit
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentacioni për zhvilluesit

Ky udhëzues u ofron zhvilluesve gjithçka që nevojitet për t’u integruar me Ultimate Multisite, për ta zgjeruar ose për të zhvilluar addon-e për të. Ultimate Multisite e transformon një rrjet WordPress Multisite në një platformë Website-as-a-Service (WaaS).

## Çfarë është në dispozicion {#whats-available}

- **[REST API](./rest-api/overview)** — Operacione të plota CRUD për të gjitha entitetet (klientë, sajte, anëtarësime, pagesa, produkte, domene) me autentikim me API key
- **[Referenca e Hooks](./hooks/guide)** — Mbi 200 action hooks dhe mbi 280 filter hooks për ngjarje të ciklit të jetës dhe personalizim
- **[Udhëzuesi i integrimit](./integration-guide/)** — Shembuj për integrim me CRM, analytics, porta pagese të personalizuara dhe webhooks
- **[Shembuj kodi](./code-examples/)** — Modele të avancuara për çmime dinamike, krijim sajtesh, kufizime të personalizuara dhe përpunim me shumë porta pagese
- **[Zhvillimi i addon-eve](./addon-development/getting-started)** — Kornizë e strukturuar për ndërtimin e plugin-eve addon

## Kërkesat {#requirements}

- Instalimi WordPress Multisite
- PHP 7.4 ose më i lartë
- Plugin-i Ultimate Multisite i aktivizuar

## Instalimi me Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite është i disponueshëm në [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) si `ultimate-multisite/ultimate-multisite`. Kjo është metoda e rekomanduar e instalimit për konfigurimet WordPress të bazuara në [Bedrock](https://roots.io/bedrock/) dhe mjedise të tjera të menaxhuara me Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Paketë e riemërtuar (v2.6.1+)
Paketa Composer u riemërtua nga `devstone/ultimate-multisite` në `ultimate-multisite/ultimate-multisite` në v2.6.1. Nëse `composer.json` juaj i referohet emrit të vjetër të vendor-it, përditësoni hyrjen require dhe ekzekutoni `composer update`.
:::

Pas instalimit, aktivizojeni plugin-in në rrjet nga Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Ose, nëse po e ngarkoni plugin-in si një plugin must-use përmes autoloader-it të Bedrock, përdorni filtrin `wp_ultimo_skip_network_active_check` për të anashkaluar mbrojtjen e aktivizimit:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Fillim i shpejtë {#quick-start}

### Përdorni REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Lidhuni me ngjarjet {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Ndërtoni një Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Shihni çdo seksion për dokumentacion dhe shembuj të detajuar.
