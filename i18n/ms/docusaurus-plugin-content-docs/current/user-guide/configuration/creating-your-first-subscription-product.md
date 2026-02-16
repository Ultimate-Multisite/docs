---
title: Mencipta Produk Langganan Pertama Anda
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Mencipta Produk Langganan Pertama Anda (v2)

_**NOTA PENTING: Artikel ini hanya untuk pengguna Ultimate Multisite versi 2.x. Jika anda menggunakan versi 1.x,**_ **_**lihat artikel ini**_**.

Untuk mula mengendalikan rangkaian anda dan menjual perkhidmatan kepada bakal pengguna, anda perlu mempunyai pelbagai pilihan langganan. Bagaimana anda mencipta produk ini? Apakah jenis produk yang boleh anda tawarkan? Dalam artikel ini, kami akan membincangkan semua yang anda perlu tahu tentang produk.

## Jenis Produk

Dengan Ultimate Multisite, anda boleh menawarkan dua kategori produk kepada pelanggan anda: **pelan** dan **add-on** **(Order Bump)**. Add-on boleh dibahagikan kepada dua jenis: **pakej** dan **perkhidmatan**. Kita akan lihat perbezaan dan ciri-ciri khusus mereka seterusnya.

  * **Pelan**: produk asas Ultimate Multisite. Pelanggan anda hanya boleh mempunyai keahlian jika ia dikaitkan dengan sesuatu pelan. Pelan menyediakan pelanggan anda dengan satu atau lebih laman web (bergantung pada konfigurasi pelan anda) dengan had yang anda tetapkan di halaman penyuntingan produk.

  * **Pakej**: add-on yang memberi kesan langsung kepada fungsi pelan Ultimate Multisite. Ia mengubah had atau menambah sumber, plugin atau tema baharu kepada pelan asal yang dibeli oleh pelanggan anda. Sebagai contoh, pelan asas mungkin membenarkan 1,000 lawatan sebulan dan anda boleh menyediakan pakej yang meningkatkan jumlah ini kepada 10,000.

  * **Perkhidmatan**: add-on yang tidak mengubah fungsi Ultimate Multisite. Ia adalah tugas yang akan anda lakukan untuk pelanggan anda sebagai tambahan kepada pelan yang mereka beli. Sebagai contoh, pelanggan anda mungkin membeli pelan yang membenarkan satu laman web dan juga membayar untuk perkhidmatan tambahan yang akan mereka bentuk laman web tersebut.

## Mengurus Produk

Bagi ramai orang, tab **Products** dalam Ultimate Multisite **(Ultimate Multisite > Products)** boleh disamakan dengan pelan dalam persekitaran hosting tradisional.

Dalam Ultimate Multisite, tab Products mentakrifkan struktur dan had yang berkenaan dengan produk atau perkhidmatan tertentu. Struktur ini merangkumi penerangan produk atau perkhidmatan, harga, cukai dan kebenaran.

Bahagian ini akan membantu anda memahami asas penting Ultimate Multisite ini.

![Halaman senarai produk](/img/config/products-list.png)

## Menambah Produk

Sama ada pelan, pakej atau perkhidmatan, titik permulaan untuk mentakrifkan item baharu adalah melalui **Ultimate Multisite > Products > Add Product**.

![Butang Add Product](/img/config/product-add-button.png)

Antara muka ini mengandungi dua bahagian utama. Di sebelah kiri terdapat beberapa tab yang membantu dengan definisi produk dan di sebelah kanan terdapat beberapa bahagian untuk mentakrifkan harga asas produk, status aktifnya dan imej produk.

![Gambaran keseluruhan halaman penyuntingan produk](/img/config/product-edit-full.png)

### Penerangan

Maklumat asas produk boleh ditakrifkan dengan menyediakan nama dan penerangan produk. Pengecam ini dipaparkan di mana-mana sahaja maklumat produk diperlukan seperti pemilihan pelan dan harga, invois, naik taraf dan sebagainya.

![Bahagian penerangan produk](/img/config/product-description.png)

### Jenis Harga

Di sebelah kanan antara muka, harga asas boleh ditakrifkan.

![Bahagian harga dan simpan](/img/config/product-pricing-save.png)

Ultimate Multisite menyokong tiga jenis harga yang berbeza. Pilihan **berbayar** meminta pentadbir rangkaian untuk maklumat mengenai harga produk dan kekerapan pengebilan.

### Harga

Komponen harga mentakrifkan harga asas produk dan selang pengebilan.

