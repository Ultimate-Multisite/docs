---
title: Menyesuaikan Borang Pendaftaran Anda
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Menyesuaikan Borang Pendaftaran Anda

Untuk menjadikan rangkaian anda unik berbanding SaaS lain yang dibina di atas platform WordPress, Ultimate Multisite membolehkan anda menyesuaikan halaman pendaftaran dan log masuk dengan ciri **Checkout Forms** kami.

Walaupun ia merupakan cara yang mudah dan fleksibel untuk mencuba pendekatan berbeza semasa cuba menukar pelawat menjadi pelanggan baharu, ia kebanyakannya digunakan untuk mencipta borang pendaftaran yang diperibadikan. Artikel ini bertujuan menunjukkan kepada anda cara melakukannya.

## Halaman log masuk dan pendaftaran:

Selepas pemasangan Ultimate Multisite, ia secara automatik mencipta halaman log masuk dan pendaftaran tersuai di laman utama anda. Anda boleh menukar halaman lalai ini pada bila-bila masa dengan pergi ke halaman **Ultimate Multisite > Settings > Login & Registration**.

![Halaman tetapan Login and Registration](/img/config/settings-general.png)

Mari kita lihat setiap pilihan yang boleh anda sesuaikan di halaman **Login & Registration**:

  * **Enable registration:** Pilihan ini akan mengaktifkan atau menyahaktifkan pendaftaran di rangkaian anda. Jika ia dimatikan, pelanggan anda tidak akan dapat mendaftar dan melanggan produk anda.

  * **Enable email verification:** Jika pilihan ini diaktifkan, pelanggan yang melanggan pelan percuma atau pelan berbayar dengan tempoh percubaan akan menerima e-mel pengesahan dan perlu mengklik pautan pengesahan untuk laman web mereka dicipta.

  * **Default registration page:** Ini adalah halaman lalai untuk pendaftaran. Halaman ini perlu diterbitkan di laman web anda dan mempunyai borang pendaftaran (juga dikenali sebagai checkout form) - di mana pelanggan anda akan melanggan produk anda. Anda boleh mencipta seberapa banyak halaman pendaftaran dan checkout form yang anda mahu, cuma ingat untuk meletakkan shortcode checkout form di halaman pendaftaran, jika tidak ia tidak akan muncul.

  * **Use custom login page:** Pilihan ini membolehkan anda menggunakan halaman log masuk tersuai, selain halaman wp-login.php lalai. Jika pilihan ini diaktifkan, anda boleh memilih halaman mana yang akan digunakan untuk log masuk di pilihan **Default login page** (di bawah).

  * **Obfuscate the original login url (wp-login.php):** Jika anda ingin menyembunyikan URL log masuk asal, anda boleh mengaktifkan pilihan ini. Ini berguna untuk mencegah serangan brute-force. Jika pilihan ini diaktifkan, Ultimate Multisite akan memaparkan ralat 404 apabila pengguna cuba mengakses pautan wp-login.php asal.

  * **Force synchronous site publication:** Selepas pelanggan melanggan produk di rangkaian, laman baharu yang menunggu perlu ditukar menjadi laman rangkaian sebenar. Proses penerbitan berlaku melalui Job Queue, secara asinkron. Aktifkan pilihan ini untuk memaksa penerbitan berlaku dalam permintaan yang sama dengan pendaftaran.

Sekarang, mari lihat pilihan lain yang masih berkaitan dengan proses log masuk dan pendaftaran. Ia berada di bawah **Other options** di halaman Login & registration yang sama:

  * **Default role:** Ini adalah peranan yang pelanggan anda akan ada di laman web mereka selepas proses pendaftaran.

  * **Add users to the main site as well:** Mengaktifkan pilihan ini juga akan menambah pengguna ke laman utama rangkaian anda selepas proses pendaftaran. Jika anda mengaktifkan pilihan ini, pilihan untuk menetapkan **default role** pengguna ini di laman web anda juga akan muncul di bawah.

  * **Enable multiple accounts:** Membenarkan pengguna mempunyai akaun di laman berbeza dalam rangkaian anda dengan alamat e-mel yang sama. Jika pilihan ini dimatikan, pelanggan anda tidak akan dapat mencipta akaun di laman web lain yang berjalan di rangkaian anda dengan alamat e-mel yang sama.

