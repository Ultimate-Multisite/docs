---
title: Borang Pembayaran
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Borang Pembayaran

Borang Pembayaran ialah cara yang mudah dan fleksibel untuk bereksperimen dengan pendekatan yang berbeza apabila cuba menukar pelanggan baharu.

Ultimate Multisite 2.0 menawarkan editor Borang Pembayaran yang membolehkan anda mencipta seberapa banyak borang yang anda mahu, dengan medan yang berbeza, produk yang ditawarkan, dan sebagainya.

Untuk mengakses ciri ini, pergi ke menu Borang Pembayaran, pada bar sisi kiri.

![Senarai Borang Pembayaran](/img/config/checkout-forms-list.png)

Pada halaman ini, anda boleh melihat semua borang pembayaran yang anda ada.

Jadual senarai termasuk lajur **Status** supaya anda boleh mengesahkan sama ada setiap borang pada masa ini tersedia kepada pelanggan:

| Status | Maksud |
|---|---|
| **Aktif** | Borang boleh digunakan di mana-mana sahaja shortcode atau halaman pendaftarannya diterbitkan. |
| **Tidak Aktif** | Borang disimpan tetapi dinyahdayakan. Pelanggan tidak boleh melengkapkan pembayaran dengannya sehingga anda mendayakannya semula. |

Gunakan lajur status sebelum mengedit aliran pendaftaran awam, terutamanya apabila anda menyimpan borang pembayaran draf atau bermusim bersama borang langsung anda.

Jika anda mahu mencipta yang baharu, klik sahaja Tambah Borang Pembayaran di bahagian atas halaman.

Anda boleh memilih salah satu daripada tiga pilihan ini sebagai titik permulaan anda: satu langkah, berbilang langkah atau kosong. Kemudian, klik untuk Pergi ke Editor.

Apabila anda memilih **satu langkah** atau **berbilang langkah** sebagai titik permulaan anda, templat borang kini termasuk medan **Pemilihan Templat** secara lalai. Medan ini membolehkan pelanggan anda memilih templat laman semasa proses pendaftaran. Anda boleh membiarkannya di tempatnya, membuangnya, atau mengubah kedudukannya seperti mana-mana medan lain dalam editor.

![Editor Borang Pembayaran](/img/config/checkout-form-editor.png)

Sebagai alternatif, anda boleh mengedit atau menduplikasi borang yang sudah anda ada dengan mengklik pilihan di bawah namanya. Di sana, anda juga akan menemukan pilihan untuk menyalin shortcode borang atau memadamkan borang.

![Tindakan hover borang pembayaran](/img/config/checkout-form-hover-actions.png)

#### Gambaran Keseluruhan Editor Borang Pembayaran {#checkout-form-editor-overview}

Editor borang pembayaran menyediakan antara muka yang menyeluruh untuk membina borang pendaftaran anda. Berikut ialah gambaran keseluruhan susun atur editor:

![Gambaran keseluruhan editor Borang Pembayaran](/img/config/checkout-form-editor-overview.png)

### Mengedit Borang Pembayaran {#editing-a-checkout-form}

Anda boleh mencipta borang pembayaran untuk tujuan yang berbeza. Dalam contoh ini, kami akan bekerja pada borang pendaftaran.

Selepas menavigasi ke editor borang pembayaran, berikan borang anda nama (yang akan digunakan untuk rujukan dalaman sahaja) dan slug (digunakan untuk mencipta shortcakes, sebagai contoh).

![Editor Borang Pembayaran](/img/config/checkout-form-editor.png)

Borang terdiri daripada langkah dan medan. Anda boleh menambah langkah baharu dengan mengklik Tambah Langkah Pembayaran Baharu.

![Tambah Langkah Pembayaran Baharu](/img/config/checkout-form-add-step.png)

Pada tab pertama tetingkap modal, isikan kandungan langkah borang anda. Berikannya ID, nama dan penerangan. Item ini kebanyakannya digunakan secara dalaman.

![Tab kandungan langkah borang pembayaran](/img/config/checkout-form-step-content.png)

