---
title: Cari dan Ganti Automatik dalam Templat Laman
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Carian dan Penggantian Automatik dalam Templat Tapak (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Tutorial ini memerlukan WP UItimo versi 2.x.**_

Salah satu ciri paling berkuasa Ultimate Multisite ialah keupayaan untuk menambah teks, warna, dan medan pilihan sewenang-wenangnya pada borang pendaftaran. Setelah kita menangkap data itu, kita boleh menggunakannya untuk mengisi awal kandungan di bahagian tertentu templat tapak yang dipilih. Kemudian, apabila tapak baharu diterbitkan, Ultimate Multisite akan menggantikan placeholder dengan maklumat sebenar yang dimasukkan semasa pendaftaran.

Sebagai contoh, anda boleh membuat tapak templat anda dengan placeholder. Placeholder harus ditambahkan dengan dikelilingi tanda kurung kerinting berganda - {{placeholder_name}}.

Kemudian, anda boleh menambah medan pendaftaran yang sepadan untuk menangkap data tersebut dengan mudah

Pelanggan anda kemudian akan dapat mengisi medan itu semasa pendaftaran.

Ultimate Multisite kemudian akan menggantikan placeholder dengan data yang diberikan oleh pelanggan secara automatik.

## **Menyelesaikan masalah "templat penuh dengan placeholder"** {#solving-the-template-full-of-placeholders-problem}

Semua itu bagus, tetapi kita memang menghadapi masalah yang tidak menarik: kini templat tapak kita - yang boleh dikunjungi oleh pelanggan kita - penuh dengan placeholder yang tidak banyak memberi maklumat.

Untuk menyelesaikannya, kami menawarkan pilihan untuk menetapkan nilai palsu bagi placeholder, dan kami menggunakan nilai tersebut untuk mencari dan menggantikan kandungannya pada tapak templat semasa pelanggan anda sedang melawat.

Anda boleh mengakses editor placeholder templat dengan pergi ke **Ultimate Multisite > Tetapan > Tapak**, menatal ke kawasan Pilihan Templat Tapak, dan kemudian mengklik pautan **Edit Placeholders**.

![Kawasan Pilihan Templat Tapak dalam halaman tetapan Tapak](/img/config/settings-sites-templates-section.png)

Itu akan membawa anda ke editor kandungan placeholder, tempat anda boleh menambah placeholder dan kandungan masing-masing.

![Titik masuk editor placeholder templat](/img/config/settings-sites-templates-section.png)
