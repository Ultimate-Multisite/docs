---
title: Formulir Checkout
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formulir Checkout

Formulir Checkout adalah cara yang mudah dan fleksibel untuk bereksperimen dengan berbagai pendekatan saat mencoba mengonversi pelanggan baru.

Ultimate Multisite 2.0 menawarkan editor Formulir Checkout yang memungkinkan Anda membuat formulir sebanyak yang Anda inginkan, dengan berbagai field, produk yang ditawarkan, dan sebagainya.

Untuk mengakses fitur ini, buka menu Formulir Checkout, di side-bar kiri.

![Daftar Formulir Checkout](/img/config/checkout-forms-list.png)

Di halaman ini, Anda dapat melihat semua formulir checkout yang Anda miliki.

Tabel daftar menyertakan kolom **Status** sehingga Anda dapat memastikan apakah setiap formulir saat ini tersedia untuk pelanggan:

| Status | Arti |
|---|---|
| **Aktif** | Formulir dapat digunakan di mana pun shortcode atau halaman pendaftarannya diterbitkan. |
| **Tidak Aktif** | Formulir disimpan tetapi dinonaktifkan. Pelanggan tidak dapat menyelesaikan checkout dengannya sampai Anda mengaktifkannya kembali. |

Gunakan kolom status sebelum mengedit alur pendaftaran publik, terutama ketika Anda menyimpan formulir checkout draf atau musiman bersama formulir aktif Anda.

Jika Anda ingin membuat yang baru, cukup klik Tambah Formulir Checkout di bagian atas halaman.

Anda dapat memilih salah satu dari tiga opsi ini sebagai titik awal: satu langkah, multi-langkah, atau kosong. Lalu, klik untuk Pergi ke Editor.

Ketika Anda memilih **satu langkah** atau **multi-langkah** sebagai titik awal, templat formulir kini menyertakan field **Pemilihan Template** secara default. Field ini memungkinkan pelanggan Anda memilih templat site selama proses pendaftaran. Anda dapat membiarkannya tetap ada, menghapusnya, atau memindahkan posisinya seperti field lain di editor.

![Editor Formulir Checkout](/img/config/checkout-form-editor.png)

Sebagai alternatif, Anda dapat mengedit atau menduplikasi formulir yang sudah Anda miliki dengan mengklik opsi di bawah namanya. Di sana, Anda juga akan menemukan opsi untuk menyalin shortcode formulir atau menghapus formulir.

![Aksi hover formulir checkout](/img/config/checkout-form-hover-actions.png)

#### Ikhtisar Editor Formulir Checkout

Editor formulir checkout menyediakan antarmuka lengkap untuk membangun formulir pendaftaran Anda. Berikut ikhtisar tata letak editor:

![Ikhtisar editor Formulir Checkout](/img/config/checkout-form-editor-overview.png)

### Mengedit Formulir Checkout

Anda dapat membuat formulir checkout untuk berbagai tujuan. Dalam contoh ini kita akan mengerjakan formulir pendaftaran.

Setelah membuka editor formulir checkout, beri formulir Anda nama (yang hanya akan digunakan untuk referensi internal) dan slug (digunakan untuk membuat shortcakes, misalnya).

![Editor Formulir Checkout](/img/config/checkout-form-editor.png)

Formulir terdiri dari langkah dan field. Anda dapat menambahkan langkah baru dengan mengklik Tambah Langkah Checkout Baru.

![Tambah Langkah Checkout Baru](/img/config/checkout-form-add-step.png)

Pada tab pertama jendela modal, isi konten langkah formulir Anda. Beri ID, nama, dan deskripsi. Item ini sebagian besar digunakan secara internal.

![Tab konten langkah formulir checkout](/img/config/checkout-form-step-content.png)

Selanjutnya, atur visibilitas langkah. Anda dapat memilih antara "Selalu tampilkan", "Hanya tampilkan untuk pengguna yang sudah login", atau "Hanya tampilkan untuk tamu".

![Tab visibilitas langkah formulir checkout](/img/config/checkout-form-step-visibility.png)

Terakhir, konfigurasikan gaya langkah. Field ini opsional.

![Tab gaya langkah formulir checkout](/img/config/checkout-form-step-style.png)

Sekarang, saatnya menambahkan field ke langkah pertama kita. Cukup klik Tambah Field Baru dan pilih jenis bagian yang Anda inginkan.

![Langkah formulir checkout dengan field](/img/config/checkout-form-step-with-fields.png)

Setiap field memiliki parameter berbeda yang perlu diisi. Untuk entri pertama ini, kita akan memilih field "Username".

![Dropdown pemilihan jenis field](/img/config/checkout-form-field-type-dropdown.png)

![Pengaturan konten field Username](/img/config/checkout-form-username-content.png)

![Pengaturan visibilitas field Username](/img/config/checkout-form-username-visibility.png)

![Pengaturan gaya field Username](/img/config/checkout-form-username-style.png)

