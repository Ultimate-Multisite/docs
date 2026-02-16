---
title: Template Situs
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Template Situs (v2)

_**CATATAN: Artikel ini mengacu pada Ultimate Multisite versi 2.x. Jika Anda menggunakan versi 1.x,**_ **lihat artikel ini** _**.**_

Tujuan kami saat membuat jaringan premium dengan Ultimate Multisite adalah mengotomatisasi sebanyak mungkin proses sambil memberikan klien fleksibilitas dan berbagai pilihan saat membuat situs web mereka. Salah satu cara mudah untuk mencapai keseimbangan ini adalah dengan memanfaatkan fitur Template Situs di Ultimate Multisite.

## Apa itu Template Situs?

Sesuai namanya, Template Situs adalah situs dasar yang dapat digunakan sebagai fondasi saat membuat situs baru di jaringan Anda.

Artinya, Anda dapat membuat situs dasar, mengaktifkan berbagai plugin, mengatur tema aktif, dan menyesuaikannya sesuai keinginan. Kemudian, saat pelanggan Anda membuat akun baru, alih-alih mendapatkan situs WordPress kosong tanpa konten yang berarti, mereka akan mendapatkan salinan situs dasar Anda dengan semua penyesuaian dan konten yang sudah tersedia.

Kedengarannya luar biasa, tapi bagaimana cara membuat template situs baru? Prosesnya sangat sederhana.

## Membuat dan Mengedit Template Situs Baru

Template Situs hanyalah situs biasa di jaringan Anda. Untuk membuat template baru, cukup buka **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Tombol Add site di halaman daftar Sites](/img/config/site-templates-list.png)**

Ini akan membuka jendela modal yang meminta **Site title, Site Domain/path,** dan **Site type**. Di kolom drop-down **Site Type**, pastikan Anda memilih **Site Template***.*

_![Modal tambah template situs dengan dropdown site type](/img/config/site-templates-list.png)_

Di bagian bawah formulir, Anda akan melihat toggle **Copy Site**. Fitur ini memungkinkan Anda membuat template situs baru berdasarkan template situs yang sudah ada sebagai titik awal, sehingga menghemat waktu dibandingkan membuat template situs dari nol.

![Modal tambah template situs dengan toggle copy site](/img/config/site-templates-list.png)

### Menyesuaikan Konten Template Situs

Untuk menyesuaikan template situs, cukup buka panel dashboard-nya dan lakukan perubahan yang diperlukan. Anda dapat membuat post baru, halaman, mengaktifkan plugin, dan mengubah tema aktif. Anda bahkan dapat membuka Customizer dan mengubah berbagai opsi penyesuaian.

Semua data tersebut akan disalin saat pelanggan membuat situs baru berdasarkan Template Situs tersebut.

### Opsi Lanjutan

Jika Anda familiar dengan koding kustom, Anda dapat memanfaatkan Search and Replace API kami untuk secara otomatis mengganti informasi di situs baru setelah pembuatannya. Ini berguna untuk hal-hal seperti mengganti nama perusahaan di halaman Tentang Kami, mengganti email kontak di halaman Kontak, dan sebagainya.

### Menggunakan Template Situs

Oke, jadi Anda sudah membuat beberapa Template Situs berbeda dengan desain, tema, dan pengaturan yang berbeda-beda. Bagaimana cara memanfaatkannya di jaringan Anda?

Pada dasarnya, ada dua pendekatan yang dapat Anda gunakan sekarang (tidak secara bersamaan):

  * Menautkan satu Template Situs ke setiap Plan Anda

**ATAU**

  * Mengizinkan klien Anda memilih sendiri template situs saat pendaftaran.

#### Mode 1: Tetapkan Template Situs

Dalam mode ini, klien Anda tidak dapat memilih template saat membuat akun, melainkan Anda yang menentukan template mana yang harus digunakan di setiap Plan.

Untuk melakukannya, buka **Ultimate Multisite > Products > Edit**.

![Edit produk untuk menetapkan template situs](/img/config/product-site-templates.png)

Ini akan membawa Anda ke halaman **Edit Product**. Di bagian **Product Options**, temukan tab **Site template** dan pilih opsi **Assign Site Template** dari kolom drop-down. Ini akan menampilkan daftar template situs yang tersedia dan memungkinkan Anda memilih satu template situs yang didedikasikan untuk produk tersebut.

![Tab site template produk dengan opsi assign site template](/img/config/product-site-templates.png)

#### Mode 2: Pilih Template Situs yang Tersedia

Dalam mode ini, Anda memberikan klien pilihan selama proses pendaftaran. Mereka dapat memilih dari berbagai template situs yang Anda tentukan di pengaturan produk. Anda memiliki opsi untuk membatasi template situs yang dapat mereka pilih di bawah produk yang dipilih. Ini memungkinkan Anda memiliki set template situs yang berbeda untuk setiap produk, yang ideal untuk menonjolkan fungsi dan fitur berbeda untuk produk dengan harga lebih tinggi.

Di halaman **Edit Product**, di bagian **Product Options**, temukan tab **Site template** dan pilih opsi **Choose Available Site Template** dari kolom drop-down. Ini akan menampilkan daftar template situs yang tersedia dan memungkinkan Anda memilih template situs yang ingin tersedia. Anda dapat melakukan ini dengan memilih Behavior-nya: **Available** jika Anda ingin template situs disertakan dalam daftar. _**Not Available**_ jika Anda ingin template situs tidak muncul sebagai opsi. Dan **Pre-selected** jika Anda ingin salah satu template situs yang terdaftar menjadi pilihan default.

![Pilih template situs yang tersedia dengan opsi behavior](/img/config/product-site-templates.png)

