---
title: Carian dan Gantian Automatik dalam Templat Laman
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Carian dan Gantian Automatik dalam Templat Laman (v2)

_**Tutorial ini memerlukan WP UItimo versi 2.x.**_

Salah satu ciri paling berkuasa dalam Ultimate Multisite ialah keupayaan untuk menambah medan teks, warna, dan pilihan mengikut kehendak anda pada borang pendaftaran. Setelah data tersebut dikumpul, kita boleh gunakannya untuk mengisi kandungan secara automatik di bahagian tertentu templat laman yang dipilih. Kemudian, apabila laman baharu diterbitkan, Ultimate Multisite akan menggantikan placeholder dengan maklumat sebenar yang dimasukkan semasa pendaftaran.

Sebagai contoh, anda boleh menyediakan templat laman dengan placeholder. Placeholder perlu ditambah dengan mengapitnya menggunakan kurungan kerinting berganda - {{nama_placeholder}}.

Kemudian, anda hanya perlu menambah medan pendaftaran yang sepadan untuk mengumpul data tersebut

Pelanggan anda akan dapat mengisi medan tersebut semasa pendaftaran.

Ultimate Multisite kemudian akan menggantikan placeholder dengan data yang diberikan oleh pelanggan secara automatik.

## **Menyelesaikan masalah "templat penuh dengan placeholder"**

Semua ini memang bagus, tetapi kita akan menghadapi satu masalah yang kurang menarik: kini templat laman kita - yang boleh dilawati oleh pelanggan - penuh dengan placeholder yang hodoh dan tidak memberikan banyak maklumat.

Untuk menyelesaikan masalah ini, kami menawarkan pilihan untuk menetapkan nilai palsu bagi placeholder tersebut, dan kami menggunakan nilai tersebut untuk mencari dan menggantikan kandungannya pada templat laman semasa pelanggan anda melayarinya.

Anda boleh mengakses editor placeholder templat dengan pergi ke **Ultimate Multisite > Settings > Sites**, dan kemudian, pada bar sisi, klik pautan Edit Placeholders.

![Pautan Edit Placeholders di bar sisi tetapan Sites](/img/config/settings-sites.png)

Ini akan membawa anda ke editor kandungan placeholder, di mana anda boleh menambah placeholder dan kandungan masing-masing.

![Editor kandungan placeholder dengan nama dan nilai placeholder](/img/config/settings-sites.png)
