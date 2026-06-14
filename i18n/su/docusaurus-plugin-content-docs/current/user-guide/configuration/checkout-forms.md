---
title: Form Checkout
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formulir Checkout

Formulir Checkout téh cara anu gampang je fleksibel pikeun nyoba sababaraha cara nalika rék ngajual ka pelanggan anyar.

Ultimate Multisite 2.0 nawiske editor Formulir Checkout anu ngidinake anjeun nyieun saperti nu dipikahoyong, kalayan input anu béda, produk anu ditawarke, jsb.

Kanggo ngagunake fitur ieu, mindah ka menu Checkout Forms, di sisi kiri-bar.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Di halaman ieu, anjeun bisa ningali sadaya formulir checkout anu anjeun geus asupkeun.

Tabel daftar ngandung kolom **Status** sangkan anjeun bisa ngabuktikeun naha saban formulir ayeuna masih bisa dipaké ku pelanggan atawa henteu:

| Status | Hartina |
|---|---|
| **Active** | Formulir éta bisa dipaké di mana waé shortcode atawa halaman registrasina dipublikasikeun. |
| **Inactive** | Formulir éta geus disimpen tapi dibatalkan. Pelanggan teu bisa ngajual (checkout) ku éta saméméh anjeun ngaktifkeun deui. |

Gunakan kolom status saméméh ngedit alur registrasi publik, utamina lamun anjeun masih nyimpen formulir checkout draf atawa musiman di samping formulir anu geus aktif.

Lamun anjeun hayang nyieun anu anyar, cukup klik Add Checkout Form di luhur halaman.

Anjeun bisa milih salah sahiji tina tilu pilihan ieu salaku titik awal: single step (satu langkah), multi-step (banyak langkah), atawa blank (kosong). Terus, klik pikeun Go to the Editor.

Lamun anjeun milih **single step** atawa **multi-step** salaku titik awal, template formulir ayeuna geus ngandung kolom **Template Selection** sacara default. Kolom ieu ngidinake pelanggan anjeun milih template situs nalika proses registrasi. Anjeun bisa ninggalke éta di tempatna, ngahapna, atawa ngarobah patempatanana saperti input séjén dina editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Atau, anjeun bisa ngedit atawa nyalin form anu geus aya ku klik pilihan di handap ngaran form éta. Di dinya ogé anjeun bakal manggihan pilihan pikeun nyalin shortcode form atawa ngapus form.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Gambaran Umum Editor Form Checkout

Editor form checkout miboga tampilan anu komprehensif pikeun ngawangun form registrasi anjeun. Ieu gambaran umum tata letak editorna:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Ngedit Form Checkout

Anjeun bisa nyieun form checkout pikeun tujuan anu béda. Dina conto ieu urang bakal ngagolah form registrasi.

Sanggeus mindeng ka editor form checkout, geupkeun ngaran (anu ngan ukur dipaké kanggo referén internal) jeung slug (dipaké pikeun nyieun shortcode, contona).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Form téh dibentuk tina langkah (step) jeung kolom isian (field). Anjeun bisa nambahan langkah anyar ku klik Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Di tab kahiji jendela modal, diisi konten pikeun langkah form anjeun. Geupkeun ID, ngaran (name), jeung deskripsi. Ieu barang-barang téh biasana dipaké pikeun internal.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Salajengna, tetepkeun katinggalan (visibility) langkah éta. Anjeun bisa milih antara "Selalu tunjuk", "Hanya tunjuk kanggo pengguna anu udah login", atawa "Hanya tunjuk kanggo tamu".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Terakhir, atur gaya (style) langkah éta. Ieu téh kolom pilihan (optional).

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Ayeuna, waktuna nambahan kolom isian ka langkah kahiji urang. Cukup klik untuk Add New Field jeung pilih tipe bagian anu anjeun hoyong.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Unggalan (field) masing-masing miboga parameter anu béda pikeun diisi. Pikeun pagawitan ieu, urang bakal milih unggalanna "Username".

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Anjeun bisa nambahan sabaraha waé langkah jeung unggalanna anu anjeun butuh. Pikeun nunjukkeun produk anjeun pikeun pelanggan milih hiji, anggoan Pricing Table (Pricing Table field). Upami anjeun hayang ngajadikeun pelanggan milih template, tambihan unggalanna Template Selection (Template Selection field). Jeung kitu waé.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Catatan:** username, email, password, site title, site URL, order summary, payment, jeung tombol submit téh unggalanna wajib pikeun ngadamel form checkout._

