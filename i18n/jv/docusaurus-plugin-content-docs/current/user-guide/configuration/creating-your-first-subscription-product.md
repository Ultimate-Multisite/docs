---
title: Nggawe Produk Langganan Pertama Sampeyan
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Nggawe Produk Langganan Pertama Sampeyan (v2)

_**CATATAN PENTING: Artikel iki mung kanggo pengguna Ultimate Multisite versi 2.x. Yen sampeyan nggunakake versi 1.x,**_ **_**deloken artikel iki**_**.

Kanggo miwiti ngoperasikake jaringan sampeyan lan wiwit ngedol layanan marang calon pangguna, sampeyan perlu duwe pilihan langganan sing beda-beda. Kepiye carane nggawe produk-produk iki? Apa wae jenis produk sing bisa ditawari? Ing artikel iki, kita bakal bahas kabeh sing perlu sampeyan suwuni babagan produk.

## Jenis Produk {#product-type}

Kanthi Ultimate Multisite, sampeyan bisa nawakake rong kategori produk marang klienmu: **plans** lan **add-ons (Order Bump)**. Add-ons bisa dibagi dadi loro jenis: **packages** lan **services**. Kita bakal deloken bedane lan ciri khasé sabanjure.

  * **Plans** : produk pokok saka Ultimate Multisite. Klien mung bisa duwe keanggotaan yen iku nempel karo plan. Plan nyedhiyakake marang klien sampeyan siji utawa luwih situs (gumantung konfigurasi planmu) kanthi batasan sing sampeyan set ing halaman editing produkmu.

  * **Packages** : add-ons sing langsung nggarap fungsi Ultimate Multisite plans. Iki ngowahi batasan utawa nambah sumber daya, plugin, utawa tema anyar marang plan asli sing dibeli klienmu. Contone, plan dasar mungkin ngidini 1.000 kunjungan saben wulan lan sampeyan bisa nyedhiyakake package sing nambahi angka kuwi dadi 10.000.

  * **Services:** add-ons sing ora ngowahi fungsi Ultimate Multisite. Iki tugas-tugas sing bakal sampeyan lakoni kanggo klienmu saliyane plan sing dibeli. Contone, pelangganmu mungkin tuku plan sing ngidini siji situs lan uga mbayar layanan tambahan sing bakal nggawe desain situs iki.

## Ngelola Produk {#managing-products}

Kanggo akeh wong, tab **Products** ing Ultimate Multisite **(Ultimate Multisite > Products)** bisa diibaratake rencana (plans) ing lingkungan hosting tradisional.

Ing Ultimate Multisite, tab Products ngartikake struktur lan batasan sing berlaku kanggo produk utawa layanan tartamtu. Struktur kaya ngene iki nyebar menyang deskripsi produk utawa layanan, rega, pajak, lan izin akses.

