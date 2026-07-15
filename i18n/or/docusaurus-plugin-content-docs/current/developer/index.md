---
title: ବିକାଶକାରୀ ଦଲିଲପତ୍ର
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ଡିଭେଲପର ଡକ୍ୟୁମେଣ୍ଟେସନ

ଏହି ଗାଇଡ୍ ଡିଭେଲପରମାନଙ୍କୁ Ultimate Multisite ସହିତ ଏକତ୍ର କରିବା, ବିସ୍ତାର କରିବା, କିମ୍ବା ଏହା ପାଇଁ ଆଡଅନ ତିଆରି କରିବାରେ ଆବଶ୍ୟକ ସମସ୍ତ କଥା ଦିଏ। Ultimate Multisite ଏକ WordPress Multisite ନେଟୱର୍କକୁ Website-as-a-Service (WaaS) ପ୍ଲାଟଫର୍ମରେ ପରିଣତ କରେ।

## କଣ ଉପଲବ୍ଧ {#whats-available}

- **[REST API](./rest-api/overview)** — API key ପ୍ରମାଣୀକରଣ ସହ ସମସ୍ତ ଏଣ୍ଟିଟି (ଗ୍ରାହକ, ସାଇଟ, ସଦସ୍ୟତା, ପେମେଣ୍ଟ, ଉତ୍ପାଦ, ଡୋମେନ) ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ CRUD କାର୍ଯ୍ୟ
- **[Hooks ସନ୍ଦର୍ଭ](./hooks/guide)** — ଲାଇଫସାଇକଲ ଘଟଣା ଓ କଷ୍ଟମାଇଜେସନ ପାଇଁ ୨୦୦ରୁ ଅଧିକ ଆକ୍ସନ hooks ଏବଂ ୨୮୦ରୁ ଅଧିକ ଫିଲ୍ଟର hooks
- **[ଏକତ୍ରୀକରଣ ଗାଇଡ୍](./integration-guide/)** — CRM ଏକତ୍ରୀକରଣ, ଆନାଲିଟିକ୍ସ, କଷ୍ଟମ ଗେଟୱେ, ଏବଂ webhooks ପାଇଁ ଉଦାହରଣ
- **[କୋଡ୍ ଉଦାହରଣ](./code-examples/)** — ଡାଇନାମିକ ପ୍ରାଇସିଂ, ସାଇଟ ପ୍ରୋଭିଜନିଂ, କଷ୍ଟମ ସୀମାବଦ୍ଧତା, ଏବଂ ମଲ୍ଟି-ଗେଟୱେ ପ୍ରୋସେସିଂ ପାଇଁ ଉନ୍ନତ ପ୍ୟାଟର୍ନ
- **[ଆଡଅନ ବିକାଶ](./addon-development/getting-started)** — ଆଡଅନ ପ୍ଲଗଇନ ତିଆରି କରିବା ପାଇଁ ଗଠିତ ଫ୍ରେମୱର୍କ

## ଆବଶ୍ୟକତା {#requirements}

- WordPress Multisite ଇନ୍ଷ୍ଟଲେସନ
- PHP 7.4 କିମ୍ବା ତାଠାରୁ ଅଧିକ
- Ultimate Multisite ପ୍ଲଗଇନ ସକ୍ରିୟ

## Composer / Bedrock ଇନ୍ଷ୍ଟଲେସନ {#composer--bedrock-installation}

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) ରେ `ultimate-multisite/ultimate-multisite` ଭାବେ ଉପଲବ୍ଧ। [Bedrock](https://roots.io/bedrock/) ଆଧାରିତ WordPress ସେଟଅପ ଏବଂ ଅନ୍ୟ Composer-ପରିଚାଳିତ ପରିବେଶ ପାଇଁ ଏହା ସୁପାରିଶିତ ଇନ୍ଷ୍ଟଲେସନ ପଦ୍ଧତି।

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note ପ୍ୟାକେଜର ନାମ ବଦଳାଗଲା (v2.6.1+)
Composer ପ୍ୟାକେଜକୁ v2.6.1 ରେ `devstone/ultimate-multisite` ରୁ `ultimate-multisite/ultimate-multisite` କୁ ନାମ ବଦଳାଯାଇଥିଲା। ଯଦି ଆପଣଙ୍କ `composer.json` ପୁରୁଣା vendor ନାମକୁ ସନ୍ଦର୍ଭ କରେ, require ଏଣ୍ଟ୍ରି ଅଦ୍ୟତନ କରନ୍ତୁ ଏବଂ `composer update` ଚଳାନ୍ତୁ।
:::

ଇନ୍ଷ୍ଟଲେସନ ପରେ, Network Admin ରୁ ପ୍ଲଗଇନକୁ ନେଟୱର୍କ-ସକ୍ରିୟ କରନ୍ତୁ:

```bash
wp plugin activate ultimate-multisite --network
```

କିମ୍ବା, ଯଦି ଆପଣ Bedrock ର autoloader ମାଧ୍ୟମରେ ପ୍ଲଗଇନକୁ must-use ପ୍ଲଗଇନ ଭାବେ ଲୋଡ୍ କରୁଛନ୍ତି, ସକ୍ରିୟକରଣ ଗାର୍ଡକୁ ବାଇପାସ କରିବା ପାଇଁ `wp_ultimo_skip_network_active_check` ଫିଲ୍ଟର ବ୍ୟବହାର କରନ୍ତୁ:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## ଶୀଘ୍ର ଆରମ୍ଭ {#quick-start}

### REST API ବ୍ୟବହାର କରନ୍ତୁ {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ଘଟଣାଗୁଡ଼ିକରେ Hook କରନ୍ତୁ {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### ଏକ ଆଡଅନ ତିଆରି କରନ୍ତୁ {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

ବିସ୍ତୃତ ଡକ୍ୟୁମେଣ୍ଟେସନ ଓ ଉଦାହରଣ ପାଇଁ ପ୍ରତ୍ୟେକ ଅଂଶ ଦେଖନ୍ତୁ।
