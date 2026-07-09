---
title: Chajè fichye Sunrise pou ekstansyon
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 ajoute yon chajè ekstansyon sunrise pou add-ons ak entegrasyon MU-plugin pèsonalize ki bezwen kouri pandan demaraj sunrise WordPress san modifye fichye `wp-content/sunrise.php` ki jenere a.

## Kilè pou itilize li

Sèvi ak yon ekstansyon sunrise lè entegrasyon ou a dwe kouri anvan plugin regilye yo chaje, tankou routaj domèn pèsonalize, jesyon demann espesifik pou host, oswa ajisteman bonè nan demaraj rezo a.

Pou entegrasyon nòmal yo, pito itilize plugin WordPress regilye, MU-plugins, ak hooks Ultimate Multisite ki dokimante yo. Kòd sunrise kouri trè bonè epi li ta dwe rete piti, defansif, epi san depandans.

## Konvansyon pou non fichye

Kreye yon fichye PHP ki rele `sunrise.php` nan yon repètwa addon ki gen non li kòmanse ak `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Chajè a eskane repètwa plugins la pou modèl sa a:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Fichye ki koresponn yo chaje nan lòd alfabetik selon chemen addon an.

## Ki kote pou mete fichye a

Mete fichye a nan repètwa rasin addon ki posede konpòtman sunrise la:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Eskan an rezoud parapò ak `WP_CONTENT_DIR`, pa valè aktyèl `WP_PLUGIN_DIR`. Sa kenbe dekouvèt la estab lè milti-lokatè oswa lòt kòd demaraj bonè chanje konstan repètwa plugin pandan sunrise.

Pa modifye fichye `wp-content/sunrise.php` ki jenere a dirèkteman. Chajè a pèmèt kòd pèsonalize pwolonje konpòtman sunrise san fork fichye sunrise debaz Ultimate Multisite enstale epi mete ajou a.

## Hooks ak filtè ki disponib

Fichye sunrise addon yo kouri apre katografi domèn Ultimate Multisite fin chaje epi anvan WordPress lanse `ms_loaded`. Nan pwen sa a, yon fichye sunrise kapab:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- defini konstan pou moman sunrise tankou `BLOG_ID_CURRENT_SITE` lè sa nesesè;
- li eta èd sunrise Ultimate Multisite, ki gen ladan eta routaj entegrasyon milti-lokatè yo itilize.

Ultimate Multisite lanse `wu_sunrise_loaded` apre chajè sunrise li a fini. Sèvi ak aksyon sa a pou kòd ki ta dwe kouri apre demaraj sunrise la fini men ki toujou fè pati sik lavi sunrise la.

Sèlman rele fonksyon ki deja chaje nan faz sunrise la. Evite travay ki lou pou baz done, rann modèl, demann HTTP, ak kòd ki sipoze lòd chajman plugin nòmal la fin fèt.

## Egzanp minimòm

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

Apre deplwaye fichye a, chaje yon domèn ki katografye ak yon URL sit prensipal ki pa katografye pou konfime toude chemen yo toujou demare kòrèkteman.