Anda dapat menambahkan langkah dan field sebanyak yang Anda butuhkan. Untuk menampilkan produk Anda agar pelanggan dapat memilih salah satunya, gunakan field Tabel Harga. Jika Anda ingin membiarkan klien Anda memilih templat, tambahkan field Pemilihan Template. Dan seterusnya.

![Dialog Tambah Field Baru](/img/config/checkout-form-add-field-dialog.png)

_**Catatan:** username, email, password, judul site, URL site, ringkasan pesanan, pembayaran, dan tombol kirim adalah field wajib untuk membuat formulir checkout._

Saat Anda mengerjakan formulir checkout, Anda selalu dapat menggunakan tombol Pratinjau untuk melihat bagaimana klien Anda akan melihat formulir tersebut. Anda juga dapat berganti antara tampilan sebagai pengguna yang sudah ada atau pengunjung

![Tombol pratinjau Formulir Checkout](/img/config/checkout-form-preview-button.png)

![Modal pratinjau Formulir Checkout](/img/config/checkout-form-preview-modal.png)

Terakhir, pada Opsi Lanjutan Anda dapat mengonfigurasi pesan untuk halaman "Terima Kasih", menambahkan snippet untuk melacak konversi, menambahkan CSS kustom ke formulir checkout Anda, atau membatasinya ke negara tertentu.

![Opsi Lanjutan](/img/config/checkout-form-advanced.png)

Anda juga dapat mengaktifkan atau menonaktifkan formulir checkout secara manual dengan mengalihkan opsi ini di kolom kanan, atau menghapus formulir secara permanen.

![Toggle aktif](/img/config/checkout-form-active.png)

Untuk menghapus formulir, klik opsi hapus dalam aksi formulir:

![Opsi hapus formulir checkout](/img/config/checkout-form-delete.png)

Jangan lupa untuk menyimpan formulir checkout Anda!

![Tombol simpan](/img/config/checkout-form-save.png)

Untuk mendapatkan shortcode formulir Anda, klik Buat Shortcode dan salin hasil yang ditampilkan pada jendela modal.

![Tombol simpan dengan shortcode](/img/config/checkout-form-save.png)

### Field Tabel Harga

Field **Tabel Harga** menampilkan produk Anda pada formulir checkout sehingga pelanggan dapat memilih paket. Ketika Anda mengedit field ini, Anda dapat mengonfigurasi beberapa opsi:

![Pengaturan field Tabel Harga](/img/config/pricing-table-field-settings.png)

Berikut tampilan tabel harga pada formulir pendaftaran frontend:

