---
title: Membuat Produk Langganan Pertama Anda
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Membuat Produk Langganan Pertama Anda (v2)

_**CATATAN PENTING: Artikel ini hanya untuk pengguna Ultimate Multisite versi 2.x. Jika Anda menggunakan versi 1.x,**_ **_**lihat artikel ini**_**.

Untuk mulai menjalankan jaringan Anda dan menjual layanan kepada calon pengguna, Anda perlu menyediakan berbagai pilihan langganan. Bagaimana cara membuat produk-produk ini? Jenis produk apa saja yang bisa Anda tawarkan? Dalam artikel ini, kami akan membahas semua yang perlu Anda ketahui tentang produk.

## Jenis Produk

Dengan Ultimate Multisite, Anda dapat menawarkan dua kategori produk kepada klien: **paket langganan (plan)** dan **add-on** **(Order Bump)**. Add-on terbagi menjadi dua jenis: **paket tambahan (package)** dan **layanan (service)**. Mari kita lihat perbedaan dan keunikan masing-masing.

  * **Plan** : produk utama dari Ultimate Multisite. Klien Anda hanya bisa memiliki keanggotaan jika terhubung dengan sebuah plan. Plan memberikan klien Anda satu atau lebih situs (tergantung konfigurasi plan) dengan batasan yang Anda tetapkan di halaman pengaturan produk.

  * **Package** : add-on yang berdampak langsung pada fungsionalitas plan Ultimate Multisite. Package mengubah batasan atau menambahkan sumber daya baru, plugin, atau tema ke plan asli yang dibeli klien. Misalnya, plan dasar mungkin hanya mengizinkan 1.000 kunjungan per bulan, dan Anda bisa menyediakan package yang menambah jumlah ini menjadi 10.000.

  * **Service:** add-on yang tidak mengubah fungsionalitas Ultimate Multisite. Ini adalah tugas yang akan Anda kerjakan untuk klien sebagai tambahan dari plan yang mereka beli. Misalnya, pelanggan Anda mungkin membeli plan yang mengizinkan satu situs dan juga membayar layanan tambahan untuk mendesain situs tersebut.

## Mengelola Produk

Bagi banyak orang, tab **Products** di Ultimate Multisite **(Ultimate Multisite > Products)** bisa disamakan dengan paket hosting dalam lingkungan hosting tradisional.

Di dalam Ultimate Multisite, tab Products mendefinisikan struktur dan batasan yang berlaku untuk produk atau layanan tertentu. Struktur ini mencakup deskripsi produk atau layanan, harga, pajak, dan izin.

Bagian ini akan membantu Anda memahami fondasi penting dari Ultimate Multisite.

![Halaman daftar produk](/img/config/products-list.png)

## Menambahkan Produk

Baik itu plan, package, atau service, titik awal untuk membuat item baru adalah melalui **Ultimate Multisite > Products > Add Product**.

![Tombol Add Product](/img/config/product-add-button.png)

Antarmuka ini memiliki dua bagian utama. Di sebelah kiri terdapat beberapa tab yang membantu mendefinisikan produk, dan di sebelah kanan terdapat beberapa bagian untuk menentukan harga dasar produk, status aktif, dan gambar produk.

![Gambaran halaman edit produk](/img/config/product-edit-full.png)

### Deskripsi

Informasi dasar produk dapat ditentukan dengan mengisi nama dan deskripsi produk. Identifikasi ini ditampilkan di mana pun informasi produk diperlukan, seperti pemilihan plan dan harga, invoice, upgrade, dan sejenisnya.

![Bagian deskripsi produk](/img/config/product-description.png)

### Jenis Harga

Di sisi kanan antarmuka, harga dasar dapat ditentukan.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

Ultimate Multisite mendukung tiga jenis harga yang berbeda. Opsi **paid** meminta administrator jaringan untuk memasukkan informasi mengenai harga produk dan frekuensi penagihan.

### Harga

Komponen harga mendefinisikan harga dasar produk dan interval penagihan.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

Sebagai contoh, harga $29,99 dengan pengaturan 1 bulan akan menagih $29,99 setiap bulan. Demikian pula, harga $89,97 dengan pengaturan 3 bulan akan menagih jumlah tersebut setiap kuartal.

