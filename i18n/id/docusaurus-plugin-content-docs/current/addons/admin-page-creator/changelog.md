---
title: Catatan Perubahan Admin Page Creator
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Catatan Perubahan Admin Page Creator

### Versi 1.9.0 - Dirilis pada 2026-01-18

* Diperbaiki: Kesalahan fatal saat mengaktifkan.
* Direstrukturisasi: Kelas sumber konten menggunakan trait Singleton dengan inisialisasi konstruktor induk yang benar.
* Diperbaiki: Kesalahan kompilasi template Vue.js yang mencegah pemilih tipe konten untuk ditampilkan.
* Diperbaiki: Properti data Vue yang hilang (template_id, external_link_url_embedable, external_link_url_checking).
* Diperbaiki: Editor TinyMCE tidak inisialisasi dengan benar saat memuat halaman.
* Diperbaiki: File dukungan Divi tidak dimuat secara otomatis melalui Composer.
* Diperbaiki: Sintaks PHP yang rusak di kelas dukungan Divi.
* Ditingkatkan: Organisasi dan minifikasi aset JavaScript.
* Ditingkatkan: Kompatibilitas dengan versi WordPress dan page builder terbaru.

= Versi: 1.8.8 - Dirilis pada 2025-09-28

* Mengganti awalan (prefix) menjadi ultimate-multisite; memperbarui domain teks; peningkatan versi.

### Versi 1.8.7 - 04/10/2023

* Diperbaiki: Kesalahan fatal saat mencoba menambahkan halaman admin baru;
* Diperbaiki: Konflik dengan awalan stylesheet Oxygen;

### Versi 1.8.6 - 09/08/2023

* Ditambahkan: Opsi untuk menampilkan data dari situs utama atau sub-situs saat ini.
* Ditambahkan: Dukungan untuk WordPress Block Editor (Gutenberg).
* Diperbaiki: Memperbaiki masalah aset halaman Brizy yang tidak dimuat.

### Versi 1.8.5 - 09/12/2020

* Diperbaiki: Masalah dengan Screen Options agar menu tidak hilang;

### Versi 1.8.4 - 11/11/2020

* Diperbaiki: Dukungan untuk Multisite Ultimate v2;

### Versi 1.8.3 - 01/10/2020

* Diperbaiki: Ketidakcocokan dengan Beaver Builder dari build sebelumnya;
* Diperbaiki: Inkonsistensi margin dengan WP 5.5;

### Versi 1.8.2 - 21/09/2020

* Diperbaiki: Ketidakcocokan kecil dengan WP 5.5;

### Versi 1.8.1 - 05/08/2020

* Diperbaiki: Ketidakcocokan dengan Brizy 2.0;
* Diperbaiki: Masalah kinerja kecil saat membangun daftar menu;

### Versi 1.8.0 - 27/04/2020

* Diperbaiki: Pemberitahuan yang tersembunyi di bawah bilah atas ketika mode tanpa margin dipilih;
* Ditambahkan: Halaman kustom kini dapat menggantikan beberapa halaman tingkat atas dan sub-halaman admin WordPress sekaligus;
* Ditambahkan: Admin kini dapat menyembunyikan halaman admin menggunakan WP Admin Pages PRO;

### Versi 1.7.9 - 01/04/2020

* Diperbaiki: Brizy 1.10.118 ke atas merusak dukungan SVG di halaman admin;

### Versi 1.7.8 - 26/03/2020

* Diperbaiki: Kesalahan escaping yang merusak halaman Editor saat menggunakan bahasa Prancis;

### Versi 1.7.7 - 04/03/2020

* Diperbaiki: Ketidakcocokan kecil dengan Brizy Builder;
* Ditingkatkan: Memperbarui Freemius SDK ke 2.3.2;

### Versi 1.7.6 - 10/02/2020

* Diperbaiki: Tombol edit halaman admin di sudut kanan bawah tidak berfungsi pada Dashboard Widgets;
* Diperbaiki: Ketidakcocokan kecil dengan Astra;
* Diperbaiki: Versi baru Brizy merusak kompatibilitas;

