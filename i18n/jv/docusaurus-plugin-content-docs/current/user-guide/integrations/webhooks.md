---
title: Webhook
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Pandangan Pertama Mengenai Webhooks (v2)

_**PERHATIAN: Perlu diingat bahwa fitur atau artikel ini ditujukan untuk pengguna tingkat lanjut.**_

**Webhook** itu cara buat aplikasi atau software kaya Ultimate Multisite ngirim informasi *real-time* ke aplikasi lain. Webhook ngirim data atau *payload* ke aplikasi lain begitu kejadiannya terjadi, artinya kamu **langsung dapat datanya**.

Ini berguna kalau kamu perlu integrasi atau kirim data tertentu dari Ultimate Multisite ke CRM atau sistem lain setiap kali ada kejadian yang dipicu. Contohnya, kamu perlu kirim nama dan alamat email pengguna ke daftar surat (mailing list) setiap kali akun pengguna baru dibuat.

## Cara membuat webhook {#how-to-create-a-webhook}

Untuk membuat webhook, buka *network admin dashboard* kamu. Klik **Ultimate Multisite > Webhooks > Add New Webhook.**

![Halaman daftar Webhooks kosong dengan tombol Tambah Webhook](/img/admin/webhooks-list-empty.png)

Setelah itu, kamu bisa edit konfigurasi webhook:

![Form Tambah Webhook dengan kolom Nama, Event, dan URL](/img/admin/webhook-add-modal.png)

Saat membuat webhook baru, kamu akan diminta informasi seperti **Name (Nama), URL,** dan **Event**. Kamu bisa pakai nama apa saja untuk webhook kamu. Kolom yang paling penting adalah URL dan Event.

![Antarmuka edit Webhook menunjukkan kolom URL dan pratinjau payload](/img/admin/webhook-url-field.png)

URL itu adalah **titik akhir atau tujuan** tempat Ultimate Multisite akan mengirimkan **payload atau data**. Ini adalah aplikasi yang akan menerima datanya.

Zapier adalah solusi paling umum yang dipakai pengguna untuk mempermudah integrasi dengan aplikasi pihak ketiga. Tanpa platform seperti Zapier, kamu perlu membuat fungsi kustom secara manual yang akan menangkap data dan memprosesnya. Lihat artikel ini tentang **cara menggunakan webhook Ultimate Multisite dengan Zapier.**

Ing artikel iki, kita bakal ngelihat konsep dasar kepiye cara kerja webhook lan acara (event) sing ana ing Ultimate Multisite. Kita bakal nggunakake situs pihak ketiga jenenge [requestbin.com](https://requestbin.com/). Situs iki bakal menehi kita kesempatan kanggo nggawe endpoint lan nampa data tanpa perlu nulis kode apa-apa. _**Peringatan: intine mung nuduhake yen data wis ditampa.**_ Ora bakal ana pemrosesan utawa tindakan maneh marang data (payload) kasebut.

Tuju menyang [requestbin.com](https://requestbin.com/) lan klik Create Request Bin.

Sawise klik tombol kuwi, situs iku bakal njaluk sampeyan kanggo login yen wis duwe akun utawa daftar. Yen wis ana akun, iki bakal langsung nggolekake sampeyan menyang dashboard-e. Ing dashboard kasebut, sampeyan bakal langsung weruh endpoint utawa URL sing bisa digunakake ing nggawe webhook Ultimate Multisite-mu.

Terus salin URL kuwi lan bali menyang Ultimate Multisite. Letakake endpoint kuwi ing kolom URL lan pilih acara (event) saka dropdown. Ing conto iki, kita bakal milih **Payment Received**.

Acara iki bakal dipicu saben ana pengguna nggawe pembayaran. Kabeh acara sing ana, deskripsine, lan data (payload)-e dicantumake ing ngisor halaman. Klik tombol **Add New Webhook** kanggo nyimpen webhook-mu.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Saiki kita bisa ngirim acara tes menyang endpoint kasebut supaya kita bisa weruh yen webhook sing wis digawe iku wis nggarap. Kita bisa nindakake iki kanthi klik **Send Test Event** ing ngisor webhook sing wis digawe.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Iki nuduhake jendela konfirmasi yen tes kasebut wis sukses.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Sa _Requestbin_ site maneh kita bakal weruh yen payload wis ditampa, isine ana data tes.

Iki prinsip dasare kepiye cara kerja webhook lan endpoint. Yen sampeyan arep nggawe endpoint khusus (custom endpoint), sampeyan kudu nggawe fungsi khusus kanggo ngolah data sing kok terima saka Ultimate Multisite.
