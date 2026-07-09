---
title: Meningkatkan Paket
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Meningkatkan Plan (v2) {#upgrading-a-plan-v2}

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Pelanggan Anda dapat meningkatkan plan mereka kapan saja. Mereka dapat meningkatkan ke plan lain atau membeli layanan atau paket tambahan apa pun yang Anda tawarkan di jaringan Anda.

Dalam tutorial ini, kami akan membahas bagaimana mereka dapat meningkatkan plan mereka dan apa yang terjadi setelah proses peningkatan.

Untuk meningkatkan plan mereka, pelanggan Anda harus mengakses dashboard mereka dan pergi ke halaman **Account**.

![Dashboard subsite pelanggan dengan tautan menu Account terlihat](/img/account-page/account-menu.png)

Di halaman Account, mereka akan ditampilkan membership mereka saat ini dan plan yang terkait dengannya. Untuk meningkatkan ke plan lain, mereka harus mengklik **Ubah** di sudut kanan atas bagian **Membership Anda**.

![Halaman Account kartu Membership Anda dengan tombol Ubah](/img/account-page/membership-change-button.png)

Mereka akan dialihkan ke formulir checkout tempat semua plan yang tersedia akan ditampilkan.

Mereka juga akan dapat melihat **layanan dan paket yang tersedia untuk plan mereka saat ini** , jika mereka hanya ingin membeli layanan atau paket tertentu (seperti kunjungan tak terbatas atau ruang disk dalam contoh kami di sini), dan tidak meningkatkan plan.

![Pemilih peningkatan yang menampilkan plan dan paket yang tersedia di sisi pelanggan](/img/account-page/upgrade-picker.png)

Setelah mereka memilih produk yang ingin mereka beli, mereka akan melihat berapa banyak yang perlu mereka bayar saat ini - tidak termasuk kredit yang sudah ada - dan berapa banyak yang akan dibebankan pada tanggal penagihan berikutnya.

Biasanya, jika produk tersebut adalah plan lain dan pembayaran akan dilakukan di antara tagihan membership, mereka akan menerima kredit untuk jumlah yang telah dibayarkan pada plan pertama.

![Ringkasan pembayaran peningkatan yang menunjukkan kredit diterapkan dan jumlah penagihan berikutnya](/img/account-page/upgrade-summary.png)

Jika mereka memilih plan atau paket yang tidak akan mengubah apa pun dari langganan saat ini, mereka akan melihat pesan yang menjelaskan hal tersebut.

![Pemberitahuan saat plan yang dipilih tidak mengubah langganan](/img/account-page/upgrade-no-change.png)

Setelah checkout selesai, produk baru akan ditambahkan ke account pelanggan Anda dan semua batas atau fitur dari produk baru akan langsung ditambahkan ke dalamnya: kunjungan, ruang disk, pos, dll...

##

##

## Jalur Peningkatan dan Penurunan {#upgrade-and-downgrade-paths}

Pada setiap produk Anda, Anda akan memiliki tab **Up & Downgrades**. Opsi pertama pada tab tersebut adalah field yang disebut **Plan Group**.

**Grup plan** adalah yang memungkinkan Anda memberi tahu Ultimate Multisite bahwa plan tertentu termasuk dalam "keluarga" yang sama, dan karena itu harus digunakan untuk menyusun opsi jalur peningkatan/penurunan.

![Edit produk tab Up and Downgrades dengan field Plan Group](/img/config/product-upgrades-plan-group.png)

Misalnya, Anda memiliki **Free plan** , **Basic Plan**, dan **Premium Plan** yang tersedia. Anda ingin pengguna yang berlangganan di bawah **Free Plan** dapat meningkatkan hanya ke **Premium Plan** dan Anda tidak ingin mereka melihat "Basic Plan" sebagai opsi peningkatan. Yang perlu Anda lakukan hanyalah menetapkan nama grup plan yang sama untuk plan Free dan Premium seperti yang ditunjukkan pada tangkapan layar di bawah ini.

![Halaman produk Free Plan dengan grup plan High End ditetapkan](/img/config/product-upgrades-free.png)

![Halaman produk Premium Plan dengan grup plan High End ditetapkan](/img/config/product-upgrades-premium.png)

Yang seharusnya dilakukan ini adalah memberi tahu Ultimate Multisite bahwa ada "keluarga" plan di jaringan yang disebut **High End**. Saat menawarkan peningkatan atau penurunan, hanya plan dari keluarga yang sama yang akan disajikan sebagai opsi bagi pengguna.
