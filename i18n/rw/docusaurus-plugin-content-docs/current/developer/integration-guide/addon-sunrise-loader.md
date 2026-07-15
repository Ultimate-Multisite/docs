---
title: Umulayishi wa dosiye Sunrise w'inyongera
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 yongeramo sunrise extension loader igenewe add-ons n’imikoranire yihariye ya MU-plugin ikeneye gukora mu gihe cya WordPress sunrise bootstrapping hatabayeho guhindura dosiye `wp-content/sunrise.php` yakozwe.

## Igihe cyo kuyikoresha {#when-to-use-it}

Koresha sunrise extension igihe imikoranire yawe igomba gukora mbere y’uko plugins zisanzwe zitangizwa, nko kuyobora domain yihariye, gutunganya request bishingiye kuri host, cyangwa guhindura kare network bootstrap.

Ku mikoranire isanzwe, hitamo WordPress plugins zisanzwe, MU-plugins, n’ama hooks ya Ultimate Multisite yanditswe mu nyandiko. Code ya sunrise ikora kare cyane kandi ikwiye kuguma ari nto, yirinda amakosa, kandi idakeneye dependencies.

## Uburyo bwo kwita dosiye izina {#file-naming-convention}

Kora dosiye ya PHP yitwa `sunrise.php` mu bubiko bwa addon bufite izina ritangizwa na `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loader isuzuma ububiko bwa plugins ishakisha iyi pattern:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Dosiye bihuye zitangizwa hakurikijwe urutonde rw’inyuguti rushingiye kuri path ya addon.

## Aho gushyira dosiye {#where-to-place-the-file}

Shyira dosiye mu bubiko bw’ibanze bwa addon nyir’imyitwarire ya sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Isuzuma rishingira kuri `WP_CONTENT_DIR`, si agaciro kariho ka `WP_PLUGIN_DIR`. Ibi bituma discovery iguma ihamye igihe multi-tenancy cyangwa indi code ya early bootstrap ihinduye constants z’ububiko bwa plugin mu gihe cya sunrise.

Ntuhindure dosiye `wp-content/sunrise.php` yakozwe mu buryo butaziguye. Loader ituma code yihariye yagura imyitwarire ya sunrise idakopoye ngo ihindure core sunrise file Ultimate Multisite ishyiraho ikanavugurura.

## Hooks na filters biboneka {#hooks-and-filters-available}

Dosiye za sunrise za addon zikora nyuma y’uko domain mapping ya Ultimate Multisite imaze gutangizwa kandi mbere y’uko WordPress itangiza `ms_loaded`. Kuri iyi ntambwe dosiye ya sunrise ishobora:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- gusobanura constants zo mu gihe cya sunrise nka `BLOG_ID_CURRENT_SITE` igihe bikenewe;
- gusoma helper state ya sunrise ya Ultimate Multisite, harimo routing state ikoreshwa n’imikoranire ya multi-tenancy.

Ultimate Multisite itangiza `wu_sunrise_loaded` nyuma y’uko sunrise loader yayo irangije. Koresha icyo action kuri code ikwiye gukora nyuma y’uko sunrise bootstrap irangiye ariko ikomeza kuba iya sunrise lifecycle.

Hamagara gusa functions zamaze gutangizwa mu cyiciro cya sunrise. Irinde akazi gasaba database cyane, template rendering, HTTP requests, na code yibwira ko urutonde rusanzwe rwo gutangiza plugin rwarangiye.

## Urugero ruto cyane {#minimal-example}

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

Nyuma yo gushyira dosiye ahakwiye, fungura domain yahawe mapping na URL ya main-site itahawe mapping kugira ngo wemeze ko paths zombi zigikora bootstrap neza.
