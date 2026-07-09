---
title: Log Perubahan Integrasi WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Log Perubahan Integrasi WooCommerce

Versi 2.2.0 - Dikeluarkan pada 2026-07-01
* Baharu: Jumlah cukai Ultimate Multisite kini muncul sebagai baris yuran WooCommerce yang berasingan semasa checkout, menjadikan jumlah cukai lebih jelas sebelum pembayaran.
* Baharu: Menambah tetapan pilihan ikut serta "Gantung Memberships Serta-merta pada Pembaharuan Gagal" dan penapis `wu_woo_suspend_on_payment_failure` untuk site yang mahukan penggantungan akibat pembaharuan gagal semasa tetingkap percubaan semula WooCommerce Subscriptions.
* Pembetulan: Menyelaraskan status WooCommerce Subscription yang boleh kekal tidak segerak dengan membership Ultimate Multisite selepas pembaharuan gagal atau dipulihkan.
* Pembetulan: Menambah mata wang kedai WooCommerce ke senarai mata wang Ultimate Multisite apabila ia tiada.
* Pembetulan: Mengekalkan butiran bil pelanggan semasa mengalihkan pelanggan langganan ke checkout WooCommerce.
* Ditambah baik: Menambah keserasian dengan Jetpack Autoloader 5.
* Ditambah baik: Membersihkan penjanaan pakej keluaran supaya zip GitHub dan marketplace mengelakkan direktori staging bersarang dan fail pembangunan.

Versi 2.0.6 - Dikeluarkan pada 2026-01-16
* Penambahbaikan: Sertakan langganan teras dalam addon. Tidak lagi memerlukan sambungan Woocommerce Subscriptinos.

Versi 2.0.5 - Dikeluarkan pada 2026-01-09
* Penambahbaikan: Muatkan terjemahan daripada glotpress API.
* Pembetulan: Ralat maut dalam sesetengah page builder.
* pembetulan: Ubah hala tak terhingga apabila pelanggan ialah ahli site utama.

Versi 2.0.4 - Dikeluarkan pada 2025-11-14
* Ditambah: Terjemahan untuk lebih banyak bahasa.
* Diubah: Dinamakan semula kepada Ultimate Multisite: Woocommerce Integration.
* Ditambah: Keserasian dengan Woocommerce 10.2.1.
* Ditambah: Keserasian dengan Woocommerce Subscriptions 7.7.0.
* Pembetulan: Keserasian dengan PHP 8.4
* Pembetulan: Ubah hala tetapi apabila tiada halaman Account WC wujud.

Versi 2.0.3 - Dikeluarkan pada 2025-08-13
* Diubah: Mendayakan kemas kini automatik dengan marketplace baharu.

Versi 2.0.2 - Dikeluarkan pada 2025-07-05
* Diubah: Dinamakan semula kepada Multisite Ultimate: Woocommerce Integration.
* Ditambah: Keserasian dengan Woocommerce 9.8.1.
* Ditambah: Keserasian dengan Woocommerce Subscriptions 7.3.0.
* Pembetulan: Membatalkan langganan oleh pelanggan.
* Pembetulan: Ralat maut apabila menggunakan blok checkout.
* Penambahbaikan: Kini serasi dengan jadual pesanan tersuai berprestasi tinggi Woocommerce.
* Pembetulan: Pembatalan di checkout WooCommerce masih boleh menaik taraf membership.

Versi 2.0.1 - Dikeluarkan pada 2023-08-09

* Ditambah: Keserasian dengan Woocommerce 7.9.0.
* Ditambah: Keserasian dengan Woocommerce Subscriptions 5.3.0.
* Ditambah: Sokongan untuk kemas kini membership.
* Ditambah: Notis tentang percubaan dan yuran persediaan dalam Woocommerce.
* Ditambah: Pengenalpastian produk Ultimate Multisite Woocommerce dengan nilai meta.
* Ditambah: Memasukkan pembetulan sekali sahaja untuk menandakan semua produk Woocommerce berkaitan Ultimate Multisite.
* Ditambah: Mengalih keluar produk yang dicipta Ultimate Multisite daripada senarai Woocommerce.
* Penambahbaikan: Mencipta diskaun Woocommerce tidak berulang untuk digunakan pada troli.
* Penambahbaikan: Memulihkan diskaun berulang kepada produk Woocommerce.
* Penambahbaikan: Menambah label diskaun berulang pada produk Woocommerce.
* Penambahbaikan: Memastikan jenis produk semasa checkout.
* Pembetulan: Mengekalkan status membership semasa proses downgrade.
* Pembetulan: Menyemak jika langganan wujud untuk mengelakkan ralat semasa proses pembatalan.
* Pembetulan: Menambah tarikh mula langganan untuk digunakan dalam langganan Woocommerce.
* Dalaman: Melaksanakan proses binaan PHP 8.1 baharu.

