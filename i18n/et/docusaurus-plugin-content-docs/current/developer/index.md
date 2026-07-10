---
title: Arendaja dokumentatsioon
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Arendaja dokumentatsioon {#developer-documentation}

See juhend annab arendajatele kõik vajaliku Ultimate Multisite’iga integreerimiseks, selle laiendamiseks või sellele lisamoodulite arendamiseks. Ultimate Multisite muudab WordPress Multisite võrgu Website-as-a-Service (WaaS) platvormiks.

## Mis on saadaval {#whats-available}

- **[REST API](./rest-api/overview)** — Täielikud CRUD-toimingud kõigi olemite jaoks (kliendid, saidid, liikmesused, maksed, tooted, domeenid) API-võtmega autentimisega
- **[Hookide viide](./hooks/guide)** — 200+ tegevushooki ja 280+ filtrihooki elutsükli sündmuste ja kohandamise jaoks
- **[Integratsioonijuhend](./integration-guide/)** — Näited CRM-i integratsiooni, analüütika, kohandatud makseväravate ja webhookide jaoks
- **[Koodinäited](./code-examples/)** — Täpsemad mustrid dünaamilise hinnastamise, saitide ettevalmistamise, kohandatud piirangute ja mitme maksevärava töötlemise jaoks
- **[Lisamoodulite arendus](./addon-development/getting-started)** — Struktureeritud raamistik lisamooduli pluginate loomiseks

## Nõuded {#requirements}

- WordPress Multisite installatsioon
- PHP 7.4 või uuem
- Ultimate Multisite plugin aktiveeritud

## Composer / Bedrock installimine {#composer--bedrock-installation}

Ultimate Multisite on saadaval [Packagistis](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) paketina `ultimate-multisite/ultimate-multisite`. See on soovitatav installimisviis [Bedrock](https://roots.io/bedrock/)-põhiste WordPressi seadistuste ja teiste Composeriga hallatavate keskkondade jaoks.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Ümber nimetatud pakett (v2.6.1+)
Composer pakett nimetati versioonis v2.6.1 ümber: `devstone/ultimate-multisite` asemel `ultimate-multisite/ultimate-multisite`. Kui sinu `composer.json` viitab vanale tarnijanimele, uuenda require-kirjet ja käivita `composer update`.
:::

Pärast installimist aktiveeri plugin võrgutasemel Network Administ:

```bash
wp plugin activate ultimate-multisite --network
```

Või kui laadid plugina Bedrocki automaatlaadija kaudu must-use pluginana, kasuta aktiveerimiskontrolli vahelejätmiseks filtrit `wp_ultimo_skip_network_active_check`:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Kiirstart {#quick-start}

### Kasuta REST API-t {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Seo sündmustega {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Loo lisamoodul {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Üksikasjaliku dokumentatsiooni ja näidete jaoks vaata iga jaotist.
