---
title: Pamuat Berkas Sunrise Panglengkep
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 nambihan pamuat ekstensi sunrise pikeun add-on jeung integrasi MU-plugin kustom anu kudu jalan salila bootstrapping sunrise WordPress tanpa ngédit file `wp-content/sunrise.php` anu dihasilkeun.

## Iraha kudu dipaké {#when-to-use-it}

Paké ekstensi sunrise lamun integrasi anjeun kudu jalan saméméh plugin biasa dimuat, saperti routing domain kustom, pananganan request husus-host, atawa pangaturan bootstrap jaringan awal.

Pikeun integrasi normal, leuwih hadé paké plugin WordPress biasa, MU-plugin, jeung hooks Ultimate Multisite anu didokuméntasikeun. Code sunrise jalan kacida mimiti pisan jeung kudu tetep leutik, defensif, sarta bébas tina dépendensi.

## Konvénsi ngaran file {#file-naming-convention}

Jieun file PHP ngaranna `sunrise.php` dina diréktori addon anu ngaranna dimimitian ku `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Pamuat nyeken diréktori plugin pikeun pola ieu:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

File anu cocog dimuat nurutkeun urutan alfabet dumasar kana path addon.

## Tempat nempatkeun file {#where-to-place-the-file}

Teundeun file dina diréktori akar addon anu miboga paripolah sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Panyekenan diréngsékeun relatif ka `WP_CONTENT_DIR`, lain kana nilai ayeuna tina `WP_PLUGIN_DIR`. Ieu ngajaga panemuan tetep stabil nalika multi-tenancy atawa code bootstrap awal séjénna ngarobah konstanta diréktori plugin salila sunrise.

Ulah ngédit file `wp-content/sunrise.php` anu dihasilkeun sacara langsung. Pamuat ngamungkinkeun code kustom manjangkeun paripolah sunrise tanpa forking file sunrise inti anu dipasang jeung diénggalkeun ku Ultimate Multisite.

## Hooks jeung filters anu sadia {#hooks-and-filters-available}

File sunrise addon jalan sanggeus pemetaan domain Ultimate Multisite geus dimuat jeung saméméh WordPress micu `ms_loaded`. Dina titik ieu file sunrise bisa:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- nangtukeun konstanta waktu-sunrise saperti `BLOG_ID_CURRENT_SITE` lamun diperlukeun;
- maca kaayaan helper sunrise Ultimate Multisite, kaasup kaayaan routing anu dipaké ku integrasi multi-tenancy.

Ultimate Multisite micu `wu_sunrise_loaded` sanggeus pamuat sunrise-na réngsé. Paké action éta pikeun code anu kudu jalan sanggeus bootstrap sunrise réngsé tapi masih kaasup kana siklus hirup sunrise.

Ngan nelepon fungsi anu geus dimuat dina fase sunrise. Hindarkeun pagawéan beurat-database, rendering template, request HTTP, jeung code anu nganggap urutan muat plugin normal geus réngsé.

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

Sanggeus ngadeploy file, muat domain anu geus dipetakeun jeung URL situs utama anu teu dipetakeun pikeun mastikeun duanana path tetep bootstrap kalayan bener.