Seterusnya, tetapkan keterlihatan langkah. Anda boleh memilih antara "Sentiasa papar", "Hanya papar untuk pengguna yang log masuk" atau "Hanya papar untuk tetamu".

![Tab keterlihatan langkah borang pembayaran](/img/config/checkout-form-step-visibility.png)

Akhir sekali, konfigurasikan gaya langkah. Ini ialah medan pilihan.

![Tab gaya langkah borang pembayaran](/img/config/checkout-form-step-style.png)

Kini, tiba masanya untuk menambah medan pada langkah pertama kita. Klik sahaja untuk Tambah Medan Baharu dan pilih jenis seksyen yang anda mahu.

![Langkah borang pembayaran dengan medan](/img/config/checkout-form-step-with-fields.png)

Setiap medan mempunyai parameter berbeza untuk diisi. Untuk kemasukan pertama ini, kami akan memilih medan "Nama Pengguna".

![Dropdown pemilihan jenis medan](/img/config/checkout-form-field-type-dropdown.png)

![Tetapan kandungan medan Nama Pengguna](/img/config/checkout-form-username-content.png)

![Tetapan keterlihatan medan Nama Pengguna](/img/config/checkout-form-username-visibility.png)

![Tetapan gaya medan Nama Pengguna](/img/config/checkout-form-username-style.png)

Anda boleh menambah seberapa banyak langkah dan medan yang anda perlukan. Untuk memaparkan produk anda supaya pelanggan anda boleh memilih satu, gunakan medan Jadual Harga. Jika anda mahu membenarkan klien anda memilih templat, tambah medan Pemilihan Templat. Dan seterusnya.

![Dialog Tambah Medan Baharu](/img/config/checkout-form-add-field-dialog.png)

_**Nota:** nama pengguna, e-mel, kata laluan, tajuk laman, URL laman, ringkasan pesanan, pembayaran, dan butang hantar ialah medan wajib untuk mencipta borang pembayaran._

Semasa anda bekerja pada borang pembayaran anda, anda sentiasa boleh menggunakan butang Pratonton untuk melihat bagaimana klien anda akan melihat borang tersebut. Anda juga boleh bertukar antara paparan sebagai pengguna sedia ada atau pelawat

![Butang pratonton Borang Pembayaran](/img/config/checkout-form-preview-button.png)

![Modal pratonton Borang Pembayaran](/img/config/checkout-form-preview-modal.png)

Akhir sekali, dalam Pilihan Lanjutan anda boleh mengkonfigurasi mesej untuk halaman "Terima Kasih", menambah snippet untuk menjejak penukaran, menambah CSS tersuai pada borang pembayaran anda atau mengehadkannya kepada negara tertentu.

![Pilihan Lanjutan](/img/config/checkout-form-advanced.png)

Anda juga boleh mendayakan atau menyahdayakan borang pembayaran anda secara manual dengan menogol pilihan ini pada lajur kanan, atau memadamkan borang secara kekal.

![Togol aktif](/img/config/checkout-form-active.png)

Untuk memadamkan borang, klik pilihan padam dalam tindakan borang:

![Pilihan padam borang pembayaran](/img/config/checkout-form-delete.png)

Jangan lupa simpan borang pembayaran anda!

![Butang simpan](/img/config/checkout-form-save.png)

Untuk mendapatkan shortcode borang anda, klik untuk Jana Shortcode dan salin hasil yang ditunjukkan pada tetingkap modal.

![Butang simpan dengan shortcode](/img/config/checkout-form-save.png)

### Medan Jadual Harga {#the-pricing-table-field}

Medan **Jadual Harga** memaparkan produk anda pada borang pembayaran supaya pelanggan boleh memilih pelan. Apabila anda mengedit medan ini, anda boleh mengkonfigurasi beberapa pilihan:

![Tetapan medan Jadual Harga](/img/config/pricing-table-field-settings.png)

Berikut ialah bagaimana jadual harga muncul pada borang pendaftaran frontend:

