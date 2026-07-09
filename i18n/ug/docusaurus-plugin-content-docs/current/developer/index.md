---
title: ئاچقۇچىلار ھۆججەتنامىسى
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ئىجادكار ھۆججەتلىرى

بۇ قوللانما ئىجادكارلارغا Ultimate Multisite بىلەن بىرلەشتۈرۈش، كېڭەيتىش ياكى ئۇنىڭ ئۈچۈن قوشۇمچە plugin لارنى تەرەققىي قىلدۇرۇشقا كېرەكلىك ھەممە نەرسىنى تەمىنلەيدۇ. Ultimate Multisite بىر WordPress Multisite تورىنى توربېكەت-مۇلازىمەت (WaaS) سۇپىسىغا ئايلاندۇرىدۇ.

## نېمىلەر بار

- **[REST API](./rest-api/overview)** — API ئاچقۇچى ئارقىلىق دەلىللەش بىلەن بارلىق ئوبيېكتلار (خېرىدارلار، توربېكەتلەر، ئەزالىقلار، چىقىملار، مەھسۇلاتلار، دومېنلار) ئۈچۈن تولۇق CRUD مەشغۇلاتلىرى
- **[Hooks Reference](./hooks/guide)** — ھاياتلىق دەۋرى ۋەقەلىرى ۋە خاسلاشتۇرۇش ئۈچۈن 200+ action hook ۋە 280+ filter hook
- **[Integration Guide](./integration-guide/)** — CRM بىرلەشتۈرۈش، تەھلىل، خاس gateway لار ۋە webhook لار ئۈچۈن مىساللار
- **[Code Examples](./code-examples/)** — دىنامىك باھا بېكىتىش، توربېكەت تەمىنلەش، خاس چەكلىمىلەر ۋە كۆپ-gateway بىر تەرەپ قىلىش ئۈچۈن ئىلغار قېلىپلار
- **[Addon Development](./addon-development/getting-started)** — قوشۇمچە plugin لارنى قۇرۇش ئۈچۈن قۇرۇلمىلىق رامكا

## تەلەپلەر

- WordPress Multisite ئورنىتىلغان بولۇشى
- PHP 7.4 ياكى ئۇنىڭدىن يۇقىرى
- Ultimate Multisite plugin ئاكتىپلاشتۇرۇلغان بولۇشى

## Composer / Bedrock ئورنىتىش

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) دا `ultimate-multisite/ultimate-multisite` سۈپىتىدە بار. بۇ [Bedrock](https://roots.io/bedrock/) ئاساسىدىكى WordPress تەڭشەكلىرى ۋە باشقا Composer ئارقىلىق باشقۇرۇلىدىغان مۇھىتلار ئۈچۈن تەۋسىيە قىلىنغان ئورنىتىش ئۇسۇلىدۇر.

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note بوغچا نامى ئۆزگەرتىلدى (v2.6.1+)
Composer بوغچىسى v2.6.1 دە `devstone/ultimate-multisite` دىن `ultimate-multisite/ultimate-multisite` غا ئۆزگەرتىلدى. ئەگەر `composer.json` كونا تەمىنلىگۈچى نامىنى كۆرسەتسە، require كىرگۈسىنى يېڭىلاپ `composer update` نى ئىجرا قىلىڭ.
:::

ئورنىتىلغاندىن كېيىن، Network Admin دىن plugin نى تور بويىچە ئاكتىپلاشتۇرۇڭ:

```bash
wp plugin activate ultimate-multisite --network
```

ياكى، ئەگەر plugin نى Bedrock نىڭ autoloaderى ئارقىلىق must-use plugin سۈپىتىدە يۈكلەۋاتقان بولسىڭىز، ئاكتىپلاشتۇرۇش قوغدىغۇچىسىدىن ئايلىنىپ ئۆتۈش ئۈچۈن `wp_ultimo_skip_network_active_check` filter نى ئىشلىتىڭ:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## تېز باشلاش

### REST API نى ئىشلىتىش

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ۋەقەلەرگە Hook قىلىش

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Addon قۇرۇش

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

تەپسىلىي ھۆججەت ۋە مىساللار ئۈچۈن ھەر بىر بۆلەكنى كۆرۈڭ.
