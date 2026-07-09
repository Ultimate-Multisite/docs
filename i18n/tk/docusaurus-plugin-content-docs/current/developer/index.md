---
title: Işläp düzüji resminamalary
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# Dörediji resminamalary {#developer-documentation}

Bu gollanma Ultimate Multisite bilen integrasiýa etmek, ony giňeltmek ýa-da onuň üçin goşmaçalar döretmek üçin döredijilere zerur bolan ähli zady berýär. Ultimate Multisite WordPress Multisite toruny Website-as-a-Service (WaaS) platformasyna öwürýär.

## Näme elýeterli {#whats-available}

- **[REST API](./rest-api/overview)** — API açary arkaly tassyklama bilen ähli birlikler (müşderiler, saýtlar, agzalyklar, tölegler, önümler, domenler) üçin doly CRUD amallary
- **[Hooks salgylanmasy](./hooks/guide)** — ýaşaýyş döwri wakalary we sazlama üçin 200+ action hook we 280+ filter hook
- **[Integrasiýa gollanmasy](./integration-guide/)** — CRM integrasiýasy, analitika, ýörite şlýuzlar we webhooks üçin mysallar
- **[Kod mysallary](./code-examples/)** — dinamiki nyrhlandyrma, saýt üpjünçiligi, ýörite çäklendirmeler we köp şlýuzly işläp taýýarlama üçin ösen nagyşlar
- **[Goşmaça döretmek](./addon-development/getting-started)** — goşmaça pluginleri gurmak üçin gurluşly çarçuwa

## Talaplar {#requirements}

- WordPress Multisite gurnamasy
- PHP 7.4 ýa-da has ýokary
- Ultimate Multisite plugini işjeňleşdirilen

## Composer / Bedrock gurnamasy {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite)-de `ultimate-multisite/ultimate-multisite` hökmünde elýeterlidir. Bu [Bedrock](https://roots.io/bedrock/)-esasly WordPress sazlamalary we Composer bilen dolandyrylýan beýleki gurşawlar üçin maslahat berilýän gurnama usulydyr.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note Paketiň ady üýtgedildi (v2.6.1+)
Composer paketi v2.6.1-de `devstone/ultimate-multisite`-den `ultimate-multisite/ultimate-multisite`-e üýtgedildi. Eger `composer.json` köne üpjün ediji adyna salgylanýan bolsa, require ýazgysyny täzeläň we `composer update` işlediň.
:::

Gurnamadan soň, Network Admin-den plugini tor boýunça işjeňleşdiriň:

```bash
wp plugin activate ultimate-multisite --network
```

Ýa-da, plugini Bedrock-yň autoloader-i arkaly must-use plugin hökmünde ýükleýän bolsaňyz, işjeňleşdiriş goragyndan aýlanyp geçmek üçin `wp_ultimo_skip_network_active_check` filterini ulanyň:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## Çalt başlangyç {#quick-start}

### REST API-ni ulanyň {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Wakalar bilen baglanyşyň {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Goşmaça guruň {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Jikme-jik resminamalar we mysallar üçin her bölüme serediň.
