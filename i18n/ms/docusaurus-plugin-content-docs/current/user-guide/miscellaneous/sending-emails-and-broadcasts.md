---
title: Menghantar E-mel dan Siaran
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# Menghantar Emel dan Broadcast (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Ultimate Multisite dilengkapi dengan ciri yang membolehkan anda berkomunikasi dengan pelanggan melalui penghantaran emel kepada pengguna tertentu atau sekumpulan pengguna, serta menghantar notis di dashboard admin mereka untuk menyiarkan pengumuman.

## Tambah notis admin ke dashboard pelanggan anda dengan Broadcasts

Menggunakan ciri broadcast Ultimate Multisite, anda boleh menambah **notis admin** di dashboard admin subsite pengguna anda.

Ini amat berguna sekiranya anda perlu membuat pengumuman seperti penyelenggaraan sistem atau menawarkan produk atau perkhidmatan baharu kepada pengguna sedia ada. Begini rupa notis admin di dashboard pengguna anda.

![Broadcast notis admin dipaparkan di dashboard pelanggan](/img/admin/broadcasts-list.png)

Untuk memulakan notis admin, pergi ke dashboard admin rangkaian anda dan di bawah menu **Ultimate Multisite**, anda akan menemui pilihan **Broadcasts**.

![Menu Broadcasts dalam admin Ultimate Multisite](/img/admin/broadcasts-list.png)

Dari halaman ini, klik butang **Add Broadcast** di bahagian atas.

Ini akan memaparkan tetingkap modal Add broadcast di mana anda boleh memilih jenis broadcast yang ingin dihantar.

Pilih **Message** kemudian klik butang **Next Step**.

![Modal add broadcast dengan jenis Message dipilih](/img/admin/broadcasts-list.png)

Tetingkap seterusnya akan meminta sama ada **Target customer** atau **Target product**. Ambil perhatian bahawa anda boleh memilih lebih daripada satu pengguna atau lebih daripada satu produk.

Untuk mencari akaun pengguna atau produk, anda perlu mula menaip kata kunci di dalam medan tersebut.

Di bawah medan **Message type**, anda boleh memilih warna notis. Ini akan menekankan tahap kepentingan mesej anda.

Kemudian anda boleh klik **Next Step**.

![Pemilihan target customer dan product untuk broadcast](/img/admin/broadcasts-list.png)

Tetingkap seterusnya adalah tempat anda boleh mula menulis mesej dengan memasukkan subjek dan kandungan/mesej yang ingin disiarkan kepada pengguna.

![Editor subjek dan kandungan mesej broadcast](/img/admin/broadcasts-list.png)

Selepas mencipta mesej anda, klik butang **Send**.

Itu sahaja. Notis admin akan segera dipaparkan di dashboard pengguna anda.

## Hantar emel kepada pelanggan anda

Menggunakan ciri broadcast Ultimate Multisite, anda boleh menghantar emel kepada pengguna anda. Anda mempunyai pilihan untuk menghantar emel hanya kepada pengguna tertentu atau menyasarkan kumpulan pengguna tertentu berdasarkan produk atau pelan yang mereka langgan.

Untuk memulakan broadcast emel, pergi ke dashboard admin rangkaian anda dan di bawah menu Ultimate Multisite, anda akan menemui pilihan Broadcast.

![Halaman Broadcasts dalam admin Ultimate Multisite](/img/admin/broadcasts-list.png)

Dari halaman ini, klik butang **Add broadcast** di bahagian atas.

Ini akan memaparkan tetingkap modal Add broadcast di mana anda boleh memilih jenis broadcast yang ingin dihantar. Pilih **Email** kemudian klik butang **Next Step**.

![Modal add broadcast dengan jenis Email dipilih](/img/admin/broadcasts-list.png)

Tetingkap seterusnya akan meminta sama ada **Target customer** atau **Target product**. Ambil perhatian bahawa anda boleh memilih lebih daripada satu pengguna atau lebih daripada satu produk.

