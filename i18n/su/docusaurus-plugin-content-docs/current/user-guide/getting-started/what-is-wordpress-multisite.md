---
title: Naon éta WordPress Multisite téh?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Naon Ari WordPress Multisite?

Di dalam inti WordPress, aya fitur disebut ‘Multisite’ anu asalna ti tahun 2010 nalika ngalancarkeun WordPress 3.0. Ti waktu éta nepi ayeuna geus loba revisi anu tujuanna nambahan fitur anyar jeung nguatkeun keamanan.

Intina mah, WordPress multisite bisa dipikir saperti kieu: Sakola (Universitas) ngajaga hiji instalasi WordPress tapi unggal fakultas ngajaga situs WordPressna sorangan.

##

## Naon Sih WordPress Multisite téh?

Multisite téh fitur di WordPress anu ngidinan sababaraha situs pikeun ngagunake hiji instalasi WordPress tunggal. Nalika multisite diaktifkeun, situs WordPress aslina bakal diubah supados bisa ngadukung naon biasana disebut **jaringan situs (network of sites)**.

Jaringan ieu babarengan ngagunake sistem file (hartina **plugin je tema ogé jadi milik babarengan**), database, file inti WordPress, wp-config.php, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, jsb, js

Satu hal penting anu kudu diperhatikeun: saatos anjeun mutuskeunana, ngarobah jaringan ti subdirectory ka subdomain atawa sebaliknya téh hésé pisan – utamina lamun anjeun geus aya sababaraha situs nu geus dibentuk.

Saméméh mutuskeun éta, ieu sababaraha hal anu kudu dipikaharti:

