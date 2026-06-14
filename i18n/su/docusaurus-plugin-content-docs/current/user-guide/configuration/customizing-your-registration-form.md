---
title: Ngatur Formulir Registrasi Anjeun
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Ngatur Formulir Registrasi Anjeun

Supaya jaringan anjeun katinggalan ti nu séjén SaaS anu dibangun dina platform WordPress, Ultimate Multisite ngajak anjeun ngatur (customize) halaman registrasi je login ku fitur **Checkout Forms** urang.

Sanajan éta gampang je fleksibel pikeun nyobaan cara-cara béda nalika rék ngajual pelanggan anyar, fitur ieu utamana dipaké pikeun ngadamel formulir registrasi anu dipersonalisasi. Artikel ieu hoyong nunjukkeun kumaha anjeun bisa ngalakukeun éta.

## Halaman Login je Registrasi:

Lamun Ultimate Multisite diinstal, éta bakal otomatis nyiptake halaman login je registrasi khusus dina situs utama anjeun. Anjeun bisa ngarobah halaman default ieu kapan waé ku cara indit ka halaman **Ultimate Multisite > Settings > Login & Registration**.

![Halaman pengaturan Login dan Registrasi](/img/config/settings-general.png)

Ieu mangrupa pandangan lengkap tina halaman pengaturan login je registrasi:

![Halaman pengaturan Login dan Registrasi lengkap](/img/config/settings-login-registration-full.png)

Hayu urang tingali unggal pilihan anu bisa anjeun atur dina halaman **Login & Registration**:

  * **Enable registration (Aktifkeun registrasi):** Pilihan ieu bakal ngaktifkeun atawa ngaluarkeun registrasi di jaringan anjeun. Lamun dipatikan (toggled off), pelanggan anjeun moal bisa registrasi je langganan produk anjeun.

  * **Enable email verification (Aktifkeun verifikasi email):** Lamun pilihan ieu diaktifkeun, pelanggan anu langganan paket gratis atawa paket berbayar kalayan masa percobaan bakal meunang email verifikasi je kudu klik tautan verifikasi pikeun situs maranéhna bisa diciptakeun.

* **Halaman registrasi default:** Ieu téh halaman default kanggo registrasi. Halaman ieu kudu dipublikasike di situs web anjeun jeung kudu aya formulir registrasi (og disebut juga *checkout form*) - di mana pelanggan anjeun bakal langganan produk anjeun. Anjeun bisa nggawe sabaraha waé halaman registrasi jeung formulir *checkout* sakitu, ngan ingetkeun yen anjeun kudu taruh *shortcode checkout form* dina halaman registrasi, mun teu kitu mah éta moal muncul.

  * **Gunakan halaman login kustom:** Pilihan ieu ngidinan anjeun pikeun nganggo halaman login anu dikustomisasi, sanés ti halaman default `wp-login.php`. Lamun pilihan ieu diaktifkeun, anjeun bisa milih halaman mana anu bakal dipaké pikeun login dina pilihan **Halaman login default** (di handapna).

  * **Sembunyikan URL login asli (`wp-login.php`):** Mun anjeun hayang nyumput URL login aslina, anjeun bisa ngaktifkeun pilihan ieu. Ieu mantep pisan pikeun ngalangkeun serangan *brute-force*. Lamun pilihan ieu diaktifkeun, Ultimate Multisite bakal nampilkeun error 404 nalika hiji pengguna nyoba ngakses tautan `wp-login.php` asli.

  * **Paksa publikasi situs sinkron:** Sanggeus pelanggan langgan produk dina jaringan, situs anyar anu masih ditunggu kudu diubah jadi situs jaringan anu nyata. Proses publikasi téh lumangsung via *Job Queue*, secara asinkron. Aktifkeun pilihan ieu pikeun maksa publikasi kajadian dina permintaan anu sarua jeung pendaftaran.

Ayeuna, hayu urang tingali pilihan séjén anu masih relevan pikeun proses login jeung registrasi. Eureun ti **Pilihan séjén** dina halaman Login & registration anu sarua:

  * **Peran default (*Default role*):** Ieu téh peran anu bakal dipiboga ku pelanggan anjeun dina situs web maranéhna sanggeus proses pendaftaran.

* **Aktifkeun Jumper:** Ieu ngaktifkeun pintasan Jumper di area admin. Jumper ngajadikeun para administrator bisa langsung lompat ka layar Ultimate Multisite, objek jaringan, jeung tujuan séjén anu didukung tanpa kudu leumpang ngaliwatan unggal menu. Matikan lamun anjeun milih pikeun nyumput alat navigasi gancang éta tina tampilan admin.

