---
title: Dokumentado por programistoj
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dokumentado por programistoj

Ĉi tiu gvidilo provizas al programistoj ĉion bezonatan por integri kun, etendi aŭ evoluigi aldonaĵojn por Ultimate Multisite. Ultimate Multisite transformas WordPress Multisite reton en platformon Website-as-a-Service (WaaS).

## Kio disponeblas

- **[REST API](./rest-api/overview)** — Kompletaj CRUD-operacioj por ĉiuj entoj (klientoj, retejoj, membrecoj, pagoj, produktoj, domajnoj) kun API-ŝlosila aŭtentikigo
- **[Referenco pri Hooks](./hooks/guide)** — 200+ ago-hooks kaj 280+ filtril-hooks por vivciklaj eventoj kaj personigo
- **[Gvidilo pri integriĝo](./integration-guide/)** — Ekzemploj por CRM-integriĝo, analitiko, kutimaj pagopordoj kaj webhooks
- **[Kodaj ekzemploj](./code-examples/)** — Altnivelaj ŝablonoj por dinamika prezado, reteja provizado, kutimaj limigoj kaj plurpagoporda traktado
- **[Evoluigo de aldonaĵoj](./addon-development/getting-started)** — Strukturita kadro por konstrui aldonaĵajn plugins

## Postuloj

- WordPress Multisite instalado
- PHP 7.4 aŭ pli alta
- Ultimate Multisite plugin aktivigita

## Composer / Bedrock instalado

Ultimate Multisite disponeblas ĉe [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) kiel `ultimate-multisite/ultimate-multisite`. Ĉi tio estas la rekomendata instala metodo por [Bedrock](https://roots.io/bedrock/)-bazitaj WordPress aranĝoj kaj aliaj Composer-administrataj medioj.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renomita pakaĵo (v2.6.1+)
La Composer pakaĵo estis renomita de `devstone/ultimate-multisite` al `ultimate-multisite/ultimate-multisite` en v2.6.1. Se via `composer.json` referencas la malnovan vendistan nomon, ĝisdatigu la require-eniron kaj rulu `composer update`.
:::

Post instalado, ret-aktivigu la plugin de la Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Aŭ, se vi ŝargas la plugin kiel must-use plugin per la aŭtoŝargilo de Bedrock, uzu la filtrilon `wp_ultimo_skip_network_active_check` por preteriri la aktivigan gardilon:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Rapida komenco

### Uzu la REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hook en eventojn

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Konstruu aldonaĵon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Vidu ĉiun sekcion por detala dokumentado kaj ekzemploj.
