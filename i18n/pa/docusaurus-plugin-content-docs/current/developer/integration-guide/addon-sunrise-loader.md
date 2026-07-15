---
title: ਐਡਨ ਸਨਰਾਈਜ਼ ਫਾਈਲ ਲੋਡਰ
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 add-ons ਲਈ ਇੱਕ sunrise extension loader ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ। ਇਹ loader add-ons ਅਤੇ custom MU-plugin integrations ਲਈ ਹੈ ਜਿਨ੍ਹਾਂ ਨੂੰ WordPress sunrise bootstrapping ਦੌਰਾਨ ਚੱਲਣ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ, ਅਤੇ ਇਸ ਲਈ `wp-content/sunrise.php` ਫਾਈਲ ਨੂੰ ਐਡਿਟ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ ਪੈਂਦੀ।

## ਇਹ ਕਦੋਂ ਵਰਤਣਾ ਹੈ {#when-to-use-it}

sunrise extension ਦੀ ਵਰਤੋਂ ਉਦੋਂ ਕਰੋ ਜਦੋਂ ਤੁਹਾਡੀ integration ਨੂੰ ਆਮ plugins ਲੋਡ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਚੱਲਣ ਦੀ ਲੋੜ ਹੋਵੇ, ਜਿਵੇਂ ਕਿ custom domain routing, host-specific request handling, ਜਾਂ early network bootstrap adjustments।

ਆਮ integrations ਲਈ, regular WordPress plugins, MU-plugins, ਅਤੇ documented Ultimate Multisite hooks ਨੂੰ ਤਰਜੀਹ ਦਿਓ। Sunrise code ਬਹੁਤ ਜਲਦੀ ਚੱਲਦਾ ਹੈ ਅਤੇ ਇਸਨੂੰ ਛੋਟਾ, ਸੁਰੱਖਿਅਤ (defensive), ਅਤੇ ਕਿਸੇ ਹੋਰ dependency 'ਤੇ ਨਿਰਭਰ ਨਾ ਰਹਿਣ ਵਾਲਾ (dependency-free) ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ।

## ਫਾਈਲ ਨਾਮਕਰਨ ਕਨਵੈਨਸ਼ਨ {#file-naming-convention}

ਇੱਕ PHP ਫਾਈਲ ਬਣਾਓ ਜਿਸਦਾ ਨਾਮ `sunrise.php` ਹੋਵੇ ਅਤੇ ਇਸਨੂੰ ਇੱਕ addon directory ਵਿੱਚ ਰੱਖੋ ਜਿਸਦਾ ਨਾਮ `ultimate-multisite-` ਨਾਲ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੋਵੇ:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

loader ਇਸ pattern ਲਈ plugins directory ਨੂੰ scan ਕਰਦਾ ਹੈ:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

ਮਿਲਣ ਵਾਲੀਆਂ ਫਾਈਲਾਂ addon path ਅਨੁਸਾਰ ਅਲファਬੈਟਿਕ (alphabetical) ਕ੍ਰਮ ਵਿੱਚ ਲੋਡ ਹੁੰਦੀਆਂ ਹਨ।

## ਫਾਈਲ ਕਿੱਥੇ ਰੱਖਣੀ ਹੈ {#where-to-place-the-file}

ਫਾਈਲ ਨੂੰ ਉਸ addon ਦੀ root directory ਵਿੱਚ ਰੱਖੋ ਜੋ sunrise behavior ਦਾ ਮਾਲਕ ਹੈ:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

scan `WP_CONTENT_DIR` ਦੇ ਸਬੰਧ ਵਿੱਚ ਹੁੰਦਾ ਹੈ, ਨਾ ਕਿ `WP_PLUGIN_DIR` ਦੇ ਮੌਜੂਦਾ ਮੁੱਲ ਦੇ ਸਬੰਧ ਵਿੱਚ। ਇਹ discovery ਨੂੰ stable ਰੱਖਦਾ ਹੈ ਜਦੋਂ multi-tenancy ਜਾਂ ਹੋਰ early bootstrap code sunrise ਦੌਰਾਨ plugin directory constants ਨੂੰ ਬਦਲਦੇ ਹਨ।

