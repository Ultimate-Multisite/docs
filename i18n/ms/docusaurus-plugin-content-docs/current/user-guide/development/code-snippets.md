---
title: Coretan Kod
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Coretan Kod untuk v2

Pada dasarnya, coretan kod untuk **WordPress** digunakan untuk melakukan tindakan tertentu yang mungkin memerlukan plugin kecil khusus. Coretan kod seperti ini diletakkan dalam salah satu fail teras WordPress atau fail tema (kebiasaannya fail functions.php tema anda) atau ia boleh digunakan sebagai MU plugin.

Dalam artikel ini kami akan tunjukkan tiga coretan kod yang boleh digunakan dengan **Ultimate Multisite v2** :

  * [**Menukar kedudukan item menu Akaun**](#changing-the-position-of-the-account-menu-item)

  * [**Cara menyemak sama ada pengguna berada dalam pelan tertentu dan/atau mempunyai langganan aktif**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Membetulkan isu CORS dengan Font-Icon dalam domain yang dipetakan**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Menukar kedudukan item menu Akaun

Untuk menukar kedudukan item menu Akaun pada Dashboard pelanggan anda, tambahkan coretan kod berikut ke dalam functions.php tema aktif laman utama anda. Anda juga boleh meletakkan coretan ini dalam salah satu mu-plugins atau plugin tersuai anda.

add_filter('wu_my_account_menu_position', function() { return 10; // Ubah nilai ini untuk meletakkan menu pada kedudukan yang dikehendaki.

## Cara menyemak sama ada pengguna berada dalam pelan tertentu dan/atau mempunyai langganan aktif

Sebagai pentadbir rangkaian, anda mungkin perlu mencipta fungsi tersuai yang akan melakukan tindakan asas atau menyediakan perkhidmatan/ciri kepada kumpulan pelanggan atau pengguna akhir yang terpilih, berdasarkan status langganan mereka dan pelan yang mereka langgan.

Fungsi asli Ultimate Multisite ini akan membantu anda dengan perkara tersebut.

Untuk menyemak sama ada pengguna adalah ahli pelan tertentu, anda boleh menggunakan fungsi:

wu_has_plan($user_id, $plan_id)

Untuk menyemak sama ada langganan adalah aktif, anda boleh menggunakan fungsi:

wu_is_active_subscriber($user_id)

Di bawah adalah contoh coretan yang menyemak sama ada pengguna semasa berada dalam pelan tertentu (_Plan ID 50_) dan sama ada langganan pengguna tersebut aktif.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // PENGGUNA ADALAH AHLI PELAN DAN LANGGANANNYA AKTIF, LAKUKAN SESUATU} else { // PENGGUNA BUKAN AHLI PELAN -- ATAU -- LANGGANANNYA TIDAK AKTIF, LAKUKAN PERKARA LAIN} // end if;

Ambil perhatian bahawa _**wu_has_plan**_ memerlukan "Plan ID" untuk berfungsi.

Untuk mendapatkan ID sesuatu pelan, anda boleh pergi ke **Ultimate Multisite > Products**. ID setiap produk akan dipaparkan di sebelah kanan jadual.

Ambil perhatian bahawa pengguna hanya boleh melanggan **Plan**, bukan Package atau Service, kerana ia hanyalah tambahan untuk **Plan**.

![Senarai produk menunjukkan ID pelan](/img/admin/products-list.png)

## Membetulkan isu CORS dengan Font-Icon dalam domain yang dipetakan
## Membetulkan isu CORS dengan Font-Icon dalam domain yang dipetakan

Selepas memetakan domain ke sub-site, anda mungkin mendapati laman tersebut menghadapi masalah memuat font tersuai. Ini disebabkan oleh sekatan cross-origin pada tetapan pelayan anda.

Memandangkan fail font hampir selalu dimuat terus dari CSS, plugin pemetaan domain kami tidak dapat menulis semula URL untuk menggunakan domain yang dipetakan berbanding domain asal, jadi untuk membetulkan isu ini, anda perlu mengubah suai fail konfigurasi pelayan anda.

Di bawah adalah coretan kod untuk membetulkan isu ini bagi Apache dan NGINX. Perubahan ini memerlukan pengetahuan lanjutan tentang fail konfigurasi pelayan (fail .htaccess dan fail konfigurasi NGINX). Jika anda tidak selesa untuk membuat perubahan ini sendiri, hantar halaman ini kepada ejen sokongan penyedia hosting anda apabila meminta bantuan.

### Apache

Pada fail .htaccess anda, tambahkan:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

Pada fail konfigurasi pelayan anda (lokasi berbeza mengikut pelayan), tambahkan:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
