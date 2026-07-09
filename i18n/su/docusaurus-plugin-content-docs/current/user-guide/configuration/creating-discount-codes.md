---
title: Ngadamel Kode Diskon
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Ngadiran Kode Diskon (v2) {#creating-discount-codes-v2}

_**CATATAN PENTING: Artikel ieu merujuk kana Ultimate Multisite versi 2.x.**_

Naan Ultimate Multisite, anjeun bisa ngadiri kode diskon pikeun méré rabat ka pelangganna dina langgananna. Jeung ngadiri éta gampang pisan!

## Ngadiri jeung Ngédit Kode Diskon {#creating-and-editing-discount-codes}

Kanggo ngadiri atawa ngédit kode diskon, nyaéta indit ka **Ultimate Multisite > Discount Codes**.

![Daftar kode diskon — keadaan kosong samémé aya kode](/img/config/discount-codes-empty.png)

Di dinya anjeun bakal nempo daftar kode diskon anu geus dipikawanoh.

Anjeun bisa klik **Add Discount Code** pikeun ngadiri kupon anyar atawa anjeun bisa ngédit nu geus aya ku cara ngaruksak (hover) dina éta kode tuluy klik **Edit**.

![Daftar kode diskon kalayan aksi hover nunjukkeun tautan Edit jeung Delete](/img/config/discount-codes-list-hover.png)

![Tombol Add Discount Code dina header halaman](/img/config/discount-codes-add-button.png)

Anjeun bakal diarahkeun ka halaman di mana anjeun bisa ngadiri atawa ngédit kode kupon anjeun. Dina conto ieu, urang bakal ngadiri anu anyar.

![Halaman edit kode diskon kalayan sakabéh bagian katingali](/img/config/discount-code-edit.png)

Hayu urang tingali pengaturan anu aya di dieu:

**Enter Discount Code:** Ieu ngan ukur ngaran kode diskon anjeun. Ieu lain kode anu kedah dipaké ku pelanggan dina formulir checkout.

**Description:** Di dieu, anjeun bisa ngajelaskeun sacara singget naon éta kuponna keur.

![Bidang nama dan deskripsi kode diskon di luhur halaman edit](/img/config/discount-code-description.png)

Anjeun ogé bisa nempo kode diskon jadi aktif atawa tidak aktif:

![Status aktif kode diskon](/img/config/discount-code-active.png)

**Coupon code:** Di dieu anjeun ngadéfinisikeun kode anu kedah diidin ku pelanggan nalika checkout.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Diskon:** Di sini, anjeun bisa atur **persentase** atau **jumlah pasti** uang kanggo kode diskon anjeun.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Terapkan kanggo perpanjangan (renewals):** Lamun pilihan ieu dipindah jadi mati, kode diskon ieu ngan ukur bakal ditagih kanggo **pembayaran kahiji**. Pembayaran liyane mo teu bakal aya diskonna. Lamun pilihan ieu dipindah jadi on, kode diskon bakal sah pikeun sakabéh pembayaran di mangsa hareup.

**Diskon biaya pangwangunan (setup fee):** Lamun pilihan ieu dipindah jadi mati, kode kupon **teu bakal ngahargaan kanggo biaya pangwangunan** pesenan. Lamun pilihan ieu dipindah jadi on, anjeun bisa atur diskon (persentase atawa jumlah pasti) anu bakal ditagih ku kode kupon ieu pikeun biaya pangwangunan rencana anjeun.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Aktif:** Aktifkeun atawa matikeun kode kupon ieu sacara manual.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Di bawah **Advanced Options**, urang miboga pengaturan-pengaturan berikut:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Batasan panganggo (Limit uses):**

  * **Panganggo:** Di dieu, anjeun bisa ningali sabaraha kali kode diskon geus dipaké.

  * **Maksimum panganggo (Max uses):** Ieu bakal ngabatasna sabaraha kali pengguna bisa maké kode diskon ieu. Contona, lamun anjeun ngitung 10 di dieu, kupon éta ngan ukur bisa dipaké 10 kali. Sanggeus batasan ieu, kode kupon geus teu bisa dipaké deui.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Tanggal Mulai & Berakhir:** Di sini kamu bisa pilih untuk menambahkan tanggal mulai dan/atau tanggal berakhir untuk kuponmu.

![Bidang tanggal mulai dan berakhir untuk menjadwalkan kode diskon](/img/config/discount-code-dates.png)

**Batasi produk:** Kalau kamu nyalakan **Select products**, semua produk kamu akan ditampilkan. Kamu bisa pilih secara manual (dengan menyalakan atau mematikan) produk mana yang bisa menerima kode kupon ini. Produk yang dimatikan di sini tidak akan berubah jika pelanggan kamu mencoba menggunakan kode kupon ini untuk mereka.

![Bagian Batasi produk dengan saklar per-produk](/img/config/discount-code-limit-products.png)

Setelah mengatur semua pilihan ini, klik **Save Discount Code** untuk menyimpan kuponmu dan selesai!

![Tombol Simpan Kode Diskon di bagian bawah halaman edit](/img/config/discount-code-save.png)

Kuponnya sekarang ada di daftar kamu dan dari sana, kamu bisa klik untuk **edit atau hapus** kupon tersebut.

![Baris kode diskon di daftar dengan aksi hover Edit dan Hapus](/img/config/discount-codes-list-hover.png)

###

### Menggunakan URL Parameters: {#using-url-parameters}

Kalau kamu mau kustomisasi tabel harga atau membuat halaman kode kupon yang bagus untuk website kamu dan ingin menerapkan kode diskon ke formulir checkout secara otomatis, kamu bisa melakukannya lewat URL parameters.

Pertama, kamu perlu mendapatkan link yang bisa dibagikan (shareable link) untuk rencana kamu. Untuk melakukan ini, buka **Ultimate Multisite > Products** dan pilih sebuah rencana.

Klik tombol **Click to Copy Shareable Link**. Ini akan memberikanmu link yang bisa dibagikan untuk rencana spesifik ini. Dalam kasus kami, link yang diberikan adalah [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Halaman produk dengan tombol link yang bisa dibagikan](/img/config/products-list.png)

Kanggo ngagunake kode diskon anjeun ka paket anu spesifik ieu, cukup tambihan parameter **?discount_code=XXX** kana URL-na. Di mana **XXX** nyaéta kode kuponna.

Dina conto urang di dieu, urang bakal ngagunake kode kupon **50OFF** pikeun produk anu spesifik ieu.

URL kanggo paket anu spesifik ieu sareng kalayan kode diskon 50OFF ditambihan bakal siga kieu: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
