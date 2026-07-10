---
title: Pencarian dan Penggantian Otomatis di Templat Situs
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Cari dan Ganti Otomatis di Template Situs (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Tutorial ini memerlukan WP UItimo versi 2.x.**_

Salah satu fitur paling kuat dari Ultimate Multisite adalah kemampuan untuk menambahkan teks, warna, dan bidang pilihan arbitrer ke formulir pendaftaran. Setelah data tersebut kita tangkap, kita dapat menggunakannya untuk mengisi terlebih dahulu konten di bagian tertentu dari template situs yang dipilih. Kemudian, ketika situs baru dipublikasikan, Ultimate Multisite akan mengganti placeholder dengan informasi aktual yang dimasukkan saat pendaftaran.

Misalnya, Anda dapat membuat situs template Anda dengan placeholder. Placeholder harus ditambahkan dengan diapit kurung kurawal ganda - {{placeholder_name}}.

Kemudian, Anda cukup menambahkan bidang pendaftaran yang cocok untuk menangkap data tersebut

Pelanggan Anda kemudian akan dapat mengisi bidang tersebut selama pendaftaran.

Ultimate Multisite kemudian akan mengganti placeholder dengan data yang diberikan oleh pelanggan secara otomatis.

## **Menyelesaikan masalah "template penuh placeholder"** {#solving-the-template-full-of-placeholders-problem}

Semua itu bagus, tetapi kita memang menghadapi masalah yang tidak sedap dipandang: kini template situs kita - yang dapat dikunjungi oleh pelanggan kita - penuh dengan placeholder yang tidak banyak menjelaskan.

Untuk menyelesaikannya, kami menawarkan opsi untuk menetapkan nilai palsu bagi placeholder, dan kami menggunakan nilai tersebut untuk mencari dan mengganti kontennya pada situs template saat pelanggan Anda berkunjung.

Anda dapat mengakses editor placeholder template dengan membuka **Ultimate Multisite > Settings > Sites**, menggulir ke area Site Template Options, lalu mengeklik tautan **Edit Placeholders**.

![Area Site Template Options di halaman pengaturan Sites](/img/config/settings-sites-templates-section.png)

Itu akan membawa Anda ke editor konten placeholder, tempat Anda dapat menambahkan placeholder dan kontennya masing-masing.

![Titik masuk editor placeholder template](/img/config/settings-sites-templates-section.png)
