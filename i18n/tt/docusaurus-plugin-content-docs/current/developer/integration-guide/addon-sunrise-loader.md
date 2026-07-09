---
title: Sunrise файл йөкләгеч өстәмә
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise файл йөкләгече {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 өстәмә модульләр һәм махсус MU-plugin интеграцияләре өчен sunrise киңәйтү йөкләгечен өсти; алар WordPress sunrise башлангыч йөкләнеше вакытында, ясалган `wp-content/sunrise.php` файлын үзгәртмичә, эшләргә тиеш.

## Кайчан кулланырга {#when-to-use-it}

Интеграциягез гадәти плагиннар йөкләнгәнче эшләргә тиеш булганда, мәсәлән, махсус домен маршрутизациясе, хостка хас сорау эшкәртүе яки иртә челтәр башлангыч йөкләнеше көйләүләре өчен, sunrise киңәйтүен кулланыгыз.

Гадәти интеграцияләр өчен гадәти WordPress плагиннарын, MU-плагиннарны һәм документлаштырылган Ultimate Multisite hook-ларын өстен күрегез. Sunrise коды бик иртә эшли һәм кечкенә, сак һәм бәйлелексез булып калырга тиеш.

## Файл исемен бирү кагыйдәсе {#file-naming-convention}

Исеме `ultimate-multisite-` белән башланган өстәмә модуль директориясендә `sunrise.php` исемле PHP файлы булдырыгыз:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Йөкләгеч плагиннар директориясен шушы үрнәк буенча сканерлый:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Туры килгән файллар өстәмә модуль юлы буенча әлифба тәртибендә йөкләнә.

## Файлны кая урнаштырырга {#where-to-place-the-file}

Файлны sunrise тотышына ия булган өстәмә модульнең тамыр директориясенә урнаштырыгыз:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Сканерлау хәзерге `WP_PLUGIN_DIR` кыйммәтенә түгел, ә `WP_CONTENT_DIR` белән чагыштырып хәл ителә. Бу multi-tenancy яки башка иртә башлангыч йөкләнеш коды sunrise вакытында плагин директориясе константаларын үзгәрткәндә табуны тотрыклы саклый.

Ясалган `wp-content/sunrise.php` файлын турыдан-туры үзгәртмәгез. Йөкләгеч махсус кодка Ultimate Multisite урнаштыра һәм яңарта торган төп sunrise файлын аерым тармакка чыгармыйча, sunrise тотышын киңәйтергә мөмкинлек бирә.

## Мөмкин булган hook-лар һәм filter-лар {#hooks-and-filters-available}

Өстәмә модуль sunrise файллары Ultimate Multisite домен туры китерүе йөкләнгәннән соң һәм WordPress `ms_loaded` эшләтеп җибәргәнче эшли. Бу вакытта sunrise файлы түбәндәгеләрне эшли ала:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- кирәк булганда `BLOG_ID_CURRENT_SITE` кебек sunrise-вакыт константаларын билгели ала;
- Ultimate Multisite sunrise ярдәмче халәтен, шул исәптән multi-tenancy интеграцияләре кулланган маршрутизация халәтен укый ала.

Ultimate Multisite үзенең sunrise йөкләгече тәмамланганнан соң `wu_sunrise_loaded` эшләтеп җибәрә. Бу action-ны sunrise башлангыч йөкләнеше тәмамланганнан соң эшләргә тиеш, әмма барыбер sunrise яшәү циклына караган код өчен кулланыгыз.

Sunrise фазасында инде йөкләнгән функцияләрне генә чакырыгыз. Мәгълүмат базасына авыр эштән, шаблон күрсәтүдән, HTTP сорауларыннан һәм гадәти плагин йөкләнү тәртибе тәмамланган дип фаразлаган кодтан сакланыгыз.

## Минималь мисал {#minimal-example}

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

Файлны урнаштырганнан соң, ике юлның да әле дә дөрес башлангыч йөкләнүен раслау өчен, туры китерелгән доменны һәм туры китерелмәгән төп сайт URL-ын йөкләгез.