### Siklus Penagihan

Bagian siklus penagihan menentukan frekuensi interval penagihan yang disebutkan di atas dan umumnya dipahami dalam konteks kontrak atau jangka waktu tetap.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

Misalnya, harga produk $29,99 dengan interval 1 bulan dan 12 siklus penagihan akan menagih $29,99 per bulan untuk produk tersebut selama 12 bulan berikutnya. Dengan kata lain, pengaturan seperti ini menetapkan jangka waktu harga tetap $29,99 per bulan selama 12 bulan dan kemudian berhenti menagih.

### Periode Percobaan

Mengaktifkan toggle penawaran percobaan memungkinkan administrator jaringan untuk menentukan periode percobaan untuk produk.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

Selama periode percobaan, pelanggan bebas menggunakan produk dan tidak akan ditagih sampai periode percobaan berakhir.

### Biaya Setup

Anda juga dapat menerapkan biaya setup pada plan Anda.

![Bagian harga dan simpan](/img/config/product-pricing-save.png)

Ini berarti klien Anda akan membayar jumlah ekstra pada tagihan pertama (selain harga plan) yang sesuai dengan biaya yang Anda tentukan di bagian ini.

### Aktif

Toggle aktif secara efektif menentukan apakah produk tersedia untuk pelanggan baru yang mendaftar.

![Toggle aktif](/img/config/product-active.png)

Jika ada pelanggan yang sudah menggunakan plan ini, mengatur toggle ke status nonaktif secara efektif mempertahankan plan tersebut untuk pelanggan lama sambil menghapusnya dari pendaftaran baru. **Pelanggan yang sudah ada pada plan ini akan terus ditagih** sampai mereka dipindahkan ke plan baru atau dihapus dari plan tersebut.

### Gambar Produk

Tombol **Upload Image** memungkinkan administrator jaringan untuk menggunakan pustaka media untuk memilih atau mengunggah gambar produk.

![Bagian gambar produk](/img/config/product-image.png)

### Hapus

Tombol **Delete Product** menghapus produk dari sistem. Tombol ini muncul setelah produk dipublikasikan.

![Bagian hapus produk](/img/config/product-delete.png)

Tidak seperti penghapusan lainnya, produk tidak ditempatkan dalam status tong sampah. Jadi, setelah dihapus, tindakan ini tidak dapat dibatalkan.

### Opsi Produk

Setelah informasi dasar produk ditentukan, opsi produk membantu administrator jaringan untuk lebih lanjut mendefinisikan atribut spesifik dari produk.

#### Umum

Tab **General** mendefinisikan atribut umum produk yang tidak berlaku untuk tab khusus produk lainnya.

![Tab General](/img/config/product-general-tab.png)

**Product slug** yang sudah jelas fungsinya mendefinisikan slug yang digunakan untuk mengidentifikasi produk di URL dan area lain dari Ultimate Multisite.

Ultimate Multisite mendukung beberapa jenis produk yaitu Plan, Package, dan Service. Tab **Product Options** disesuaikan secara dinamis tergantung pada jenis produk yang ditentukan.

**Customer Role** menentukan peran yang diberikan kepada pelanggan saat situs dibuat. Biasanya untuk sebagian besar administrator jaringan, ini akan menjadi default Ultimate Multisite atau Administrator. Peran default Ultimate Multisite dapat diatur di **Ultimate Multisite > Settings > Login & Registration**.

![Pengaturan peran pelanggan](/img/config/product-customer-role-settings.png)

#### Upgrade & Downgrade

Tab ini menentukan jalur upgrade dan downgrade yang tersedia untuk pelanggan dalam tingkatan tertentu.

Untuk memahami konsep ini, pertimbangkan contoh di mana instalasi Ultimate Multisite khusus menyediakan solusi manajemen pembelajaran kepada pelanggannya. Untuk mencapai ini, tiga plan (Basic, Plus, dan Premium) ditentukan dan plugin tertentu diaktifkan untuk setiap plan (lihat nanti di bagian ini untuk instruksi cara mengaktifkan plugin).

