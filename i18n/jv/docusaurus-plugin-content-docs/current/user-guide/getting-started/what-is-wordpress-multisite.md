---
title: Apa iku WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Apa itu WordPress Multisite? {#what-is-wordpress-multisite}

Di dalam inti WordPress, ada fitur yang namanya ‘Multisite’ sing menelusuri asal-usulnya kembali ke tahun 2010 saat peluncuran WordPress 3.0. Sejak saat itu, fitur ini sudah banyak diperbarui dengan tujuan memperkenalkan fitur baru dan memperketat keamanan.

Intinya, WordPress multisite bisa dibayangkan begini: Sebuah Universitas punya satu instalasi WordPress utama, tapi setiap fakultas punya situs WordPress mereka sendiri.

##

## Apa Sih Tepatnya WordPress Multisite Itu? {#what-exactly-is-wordpress-multisite}

Multisite itu adalah fitur di WordPress yang memungkinkan banyak situs berbagi satu instalasi WordPress. Ketika multisite diaktifkan, situs WordPress aslinya akan diubah untuk mendukung apa yang biasanya disebut sebagai **jaringan situs (network of sites)**.

Jaringan ini berbagi sistem file (artinya **plugin dan tema juga bisa dibagi**), database, file inti WordPress, wp-config.php, dan lain-lain.

Artinya, pembaruan WordPress, tema, dan plugin hanya perlu dilakukan sekali untuk semua situs di jaringan Anda karena mereka berbagi file yang sama di sistem file.

Fakta ini adalah salah satu keuntungan utama dari multisite, karena memungkinkan Anda menambah jumlah situs yang dikelola sambil menjaga jumlah tugas yang perlu Anda lakukan untuk memelihara situs pelanggan tetap sama.

##

## Subdomain atau Subdirektori? {#subdomain-or-subdirectory}

Ada dua cara menjalankan WordPress multisite – dan kamu harus memilih salah satunya saat mengubah instalasi WordPress biasa menjadi instalasi multisite:

**Subdomain:** contohnya: [site.domain.com](http://site.domain.com)

…atau

**Subdirektori:** contohnya: [yourdomain.com/site](http://yourdomain.com/site)

Setiap mode punya kelebihan dan kekurangan yang perlu kamu pertimbangkan saat membuat keputusan ini.

Penting banget kanggo diperhatikan: sepisan sampeyan wis mutusake, ngowahi jaringan saka subdirectory menyang subdomain utawa sebaliknya kuwi pancen angel banget – mligine yen sampeyan wis duwe sawetara situs sing wis digawe.

Sadurunge nggawe keputusan kuwi, iki sawetara poin sing kudu dieling-eling:

**Mode Subdirectory** paling gampang kanggo persiapan lan pemeliharaan. Iki kedadeyan amarga kabeh situs mung dadi jalur (path) sing nempel ing domain utama (contone [yourdomain.com/subsite](http://yourdomain.com/subsite)). Akibaté, sampeyan mung butuh **satu sertifikat SSL** kanggo domain utama lan iku bakal nutupi kabeh jaringan.

Nanging, amarga struktur URL-e, Google lan sebagian besar mesin pencari liyane bakal nganggap kabeh subsite ing jaringan berbasis subdirectory sampeyan minangka siji situs gedhe. Akibaté, konten sing ditambahi ing subsite dening pelanggan sampeyan bisa ngganggu kinerja SEO situs utama sampeyan, contone. Tingkat dampake iku bisa dipertanyakan lan ana argumen yen nglakoni pengaturan kaya ngono malah bisa migunani kanggo kinerja SEO.

**Mode Subdomain** rada luwih rumit kanggo disiapake, nanging struktur URL-e (contone [subsite.yournetwork.com](http://subsite.yournetwork.com)) lumrah dianggep "luwih profesional".

Salah siji tantangan utama pas ngatur mode subdomain ya soal cakupan SSL (HTTPS) kanggo kabeh jaringan. Iki mergo browser nganggap subdomain ku iku entitas sing terpisah. Akibaté, sampeyan bakal butuh sertifikat SSL sing beda kanggo saben subdomain ing jaringanmu, utawa sertifikat khusus sing diarani **Wildcard SSL certificate**. Ing taun-taun anyar, penyedia hosting lan panel wis nambah kualitasane kanggo penyediaan SSL lan sawetara nawakake wildcard certificates kanthi siji klik, nglebur jarak antara loro mode kuwi saka segi kerumitan anggone ngatur.

Nang nglawan karo mode subdirectory, subsites ing jaringan berbasis subdomain dianggap dening mesin pencari minangka website sing terpisah, sing tegese konten sing ana ing satu subsite ora bakal ngganggu kinerja SEO subsites liyane.

## Super Admin {#the-super-admin}

Instalasi WordPress single-site ngidini sampeyan nambah pirang-pirang user tanpa wates lan menehi peran user sing beda karo izin sing beda kanggo saben user kasebut.

Ing WordPress Multisite, jenis user anyar bakal dibuka: **super admin** – lan panel admin anyar uga dibukak: **network admin panel**.

Miturut jenenge, super admin duwe kekuatan super ing jaringan, bisa ngatur kabeh subsites, plugin, tema, sakabehane!

Sawise sampeyan ngubah instalasi WordPress single-site dadi multisite, admin asli saka site tunggal kuwi bakal otomatis di-upgrade dadi super admin.

Plugin lan tema mung bisa dipasang utawa dilepas saka network admin panel dening super admin. Admin subsite banjur bisa milih kanggo ngaktifake utawa nggawe plugin utawa tema kasebut aktif, kajaba yen super admin jaringan ngaktifake plugin, sing bakal maksa iku aktif kanggo kabeh subsites saiki wektu.

_Catatan: seperti yang bisa Anda lihat, mengundang seseorang ke jaringan Anda dan memberikan status super admin memberi pengguna tersebut kendali penuh atas seluruh jaringan Anda. Sebagai contoh, super admin lain bahkan bisa menghapus status super admin Anda, yang secara efektif akan mengunci Anda dari panel admin jaringan Anda sendiri. Untuk memungkinkan pelanggan Ultimate Multisite memiliki kontrol yang lebih rinci tentang apa saja yang dapat dilakukan oleh super admin tambahan, kami punya add-on bernama Support Agents. Add-on ini memungkinkan Anda membuat jenis pengguna lain – yaitu agen – dengan hanya izin yang mereka butuhkan untuk melakukan tugas mereka di jaringan._

## Apa yang sama antar subsites dan apa yang tidak {#what-is-shared-among-subsites-and-what-is-not}

Seperti yang sudah kita sebutkan sebelumnya, salah satu keuntungan utama dari WordPress multisite adalah semua subsites berbagi konfigurasi, file inti (core files), tema, plugin, file core WordPress, dll.

Namun, ada beberapa elemen yang lingkupnya terpisah untuk setiap subsite.

- Misalnya, setiap subsite mendapatkan folder unggahan (uploads) sendiri. Akibatnya, unggahan yang dibuat oleh pengguna dari satu subsite tertentu tidak bisa diakses di subsite lain.
- Setiap subsite punya panel admin khusus dan bisa mengaktifkan atau menonaktifkan plugin atau tema kecuali jika itu aktif di seluruh jaringan oleh super admin.
- Sebagian besar tabel database dibuat untuk setiap subsite, artinya postingan (posts), komentar (comments), halaman (pages), pengaturan (settings), dan lainnya lingkupnya terpisah untuk setiap subsite.

## Manajemen Pengguna di WordPress Multisite {#user-management-on-wordpress-multisite}

Salah satu hal yang cukup sensitif di WordPress multisite adalah manajemen pengguna. Tabel pengguna WordPress adalah salah satu dari sedikit tabel yang dibagikan di antara semua subsites.

Susunan ini bisa menimbulkan beberapa masalah tergantung pada apa yang Anda rencanakan untuk dibangun dengan jaringan Anda. Contoh di bawah ini membantu menggambarkan masalah yang paling mendesak.

Bayangkan skenario berikut:

Kowe nggawe jaringan WordPress multisite lan mulai nawakake subsites kanggo wong-wong sing arep duwe toko online nganggo iuran bulanan.

Sampeyan nampa pelanggan sepisan – John. Sampeyan nggawe situs kanggo John ing jaringan sampeyan, instal kabeh plugin sing dibutuhake, banjur nggawe user kanggo John supaya dhewe bisa ngelola tokone.

Terus teka pelanggan kapindho – Alice. Sampeyan nindakake hal sing padha kanggo dhewe lan saiki dhewe duwe toko ing jaringan sampeyan uga.

John lan Alice iku pelanggan sampeyan, nanging dhewe ora kenal. Sing luwih penting, yen salah siji saka dhewe ngunjungi situs web toko liyane, ora ana carane kanggo ngerti yen toko iki di-hosting ing jaringan situs sing padha.

Sawijining dina, John butuh tuku sepatu anyar lan dhewe nemokake sing paling pas ing toko Alice. Nalika dhewe nyoba ngrampungake pembelian, dhewe nampa pesan error “email wis ana”, sing aneh banget amarga John 100% yakin iki pertama kaline dhewe ngunjungi situs web Alice.

Apa sing kedadeyan kene yaiku user John di-share ing sak jaringan supaya nalika dhewe nyoba nggawe akun kanggo checkout ing situs Alice, WordPress bakal nemokake yen ana user kanthi alamat email sing padha wis ana lan bakal mbuwang error.

_Cathetan: Kita ngerti betapa parah kahanan kuwi gumantung marang kasus pakonmu, mula Ultimate Multisite duwe pilihan sing bisa nglewati pengecekan biasa kanggo user sing wis ana, menehi kemungkinan nggawe akeh akun nganggo alamat email sing padha. Saben akun diikat karo subsight, mula risiko bentrokan tetep minimal. Ing conto ing dhuwur, John ora bakal nampa pesan error lan bakal bisa tuku sepatu kuwi tanpa masalah. Pilihan iki diarani Enable Multiple Accounts, lan bisa diaktifake ing Ultimate Multisite → Settings → Login & Registration._

Sanajan tabel user iku di-share, admin subsite utawa super admin isih bisa nambah utawa ngilangake user saka subsite, lan dhewe uga bisa duwe peran user sing beda ing subsite sing beda.

## Pertimbangan kinerja (Performance considerations) {#performance-considerations}

WordPress multisite pancen kuat banget yen urusan akeh situs sing bisa didukung. Iki bisa diuji kanthi fakta yen [WordPress.com](https://WordPress.com), Edublogs, lan Campuspress iku kabeh layanan berbasis multisite lan saben host nampa ribuan situs.

Sanajan secara teori ora ana batas maksimum jumlah situs sing bisa kok hosting ing siji instalasi WordPress multisite, ing praktiknya jumlah situs sing bisa dijalankan kanthi sae bisa beda banget gumantung sawetara faktor: seberapa dinamis situs-situs kasebut, plugin apa wae sing tersedia kanggo subsite, lsp.

Minangka patokan umum, jaringanmu senajan luwih sederhana, yaiku luwih apik. Pilih situs-situs sing isine ora pati dinamis (sing nggaweake dadi kandidat apik kanggo strategi caching sing agresif) lan jaga tumpukan plugin supaya sering mungkin (semakin cilik jumlah plugin aktif, yaiku saiki luwih becik). Iki bisa nambah akeh subsite sing bisa kok hosting.

Bagian sing paling apik ya, amarga kabeh iki WordPress, alat-alat sing wis kok kenal lan seneng kanggo peningkat kinerja bakal tetep cocok kanggo jaringan multisite.

Bottleneck utama kanggo multisite iku database, nanging yen kabeh sing liyane wis diatur kanthi bener, bisa butuh ribuan situs sadurunge masalah kuwi dadi perhatianmu. Sanajan ngono, ana solusi sing bisa ditambahi kanthi bertahap ing titik kuwi (kaya solusi sharding database, contone).
