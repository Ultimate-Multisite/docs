---
title: Integrasi Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Mengintegrasikan Ultimate Multisite dengan Zapier

Di salah satu artikel sebelumnya, kita sudah membahas tentang [Webhooks](webhooks.md) dan bagaimana cara menggunakannya untuk integrasi dengan aplikasi pihak ketiga.

Menggunakan webhooks memang agak rumit karena membutuhkan pengetahuan coding tingkat lanjut serta kemampuan menangkap payload. Nah, **Zapier** adalah solusi yang bisa membantu Anda mengatasi hal tersebut.

Zapier terintegrasi dengan lebih dari 5000+ aplikasi, sehingga komunikasi antar aplikasi menjadi jauh lebih mudah.

Anda bisa membuat **Trigger** yang akan aktif ketika suatu event terjadi di jaringan Anda (misalnya saat akun dibuat dan memicu event account_create), atau membuat **Action** di jaringan Anda sebagai respons terhadap event eksternal (misalnya membuat membership akun baru di jaringan Ultimate Multisite Anda).

Semua ini dimungkinkan karena **trigger dan action Zapier Ultimate Multisite** didukung oleh [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cara Memulai

Pertama, cari Ultimate Multisite di daftar aplikasi Zapier. Atau, Anda bisa langsung klik [tautan ini](https://zapier.com/apps/wp-ultimo/integrations).

Buka dashboard Anda dan tekan tombol **+** **Create Zap** di sidebar kiri untuk membuat Zap baru.

![Dashboard Zapier dengan tombol Create Zap](/img/admin/webhooks-list.png)

Anda akan diarahkan ke halaman pembuatan Zap.

Di kotak pencarian, ketik "wp ultimo". Klik untuk memilih opsi versi **Beta**.

![Mencari WP Ultimo di daftar aplikasi Zapier](/img/admin/webhooks-list.png)

Setelah memilih aplikasi kami, pilih event yang tersedia: **New Ultimate Multisite Event**.

![Memilih trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Sekarang kita perlu memberikan akses Zapier ke **jaringan Anda**. Mengklik **Sign in** akan membuka jendela baru yang meminta **kredensial API**.

![Prompt Sign in Zapier untuk kredensial API](/img/admin/webhooks-list.png)

Buka panel admin jaringan Anda dan navigasi ke **Ultimate Multisite > Settings** > **API & Webhooks**, lalu cari bagian API Settings.

Pilih opsi **Enable API** karena ini diperlukan agar koneksi bisa berfungsi.

![Pengaturan API dengan opsi Enable API di Ultimate Multisite](/img/admin/webhooks-list.png)

Gunakan ikon **Copy to Clipboard** pada field API Key dan API Secret, lalu tempel nilai-nilai tersebut di layar integrasi.

Pada field URL, masukkan URL lengkap jaringan Anda, termasuk protokolnya (HTTP atau HTTPS).

![Layar integrasi Zapier dengan field API Key, Secret, dan URL](/img/admin/webhooks-list.png)

Klik tombol **Yes, Continue** untuk melanjutkan ke langkah berikutnya. Jika semuanya berjalan lancar, Anda akan disambut dengan akun baru yang sudah terhubung! Klik **Continue** untuk membuat trigger baru.

## Cara Membuat Trigger Baru

Setelah akun Anda terhubung, Anda bisa melihat event yang tersedia. Untuk tutorial ini, mari kita pilih event **payment_received**.

![Memilih event payment_received di trigger Zapier](/img/admin/webhooks-list.png)

Setelah event dipilih dan Anda klik **continue**, akan muncul **langkah pengujian**.

![Langkah pengujian Zapier untuk trigger](/img/admin/webhooks-list.png)

Di tahap ini, Zapier akan menguji apakah Zap Anda bisa **mengambil payload spesifik untuk event tersebut**. Pada event-event selanjutnya dengan tipe yang sama, informasi dengan struktur yang sama akan dikirimkan.

![Pengujian trigger Zapier berhasil diselesaikan dengan payload](/img/admin/webhooks-list.png)

Dalam tutorial ini, pengujian **berhasil diselesaikan** dan mengembalikan contoh informasi payload. Contoh informasi ini akan berguna sebagai panduan saat kita membuat action. Trigger Anda sekarang sudah dibuat dan siap dihubungkan dengan aplikasi lain.

## Cara Membuat Action

Action menggunakan informasi dari trigger lain untuk membuat entri baru di jaringan Anda.

Di **langkah pembuatan action**, pilih Ultimate Multisite **Beta** dan opsi **Create Items on Ultimate Multisite**.

![Membuat action dengan Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Di langkah selanjutnya, Anda bisa membuat autentikasi baru seperti yang kita lakukan di bagian **Cara Memulai**, atau memilih autentikasi yang sudah dibuat sebelumnya. Dalam tutorial ini, kita akan memilih autentikasi yang sama yang sudah dibuat sebelumnya.

![Memilih autentikasi untuk action Zapier](/img/admin/webhooks-list.png)

### Menyiapkan Action

Ini adalah **langkah utama dari action** dan di sini prosesnya sedikit berbeda. Informasi pertama yang akan Anda pilih adalah **Item**. Item adalah **model informasi** dari jaringan Anda seperti **Customers, Payments, Sites, Emails** dan lainnya.

![Memilih tipe Item untuk action Zapier](/img/admin/webhooks-list.png)

Ketika memilih item, form akan **menyesuaikan untuk menampilkan field yang wajib dan opsional** sesuai item yang dipilih.

Misalnya, ketika memilih item **Customer**, field form akan menampilkan semua yang perlu diisi untuk membuat Customer baru di jaringan.

![Field item Customer dalam pengaturan action Zapier](/img/admin/webhooks-list.png)

Setelah mengisi semua field yang ditandai **required** dan mengklik continue, akan muncul layar terakhir yang menampilkan field yang sudah diisi dan field yang dibiarkan kosong.

![Pengujian action Zapier menampilkan field yang terisi dan tidak terisi](/img/admin/webhooks-list.png)

Setelah pengujian selesai dan berhasil, action Anda sudah terkonfigurasi. Penting juga untuk memeriksa di jaringan Anda apakah item sudah dibuat sesuai dengan pengujian action Anda.