Jika instalasi Ultimate Multisite juga melayani situs web bisnis atau situs web eCommerce, plan tersebut mungkin memerlukan plugin berbeda untuk diinstal dan diaktifkan.

Untuk itu, tidak diinginkan dan bermasalah jika memungkinkan pelanggan eLearning beralih ke plan eCommerce karena plan, harga, dan batasan ini mungkin tidak sesuai.

Oleh karena itu, untuk membatasi jalur pelanggan dan mencegah insiden, administrator jaringan dapat menentukan grup plan dan dalam grup tersebut menentukan plan yang dapat dipilih pelanggan untuk beralih.

![Tab Up and Downgrades](/img/config/product-upgrades.png)

Untuk menentukan grup plan, tentukan plan yang kompatibel dalam daftar **plan group**. **Product order** menentukan bagaimana plan diurutkan dan ditampilkan dari yang terendah ke tertinggi.

Ultimate Multisite juga menyertakan fitur **order bump** di mana produk dan layanan add-on yang sesuai dapat ditambahkan ke plan. Ini ditawarkan kepada pelanggan sebagai item tambahan yang dapat ditambahkan ke plan saat checkout atau selama upgrade.

#### Variasi Harga

Variasi harga memungkinkan administrator jaringan untuk menentukan tingkatan harga alternatif berdasarkan durasi. Pengaturan ini memungkinkan tingkatan harga 3 bulan, 6 bulan, atau tahunan ditetapkan, atau durasi dan frekuensi lainnya sesuai kebutuhan.

![Tab Price Variations](/img/config/product-price-variations.png)

Untuk membuat variasi harga, atur toggle **enable price variations** ke aktif dan klik tombol **Add new Price Variation**.

Untuk memasukkan variasi, tentukan durasi, periode, dan harga variasi. Variasi tambahan dapat dimasukkan dengan mengklik tombol tersebut lagi.

![Tab Price Variations](/img/config/product-price-variations.png)

#### Pajak

Tab **Taxes** selaras dengan pengaturan pajak yang ditentukan di **Ultimate Multisite > Settings > Taxes** dan lebih khusus lagi tarif pajak yang ditetapkan. Untuk mengaktifkan pajak dan menentukan tarif pajak yang berlaku, silakan lihat dokumentasi di **Ultimate Multisite: Settings**

![Tab Taxes](/img/config/product-taxes.png)

Dalam contoh sebelumnya, kami mendefinisikan tarif pajak lokal 7,25% yang berlaku untuk pelanggan di California (Amerika Serikat).

Setelah tarif pajak ditentukan di **Ultimate Multisite > Settings > Manage Tax Rates**, tarif tersebut dapat dipilih di tingkat produk.

![Tab Taxes](/img/config/product-taxes.png)

Untuk menunjukkan bahwa suatu produk adalah item kena pajak, atur toggle **Is Taxable** ke aktif dan pilih tarif pajak yang berlaku dari dropdown Tax Category.

#### Template Situs

Pada dasarnya, template situs adalah situs web WordPress lengkap yang dikloning ke situs pelanggan di awal langganan mereka.

![Tab Site Templates](/img/config/product-site-templates.png)

Administrator jaringan membuat dan mengonfigurasi situs template sebagai situs WordPress biasa dengan tema, plugin, dan konten yang diaktifkan dan dikonfigurasi. Situs template dikloning persis sama ke pelanggan.

Tab ini memungkinkan administrator jaringan untuk menentukan perilaku template situs saat langganan baru dibuat. Untuk menggunakan template situs, atur toggle **allow site templates** ke status aktif.

**Site template selection mode** mendefinisikan perilaku template situs selama proses langganan.

Pengaturan **Default** mengikuti langkah-langkah dalam formulir checkout. Jika administrator jaringan telah menentukan langkah pemilihan template dalam proses checkout dan langkah tersebut telah ditentukan dengan template, pengaturan ini akan menghormati arahan yang ditetapkan dalam langkah checkout.

Menentukan **Assign Site Template** memaksa pemilihan template yang ditentukan. Akibatnya, langkah pemilihan template apa pun dalam proses checkout dihapus.

