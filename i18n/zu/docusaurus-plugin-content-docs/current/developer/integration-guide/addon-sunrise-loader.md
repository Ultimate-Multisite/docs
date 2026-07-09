---
title: Isilayishi Sefayela le-Sunrise Lesengezo
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Isilayishi Sefayela le-Sunrise Lesengezo {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 yengeza isilayishi sesandiso se-sunrise sezingezo nokuhlanganiswa kwe-MU-plugin okwenziwe ngokwezifiso okudingeka kusebenze ngesikhathi sokuqalisa kwe-WordPress sunrise ngaphandle kokuhlela ifayela elikhiqiziwe elithi `wp-content/sunrise.php`.

## Uyisebenzisa nini {#when-to-use-it}

Sebenzisa isandiso se-sunrise lapho ukuhlanganiswa kwakho kufanele kusebenze ngaphambi kokuba izandiso ezijwayelekile zilayishwe, njengokuhanjiswa kwe-domain okwenziwe ngokwezifiso, ukuphathwa kwezicelo okuqondene ne-host, noma ukulungiswa kwangaphambi kwesikhathi kokuqalisa kwenethiwekhi.

Ngokuhlanganiswa okujwayelekile, khetha izandiso ezijwayelekile ze-WordPress, MU-plugins, nama-hook abhaliwe e-Ultimate Multisite. Ikhodi ye-sunrise isebenza kusenesikhathi kakhulu futhi kufanele ihlale incane, ivikelekile, futhi ingenazo izincikile.

## Umthetho wokuqamba amafayela {#file-naming-convention}

Dala ifayela le-PHP elibizwa ngokuthi `sunrise.php` kuhla lwemibhalo lwesengezo eligama lalo liqala ngo-`ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Isilayishi siskena uhla lwemibhalo lwezandiso sifuna le phethini:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Amafayela afanayo alayishwa ngokulandelana kwezinhlamvu ngokwendlela yesengezo.

## Lapho okufanele ubeke khona ifayela {#where-to-place-the-file}

Beka ifayela kuhla lwemibhalo oluyimpande lwesengezo esiphethe ukuziphatha kwe-sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Ukuskena kuxazululwa ngokuhlobene ne-`WP_CONTENT_DIR`, hhayi inani lamanje le-`WP_PLUGIN_DIR`. Lokhu kugcina ukutholwa kuzinzile lapho ukusebenza kwabaqashi abaningi noma enye ikhodi yokuqala yangaphambi kwesikhathi ishintsha ama-constant ohla lwemibhalo lwezandiso ngesikhathi se-sunrise.

Ungalihleli ngqo ifayela elikhiqiziwe elithi `wp-content/sunrise.php`. Isilayishi sivumela ikhodi eyenziwe ngokwezifiso ukuthi inwebe ukuziphatha kwe-sunrise ngaphandle kokuhlukanisa ifayela eliyisisekelo le-sunrise elifakwa futhi libuyekezwe yi-Ultimate Multisite.

## Ama-hook nezihlungi ezitholakalayo {#hooks-and-filters-available}

Amafayela e-sunrise esengezo asebenza ngemva kokuba ukuhanjiswa kwe-domain kwe-Ultimate Multisite sekulayishiwe nangaphambi kokuba i-WordPress ivuse `ms_loaded`. Kuleli phuzu ifayela le-sunrise lingakwazi:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- ukuchaza ama-constant esikhathi se-sunrise njenge-`BLOG_ID_CURRENT_SITE` lapho kudingeka;
- ukufunda isimo somsizi we-sunrise we-Ultimate Multisite, okuhlanganisa isimo sokuhambisa esisetshenziswa ukuhlanganiswa kokusebenza kwabaqashi abaningi.

Ultimate Multisite ivusa `wu_sunrise_loaded` ngemva kokuba isilayishi sayo se-sunrise sesiqedile. Sebenzisa leso senzo sekhodi okufanele isebenze ngemva kokuba ukuqaliswa kwe-sunrise sekuphelile kodwa isengaphansi komjikelezo wempilo we-sunrise.

Biza kuphela imisebenzi esivele ilayishiwe esigabeni se-sunrise. Gwema umsebenzi osindayo wedathabheyisi, ukuvezwa kwezifanekiso, izicelo ze-HTTP, nekhodi ecabanga ukuthi ukuhleleka okujwayelekile kokulayishwa kwezandiso sekuphothuliwe.

## Isibonelo esincane {#minimal-example}

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

Ngemva kokuthumela ifayela, layisha i-domain ehanjisiwe kanye ne-URL yesayithi elikhulu engahanjiswanga ukuze uqinisekise ukuthi zombili izindlela zisakwazi ukuqala kahle.
