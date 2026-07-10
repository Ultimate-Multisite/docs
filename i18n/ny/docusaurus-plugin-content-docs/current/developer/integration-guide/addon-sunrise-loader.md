---
title: Chowonjezera Chonyamula Fayilo ya Sunrise
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Chotsegulira Fayilo ya Sunrise ya Chowonjezera {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 imawonjezera chotsegulira chowonjezera cha sunrise cha zowonjezera ndi ma integration a MU-plugin okhazikitsidwa mwamakonda omwe ayenera kuyenda pa nthawi ya WordPress sunrise bootstrapping popanda kusintha fayilo ya `wp-content/sunrise.php` yopangidwa.

## Nthawi yogwiritsa ntchito {#when-to-use-it}

Gwiritsani ntchito chowonjezera cha sunrise pamene integration yanu iyenera kuyenda mapulagini wamba asananyamulidwe, monga kuyendetsa ma domain mwamakonda, kusamalira zopempha malinga ndi host, kapena kusintha koyambirira kwa network bootstrap.

Kwa ma integration wamba, sankhani mapulagini wamba a WordPress, MU-plugins, ndi ma hook a Ultimate Multisite olembedwa mu zolemba. Code ya Sunrise imayenda koyambirira kwambiri ndipo iyenera kukhala yaying'ono, yodziteteza, komanso yopanda ma dependency.

## Lamulo lotchulira mafayilo {#file-naming-convention}

Pangani fayilo ya PHP yotchedwa `sunrise.php` mu directory ya chowonjezera yomwe dzina lake limayamba ndi `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Chotsegulira chimafufuza mu directory ya mapulagini kuti chipeze pattern iyi:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Mafayilo ofanana amanyamulidwa motsatira zilembo za alifabeti potengera path ya chowonjezera.

## Komwe muyenera kuyika fayiloyo {#where-to-place-the-file}

Ikani fayiloyo mu directory ya muzu ya chowonjezera chomwe chili ndi khalidwe la sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Kufufuzaku kumathetsedwa molingana ndi `WP_CONTENT_DIR`, osati mtengo wapano wa `WP_PLUGIN_DIR`. Izi zimasunga kupeza kukhala kokhazikika pamene multi-tenancy kapena code ina yoyambirira ya bootstrap isintha ma constant a directory ya pulagini pa nthawi ya sunrise.

Musasinthe fayilo yopangidwa ya `wp-content/sunrise.php` mwachindunji. Chotsegulirachi chimalola code yokhazikitsidwa mwamakonda kuwonjezera khalidwe la sunrise popanda kupanga nthambi ya fayilo yaikulu ya sunrise yomwe Ultimate Multisite imayika ndi kusintha.

## Ma hook ndi ma filter omwe alipo {#hooks-and-filters-available}

Mafayilo a sunrise a chowonjezera amayenda pambuyo poti domain mapping ya Ultimate Multisite yanyamulidwa ndipo WordPress isanayambitse `ms_loaded`. Pa nthawi imeneyi fayilo ya sunrise ingathe:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- kufotokoza ma constant a nthawi ya sunrise monga `BLOG_ID_CURRENT_SITE` pakafunika;
- kuwerenga state ya othandizira a sunrise a Ultimate Multisite, kuphatikiza state ya routing yomwe imagwiritsidwa ntchito ndi ma integration a multi-tenancy.

Ultimate Multisite imayambitsa `wu_sunrise_loaded` chotsegulira chake cha sunrise chikamaliza. Gwiritsani ntchito action imeneyo pa code yomwe iyenera kuyenda pambuyo poti sunrise bootstrap yatha koma ikadali ya lifecycle ya sunrise.

Itanani ma function okha omwe anyamulidwa kale mu gawo la sunrise. Pewani ntchito zolemetsa database, template rendering, zopempha za HTTP, ndi code yomwe imayembekezera kuti dongosolo lonyamula pulagini wamba latha.

## Chitsanzo chochepa {#minimal-example}

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

Mukayika fayiloyo, tsegulani domain yolumikizidwa ndi URL ya main-site yosaloŵetsedwa mu map kuti mutsimikizire kuti paths zonse ziwiri zikubootstrap molondola.
