---
title: Kepiye carane nginstall WordPress Multisite
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# Kepiye Carane Aku Nginstall WordPress Multisite?

WordPress Multisite iku ngidamel sampeyan bisa duwe jaringan situs-situs ing siji instalasi. Iki wis ana saka awal, nanging ora aktif otomatis.

:::tip
Ultimate Multisite duwe **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** sing ngotomatisasi kabeh proses iki. Yen sampeyan wis nginstall Ultimate Multisite, kita saranku nganggo wizard kuwi tinimbang nindakake langkah-langkah manual ing ngisor iki.
:::

Amarga Ultimate Multisite iku plugin sing mung kanggo jaringan (network), ing tutorial iki, sampeyan bakal sinau carane nginstall lan ngatur WordPress Multisite manual. Teks iki adhedhasar [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/), saka WPBeginner.

**Sing Perlu Diperhatikake Sadurunge Nggawe Jaringan Multisite Sampeyan:**

  * Pilih hosting WordPress sing apik! Situs ing jaringan bakal bagi sumber daya server sing padha.

  * Yen sampeyan mung duwe sawetara situs kanthi trafik rendah, shared hosting mungkin wis cukup kanggo sampeyan.

  * Kebanyakan **Managed WordPress hosting providers** nawakake Multisite langsung (mereka nginstall WordPress karo Multisite wis aktif lan diatur kanggo sampeyan). Iki kasusé kanggo WP Engine, Closte, Cloudways, lsp. Yen sampeyan ora yakin yen kuwi bener kanggo penyedia hostingmu, hubungi dukungan dewe sadurunge lanjut menyang tutorial iki.

  * Penting uga kanggo ngerti carane nginstall WordPress lan ngedit file nganggo FTP .

_**PENTING**_ **:** Yen sampeyan lagi nggawe jaringan multisite ing situs WordPress sing wis ana, aja lali kanggo:

  * Nggawe backup lengkap saka situs WordPress sampeyan

  * Nonaktifake kabeh plugin ing situs sampeyan kanthi menyang halaman plugin lan milih _Deactivate_ saka bulk actions banjur klik _Apply_

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Supaya Multisite bisa jalan, pertama kudu sambung ke situsmu nganggo FTP client utawa cPanel file manager, terus buka file `wp-config.php` kanggo diedit.

Sadurunge baris _*Nah, wis cukup, ora usah diedit maneh! Seneng nulis blog.*_ tamba kode iki:

define('WP_ALLOW_MULTISITE', true);

Simpen lan upload file `wp-config.php` maneh menyang servermu.

Saiki saiki fitur multisite wis aktif nang situsmu, wektune kanggo ngatur jaringanmu.

Tuju menyang **Tools » Network Setup**

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

Saiki kowe kudu ngandhani WordPress jenis struktur domain apa sing bakal digunakake kanggo situs-situs ing jaringanmu: subdomain utawa subdirectory.

Yen milih subdomain, kowe kudu ganti pengaturan DNS kanggo pemetaan domain lan mastiake setup _**wildcard subdomains**_ kanggo jaringan multisite-mu.

Balik menyang Network Setup, wenehi judul kanggo jaringanmu lan mastiake alamat email ing email admin Jaringan kuwi bener. Klik _Install_ kanggo lanjut.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

Tamba kode iki, sing diwenehake dening WordPress, menyang _**wp-config.php**_:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

Lan kode iki, uga diwenehake dening WordPress, menyang file _**.htaccess**_:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# tambahi garis miring akhir (trailing slash) kanggo /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Gunakan FTP client utawa file manager (yen sampeyan nggunakake sing kaya cPanel, contone) kanggo nyalin lan tempel kode ing rong file iki.

Terakhir, login maneh menyang situs WordPress panjenengan supaya bisa ngakses jaringan multisite panjenengan.

**Penting banget kanggo nguji lan mastiake yen panjenengan bisa nggawe subsite ing instalasi WordPress Multisite panjenengan sadurunge nginstall Ultimate Multisite.**

Kanggo nggawe subsite:

  1. Buka wp-admin situs panjenengan
  2. Tindakake menyang My Sites > Sites (/wp-admin/network/sites.php)
  3. Klik Add New ing dhuwur
  4. Isi kabeh kolom:

* Site Address — Ora tau nganggo “www”

* Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

* Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

* Site Title — Judul situs, bisa diubah maneh sesuk

* Admin Email — Set minangka user admin awal kanggo subsite kasebut

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

Sawise ngisi kolom-kolom kasebut, klik tombol "Add site". Sawise subsite anyar digawe, lanjut aja ngakses supaya bisa mastiake yen subsite kuwi wis berfungsi.

## Masalah Umum:

### 1. Aku bisa nggawe situs anyar nanging ora bisa diakses.

Yen panjenengan milih subdomain, panjenengan uga perlu nyiapake wildcard subdomain kanggo jaringan multisite panjenengan.

Kanggo nindakake kuwi, tindakake menyang dashboard akun hosting Situs panjenengan (contone cPanel/Plesk/Direct Admin gumantung penyedia hosting panjenengan).

Tandur pilihan kanggo “Domains” utawa “Subdomains”. Ing sawetane control panel iku diwenehi label “Domain administration”.

Di kolom subdomain, masukkan tanda bintang (*). Kemudian, sistem akan meminta Anda memilih nama domain tempat Anda ingin menambahkan subdomain tersebut.

WordPress secara otomatis akan mendeteksi root dokumen untuk nama domain yang dipilih. Klik tombol _Create_ atau _Save_ untuk menambahkan subdomain wildcard Anda. Tampilannya akan seperti “*.[mydomain.com](http://mydomain.com)”
