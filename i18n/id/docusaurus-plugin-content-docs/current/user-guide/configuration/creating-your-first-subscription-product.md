---
title: Membuat Produk Langganan Pertama Anda
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Membuat Produk Subscription Pertama Anda (v2) {#creating-your-first-subscription-product-v2}

_**CATATAN PENTING: Artikel ini hanya untuk pengguna Ultimate Multisite versi 2.x. Jika Anda menggunakan versi 1.x,**_ **_**lihat artikel ini**_**.

Untuk mulai menjalankan jaringan Anda dan mulai menjual layanan Anda kepada calon pengguna, Anda perlu memiliki berbagai opsi subscription. Bagaimana cara membuat produk-produk ini? Apa saja jenis produk yang dapat Anda tawarkan? Dalam artikel ini, kami akan membahas semua yang perlu Anda ketahui tentang produk.

## Jenis Produk {#product-type}

Dengan Ultimate Multisite Anda dapat menawarkan dua kategori produk kepada klien Anda: **plan** dan **add-on** **(Order Bump)**. Add-on dapat dibagi menjadi dua jenis:**paket** dan **layanan**. Kita akan melihat perbedaan dan kekhususannya berikutnya.

  * **Plan** : produk fundamental dari Ultimate Multisite. Klien Anda hanya dapat memiliki membership jika terhubung ke sebuah plan. Sebuah plan menyediakan satu atau beberapa situs untuk klien Anda (tergantung pada konfigurasi plan Anda) dengan batasan yang Anda tetapkan di halaman pengeditan produk Anda.

  * **Paket** : add-on yang berdampak langsung pada fungsionalitas plan Ultimate Multisite. Paket mengubah batasan atau menambahkan sumber daya, plugin, atau theme baru ke plan asli yang dibeli klien Anda. Misalnya, sebuah plan dasar mungkin mengizinkan 1.000 kunjungan per bulan dan Anda dapat menyediakan paket yang memperluas jumlah ini menjadi 10.000.

  * **Layanan:** add-on yang tidak mengubah fungsionalitas Ultimate Multisite. Ini adalah tugas yang akan Anda lakukan untuk klien Anda selain plan yang mereka beli. Misalnya, pelanggan Anda mungkin membeli plan yang mengizinkan satu situs dan juga membayar layanan tambahan yang akan membuat desain situs ini.

## Mengelola Produk {#managing-products}

Bagi banyak orang, tab **Products** di Ultimate Multisite **(Ultimate Multisite > Products)** dapat disamakan dengan plan dalam lingkungan hosting tradisional.

Di dalam Ultimate Multisite, tab Products mendefinisikan struktur dan batasan yang berlaku untuk produk atau layanan tertentu. Struktur tersebut mencakup deskripsi produk atau layanan, harga, pajak, dan izin.

Bagian ini akan memandu pemahaman Anda tentang landasan penting Ultimate Multisite ini.

![Halaman daftar produk](/img/config/products-list.png)

## Menambahkan Produk {#adding-products}

Baik itu plan, paket, maupun layanan, titik masuk untuk mendefinisikan item baru adalah melalui **Ultimate Multisite > Products > Add Product**.

![Tombol Tambah Produk](/img/config/product-add-button.png)

Antarmuka ini berisi dua bagian utama. Di sebelah kiri terdapat beberapa tab yang membantu mendefinisikan produk dan di sebelah kanan terdapat beberapa bagian untuk mendefinisikan harga dasar produk, status aktifnya, dan gambar produk.

![Ikhtisar halaman edit produk](/img/config/product-edit-full.png)

### Deskripsi {#description}

Informasi produk dasar dapat didefinisikan dengan menyediakan nama produk dan deskripsi. Pengenal ini ditampilkan di mana pun informasi produk diperlukan seperti pemilihan plan dan harga, faktur, upgrade, dan sejenisnya.

![Bagian deskripsi produk](/img/config/product-description.png)

### Jenis Harga {#pricing-type}

Di sisi kanan antarmuka, harga dasar dapat didefinisikan.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

Ultimate Multisite mendukung tiga jenis harga berbeda. Opsi **berbayar** meminta administrator jaringan untuk informasi terkait harga produk dan frekuensi penagihan.

### Harga {#pricing}

Komponen harga mendefinisikan harga dasar produk dan interval penagihan.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

dengan demikian contoh harga $29.99 dengan pengaturan 1 bulan akan menagih $29.99 setiap bulan. Demikian pula, harga $89.97 dengan pengaturan 3 bulan akan menagih jumlah tersebut setiap kuartal.

### Siklus Penagihan {#billing-cycles}

Bagian siklus penagihan menentukan frekuensi interval penagihan yang disebutkan sebelumnya dan umumnya dipahami dalam konteks kontrak atau jangka waktu tetap.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

Misalnya, harga produk $29.99 dengan interval 1 bulan dan 12 siklus penagihan akan menagih $29.99 per bulan untuk produk selama 12 bulan berikutnya. Dengan kata lain, pengaturan seperti itu akan menetapkan jangka waktu harga tetap sebesar $29.99 per bulan selama 12 bulan lalu menghentikan penagihan.

### Periode Uji Coba {#trial-period}

Mengaktifkan toggle penawaran uji coba memungkinkan administrator jaringan mendefinisikan periode uji coba untuk produk.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

Selama periode uji coba, pelanggan bebas menggunakan produk dan tidak akan ditagih sampai periode uji coba telah berakhir.

### Biaya Setup {#setup-fee}

Anda juga dapat menerapkan biaya setup ke plan Anda.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

Ini berarti bahwa klien Anda akan membayar jumlah ekstra pada tagihan pertama (selain harga plan) yang sesuai dengan biaya yang Anda definisikan di bagian ini.

### Aktif {#active}

Toggle aktif secara efektif mendefinisikan apakah produk tersedia bagi pelanggan untuk pendaftaran baru.

![Toggle aktif](/img/config/product-active.png)

Jika ada pelanggan yang sudah ada pada plan ini, mengatur toggle ke status nonaktifnya secara efektif mempertahankan plan untuk pelanggan lama sambil menghapusnya dari pendaftaran mendatang. **Pelanggan yang sudah ada pada plan akan terus ditagih** sampai mereka dipindahkan ke plan baru atau dihapus dari plan tersebut.

### Gambar Produk {#product-image}

Tombol **Upload Image** memungkinkan administrator jaringan menggunakan pustaka media untuk memilih atau mengunggah gambar produk.

![Bagian gambar produk](/img/config/product-image.png)

### Hapus {#delete}

Tombol **Delete Product** menghapus produk dari sistem. Tombol ini muncul setelah produk dipublikasikan.

![Bagian hapus produk](/img/config/product-delete.png)

Tidak seperti penghapusan lainnya, produk tidak ditempatkan dalam status sampah apa pun. Jadi setelah dihapus, tindakan ini tidak dapat dibatalkan.

### Opsi Produk {#product-options}

Setelah informasi produk tingkat dasar ditentukan, opsi produk membantu administrator jaringan untuk mendefinisikan lebih lanjut atribut spesifik produk tersebut.

#### Umum {#general}

Tab **Umum** mendefinisikan atribut umum produk yang tidak berlaku untuk tab khusus produk lainnya.

![Tab Umum](/img/config/product-general-tab.png)

**Slug produk** yang sudah jelas maksudnya mendefinisikan slug yang digunakan untuk mengidentifikasi produk dalam URL dan area lain di Ultimate Multisite.

Ultimate Multisite mendukung beberapa jenis produk, yaitu Paket, Paket Bundel, dan Layanan. Tab **Opsi Produk** disesuaikan secara dinamis tergantung pada jenis produk yang ditentukan.

**Peran Pelanggan** menentukan peran yang diberikan kepada pelanggan saat situs dibuat. Biasanya bagi sebagian besar administrator jaringan, ini akan berupa default Ultimate Multisite atau Administrator. Peran default Ultimate Multisite dapat diatur di **Ultimate Multisite > Settings > Login & Registration**.

![Pengaturan peran pelanggan](/img/config/product-customer-role-settings.png)

#### Upgrade & Downgrade {#up--downgrades}

Tab ini menentukan jalur upgrade dan downgrade yang tersedia bagi pelanggan dalam tingkat spesifik mereka.

Untuk memahami konsep ini, pertimbangkan contoh ketika sebuah instalasi Ultimate Multisite khusus menyediakan solusi manajemen pembelajaran bagi pelanggannya. Untuk mencapai hal ini, tiga paket (Basic, Plus, dan Premium) didefinisikan dan plugin tertentu diaktifkan untuk setiap paket (lihat nanti di bagian ini untuk instruksi tentang cara mengaktifkan plugin).

Jika instalasi Ultimate Multisite juga melayani situs web bisnis atau situs web eCommerce, paket-paket tersebut mungkin memerlukan plugin yang berbeda untuk diinstal dan diaktifkan.

Dalam hal ini, akan tidak diinginkan dan bermasalah jika pelanggan eLearning diizinkan beralih ke paket eCommerce karena paket, harga, dan batasannya mungkin tidak sesuai.

Karena itu, untuk membatasi jalur pelanggan dan mencegah insiden, administrator jaringan dapat mendefinisikan grup paket dan di dalam grup tersebut menentukan paket yang dapat dipindahi oleh pelanggan.

![Tab Upgrade dan Downgrade](/img/config/product-upgrades.png)

Untuk mendefinisikan grup paket, tentukan paket yang kompatibel dalam daftar **grup paket**. **urutan produk** menentukan bagaimana paket diurutkan dan ditampilkan dari yang terendah hingga tertinggi.

Ultimate Multisite juga menyertakan fitur **order bump** di mana produk dan layanan add-on yang sesuai dapat ditambahkan ke paket. Ini ditawarkan kepada pelanggan sebagai item tambahan yang dapat ditambahkan ke paket saat pembayaran atau selama upgrade.

#### Variasi Harga {#price-variations}

Variasi harga memungkinkan administrator jaringan untuk menentukan tingkat harga alternatif tergantung pada durasi. Pengaturan ini memungkinkan periode penagihan bulanan, triwulanan, tahunan, atau periode penagihan lainnya ditawarkan untuk produk yang sama. Misalnya, Anda dapat menyiapkan produk seharga $29.99/bulan dengan opsi tahunan berdiskon seharga $249.99/tahun.

![Tab Variasi Harga](/img/config/product-price-variations-tab.png)

Untuk membuat variasi harga, atur toggle **Aktifkan Variasi Harga** menjadi aktif dan klik tombol **Tambah Variasi Harga baru**.

![Variasi harga produk](/img/config/product-price-variations.png)

Untuk memasukkan variasi, atur durasi, periode, dan harga variasi. Variasi tambahan dapat dimasukkan dengan mengeklik tombol tersebut lagi.

Misalnya, jika harga produk dasar Anda adalah $29.99 per bulan, Anda dapat menambahkan:

  * **3 Bulan** seharga $79.99 (diskon kecil dibandingkan bulanan)
  * **1 Tahun** seharga $249.99 (diskon signifikan untuk komitmen tahunan)

:::tip Menampilkan Toggle Periode Penagihan di Frontend

Variasi harga saja tidak menambahkan toggle atau switch ke pembayaran frontend. Agar pelanggan dapat beralih antarperiode penagihan (mis. Bulanan / Tahunan), Anda perlu menambahkan field **Pemilihan Periode** ke formulir pembayaran Anda. Lihat [Formulir Pembayaran: Menambahkan Toggle Pemilihan Periode](checkout-forms#adding-a-period-selection-toggle) untuk instruksi langkah demi langkah.
:::

#### Pajak {#taxes}

Tab **Pajak** selaras dengan pengaturan pajak yang ditentukan di **Ultimate Multisite > Settings > Taxes** dan lebih khusus lagi tarif pajak yang didefinisikan. Untuk mengaktifkan pajak dan menentukan tarif pajak yang berlaku, silakan lihat dokumentasi di **Ultimate Multisite: Settings**

![Tab Pajak](/img/config/product-taxes.png)

Dalam contoh sebelumnya, kami mendefinisikan tarif pajak lokal sebesar 7.25% yang berlaku untuk pelanggan di California (Amerika Serikat).

Setelah tarif pajak didefinisikan di **Ultimate Multisite > Settings > Manage Tax Rates**, tarif tersebut dapat dipilih pada tingkat produk.

![Tab Pajak](/img/config/product-taxes.png)

Untuk menunjukkan bahwa suatu produk adalah item yang dikenakan pajak, atur toggle **Dikenakan Pajak** menjadi aktif dan pilih tarif pajak yang berlaku dari dropdown Kategori Pajak.

#### Templat Situs {#site-templates}

Pada dasarnya, templat situs adalah situs web WordPress lengkap yang dikloning ke situs pelanggan pada awal langganan mereka.

![Tab Templat Situs](/img/config/product-site-templates.png)

Administrator jaringan membuat dan mengonfigurasi situs templat sebagai situs WordPress biasa dengan tema, plugin, dan konten yang telah diaktifkan dan dikonfigurasi. Situs templat dikloning secara persis ke pelanggan.

Tab ini memungkinkan administrator jaringan menentukan perilaku templat situs saat langganan baru dibuat. Untuk menggunakan templat situs bagi paket ini, atur toggle **Izinkan Templat Situs** ke status aktif.

Ketika **Izinkan Templat Situs** dinonaktifkan, pelanggan pada paket tersebut tidak dapat memilih templat meskipun formulir pembayaran, tautan yang dapat dibagikan, atau parameter URL seharusnya membuat templat tersedia. Ultimate Multisite kini memberlakukan batas ini melalui rantai fallback di seluruh titik masuk yang tersedia: pengaturan paket diperiksa terlebih dahulu, lalu pengaturan templat formulir pembayaran, lalu templat yang telah dipilih sebelumnya atau disediakan melalui URL. Ini menjaga batas paket tetap konsisten dan mencegah templat muncul untuk produk yang seharusnya tidak menawarkannya.

**Mode pemilihan template situs** menentukan perilaku template situs selama proses langganan.

Pengaturan **D** **efault** mengikuti langkah-langkah dalam formulir checkout. Jika administrator jaringan telah menentukan langkah pemilihan template dalam proses checkout dan langkah tersebut telah ditentukan dengan template, pengaturan ini akan menghormati arahan yang ditetapkan dalam langkah checkout.

Menentukan **A** **ssign Site Template** memaksa pemilihan template yang ditentukan. Akibatnya, setiap langkah pemilihan template dalam proses checkout dihapus.

Terakhir, **C** **hoose Available Site Templates** mengganti template yang ditentukan dalam langkah checkout dengan template yang dipilih dalam pengaturan ini. Template yang telah dipilih sebelumnya juga dapat ditentukan untuk membantu pelanggan dalam pemilihan.

Pada akhirnya, jika administrator jaringan menginginkan pemilihan template terjadi dalam langkah-langkah checkout, pengaturan ' _default_ ' sudah cukup. Sebagai alternatif, untuk menghapus dan mengunci pemilihan template serta mendelegasikan pemilihan ke pengaturan paket, opsi ' _assign new template_ ' atau ' _choose available site templates_ ' mungkin diinginkan.

#### Situs {#sites}

Tab **Situs** adalah bagian dari fungsionalitas batasan Ultimate Multisite.

![Tab Situs](/img/config/product-sites.png)

Pengaturan ini menentukan jumlah maksimum situs yang dapat dibuat pelanggan di bawah membership mereka.

Untuk mengaktifkan batasan, atur toggle **batasi situs** ke status aktif dan tentukan jumlah maksimum situs di field **jatah situs**.

#### Kunjungan {#visits}

Tab **Kunjungan** adalah bagian lebih lanjut dari sistem batasan Ultimate Multisite. Pengaturan ini memungkinkan pencatatan dan kemudian pembatasan pengunjung unik ke situs pelanggan.

![Tab Kunjungan](/img/config/product-visits.png)

Dari perspektif pemasaran jaringan, administrator dapat menggunakan pengaturan ini sebagai sarana untuk mendorong pelanggan meningkatkan paket mereka setelah batas tercapai. Pengaturan ini juga dapat membantu administrator jaringan mengekang dan mencegah lalu lintas berlebihan ke situs untuk menjaga sumber daya sistem.

Untuk menggunakan fitur ini, atur toggle **batasi kunjungan unik** ke status aktif dan tentukan jumlah maksimum pengunjung unik di field **kuota kunjungan unik**.

Setelah batas ini tercapai, Ultimate Multisite akan berhenti melayani situs pelanggan alih-alih menampilkan pesan untuk menunjukkan bahwa batas telah terlampaui.

#### Pengguna {#users}

Batasan 'Pengguna' Ultimate Multisite memungkinkan administrator jaringan memberlakukan batas pada jumlah pengguna yang dapat dibuat dan ditetapkan ke role.

![Tab Pengguna](/img/config/product-users.png)

Untuk mengaktifkan fitur batasan, atur toggle **batasi pengguna** ke status aktif dengan menggesernya ke kanan.

Selanjutnya, untuk setiap role yang akan dibatasi, atur toggle di sebelahnya ke status aktif dan tentukan batas atas maksimum di field yang sesuai.

#### Tipe Post {#post-types}

Tab **Tipe Post** memungkinkan administrator jaringan memberlakukan batas granular pada beragam tipe post dalam WordPress.

![Tab Tipe Post](/img/config/product-post-types.png)

Karena konstruksi WordPress, post dan tipe post merupakan komponen penting dari fungsionalitas intinya, sehingga sistem batasan Ultimate Multisite dirancang untuk membantu administrator jaringan dalam menetapkan dan mempertahankan batas.

Untuk mengaktifkan subsistem batas ini, atur toggle **batasi tipe post** ke status aktif dengan menggesernya ke kanan.

Selanjutnya, untuk setiap tipe post yang akan dibatasi, aktifkan toggle dengan menggesernya ke kanan dan menentukan batas atas maksimum di field yang sesuai.

#### Ruang Disk {#disk-space}

Tab **Ruang Disk** memungkinkan administrator jaringan membatasi ruang yang digunakan oleh pelanggan.

![Tab Ruang Disk](/img/config/product-disk-space.png)

Biasanya dalam multisite WordPress, file inti dibagikan di antara semua situs dan direktori individual dibuat untuk file media dan unggahan yang menjadi tempat pengaturan dan batasan ini berlaku.

Untuk mengaktifkan batasan penggunaan disk, atur toggle **batasi ukuran disk per situs** ke status aktif dengan menggesernya ke kanan.

Selanjutnya, tentukan batas atas maksimum dalam megabita di field **jatah ruang disk**.

#### Domain Kustom {#custom-domain}

Dengan mengaktifkan opsi ini, Anda dapat mengizinkan domain kustom pada paket ini secara khusus.

![Tab Domain Kustom](/img/config/product-custom-domains.png)

#### Tema {#themes}

Tab **Tema** dalam opsi produk memungkinkan administrator jaringan menyediakan tema bagi pelanggan untuk dipilih dan secara opsional memaksakan status tema.

![Tab Tema](/img/config/product-themes.png)

_**Catatan: Agar tema dapat tersedia bagi pelanggan, tema tersebut harus diaktifkan jaringan oleh administrator jaringan.**_

![Halaman tema jaringan](/img/config/product-themes-network-enabled.png)

Opsi **visibilitas** menentukan apakah tema ini terlihat atau tidak oleh pelanggan saat melihat tab **Appearance > Themes** mereka di dalam situs mereka. Mengatur opsi ini ke **Tersembunyi** menghapus tema dari tampilan dan dengan demikian membatasi kemampuan untuk memilih dan mengaktifkannya.

![Tab Tema](/img/config/product-themes.png)

Pilihan **perilaku** memungkinkan administrator jaringan menentukan status tema saat pembuatan situs pelanggan.

Dalam status **A** **vailable**, tema dibuat tersedia bagi pelanggan untuk aktivasi mandiri. Sebaliknya, status **Tidak Tersedia** menghapus kemampuan pelanggan untuk mengaktifkan tema. Terakhir, opsi **Paksa Aktifkan** memaksa pemilihan dan aktivasi tema sehingga menetapkannya sebagai default saat pembuatan situs.

#### Plugin {#plugins}

Mirip dengan tab Tema, Ultimate Multisite memungkinkan administrator jaringan menentukan visibilitas plugin bagi pelanggan serta statusnya saat pembuatan situs baru.

![Tab Plugin](/img/config/product-plugins.png)

Drop-down **visibilitas** memungkinkan plugin terlihat atau disembunyikan dari pelanggan saat dilihat di situs mereka melalui opsi menu Plugins.

Administrator jaringan dapat lebih lanjut memanipulasi perilaku plugin dengan menggunakan opsi dalam drop-down perilaku.

![Tab plugin](/img/config/product-plugins.png)

Pilihan **Default** mengikuti status plugin yang ditentukan dalam templat situs yang dipilih oleh pelanggan. Dengan demikian, plugin yang diaktifkan dalam templat akan tetap aktif ketika templat dikloning ke situs pelanggan.

**Force Activate** menempatkan plugin dalam status aktif saat pembuatan situs dan sebaliknya **Force Inactivate** menonaktifkan plugin saat pembuatan situs. Dalam kedua situasi ini, status plugin dapat diubah secara manual oleh pelanggan melalui menu Plugin WordPress mereka.

Pengaturan **Force Activate & Lock** beroperasi serupa tetapi mencegah status plugin diubah oleh pelanggan. Dengan demikian, pengaturan Force Activate and Lock akan memaksa plugin ke status aktifnya dan mencegah pelanggan menonaktifkannya. Demikian pula, pengaturan **Force Inactivate & Lock** akan memaksa plugin ke status tidak aktifnya dan mencegah pengguna mengaktifkan plugin.

Administrator jaringan mungkin ingin mempertimbangkan pengaturan Force Activate & Lock dan Force Inactivate & Lock bersama dengan templat situs karena plugin dan status plugin dalam templat dapat terpengaruh oleh pengaturan ini jika dipilih.

#### Reset Batasan {#reset-limitations}

Tab **Reset Limitations** mereset semua batas khusus yang ditentukan pada produk. Untuk mereset batasan, klik tombol **reset limitations**.

![Tab Reset Limitations](/img/config/product-reset-limitations.png)

Untuk mengonfirmasi tindakan, geser toggle **confirm reset** ke status aktifnya di sebelah kanan dan klik tombol **reset limitations**.

![Tab Reset Limitations](/img/config/product-reset-limitations.png)

## Edit, Gandakan, atau Hapus Produk {#edit-duplicate-or-delete-product}

Produk yang sudah ada dapat diedit, digandakan, atau dihapus dengan membuka **Ultimate Multisite > Products** dan mengarahkan kursor ke nama produk yang sudah ada.

![Tindakan hover produk](/img/config/product-hover-actions.png)
