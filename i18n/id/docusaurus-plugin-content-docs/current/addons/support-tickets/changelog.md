---
title: Catatan Perubahan Tiket Dukungan
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Catatan Perubahan Tiket Dukungan {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Ditingkatkan: Menghapus direktori `vendor/` dari pelacakan Git (sudah dicakup oleh .gitignore), mengurangi ukuran repositori
* Ditingkatkan: Diuji hingga WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Perbaikan: Menerima nilai null di setter model tiket yang bisa bernilai null
* Perbaikan: Menyimpan semua tiket di tabel global tingkat jaringan untuk dukungan multisite yang benar
* Perbaikan: Menyembunyikan bidang staf dan memperbaiki pengalihan halaman kosong pada formulir tiket baru pelanggan
* Perbaikan: Mengganti panggilan `add_meta()` yang tidak terdefinisi dengan `update_meta()` yang benar untuk penyimpanan metadata
* Perbaikan: Mengganti pemeriksaan kapabilitas yang tidak terdaftar dengan `wu_view_all_support_tickets` yang benar
* Perbaikan: Menambahkan penangan AJAX yang hilang untuk status tiket, penugasan, dan aksi edit cepat
* Perbaikan: Mengoreksi nama metode untuk deteksi respons staf di tampilan tiket
* Perbaikan: Mengkonsolidasikan penangan balasan duplikat dan menyelaraskan nama aksi nonce
* Perbaikan: Menambahkan tampilan frontend yang hilang untuk shortcode `[wu_submit_ticket]`
* Perbaikan: Menambahkan kolom `user_id` yang hilang dan memperbaiki metode `Support_Ticket::get_user_id()`
* Perbaikan: Menghapus tanda kutip ganda ekstra di tag opsi filter prioritas
* Perbaikan: Menambahkan panel manajemen tiket admin jaringan untuk super admin
* Ditingkatkan: Mengkonsolidasikan CSS admin ke dalam satu stylesheet eksternal
* Ditingkatkan: Menghapus submenu Pengaturan dari menu admin subsitus
* Ditingkatkan: Memuat aset frontend secara kondisional hanya pada halaman tiket dukungan

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Ditambahkan: Fungsionalitas melihat tiket secara penuh untuk admin dan frontend
* Ditambahkan: Penangan AJAX untuk pengiriman balasan tiket
* Ditambahkan: Dukungan untuk fungsionalitas balasan tiket dengan penanganan formulir yang benar
* Ditambahkan: Tampilan notifikasi yang benar untuk pengiriman dan balasan tiket di admin
* Ditambahkan: Asosiasi tiket otomatis dengan pengguna saat ini untuk pengiriman mandiri pelanggan
* Ditambahkan: Peningkatan keamanan untuk mencegah pelanggan menimpa kepemilikan tiket
* Ditambahkan: Fungsi pembantu yang hilang (wu_format_date, wu_user_can_view_ticket, dll.)
* Ditambahkan: Pengunduhan dan penanganan lampiran file yang benar
* Ditambahkan: Sistem notifikasi email untuk balasan dan perubahan status tiket
* Diperbaiki: Formulir balasan tiket kini menyertakan ID tiket yang diperlukan
* Diperbaiki: Masalah visibilitas notifikasi di tampilan tiket admin
* Diperbaiki: Kesalahan sintaks dalam fungsi tiket dukungan
* Ditingkatkan: Struktur database dengan kelas kueri dan skema yang benar untuk respons dan lampiran
* Ditingkatkan: Migrasi ke properti nyata (real properties) alih-alih atribut untuk model tiket

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Diperbarui: Mengganti prefix menjadi `ultimate-multisite` untuk konsistensi
* Diperbarui: Standardisasi domain teks
* Diperbaiki: Perbaikan dan peningkatan bug kecil

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Rilis awal
* Sistem manajemen tiket lengkap
* Kontrol akses multi-tingkat
* Sistem percakapan berantai
* Dukungan lampiran file
* Sistem notifikasi email
* Antarmuka admin dan pelanggan
* Statistik dan pelaporan
