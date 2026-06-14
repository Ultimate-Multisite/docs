---
title: Nggawe Kode Diskon
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Membuat Kode Diskon (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Dengan Ultimate Multisite, sampeyan bisa bikin kode diskon kanggo menehi potongan harga marang klienmu kanggo langganan. Lan nggawe kuwi gampang banget!

## Membuat dan Mengedit Kode Diskon

Kanggo nggawe utawa ngedit kode diskon, tindakake **Ultimate Multisite > Discount Codes**.

![Daftar kode diskon — kondisi kosong sadurunge ana kode](/img/config/discount-codes-empty.png)

Ing kono sampeyan bakal nemokake daftar kode diskon sing wis sampeyan gawe.

Sampeyan bisa klik **Add Discount Code** kanggo nggawe kupon anyar utawa sampeyan bisa ngedit sing wis ana kanthi ngarici (hover) lan klik **Edit**.

![Daftar kode diskon karo aksi hover nuduh tautan Edit lan Delete](/img/config/discount-codes-list-hover.png)

![Tombol Tambah Kode Diskon ing header halaman](/img/config/discount-codes-add-button.png)

Sampeyan bakal diarahkan menyang halaman kanggo nggawe utawa ngedit kode kuponmu. Ing conto iki, kita bakal nggawe sing anyar.

![Halaman edit kode diskon karo kabeh bagian katon](/img/config/discount-code-edit.png)

Ayo deleng pengaturan sing ana ing kene:

**Enter Discount Code:** Iki mung jenenge kode diskonmu. Iki dudu kode sing bakal dibutuhake dening pelanggan kanggo digunakake ing formulir checkout.

**Description:** Ing kene, sampeyan bisa njlentrehake kanthi ringkes apa kupon iki kanggo.

![Bidul kode diskon lan deskripsi ing pucuk halaman edit](/img/config/discount-code-description.png)

Sampeyan uga bisa ndeleng kode diskon minangka aktif utawa tidak aktif:

![Status aktif kode diskon](/img/config/discount-code-active.png)

**Coupon code:** Iki papan kanggo sampeyan ngapusi kode sing dibutuhake dening pelanggan nalika checkout.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Diskon:** Ing kene, sampeyan bisa ngatur **persentase** utawa **jumlah pasti** dhuwit kanggo kode diskonmu.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Terapkan kanggo renewal (perpanjangan):** Yen opsi iki dimatiake, kode diskon iki mung bakal diterapkan kanggo **pembayaran kapisan**. Pembayaran liyane ora bakal entuk diskon. Yen opsi iki diaktifake, kode diskon kuwi bakal sah kanggo pembayaran-pembayaran ing ngarepe.

**Diskon biaya setup:** Yen opsi iki dimatiake, kode kupon iki **ora bakal menehi diskon kanggo biaya setup** pesenan. Yen opsi iki diaktifake, sampeyan bisa ngatur diskon (persentase utawa jumlah pasti) sing bakal diterapkan kode kupon iki kanggo biaya setup rencana sampeyan.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Aktif:** Aktifke utawa matikan kode kupon iki manual.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Ing **Advanced Options**, kita duwe pengaturan kaya ngene:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Batasi pemakaian:**

  * **Uses (Pemanfaatan):** Ing kene, sampeyan bisa ndelok piye akeh wae kode diskon kuwi wis dienggo.

  * **Max uses (Maksimal pemakaian):** Iki bakal ngatur pirang-pirang wektu pengguna bisa nggunakake kode diskon iki. Contone, yen sampeyan ngisi 10 ing kene, kupon kuwi mung bisa digunakake 10 wektu. Sawise batas iki, kode kupon ora bisa dienggo maneh.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Tanggal Mulai & Berakhir:** Di sini sampeyan bakal duwe pilihan kanggo nambah tanggal mulai lan/utawa tanggal akhir kanggo kuponmu.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Batasi produk:** Yen sampeyan ngaktifake **Select products**, kabeh produk sampeyan bakal ditunjuka. Sampeyan duwe pilihan kanggo milih manual (karo ngaktifake utawa ngalangi) produk endi sing bisa nampa kode kupon iki. Produk sing dilangi ing kene ora bakal katon owah yen pelanggan sampeyan nyoba nggunakake kode kupon iki kanggo produk kasebut.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Sawise ngatur kabeh pilihan iki, klik **Save Discount Code** kanggo nyimpen kuponmu lan wis rampung!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Kupon saiki ana ing daftar sampeyan lan saka kono, sampeyan bisa klik kanggo **edit utawa hapus** kupon kasebut.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Nggunakake URL Parameters:

Yen sampeyan arep ngowahi tabel rega utawa nggawe halaman kode kupon sing apik kanggo website sampeyan lan arep nerapake kode kupon ing formulir checkout otomatis, sampeyan bisa nindakake iki liwat parameter URL.

Dhisik, sampeyan perlu nggoleki link sing iso dibagikan (shareable link) kanggo rencana sampeyan. Kanggo nindakake iki, tindakna **Ultimate Multisite > Products** lan pilih rencana.

Klik tombol **Click to Copy Shareable Link**. Iki bakal menehi sampeyan link sing iso dibagikan kanggo rencana tartamtu iki. Ing kasus kita, link sing iso dibagikan iku yaiku [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Kanggo kode diskonmu kanggo rencana spesifik iki, cukup tambahi parameter **?discount_code=XXX** menyang URL-e. Ing ngendi **XXX** iku kode kuponé.

Ing conto kita kene, kita bakal nggunakake kode kupon **50OFF** kanggo produk spesifik iki.

URL kanggo rencana spesifik lan karo kode diskon 50OFF sing ditambahi bakal katon kaya ngene: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
