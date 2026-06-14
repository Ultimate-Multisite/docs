---
title: Kumaha Ngatur Pemetaan Domain
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kumaha Konfigurasi Pemetaan Domain (v2)

_**CATATAN PENTING: Artikel ieu merujuk kana Ultimate Multisite versi 2.x.**_

Salah sahiji fitur paling ampuh tina jaringan premium téh nyaéta kamampuhan pikeun nawarkeun ka pelanggan urang kasempetan ngaitkeun domain tingkat atas (top-level domain) ka situs maranéhna. Sabab naon deui, mana anu leuwih profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) atawa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Éta sababna Ultimate Multisite nawarkeun fitur éta langsung aya dina sistem, teu perlu ngagunake plugin pihak katilu.

## Naon éta pemetaan domain?

Saperti ngaranana, pemetaan domain téh nyaéta kamampuhan anu ditawarkeun ku Ultimate Multisite pikeun nampi paménta domain kustom jeung mapan paménta éta ka situs anu bersesuaian dina jaringan kalayan domain nu dipasang.

### Kumaha cara ngatur pemetaan domain dina Jaringan Ultimate Multisite anjeun

Pemetaan domain butuh sababaraha pengaturan ti pihak anjeun sangkan bisa lumangsung. Untungna, Ultimate Multisite ngotomatiskeun gawé anu hésé pikeun anjeun sangkan gampang nyukake syarat-syaratna.

Dina waktu instalasi Ultimate Multisite, wizard bakal otomatis nyalin jeur nginstal **sunrise.php** ka folder anu ditunjuk. **Wizard téh moal ngidinan anjeun maju sakali langkah ieu réngsé.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ieu hartina, saatos wizard instalasi Ultimate Multisite réngsé ngatur jaringan anjeun, anjeun bisa langsung mulai mapan domain kustom.

Catatan yén pemetaan domain dina Ultimate Multisite téh teu wajib. Anjeun boga pilihan pikeun ngagunake fungsi pemetaan domain asli WordPress Multisite atawa solusi pemetaan domain séjénna.

Lamun anjeun peryogi ngalaksanake (disable) pemetaan domain Ultimate Multisite pikeun ngajadike tempat pikeun solusi pemetaan domain séjén, anjeun bisa matike fitur ieu di bawah **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Di handap pilihan ieu, anjeun ogé bisa ningali pilihan **Force Admin Redirect**. Pilihan ieu ngajadikeun anjeun bisa ngontrol upami pelanggan bakal bisa ngakses dashboard admin maranéhna di domain kustom jeung subdomain atawa ngan ukur di salah sahiji.

Lamun anjeun milih **Force redirect to mapped domain**, pelanggan anjeun ngan bakal bisa ngakses dashboard admin maranéhna di domain kustomna.

Pilihan **Force redirect to** **network domain** bakal ngalakukeun hal kebalikan - pelanggan anjeun ngan diidinakeun ngakses dashboard maranéhna di subdomain, sanajan keur nyobian *sign in* di domain kustomna.

Jeung pilihan **Allow access to the admin by both mapped domain domain and network domain** ngajadikeun maranéhna bisa ngakses dashboard admin maranéhna di subdomain jeung domain kustomna.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Ada dua cara pikeun memetakan domain kustom. Kahiji nya ku cara memetakan nama domain ti dashboard admin jaringan anjeun salaku super admin jeung kahiji deui ngaliwatan dashboard admin subsite di bawah halaman *account*.

Tapi saméméan anjeun mulai memetakan domain kustom ka salah sahiji subsite dina jaringan anjeun, anjeun kudu mastikeun yén **DNS settings** tina nama domain téh geus dikonfigurasi kalayan bener.

###

### Mastikeun DNS settings domain geus dikonfigurasi kalayan bener

Supaya pemetaan bisa jalan, kudu dipastikan domain anu rék dipetkeun téh nunjuk ka IP address Jaringan anjeun. Perhatosanna, anjeun butuh IP address Jaringan - nyaéta IP address domain di mana Ultimate Multisite dipasang - lain IP address domain kustom anu rék dipetkeun. Pikeun nyari IP address domain tartamtu, urang saraha ka [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), conto saperti kitu.

Supaya pemetaan domain téh bener, anjeun kudu nambahan **A RECORD** dina konfigurasi **DNS** anjeun anu nunjuk ka **IP address** éta. Manajemen DNS béda pisan antara registrar domain nu beda, tapi aya loba tutorial online anu ngajelaskeun éta lamun anjeun nyari " _Creating A Record on XXXX_ " di mana XXXX nyaéta registrar domain anjeun (conto: " _Creating A Record on_ _GoDaddy_ ").

Lamun anjeun nempo hésé pikeun ngajantenkeun ieu jadi jalan, **hubungi dukungan registrar domain anjeun** sarta maranéhna bakal bisa nulungan anjeun dina bagian éta.

Upami anjeun rék ngidinan klien anjeun pikeun mapetkeun domain sorangan, maranéhna kudu nyieun gawé dina bagian ieu sorangan. Arahkeun maranéhna ka sistem dukungan registrarna lamun maranéhna nempo hésé pikeun nyiptake A Record.

### Mapetkeun nama domain kustom salaku Super Admin

