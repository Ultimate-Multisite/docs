---
title: Dokumentácia pre vývojárov
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentácia pre vývojárov

Táto príručka poskytuje vývojárom všetko potrebné na integráciu s Ultimate Multisite, jeho rozširovanie alebo vývoj addonov pre Ultimate Multisite. Ultimate Multisite premieňa sieť WordPress Multisite na platformu typu Website-as-a-Service (WaaS).

## Čo je k dispozícii {#whats-available}

- **[REST API](./rest-api/overview)** — Kompletné CRUD operácie pre všetky entity (zákazníci, stránky, členstvá, platby, produkty, domény) s autentifikáciou pomocou API kľúča
- **[Referencia hookov](./hooks/guide)** — Viac ako 200 action hookov a viac ako 280 filter hookov pre udalosti životného cyklu a prispôsobenie
- **[Príručka integrácie](./integration-guide/)** — Príklady integrácie CRM, analytiky, vlastných brán a webhookov
- **[Príklady kódu](./code-examples/)** — Pokročilé vzory pre dynamické ceny, provisionovanie stránok, vlastné obmedzenia a spracovanie cez viacero brán
- **[Vývoj addonov](./addon-development/getting-started)** — Štruktúrovaný framework na tvorbu addon pluginov

## Požiadavky {#requirements}

- Inštalácia WordPress Multisite
- PHP 7.4 alebo vyššie
- Aktivovaný plugin Ultimate Multisite

## Inštalácia cez Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite je dostupný na [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ako `ultimate-multisite/ultimate-multisite`. Toto je odporúčaná metóda inštalácie pre WordPress nastavenia založené na [Bedrock](https://roots.io/bedrock/) a ďalšie prostredia spravované cez Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Premenovaný balík (v2.6.1+)
Balík Composer bol vo verzii v2.6.1 premenovaný z `devstone/ultimate-multisite` na `ultimate-multisite/ultimate-multisite`. Ak váš `composer.json` odkazuje na starý názov dodávateľa, aktualizujte položku require a spustite `composer update`.
:::

Po inštalácii aktivujte plugin v sieti zo správy siete:

```bash
wp plugin activate ultimate-multisite --network
```

Alebo, ak načítavate plugin ako must-use plugin cez autoloader Bedrock, použite filter `wp_ultimo_skip_network_active_check` na obídenie ochrany aktivácie:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Rýchly štart {#quick-start}

### Použite REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Napojte sa na udalosti {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Vytvorte addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Podrobnú dokumentáciu a príklady nájdete v jednotlivých sekciách.
