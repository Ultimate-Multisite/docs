---
title: Antontan-taratasy ho an'ny Mpamorona
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Antontan-taratasy ho an’ny Developer

Ity torolàlana ity dia manome ny developer ny zava-drehetra ilaina mba hifandray amin’i Ultimate Multisite, hanitatra azy, na hamolavola addon ho an’i Ultimate Multisite. Ultimate Multisite dia manova tambajotra WordPress Multisite ho sehatra Website-as-a-Service (WaaS).

## Izay misy {#whats-available}

- **[REST API](./rest-api/overview)** — Asa CRUD feno ho an’ny entité rehetra (mpanjifa, tranonkala, membership, fandoavam-bola, vokatra, domains) miaraka amin’ny fanamarinana amin’ny API key
- **[Fanovozan-kevitra Hooks](./hooks/guide)** — Action hooks 200+ sy filter hooks 280+ ho an’ny zava-mitranga amin’ny lifecycle sy ny fanamboarana manokana
- **[Torolàlana Integrasiona](./integration-guide/)** — Ohatra ho an’ny integrasiona CRM, analytics, vavahady manokana, ary webhooks
- **[Ohatra Code](./code-examples/)** — Lamina mandroso ho an’ny pricing miovaova, provisioning tranonkala, fetra manokana, ary fanodinana multi-gateway
- **[Fampivoarana Addon](./addon-development/getting-started)** — Rafitra voarindra hananganana addon plugins

## Fepetra takiana {#requirements}

- Fametrahana WordPress Multisite
- PHP 7.4 na ambony
- Ultimate Multisite plugin navadika ho mavitrika

## Fametrahana Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite dia hita ao amin’ny [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) amin’ny anarana hoe `ultimate-multisite/ultimate-multisite`. Ity no fomba fametrahana atolotra ho an’ny fametrahana WordPress miorina amin’ny [Bedrock](https://roots.io/bedrock/) sy tontolo hafa tantanin’ny Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Novana anarana ny package (v2.6.1+)
Ny package Composer dia novana anarana avy amin’ny `devstone/ultimate-multisite` ho `ultimate-multisite/ultimate-multisite` tao amin’ny v2.6.1. Raha manondro ilay anaran’ny vendor taloha ny `composer.json`-nao, havaozy ny require entry ary alefaso ny `composer update`.
:::

Aorian’ny fametrahana, ampandehano amin’ny tambajotra ny plugin avy ao amin’ny Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Na, raha mampiditra ny plugin ho must-use plugin amin’ny alalan’ny autoloader an’i Bedrock ianao, ampiasao ny filter `wp_ultimo_skip_network_active_check` mba hialana amin’ny mpiambina activation:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Fanombohana Haingana {#quick-start}

### Ampiasao ny REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Mifandraisa amin’ny Events {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Manangàna Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Jereo ny fizarana tsirairay ho an’ny antontan-taratasy sy ohatra amin’ny antsipiriany.