Lamun anjeun *login* salaku super admin di jaringan anjeun, anjeun bisa gampang nambahan jeung ngatur nama domain kustom ku cara indit ka **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Di bawah halaman ini, Anda bisa klik tombol **Add Domain** di bagian atas dan ini akan membuka jendela modal tempat Anda bisa mengatur dan mengisi **custom domain name**, **subsite** yang ingin Anda terapkan nama domain kustom tersebut, dan memutuskan apakah Anda ingin mengaturnya sebagai **primary domain** atau tidak (perhatikan bahwa Anda bisa memetakan **beberapa nama domain ke satu subsite**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Setelah semua informasi diisi, Anda bisa klik tombol **Add Existing Domain** di bagian bawah.

Ini akan memulai proses verifikasi dan pengambilan informasi DNS dari nama domain kustom tersebut. Anda juga akan melihat log di bagian bawah halaman untuk mengikuti proses yang sedang berjalan. Proses ini mungkin memakan waktu beberapa menit untuk selesai.

Ultimate Multisite v2.13.0 juga secara otomatis membuat catatan domain internal ketika situs baru dibuat di host yang seharusnya diperlakukan sebagai domain per-situs (per-site domain). Jika host tersebut adalah domain utama jaringan, atau salah satu domain dasar formulir checkout bersama yang dikonfigurasi pada kolom **Site URL**, maka catatan domain yang dipetakan secara otomatis dilewati agar domain dasar bersama tetap tersedia untuk setiap situs yang menggunakannya.

**Stage** atau status akan berubah dari **Checking DNS** menjadi **Ready** jika semuanya sudah diatur dengan benar.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Jika Anda mengklik nama domain, Anda akan bisa melihat beberapa opsi di dalamnya. Mari kita lihat sekilas:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Tahap:** Ieu mangrupakeun tahapan di mana domain éta keadaanna ayeuna. Lamun anjeun mindahkeun domain, biasana bakal aya dina tahapan **Checking DNS**. Prosesna bakal nguji entri DNS jeung ngabenerkeun yén éta bener. Terus, domain éta bakal dipindah ka tahapan **Checking SSL**. Ultimate Multisite bakal nguji upami domain éta geus aya SSL atawa henteu, sarta bakal ngabagi kategori domain anjeun jadi **Ready** atawa **Ready (tanpa SSL)**.

**Site:** Subdomain anu patali jeung domain ieu. Domain anu dipetakan bakal nunjukkeun konten tina situs spesifik éta.

**Active:** Anjeun bisa nyaluyukeun pilihan ieu on atawa off pikeun ngaktifkeun atawa ngaluarkeun domain.

**Is Primary Domain?:** Pelanggan anjeun bisa gaduh leuwih ti hiji domain anu dipetakan pikeun unggal situs. Gunakeun pilihan ieu pikeun milih upami ieu mangrupakeun domain utama pikeun situs éta.

**Is Secure?:** Sanajan Ultimate Multisite nguji upami domain geus aya sertifikat SSL atawa henteu saméméh ngaktifkeunana, anjeun masih bisa milih manual pikeun ngaload domain kalawan atawa tanpa sertifikat SSL. Perhatikeun yén lamun situs teu gaduh sertifikat SSL jeung anjeun nyoba ngagancangkeun (force load) ku SSL, éta bisa ngahasilkeun error.

### Ngaparkeun nama domain kustom salaku Subsite user

Administrator subsite ogé bisa maparkeun nama domain kustom tina dashboard admin subsite maranéhna.

Kahiji, anjeun kudu mastikeun yén anjeun geus ngaktifkeun pilihan ieu di bawah pengaturan **Domain mapping**. Tingali gambar di handap.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Anjeun ogé bisa ngatur atawa ngarancang pilihan ieu di bawah level **Plan** atawa opsi produk dina **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Lamun salah sahiji pilihan éta diaktifkeun sareng user subsite diidinan pikeun map domain kustom, user subsite bakal ningali metabox di handap halaman **Account** kalayan ngaran **Domains**.

<!-- Screenshot unavailable: Metabox Domains dina halaman Account subsite jeun tombol Add Domain -->

User bisa klik tombol **Add Domain** sareng éta bakal ngajak modal window anu aya sababaraha instruksi.

<!-- Screenshot unavailable: Modal Add Domain nunjukkeun instruksi DNS A-record pikeun user subsite -->

Terus, user bisa klik **Next Step** sareng lanjutna kanggo nambah domain kustom éta. Maranéhna ogé bisa milih upami ieu bakal jadi domain utama atawa henteu.

<!-- Screenshot unavailable: Form Add Domain kalayan field nama domain kustom jeung toggle domain utama -->

<!-- Screenshot unavailable: Langkah konfirmasi Add Domain anu ngajak verifikasi DNS -->

Klik **Add Domain** bakal ngamimitian prosés verifikasi sareng ngahapkeun informasi DNS domain kustom éta.

### Tentang Domain Syncing

Domain Syncing téh mangrupa prosés di mana Ultimate Multisite nambahan nama domain kustom ka akun hosting anjeun salaku domain tambahan **supaya pemetaan domain bisa lumangsung**.

Domain syncing otomatis kajadian upami penyedia hosting anjeun aya integrasi sareng fitur pemetaan domain Ultimate Multisite. Ayeuna, penyedia hosting saperti _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ sareng _Cpanel._

Lamun integrasi penyedia hosting aktif, Ultimate Multisite ogé bisa ngajak (enqueue) tugas pembuatan DNS atawa subdomain sisi penyedia kanggo situs anu anyar. Upami teu aya integrasi anu nunggu tugas éta, *background job* bakal dilewati pikeun nyingkahan entri antrian nu teu dipaké (*no-op queue entries*). Pengecekan DNS sareng SSL pikeun domain anu dipetkeun terus lumangsung ngaliwatan prosés tahap domain biasa.

Anjeun kudu ngaktifkeun integrasi ieu dina pengaturan Ultimate Multisite di bawah tab **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Catetan: Upami penyedia hosting anjeun lain salah sahiji anu disebut di luhur, **anjeun kudu ngabagéake (sync) atawa nambahan domain** dina akun hosting anjeun._
