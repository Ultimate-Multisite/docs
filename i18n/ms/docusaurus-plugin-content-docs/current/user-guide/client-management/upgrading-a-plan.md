---
title: Menaik taraf Pelan
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Menaik Taraf Pelan (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Pelanggan anda boleh menaik taraf pelan mereka pada bila-bila masa. Mereka boleh sama ada menaik taraf ke pelan lain atau membeli sebarang perkhidmatan atau pakej tambahan yang anda tawarkan di rangkaian anda.

Dalam tutorial ini, kami akan menerangkan cara mereka boleh menaik taraf pelan dan apa yang berlaku selepas proses naik taraf.

Untuk menaik taraf pelan, pelanggan anda perlu mengakses dashboard mereka dan pergi ke halaman **Account**.

![Dashboard pelanggan dengan pautan halaman Account](/img/admin/memberships-list.png)

Di halaman Account, mereka akan dapat melihat keahlian semasa dan pelan yang dikaitkan dengannya. Untuk menaik taraf ke pelan lain, mereka perlu klik pada **Change** di sudut kanan atas bahagian **Your Membership**.

![Bahagian Your Membership dengan butang Change](/img/admin/memberships-list.png)

Mereka akan dialihkan ke borang checkout di mana semua pelan yang tersedia akan dipaparkan.

Mereka juga boleh melihat **perkhidmatan dan pakej yang tersedia untuk pelan semasa mereka**, sekiranya mereka hanya ingin membeli perkhidmatan atau pakej tertentu (seperti lawatan tanpa had atau ruang cakera dalam contoh kami di sini), dan bukan menaik taraf pelan.

![Borang checkout menunjukkan pelan dan pakej yang tersedia](/img/admin/memberships-list.png)

Selepas mereka memilih produk yang ingin dibeli, mereka akan melihat jumlah yang perlu dibayar sekarang - tidak termasuk sebarang kredit sedia ada - dan jumlah yang akan dikenakan pada tarikh pengebilan seterusnya.

Biasanya, jika produk tersebut adalah pelan lain dan pembayaran akan dibuat antara caj keahlian, mereka akan menerima kredit untuk jumlah yang telah dibayar pada pelan pertama.

![Ringkasan pembayaran naik taraf dengan kredit dan jumlah pengebilan seterusnya](/img/admin/memberships-list.png)

Jika mereka memilih pelan atau pakej yang tidak akan mengubah apa-apa daripada langganan semasa, mereka akan melihat mesej yang menerangkan perkara tersebut.

![Mesej apabila pelan yang dipilih tidak mengubah langganan](/img/admin/memberships-list.png)

Selepas checkout selesai, produk baharu akan ditambah ke akaun pelanggan anda dan semua had atau ciri produk baharu akan ditambah serta-merta: lawatan, ruang cakera, pos, dan sebagainya...

## 

## 

## Laluan Naik Taraf dan Turun Taraf

Pada setiap produk anda, terdapat tab **Up & Downgrades**. Pilihan pertama pada tab tersebut adalah medan yang dipanggil **Plan Group**.

**Plan groups** adalah ciri yang membolehkan anda memberitahu Ultimate Multisite bahawa pelan-pelan tertentu tergolong dalam "keluarga" yang sama, dan oleh itu harus digunakan untuk membina pilihan laluan naik taraf/turun taraf.

![Tab Up and Downgrades dengan medan Plan Group](/img/config/product-upgrades.png)

Sebagai contoh, anda mempunyai **Free plan**, **Basic Plan** dan **Premium Plan** yang tersedia. Anda mahu pengguna yang dilanggan di bawah **Free Plan** hanya boleh menaik taraf ke **Premium Plan** dan anda tidak mahu mereka melihat "Basic Plan" sebagai pilihan naik taraf. Apa yang perlu anda lakukan adalah menetapkan nama plan group yang sama untuk kedua-dua pelan Free dan Premium seperti yang ditunjukkan dalam tangkapan skrin di bawah.

![Free Plan dengan plan group High End ditetapkan](/img/config/product-upgrades.png)

![Premium Plan dengan plan group High End ditetapkan](/img/config/product-upgrades.png)

Ini akan memberitahu Ultimate Multisite bahawa terdapat "keluarga" pelan dalam rangkaian yang dipanggil **High End**. Apabila menawarkan naik taraf atau turun taraf, hanya pelan dari keluarga yang sama akan ditunjukkan sebagai pilihan kepada pengguna.
