---
title: زیادکراوی بارکەری پەڕگەی Sunrise
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# بارکەری پەڕگەی Sunriseی Addon

Ultimate Multisite 2.8.0 بارکەرێکی پاشکۆی sunrise زیاد دەکات بۆ add-on و یەکخستنە تایبەتەکانی MU-plugin کە پێویستیانە لە کاتی دەستپێکردنی sunriseی WordPressدا کار بکەن، بەبێ دەستکاریکردنی پەڕگەی دروستکراوی `wp-content/sunrise.php`.

## کەی بەکاری بهێنیت {#when-to-use-it}

پاشکۆی sunrise بەکاربهێنە کاتێک یەکخستنەکەت پێویستە پێش بارکردنی pluginە ئاساییەکان کار بکات، وەک ڕێڕەوکردنی دۆمەینی تایبەت، مامەڵەکردنی داواکاریی تایبەت بە خانەخوێ، یان ڕێکخستنە سەرەتاییەکانی bootstrapی تۆڕ.

بۆ یەکخستنە ئاساییەکان، باشترە pluginە ئاساییەکانی WordPress، MU-pluginەکان، و hookە بەڵگەکراوەکانی Ultimate Multisite بەکاربهێنیت. کۆدی Sunrise زۆر زوو کار دەکات و پێویستە بچووک، خۆپارێز، و بێ پشتبەستن بە شتانی دیکە بمێنێتەوە.

## ڕێسای ناونانی پەڕگە {#file-naming-convention}

پەڕگەیەکی PHP بە ناوی `sunrise.php` لە ناو بوخچەی addonێکدا دروست بکە کە ناوەکەی بە `ultimate-multisite-` دەست پێ بکات:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

بارکەرەکە بوخچەی pluginەکان بۆ ئەم شێوازە دەپشکنێت:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

پەڕگە هاوتاکان بە ڕێککەوتنی ئەلفوبێیی بەپێی ڕێڕەوی addon بار دەکرێن.

## پەڕگەکە لە کوێ دابنێیت {#where-to-place-the-file}

پەڕگەکە لە بوخچەی ڕەگی ئەو addonە دابنێ کە هەڵسوکەوتی sunriseـەکەی موڵکە:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

پشکنینەکە بە پەیوەندی بە `WP_CONTENT_DIR` چارەسەر دەکرێت، نە بە نرخی ئێستای `WP_PLUGIN_DIR`. ئەمە دۆزینەوەکە جێگیر دەهێڵێتەوە کاتێک multi-tenancy یان کۆدی دیکەی bootstrapی سەرەتایی لە کاتی sunriseدا نەگۆڕەکانی بوخچەی plugin دەگۆڕن.

پەڕگەی دروستکراوی `wp-content/sunrise.php` ڕاستەوخۆ دەستکاری مەکە. بارکەرەکە ڕێگە دەدات کۆدی تایبەت هەڵسوکەوتی sunrise فراوان بکات، بەبێ forkکردنی پەڕگەی sunriseی core کە Ultimate Multisite دایدەمەزرێنێت و نوێی دەکاتەوە.

## Hook و filterە بەردەستەکان {#hooks-and-filters-available}

پەڕگەکانی sunriseی Addon دوای باربوونی domain mappingی Ultimate Multisite و پێش ئەوەی WordPress ـ`ms_loaded` جێبەجێ بکات کار دەکەن. لەم خاڵەدا پەڕگەی sunrise دەتوانێت:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- نەگۆڕەکانی کاتی sunrise وەک `BLOG_ID_CURRENT_SITE` پێناسە بکات کاتێک پێویست بوو؛
- دۆخی یارمەتیدەری sunriseی Ultimate Multisite بخوێنێتەوە، لەوانەش دۆخی ڕێڕەوکردن کە لەلایەن یەکخستنەکانی multi-tenancy بەکار دەهێنرێت.

Ultimate Multisite دوای تەواوبوونی بارکەری sunrise ـەکەی `wu_sunrise_loaded` جێبەجێ دەکات. ئەو actionە بەکاربهێنە بۆ کۆدێک کە پێویستە دوای تەواوبوونی bootstrapی sunrise کار بکات، بەڵام هێشتا پەیوەندیدارە بە خولی ژیانی sunrise.

تەنها ئەو functionانە بانگ بکە کە پێشتر لە قۆناغی sunriseدا بار کراون. خۆت بپارێزە لە کاری قورسی بنکەدراوە، نیشاندانی template، داواکاریی HTTP، و کۆدێک کە وا دادەنێت ڕێککەوتنی بارکردنی pluginی ئاسایی تەواو بووە.

## نموونەی کەمترین {#minimal-example}

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

دوای بڵاوکردنەوەی پەڕگەکە، دۆمەینێکی نەخشەکراو و URLێکی ماڵپەڕی سەرەکیی نەخشەنەکراو بار بکە بۆ دڵنیابوون لەوەی هەردوو ڕێڕەوەکە هێشتا بە دروستی bootstrap دەبن.
