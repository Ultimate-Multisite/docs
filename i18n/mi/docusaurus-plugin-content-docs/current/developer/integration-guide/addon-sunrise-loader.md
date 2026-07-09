---
title: Kaiuta Kōnae Whitinga o te Rā Tāpiritanga
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Kaituku Kōnae Sunrise Addon

Ka tāpiri a Ultimate Multisite 2.8.0 i tētahi kaituku toronga sunrise mō ngā add-on me ngā whakaurunga MU-plugin ritenga me whakahaere i te wā o te tīmatanga sunrise o WordPress, me te kore e whakatika i te kōnae `wp-content/sunrise.php` kua hangaia.

## Āhea whakamahia ai

Whakamahia tētahi toronga sunrise ina me rere tō whakaurunga i mua i te utaina o ngā plugin auau, pērā i te ararere rohe ritenga, te whakahaere tono motuhake-ki-te-kaihautū, ngā whakatikatika tīmatanga whatunga tōmua rānei.

Mō ngā whakaurunga noa, me mātua whakamahi i ngā plugin WordPress auau, ngā MU-plugin, me ngā hook Ultimate Multisite kua tuhia. Ka rere wawe rawa te waehere sunrise, ā, me noho iti, tūpato, kore-whirinaki hoki.

## Tikanga whakaingoa kōnae

Waihangatia tētahi kōnae PHP ko `sunrise.php` te ingoa ki roto i tētahi whaiaronga addon e tīmata ana tōna ingoa ki `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Ka matawai te kaituku i te whaiaronga plugins mō tēnei tauira:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Ka utaina ngā kōnae ōrite i runga i te raupapa ā-āpū reta mā te ara addon.

## Te wāhi hei whakatakoto i te kōnae

Whakatakotoria te kōnae ki te whaiaronga pūtake o te addon nōna te whanonga sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Ka whakatauria te matawai e hāngai ana ki `WP_CONTENT_DIR`, ehara i te uara o nāianei o `WP_PLUGIN_DIR`. Mā tēnei e pūmau ai te kitenga ina whakarerekē te multi-tenancy me ētahi atu waehere tīmatanga tōmua i ngā pūmau whaiaronga plugin i te wā o sunrise.

Kaua e whakatika hāngai i te kōnae `wp-content/sunrise.php` kua hangaia. Mā te kaituku e āhei ai te waehere ritenga ki te whakawhānui i te whanonga sunrise me te kore e forking i te kōnae sunrise matua ka tāuta, ka whakahou hoki a Ultimate Multisite.

## Ngā hook me ngā tātari e wātea ana

Ka rere ngā kōnae sunrise addon i muri i te utanga o te mahere rohe Ultimate Multisite, ā, i mua i te whakakānga a WordPress i `ms_loaded`. I tēnei wā ka taea e tētahi kōnae sunrise te:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- tautuhi i ngā pūmau wā-sunrise pērā i `BLOG_ID_CURRENT_SITE` ina hiahiatia;
- pānui i te āhua āwhina sunrise o Ultimate Multisite, tae atu ki te āhua ararere e whakamahia ana e ngā whakaurunga multi-tenancy.

Ka whakakā a Ultimate Multisite i `wu_sunrise_loaded` i muri i te otinga o tana kaituku sunrise. Whakamahia taua action mō te waehere me rere i muri i te otinga o te tīmatanga sunrise, engari nō te huringa ora sunrise tonu.

Karangahia anake ngā function kua utaina kētia i te wāhanga sunrise. Kaua e mahi i ngā mahi taumaha-pātengi raraunga, te tāhuahua tātauira, ngā tono HTTP, me te waehere e whakapae ana kua oti kē te raupapa uta plugin noa.

## Tauira iti rawa

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

I muri i te tuku i te kōnae, utaina tētahi rohe kua maherehia me tētahi URL pae-matua kāore anō kia maherehia hei whakaū kei te tika tonu te tīmatanga o ngā ara e rua.
