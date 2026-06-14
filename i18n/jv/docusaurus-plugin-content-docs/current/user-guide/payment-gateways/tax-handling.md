---
title: Penanganan Pajak
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Penanganan Pajak

Ultimate Multisite wis duwe modul ngumpulake pajak sing wis digawe ing plugin inti kita, mula yen sampeyan perlu ngumpulake pajak penjualan kanggo rencana, paket, lan layananmu, sampeyan bisa nindakake kanthi gampang tanpa kudu instal add-on.

Kanggo perusahaan sing manggon ing Eropa, kita nawakake **add-on** sing nambah piranti lan fitur supaya luwih apik **ngdukung kepatuhan VAT**.

Ultimate Multisite ora ngisi utawa nyerahake pajak kanggo sampeyan marang pemerintah; kita mung mbantu sampeyan ngumpulake pajak sing trep nalika transaksi. **Sampeyan tetep kudu nyerahake pajaknya dhewe.**

## Ngaktifake Pengumpulan Pajak

Pengumpulan pajak ora aktif otomatis. Kanggo ngaktifake, sampeyan perlu menyang **Ultimate Multisite > Settings > Taxes** lan ganti pengaturan Enable Taxes dadi aktif.

![Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Iki tampilan lengkap saka halaman pengaturan pajak:

![Tax settings full page](/img/config/settings-taxes-full.png)

Sampeyan uga bisa ndeleng pengaturan pajak kanggo produk perorangan:

![Tax settings for products](/img/config/settings-taxes.png)

### Pajak dikecualikan vs. Pajak termasuk

Secara default, kabeh rega produkmu ora kalebu pajak (tax excluded), tegese yen pajak **ora ana** ing rega produk. Yen kita nemokake yen pelanggan kudu mbayar pajak kanggo pembelian tartamtu, kita bakal nambah pajaknya **ing dhuwur** subtotal.

Yen sampeyan luwih seneng pajak kalebu ing rega produkmu, sampeyan bisa nindakake kuwi kanthi ngaktifake pengaturan **Inclusive Tax**.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

Ojo lali kanggo **save** perubahan sing wis sampeyan tindakake.

###

## Nggawe Tarif Pajak

Sawise sampeyan ngaktifake Pengumpulan Pajak, sampeyan bakal perlu nggawe tarif pajak kanggo lokasi tartamtu nganggo editor tarif pajak kita.

Sampe editor bisa diakses kanthi klik tombol **Manage Tax Rates** ing sidebar halaman pengaturan Pajak (Tax settings).

![Manage Tax Rates link in the Tax Rates panel on the settings page](/img/config/settings-taxes-manage-rates.png)

Ing halaman editor pajak, sampeyan bisa nambah Tax Rate anyar kanthi klik tombol **Add new Row**.

![Tax rates editor table with Add new Row button at the top](/img/config/tax-rates-editor.png)

Sampeyan kudu menehi **title** (sing digunakake ing invoice) kanggo saben tax rate. Banjur sampeyan bisa milih **country** (wajib), **state**, lan **city** (keduanya opsional) sing bakal dadi lokasi pangena pajak iki. Terakhir, tambahi **tax rate ing persentase**.

### Tax Categories

Sampeyan uga bisa nggawe macem-macem Tax Category, kanggo nambah tax rate beda-beda kanggo produk sing beda jenisé.

Klik **Add new Tax Category**, banjur tulis jeneng category sampeyan lan pencet **Create**.

![Add new Tax Category button at the top of the tax rates editor](/img/config/tax-categories-add.png)

![Tax Category Name input field in the create category modal](/img/config/tax-categories-create-modal.png)

Kanggo nyedhaki kategori, klik **Switch** lan pilih kategori sing arep sampeyan tambahi pajak anyar.

![Switch dropdown button to change between tax categories](/img/config/tax-categories-switch.png)

![Tax category selector dropdown showing available categories](/img/config/tax-categories-select.png)

Sampeyan bisa ngatur tax category kanggo produk tartamtu kanthi menyang **Product edit page** lan banjur menyang tab Taxes.

![Product taxes tab with tax category and taxable toggle](/img/config/product-taxes.png)

Ing layar sing padha kuwi, sampeyan bisa mateni (toggle off) tombol **Is Taxable?** supaya Ultimate Multisite ngerti yen produk kasebut ora perlu nggoleki pajak.

## European VAT Support

Kaya wis tau, kita duwe add-on kanggo pelanggan ing EU sing duwe syarat tambahan amarga peraturan PPN Eropa.

Alat PPN (VAT tools) kita mbantu babagan sawetara perkara penting:

  * Muatake rate PPN EU kanthi gampang;

  * Ngumpulake lan nvalidasi Nomor PPN - uga *reverse charging* kanggo entitas sing bebas PPN (kaya perusahaan sing duwe nomor PPN sah);

Kanggo nginstall add-on kuwi, tindakna menyang **Ultimate Multisite > Settings** banjur klik link sidebar **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Sampeyan bakal diarahkan menyang halaman add-on kita. Ing kono, sampeyan bisa nyari **Ultimate Multisite VAT add-on** lan nginstallé.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Terus, tindakna menyang **Network Admin > Plugins** lan aktifake add-on kuwi kanggo kabeh jaringan.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Yen sampeyan bali menyang tab **Tax Settings**, sampeyan bakal weruh pilihan anyar sing wis ana. Onokake (toggle) opsi **Enable VAT Support** kanggo ngaktifake alat PPN anyar kuwi. Ojo lali kanggo **save** pengaturanmu!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Ngambil Rate Pajak PPN (Pulling on VAT Tax Rates)

Salah siji alat sing ditambahi dening integrasi kita yaiku kemampuan kanggo muatake rate pajak kanggo negara anggota EU. Iki bisa dilakoni kanthi menyang halaman editor rate pajak sawise ngaktifake dukungan PPN EU.

Ing pojok paling bawah halaman, sampeyan bakal nemokake pilihan penarikan (pull) PPN (VAT). Pilih jenis tarif dan klik tombol **Update EU VAT Rates** kanggo nggoleki lan ngisi otomatis tabel karo tarif pajak kanggo saben negara anggota EU. Sawise iku, cukup simpen wae.

![Tombol Update EU VAT Rates ing pojok paling bawah editor tarif pajak](/img/config/tax-rates-vat-pull.png)

Sampeyan uga bisa ngedit nilaine sawise ditarik. Kanggo nindakake kuwi, cukup edit baris tabel sing dibutuhake lan klik kanggo nyimpen nilai anyar.

### Validasi PPN (VAT Validation)

Nalika dukungan PPN diaktifake, Ultimate Multisite bakal nambah kolom tambahan ing formulir checkout, ing ngisor kolom alamat penagihan. Kolom iki mung bakal muncul kanggo pelanggan sing manggon ing EU.

<!-- Screenshot unavailable: Kolom Nomor PPN ing formulir checkout frontend ing ngisor alamat penagihan -->

Ultimate Multisite banjur bakal validasi Nomor PPN lan yen dadi sing bener, mekanisme *reverse charge* bakal diterapkan lan tarif pajak diatur dadi 0% kanggo pesanan kasebut.
