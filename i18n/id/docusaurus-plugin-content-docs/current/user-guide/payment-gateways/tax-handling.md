---
title: Penanganan Pajak
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Penanganan Pajak

Ultimate Multisite memiliki modul pemungutan pajak yang sudah terpasang di dalam plugin inti kami, jadi jika Anda perlu memungut pajak penjualan untuk paket langganan dan layanan Anda, Anda dapat melakukannya dengan mudah tanpa harus menginstal add-on tambahan.

Untuk perusahaan yang berlokasi di Eropa, kami menyediakan **add-on** yang menambahkan berbagai alat dan fitur untuk **mendukung kepatuhan PPN** dengan lebih baik.

Ultimate Multisite tidak melaporkan atau menyetorkan pajak atas nama Anda kepada pemerintah; kami hanya membantu Anda memungut pajak yang sesuai pada saat transaksi berlangsung. **Anda tetap perlu menyetorkan pajak secara mandiri.**

## Mengaktifkan Pemungutan Pajak

Pemungutan pajak tidak aktif secara default. Untuk mengaktifkannya, Anda perlu membuka **Ultimate Multisite > Settings > Taxes** dan mengaktifkan pengaturan Enable Taxes.

![Toggle Enable Taxes di pengaturan pajak](/img/config/settings-taxes.png)

### Pajak tidak termasuk vs. Pajak termasuk

Secara default, semua harga produk Anda belum termasuk pajak, artinya pajak **tidak termasuk** dalam harga produk. Jika kami menentukan bahwa pelanggan harus membayar pajak untuk pembelian tertentu, kami akan menambahkan pajak **di atas** subtotal.

Jika Anda lebih suka agar pajak sudah termasuk dalam harga produk, Anda dapat melakukannya dengan mengaktifkan pengaturan **Inclusive Tax**.

![Toggle pengaturan Inclusive Tax](/img/config/settings-taxes.png)

Jangan lupa untuk **menyimpan** perubahan yang telah Anda buat.

### 

## Membuat Tarif Pajak

Setelah Anda mengaktifkan Pemungutan Pajak, Anda perlu membuat tarif pajak untuk lokasi tertentu menggunakan editor tarif pajak kami.

Anda dapat mengakses editor dengan mengklik tombol **Manage Tax Rates** pada sidebar halaman pengaturan Pajak.

![Tombol Manage Tax Rates di sidebar](/img/config/settings-taxes.png)

Di halaman editor tarif pajak, Anda dapat menambahkan Tarif Pajak baru dengan mengklik tombol **Add new Row**.

![Editor tarif pajak dengan tombol Add new Row](/img/config/settings-taxes.png)

Anda perlu memberikan **judul** untuk setiap tarif pajak (digunakan pada faktur). Kemudian Anda dapat memilih **negara** (wajib), **provinsi,** dan **kota** (keduanya opsional) di mana pajak ini akan dikenakan. Terakhir, tambahkan **tarif pajak dalam persen**.

### Kategori Pajak

Anda juga dapat membuat beberapa Kategori Pajak, untuk menambahkan tarif pajak yang berbeda untuk jenis produk yang berbeda.

Klik **Add new Tax Category**, lalu tulis nama kategori Anda dan tekan **Create**.

![Tombol Add new Tax Category](/img/config/settings-taxes.png)

![Membuat kategori pajak baru](/img/config/settings-taxes.png)

Untuk menelusuri kategori, klik **Switch** dan pilih kategori yang ingin Anda tambahkan pajak baru.

![Beralih antar kategori pajak](/img/config/settings-taxes.png)

![Memilih kategori pajak untuk dilihat](/img/config/settings-taxes.png)

Anda dapat mengatur kategori pajak untuk produk tertentu dengan membuka **halaman edit Produk** lalu ke tab Taxes.

![Tab pajak produk dengan kategori pajak dan toggle taxable](/img/config/product-taxes.png)

Di layar yang sama, Anda dapat menonaktifkan toggle **Is Taxable?** untuk memberi tahu Ultimate Multisite bahwa pajak tidak perlu dipungut untuk produk tersebut.

## Dukungan PPN Eropa

Seperti yang disebutkan sebelumnya, kami memiliki add-on yang tersedia untuk pelanggan di Uni Eropa yang memiliki persyaratan tambahan karena regulasi PPN Eropa.

Alat PPN kami membantu beberapa hal penting:

  * Kemudahan memuat tarif PPN Uni Eropa;

  * Pengumpulan dan validasi Nomor PPN - serta reverse charging untuk entitas yang bebas PPN (seperti perusahaan dengan nomor PPN yang valid);

Untuk menginstal add-on tersebut, buka **Ultimate Multisite > Settings** lalu klik tautan sidebar **Check our Add-ons**.

![Halaman pengaturan dengan tautan sidebar add-ons](/img/config/settings-taxes.png)

Anda akan diarahkan ke halaman add-ons kami. Di sana, Anda dapat mencari **Ultimate Multisite VAT add-on** dan menginstalnya.

![VAT add-on di halaman add-ons](/img/config/settings-taxes.png)

![Dialog instalasi VAT add-on](/img/config/settings-taxes.png)

Kemudian, buka **Network Admin > Plugins** dan aktifkan add-on tersebut secara network-wide.

![Network Activate VAT add-on](/img/config/settings-taxes.png)

Jika Anda kembali ke **tab Tax Settings**, Anda akan melihat opsi baru yang tersedia. Aktifkan opsi **Enable VAT Support** untuk mengaktifkan alat PPN yang baru. Jangan lupa untuk **menyimpan** pengaturan Anda!

![Toggle Enable VAT Support di pengaturan pajak](/img/config/settings-taxes.png)

### Mengambil Tarif Pajak PPN

Salah satu alat yang ditambahkan oleh integrasi kami adalah kemampuan untuk memuat tarif pajak untuk negara-negara anggota Uni Eropa. Ini dapat dilakukan dengan mengunjungi halaman editor tarif pajak setelah mengaktifkan dukungan EU VAT.

Di bagian bawah halaman, Anda akan melihat opsi pengambilan PPN. Memilih jenis tarif dan mengklik tombol **Update EU VAT Rates** akan mengambil dan mengisi tabel secara otomatis dengan tarif pajak untuk setiap negara anggota Uni Eropa. Kemudian, Anda hanya perlu menyimpannya.

### ![Opsi pengambilan tarif PPN dengan tombol Update EU VAT Rates](/img/config/settings-taxes.png)

Anda juga dapat mengedit nilai setelah mengambilnya. Untuk melakukannya, cukup edit baris tabel yang Anda perlukan dan klik untuk menyimpan nilai baru.

### Validasi PPN

Ketika dukungan PPN diaktifkan, Ultimate Multisite akan menambahkan field tambahan ke formulir checkout, di bawah field alamat penagihan. Field ini hanya akan muncul untuk pelanggan yang berlokasi di Uni Eropa.

![Field nomor PPN pada formulir checkout](/img/config/settings-taxes.png)

Ultimate Multisite kemudian akan memvalidasi Nomor PPN dan jika hasilnya valid, mekanisme reverse charge akan diterapkan dan tarif pajak ditetapkan menjadi 0% untuk pesanan tersebut.
