---
title: Hleðari fyrir Sunrise-skrá viðbótar
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Sunrise-skráarhleðari fyrir viðbót {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 bætir við sunrise-viðbótahleðara fyrir viðbætur og sérsniðnar MU plugin-samþættingar sem þurfa að keyra á meðan WordPress sunrise-ræsingu stendur, án þess að breyta mynduðu `wp-content/sunrise.php` skránni.

## Hvenær á að nota hann {#when-to-use-it}

Notaðu sunrise-viðbót þegar samþættingin þín þarf að keyra áður en venjuleg plugin eru hlaðin, svo sem fyrir sérsniðna lénaleiðingu, hýsilssértæka meðhöndlun beiðna eða snemmbúnar lagfæringar á netræsingu.

Fyrir venjulegar samþættingar skaltu frekar nota venjuleg WordPress plugin, MU-plugin og skjalfestu Ultimate Multisite-krækjurnar. Sunrise-kóði keyrir mjög snemma og ætti að vera lítill, varfærinn og án háðra eininga.

## Nafnavenja skráa {#file-naming-convention}

Búðu til PHP-skrá sem heitir `sunrise.php` í viðbótarmöppu þar sem nafnið byrjar á `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Hleðarinn skannar plugins-möppuna eftir þessu mynstri:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Samsvarandi skrár eru hlaðnar í stafrófsröð eftir slóð viðbótar.

## Hvar á að setja skrána {#where-to-place-the-file}

Settu skrána í rótarmöppu viðbótarinnar sem á sunrise-hegðunina:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skönnunin er leyst miðað við `WP_CONTENT_DIR`, ekki núverandi gildi `WP_PLUGIN_DIR`. Þetta heldur uppgötvun stöðugri þegar fjölleigjendakerfi eða annar snemmbúinn ræsikóði breytir fastum fyrir plugin-möppu á meðan sunrise stendur.

Ekki breyta mynduðu `wp-content/sunrise.php` skránni beint. Hleðarinn leyfir sérsniðnum kóða að útvíkka sunrise-hegðun án þess að kljúfa kjarna-sunrise-skrána sem Ultimate Multisite setur upp og uppfærir.

## Tiltækar krækjur og síur {#hooks-and-filters-available}

Sunrise-skrár viðbóta keyra eftir að lénavörpun Ultimate Multisite hefur hlaðist og áður en WordPress keyrir `ms_loaded`. Á þessum tímapunkti getur sunrise-skrá:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- skilgreint fasta á sunrise-tíma, svo sem `BLOG_ID_CURRENT_SITE`, þegar þess er þörf;
- lesið hjálparstöðu Ultimate Multisite fyrir sunrise, þar á meðal leiðingarstöðu sem notuð er af fjölleigjendasamþættingum.

Ultimate Multisite keyrir `wu_sunrise_loaded` eftir að sunrise-hleðari þess lýkur. Notaðu þá aðgerð fyrir kóða sem á að keyra eftir að sunrise-ræsingu er lokið en tilheyrir samt sunrise-lífsferlinu.

Kallaðu aðeins á föll sem þegar eru hlaðin í sunrise-fasanum. Forðastu gagnagrunnsþunga vinnu, sniðmátsbirtingu, HTTP-beiðnir og kóða sem gerir ráð fyrir að venjulegri hleðsluröð plugin sé lokið.

## Lágmarksdæmi {#minimal-example}

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

Eftir að skránni hefur verið komið fyrir skaltu hlaða vörpuðu léni og óvörpuðu vefslóð aðalvefs til að staðfesta að báðar slóðir ræsist enn rétt.
