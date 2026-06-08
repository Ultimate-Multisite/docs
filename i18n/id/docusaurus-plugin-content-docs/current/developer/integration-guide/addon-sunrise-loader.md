---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 menambahkan pemuat ekstensi sunrise untuk add-on dan integrasi custom MU-plugin yang perlu berjalan selama proses *bootstrapping* sunrise WordPress tanpa harus mengedit file `wp-content/sunrise.php` yang sudah dibuat.

## Kapan menggunakannya

Gunakan ekstensi sunrise jika integrasi Anda harus berjalan sebelum *plugin* biasa dimuat, misalnya untuk *custom domain routing*, penanganan permintaan spesifik *host*, atau penyesuaian *network bootstrap* awal.

Untuk integrasi normal, lebih baik menggunakan *plugin* WordPress biasa, MU-plugin, dan *hook* Ultimate Multisite yang sudah didokumentasikan. Kode sunrise berjalan sangat awal dan harus tetap kecil, defensif, dan tidak bergantung pada *dependency* eksternal.

## Konvensi penamaan file

Buat file PHP bernama `sunrise.php` di direktori add-on yang namanya diawali dengan `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Pemuat ini akan memindai direktori *plugins* untuk pola ini:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

File yang cocok akan dimuat secara berurutan berdasarkan abjad dari *path* add-on.

## Tempat meletakkan file

Letakkan file tersebut di direktori utama add-on yang memiliki perilaku sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Pemindaian ini dihitung relatif terhadap `WP_CONTENT_DIR`, bukan nilai `WP_PLUGIN_DIR` saat ini. Ini menjaga penemuan file tetap stabil ketika *multi-tenancy* atau kode *bootstrap* awal lainnya mengubah konstanta direktori *plugin* selama proses sunrise.

Jangan pernah mengedit file `wp-content/sunrise.php` yang dibuat secara langsung. Pemuat ini memungkinkan kode kustom memperluas perilaku sunrise tanpa harus mem-*fork* file sunrise inti yang diinstal dan diperbarui oleh Ultimate Multisite.

## *Hooks* dan *filter* yang tersedia

File sunrise add-on berjalan setelah pemetaan domain Ultimate Multisite dimuat dan sebelum WordPress memicu `ms_loaded`. Pada titik ini, file sunrise dapat:

- membaca atau menimpa `$current_site` dan `$current_blog`;
- mengakses `$wpdb` setelah konfigurasi *database* dimuat;
- mendefinisikan konstanta waktu sunrise seperti `BLOG_ID_CURRENT_SITE` jika diperlukan;
- membaca status *helper* sunrise Ultimate Multisite, termasuk status *routing* yang digunakan oleh integrasi *multi-tenancy*.

Ultimate Multisite memicu `wu_sunrise_loaded` setelah pemuat sunrise-nya selesai. Gunakan *action* ini untuk kode yang seharusnya berjalan setelah *bootstrap* sunrise selesai tetapi masih termasuk dalam siklus hidup sunrise.

Hanya panggil fungsi yang sudah dimuat pada fase sunrise. Hindari pekerjaan yang berat pada *database*, *rendering* *template*, permintaan HTTP, dan kode yang mengasumsikan urutan pemuatan *plugin* normal telah selesai.

## Contoh minimal

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

Setelah men-deploy file, muat domain yang dipetakan dan URL *main-site* yang tidak dipetakan untuk memastikan kedua jalur masih melakukan *bootstrap* dengan benar.
