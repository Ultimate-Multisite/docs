---
title: Llwythwr Ffeil Gwawr yr Ychwanegyn
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Llwythwr Ffeil Sunrise Addon

Mae Ultimate Multisite 2.8.0 yn ychwanegu llwythwr estyniad sunrise ar gyfer ychwanegion ac integreiddiadau MU-plugin personol sydd angen rhedeg yn ystod cychwyniad sunrise WordPress heb olygu’r ffeil `wp-content/sunrise.php` a gynhyrchir.

## Pryd i’w ddefnyddio {#when-to-use-it}

Defnyddiwch estyniad sunrise pan fo’n rhaid i’ch integreiddiad redeg cyn i ategion rheolaidd gael eu llwytho, megis llwybro parthau personol, trin ceisiadau penodol i westeiwr, neu addasiadau cynnar i gychwyniad rhwydwaith.

Ar gyfer integreiddiadau arferol, ffafriwch ategion WordPress rheolaidd, MU-plugins, a bachau Ultimate Multisite sydd wedi’u dogfennu. Mae cod sunrise yn rhedeg yn gynnar iawn a dylai aros yn fach, yn amddiffynnol, ac yn rhydd o ddibyniaethau.

## Confensiwn enwi ffeiliau {#file-naming-convention}

Crëwch ffeil PHP o’r enw `sunrise.php` mewn cyfeiriadur ychwanegyn y mae ei enw’n dechrau gyda `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Mae’r llwythwr yn sganio’r cyfeiriadur ategion am y patrwm hwn:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Caiff ffeiliau sy’n cyfateb eu llwytho yn nhrefn yr wyddor yn ôl llwybr yr ychwanegyn.

## Ble i osod y ffeil {#where-to-place-the-file}

Rhowch y ffeil yng nghyfeiriadur gwraidd yr ychwanegyn sy’n berchen ar yr ymddygiad sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Caiff y sgan ei ddatrys yn gymharol â `WP_CONTENT_DIR`, nid gwerth cyfredol `WP_PLUGIN_DIR`. Mae hyn yn cadw darganfod yn sefydlog pan fydd aml-denantiaeth neu god cychwyn cynnar arall yn newid cysonion cyfeiriadur ategion yn ystod sunrise.

Peidiwch â golygu’r ffeil `wp-content/sunrise.php` a gynhyrchir yn uniongyrchol. Mae’r llwythwr yn caniatáu i god personol ymestyn ymddygiad sunrise heb fforchio’r ffeil sunrise graidd y mae Ultimate Multisite yn ei gosod ac yn ei diweddaru.

## Bachau a hidlyddion sydd ar gael {#hooks-and-filters-available}

Mae ffeiliau sunrise ychwanegion yn rhedeg ar ôl i fapio parthau Ultimate Multisite lwytho a chyn i WordPress danio `ms_loaded`. Ar y pwynt hwn gall ffeil sunrise:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- diffinio cysonion amser-sunrise megis `BLOG_ID_CURRENT_SITE` pan fo angen;
- darllen cyflwr cynorthwyydd sunrise Ultimate Multisite, gan gynnwys cyflwr llwybro a ddefnyddir gan integreiddiadau aml-denantiaeth.

Mae Ultimate Multisite yn tanio `wu_sunrise_loaded` ar ôl i’w lwythwr sunrise orffen. Defnyddiwch y weithred honno ar gyfer cod a ddylai redeg ar ôl i gychwyniad sunrise fod yn gyflawn ond sy’n dal i berthyn i gylch bywyd sunrise.

Galwch swyddogaethau sydd eisoes wedi’u llwytho yn y cyfnod sunrise yn unig. Osgowch waith trwm ar gronfeydd data, rendro templedi, ceisiadau HTTP, a chod sy’n tybio bod trefn lwytho ategion arferol wedi’i chwblhau.

## Enghraifft leiaf {#minimal-example}

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

Ar ôl defnyddio’r ffeil, llwythwch barth wedi’i fapio ac URL prif wefan heb ei fapio i gadarnhau bod y ddau lwybr yn dal i gychwyn yn gywir.
