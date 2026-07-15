---
title: Belgekirina Pêşvebiran
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Belgekirina Pêşdebir

Ev rêber ji pêşdebir re her tiştê pêwîst dide da ku bi Ultimate Multisite re yek bike, wê fireh bike, an pêvekên wê pêş bixe. Ultimate Multisite toreke WordPress Multisite vediguhere platformeke Malper-wekî-Xizmet (WaaS).

## Çi Heye {#whats-available}

- **[REST API](./rest-api/overview)** — Hemû karên CRUD ji bo hemû yekeyan (xerîdar, malper, endamî, dayîn, berhem, domain) bi piştrastkirina bi kilîta API
- **[Referansa Hooks](./hooks/guide)** — Zêdetirî 200 action hooks û zêdetirî 280 filter hooks ji bo bûyerên jiyan-dorê û xweşkirinê
- **[Rêbera Yekkirinê](./integration-guide/)** — Mînak ji bo yekkirina CRM, analytics, dergehên taybet, û webhooks
- **[Mînakên Kodê](./code-examples/)** — Şêwazên pêşketî ji bo bihayê dînamîk, amade kirina malperê, sînorkirinên taybet, û pêvajoya çend-dergehî
- **[Pêşxistina Pêvekê](./addon-development/getting-started)** — Çarçoveyeke rêxistî ji bo avakirina pêvekên plugin

## Pêwîstî {#requirements}

- Sazkirina WordPress Multisite
- PHP 7.4 an jor
- pêveka Ultimate Multisite çalak kirî

## Sazkirina Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite li ser [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) wekî `ultimate-multisite/ultimate-multisite` berdest e. Ev rêbaza sazkirinê ya pêşniyarkirî ye ji bo sazgehên WordPress yên li ser bingeha [Bedrock](https://roots.io/bedrock/) û hawîrdorên din ên bi Composer têne rêvebirin.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Navê pakêtê hate guhartin (v2.6.1+)
Pakêta Composer di v2.6.1 de ji `devstone/ultimate-multisite` hate guhartin bo `ultimate-multisite/ultimate-multisite`. Ger `composer.json` a te navê vendor ê kevn nîşan dide, têketina require nû bike û `composer update` bimeşîne.
:::

Piştî sazkirinê, plugin ji Network Admin li ser torê çalak bike:

```bash
wp plugin activate ultimate-multisite --network
```

An jî, heke tu pluginê wekî must-use plugin bi autoloader a Bedrock bar dikî, filter a `wp_ultimo_skip_network_active_check` bi kar bîne da ku parastina çalakirinê derbas bikî:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Destpêka Bilez {#quick-start}

### REST API bi kar bîne {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Bi Bûyeran re Hook bike {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Pêvekekê ava bike {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Ji bo belgekirin û mînakên bi hûrgilî, li her beşê binêre.
