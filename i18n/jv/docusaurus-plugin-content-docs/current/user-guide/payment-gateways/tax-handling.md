---
title: Pangurusan Pajeg
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Pangurusan Pajeg

Ultimate Multisite nduwèni modul panglumpukan pajeg sing wis dibangun ing plugin inti kita, dadi yen panjenengan perlu nglumpukaké pajeg dodolan kanggo rencana, paket, lan layanan panjenengan, panjenengan bisa nindakake kanthi gampang tanpa kudu masang add-ons apa wae.

Kanggo perusahaan sing mapan ing Éropah, kita nyedhiyakake **add-on** sing nambah piranti lan fitur kanggo luwih apik **nyengkuyung VAT** compliance.

Ultimate Multisite ora ngajukaké utawa nyetor pajeg kanggo panjenengan marang pamaréntah; kita mung mbantu panjenengan nglumpukaké pajeg sing cocog nalika transaksi. **Panjenengan isih kudu nyetor pajeg dhéwé.**

## Ngaktifaké Panglumpukan Pajeg {#enabling-tax-collection}

Panglumpukan pajeg ora aktif kanthi gawan. Kanggo ngaktifaké, panjenengan kudu menyang **Ultimate Multisite > Settings > Taxes** banjur nguripaké setelan Enable Taxes.

![Tombol Enable Taxes ing sisih ndhuwur kaca setelan Pajeg](/img/config/settings-taxes-enable.png)

Iki tampilan lengkap kaca setelan pajeg:

![Kaca lengkap setelan pajeg](/img/config/settings-taxes-full.png)

Panjenengan uga bisa ndeleng setelan pajeg kanggo produk individu:

![Setelan pajeg kanggo produk](/img/config/settings-taxes.png)

### Pajeg ora kalebu vs. pajeg kalebu {#tax-excluded-vs-tax-included}

Kanthi gawan, kabèh rega produk panjenengan ora kalebu pajeg, tegese pajeg **ora kalebu** ing rega produk. Yen kita nemtokaké manawa pelanggan kudu mbayar pajeg kanggo tuku tartamtu, kita bakal nambahaké pajeg **ing ndhuwur** subtotal.

Yen panjenengan luwih seneng pajeg kalebu ing rega produk, panjenengan bisa nindakake kanthi ngaktifaké setelan **Inclusive Tax**.

![Larikan tombol Inclusive Tax ing sangisoré setelan Enable Taxes](/img/config/settings-taxes-inclusive.png)

Aja lali **nyimpen** owah-owahan sing wis panjenengan gawé.

###

## Nggawe Tarif Pajeg {#creating-tax-rates}

Sawisé panjenengan ngaktifaké Panglumpukan Pajeg, panjenengan kudu nggawe tarif pajeg kanggo lokasi tartamtu nganggo editor tarif pajeg kita.

Panjenengan bisa ngakses editor kanthi ngeklik tombol **Manage Tax Rates** ing sidebar kaca setelan Pajeg.

![Pranala Manage Tax Rates ing panel Tax Rates ing kaca setelan](/img/config/settings-taxes-manage-rates.png)

Ing kaca editor tarif pajeg, panjenengan bisa nambah Tax Rates anyar kanthi ngeklik tombol **Add new Row**.

![Tabel editor tarif pajeg kanthi tombol Add new Row ing sisih ndhuwur](/img/config/tax-rates-editor.png)

Panjenengan kudu menehi saben tarif pajeg **irah-irahan** (digunakake ing faktur). Banjur panjenengan bisa milih **negara** (wajib), **negara bagéan,** lan **kutha** (kalorone opsional) panggonan pajeg iki bakal ditagih. Pungkasan, tambahaké **tarif pajeg ing persen**.

### Kategori Pajeg {#tax-categories}

Panjenengan uga bisa nggawe sawetara Kategori Pajeg, kanggo nambah tarif pajeg sing béda kanggo macem-macem jinis produk.

Klik **Add new Tax Category** , banjur tulis jeneng kategori panjenengan lan pencet **Create**.

![Tombol Add new Tax Category ing sisih ndhuwur editor tarif pajeg](/img/config/tax-categories-add.png)

![Kolom input Tax Category Name ing modal nggawe kategori](/img/config/tax-categories-create-modal.png)

Kanggo nelusuri kategori, klik **Switch** lan pilih kategori sing arep panjenengan tambahaké pajeg anyar.