**Mode Subdirectory** nyaéta mode anu paling gampang dina widang persiapan jeung ngajaga (maintenance). Ieu kajadian sabab sakabé situs téh ngan ukur jaluyur (path) nu nempel kana domain utama (contona [yourdomain.com/subsite](http://yourdomain.com/subsite)). Salaku hasil tina éta, anjeun ngan ukur butuh **satu SSL certificate** pikeun domain utama jeung éta bakal ngawengku sakabé jaringan.

Di waktu nu sangarengan, alatan struktur URL-na, Google jeung sababaraha mesin pencari séjénna bakal nganggap sakabé subsitus dina jaringan berbasis subdirectory anjeun téh salaku hiji situs gedé. Salaku hasil tina éta, konten anu ditambihan ka subsitus ku pelanggan anjeun bisa mangaruhan kana kinerja SEO situs utama anjeun, conto. Tingkat dampake mah bisa dibahas deui jeung aya argumen yén ngagadé susunan saperti kitu bisa jadi mangpaat pikeun kinerja SEO.

**Mode Subdomain** rada hésé dipersiapkeun, tapi struktur URL-na (contona [subsite.yournetwork.com](http://subsite.yournetwork.com)) biasana dianggap "leuwih profesional".

Salah sahiji salah sahiji dina ngatur mode subdomain téh nyaéta pangawalan SSL (HTTPS) pikeun sakuliah jaringan. Ieu sabab sabab browser nganggap subdomain téh salaku entitas anu pisah. Salaku akibatna, anjeun bakal butuh sertifikat SSL nu béda pikeun unggal subdomain di jaringan anjeun, atawa sertifikat téh khusus disebut **Wildcard SSL certificate**. Dina taun-taun ka tukang, penyedia hosting je panel ngagancangkeun (provisioning) SSL geus leuwih maju, sarta aya nu nawarkeun wildcard certificate ngan ku klik tombol, ngalungkeun jurang antara dua mode éta dina hal kerumitan ngaturana.

Kontras jeung mode subdirectory, subsite dina jaringan berbasis subdomain dianggap ku mesin pencari salaku situs web anu pisah, hartina konten anu aya di hiji subsite teu bakal ganggu kinerja SEO subsite séjén pisan.

## Super Admin

Instalasi WordPress tunggal (single-site) ngajak anjeun nambahan jumlah pengguna tanpa wates jeung méré peran pengguna nu béda jeung izin nu béda ka unggal pengguna éta.

Dina WordPress Multisite, tipe pengguna anyar bakal dibuka: **super admin** – sarta panel admin anyar bakal dibuka: **network admin panel**.

Saperti ngaranana, super admin boga kakuatan di jaringan, bisa ngatur sakabéh subsite, plugin, tema, sagala rupa!

Sakali anjeun ngubah instalasi WordPress tunggal jadi multisite, admin asli situs tunggal éta bakal otomatis naék pangkat jadi super admin.

Plugin jeung tema ngan bisa dipasang atawa dilepas tina network admin panel ku super admin. Admin subsite tuluy bisa milih pikeun ngaktifkeun atawa ngalaksanakeun plugin atawa tema éta, kecuali upami super admin jaringan ngaktifkeun hiji plugin, nu bakal ngajadikeun éta aktif di sakabéh subsite salawasna.

_Catatan: seperti yang bisa Anda lihat, mengundang seseorang ke jaringan Anda dan memberikan status super admin memberi pengguna tersebut kendali penuh atas seluruh jaringan Anda. Sebagai contoh, super admin lain bahkan bisa menghapus status super admin Anda, yang secara efektif akan mengunci Anda dari panel admin jaringan Anda sendiri. Untuk memungkinkan pelanggan Ultimate Multisite memiliki kontrol yang lebih rinci tentang apa saja yang dapat dilakukan oleh super admin tambahan, kami punya add-on bernama Support Agents. Add-on ini memungkinkan Anda membuat jenis pengguna lain – agen – dengan hanya izin yang mereka butuhkan untuk melakukan tugas mereka di jaringan._

## Apa yang dibagi antar subsites dan apa yang tidak

Seperti yang sudah kita sebutkan sebelumnya, salah satu keuntungan utama dari WordPress multisite adalah semua subsites berbagi konfigurasi, file inti (core files), tema, plugin, file inti WordPress, dan sebagainya.

Namun, ada beberapa elemen yang dikelompokkan dengan rapi berdasarkan setiap subsite.

- Misalnya, setiap subsite mendapatkan folder unggahan (uploads folder) sendiri. Akibatnya, unggahan yang dibuat oleh pengguna dari satu subsite tertentu tidak bisa diakses di subsite lain.
- Setiap subsite memiliki panel admin khusus dan dapat mengaktifkan atau menonaktifkan plugin atau tema kecuali jika itu aktif di jaringan oleh super admin.
- Sebagian besar tabel database dibuat untuk setiap subsite, artinya postingan (posts), komentar (comments), halaman (pages), pengaturan (settings), dan lainnya dikelompokkan untuk setiap subsite.

## Manajemen pengguna di WordPress Multisite

Salah satu hal yang cukup sensitif di WordPress multisite adalah manajemen pengguna. Tabel pengguna WordPress adalah salah satu dari sedikit tabel yang dibagikan di antara semua subsites.

Susunan ini bisa menimbulkan beberapa masalah tergantung pada apa yang Anda rencanakan untuk dibangun dengan jaringan Anda. Contoh di bawah ini membantu menggambarkan masalah yang paling mendesak.

Bayangkan skenario berikut:

Anjeun ngadiri jaringan WordPress multisite jeung mulai nawarke subsites pikeun jalma anu hayang punya toko e-commerce kalayan bayaran bulanan.

Manéhna meunang pelanggan payung kahiji – John. Anjeun nyiptake hiji situs keur John dina jaringan anjeun, ngalaksanake sakabé plugin anu peryogi, terus nyiptake user keur John sangkan manéhna bisa ngatur tokona.

Terus datang pelanggan kadua – Alice. Anjeun ngalakukeun hal anu sarua pikeun manéhna jeung manéhna ayeuna ogé boga toko dina jaringan anjeun.

John jeung Alice téh duan jadi pelanggan anjeun, tapi maranéhna teu kenal. Leuwih penting deui, lamun salah sahiji maranéhna ngunjungkeun situs web toko nu sejenna, teu aya cara pikeun nyaho yén toko éta di-hosting dina jaringan situs anu sarua.

Hiji poé, John butuh meuli pasangan sapat anyar jeung manéhna manggihan nu paling pas di toko Alice. Nalika manéhna nyoba ngajadi pembelianna, manéhna meunang pesan error “email geus dipaké”, nu aneh pisan sabab John yakin 100% yén éta téh kali kahiji manéhna ngunjungkeun situs web Alice.

Naon anu kajadian di dieu nyaéta user John dibagi pikeun sakuliah jaringan, jadi nalika manéhna nyoba nyiptake akun keur *checkout* dina situs Alice, WordPress bakal ngadeukeutan yén aya user jeung alamat email anu sarua geus aya terus melempar error.

_Catatan: Urang sadar kumaha parah éta bisa lamun dipaké pikeun kasus pergunaan anjeun, jadi Ultimate Multisite miboga pilihan anu ngalampaukeun pengecekan biasa keur user anu geus aya, ngidinan sababaraha akun diciptake maké alamat email anu sarua. Unggal akun diikat kana subsites, jadi risiko tabrakan téh dijaga minimal. Dina conto di luhur, John moal meunang pesan error jeung bakal bisa meuli sapat éta tanpa masalah. Pilihan ieu disebut Enable Multiple Accounts, jeung bisa diaktifkeun dina Ultimate Multisite → Settings → Login & Registration._

Sanajan tabel user téh dibagi, admin subsite atawa super admin masih bisa nambahan jeupah sareng ngabersihkeun user ka subsite, sarta maranéhna ogé bisa boga peran user anu béda dina subsite anu béda.

## Pertimbangan kinerja (Performance considerations)

WordPress multisite téh pancén pisan lamun urusan jumlah situs anu bisa ditopangna. Ieu bisa diuji ku fakta yén [WordPress.com](https://WordPress.com), Edublogs, jeung Campuspress téh sadayana layanan berbasis multisite sarta unggal host ngahandapkeun rébu-rébu situs.

Sanajan secara teori teu aya batas maksimal jumlah situs anu bisa dipasang dina hiji instalasi WordPress multisite, dina prakték jumlah situs anu bisa dioperasikeun kalayan saé bisa béda pisan gumantung kana sababaraha faktor: naon dinamika (dinamis) situsna, plugin mana waé anu tersedia pikeun subsite, jsb.

Salaku aturan umum, naon sanés jaringan anjeun leuwih gampang mah, naon leuwih hadé. Pilih situs-situs di mana eusina teu loba ngarobah (dinamis), sabab éta jadi kandidat anu saé pikeun strategi caching anu agresif, sarta jaga tumpukan plugin supel pisan (naon leuwih loba plugin aktif mah leuwih hadé). Ieu bisa ngaronjatkeun jumlah subsite anu bisa dipasang sacara drastis.

Bagian anu panghadéna nyaéta sabab éta téh sadayana WordPress di dieu, alat-alat anu geus dipikawanoh jeunjeun pikeun ngaliwatan kinerja ogé bakal mangpaat kanggo jaringan multisite.

Panghalangan utama (bottleneck) pikeun multisite téh database, tapi lamun sagala hal séjén geus diatur kalayan bener, bisa butuh sababaraha rébu situs saméméan anjeun kudu khawatirkeun éta. Sanajan kitu, aya solusi anu bisa ditambahan sacara bertahap dina titik éta (saperti solusi database sharding, conto).