ਕਦੇ ਵੀ ਸਿੱਧੇ ਤੌਰ 'ਤੇ generated `wp-content/sunrise.php` ਫਾਈਲ ਨੂੰ ਐਡਿਟ ਨਾ ਕਰੋ। loader custom code ਨੂੰ sunrise behavior ਨੂੰ extend ਕਰਨ ਦਿੰਦਾ ਹੈ, ਬਿਨਾਂ ਉਸ core sunrise ਫਾਈਲ ਨੂੰ forking ਕੀਤੇ ਜੋ Ultimate Multisite install ਅਤੇ update ਕਰਦਾ ਹੈ।

## ਉਪਲਬਧ Hooks ਅਤੇ Filters {#hooks-and-filters-available}

Addon sunrise files Ultimate Multisite domain mapping ਲੋਡ ਹੋਣ ਤੋਂ ਬਾਅਦ ਅਤੇ WordPress ਦੁਆਰਾ `ms_loaded` fire ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਚੱਲਦੇ ਹਨ। ਇਸ ਪੜਾਅ 'ਤੇ ਇੱਕ sunrise file ਇਹ ਕਰ ਸਕਦੀ ਹੈ:

- `$current_site` ਅਤੇ `$current_blog` ਨੂੰ ਪੜ੍ਹ ਜਾਂ ਓਵਰਰਾਈਡ ਕਰ ਸਕਦੀ ਹੈ;
- database configuration ਲੋਡ ਹੋਣ ਤੋਂ ਬਾਅਦ `$wpdb` ਤੱਕ ਪਹੁੰਚ ਕਰ ਸਕਦੀ ਹੈ;
- ਲੋੜ ਪੈਣ 'ਤੇ sunrise-time constants, ਜਿਵੇਂ ਕਿ `BLOG_ID_CURRENT_SITE` ਨੂੰ define ਕਰ ਸਕਦੀ ਹੈ;
- Ultimate Multisite sunrise helper state ਨੂੰ ਪੜ੍ਹ ਸਕਦੀ ਹੈ, ਜਿਸ ਵਿੱਚ multi-tenancy integrations ਦੁਆਰਾ ਵਰਤਿਆ ਗਿਆ routing state ਸ਼ਾਮਲ ਹੈ।

Ultimate Multisite ਆਪਣੇ sunrise loader ਦੇ ਖਤਮ ਹੋਣ ਤੋਂ ਬਾਅਦ `wu_sunrise_loaded` fire ਕਰਦਾ ਹੈ। ਉਸ action ਦੀ ਵਰਤੋਂ ਉਸ code ਲਈ ਕਰੋ ਜੋ sunrise bootstrap ਪੂਰਾ ਹੋਣ ਤੋਂ ਬਾਅਦ ਚੱਲਣਾ ਚਾਹੀਦਾ ਹੈ ਪਰ ਫਿਰ ਵੀ sunrise lifecycle ਨਾਲ ਸਬੰਧਤ ਹੈ।

ਸਿਰਫ਼ ਉਹ functions call ਕਰੋ ਜੋ sunrise phase ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਲੋਡ ਹੋ ਚੁੱਕੇ ਹਨ। database-heavy work, template rendering, HTTP requests, ਅਤੇ code ਤੋਂ ਬਚੋ ਜੋ ਇਹ ਮੰਨਦਾ ਹੈ ਕਿ normal plugin load order ਪੂਰਾ ਹੋ ਚੁੱਕਾ ਹੈ।

## ਘੱਟੋ-ਘੱਟ ਉਦਾਹਰਣ {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

ਫਾਈਲ deploy ਕਰਨ ਤੋਂ ਬਾਅਦ, ਦੋਵੇਂ paths (mapped domain ਅਤੇ unmapped main-site URL) ਸਹੀ ਢੰਗ ਨਾਲ bootstrap ਹੋਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ ਇੱਕ mapped domain ਅਤੇ ਇੱਕ unmapped main-site URL ਲੋਡ ਕਰੋ।
