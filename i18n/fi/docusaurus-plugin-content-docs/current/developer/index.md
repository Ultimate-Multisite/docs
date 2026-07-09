---
title: Kehittäjädokumentaatio
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Kehittäjädokumentaatio

Tämä opas tarjoaa kehittäjille kaiken tarvittavan Ultimate Multisiteen integrointiin, sen laajentamiseen tai lisäosien kehittämiseen. Ultimate Multisite muuntaa WordPress Multisite -verkon Website-as-a-Service (WaaS) -alustaksi.

## Mitä on saatavilla

- **[REST API](./rest-api/overview)** — Täydelliset CRUD-toiminnot kaikille entiteeteille (asiakkaat, sivustot, jäsenyydet, maksut, tuotteet, verkkotunnukset) API-avaintodennuksella
- **[Hook-viite](./hooks/guide)** — Yli 200 action hookia ja yli 280 filter hookia elinkaaritapahtumiin ja mukautukseen
- **[Integraatio-opas](./integration-guide/)** — Esimerkkejä CRM-integraatiosta, analytiikasta, mukautetuista maksuyhdyskäytävistä ja webhookeista
- **[Koodiesimerkit](./code-examples/)** — Edistyneet mallit dynaamiseen hinnoitteluun, sivustojen käyttöönottoon, mukautettuihin rajoituksiin ja usean maksuyhdyskäytävän käsittelyyn
- **[Lisäosien kehittäminen](./addon-development/getting-started)** — Jäsennelty kehys lisäosapluginien rakentamiseen

## Vaatimukset

- WordPress Multisite -asennus
- PHP 7.4 tai uudempi
- Ultimate Multisite -plugin aktivoitu

## Composer / Bedrock -asennus

Ultimate Multisite on saatavilla [Packagistissa](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) nimellä `ultimate-multisite/ultimate-multisite`. Tämä on suositeltu asennustapa [Bedrock](https://roots.io/bedrock/)-pohjaisille WordPress-kokoonpanoille ja muille Composer-hallituille ympäristöille.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Uudelleennimetty paketti (v2.6.1+)
Composer-paketti nimettiin uudelleen muodosta `devstone/ultimate-multisite` muotoon `ultimate-multisite/ultimate-multisite` versiossa v2.6.1. Jos `composer.json` viittaa vanhaan toimittajan nimeen, päivitä require-merkintä ja suorita `composer update`.
:::

Asennuksen jälkeen verkkoaktivoi plugin Network Administa:

```bash
wp plugin activate ultimate-multisite --network
```

Tai jos lataat pluginin must-use-pluginina Bedrockin autoloaderin kautta, käytä `wp_ultimo_skip_network_active_check`-filtteriä aktivointisuojan ohittamiseen:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Pika-aloitus

### Käytä REST APIa

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Kytkeydy tapahtumiin

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Rakenna lisäosa

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Katso kustakin osiosta yksityiskohtainen dokumentaatio ja esimerkit.