![Bahagian harga dan simpan](/img/config/product-pricing-save.png)

oleh itu contoh harga $29.99 dengan tetapan 1 bulan akan mengenakan caj $29.99 setiap bulan. Begitu juga, harga $89.97 dengan tetapan 3 bulan akan mengenakan caj jumlah tersebut setiap suku tahun.

### Kitaran Pengebilan

Bahagian kitaran pengebilan menentukan kekerapan selang pengebilan yang disebutkan di atas dan secara amnya difahami dalam konteks kontrak atau tempoh tetap.

![Bahagian harga dan simpan](/img/config/product-pricing-save.png)

Sebagai contoh, harga produk $29.99 dengan selang 1 bulan dan 12 kitaran pengebilan akan mengenakan caj $29.99 sebulan untuk produk tersebut selama 12 bulan berikutnya. Dalam erti kata lain, tetapan sedemikian akan menetapkan tempoh harga tetap $29.99 sebulan selama 12 bulan dan kemudian menghentikan pengebilan.

### Tempoh Percubaan

Mengaktifkan togol tawaran percubaan membolehkan pentadbir rangkaian mentakrifkan tempoh percubaan untuk produk tersebut.

![Bahagian harga dan simpan](/img/config/product-pricing-save.png)

Semasa tempoh percubaan, pelanggan bebas menggunakan produk dan tidak akan dikenakan caj sehingga tempoh percubaan tamat.

### Yuran Persediaan

Anda juga boleh mengenakan yuran persediaan pada pelan anda.

![Bahagian harga dan simpan](/img/config/product-pricing-save.png)

Ini bermakna pelanggan anda akan membayar jumlah tambahan pada caj pertama (sebagai tambahan kepada harga pelan) yang sepadan dengan yuran yang anda takrifkan dalam bahagian ini.

### Aktif

Togol aktif menentukan sama ada produk tersedia kepada pelanggan untuk pendaftaran baharu.

![Togol aktif](/img/config/product-active.png)

Jika terdapat pelanggan sedia ada pada pelan ini, menetapkan togol kepada keadaan tidak aktif secara efektif mengekalkan pelan tersebut untuk pelanggan lama sambil mengalih keluarnya daripada pendaftaran akan datang. **Pelanggan sedia ada pada pelan akan terus dikenakan caj** sehingga mereka dipindahkan ke pelan baharu atau dialih keluar daripada pelan tersebut.

### Imej Produk

Butang **Upload Image** membolehkan pentadbir rangkaian menggunakan pustaka media untuk memilih atau memuat naik imej produk.

![Bahagian imej produk](/img/config/product-image.png)

### Padam

Butang **Delete Product** memadam produk daripada sistem. Ia muncul sebaik sahaja produk diterbitkan.

![Bahagian padam produk](/img/config/product-delete.png)

Tidak seperti pemadaman lain, produk tidak diletakkan dalam keadaan tong sampah. Oleh itu, sebaik sahaja dipadam, tindakan tersebut tidak boleh dibatalkan.

### Pilihan Produk

Sebaik sahaja maklumat asas produk ditakrifkan, pilihan produk membantu pentadbir rangkaian untuk mentakrifkan lagi atribut khusus produk tersebut.

#### Am

Tab **General** mentakrifkan atribut am produk yang tidak berkenaan dengan mana-mana tab khusus produk yang lain.

![Tab General](/img/config/product-general-tab.png)

**Product slug** yang jelas sendiri mentakrifkan slug yang digunakan untuk mengenal pasti produk dalam URL dan kawasan lain dalam Ultimate Multisite.

Ultimate Multisite menyokong beberapa jenis produk iaitu Plan, Package dan Service. Tab **Product Options** diselaraskan secara dinamik bergantung pada jenis produk yang ditentukan.

**Customer Role** menentukan peranan yang diberikan kepada pelanggan apabila laman web dicipta. Lazimnya bagi kebanyakan pentadbir rangkaian, ini akan menjadi lalai Ultimate Multisite atau Administrator. Peranan lalai Ultimate Multisite boleh ditetapkan dalam **Ultimate Multisite > Settings > Login & Registration**.

![Tetapan peranan pelanggan](/img/config/product-customer-role-settings.png)

#### Naik & Turun Taraf

Tab ini menentukan laluan naik taraf dan turun taraf yang tersedia kepada pelanggan dalam peringkat khusus mereka.