Untuk mencari akaun pengguna atau produk, anda perlu mula menaip kata kunci di dalam medan tersebut.

Setelah audiens sasaran dipilih, anda boleh klik **Next Step**.

![Pemilihan target customer dan product untuk broadcast emel](/img/admin/broadcasts-list.png)

Tetingkap seterusnya adalah tempat anda boleh mula menulis emel dengan memasukkan subjek dan kandungan/mesej yang ingin dihantar kepada pengguna.

![Editor subjek dan kandungan broadcast emel](/img/admin/broadcasts-list.png)

Selepas mencipta mesej anda, klik butang **Send**.

Begitulah mudahnya untuk menghantar emel kepada pengguna akhir anda menggunakan ciri broadcast.

## Emel sistem

Emel sistem dalam Ultimate Multisite adalah **notifikasi automatik** yang dihantar oleh sistem selepas tindakan tertentu seperti pendaftaran, pembayaran, pemetaan domain, dan sebagainya. Emel ini boleh diedit atau diubah suai dari tetapan Ultimate Multisite. Ia juga dilengkapi dengan ciri yang membolehkan anda menetapkan semula dan mengimport tetapan sedia ada dari pemasangan Ultimate Multisite yang lain.

### Menetapkan Semula & Mengimport

Versi Ultimate Multisite baharu, serta add-on, boleh dan akan mendaftarkan emel baharu dari semasa ke semasa.

Untuk mengelakkan konflik dan masalah lain, **kami tidak akan menambah templat emel baharu sebagai System Emails pada pemasangan anda secara automatik**, melainkan ia penting untuk fungsi ciri tertentu.

Walau bagaimanapun, super admin dan agen boleh mengimport emel yang baru didaftarkan ini melalui alat pengimport. Proses ini akan mencipta emel sistem baharu dengan kandungan dan konfigurasi templat emel baharu tersebut, membolehkan super admin membuat sebarang pengubahsuaian yang dikehendaki atau membiarkannya seperti sedia ada.

#### Cara mengimport emel sistem

Pergi ke halaman Ultimate Multisite Settings anda dan pergi ke tab **Emails**.

![Tab Emails dalam tetapan Ultimate Multisite](/img/config/settings-emails.png)

Kemudian, di bar sisi, klik butang **Customize System Emails**.

![Butang Customize System Emails di bar sisi](/img/config/settings-emails.png)

Di halaman System Emails, anda akan melihat butang tindakan **Reset & Import** di bahagian atas. Mengklik butang itu akan membuka tetingkap modal import dan reset.

![Butang tindakan Reset and Import di halaman System Emails](/img/config/settings-emails.png)

Kemudian, anda boleh togol pilihan Import Emails untuk melihat emel sistem mana yang tersedia untuk diimport.

![Pilihan Import Emails menunjukkan emel sistem yang tersedia](/img/config/settings-emails.png)

#### Menetapkan Semula Emel Sistem

Ada kalanya, anda menyedari bahawa perubahan yang dibuat pada templat emel tertentu tidak lagi sesuai untuk anda dan anda ingin menetapkannya semula kepada **keadaan asal**.

Dalam kes sebegini, anda mempunyai dua pilihan: anda boleh memadamkan emel sistem dan mengimportnya semula (menggunakan arahan di atas) - yang akan memadam metrik penghantaran dan perkara lain, menjadikan kaedah ini kurang diutamakan.

Atau anda boleh menggunakan **alat Reset & Import** untuk menetapkan semula templat emel tersebut.

Untuk menetapkan semula templat emel, anda boleh mengikuti langkah-langkah di atas sehingga anda sampai ke alat Reset & Import, kemudian togol pilihan **Reset** dan pilih emel yang anda ingin tetapkan semula kepada kandungan asal.

![Pilihan Reset untuk memulihkan templat emel kepada asal](/img/config/settings-emails.png)
