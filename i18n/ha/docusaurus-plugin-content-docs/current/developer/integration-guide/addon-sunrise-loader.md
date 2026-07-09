---
title: Mai Loda Fayil ɗin Sunrise na Ƙari
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Mai Loda Fayil ɗin Addon Sunrise

Ultimate Multisite 2.8.0 yana ƙara mai loda faɗaɗa sunrise don add-ons da haɗe-haɗen MU-plugin na musamman da suke buƙatar gudana yayin WordPress sunrise bootstrapping ba tare da gyara fayil ɗin `wp-content/sunrise.php` da aka samar ba.

## Lokacin amfani da shi

Yi amfani da faɗaɗa sunrise lokacin da haɗe-haɗenka dole ne ya gudana kafin a loda plugins na yau da kullum, kamar tsara hanyar custom domain, sarrafa buƙatun da suka danganci host, ko gyare-gyaren network bootstrap na farko.

Don haɗe-haɗe na yau da kullum, fi son plugins na WordPress na yau da kullum, MU-plugins, da hooks na Ultimate Multisite da aka rubuta a takardu. Lambar sunrise tana gudana da wuri sosai kuma ya kamata ta kasance ƙarama, mai kariya, kuma marar dogaro da wasu abubuwa.

## Ka’idar sanya sunan fayil

Ƙirƙiri fayil ɗin PHP mai suna `sunrise.php` a cikin kundin addon wanda sunansa yake farawa da `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Mai loda yana bincika kundin plugins don wannan tsari:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Ana loda fayilolin da suka dace bisa tsarin haruffa ta hanyar addon.

## Inda za a saka fayil ɗin

Saka fayil ɗin a cikin babban kundin addon ɗin da yake da halayyar sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Ana warware binciken dangane da `WP_CONTENT_DIR`, ba darajar `WP_PLUGIN_DIR` ta yanzu ba. Wannan yana sa gano fayiloli ya kasance tabbatacce lokacin da multi-tenancy ko wasu lambobin bootstrap na farko suka canza constants na kundin plugin yayin sunrise.

Kada ka gyara fayil ɗin `wp-content/sunrise.php` da aka samar kai tsaye. Mai loda yana ba lambar musamman damar faɗaɗa halayyar sunrise ba tare da yin fork na ainihin fayil ɗin sunrise da Ultimate Multisite ke sakawa kuma yake sabuntawa ba.

## Hooks da filters da ake da su

Fayilolin addon sunrise suna gudana bayan Ultimate Multisite domain mapping ya loda kuma kafin WordPress ya kunna `ms_loaded`. A wannan lokaci fayil ɗin sunrise zai iya:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- ayyana constants na lokacin sunrise kamar `BLOG_ID_CURRENT_SITE` idan ana buƙata;
- karanta yanayin sunrise helper na Ultimate Multisite, ciki har da yanayin routing da haɗe-haɗen multi-tenancy ke amfani da shi.

Ultimate Multisite yana kunna `wu_sunrise_loaded` bayan mai loda sunrise ɗinsa ya gama. Yi amfani da wannan action don lambar da ya kamata ta gudana bayan an kammala sunrise bootstrap amma har yanzu tana cikin zagayen rayuwar sunrise.

Kira kawai functions da aka riga aka loda a matakin sunrise. Guji aiki mai nauyi kan database, nuna template, buƙatun HTTP, da lambar da take ɗauka cewa an kammala tsarin loda plugin na yau da kullum.

## Misali mafi ƙanƙanta

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

Bayan tura fayil ɗin, loda mapped domain da URL na main-site da ba a yi mapping ba don tabbatar da cewa duk hanyoyin biyu har yanzu suna bootstrap daidai.
