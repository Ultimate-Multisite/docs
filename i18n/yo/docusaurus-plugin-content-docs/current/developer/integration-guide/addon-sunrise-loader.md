---
title: Olùrù Faili Sunrise Àfikún
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Olùkó Faili Sunrise fún Addon

Ultimate Multisite 2.8.0 ṣàfikún olùkó ìmúgbòòrò sunrise fún àwọn àfikún àti àwọn ìṣepọ̀ MU-plugin àdáni tí ó nílò láti ṣiṣẹ́ nígbà ìbẹ̀rẹ̀ sunrise WordPress láì ṣàtúnṣe faili `wp-content/sunrise.php` tí a ṣẹ̀dá.

## Ìgbà wo ni kí o lò ó {#when-to-use-it}

Lo ìmúgbòòrò sunrise nígbà tí ìṣepọ̀ rẹ gbọ́dọ̀ ṣiṣẹ́ ṣáájú kí àwọn plugin déédéé tó jẹ́ kíkó, bíi ìdarí domain àdáni, ìmúlò ìbéèrè tó dá lórí host, tàbí àwọn àtúnṣe ìbẹ̀rẹ̀ nẹ́tíwọ́ọ̀kì ní kutukutu.

Fún àwọn ìṣepọ̀ déédéé, fẹ́ràn àwọn WordPress plugin déédéé, MU-plugins, àti àwọn hook Ultimate Multisite tí a kọ sínú ìwé. Kóòdù sunrise máa ń ṣiṣẹ́ ní kutukutu gan-an, ó sì yẹ kí ó kéré, kí ó ṣọ́ra, kí ó sì má ní ìgbẹ́kẹ̀lé lórí ohun míì.

## Àṣà fífi orúkọ fún faili {#file-naming-convention}

Ṣẹ̀dá faili PHP kan tí a pè ní `sunrise.php` nínú àkójọpọ̀ addon kan tí orúkọ rẹ bẹ̀rẹ̀ pẹ̀lú `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Olùkó náà ń ṣàyẹ̀wò àkójọpọ̀ plugins fún àpẹẹrẹ yìí:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Àwọn faili tó bá bá mu ni a máa kó ní ìtẹ̀lé alfabeti gẹ́gẹ́ bí ọ̀nà addon.

## Ibi tí o yẹ kí o fi faili náà sí {#where-to-place-the-file}

Fi faili náà sí àkójọpọ̀ gbòǹgbò ti addon tí ó ni ìwà sunrise náà:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Ìṣàyẹ̀wò náà ni a yanjú ní ìbáṣepọ̀ pẹ̀lú `WP_CONTENT_DIR`, kì í ṣe iye `WP_PLUGIN_DIR` lọwọlọwọ. Èyí ń jẹ́ kí ìṣàwárí dúró ṣinṣin nígbà tí multi-tenancy tàbí kóòdù ìbẹ̀rẹ̀ kutukutu míì bá yí àwọn constants àkójọpọ̀ plugin padà nígbà sunrise.

Má ṣe ṣàtúnṣe faili `wp-content/sunrise.php` tí a ṣẹ̀dá taara. Olùkó náà jẹ́ kí kóòdù àdáni fa ìwà sunrise gbooro láì ṣe ẹ̀ka kúrò nínú faili sunrise pàtàkì tí Ultimate Multisite ń fi sílẹ̀ tí ó sì ń ṣe àfikún sí.

## Àwọn hook àti filter tó wà {#hooks-and-filters-available}

Àwọn faili sunrise addon máa ń ṣiṣẹ́ lẹ́yìn tí mapping domain Ultimate Multisite bá ti jẹ́ kíkó, àti ṣáájú kí WordPress tó tan `ms_loaded`. Ní àkókò yìí, faili sunrise kan lè:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- ṣàlàyé àwọn constants ìgbà-sunrise bíi `BLOG_ID_CURRENT_SITE` nígbà tí a bá nílò rẹ;
- ka ipo olùrànlọ́wọ́ sunrise Ultimate Multisite, pẹ̀lú ipo ìdarí tí àwọn ìṣepọ̀ multi-tenancy ń lò.

Ultimate Multisite máa ń tan `wu_sunrise_loaded` lẹ́yìn tí olùkó sunrise rẹ bá parí. Lo action yẹn fún kóòdù tí ó yẹ kí ó ṣiṣẹ́ lẹ́yìn tí ìbẹ̀rẹ̀ sunrise bá pé, ṣùgbọ́n tí ó ṣì jẹ́ apá ìgbésí-ayé sunrise.

Pe àwọn function tí wọ́n ti jẹ́ kíkó sínú ìpele sunrise nìkan. Yẹra fún iṣẹ́ tó wuwo lórí database, rendering template, àwọn ìbéèrè HTTP, àti kóòdù tí ó rò pé ìtẹ̀lé ìkó plugin déédéé ti parí.

## Àpẹẹrẹ kékeré jù {#minimal-example}

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

Lẹ́yìn fífi faili náà sílẹ̀, kó domain tí a ti map àti URL main-site tí a kò map láti jẹ́rìí pé àwọn ọ̀nà méjèèjì ṣì ń bẹ̀rẹ̀ dáadáa.
