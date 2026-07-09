---
title: Templat Situs
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Templat Situs (v2)

_**CATATAN: Artikel ini merujuk pada Ultimate Multisite versi 2.x. Jika Anda menggunakan versi 1.x,**_ **lihat artikel ini** _**.**_

Tujuan kami saat membuat jaringan premium dengan Ultimate Multisite adalah mengotomatiskan sebanyak mungkin proses sambil memberi klien kami fleksibilitas dan berbagai opsi untuk dipilih saat membuat situs web mereka. Salah satu cara mudah untuk mencapai keseimbangan ini adalah dengan memanfaatkan fitur Templat Situs Ultimate Multisite.

## Apa itu Templat Situs?

Sesuai namanya, Templat Situs adalah situs boilerplate yang dapat digunakan sebagai dasar saat membuat situs baru di jaringan Anda.

Ini berarti Anda dapat membuat situs dasar, mengaktifkan berbagai plugin, menetapkan theme aktif, dan menyesuaikannya dengan cara apa pun yang Anda suka. Lalu, saat pelanggan Anda membuat Account baru, alih-alih mendapatkan situs WordPress default tanpa konten bermakna di dalamnya, mereka akan mendapatkan salinan situs dasar Anda dengan semua penyesuaian dan konten yang sudah tersedia.

Kedengarannya luar biasa, tetapi bagaimana cara saya membuat templat situs baru? Ini sangat sederhana.

## Membuat dan Mengedit Templat Situs baru

Templat Situs hanyalah situs normal di jaringan Anda. Untuk membuat templat baru, Anda cukup membuka **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Tombol tambah situs di halaman daftar Situs](/img/config/site-templates-list.png)**

Ini akan membuka jendela modal yang akan meminta **judul Situs, Domain/path Situs,** dan **jenis Situs**. Di bawah field drop-down **Jenis Situs**, pastikan Anda memilih **Templat Situs** *.*

_![Modal tambah templat situs dengan dropdown jenis situs](/img/config/site-templates-list.png)_

Anda juga dapat menambahkan deskripsi yang ditampilkan kepada pelanggan untuk menjelaskan apa saja yang disertakan dalam templat:

![Field deskripsi templat situs pada layar edit templat situs](/img/config/site-template-edit-description.png)

Di bagian bawah formulir, Anda akan melihat sakelar toggle **Salin Situs**. Ini memungkinkan Anda membuat templat situs baru berdasarkan templat situs yang sudah ada sebagai titik awal untuk membantu menghemat waktu, alih-alih membuat templat situs dari awal.

![Modal tambah templat situs dengan toggle salin situs](/img/config/site-templates-list.png)

### Menyesuaikan konten Templat Situs

Untuk menyesuaikan templat situs Anda, cukup buka panel Dashboard-nya dan lakukan perubahan yang Anda perlukan. Anda dapat membuat post baru, halaman, mengaktifkan plugin, dan mengubah theme aktif. Anda bahkan dapat membuka Customizer dan mengubah berbagai opsi penyesuaian.

![Antarmuka edit templat situs](/img/config/site-template-edit.png)

Semua data tersebut akan disalin ketika pelanggan membuat situs baru berdasarkan Templat Situs tersebut.

### Opsi Lanjutan

Jika Anda memahami custom coding, Anda dapat menggunakan Search and Replace API kami untuk secara otomatis mengganti informasi pada situs baru setelah dibuat. Ini berguna untuk hal-hal seperti mengganti nama perusahaan pada halaman Tentang, mengganti email kontak pada halaman Kontak, dll.

### Menggunakan Templat Situs

Oke, jadi Anda telah membuat banyak Templat Situs berbeda dengan desain, theme, dan pengaturan yang berbeda. Bagaimana Anda membuatnya berguna di jaringan Anda sekarang?

Pada dasarnya, ada dua pendekatan yang dapat Anda gunakan sekarang (tidak secara bersamaan):

  * Melampirkan satu Templat Situs ke setiap Paket Anda

**ATAU**

  * Mengizinkan klien Anda memilih sendiri templat situs saat pendaftaran.

