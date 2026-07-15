---
title: Ngadamel Produk Langganan Kahiji Anjeun
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Ngadiri Produk Langganan Pertama Anjeun (v2)

_**CATATAN PENTING: Artikel ieu ngan ukur pikeun pangguna Ultimate Multisite versi 2.x. Upami anjeun keur nganggo versi 1.x,**_ **_**coba baca artikel ieu**_**.

Mun rék ngagunake jaringan anjeun je siap ngajual jasa ka calon pangguna, anjeun kudu boga pilihan langganan anu béda-béda. Kumaha cara ngadiri produk-produk éta? Naon waé jenis produk anu bisa ditawarke? Dina artikel ieu, urang bakal bahas sagala hal anu kedah anjeun terang ngeunaan produk.

## Jenis Produk {#product-type}

Ku Ultimate Multisite, anjeun bisa nawarke dua kategori produk ka klien anjeun: **rencana (plans)** je **tambahan (add-ons) (Order Bump)**. Tambahan bisa dibagi jadi dua jenis: **paket (packages)** je **layanan (services)**. Urang bakal ningali béda je ciri has maranéhna salajengna.

  * **Rencana (Plans)** : Ieu produk dasar tina Ultimate Multisite. Klien anjeun ngan bisa boga keanggotaan lamun éta nempel kana rencana. Rencana ngahajikan klien anjeun hiji atawa leuwih situs (gumantung konfigurasi rencana anjeun) kalayan batasan anu anjeun tetepkeun dina halaman editing produk anjeun.

  * **Paket (Packages)** : Tambahan anu langsung mabeobkeun fungsi rencana Ultimate Multisite. Maranéhna ngarobah batasan atawa nambahan sumber daya, plugin, atawa tema anyar ka rencana asli anu dibeuli klien anjeun. Contona, rencana dasar mungkin ngajadikeun 1.000 kunjungan per bulan, je anjeun bisa nyayogikeun paket anu ngaronjatkeun jumlah éta jadi 10.000.

  * **Layanan (Services)**: Tambahan anu teu ngarobah fungsi Ultimate Multisite. Ieu téh tugas-tugas anu bakal anjeun laksanakeun pikeun klien anjeun di luar rencana anu dibeuli maranéhna. Contona, pelanggan anjeun mungkin meuli rencana anu ngajadikeun hiji situs je ogé bayar layanan tambahan anu bakal ngajadikeun desain situs éta.

## Ngatur Produk {#managing-products}

Bagi banyak orang, tab **Products** di Ultimate Multisite **(Ultimate Multisite > Products)** bisa disamakan dengan paket-paket (plans) di lingkungan hosting tradisional.

Di dalam Ultimate Multisite, tab Products itu menentukan struktur dan batasan yang berlaku untuk produk atau layanan tertentu. Struktur ini meliputi deskripsi produk atau layanan, harga, pajak, dan izin akses.