* **Tambah pengguna kana situs utama og:** Ngaktifkeun pilihan ieu bakal nambahan pengguna ka situs utama jaringan anjeun sanggeus proses pendaftaran. Lamun anjeun ngaktifkeun pilihan ieu, aya pilihan pikeun ngatur **default role** (peran pamaréntahan) tina para pengguna éta di website anjeun og anu bakal muncul di handapna.

* **Aktifkeun sababaraha akun:** Ieu ngidinan pengguna bisa boga akun di situs-situs séjén dina jaringan anjeun kalayan alamat email anu sarua. Lamun pilihan ieu matikan, pelanggan anjeun moal bisa nyiptake akun di website séjén anu lila dina jaringan anjeun kalayan alamat email anu sarua.

Jeung éta sadayana mangrupikeun pilihan-pilihan anu patali jeung login jeung registrasi anu tiasa anjeun atur! Tong hilap pikeun nyimpen pengaturan anjeun sanggeus réngsé ngeditna.

## Ngagunake sababaraha formulir registrasi:

Ultimate Multisite 2.0 nawiskeun editor formulir checkout anu ngidinan anjeun nyiptake saemurit nu dipikahoyong, kalayan input (field) anu béda, produk anu ditawarkeun, jsb.

Sabungna halaman login jeung registrasi di-embed ku shortcode: **[wu_login_form]** dina halaman login jeung **[wu_checkout]** pikeun halaman registrasi. Anjeun tiasa ngatur leuwih jauh halaman registrasi ku ngawangun atawa nyiptake formulir checkout.

Kanggo ngakses fitur ieu, nyaéta ka menu **Checkout Forms**, di sisi kiri (left-side-bar).

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Dina halaman ieu, anjeun tiasa ningali sadaya formulir checkout anu anjeun boga.

Lamun anjeun hayang nyiptake anu anyar, cukup klik **Add Checkout Form** di luhur halaman.

Anjeun ti bisa milih salah satu tina tiga pilihan ieu salaku titik awal: single step (satu langkah), multi-step (banyak langkah), atawa blank (kosong). Terus, klik di situ pikeun **Go to the Editor** (Pindah ka Editor).

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Atanapi, anjeun ogé bisa ngedit atawa ngagandak form anu geus aya ku klik pilihan di handap ngaranana. Di dinya, anjeun ogé bakal manggihan pilihan pikeun nyalin shortcode form atawa ngapus formna.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Upami anjeun milih single step atawa multi-step, form checkout geus bakal aya langkah-langkah dasar anu disiapkeun sangkan bisa dipaké. Terus, upami anjeun hayang, anjeun bisa nambahan langkah tambahan dina éta form.

### Ngedit Checkout Form:

Saperti nu tos urang sebutkeun tadi, anjeun bisa nyieun checkout form pikeun tujuan anu béda-béda. Dina conto ieu, urang bakal ngagolah form registrasi.

Sanggeus pindah ka editor form checkout, geupkeun ngaran (nu bakal dipaké ngan ukur kanggo referén internal) jeung slug (dipaké pikeun nyieun shortcode, contona).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Form téh dibentuk tina langkah jeung field. Anjeun bisa nambahan langkah anyar ku klik **Add New Checkout Step** (Tambah Langkah Checkout Anyar).

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Dina tab kahiji dina jendela modal, diisi eusina langkah form anjeun. Geupkeun ID, ngaran, jeung deskripsi. Ieu barang-barang téh biasana dipaké ngan ukur pikeun referén internal.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Terus, tetepkeun katinggalan (visibility) langkahna. Anjeun bisa milih antara **Always show** (Selalu tunjuk), **Only show for logged in users** (Huksut pikeun nu geus login), atawa **Only show for guests** (Huksut pikeun tamu).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Terakhir, atur gaya langkahnya (step style). Ini adalah kolom yang opsional.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Sekarang, saatnya menambahkan kolom ke langkah pertama kita. Cukup klik **Add New Field** dan pilih jenis bagian (section) yang kamu mau.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Setiap kolom punya parameter berbeda yang harus diisi. Untuk masuk pertama ini, kita akan pilih kolom **Username**.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Kamu bisa menambah langkah dan kolom sebanyak yang kamu butuhkan. Untuk menampilkan produkmu agar pelanggan bisa memilih salah satu, gunakan kolom Pricing Table. Kalau kamu mau klien memilih template, tambahkan kolom Template Selection. Dan seterusnya.

