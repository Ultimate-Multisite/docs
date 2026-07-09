---
title: Հավելման Sunrise ֆայլի բեռնիչ
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise ֆայլի բեռնիչ

Ultimate Multisite 2.8.0-ը ավելացնում է sunrise ընդլայնման բեռնիչ՝ հավելումների և հարմարեցված MU-plugin ինտեգրացիաների համար, որոնք պետք է գործարկվեն WordPress-ի sunrise սկզբնաբեռնման ընթացքում՝ առանց գեներացված `wp-content/sunrise.php` ֆայլը խմբագրելու։

## Երբ օգտագործել այն

Օգտագործեք sunrise ընդլայնում, երբ ձեր ինտեգրացիան պետք է գործարկվի նախքան սովորական plugin-ների բեռնումը, օրինակ՝ հարմարեցված տիրույթի երթուղավորում, հոսթին հատուկ հարցումների մշակում կամ ցանցի վաղ սկզբնաբեռնման կարգավորումներ։

Սովորական ինտեգրացիաների համար նախընտրեք սովորական WordPress plugin-ներ, MU-plugin-ներ և փաստաթղթավորված Ultimate Multisite hook-երը։ Sunrise կոդը գործարկվում է շատ վաղ և պետք է մնա փոքր, պաշտպանողական և կախվածություններից զերծ։

## Ֆայլի անվանման կանոն

Ստեղծեք `sunrise.php` անունով PHP ֆայլ addon պանակում, որի անունը սկսվում է `ultimate-multisite-`-ով՝

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Բեռնիչը plugins պանակում որոնում է այս ձևանմուշը՝

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Համընկնող ֆայլերը բեռնվում են այբբենական կարգով՝ ըստ addon-ի ուղու։

## Որտեղ տեղադրել ֆայլը

Տեղադրեք ֆայլը այն addon-ի արմատային պանակում, որը տնօրինում է sunrise վարքագիծը՝

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Սկանավորումը հաշվարկվում է `WP_CONTENT_DIR`-ի նկատմամբ, ոչ թե `WP_PLUGIN_DIR`-ի ընթացիկ արժեքի։ Սա հայտնաբերումը կայուն է պահում, երբ բազմավարձակալությունը կամ այլ վաղ սկզբնաբեռնման կոդը sunrise-ի ընթացքում փոխում է plugin պանակի հաստատունները։

Մի խմբագրեք գեներացված `wp-content/sunrise.php` ֆայլը անմիջապես։ Բեռնիչը թույլ է տալիս հարմարեցված կոդով ընդլայնել sunrise վարքագիծը՝ առանց ճյուղավորելու հիմնական sunrise ֆայլը, որը Ultimate Multisite-ը տեղադրում և թարմացնում է։

## Հասանելի hook-եր և զտիչներ

Addon sunrise ֆայլերը գործարկվում են Ultimate Multisite տիրույթի քարտեզագրումը բեռնելուց հետո և նախքան WordPress-ը գործարկի `ms_loaded`-ը։ Այս պահին sunrise ֆայլը կարող է՝

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- անհրաժեշտության դեպքում սահմանել sunrise-ի ժամանակի հաստատուններ, օրինակ՝ `BLOG_ID_CURRENT_SITE`;
- կարդալ Ultimate Multisite sunrise օգնականի վիճակը, ներառյալ երթուղավորման վիճակը, որն օգտագործվում է բազմավարձակալության ինտեգրացիաների կողմից։

Ultimate Multisite-ը գործարկում է `wu_sunrise_loaded`-ը իր sunrise բեռնիչի ավարտից հետո։ Օգտագործեք այդ action-ը այն կոդի համար, որը պետք է գործարկվի sunrise սկզբնաբեռնման ավարտից հետո, բայց դեռ պատկանի sunrise կյանքի ցիկլին։

Կանչեք միայն այն գործառույթները, որոնք արդեն բեռնված են sunrise փուլում։ Խուսափեք տվյալների բազայի ծանրաբեռնված աշխատանքից, ձևանմուշների արտապատկերումից, HTTP հարցումներից և կոդից, որը ենթադրում է, որ սովորական plugin-ների բեռնման կարգն ավարտվել է։

## Նվազագույն օրինակ

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

Ֆայլը տեղակայելուց հետո բեռնեք քարտեզագրված տիրույթ և չքարտեզագրված հիմնական կայքի URL՝ հաստատելու, որ երկու ուղիներն էլ դեռ ճիշտ են սկզբնաբեռնվում։
