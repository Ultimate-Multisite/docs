---
title: Catatan Perubahan Integrasi WooCommerce
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Catatan Perubahan Integrasi WooCommerce

Versi 2.0.6 - Dirilis pada 2026-01-16
* Peningkatan: Menyertakan langganan inti di dalam addon. Tidak lagi memerlukan ekstensi Woocommerce Subscriptions.

Versi 2.0.5 - Dirilis pada 2026-01-09
* Peningkatan: Memuat terjemahan dari API glotpress.
* Perbaikan: Mengatasi kesalahan fatal pada beberapa page builder.
* Perbaikan: Mengatasi pengalihan tak terbatas ketika pelanggan adalah anggota dari situs utama.

Versi 2.0.4 - Dirilis pada 2025-11-14
* Ditambahkan: Terjemahan untuk lebih banyak bahasa.
* Diubah: Nama diubah menjadi Ultimate Multisite: Woocommerce Integration.
* Ditambahkan: Kompatibilitas dengan Woocommerce 10.2.1.
* Ditambahkan: Kompatibilitas dengan Woocommerce Subscriptions 7.7.0.
* Perbaikan: Kompatibilitas dengan PHP 8.4
* Perbaikan: Pengalihan terjadi meskipun halaman akun WC tidak ada.

Versi 2.0.3 - Dirilis pada 2025-08-13
* Diubah: Mengaktifkan pembaruan otomatis dengan marketplace baru.

Versi 2.0.2 - Dirilis pada 2025-07-05
* Diubah: Nama diubah menjadi Multisite Ultimate: Woocommerce Integration.
* Ditambahkan: Kompatibilitas dengan Woocommerce 9.8.1.
* Ditambahkan: Kompatibilitas dengan Woocommerce Subscriptions 7.3.0.
* Perbaikan: Pembatalan langganan oleh pelanggan.
* Perbaikan: Kesalahan fatal saat menggunakan blok checkout.
* Peningkatan: Sekarang kompatibel dengan tabel pesanan kustom berkinerja tinggi Woocommerce.
* Perbaikan: Pembatalan di checkout WooCommerce masih dapat meningkatkan keanggotaan.

Versi 2.0.1 - Dirilis pada 2023-08-09

* Ditambahkan: Kompatibilitas dengan Woocommerce 7.9.0.
* Ditambahkan: Kompatibilitas dengan Woocommerce Subscriptions 5.3.0.
* Ditambahkan: Dukungan untuk pembaruan keanggotaan.
* Ditambahkan: Pemberitahuan tentang uji coba dan biaya penyiapan di Woocommerce.
* Ditambahkan: Identifikasi produk Woocommerce Ultimate Multisite dengan nilai meta.
* Ditambahkan: Menyisipkan perbaikan satu kali untuk menandai semua produk Woocommerce terkait Ultimate Multisite.
* Ditambahkan: Menghapus produk yang dibuat Ultimate Multisite dari daftar Woocommerce.
* Peningkatan: Membuat diskon Woocommerce non-berulang untuk diterapkan ke keranjang.
* Peningkatan: Mengembalikan diskon berulang ke produk Woocommerce.
* Peningkatan: Menambahkan label diskon berulang ke produk Woocommerce.
* Peningkatan: Memastikan tipe produk di checkout.
* Perbaikan: Mempertahankan status keanggotaan selama proses penurunan tingkat.
* Perbaikan: Memeriksa apakah langganan ada untuk menghindari kesalahan selama proses pembatalan.
* Perbaikan: Menambahkan tanggal mulai langganan untuk digunakan di langganan Woocommerce.
* Internal: Mengimplementasikan proses build PHP 8.1 yang baru.

Versi 2.0.0 - Penulisan ulang total.