Terakhir, **Choose Available Site Templates** mengganti template yang ditentukan dalam langkah checkout dengan template yang dipilih dalam pengaturan ini. Template yang dipilih sebelumnya juga dapat ditentukan untuk membantu pelanggan dalam pemilihan.

Pada akhirnya, jika administrator jaringan menginginkan pemilihan template terjadi di langkah checkout, pengaturan '_default_' sudah cukup. Sebagai alternatif, untuk menghapus dan mengunci pemilihan template dan mendelegasikan pemilihan ke pengaturan plan, opsi '_assign new template_' atau '_choose available site templates_' mungkin lebih diinginkan.

#### Situs

Tab **Sites** adalah bagian dari fungsionalitas pembatasan Ultimate Multisite.

![Tab Sites](/img/config/product-sites.png)

Pengaturan ini menentukan jumlah maksimum situs yang dapat dibuat pelanggan dalam keanggotaan mereka.

Untuk mengaktifkan pembatasan, atur toggle **limit sites** ke status aktif dan tentukan jumlah maksimum situs di field **site allowance**.

#### Kunjungan

Tab **Visits** adalah bagian lebih lanjut dari sistem pembatasan Ultimate Multisite. Pengaturan ini memungkinkan pencatatan dan pembatasan pengunjung unik ke situs pelanggan.

![Tab Visits](/img/config/product-visits.png)

Dari perspektif pemasaran, administrator jaringan dapat menggunakan pengaturan ini sebagai sarana untuk mendorong pelanggan upgrade plan mereka setelah batas tercapai. Pengaturan ini juga dapat membantu administrator jaringan untuk mengendalikan dan mencegah lalu lintas berlebihan ke situs untuk menjaga sumber daya sistem.

Untuk menggunakan fitur ini, atur toggle **limit unique visits** ke status aktif dan tentukan jumlah maksimum pengunjung unik di field **unique visits quota**.

Setelah batas ini tercapai, Ultimate Multisite akan berhenti menampilkan situs pelanggan dan sebagai gantinya menampilkan pesan yang menunjukkan bahwa batas telah terlampaui.

#### Pengguna

Pembatasan 'Users' Ultimate Multisite memungkinkan administrator jaringan untuk membatasi jumlah pengguna yang dapat dibuat dan ditetapkan ke peran tertentu.

![Tab Users](/img/config/product-users.png)

Untuk mengaktifkan fitur pembatasan, atur toggle **limit user** ke status aktif dengan menggesernya ke kanan.

Selanjutnya, untuk setiap peran yang akan dibatasi, atur toggle di sampingnya ke status aktif dan tentukan batas maksimum di field yang sesuai.

#### Jenis Posting

Tab **Post Types** memungkinkan administrator jaringan untuk memberlakukan batasan terperinci pada berbagai jenis posting dalam WordPress.

![Tab Post Types](/img/config/product-post-types.png)

Karena konstruksi WordPress, posting dan jenis posting adalah komponen signifikan dari fungsionalitas intinya, dan oleh karena itu sistem pembatasan Ultimate Multisite dirancang untuk membantu administrator jaringan dalam menetapkan dan memelihara batasan.

Untuk mengaktifkan subsistem pembatasan ini, atur toggle **limit post types** ke status aktif dengan menggesernya ke kanan.

Selanjutnya, untuk setiap jenis posting yang akan dibatasi, aktifkan dengan menggesernya ke kanan dan tentukan batas maksimum di field yang sesuai.

#### Ruang Disk

Tab **Disk Space** memungkinkan administrator jaringan untuk membatasi ruang yang digunakan oleh pelanggan.

![Tab Disk Space](/img/config/product-disk-space.png)

Biasanya dalam WordPress multisite, file inti dibagikan di antara semua situs dan direktori individual dibuat untuk file media dan unggahan yang mana pengaturan dan pembatasan ini berlaku.

Untuk mengaktifkan pembatasan penggunaan disk, atur toggle **limit disk size per site** ke status aktif dengan menggesernya ke kanan.

Selanjutnya, tentukan batas maksimum dalam megabyte di field **disk space allowance**.

#### Domain Kustom

