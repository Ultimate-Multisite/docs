---
title: Mengatur Konstanta Sunrise di Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Mengatur konstanta Sunrise menjadi true di Closte

Beberapa penyedia hosting mengunci file wp-config.php demi alasan keamanan. Artinya, Ultimate Multisite tidak bisa mengedit file tersebut secara otomatis untuk menambahkan konstanta yang diperlukan agar fitur domain mapping dan fitur lainnya bisa berjalan. Closte adalah salah satu penyedia hosting seperti itu.

Namun, Closte menyediakan cara untuk menambahkan konstanta ke wp-config.php dengan aman. Anda hanya perlu mengikuti langkah-langkah berikut:

## Di dashboard Closte

Pertama, [masuk ke akun Closte Anda](https://app.closte.com/), klik menu Sites, lalu klik tautan Dashboard pada situs yang sedang Anda kelola:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Anda akan melihat beberapa menu baru di sisi kiri layar. Buka halaman **Settings** menggunakan menu tersebut:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Kemudian, di halaman **Settings**, cari tab WP-Config, lalu temukan kolom "Additional wp-config.php content" pada tab tersebut:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Dalam proses instalasi Ultimate Multisite, Anda perlu menambahkan konstanta sunrise ke kolom tersebut. Cukup tambahkan baris baru dan tempelkan kode di bawah ini. Setelah itu, klik tombol **Save All**.

define('SUNRISE', true);

Selesai, semuanya sudah siap. Kembali ke wizard instalasi Ultimate Multisite dan refresh halaman untuk melanjutkan prosesnya.
