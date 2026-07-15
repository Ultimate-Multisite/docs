---
title: צוגאב Sunrise טעקע־לאָדער
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise טעקע־לאָדער

Ultimate Multisite 2.8.0 לייגט צו אַ sunrise־פֿאַרברייטערונג־לאָדער פֿאַר add-ons און אייגענע MU-plugin אינטעגראַציעס וואָס דאַרפֿן לויפֿן בעת WordPress sunrise־אָנהייב־לאָדן אָן רעדאַקטירן די גענערירטע `wp-content/sunrise.php` טעקע.

## ווען צו נוצן עס {#when-to-use-it}

נוצט אַ sunrise־פֿאַרברייטערונג ווען אייער אינטעגראַציע מוז לויפֿן איידער געוויינטלעכע plugins ווערן געלאָדן, ווי למשל אייגענע דאָמיין־רוטינג, באַלעבאָס־ספּעציפֿישע בקשה־באַהאַנדלונג, אָדער פרי נעצווערק־אָנהייב־לאָדן־צופּאַסונגען.

פֿאַר נאָרמאַלע אינטעגראַציעס, גיט בעסער פֿאָרצוג צו געוויינטלעכע WordPress plugins, MU-plugins, און די דאָקומענטירטע Ultimate Multisite hooks. Sunrise־קאָד לויפֿט זייער פרי און זאָל בלייבן קליין, אָפּגעהיט, און אָן אָפּהענגיקייטן.

## טעקע־נאָמען־קאָנווענציע {#file-naming-convention}

שאַפֿט אַ PHP טעקע מיטן נאָמען `sunrise.php` אין אַן addon־טעקע־אָרדנער וועמענס נאָמען הייבט זיך אָן מיט `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

דער לאָדער דורכזוכט דעם plugins־טעקע־אָרדנער פֿאַר דעם מוסטער:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

פּאַסיקע טעקעס ווערן געלאָדן אין אַלפֿאַבעטישער סדר לויטן addon־דרך.

## וווּ צו לייגן די טעקע {#where-to-place-the-file}

לייגט די טעקע אין דעם וואָרצל־טעקע־אָרדנער פֿון דעם addon וואָס פֿאַרמאָגט די sunrise־באַפֿירונג:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

די דורכזוכונג ווערט אויסגערעכנט רעלאַטיוו צו `WP_CONTENT_DIR`, נישט צום איצטיקן ווערט פֿון `WP_PLUGIN_DIR`. דאָס האַלט די געפֿינען־פּראָצעדור סטאַביל ווען מולטי־טענאַנטקייט אָדער אַנדער פריער אָנהייב־קאָד ענדערט plugin־טעקע־אָרדנער־קאָנסטאַנטן בעת sunrise.

רעדאַקטירט נישט דירעקט די גענערירטע `wp-content/sunrise.php` טעקע. דער לאָדער לאָזט אייגענעם קאָד פֿאַרברייטערן sunrise־באַפֿירונג אָן אָפּצושיידן דעם core sunrise טעקע וואָס Ultimate Multisite אינסטאַלירט און דערהײַנטיקט.

## hooks און filters בנימצא {#hooks-and-filters-available}

Addon sunrise טעקעס לויפֿן נאָך דעם ווי Ultimate Multisite דאָמיין־מאַפּינג איז געלאָדן געוואָרן און איידער WordPress פֿײַערט `ms_loaded`. אין דעם פּונקט קען אַ sunrise טעקע:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- דעפֿינירן sunrise־צײַט־קאָנסטאַנטן ווי `BLOG_ID_CURRENT_SITE` ווען נייטיק;
- לייענען Ultimate Multisite sunrise־הילפֿס־צושטאַנד, אַרײַנגערעכנט רוטינג־צושטאַנד גענוצט דורך מולטי־טענאַנטקייט־אינטעגראַציעס.

Ultimate Multisite פֿײַערט `wu_sunrise_loaded` נאָך דעם וואָס זײַן sunrise־לאָדער ענדיקט. ניצט יענע action פֿאַר קאָד וואָס זאָל לויפֿן נאָך דעם ווי sunrise־אָנהייב־לאָדן איז פֿאַרענדיקט, אָבער געהערט נאָך אַלץ צום sunrise־לעבנסציקל.

רופֿט נאָר אָן פֿונקציעס וואָס זענען שוין געלאָדן אין דער sunrise־פֿאַזע. פֿאַרמײַדט דאַטאַבאַזע־שווערע אַרבעט, מוסטער־רענדערינג, HTTP בקשות, און קאָד וואָס נעמט אָן אַז דער נאָרמאַלער plugin־לאָדן־סדר איז שוין פֿאַרענדיקט.

## מינימאַלער בײַשפּיל {#minimal-example}

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

נאָך אַרויסשטעלן די טעקע, לאָדט אַ געמאַפּטע דאָמיין און אַן אומגעמאַפּטע הויפּט־פּלאַץ־URL כּדי צו באַשטעטיקן אַז ביידע וועגן אָנהייב־לאָדן זיך נאָך ריכטיק.
