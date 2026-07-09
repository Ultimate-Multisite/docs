---
title: Migrasi ti V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrasi ti V1 {#migrating-from-v1}

## Ultimate Multisite geulah tina keluarga rilis 1.x anu asli ka keluarga rilis 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versi 2.0 sareng di luhur téh mangrupake nulis ulang total kode (complete rewrite of the codebase), hartina teu aya pisan pamahaman patali antara versi lama jeung anu anyar. Ku sabab éta, nalika naékna ti 1.x ka 2.x, data anjeun kudu diimigrasi kana format anu bisa dipahami ku versi anyar.

Untungna, Ultimate Multisite 2.0+ **ngahadirkeun migrator** anu aya dina inti (core) anu mampuh ngadeukeutan data ti versi lama jeung ngubahna ka format anu anyar. Migrasi ieu lumangsung nalika **Setup Wizard** versi 2.0+.

Pelajaran ieu bakal ngajelaskeun kumaha migrator éta gawé, naon anu kudu dilakukeun lamun aya gagal, sarta kumaha cara ngatasi masalah anu bisa muncul dina proses ieu.

_**PENTING: Saméméh anjeun mimiti naékna ti versi 1.x ka versi 2.0, mangga pastikeun yén anjeun geus nyieun backup database situs anjeun**_

## Langkah-langkah Kahiji {#first-steps}

Langkah kahiji nyaéta ngunduh file plugin .zip sareng ngalancarkeun (install) versi 2.0 dina dashboard admin jaringan anjeun.

Sanggeus anjeun [ngalancarkeun je ngaktifkeun versi 2.0](../getting-started/installing-ultimate-multisite.md), sistem bakal otomatis ngadeukeutan yén Multisite anjeun keur jalan nganggo versi lama, sareng anjeun bakal ningali pesan ieu di luhur halaman plugin.

_**CATATAN:** Upami anjeun geus ngalancarkeun Ultimate Multisite 1.x dina Multisite anjeun, anjeun bakal aya pilihan pikeun ngaganti plugin ku versi anu anjeun geus unduh. Mangga, ulah sieun klik kanggo **Ganti anu aya kalayan anu diunggah**._

<!-- Screenshot teu aya: Halaman plugin nunjukkeun pilihan pikeun ngaganti v1 kalayan v2 anu diunggah -->

Halaman berikutnya akan memberitahu Anda add-on lama apa saja yang sudah terpasang bersama versi 1.x. Di sana akan ada petunjuk apakah versi yang sedang Anda gunakan kompatibel dengan versi 2.0 atau apakah Anda perlu menginstal versi add-on yang lebih baru setelah migrasi.

<!-- Screenshot unavailable: Pesan di bagian atas halaman plugin tentang pembaruan ke v2.0, dengan daftar add-on yang perlu diperbarui -->

Setelah siap untuk melanjutkan, Anda bisa klik tombol yang bertuliskan **Kunjungi Installer untuk menyelesaikan upgrade**.

<!-- Screenshot unavailable: Tombol yang bertuliskan Kunjungi Installer untuk menyelesaikan upgrade -->

Kemudian, halaman itu akan membawa Anda ke halaman wizard instalasi dengan beberapa pesan selamat datang. Anda hanya perlu mengklik **Get Started** untuk pindah ke halaman berikutnya.

<!-- Screenshot unavailable: Halaman penyambutan Wizard Setup dengan tombol Get Started -->

Setelah mengklik **Get Started**, Anda akan diarahkan ke Pre-install Checks_._ Ini akan menunjukkan Informasi Sistem dan instalasi WordPress Anda serta memberi tahu apakah sudah memenuhi **persyaratan Ultimate Multisite**.

<!-- Screenshot unavailable: Halaman Pre-install Checks yang menunjukkan konfirmasi persyaratan sistem -->

Langkah selanjutnya adalah memasukkan kunci lisensi Ultimate Multisite Anda dan mengaktifkan plugin. Ini akan memastikan bahwa semua fitur, termasuk add-on, akan tersedia di situs Anda.

<!-- Screenshot unavailable: Halaman aktivasi lisensi dengan input kunci lisensi dan tombol Agree and Activate -->

Setelah memasukkan kuncinya, klik **Agree & Activate**.

Setelah aktivasi lisensi, Anda bisa mulai instalasi yang sebenarnya dengan mengklik **Install** di halaman berikutnya. Ini akan secara otomatis membuat file dan database yang diperlukan agar versi 2.0 berfungsi.

## Ayeuna, migrasi {#now-the-migration}

Migrator téh miboga fitur aman anu ngajamin yén éta bakal ngecek sakabéh multisite anjeun sangkan yakin yén sadaya data Ultimate Multisite anjeun bisa dipigmigrasi tanpa aya masalah. Klik tombol **Run Check** pikeun ngamimitian prosésna.

Setelah laksanake pengecekan, anjeun bakal miboga dua pilihan: hasilnya bisa **ngandung** error atawa **tanpa** error.

### Ngandung Error {#with-error}

Lamun anjeun meunang pesan error, anjeun kudu nyambung ka tim support kami sangkan maranéhna bisa ngabantosan anjeun ngalaksanake perbaikan error éta. Pastikeun anjeun **ngahasilkeun log error** nalika anjeun nyieun tiket. Anjeun bisa ngunduh log atawa anjeun bisa klik tautan anu nyebut "hubungi tim support kami". Ieu bakal mbukak widget bantuan di sisi kanan halaman anjeun kalayan kolom-kolom anu geus aya, kaasup log error dina deskripsi.

_**Sabab sistem manggihan error, anjeun moal tiasa lanjut migrasi ka versi 2.0. Anjeun bisa balik deui ka versi 1.x pikeun ngalancarkeun jaringan anjeun nepi ka error éta diatasi.**_

### Tanpa Error {#without-error}

Lamun sistem teu manggihan naon-naon error, anjeun bakal ningali pesan sukses jeung tombol **Migrate** di handap anu bakal ngajadikeun anjeun tiasa neraskeun migrasi. Di halaman ieu, anjeun bakal diinget pikeun nyieun backup database anjeun saméméh maju, nu kami sangat rekomendasikeun. Klik **Migrate** lamun anjeun geus boga backup.

Jeung éta waé!

Anjeun tiasa ngalajengkeun Wizard setup pikeun ngarékés logo je hal-hal séjén di jaringan anjeun atawa mulai ngagoleg menu je antarmuka anyar dina versi 2.0 Ultimate Multisite. Tong sieun, geura seru-seruan!