![Tombol dropdown Switch kanggo ngganti antarane kategori pajeg](/img/config/tax-categories-switch.png)

![Dropdown pamilih kategori pajeg sing nuduhaké kategori sing kasedhiya](/img/config/tax-categories-select.png)

Panjenengan bisa nyetel kategori pajeg kanggo produk tartamtu kanthi menyang **kaca sunting produk** banjur menyang tab Taxes.

![Tab pajeg produk kanthi kategori pajeg lan tombol taxable](/img/config/product-taxes.png)

Ing layar sing padha, panjenengan bisa matèni tombol **Is Taxable?** kanggo ngandhani Ultimate Multisite manawa sistem ora kudu nglumpukaké pajeg kanggo produk tartamtu kuwi.

## Dhukungan VAT Éropah {#european-vat-support}

Kaya sing wis disebutaké sadurungé, kita nduwèni add-on sing kasedhiya kanggo pelanggan ing EU sing nduwèni syarat tambahan amarga aturan VAT Éropah.

Piranti VAT kita mbantu sawetara perkara penting:

  * Gampang ngemot tarif VAT EU;

  * Panglumpukan lan validasi Nomer VAT - lan reverse charging kanggo entitas sing dibebasaké saka VAT (kayata perusahaan kanthi nomer VAT sing sah);

Kanggo masang add-on kuwi, menyang **Ultimate Multisite > Settings** banjur klik pranala sidebar **Check our Add-ons**.

![Sidebar kaca setelan kanthi pranala Check our Add-ons](/img/config/settings-taxes-addons-link.png)

Panjenengan bakal dialihaké menyang kaca add-ons kita. Ing kana, panjenengan bisa nggoleki **Ultimate Multisite VAT add-on** lan masangé.

<!-- Gambar layar ora kasedhiya: kothak VAT add-on ing kaca Add-ons -->

<!-- Gambar layar ora kasedhiya: dialog Install Now kanggo VAT add-on -->

Banjur, menyang **Network Admin > Plugins** lan aktifaké add-on kuwi kanggo sak jaringan.

<!-- Gambar layar ora kasedhiya: tumindak Network Activate kanggo VAT add-on ing kaca Plugins -->

Yen panjenengan bali menyang **tab Tax Settings** , panjenengan bakal weruh opsi anyar sing kasedhiya. Uripaké opsi **Enable VAT Support** kanggo ngaktifaké piranti VAT anyar. Aja lali **nyimpen** setelan panjenengan!

<!-- Gambar layar ora kasedhiya: tombol Enable VAT Support ing setelan Pajeg sawisé add-on diaktifaké -->

### Ngimpor Tarif Pajeg VAT {#pulling-on-vat-tax-rates}

Salah siji piranti sing ditambahaké déning integrasi kita yaiku kemampuan kanggo ngemot tarif pajeg kanggo negara anggota EU. Iki bisa ditindakake kanthi ngunjungi kaca editor tarif pajeg sawisé ngaktifaké dhukungan EU VAT.

Ing sisih ngisor kaca, panjenengan bakal weruh opsi narik VAT. Milih jinis tarif lan ngeklik tombol **Update EU VAT Rates** bakal narik lan ngisi tabel kanthi otomatis nganggo tarif pajeg kanggo saben negara anggota EU. Banjur, panjenengan mung perlu nyimpen.

![Tombol Update EU VAT Rates ing sisih ngisor editor tarif pajeg](/img/config/tax-rates-vat-pull.png)

Panjenengan uga bisa nyunting nilai sawisé narik. Kanggo nindakake, cukup sunting larikan tabel sing dibutuhake lan klik kanggo nyimpen nilai anyar.

### Validasi VAT {#vat-validation}

Nalika dhukungan VAT diaktifaké, Ultimate Multisite bakal nambah kolom tambahan menyang formulir checkout, ing sangisoré kolom alamat tagihan. Kolom kasebut mung bakal katon kanggo pelanggan sing mapan ing EU.

<!-- Gambar layar ora kasedhiya: kolom VAT Number ing formulir checkout frontend ing sangisoré alamat tagihan -->

Ultimate Multisite banjur bakal ngesahake VAT Number lan yen bali minangka nomer sing sah, mekanisme reverse charge ditrapake lan tarif pajeg disetel dadi 0% ing pesenan kuwi.
