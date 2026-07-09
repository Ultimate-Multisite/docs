---
title: Menyesuaikan Borang Pendaftaran Anda
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Menyesuaikan Borang Pendaftaran anda

Untuk menjadikan rangkaian anda kelihatan unik berbanding semua SaaS lain yang dibina pada platform WordPress, Ultimate Multisite membolehkan anda menyesuaikan halaman pendaftaran dan log masuk anda dengan ciri **Checkout Forms** kami.

Walaupun ia merupakan cara yang mudah dan fleksibel untuk mencuba pendekatan berbeza ketika cuba menukar pelanggan baharu, ia kebanyakannya digunakan untuk mencipta borang pendaftaran yang diperibadikan. Artikel ini bertujuan untuk menunjukkan kepada anda cara melakukannya.

## Halaman log masuk dan pendaftaran:

Selepas pemasangan Ultimate Multisite, ia secara automatik mencipta halaman log masuk dan pendaftaran tersuai pada laman utama anda. Anda boleh menukar halaman lalai ini pada bila-bila masa dengan pergi ke halaman **Ultimate Multisite > Settings > Login & Registration** anda.

![Halaman tetapan Log Masuk dan Pendaftaran](/img/config/settings-general.png)

Berikut ialah paparan penuh halaman tetapan log masuk dan pendaftaran:

![Halaman penuh tetapan Log Masuk dan Pendaftaran](/img/config/settings-login-registration-full.png)

Mari kita lihat setiap pilihan yang boleh anda sesuaikan pada halaman **Login & Registration**:

  * **Dayakan pendaftaran:** Pilihan ini akan mendayakan atau menyahdayakan pendaftaran pada rangkaian anda. Jika ia dimatikan, pelanggan anda tidak akan dapat mendaftar dan melanggan produk anda.

  * **Dayakan pengesahan e-mel:** Jika pilihan ini dihidupkan, pelanggan yang melanggan pelan percuma atau pelan berbayar dengan tempoh percubaan akan menerima e-mel pengesahan dan perlu mengklik pautan pengesahan supaya laman web mereka dapat dicipta.

  * **Halaman pendaftaran lalai:** Ini ialah halaman lalai untuk pendaftaran. Halaman ini perlu diterbitkan pada laman web anda dan mempunyai borang pendaftaran (juga dikenali sebagai borang checkout) - tempat pelanggan anda akan melanggan produk anda. Anda boleh mencipta seberapa banyak halaman pendaftaran dan borang checkout yang anda mahu, cuma ingat untuk meletakkan shortcode borang checkout pada halaman pendaftaran, jika tidak ia tidak akan muncul.

  * **Gunakan halaman log masuk tersuai:** Pilihan ini membolehkan anda menggunakan halaman log masuk yang disesuaikan, selain daripada halaman lalai wp-login.php. Jika pilihan ini dihidupkan, anda boleh memilih halaman mana yang akan digunakan untuk log masuk pada pilihan **Default login page** (tepat di bawah).

  * **Kaburkan url log masuk asal (wp-login.php)** : Jika anda mahu menyembunyikan URL log masuk asal, anda boleh menghidupkan pilihan ini. Ini berguna untuk mencegah serangan brute-force. Jika pilihan ini didayakan, Ultimate Multisite akan memaparkan ralat 404 apabila pengguna cuba mengakses pautan wp-login.php asal

  * **Paksa penerbitan laman segerak:** Selepas pelanggan melanggan produk pada rangkaian, laman baharu yang belum selesai perlu ditukar menjadi laman rangkaian sebenar. Proses penerbitan berlaku melalui Job Queue, secara tak segerak. Dayakan pilihan ini untuk memaksa penerbitan berlaku dalam permintaan yang sama seperti pendaftaran.

Sekarang, mari lihat pilihan lain yang masih berkaitan dengan proses log masuk dan pendaftaran. Ia berada tepat di bawah **Other options** pada halaman Login & registration yang sama:

  * **Peranan lalai:** Ini ialah peranan yang akan dimiliki pelanggan anda pada laman web mereka selepas proses pendaftaran.

  * **Dayakan Jumper:** Mendayakan pintasan Jumper dalam kawasan pentadbir. Jumper membolehkan pentadbir melompat dengan cepat ke skrin Ultimate Multisite, objek rangkaian, dan destinasi lain yang disokong tanpa melayari setiap menu. Matikannya jika anda lebih suka menyembunyikan alat navigasi pantas itu daripada antara muka pentadbir.

  * **Tambah pengguna ke laman utama juga:** Mendayakan pilihan ini juga akan menambah pengguna ke laman utama rangkaian anda selepas proses pendaftaran. Jika anda mendayakan pilihan ini, pilihan untuk menetapkan **peranan lalai** pengguna ini pada laman web anda juga akan muncul tepat di bawah.

  * **Dayakan berbilang akaun:** Benarkan pengguna mempunyai akaun di laman yang berbeza dalam rangkaian anda dengan alamat e-mel yang sama. Jika pilihan ini dimatikan, pelanggan anda tidak akan dapat mencipta akaun pada laman web lain yang berjalan pada rangkaian anda dengan alamat e-mel yang sama.

