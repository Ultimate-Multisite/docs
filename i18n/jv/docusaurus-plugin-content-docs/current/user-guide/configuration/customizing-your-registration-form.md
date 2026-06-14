---
title: Nyesuaikan Formulir Registrasi Sampeyan
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Ngatur Formulir Registrasi Sampeyan

Supaya jaringan sampeyan kelihatan beda karo semua SaaS liyane sing digawe nang platform WordPress, Ultimate Multisite ngidini sampeyan ngatur halaman registrasi lan login kanthi fitur **Checkout Forms** kita.

Sanajan fitur iki gampang lan fleksibel kanggo nyoba cara-cara beda nalika arep nggolek pelanggan anyar, fitur iki luwih akeh digunakake kanggo nggawe formulir registrasi sing personal. Artikel iki tujuane kanggo nuduhake carane sampeyan bisa nggawe kuwi.

## Halaman Login lan Registrasi:

Sawise instalasi Ultimate Multisite, sistem bakal otomatis nggawe halaman login lan registrasi khusus nang situs utama sampeyan. Sampeyan bisa ngowahi halaman-halaman standar iki kapan wae kanthi mlebu ing halaman **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

Iki tampilan lengkap saka halaman pengaturan login lan registrasi:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Ayo kita deleng saben pilihan sing bisa sampeyan atur nang halaman **Login & Registration**:

  * **Enable registration:** Pilihan iki bakal ngaktifake utawa mateni registrasi nang jaringan sampeyan. Yen di-off, pelanggan sampeyan ora bakal bisa registrasi lan langganan produk sampeyan.

  * **Enable email verification:** Yen pilihan iki di-on, pelanggan sing langganan paket gratis utawa paket berbayar kanthi masa percobaan bakal nampa email verifikasi lan kudu klik link verifikasi kanggo nggawe situs web mereka.

* **Halaman registrasi default:** Iki iku halaman standar kanggo daftar (registration). Halaman iki kudu dipublikasake nang situsmu lan duwe formulir registrasi (sing uga diarani checkout form) - sing bakal diisi dening pelangganmu kanggo langganan produkmu. Sampeyan bisa nggawe sak pirang-pirang halaman registrasi lan formulir checkout kaya sing karep, mung elinga kanggo nempelake shortcode formulir checkout nang halaman registrasi, ora, mengko ora bakal muncul.

  * **Gunakan halaman login kustom:** Pilihan iki ngidini sampeyan nggunakake halaman login sing wis diowahi (custom), dudu halaman default `wp-login.php`. Yen pilihan iki diaktifake, sampeyan bisa milih halaman sing arep digunakake kanggo login nang opsi **Default login page** (sing ana ing ngisor).

  * **Sembunyikan URL login asli (`wp-login.php`):** Yen sampeyan pengin nyimpen URL login asline, sampeyan bisa ngaktifake pilihan iki. Iki migunake banget kanggo mencegah serangan brute-force. Yen opsi iki aktif, Ultimate Multisite bakal nampilake error 404 nalika pengguna nyoba mlebu link `wp-login.php` sing asli.

  * **Paksa publikasi situs sinkron:** Sawise pelanggan langganan produk nang jaringan, situs anyar sing lagi ditunggu kudu diubah dadi situs jaringan sing nyata. Proses publikasi iku lumaku liwat Job Queue, ora langsung (asynchronously). Aktifake opsi iki kanggo paksa publikasi kedadeyan ing permintaan sing padha karo pendaftaran.

Saiki, ayo deloken pilihan liyane sing isih relevan kanggo proses login lan registrasi. Iki ana nang ngisor **Other options** nang halaman Login & registration sing padha:

  * **Peran default:** Iki iku peran (role) sing bakal duwe pelangganmu nang situs dhewe sawise proses pendaftaran rampung.

* **Aktifke Jumper:** Iki ngaktifake pintasan (shortcut) Jumper ing area admin. Jumper bakal nggawe administrator bisa langsung loncat menyang layar Ultimate Multisite, objek jaringan, lan tujuan liyane sing didukung tanpa kudu liwat menu saben menu. Mateni yen sampeyan luwih seneng nyimpen alat navigasi cepet kuwi saka antarmuka admin.

