---
title: Penanganan Pajak
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Penanganan Pajak

Ultimate Multisite memiliki modul pemungutan pajak yang terpasang di plugin inti kami, jadi jika Anda perlu memungut pajak penjualan pada paket, paket layanan, dan layanan Anda, Anda dapat melakukannya dengan mudah tanpa perlu memasang add-on apa pun.

Untuk perusahaan yang berlokasi di Eropa, kami menawarkan **add-on** yang menambahkan alat dan fitur untuk lebih mendukung kepatuhan **VAT**.

Ultimate Multisite tidak melaporkan atau menyetorkan pajak atas nama Anda kepada pemerintah; kami hanya membantu Anda memungut pajak yang sesuai pada saat transaksi. **Anda tetap perlu menyetorkan pajak sendiri.**

## Mengaktifkan Pemungutan Pajak {#enabling-tax-collection}

Pemungutan pajak tidak diaktifkan secara default. Untuk mengaktifkannya, Anda perlu membuka **Ultimate Multisite > Pengaturan > Pajak** dan mengaktifkan pengaturan Aktifkan Pajak.

![Toggle Aktifkan Pajak di bagian atas halaman pengaturan Pajak](/img/config/settings-taxes-enable.png)

Berikut tampilan lengkap halaman pengaturan pajak:

![Halaman penuh pengaturan pajak](/img/config/settings-taxes-full.png)

Anda juga dapat melihat pengaturan pajak untuk masing-masing produk:

![Pengaturan pajak untuk produk](/img/config/settings-taxes.png)

### Pajak dikecualikan vs. Pajak termasuk {#tax-excluded-vs-tax-included}

Secara default, semua harga produk Anda belum termasuk pajak, yang berarti pajak **tidak disertakan** dalam harga produk. Jika kami menentukan bahwa pelanggan harus membayar pajak untuk pembelian tertentu, kami akan menambahkan pajak **di atas** subtotal.

Jika Anda lebih suka pajak disertakan dalam harga produk, Anda dapat melakukannya dengan mengaktifkan pengaturan **Pajak Inklusif**.

![Baris toggle Pajak Inklusif di bawah pengaturan Aktifkan Pajak](/img/config/settings-taxes-inclusive.png)

Jangan lupa untuk **menyimpan** perubahan yang telah Anda buat.

###

## Membuat Tarif Pajak {#creating-tax-rates}

Setelah Anda mengaktifkan Pemungutan Pajak, Anda perlu membuat tarif pajak untuk lokasi tertentu menggunakan editor tarif pajak kami.

Anda dapat mengakses editor dengan mengeklik tombol **Kelola Tarif Pajak** di sidebar halaman pengaturan Pajak.

![Tautan Kelola Tarif Pajak di panel Tarif Pajak pada halaman pengaturan](/img/config/settings-taxes-manage-rates.png)

Pada halaman editor tarif pajak, Anda dapat menambahkan Tarif Pajak baru dengan mengeklik tombol **Tambah Baris baru**.

![Tabel editor tarif pajak dengan tombol Tambah Baris baru di bagian atas](/img/config/tax-rates-editor.png)

Anda perlu memberi setiap tarif pajak sebuah **judul** (digunakan pada faktur). Kemudian Anda dapat memilih **negara** (wajib), **provinsi/negara bagian,** dan **kota** (keduanya opsional) tempat pajak ini akan dikenakan. Terakhir, tambahkan **tarif pajak dalam persen**.

### Kategori Pajak {#tax-categories}

Anda juga dapat membuat beberapa Kategori Pajak, untuk menambahkan tarif pajak yang berbeda bagi berbagai jenis produk.

Klik untuk **Tambah Kategori Pajak baru** , lalu tulis nama kategori Anda dan tekan **Buat**.

![Tombol Tambah Kategori Pajak baru di bagian atas editor tarif pajak](/img/config/tax-categories-add.png)

![Kolom input Nama Kategori Pajak dalam modal buat kategori](/img/config/tax-categories-create-modal.png)

Untuk menelusuri kategori, klik **Beralih** dan pilih kategori tempat Anda ingin menambahkan pajak baru.

