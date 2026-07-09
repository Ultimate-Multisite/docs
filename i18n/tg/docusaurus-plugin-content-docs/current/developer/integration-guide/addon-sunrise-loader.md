---
title: Боркунандаи файли Sunrise барои илова
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Боркунандаи файли Sunrise-и addon {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 барои addon-ҳо ва ҳамгироиҳои фармоишии MU-plugin, ки бояд ҳангоми bootstrap-и sunrise-и WordPress бидуни таҳрири файли тавлидшудаи `wp-content/sunrise.php` иҷро шаванд, боркунандаи васеъшавии sunrise илова мекунад.

## Кай онро истифода бурдан лозим аст {#when-to-use-it}

Вақте аз васеъшавии sunrise истифода баред, ки ҳамгироии шумо бояд пеш аз бор шудани plugin-ҳои одӣ иҷро шавад, масалан масирдиҳии домени фармоишӣ, коркарди дархостҳои вобаста ба мизбон, ё танзимҳои барвақти bootstrap-и шабака.

Барои ҳамгироиҳои муқаррарӣ, WordPress plugin-ҳои одӣ, MU-plugin-ҳо ва hook-ҳои ҳуҷҷатгузоришудаи Ultimate Multisite-ро авлотар донед. Коди sunrise хеле барвақт иҷро мешавад ва бояд хурд, муҳофизакорона ва бе вобастагӣ боқӣ монад.

## Қоидаи номгузории файл {#file-naming-convention}

Дар директорияи addon, ки номаш бо `ultimate-multisite-` оғоз мешавад, файли PHP бо номи `sunrise.php` эҷод кунед:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Боркунанда директорияи plugin-ҳоро барои ин намуна месанҷад:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Файлҳои мувофиқ аз рӯи тартиби алифбоии роҳи addon бор карда мешаванд.

## Файлро дар куҷо ҷойгир кардан лозим аст {#where-to-place-the-file}

Файлро дар директорияи решавии addon-е ҷойгир кунед, ки рафтори sunrise ба он тааллуқ дорад:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Скан нисбат ба `WP_CONTENT_DIR` муайян карда мешавад, на нисбат ба арзиши ҷории `WP_PLUGIN_DIR`. Ин кашфро вақте устувор нигоҳ медорад, ки multi-tenancy ё коди дигари bootstrap-и барвақт ҳангоми sunrise константаҳои директорияи plugin-ро тағйир медиҳад.

Файли тавлидшудаи `wp-content/sunrise.php`-ро мустақиман таҳрир накунед. Боркунанда имкон медиҳад, ки коди фармоишӣ рафтори sunrise-ро бидуни fork кардани файли асосии sunrise, ки Ultimate Multisite насб ва навсозӣ мекунад, васеъ намояд.

## Hook-ҳо ва filter-ҳои дастрас {#hooks-and-filters-available}

Файлҳои sunrise-и addon пас аз бор шудани mapping-и домени Ultimate Multisite ва пеш аз он ки WordPress `ms_loaded`-ро иҷро кунад, кор мекунанд. Дар ин нуқта файли sunrise метавонад:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- ҳангоми зарурат константаҳои вақти sunrise, монанди `BLOG_ID_CURRENT_SITE`, муайян кунад;
- ҳолати ёридиҳандаи sunrise-и Ultimate Multisite-ро бихонад, аз ҷумла ҳолати масирдиҳӣ, ки аз ҷониби ҳамгироиҳои multi-tenancy истифода мешавад.

Ultimate Multisite пас аз анҷом ёфтани боркунандаи sunrise-и худ `wu_sunrise_loaded`-ро иҷро мекунад. Аз он action барои коде истифода баред, ки бояд пас аз анҷоми bootstrap-и sunrise иҷро шавад, аммо ҳанӯз ба давраи ҳаётии sunrise тааллуқ дорад.

Танҳо функсияҳоеро фаро хонед, ки аллакай дар марҳилаи sunrise бор шудаанд. Аз корҳои вазнини пойгоҳи додаҳо, render-и шаблон, дархостҳои HTTP ва коде, ки гумон мекунад тартиби муқаррарии боршавии plugin анҷом ёфтааст, худдорӣ кунед.

## Намунаи ҳадди ақал {#minimal-example}

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

Пас аз ҷойгир кардани файл, як домени mapped ва URL-и асосии unmapped-и site-ро бор кунед, то тасдиқ кунед, ки ҳар ду роҳ ҳанӯз дуруст bootstrap мешаванд.
