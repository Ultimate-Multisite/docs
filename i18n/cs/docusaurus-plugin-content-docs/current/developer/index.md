---
title: Dokumentace pro vývojáře
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentace pro vývojáře

Tento průvodce poskytuje vývojářům vše potřebné k integraci, rozšíření nebo vývoji addonů pro Ultimate Multisite. Ultimate Multisite transformuje WordPress Multisite síť na platformu typu Website-as-a-Service (WaaS).

## Co je k dispozici {#whats-available}

- **[REST API](./rest-api/overview)** — Kompletní operace CRUD pro všechny entity (zákazníci, stránky, členství, platby, produkty, domény) s autentizací pomocí API klíče
- **[Hooks Reference](./hooks/guide)** — Více než 200 akčních hooků a více než 280 filtračních hooků pro události životního cyklu a vlastní přizpůsobení
- **[Integration Guide](./integration-guide/)** — Příklady integrace s CRM, analýzou dat, vlastními bránami (gateways) a webhooks
- **[Code Examples](./code-examples/)** — Pokročilé vzory pro dynamické ceny, poskytování (provisioning) stránek, vlastní limity a zpracování více brán
- **[Addon Development](./addon-development/getting-started)** — Strukturovaný rámec pro budování addon pluginů

## Požadavky {#requirements}

- Instalace WordPress Multisite
- PHP 7.4 nebo vyšší
- Aktivovaný plugin Ultimate Multisite

## Instalace pomocí Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite je k dispozici na [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) jako `ultimate-multisite/ultimate-multisite`. Jedná se o doporučenou instalační metodu pro prostředí WordPress založené na [Bedrock](https://roots.io/bedrock/) a pro další prostředí spravovaná pomocí Composeru.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Překřejmenovaný balíček (v2.6.1+)
Composer balíček byl v verzi 2.6.1 změněn z `devstone/ultimate-multisite` na `ultimate-multisite/ultimate-multisite`. Pokud vaše `composer.json` odkazuje na staré jméno dodavatele, aktualizujte položku `require` a spusťte `composer update`.
:::

Po instalaci plugin aktivujte na úrovni sítě (network-activate) z Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Nebo, pokud plugin načítáte jako must-use plugin přes autoloader Bedrock, použijte filtr `wp_ultimo_skip_network_active_check` k obcházení ochrany aktivace:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Rychlý start {#quick-start}

### Používání REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hooking do událostí {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Reagování na nové registraci zákazníka
});
```

### Vytvoření addonu {#build-an-addon}

```bash
# Generuje základní strukturu addonu z šablony
bash create-addon.sh
```

Pro podrobné dokumentace a příklady se podívejte do každé sekce.