Untuk memahami konsep ini, pertimbangkan contoh di mana pemasangan Ultimate Multisite khusus menyediakan penyelesaian pengurusan pembelajaran kepada pelanggannya. Untuk mencapai ini, tiga pelan (Basic, Plus dan Premium) ditakrifkan dan plugin khusus diaktifkan untuk setiap pelan (lihat kemudian dalam bahagian ini untuk arahan tentang cara mengaktifkan plugin).

Jika pemasangan Ultimate Multisite juga menyediakan perkhidmatan untuk laman web perniagaan atau laman web eCommerce, pelan tersebut mungkin memerlukan plugin berbeza untuk dipasang dan diaktifkan.

Sehubungan dengan ini, adalah tidak diingini dan bermasalah untuk membenarkan pelanggan eLearning bertukar kepada pelan eCommerce kerana pelan, harga dan had ini mungkin tidak sesuai.

Oleh itu, untuk menyekat laluan pelanggan dan mencegah insiden, pentadbir rangkaian boleh mentakrifkan kumpulan pelan dan dalam kumpulan itu menentukan pelan yang boleh ditukar oleh pelanggan.

![Tab Up and Downgrades](/img/config/product-upgrades.png)

Untuk mentakrifkan kumpulan pelan, tentukan pelan yang serasi dalam senarai **plan group**. **Product order** menentukan bagaimana pelan disusun dan dipaparkan dari yang terendah ke yang tertinggi.

Ultimate Multisite juga termasuk ciri **order bump** di mana produk dan perkhidmatan add-on yang sesuai boleh ditambah kepada pelan. Ini ditawarkan kepada pelanggan sebagai item tambahan yang boleh ditambah kepada pelan semasa checkout atau semasa naik taraf.

#### Variasi Harga

Variasi harga membolehkan pentadbir rangkaian menentukan peringkat harga alternatif bergantung pada tempoh. Tetapan ini memungkinkan peringkat harga 3 bulan, 6 bulan atau tahunan diwujudkan atau sebarang tempoh dan kekerapan lain seperti yang ditentukan oleh kes penggunaan.

![Tab Price Variations](/img/config/product-price-variations.png)

Untuk mewujudkan variasi harga, tetapkan togol **enable price variations** kepada aktif dan klik butang **Add new Price Variation**.

Untuk memasukkan variasi, tetapkan tempoh, period dan harga variasi tersebut. Variasi tambahan boleh dimasukkan dengan mengklik butang itu sekali lagi.

![Tab Price Variations](/img/config/product-price-variations.png)

#### Cukai

Tab **Taxes** selaras dengan tetapan cukai yang ditentukan dalam **Ultimate Multisite > Settings > Taxes** dan lebih khusus lagi kadar cukai yang ditakrifkan. Untuk mengaktifkan cukai dan mentakrifkan kadar cukai yang berkenaan, sila lihat dokumentasi di **Ultimate Multisite: Settings**

![Tab Taxes](/img/config/product-taxes.png)

Dalam contoh sebelumnya, kami mentakrifkan kadar cukai tempatan sebanyak 7.25% yang berkenaan untuk pelanggan di California (Amerika Syarikat).

Sebaik sahaja kadar cukai ditakrifkan dalam **Ultimate Multisite > Settings > Manage Tax Rates**, ia boleh dipilih pada peringkat produk.

![Tab Taxes](/img/config/product-taxes.png)

Untuk menunjukkan bahawa produk adalah item bercukai, tetapkan togol **Is Taxable** kepada aktif dan pilih kadar cukai yang berkenaan daripada dropdown Tax Category.

#### Templat Laman Web

Pada asasnya, templat laman web adalah laman web WordPress lengkap yang diklon kepada laman web pelanggan pada permulaan langganan mereka.

![Tab Site Templates](/img/config/product-site-templates.png)

Pentadbir rangkaian mencipta dan mengkonfigurasi templat laman web sebagai laman web WordPress biasa dengan tema, plugin dan kandungan yang diaktifkan dan dikonfigurasi. Templat laman web diklon secara tepat kepada pelanggan.

Tab ini membolehkan pentadbir rangkaian menentukan tingkah laku templat laman web semasa langganan baharu. Untuk menggunakan templat laman web, tetapkan togol **allow site templates** kepada keadaan aktif.

**Site template selection mode** mentakrifkan tingkah laku templat laman web semasa proses langganan.

Tetapan **Default** mengikut langkah-langkah dalam borang checkout. Jika pentadbir rangkaian telah mentakrifkan langkah pemilihan templat dalam proses checkout dan langkah tersebut telah ditakrifkan dengan templat, tetapan ini akan menghormati arahan yang ditetapkan dalam langkah checkout tersebut.

