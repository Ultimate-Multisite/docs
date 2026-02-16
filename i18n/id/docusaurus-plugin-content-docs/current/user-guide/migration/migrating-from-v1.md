---
title: Migrasi dari V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrasi dari V1

## Ultimate Multisite telah beralih dari versi rilis 1.x ke versi rilis 2.x.

Ultimate Multisite versi 2.0 ke atas merupakan penulisan ulang menyeluruh dari basis kode, yang berarti sangat sedikit kesamaan antara versi lama dan versi baru. Oleh karena itu, saat melakukan upgrade dari 1.x ke 2.x, data Anda perlu dimigrasikan ke format yang dapat dipahami oleh versi baru.

Untungnya, Ultimate Multisite 2.0+ **sudah dilengkapi dengan migrator** bawaan yang mampu mendeteksi data dari versi lama dan mengonversinya ke format baru. Migrasi ini terjadi selama **Setup Wizard** pada versi 2.0+.

Pelajaran ini membahas cara kerja migrator, apa yang harus dilakukan jika terjadi kegagalan, dan cara mengatasi masalah yang mungkin muncul selama proses ini.

_**PENTING: Sebelum Anda memulai upgrade dari versi 1.x ke versi 2.0, pastikan Anda membuat backup database situs Anda**_

## Langkah pertama

Langkah pertama adalah mengunduh file .zip plugin dan menginstal versi 2.0 di dashboard network admin Anda.

Setelah Anda [menginstal dan mengaktifkan versi 2.0](../getting-started/installing-ultimate-multisite.md), sistem akan secara otomatis mendeteksi bahwa Multisite Anda masih berjalan di versi lama dan Anda akan melihat pesan ini di bagian atas halaman plugin.

_**CATATAN:** Jika Anda sudah menginstal Ultimate Multisite 1.x di Multisite Anda, Anda akan mendapat opsi untuk mengganti plugin dengan versi yang baru saja Anda unduh. Silakan klik **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Halaman berikutnya akan menampilkan add-on lama apa saja yang Anda instal bersama versi 1.x. Halaman ini berisi petunjuk apakah versi yang Anda gunakan kompatibel dengan versi 2.0 atau apakah Anda perlu menginstal versi add-on yang sudah di-upgrade setelah migrasi.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Setelah Anda siap melanjutkan, Anda bisa mengklik tombol yang bertuliskan **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Anda akan diarahkan ke halaman installation wizard dengan beberapa pesan selamat datang. Anda hanya perlu mengklik **Get Started** untuk melanjutkan ke halaman berikutnya.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Setelah mengklik **Get Started**, Anda akan diarahkan ke halaman Pre-install Checks_._ Halaman ini akan menampilkan Informasi Sistem dan instalasi WordPress Anda serta memberi tahu apakah sudah memenuhi **persyaratan Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Langkah berikutnya adalah memasukkan license key Ultimate Multisite Anda dan mengaktifkan plugin. Ini akan memastikan semua fitur, termasuk add-on, tersedia di situs Anda.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Setelah memasukkan key Anda, klik **Agree & Activate**.

Setelah aktivasi lisensi, Anda bisa memulai instalasi sebenarnya dengan mengklik **Install** di halaman berikutnya. Ini akan secara otomatis membuat file dan database yang diperlukan agar versi 2.0 dapat berfungsi.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Sekarang, waktunya migrasi

Migrator memiliki fitur keamanan bawaan yang akan memeriksa seluruh multisite Anda untuk memastikan semua data Ultimate Multisite dapat dimigrasikan tanpa masalah. Klik tombol **Run Check** untuk memulai proses.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Setelah menjalankan pemeriksaan, ada dua kemungkinan: hasilnya bisa **dengan** error atau **tanpa error**.

### Dengan Error

Jika Anda mendapat pesan error, Anda perlu menghubungi tim support kami agar mereka dapat membantu memperbaiki error tersebut. Pastikan Anda **menyertakan log error** saat membuat tiket. Anda bisa mengunduh log atau mengklik link yang bertuliskan contact our support team. Ini akan membuka widget bantuan di sisi kanan halaman Anda dengan kolom yang sudah terisi otomatis, termasuk log error di bagian deskripsi.

_**Karena sistem menemukan error, Anda tidak akan bisa melanjutkan migrasi ke versi 2.0. Anda bisa melakukan rollback ke versi 1.x untuk melanjutkan menjalankan network Anda sampai error diperbaiki.**_

### Tanpa Error

Jika sistem tidak menemukan error, Anda akan melihat pesan sukses dan tombol **Migrate** di bagian bawah yang memungkinkan Anda melanjutkan migrasi. Di halaman ini, Anda akan diingatkan untuk membuat backup database sebelum melanjutkan, yang sangat kami sarankan. Klik **Migrate** jika Anda sudah memiliki backup.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Dan hanya itu yang perlu dilakukan!

Anda bisa melanjutkan menjalankan Wizard setup untuk memperbarui logo dan hal-hal lain di network Anda atau mulai menjelajahi menu Ultimate Multisite versi 2.0 dan tampilan barunya. Silakan bersenang-senang.