Bagian ini akan memandu pemahaman Anda tentang landasan penting dari Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Menambah Produk (Adding Products) {#adding-products}

Baik itu paket (plan), paket (package), atau layanan yang menjadi pintu masuk untuk mendefinisikan item baru, caranya adalah melalui **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Antarmuka ini punya dua bagian utama. Di sebelah kiri ada beberapa tab yang membantu dalam mendefinisikan produk, dan di sebelah kanan ada beberapa bagian untuk menentukan harga dasar produk, status aktifnya, dan gambar produk.

![Product edit page overview](/img/config/product-edit-full.png)

### Deskripsi (Description) {#description}

Informasi dasar produk bisa ditentukan dengan memasukkan nama produk dan deskripsinya. Pengenal ini akan ditampilkan di mana pun informasi produk dibutuhkan, seperti pemilihan paket dan harga, faktur (invoices), peningkatan (upgrades), dan sejenisnya.

![Product description section](/img/config/product-description.png)

### Jenis Harga (Pricing Type) {#pricing-type}

Di sisi kanan antarmuka, harga dasar bisa ditentukan.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite mendukung tiga jenis harga yang berbeda. Opsi **paid** akan meminta administrator jaringan untuk informasi mengenai harga produk dan frekuensi penagihan (billing frequency).

### Harga (Pricing) {#pricing}

Komponen harga menentukan harga dasar produk dan interval penagihannya.

![Pricing and save section](/img/config/product-pricing-save.png)

jadi conto harga $29.99 dengan pengaturan 1 bulan bakal ditagih $29.99 tiap bulan. Sama kitu, harga $89.97 dengan pengaturan 3 bulan bakal ditagih jumlah éta tiap kuartal.

### Siklus Penagihan (Billing Cycles) {#billing-cycles}

Bagian siklus penagihan ini nunjukkeun seberapa sering interval penagihan tadi terjadi, biasana dipahami dalam konteks kontrak atawa jangka waktu tetap.

![Pricing and save section](/img/config/product-pricing-save.png)

Contona, harga produk $29.99 dengan interval 1 bulan dan 12 siklus penagihan bakal ditagih $29.99 per bulan untuk produk éta selama 12 bulan ke depannya. Singna, pengaturan saperti kieu bakal ngadegkeun jangka waktu harga tetap $29.99 per bulan saumur 12 bulan terus berhenti ditagih.

### Masa Uji Coba (Trial Period) {#trial-period}

Ngaktifkeun toggle penawaran uji coba (offer trial toggle) ngajadikeun admin jaringan bisa ngatur masa uji coba pikeun produk éta.

![Pricing and save section](/img/config/product-pricing-save.png)

Lalampahan mangsa uji coba, pelanggan bebas maké produk jeung teu bakal ditagih samukna nepi ka mangsa uji coba réngsé.

### Biaya Setup (Setup Fee) {#setup-fee}

Manéh ogé bisa ngagunake biaya setup ke rencana anjeun.

![Pricing and save section](/img/config/product-pricing-save.png)

Ieu hartina, klien anjeun bakal bayar jumlah tambahan dina tagihan kahiji (di luar rencana harga) anu cocog jeung biaya anu anjeun tikeun di bagian ieu.

### Aktif (Active) {#active}

Toggle aktif éta efektif ngadéfinisikeun naha produk éta bisa dipaké ku pelanggan anyar atawa teu.

![Active toggle](/img/config/product-active.png)

Upami aya pelanggan anu geus aya dina rencana ieu, ngalihan toggle ka status disabled téh intina ngabaturan rencana éta jadi teu bisa dipasihan deui pikeun pendaftar anyar. **Pelanggan anu geus aya dina rencana bakal terus dibayar** nepi ka maranéhna diubah ka rencana anyar atawa dileupaskeun tina rencana éta.

### Gambar Produk {#product-image}

Tombol **Upload Image** ngidinan admin jaringan pikeun ngagunakeun media library pikeun milih atawa ngunggah gambar produk.

![Product image section](/img/config/product-image.png)

### Hapus {#delete}

Tombol **Delete Product** ngahapkeun produk tina sistem. Ieu bakal muncul lamun produk geus dipublikasikeun.

![Delete product section](/img/config/product-delete.png)

Saluyu jeung hapusan séjén, produk téh teu dipindah ka status sampah (trash). Jadi saatos dihapus, tindakan éta teu bisa dibalikkeun deui.

### Pilihan Produk {#product-options}

Sanggeus informasi dasar produk ditetepkeun, pilihan produk ngabantah admin jaringan pikeun nentokkeun atribut spesifik produk leuwih lanjut.

#### Umum {#general}

Tab **General** ngajelaskeun atribut umum produk anu teu aya patalina jeung tab-tab spesifik produk séjénna.

![General tab](/img/config/product-general-tab.png)

**Product slug** anu jelas ngajelaskeun slug anu dipaké pikeun ngidentifikasi produk dina URL jeung bagian séjén tina Ultimate Multisite.

Ultimate Multisite ngadukung sababaraha tipe produk nyaéta Plan, Package, jeung Service. Tab **Product Options** bakal diatur dinamis gumantung kana tipe produk anu ditetepkeun.

**Customer Role** ngajelaskeun peran anu dipasihan ka pelanggan nalika situs téh dibentuk. Biasana pikeun sababaraha admin jaringan, ieu bakal jadi default Ultimate Multisite atawa Administrator. Peran default Ultimate Multisite bisa diatur dina **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Naingkat jeung Turun (Up & Downgrades) {#up--downgrades}

Tab ieu méré jalur naingkat jeung turun anu bisa dipaké ku pelanggan dina tingkatanna sorangan.

Supaya ngarti konsep ieu, cobaan conto di mana hiji instalasi Ultimate Multisite nu spesifik miboga solusi manajemen pembelajaran pikeun pelangganna. Pikeun ngahontal éta tilu rencana (Basic, Plus, jeung Premium) ditangtuke jeung plugin anu spesifik diaktifkeun pikeun unggal rencana (tingali deui di bagian ieu kanggo panduan kumaha ngaktifkeun plugin).

Lamun instalasi Ultimate Multisite ogé ngabantos situs bisnis atawa situs eCommerce, éta rencana bisa mbutuhkeun plugin anu béda keur dipasang jeung diaktifkeun.

Dumasar éta, teu dipikahoyong je masalah lamun pelanggan eLearning pindah ka rencana eCommerce sabab rencana, harga, jeung batasanana mungkin teu cocog.

Ku kituna pikeun ngabatas jalur pelanggan jeung ngajauhan kajadian, administrator jaringan bisa ngadéfinisike grup rencana (plan group) jeung di jero grup éta ngadéfinisike rencana mana waé anu bisa dipindahkeun ku pelanggan.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Pikeun ngadéfinisike grup rencana, tentuke rencana kompatibel dina daftar **plan group**. **Product order** (urutan produk) bakal nentuke kumaha rencana éta diurutkeun jeung ditampilkeun ti anu paling handap ka anu pangtinggi.

Ultimate Multisite ogé ngandung fitur **order bump**, di mana produk jeung jasa tambahan nu merenah bisa ditambah keur rencana. Ieu ditawarkeun ka pelanggan salaku barang tambahan anu bisa ditambihan kana rencana pas dina checkout atawa nalika naingkat.

#### Variasi Harga (Price Variations) {#price-variations}

Variasi harga memungkinkan administrator jaringan menentukan tingkatan harga alternatif tergantung durasinya. Pengaturan ini membuat mungkin untuk menawarkan periode penagihan bulanan, triwulanan, tahunan, atau periode lainnya untuk produk yang sama. Contohnya, Anda bisa mengatur produk seharga $29.99/bulan dengan opsi tahunan diskon seharga $249.99/tahun.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Untuk membuat variasi harga, atur tombol **Enable Price Variations** menjadi aktif dan klik tombol **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Untuk memasukkan variasi, atur durasi, periode, dan harga dari variasi tersebut. Variasi tambahan bisa dimasukkan dengan mengklik tombol itu lagi.

Misalnya, jika harga produk dasar Anda adalah $29.99 per bulan, Anda mungkin menambahkan:

  * **3 Bulan** seharga $79.99 (diskon kecil dari bulanan)
  * **1 Tahun** seharga $249.99 (diskon besar untuk komitmen tahunan)

:::tip Menampilkan Tombol Pemilihan Periode di Frontend

Variasi harga saja tidak menambahkan tombol atau saklar ke checkout frontend. Untuk membiarkan pelanggan beral antara periode penagihan (misalnya Bulanan / Tahunan), Anda perlu menambahkan bidang **Period Selection** ke formulir checkout Anda. Lihat [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) untuk petunjuk langkah demi langkahnya.
:::

#### Pajak {#taxes}

Tab **Taxes** menyesuaikan pengaturan pajak yang ditentukan di **Ultimate Multisite > Settings > Taxes** dan lebih spesifik lagi tarif pajak yang didefinisikan. Untuk mengaktifkan pajak dan menentukan tarif pajak yang berlaku, silakan lihat dokumentasi di **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Di contoh sebelumnya, kita udah ngatur tarif pajak lokal sebesar 7,25% yang berlaku buat pelanggan di California (Amerika Serikat).

Setelah tarif pajak diatur di **Ultimate Multisite > Settings > Manage Tax Rates**, itu bisa dipilih di level produk.

![Taxes tab](/img/config/product-taxes.png)

Untuk nunjukkin kalau suatu produk kena pajak, atur tombol **Is Taxable** jadi aktif dan pilih tarif pajak yang berlaku dari menu dropdown Tax Category.

#### Site Templates {#site-templates}

Intinya, site templates itu website WordPress lengkap yang di-clone ke situs pelanggan pas awal langganan mereka.

![Site Templates tab](/img/config/product-site-templates.png)

Administrator jaringan membuat dan mengkonfigurasi template situs sebagai situs WordPress biasa dengan tema, plugin, dan konten yang sudah aktif dan dikonfigurasi. Template situs itu akan di-clone persis ke pelanggan.

Tab ini memungkinkan administrator jaringan untuk menentukan perilaku site templates saat ada langganan baru. Untuk menggunakan site templates untuk rencana ini, atur tombol **Allow Site Templates** ke status aktif.

Ketika **Allow Site Templates** dimatikan, pelanggan di rencana ini tidak bisa memilih template meskipun formulir checkout, link yang bisa dibagikan, atau parameter URL seharusnya membuat template tersedia. Ultimate Multisite sekarang menerapkan batasan ini melalui rantai *fallback* (cadangan) di semua titik masuk yang tersedia: pengaturan rencana diperiksa duluan, baru kemudian pengaturan template formulir checkout, lalu template yang sudah dipilih sebelumnya atau disediakan oleh URL. Ini menjaga batasan rencana tetap konsisten dan mencegah template muncul untuk produk yang seharusnya tidak menawarkannya.

**site template selection mode** menentukan perilaku site templates selama proses langganan.

Pengaturan **D** **Default** ngikut langkah-langkah dina formulir checkout. Lamun administrator jaringan geus ngadéfinisike langkah pilihan template dina proses checkout je aya template anu geus dianggo, pengaturan ieu bakal ngahargaan arahan anu geus dibentuk dina langkah checkout éta.

Ngaganti **A** **Assign Site Template** maksa pamilihan template nu ditunjuk. Akibatna, sababaraha langkah pilihan template dina proses checkout bakal dibuang.

Terakhir, **C** **Choose Available Site Templates** ngahargaan (override) template anu ditunjuk dina langkah checkout ku template anu dipilih dina pengaturan ieu. Template anu geus dipilih bisa ogé didéfinisike pikeun ngabantu pelanggan milih.

Intina, lamun administrator jaringan hayang pilihan template kajadian dina langkah-langkah checkout, pengaturan ' _default_ ' bakal cukup. Salianna, pikeun ngabéréskeun je ngalungkeun (lock) pilihan template sarta ngalimpahkeun pamilihan ka pengaturan rencana (plan settings), pilihan ' _assign new template_ ' atawa ' _choose available site templates_ ' bisa jadi dipikawanoh.

#### Sites {#sites}

Tab **Sites** mangrupa bagian tina fungsionalitas batasan dina Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Pengaturan ieu ngabédake jumlah maksimum situs anu bisa diciptakeun ku hiji pelanggan di bawah keanggotaanana.

Kanggo ngaktifkeun batasan, atur sakelar **limit sites** ka status aktif je sebutkeun jumlah maksimum situs dina kolom **site allowance**.

#### Visits {#visits}

Tab **Visits** mangrupa bagian deui tina sistem batasan Ultimate Multisite. Pengaturan ieu ngidinan pikeun ngitung je ngatur laju (throttling) pengunjung unik ka situs pelanggan.

![Visits tab](/img/config/product-visits.png)

Tiaseun ti sudut pandang marketing, admin jaringan bisa manfaatkan pengaturan ieu pikeun ngajak pelanggan naon-naon naonkeun langganan maranéhna pikeun naékkeun paketna lamun batasan geus dicapai. Pengaturan ieu ogé bisa dibantu ku admin jaringan pikeun ngendahkeun jeung ngalangkeun lalu lintas anu leuwih ti wajar ka situs-situs sangkan sumber daya sistem tetep aman.

Kanggo maké fitur ieu, atur sakaligus toggle **limit unique visits** kana status aktif sarta tentuke jumlah maksimum pengunjung unik dina kolom **unique visits quota**.

Lamun batasan ieu geus dicapai, Ultimate Multisite moal ngabagéake situs pelanggan deui tapi bakal nunjukkeun pesan yén batasan geus leuwih.

#### Users (Pengguna) {#users}

Batasan 'Users' dina Ultimate Multisite ngidinan admin jaringan pikeun ngatur batasan jumlah pengguna anu bisa diciptakeun jeung dipasihan peran.

![Users tab](/img/config/product-users.png)

Kanggo ngaktifkeun fitur batasan, atur toggle **limit user** kana status aktif ku nggeserana ka sisi kanan.

Terus pikeun unggal peran anu rék dibatasi, atur toggle di sésaana kana status aktif sarta tentuke batas luhur maksimum dina kolom anu pas.

#### Post Types (Tipe Postingan) {#post-types}

Tab **Post Types** ngidinan admin jaringan pikeun ngatur batasan leuwih rinci kana sababaraha tipe postingan anu aya dina WordPress.

![Post Types tab](/img/config/product-post-types.png)

Alatan struktur WordPress, postingan jeung tipe postingan téh bagian penting tina fungsi intiana, jadi sistem batasan Ultimate Multisite dirancang pikeun ngabantosan admin jaringan dina ngawangun jeung ngajaga batasan.

Kanggo ngaktifkeun subsistem batasan ieu, atur toggle **limit post types** kana status aktif ku nggeserana ka sisi kanan.

Terus, pikeun unggal tipe postingan nu rék dibatasi, aktifkeun ku nggeser ka ditu (kanan) jeung nulis batas maksimalna di kolom anu dipihokeun.

#### Disk Space {#disk-space}

Tab **Disk Space** ngajangkeun admin jaringan bisa ngabataskeun ruang anu dipaké ku pelanggan.

![Disk Space tab](/img/config/product-disk-space.png)

Biasana dina WordPress multisite, file inti (core files) téh dibagi pikeun sakabé situs, sarta direktori individu nu dibentuk pikeun file media jeung unggahan anu ngagambarkeun pengaturan jeung batasan ieu.

Kanggo ngaktifkeun batasan panggunaan disk, atur toggle **limit disk size per site** ka keadaan aktif ku nggeser ka ditu (kanan).

Terus, tentuke batas maksimal dina megabyte di kolom **disk space allowance**.

#### Custom Domain {#custom-domain}

Ku ngalawan opsi ieu, anjeun bisa ngajadikeun domain kustom ngan ukur pikeun paket ieu.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes {#themes}

Tab **Themes** dina pilihan produk ngidinan admin jaringan pikeun nyayogikeun tema ka pelanggan pikeun dipilih jeung milihkeun éta téma jadi wajib (optionally force the state of the theme).

![Themes tab](/img/config/product-themes.png)

_**Catatan: Supaya tema bisa dipake ku pelanggan, kudu diaktifkeun ku admin jaringan.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Opsi **visibility** ngajelaskeun naha tema éta bakal katingali atawa henteu nalika pelanggan ningali tab **Appearance > Themes** dina situsna. Ngatur opsi ieu jadi **Hidden** bakal ngahapus tema tina pandangan sarta mendingkeun kemampuan pikeun milih jeung ngaktifakeunana.

![Themes tab](/img/config/product-themes.png)

Pilihan **behavior** ngidinan admin jaringan pikeun ngadéfinisikeun keadaan tema nalika situs pelanggan ditangtukeun (created).

Di status **Available**, tema bisa diakses sama pelanggan untuk mengaktifkannya sendiri. Sebaliknya, status **Not Available** menghilangkan kemampuan pelanggan untuk mengaktifkan tema tersebut. Terakhir, opsi **Force Activate** memaksa pemilihan dan aktivasi tema, sehingga menjadi default saat pembuatan situs.

#### Plugins {#plugins}

Sama kayak tab Themes, Ultimate Multisite membiarkan administrator jaringan menentukan visibilitas plugin ke pelanggan juga kondisi plugin saat membuat situs baru.

![Plugins tab](/img/config/product-plugins.png)

Menu **visibility** (visibilitas) memungkinkan plugin itu bisa terlihat atau disembunyikan dari pelanggan saat dilihat di situs mereka melalui opsi menu Plugins.

Administrator jaringan bisa lebih memanipulasi perilaku plugin dengan menggunakan pilihan di menu behavior (perilaku).

![Plugins tab](/img/config/product-plugins.png)

Pilihan **Default** akan menghormati kondisi plugin yang sudah ditentukan di template situs yang dipilih oleh pelanggan. Jadi, plugin yang sudah aktif di dalam template akan tetap aktif saat template itu di-clone ke situs pelanggan.

**Force Activate** menempatkan plugin dalam status aktif saat pembuatan situs, dan sebaliknya **Force Inactivate** menonaktifkan plugin saat pembuatan situs. Dalam kedua keadaan ini, kondisi plugin bisa diubah secara manual oleh pelanggan melalui menu WordPress Plugins mereka.

Pengaturan **Force Activate & Lock** kerjanya mirip tapi mencegah status plugin diubah oleh pelanggan. Jadi, pengaturan Force Activate dan Lock akan memaksa plugin ke keadaan aktif dan mencegah pelanggan menonaktifkannya. Demikian pula, pengaturan **Force Inactivate & Lock** akan memaksa plugin ke keadaan tidak aktif dan mencegah pengguna mengaktifkan plugin tersebut.

Administrator jaringan mungkin ingin mempertimbangkan pengaturan Force Activate & Lock dan Force Inactivate & Lock bersama dengan template situs sebagai plugin dan status plugin di dalam template bisa terpengaruh oleh pengaturan ini jika dipilih.

#### Batasan Reset {#reset-limitations}

Tab **Reset Limitations** akan mereset semua batasan kustom yang sudah didefinisikan pada produk. Untuk mereset batasan, klik tombol **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Untuk mengonfirmasi tindakan, geser sakelar **confirm reset** ke keadaan aktif di sebelah kanan dan klik tombol **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Edit, Duplikat, atau Hapus Produk {#edit-duplicate-or-delete-product}

Produk yang sudah ada bisa diedit, diduplikasi, atau dihapus dengan menavigasi ke **Ultimate Multisite > Products** dan mengarahkan kursor (hover) pada nama produk yang sudah ada.

![Product hover actions](/img/config/product-hover-actions.png)
