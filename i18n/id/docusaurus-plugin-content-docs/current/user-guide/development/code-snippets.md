---
title: Potongan Kode
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Cuplikan Kode untuk v2

Pada dasarnya, cuplikan kode untuk **WordPress** digunakan untuk melakukan berbagai aksi yang mungkin membutuhkan plugin kecil tersendiri. Cuplikan kode seperti ini ditempatkan di salah satu file inti WordPress atau file tema (umumnya file functions.php dari tema Anda) atau dapat digunakan sebagai MU plugin.

Dalam artikel ini kami akan menunjukkan tiga cuplikan kode yang dapat digunakan dengan **Ultimate Multisite v2** :

  * [**Mengubah posisi menu item Account**](#changing-the-position-of-the-account-menu-item)

  * [**Cara memeriksa apakah pengguna berada di plan tertentu dan/atau memiliki langganan aktif**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Memperbaiki masalah CORS dengan Font-Icons di domain yang dipetakan**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Mengubah posisi menu item Account

Untuk mengubah posisi menu item Account di Dashboard klien Anda, cukup tambahkan cuplikan kode berikut ke functions.php tema aktif situs utama Anda. Anda juga bisa menempatkan cuplikan ini di dalam salah satu mu-plugins atau plugin kustom Anda.

add_filter('wu_my_account_menu_position', function() { return 10; // Sesuaikan nilai ini untuk menempatkan menu di posisi yang diinginkan.

## Cara memeriksa apakah pengguna berada di plan tertentu dan/atau memiliki langganan aktif

Sebagai admin jaringan, Anda mungkin perlu membuat fungsi kustom yang akan menjalankan aksi dasar atau menyediakan layanan/fitur untuk kelompok pelanggan atau pengguna akhir tertentu, berdasarkan status langganan mereka dan plan yang mereka ikuti.

Fungsi bawaan Ultimate Multisite ini akan membantu Anda melakukannya.

Untuk memeriksa apakah pengguna adalah anggota dari plan tertentu, Anda dapat menggunakan fungsi:

wu_has_plan($user_id, $plan_id)

Untuk memeriksa apakah langganan aktif, Anda dapat menggunakan fungsi:

wu_is_active_subscriber($user_id)

Berikut adalah contoh cuplikan yang memeriksa apakah pengguna saat ini berada di plan tertentu (_Plan ID 50_) dan apakah langganan pengguna tersebut aktif.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // PENGGUNA ADALAH ANGGOTA PLAN DAN LANGGANANNYA AKTIF, LAKUKAN SESUATU} else { // PENGGUNA BUKAN ANGGOTA PLAN -- ATAU -- LANGGANANNYA TIDAK AKTIF, LAKUKAN HAL LAIN} // end if;

Perlu diingat bahwa _**wu_has_plan**_ membutuhkan "Plan ID" agar dapat berfungsi.

Untuk mendapatkan ID sebuah plan, Anda dapat pergi ke **Ultimate Multisite > Products**. ID setiap produk akan ditampilkan di sisi kanan tabel.

Perlu diingat bahwa pengguna hanya dapat berlangganan **Plan**, bukan Package atau Service, karena keduanya hanyalah add-on untuk sebuah **Plan**.

![Daftar produk yang menampilkan ID plan](/img/admin/products-list.png)

## Memperbaiki masalah CORS dengan Font-Icons di domain yang dipetakan
## Memperbaiki masalah CORS dengan Font-Icons di domain yang dipetakan

Setelah memetakan domain ke sub-site, Anda mungkin menemukan bahwa situs tersebut mengalami masalah dalam memuat font kustom. Hal ini disebabkan oleh pemblokiran cross-origin pada pengaturan server Anda.

Karena file font hampir selalu dimuat langsung dari CSS, plugin domain mapping kami tidak dapat menulis ulang URL untuk menggunakan domain yang dipetakan alih-alih domain asli, jadi untuk memperbaiki masalah ini, Anda perlu mengubah file konfigurasi server Anda.

Berikut adalah cuplikan kode untuk memperbaiki masalah ini pada Apache dan NGINX. Perubahan ini membutuhkan pengetahuan lanjutan tentang file konfigurasi server (file .htaccess dan file konfigurasi NGINX). Jika Anda tidak nyaman melakukan perubahan ini sendiri, kirimkan halaman ini ke tim support penyedia hosting Anda ketika meminta bantuan.

### Apache

Pada file .htaccess Anda, tambahkan:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

Pada file konfigurasi server Anda (lokasinya berbeda-beda tergantung server), tambahkan:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
