---
title: Integrasi Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Mengintegrasikan Ultimate Multisite dengan Zapier

Dalam salah satu artikel, kami membahas [Webhooks](webhooks.md) dan bagaimana itu dapat digunakan untuk berintegrasi dengan aplikasi pihak ketiga.

Menggunakan webhooks sedikit rumit karena membutuhkan pengetahuan tingkat lanjut dalam coding dan menangkap payload. Menggunakan **Zapier** adalah cara bagi Anda untuk mengatasinya.

Zapier memiliki integrasi dengan lebih dari 5000+ aplikasi yang membuat komunikasi antara aplikasi yang berbeda menjadi lebih mudah.

Anda dapat membuat **Triggers** yang akan dijalankan saat event terjadi di jaringan Anda (misalnya sebuah Account dibuat dan memicu event account_create) atau menghasilkan **Actions** di jaringan Anda sebagai respons terhadap event eksternal (misalnya membuat membership Account baru di jaringan Ultimate Multisite Anda).

Hal ini dimungkinkan karena **trigger Ultimate Multisite Zapier** dan actions didukung oleh [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cara memulai {#how-to-start}

Pertama, cari Ultimate Multisite di daftar aplikasi Zapier. Sebagai alternatif, Anda dapat mengeklik [tautan ini](https://zapier.com/apps/wp-ultimo/integrations).

Buka dashboard Anda dan tekan tombol **+** **Create Zap** di sidebar kiri untuk menyiapkan Zap baru.

![Dashboard Zapier dengan tombol Create Zap](/img/admin/webhooks-list.png)

Anda akan dialihkan ke halaman pembuatan Zap.

Di kotak pencarian, ketik "wp ultimo". Klik untuk memilih opsi versi **Beta**.

![Mencari WP Ultimo di daftar aplikasi Zapier](/img/admin/webhooks-list.png)

Setelah memilih aplikasi kami, pilih event yang tersedia: **New Ultimate Multisite Event**.

![Memilih trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Sekarang kita perlu memberi Zapier akses ke **jaringan Anda**. Mengeklik **Sign in** akan membuka jendela baru yang meminta **API credentials**.

![Prompt Sign in Zapier untuk API credentials](/img/admin/webhooks-list.png)

Buka panel admin jaringan Anda dan navigasikan ke **Ultimate Multisite > Settings** > **API & Webhooks** dan cari bagian API Settings.

Pilih opsi **Enable API** karena ini diperlukan agar koneksi ini berfungsi.

![Pengaturan API dan Webhooks dengan opsi API Settings dan Enable API](/img/admin/settings-api-webhooks.png)

Gunakan ikon **Copy to Clipboard** pada field API Key dan API Secret, lalu tempelkan nilai tersebut di layar integrasi.

Pada field URL, masukkan URL lengkap jaringan Anda, termasuk protokol (HTTP atau HTTPS).

![Layar integrasi Zapier dengan field API Key, Secret, dan URL](/img/admin/webhooks-list.png)

Klik tombol **Yes, Continue** untuk melanjutkan ke langkah berikutnya. Jika semuanya berhasil, Anda akan disambut oleh Account baru Anda yang terhubung! Klik **Continue** untuk membuat trigger baru.

## Cara membuat Trigger baru {#how-to-create-a-new-trigger}

Sekarang setelah Account Anda terhubung, Anda dapat melihat event yang tersedia. Mari pilih event **payment_received** untuk tutorial ini.

![Memilih event payment_received di trigger Zapier](/img/admin/webhooks-list.png)

Setelah event dipilih dan Anda mengeklik **continue** , sebuah **test step** akan muncul.

![Test step Zapier untuk trigger](/img/admin/webhooks-list.png)

Pada tahap ini, Zapier akan menguji apakah Zap Anda dapat **mengambil payload spesifik untuk event tersebut**. Pada event mendatang dengan tipe yang sama, informasi dengan struktur yang sama ini akan dikirim.

![Pengujian trigger Zapier berhasil diselesaikan dengan payload](/img/admin/webhooks-list.png)

Dalam tutorial kami, pengujian **berhasil diselesaikan** dan mengembalikan informasi contoh payload. Informasi contoh ini akan berguna untuk memandu kita saat membuat actions. Trigger Anda sekarang telah dibuat dan siap dihubungkan ke aplikasi lain.

## Cara membuat Actions {#how-to-create-actions}

Actions menggunakan informasi dari trigger lain untuk membuat entri baru di jaringan Anda.

Dalam **langkah membuat action**, Anda akan memilih Ultimate Multisite **Beta** dan opsi **Create Items on Ultimate Multisite**.

![Membuat action dengan Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Pada langkah berikutnya, Anda akan membuat autentikasi, seperti yang kita lakukan di **Cara memulai** , atau memilih autentikasi yang telah dibuat. Dalam tutorial ini, kita akan memilih autentikasi yang sama yang telah dibuat sebelumnya.

![Memilih autentikasi untuk action Zapier](/img/admin/webhooks-list.png)

### Menyiapkan Action {#setting-up-the-action}

Ini adalah **langkah utama dari action** dan di sini semuanya sedikit berbeda. Informasi pertama yang akan Anda pilih adalah **Item**. Item adalah **model informasi** dari jaringan Anda seperti **Customers, Payments, Sites, Emails** dan lainnya.

![Memilih tipe Item untuk action Zapier](/img/admin/webhooks-list.png)

Saat memilih item, formulir akan **menyusun ulang untuk menampilkan field wajib dan opsional** untuk item yang dipilih.

Misalnya, saat memilih item **Customer** , field formulir akan menampilkan semua yang diperlukan untuk diisi agar dapat membuat Customer baru di jaringan.

![Field item Customer dalam penyiapan action Zapier](/img/admin/webhooks-list.png)

Setelah mengisi semua field yang ditandai sebagai **required** dan mengeklik continue, layar terakhir akan menampilkan field yang telah diisi dan field yang dibiarkan kosong.

![Pengujian action Zapier yang menampilkan field yang diisi dan tidak diisi](/img/admin/webhooks-list.png)

Segera setelah pengujian Anda selesai dan berhasil, action Anda telah dikonfigurasi. Penting juga untuk memeriksa di jaringan Anda apakah item telah dibuat dengan pengujian action Anda.
