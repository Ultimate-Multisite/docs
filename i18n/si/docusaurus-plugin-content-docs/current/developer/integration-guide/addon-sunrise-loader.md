---
title: අතිරේක Sunrise ගොනු පූරකය
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise ගොනු ලෝඩරය {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 මඟින්, නිර්මාණය කළ `wp-content/sunrise.php` ගොනුව සංස්කරණය නොකර WordPress sunrise ආරම්භකරණයේදී ධාවනය විය යුතු add-on සහ අභිරුචි MU-plugin ඒකාබද්ධ කිරීම් සඳහා sunrise දිගු ලෝඩරයක් එක් කරයි.

## එය භාවිතා කළ යුතු අවස්ථා {#when-to-use-it}

ඔබේ ඒකාබද්ධ කිරීම සාමාන්‍ය plugin පූරණය වීමට පෙර ධාවනය විය යුතු නම්, උදාහරණයක් ලෙස අභිරුචි domain routing, host-විශේෂිත request හැසිරවීම, හෝ මුල් network bootstrap සැකසුම්, sunrise දිගුවක් භාවිතා කරන්න.

සාමාන්‍ය ඒකාබද්ධ කිරීම් සඳහා, සාමාන්‍ය WordPress plugin, MU-plugin, සහ ලේඛනගත Ultimate Multisite hooks භාවිතා කිරීම වඩා හොඳය. Sunrise code ඉතා මුලින් ධාවනය වන බැවින් එය කුඩා, ආරක්ෂිත, සහ dependency-free ලෙස තබාගත යුතුය.

## ගොනු නම්කිරීමේ සම්මතය {#file-naming-convention}

`ultimate-multisite-` සමඟ ආරම්භ වන නමක් ඇති addon directory එකක `sunrise.php` නම් PHP ගොනුවක් සාදන්න:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ලෝඩරය plugins directory තුළ මෙම pattern එක සඳහා scan කරයි:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

ගැළපෙන ගොනු addon path අනුව අක්ෂරමාලා පිළිවෙළට පූරණය වේ.

## ගොනුව තැබිය යුතු ස්ථානය {#where-to-place-the-file}

sunrise හැසිරීම හිමි addon එකේ root directory තුළ ගොනුව තබන්න:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

scan එක `WP_PLUGIN_DIR` හි වත්මන් අගයට නොව, `WP_CONTENT_DIR` ට සාපේක්ෂව විසඳේ. මෙය multi-tenancy හෝ වෙනත් මුල් bootstrap code sunrise අතරතුර plugin directory constants වෙනස් කරන විට discovery ස්ථාවරව තබයි.

නිර්මාණය කළ `wp-content/sunrise.php` ගොනුව සෘජුව සංස්කරණය නොකරන්න. Ultimate Multisite ස්ථාපනය කර යාවත්කාලීන කරන core sunrise file එක fork නොකර, custom code මඟින් sunrise හැසිරීම පුළුල් කිරීමට ලෝඩරය ඉඩ දෙයි.

## ලබා ගත හැකි hooks සහ filters {#hooks-and-filters-available}

Addon sunrise ගොනු Ultimate Multisite domain mapping පූරණය වූ පසු සහ WordPress `ms_loaded` ධාවනය කිරීමට පෙර ධාවනය වේ. මෙම අවස්ථාවේ sunrise file එකකට කළ හැක්කේ:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- අවශ්‍ය විට `BLOG_ID_CURRENT_SITE` වැනි sunrise-time constants නිර්වචනය කිරීම;
- multi-tenancy integrations භාවිතා කරන routing state ඇතුළුව, Ultimate Multisite sunrise helper state කියවීම.

Ultimate Multisite එහි sunrise loader අවසන් වූ පසු `wu_sunrise_loaded` ධාවනය කරයි. sunrise bootstrap සම්පූර්ණ වූ පසුව ධාවනය විය යුතු නමුත් තවමත් sunrise lifecycle එකට අයත් code සඳහා එම action එක භාවිතා කරන්න.

sunrise phase එකේදී දැනටමත් පූරණය වී ඇති functions පමණක් අමතන්න. database-heavy වැඩ, template rendering, HTTP requests, සහ සාමාන්‍ය plugin load order සම්පූර්ණ වී ඇතැයි උපකල්පනය කරන code වළකින්න.

## අවම උදාහරණය {#minimal-example}

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

ගොනුව deploy කිරීමෙන් පසු, paths දෙකම තවමත් නිවැරදිව bootstrap වන බව තහවුරු කිරීමට mapped domain එකක් සහ unmapped main-site URL එකක් පූරණය කරන්න.