* **Tambah pengguna ing situs utama uga:** Ngaktifake pilihan iki uga bakal nambah pengguna menyang situs utama jaringanmu sawise proses pendaftaran rampung. Yen sampeyan ngaktifake pilihan iki, opsi kanggo nentokake **default role** (peran utama) kanggo pengguna-pengguna kuwi ing website-mu uga bakal muncul langsung ing ngisor.

* **Aktifke akun akeh:** Iki ngidini pengguna duwe akun ing situs-situs liyane ing jaringanmu kanthi alamat email sing padha. Yen pilihan iki mati, pelanggan sampeyan ora bakal bisa nggawe akun ing website liyane sing mlaku ing jaringanmu kanthi alamat email sing padha.

Lan iku wae pilihan-pilihan sing ana gandheng karo login lan registrasi sing bisa sampeyan sesuaikan! Ojo lali simpen pengaturanmu sawise rampung ngedité.

## Nggunakake pirang formulir registrasi:

Ultimate Multisite 2.0 nawakake editor formulir checkout sing ngidini sampeyan nggawe pirang formulir kaya sing sampeyan karepake, kanthi field sing beda, produk sing ditawari, lsp.

Iki login lan halaman registrasi wis di-embed nganggo shortcode: **[wu_login_form]** ing halaman login lan **[wu_checkout]** kanggo halaman registrasi. Sampeyan bisa luwih ngowahi halaman registrasi kanthi nggawe utawa nggawe formulir checkout.

Kanggo ngakses fitur iki, tindakake menu **Checkout Forms**, ing sidebar kiwa.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Ing halaman iki, sampeyan bisa ndelok kabeh formulir checkout sing wis ana.

Yen sampeyan arep nggawe sing anyar, cukup klik **Add Checkout Form** ing pucuk halaman.

Sampe salah siji saka telung pilihan iki minangka wiwitanmu: single step (satu langkah), multi-step (banyak langkah), utawa blank (kosong). Banjur, klik kanggo **Go to the Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Utawa, sampeyan bisa ngedit utawa nggandheng (duplicate) form sing wis ana kanthi klik ing pilihan ing ngisor jenenge. Ing kono uga sampeyan bakal nemokake pilihan kanggo nyalin shortcode form utawa kanggo ngapus form kasebut.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Yen sampeyan milih single step utawa multi-step, form checkout wis diisi kanthi langkah-langkah dasar supaya bisa lumaku. Banjur, yen pengin, sampeyan bisa nambah langkah tambahan ing kono.

### Ngedit Checkout Form:

Kaya sing wis kita sebutake sadurunge, sampeyan bisa nggawe checkout form kanggo tujuan sing beda. Ing conto iki, kita bakal kerja nganggo form registrasi.

Sawise mlebu menyang editor form checkout, wenehi jeneng marang formmu (sing bakal digunakake mung kanggo referensi internal) lan slug (digunakake kanggo nggawe shortcode, contone).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Form kuwi digawe saka langkah-langkah (steps) lan field. Sampeyan bisa nambah langkah anyar kanthi klik ing **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Ing tab kapisan jendela modal, isi konten kanggo langkah formmu. Wenehi ID, jeneng, lan deskripsi marang kuwi. Item-item iki luwih akeh digunakake internal.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Selajengipun, atur visibilitas (keterlihatan) langkah kasebut. Sampeyan bisa milih antarane **Always show** (Selalu tampil), **Only show for logged in users** (Mung tampil kanggo pengguna sing wis login), utawa **Only show for guests** (Mung tampil kanggo tamu).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Terakhir, atur gaya langkahnya (step style). Ini kolom opsional lho.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Saiki waktune kanggo nambah field ing langkah pertama kita. Cukup klik **Add New Field** lan pilih jenis bagian (section) sing arep kok dipilih.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Sabowang field kuwi duwe parameter sing beda kanggo diisi. Kanggo mlebu dhisik iki, kita bakal pilih field **Username**.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Sampeyan bisa nambah langkah lan field sak akeh sing kok butuh. Kanggo nampilake produkmu supaya pelanggan bisa milih salah siji, gunakna field Pricing Table. Yen sampeyan arep ngidini klien milih template, tamba field Template Selection. Lan lsp.

