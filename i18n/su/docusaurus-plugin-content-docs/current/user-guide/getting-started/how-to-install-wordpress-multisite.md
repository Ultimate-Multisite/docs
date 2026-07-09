---
title: Kumaha cara nginstal WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kumaha Cara Pasang WordPress Multisite? {#how-do-i-install-wordpress-multisite}

WordPress Multisite membolehkeun anjeun ngabentuk jaringan situs dina hiji instalasi. Ieu fitur anu aya di jero, tapi biasana teu aktif.

:::tip
Ultimate Multisite ngandung **[Built-in Multisite Setup Wizard](./multisite-setup-wizard)** anu ngotomatiskeun sakabé proses éta. Lamun anjeun geus nginstall Ultimate Multisite, kami saraha ngagunake wizard éta tibatan ngikut langkah manual di handap ieu.
:::

Sabab Ultimate Multisite téh plugin ngan ukur pikeun jaringan (network-only), dina tutorial ieu, anjeun bakal diajar kumaha pasang jeung nyiapkeun WordPress Multisite secara manual. Teks ieu didasarkan kana [Cara Pasang Jeung Nyiapkeun Jaringan WordPress Multisite](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), ti WPBeginner.

**Beberapa hal anu kudu diperhatikeun saméméan ngadamel jaringan multisite anjeun:**

  * Pilih hosting WordPress anu hadé! Situs dina hiji jaringan mawa sumber daya server anu sarua.

  * Lamun anjeun ngan ukur aya sababaraha situs jeung trafik leutik, shared hosting biasana bakal cocog pikeun anjeun.

  * Sebagian besar **Managed WordPress hosting providers** nawarkeun Multisite langsung ti awal (maranéhna nginstall WordPress jeung Multisite geus diaktifkeun sarta dikonfigurasi keur anjeun). Ieu kasusna WP Engine, Closte, Cloudways, jsb. Lamun anjeun teu yakin éta téh kasusna pikeun penyedia hosting anjeun, hubungi dukungan maranéhna saméméan neraskeun tutorial ieu.

  * Ogah ogah ngajak diri anjeun kenal jeung cara pasang WordPress sarta ngedit file maké FTP ogé alus.

_**PENTING**_ **:** Lamun anjeun nyiapkeun jaringan multisite dina situs WordPress anu geus aya, ulah poho pikeun:

  * Ngadamel backup lengkap situs WordPress anjeun

  * Nonaktifkeun sakabé plugin dina situs anjeun ku cara ka halaman plugin jeung milih _Deactivate_ tina bulk actions tuluy klik _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Supaya Multisite bisa dipasang, pertama sambung ke situs kamu pakai FTP client atau file manager cPanel, terus buka file `wp-config.php` buat diedit.

Sebelum baris _*Nah, selesai, jangan diubah lagi! Selamat menulis blog.*_ tambahin kode berikut:

define('WP_ALLOW_MULTISITE', true);

Simpan dan unggah kembali file `wp-config.php` kamu ke server.

Setelah fitur multisite aktif di situs kamu, sekarang waktunya buat atur jaringan kamu.

Buka **Tools » Network Setup** (Alat » Pengaturan Jaringan)

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Sekarang kamu perlu kasih tahu WordPress jenis struktur domain apa yang akan kamu pakai untuk situs-situs di jaringan kamu: subdomain atau subdirectory.

Kalau kamu pilih subdomain, kamu harus ubah pengaturan DNS buat pemetaan domain dan pastikan setup _**wildcard subdomains**_ (subdomain wildcard) untuk jaringan multisite kamu.

Kembali ke Network Setup, kasih judul buat jaringan kamu dan pastikan alamat email di email admin Jaringan sudah benar. Klik _Install_ (Instal) untuk lanjut.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Tambahkan kode ini, yang disediakan oleh WordPress, ke file _**wp-config.php**_ kamu:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Dan kode ini, juga disediakan oleh WordPress, ke file _**.htaccess**_ kamu:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# tambahkan garis miring di akhir /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gunakan FTP client atawa file manager (upami anjeun nganggo aplikasi saperti cPanel, contona) pikeun nyalin je tempel kode ieu dina dua file éta.

Terakhir, login deui ka situs WordPress anjeun sangkan bisa ngakses jaringan multisite anjeun.

**Penting pisan pikeun nguji sareng mastikeun yén anjeun bisa nyiptake subsite dina instalasi WordPress Multisite anjeun saméméh nginstal Ultimate Multisite.**

Kanggo nyiptake subsite:

  1. Buka wp-admin situs anjeun

  2. Pindah ka My Sites > Sites (/wp-admin/network/sites.php)

  3. Klik Add New di bagian luhur

  4. Isi sadaya kolom:

  * Site Address — Tong pernah ngagunake “www”

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — Judul situs, bisa diubah sabulan ti harita

  * Admin Email — Atur salaku admin awal pikeun subsite éta

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Sanggeus ngisihkeun sadaya kolom, klik tombol "Add site". Sanggeus subsite anyar jadi, langsung akses kanggo mastikeun yén subsite éta jalan.

## Masalah Umum: {#common-problems}

### 1. Abdi bisa nyiptake situs anyar tapi teu bisa diakses. {#1-i-can-create-new-sites-but-they-are-not-accessible}

Lamun anjeun milih subdomain, anjeun ogé kudu ngatur wildcard subdomain pikeun jaringan multisite anjeun.

Kanggo ngalakukeun éta, pindah ka dashboard control panel akun hosting situs anjeun (contona cPanel/Plesk/Direct Admin gumantung penyedia hosting anjeun).

Tukeur pilihan "Domains" atawa "Subdomains". Dina sababaraha control panel mah disebutna "Domain administration".

Di kolom subdomain, masukkan bintang (*). Terus, sistem akan meminta Anda memilih nama domain di mana subdomain tersebut ingin ditambahkan.

WordPress secara otomatis akan mendeteksi root direktori untuk nama domain yang dipilih. Klik tombol _Create_ atau _Save_ untuk menambahkan subdomain wildcard Anda. Tampilannya akan seperti “*.[mydomain.com](http://mydomain.com)”.
