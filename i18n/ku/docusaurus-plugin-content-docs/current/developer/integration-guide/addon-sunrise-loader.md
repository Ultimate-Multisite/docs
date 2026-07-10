---
title: Barkera pelê Sunrise ya pêvekê
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Barkêşa Pelê Sunrise ya Addon {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 ji bo add-on û yekgirtinên taybet ên MU-plugin barkêşeke dirêjkirina sunrise zêde dike ku divê di dema destpêkirina sunrise ya WordPress de bêne xebitandin, bêyî ku pelê çêkirî `wp-content/sunrise.php` were sererastkirin.

## Kengî wê bi kar bînî {#when-to-use-it}

Dema yekgirtina te divê berî barkirina pluginên asayî bixebite, wek rêkirina domaina taybet, rêvebirina daxwazên taybet-bi-host, an sererastkirinên zû yên destpêkirina torê, dirêjkirina sunrise bi kar bîne.

Ji bo yekgirtinên asayî, pluginên WordPress ên asayî, MU-plugin, û hookên belgekirî yên Ultimate Multisite tercîh bike. Koda sunrise pir zû dixebite û divê biçûk, parastî, û bê girêdan bimîne.

## Rêbaza navkirina pelê {#file-naming-convention}

Pelekî PHP bi navê `sunrise.php` di pelrêça addonê de çêke ku navê wê bi `ultimate-multisite-` dest pê dike:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Barkêş pelrêça pluginan ji bo vê şêwazê dipirse:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Pelên li hev tên li gor rêya addonê bi rêza alfebeyî tên barkirin.

## Pelê li ku derê danîn {#where-to-place-the-file}

Pelê di pelrêça bingehîn a addonê de bi cih bike ku xwediyê tevgera sunrise ye:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Lêgerîn li gor `WP_CONTENT_DIR` tê çareserkirin, ne li gor nirxa niha ya `WP_PLUGIN_DIR`. Ev yek keşfê sabît dihêle dema multi-tenancy an koda din a destpêkirina zû di dema sunrise de sabîtên pelrêça pluginan diguherîne.

Pelê çêkirî `wp-content/sunrise.php` rasterast sererast neke. Barkêş dihêle koda taybet tevgera sunrise dirêj bike, bêyî ku pela bingehîn a sunrise ku Ultimate Multisite saz dike û nû dike were veqetandin.

## Hook û filterên berdest {#hooks-and-filters-available}

Pelên sunrise ên addonê piştî ku nexşekirina domainê ya Ultimate Multisite hatiye barkirin û berî ku WordPress `ms_loaded` bişewitîne dixebitin. Di vê astê de pelekî sunrise dikare:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- dema pêwîst be sabîtên dema-sunrise wek `BLOG_ID_CURRENT_SITE` diyar bike;
- rewşa alîkarê sunrise ya Ultimate Multisite bixwîne, di nav de rewşa rêkirinê ku ji aliyê yekgirtinên multi-tenancy ve tê bikaranîn.

Ultimate Multisite piştî ku barkêşa sunrise ya wê bi dawî dibe `wu_sunrise_loaded` dişewitîne. Ji bo kodê ku divê piştî temambûna destpêkirina sunrise bixebite lê hîn jî beşek ji jiyana sunrise be, wê çalakiyê bi kar bîne.

Tenê fonksiyonên ku berê di qonaxa sunrise de hatine barkirin bang bike. Ji xebata giran a databeysê, renderkirina şablonan, daxwazên HTTP, û kodê ku pê bawer e rêza barkirina pluginên asayî temam bûye dûr bike.

## Nimûneya herî kêm {#minimal-example}

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

Piştî belavkirina pelê, domainekî nexşekirî û URL-eke malpera sereke ya nenexşekirî bar bike da ku piştrast bikî her du rê hîn jî bi rastî dest pê dikin.