Sambil anjeun ngerjakeun form checkout, anjeun salawasna bisa nganggo tombol Preview pikeun ningali kumaha pelanggan bakal nempo form éta. Anjeun ogé bisa ganti-ganti antara tampilan salaku pengguna anu geus aya atawa tamu (visitor).

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Terakhir, dina Advanced Options anjeun bisa ngatur pesan pikeun halaman "Thank You", nambahan snippet pikeun ngajak (track) konversi, nambahan CSS kustom ka form checkout anjeun atawa ngabatasna pikeun sababaraha nagara.

![Advanced Options](/img/config/checkout-form-advanced.png)

Anjeun ogé bisa ngaktifkeun atawa ngalungkeun form checkout anjeun sacara manual ku cara ngaluarkeun pilihan (toggle) éta dina kolom kiwaruh, atawa ngahapkeun permanen form éta.

![Active toggle](/img/config/checkout-form-active.png)

Kanggo ngapus formulir, klik opsi hapus (delete) dina aksi formulir:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Ulah lila pikeun nyimpen formulir checkout anjeun!

![Save button](/img/config/checkout-form-save.png)

Kanggo meunang shortcode formulir anjeun, klik Generate Shortcode sareng salin hasil anu aya dina modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Field Tabel Harga (Pricing Table Field)

Field **Tabel Harga** (Pricing Table) nunjukkeun produk anjeun dina formulir checkout sangkan pelanggan tiasa milih rencana (plan). Lamun anjeun ngedit field ieu, anjeun tiasa ngatur sababaraha pilihan:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Ieu cara tabel harga muncul dina formulir registrasi frontend:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Produk (Products)**: Pilih produk mana anu rék ditampilkeun sareng urutan naonna.
  * **Paksa Durasi Beda (Force Different Durations)**: Lamun diaktifkeun, sakabéh produk bakal ditampil sanajan teu aya variasi harga anu cocog jeung periode tagihan anu dipilih ayeuna. Lamun dinonaktifkeun (default), produk tanpa variasi pikeun periode anu dipilih bakal disumputkeun.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Sembunyi lamun Geus Dipilih (Hide when Pre-Selected)**: Ngahidinan tabel harga nalika rencana geus dipilih via URL (contona `/register/premium`).
  * **Template Tabel Harga (Pricing Table Template)**: Pilih template visual pikeun tabel harga anjeun (Simple List, Legacy, jsb, jsb, jsb, jsb).

Lamun anjeun nambahan produk ka Tabel Harga samémé formulir ngandung field anu dipiharepkeun pikeun ngajelaskeun alur checkout produk éta, editor ayeuna bakal nunjukkeun peringatan. Gunakeun peringatan éta pikeun nambahan field wajib anu kurang samémé ngajual atawa nyimpen perubahan kanggo formulir registrasi live.

### Nambah Tombol Pemilihan Periode