_**Catatan:** Kalau kamu membuat produk setelah membuat formulir checkout, kamu perlu menambahkan produk itu di bagian Pricing table. Kalau tidak ditambahkan, produknya tidak akan muncul ke pelanggan di halaman registrasi._

_**Catatan 2:** username, email, password, site title, site URL, order summary, payment, dan submit button adalah kolom wajib untuk membuat formulir checkout._

Saat kamu sedang mengerjakan formulir checkout, kamu selalu bisa menggunakan tombol Preview untuk melihat bagaimana klien akan melihat formulirnya. Kamu juga bisa bergantian antara tampilan sebagai pengguna yang sudah ada (existing user) atau pengunjung (visitor).

![Tomél tombol pratinjau formulir checkout](/img/config/checkout-form-preview-button.png)![Pratinjau formulir checkout sebagai pengunjung atau pengguna yang sudah ada](/img/config/checkout-form-preview-modal.png)

Terakhir, di **Advanced Options** (Opsi Lanjutan), anjeun bisa atur pesan kanggo halaman **Thank You**, nambah potongan kode (snippets) pikeun ngitung konversi, nambah CSS kustom ka formulir checkout anjeun, atawa ngabatasna éta ka sababaraha nagara.

![Advanced Options dengan halaman Thank You, pelacakan konversi, dan CSS kustom](/img/config/checkout-form-advanced.png)

Anjeun ogé bisa nyalain atawa matikan formulir checkout anjeun secara manual ku ngalawan pilihan ieu di kolom kiwaruh (right column), atawa hapus permanen formulirnya.

![Tomél aktif dan opsi hapus untuk formulir checkout](/img/config/checkout-form-active.png)

Ulah poho pikeun nyimpen formulir checkout anjeun!

![Tomél Simpan Formulir Checkout](/img/config/checkout-form-save.png)

Supaya meunang shortcode (shortcode) formulir anjeun, klik **Generate Shortcode** (Buat Shortcode) teras salin hasil anu ditunjuke dina jendela modal.

![Modal Generate Shortcode dengan shortcode untuk disalin](/img/config/checkout-form-editor.png)

_**Catatan:** Anjeun kudu nambah shortcode ieu ka halaman registrasi anjeun sangkan formulir checkout ieu bisa ditambihan di situ._

## Ngabagékeun produk jeung template sacara otomatis ngaliwatan URL parameters:

Lamun anjeun hayang nyieun tabel harga anu disesuaikan pikeun produk anjeun sarta milih (pre-select) produk atawa template mana nu dipilih ku pelanggan tina tabel harga atawa halaman template di formulir checkout, anjeun bisa ngagunake URL parameters pikeun éta.

### **Kanggo rencana (plans):**

Pindah ka **Ultimate Multisite > Products > Select a plan**. Anjeun bakal nempo tombol **Click to copy Shareable Link** di luhur halaman. Ieu téh link anu bisa anjeun anggo pikeun milih rencana spesifik ieu dina formulir checkout anjeun.

![Halaman produk dengan tombol shareable link](/img/config/products-list.png)

Catetan yén link shareable ieu ngan valid pikeun **Plans** (Paket). Anjeun teu bisa ngagunake link shareable pikeun package atawa layanan.

### Pikeun template:

Lamun anjeun hayang milih template situs samémé di form checkout, anjeun bisa ngagunake parameter: **?template_id=X** dina URL halaman registrasi anjeun. "X" téh kudu diganti ku **nomor ID template situs**. Pikeun meunang nomer éta, mindah ka **Ultimate Multisite > Sites**.

Klik **Manage** di handap template situs anu hayang dipaké. Anjeun bakal nempo nomer SITE ID. Cukup anggo nomer ieu pikeun template situs spesifik éta supados jadi pilihan samémé dina form checkout anjeun. Dina kasus urang, parameter URL téh bakal jadi **?template_id=2**.

![Daftar Situs nunjukkeun ID template situs](/img/config/site-templates-list.png)

Misal website jaringan urang nyaéta [**www.mynetwork.com**](http://www.mynetwork.com) jeung halaman registrasi kalayan form checkout urang aya di halaman **/register**. URL sakabéan kalayan template situs samémé dipilih bakal siga [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Jeung lamun anjeun hayang milih sabaraha produk jeung template di form checkout anjeun. Sagala nu kudu dilakukeun nyaéta nyalin link shareable tina plan terus nyisip parameter template di ahirna. Bakal siga [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
