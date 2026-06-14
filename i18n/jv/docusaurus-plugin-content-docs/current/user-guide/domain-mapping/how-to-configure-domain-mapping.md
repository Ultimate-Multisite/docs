---
title: Kepiye carane ngatur pemetaan domain
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Cara Mengatur Pemetaan Domain (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Salah satu fitur paling ampuh dari jaringan premium itu adalah kemampuan buat klien kita bisa pasang domain tingkat atas ke situs mereka. Lagipula, mana yang kelihatan lebih profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) atau [_**joesbikeshop.com**_](http://joesbikeshop.com)? Makanya Ultimate Multisite menawarkan fitur itu sudah ada dari awal, tanpa perlu pakai plugin pihak ketiga.

## Apa itu pemetaan domain?

Seperti namanya, pemetaan domain adalah kemampuan yang ditawarkan oleh Ultimate Multisite untuk menerima permintaan domain kustom dan memetakannya ke situs yang sesuai di jaringan dengan domain tertentu terpasang.

### Cara mengatur pemetaan domain di Jaringan Ultimate Multisite Anda

Pemetaan domain butuh beberapa pengaturan dari pihak Anda supaya bisa jalan. Untungnya, Ultimate Multisite sudah otomatis mengerjakan bagian yang susah buat Anda jadi gampang memenuhi syaratnya.

Selama instalasi Ultimate Multisite, wizard akan otomatis menyalin dan menginstal **sunrise.php** ke folder yang ditentukan. **Wizard tidak akan mengizinkan Anda untuk melanjutkan sampai langkah ini selesai**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Artinya, setelah wizard instalasi Ultimate Multisite selesai mengatur jaringan Anda, Anda bisa langsung mulai memetakan domain kustomnya.

Perlu diingat bahwa pemetaan domain di Ultimate Multisite tidak wajib. Anda punya pilihan untuk menggunakan fungsi pemetaan domain bawaan WordPress Multisite atau solusi pemetaan domain lainnya.

Yen perlu matikan pemetaan domain Ultimate Multisite supaya bisa pakai solusi pemetaan domain lain? Tenang saja, kamu bisa matikan fitur ini di bawah **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Tepat di bawah opsi ini, kamu juga akan lihat opsi **Force Admin Redirect**. Opsi ini memungkinkan kamu mengontrol apakah pelanggan bisa mengakses dashboard admin mereka baik di domain kustom maupun subdomain, atau hanya di salah satunya saja.

Kalau kamu memilih **Force redirect to mapped domain**, pelanggan cuma bisa akses dashboard admin mereka di domain kustomnya saja.

Opsi **Force redirect to network domain** akan melakukan kebalikannya—pelanggan hanya diizinkan mengakses dashboard mereka di subdomain, meskipun mencoba *sign in* dari domain kustom mereka.

Dan opsi **Allow access to the admin by both mapped domain domain and network domain** mengizinkan mereka mengakses dashboard admin baik di subdomain maupun domain kustomnya.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Ada dua cara untuk memetakan domain kustom. Yang pertama adalah dengan memetakan nama domain dari *network admin dashboard* kamu sebagai super admin, dan yang kedua melalui *subsite admin dashboard* di bawah halaman akun (*account page*).

Tapi sebelum kamu mulai memetakan domain kustom ke salah satu subsite di jaringan kamu, kamu harus memastikan **DNS settings** dari nama domainnya sudah dikonfigurasi dengan benar.

###

### Memastikan pengaturan DNS domain sudah benar

Supaya pemetaan bisa jalan, sampeyan kudu mastiake domain sing arep dipetika iku ngarah marang IP address Network sampeyan. Cathet, sampeyan butuh IP address Network - yaa, IP address saka domain sing diinstal Ultimate Multisite kuwi - dudu IP address domain kustom sing arep dipetika. Kanggo nggoleki IP address domain tartamtu, kita saranke menyang [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), contone.

Kanggo memetika domain kanthi bener, sampeyan kudu nambah **A RECORD** ing konfigurasi **DNS** sampeyan sing ngarah marang IP address kuwi. Pengelolaan DNS iku beda banget antarane registrar domain sing beda, nanging ana akeh tutorial online sing nyakup bab kuwi yen sampeyan goleki " _Creating A Record on XXXX_ " ing ngendi XXXX yaa registrar domain sampeyan (contone: " _Creating A Record on_ _GoDaddy_ ").

Yen sampeyan nemokake masalah nalika nggolek cara iki bisa jalan, **hubungi dukungan registrar domain sampeyan** lan dheweke bakal bisa mbantu babagan bagian iki.

Yen sampeyan arep ngidini klien sampeyan memetika domain dewe, dheweke kudu nindakake kerjane dhewe ing bagian iki. Arahake marang sistem dukungan registrar deweke yen dheweke nemokake ora bisa nggawe A Record.

### Memetika nama domain kustom dadi Super Admin

Nalika sampeyan login minangka super admin ing network sampeyan, sampeyan gampang nambah lan ngelola nama domain kustom kanthi menyang **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Ing halaman iki, sampeyan bisa klik tombol **Add Domain** ing atas lan iki bakal mbukak jendela modal sing isine sampeyan bisa ngatur lan ngisi **custom domain name**, **subsite** sing arep dipasang custom domain kuwi, lan mutusake apa arep dadi **primary domain** utawa ora (cathet yen sampeyan bisa mapake **beberapa nama domain kanggo satu subsite**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Sawise ngisi kabeh informasi, sampeyan bisa klik tombol **Add Existing Domain** ing ngisor.

Iki bakal miwiti proses verifikasi lan njupuk informasi DNS saka custom domain kuwi. Sampeyan uga bakal weruh log ing ngisor halaman kanggo ngikuti proses sing lagi dilakoni. Proses iki bisa butuh sawetara menit kanggo rampung.

Ultimate Multisite v2.13.0 uga otomatis nggawe catatan domain internal nalika situs anyar digawe ing host sing kudu diperlani minangka domain per-site. Yen host kuwi dadi domain utama jaringan, utawa salah siji domain dasar formulir checkout sing diatur ing kolom **Site URL**, maka catatan mapped-domain otomatis bakal dilewati supaya domain dasar sing umum tetep kersa kanggo saben situs sing nggunakake.

**Stage** utawa status kudu owah saka **Checking DNS** dadi **Ready** yen kabeh wis diatur kanthi bener.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Yen sampeyan klik ing nama domain, sampeyan bakal bisa weruh sawetara pilihan ing njero kuwi. Ayo ndelok ringkes babagan pilihan-pilihan kuwi:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Tahap:** Ini adalah tahap di mana domain berada. Saat kamu pertama kali menambahkan domain, kemungkinan besar akan ada di tahap **Checking DNS**. Prosesnya akan mengecek entri DNS dan memastikan semuanya benar. Setelah itu, domain akan dipindahkan ke tahap **Checking SSL**. Ultimate Multisite akan memeriksa apakah domain sudah punya SSL atau belum dan akan mengkategorikan domain kamu sebagai **Ready** atau **Ready (tanpa SSL)**.

**Site:** Ini adalah subdomain yang terkait dengan domain ini. Domain yang dipetakan akan menampilkan konten dari situs spesifik ini.

**Active:** Kamu bisa menyalakan atau mematikan opsi ini untuk mengaktifkan atau menonaktifkan domain tersebut.

**Is Primary Domain?:** Pelanggan kamu bisa punya lebih dari satu domain yang dipetakan untuk setiap situs. Gunakan opsi ini untuk memilih apakah ini adalah domain utama untuk situs tertentu.

**Is Secure?:** Meskipun Ultimate Multisite sudah memeriksa apakah domain punya sertifikat SSL atau belum sebelum mengaktifkannya, kamu masih bisa memilih secara manual untuk memuat domain dengan atau tanpa sertifikat SSL. Perhatikan bahwa jika situs web tidak punya sertifikat SSL dan kamu mencoba memaksa memuatnya dengan SSL, itu mungkin akan memberikan error.

### Memetakan nama domain kustom sebagai Subsite user

Administrator subsite juga bisa memetakan nama domain kustom dari dashboard admin subsite mereka.

Pertama, kamu perlu memastikan bahwa opsi ini sudah diaktifkan di bawah pengaturan **Domain mapping**. Lihat tangkapan layar di bawah ini.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Kamu juga bisa mengatur atau mengonfigurasi opsi ini di bawah level **Plan** atau pilihan produk di **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Nalika salah soko pilihan kasebut diaktifake lan user subsite diidinake map custom domain, user subsite kuwi bakal weruh metabox ing ngisor halaman **Account** sing jenenge **Domains**.

<!-- Screenshot unavailable: Metabox Domains ing halaman Account subsite karo tombol Add Domain -->

User bisa klik tombol **Add Domain** lan iku bakal mbukak jendela modal kanthi instruksi tartamtu.

<!-- Screenshot unavailable: Modal Add Domain nuduh instruksi DNS A-record kanggo user subsite -->

Terus, user bisa klik **Next Step** lan lanjut nambah nama custom domain. Dheweke uga bisa milih yen iki bakal dadi domain utama utawa ora.

<!-- Screenshot unavailable: Form Add Domain kanthi field nama custom domain lan toggle domain utama -->

<!-- Screenshot unavailable: Langkah konfirmasi Add Domain sing ngicu verifikasi DNS -->

Klik **Add Domain** bakal miwiti proses verifikasi lan njupuk informasi DNS saka custom domain kuwi.

### Tentang Domain Syncing

Domain Syncing iku proses nalika Ultimate Multisite nambah nama custom domain menyang akun hostingmu minangka add-on domain **supaya pemetaan domain bisa kerja**.

Domain syncing otomatis bakal kedadean yen penyedia hostingmu duwe integrasi karo fitur pemetaan domain Ultimate Multisite. Saiki, penyedia hosting kasebut yaiku _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ lan _Cpanel._

Yen integrasi penyedia host aktif, Ultimate Multisite uga bisa nggoleki (enqueue) tugas pembuatan DNS utawa subdomain sisi provider kanggo situs sing lagi digawe anyar. Yen ora ana integrasi sing ngrungokake tugas kuwi, pekerjaan latar belakang bakal dilewati supaya ora ana entri antrean no-op. Pengecekan DNS lan SSL kanggo domain sing dipet terus mlaku liwat proses tahap domain lumrah.

Kowe kudu ngaktifake integrasi iki ing pengaturan Ultimate Multisite nang tab **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Cathet yen yen penyedia hostingmu ora ana ing daftar sing wis disebutake ing dhuwur, **kowe kudu nyiapake sinkronisasi manual utawa nambah domain** nang akun hostingmu._
