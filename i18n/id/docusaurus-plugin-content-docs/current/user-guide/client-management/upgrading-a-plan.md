---
title: Meningkatkan Paket
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Meningkatkan Paket (v2)

_**CATATAN PENTING: Artikel ini mengacu pada Ultimate Multisite versi 2.x.**_

Pelanggan Anda dapat meningkatkan paket mereka kapan saja. Mereka bisa memilih untuk beralih ke paket lain atau membeli layanan tambahan maupun paket yang Anda tawarkan di jaringan Anda.

Dalam tutorial ini, kita akan membahas cara pelanggan meningkatkan paket mereka dan apa yang terjadi setelah proses peningkatan selesai.

Untuk meningkatkan paket, pelanggan Anda perlu mengakses dashboard mereka dan membuka halaman **Account**.

![Dashboard pelanggan dengan tautan halaman Account](/img/admin/memberships-list.png)

Di halaman Account, mereka akan melihat keanggotaan aktif beserta paket yang terkait. Untuk beralih ke paket lain, mereka harus mengklik **Change** di pojok kanan atas bagian **Your Membership**.

![Bagian Your Membership dengan tombol Change](/img/admin/memberships-list.png)

Mereka akan diarahkan ke formulir checkout yang menampilkan semua paket yang tersedia.

Mereka juga dapat melihat **layanan dan paket yang tersedia untuk paket mereka saat ini**, jika mereka hanya ingin membeli layanan atau paket tertentu (seperti kunjungan tak terbatas atau ruang penyimpanan dalam contoh ini), tanpa perlu meningkatkan paket.

![Formulir checkout yang menampilkan paket dan layanan tersedia](/img/admin/memberships-list.png)

Setelah memilih produk yang ingin dibeli, mereka akan melihat jumlah yang harus dibayar saat itu juga — tidak termasuk kredit yang sudah ada — dan berapa yang akan ditagihkan pada tanggal penagihan berikutnya.

Biasanya, jika produk yang dipilih adalah paket lain dan pembayaran dilakukan di antara periode tagihan keanggotaan, mereka akan menerima kredit untuk jumlah yang sudah dibayarkan pada paket pertama.

![Ringkasan pembayaran upgrade dengan kredit dan jumlah tagihan berikutnya](/img/admin/memberships-list.png)

Jika mereka memilih paket atau layanan yang tidak mengubah apa pun dari langganan saat ini, mereka akan melihat pesan yang menjelaskan hal tersebut.

![Pesan ketika paket yang dipilih tidak mengubah langganan](/img/admin/memberships-list.png)

Setelah proses checkout selesai, produk baru akan ditambahkan ke akun pelanggan Anda dan semua batasan atau fitur dari produk baru tersebut akan langsung aktif: kunjungan, ruang penyimpanan, postingan, dan lain-lain.

## 

## 

## Jalur Upgrade dan Downgrade

Pada setiap produk yang Anda buat, terdapat tab **Up & Downgrades**. Opsi pertama di tab tersebut adalah field bernama **Plan Group**.

**Plan groups** adalah fitur yang memungkinkan Anda memberi tahu Ultimate Multisite bahwa paket-paket tertentu termasuk dalam "keluarga" yang sama, sehingga dapat digunakan untuk menyusun opsi jalur upgrade/downgrade.

![Tab Up and Downgrades dengan field Plan Group](/img/config/product-upgrades.png)

Sebagai contoh, Anda memiliki **Free Plan**, **Basic Plan**, dan **Premium Plan** yang tersedia. Anda ingin pengguna yang berlangganan **Free Plan** hanya dapat melakukan upgrade ke **Premium Plan** dan Anda tidak ingin mereka melihat "Basic Plan" sebagai opsi upgrade. Yang perlu Anda lakukan hanyalah menetapkan nama plan group yang sama untuk paket Free dan Premium seperti yang ditunjukkan pada tangkapan layar di bawah ini.

![Free Plan dengan plan group High End yang ditetapkan](/img/config/product-upgrades.png)

![Premium Plan dengan plan group High End yang ditetapkan](/img/config/product-upgrades.png)

Dengan pengaturan ini, Ultimate Multisite akan memahami bahwa ada "keluarga" paket di jaringan bernama **High End**. Saat menawarkan upgrade atau downgrade, hanya paket dari keluarga yang sama yang akan ditampilkan sebagai pilihan bagi pengguna.
