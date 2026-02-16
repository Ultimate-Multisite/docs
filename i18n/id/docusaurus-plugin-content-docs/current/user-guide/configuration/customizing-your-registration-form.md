---
title: Menyesuaikan Formulir Pendaftaran Anda
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Menyesuaikan Formulir Pendaftaran Anda

Agar jaringan Anda terlihat unik dari SaaS lain yang dibangun di platform WordPress, Ultimate Multisite memungkinkan Anda menyesuaikan halaman pendaftaran dan login dengan fitur **Checkout Forms** kami.

Meskipun fitur ini merupakan cara yang mudah dan fleksibel untuk bereksperimen dengan berbagai pendekatan saat mencoba mengonversi pelanggan baru, sebagian besar digunakan untuk membuat formulir pendaftaran yang dipersonalisasi. Artikel ini bertujuan untuk menunjukkan bagaimana Anda dapat melakukannya.

## Halaman login dan pendaftaran:

Saat instalasi Ultimate Multisite, secara otomatis akan dibuat halaman login dan pendaftaran kustom di situs utama Anda. Anda dapat mengubah halaman default ini kapan saja dengan membuka **Ultimate Multisite > Settings > Login & Registration**.

![Halaman pengaturan Login dan Registration](/img/config/settings-general.png)

Mari kita lihat setiap opsi yang dapat Anda sesuaikan di halaman **Login & Registration**:

  * **Enable registration:** Opsi ini akan mengaktifkan atau menonaktifkan pendaftaran di jaringan Anda. Jika dimatikan, pelanggan Anda tidak akan dapat mendaftar dan berlangganan produk Anda.

  * **Enable email verification:** Jika opsi ini diaktifkan, pelanggan yang berlangganan paket gratis atau paket berbayar dengan periode trial akan menerima email verifikasi dan perlu mengklik tautan verifikasi agar situs web mereka dapat dibuat.

  * **Default registration page:** Ini adalah halaman default untuk pendaftaran. Halaman ini perlu dipublikasikan di situs web Anda dan memiliki formulir pendaftaran (juga dikenal sebagai checkout form) - tempat klien Anda akan berlangganan produk Anda. Anda dapat membuat halaman pendaftaran dan checkout form sebanyak yang Anda inginkan, hanya perlu diingat untuk menempatkan shortcode checkout form di halaman pendaftaran, jika tidak maka tidak akan muncul.

  * **Use custom login page:** Opsi ini memungkinkan Anda menggunakan halaman login yang dikustomisasi, selain halaman wp-login.php default. Jika opsi ini diaktifkan, Anda dapat memilih halaman mana yang akan digunakan untuk login pada opsi **Default login page** (tepat di bawahnya).

  * **Obfuscate the original login url (wp-login.php):** Jika Anda ingin menyembunyikan URL login asli, Anda dapat mengaktifkan opsi ini. Ini berguna untuk mencegah serangan brute-force. Jika opsi ini diaktifkan, Ultimate Multisite akan menampilkan error 404 ketika pengguna mencoba mengakses tautan wp-login.php asli

  * **Force synchronous site publication:** Setelah pelanggan berlangganan produk di jaringan, situs pending yang baru perlu dikonversi menjadi situs jaringan yang sebenarnya. Proses publikasi terjadi melalui Job Queue, secara asinkron. Aktifkan opsi ini untuk memaksa publikasi terjadi dalam request yang sama dengan pendaftaran.

Sekarang, mari kita lihat opsi lain yang masih relevan dengan proses login dan pendaftaran. Opsi-opsi ini berada tepat di bawah **Other options** pada halaman Login & registration yang sama:

  * **Default role:** Ini adalah role yang akan dimiliki pelanggan Anda di situs web mereka setelah proses pendaftaran.

  * **Add users to the main site as well:** Mengaktifkan opsi ini juga akan menambahkan pengguna ke situs utama jaringan Anda setelah proses pendaftaran. Jika Anda mengaktifkan opsi ini, opsi untuk mengatur **default role** pengguna tersebut di situs web Anda juga akan muncul tepat di bawahnya.

  * **Enable multiple accounts:** Memungkinkan pengguna memiliki akun di berbagai situs jaringan Anda dengan alamat email yang sama. Jika opsi ini dimatikan, pelanggan Anda tidak akan dapat membuat akun di situs web lain yang berjalan di jaringan Anda dengan alamat email yang sama.

