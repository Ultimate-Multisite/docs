---
title: Ngajawab Pajak
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Penanganan Pajak

Ultimate Multisite geus aya modul ngumpulkeun pajak di plugin inti urang, jadi lamun anjeun peryogi ngumpulkeun pajak penjualan dina rencana, paket, jeung layanan anjeun, anjeun bisa gampang ngalakukeun éta tanpa kudu nginstalle add-on.

Keur perusahaan anu aya di Éropa, urang nawiskeun **add-on** anu nambahan alat jeung fitur pikeun ngabantosan leuwih hadé dina kepatuhan VAT (Value Added Tax).

Ultimate Multisite teu ngajual atawa ngirim pajak ka pamaréntah pikeun anjeun; urang ngan ukur ngabantosan anjeun ngumpulkeun pajak anu merenah waktu transaksi. **Anjeun tetep kudu ngirim pajak sorangan.**

## Ngaktifkeun Pengumpulan Pajak

Pengumpulan pajak teu aktif sacara default. Pikeun ngaktifkeunana, anjeun kedah ka **Ultimate Multisite > Settings > Taxes** teras ganti (toggle) pikeun ngaktifkeun pengaturan Enable Taxes.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Ieu mangrupa tampilan lengkap halaman pengaturan pajak:

![Tax settings full page](/img/config/settings-taxes-full.png)

Anjeun ogé bisa ningali pengaturan pajak pikeun produk per individu:

![Tax settings for products](/img/config/settings-taxes.png)

### Pajak teu kaasup vs. Pajak kaasup

Sacara default, sakabéh harga produk anjeun téh pajaknya teu kaasup (tax excluded), hartina pajak **teu aya** dina harga produk éta. Lamun urang nempo yén pelanggan kudu bayar pajak tina hiji pembelian, urang bakal nambahan pajak **di luhur** subtotalna.

Lamun anjeun milih pajaknya kaasup dina harga produk anjeun, anjeun bisa ngalakukeun éta ku ngaktifkeun pengaturan Inclusive Tax.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ulah poho pikeun **save** (simpan) perubahan anu anjeun geus lakar dilakukeun.

###

## Ngadamel Tarif Pajak

Sanggeus anjeun ngaktifkeun Pengumpulan Pajak, anjeun kedah ngadamel tarif pajak pikeun lokasi-lokasi tartamtu ku editor tarif pajak urang.

Anjeun bisa buka editor ku klik tombol **Manage Tax Rates** di sidebar halaman pengaturan Pajak (Tax settings).

![Link Manage Tax Rates di panel Tax Rates pada halaman pengaturan](/img/config/settings-taxes-manage-rates.png)

Di halaman editor tarif pajak, anjeun bisa nambah Tarif Pajak anyar dengan klik tombol **Add new Row**.

![Tabel editor tarif pajak dengan tombol Add new Row di atas](/img/config/tax-rates-editor.png)

Anjeun kudu ngasih **title** (dipaké dina invoice) ka tiap tarif pajak. Terus anjeun bisa milih **country** (wajib), **state**, jeung **city** (keduanya pilihan) di mana pajak ieu bakal dipiake. Terakhir, tambihan **tax rate dalam persen**.

### Kategori Pajak (Tax Categories)

Anjeun ogé bisa nyieun sababaraha Kategori Pajak, pikeun nambah tarif pajak nu béda keur jenis produk nu béda.

Klik **Add new Tax Category**, terus tulis ngaran kategori anjeun jeung pencet **Create**.

![Tombol Add new Tax Category di atas editor tarif pajak](/img/config/tax-categories-add.png)

![Input field Nama Kategori Pajak di modal buat nyieun kategori](/img/config/tax-categories-create-modal.png)

Kanggo ngabahas kategori, klik **Switch** terus pilih kategori nu rék anjeun tina mana pajak anyar téh dipasihan.

![Tombol dropdown Switch pikeun ganti antar kategori pajak](/img/config/tax-categories-switch.png)

![Dropdown selector kategori pajak nunjukkeun kategori nu aya](/img/config/tax-categories-select.png)

Anjeun bisa ngatur kategori pajak keur hiji produk husus ku cara indit ka **Product edit page** terus ka tab Taxes.

![Tab pajak produk dengan toggle kategori pajak jeung taxable](/img/config/product-taxes.png)

Di layar nu sarua éta, anjeun bisa matikan (toggle off) tombol **Is Taxable?** sangkan Ultimate Multisite ngarti yén teu kudu ngumpulkeun pajak keur produk anu dituju éta.

## Dukungan VAT Éropah

Saperti tadi, urang kulawarga di Uni Eropa anu boga syarat tambahan lantaran peraturan PPN (VAT) Eropa.

Alat PPN kami ngabantosan dina sababaraha hal penting:

  * Ngawangun tarif PPN EU anu gampang;

  * Ngumpulkeun je validation Nomor PPN - sarta *reverse charging* pikeun entitas anu dibebaskeun PPN (saperti perusahaan anu boga nomer PPN valid);

Kanggo nginstal add-on éta, nyaéta ka **Ultimate Multisite > Settings** terus klik link sidebar **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Anjeun bakal diarahkeun ka halaman add-on kami. Di dinya, anjeun bisa nyari **Ultimate Multisite VAT add-on** jeung nginstale éta.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Terus, ka **Network Admin > Plugins** terus aktifkeun add-on éta di sakuliah jaringan.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Lamun anjeun balik deui ka **Tax Settings tab**, anjeun bakal nempo pilihan anyar anu aya. Ganti (toggle) opsi **Enable VAT Support** pikeun ngaktifkeun alat PPN anyar éta. Tong hilap pikeun **save** pengaturan anjeun!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Ngambil Tarif Pajak PPN (Pulling on VAT Tax Rates)

Salah sahiji alat anu ditambihan ku integrasi kami nyaéta kemampuan pikeun ngawangun tarif pajak pikeun negara anggota EU. Ieu bisa dilakukeun ku cara kedatangan di halaman editor tarif pajak sanggeus ngaktifkeun dukungan PPN EU.

Di bagian paling bawah halaman, Anda akan lihat pilihan untuk menarik (pull) tarif PPN (VAT). Pilih jenis tarif dan klik tombol **Update EU VAT Rates** untuk menampilkan tabel dengan otomatis mengisi tarif pajak untuk setiap negara anggota Uni Eropa. Setelah itu, Anda hanya perlu menyimpannya saja.

![Tombol Update EU VAT Rates di bagian bawah editor tarif pajak](/img/config/tax-rates-vat-pull.png)

Anda juga bisa mengedit nilainya setelah ditarik. Untuk melakukannya, cukup edit baris tabel yang Anda butuhkan dan klik untuk menyimpan nilai baru tersebut.

### Validasi PPN (VAT Validation)

Ketika dukungan PPN diaktifkan, Ultimate Multisite akan menambahkan kolom tambahan pada formulir checkout, di bawah kolom alamat penagihan (billing address). Kolom ini hanya akan muncul bagi pelanggan yang berlokasi di Uni Eropa.

<!-- Screenshot unavailable: Kolom Nomor PPN pada formulir checkout frontend di bawah alamat penagihan -->

Ultimate Multisite kemudian akan memvalidasi Nomor PPN dan jika hasilnya valid, mekanisme *reverse charge* (pembebanan balik) akan diterapkan dan tarif pajak diatur menjadi 0% untuk pesanan tersebut.