### Versi 1.7.5 - 14/12/2019

* Diperbaiki: Menambahkan penangan kasus tepi baru untuk mengisi item menu pada opsi Replace Page;
* Diperbaiki: Font Elementor tidak berfungsi;
* Ditingkatkan: Memperbarui Freemius SDK untuk mendukung penyembunyian info sensitif dari halaman Akun;

### Versi 1.7.4 - 29/11/2019

* Diperbaiki: Ketidakcocokan dengan WooCommerce Memberships;
* Diperbaiki: Komponen tab Oxygen Builder tidak berfungsi;
* Diperbaiki: Beaver Themer tidak berfungsi;

### Versi 1.7.3 - 12/07/2019

* Diperbaiki: Halaman menghilang ketika induknya diubah menjadi jenis halaman admin lain;
* Ditingkatkan: Pembatas tabel daftar yang lebih baik antar tipe Admin Page;
* Ditingkatkan: Tinjauan Keamanan (Security Review) seluruh codebase plugin;
* Ditingkatkan: Catatan peringatan pada tab Separator ketika fitur tersebut tidak tersedia untuk tipe sumber menu/konten tertentu;

### Versi 1.7.2 - 01/07/2019

* Diperbaiki: Memperbarui versi Freemius SDK ke 2.3.0;
* Diperbaiki: Masalah ketidakcocokan dengan Flywheel;

### Versi 1.7.1 - 27/06/2019

* Diperbaiki: Widget Selamat Datang kini ditampilkan ke semua peran;
* Diperbaiki: Opsi Screen Option untuk menyembunyikan/menampilkan menu Admin Pages tidak ditambahkan jika menu disembunyikan melalui filter yang didokumentasikan di https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Ditingkatkan: Menyembunyikan menu Admin Pages kini juga menyembunyikan template yang dibuat dari daftar template yang disimpan Beaver Builder di UI builder;
* Ditambahkan: Opsi untuk mengaktifkan dan menonaktifkan halaman admin secara massal;
* Ditambahkan: Opsi untuk menampilkan halaman di situs utama juga;
* Ditambahkan: Opsi untuk mengganti nama label menu tingkat atas dan sub-level dalam mode Replace;

### Versi 1.7.0 - 04/06/2019

* Perbaikan: Masalah dengan template Oxygen yang tidak muncul;
* Ditambahkan: Dukungan Pembuatan Widget!

### Versi 1.6.1 - 22/05/2019

* Diperbaiki: Kesalahan ketik (Typos);
* Diperbaiki: Halaman sub-menu menimpa item sub-menu sebelumnya dengan nilai urutan yang sama;
* Diperbaiki: Duplikasi kini mereset slug halaman yang diduplikasi;
* Ditingkatkan: Memperbarui file po pt_BR dan es_ES;
* Ditingkatkan: Tabel daftar kini mencantumkan nama halaman kustom sebagai halaman induk juga;

### Versi 1.6.0 - 21/05/2019

* Ditambahkan: Tautan Eksternal kini mendukung pemuatan iframe juga;

### Versi 1.5.5 - 17/05/2019

* Diperbaiki: Pesan peringatan yang muncul ketika halaman dihapus atau diduplikasi;
* Diperbaiki: Pengaturan izin tidak diterapkan ke Admin;

### Versi 1.5.4 - 08/05/2019

* Diperbaiki: Ketidakcocokan dengan Sliced Invoices;
* Diperbaiki: Masalah kecil dengan Oxygen;
* Diperbaiki: Placeholder di kolom judul halaman admin baru tidak hilang saat mengetik (key-up);

### Versi 1.5.3 - 03/05/2019

* Diperbaiki: Ketidakcocokan dengan halaman opsi Advanced Custom Field;
* Ditambahkan: Opsi untuk menambahkan pengguna tertentu sebagai target halaman admin kustom;

