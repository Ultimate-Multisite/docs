---
title: Pencarian dan Penggantian Otomatis di Template Situs
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Cari dan Ganti Otomatis di Template Situs (v2)

_**Tutorial ini memerlukan WP UItimo versi 2.x.**_

Salah satu fitur paling powerful dari Ultimate Multisite adalah kemampuan untuk menambahkan field teks, warna, dan pilihan secara bebas ke formulir pendaftaran. Setelah data tersebut berhasil diambil, kita bisa menggunakannya untuk mengisi konten secara otomatis di bagian-bagian tertentu dari template situs yang dipilih. Kemudian, ketika situs baru dipublikasikan, Ultimate Multisite akan mengganti placeholder dengan informasi sebenarnya yang dimasukkan saat pendaftaran.

Sebagai contoh, Anda bisa membuat template situs dengan placeholder. Placeholder harus ditambahkan dengan diapit tanda kurung kurawal ganda - {{nama_placeholder}}.

Kemudian, Anda cukup menambahkan field pendaftaran yang sesuai untuk mengambil data tersebut

Pelanggan Anda kemudian bisa mengisi field tersebut saat pendaftaran.

Ultimate Multisite akan secara otomatis mengganti placeholder dengan data yang diberikan oleh pelanggan.

## **Mengatasi masalah "template penuh placeholder"**

Semua itu memang bagus, tapi kita menghadapi satu masalah yang kurang enak: sekarang template situs kita - yang bisa dikunjungi oleh pelanggan - penuh dengan placeholder yang tidak menarik dan tidak banyak memberikan informasi.

Untuk mengatasi hal ini, kami menyediakan opsi untuk mengatur nilai sementara pada placeholder, dan kami menggunakan nilai-nilai tersebut untuk mencari dan mengganti kontennya di template situs saat pelanggan Anda berkunjung.

Anda bisa mengakses editor placeholder template dengan membuka **Ultimate Multisite > Settings > Sites**, lalu pada sidebar, klik link Edit Placeholders.

![Link Edit Placeholders di sidebar pengaturan Sites](/img/config/settings-sites.png)

Itu akan membawa Anda ke editor konten placeholder, di mana Anda bisa menambahkan placeholder beserta kontennya masing-masing.

![Editor konten placeholder dengan nama dan nilai placeholder](/img/config/settings-sites.png)