#### Mode 1: Tetapkan Templat Situs

Dalam mode ini, klien Anda tidak akan dapat memilih templat saat mereka membuat Account, tetapi Anda akan menentukan templat mana yang harus digunakan pada setiap Paket Anda.

Untuk melakukannya, Anda perlu membuka **Ultimate Multisite > Products > Edit**.

![Edit produk untuk menetapkan templat situs](/img/config/product-site-templates.png)

Ini akan membawa Anda ke halaman **Edit Produk**. Di bawah bagian **Opsi Produk**, cari tab **Templat situs** dan pilih opsi **Tetapkan Templat Situs** dari field drop-down. Ini akan menampilkan daftar templat situs yang tersedia dan memungkinkan Anda memilih hanya satu templat situs yang dikhususkan untuk produk tersebut.

![Tab templat situs produk dengan opsi tetapkan templat situs](/img/config/product-site-templates.png)

#### Mode 2: Pilih Templat Situs yang Tersedia

Dalam mode ini, Anda akan memberi klien Anda pilihan selama proses pendaftaran. Mereka akan dapat memilih dari berbagai templat situs yang Anda tentukan di pengaturan produk. Anda memiliki opsi untuk membatasi templat situs yang dapat mereka pilih di bawah produk yang dipilih. Ini memungkinkan Anda memiliki set templat situs yang berbeda di setiap produk, yang ideal untuk menyoroti fungsi dan fitur berbeda untuk produk dengan harga lebih tinggi.

Pada halaman **Edit Produk**. Di bawah bagian **Opsi Produk**, cari tab **Templat situs** dan pilih opsi **Pilih Templat Situs yang Tersedia** dari field drop-down. Ini akan menampilkan daftar templat situs yang tersedia dan memungkinkan Anda memilih templat situs yang ingin Anda sediakan. Anda dapat melakukannya dengan memilih Perilakunya: **Tersedia** jika Anda ingin templat situs disertakan dalam daftar. _**Tidak Tersedia**_ jika Anda ingin templat situs tidak ditampilkan sebagai opsi. Dan **Dipilih sebelumnya** jika Anda ingin salah satu templat situs yang tercantum menjadi pilihan default.

![Pilih templat situs yang tersedia dengan opsi perilaku](/img/config/product-site-templates.png)

### Mode Default: pemilihan templat situs pada formulir Checkout

Jika Anda ingin semua templat situs Anda tersedia selama registrasi, atau mungkin tidak ingin melakukan pekerjaan tambahan untuk menetapkan atau menentukan templat situs di setiap produk yang Anda buat. Maka Anda cukup mengatur pemilihan templat situs di bawah **Formulir Checkout** Anda. Untuk melakukannya, buka **Ultimate Multisite > Checkout Forms** dan klik **Edit** di bawah formulir yang ingin Anda konfigurasi.

Ini akan menampilkan halaman **Edit Formulir Checkout**. Cari field **Pemilihan Templat** dan klik **Edit** di bawahnya.

Sebuah jendela modal akan muncul. Di bawah field **Template Sites** Anda dapat memilih dan mencantumkan semua templat situs yang ingin Anda sediakan selama pendaftaran. Templat situs yang Anda tentukan dari sini akan tersedia terlepas dari produk apa pun yang dipilih pengguna.

![Field pemilihan templat di editor formulir checkout](/img/config/checkout-form-template-step.png)

Di frontend, pelanggan melihat pemilih templat selama checkout dan dapat memilih desain awal untuk situs baru mereka.

![Pemilih templat frontend selama pendaftaran](/img/config/frontend-template-chooser.png)

### Opsi Templat Situs

Ada fungsi templat situs lain yang tersedia yang dapat Anda aktifkan atau nonaktifkan di pengaturan Ultimate Multisite.

