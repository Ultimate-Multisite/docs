---
title: Lódálaí Comhad Éirí na Gréine don Bhreiseán
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Luchtóir Comhaid Sunrise Addon

Cuireann Ultimate Multisite 2.8.0 luchtóir síneadh sunrise leis le haghaidh breiseán agus comhtháthuithe saincheaptha MU-plugin ar gá dóibh rith le linn tosaithe sunrise WordPress gan an comhad ginte `wp-content/sunrise.php` a chur in eagar.

## Cathain é a úsáid {#when-to-use-it}

Úsáid síneadh sunrise nuair is gá do do chomhtháthú rith sula lódáiltear gnáth-bhreiseáin, amhail ródú fearainn saincheaptha, láimhseáil iarratais atá sainiúil don óstach, nó coigeartuithe luatha ar thosú an líonra.

Maidir le gnáth-chomhtháthuithe, b’fhearr gnáth-bhreiseáin WordPress, MU-plugins, agus na hooks doiciméadaithe Ultimate Multisite a úsáid. Ritheann cód sunrise an-luath agus ba cheart dó fanacht beag, cosantach, agus saor ó spleáchais.

## Coinbhinsiún ainmniúcháin comhaid {#file-naming-convention}

Cruthaigh comhad PHP darb ainm `sunrise.php` in eolaire breiseáin a bhfuil a ainm ag tosú le `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Scanann an luchtóir eolaire na mbreiseán don phatrún seo:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Lódáiltear comhaid a mheaitseálann in ord aibítre de réir chonair an bhreiseáin.

## Cá háit an comhad a chur {#where-to-place-the-file}

Cuir an comhad i bhfréamh-eolaire an bhreiseáin ar leis iompar sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Réitítear an scanadh i gcoibhneas le `WP_CONTENT_DIR`, ní le luach reatha `WP_PLUGIN_DIR`. Coinníonn sé seo an aimsiú cobhsaí nuair a athraíonn ilthionóntacht nó cód luath tosaithe eile tairisigh eolaire breiseán le linn sunrise.

Ná cuir an comhad ginte `wp-content/sunrise.php` in eagar go díreach. Ligeann an luchtóir do chód saincheaptha iompar sunrise a leathnú gan an croíchomhad sunrise a shíneann Ultimate Multisite agus a nuashonraíonn sé a fhorcáil.

## Hooks agus scagairí atá ar fáil {#hooks-and-filters-available}

Ritheann comhaid sunrise breiseáin tar éis do mhapáil fearainn Ultimate Multisite lódáil agus sula scaoileann WordPress `ms_loaded`. Ag an bpointe seo is féidir le comhad sunrise:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- tairisigh am-sunrise amhail `BLOG_ID_CURRENT_SITE` a shainiú nuair is gá;
- staid chúntóra sunrise Ultimate Multisite a léamh, lena n-áirítear staid ródaithe a úsáideann comhtháthuithe ilthionóntachta.

Scaoileann Ultimate Multisite `wu_sunrise_loaded` tar éis dá luchtóir sunrise críochnú. Úsáid an gníomh sin le haghaidh cóid ar cheart dó rith tar éis tosú sunrise a bheith críochnaithe ach atá fós mar chuid de shaolré sunrise.

Ná glaoigh ach ar fheidhmeanna atá lódáilte cheana sa chéim sunrise. Seachain obair throm ar bhunachar sonraí, rindreáil teimpléid, iarratais HTTP, agus cód a ghlacann leis go bhfuil gnáth-ord lódála breiseán críochnaithe.

## Sampla íosta {#minimal-example}

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

Tar éis an comhad a imscaradh, lódáil fearann mapáilte agus URL príomhshuímh neamh-mhapáilte chun a dheimhniú go dtosaíonn an dá chonair i gceart fós.
