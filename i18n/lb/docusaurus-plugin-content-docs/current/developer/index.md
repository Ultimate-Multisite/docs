---
title: Entwécklerdokumentatioun
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Entwéckler-Dokumentatioun

Dëse Guide liwwert Entwéckler alles, wat néideg ass, fir mat Ultimate Multisite z'integréieren, et z'erweideren oder Addons dofir z'entwéckelen. Ultimate Multisite transforméiert e WordPress Multisite-Netzwierk an eng Website-as-a-Service (WaaS)-Plattform.

## Wat verfügbar ass

- **[REST API](./rest-api/overview)** — Komplett CRUD-Operatioune fir all Entitéiten (Clienten, Siten, Memberschaften, Bezuelungen, Produkter, Domainen) mat API-Schlëssel-Authentifikatioun
- **[Hooks-Referenz](./hooks/guide)** — 200+ Action Hooks an 280+ Filter Hooks fir Lifecycle-Evenementer an Upassung
- **[Integratiounsguide](./integration-guide/)** — Beispiller fir CRM-Integratioun, Analytics, personaliséiert Gateways a Webhooks
- **[Code-Beispiller](./code-examples/)** — Avancéiert Mustere fir dynamesch Präisser, Site-Bereetstellung, personaliséiert Limitatiounen a Multi-Gateway-Veraarbechtung
- **[Addon-Entwécklung](./addon-development/getting-started)** — Strukturéierte Framework fir Addon-Plugins ze bauen

## Ufuerderungen

- WordPress Multisite-Installatioun
- PHP 7.4 oder méi héich
- Ultimate Multisite-Plugin aktivéiert

## Composer / Bedrock-Installatioun

Ultimate Multisite ass op [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) als `ultimate-multisite/ultimate-multisite` verfügbar. Dëst ass déi recommandéiert Installatiounsmethod fir WordPress-Setups op Basis vu [Bedrock](https://roots.io/bedrock/) an aner Composer-verwalt Ëmfeld.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Package ëmbenannt (v2.6.1+)
De Composer-Package gouf a v2.6.1 vun `devstone/ultimate-multisite` op `ultimate-multisite/ultimate-multisite` ëmbenannt. Wann Är `composer.json` nach den ale Vendor-Numm referenzéiert, aktualiséiert d'Require-Entrée a féiert `composer update` aus.
:::

No der Installatioun aktivéiert de Plugin am Netzwierk iwwer den Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Oder, wann Dir de Plugin als must-use Plugin iwwer dem Bedrock säin Autoloader lued, benotzt de Filter `wp_ultimo_skip_network_active_check`, fir den Aktivéierungs-Guard ze ëmgoen:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Schnellstart

### D'REST API benotzen

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### An Evenementer andocken

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### En Addon bauen

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Kuckt all Sektioun fir detailléiert Dokumentatioun a Beispiller.
