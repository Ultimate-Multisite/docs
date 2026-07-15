---
title: Webhook
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Pandangan Pertama tentang Webhooks (v2)

_**PERHATIAN: Perhatikan bahwa fitur atau artikel ini ditujukan untuk pengguna tingkat lanjut.**_

Sebuah **webhook** adalah cara bagi sebuah aplikasi atau perangkat lunak seperti Ultimate Multisite untuk menyediakan informasi real-time kepada aplikasi lain. Webhook mengirimkan data atau payload ke aplikasi lain saat itu terjadi, yang berarti Anda **mendapatkan data dengan segera.**

Ini berguna jika Anda perlu mengintegrasikan atau meneruskan data tertentu dari Ultimate Multisite ke CRM atau sistem lain setiap kali sebuah event dipicu. Misalnya, Anda perlu mengirimkan nama dan alamat email pengguna ke mailing list setiap kali Account pengguna baru dibuat.

## Cara membuat webhook {#how-to-create-a-webhook}

Untuk membuat webhook, buka Dashboard admin jaringan Anda. Klik **Ultimate Multisite > Webhooks > Add New Webhook.**

![Halaman daftar Webhooks kosong dengan tombol Add New Webhook](/img/admin/webhooks-list-empty.png)

Kemudian Anda dapat mengedit konfigurasi webhook:

![Formulir Add New Webhook dengan field Name, Event, dan URL](/img/admin/webhook-add-modal.png)

Saat membuat webhook baru, Anda akan diminta memberikan informasi seperti **Name, URL,** dan **Event**. Anda dapat menggunakan nama apa pun yang Anda inginkan untuk webhook Anda. Field yang paling penting adalah URL dan Event.

![Antarmuka edit webhook yang menampilkan field URL dan pratinjau payload](/img/admin/webhook-url-field.png)

URL adalah **endpoint atau tujuan** tempat Ultimate Multisite akan mengirimkan **payload atau data**. Ini adalah aplikasi yang akan menerima data tersebut.

Zapier adalah solusi paling umum yang digunakan pengguna untuk membuat integrasi dengan aplikasi pihak ke-3 menjadi lebih mudah. Tanpa platform seperti Zapier, Anda perlu membuat fungsi khusus secara manual yang akan menangkap data dan memprosesnya. Lihat artikel ini tentang **cara menggunakan webhook Ultimate Multisite dengan Zapier.**

Dalam artikel ini, kita akan melihat konsep dasar tentang cara kerja webhook dan event yang tersedia di Ultimate Multisite. Kita akan menggunakan site pihak ke-3 bernama [requestbin.com](https://requestbin.com/). Site ini akan memungkinkan kita membuat endpoint dan menangkap payload tanpa melakukan coding apa pun. _**Penafian: semua yang akan dilakukannya adalah menunjukkan kepada kita bahwa data telah diterima.**_ Tidak akan ada pemrosesan atau tindakan apa pun yang dilakukan terhadap payload.

Buka [requestbin.com](https://requestbin.com/) dan klik Create Request Bin.

Setelah mengeklik tombol itu, Anda akan diminta untuk masuk jika sudah memiliki Account atau mendaftar. Jika sudah memiliki Account, Anda akan langsung diarahkan ke Dashboard mereka. Di Dashboard mereka, Anda akan segera melihat endpoint atau URL yang dapat Anda gunakan untuk membuat webhook Ultimate Multisite Anda.

Silakan salin URL tersebut dan kembali ke Ultimate Multisite. Masukkan endpoint pada field URL dan pilih sebuah event dari dropdown. Dalam contoh ini, kita akan memilih **Payment Received**.

Event ini dipicu setiap kali pengguna melakukan pembayaran. Semua event yang tersedia, deskripsi, dan payload-nya tercantum di bagian bawah halaman. Klik tombol **Add New Webhook** untuk menyimpan webhook.

![Dropdown event webhook dengan Payment Received dipilih](/img/admin/webhook-event-picker.png)

Sekarang kita dapat mengirim event uji ke endpoint untuk melihat apakah webhook yang kita buat berfungsi. Kita dapat melakukan ini dengan mengeklik **Send Test Event** di bawah webhook yang kita buat.

![Daftar Webhooks yang menampilkan satu webhook yang dikonfigurasi dan tindakan Send Test](/img/admin/webhooks-list-populated.png)

Ini menampilkan jendela konfirmasi yang menyatakan bahwa pengujian berhasil.

![Hasil event uji webhook setelah mengirim payload uji](/img/admin/webhook-test-result.png)

Sekarang jika kita kembali ke site _Requestbin_, kita akan melihat bahwa payload telah diterima dan berisi beberapa data uji.

Ini adalah prinsip dasar tentang cara kerja webhook dan endpoint. Jika Anda akan membuat endpoint khusus, Anda perlu membuat fungsi khusus untuk memproses data yang Anda terima dari Ultimate Multisite.
