---
title: Template Situs
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2) {#site-templates-v2}

_**CATATAN: Artikel ieu merujuk kana Ultimate Multisite versi 2.x. Upami anjeun masih nganggo versi 1.x,**_ **mangga tingali artikel ieu.**_

Tujuan urang nalika ngadamel jaringan premium kalawan Ultimate Multisite nyaéta pikeun ngotomatiskeun sapake proses anu bisa dipikawanoh, bari masih ngahargaan fleksibilitas je pilihan nu béda kanggo pelanggan urang nalika nyiptake situs maranéhna. Salah sahiji cara gampang pikeun ngahontal keseimbangan éta téh ku ngagunake fitur Site Templates Ultimate Multisite.

## Naon éta Site Template? {#what-is-a-site-template}

Saperti ngaranana, Site Template téh nyaéta situs dasar (boilerplate site) anu bisa dipaké salaku pondasi nalika nyiptake situs anyar di jaringan anjeun.

Ieu hartina, anjeun bisa nyiptake situs dasar, ngaktifkeun plugin nu béda, ngat정한 tema aktif, je ngaturana sacara bebas. Terus, mun pelanggan anjeun nyiptake akun anyar, alih-alih meunang situs WordPress default anu teu aya eusina nu bermakna di dalamnya, maranéhna bakal meunang salinan situs dasar anjeun kalawan sakabéh kustomisasi je eusina geus aya.

Éta kedah keren pisan, tapi kumaha carana ngadamel site template anyar? Éta gampang pisan.

## Ngadamel je Ngedit Site Template Anyar {#creating-and-editing-a-new-site-template}

Site Templates téh ngan ukur situs biasa dina jaringan anjeun. Pikeun ngadamel template anyar, anjeun cukup indit ka **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Tombol Tambah situs di halaman daftar Sites](/img/config/site-templates-list.png)**

Ieu bakal muka jendela modal anu bakal nanya yén **Site title, Site Domain/path,** je **Site type**. Di bagian *drop-down* **Site Type**, pastike anjeun milih **Site Template** *.

_![Modal tambah site template kalawan pilihan site type](/img/config/site-templates-list.png)_

