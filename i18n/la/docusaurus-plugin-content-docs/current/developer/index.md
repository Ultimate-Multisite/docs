---
title: Documentatio Progressoris
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentatio ad Excultores {#developer-documentation}

Hoc dux excultoribus praebet omnia quae necessaria sunt ad integrandum cum, extendendum, vel additamenta pro Ultimate Multisite evolvenda. Ultimate Multisite rete WordPress Multisite in suggestum Website-as-a-Service (WaaS) transformat.

## Quae Praesto Sint {#whats-available}

- **[REST API](./rest-api/overview)** — Operationes CRUD completae pro omnibus entitatibus (clientibus, sitibus, sodalitatibus, solutionibus, productis, dominiis) cum authentificatione per clavem API
- **[Index Hookorum](./hooks/guide)** — 200+ action hooks et 280+ filter hooks pro eventibus cycli vitae et aptatione
- **[Dux Integrationis](./integration-guide/)** — Exempla pro integratione CRM, analyticis, portis personalibus, et webhooks
- **[Exempla Codicis](./code-examples/)** — Exemplaria provecta pro pretio dynamico, provisione situum, limitationibus personalibus, et tractatione per plures portas
- **[Progressio Additamentorum](./addon-development/getting-started)** — Compages ordinata ad plugin additamentorum aedificanda

## Requisita {#requirements}

- Installatio WordPress Multisite
- PHP 7.4 vel superior
- plugin Ultimate Multisite activatum

## Installatio Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite praesto est in [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ut `ultimate-multisite/ultimate-multisite`. Haec est methodus installationis commendata pro constitutionibus WordPress in [Bedrock](https://roots.io/bedrock/) fundatis et aliis ambitus per Composer administratis.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Fasciculus renominatus (v2.6.1+)
Fasciculus Composer a `devstone/ultimate-multisite` ad `ultimate-multisite/ultimate-multisite` in v2.6.1 renominatus est. Si tuus `composer.json` vetus nomen venditoris refert, introitum require renova et `composer update` exsequere.
:::

Post installationem, plugin in rete activa ex Administratore Retis:

```bash
wp plugin activate ultimate-multisite --network
```

Aut, si plugin ut must-use plugin per autoloader Bedrock oneratur, filtro `wp_ultimo_skip_network_active_check` utere ut custodiam activationis praetereas:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Initium Celer {#quick-start}

### REST API Utere {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Eventibus per Hooks Adiunge {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Additamentum Aedifica {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Vide unamquamque sectionem pro documentis accuratis et exemplis.