![Jadual harga checkout Frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Produk**: Pilih produk yang hendak dipaparkan dan susunan kemunculannya.
  * **Paksa Tempoh Berbeza**: Apabila didayakan, semua produk ditunjukkan tanpa mengira sama ada produk tersebut mempunyai variasi harga yang sepadan untuk tempoh pengebilan yang sedang dipilih. Apabila dinyahdayakan (lalai), produk tanpa variasi untuk tempoh yang dipilih disembunyikan.
    ![Pilihan paksa tempoh jadual harga](/img/config/pricing-table-force-durations.png)
  * **Sembunyikan apabila Diprapilih**: Menyembunyikan jadual harga apabila pelan telah dipilih melalui URL (cth. `/register/premium`).
  * **Templat Jadual Harga**: Pilih templat visual untuk jadual harga (Senarai Ringkas, Legacy, dsb.).

Jika anda menambah produk pada Jadual Harga sebelum borang menyertakan medan yang diperlukan untuk melengkapkan aliran checkout produk tersebut, editor kini menunjukkan amaran. Gunakan amaran tersebut untuk menambah medan wajib yang hilang sebelum menerbitkan atau menyimpan perubahan untuk borang pendaftaran langsung.

### Menambah Togol Pemilihan Tempoh {#adding-a-period-selection-toggle}

Jika anda telah mengkonfigurasi [Variasi Harga](creating-your-first-subscription-product#price-variations) pada produk anda (cth. harga bulanan dan tahunan), anda boleh menambah medan **Pemilihan Tempoh** pada borang checkout anda. Medan ini memaparkan togol yang membolehkan pelanggan bertukar antara tempoh pengebilan, dan jadual harga dikemas kini secara dinamik dalam masa nyata.

#### Langkah 1: Sediakan Variasi Harga pada Produk Anda {#step-1-set-up-price-variations-on-your-products}

Sebelum menambah medan Pemilihan Tempoh, pastikan produk anda mempunyai variasi harga yang dikonfigurasi. Pergi ke **Ultimate Multisite > Produk**, edit produk, dan navigasi ke tab **Variasi Harga** untuk menambah tempoh pengebilan alternatif (cth. Tahunan pada harga diskaun).

![Tab Variasi Harga pada produk](/img/config/product-price-variations-tab.png)

#### Langkah 2: Tambah Medan Pemilihan Tempoh pada Borang Checkout Anda {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Pergi ke **Ultimate Multisite > Checkout Forms** dan edit borang checkout anda.

2. Tatal ke bawah ke langkah yang mengandungi medan **Jadual Harga** anda dan klik **Tambah Medan baharu**.

3. Dalam dialog pemilihan jenis medan, klik **Period Select**.

![Dialog Tambah Medan Baharu yang menunjukkan Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurasikan pilihan tempoh. Setiap pilihan memerlukan:
   * **Tempoh**: Nombor (cth. `1`)
   * **Unit tempoh**: Jenis tempoh (Hari, Minggu, Bulan, atau Tahun)
   * **Label**: Teks yang akan dilihat pelanggan (cth. "Bulanan", "Tahunan")

5. Klik **+ Tambah Pilihan** untuk menambah lebih banyak pilihan tempoh. Pilihan ini mesti sepadan dengan variasi harga yang anda konfigurasikan pada produk anda.

![Tetapan medan Pemilihan Tempoh](/img/config/period-selection-field-settings.png)

6. Pilih **Templat Pemilih Tempoh** (Clean ialah lalai, yang menghasilkan pemilih bergaya ringkas yang sedia untuk CSS tersuai).

7. Klik **Simpan Medan**.

#### Langkah 3: Letakkan Medan di Atas Jadual Harga {#step-3-position-the-field-above-the-pricing-table}

Untuk pengalaman pengguna terbaik, pastikan medan Pemilihan Tempoh muncul **sebelum** medan Jadual Harga dalam langkah checkout anda. Anda boleh menyeret medan untuk menyusun semulanya dalam editor borang checkout. Dengan cara ini, pelanggan mula-mula memilih tempoh pengebilan dan kemudian melihat harga untuk tempoh tersebut.

![Editor borang checkout yang menunjukkan susunan medan](/img/config/checkout-form-editor-with-fields.png)

#### Cara Ia Berfungsi pada Frontend {#how-it-works-on-the-frontend}

Setelah dikonfigurasi, pelanggan yang melawat halaman pendaftaran anda akan melihat pemilih tempoh di atas jadual harga. Apabila mereka mengklik tempoh pengebilan yang berbeza:

  * Jadual harga dikemas kini serta-merta untuk menunjukkan harga bagi tempoh yang dipilih (tiada muat semula halaman diperlukan).
  * Jika **Paksa Tempoh Berbeza** dinyahdayakan pada medan Jadual Harga, produk tanpa variasi harga untuk tempoh yang dipilih akan disembunyikan.
  * Jika **Paksa Tempoh Berbeza** didayakan, semua produk kekal kelihatan walaupun produk tersebut tidak mempunyai variasi untuk tempoh yang dipilih (produk tersebut akan menunjukkan harga lalainya).

#### Prapilih Tempoh Pengebilan melalui URL {#pre-selecting-a-billing-period-via-url}

Anda juga boleh prapilih produk dan tempoh pengebilan melalui URL. Ultimate Multisite menyokong corak URL ini:

  * `/register/premium` — Prapilih produk "Premium" sahaja
  * `/register/premium/12` — Prapilih produk dan tempoh 12 bulan
  * `/register/premium/1/year` — Prapilih produk dengan tempoh 1 tahun

### Medan Pemilihan Templat {#the-template-selection-field}

Medan **Pemilihan Templat** membolehkan pelanggan memilih templat laman semasa checkout. Medan ini kini disertakan secara lalai dalam templat borang checkout **satu langkah** dan **berbilang langkah** yang ditambah dalam Ultimate Multisite v2.6.1.

#### Menambah medan secara manual {#adding-the-field-manually}

Jika anda bekerja dengan borang yang dicipta sebelum v2.6.1, atau bermula daripada templat kosong:

1. Pergi ke **Ultimate Multisite > Checkout Forms** dan edit borang checkout anda.
2. Dalam langkah tempat butiran laman dikumpulkan, klik **Tambah Medan baharu**.
3. Pilih **Pemilihan Templat** daripada dialog jenis medan.
4. Konfigurasikan medan:
   - **Label** — Tajuk yang dilihat pelanggan di atas grid templat (cth. "Pilih templat laman").
   - **Wajib** — Sama ada pelanggan mesti memilih templat sebelum meneruskan.

#### Cara ia berfungsi {#how-it-works}

Apabila pelanggan memilih templat semasa checkout, Ultimate Multisite menggunakannya semasa menyediakan laman baharu mereka. Templat yang ditunjukkan datang daripada senarai **Templat Laman** anda (**Ultimate Multisite > Site Templates**). Hanya templat yang ditandakan sebagai tersedia kepada pelanggan muncul di sini.

### Domain asas borang checkout {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 menganggap domain yang dikonfigurasi pada medan **URL Laman** borang checkout sebagai domain asas rangkaian. Gunakan tetapan domain tersedia medan tersebut apabila anda mahu pelanggan mencipta laman di bawah satu atau lebih domain pendaftaran kongsi, seperti `example.com` dan `sites.example.com`.

Domain asas borang daftar keluar yang dikongsi tidak dianggap sebagai pemetaan domain tersuai per tapak. Apabila pelanggan mencipta tapak subdirektori pada salah satu asas tersebut, Ultimate Multisite tidak mencipta rekod domain dipetakan yang akan menjadikan hos dikongsi itu milik hanya satu tapak tersebut. Hos dikongsi kekal tersedia untuk tapak searas yang menggunakan asas borang daftar keluar yang sama.

Kekalkan domain tersuai untuk hos dipetakan per pelanggan, seperti `customer-example.com`. Kekalkan domain asas borang daftar keluar untuk hos pendaftaran dikongsi yang boleh digunakan oleh banyak tapak.

#### Mengalih keluar medan {#removing-the-field}

Jika anda tidak menawarkan templat tapak, alih keluar medan Pemilihan Templat daripada borang anda. Pelanggan kemudian akan menerima mana-mana templat lalai yang dikonfigurasikan di bawah **Ultimate Multisite > Tetapan > Templat Tapak**.
