---
title: Cara Memasang WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Bagaimana untuk Memasang WordPress Multisite?

WordPress Multisite membolehkan anda mempunyai rangkaian laman web dalam satu pemasangan. Ini adalah ciri terbina dalam, tetapi ia tidak aktif secara lalai.

:::tip
Ultimate Multisite menyertakan **[Wizard Persediaan Multisite terbina dalam](./multisite-setup-wizard)** yang mengautomasikan keseluruhan proses ini. Jika anda sudah memasang Ultimate Multisite, kami syorkan menggunakan wizard tersebut berbanding mengikuti langkah-langkah manual di bawah.
:::

Memandangkan Ultimate Multisite adalah plugin khusus rangkaian sahaja, dalam tutorial ini, anda akan belajar cara memasang dan menyediakan WordPress Multisite secara manual. Teks ini berdasarkan [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), daripada WPBeginner.

**Perkara yang perlu diberi perhatian sebelum mencipta rangkaian multisite anda:**

  * Dapatkan hosting WordPress yang berkualiti! Laman web dalam rangkaian berkongsi sumber pelayan yang sama.

  * Sekiranya anda hanya mempunyai beberapa laman web dengan trafik rendah, shared hosting mungkin sudah memadai untuk anda.

  * Kebanyakan **penyedia Managed WordPress hosting** menawarkan Multisite secara sedia ada (mereka memasang WordPress dengan Multisite yang sudah diaktifkan dan dikonfigurasikan untuk anda). Ini terpakai untuk WP Engine, Closte, Cloudways, dan sebagainya. Jika anda tidak pasti sama ada ini terpakai untuk penyedia hosting anda, hubungi sokongan mereka sebelum meneruskan tutorial ini.

  * Adalah baik juga untuk memahami cara memasang WordPress dan mengedit fail menggunakan FTP.

_**PENTING**_ **:** Jika anda menyediakan rangkaian multisite pada laman WordPress yang sedia ada, jangan lupa untuk:

  * Membuat sandaran lengkap laman WordPress anda

  * Nyahaktifkan semua plugin di laman anda dengan pergi ke halaman plugins dan memilih _Deactivate_ daripada bulk actions kemudian klik _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Untuk mengaktifkan Multisite, pertama sekali sambungkan ke laman anda menggunakan klien FTP atau pengurus fail cPanel, dan buka fail wp-config.php anda untuk diedit.

Sebelum baris _*That's all, stop editing! Happy blogging.*_, tambahkan kod berikut:

define('WP_ALLOW_MULTISITE', true);

Simpan dan muat naik fail wp-config.php anda kembali ke pelayan.

Dengan ciri multisite diaktifkan pada laman anda, kini tiba masanya untuk menyediakan rangkaian anda.

Pergi ke **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Sekarang anda perlu memberitahu WordPress jenis struktur domain yang akan anda gunakan untuk laman dalam rangkaian anda: subdomain atau subdirektori.

Jika anda memilih subdomain, anda perlu menukar tetapan DNS anda untuk pemetaan domain dan pastikan anda menyediakan _**wildcard subdomains**_ untuk rangkaian multisite anda.

Kembali ke Network Setup, berikan tajuk untuk rangkaian anda dan pastikan alamat emel dalam Network admin email adalah betul. Klik _Install_ untuk meneruskan.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Tambahkan kod ini, yang disediakan oleh WordPress, ke dalam _**wp-config.php**_ anda:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Dan kod ini, juga disediakan oleh WordPress, ke dalam fail _**.htaccess**_ anda:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gunakan klien FTP atau pengurus fail (jika anda menggunakan sesuatu seperti cPanel, contohnya) untuk menyalin dan menampal kod ke dalam kedua-dua fail ini.

Akhir sekali, log masuk semula ke laman WordPress anda untuk mengakses rangkaian multisite anda.

**Adalah penting untuk menguji dan memastikan anda boleh mencipta subsite pada pemasangan WordPress Multisite anda sebelum anda memasang Ultimate Multisite.**

Untuk mencipta subsite:

  1. Buka wp-admin laman web anda

  2. Navigasi ke My Sites > Sites (/wp-admin/network/sites.php)

  3. Klik Add New di bahagian atas

  4. Isikan semua medan:

  * Site Address — Jangan sekali-kali gunakan "www"

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Tajuk laman, boleh ditukar kemudian

  * Admin Email — Ditetapkan sebagai pengguna admin awal untuk subsite

![Borang tambah laman baharu dalam WordPress Multisite](/img/admin/sites-list.png)

Selepas mengisi medan-medan tersebut, klik butang "Add site". Setelah subsite baharu dicipta, akses subsite tersebut untuk memastikan ia berfungsi dengan baik.

## Masalah Lazim:

### 1\. Saya boleh mencipta laman baharu tetapi ia tidak boleh diakses.

Jika anda memilih subdomain, anda juga perlu menyediakan wildcard subdomains untuk rangkaian multisite anda.

Untuk melakukannya, pergi ke dashboard panel kawalan akaun hosting laman web anda (contohnya cPanel/Plesk/Direct Admin bergantung pada penyedia hosting anda).

Cari pilihan untuk "Domains" atau "Subdomains". Dalam sesetengah panel kawalan ia dilabelkan sebagai "Domain administration".

Pada medan subdomain, masukkan asterisk (*). Kemudian, ia akan meminta anda memilih nama domain di mana anda mahu subdomain ditambah.

Document root untuk nama domain yang dipilih akan dikesan secara automatik. Klik butang _Create_ atau _Save_ untuk menambah wildcard subdomain anda. Entri tersebut sepatutnya kelihatan seperti "*.[mydomain.com](http://mydomain.com)"