Dan itulah semua pilihan berkaitan log masuk dan pendaftaran yang boleh anda sesuaikan! Jangan lupa untuk menyimpan tetapan anda selepas anda selesai mengeditnya.

## Menggunakan berbilang borang pendaftaran:

Ultimate Multisite 2.0 menawarkan editor borang checkout yang membolehkan anda mencipta seberapa banyak borang yang anda mahu, dengan medan berbeza, produk yang ditawarkan, dan sebagainya.

Kedua-dua halaman log masuk dan pendaftaran dibenamkan dengan shortcode: **[wu_login_form]** pada halaman log masuk dan**[wu_checkout]** untuk halaman pendaftaran. Anda boleh menyesuaikan lagi halaman pendaftaran dengan membina atau mencipta borang checkout.

Untuk mengakses ciri ini, pergi ke menu **Checkout Forms**, pada bar sisi kiri.

![Menu Checkout Forms dalam bar sisi](/img/config/checkout-forms-list.png)

Pada halaman ini, anda boleh melihat semua borang checkout yang anda ada.

Jika anda mahu mencipta yang baharu, cuma klik **Add Checkout Form** di bahagian atas halaman.

Anda boleh memilih salah satu daripada tiga pilihan ini sebagai titik permulaan anda: satu langkah, berbilang langkah atau kosong. Kemudian, klik **Go to the Editor**.

![Tambah Checkout Form dengan pilihan satu langkah, berbilang langkah, atau kosong](/img/config/checkout-forms-list.png)

Sebagai alternatif, anda boleh mengedit atau menduplikasi borang yang sudah anda ada dengan mengklik pilihan di bawah namanya. Di situ, anda juga akan menemui pilihan untuk menyalin shortcode borang atau memadam borang.

![Tindakan hover borang checkout dengan edit, duplikasi, dan padam](/img/config/checkout-form-hover-actions.png)

Jika anda memilih satu langkah atau berbilang langkah, borang checkout akan sedia diisi terlebih dahulu dengan langkah asas untuk ia berfungsi. Kemudian, jika anda mahu, anda boleh menambah langkah tambahan padanya.

### Mengedit Checkout Form:

Seperti yang kami sebut sebelum ini, anda boleh mencipta borang checkout untuk tujuan yang berbeza. Dalam contoh ini kami akan mengusahakan borang pendaftaran.

Selepas menavigasi ke editor borang checkout, berikan borang anda nama (yang akan digunakan untuk rujukan dalaman sahaja) dan slug (digunakan untuk mencipta shortcode, sebagai contoh).

![Editor borang checkout dengan medan nama dan slug](/img/config/checkout-form-name-slug.png)

Borang terdiri daripada langkah dan medan. Anda boleh menambah langkah baharu dengan mengklik **Add New Checkout Step**.

![Butang Add New Checkout Step](/img/config/checkout-form-add-step.png)

Pada tab pertama tetingkap modal, isi kandungan langkah borang anda. Berikan ID, nama dan penerangan. Item-item ini kebanyakannya digunakan secara dalaman.

![Tab kandungan langkah checkout dengan ID, nama dan penerangan](/img/config/checkout-form-step-content.png)

Seterusnya, tetapkan keterlihatan langkah tersebut. Anda boleh memilih antara **Always show** , **Only show for logged in users** atau **Only show for guests**.

![Pilihan keterlihatan langkah checkout](/img/config/checkout-form-step-visibility.png)

Akhir sekali, konfigurasikan gaya langkah tersebut. Medan-medan ini adalah pilihan.

![Konfigurasi gaya langkah checkout](/img/config/checkout-form-step-style.png)

Sekarang, tiba masanya untuk menambah medan pada langkah pertama kita. Cuma klik **Add New Field** dan pilih jenis bahagian yang anda mahu.

![Butang Add New Field](/img/config/checkout-form-add-field-button.png)![Dropdown pemilihan jenis medan](/img/config/checkout-form-field-type-dropdown.png)

Setiap medan mempunyai parameter berbeza yang perlu diisi. Untuk entri pertama ini, kita akan memilih medan **Username**.

![Konfigurasi medan Username](/img/config/checkout-form-username-content.png)![Parameter medan Username](/img/config/checkout-form-username-visibility.png)![Tetapan tambahan medan Username](/img/config/checkout-form-username-style.png)

