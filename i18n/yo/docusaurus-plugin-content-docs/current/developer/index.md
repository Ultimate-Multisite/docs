---
title: Ìwé ìtọ́nisọ́nà fún Olùdàgbàsókè
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Ìwé Ìtọ́nisọ́nà Olùdàgbàsókè

Ìtọ́nisọ́nà yìí fún àwọn olùdàgbàsókè ní gbogbo ohun tí wọ́n nílò láti ṣepọ̀ mọ́, faagun, tàbí dá àwọn àfikún sílẹ̀ fún Ultimate Multisite. Ultimate Multisite ń yí nẹ́tíwọ́ọ̀kì WordPress Multisite padà sí pèpéle Ìkànnì-ayelujara-gẹ́gẹ́-bi-Iṣẹ́ (WaaS).

## Ohun Tí Ó Wà {#whats-available}

- **[REST API](./rest-api/overview)** — Àwọn iṣẹ́ CRUD pípé fún gbogbo àwọn ẹ̀dá (àwọn oníbàárà, àwọn ìkànnì, àwọn ọmọ ẹgbẹ́, àwọn ìsanwó, àwọn ọjà, àwọn domain) pẹ̀lú ìjẹ́rìí API key
- **[Ìtọ́kasí Hooks](./hooks/guide)** — 200+ action hooks àti 280+ filter hooks fún àwọn ìṣẹ̀lẹ̀ lifecycle àti ìṣàtúnṣe
- **[Ìtọ́nisọ́nà Ìṣepọ̀](./integration-guide/)** — Àwọn àpẹẹrẹ fún ìṣepọ̀ CRM, ìtúpalẹ̀, àwọn gateway àṣà, àti webhooks
- **[Àwọn Àpẹẹrẹ Kóòdù](./code-examples/)** — Àwọn àpẹẹrẹ iṣẹ́ tó ti ni ilọsíwájú fún ìdíyelé aláyípadà, pípèsè ìkànnì, àwọn ìdíwọ̀n àṣà, àti ìṣàkóso multi-gateway
- **[Ìdàgbàsókè Àfikún](./addon-development/getting-started)** — Framework tó ní ètò fún kíkọ àwọn plugin àfikún

## Àwọn Ohun Tí A Nílò {#requirements}

- Fífi WordPress Multisite sílẹ̀
- PHP 7.4 tàbí èyí tó ga jù bẹ́ẹ̀ lọ
- Plugin Ultimate Multisite ti ṣiṣẹ́

## Composer / Fífi Bedrock Sílẹ̀ {#composer--bedrock-installation}

Ultimate Multisite wà lórí [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) gẹ́gẹ́ bí `ultimate-multisite/ultimate-multisite`. Èyí ni ọ̀nà fífi sílẹ̀ tí a dábàá fún àwọn ètò WordPress tó dá lórí [Bedrock](https://roots.io/bedrock/) àti àwọn àyíká mìíràn tí Composer ń ṣàkóso.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Renamed package (v2.6.1+)
A tún orúkọ package Composer náà ṣe láti `devstone/ultimate-multisite` sí `ultimate-multisite/ultimate-multisite` nínú v2.6.1. Bí `composer.json` rẹ bá tọ́ka sí orúkọ vendor àtijọ́, ṣe àfikún require entry náà, kí o sì ṣiṣẹ́ `composer update`.
:::

Lẹ́yìn fífi sílẹ̀, network-activate plugin náà láti Network Admin:

```bash
wp plugin activate ultimate-multisite --network
```

Tàbí, bí o bá ń rù plugin náà gẹ́gẹ́ bí must-use plugin nípasẹ̀ autoloader ti Bedrock, lo filter `wp_ultimo_skip_network_active_check` láti kọjá activation guard:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Ìbẹ̀rẹ̀ Kíákíá {#quick-start}

### Lo REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### So Mọ́ Àwọn Ìṣẹ̀lẹ̀ {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Kọ Àfikún Kan {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Wo apá kọ̀ọ̀kan fún ìwé ìtọ́nisọ́nà àti àwọn àpẹẹrẹ tó kúnrẹ́rẹ́.
