---
title: اضافي سج اڀرڻ فائل لوڊر
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 add-ons ۽ custom MU-plugin انضمامن لاءِ sunrise extension loader شامل ڪري ٿو، جن کي ٺاهيل `wp-content/sunrise.php` فائل ۾ تبديلي ڪرڻ کان سواءِ WordPress sunrise bootstrapping دوران هلڻ جي ضرورت هوندي آهي.

## اهو ڪڏهن استعمال ڪجي

sunrise extension تڏهن استعمال ڪريو جڏهن توهان جي انضمام کي باقاعده plugins لوڊ ٿيڻ کان اڳ هلڻ لازمي هجي، جهڙوڪ custom domain routing، ميزبان-مخصوص درخواست سنڀال، يا شروعاتي network bootstrap ترتيبون.

عام انضمامن لاءِ، باقاعده WordPress plugins، MU-plugins، ۽ دستاويز ڪيل Ultimate Multisite hooks کي ترجيح ڏيو. Sunrise code تمام شروعاتي مرحلي ۾ هلندو آهي ۽ ننڍو، احتياطي، ۽ dependency-free رهڻ گهرجي.

## فائل جي نالي جو قاعدو

addon ڊائريڪٽري ۾ `sunrise.php` نالي PHP فائل ٺاهيو جنهن جو نالو `ultimate-multisite-` سان شروع ٿئي:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

loader هن pattern لاءِ plugins ڊائريڪٽري کي scan ڪري ٿو:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

ملندڙ فائلون addon path موجب الفابيٽڪ ترتيب ۾ لوڊ ٿين ٿيون.

## فائل ڪٿي رکجي

فائل کي ان addon جي root ڊائريڪٽري ۾ رکو جيڪو sunrise رويي جو مالڪ آهي:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

scan `WP_CONTENT_DIR` جي نسبت سان resolve ٿئي ٿو، `WP_PLUGIN_DIR` جي موجوده قيمت سان نه. اهو discovery کي مستحڪم رکي ٿو جڏهن multi-tenancy يا ٻيو شروعاتي bootstrap code sunrise دوران plugin directory constants کي تبديل ڪري ٿو.

ٺاهيل `wp-content/sunrise.php` فائل کي سڌو edit نه ڪريو. loader custom code کي sunrise رويي کي وڌائڻ ڏئي ٿو، بغير core sunrise فائل کي fork ڪرڻ جي، جيڪا Ultimate Multisite install ۽ update ڪري ٿو.

## موجود hooks ۽ filters

Addon sunrise فائلون Ultimate Multisite domain mapping لوڊ ٿيڻ کان پوءِ ۽ WordPress پاران `ms_loaded` fire ڪرڻ کان اڳ هلن ٿيون. هن وقت sunrise فائل ڪري سگهي ٿي:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- ضرورت هجي ته sunrise-time constants جهڙوڪ `BLOG_ID_CURRENT_SITE` define ڪري؛
- Ultimate Multisite sunrise helper state پڙهي، جنهن ۾ multi-tenancy انضمامن پاران استعمال ٿيندڙ routing state شامل آهي.

Ultimate Multisite پنهنجي sunrise loader ختم ٿيڻ کان پوءِ `wu_sunrise_loaded` fire ڪري ٿو. ان code لاءِ هي action استعمال ڪريو جيڪو sunrise bootstrap مڪمل ٿيڻ کان پوءِ هلڻ گهرجي پر اڃا به sunrise lifecycle سان واسطو رکي ٿو.

صرف اهي functions call ڪريو جيڪي sunrise phase ۾ اڳ ۾ ئي loaded آهن. database-heavy ڪم، template rendering، HTTP requests، ۽ اهڙي code کان پاسو ڪريو جيڪو فرض ڪري ٿو ته عام plugin load order مڪمل ٿي چڪو آهي.

## گھٽ ۾ گھٽ مثال

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

فائل deploy ڪرڻ کان پوءِ، mapped domain ۽ unmapped main-site URL لوڊ ڪريو ته جيئن تصديق ٿي سگهي ته ٻئي paths اڃا صحيح طرح bootstrap ٿين ٿا.