![Opsi templat situs di pengaturan Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Izinkan Penggantian Templat

Mengaktifkan opsi ini akan memungkinkan klien Anda mengganti templat yang mereka pilih selama proses pendaftaran setelah account dan situs dibuat. Ini berguna dari sudut pandang klien karena memungkinkan mereka memilih ulang templat jika kemudian mereka mengetahui bahwa pilihan awal mereka bukan yang terbaik untuk kebutuhan khusus mereka.

#### Izinkan Pengguna menggunakan Situs mereka sebagai templat

Karena pengguna subsitus menghabiskan waktu membangun dan mendesain situs mereka sendiri, mereka mungkin ingin mengkloning dan menggunakannya sebagai salah satu templat situs yang tersedia saat membuat subsitus lain di jaringan Anda. Opsi ini akan memungkinkan mereka melakukan hal tersebut.

#### Salin Media saat Duplikasi Templat

Mencentang opsi ini akan menyalin media yang diunggah di situs templat ke situs yang baru dibuat. Ini dapat ditimpa pada masing-masing plan.

#### **Cegah Mesin Pencari mengindeks Templat Situs**

Templat situs seperti yang dibahas dalam artikel ini adalah boilerplate tetapi tetap menjadi bagian dari jaringan Anda yang berarti masih tersedia untuk ditemukan oleh mesin pencari. Opsi ini akan memungkinkan Anda menyembunyikan templat situs sehingga mesin pencari dapat mengindeksnya.

## Mengisi Templat Situs sebelumnya dengan pencarian-dan-penggantian otomatis

Salah satu fitur paling canggih dari Ultimate Multisite adalah kemampuan untuk menambahkan teks, warna, dan field pilihan arbitrer ke formulir pendaftaran. Setelah data tersebut kita tangkap, kita dapat menggunakannya untuk mengisi konten sebelumnya di bagian tertentu dari templat situs yang dipilih. Kemudian, saat situs baru dipublikasikan, Ultimate Multisite akan mengganti placeholder dengan informasi aktual yang dimasukkan selama pendaftaran.

Misalnya, jika Anda ingin mendapatkan nama perusahaan pengguna akhir Anda selama pendaftaran dan secara otomatis menempatkan nama perusahaan di halaman beranda. Di halaman beranda situs templat Anda perlu menambahkan placeholder, seperti pada gambar di bawah (placeholder harus ditambahkan dengan dikelilingi kurung kurawal ganda - {{placeholder_name}}).

![Beranda dengan teks placeholder dalam kurung kurawal](/img/config/site-templates-list.png)

Kemudian, Anda cukup menambahkan field pendaftaran yang sesuai pada formulir checkout Anda untuk menangkap data tersebut. Editor formulir checkout yang sama yang digunakan untuk pemilihan templat memungkinkan Anda menempatkan field kustom bersama pemilih templat:

![Pemilihan templat dan field pendaftaran di editor formulir checkout](/img/config/checkout-form-template-step.png)

Pelanggan Anda kemudian akan dapat mengisi field tersebut selama pendaftaran.

![Formulir checkout frontend dengan pemilih templat](/img/config/frontend-template-chooser.png)

Ultimate Multisite kemudian akan mengganti placeholder dengan data yang diberikan oleh pelanggan secara otomatis.

![Placeholder diganti dengan data pelanggan di situs](/img/config/site-templates-list.png)

### Mengatasi masalah "templat penuh dengan placeholder"

Semua itu bagus, tetapi kita memang menghadapi masalah yang kurang enak dilihat: sekarang templat situs kita - yang dapat dikunjungi oleh pelanggan kita - penuh dengan placeholder yang tidak banyak menjelaskan.

Untuk mengatasinya, kami menawarkan opsi untuk menetapkan nilai palsu bagi placeholder, dan kami menggunakan nilai-nilai tersebut untuk mencari dan mengganti kontennya di situs templat saat pelanggan Anda berkunjung.

Anda dapat mengakses editor placeholder templat dengan menuju ke **Ultimate Multisite > Settings > Sites**, lalu, di bilah sisi, mengeklik tautan **Edit Placeholders**.

![Pengaturan templat situs di bawah halaman pengaturan Sites](/img/config/settings-sites-templates-section.png)

Itu akan membawa Anda ke editor konten placeholder, tempat Anda dapat menambahkan placeholder dan kontennya masing-masing.

![Titik masuk editor konten placeholder templat](/img/config/settings-sites-templates-section.png)
