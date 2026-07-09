---
title: Cara Mengonfigurasi Pemetaan Domain
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Cara Mengonfigurasi Domain Mapping (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Salah satu fitur paling kuat dari jaringan premium adalah kemampuan untuk menawarkan kepada klien kami kesempatan melampirkan domain tingkat atas ke situs mereka. Lagi pula, mana yang terlihat lebih profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) atau [_**joesbikeshop.com**_](http://joesbikeshop.com)? Itulah sebabnya Ultimate Multisite menawarkan fitur tersebut secara bawaan, tanpa perlu menggunakan plugin pihak ketiga.

## Apa itu domain mapping?

Seperti namanya, domain mapping adalah kemampuan yang ditawarkan oleh Ultimate Multisite untuk menerima permintaan atas domain kustom dan memetakan permintaan tersebut ke situs yang sesuai di jaringan dengan domain tertentu yang dilampirkan.

### Cara menyiapkan domain mapping di Ultimate Multisite Network Anda

Domain mapping memerlukan beberapa pengaturan dari pihak Anda agar berfungsi. Untungnya, Ultimate Multisite mengotomatiskan pekerjaan berat untuk Anda sehingga Anda dapat dengan mudah memenuhi persyaratannya.

Selama instalasi Ultimate Multisite, wizard akan secara otomatis menyalin dan memasang **sunrise.php** ke folder yang ditentukan. **Wizard tidak akan mengizinkan Anda melanjutkan sampai langkah ini selesai**.

<!-- Screenshot tidak tersedia: Wizard instalasi Ultimate Multisite dengan langkah sunrise.php -->

Ini berarti bahwa setelah wizard instalasi Ultimate Multisite selesai menyiapkan jaringan Anda, Anda dapat segera mulai memetakan domain kustom.

Perhatikan bahwa domain mapping di Ultimate Multisite tidak wajib. Anda memiliki opsi untuk menggunakan fungsi domain mapping bawaan WordPress Multisite atau solusi domain mapping lainnya.

Jika Anda perlu menonaktifkan domain mapping Ultimate Multisite untuk memberi jalan bagi solusi domain mapping lain, Anda dapat menonaktifkan fitur ini di bawah **Ultimate Multisite > Settings > Domain Mapping**.

![Halaman pengaturan Domain Mapping yang menampilkan admin redirect, pesan mapping, dan opsi DNS](/img/config/domain-mapping-settings.png)

Tepat di bawah opsi ini, Anda juga dapat melihat opsi **Force Admin Redirect**. Opsi ini memungkinkan Anda mengontrol apakah pelanggan Anda dapat mengakses dashboard admin mereka baik di domain kustom maupun subdomain mereka, atau hanya di salah satunya.

Jika Anda memilih **Force redirect to mapped domain** , pelanggan Anda hanya akan dapat mengakses dashboard admin mereka di domain kustom mereka.

Opsi **Force redirect to** **network domain** akan melakukan hal yang persis sebaliknya - pelanggan Anda hanya akan diizinkan mengakses dashboard mereka di subdomain mereka, bahkan jika mencoba masuk di domain kustom mereka.

Dan opsi **Allow access to the admin by both mapped domain domain and network domain** memungkinkan mereka mengakses dashboard admin mereka baik di subdomain maupun domain kustom.

![Dropdown Admin Redirect dibentangkan yang menampilkan tiga opsi redirect](/img/config/domain-mapping-redirect-options.png)

Ada dua cara untuk memetakan domain kustom. Yang pertama adalah dengan memetakan nama domain dari dashboard admin jaringan Anda sebagai super admin, dan yang kedua melalui dashboard admin subsite di bawah halaman account.

Namun sebelum Anda mulai memetakan domain kustom ke salah satu subsite di jaringan Anda, Anda perlu memastikan bahwa **pengaturan DNS** dari nama domain dikonfigurasi dengan benar.

###

### Memastikan pengaturan DNS domain dikonfigurasi dengan benar

Agar mapping berfungsi, Anda perlu memastikan domain yang Anda rencanakan untuk dipetakan mengarah ke alamat IP Network Anda. Perhatikan bahwa Anda memerlukan alamat IP Network - alamat IP dari domain tempat Ultimate Multisite dipasang - bukan alamat IP dari domain kustom yang ingin Anda petakan. Untuk mencari alamat IP dari domain tertentu, kami menyarankan untuk membuka [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), misalnya.

Untuk memetakan domain dengan benar, Anda perlu menambahkan **A RECORD** pada konfigurasi **DNS** Anda yang mengarah ke **alamat IP** tersebut. Pengelolaan DNS sangat bervariasi di antara registrar domain yang berbeda, tetapi ada banyak tutorial online yang membahas hal itu jika Anda mencari " _Creating A Record on XXXX_ " di mana XXXX adalah registrar domain Anda (mis.: " _Creating A Record on_ _GoDaddy_ ").

Jika Anda mengalami kesulitan membuat ini berfungsi, **hubungi dukungan registrar domain Anda** dan mereka akan dapat membantu Anda dengan bagian ini.

Jika Anda berencana mengizinkan klien Anda memetakan domain mereka sendiri, mereka harus mengerjakan bagian ini sendiri. Arahkan mereka ke sistem dukungan registrar mereka jika mereka tidak dapat membuat A Record.

### Memetakan nama domain kustom sebagai Super Admin

Ketika Anda masuk sebagai super admin di jaringan Anda, Anda dapat dengan mudah menambahkan dan mengelola nama domain kustom dengan membuka **Ultimate Multisite > Domains**.

![Halaman daftar Domains di Ultimate Multisite](/img/admin/domains-list.png)

Di halaman ini, Anda dapat mengeklik tombol **Add Domain** di bagian atas dan ini akan memunculkan jendela modal tempat Anda dapat mengatur dan mengisi **nama domain kustom** , **subsite** yang ingin Anda terapkan nama domain kustomnya, dan memutuskan apakah Anda ingin menetapkannya sebagai nama **primary domain** atau tidak (perhatikan bahwa Anda dapat memetakan **beberapa nama domain ke satu subsite**).

![Modal Add Domain dengan nama domain, pemilih situs, dan toggle primary domain](/img/admin/domain-add-modal.png)

Setelah memasukkan semua informasi, Anda kemudian dapat mengeklik tombol **Add Existing Domain** di bagian bawah.

Ini akan memulai proses verifikasi dan pengambilan informasi DNS dari domain kustom. Anda juga akan melihat log di bagian bawah halaman agar Anda dapat mengikuti proses yang sedang berlangsung. Proses ini mungkin memerlukan beberapa menit untuk selesai.

Ultimate Multisite v2.13.0 juga membuat catatan domain internal secara otomatis ketika site baru dibuat pada host yang harus diperlakukan sebagai domain per-site. Jika host tersebut adalah domain utama network, atau salah satu domain dasar checkout-form bersama yang dikonfigurasi pada field **Site URL**, catatan mapped-domain otomatis akan dilewati sehingga domain dasar bersama tersebut tetap tersedia untuk setiap site yang menggunakannya.

Ketika pelanggan mendaftarkan domain baru melalui Domain Seller v1.3.0 atau yang lebih baru, Ultimate Multisite secara default secara otomatis memetakan domain terdaftar tersebut ke site network milik pelanggan. Administrator tidak perlu lagi menambahkan catatan mapped-domain terpisah setelah pendaftaran berhasil kecuali mereka ingin menyesuaikan opsi seperti flag domain utama, status aktivasi, atau penanganan SSL.

**Stage** atau status harus berubah dari **Checking DNS** menjadi **Ready** jika semuanya sudah diatur dengan benar.

<!-- Screenshot unavailable: Baris domain yang menampilkan tahap Checking DNS dalam daftar domain -->

<!-- Screenshot unavailable: Baris domain yang menampilkan tahap Ready dengan indikator status hijau -->

Jika Anda mengklik nama domain, Anda akan dapat melihat beberapa opsi di dalamnya. Mari kita lihat sekilas opsi-opsi tersebut:

![Halaman detail domain dengan toggle tahap, site, aktif, utama, dan SSL](/img/admin/domain-edit.png)

**Stage:** Ini adalah tahap tempat domain berada. Ketika Anda pertama kali menambahkan domain, kemungkinan domain akan berada pada tahap **Checking DNS**. Proses ini akan memeriksa entri DNS dan mengonfirmasi bahwa semuanya benar. Kemudian, domain akan ditempatkan pada tahap **Checking SSL**. Ultimate Multisite akan memeriksa apakah domain memiliki SSL atau tidak dan akan mengategorikan domain Anda sebagai **Ready** atau **Ready (without SSL)**.

**Site:** Subdomain yang terkait dengan domain ini. Domain yang dipetakan akan menampilkan konten dari site spesifik ini.

**Active:** Anda dapat mengaktifkan atau menonaktifkan opsi ini untuk mengaktifkan atau menonaktifkan domain.

**Is Primary Domain?:** Pelanggan Anda dapat memiliki lebih dari satu domain yang dipetakan untuk setiap site. Gunakan opsi ini untuk memilih apakah ini adalah domain utama untuk site tertentu.

**Is Secure?:** Meskipun Ultimate Multisite memeriksa apakah domain memiliki sertifikat SSL atau tidak sebelum mengaktifkannya, Anda dapat memilih secara manual untuk memuat domain dengan atau tanpa sertifikat SSL. Perhatikan bahwa jika website tidak memiliki sertifikat SSL dan Anda mencoba memaksanya dimuat dengan SSL, hal itu dapat menimbulkan error.

### Memetakan nama domain kustom sebagai pengguna Subsite

Administrator subsite juga dapat memetakan nama domain kustom dari dashboard admin subsite mereka.

Pertama, Anda perlu memastikan bahwa Anda mengaktifkan opsi ini di bawah pengaturan **Domain mapping**. Lihat screenshot di bawah.

<!-- Screenshot unavailable: Pengaturan Domain mapping yang memungkinkan pengguna subsite memetakan domain melalui toggle Customer DNS Management -->

Anda juga dapat mengatur atau mengonfigurasi opsi ini di level **Plan** atau opsi produk pada **Ultimate Multisite > Products**.

![Bagian Custom Domains pada halaman edit produk](/img/config/product-custom-domains.png)

Ketika salah satu opsi tersebut diaktifkan dan pengguna subsite diizinkan untuk memetakan nama domain kustom, pengguna subsite akan melihat metabox di bawah halaman **Account** bernama **Domains**.

<!-- Screenshot unavailable: Metabox Domains pada halaman Account subsite dengan tombol Add Domain -->

Pengguna dapat mengklik tombol **Add Domain** dan itu akan menampilkan jendela modal dengan beberapa instruksi.

<!-- Screenshot unavailable: Modal Add Domain yang menampilkan instruksi DNS A-record untuk pengguna subsite -->

Pengguna kemudian dapat mengklik **Next Step** dan melanjutkan untuk menambahkan nama domain kustom. Mereka juga dapat memilih apakah ini akan menjadi domain utama atau tidak.

<!-- Screenshot unavailable: Form Add Domain dengan field nama domain kustom dan toggle domain utama -->

<!-- Screenshot unavailable: Langkah konfirmasi Add Domain yang memicu verifikasi DNS -->

Mengklik **Add Domain** akan memulai proses verifikasi dan pengambilan informasi DNS dari domain kustom.

### Tentang Sinkronisasi Domain

Sinkronisasi Domain adalah proses saat Ultimate Multisite menambahkan nama domain kustom ke akun hosting Anda sebagai domain add-on **agar domain mapping berfungsi**.

Sinkronisasi domain terjadi secara otomatis jika penyedia hosting Anda memiliki integrasi dengan fitur domain mapping Ultimate Multisite. Saat ini, penyedia hosting tersebut adalah _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ dan _Cpanel._

Ketika integrasi host-provider aktif, Ultimate Multisite juga dapat mengantrekan tugas pembuatan DNS atau subdomain di sisi penyedia untuk site yang baru dibuat. Jika tidak ada integrasi yang mendengarkan tugas tersebut, background job akan dilewati untuk menghindari entri antrean no-op. Pemeriksaan DNS dan SSL untuk domain yang dipetakan tetap berjalan melalui proses tahap domain normal.

Anda perlu mengaktifkan integrasi ini pada pengaturan Ultimate Multisite di bawah tab **Integration**.

![Tab Integrations di pengaturan Ultimate Multisite yang menampilkan penyedia hosting](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Tautan Configuration penyedia hosting pada tab pengaturan Integrations -->

_Perhatikan bahwa jika penyedia hosting Anda bukan salah satu penyedia yang disebutkan di atas,**Anda perlu menyinkronkan atau menambahkan nama domain secara manual** ke akun hosting Anda._