Menentukan **Assign Site Template** memaksa pemilihan templat yang ditentukan. Akibatnya, sebarang langkah pemilihan templat dalam proses checkout akan dialih keluar.

Akhir sekali, **Choose Available Site Templates** mengatasi templat yang ditentukan dalam langkah checkout dengan templat yang dipilih dalam tetapan ini. Templat yang dipra-pilih juga boleh ditakrifkan untuk membantu pelanggan dalam pemilihan.

Akhirnya, jika pentadbir rangkaian mahu pemilihan templat berlaku dalam langkah checkout, tetapan '_default_' sudah mencukupi. Sebagai alternatif, untuk mengalih keluar dan mengunci pemilihan templat dan menyerahkan pemilihan kepada tetapan pelan, pilihan '_assign new template_' atau '_choose available site templates_' mungkin lebih sesuai.

#### Laman Web

Tab **Sites** adalah sebahagian daripada fungsi had Ultimate Multisite.

![Tab Sites](/img/config/product-sites.png)

Tetapan ini menentukan bilangan maksimum laman web yang boleh dicipta oleh pelanggan di bawah keahlian mereka.

Untuk mengaktifkan had, tetapkan togol **limit sites** kepada keadaan aktif dan tentukan bilangan maksimum laman web dalam medan **site allowance**.

#### Lawatan

Tab **Visits** adalah sebahagian lagi daripada sistem had Ultimate Multisite. Tetapan ini membolehkan pengiraan dan seterusnya pengehadan pelawat unik ke laman web pelanggan.

![Tab Visits](/img/config/product-visits.png)

Dari perspektif pemasaran rangkaian, pentadbir boleh menggunakan tetapan ini sebagai cara untuk menggalakkan pelanggan menaik taraf pelan mereka sebaik sahaja had dicapai. Tetapan ini juga boleh membantu pentadbir rangkaian mengekang dan mencegah trafik berlebihan ke laman web untuk mengekalkan sumber sistem.

Untuk menggunakan ciri ini, tetapkan togol **limit unique visits** kepada keadaan aktif dan tentukan bilangan maksimum pelawat unik dalam medan **unique visits quota**.

Sebaik sahaja had ini dicapai, Ultimate Multisite akan berhenti menyajikan laman web pelanggan dan sebaliknya memaparkan mesej untuk menunjukkan bahawa had telah dicapai.

#### Pengguna

Had 'Users' Ultimate Multisite membolehkan pentadbir rangkaian mengenakan had ke atas bilangan pengguna yang boleh dicipta dan diberikan kepada peranan.

![Tab Users](/img/config/product-users.png)

Untuk mengaktifkan ciri had, tetapkan togol **limit user** kepada keadaan aktif dengan menggelongsornya ke kanan.

Seterusnya, untuk setiap peranan yang ingin dihadkan, tetapkan togol di sebelahnya kepada keadaan aktif dan takrifkan had maksimum dalam medan yang sesuai.

#### Jenis Pos

Tab **Post Types** membolehkan pentadbir rangkaian mengenakan had terperinci ke atas pelbagai jenis pos dalam WordPress.

![Tab Post Types](/img/config/product-post-types.png)

Disebabkan oleh pembinaan WordPress, pos dan jenis pos adalah komponen penting dalam fungsi terasnya, dan oleh itu sistem had Ultimate Multisite direka untuk membantu pentadbir rangkaian dalam menetapkan dan mengekalkan had.

Untuk mengaktifkan subsistem had ini, tetapkan togol **limit post types** kepada keadaan aktif dengan menggelongsornya ke kanan.

Seterusnya, untuk setiap jenis pos yang ingin dihadkan, aktifkan togolnya dengan menggelongsornya ke kanan dan tentukan had maksimum dalam medan yang sesuai.

#### Ruang Cakera

Tab **Disk Space** membolehkan pentadbir rangkaian menyekat ruang yang digunakan oleh pelanggan.

![Tab Disk Space](/img/config/product-disk-space.png)

Lazimnya dalam WordPress multisite, fail teras dikongsi di antara semua laman web dan direktori individu dicipta untuk fail media dan muat naik yang mana tetapan dan had ini dikenakan.

Untuk mengaktifkan had penggunaan cakera, tetapkan togol **limit disk size per site** kepada keadaan aktif dengan menggelongsornya ke kanan.

Seterusnya, tentukan had maksimum dalam megabait dalam medan **disk space allowance**.

#### Domain Tersuai

