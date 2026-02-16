---
title: Mengirim Email dan Siaran
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# Mengirim Email dan Broadcast (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Ultimate Multisite dilengkapi fitur yang memungkinkan Anda berkomunikasi dengan pelanggan dengan mengirim email ke pengguna tertentu atau sekelompok pengguna, serta mengirimkan pemberitahuan di dashboard admin mereka untuk menyebarkan pengumuman.

## Menambahkan pemberitahuan admin ke dashboard pelanggan dengan Broadcast

Dengan fitur broadcast Ultimate Multisite, Anda dapat menambahkan **pemberitahuan admin** ke dashboard admin subsite pengguna Anda.

Fitur ini sangat berguna ketika Anda perlu membuat pengumuman seperti pemeliharaan sistem atau menawarkan produk atau layanan baru kepada pengguna yang sudah ada. Berikut tampilan pemberitahuan admin di dashboard pengguna Anda.

![Broadcast pemberitahuan admin ditampilkan di dashboard pelanggan](/img/admin/broadcasts-list.png)

Untuk memulai pemberitahuan admin, buka dashboard admin jaringan Anda dan di bawah menu **Ultimate Multisite**, Anda akan menemukan opsi **Broadcasts**.

![Menu Broadcasts di admin Ultimate Multisite](/img/admin/broadcasts-list.png)

Dari halaman ini, klik tombol **Add Broadcast** di bagian atas.

Ini akan memunculkan jendela modal Add broadcast di mana Anda dapat memilih jenis broadcast yang ingin dikirim.

Silakan pilih **Message** lalu klik tombol **Next Step**.

![Modal Add broadcast dengan tipe Message dipilih](/img/admin/broadcasts-list.png)

Jendela berikutnya akan meminta Anda memilih **Target customer** atau **Target product**. Perlu diketahui bahwa Anda dapat memilih lebih dari satu pengguna atau lebih dari satu produk.

Untuk mencari akun pengguna atau produk, Anda perlu mulai mengetik kata kunci di dalam kolom tersebut.

Di kolom **Message type**, Anda dapat memilih warna pemberitahuan. Ini akan menekankan urgensi pesan Anda.

Selanjutnya, Anda dapat klik **Next Step**.

![Pemilihan target pelanggan dan produk untuk broadcast](/img/admin/broadcasts-list.png)

Jendela berikutnya adalah tempat Anda dapat mulai menyusun pesan dengan memasukkan subjek dan konten/pesan yang ingin Anda broadcast ke pengguna.

![Editor subjek dan konten pesan broadcast](/img/admin/broadcasts-list.png)

Setelah membuat pesan, Anda dapat menekan tombol **Send**.

Selesai. Pemberitahuan admin akan langsung muncul di dashboard pengguna Anda.

## Mengirim email ke pelanggan

Dengan fitur broadcast Ultimate Multisite, Anda dapat mengirim email ke pengguna Anda. Anda memiliki opsi untuk mengirim email hanya ke pengguna tertentu atau menargetkan grup pengguna tertentu berdasarkan produk atau paket yang mereka langgani.

Untuk memulai broadcast email, buka dashboard admin jaringan Anda dan di bawah menu Ultimate Multisite, Anda akan menemukan opsi Broadcast.

![Halaman Broadcasts di admin Ultimate Multisite](/img/admin/broadcasts-list.png)

Dari halaman ini, klik tombol **Add broadcast** di bagian atas.

Ini akan memunculkan jendela modal Add broadcast di mana Anda dapat memilih jenis broadcast yang ingin dikirim. Silakan pilih **Email** lalu klik tombol **Next Step**.

![Modal Add broadcast dengan tipe Email dipilih](/img/admin/broadcasts-list.png)

Jendela berikutnya akan meminta Anda memilih **Target customer** atau **Target product**. Perlu diketahui bahwa Anda dapat memilih lebih dari satu pengguna atau lebih dari satu produk.

Untuk mencari akun pengguna atau produk, Anda perlu mulai mengetik kata kunci di dalam kolom tersebut.

Setelah target audiens dipilih, Anda dapat klik **Next Step**.

![Pemilihan target pelanggan dan produk untuk broadcast email](/img/admin/broadcasts-list.png)

Jendela berikutnya adalah tempat Anda dapat mulai menyusun email dengan memasukkan subjek dan konten/pesan yang ingin Anda kirim ke pengguna.

![Editor subjek dan konten broadcast email](/img/admin/broadcasts-list.png)

Setelah membuat pesan, Anda dapat menekan tombol **Send**.

Begitulah mudahnya mengirim email ke pengguna akhir Anda menggunakan fitur broadcast.

## Email sistem

Email sistem di Ultimate Multisite adalah **notifikasi otomatis** yang dikirim oleh sistem setelah tindakan tertentu seperti pendaftaran, pembayaran, pemetaan domain, dll. Email ini dapat diedit atau dimodifikasi dari pengaturan Ultimate Multisite. Fitur ini juga dilengkapi kemampuan untuk mereset dan mengimpor pengaturan yang ada dari instalasi Ultimate Multisite lainnya.

### Reset & Impor

Versi Ultimate Multisite baru, serta add-on, dapat dan akan mendaftarkan email baru dari waktu ke waktu.

Untuk mencegah konflik dan masalah lainnya, **kami tidak akan menambahkan template email baru sebagai Email Sistem di instalasi Anda secara otomatis**, kecuali jika template tersebut penting untuk fungsi yang benar dari fitur tertentu.

Namun, super admin dan agen dapat mengimpor email yang baru terdaftar ini melalui alat pengimpor. Proses ini akan membuat email sistem baru dengan konten dan konfigurasi dari template email baru, memungkinkan super admin untuk melakukan modifikasi yang diinginkan atau membiarkannya apa adanya.

#### Cara mengimpor email sistem

Buka halaman Pengaturan Ultimate Multisite Anda dan menuju ke tab **Emails**.

![Tab Emails di pengaturan Ultimate Multisite](/img/config/settings-emails.png)

Kemudian, di sidebar, klik tombol **Customize System Emails**.

![Tombol Customize System Emails di sidebar](/img/config/settings-emails.png)

Di halaman System Emails, Anda akan melihat tombol aksi **Reset & Import** di bagian atas. Mengklik tombol tersebut akan membuka jendela modal impor dan reset.

![Tombol aksi Reset and Import di halaman System Emails](/img/config/settings-emails.png)

Kemudian, Anda dapat mengaktifkan opsi Import Emails untuk melihat email sistem mana yang tersedia untuk diimpor.

![Opsi Import Emails menampilkan email sistem yang tersedia](/img/config/settings-emails.png)

#### Mereset Email Sistem

Di lain waktu, Anda mungkin menyadari bahwa perubahan yang Anda buat pada template email tertentu tidak lagi sesuai kebutuhan dan Anda ingin meresetnya ke **keadaan default**.

Dalam kasus seperti ini, Anda memiliki dua opsi: Anda dapat menghapus email sistem tersebut dan mengimpornya kembali (menggunakan instruksi di atas) - yang akan menghapus metrik pengiriman dan hal-hal lainnya, sehingga metode ini kurang disarankan.

Atau Anda dapat menggunakan **alat Reset & Import** untuk mereset template email tersebut.

Untuk mereset template email, Anda dapat mengikuti langkah-langkah di atas hingga Anda mencapai alat Reset & Import, lalu aktifkan opsi **Reset** dan pilih email yang ingin Anda kembalikan ke konten default-nya.

![Opsi Reset untuk mengembalikan template email ke default](/img/config/settings-emails.png)
