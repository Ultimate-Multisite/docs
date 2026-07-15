---
title: Mengirim Email dan Siaran
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Mengirim Email dan Broadcast (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Ultimate Multisite dilengkapi dengan fitur yang memungkinkan Anda berkomunikasi dengan pelanggan Anda dengan mengirim email ke pengguna yang ditargetkan atau sekelompok pengguna, serta mengirim pemberitahuan di Dashboard admin mereka untuk menyiarkan pengumuman

## Tambahkan pemberitahuan admin ke Dashboard pelanggan Anda dengan Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Menggunakan fitur broadcast Ultimate Multisite, Anda dapat menambahkan **pemberitahuan admin** ke Dashboard admin subsite pengguna Anda.

Ini sangat membantu jika Anda perlu membuat pengumuman seperti pemeliharaan sistem atau menawarkan produk atau layanan baru kepada pengguna Anda yang sudah ada. Beginilah tampilan pemberitahuan admin di Dashboard pengguna Anda.

<!-- Tangkapan layar tidak tersedia: Broadcast pemberitahuan admin ditampilkan di Dashboard subsite pelanggan -->

Untuk memulai pemberitahuan admin, buka Dashboard admin jaringan Anda dan di bawah menu **Ultimate Multisite**, Anda akan menemukan opsi **Broadcasts**.

![Halaman daftar Broadcasts di admin Ultimate Multisite](/img/admin/broadcasts-list.png)

Anda juga dapat mengedit broadcast yang sudah ada:

![Antarmuka edit broadcast](/img/admin/broadcast-edit.png)

Dari halaman ini, klik tombol **Tambah Broadcast** di bagian atas.

Ini akan memunculkan jendela modal Tambah broadcast tempat Anda dapat memilih jenis broadcast yang ingin Anda kirim.

Silakan pilih **Pesan** lalu klik tombol **Langkah Berikutnya**.

![Modal tambah broadcast dengan opsi Pesan dipilih](/img/admin/broadcast-add-message.png)

Jendela berikutnya akan meminta Anda memilih **Pelanggan target** atau **Produk target**. Perhatikan bahwa Anda dapat memilih lebih dari satu pengguna atau lebih dari satu produk.

Untuk mencari akun pengguna atau produk, Anda perlu mulai mengetik kata kunci di dalam bidang.

Di bawah bidang **Jenis pesan**, Anda dapat memilih warna pemberitahuan. Ini akan menekankan urgensi pesan Anda.

Anda kemudian dapat mengklik **Langkah Berikutnya**.

![Bidang pelanggan target, produk target, dan jenis pesan untuk broadcast Pesan](/img/admin/broadcast-message-targets.png)

Jendela berikutnya adalah tempat Anda dapat mulai menyusun pesan dengan memasukkan subjek dan konten/pesan yang ingin Anda broadcast kepada pengguna.

![Subjek pesan broadcast dan editor konten pada langkah penyusunan](/img/admin/broadcast-edit.png)

Setelah membuat pesan, Anda kemudian dapat menekan tombol **Kirim**.

Dan selesai. Pemberitahuan admin seharusnya langsung muncul di Dashboard pengguna Anda.

## Kirim email kepada pelanggan Anda {#send-emails-to-your-customers}

Menggunakan fitur broadcast Ultimate Multisite, Anda dapat mengirim email kepada pengguna Anda. Anda memiliki opsi untuk mengirim email hanya kepada pengguna tertentu atau menargetkan grup pengguna tertentu berdasarkan produk atau paket langganan mereka.

Untuk memulai broadcast email, buka Dashboard admin jaringan Anda dan di bawah menu Ultimate Multisite, Anda akan menemukan opsi Broadcast.

![Halaman daftar Broadcasts yang digunakan sebagai titik awal untuk broadcast email](/img/admin/broadcasts-list.png)

Dari halaman ini, klik tombol **Tambah broadcast** di bagian atas.

Ini akan memunculkan jendela modal Tambah broadcast tempat Anda dapat memilih jenis broadcast yang ingin Anda kirim. Silakan pilih **Email** lalu klik tombol **Langkah Berikutnya**.

![Modal tambah broadcast dengan opsi Email dipilih](/img/admin/broadcast-add-email.png)

Jendela berikutnya akan meminta Anda memilih **Pelanggan target** atau **Produk target**. Perhatikan bahwa Anda dapat memilih lebih dari satu pengguna atau lebih dari satu produk.

Untuk mencari akun pengguna atau produk, Anda perlu mulai mengetik kata kunci di dalam bidang.

Setelah audiens target Anda dipilih, Anda dapat mengklik **Langkah Berikutnya**.

![Pemilihan pelanggan target dan produk target untuk broadcast Email](/img/admin/broadcast-email-targets.png)

Jendela berikutnya adalah tempat Anda dapat mulai menyusun email dengan memasukkan subjek dan konten/pesan yang ingin Anda kirim kepada pengguna.

<!-- Tangkapan layar tidak tersedia: Subjek broadcast email dan editor konten pada langkah penyusunan -->

Setelah membuat pesan, Anda dapat menekan tombol **Kirim**.

Dan begitulah mudahnya mengirim email kepada pengguna akhir Anda menggunakan fitur broadcast.

## Email sistem {#system-emails}

Email sistem di Ultimate Multisite adalah **notifikasi otomatis** yang dikirim oleh sistem setelah tindakan tertentu seperti pendaftaran, pembayaran, pemetaan domain, dll. Email ini dapat diedit atau dimodifikasi dari pengaturan Ultimate Multisite. Fitur ini juga dilengkapi dengan kemampuan yang memungkinkan Anda mereset dan mengimpor pengaturan yang ada dari instalasi Ultimate Multisite lain.

### Mereset & Mengimpor {#resetting--importing}

Versi baru Ultimate Multisite, serta add-on, dapat dan akan mendaftarkan email baru dari waktu ke waktu.

Untuk mencegah konflik dan masalah lainnya, **kami tidak akan menambahkan templat email baru sebagai Email Sistem pada instalasi Anda secara otomatis** , kecuali templat tersebut sangat penting untuk berfungsinya fitur tertentu dengan benar.

Namun, super admin dan agen dapat mengimpor email yang baru terdaftar ini melalui alat pengimpor. Proses tersebut akan membuat email sistem baru dengan konten dan konfigurasi templat email baru, memungkinkan super admin melakukan modifikasi apa pun yang mereka inginkan atau mempertahankannya apa adanya.

#### Cara mengimpor email sistem {#how-to-import-system-emails}

Buka halaman Pengaturan Ultimate Multisite Anda dan menuju ke tab **Emails**.

![Tab Emails di pengaturan Ultimate Multisite yang menampilkan bagian Email Sistem](/img/config/settings-emails-tab.png)

Kemudian, di bilah sisi, klik tombol **Kustomisasi Email Sistem**.

<!-- Tangkapan layar tidak tersedia: Tombol Kustomisasi Email Sistem pada panel bilah sisi Email Sistem -->

Di halaman Email Sistem, Anda akan melihat tombol tindakan **Reset & Import** di bagian atas. Mengklik tombol tersebut akan membuka jendela modal impor dan reset.

![Tombol tindakan Reset atau Import pada halaman admin Email Sistem](/img/admin/system-emails-reset-import.png)

Kemudian, Anda dapat mengalihkan opsi Import Emails untuk melihat email sistem mana yang tersedia untuk diimpor.

<!-- Screenshot unavailable: modal Reset dan Import dengan opsi Import Emails diperluas -->

#### Mereset Email Sistem {#reseting-system-emails}

Di lain waktu, Anda akan menyadari bahwa perubahan yang Anda buat pada template email tertentu tidak lagi sesuai untuk Anda dan Anda ingin meresetnya ke **keadaan default**.

Dalam kasus seperti itu, Anda memiliki dua opsi: Anda dapat cukup menghapus email sistem dan mengimpornya kembali (menggunakan instruksi di atas) - yang akan menghapus metrik pengiriman dan hal-hal lainnya, sehingga metode ini paling kurang disarankan.

Atau Anda dapat menggunakan **tool Reset & Import** untuk mereset template email tersebut.

Untuk mereset template email, Anda dapat mengikuti langkah-langkah di atas hingga mencapai tool Reset & Import, lalu aktifkan opsi **Reset** dan pilih email yang ingin Anda reset kembali ke konten defaultnya.

<!-- Screenshot unavailable: modal Reset dan Import dengan opsi Reset Emails diperluas -->
