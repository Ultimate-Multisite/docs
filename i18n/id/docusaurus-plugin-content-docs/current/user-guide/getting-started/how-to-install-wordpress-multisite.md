---
title: Cara Menginstal WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Bagaimana Cara Menginstal WordPress Multisite?

WordPress Multisite memungkinkan Anda memiliki jaringan situs dalam satu instalasi. Fitur ini sudah tersedia secara bawaan, tetapi tidak aktif secara default.

:::tip
Ultimate Multisite menyertakan **[Wizard Pengaturan Multisite bawaan](./multisite-setup-wizard)** yang mengotomatisasi seluruh proses ini. Jika Anda sudah menginstal Ultimate Multisite, kami sarankan untuk menggunakan wizard tersebut daripada mengikuti langkah-langkah manual di bawah ini.
:::

Karena Ultimate Multisite adalah plugin khusus jaringan, dalam tutorial ini Anda akan mempelajari cara menginstal dan mengatur WordPress Multisite secara manual. Teks ini berdasarkan [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), dari WPBeginner.

**Hal-hal yang perlu diperhatikan sebelum membuat jaringan multisite Anda:**

  * Gunakan hosting WordPress yang berkualitas! Situs-situs dalam jaringan berbagi sumber daya server yang sama.

  * Jika Anda hanya memiliki beberapa situs dengan traffic rendah, shared hosting mungkin sudah cukup untuk Anda.

  * Sebagian besar **penyedia Managed WordPress hosting** menawarkan Multisite secara langsung (mereka menginstal WordPress dengan Multisite yang sudah diaktifkan dan dikonfigurasi untuk Anda). Ini berlaku untuk WP Engine, Closte, Cloudways, dll. Jika Anda tidak yakin apakah ini berlaku untuk penyedia hosting Anda, hubungi tim dukungan mereka sebelum melanjutkan tutorial ini.

  * Anda juga sebaiknya familiar dengan cara menginstal WordPress dan mengedit file menggunakan FTP.

_**PENTING**_ **:** Jika Anda mengatur jaringan multisite pada website WordPress yang sudah ada, jangan lupa untuk:

  * Membuat backup lengkap dari situs WordPress Anda

  * Menonaktifkan semua plugin di situs Anda dengan pergi ke halaman plugins dan memilih _Deactivate_ dari bulk actions lalu klik _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Untuk mengaktifkan Multisite, pertama hubungkan ke situs Anda menggunakan FTP client atau cPanel file manager, lalu buka file wp-config.php untuk diedit.

Sebelum baris _*That's all, stop editing! Happy blogging.*_, tambahkan kode berikut:

define('WP_ALLOW_MULTISITE', true);

Simpan dan upload file wp-config.php Anda kembali ke server.

Dengan fitur multisite yang sudah diaktifkan di situs Anda, sekarang saatnya mengatur jaringan Anda.

Buka **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Sekarang Anda perlu menentukan struktur domain yang akan digunakan untuk situs-situs dalam jaringan Anda: subdomain atau subdirektori.

Jika Anda memilih subdomain, Anda harus mengubah pengaturan DNS untuk pemetaan domain dan pastikan untuk mengatur _**wildcard subdomains**_ untuk jaringan multisite Anda.

Kembali ke Network Setup, berikan judul untuk jaringan Anda dan pastikan alamat email di Network admin email sudah benar. Klik _Install_ untuk melanjutkan.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Tambahkan kode ini, yang disediakan oleh WordPress, ke file _**wp-config.php**_ Anda:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Dan kode ini, juga disediakan oleh WordPress, ke file _**.htaccess**_ Anda:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gunakan FTP client atau file manager (jika Anda menggunakan cPanel, misalnya) untuk menyalin dan menempelkan kode tersebut ke dua file ini.

Terakhir, login kembali ke situs WordPress Anda untuk mengakses jaringan multisite Anda.

**Penting untuk menguji dan memastikan bahwa Anda dapat membuat subsite di instalasi WordPress Multisite Anda sebelum menginstal Ultimate Multisite.**

Untuk membuat subsite:

  1. Buka wp-admin website Anda

  2. Navigasi ke My Sites > Sites (/wp-admin/network/sites.php)

  3. Klik Add New di bagian atas

  4. Isi semua field:

  * Site Address — Jangan pernah gunakan "www"

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Judul situs, dapat diubah nanti

  * Admin Email — Ditetapkan sebagai pengguna admin awal untuk subsite

![Formulir tambah situs baru di WordPress Multisite](/img/admin/sites-list.png)

Setelah mengisi semua field, klik tombol "Add site". Setelah subsite baru dibuat, silakan akses untuk memastikan bahwa subsite tersebut berfungsi dengan baik.

## Masalah Umum:

### 1\. Saya bisa membuat situs baru tetapi tidak dapat diakses.

Jika Anda memilih subdomain, Anda juga perlu mengatur wildcard subdomains untuk jaringan multisite Anda.

Untuk melakukannya, buka dashboard control panel akun hosting website Anda (misalnya cPanel/Plesk/Direct Admin tergantung penyedia hosting Anda).

Cari opsi untuk "Domains" atau "Subdomains". Di beberapa control panel, ini dilabeli sebagai "Domain administration".

Pada field subdomain, masukkan tanda asterisk (*). Kemudian, Anda akan diminta untuk memilih nama domain di mana subdomain akan ditambahkan.

Document root untuk nama domain yang dipilih akan terdeteksi secara otomatis. Klik tombol _Create_ atau _Save_ untuk menambahkan wildcard subdomain Anda. Entri tersebut seharusnya terlihat seperti "*.[mydomain.com](http://mydomain.com)"