Dan itulah semua pilihan berkaitan log masuk dan pendaftaran yang boleh anda sesuaikan! Jangan lupa simpan tetapan anda selepas selesai mengeditnya.

## Menggunakan pelbagai borang pendaftaran:

Ultimate Multisite 2.0 menawarkan editor checkout form yang membolehkan anda mencipta seberapa banyak borang yang anda mahu, dengan medan yang berbeza, produk yang ditawarkan, dan sebagainya.

Kedua-dua halaman log masuk dan pendaftaran disertakan dengan shortcode: **[wu_login_form]** di halaman log masuk dan **[wu_checkout]** untuk halaman pendaftaran. Anda boleh menyesuaikan halaman pendaftaran dengan lebih lanjut dengan membina atau mencipta checkout form.

Untuk mengakses ciri ini, pergi ke menu **Checkout Forms**, di bar sisi kiri.

![Menu Checkout Forms di bar sisi](/img/config/checkout-forms-list.png)

Di halaman ini, anda boleh melihat semua checkout form yang anda ada.

Jika anda ingin mencipta yang baharu, cuma klik pada **Add Checkout Form** di bahagian atas halaman.

Anda boleh memilih salah satu daripada tiga pilihan ini sebagai titik permulaan: single step, multi-step atau blank. Kemudian, klik **Go to the Editor**.

![Add Checkout Form dengan pilihan single step, multi-step, atau blank](/img/config/checkout-forms-list.png)

Sebagai alternatif, anda boleh mengedit atau menduplikasi borang yang sudah ada dengan mengklik pada pilihan di bawah namanya. Di situ, anda juga akan menemui pilihan untuk menyalin shortcode borang atau memadam borang.

![Tindakan hover checkout form dengan edit, duplicate, dan delete](/img/config/checkout-form-hover-actions.png)

Jika anda memilih single step atau multi-step, checkout form sudah pun diisi dengan langkah asas untuk ia berfungsi. Kemudian, jika anda mahu, anda boleh menambah langkah tambahan kepadanya.

### Mengedit Checkout Form:

Seperti yang kami nyatakan sebelum ini, anda boleh mencipta checkout form untuk tujuan berbeza. Dalam contoh ini kita akan mengusahakan borang pendaftaran.

Selepas menavigasi ke editor checkout form, berikan borang anda nama (yang akan digunakan untuk rujukan dalaman sahaja) dan slug (digunakan untuk mencipta shortcode, contohnya).

![Editor checkout form dengan medan name dan slug](/img/config/checkout-form-editor.png)

Borang terdiri daripada langkah dan medan. Anda boleh menambah langkah baharu dengan mengklik pada **Add New Checkout Step**.

![Butang Add New Checkout Step](/img/config/checkout-form-add-step.png)

Di tab pertama tetingkap modal, isikan kandungan langkah borang anda. Berikan ID, nama dan penerangan. Item-item ini kebanyakannya digunakan secara dalaman.

![Tab kandungan langkah checkout dengan ID, name, dan description](/img/config/checkout-form-step.png)

Seterusnya, tetapkan keterlihatan langkah. Anda boleh memilih antara **Always show**, **Only show for logged in users** atau **Only show for guests**.

![Pilihan keterlihatan langkah checkout](/img/config/checkout-form-step.png)

Akhir sekali, konfigurasikan gaya langkah. Ini adalah medan pilihan.

![Konfigurasi gaya langkah checkout](/img/config/checkout-form-step.png)

Sekarang, masa untuk menambah medan ke langkah pertama kita. Cuma klik **Add New Field** dan pilih jenis bahagian yang anda mahu.

![Butang Add New Field](/img/config/checkout-form-editor.png)![Dropdown pemilihan jenis medan](/img/config/checkout-form-step.png)

Setiap medan mempunyai parameter berbeza untuk diisi. Untuk entri pertama ini, kita akan memilih medan **Username**.

![Konfigurasi medan Username](/img/config/checkout-form-step.png)![Parameter medan Username](/img/config/checkout-form-step.png)![Tetapan tambahan medan Username](/img/config/checkout-form-step.png)

Anda boleh menambah seberapa banyak langkah dan medan yang anda perlukan. Untuk memaparkan produk anda untuk pelanggan memilih, gunakan medan Pricing Table. Jika anda ingin membiarkan pelanggan memilih templat, tambah medan Template Selection. Dan seterusnya.

