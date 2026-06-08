---
title: Dokumentazioa desarrollador artealeak
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Desarrollapurri Dokumentazioa

Hau gure gure gizartean Ultimate Multisite-arekin integratzea, hobetzea edo addon-ak datu behar dituzten guztia ematen da. Ultimate Multisite-ak WordPress Multisite network bat Website-as-a-Service (WaaS) platform batean funtziatzen du.

## Zer dago?

- **[REST API](./rest-api/overview)** — All entities-ek (klientzak, sitiak, membership-ak, labenguen, produkzioak, domain-ak) CRUD operazio guztietarako API key autentifikazioarekin
- **[Hooks Reference](./hooks/guide)** — Lifecycle events eta personalizazio arteko 200+ action hooks eta 280+ filter hooks
- **[Integration Guide](./integration-guide/)** — CRM integrazioa, analytics, custom gateways eta webhooks-eko dauden erabilgarriak
- **[Code Examples](./code-examples/)** — Dynamic pricing, site provisionamenduak, custom limitazioak eta multi-gateway prosesamentu arteko advanced pattern-ek
- **[Addon Development](./addon-development/getting-started)** — Addon plugins sortzeko estruktura bat

## Erreguntzak

- WordPress Multisite instalazioa
- PHP 7.4 edo handiagoa
- Ultimate Multisite plugin batek aktibatu dagoela

## Composer / Bedrock Instalazioa

Ultimate Multisite-ak [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite)rean `ultimate-multisite/ultimate-multisite` bezala aurkitu da. Hau da Bedrock-baziko WordPress setup-ek eta beste Composer-eko erakundutako erabilgarrietan bestelako instalazio metodoa.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Paketaren (v2.6.1+)
Composer paketaren `devstone/ultimate-multisite` da `ultimate-multisite/ultimate-multisite` irren egin aipatzen da v2.6.1-an. Hauko `composer.json`-ek oldiak erabiltzen ari zete, require entrya updateatu eta `composer update` eratu behar duzu.
:::

Instalazioaren ondoren, pluginaren network-eko aktibatu:

```bash
wp plugin activate ultimate-multisite --network
```

Muga, pluginaren bedoak Bedrock-en autoloader gisa erabiltzen ari zete, aktibazioa ezarritzeko gaitasuna (guard) ezarri eta `wp_ultimo_skip_network_active_check` filtera erabili:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Aurrera egin behar duten jarduerak (Quick Start)

### REST API erabili

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Espenerietan (Events) hookatu

```php
add_action('wu_customer_post_create', function($customer) {
    // New customer signups-errekin berezia
});
```

### Addon bat sortu

```bash
# Template-ek gogoratu addon scaffold sortu du
bash create-addon.sh
```

Dian edoze sektionak detailuak eta erabilgarriak (examples) hartu.