Dan itulah semua opsi terkait login dan pendaftaran yang dapat Anda sesuaikan! Jangan lupa untuk menyimpan pengaturan Anda setelah selesai mengeditnya.

## Menggunakan beberapa formulir pendaftaran:

Ultimate Multisite 2.0 menawarkan editor checkout form yang memungkinkan Anda membuat formulir sebanyak yang Anda inginkan, dengan field yang berbeda, produk yang ditawarkan, dll.

Baik halaman login maupun pendaftaran disematkan dengan shortcode: **[wu_login_form]** pada halaman login dan **[wu_checkout]** untuk halaman pendaftaran. Anda dapat menyesuaikan halaman pendaftaran lebih lanjut dengan membangun atau membuat checkout form.

Untuk mengakses fitur ini, buka menu **Checkout Forms**, di sidebar sebelah kiri.

![Menu Checkout Forms di sidebar](/img/config/checkout-forms-list.png)

Di halaman ini, Anda dapat melihat semua checkout form yang Anda miliki.

Jika Anda ingin membuat yang baru, cukup klik **Add Checkout Form** di bagian atas halaman.

Anda dapat memilih salah satu dari tiga opsi ini sebagai titik awal: single step, multi-step atau blank. Kemudian, klik **Go to the Editor**.

![Add Checkout Form dengan opsi single step, multi-step, atau blank](/img/config/checkout-forms-list.png)

Sebagai alternatif, Anda dapat mengedit atau menduplikasi formulir yang sudah Anda miliki dengan mengklik opsi di bawah namanya. Di sana, Anda juga akan menemukan opsi untuk menyalin shortcode formulir atau menghapus formulir.

![Aksi hover checkout form dengan edit, duplicate, dan delete](/img/config/checkout-form-hover-actions.png)

Jika Anda memilih single step atau multi-step, checkout form akan sudah diisi terlebih dahulu dengan langkah-langkah dasar agar dapat berfungsi. Kemudian, jika Anda mau, Anda dapat menambahkan langkah tambahan ke dalamnya.

### Mengedit Checkout Form:

Seperti yang kami sebutkan sebelumnya, Anda dapat membuat checkout form untuk berbagai keperluan. Dalam contoh ini kita akan mengerjakan formulir pendaftaran.

Setelah membuka editor checkout form, beri nama formulir Anda (yang hanya akan digunakan untuk referensi internal) dan slug (digunakan untuk membuat shortcode, misalnya).

![Editor checkout form dengan field nama dan slug](/img/config/checkout-form-editor.png)

Formulir terdiri dari step dan field. Anda dapat menambahkan step baru dengan mengklik **Add New Checkout Step**.

![Tombol Add New Checkout Step](/img/config/checkout-form-add-step.png)

Pada tab pertama jendela modal, isi konten step formulir Anda. Berikan ID, nama, dan deskripsi. Item-item ini sebagian besar digunakan secara internal.

![Tab konten checkout step dengan ID, nama, dan deskripsi](/img/config/checkout-form-step.png)

Selanjutnya, atur visibilitas step. Anda dapat memilih antara **Always show**, **Only show for logged in users** atau **Only show for guests**.

![Opsi visibilitas checkout step](/img/config/checkout-form-step.png)

Terakhir, konfigurasikan style step. Ini adalah field opsional.

![Konfigurasi style checkout step](/img/config/checkout-form-step.png)

Sekarang, saatnya menambahkan field ke step pertama kita. Cukup klik **Add New Field** dan pilih jenis section yang Anda inginkan.

![Tombol Add New Field](/img/config/checkout-form-editor.png)![Dropdown pemilihan tipe field](/img/config/checkout-form-step.png)

Setiap field memiliki parameter berbeda yang perlu diisi. Untuk entri pertama ini, kita akan memilih field **Username**.

![Konfigurasi field Username](/img/config/checkout-form-step.png)![Parameter field Username](/img/config/checkout-form-step.png)![Pengaturan tambahan field Username](/img/config/checkout-form-step.png)

Anda dapat menambahkan step dan field sebanyak yang Anda butuhkan. Untuk menampilkan produk Anda agar pelanggan dapat memilih, gunakan field Pricing Table. Jika Anda ingin membiarkan klien memilih template, tambahkan field Template Selection. Dan seterusnya.

