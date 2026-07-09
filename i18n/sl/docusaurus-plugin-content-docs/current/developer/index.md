---
title: Dokumentacija za razvijalce
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentacija za razvijalce {#developer-documentation}

Ta vodnik razvijalcem zagotavlja vse, kar potrebujejo za integracijo z Ultimate Multisite, njegovo razširitev ali razvoj dodatkov zanj. Ultimate Multisite pretvori omrežje WordPress Multisite v platformo spletno mesto kot storitev (WaaS).

## Kaj je na voljo {#whats-available}

- **[REST API](./rest-api/overview)** — Celovite CRUD-operacije za vse entitete (stranke, spletna mesta, članstva, plačila, izdelki, domene) z avtentikacijo prek API ključa
- **[Referenca hooks](./hooks/guide)** — Več kot 200 action hooks in več kot 280 filter hooks za dogodke življenjskega cikla in prilagajanje
- **[Vodnik za integracije](./integration-guide/)** — Primeri za integracijo CRM, analitiko, prehode po meri in webhooks
- **[Primeri kode](./code-examples/)** — Napredni vzorci za dinamično določanje cen, zagotavljanje spletnih mest, omejitve po meri in obdelavo z več prehodi
- **[Razvoj dodatkov](./addon-development/getting-started)** — Strukturiran okvir za izdelavo dodatkov plugin

## Zahteve {#requirements}

- Namestitev WordPress Multisite
- PHP 7.4 ali novejši
- Aktiviran plugin Ultimate Multisite

## Namestitev Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite je na voljo na [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) kot `ultimate-multisite/ultimate-multisite`. To je priporočena metoda namestitve za WordPress postavitve, ki temeljijo na [Bedrock](https://roots.io/bedrock/), in druga okolja, upravljana s Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Preimenovan paket (v2.6.1+)
Paket Composer je bil v v2.6.1 preimenovan iz `devstone/ultimate-multisite` v `ultimate-multisite/ultimate-multisite`. Če se vaš `composer.json` sklicuje na staro ime ponudnika, posodobite vnos require in zaženite `composer update`.
:::

Po namestitvi plugin omrežno aktivirajte v Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Ali pa, če plugin nalagate kot must-use plugin prek Bedrockovega autoloaderja, uporabite filter `wp_ultimo_skip_network_active_check`, da obidete varovalo aktivacije:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Hitri začetek {#quick-start}

### Uporabite REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Priklopite se na dogodke {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Ustvarite dodatek {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Za podrobno dokumentacijo in primere si oglejte posamezen razdelek.
