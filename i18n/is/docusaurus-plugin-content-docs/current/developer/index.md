---
title: Notendastöðun á þróunarferli
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Notendur að þróunarleiðbeiningum {#developer-documentation}

Þessi leiðbeiningin gefur þróunarmenjum allt sem þeir þurfa til að tengja sér við, nýta eða byggja við addon fyrir Ultimate Multisite. Ultimate Multisite breytur WordPress Multisite net í WaaS (Website-as-a-Service) plattforma.

## Hvað er til að nota {#whats-available}

- **[REST API](./rest-api/overview)** — Full CRUD (Create, Read, Update, Delete) aðgerðir fyrir allar einstaklingar (klientir, staðir, samþættingar, betalingar, vörur, domænar) með API key inniheldingu
- **[Hooks Reference](./hooks/guide)** — 200+ áhrifshooks og 280+ filter hooks fyrir lifeyrferðarhefni og sérsniðna aðlögunir
- **[Integration Guide](./integration-guide/)** — Dæmi fyrir samþætting í CRM, greiningu, sérsniðna gatavönd og webhooks
- **[Code Examples](./code-examples/)** — Framkvæmdarstílar fyrir dynamíska príssetningu, staðarferðarferli, sérsniðna takmarkanir og aðgengi í fleiri gatavönd

## Kröfur {#requirements}

- WordPress Multisite innreiðsla
- PHP 7.4 eða hærri
- Ultimate Multisite plugin aktivert

## Composer / Bedrock Innreiðsla {#composer--bedrock-installation}

Ultimate Multisite er til að ná á [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) sem `ultimate-multisite/ultimate-multisite`. Þetta er tillaga innreiðslu fyrir WordPress setups nota Bedrock og övrantar umhverfi sem eru stýrt með Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Einnennufur (v2.6.1+)
Pakkið var nefnd (v2.6.1 og uppsöking) frå `devstone/ultimate-multisite` í `ultimate-multisite/ultimate-multisite`. Ef þú notar gamla nefnann í `composer.json`, verðu að uppfærja skrána fyrir `require` og körfuðu `composer update`.
:::

Eft sem þú hefur hlað plugininn í, aktivaðu netið (network) úr Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Eða ef þú ert að ladda plugininn sem nauðsynlegur plugin með autoloader Bedrock’s, nota `wp_ultimo_skip_network_active_check` filter til að umgås við aktivaðar skráningu:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Hringrásn á byrjun (Quick Start) {#quick-start}

### Nota REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Umgås við hendingar (Hook into Events) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // Reagðu á nýja skráningar viðskiptavina
});
```

### Byggðu eða viðbúið við Addon {#build-an-addon}

```bash
# Skapa scaffold fyrir addon frá temaplakki
bash create-addon.sh
```

Sjá hverja hluta fyrir nánari skýrslur og dæmi.
