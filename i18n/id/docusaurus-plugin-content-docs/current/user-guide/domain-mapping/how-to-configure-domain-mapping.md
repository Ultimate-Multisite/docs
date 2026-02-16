---
title: Cara Mengonfigurasi Pemetaan Domain
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Cara Mengatur Domain Mapping (v2)

_**CATATAN PENTING: Artikel ini mengacu pada Ultimate Multisite versi 2.x.**_

Salah satu fitur paling powerful dari network premium adalah kemampuan untuk menawarkan klien kita kesempatan menghubungkan domain tingkat atas ke situs mereka. Lagipula, mana yang terlihat lebih profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) atau [_**joesbikeshop.com**_](http://joesbikeshop.com)? Itulah mengapa Ultimate Multisite menawarkan fitur ini secara bawaan, tanpa perlu menggunakan plugin pihak ketiga.

## Apa itu domain mapping?

Sesuai namanya, domain mapping adalah kemampuan yang ditawarkan oleh Ultimate Multisite untuk menerima permintaan domain kustom dan memetakan permintaan tersebut ke situs yang sesuai di network dengan domain tertentu yang terhubung.

### Cara mengatur domain mapping di Network Ultimate Multisite Anda

Domain mapping memerlukan beberapa pengaturan dari Anda agar bisa berfungsi. Untungnya, Ultimate Multisite mengotomatiskan pekerjaan berat untuk Anda sehingga Anda dapat dengan mudah memenuhi persyaratannya.

Selama instalasi Ultimate Multisite, wizard akan secara otomatis menyalin dan menginstal **sunrise.php** ke folder yang ditentukan. **Wizard tidak akan mengizinkan Anda melanjutkan sampai langkah ini selesai**.

![Wizard instalasi Ultimate Multisite dengan langkah sunrise.php](/img/config/settings-domain-mapping.png)

Ini berarti begitu wizard instalasi Ultimate Multisite selesai menyiapkan network Anda, Anda bisa langsung mulai memetakan domain kustom.

Perlu dicatat bahwa domain mapping di Ultimate Multisite tidak wajib. Anda memiliki opsi untuk menggunakan fungsi domain mapping bawaan WordPress Multisite atau solusi domain mapping lainnya.

Jika Anda perlu menonaktifkan domain mapping Ultimate Multisite untuk memberikan ruang bagi solusi domain mapping lain, Anda dapat menonaktifkan fitur ini di **Ultimate Multisite > Settings > Domain Mapping**.

![Pengaturan Domain Mapping dengan toggle aktifkan](/img/config/settings-domain-mapping.png)

Tepat di bawah opsi ini, Anda juga dapat melihat opsi **Force Admin Redirect**. Opsi ini memungkinkan Anda mengontrol apakah pelanggan Anda dapat mengakses dashboard admin mereka baik di domain kustom maupun subdomain, atau hanya di salah satunya.

Jika Anda memilih **Force redirect to mapped domain**, pelanggan Anda hanya akan dapat mengakses dashboard admin mereka di domain kustom mereka.

Opsi **Force redirect to network domain** akan melakukan hal sebaliknya - pelanggan Anda hanya akan diizinkan mengakses dashboard mereka di subdomain, bahkan jika mencoba masuk di domain kustom mereka.

Dan opsi **Allow access to the admin by both mapped domain domain and network domain** mengizinkan mereka mengakses dashboard admin baik di subdomain maupun domain kustom.

![Opsi Force Admin Redirect untuk domain mapping](/img/config/settings-domain-mapping.png)

Ada dua cara untuk memetakan domain kustom. Yang pertama adalah dengan memetakan nama domain dari dashboard admin network sebagai super admin dan yang kedua adalah melalui dashboard admin subsite di halaman akun.

Namun sebelum Anda mulai memetakan domain kustom ke salah satu subsite di network Anda, Anda perlu memastikan bahwa **pengaturan DNS** nama domain sudah dikonfigurasi dengan benar.

### 

### Memastikan pengaturan DNS domain sudah dikonfigurasi dengan benar

Agar pemetaan berfungsi, Anda perlu memastikan domain yang ingin Anda petakan mengarah ke alamat IP Network Anda. Perhatikan bahwa Anda memerlukan alamat IP Network - alamat IP dari domain tempat Ultimate Multisite diinstal - bukan alamat IP dari domain kustom yang ingin Anda petakan. Untuk mencari alamat IP dari domain tertentu, kami sarankan menggunakan [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), misalnya.

Untuk memetakan domain dengan benar, Anda perlu menambahkan **A RECORD** pada konfigurasi **DNS** Anda yang mengarah ke **alamat IP** tersebut. Pengelolaan DNS sangat bervariasi antar registrar domain yang berbeda, tapi ada banyak tutorial online yang membahas hal ini jika Anda mencari "_Creating A Record on XXXX_" di mana XXXX adalah registrar domain Anda (contoh: "_Creating A Record on GoDaddy_").

Jika Anda mengalami kesulitan untuk membuatnya berfungsi, **hubungi dukungan registrar domain Anda** dan mereka akan dapat membantu Anda dengan bagian ini.

Jika Anda berencana mengizinkan klien Anda memetakan domain mereka sendiri, mereka harus melakukan pekerjaan ini sendiri. Arahkan mereka ke sistem dukungan registrar mereka jika mereka merasa tidak mampu membuat A Record.

### Memetakan nama domain kustom sebagai Super Admin

Ketika Anda masuk sebagai super admin di network Anda, Anda dapat dengan mudah menambahkan dan mengelola nama domain kustom dengan membuka **Ultimate Multisite > Domains**.

![Halaman daftar Domains di Ultimate Multisite](/img/admin/domains-list.png)

Di halaman ini, Anda dapat mengklik tombol **Add Domain** di atas dan ini akan memunculkan jendela modal di mana Anda dapat mengatur dan mengisi **nama domain kustom**, **subsite** yang ingin Anda terapkan nama domain kustomnya, dan memutuskan apakah Anda ingin menetapkannya sebagai nama **domain utama** atau tidak (perhatikan bahwa Anda dapat memetakan **beberapa nama domain ke satu subsite**).

![Modal Add Domain dengan field nama domain dan situs](/img/admin/domains-list.png)

Setelah memasukkan semua informasi, Anda kemudian dapat mengklik tombol **Add Existing Domain** di bagian bawah.

Ini akan memulai proses verifikasi dan pengambilan informasi DNS dari domain kustom. Anda juga akan melihat log di bagian bawah halaman untuk mengikuti proses yang sedang berlangsung. Proses ini mungkin memerlukan beberapa menit untuk selesai.

**Stage** atau status seharusnya berubah dari **Checking DNS** menjadi **Ready** jika semuanya sudah diatur dengan benar.

![Stage domain berubah dari Checking DNS ke Ready](/img/admin/domains-list.png)

![Domain dengan status Ready di daftar domains](/img/admin/domains-list.png)

Jika Anda mengklik nama domain, Anda akan dapat melihat beberapa opsi di dalamnya. Mari kita lihat sekilas:

![Halaman detail domain dengan opsi stage, site, active, dan SSL](/img/admin/domains-list.png)

**Stage:** Ini adalah tahap di mana domain berada. Ketika Anda pertama kali menambahkan domain, kemungkinan akan berada di tahap **Checking DNS**. Proses akan memeriksa entri DNS dan mengonfirmasi bahwa semuanya benar. Kemudian, domain akan dimasukkan ke tahap **Checking SSL**. Ultimate Multisite akan memeriksa apakah domain memiliki SSL atau tidak dan akan mengkategorikan domain Anda sebagai **Ready** atau **Ready (without SSL)**.

**Site:** Subdomain yang terkait dengan domain ini. Domain yang dipetakan akan menampilkan konten dari situs spesifik ini.

**Active:** Anda dapat mengaktifkan atau menonaktifkan opsi ini untuk mengaktifkan atau menonaktifkan domain.

**Is Primary Domain?:** Pelanggan Anda dapat memiliki lebih dari satu domain yang dipetakan untuk setiap situs. Gunakan opsi ini untuk memilih apakah ini adalah domain utama untuk situs tertentu.

**Is Secure?:** Meskipun Ultimate Multisite memeriksa apakah domain memiliki sertifikat SSL atau tidak sebelum mengaktifkannya, Anda dapat secara manual memilih untuk memuat domain dengan atau tanpa sertifikat SSL. Perhatikan bahwa jika website tidak memiliki sertifikat SSL dan Anda mencoba memaksa memuatnya dengan SSL, ini mungkin akan memberikan error.

### Memetakan nama domain kustom sebagai pengguna Subsite

Administrator subsite juga dapat memetakan nama domain kustom dari dashboard admin subsite mereka.

Pertama, Anda perlu memastikan bahwa Anda mengaktifkan opsi ini di pengaturan **Domain mapping**. Lihat screenshot di bawah.

![Pengaturan domain mapping yang mengizinkan pengguna subsite memetakan domain](/img/config/settings-domain-mapping.png)

Anda juga dapat mengatur atau mengkonfigurasi opsi ini di tingkat **Plan** atau opsi produk di **Ultimate Multisite > Products**.

![Opsi custom domains produk di pengaturan produk](/img/config/settings-domain-mapping.png)

Ketika salah satu opsi tersebut diaktifkan dan pengguna subsite diizinkan memetakan nama domain kustom, pengguna subsite seharusnya melihat metabox di halaman **Account** yang disebut **Domains**.

![Metabox Domains di halaman akun subsite](/img/admin/domains-list.png)

Pengguna dapat mengklik tombol **Add Domain** dan ini akan memunculkan jendela modal dengan beberapa instruksi.

![Modal Add Domain dengan instruksi DNS untuk pengguna subsite](/img/admin/domains-list.png)

Pengguna kemudian dapat mengklik **Next Step** dan melanjutkan untuk menambahkan nama domain kustom. Mereka juga dapat memilih apakah ini akan menjadi domain utama atau tidak.

![Field tambah nama domain kustom dengan opsi domain utama](/img/admin/domains-list.png)

![Klik Add Domain untuk memulai verifikasi DNS](/img/admin/domains-list.png)Mengklik **Add Domain** akan memulai proses verifikasi dan pengambilan informasi DNS dari domain kustom.

### Tentang Domain Syncing

Domain Syncing adalah proses di mana Ultimate Multisite menambahkan nama domain kustom ke akun hosting Anda sebagai add-on domain **agar domain mapping berfungsi**.

Domain syncing terjadi secara otomatis jika penyedia hosting Anda memiliki integrasi dengan fitur domain mapping Ultimate Multisite. Saat ini, penyedia hosting tersebut adalah _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ dan _Cpanel._

Anda perlu mengaktifkan integrasi ini di pengaturan Ultimate Multisite di tab **Integration**.

![Tab Integration di pengaturan Ultimate Multisite](/img/config/settings-domain-mapping.png)

![Pengaturan integrasi penyedia hosting untuk domain syncing](/img/config/settings-domain-mapping.png)

_Perhatikan bahwa jika penyedia hosting Anda bukan salah satu dari penyedia yang disebutkan di atas, **Anda perlu secara manual menyinkronkan atau menambahkan nama domain** ke akun hosting Anda._