![Tabel harga checkout frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Produk**: Pilih produk mana yang akan ditampilkan dan urutan kemunculannya.
  * **Paksa Durasi Berbeda**: Saat diaktifkan, semua produk ditampilkan terlepas dari apakah produk tersebut memiliki variasi harga yang cocok untuk periode penagihan yang sedang dipilih. Saat dinonaktifkan (default), produk tanpa variasi untuk periode yang dipilih akan disembunyikan.
    ![Opsi paksa durasi pada tabel harga](/img/config/pricing-table-force-durations.png)
  * **Sembunyikan saat Sudah Dipilih**: Menyembunyikan tabel harga saat sebuah paket sudah dipilih melalui URL (misalnya `/register/premium`).
  * **Template Tabel Harga**: Pilih template visual untuk tabel harga (Simple List, Legacy, dll.).

Jika Anda menambahkan produk ke Tabel Harga sebelum formulir menyertakan field yang diperlukan untuk menyelesaikan alur checkout produk tersebut, editor sekarang menampilkan peringatan. Gunakan peringatan tersebut untuk menambahkan field wajib yang hilang sebelum menerbitkan atau menyimpan perubahan untuk formulir pendaftaran live.

### Menambahkan Toggle Pemilihan Periode

Jika Anda telah mengonfigurasi [Variasi Harga](creating-your-first-subscription-product#price-variations) pada produk Anda (misalnya harga bulanan dan tahunan), Anda dapat menambahkan field **Pemilihan Periode** ke formulir checkout Anda. Field ini menampilkan toggle yang memungkinkan pelanggan beralih antar periode penagihan, dan tabel harga diperbarui secara dinamis secara real time.

#### Langkah 1: Siapkan Variasi Harga pada Produk Anda

Sebelum menambahkan field Pemilihan Periode, pastikan produk Anda memiliki variasi harga yang dikonfigurasi. Buka **Ultimate Multisite > Products**, edit produk, dan arahkan ke tab **Price Variations** untuk menambahkan periode penagihan alternatif (misalnya Tahunan dengan harga diskon).

![Tab Price Variations pada sebuah produk](/img/config/product-price-variations-tab.png)

#### Langkah 2: Tambahkan Field Pemilihan Periode ke Formulir Checkout Anda

1. Buka **Ultimate Multisite > Checkout Forms** dan edit formulir checkout Anda.

2. Gulir ke bawah ke langkah yang berisi field **Tabel Harga** Anda dan klik **Add new Field**.

3. Dalam dialog pemilihan tipe field, klik **Period Select**.

![Dialog Add New Field yang menampilkan Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurasikan opsi periode. Setiap opsi membutuhkan:
   * **Durasi**: Angka (misalnya `1`)
   * **Unit durasi**: Tipe periode (Hari, Minggu, Bulan, atau Tahun)
   * **Label**: Teks yang akan dilihat pelanggan (misalnya "Bulanan", "Tahunan")

5. Klik **+ Add Option** untuk menambahkan lebih banyak pilihan periode. Opsi ini harus cocok dengan variasi harga yang Anda konfigurasikan pada produk Anda.

![Pengaturan field Pemilihan Periode](/img/config/period-selection-field-settings.png)

6. Pilih **Template Pemilih Periode** (Clean adalah default, yang merender pemilih bergaya sederhana yang siap untuk CSS kustom).

7. Klik **Save Field**.

#### Langkah 3: Posisikan Field di Atas Tabel Harga

Untuk pengalaman pengguna terbaik, pastikan field Pemilihan Periode muncul **sebelum** field Tabel Harga dalam langkah checkout Anda. Anda dapat menyeret field untuk menyusun ulangnya di editor formulir checkout. Dengan cara ini, pelanggan terlebih dahulu memilih periode penagihan lalu melihat harga untuk periode tersebut.

![Editor formulir checkout yang menampilkan urutan field](/img/config/checkout-form-editor-with-fields.png)

#### Cara Kerjanya di Frontend

Setelah dikonfigurasi, pelanggan yang mengunjungi halaman pendaftaran Anda akan melihat pemilih periode di atas tabel harga. Saat mereka mengklik periode penagihan yang berbeda:

  * Tabel harga langsung diperbarui untuk menampilkan harga untuk periode yang dipilih (tidak perlu memuat ulang halaman).
  * Jika **Paksa Durasi Berbeda** dinonaktifkan pada field Tabel Harga, produk tanpa variasi harga untuk periode yang dipilih akan disembunyikan.
  * Jika **Paksa Durasi Berbeda** diaktifkan, semua produk tetap terlihat meskipun tidak memiliki variasi untuk periode yang dipilih (produk akan menampilkan harga default mereka).

#### Memilih Periode Penagihan Sebelumnya melalui URL

Anda juga dapat memilih produk dan periode penagihan sebelumnya melalui URL. Ultimate Multisite mendukung pola URL berikut:

  * `/register/premium` — Hanya memilih produk "Premium" sebelumnya
  * `/register/premium/12` — Memilih produk dan durasi 12 bulan sebelumnya
  * `/register/premium/1/year` — Memilih produk dengan durasi 1 tahun sebelumnya

### Field Pemilihan Template

Field **Pemilihan Template** memungkinkan pelanggan memilih template situs saat checkout. Field ini sekarang disertakan secara default dalam template formulir checkout **satu langkah** dan **multi-langkah** yang ditambahkan di Ultimate Multisite v2.6.1.

#### Menambahkan field secara manual

Jika Anda bekerja dengan formulir yang dibuat sebelum v2.6.1, atau dimulai dari template kosong:

1. Buka **Ultimate Multisite > Checkout Forms** dan edit formulir checkout Anda.
2. Pada langkah tempat detail situs dikumpulkan, klik **Add new Field**.
3. Pilih **Template Selection** dari dialog tipe field.
4. Konfigurasikan field:
   - **Label** — Judul yang dilihat pelanggan di atas grid template (misalnya "Pilih template situs").
   - **Wajib** — Apakah pelanggan harus memilih template sebelum melanjutkan.

#### Cara kerjanya

Saat pelanggan memilih template selama checkout, Ultimate Multisite menggunakannya saat menyediakan situs baru mereka. Template yang ditampilkan berasal dari daftar **Template Situs** Anda (**Ultimate Multisite > Site Templates**). Hanya template yang ditandai tersedia untuk pelanggan yang muncul di sini.

### Domain dasar formulir checkout

Ultimate Multisite v2.13.0 memperlakukan domain yang dikonfigurasi pada field **Site URL** formulir checkout sebagai domain dasar jaringan. Gunakan pengaturan domain yang tersedia pada field saat Anda ingin pelanggan membuat situs di bawah satu atau beberapa domain pendaftaran bersama, seperti `example.com` dan `sites.example.com`.

Domain dasar checkout-form bersama tidak diperlakukan sebagai pemetaan domain kustom per situs. Saat pelanggan membuat situs subdirektori pada salah satu dasar tersebut, Ultimate Multisite tidak membuat catatan domain-terpetakan yang akan membuat host bersama menjadi milik hanya satu situs tersebut. Host bersama tetap tersedia untuk situs saudara yang menggunakan dasar checkout form yang sama.

Pertahankan domain kustom untuk host terpetakan per pelanggan, seperti `customer-example.com`. Pertahankan domain dasar checkout-form untuk host pendaftaran bersama yang dapat digunakan banyak situs.

#### Menghapus bidang

Jika Anda tidak menawarkan templat situs, hapus bidang Pemilihan Templat dari formulir Anda. Pelanggan kemudian akan menerima templat default mana pun yang dikonfigurasi di **Ultimate Multisite > Settings > Site Templates**.
