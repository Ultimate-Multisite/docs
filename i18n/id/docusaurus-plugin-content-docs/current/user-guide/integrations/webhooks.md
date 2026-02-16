---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Panduan Awal Webhooks (v2)

_**PERHATIAN: Fitur atau artikel ini ditujukan untuk pengguna tingkat lanjut.**_

**Webhook** adalah cara bagi aplikasi atau perangkat lunak seperti Ultimate Multisite untuk memberikan informasi secara real-time ke aplikasi lain. Webhook mengirimkan data atau payload ke aplikasi lain secara langsung saat peristiwa terjadi, yang berarti Anda **mendapatkan data dengan segera.**

Fitur ini berguna jika Anda perlu mengintegrasikan atau mengirimkan data tertentu dari Ultimate Multisite ke CRM atau sistem lain setiap kali suatu peristiwa dipicu. Misalnya, Anda perlu mengirimkan nama dan alamat email pengguna ke mailing list setiap kali akun pengguna baru dibuat.

## Cara membuat webhook

Untuk membuat webhook, buka dashboard network admin Anda. Klik **Ultimate Multisite > Webhooks > Add New Webhook.**

![Halaman daftar Webhooks dengan tombol Add New Webhook](/img/admin/webhooks-list.png)

Saat membuat webhook baru, Anda akan diminta mengisi informasi seperti **Name, URL,** dan **Event**. Anda bisa menggunakan nama apa saja untuk webhook Anda. Field yang paling penting adalah URL dan Event.

![Formulir webhook baru dengan field Name, URL, dan Event](/img/admin/webhooks-list.png)

URL adalah **endpoint atau tujuan** tempat Ultimate Multisite akan mengirimkan **payload atau data**. Ini adalah aplikasi yang akan menerima data tersebut.

Zapier adalah solusi paling umum yang digunakan pengguna untuk mempermudah integrasi dengan aplikasi pihak ketiga. Tanpa platform seperti Zapier, Anda perlu membuat fungsi kustom secara manual untuk menangkap dan memproses data. Lihat artikel ini tentang **cara menggunakan webhook Ultimate Multisite dengan Zapier.**

Dalam artikel ini, kita akan mempelajari konsep dasar cara kerja webhook dan event yang tersedia di Ultimate Multisite. Kita akan menggunakan situs pihak ketiga bernama [requestbin.com](https://requestbin.com/). Situs ini memungkinkan kita membuat endpoint dan menangkap payload tanpa perlu menulis kode. _**Catatan: situs ini hanya akan menunjukkan bahwa data telah diterima.**_ Tidak akan ada pemrosesan atau tindakan apa pun yang dilakukan terhadap payload.

Buka [requestbin.com](https://requestbin.com/) dan klik Create Request Bin.

![Tombol Create Request Bin di website RequestBin](/img/admin/webhooks-list.png)

Setelah mengklik tombol tersebut, Anda akan diminta untuk login jika sudah memiliki akun atau mendaftar jika belum. Jika sudah memiliki akun, Anda akan langsung diarahkan ke dashboard mereka. Di dashboard tersebut, Anda akan langsung melihat endpoint atau URL yang bisa digunakan untuk membuat webhook Ultimate Multisite Anda.

![Dashboard RequestBin menampilkan URL endpoint](/img/admin/webhooks-list.png)

Salin URL tersebut dan kembali ke Ultimate Multisite. Tempelkan endpoint pada field URL dan pilih event dari dropdown. Dalam contoh ini, kita akan memilih **Payment Received**.

Event ini dipicu setiap kali pengguna melakukan pembayaran. Semua event yang tersedia, deskripsi, dan payload-nya tercantum di bagian bawah halaman. Klik tombol **Add New Webhook** untuk menyimpan webhook.

![Webhook dikonfigurasi dengan event Payment Received](/img/admin/webhooks-list.png)

Sekarang kita bisa mengirim test event ke endpoint untuk melihat apakah webhook yang kita buat berfungsi. Kita bisa melakukannya dengan mengklik **Send Test Event** di bawah webhook yang telah dibuat.

![Opsi Send Test Event di bawah webhook](/img/admin/webhooks-list.png)

Ini akan menampilkan jendela konfirmasi yang menyatakan bahwa pengujian berhasil.

![Konfirmasi test event webhook berhasil](/img/admin/webhooks-list.png)

Sekarang jika kita kembali ke situs _Requestbin_, kita akan melihat bahwa payload telah diterima dengan beberapa data pengujian.

![RequestBin menampilkan data payload webhook yang diterima](/img/admin/webhooks-list.png)

Ini adalah prinsip dasar cara kerja webhook dan endpoint. Jika Anda ingin membuat endpoint kustom, Anda perlu membuat fungsi kustom untuk memproses data yang Anda terima dari Ultimate Multisite.