Anjeun ogé bisa nambahan deskripsi pikeun pelanggan kanggo ngajelaskeun naon waé anu aya dina template éta:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Di bagian bawah form, kamu akan lihat saklar **Copy Site**. Ini memungkinkan kamu membuat template situs baru berdasarkan template situs yang sudah ada sebagai titik awal untuk membantu menghemat waktu daripada membuat template situs dari nol.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Mengubah Isi Template Situs {#customizing-the-contents-of-a-site-template}

Untuk mengubah template situsmu, cukup buka panel dashboardnya dan lakukan perubahan yang kamu butuhkan. Kamu bisa membuat postingan baru, halaman, mengaktifkan plugin, dan mengganti tema aktif. Kamu bahkan bisa masuk ke Customizer dan mengubah berbagai pilihan kustomisasi.

![Site template edit interface](/img/config/site-template-edit.png)

Semua data itu akan disalin ketika pelanggan membuat situs baru berdasarkan Template Situs tersebut.

### Opsi Lanjutan (Advanced Options) {#advanced-options}

Kalau kamu sudah lumayan jago ngoding sedikit, kamu bisa pakai Search and Replace API kami untuk mengganti informasi secara otomatis di situs baru setelah dibuat. Ini berguna untuk hal-hal seperti mengganti nama perusahaan di halaman Tentang Kami, mengganti email kontak di halaman Kontak, dan sebagainya.

### Menggunakan Template Situs {#using-site-templates}

Oke, jadi kamu sudah membuat banyak Template Situs yang berbeda dengan desain, tema, dan pengaturan yang beda-beda. Gimana caranya biar mereka berguna di jaringanmu sekarang?

Dasarnya, ada dua cara yang bisa kamu pakai (tidak bisa dipakai bersamaan):

  * Menempelkan satu Template Situs ke setiap Rencana (Plan) milikmu

**ATAU**

  * Membiarkan klien memilih template situs sendiri saat mendaftar.

#### Mode 1: Menetapkan Template Situs {#mode-1-assign-site-template}

Mode 1 dina mode ieu, pelanggan anjeun moal bisa milih template waktu ngadamel akun, tapi anjeun bakal nentueun template mana anu kudu dipaké di unggal Plan anjeun.

Kanggo ngalakukeun éta, anjeun kudu indit ka **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Ieu bakal mawa anjeun ka halaman **Edit Product**. Di handap bagian **Product Options**, mindengkeun tab **Site template** sareng pilih pilihan **Assign Site Template** tina *drop-down field*. Ieu bakal ngajak daftar site template anu aya jeung bakal ngidinan anjeun milih ngan hiji site template khusus pikeun produk éta.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: Pilih Site Template Anu Aya {#mode-2-choose-available-site-template}

Mode ieu, anjeun bakal nawarkeun pilihan ka pelanggan nalika proses *sign-up*. Maranéhna bisa milih tina sababaraha site template anu anjeun tentuke di bawah pengaturan produk. Anjeun boga pilihan pikeun ngabatas site template anu bisa dipilih ku maranéhna di handap produk anu dipilih. Ieu bakal ngidinan anjeun boga sababaraha susunan site template di bawah unggal produk, nu ideal pikeun nunjukkeun fungsi je fitur anu béda pikeun produk anu hargana leuwih luhur.

Di halaman **Edit Product**. Di bawah bagian **Product Options**, cari tab **Site template** terus pilih opsi **Choose Available Site Template** dari kolom *drop-down*. Ini bakal nunjukkeun daftar *site template* anu aya jeung ngidinan pilihan *site template* nu rék dipaké. Anjeun bisa ngalakukeun éta ku milih perilakunya: **Available** lamun anjeun hayang *site template* éta aya dina daftar. _**Not Available**_ lamun anjeun teu hayang *site template* éta muncul jadi pilihan. Jeung **Pre-selected** lamun anjeun hayang salah sahiji *site template* nu aya di daftar jadi pilihan utama.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Mode Default: Pemilihan site template dina form Checkout {#default-mode-site-template-selection-on-the-checkout-form}

Lamun anjeun hayang sadaya *site template* anjeun bisa dipaké nalika registrasi, atawa teu hayang repot ngalimpahkeun atawa néskeun *site template* di bawah unggal produk nu anjeun jieun. Terus anjeun bisa langsung tetepna pilihan *site template* dina **Checkout Form** anjeun. Pikeun ngalakukeun éta, nyaéta ka **Ultimate Multisite > Checkout Forms** terus klik **Edit** di handap form anu hayang dipaké.

Ieu bakal nuju page **Edit Checkout Form**. Cari kolom **Template Selection** terus klik **Edit** di handapna.

Sikep jendela *modal* bakal muncul. Di bawah kolom **Template Sites**, anjeun bisa milih je ngadamel daftar sadaya *site template* anu hayang aya nalika registrasi. *Site template* nu anjeun tentuke ti dieu bakal bisa dipaké teu peduli produk naon nu dipilih ku pengguna.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Di bagian *frontend*, pelanggan bakal ningali pemilih *template* nalika *checkout* jeung bisa milih desain awal pikeun situs anyar maranéhna.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Pilihan Template Situs {#site-template-options}

Ada fungsi template situs lain yang bisa Anda nyalakan atau matikan di pengaturan Ultimate Multisite.

![Pilihan template situs di pengaturan Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Izinkan Penggantian Template {#allow-template-switching}

Menyalakan opsi ini akan mengizinkan klien Anda untuk mengganti template yang mereka pilih selama proses pendaftaran setelah akun dan situs dibuat. Ini berguna dari sudut pandang klien karena memungkinkan mereka memilih ulang template jika nanti mereka tahu pilihan awal mereka ternyata kurang cocok dengan kebutuhan spesifik mereka.

#### Izinkan Pengguna Menggunakan Situs Mereka sebagai Template {#allow-users-to-use-their-site-as-templates}

Karena pengguna subsite menghabiskan waktu untuk membangun dan mendesain situs mereka sendiri, mereka mungkin ingin mengkloningnya dan menggunakannya sebagai salah satu template situs yang tersedia saat membuat subsite lain di jaringan Anda. Opsi ini akan memungkinkan mereka mencapai hal tersebut.

#### Salin Media Saat Duplikasi Template {#copy-media-on-template-duplication}

Mencentang opsi ini akan menyalin media yang diunggah di situs template ke situs yang baru dibuat. Ini bisa ditimpa (override) pada setiap paket rencana (plan).

#### ** cegah Mesin Pencari Mengindeks Template Situs** {#prevent-search-engines-from-indexing-site-templates}

Template situs seperti yang dibahas dalam artikel ini adalah kerangka dasar (boilerplate) tetapi tetap menjadi bagian dari jaringan Anda, yang berarti masih tersedia untuk ditemukan oleh mesin pencari. Opsi ini akan memungkinkan Anda menyembunyikan template situs sehingga mesin pencari tidak bisa mengindeksnya.

## Mengisi Template Situs dengan auto search-and-replace {#pre-populating-site-templates-with-auto-search-and-replace}

Salah sahiji fitur paling ampuh tina Ultimate Multisite nya nya bisa nambahan teks, warna, jeung field pilihan anu acak kana form registrasi. Nalika urang geus ngagondol data éta, urang bisa ngagunakeun éta pikeun ngisiankeun konten di bagian-bagian situs template anu dipilih. Terus, nalika situs anyar keur dipublikasikeun, Ultimate Multisite bakal ngaganti *placeholder* ku informasi asli anu geus diisikeun nalika registrasi.

Contona, lamun anjeun hayang meunang nama perusahaan pangguna akhir (end-user) salila registrasi je otomatis ngabentukkeun nama perusahaan éta dina halaman utama situs. Dina halaman utama situs template anjeun, anjeun kudu nambahan *placeholder*, saperti dina gambar di handap ieu (harus ditambahan ku dua kurung ganda - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Terus, anjeun bisa langsung nambahan field registrasi anu cocog dina form checkout anjeun pikeun ngagondol data éta. Editor form checkout anu sarua dipaké pikeun milih template ngajadikeun anjeun bisa nambahan field kustom di sabudeureun pemilih template:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Pelanggan anjeun tuluy bakal bisa ngisian éta field nalika registrasi.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite tuluy bakal ngaganti *placeholder* ku data anu parantos dipasihkeun ku pelanggan sacara otomatis.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Ngabéréskeun masalah "template pinuh ku placeholder" {#solving-the-template-full-of-placeholders-problem}

Sakitu téh saé, tapi urang ngalaman masalah anu teu éndah: ayeuna template situs urang - anu bisa dikunjung ku pelanggan urang - pinuh ku *placeholder* anu jeung teu jelas.

Kanggo ngabenerkeun éta, urang nawiskeun pilihan pikeun ngatur nilai palsu (fake values) keur placeholder, sarta urang ngagunakeun nilai éta pikeun nyari jeung ngaganti eusina dina template situs nalika pelanggan anjeun keur ngunjung.

Anjeun bisa ngakses editor placeholder template ku cara indit ka **Ultimate Multisite > Settings > Sites**, tuluy, di sidebar, klik tautan **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Ieu bakal mawa anjeun ka editor konten placeholder, di mana anjeun bisa nambahan placeholder jeung eusina masing-masing.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
