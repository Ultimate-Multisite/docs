---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 menambah pemuat (loader) sambungan sunrise untuk add-on dan integrasi custom MU-plugin yang perlu berjalan semasa proses permulaan (bootstrapping) WordPress sunrise tanpa perlu menyunting fail `wp-content/sunrise.php` yang dijana.

## Bila menggunakannya {#when-to-use-it}

Gunakan sambungan sunrise apabila integrasi anda mesti berjalan sebelum plugin biasa dimuatkan, seperti perutean domain custom, pengendalian permintaan spesifik hos, atau pelarasan awal bootstrapping network.

Untuk integrasi biasa, lebih baik gunakan plugin WordPress biasa, MU-plugin, dan hook Ultimate Multisite yang telah didokumentasikan. Kod sunrise berjalan sangat awal dan haruslah ringkas, defensif, dan bebas daripada kebergantungan (dependency-free).

## Konvensyen penamaan fail {#file-naming-convention}

Cipta fail PHP bernama `sunrise.php` dalam direktori add-on yang namanya bermula dengan `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Pemuat ini akan mengimbas direktori plugins untuk corak ini:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Fail yang sepadan akan dimuatkan mengikut urutan abjad mengikut laluan add-on.

## Tempat meletakkan fail {#where-to-place-the-file}

Letakkan fail tersebut dalam direktori akar (root directory) add-on yang memiliki tingkah laku sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Pengimbasan ini diselesaikan relatif kepada `WP_CONTENT_DIR`, bukan nilai semasa `WP_PLUGIN_DIR`. Ini memastikan penemuan (discovery) kekal stabil apabila multi-tenancy atau kod bootstrapping awal lain mengubah pemalar direktori plugin semasa sunrise.

Jangan sunting fail `wp-content/sunrise.php` yang dijana secara langsung. Pemuat ini membenarkan kod custom untuk memperluaskan tingkah laku sunrise tanpa perlu membuat *fork* fail sunrise teras yang dipasang dan dikemas kini oleh Ultimate Multisite.

## Hook dan filter yang tersedia {#hooks-and-filters-available}

Fail sunrise add-on berjalan selepas pemetaan domain Ultimate Multisite dimuatkan dan sebelum WordPress mencetuskan `ms_loaded`. Pada peringkat ini, fail sunrise boleh:

- membaca atau menimpa `$current_site` dan `$current_blog`;
- mengakses `$wpdb` selepas konfigurasi pangkalan data dimuatkan;
- mentakrifkan pemalar masa sunrise seperti `BLOG_ID_CURRENT_SITE` apabila diperlukan;
- membaca status bantuan sunrise Ultimate Multisite, termasuk status perutean yang digunakan oleh integrasi multi-tenancy.

Ultimate Multisite mencetuskan `wu_sunrise_loaded` selepas pemuat sunrise-nya selesai. Gunakan action ini untuk kod yang sepatutnya berjalan selepas bootstrapping sunrise selesai tetapi masih milik kitaran hayat sunrise.

Hanya panggil fungsi yang sudah dimuatkan dalam fasa sunrise. Elakkan kerja yang berat pada pangkalan data, rendering template, permintaan HTTP, dan kod yang mengandaikan urutan muat plugin biasa telah selesai.

## Contoh minimum {#minimal-example}

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

Selepas mendeploy fail, muatkan domain yang dipetakan dan URL main-site yang tidak dipetakan untuk mengesahkan kedua-dua laluan masih melakukan bootstrapping dengan betul.