### Versi 1.5.2 - 30/04/2019

* Diperbaiki: Ketidakcocokan dengan versi Brizy yang lebih baru;
* Ditambahkan: Terjemahan bahasa Spanyol ditambahkan - atas kebaikan John Rozzo. Terima kasih, John!
* Ditambahkan: Dukungan Beta untuk Oxygen Builder;

### Versi 1.5.1 - 15/04/2019

* Diperbaiki: Masalah dengan placeholder di editor Normal dan HTML;
* Diperbaiki: Admin Pages tidak muncul di Tools -> Export;
* Diperbaiki: Memuat skrip dan gaya hanya di halaman kita sendiri;
* Ditambahkan: Super Admins kini dapat menduplikasi Admin Pages;

### Versi 1.5.0 - 29/03/2019

* Diperbaiki: Bug kecil yang ditangkap oleh Sentry;
* Diperbaiki: Tombol hapus tidak berfungsi di layar Edit Admin page;
* Ditingkatkan: Mengubah tombol BeaverBuilder untuk memperjelas bahwa lisensi Standard BB juga didukung;
* Ditambahkan: Admin kini dapat mengatur urutan sub-menu juga;
* Ditambahkan: Mode replace page kini memiliki dukungan untuk semua item menu yang tersedia;

### Versi 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on)

* Ditambahkan: Diluncurkan sebagai plugin Stand-alone di https://wpadminpagespro.com
* Ditambahkan: Opsi untuk menghapus item menu Admin Pages dari menu setelah proses pembuatan halaman selesai;
* Ditambahkan: Opsi untuk menghapus pemberitahuan admin dari halaman admin;
* Ditambahkan: Pemrosesan konten, sehingga Anda dapat menempatkan placeholder seperti {{user:first_name}} dan secara otomatis diganti dengan meta field first_name pengguna;
* Ditambahkan: Inline Editor;
* Ditambahkan: Kelas induk sumber konten dikonsolidasikan untuk memudahkan penambahan Page Builder/Content Source baru di masa mendatang;
* Ditambahkan: Dukungan untuk URL Eksternal;

### Versi 1.3.0 - 15/01/2019

* Diperbaiki: Admin Pages tidak muncul di main-site di lingkungan multisite;
* Ditingkatkan: Menghapus tipe konten kustom Multisite Ultimate dari layar ekspor subsites;
* Ditambahkan: Top-bar dengan tindakan cepat untuk admin jaringan di halaman buat;
* Ditambahkan: BESAR! Dukungan Elementor!
* Ditambahkan: BESAR! Dukungan Brizy!

### Versi 1.2.1 - 17/11/2018

* Diperbaiki: Membuat plugin kompatibel dengan Multisite Ultimate 1.9.0;

### Versi 1.2.0 - 10/09/2018

* Ditambahkan: Dukungan PHP ditambahkan jika WU_APC_ALLOW_PHP_PROCESSING diatur ke true di wp-config.php. Ini tidak menggunakan eval PHP, tetapi masih dapat menyebabkan lubang keamanan. Gunakan ini dengan hati-hati;
* Ditingkatkan: Pembaruan plugin add-on;
* Ditingkatkan: URL baru untuk server pembaruan;

### Versi 1.1.2 - 16/08/2018

* Diperbaiki: Masalah kecil dengan WP Engine;

### Versi 1.1.1 - 16/08/2018

* Diperbaiki: Izin tidak diterapkan dengan benar ke halaman pengganti;

### Versi 1.1.0 - 15/08/2018

* Ditambahkan: Template Beaver Builder kini didukung! Anda dapat menggunakan page builder favorit Anda untuk membuat halaman admin kustom;
* Ditambahkan: Sekarang dimungkinkan untuk mengganti konten halaman admin default WordPress juga;
* Ditambahkan: Sekarang dimungkinkan untuk menambahkan konten yang dibuat ke atas atau bawah halaman admin default WordPress juga;

### 0.0.1
- Rilis Awal
