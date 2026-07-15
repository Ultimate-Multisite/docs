---
title: Menaik Taraf Pelan
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Menaik Taraf Pelan (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Pelanggan anda boleh menaik taraf pelan mereka pada bila-bila masa. Mereka boleh sama ada menaik taraf kepada pelan lain atau membeli sebarang perkhidmatan atau pakej tambahan yang anda tawarkan pada rangkaian anda.

Dalam tutorial ini, kami akan menerangkan cara mereka boleh menaik taraf pelan mereka dan apa yang berlaku selepas proses naik taraf.

Untuk menaik taraf pelan mereka, pelanggan anda harus mengakses dashboard mereka dan pergi ke halaman **Account**.

![Dashboard subsite pelanggan dengan pautan menu Account kelihatan](/img/account-page/account-menu.png)

Pada halaman Account, mereka akan ditunjukkan membership semasa mereka dan pelan yang berkaitan dengannya. Untuk menaik taraf kepada pelan lain, mereka mesti klik **Tukar** di sudut kanan atas bahagian **Membership Anda**.

![Halaman Account kad Membership Anda dengan butang Tukar](/img/account-page/membership-change-button.png)

Mereka akan dialihkan ke borang checkout di mana semua pelan yang tersedia akan dipaparkan.

Mereka juga akan dapat melihat **perkhidmatan dan pakej yang tersedia untuk pelan semasa mereka** , sekiranya mereka hanya mahu membeli perkhidmatan atau pakej tertentu (seperti lawatan tanpa had atau ruang cakera dalam contoh kami di sini), dan bukan menaik taraf pelan.

![Pemilih naik taraf menunjukkan pelan dan pakej yang tersedia di pihak pelanggan](/img/account-page/upgrade-picker.png)

Selepas mereka memilih produk yang ingin dibeli, mereka akan melihat berapa banyak yang perlu dibayar sekarang - tidak termasuk sebarang kredit sedia ada - dan berapa banyak yang akan dikenakan pada tarikh bil seterusnya.

Biasanya, jika produk itu ialah pelan lain dan bayaran akan dibuat antara caj membership, mereka akan menerima kredit untuk jumlah yang telah dibayar pada pelan pertama.

![Ringkasan bayaran naik taraf menunjukkan kredit digunakan dan jumlah bil seterusnya](/img/account-page/upgrade-summary.png)

Jika mereka memilih pelan atau pakej yang tidak akan mengubah apa-apa daripada subscription semasa, mereka akan melihat mesej yang menerangkannya.

![Notis apabila pelan yang dipilih tidak mengubah subscription](/img/account-page/upgrade-no-change.png)

Selepas checkout selesai, produk baharu akan ditambahkan ke account pelanggan anda dan semua had atau ciri produk baharu akan ditambahkan kepadanya serta-merta: lawatan, ruang cakera, siaran, dsb...

##

##

## Laluan Naik Taraf dan Turun Taraf {#upgrade-and-downgrade-paths}

Pada setiap produk anda, anda akan mempunyai tab **Up & Downgrades**. Pilihan pertama pada tab itu ialah medan yang dipanggil **Plan Group**.

**Kumpulan pelan** ialah apa yang membolehkan anda memberitahu Ultimate Multisite bahawa pelan tertentu tergolong dalam "keluarga" yang sama, dan oleh itu harus digunakan untuk membina pilihan laluan naik taraf/turun taraf.

![Tab Up and Downgrades sunting produk dengan medan Plan Group](/img/config/product-upgrades-plan-group.png)

Sebagai contoh, anda mempunyai **Pelan Percuma** , **Pelan Basic** dan **Pelan Premium** yang tersedia. Anda mahu pengguna yang melanggan di bawah **Pelan Percuma** dapat menaik taraf hanya kepada **Pelan Premium** dan anda tidak mahu mereka melihat "Pelan Basic" sebagai pilihan naik taraf. Apa yang perlu anda lakukan ialah menetapkan nama kumpulan pelan yang sama untuk kedua-dua pelan Percuma dan Premium seperti yang ditunjukkan dalam tangkapan skrin di bawah.

![Halaman produk Pelan Percuma dengan kumpulan pelan High End ditetapkan](/img/config/product-upgrades-free.png)

![Halaman produk Pelan Premium dengan kumpulan pelan High End ditetapkan](/img/config/product-upgrades-premium.png)

Apa yang sepatutnya dilakukan ini ialah memberitahu Ultimate Multisite bahawa terdapat satu "keluarga" pelan dalam rangkaian yang dipanggil **High End**. Apabila menawarkan naik taraf atau turun taraf, hanya pelan daripada keluarga yang sama akan dipersembahkan sebagai pilihan untuk pengguna.