Upami anjeun geus ngatur [Price Variations](creating-your-first-subscription-product#price-variations) dina produk anjeun (misal harga bulanan jeung tahunan), anjeun bisa nambahan kolom **Period Selection** dina form checkout. Kolom ieu nunjukkeun toggle anu ngajadikeun pelanggan bisa ganti antara periode tagihan, sarta tabel harga bakal diupdate sacara dinamis waktu nyata.

#### Langkah 1: Atur Price Variations Dina Produk Anjeun

Samémang nambahan kolom Period Selection, pastikeun produk anjeun geus diatur Price Variationsna. Pindah ka **Ultimate Multisite > Products**, edit hiji produk, sarta pindah ka tab **Price Variations** pikeun nambahan periode tagihan alternatif (misal: Tahunan kalayan harga leuwih murah).

![Tab Price Variations dina hiji produk](/img/config/product-price-variations-tab.png)

#### Langkah 2: Tambah Kolom Period Selection Dina Form Checkout Anjeun

1. Pindah ka **Ultimate Multisite > Checkout Forms** sarta edit form checkout anjeun.

2. Scrollkeun tulisan nepi ka langkah anu ngandung kolom **Pricing Table** anjeun teras klik **Add new Field**.

3. Dina dialog pilihan tipe kolom, klik **Period Select**.

![Dialog Add New Field nunjukkeun Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Atur pilihan periodena. Saban pilihan butuh:
   * **Duration**: Jumlahna (misal `1`)
   * **Duration unit**: Jenis period (Days, Weeks, Months, atawa Years)
   * **Label**: Teks anu bakal dipelakukeun ku pelanggan (misal "Monthly", "Annual")

5. Klik **+ Add Option** pikeun nambahan pilihan periode deui. Pilihan-pilihan ieu kudu cocong jeung Price Variations anu anjeun atur dina produk anjeun.

![Pengaturan kolom Period Selection](/img/config/period-selection-field-settings.png)

6. Pilih **Period Selector Template** (Clean nya default, eta bakal ngahasilkeun selector sederhana anu geus siap keur CSS kustom).

7. Klik **Save Field**.

#### Langkah 3: Posisikan Bidang di Atas Tabel Harga

Supaya pengalaman pengguna paling enak, pastikan bidang Pemilihan Periode (Period Selection) muncul **sebelum** tabel Harga (Pricing Table) di langkah checkout kamu. Kamu bisa menyeret (drag) bidang-bidang itu untuk mengubah urutannya di editor formulir checkout. Dengan begitu, pelanggan akan memilih periode penagihan dulu, baru kemudian melihat harga untuk periode tersebut.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Cara Kerjanya di Frontend

Setelah diatur, pelanggan yang mengunjungi halaman registrasi kamu akan melihat pemilih periode di atas tabel harga. Ketika mereka mengklik periode penagihan yang berbeda:

  * Tabel harga langsung diperbarui untuk menampilkan harga periode yang dipilih (tidak perlu me-reload halaman).
  * Jika **Force Different Durations** dinonaktifkan pada bidang Tabel Harga, produk tanpa variasi harga untuk periode yang dipilih akan disembunyikan.
  * Jika **Force Different Durations** diaktifkan, semua produk tetap terlihat meskipun tidak memiliki variasi untuk periode yang dipilih (mereka akan menampilkan harga defaultnya).

#### Memilih Periode Penagihan Melalui URL

Kamu juga bisa memilih produk dan periode penagihan sebelumnya melalui URL. Ultimate Multisite mendukung pola URL ini:

  * `/register/premium` — Hanya memilih produk "Premium"
  * `/register/premium/12` — Memilih produk dan durasi 12 bulan
  * `/register/premium/1/year` — Memilih produk dengan durasi 1 tahun

### Bidang Pemilihan Template (Template Selection Field)

Bidang **Pemilihan Template** (Template Selection) memungkinkan pelanggan memilih template situs saat checkout. Sekarang, bidang ini sudah termasuk secara otomatis di template formulir checkout **single step** dan **multi-step** yang ditambahkan di Ultimate Multisite v2.6.1.

#### Menambahkan bidang secara manual

Upami anjeun keur gawé sareng form anu dibentuk saméméh v2.6.1, atanapi dimimitian tina template kosong:

1. Ka **Ultimate Multisite > Checkout Forms** teras émut form checkout anjeun.
2. Dina langkah di mana detail situs dikumpulkake, klik **Add new Field**.
3. Pilih **Template Selection** tina dialog tipe field.
4. Konfigurasi fieldna:
   - **Label** — Judul anu dipikahoe ku pelanggan di luhur grid template (contona "Pilih template situs").
   - **Required** — Upami pelanggan kudu milih template saméméh neruskeun.

#### Kumaha cara kerjanya

Lamun hiji pelanggan milih template nalika checkout, Ultimate Multisite bakal ngagunakeun éta nalika nyiapkeun (provisioning) situs anyarna. Template anu dipikahoe téh datang tina daftar **Site Templates** anjeun (**Ultimate Multisite > Site Templates**). Sigana waé template anu ditandai salaku tersedia pikeun pelanggan anu muncul di dieu.

### base domain form checkout

Ultimate Multisite v2.13.0 nganggap domain anu dikonfigurasi dina field **Site URL** form checkout salaku base domain jaringan (network base domains). Gunakeun pengaturan `available-domain` tina field éta lamun anjeun hayang pelanggan nyiptake situs di bawah hiji atawa leuwih base domain registrasi babarengan, saperti `example.com` sareng `sites.example.com`.

Base domain form checkout anu dibagi téh teu dianggap salaku pemetaan domain kustom per-site (per-site custom domain mappings). Lamun hiji pelanggan nyiptake situs subdirectory dina salah sahiji base éta, Ultimate Multisite moal ngabentuk record mapped-domain anu bakal ngajadikeun host babagi tina base éta milik ngan saukur hiji situs. Host babagi tetep tersedia pikeun situs saudarana anu ngagunakeun base form checkout anu sarua.

Jaga domain kustom pikeun host map per-customer, saperti `customer-example.com`. Jaga base domain form checkout pikeun host registrasi babagi anu bisa dipaké ku loba situs.

#### Ngabéréskeun field

*(Catatan: Bagian ini tidak memiliki terjemahan spesifik karena hanya berupa judul/aksi)*

Upami anjeun teu nawarke template situs, sangkan hapus kolom Pemilihan Template tina formulir anjeun. Pelanggan bakal meunang template *default* anu aya diatur dina **Ultimate Multisite > Settings > Site Templates**.
