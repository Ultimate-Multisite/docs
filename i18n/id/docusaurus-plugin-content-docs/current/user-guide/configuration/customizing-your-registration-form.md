---
title: Menyesuaikan Formulir Pendaftaran Anda
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Menyesuaikan Formulir Pendaftaran Anda {#customizing-your-registration-form}

Untuk membuat jaringan Anda terlihat unik dibandingkan semua SaaS lain yang dibangun di platform WordPress, Ultimate Multisite memungkinkan Anda menyesuaikan halaman pendaftaran dan login dengan fitur **Checkout Forms** kami.

Meskipun fitur ini merupakan cara yang mudah dan fleksibel untuk bereksperimen dengan berbagai pendekatan saat mencoba mengonversi pelanggan baru, fitur ini paling sering digunakan untuk membuat formulir pendaftaran yang dipersonalisasi. Artikel ini bertujuan menunjukkan kepada Anda bagaimana Anda dapat melakukannya.

## Halaman login dan pendaftaran: {#login-and-registration-pages}

Saat instalasi Ultimate Multisite, Ultimate Multisite secara otomatis membuat halaman login dan pendaftaran kustom di situs utama Anda. Anda dapat mengubah halaman default ini kapan saja dengan membuka halaman **Ultimate Multisite > Settings > Login & Registration** Anda.

![Halaman pengaturan Login dan Registration](/img/config/settings-general.png)

Berikut tampilan penuh halaman pengaturan login dan pendaftaran:

![Halaman penuh pengaturan Login dan Registration](/img/config/settings-login-registration-full.png)

Mari kita lihat satu per satu opsi yang dapat Anda sesuaikan di halaman **Login & Registration**:

  * **Aktifkan pendaftaran:** Opsi ini akan mengaktifkan atau menonaktifkan pendaftaran di jaringan Anda. Jika dinonaktifkan, pelanggan Anda tidak akan dapat mendaftar dan berlangganan produk Anda.

  * **Aktifkan verifikasi email:** Jika opsi ini diaktifkan, pelanggan yang berlangganan paket gratis atau paket berbayar dengan periode uji coba akan menerima email verifikasi dan perlu mengeklik tautan verifikasi agar situs web mereka dibuat.

  * **Halaman pendaftaran default:** Ini adalah halaman default untuk pendaftaran. Halaman ini harus dipublikasikan di situs web Anda dan memiliki formulir pendaftaran (juga dikenal sebagai checkout form) - tempat klien Anda akan berlangganan produk Anda. Anda dapat membuat halaman pendaftaran dan checkout form sebanyak yang Anda inginkan, cukup ingat untuk menaruh shortcode checkout form di halaman pendaftaran, jika tidak formulir tersebut tidak akan muncul.

  * **Gunakan halaman login kustom:** Opsi ini memungkinkan Anda menggunakan halaman login yang disesuaikan, selain halaman default wp-login.php. Jika opsi ini diaktifkan, Anda dapat memilih halaman mana yang akan digunakan untuk login pada opsi **Default login page** (tepat di bawahnya).

  * **Samarkan url login asli (wp-login.php)** : Jika Anda ingin menyembunyikan URL login asli, Anda dapat mengaktifkan opsi ini. Ini berguna untuk mencegah serangan brute-force. Jika opsi ini diaktifkan, Ultimate Multisite akan menampilkan error 404 ketika pengguna mencoba mengakses tautan wp-login.php asli

  * **Paksa publikasi situs sinkron:** Setelah pelanggan berlangganan produk di sebuah jaringan, situs baru yang tertunda perlu dikonversi menjadi situs jaringan sungguhan. Proses penerbitan terjadi melalui Job Queue, secara asinkron. Aktifkan opsi ini untuk memaksa publikasi terjadi dalam request yang sama dengan pendaftaran.

Sekarang, mari lihat opsi lain yang masih relevan dengan proses login dan pendaftaran. Opsi-opsi ini berada tepat di bawah **Opsi lain** pada halaman Login & registration yang sama:

  * **Peran default:** Ini adalah peran yang akan dimiliki pelanggan Anda di situs web mereka setelah proses pendaftaran.

  * **Aktifkan Jumper:** Mengaktifkan pintasan Jumper di area admin. Jumper memungkinkan administrator melompat cepat ke layar Ultimate Multisite, objek jaringan, dan tujuan lain yang didukung tanpa menelusuri setiap menu. Matikan jika Anda lebih suka menyembunyikan alat navigasi cepat tersebut dari antarmuka admin.

  * **Tambahkan pengguna ke situs utama juga:** Mengaktifkan opsi ini juga akan menambahkan pengguna ke situs utama jaringan Anda setelah proses pendaftaran. Jika Anda mengaktifkan opsi ini, opsi untuk mengatur **peran default** pengguna ini di situs web Anda juga akan muncul tepat di bawahnya.

  * **Aktifkan beberapa akun:** Izinkan pengguna memiliki akun di berbagai situs dalam jaringan Anda dengan alamat email yang sama. Jika opsi ini dimatikan, pelanggan Anda tidak akan dapat membuat Account di situs web lain yang berjalan di jaringan Anda dengan alamat email yang sama.

Dan itulah semua opsi terkait login dan pendaftaran yang dapat Anda sesuaikan! Jangan lupa menyimpan pengaturan Anda setelah selesai mengeditnya.

## Menggunakan beberapa formulir pendaftaran: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 menawarkan editor checkout form yang memungkinkan Anda membuat formulir sebanyak yang Anda inginkan, dengan field berbeda, produk yang ditawarkan, dan sebagainya.

Baik halaman login maupun pendaftaran disematkan dengan shortcode: **[wu_login_form]** pada halaman login dan**[wu_checkout]** untuk halaman pendaftaran. Anda dapat menyesuaikan halaman pendaftaran lebih lanjut dengan membangun atau membuat checkout form.

Untuk mengakses fitur ini, buka menu **Checkout Forms**, di sidebar kiri.

![Menu Checkout Forms di sidebar](/img/config/checkout-forms-list.png)

Di halaman ini, Anda dapat melihat semua checkout form yang Anda miliki.

Jika Anda ingin membuat yang baru, cukup klik **Add Checkout Form** di bagian atas halaman.

Anda dapat memilih salah satu dari tiga opsi ini sebagai titik awal Anda: satu langkah, multi-langkah, atau kosong. Lalu, klik **Go to the Editor**.

![Tambahkan Checkout Form dengan opsi satu langkah, multi-langkah, atau kosong](/img/config/checkout-forms-list.png)

Sebagai alternatif, Anda dapat mengedit atau menduplikasi formulir yang sudah Anda miliki dengan mengeklik opsi di bawah namanya. Di sana, Anda juga akan menemukan opsi untuk menyalin shortcode formulir atau menghapus formulir.

![Aksi hover checkout form dengan edit, duplikat, dan hapus](/img/config/checkout-form-hover-actions.png)

Jika Anda memilih satu langkah atau multi-langkah, checkout form sudah akan terisi sebelumnya dengan langkah-langkah dasar agar dapat bekerja. Lalu, jika Anda mau, Anda dapat menambahkan langkah ekstra ke dalamnya.

### Mengedit Checkout Form: {#editing-a-checkout-form}

Seperti yang kami sebutkan sebelumnya, Anda dapat membuat checkout form untuk berbagai tujuan. Dalam contoh ini kita akan mengerjakan formulir pendaftaran.

Setelah menavigasi ke editor checkout form, beri formulir Anda nama (yang akan digunakan hanya untuk referensi internal) dan slug (digunakan untuk membuat shortcode, misalnya).

![Editor formulir pembayaran dengan kolom nama dan slug](/img/config/checkout-form-name-slug.png)

Formulir terdiri dari langkah dan kolom. Anda dapat menambahkan langkah baru dengan mengeklik **Tambah Langkah Pembayaran Baru**.

![Tombol Tambah Langkah Pembayaran Baru](/img/config/checkout-form-add-step.png)

Pada tab pertama jendela modal, isi konten langkah formulir Anda. Beri langkah tersebut ID, nama, dan deskripsi. Item-item ini sebagian besar digunakan secara internal.

![Tab konten langkah pembayaran dengan ID, nama, dan deskripsi](/img/config/checkout-form-step-content.png)

Selanjutnya, atur visibilitas langkah. Anda dapat memilih antara **Selalu tampilkan** , **Hanya tampilkan untuk pengguna yang sudah masuk** atau **Hanya tampilkan untuk tamu**.

![Opsi visibilitas langkah pembayaran](/img/config/checkout-form-step-visibility.png)

Terakhir, konfigurasikan gaya langkah. Ini adalah kolom opsional.

![Konfigurasi gaya langkah pembayaran](/img/config/checkout-form-step-style.png)

Sekarang, saatnya menambahkan kolom ke langkah pertama kita. Cukup klik **Tambah Kolom Baru** dan pilih jenis bagian yang Anda inginkan.

![Tombol Tambah Kolom Baru](/img/config/checkout-form-add-field-button.png)![Dropdown pemilihan jenis kolom](/img/config/checkout-form-field-type-dropdown.png)

Setiap kolom memiliki parameter berbeda yang harus diisi. Untuk entri pertama ini, kita akan memilih kolom **Nama Pengguna**.

![Konfigurasi kolom Nama Pengguna](/img/config/checkout-form-username-content.png)![Parameter kolom Nama Pengguna](/img/config/checkout-form-username-visibility.png)![Pengaturan tambahan kolom Nama Pengguna](/img/config/checkout-form-username-style.png)

Anda dapat menambahkan sebanyak mungkin langkah dan kolom sesuai kebutuhan. Untuk menampilkan produk Anda agar pelanggan dapat memilih salah satunya, gunakan kolom Tabel Harga. Jika Anda ingin membiarkan klien memilih template, tambahkan kolom Pemilihan Template. Dan seterusnya.

![Editor formulir pembayaran dengan kolom pemilihan template](/img/config/checkout-form-with-template-field.png)

_**Catatan:** Jika Anda membuat produk setelah membuat formulir pembayaran, Anda perlu menambahkan produk tersebut di bagian Tabel Harga. Jika tidak menambahkannya, produk tersebut tidak akan muncul untuk pelanggan Anda di halaman pendaftaran._

_**Catatan 2:** nama pengguna, email, kata sandi, judul situs, URL situs, ringkasan pesanan, pembayaran, dan tombol kirim adalah kolom wajib untuk membuat formulir pembayaran._

Saat Anda sedang mengerjakan formulir pembayaran, Anda selalu dapat menggunakan tombol Pratinjau untuk melihat bagaimana klien Anda akan melihat formulir tersebut. Anda juga dapat bergantian antara tampilan sebagai pengguna yang sudah ada atau sebagai pengunjung.

![Tombol Pratinjau pada editor formulir pembayaran](/img/config/checkout-form-preview-button.png)![Pratinjau formulir pembayaran sebagai pengunjung atau pengguna yang sudah ada](/img/config/checkout-form-preview-modal.png)

Terakhir, pada **Opsi Lanjutan** Anda dapat mengonfigurasi pesan untuk halaman **Terima Kasih**, menambahkan snippet untuk melacak konversi, menambahkan CSS kustom ke formulir pembayaran Anda, atau membatasinya ke negara tertentu.

![Opsi Lanjutan dengan halaman Terima Kasih, pelacakan konversi, dan CSS kustom](/img/config/checkout-form-advanced.png)

Anda juga dapat mengaktifkan atau menonaktifkan formulir pembayaran secara manual dengan mengalihkan opsi ini di kolom kanan, atau menghapus formulir secara permanen.

![Toggle aktif dan opsi hapus untuk formulir pembayaran](/img/config/checkout-form-active.png)

Jangan lupa menyimpan formulir pembayaran Anda!

![Tombol Simpan Formulir Pembayaran](/img/config/checkout-form-save.png)

Untuk mendapatkan shortcode formulir Anda, klik **Buat Shortcode** dan salin hasil yang ditampilkan pada jendela modal.

![Modal Buat Shortcode dengan shortcode untuk disalin](/img/config/checkout-form-editor.png)

_**Catatan:** Anda perlu menambahkan shortcode ini ke halaman pendaftaran Anda agar formulir pembayaran ini ditambahkan ke halaman tersebut._

## Memilih produk dan template lebih awal melalui parameter URL: {#pre-selecting-products-and-templates-via-url-parameters}

Jika Anda ingin membuat tabel harga yang disesuaikan untuk produk Anda dan memilih lebih awal pada formulir pembayaran produk atau template yang dipilih pelanggan Anda dari tabel harga atau halaman template, Anda dapat menggunakan parameter URL untuk ini.

### **Untuk paket:** {#for-plans}

Buka **Ultimate Multisite > Produk > Pilih paket**. Anda seharusnya melihat tombol **Klik untuk menyalin Tautan yang Dapat Dibagikan** di bagian atas halaman. Ini adalah tautan yang dapat Anda gunakan untuk memilih lebih awal paket spesifik ini pada formulir pembayaran Anda.

![Halaman produk dengan tombol tautan yang dapat dibagikan](/img/config/products-list.png)

Perhatikan bahwa tautan yang dapat dibagikan ini hanya valid untuk **Paket**. Anda tidak dapat menggunakan tautan yang dapat dibagikan untuk paket bundel atau layanan.

### Untuk template: {#for-templates}

Jika Anda ingin memilih lebih awal template situs pada formulir pembayaran Anda, Anda dapat menggunakan parameter: **?template_id=X** pada URL halaman pendaftaran Anda. "X" perlu diganti dengan **nomor ID template situs**. Untuk mendapatkan nomor ini, buka **Ultimate Multisite > Situs**.

Klik **Kelola** tepat di bawah template situs yang ingin Anda gunakan. Anda akan melihat nomor SITE ID. Cukup gunakan nomor ini untuk template situs spesifik ini agar dipilih lebih awal pada formulir pembayaran Anda. Dalam kasus kami di sini, parameter URL-nya adalah **?template_id=2**.

![Daftar situs yang menampilkan ID template situs](/img/config/site-templates-list.png)

Misalkan situs web jaringan kita adalah [**www.mynetwork.com**](http://www.mynetwork.com) dan halaman pendaftaran kita dengan formulir pembayaran kita berada di halaman **/register**. URL lengkap dengan template situs ini dipilih lebih awal akan terlihat seperti [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Dan jika Anda mau, Anda dapat memilih lebih awal produk dan template sekaligus untuk formulir pembayaran Anda. Yang perlu Anda lakukan hanyalah menyalin tautan yang dapat dibagikan dari paket dan menempelkan parameter template di bagian akhir. Tampilannya akan seperti [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
