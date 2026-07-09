---
title: د اېډان Sunrise فایل لوډوونکی
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# د Addon Sunrise فایل Loader

Ultimate Multisite 2.8.0 د add-ons او دودیزو MU-plugin ادغامونو لپاره د sunrise غځونې Loader زیاتوي چې اړتیا لري د WordPress د sunrise bootstrapping پر مهال، د جوړ شوي `wp-content/sunrise.php` فایل له سمولو پرته، وچلېږي.

## کله یې وکاروئ

د sunrise غځونه هغه وخت وکاروئ کله چې ستاسو ادغام باید د عادي pluginونو له بارېدو مخکې وچلېږي، لکه د دودیز ډومېن لارو ټاکنه، د کوربه-ځانګړې غوښتنې سمبالونه، یا د شبکې د لومړني bootstrap سمونونه.

د عادي ادغامونو لپاره، عادي WordPress pluginونه، MU-plugins، او مستند شوي Ultimate Multisite hooks غوره کړئ. د sunrise کوډ ډېر وختي چلېږي او باید کوچنی، دفاعي، او له تړاوونو پاک پاتې شي.

## د فایل نومولو دود

د addon په یوه لارښود کې چې نوم یې له `ultimate-multisite-` سره پیلېږي، د `sunrise.php` په نوم PHP فایل جوړ کړئ:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loader د plugins لارښود د دې بڼې لپاره پلټي:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

برابر فایلونه د addon د لارې له مخې د الفبا په ترتیب بارېږي.

## فایل چیرته کېږدئ

فایل د هغه addon په ریښې لارښود کې کېږدئ چې د sunrise چلند مالک دی:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

پلټنه د `WP_CONTENT_DIR` په تړاو حل کېږي، نه د `WP_PLUGIN_DIR` د اوسني ارزښت په تړاو. دا موندنه ثابته ساتي کله چې multi-tenancy یا نور لومړني bootstrap کوډونه د sunrise پر مهال د plugin لارښود ثابتونه بدلوي.

د جوړ شوي `wp-content/sunrise.php` فایل مستقیماً مه سموئ. Loader دودیز کوډ ته اجازه ورکوي چې د sunrise چلند وغځوي، پرته له دې چې هغه اصلي sunrise فایل fork کړي چې Ultimate Multisite یې نصبوي او تازه کوي.

## موجود hooks او filters

د addon sunrise فایلونه وروسته له دې چلېږي چې د Ultimate Multisite ډومېن mapping بار شوی وي او مخکې له دې چې WordPress `ms_loaded` وچلوي. په دې پړاو کې یو sunrise فایل کولای شي:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- د اړتیا پر مهال د sunrise-وخت ثابتونه لکه `BLOG_ID_CURRENT_SITE` تعریف کړي؛
- د Ultimate Multisite sunrise مرستندویه حالت ولولي، په ګډون د routing حالت چې د multi-tenancy ادغامونو له خوا کارول کېږي.

Ultimate Multisite د خپل sunrise Loader تر بشپړېدو وروسته `wu_sunrise_loaded` چلوي. دغه action د هغه کوډ لپاره وکاروئ چې باید د sunrise bootstrap تر بشپړېدو وروسته وچلېږي، خو لا هم د sunrise د ژوند-دورې برخه وي.

یوازې هغه functions راوبلئ چې د sunrise پړاو کې لا دمخه بار شوي وي. له database-heavy کار، template rendering، HTTP غوښتنو، او هغه کوډ څخه ډډه وکړئ چې ګومان کوي د عادي plugin بارېدو ترتیب بشپړ شوی دی.

## لږ تر لږه بېلګه

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

د فایل له ځای پر ځای کولو وروسته، یو mapped ډومېن او د main-site نان-mapped URL بار کړئ څو تایید کړئ چې دواړه لارې لا هم په سمه توګه bootstrap کېږي.