![Tombol dropdown Beralih untuk mengganti antar kategori pajak](/img/config/tax-categories-switch.png)

![Dropdown pemilih kategori pajak yang menampilkan kategori yang tersedia](/img/config/tax-categories-select.png)

Anda dapat mengatur kategori pajak untuk produk tertentu dengan membuka **halaman edit Produk** lalu tab Pajak.

![Tab pajak produk dengan kategori pajak dan toggle kena pajak](/img/config/product-taxes.png)

Pada layar yang sama, Anda dapat menonaktifkan toggle **Kena Pajak?** untuk memberi tahu Ultimate Multisite bahwa pajak tidak boleh dipungut pada produk tersebut.

## Dukungan VAT Eropa {#european-vat-support}

Seperti disebutkan sebelumnya, kami memiliki add-on yang tersedia untuk pelanggan di EU yang memiliki persyaratan tambahan karena peraturan VAT Eropa.

Alat VAT kami membantu dengan beberapa hal penting:

  * Memuat tarif VAT EU dengan mudah;

  * Pengumpulan dan validasi Nomor VAT - serta reverse charging untuk entitas yang dibebaskan dari VAT (seperti perusahaan dengan nomor VAT yang valid);

Untuk memasang add-on tersebut, buka **Ultimate Multisite > Pengaturan** lalu klik tautan sidebar **Periksa Add-on kami**.

![Sidebar halaman pengaturan dengan tautan Periksa Add-on kami](/img/config/settings-taxes-addons-link.png)

Anda akan diarahkan ke halaman add-on kami. Di sana, Anda dapat mencari **add-on VAT Ultimate Multisite** dan memasangnya.

<!-- Tangkapan layar tidak tersedia: kartu add-on VAT di halaman Add-on -->

<!-- Tangkapan layar tidak tersedia: dialog Pasang Sekarang add-on VAT -->

Kemudian, buka **Admin Jaringan > Pengaya** dan aktifkan add-on tersebut di seluruh jaringan.

<!-- Tangkapan layar tidak tersedia: tindakan Aktifkan Jaringan untuk add-on VAT di halaman Pengaya -->

Jika Anda kembali ke **tab Pengaturan Pajak** , Anda akan melihat opsi baru yang tersedia. Aktifkan opsi **Aktifkan Dukungan VAT** untuk mengaktifkan alat VAT baru. Jangan lupa untuk **menyimpan** pengaturan Anda!

<!-- Tangkapan layar tidak tersedia: toggle Aktifkan Dukungan VAT di pengaturan Pajak setelah aktivasi add-on -->

### Mengambil Tarif Pajak VAT {#pulling-on-vat-tax-rates}

Salah satu alat yang ditambahkan oleh integrasi kami adalah kemampuan untuk memuat tarif pajak untuk negara anggota EU. Hal itu dapat dilakukan dengan mengunjungi halaman editor tarif pajak setelah mengaktifkan dukungan VAT EU.

Di bagian bawah halaman, Anda akan melihat opsi pengambilan VAT. Memilih jenis tarif dan mengeklik tombol **Perbarui Tarif VAT EU** akan mengambil dan mengisi otomatis tabel dengan tarif pajak untuk setiap negara anggota EU. Lalu, Anda hanya perlu menyimpannya.

![Tombol Perbarui Tarif VAT EU di bagian bawah editor tarif pajak](/img/config/tax-rates-vat-pull.png)

Anda juga dapat mengedit nilai setelah mengambilnya. Untuk melakukannya, cukup edit baris tabel yang Anda perlukan dan klik untuk menyimpan nilai baru.

### Validasi VAT {#vat-validation}

Saat dukungan VAT diaktifkan, Ultimate Multisite akan menambahkan kolom tambahan ke formulir checkout, di bawah kolom alamat penagihan. Kolom tersebut hanya akan muncul untuk pelanggan yang berlokasi di EU.

<!-- Tangkapan layar tidak tersedia: kolom Nomor VAT pada formulir checkout frontend di bawah alamat penagihan -->

Ultimate Multisite kemudian akan memvalidasi Nomor PPN dan jika hasilnya valid, mekanisme reverse charge diterapkan dan tarif pajak ditetapkan menjadi 0% pada pesanan tersebut.
