---
title: Isilayishi seFayile ye-Sunrise sesongezo
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Isilayishi sefayile ye-Sunrise yesongezo {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 yongeza isilayishi solwandiso lwe-sunrise sezongezo kunye nodibaniso lwe-MU-plugin olwenziweyo olufuna ukusebenza ngexesha le-WordPress sunrise bootstrapping ngaphandle kokuhlela ifayile evelisiweyo ethi `wp-content/sunrise.php`.

## Xa kufuneka uyisebenzise {#when-to-use-it}

Sebenzisa ulwandiso lwe-sunrise xa udibaniso lwakho kufuneka lusebenze ngaphambi kokuba ii-plugin eziqhelekileyo zilayishwe, njengokuhanjiswa kweedomeyini ezenziweyo, ukuphathwa kwezicelo ezithile kumamkeli, okanye uhlengahlengiso lokuqala lwe-network bootstrap.

Kudibaniso oluqhelekileyo, khetha ii-plugin eziqhelekileyo ze-WordPress, ii-MU-plugins, kunye nee-hook ezibhalwe ngokusemthethweni ze-Ultimate Multisite. Ikhowudi ye-Sunrise isebenza kwangethuba kakhulu kwaye kufuneka ihlale incinci, ikhuselekile, kwaye ingenazixhomekeko.

## Umgaqo wokuthiywa kweefayile {#file-naming-convention}

Yenza ifayile ye-PHP ebizwa `sunrise.php` kulawulo lwesongezo eligama lalo liqala ngo-`ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Isilayishi siskena ulawulo lwee-plugin sifuna le patheni:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Iifayile ezihambelanayo zilayishwa ngokulandelelana kwealfabhethi ngokwendlela yesongezo.

## Apho kufuneka ubeke khona ifayile {#where-to-place-the-file}

Beka ifayile kulawulo oluyingcambu lwesongezo esiphethe indlela yokuziphatha ye-sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Ukuskena kusonjululwa ngokunxulumene ne-`WP_CONTENT_DIR`, hayi ixabiso langoku le-`WP_PLUGIN_DIR`. Oku kugcina ukufunyanwa kuzinzile xa i-multi-tenancy okanye enye ikhowudi ye-bootstrap yangethuba itshintsha ii-constants zolawulo lwee-plugin ngexesha le-sunrise.

Musa ukuhlela ifayile evelisiweyo ethi `wp-content/sunrise.php` ngqo. Isilayishi sivumela ikhowudi eyenziweyo ukuba yandise indlela yokuziphatha ye-sunrise ngaphandle kokwahlula ifayile engundoqo ye-sunrise efakelwa kwaye ihlaziywe yi-Ultimate Multisite.

## Ii-hook kunye neefilter ezifumanekayo {#hooks-and-filters-available}

Iifayile ze-sunrise zesongezo zisebenza emva kokuba i-domain mapping ye-Ultimate Multisite ilayishiwe kwaye ngaphambi kokuba i-WordPress ivuse `ms_loaded`. Ngeli xesha ifayile ye-sunrise inokwenza oku:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- ichaze ii-constants zexesha le-sunrise ezifana ne-`BLOG_ID_CURRENT_SITE` xa kufuneka;
- ifunde imeko yomncedisi we-sunrise ye-Ultimate Multisite, kuquka imeko yokuhanjiswa esetyenziswa ludibaniso lwe-multi-tenancy.

Ultimate Multisite ivusa `wu_sunrise_loaded` emva kokuba isilayishi sayo se-sunrise sigqibile. Sebenzisa elo nyathelo kwikhowudi ekufuneka isebenze emva kokuba i-sunrise bootstrap igqityiwe kodwa isekhona kumjikelo wobomi we-sunrise.

Biza kuphela imisebenzi esele ilayishiwe kwisigaba se-sunrise. Kuphephe umsebenzi onzima kwidatabase, ukuboniswa kweetemplate, izicelo ze-HTTP, kunye nekhowudi ecinga ukuba ulungelelwaniso oluqhelekileyo lokulayishwa kwee-plugin sele lugqityiwe.

## Umzekelo omncinci {#minimal-example}

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

Emva kokusasaza ifayile, layisha idomeyini e-maphiweyo kunye ne-URL yesayithi engundoqo engamaphwanga ukuqinisekisa ukuba zombini iindlela zisayenza i-bootstrap ngokuchanekileyo.