Dengan mengaktifkan pilihan ini, anda boleh membenarkan domain tersuai pada pelan ini secara khusus.

![Tab Custom Domains](/img/config/product-custom-domains.png)

#### Tema

Tab **Themes** dalam pilihan produk membolehkan pentadbir rangkaian menyediakan tema kepada pelanggan untuk pemilihan dan secara pilihan memaksa keadaan tema tersebut.

![Tab Themes](/img/config/product-themes.png)

_**Nota: Untuk tema disediakan kepada pelanggan, ia mesti diaktifkan rangkaian oleh pentadbir rangkaian.**_

![Halaman tema rangkaian](/img/config/product-themes-network-enabled.png)

Pilihan **visibility** mentakrifkan sama ada tema ini boleh dilihat oleh pelanggan apabila melihat tab **Appearance > Themes** dalam laman web mereka. Menetapkan pilihan ini kepada **Hidden** mengalih keluar tema daripada paparan dan dengan itu menyekat keupayaan untuk memilih dan mengaktifkannya.

![Tab Themes](/img/config/product-themes.png)

Pemilihan **behavior** membolehkan pentadbir rangkaian mentakrifkan keadaan tema semasa penciptaan laman web pelanggan.

Dalam keadaan **Available**, tema disediakan kepada pelanggan untuk pengaktifan sendiri. Sebaliknya, keadaan **Not Available** mengalih keluar daripada pelanggan keupayaan untuk mengaktifkan tema tersebut. Akhir sekali, pilihan **Force Activate** memaksa pemilihan dan pengaktifan tema tersebut seterusnya menetapkannya sebagai lalai semasa penciptaan laman web.

#### Plugin

Serupa dengan tab Themes, Ultimate Multisite membolehkan pentadbir rangkaian mentakrifkan keterlihatan plugin kepada pelanggan serta keadaan mereka semasa penciptaan laman web baharu.

![Tab Plugins](/img/config/product-plugins.png)

Dropdown **visibility** membolehkan plugin sama ada boleh dilihat atau disembunyikan daripada pelanggan apabila dilihat pada laman web mereka melalui pilihan menu Plugins.

Pentadbir rangkaian boleh memanipulasi lagi tingkah laku plugin dengan menggunakan pilihan dalam dropdown behavior.

![Tab Plugins](/img/config/product-plugins.png)

Pemilihan **Default** menghormati keadaan plugin yang ditakrifkan dalam templat laman web yang dipilih oleh pelanggan. Oleh itu, plugin yang diaktifkan dalam templat akan kekal diaktifkan apabila templat diklon kepada laman web pelanggan.

**Force Activate** meletakkan plugin dalam keadaan aktif semasa penciptaan laman web dan sebaliknya **Force Inactivate** menyahaktifkan plugin semasa penciptaan laman web. Dalam kedua-dua keadaan ini, keadaan plugin boleh diubah secara manual oleh pelanggan melalui menu WordPress Plugins mereka.

Tetapan **Force Activate & Lock** beroperasi dengan cara yang serupa tetapi menghalang keadaan plugin daripada diubah oleh pelanggan. Oleh itu, tetapan Force Activate and Lock akan memaksa plugin kepada keadaan aktifnya dan menghalang pelanggan daripada menyahaktifkannya. Begitu juga, tetapan **Force Inactivate & Lock** akan memaksa plugin kepada keadaan tidak aktifnya dan menghalang pengguna daripada mengaktifkan plugin tersebut.

Pentadbir rangkaian mungkin ingin mempertimbangkan tetapan Force Activate & Lock dan Force Inactivate & Lock bersama-sama dengan templat laman web kerana plugin dan keadaan plugin dalam templat mungkin terjejas oleh tetapan ini jika dipilih.

#### Tetapkan Semula Had

Tab **Reset Limitations** menetapkan semula semua had tersuai yang ditakrifkan pada produk. Untuk menetapkan semula had, klik butang **reset limitations**.

![Tab Reset Limitations](/img/config/product-reset-limitations.png)

Untuk mengesahkan tindakan, gelongsorkan togol **confirm reset** kepada keadaan aktif di sebelah kanan dan klik butang **reset limitations**.

![Tab Reset Limitations](/img/config/product-reset-limitations.png)

## Edit, Duplikat atau Padam Produk

Produk sedia ada boleh diedit, diduplikasi atau dipadam dengan menavigasi ke **Ultimate Multisite > Products** dan menghalakan kursor ke atas nama produk sedia ada.

![Tindakan hover produk](/img/config/product-hover-actions.png)