* Ditambahkan: Metode proses pembatalan untuk menghapus langganan woo saat mengubah gateway atau membatalkan keanggotaan;
* Ditambahkan: Penangan untuk menurunkan dan meningkatkan keanggotaan;
* Peningkatan: Memuat dependensi woocommerce pada formulir pembaruan pelanggan di subsites untuk memungkinkan pembaruan akun;
* Peningkatan: Memuat keranjang Woocommerce yang benar jika belum ada;
* Peningkatan: Memastikan kita berada di tabel situs utama saat memproses checkout;
* Peningkatan: Membuat pesanan perpanjangan Ultimo berdasarkan nilai pesanan langganan Woocommerce dan bukan dari pembayaran terakhir;
* Perbaikan: Pergi ke tautan tombol WU Membership;
* Perbaikan: Mengatur pesanan Ultimo sebagai dibayar ketika perpanjangan langganan Woocommerce telah dibayar;
* Build: Menambahkan MPB sebagai builder;

Versi 2.0.0-beta-5 - Dirilis pada 2022-01-21

* Internal: Menambahkan generator hooks dan filters;
* Internal: Menambahkan stub Ultimate Multisite untuk kualitas hidup developer;
* Diperbaiki: Mencegah pembuatan banyak produk jika tidak perlu;

Versi 2.0.0-beta.4 - 2021-09-23

* Perbaikan: Mewajibkan WooCommerce aktif di jaringan, bukan hanya di situs utama;
* Peningkatan: Menambahkan filter untuk memungkinkan addon digunakan sebagai mu-plugin;

Versi 2.0.0-beta.3 - 2021-05-28

* Perbaikan: Kontrol akses dashboard terlalu agresif;
* Peningkatan: Menambahkan tautan bantuan WooCommerce ke menu atas Ultimate Multisite;

Versi 2.0.0-beta.2 - 2021-05-04

* Peningkatan: Membuat pembayaran tertunda di Ultimo saat pembuatan pesanan perpanjangan WCS;
* Peningkatan: Mengisi bidang penagihan dengan data pelanggan Ultimate Multisite;
* Peningkatan: Menambahkan kembali bidang penagihan untuk gateway;

Versi 2.0.0-beta.1 - 2021-05-04

* Rilis beta awal

-- Versi Lama --

Versi 1.2.6 - 26/03/2020

* Diperbaiki: Ketidakcocokan kecil dengan versi WooCommerce Subscriptions yang lebih baru;

Versi 1.2.5 - 26/08/2019

* Diperbaiki: Kesalahan pada rilis sebelumnya;

Versi 1.2.4 - 22/08/2019

* Ditingkatkan: Menambahkan opsi untuk mengalihkan ke layar checkout WooCommerce setelah integrasi segera;

Versi 1.2.3 - 26/05/2019

* Diperbaiki: Email pembayaran untuk WooCommerce hilang di beberapa kasus khusus;

Versi 1.2.2 - 27/02/2019

* Ditambahkan: Dukungan untuk biaya penyiapan pada integrasi WooCommerce Subscription;

Versi 1.2.1 - 17/11/2018

* Diperbaiki: Masalah kompatibilitas dengan versi Ultimate Multisite 1.9.0;

Versi 1.2.0 - 10/09/2018

* Ditingkatkan: URL pembaruan baru untuk addon;
* Ditambahkan: Dukungan beta untuk WooCommerce Subscription;

Versi 1.1.2 - 11/02/2018

* Diperbaiki: Tautan ke Pay dihasilkan secara dinamis untuk merespons perubahan pada endpoint WooCommerce;
* Ditingkatkan: Kami sekarang memaksa status selesai untuk pesanan kami ketika payment_completed dipanggil untuk memastikan hook perpanjangan kami berjalan saat seharusnya;

Versi 1.1.1 - 24/01/2018

* Diperbaiki: Sekarang juga memeriksa apakah WooCommerce baru saja diaktifkan di situs utama;
* Diperbaiki: Menyertakan *over-loading* untuk memungkinkan pembuatan pesanan menyertakan pajak;

Versi 1.1.0 - 04/11/2017

* Diperbaiki: Sekarang label tombol integrasi benar-benar berubah untuk mencerminkan pengaturan. Memerlukan Ultimate Multisite 1.5.0;
* Diperbaiki: Integrasi WooCommerce sekarang berfungsi bahkan jika WooCommerce tidak aktif di jaringan dan hanya diaktifkan di situs utama;

1.0.0 - Rilis Awal
