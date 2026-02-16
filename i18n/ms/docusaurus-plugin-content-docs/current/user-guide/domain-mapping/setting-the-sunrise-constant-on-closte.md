---
title: Menetapkan Pemalar Sunrise pada Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Menetapkan pemalar Sunrise kepada true di Closte

Sesetengah penyedia hos mengunci fail wp-config.php atas sebab keselamatan. Ini bermakna Ultimate Multisite tidak dapat mengedit fail tersebut secara automatik untuk memasukkan pemalar yang diperlukan bagi membolehkan pemetaan domain dan ciri-ciri lain berfungsi. Closte adalah salah satu hos yang mengenakan sekatan sedemikian.

Walau bagaimanapun, Closte menyediakan cara untuk menambah pemalar ke dalam wp-config.php dengan selamat. Anda hanya perlu mengikuti langkah-langkah di bawah:

## Di dashboard Closte

Pertama, [log masuk ke akaun Closte anda](https://app.closte.com/), klik pada menu Sites, kemudian klik pada pautan Dashboard untuk laman yang sedang anda usahakan:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Anda akan melihat beberapa item menu baharu di sebelah kiri skrin. Pergi ke halaman **Settings** menggunakan menu tersebut:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Kemudian, di halaman **Settings**, cari tab WP-Config, dan kemudian cari ruangan "Additional wp-config.php content" dalam tab tersebut:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Untuk pemasangan Ultimate Multisite, anda perlu menambah pemalar sunrise ke dalam ruangan tersebut. Cuma tambah baris baharu dan tampal baris di bawah. Selepas itu, klik butang **Save All**.

define('SUNRISE', true);

Itu sahaja, semuanya sudah siap. Kembali ke wizard pemasangan Ultimate Multisite dan muat semula halaman untuk meneruskan proses.
