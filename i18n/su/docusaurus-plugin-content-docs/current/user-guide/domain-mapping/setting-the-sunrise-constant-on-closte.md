---
title: Ngaturan Konstanta Sunrise di Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Ngatur konstanta Sunrise jadi true di Closte

Beberapa penyedia hosting mengunci file wp-config.php karena alasan keamanan. Artinya, Ultimate Multisite tidak bisa otomatis mengedit file tersebut untuk memasukkan konstanta yang diperlukan agar pemetaan domain dan fitur lainnya bisa berfungsi. Closte adalah salah satu host seperti itu.

Namun, Closte menawarkan cara untuk menambahkan konstanta ke wp-config.php dengan cara yang aman. Anda hanya perlu ikuti langkah-langkah di bawah ini:

## Di dashboard Closte

Pertama, [masuk ke akun Closte Anda](https://app.closte.com/), klik menu Sites, lalu klik tautan Dashboard di situs tempat Anda sedang mengerjakan instalasi:

<!-- Screenshot tidak tersedia: dashboard Closte menunjukkan menu Sites dan tautan Dashboard -->

Anda akan disajikan sejumlah item menu baru di sisi kiri layar. Navigasikan ke halaman **Settings** menggunakan menu tersebut:

<!-- Screenshot tidak tersedia: menu sidebar kiri Closte menunjukkan opsi Settings -->

Kemudian, di **Settings**, cari tab WP-Config, lalu cari kolom "Additional wp-config.php content" di tab itu:

<!-- Screenshot tidak tersedia: halaman Settings Closte dengan tab WP-Config menunjukkan kolom Additional wp-config.php content -->

Dalam konteks instalasi Ultimate Multisite, Anda perlu menambahkan konstanta sunrise ke kolom tersebut. Cukup tambahkan baris baru dan tempelkan baris di bawah ini. Setelah itu, klik tombol **Save All**.

define('SUNRISE', true);

Sudah selesai, semuanya beres. Kembali ke wizard instalasi Ultimate Multisite dan muat ulang halaman untuk melanjutkan prosesnya.