Versi 2.0.0 - Tulis semula lengkap.

* Ditambah: Kaedah proses pembatalan untuk mengalih keluar langganan woo apabila menukar gateway atau membatalkan membership;
* Ditambah: Pengendali untuk downgrade dan upgrade membership;
* Penambahbaikan: Muatkan kebergantungan woocommerce pada borang kemas kini pelanggan dalam subsite untuk membenarkan kemas kini account;
* Penambahbaikan: Betulkan muatan troli Woocommerce jika tidak wujud;
* Penambahbaikan: Pastikan kita berada pada jadual site utama apabila memproses checkout;
* Penambahbaikan: Jadikan pesanan pembaharuan Ultimo berdasarkan nilai pesanan langganan Woocommerce dan bukan daripada pembayaran terakhir;
* Pembetulan: Pautan butang Pergi ke WU Membership;
* Pembetulan: Tetapkan pesanan Ultimo sebagai dibayar apabila pembaharuan langganan Woocommerce telah dibayar;
* Binaan: Tambah MPB sebagai builder;

Versi 2.0.0-beta-5 - Dikeluarkan pada 2022-01-21

* Dalaman: Menambah penjana hooks dan filters;
* Dalaman: Menambah stub Ultimate Multisite untuk kualiti hidup pembangun;
* Dibetulkan: Menghalang penciptaan berbilang produk apabila tidak perlu;

Versi 2.0.0-beta.4 - 2021-09-23

* Pembetulan: memerlukan WooCommerce aktif rangkaian dan bukannya site utama sahaja;
* Penambahbaikan: menambah penapis untuk membenarkan add-on digunakan sebagai mu-plugin;

Versi 2.0.0-beta.3 - 2021-05-28

* Pembetulan: kawalan akses dashboard terlalu agresif;
* Penambahbaikan: Menambah pautan bantuan WooCommerce ke menu atas Ultimate Multisite;

Versi 2.0.0-beta.2 - 2021-05-04

* Penambahbaikan: mencipta pembayaran belum selesai pada Ultimo semasa penciptaan pesanan pembaharuan WCS;
* Penambahbaikan: mengisi awal field bil dengan data pelanggan Ultimate Multisite;
* Penambahbaikan: menambah semula field bil untuk gateway;

Versi 2.0.0-beta.1 - 2021-05-04

* Keluaran beta awal

-- Versi Legasi --

Versi 1.2.6 - 26/03/2020

* Dibetulkan: Ketidakserasian kecil dengan versi WooCommerce Subscriptions yang lebih baharu;

Versi 1.2.5 - 26/08/2019

* Dibetulkan: Ralat pada keluaran sebelumnya;

Versi 1.2.4 - 22/08/2019

* Ditambah baik: Menambah pilihan untuk mengalihkan ke skrin checkout WooCommerce selepas integrasi serta-merta;

Versi 1.2.3 - 26/05/2019

* Dibetulkan: E-mel pembayaran untuk WooCommerce hilang dalam beberapa kes pinggir;

Versi 1.2.2 - 27/02/2019

* Ditambah: Sokongan untuk yuran persediaan pada integrasi WooCommerce Subscription;

Versi 1.2.1 - 17/11/2018

* Dibetulkan: Isu keserasian dengan Ultimate Multisite versi 1.9.0;

Versi 1.2.0 - 10/09/2018

* Ditambah baik: URL kemas kini baharu untuk add-on;
* Ditambah: Sokongan beta untuk WooCommerce Subscription;

Versi 1.1.2 - 11/02/2018

* Dibetulkan: Pautan untuk Membayar dijana secara dinamik untuk bertindak balas terhadap perubahan pada endpoint WooCommerce;
* Ditambah baik: Kami kini memaksa status selesai untuk pesanan kami apabila payment_completed dipanggil bagi memastikan renewal hooks kami berjalan apabila sepatutnya;

Versi 1.1.1 - 24/01/2018

* Dibetulkan: Kini ia juga menyemak untuk melihat sama ada WooCommerce baru sahaja diaktifkan pada tapak utama;
* Dibetulkan: Menyertakan over-loadings untuk membolehkan penciptaan pesanan memasukkan cukai;

Versi 1.1.0 - 04/11/2017

* Dibetulkan: Kini label butang integrasi sebenarnya berubah untuk mencerminkan tetapan. Memerlukan Ultimate Multisite 1.5.0;
* Dibetulkan: Integrasi WooCommerce kini berfungsi walaupun WooCommerce tidak aktif rangkaian dan hanya diaktifkan dalam tapak utama;

1.0.0 - Keluaran Awal
