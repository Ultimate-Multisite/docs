---
title: Luchdaichear Faidhle Sunrise an Tuilleadain
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Luchdaiche Faidhle Addon Sunrise

Tha Ultimate Multisite 2.8.0 a’ cur luchdaiche leudachaidh sunrise ris airson add-ons agus amalachaidhean MU-plugin gnàthaichte a dh’fheumas ruith rè tòiseachadh sunrise WordPress gun am faidhle `wp-content/sunrise.php` a chaidh a ghineadh a dheasachadh.

## Cuin a chleachdas tu e {#when-to-use-it}

Cleachd leudachadh sunrise nuair a dh’fheumas an t-amalachadh agad ruith mus tèid plugins àbhaisteach a luchdadh, leithid sligheachadh àrainnean gnàthaichte, làimhseachadh iarrtasan sònraichte do dh’òstair, no atharrachaidhean tràtha air tòiseachadh lìonra.

Airson amalachaidhean àbhaisteach, b’ fheàrr leat plugins WordPress àbhaisteach, MU-plugins, agus na dubhain Ultimate Multisite clàraichte. Bidh còd sunrise a’ ruith glè thràth agus bu chòir dha fuireach beag, dìonach, agus saor bho eisimeileachdan.

## Co-ghnàthachadh ainmeachadh fhaidhlichean {#file-naming-convention}

Cruthaich faidhle PHP leis an ainm `sunrise.php` ann an eòlaire addon aig a bheil ainm a’ tòiseachadh le `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Bidh an luchdaiche a’ sganadh eòlaire nam plugins airson a’ phàtrain seo:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Tha faidhlichean a tha a’ maidseadh air an luchdadh ann an òrdugh na h-aibidil a rèir slighe an addon.

## Far an cuir thu am faidhle {#where-to-place-the-file}

Cuir am faidhle ann am prìomh-eòlaire an addon leis a bheil an giùlan sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Tha an sgan air fhuasgladh an coimeas ri `WP_CONTENT_DIR`, chan ann ri luach làithreach `WP_PLUGIN_DIR`. Cumaidh seo lorg seasmhach nuair a dh’atharraicheas ioma-mhàladaireachd no còd tòiseachaidh tràth eile cunbhalachdan eòlaire plugin rè sunrise.

Na deasaich am faidhle `wp-content/sunrise.php` a chaidh a ghineadh gu dìreach. Leigidh an luchdaiche le còd gnàthaichte giùlan sunrise a leudachadh gun am faidhle sunrise bunaiteach a stàlaicheas agus a dh’ùraicheas Ultimate Multisite a sgaradh.

## Dubhain agus criathragan rim faighinn {#hooks-and-filters-available}

Bidh faidhlichean sunrise addon a’ ruith às dèidh do mhapadh àrainn Ultimate Multisite luchdadh agus mus loisg WordPress `ms_loaded`. Aig an ìre seo, faodaidh faidhle sunrise:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- cunbhalachdan àm-sunrise leithid `BLOG_ID_CURRENT_SITE` a mhìneachadh nuair a bhios feum orra;
- staid cuideachaidh sunrise Ultimate Multisite a leughadh, a’ gabhail a-steach staid sligheachaidh a chleachdar le amalachaidhean ioma-mhàladaireachd.

Bidh Ultimate Multisite a’ losgadh `wu_sunrise_loaded` às dèidh don luchdaiche sunrise aige crìochnachadh. Cleachd an action sin airson còd a bu chòir ruith às dèidh do thòiseachadh sunrise a bhith coileanta ach a bhuineas fhathast do chuairt-bheatha sunrise.

Na gairm ach gnìomhan a tha air an luchdadh mu thràth anns an ìre sunrise. Seachain obair throm air stòr-dàta, renderadh theamplaidean, iarrtasan HTTP, agus còd a tha a’ gabhail ris gu bheil òrdugh luchdadh plugin àbhaisteach air crìochnachadh.

## Eisimpleir as lugha {#minimal-example}

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

Às dèidh dhut am faidhle a chur an gnìomh, luchdaich àrainn mhapta agus URL prìomh-làraich gun mhapadh gus dearbhadh gu bheil an dà shlighe fhathast a’ tòiseachadh gu ceart.
