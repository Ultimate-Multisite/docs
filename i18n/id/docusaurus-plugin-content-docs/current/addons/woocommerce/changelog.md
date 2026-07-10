---
title: Log Perubahan Integrasi WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Changelog Integrasi WooCommerce {#woocommerce-integration-changelog}

Versi 2.2.0 - Dirilis pada 2026-07-01
* Baru: Jumlah pajak Ultimate Multisite kini muncul sebagai baris biaya WooCommerce terpisah saat checkout, membuat total pajak lebih jelas sebelum pembayaran.
* Baru: Menambahkan pengaturan opt-in "Tangguhkan Membership Segera saat Pembaruan Gagal" dan filter `wu_woo_suspend_on_payment_failure` untuk situs yang menginginkan penangguhan akibat pembaruan gagal selama jendela percobaan ulang WooCommerce Subscriptions.
* Perbaikan: Menyelaraskan status WooCommerce Subscription yang bisa tetap tidak sinkron dengan membership Ultimate Multisite setelah pembaruan gagal atau pulih.
* Perbaikan: Menambahkan mata uang toko WooCommerce ke daftar mata uang Ultimate Multisite ketika belum ada.
* Perbaikan: Mempertahankan detail penagihan pelanggan saat mengarahkan pelanggan berlangganan ke checkout WooCommerce.
* Ditingkatkan: Menambahkan kompatibilitas dengan Jetpack Autoloader 5.
* Ditingkatkan: Membersihkan pembuatan paket rilis sehingga zip GitHub dan marketplace menghindari direktori staging bersarang dan file pengembangan.

Versi 2.0.6 - Dirilis pada 2026-01-16
* Peningkatan: Menyertakan subscription inti dalam addon. Tidak lagi memerlukan ekstensi Woocommerce Subscriptinos.

Versi 2.0.5 - Dirilis pada 2026-01-09
* Peningkatan: Memuat terjemahan dari glotpress API.
* Perbaikan: Fatal error di beberapa page builder.
* perbaikan: Redirect tak terbatas ketika pelanggan adalah anggota situs utama.

Versi 2.0.4 - Dirilis pada 2025-11-14
* Ditambahkan: Terjemahan untuk jauh lebih banyak bahasa.
* Diubah: Diubah namanya menjadi Ultimate Multisite: Woocommerce Integration.
* Ditambahkan: Kompatibilitas dengan Woocommerce 10.2.1.
* Ditambahkan: Kompatibilitas dengan Woocommerce Subscriptions 7.7.0.
* Perbaikan: Kompatibilitas dengan PHP 8.4
* Perbaikan: Redirect tetapi ketika tidak ada halaman Account WC.

Versi 2.0.3 - Dirilis pada 2025-08-13
* Diubah: Mengaktifkan pembaruan otomatis dengan marketplace baru.

Versi 2.0.2 - Dirilis pada 2025-07-05
* Diubah: Diubah namanya menjadi Multisite Ultimate: Woocommerce Integration.
* Ditambahkan: Kompatibilitas dengan Woocommerce 9.8.1.
* Ditambahkan: Kompatibilitas dengan Woocommerce Subscriptions 7.3.0.
* Perbaikan: Pembatalan subscription oleh pelanggan.
* Perbaikan: Fatal error saat menggunakan blok checkout.
* Peningkatan: Kini kompatibel dengan tabel pesanan kustom berkinerja tinggi Woocommerce.
* Perbaikan: Pembatalan di checkout WooCommerce masih dapat meng-upgrade membership.

Versi 2.0.1 - Dirilis pada 2023-08-09

* Ditambahkan: Kompatibilitas dengan Woocommerce 7.9.0.
* Ditambahkan: Kompatibilitas dengan Woocommerce Subscriptions 5.3.0.
* Ditambahkan: Dukungan untuk pembaruan membership.
* Ditambahkan: Pemberitahuan tentang trial dan biaya setup di Woocommerce.
* Ditambahkan: Identifikasi produk Ultimate Multisite Woocommerce dengan nilai meta.
* Ditambahkan: Menyisipkan perbaikan satu kali untuk menandai semua produk Woocommerce terkait Ultimate Multisite.
* Ditambahkan: Menghapus produk yang dibuat Ultimate Multisite dari daftar Woocommerce.
* Peningkatan: Membuat diskon Woocommerce non-berulang untuk diterapkan ke keranjang.
* Peningkatan: Memulihkan diskon berulang ke produk Woocommerce.
* Peningkatan: Menambahkan label diskon berulang ke produk Woocommerce.
* Peningkatan: Memastikan tipe produk saat checkout.
* Perbaikan: Mempertahankan status membership selama proses downgrade.
* Perbaikan: Memeriksa apakah subscription ada untuk menghindari error selama proses pembatalan.
* Perbaikan: Menambahkan tanggal mulai subscription untuk digunakan dalam subscription Woocommerce.
* Internal: Menerapkan proses build PHP 8.1 baru.

Versi 2.0.0 - Penulisan ulang lengkap.

* Ditambahkan: Metode proses pembatalan untuk menghapus woo subscription saat mengubah gateway atau membatalkan membership;
* Ditambahkan: Handler untuk men-downgrade dan meng-upgrade membership;
* Peningkatan: Memuat dependensi woocommerce pada formulir pembaruan pelanggan di subsitus untuk memungkinkan pembaruan account;
* Peningkatan: Memuat keranjang Woocommerce dengan benar jika belum ada;
* Peningkatan: Memastikan kita berada di tabel situs utama saat memproses checkout;
* Peningkatan: Membuat pesanan pembaruan Ultimo berdasarkan nilai pesanan subscription Woocommerce dan bukan dari pembayaran terakhir;
* Perbaikan: Tautan tombol Buka WU Membership;
* Perbaikan: Mengatur pesanan Ultimo sebagai dibayar ketika pembaruan subscription Woocommerce telah dibayar;
* Build: Menambahkan MPB sebagai builder;

Versi 2.0.0-beta-5 - Dirilis pada 2022-01-21

* Internal: Menambahkan generator hooks dan filters;
* Internal: Menambahkan stub Ultimate Multisite untuk kualitas hidup developer;
* Diperbaiki: Mencegah pembuatan beberapa produk ketika tidak diperlukan;

Versi 2.0.0-beta.4 - 2021-09-23

* Perbaikan: mewajibkan WooCommerce aktif di network, bukan hanya di situs utama;
* Peningkatan: menambahkan filter untuk memungkinkan add-on digunakan sebagai mu-plugin;

Versi 2.0.0-beta.3 - 2021-05-28

* Perbaikan: kontrol akses dashboard terlalu agresif;
* Peningkatan: Menambahkan tautan bantuan WooCommerce ke menu atas Ultimate Multisite;

Versi 2.0.0-beta.2 - 2021-05-04

* Peningkatan: membuat pembayaran tertunda di Ultimo saat pembuatan pesanan pembaruan WCS;
* Peningkatan: mengisi otomatis field penagihan dengan data pelanggan Ultimate Multisite;
* Peningkatan: menambahkan kembali field penagihan untuk gateway;

Versi 2.0.0-beta.1 - 2021-05-04

* Rilis beta awal

-- Versi Lama --

Versi 1.2.6 - 26/03/2020

* Diperbaiki: Inkompatibilitas kecil dengan versi WooCommerce Subscriptions yang lebih baru;

Versi 1.2.5 - 26/08/2019

* Diperbaiki: Error pada rilis sebelumnya;

Versi 1.2.4 - 22/08/2019

* Ditingkatkan: Menambahkan opsi untuk segera mengarahkan ke layar checkout WooCommerce setelah integrasi;

Versi 1.2.3 - 26/05/2019

* Diperbaiki: Email pembayaran untuk WooCommerce menghilang dalam beberapa kasus tepi;

Versi 1.2.2 - 27/02/2019

* Ditambahkan: Dukungan untuk biaya setup pada integrasi WooCommerce Subscription;

Versi 1.2.1 - 17/11/2018

* Diperbaiki: Masalah kompatibilitas dengan Ultimate Multisite versi 1.9.0;

Versi 1.2.0 - 10/09/2018

* Ditingkatkan: URL pembaruan baru untuk add-on;
* Ditambahkan: Dukungan beta untuk WooCommerce Subscription;

Versi 1.1.2 - 11/02/2018

* Diperbaiki: Tautan untuk Membayar dibuat secara dinamis untuk merespons perubahan pada endpoint WooCommerce;
* Ditingkatkan: Kami sekarang memaksa status selesai untuk pesanan kami ketika payment_completed dipanggil untuk memastikan hooks pembaruan kami berjalan pada saat yang seharusnya;

Version 1.1.1 - 24/01/2018

* Diperbaiki: Sekarang ini juga memeriksa apakah WooCommerce baru saja diaktifkan di situs utama;
* Diperbaiki: Menyertakan over-loading untuk memungkinkan pembuatan pesanan menyertakan pajak;

Version 1.1.0 - 04/11/2017

* Diperbaiki: Sekarang label tombol integrasi benar-benar berubah untuk mencerminkan pengaturan. Memerlukan Ultimate Multisite 1.5.0;
* Diperbaiki: WooCommerce Integration sekarang berfungsi meskipun WooCommerce tidak aktif di jaringan dan hanya diaktifkan di situs utama;

1.0.0 - Rilis Awal
