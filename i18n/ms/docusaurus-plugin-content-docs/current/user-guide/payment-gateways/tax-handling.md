---
title: Pengendalian Cukai
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Pengendalian Cukai {#tax-handling}

Ultimate Multisite mempunyai modul kutipan cukai yang terbina dalam plugin teras kami, jadi jika anda perlu mengutip cukai jualan pada pelan, pakej dan perkhidmatan anda, anda boleh melakukannya dengan mudah tanpa perlu memasang sebarang tambahan.

Untuk syarikat yang terletak di Eropah, kami menawarkan **tambahan** yang menambah alat dan ciri untuk **menyokong VAT** pematuhan dengan lebih baik.

Ultimate Multisite tidak memfailkan atau meremit cukai bagi pihak anda kepada kerajaan; kami hanya membantu anda mengutip cukai yang sesuai pada masa transaksi. **Anda masih perlu meremit cukai sendiri.**

## Mengaktifkan Kutipan Cukai {#enabling-tax-collection}

Kutipan cukai tidak diaktifkan secara lalai. Untuk mengaktifkannya, anda perlu pergi ke **Ultimate Multisite > Tetapan > Cukai** dan togol untuk mengaktifkan tetapan Aktifkan Cukai.

![Togol Aktifkan Cukai di bahagian atas halaman tetapan Cukai](/img/config/settings-taxes-enable.png)

Berikut ialah paparan penuh halaman tetapan cukai:

![Halaman penuh tetapan cukai](/img/config/settings-taxes-full.png)

Anda juga boleh melihat tetapan cukai untuk produk individu:

![Tetapan cukai untuk produk](/img/config/settings-taxes.png)

### Cukai dikecualikan vs. cukai disertakan {#tax-excluded-vs-tax-included}

Secara lalai, semua harga produk anda tidak termasuk cukai, bermakna cukai **tidak disertakan** dalam harga produk. Jika kami menentukan bahawa pelanggan perlu membayar cukai untuk pembelian tertentu, kami akan menambah cukai **di atas** subjumlah.

Jika anda lebih suka cukai disertakan dalam harga produk anda, anda boleh melakukannya dengan mengaktifkan tetapan **Cukai Inklusif**.

![Baris togol Cukai Inklusif di bawah tetapan Aktifkan Cukai](/img/config/settings-taxes-inclusive.png)

Jangan lupa untuk **menyimpan** perubahan yang telah anda buat.

###

## Mencipta Kadar Cukai {#creating-tax-rates}

Selepas anda mengaktifkan Kutipan Cukai, anda perlu mencipta kadar cukai untuk lokasi tertentu menggunakan editor kadar cukai kami.

Anda boleh mengakses editor dengan mengklik butang **Urus Kadar Cukai** pada bar sisi halaman tetapan Cukai.

![Pautan Urus Kadar Cukai dalam panel Kadar Cukai pada halaman tetapan](/img/config/settings-taxes-manage-rates.png)

Pada halaman editor kadar cukai, anda boleh menambah Kadar Cukai baharu dengan mengklik butang **Tambah Baris baharu**.

![Jadual editor kadar cukai dengan butang Tambah Baris baharu di bahagian atas](/img/config/tax-rates-editor.png)

Anda perlu memberikan setiap kadar cukai satu **tajuk** (digunakan pada invois). Kemudian anda boleh memilih **negara** (wajib), **negeri,** dan **bandar** (kedua-duanya pilihan) tempat cukai ini akan dikenakan. Akhir sekali, tambah **kadar cukai dalam peratus**.

### Kategori Cukai {#tax-categories}

Anda juga boleh mencipta beberapa Kategori Cukai, untuk menambah kadar cukai berbeza bagi jenis produk yang berbeza.

Klik untuk **Tambah Kategori Cukai baharu** , kemudian tulis nama kategori anda dan tekan **Cipta**.

![Butang Tambah Kategori Cukai baharu di bahagian atas editor kadar cukai](/img/config/tax-categories-add.png)

![Medan input Nama Kategori Cukai dalam modal cipta kategori](/img/config/tax-categories-create-modal.png)

Untuk menyemak imbas kategori, klik **Tukar** dan pilih kategori yang anda mahu tambah cukai baharu.

![Butang dropdown Tukar untuk menukar antara kategori cukai](/img/config/tax-categories-switch.png)

![Dropdown pemilih kategori cukai yang menunjukkan kategori tersedia](/img/config/tax-categories-select.png)

Anda boleh menetapkan kategori cukai untuk produk tertentu dengan pergi ke **halaman edit Produk** dan kemudian ke tab Cukai.

![Tab cukai produk dengan kategori cukai dan togol boleh dikenakan cukai](/img/config/product-taxes.png)

Pada skrin yang sama, anda boleh mematikan togol **Boleh Dikenakan Cukai?** untuk memberitahu Ultimate Multisite bahawa ia tidak sepatutnya mengutip cukai pada produk tersebut.

## Sokongan VAT Eropah {#european-vat-support}

Seperti yang disebutkan sebelum ini, kami mempunyai tambahan yang tersedia untuk pelanggan di EU yang mempunyai keperluan tambahan disebabkan peraturan VAT Eropah.

Alat VAT kami membantu dengan beberapa perkara penting:

  * Pemuatan mudah kadar VAT EU;

  * Kutipan dan pengesahan Nombor VAT - dan caj terbalik untuk entiti yang dikecualikan VAT (seperti syarikat dengan nombor VAT yang sah);

Untuk memasang tambahan itu, pergi ke **Ultimate Multisite > Tetapan** dan kemudian klik pada pautan bar sisi **Semak Tambahan kami**.

![Bar sisi halaman tetapan dengan pautan Semak Tambahan kami](/img/config/settings-taxes-addons-link.png)

Anda akan dialihkan ke halaman tambahan kami. Di sana, anda boleh mencari **tambahan VAT Ultimate Multisite** dan memasangnya.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Kemudian, pergi ke **Admin Rangkaian > Plugin** dan aktifkan tambahan itu di seluruh rangkaian.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Jika anda kembali ke **tab Tetapan Cukai** , anda akan melihat pilihan baharu tersedia. Togol pilihan **Aktifkan Sokongan VAT** untuk mengaktifkan alat VAT baharu. Jangan lupa untuk **menyimpan** tetapan anda!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Menarik Kadar Cukai VAT {#pulling-on-vat-tax-rates}

Salah satu alat yang ditambah oleh integrasi kami ialah keupayaan untuk memuatkan kadar cukai bagi negara anggota EU. Ini boleh dilakukan dengan melawat halaman editor kadar cukai selepas mengaktifkan sokongan EU VAT.

Di bahagian bawah halaman, anda akan melihat pilihan penarikan VAT. Memilih jenis kadar dan mengklik butang **Kemas Kini Kadar VAT EU** akan menarik dan mengisi jadual secara automatik dengan kadar cukai untuk setiap negara anggota EU. Kemudian, anda hanya perlu menyimpannya.

![Butang Kemas Kini Kadar VAT EU di bahagian bawah editor kadar cukai](/img/config/tax-rates-vat-pull.png)

Anda juga boleh mengedit nilai selepas menariknya. Untuk melakukannya, cuma edit baris jadual yang anda perlukan dan klik untuk menyimpan nilai baharu.

### Pengesahan VAT {#vat-validation}

Apabila sokongan VAT diaktifkan, Ultimate Multisite akan menambah medan tambahan pada borang checkout, di bawah medan alamat bil. Medan ini hanya akan dipaparkan untuk pelanggan yang terletak di EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite kemudian akan mengesahkan Nombor VAT dan jika ia kembali sebagai sah, mekanisme reverse charge digunakan dan kadar cukai ditetapkan kepada 0% pada pesanan tersebut.
