---
title: Pengendalian Cukai
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Pengendalian Cukai

Ultimate Multisite mempunyai modul kutipan cukai yang terbina dalam plugin teras kami, jadi jika anda perlu mengutip cukai jualan untuk pelan, pakej dan perkhidmatan anda, anda boleh melakukannya dengan mudah tanpa perlu memasang sebarang add-on.

Untuk syarikat yang terletak di Eropah, kami menawarkan **add-on** yang menambah alat dan ciri untuk **menyokong pematuhan VAT** dengan lebih baik.

Ultimate Multisite tidak memfailkan atau menghantar cukai bagi pihak anda kepada kerajaan; kami hanya membantu anda mengutip cukai yang sesuai semasa transaksi berlaku. **Anda masih perlu menghantar cukai sendiri.**

## Mengaktifkan Kutipan Cukai

Kutipan cukai tidak diaktifkan secara lalai. Untuk mengaktifkannya, anda perlu pergi ke **Ultimate Multisite > Settings > Taxes** dan togol untuk mengaktifkan tetapan Enable Taxes.

![Togol Enable Taxes dalam tetapan cukai](/img/config/settings-taxes.png)

### Cukai dikecualikan vs. Cukai termasuk

Secara lalai, semua harga produk anda adalah cukai dikecualikan, bermakna cukai **tidak termasuk** dalam harga produk. Jika kami menentukan bahawa pelanggan perlu membayar cukai untuk pembelian tertentu, kami akan menambah cukai **di atas** jumlah subtotal.

Jika anda lebih suka cukai termasuk dalam harga produk anda, anda boleh berbuat demikian dengan mengaktifkan tetapan **Inclusive Tax**.

![Togol tetapan Inclusive Tax](/img/config/settings-taxes.png)

Jangan lupa untuk **simpan** perubahan yang telah anda buat.

### 

## Mencipta Kadar Cukai

Selepas anda mengaktifkan Kutipan Cukai, anda perlu mencipta kadar cukai untuk lokasi tertentu menggunakan editor kadar cukai kami.

Anda boleh mengakses editor dengan mengklik butang **Manage Tax Rates** di bar sisi halaman tetapan Cukai.

![Butang Manage Tax Rates di bar sisi](/img/config/settings-taxes.png)

Di halaman editor kadar cukai, anda boleh menambah Kadar Cukai baharu dengan mengklik butang **Add new Row**.

![Editor kadar cukai dengan butang Add new Row](/img/config/settings-taxes.png)

Anda perlu memberikan setiap kadar cukai satu **tajuk** (digunakan pada invois). Kemudian anda boleh memilih **negara** (wajib), **negeri,** dan **bandar** (kedua-duanya pilihan) di mana cukai ini akan dikenakan. Akhir sekali, tambahkan **kadar cukai dalam peratus**.

### Kategori Cukai

Anda juga boleh mencipta pelbagai Kategori Cukai, untuk menambah kadar cukai yang berbeza bagi jenis produk yang berbeza.

Klik **Add new Tax Category**, kemudian tulis nama kategori anda dan tekan **Create**.

![Butang Add new Tax Category](/img/config/settings-taxes.png)

![Mencipta kategori cukai baharu](/img/config/settings-taxes.png)

Untuk melayari kategori, klik **Switch** dan pilih kategori yang anda mahu tambahkan cukai baharu.

![Bertukar antara kategori cukai](/img/config/settings-taxes.png)

![Memilih kategori cukai untuk dilihat](/img/config/settings-taxes.png)

Anda boleh menetapkan kategori cukai untuk produk tertentu dengan pergi ke **halaman edit Produk** dan kemudian ke tab Taxes.

![Tab cukai produk dengan kategori cukai dan togol boleh dicukai](/img/config/product-taxes.png)

Di skrin yang sama, anda boleh togol off **Is Taxable?** untuk memberitahu Ultimate Multisite bahawa ia tidak perlu mengutip cukai untuk produk tersebut.

## Sokongan VAT Eropah

Seperti yang disebutkan sebelum ini, kami mempunyai add-on yang tersedia untuk pelanggan di EU yang mempunyai keperluan tambahan disebabkan peraturan VAT Eropah.

Alat VAT kami membantu dengan beberapa perkara penting:

  * Memuatkan kadar VAT EU dengan mudah;

  * Pengumpulan dan pengesahan Nombor VAT - dan caj terbalik untuk entiti yang dikecualikan VAT (seperti syarikat dengan nombor VAT yang sah);

Untuk memasang add-on tersebut, pergi ke **Ultimate Multisite > Settings** dan kemudian klik pautan bar sisi **Check our Add-ons**.

![Halaman Settings dengan pautan bar sisi add-ons](/img/config/settings-taxes.png)

Anda akan dialihkan ke halaman add-ons kami. Di sana, anda boleh mencari **Ultimate Multisite VAT add-on** dan memasangnya.

![VAT add-on di halaman add-ons](/img/config/settings-taxes.png)

![Dialog pemasangan VAT add-on](/img/config/settings-taxes.png)

Kemudian, pergi ke **Network Admin > Plugins** dan aktifkan add-on tersebut untuk seluruh rangkaian.

![Aktifkan VAT add-on untuk seluruh rangkaian](/img/config/settings-taxes.png)

Jika anda kembali ke **tab Tax Settings**, anda akan melihat pilihan baharu yang tersedia. Togol pilihan **Enable VAT Support** untuk mengaktifkan alat VAT baharu. Jangan lupa untuk **simpan** tetapan anda!

![Togol Enable VAT Support dalam tetapan cukai](/img/config/settings-taxes.png)

### Menarik Kadar Cukai VAT

Salah satu alat yang ditambahkan oleh integrasi kami adalah keupayaan untuk memuatkan kadar cukai untuk negara anggota EU. Ini boleh dilakukan dengan melawat halaman editor kadar cukai selepas mengaktifkan sokongan EU VAT.

Di bahagian bawah halaman, anda akan melihat pilihan untuk menarik VAT. Pilih jenis kadar dan klik butang **Update EU VAT Rates** untuk menarik dan mengisi jadual secara automatik dengan kadar cukai untuk setiap negara anggota EU. Kemudian, anda hanya perlu menyimpannya.

### ![Pilihan menarik kadar VAT dengan butang Update EU VAT Rates](/img/config/settings-taxes.png)

Anda juga boleh mengedit nilai selepas menariknya. Untuk melakukannya, cuma edit baris jadual yang anda perlukan dan klik untuk menyimpan nilai baharu.

### Pengesahan VAT

Apabila sokongan VAT diaktifkan, Ultimate Multisite akan menambah medan tambahan pada borang checkout, di bawah medan alamat pengebilan. Medan ini hanya akan muncul untuk pelanggan yang terletak di EU.

![Medan nombor VAT pada borang checkout](/img/config/settings-taxes.png)

Ultimate Multisite kemudian akan mengesahkan Nombor VAT dan jika ia kembali sebagai sah, mekanisme caj terbalik akan digunakan dan kadar cukai ditetapkan kepada 0% untuk pesanan tersebut.