_**Nota:** Jika anda mencipta produk selepas mencipta checkout form anda, anda perlu menambah produk tersebut di bahagian Pricing table. Jika anda tidak menambahnya, produk tidak akan muncul kepada pelanggan anda di halaman pendaftaran._

_**Nota 2:** username, email, password, site title, site URL, order summary, payment, dan submit button adalah medan wajib untuk mencipta checkout form._

Semasa anda mengusahakan checkout form anda, anda sentiasa boleh menggunakan butang Preview untuk melihat bagaimana pelanggan anda akan melihat borang tersebut. Anda juga boleh bertukar antara paparan sebagai pengguna sedia ada atau pelawat.

![Butang Preview pada editor checkout form](/img/config/checkout-form-editor.png)![Pratonton checkout form sebagai pelawat atau pengguna sedia ada](/img/config/checkout-form-editor.png)

Akhir sekali, di **Advanced Options** anda boleh mengkonfigurasikan mesej untuk halaman **Thank You**, menambah snippet untuk menjejak penukaran, menambah CSS tersuai ke checkout form anda atau mengehadkannya kepada negara tertentu.

![Advanced Options dengan halaman Thank You, penjejakan penukaran, dan CSS tersuai](/img/config/checkout-form-advanced.png)

Anda juga boleh mengaktifkan atau menyahaktifkan checkout form anda secara manual dengan menogol pilihan ini di lajur kanan, atau memadam borang secara kekal.

![Togol Active dan pilihan delete untuk checkout form](/img/config/checkout-form-active.png)

Jangan lupa simpan checkout form anda!

![Butang Save Checkout Form](/img/config/checkout-form-save.png)

Untuk mendapatkan shortcode borang anda, klik **Generate Shortcode** dan salin hasil yang ditunjukkan di tetingkap modal.

![Modal Generate Shortcode dengan shortcode untuk disalin](/img/config/checkout-form-editor.png)

_**Nota:** Anda perlu menambah shortcode ini ke halaman pendaftaran anda agar checkout form ini ditambah kepadanya._

## Pra-memilih produk dan templat melalui parameter URL:

Jika anda ingin mencipta jadual harga tersuai untuk produk anda dan pra-memilih di checkout form produk atau templat yang pelanggan anda pilih daripada jadual harga atau halaman templat anda, anda boleh menggunakan parameter URL untuk ini.

### **Untuk pelan:**

Pergi ke **Ultimate Multisite > Products > Select a plan**. Anda sepatutnya melihat butang **Click to copy Shareable Link** di bahagian atas halaman. Ini adalah pautan yang boleh anda gunakan untuk pra-memilih pelan khusus ini di checkout form anda.

![Halaman produk dengan butang shareable link](/img/config/products-list.png)

Perhatikan bahawa pautan boleh kongsi ini hanya sah untuk **Plans**. Anda tidak boleh menggunakan pautan boleh kongsi untuk packages atau services.

### Untuk templat:

Jika anda ingin pra-memilih templat laman di checkout form anda, anda boleh menggunakan parameter: **?template_id=X** pada URL halaman pendaftaran anda. "X" perlu digantikan dengan **nombor ID templat laman**. Untuk mendapatkan nombor ini, pergi ke **Ultimate Multisite > Sites**.

Klik pada **Manage** tepat di bawah templat laman yang anda ingin gunakan. Anda akan melihat nombor SITE ID. Cuma gunakan nombor ini untuk templat laman khusus ini dipra-pilih di checkout form anda. Dalam kes kita di sini, parameter URL akan menjadi **?template_id=2**.

![Senarai laman menunjukkan ID templat laman](/img/config/site-templates-list.png)

Katakan laman web rangkaian kita adalah [**www.mynetwork.com**](http://www.mynetwork.com) dan halaman pendaftaran kita dengan checkout form terletak di halaman **/register**. Keseluruhan URL dengan templat laman ini dipra-pilih akan kelihatan seperti [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Dan jika anda mahu, anda boleh pra-memilih kedua-dua produk dan templat ke checkout form anda. Apa yang perlu anda lakukan ialah menyalin pautan boleh kongsi pelan dan tampal parameter templat di hujungnya. Ia akan kelihatan seperti [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