Bagian iki bakal nuntun pemahamanmu babagan landasan penting saka Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Nambah Produk (Adding Products) {#adding-products}

Apa wae, rencana, paket, utawa layanan sing dadi titik awal kanggo ngartikake barang anyar ya liwat **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Antarmuka iki duwe rong bagian utama. Ing sisih kiwa ana sawetara tab sing mbantu nentokake produk lan ing sisih tengen ana sawetara bagian kanggo nentokake rega dasar produk, status aktifé, lan gambar produk.

![Product edit page overview](/img/config/product-edit-full.png)

### Deskripsi (Description) {#description}

Informasi produk dasar bisa ditentokake kanthi menehi nama produk lan deskripsine. Identifikasi iki bakal ditampilkan ing ngendi wae informasi produk dibutuhake, kaya pilihan rencana lan harga, faktur, upgrade, lan semacamé.

![Product description section](/img/config/product-description.png)

### Tipe Harga (Pricing Type) {#pricing-type}

Ing sisih tengen antarmuka, rega dasar bisa ditentokake.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite ndhukung telung tipe harga sing beda. Pilihan **paid** bakal njaluk administrator jaringan informasi babagan rega lan frekuensi penagihan produk kasebut.

### Harga (Pricing) {#pricing}

Komponen harga ngartikake rega dasar produk lan interval penagihane.

![Pricing and save section](/img/config/product-pricing-save.png)

dadi, contone conto harga contoh $29.99 karo pengaturan 1 bulan bakal ditagih $29.99 saben bulan. Padha kaya ngono, harga $89.97 karo pengaturan 3 bulan bakal ditagih jumlah itu saben kuartal.

### Billing Cycles {#billing-cycles}

Bagian siklus penagihan ini nunjukake seberapa sering interval penagihan yang disebut di atas terjadi, lan biasane dipahami berdasarkan kontrak utawa jangka waktu tetap.

![Pricing and save section](/img/config/product-pricing-save.png)

Contone, harga produk $29.99 karo interval 1 bulan lan 12 siklus penagihan bakal ditagih $29.99 saben bulan kanggo produk kuwi selama 12 bulan berikutnya. Sing artine, pengaturan kaya ngono bakal nggawe jangka waktu harga tetap $29.99 saben bulan kanggo 12 bulan lan banjur berhenti ditagih.

### Trial Period {#trial-period}

Nyalak tombol trial offer ngidini administrator jaringan ngatur periode percobaan kanggo produk kuwi.

![Pricing and save section](/img/config/product-pricing-save.png)

Selama periode percobaan, pelanggan bebas nggunakake produk lan ora bakal ditagih nganti periode percobaan wis rampung.

### Setup Fee {#setup-fee}

Sampeyan uga bisa nerapake biaya setup kanggo rencana sampeyan.

![Pricing and save section](/img/config/product-pricing-save.png)

Iki tegese, klien sampeyan bakal bayar jumlah tambahan ing pembayaran pertama (salajur tambah harga rencana) sing cocog karo biaya sing sampeyan tentokake ing bagian iki.

### Active {#active}

Tombol aktif efektif nentokake apa produk kuwi wis bisa diakses dening pelanggan kanggo pendaftaran anyar.

![Active toggle](/img/config/product-active.png)

Yen ana pelanggan wis ana ing paket iki, ngeklik toggle menyang status disabled iku intine ngarepake paket kuwi ilang kanggo pendaftaran sing arep teka maneh. **Pelanggan sing wis ana ing paket bakal terus ditagih** nganti diowahi menyang paket anyar utawa diangkat saka paket.

### Gambar Produk {#product-image}

Tombol **Upload Image** ngenani admin jaringan bisa nggunakake media library kanggo milih utawa ngunggah gambar produk.

![Product image section](/img/config/product-image.png)

### Hapus {#delete}

Tombol **Delete Product** bakal ngapus produk saka sistem. Iki bakal muncul sawise produk wis dipublikasikake.

![Delete product section](/img/config/product-delete.png)

Beda karo penghapusan liyane, produk iki ora ana ing status sampah (trash). Dadi sawise dihapus, tindakan kuwi ora bisa diulangi maneh.

### Opsi Produk {#product-options}

Sawise informasi dasar produk wis ditentokake, opsi produk mbantu admin jaringan kanggo nentokake atribut spesifik produk luwih jero.

#### Umum {#general}

Tab **General** ngandharake atribut umum produk sing ora ana gandheng cenenge karo tab-tab spesifik produk liyane.

![General tab](/img/config/product-general-tab.png)

**Product slug** sing gampang dingerteni iku nentokake slug sing digunakake kanggo ngidentifikasi produk ing URL lan area liyane saka Ultimate Multisite.

Ultimate Multisite ndukung sawetara jenis produk yaiku Plan, Package, lan Service. Tab **Product Options** bakal diatur dinamis gumantung jenis produk sing dipilih.

**Customer Role** nentokake peran sing dikasih marang pelanggan nalika situs iku digawe. Biasane kanggo kebanyakan admin jaringan, iki bakal dadi default Ultimate Multisite utawa Administrator. Peran default Ultimate Multisite bisa diatur ing **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Naik lan Turun (Up & Downgrades) {#up--downgrades}

Tab iki ngatur jalur naik lan turun (upgrade and downgrade paths) sing bisa diakses pelanggan ing tingkatan (tier) khususé.

Kanggo mangerteni konsep iki, coba deleng conto nalika instalasi Ultimate Multisite niche menehi solusi manajemen pembelajaran marang pelanggane. Kanggo nggayuh iki telung rencana (Basic, Plus, lan Premium) didefinisikake lan plugin spesifik diaktifake kanggo saben rencana (deleng maneh ing bagian iki kanggo instruksi babagan cara ngaktifake plugin).

Yen instalasi Ultimate Multisite uga nglayani website bisnis utawa eCommerce, rencana-rencana iki mungkin mbutuh plugin sing beda kanggo dipasang lan diaktifake.

Nganti titik kasebut, ora becik lan masalah yen pelanggan eLearning bisa pindhah menyang rencana eCommerce amarga rencana-rencana kuwi, regane, lan batasané mungkin ora cocog.

Dadi, kanggo nahan jalur pelanggan lan supaya ora ana insiden, administrator jaringan bisa ngatur grup rencana (plan group) lan ing grup kasebut ngatur rencana apa wae sing bisa dijangkau pelanggan kanggo pindhah.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Kanggo ngrungokake grup rencana (plan group), sebutna rencana-rencana sing cocok ing daftar **plan group**. **product order** bakal nentokake kepiye urutan lan tampilan rencana-rencana kuwi saka paling rendah nganti paling dhuwur.

Ultimate Multisite uga kalebu fitur **order bump**, ing ngendi produk lan layanan tambahan sing cocog bisa ditambahi menyang rencana. Iki ditawari marang pelanggan minangka barang tambahan sing bisa ditambahake menyang rencana nalika checkout utawa nalika upgrade.

#### Variasi Harga (Price Variations) {#price-variations}

Variasi harga memungkinkan administrator jaringan untuk menentukan tingkatan harga alternatif tergantung durasinya. Pengaturan ini membuat mungkin untuk menawarkan periode penagihan bulanan, triwulanan, tahunan, atau periode penagihan lainnya untuk produk yang sama. Misalnya, Anda bisa mengatur produk seharga $29.99/bulan dengan opsi tahunan diskon seharga $249.99/tahun.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Untuk membuat variasi harga, aktifkan tombol **Enable Price Variations** dan klik tombol **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Untuk memasukkan variasi, atur durasi, periode, dan harga dari variasi tersebut. Variasi tambahan bisa dimasukkan dengan mengklik tombol itu lagi.

Misalnya, jika harga produk dasar Anda adalah $29.99 per bulan, Anda mungkin menambahkan:

  * **3 Bulan** seharga $79.99 (diskon kecil dari bulanan)
  * **1 Tahun** seharga $249.99 (diskon besar untuk komitmen tahunan)

:::tip Menampilkan Tombol Pemilihan Periode di Frontend

Variasi harga saja tidak menambahkan tombol atau saklar ke checkout frontend. Untuk mengizinkan pelanggan beral antara periode penagihan (misalnya Bulanan / Tahunan), Anda perlu menambahkan bidang **Period Selection** ke formulir checkout Anda. Lihat [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) untuk petunjuk langkah demi langkahnya.
:::

#### Pajak {#taxes}

Tab **Taxes** menyesuaikan pengaturan pajak yang ditentukan di **Ultimate Multisite > Settings > Taxes** dan lebih spesifik lagi tarif pajak yang didefinisikan. Untuk mengaktifkan pajak dan menentukan tarif pajak yang berlaku, silakan lihat dokumentasi di **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Ing conto contoh sadurane mau, kita wis nentokake tarif pajak lokal ya, sing ana 7.25% kanggo pelanggan ing California (Amerika Serikat).

Sawise tarif pajak wis diwenehake nang **Ultimate Multisite > Settings > Manage Tax Rates**, kuwi iso dipilih nang level produk.

![Taxes tab](/img/config/product-taxes.png)

Kanggo nuduhake yen sawijining produk iku kena pajak, setel toggle **Is Taxable** dadi aktif lan pilih tarif pajak sing pas saka dropdown Tax Category.

#### Site Templates {#site-templates}

Intine, site templates kuwi kaya website WordPress lengkap sing di-clone kanggo situs pelanggan nalika wiwitan langganan.

![Site Templates tab](/img/config/product-site-templates.png)

Administrator jaringan nggawe lan ngatur template situs dadi situs WordPress biasa kanthi tema, plugin, lan konten sing wis aktif lan diatur. Template situs kuwi di-clone persis kaya asline kanggo pelanggan.

Tab iki menehi kesempatan marang administrator jaringan kanggo milih cara kerja site templates nalika langganan anyar. Kanggo nggunakake site templates kanggo rencana iki, setel toggle **Allow Site Templates** dadi aktif.

Nalika **Allow Site Templates** mati, pelanggan ing rencana kuwi ora bisa milih template sanajan ana formulir checkout, link sing iso dibagikan, utawa parameter URL sing bener-bener nggawe template kasebut tersedia. Ultimate Multisite saiki ngewangi batasan iki liwat rantai *fallback* antarane titik masuk sing wis ana: pengaturan rencana di cek dhisik, banjur pengaturan template formulir checkout, banjur template sing wis dipilih utawa dikasih via URL. Iki njaga batasan rencana tetep konsisten lan mencegah template muncul kanggo produk sing ora duwe hak nggawe template kuwi.

**site template selection mode** iku ngatur cara kerja site templates nalika proses langganan.

Pengaturan **D** **efault** ikuti langkah-langkah di formulir checkout. Yen administrator jaringan wis nentokake langkah pemilihan template ing proses checkout lan langkah kasebut wis ditentokake nganggo template, pengaturan iki bakal ngajeni arahan sing wis ana ing langkah checkout kuwi.

Nentokake **A** **ssign Site Template** maksakake pilihan template sing wis ditentukake. Akibaté, saben langkah pemilihan template ing proses checkout bakal ilang.

Pungkasan, **C** **hoose Available Site Templates** ngalahake template sing wis ditentokake ing langkah checkout nganggo template sing dipilih ing pengaturan iki. Template sing wis dipilih sadurunge uga bisa ditentokake kanggo mbantu pelanggan milih.

Intine, yen administrator jaringan kepengin pemilihan template kedadeyan ing langkah-langkah checkout, pengaturan '_default_' cukup. Alternatif kanggo ngilangake lan ngunci pemilihan template lan mendeleke pemilihan marang pengaturan rencana yaiku pilihan '_assign new template_' utawa '_choose available site templates_'.

#### Sites {#sites}

Tab **Sites** iku bagian saka fungsionalitas batasan (limitasi) Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Pengaturan iki nentokake jumlah maksimum situs sing bisa digawe pelanggan ing bawah keanggotaane.

Kanggo ngaktifake batasan, setel toggle **limit sites** menyang keadaan aktif lan tentokake jumlah maksimum situs ing kolom **site allowance**.

#### Visits {#visits}

Tab **Visits** iku bagian liyane saka sistem batasan Ultimate Multisite. Pengaturan iki menehi kesempatan kanggo ngitung lan nggoleki (throttling) pengunjung unik marang situs pelanggan.

![Visits tab](/img/config/product-visits.png)

Dari sudut pandang marketing jaringan, admin bisa pakai pengaturan ini buat ngajak pelanggan *upgrade* paketnya pas batas udah tercapai. Pengaturan ini juga bisa bantu admin jaringan buat nahan dan mencegah trafik berlebih ke situs biar sumber daya sistem tetap aman.

Buat pakai fitur ini, atur toggle **limit unique visits** ke status aktif dan tentukan jumlah pengunjung unik maksimal di kolom **unique visits quota**.

Begitu batas ini tercapai, Ultimate Multisite tidak akan lagi melayani situs pelanggan, tapi malah menampilkan pesan kalau batas sudah terlampaui.

#### Pengguna (Users) {#users}

Batasan 'Users' di Ultimate Multisite memungkinkan admin jaringan buat pasang batasan jumlah pengguna yang bisa dibuat dan diberi peran.

![Users tab](/img/config/product-users.png)

Buat mengaktifkan fitur pembatasan ini, atur toggle **limit user** ke status aktif dengan menggesernya ke kanan.

Selanjutnya untuk setiap peran yang mau dibatasi, atur toggle di sebelahnya ke status aktif dan tentukan batas atas maksimal di kolom yang sesuai.

#### Tipe Postingan (Post Types) {#post-types}

Tab **Post Types** memungkinkan admin jaringan buat pasang batasan detail pada berbagai macam tipe postingan di WordPress.

![Post Types tab](/img/config/product-post-types.png)

Karena cara kerja WordPress, postingan dan tipe postingan itu bagian penting dari fungsi intinya, makanya sistem pembatasan Ultimate Multisite dirancang buat bantu admin jaringan dalam membuat dan menjaga batasan.

Buat mengaktifkan subsistem batasan ini, atur toggle **limit post types** ke status aktif dengan menggesernya ke kanan.

Selanjutnya, untuk setiap post type yang ingin dibatasi, aktifkan dengan menggesernya ke kanan dan tentukan batas atas maksimum di kolom yang sesuai.

#### Disk Space {#disk-space}

Tab **Disk Space** memungkinkan admin jaringan membatasi ruang yang digunakan oleh pelanggan.

![Disk Space tab](/img/config/product-disk-space.png)

Biasanya di WordPress multisite, file inti (core files) dibagi bersama di semua situs, dan direktori individual yang dibuat untuk file media serta unggahan adalah tempat pengaturan dan batasan ini berlaku.

Untuk mengaktifkan pembatasan penggunaan disk, atur toggle **limit disk size per site** ke kondisi aktif dengan menggesernya ke kanan.

Selanjutnya, tentukan batas atas maksimum dalam megabyte di kolom **disk space allowance**.

#### Custom Domain {#custom-domain}

Dengan mengaktifkan opsi ini, Anda dapat mengizinkan domain kustom pada paket ini secara spesifik.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes {#themes}

Tab **Themes** di dalam opsi produk memungkinkan admin jaringan menyediakan tema untuk dipilih oleh pelanggan dan secara opsional memaksa status (state) tema tersebut.

![Themes tab](/img/config/product-themes.png)

_**Catatan: Agar tema dapat tersedia bagi pelanggan, tema tersebut harus diaktifkan oleh admin jaringan.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Opsi **visibility** menentukan apakah tema ini terlihat atau tidak ketika pelanggan melihat tab **Appearance > Themes** di situs mereka. Mengatur opsi ini ke **Hidden** akan menyembunyikan tema dari tampilan dan dengan demikian membatasi kemampuan untuk memilih dan mengaktifkannya.

![Themes tab](/img/config/product-themes.png)

Pilihan **behavior** memungkinkan admin jaringan untuk menentukan status tema saat pembuatan situs pelanggan.

Ing status **Available**, tema bisa diakses sama pelanggan untuk mengaktifkannya sendiri. Sebaliknya, status **Not Available** akan menghilangkan kemampuan pelanggan untuk mengaktifkan tema tersebut. Terakhir, opsi **Force Activate** memaksa pemilihan dan aktivasi tema, sehingga menjadi default saat pembuatan situs.

#### Plugins {#plugins}

Sama seperti tab Themes, Ultimate Multisite memungkinkan administrator jaringan menentukan visibilitas plugin kepada pelanggan serta statusnya saat membuat situs baru.

![Plugins tab](/img/config/product-plugins.png)

Menu *visibility* (visibilitas) memungkinkan plugin untuk ditampilkan atau disembunyikan dari pelanggan ketika dilihat di situs mereka melalui opsi menu Plugins.

Administrator jaringan juga bisa memanipulasi perilaku plugin lebih lanjut dengan menggunakan pilihan di menu *behavior* (perilaku).

![Plugins tab](/img/config/product-plugins.png)

Pilihan **Default** akan menghormati status plugin yang sudah ditentukan dalam template situs yang dipilih oleh pelanggan. Jadi, plugin yang sudah aktif di dalam template akan tetap aktif ketika template tersebut di-*clone* ke situs pelanggan.

**Force Activate** menempatkan plugin dalam status aktif saat pembuatan situs, dan sebaliknya **Force Inactivate** menonaktifkan plugin saat pembuatan situs. Dalam kedua keadaan ini, status plugin bisa diubah secara manual oleh pelanggan melalui menu Plugins WordPress mereka.

Pengaturan **Force Activate & Lock** kerjanya mirip tapi mencegah status plugin diubah oleh pelanggan. Jadi, pengaturan Force Activate dan Lock akan memaksa plugin ke status aktif dan mencegah pelanggan menonaktifkannya. Demikian pula, pengaturan **Force Inactivate & Lock** akan memaksa plugin ke status tidak aktif dan mencegah pengguna mengaktifkan plugin tersebut.

Administrator jaringan mungkin ingin mempertimbangkan pengaturan Force Activate & Lock dan Force Inactivate & Lock bersama dengan template situs sebagai plugin dan status plugin di dalam template bisa terpengaruh oleh pengaturan ini jika dipilih.

#### Batasan Reset {#reset-limitations}

Tab **Reset Limitations** akan mereset semua batasan kustom yang sudah didefinisikan pada produk. Untuk mereset batasan, klik tombol **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Untuk mengonfirmasi tindakan, geser toggle **confirm reset** ke status aktif di sebelah kanan dan klik tombol **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Edit, Duplikat, atau Hapus Produk {#edit-duplicate-or-delete-product}

Produk yang sudah ada bisa diedit, diduplikasi, atau dihapus dengan menavigasi ke **Ultimate Multisite > Products** dan mengarahkan kursor (hover) pada nama produk yang sudah ada.

![Product hover actions](/img/config/product-hover-actions.png)
