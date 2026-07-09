---
title: Pamuat Berkas Sunrise Tambahan
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Pamuat Berkas Sunrise Addon {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 nambahake pamuat ekstensi sunrise kanggo tambahan lan integrasi MU-plugin kustom sing perlu mlaku nalika bootstrapping sunrise WordPress tanpa nyunting berkas `wp-content/sunrise.php` sing digawé.

## Kapan digunakake {#when-to-use-it}

Gunakake ekstensi sunrise nalika integrasi sampeyan kudu mlaku sadurunge plugin biasa dimuat, kayata routing domain kustom, panganggepan panjaluk khusus host, utawa panyesuaian bootstrap jaringan awal.

Kanggo integrasi normal, luwih becik gunakake plugin WordPress biasa, MU-plugins, lan hook Ultimate Multisite sing wis didokumentasèkaké. Kode sunrise mlaku banget awal lan kudu tetep cilik, defensif, lan tanpa ketergantungan.

## Konvensi jeneng berkas {#file-naming-convention}

Gawe berkas PHP kanthi jeneng `sunrise.php` ing direktori addon sing jenenge diwiwiti nganggo `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Pamuat mindai direktori plugin kanggo pola iki:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Berkas sing cocog dimuat miturut urutan alfabetis adhedhasar path addon.

## Panggonan kanggo nyelehake berkas {#where-to-place-the-file}

Selehake berkas ing direktori root saka addon sing nduwèni prilaku sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Pindai iki dirampungake relatif marang `WP_CONTENT_DIR`, dudu nilai saiki saka `WP_PLUGIN_DIR`. Iki njaga panemuan tetep stabil nalika multi-tenancy utawa kode bootstrap awal liyane ngganti konstanta direktori plugin nalika sunrise.

Aja nyunting langsung berkas `wp-content/sunrise.php` sing digawé. Pamuat iki ngidini kode kustom ngembangake prilaku sunrise tanpa nge-fork berkas sunrise inti sing dipasang lan dianyari dening Ultimate Multisite.

## Hook lan filter sing kasedhiya {#hooks-and-filters-available}

Berkas sunrise addon mlaku sawisé pemetaan domain Ultimate Multisite dimuat lan sadurunge WordPress micu `ms_loaded`. Ing titik iki berkas sunrise bisa:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- netepake konstanta wektu-sunrise kayata `BLOG_ID_CURRENT_SITE` nalika dibutuhake;
- maca kahanan pambantu sunrise Ultimate Multisite, kalebu kahanan routing sing digunakake dening integrasi multi-tenancy.

Ultimate Multisite micu `wu_sunrise_loaded` sawisé pamuat sunrise rampung. Gunakake action kuwi kanggo kode sing kudu mlaku sawisé bootstrap sunrise rampung nanging isih kalebu ing siklus urip sunrise.

Mung panggil fungsi sing wis dimuat ing fase sunrise. Aja nindakake kerja sing abot ing database, rendering template, panjaluk HTTP, lan kode sing nganggep urutan muat plugin normal wis rampung.

## Conto minimal {#minimal-example}

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

Sawisé masang berkas kasebut, muat domain sing wis dipetakake lan URL situs utama sing durung dipetakake kanggo mesthekake loro path isih bootstrap kanthi bener.
