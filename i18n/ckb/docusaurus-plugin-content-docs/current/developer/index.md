---
title: دۆکومێنتە دۆزەرەوەکان
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Documentation për Zhvillues {#developer-documentation}

Ky udhëzues i jaben zhvilluesit gjithçka që duhet për integrim, zgjerim ose zhvillimin e addon-ve për Ultimate Multisite. Ultimate Multisite shndërron një rrjet WordPress Multisite në një platformë Website-as-a-Service (WaaS).

## Çfarë është Përshtatshme {#whats-available}

- **[REST API](./rest-api/overview)** — Operacione të plotë CRUD për të gjitha entitet (klientët, sitet, anëtarësit, pagesat, shërbimet, domenët) me autentikim me API key
- **[Referenca e Hooks-eve](./hooks/guide)** — 200+ action hooks dhe 280+ filter hooks për ngjarje të ciklit dhe personalizim
- **[Udhëzues Integrimi](./integration-guide/)** — Shembuj për integrimin me CRM, analitikën, gateway-t e ndryshëm dhe webhooks
- **[Shembuj Kodish](./code-examples/)** — Mode të avancuara për çmimet dinamike, provizimin e sitit, kufizimet personalizuara dhe trajtimin me shumë gateway

## Kërkesat {#requirements}

- Instalimi i WordPress Multisite
- PHP 7.4 ose më i lartë
- Plugin-i Ultimate Multisite aktivizuar

## Instalimi me Composer / Bedrock {#composer--bedrock-installation}

Ultimate Multisite është i disponueshëm në [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) si `ultimate-multisite/ultimate-multisite`. Ky është mënyra e rekomanduar e instalimit për mbledhje WordPress të bazuar në Bedrock dhe mjedise të tjera të menaxhuara nga Composer.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note پکیجەکە ری ناما کراوە (v2.6.1+)
پکیج Composer لە v2.6.1 تێدا ناوی گۆڕدراوە لە `devstone/ultimate-multisite` بۆ `ultimate-multisite/ultimate-multisite`. ئەگەر `composer.json` یەکەت ناوی کۆنەکە ئاماژە دابێت، پێویستە وردبینییەکانی require به‌روزرسیک بکەیت و `composer update` ڕانی.
:::

پاش دامەزراندنی پڕۆگرامەکە، لە Network Admin دا پلەگینی بە ئۆتۆماتیک چالاک بکە:

```bash
wp plugin activate ultimate-multisite --network
```

یان، ئەگەر پلەگینەکە وەک پلەگینی پێویست بۆ کارکردن (must-use) لە ڕێگەی autoloaderی Bedrock دابگرێت، لە filter ی `wp_ultimo_skip_network_active_check` بەکاری بهێنە بۆ پاشکەوتنی guards:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## دەستپێکی خێرا (Quick Start) {#quick-start}

### بەکارهێنانی REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### پەیوەندی بە ڕوودۆکانەوە (Hook into Events) {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // وەڵامدانەوەی نوێبوونەوەی کڕیارەکان
});
```

### دروستکردنی Addon {#build-an-addon}

```bash
# گۆڕینی شێوازی scaffold بۆ addon لە templateەکەدا
bash create-addon.sh
```

بۆ زیاتر وردەکاری و نموونەکان، بەشەکانی دیکە بخوێنەوە.
