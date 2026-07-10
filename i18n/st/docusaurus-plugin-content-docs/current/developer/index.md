---
title: Litokomane tsa Baqapi
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Litokomane tsa Bahlahisi {#developer-documentation}

Tataiso ena e fa bahlahisi tsohle tse hlokahalang ho kopanya le, ho atolosa, kapa ho ntshetsa pele di-addon bakeng sa Ultimate Multisite. Ultimate Multisite e fetola marangrang a WordPress Multisite hore e be sethala sa Website-as-a-Service (WaaS).

## Se Fumanehang {#whats-available}

- **[REST API](./rest-api/overview)** — Diketso tse felletseng tsa CRUD bakeng sa dikarolo tsohle (bareki, disaete, botho, ditefo, dihlahiswa, didomain) ka netefatso ya API key
- **[Tshupiso ya Hooks](./hooks/guide)** — Di-action hooks tse fetang 200 le di-filter hooks tse fetang 280 bakeng sa diketsahalo tsa potoloho ya bophelo le ho ikgethela
- **[Tataiso ya Kopanyo](./integration-guide/)** — Mehlala ya kopanyo ya CRM, analytics, dikgoro tse ikgethetseng, le webhooks
- **[Mehlala ya Code](./code-examples/)** — Dipaterone tse tsoetseng pele bakeng sa ditheko tse fetohang, ho lokisetsa saete, meedi e ikgethetseng, le tshebetso ya dikgoro tse ngata
- **[Ntshetsopele ya Addon](./addon-development/getting-started)** — Moralo o hlophisitsweng bakeng sa ho aha di-addon plugins

## Ditlhoko {#requirements}

- Ho kengwa ha WordPress Multisite
- PHP 7.4 kapa ho feta
- Ultimate Multisite plugin e kentsoe tshebetsong

## Ho Kengwa ka Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite e fumaneha ho [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) e le `ultimate-multisite/ultimate-multisite`. Ena ke mokgwa o kgothalletswang wa ho kenya bakeng sa ditlhophiso tsa WordPress tse thehilweng ho [Bedrock](https://roots.io/bedrock/) le ditikoloho tse ding tse laolwang ke Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Sephuthelwana se reheletswe bocha (v2.6.1+)
Sephuthelwana sa Composer se reheletswe bocha ho tloha ho `devstone/ultimate-multisite` ho ya ho `ultimate-multisite/ultimate-multisite` ho v2.6.1. Haeba `composer.json` ya hao e supa lebitso la morekisi la kgale, ntjhafatsa kenyo ya require mme o sebetse `composer update`.
:::

Ka mora ho kenya, kenya plugin tshebetsong marangrang ho tswa ho Motsamaisi wa Marangrang:

```bash
wp plugin activate ultimate-multisite --network
```

Kapa, haeba o kenya plugin e le plugin e tlamehang ho sebediswa ka autoloader ya Bedrock, sebedisa filter ya `wp_ultimo_skip_network_active_check` ho feta molebedi wa ho kenya tshebetsong:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Qalo e Potlakileng {#quick-start}

### Sebedisa REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Hokela ho Diketsahalo {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Aha Addon {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Sheba karolo ka nngwe bakeng sa ditokomane tse qaqileng le mehlala.
