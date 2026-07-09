---
title: Form Checkout
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formulir Checkout {#checkout-forms}

Formulir Checkout iku cara sing gampang lan fleksibel kanggo nyoba pendekatan beda nalika arep ngubah pelanggan anyar dadi pembeli.

Ultimate Multisite 2.0 nawakake editor Formulir Checkout sing bisa mbok gawe sak akeh formulir sing dikarepake, kanthi field sing beda, produk sing ditawari, lsp.

Kanggo nggunakake fitur iki, tindakna menu Checkout Forms, ing sidebar kiwa.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Ing halaman iki, sampeyan bisa ndelok kabeh formulir checkout sing wis ana.

Tabel daftar kuwi ngandhut kolom **Status** supaya sampeyan bisa mastiake apa saben formulir saiki wis gampang kanggo pelanggan utawa durung:

| Status | Arti |
|---|---|
| **Active** | Formulir iki bisa dienggo nang endi wae shortcode utawa registration page-ne dipublikasikake. |
| **Inactive** | Formulir iki wis disimpen nanging diblokir. Pelanggan ora bisa ngrampungake checkout nganggo formulir iki nganti sampeyan aktif maneh. |

Gunakan kolom status kasebut sadurunge ngedit alur registration sing umum, utamane nalika sampeyan tetepake formulir checkout draf utawa musiman bareng karo formulir live-mu.

Yen arep gawe sing anyar, cukup klik Add Checkout Form ing pucuk halaman.

Sampeyan bisa milih salah siji saka telung pilihan iki minangka titik awal: single step (satu langkah), multi-step (banyak langkah), utawa blank (kosong). Banjur, klik kanggo Go to the Editor.

Yen sampeyan milih **single step** utawa **multi-step** minangka titik awal, template formulir saiki wis ngandhut field **Template Selection** kanthi otomatis. Field iki ngidini pelanggan milih template situs nalika proses registration. Sampeyan bisa ninggalake nganggo kaya ngendi wae field liyane ing editor utawa ngilangi utawa ngganti panggonane kaya field liyane ing editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternatifé, sampeyan bisa ngedit utawa nggandheng form sing wis ana kanthi klik ing pilihan ing ngisor jenenge. Ing kono uga sampeyan bakal nemokake pilihan kanggo nyalin shortcode form utawa ngapus form kasebut.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Gambaran Umum Editor Form Checkout {#checkout-form-editor-overview}

Editor form checkout menehi antarmuka lengkap kanggo nggawe form registrasi sampeyan. Iki gambaran umum tata letak editor:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Ngedit Form Checkout {#editing-a-checkout-form}

Sampeyan bisa nggawe form checkout kanggo tujuan sing beda. Ing conto iki kita bakal nggarap form registrasi.

Sawise mlebu menyang editor form checkout, wenehi jeneng marang form sampeyan (sing bakal digunakake mung kanggo referensi internal) lan slug (digunakake kanggo nggawe shortcode, contone).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Form digawe saka langkah-langkah (steps) lan field. Sampeyan bisa nambah langkah anyar kanthi klik ing Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Ing tab kapisan jendela modal, isi konten kanggo langkah form sampeyan. Wenehi ID, jeneng, lan deskripsi marang iku. Item-item iki luwih akeh digunakake internal.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Selajengipun, atur visibilitas langkah kasebut. Sampeyan bisa milih antarane "Always show" (Selalu tampil), "Only show for logged in users" (Mung tampil kanggo pengguna sing wis login), utawa "Only show for guests" (Mung tampil kanggo tamu).

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Pungkasan, konfigurasik gaya langkah kasebut. Iki field opsional.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Saiki wektune nambah field ing langkah kapisan kita. Cukup klik kanggo Add New Field lan pilih jenis bagian (section) sing sampeyan karepake.

![Checkout form step with fields](/img/config/checkout-form-step-with-fields.png)

Sabdelan saben field iku duwe parameter sing beda kanggo diisi. Kanggo mlebu pisan iki, kita bakal milih field "Username".

![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

![Username field content settings](/img/config/checkout-form-username-content.png)

![Username field visibility settings](/img/config/checkout-form-username-visibility.png)

![Username field style settings](/img/config/checkout-form-username-style.png)

Sampeyan bisa nambah sak pirang langkah lan field sing dibutuhake. Kanggo nuduhake produkmu supaya pelanggan bisa milih salah siji, nganggo field Pricing Table. Yen sampeyan arep ngidini klien milih template, tamba field Template Selection. Lan lsp.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Cathetan:** username, email, password, site title, site URL, order summary, payment, lan tombol submit iku field wajib kanggo nggawe checkout form._

Nalika sampeyan lagi nggawe checkout form, sampeyan mesthi bisa nganggo tombol Preview kanggo ndelok kepiye pelanggan bakal weruh formmu. Sampeyan uga bisa ngowahi antarane tampilan minangka pengguna sing wis ana utawa pengunjung.

![Checkout Form preview button](/img/config/checkout-form-preview-button.png)

![Checkout Form preview modal](/img/config/checkout-form-preview-modal.png)

Pungkasan, ing Advanced Options sampeyan bisa ngatur pesan kanggo halaman "Thank You", nambah potongan kode (snippets) kanggo nglacak konversi, nambah CSS kustom kanggo checkout formmu utawa ngranggeke supaya mung ana ing negara tartamtu.

![Advanced Options](/img/config/checkout-form-advanced.png)

Sampeyan uga bisa ngaktifake utawa ngmatikan checkout formmu manual kanthi ngobrak-abrik opsi iki ing kolom tengen, utawa ngapus permanen form kasebut.

![Active toggle](/img/config/checkout-form-active.png)

Kanggo ngapus formulir, klik opsi hapus (delete) ing aksi formulir:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Ojo aja lali simpan formulir checkout sampeyan!

![Save button](/img/config/checkout-form-save.png)

Kanggo nggolek shortcode formulirmu, klik Generate Shortcode lan salin hasil sing katon ing modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Field Tabel Harga (Pricing Table Field) {#the-pricing-table-field}

Field **Pricing Table** nuduhake produkmu ing formulir checkout supaya pelanggan bisa milih paket. Nalika sampeyan ngedit field iki, sampeyan bisa ngatur sawetara pilihan:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Iki carane tabel harga katon ing formulir registrasi frontend:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products**: Pilih produk sing arep ditampilake lan urutan munculé.
  * **Force Different Durations**: Nalika aktif, kabeh produk bakal katon sanajan ora duwe variasi harga sing cocok kanggo periode penagihan sing lagi dipilih. Nalika ora aktif (default), produk tanpa variasi kanggo periode sing dipilih bakal disembunyikake.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected**: Nggolek tabel harga nalika paket wis dipilih liwat URL (contone `/register/premium`).
  * **Pricing Table Template**: Pilih template visual kanggo tabel harga (Simple List, Legacy, lsp.).

Yen sampeyan nambah produk menyang Pricing Table sadurunge formulir ngandhut field sing dibutuhake kanggo ngrampungake alur checkout produk kasebut, editor saiki bakal nuduhake peringatan. Gunakna peringatan kuwi kanggo nambah field wajib sing kurang sadurunge nge-publish utawa nyimpen perubahan kanggo formulir registrasi live.

### Nambah Tombol Pilih Periode {#adding-a-period-selection-toggle}

Yen sampeyan wis ngatur [Price Variations](creating-your-first-subscription-product#price-variations) ing produkmu (contone harga bulanan lan tahunan), sampeyan bisa nambah kolom **Period Selection** ing form checkout. Kolom iki nuduhake toggle sing ngidini pelanggan ganti antarane periode pembayaran, lan tabel harga bakal update dinamis sak wektu nyata.

#### Langkah 1: Atur Price Variations Ing Produkmu {#step-1-set-up-price-variations-on-your-products}

Sadurunge nambah kolom Period Selection, pasthekna produkmu wis diatur variasi rega. Tindakake **Ultimate Multisite > Products**, edit sawijining produk, lan tindakake tab **Price Variations** kanggo nambah periode pembayaran alternatif (contone Tahunan kan rega diskon).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Langkah 2: Tambah Kolom Period Selection Ing Form Checkout Sampeyan {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Tindakake **Ultimate Multisite > Checkout Forms** lan edit form checkout sampeyan.

2. Gulung ngisor menyang langkah sing isine kolom **Pricing Table** lan klik **Add new Field**.

3. Ing dialog pilihan tipe kolom, klik **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Atur opsi periode. Saben opsi butuh:
   * **Duration**: Angka (contone `1`)
   * **Duration unit**: Tipe periode (Days, Weeks, Months, utawa Years)
   * **Label**: Teks sing bakal diwenehake pelanggan (contone "Monthly", "Annual")

5. Klik **+ Add Option** kanggo nambah pilihan periode liyane. Opsi-opsi iki kudu cocog karo price variations sing wis sampeyan atur ing produkmu.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Pilih **Period Selector Template** (Clean iku default, sing bakal nggawe selector sederhana kanthi gaya sing siap kanggo CSS kustom).

7. Klik **Save Field**.

#### Langkah 3: Posisikan Bidang di Atas Tabel Harga {#step-3-position-the-field-above-the-pricing-table}

Supaya pengalaman pengguna paling enak, pastikan bidang Pemilihan Periode (Period Selection) muncul **sebelum** tabel Harga (Pricing Table) di langkah checkout kamu. Kamu bisa menyeret (drag) bidang-bidang itu untuk mengubah urutannya di editor formulir checkout. Dengan begitu, pelanggan akan memilih periode penagihan dulu, baru kemudian melihat harga untuk periode tersebut.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Cara Kerjanya di Frontend {#how-it-works-on-the-frontend}

Setelah dikonfigurasi, pelanggan yang mengunjungi halaman registrasi kamu akan melihat pemilih periode di atas tabel harga. Ketika mereka mengklik periode penagihan yang berbeda:

  * Tabel harga langsung diperbarui untuk menampilkan harga periode yang dipilih (tidak perlu memuat ulang halaman).
  * Jika **Force Different Durations** dinonaktifkan pada bidang Tabel Harga, produk tanpa variasi harga untuk periode yang dipilih akan disembunyikan.
  * Jika **Force Different Durations** diaktifkan, semua produk tetap terlihat meskipun tidak memiliki variasi untuk periode yang dipilih (mereka akan menampilkan harga defaultnya).

#### Memilih Periode Penagihan Melalui URL {#pre-selecting-a-billing-period-via-url}

Kamu juga bisa memilih produk dan periode penagihan sebelumnya melalui URL. Ultimate Multisite mendukung pola URL ini:

  * `/register/premium` — Hanya memilih produk "Premium"
  * `/register/premium/12` — Memilih produk dan durasi 12 bulan
  * `/register/premium/1/year` — Memilih produk dengan durasi 1 tahun

### Bidang Pemilihan Template (Template Selection Field) {#the-template-selection-field}

Bidang **Pemilihan Template** (Template Selection) memungkinkan pelanggan memilih template situs saat checkout. Sekarang, ini sudah termasuk secara otomatis di template formulir checkout **single step** dan **multi-step** yang ditambahkan di Ultimate Multisite v2.6.1.

#### Menambahkan bidang secara manual {#adding-the-field-manually}

Yen sampeyan lagi nggarap form sing wis digawe sadurunge v2.6.1, utawa wiwit saka template kosong:

1. Tindakake **Ultimate Multisite > Checkout Forms** lan edit checkout form-mu.
2. Ing langkah nalika detail situs dikumpulkake, klik **Add new Field**.
3. Pilih **Template Selection** saka dialog tipe field.
4. Konfigurasi field-e:
   - **Label** — Judul sing diwenehi pelanggan ing dhuwur grid template (contone "Pilih template situs").
   - **Required** — Apa pelanggan kudu milih template sadurunge lanjut?

#### Kepiye cara kerjane {#how-it-works}

Nalika pelanggan milih template nalika checkout, Ultimate Multisite bakal nggunakake template kuwi nalika ngasilake situs anyare. Template sing ditunjuka iku saka daftar **Site Templates**-mu (**Ultimate Multisite > Site Templates**). Aja mung template sing ditandai minangka tersedia kanggo pelanggan sing bakal muncul ing kene.

### base domain checkout-form {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 ngperlani domain sing dikonfigurasi ing field **Site URL** form checkout minangka network base domain. Gunakake pengaturan available-domain saka field kuwi nalika sampeyan arep pelanggan nggawe situs ing bawah satu utawa luwih base domain pendaftaran sing padha, contone `example.com` lan `sites.example.com`.

Base domain checkout-form sing padha iku ora diperlani minangka pemetaan domain kustom per-situs. Nalika pelanggan nggawe situs subdirectory ing salah siji base kuwi, Ultimate Multisite ora bakal nggawe record mapped-domain sing bakal nggawe host bareng mung kanggo situs kuwi wae. Host bareng tetep tersedia kanggo situs sedulur sing nggunakake base checkout form sing padha.

Jaga domain kustom kanggo host yang dipetakan per pelanggan, contone `customer-example.com`. Jaga base domain checkout form kanggo host pendaftaran bareng sing bisa digunakake akeh situs.

#### Ngilangake field {#removing-the-field}

Yen sampeyan ora nawakake template situs, hapus kolom Pemilihan Template saka formulirmu. Pelanggan bakal nampa template *default* sing wis dikonfigurasi ing **Ultimate Multisite > Settings > Site Templates**.