_**Catatan:** Jika Anda membuat produk setelah membuat checkout form, Anda perlu menambahkan produk tersebut di section Pricing table. Jika Anda tidak menambahkannya, produk tidak akan muncul untuk pelanggan Anda di halaman pendaftaran._

_**Catatan 2:** username, email, password, site title, site URL, order summary, payment, dan submit button adalah field wajib untuk membuat checkout form._

Saat Anda mengerjakan checkout form, Anda selalu dapat menggunakan tombol Preview untuk melihat bagaimana klien Anda akan melihat formulir tersebut. Anda juga dapat berganti antara tampilan sebagai pengguna yang sudah ada atau pengunjung.

![Tombol Preview pada editor checkout form](/img/config/checkout-form-editor.png)![Preview checkout form sebagai pengunjung atau pengguna yang sudah ada](/img/config/checkout-form-editor.png)

Terakhir, pada **Advanced Options** Anda dapat mengonfigurasi pesan untuk halaman **Thank You**, menambahkan snippet untuk melacak konversi, menambahkan CSS kustom ke checkout form Anda atau membatasinya untuk negara tertentu.

![Advanced Options dengan halaman Thank You, pelacakan konversi, dan CSS kustom](/img/config/checkout-form-advanced.png)

Anda juga dapat mengaktifkan atau menonaktifkan checkout form secara manual dengan mengaktifkan opsi ini di kolom kanan, atau menghapus formulir secara permanen.

![Toggle aktif dan opsi hapus untuk checkout form](/img/config/checkout-form-active.png)

Jangan lupa untuk menyimpan checkout form Anda!

![Tombol Save Checkout Form](/img/config/checkout-form-save.png)

Untuk mendapatkan shortcode formulir Anda, klik **Generate Shortcode** dan salin hasil yang ditampilkan di jendela modal.

![Modal Generate Shortcode dengan shortcode untuk disalin](/img/config/checkout-form-editor.png)

_**Catatan:** Anda perlu menambahkan shortcode ini ke halaman pendaftaran Anda agar checkout form ini ditambahkan ke dalamnya._

## Memilih produk dan template terlebih dahulu melalui parameter URL:

Jika Anda ingin membuat pricing table kustom untuk produk Anda dan memilih terlebih dahulu di checkout form produk atau template yang dipilih pelanggan dari pricing table atau halaman template Anda, Anda dapat menggunakan parameter URL untuk ini.

### **Untuk paket:**

Buka **Ultimate Multisite > Products > Select a plan**. Anda akan melihat tombol **Click to copy Shareable Link** di bagian atas halaman. Ini adalah tautan yang dapat Anda gunakan untuk memilih terlebih dahulu paket spesifik ini di checkout form Anda.

![Halaman produk dengan tombol shareable link](/img/config/products-list.png)

Perlu diperhatikan bahwa shareable link ini hanya valid untuk **Plans**. Anda tidak dapat menggunakan shareable link untuk package atau service.

### Untuk template:

Jika Anda ingin memilih template situs terlebih dahulu di checkout form Anda, Anda dapat menggunakan parameter: **?template_id=X** pada URL halaman pendaftaran Anda. "X" perlu diganti dengan **nomor ID template situs**. Untuk mendapatkan nomor ini, buka **Ultimate Multisite > Sites**.

Klik **Manage** tepat di bawah template situs yang ingin Anda gunakan. Anda akan melihat nomor SITE ID. Cukup gunakan nomor ini agar template situs spesifik ini terpilih terlebih dahulu di checkout form Anda. Dalam kasus kita di sini, parameter URL-nya adalah **?template_id=2**.

![Daftar situs yang menampilkan ID template situs](/img/config/site-templates-list.png)

Katakanlah situs web jaringan kita adalah [**www.mynetwork.com**](http://www.mynetwork.com) dan halaman pendaftaran kita dengan checkout form berada di halaman **/register**. URL lengkap dengan template situs yang sudah dipilih sebelumnya akan terlihat seperti [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Dan jika Anda mau, Anda dapat memilih terlebih dahulu baik produk maupun template ke checkout form Anda. Yang perlu Anda lakukan hanyalah menyalin shareable link dari paket dan menempelkan parameter template di akhir. Hasilnya akan terlihat seperti [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
