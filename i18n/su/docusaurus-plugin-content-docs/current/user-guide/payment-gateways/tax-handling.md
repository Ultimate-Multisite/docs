---
title: Pananganan Pajeg
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Ngatur Pajeg {#tax-handling}

Ultimate Multisite boga modul pangumpulan pajeg anu geus diwangun kana plugin inti kami, jadi lamun anjeun kudu ngumpulkeun pajeg penjualan dina rencana, pakét, jeung jasa anjeun, anjeun bisa gampang ngalakukeunana tanpa kudu masang tambahan naon waé.

Pikeun pausahaan anu ayana di Éropa, kami nyadiakeun **tambahan** anu nambihan pakakas jeung fitur pikeun leuwih hadé **ngadukung VAT** compliance.

Ultimate Multisite henteu ngalaporkeun atawa nyetorkeun pajeg atas nama anjeun ka pamaréntah; kami ngan saukur ngabantu anjeun ngumpulkeun pajeg anu luyu dina waktu transaksi. **Anjeun tetep kudu nyetorkeun pajeg sorangan.**

## Ngaktipkeun Pangumpulan Pajeg {#enabling-tax-collection}

Pangumpulan pajeg henteu diaktipkeun sacara bawaan. Pikeun ngaktipkeunana, anjeun kudu buka **Ultimate Multisite > Setélan > Pajeg** jeung ngaganti pikeun ngaktipkeun setélan Aktipkeun Pajeg.

![Toggle Aktipkeun Pajeg di luhur kaca setélan Pajeg](/img/config/settings-taxes-enable.png)

Ieu tampilan lengkep kaca setélan pajeg:

![Kaca lengkep setélan pajeg](/img/config/settings-taxes-full.png)

Anjeun ogé bisa ningali setélan pajeg pikeun produk individu:

![Setélan pajeg pikeun produk](/img/config/settings-taxes.png)

### Pajeg teu kaasup vs. Pajeg kaasup {#tax-excluded-vs-tax-included}

Sacara bawaan, sakabéh harga produk anjeun teu kaasup pajeg, hartina pajeg **henteu kaasup** dina harga produk. Lamun kami nangtukeun yén palanggan kudu mayar pajeg dina hiji pameseran, kami bakal nambihan pajeg **di luhureun** subtotal.

Lamun anjeun leuwih resep pajeg kaasup dina harga produk anjeun, anjeun bisa ngalakukeunana ku ngaktipkeun setélan **Pajeg Inklusif**.

![Baris toggle Pajeg Inklusif di handapeun setélan Aktipkeun Pajeg](/img/config/settings-taxes-inclusive.png)

Tong poho pikeun **nyimpen** parobahan anu geus anjeun jieun.

###

## Nyieun Tarif Pajeg {#creating-tax-rates}

Sanggeus anjeun ngaktipkeun Pangumpulan Pajeg, anjeun kudu nyieun tarif pajeg pikeun lokasi husus maké éditor tarif pajeg kami.

Anjeun bisa ngaksés éditor ku ngaklik tombol **Atur Tarif Pajeg** dina sidebar kaca setélan Pajeg.

![Tumbu Atur Tarif Pajeg dina panel Tarif Pajeg dina kaca setélan](/img/config/settings-taxes-manage-rates.png)

Dina kaca éditor tarif pajeg, anjeun bisa nambihan Tarif Pajeg anyar ku ngaklik tombol **Tambahkeun Baris anyar**.

![Tabel éditor tarif pajeg jeung tombol Tambahkeun Baris anyar di luhur](/img/config/tax-rates-editor.png)

Anjeun kudu méré unggal tarif pajeg hiji **judul** (dipaké dina invoice). Teras anjeun bisa milih **nagara** (wajib), **nagara bagian,** jeung **kota** (duanana opsional) tempat pajeg ieu bakal ditagihkeun. Pamungkas, tambahkeun **tarif pajeg dina persen**.

### Kategori Pajeg {#tax-categories}

Anjeun ogé bisa nyieun sababaraha Kategori Pajeg, pikeun nambihan tarif pajeg anu béda pikeun rupa-rupa produk.

Klik pikeun **Tambahkeun Kategori Pajeg anyar** , teras tulis ngaran kategori anjeun jeung pencét **Jieun**.

![Tombol Tambahkeun Kategori Pajeg anyar di luhur éditor tarif pajeg](/img/config/tax-categories-add.png)

![Widang input Ngaran Kategori Pajeg dina modal nyieun kategori](/img/config/tax-categories-create-modal.png)

Pikeun ngotéktak kategori, klik **Ganti** jeung pilih kategori anu rék anjeun tambahkeun pajeg anyar.

![Tombol dropdown Ganti pikeun ngarobah antara kategori pajeg](/img/config/tax-categories-switch.png)

![Dropdown pamilih kategori pajeg anu némbongkeun kategori anu aya](/img/config/tax-categories-select.png)

Anjeun bisa nyetél kategori pajeg pikeun hiji produk husus ku muka **Kaca édit produk** teras ka tab Pajeg.

![Tab pajeg produk jeung kategori pajeg sarta toggle kena pajeg](/img/config/product-taxes.png)

Dina layar anu sarua, anjeun bisa mareuman toggle **Kena Pajeg?** pikeun méré nyaho ka Ultimate Multisite yén éta henteu kudu ngumpulkeun pajeg dina produk éta.

## Pangrojong VAT Éropa {#european-vat-support}

Sakumaha geus disebutkeun saméméhna, kami boga tambahan anu sadia pikeun palanggan di EU anu boga sarat tambahan alatan aturan VAT Éropa.

Pakakas VAT kami ngabantu sababaraha hal penting:

  * Ngamuat tarif VAT EU kalayan gampang;

  * Ngumpulkeun jeung ngesahkeun Nomer VAT - sarta reverse charging pikeun éntitas anu dibébaskeun tina VAT (saperti pausahaan anu boga nomer VAT sah);

Pikeun masang tambahan éta, buka **Ultimate Multisite > Setélan** teras klik tumbu sidebar **Pariksa Tambahan Kami**.

![Sidebar kaca Setélan jeung tumbu Pariksa Tambahan Kami](/img/config/settings-taxes-addons-link.png)

Anjeun bakal dialihkeun ka kaca tambahan kami. Di dinya, anjeun bisa néangan **Ultimate Multisite VAT add-on** jeung masangna.

<!-- Screenshot teu sadia: kotak VAT add-on dina kaca Tambahan -->

<!-- Screenshot teu sadia: dialog Pasang Ayeuna VAT add-on -->

Teras, buka **Network Admin > Plugins** jeung aktipkeun tambahan éta sakuliah jaringan.

<!-- Screenshot teu sadia: aksi Aktipkeun Jaringan pikeun VAT add-on dina kaca Plugins -->

Lamun anjeun balik deui ka **tab Setélan Pajeg** , anjeun bakal ningali pilihan anyar anu sadia. Aktipkeun pilihan **Aktipkeun Pangrojong VAT** pikeun ngaktipkeun pakakas VAT anyar. Tong poho pikeun **nyimpen** setélan anjeun!

<!-- Screenshot teu sadia: toggle Aktipkeun Pangrojong VAT dina setélan Pajeg sanggeus aktivasina tambahan -->

### Narik Tarif Pajeg VAT {#pulling-on-vat-tax-rates}

Salah sahiji pakakas anu ditambihan ku integrasi kami nyaéta kamampuhan pikeun ngamuat tarif pajeg pikeun nagara anggota EU. Éta bisa dilakukeun ku nganjang ka kaca éditor tarif pajeg sanggeus ngaktipkeun pangrojong VAT EU.

Di handapeun kaca, anjeun bakal ningali pilihan narik VAT. Milih jinis tarif jeung ngaklik tombol **Apdet Tarif VAT EU** bakal narik jeung ngeusian otomatis tabel ku tarif pajeg pikeun unggal nagara anggota EU. Teras, anjeun ngan kudu nyimpen éta.

![Tombol Apdet Tarif VAT EU di handapeun éditor tarif pajeg](/img/config/tax-rates-vat-pull.png)

Anjeun ogé bisa ngédit nilai sanggeus narik éta. Pikeun ngalakukeunana, cukup édit baris tabel anu anjeun peryogikeun jeung klik pikeun nyimpen nilai anyar.

### Validasi VAT {#vat-validation}

Nalika pangrojong VAT diaktipkeun, Ultimate Multisite bakal nambihan widang tambahan kana formulir checkout, di handapeun widang alamat tagihan. Widang éta ngan bakal muncul pikeun palanggan anu aya di EU.

<!-- Screenshot teu sadia: widang Nomer VAT dina formulir checkout frontend di handapeun alamat tagihan -->

Ultimate Multisite tuluy bakal marios VAT Number sarta lamun balikna sah, mékanisme reverse charge diterapkeun jeung tingkat pajeg disetél jadi 0% dina pesenan éta.