Dengan mengaktifkan opsi ini, Anda dapat mengizinkan domain kustom pada plan ini secara khusus.

![Tab Custom Domains](/img/config/product-custom-domains.png)

#### Tema

Tab **Themes** dalam opsi produk memungkinkan administrator jaringan untuk menyediakan tema kepada pelanggan untuk dipilih dan secara opsional memaksa status tema.

![Tab Themes](/img/config/product-themes.png)

_**Catatan: Agar tema tersedia untuk pelanggan, tema harus diaktifkan di jaringan oleh administrator jaringan.**_

![Halaman tema jaringan](/img/config/product-themes-network-enabled.png)

Opsi **visibility** mendefinisikan apakah tema ini terlihat oleh pelanggan saat melihat tab **Appearance > Themes** di dalam situs mereka. Mengatur opsi ini ke **Hidden** menghapus tema dari tampilan dan dengan demikian membatasi kemampuan untuk memilih dan mengaktifkannya.

![Tab Themes](/img/config/product-themes.png)

Pilihan **behavior** memungkinkan administrator jaringan untuk menentukan status tema saat pembuatan situs pelanggan.

Dalam status **Available**, tema tersedia untuk pelanggan untuk diaktifkan sendiri. Sebaliknya, status **Not Available** menghapus kemampuan pelanggan untuk mengaktifkan tema. Terakhir, opsi **Force Activate** memaksa pemilihan dan aktivasi tema sehingga menetapkannya sebagai default saat pembuatan situs.

#### Plugin

Mirip dengan tab Themes, Ultimate Multisite memungkinkan administrator jaringan untuk menentukan visibilitas plugin kepada pelanggan serta statusnya saat pembuatan situs baru.

![Tab Plugins](/img/config/product-plugins.png)

Dropdown **visibility** memungkinkan plugin untuk terlihat atau disembunyikan dari pelanggan saat dilihat di situs mereka melalui opsi menu Plugins.

Administrator jaringan dapat lebih lanjut memanipulasi perilaku plugin dengan menggunakan opsi di dropdown behavior.

![Tab Plugins](/img/config/product-plugins.png)

Pilihan **Default** menghormati status plugin yang ditentukan dalam template situs yang dipilih oleh pelanggan. Dengan demikian, plugin yang diaktifkan dalam template akan tetap aktif saat template dikloning ke situs pelanggan.

**Force Activate** menempatkan plugin dalam status aktif saat pembuatan situs dan sebaliknya **Force Inactivate** menonaktifkan plugin saat pembuatan situs. Dalam kedua keadaan ini, status plugin dapat diubah secara manual oleh pelanggan melalui menu Plugins WordPress mereka.

Pengaturan **Force Activate & Lock** beroperasi serupa tetapi mencegah status plugin diubah oleh pelanggan. Dengan demikian, pengaturan Force Activate and Lock akan memaksa plugin ke status aktifnya dan mencegah pelanggan menonaktifkannya. Demikian pula, pengaturan **Force Inactivate & Lock** akan memaksa plugin ke status tidak aktif dan mencegah pengguna mengaktifkan plugin.

Administrator jaringan mungkin ingin mempertimbangkan pengaturan Force Activate & Lock dan Force Inactivate & Lock bersamaan dengan template situs karena plugin dan status plugin dalam template mungkin terpengaruh oleh pengaturan ini jika dipilih.

#### Reset Pembatasan

Tab **Reset Limitations** mereset semua batasan kustom yang ditentukan pada produk. Untuk mereset pembatasan, klik tombol **reset limitations**.

![Tab Reset Limitations](/img/config/product-reset-limitations.png)

Untuk mengonfirmasi tindakan, geser toggle **confirm reset** ke status aktif di sebelah kanan dan klik tombol **reset limitations**.

![Tab Reset Limitations](/img/config/product-reset-limitations.png)

## Edit, Duplikat, atau Hapus Produk

Produk yang sudah ada dapat diedit, diduplikasi, atau dihapus dengan menavigasi ke **Ultimate Multisite > Products** dan mengarahkan kursor ke nama produk yang ada.

![Aksi hover produk](/img/config/product-hover-actions.png)