### Mode Default: Pemilihan template situs di formulir Checkout

Jika Anda ingin semua template situs tersedia selama pendaftaran, atau mungkin tidak ingin melakukan pekerjaan ekstra menetapkan atau menentukan template situs di bawah setiap produk yang Anda buat. Maka Anda cukup mengatur pemilihan template situs di **Checkout Form** Anda. Untuk melakukan ini, buka **Ultimate Multisite > Checkout Forms**. Lalu klik **Edit** di bawah formulir yang ingin Anda konfigurasi.

![Halaman daftar checkout forms](/img/config/checkout-forms-list.png)

Ini akan membuka halaman **Edit Checkout Form**. Temukan kolom **Template Selection** dan klik **Edit** di bawahnya.

![Editor checkout form dengan kolom template selection](/img/config/checkout-form-editor.png)

Sebuah jendela modal akan muncul. Di kolom **Template Sites**, Anda dapat memilih dan mendaftarkan semua template situs yang ingin tersedia selama pendaftaran. Template situs yang Anda tentukan dari sini akan tersedia terlepas dari produk apa pun yang dipilih pengguna.

![Kolom template sites di editor checkout form](/img/config/checkout-form-step.png)

### Opsi Template Situs

Ada fungsi template situs lainnya yang dapat Anda aktifkan atau nonaktifkan di pengaturan Ultimate Multisite.

![Opsi template situs di pengaturan Ultimate Multisite](/img/config/settings-sites.png)

#### Izinkan Pergantian Template

Mengaktifkan opsi ini akan memungkinkan klien Anda mengganti template yang mereka pilih selama proses pendaftaran setelah akun dan situs dibuat. Ini berguna dari sudut pandang klien karena memungkinkan mereka memilih ulang template jika mereka kemudian menyadari pilihan awal mereka tidak cocok untuk kebutuhan khusus mereka.

#### Izinkan Pengguna Menggunakan Situs Mereka sebagai Template

Karena pengguna subsite telah menghabiskan waktu membangun dan mendesain situs mereka sendiri, mereka mungkin ingin mengkloning dan menggunakannya sebagai salah satu template situs yang tersedia saat membuat subsite lain di jaringan Anda. Opsi ini akan memungkinkan mereka mencapai hal tersebut.

#### Salin Media saat Duplikasi Template

Mencentang opsi ini akan menyalin media yang diunggah di situs template ke situs yang baru dibuat. Pengaturan ini dapat ditimpa di masing-masing plan.

#### **Cegah Mesin Pencari Mengindeks Template Situs**

Template situs seperti yang dibahas dalam artikel ini adalah boilerplate tetapi tetap merupakan bagian dari jaringan Anda, yang berarti masih dapat ditemukan oleh mesin pencari. Opsi ini memungkinkan Anda menyembunyikan template situs agar mesin pencari tidak dapat mengindeksnya.

## Mengisi Template Situs dengan Search-and-Replace Otomatis

Salah satu fitur paling powerful dari Ultimate Multisite adalah kemampuan untuk menambahkan kolom teks, warna, dan pilihan sembarang ke formulir pendaftaran. Setelah data tersebut ditangkap, kita dapat menggunakannya untuk mengisi konten di bagian tertentu dari template situs yang dipilih. Kemudian, saat situs baru dipublikasikan, Ultimate Multisite akan mengganti placeholder dengan informasi aktual yang dimasukkan saat pendaftaran.

Misalnya, jika Anda ingin mendapatkan nama perusahaan pengguna akhir saat pendaftaran dan secara otomatis menempatkan nama perusahaan di halaman beranda. Di halaman beranda template situs Anda, Anda perlu menambahkan placeholder, seperti pada gambar di bawah ini (placeholder harus ditambahkan dengan dikelilingi kurung kurawal ganda - {{placeholder_name}}).

![Halaman beranda dengan teks placeholder dalam kurung kurawal](/img/config/site-templates-list.png)

Kemudian, Anda cukup menambahkan kolom pendaftaran yang sesuai di checkout form Anda untuk menangkap data tersebut:

![Checkout form dengan kolom pendaftaran yang sesuai](/img/config/checkout-form-editor.png)

Pelanggan Anda kemudian dapat mengisi kolom tersebut selama pendaftaran.

![Kolom pendaftaran diisi oleh pelanggan](/img/config/checkout-form-step.png)

![Pratinjau formulir pendaftaran](/img/config/checkout-form-editor.png)

Ultimate Multisite kemudian akan mengganti placeholder dengan data yang diberikan pelanggan secara otomatis.

![Placeholder diganti dengan data pelanggan di situs](/img/config/site-templates-list.png)

### Mengatasi Masalah "Template Penuh Placeholder"

Semua itu bagus, tapi kita menghadapi masalah yang kurang menarik: sekarang template situs kita - yang dapat dikunjungi oleh pelanggan - penuh dengan placeholder yang tidak informatif.

Untuk mengatasi ini, kami menawarkan opsi untuk mengatur nilai palsu untuk placeholder, dan kami menggunakan nilai-nilai tersebut untuk mencari dan mengganti kontennya di situs template saat pelanggan Anda berkunjung.

Anda dapat mengakses editor placeholder template dengan membuka **Ultimate Multisite > Settings > Sites**, lalu di sidebar, klik link **Edit Placeholders**.

![Pengaturan placeholder di halaman pengaturan Sites](/img/config/settings-sites.png)

Itu akan membawa Anda ke editor konten placeholder, di mana Anda dapat menambahkan placeholder dan konten masing-masing.

![Editor konten placeholder template](/img/config/settings-sites.png)