Anda boleh menambah seberapa banyak langkah dan medan yang anda perlukan. Untuk memaparkan produk anda supaya pelanggan anda boleh memilih satu, gunakan medan Pricing Table. Jika anda mahu membenarkan klien anda memilih templat, tambah medan Template Selection. Dan seterusnya.

![Editor borang checkout dengan medan pemilihan templat](/img/config/checkout-form-with-template-field.png)

_**Nota:** Jika anda mencipta produk selepas mencipta borang checkout anda, anda perlu menambah produk tersebut dalam bahagian Pricing table. Jika anda tidak menambahnya, produk tersebut tidak akan muncul kepada pelanggan anda pada halaman pendaftaran._

_**Nota 2:** username, email, password, tajuk laman, URL laman, ringkasan pesanan, pembayaran, dan butang hantar ialah medan wajib untuk mencipta borang checkout._

Semasa anda bekerja pada borang checkout anda, anda sentiasa boleh menggunakan butang Preview untuk melihat bagaimana klien anda akan melihat borang tersebut. Anda juga boleh bertukar antara paparan sebagai pengguna sedia ada atau pelawat.

![Butang Preview pada editor borang checkout](/img/config/checkout-form-preview-button.png)![Pratonton borang checkout sebagai pelawat atau pengguna sedia ada](/img/config/checkout-form-preview-modal.png)

Akhir sekali, pada **Advanced Options** anda boleh mengkonfigurasikan mesej untuk halaman **Thank You**, menambah snippet untuk menjejaki penukaran, menambah CSS tersuai pada borang checkout anda atau mengehadkannya kepada negara tertentu.

![Advanced Options dengan halaman Thank You, penjejakan penukaran, dan CSS tersuai](/img/config/checkout-form-advanced.png)

Anda juga boleh mendayakan atau menyahdayakan borang checkout anda secara manual dengan menogol pilihan ini pada lajur kanan, atau memadam borang tersebut secara kekal.

![Togol aktif dan pilihan padam untuk borang checkout](/img/config/checkout-form-active.png)

Jangan lupa menyimpan borang checkout anda!

![Butang Save Checkout Form](/img/config/checkout-form-save.png)

Untuk mendapatkan shortcode borang anda, klik **Generate Shortcode** dan salin hasil yang dipaparkan pada tetingkap modal.

![Modal Generate Shortcode dengan shortcode untuk disalin](/img/config/checkout-form-editor.png)

_**Nota:** Anda perlu menambah shortcode ini pada halaman pendaftaran anda supaya borang checkout ini ditambahkan padanya._

## Memilih produk dan templat terlebih dahulu melalui parameter URL:

Jika anda mahu mencipta jadual harga tersuai untuk produk anda dan memilih terlebih dahulu pada borang checkout produk atau templat yang pelanggan anda pilih daripada jadual harga atau halaman templat anda, anda boleh menggunakan parameter URL untuk ini.

### **Untuk pelan:**

Pergi ke **Ultimate Multisite > Products > Select a plan**. Anda sepatutnya melihat butang **Click to copy Shareable Link** di bahagian atas halaman. Ini ialah pautan yang boleh anda gunakan untuk memilih pelan khusus ini terlebih dahulu pada borang checkout anda.

![Halaman produk dengan butang pautan boleh kongsi](/img/config/products-list.png)

Ambil perhatian bahawa pautan boleh kongsi ini hanya sah untuk **Plans**. Anda tidak boleh menggunakan pautan boleh kongsi untuk pakej atau perkhidmatan.

### Untuk templat:

Jika anda mahu memilih templat laman terlebih dahulu pada borang checkout anda, anda boleh menggunakan parameter: **?template_id=X** pada URL halaman pendaftaran anda. "X" perlu digantikan dengan **nombor ID templat laman**. Untuk mendapatkan nombor ini, pergi ke **Ultimate Multisite > Sites**.

Klik **Manage** betul-betul di bawah templat laman yang anda mahu gunakan. Anda akan melihat nombor SITE ID. Cuma gunakan nombor ini untuk templat laman khusus ini supaya dipilih terlebih dahulu pada borang checkout anda. Dalam kes kita di sini, parameter URL ialah **?template_id=2**.

![Senarai laman yang menunjukkan ID templat laman](/img/config/site-templates-list.png)

Katakan laman web rangkaian kita ialah [**www.mynetwork.com**](http://www.mynetwork.com) dan halaman pendaftaran kita dengan borang checkout kita terletak pada halaman **/register**. URL penuh dengan templat laman ini dipilih terlebih dahulu akan kelihatan seperti [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Dan jika anda mahu, anda boleh memilih kedua-dua produk dan templat terlebih dahulu untuk borang checkout anda. Apa yang perlu anda lakukan ialah menyalin pautan boleh kongsi pelan dan menampal parameter templat di hujungnya. Ia akan kelihatan seperti [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