_**Cathetan:** Yen sampeyan nggawe produk sawise nggawe form checkout, sampeyan kudu nambah produk kuwi ing bagian Pricing table. Yen ora ditambahi, produk kasebut ora bakal muncul kanggo pelanggan ing halaman registrasi._

_**Cathetan 2:** username, email, password, site title, site URL, order summary, payment, lan submit button iku field wajib (mandatory) kanggo nggawe form checkout._

Nalika sampeyan lagi nyiapake form checkout, sampeyan mesthi bisa nganggo tombol Preview kanggo ndelok kepiye pelanggan bakal weruh form kuwi. Sampeyan uga bisa ngowahi antarane tampilan minangka pengguna sing wis ana utawa pengunjung (visitor).

Akhirnya, di **Advanced Options**, sampeyan bisa ngatur pesan kanggo halaman **Thank You**, nambah potongan kode (snippets) kanggo nglacak konversi, nambah CSS kustom kanggo form checkout sampeyan utawa ngetokake yen form kuwi mung kanggo negara-negara tartamtu.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Sampeyan uga bisa ngaktifake utawa ngmatikan form checkout sampeyan manual kanthi ngeklik opsi iki ing kolom tengen, utawa ngapus form kuwi permanen.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Ojo lali kanggo nyimpen form checkout sampeyan!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Kanggo nggoleki shortcode form sampeyan, klik **Generate Shortcode** lan salin hasil sing katon ing jendela modal.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Cathetan:** Sampeyan bakal perlu nambah shortcode iki ing halaman registrasi sampeyan supaya form checkout iki bisa ditambahi ing kono._

## Pre-select produk lan template liwat URL parameters:

Yen sampeyan arep nggawe tabel harga sing disesuaikan kanggo produk sampeyan lan pre-select ing form checkout produk utawa template sing dipilih dening pelanggan saka tabel harga utawa halaman template sampeyan, sampeyan bisa nggunakake URL parameters kanggo iki.

### **Kanggo rencana (plans):**

Tuju menyang **Ultimate Multisite > Products > Select a plan**. Sampeyan bakal weruh tombol **Click to copy Shareable Link** ing pucuk halaman. Iki link sing bisa sampeyan gunakake kanggo pre-select rencana tartamtu ing form checkout sampeyan.

![Product page with shareable link button](/img/config/products-list.png)

Cathetan yen link shareable iki mung kanggo **Plans** wae. Link shareable ora bisa digunakake kanggo package utawa layanan.

### Kanggo template:

Yen sampeyan arep milih template situs sadurunge ing formulir checkout, sampeyan bisa nggunakake parameter: **?template_id=X** ing URL halaman registrasi sampeyan. "X" kuwi kudu diganti nganggo **nomor ID template situs**. Kanggo nggolek nomer iki, tindakna menyang **Ultimate Multisite > Sites**.

Klik **Manage** ing ngisor template situs sing arep sampeyan gunakake. Sampeyan bakal weruh nomor SITE ID. Cukup gunakake nomer iki kanggo template situs spesifik iki supaya wis dipilih sadurunge ing formulir checkout sampeyan. Ing kasus kita kene, parameter URL-e yaiku **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Contone, website jaringan kita yaiku [**www.mynetwork.com**](http://www.mynetwork.com) lan halaman registrasi karo formulir checkout kita ana ing halaman **/register**. Keseluruhan URL kanthi template situs sing wis dipilih sadurunge bakal katon kaya [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Lan yen sampeyan arep, sampeyan bisa milih produk lan template sadurunge ing formulir checkout sampeyan. Sing perlu sampeyan lakoni yaiku nyalin link shareable saka plan lan nempel parameter template ing akhir. Iki bakal katon kaya [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
