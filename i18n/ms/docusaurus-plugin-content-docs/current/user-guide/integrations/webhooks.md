---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Pandangan Pertama tentang Webhooks (v2)

_**PERHATIAN: Ambil perhatian bahawa ciri atau artikel ini adalah untuk pengguna lanjutan.**_

**Webhook** adalah cara untuk aplikasi atau perisian seperti Ultimate Multisite memberikan maklumat secara langsung kepada aplikasi lain. Webhook menghantar data atau payload kepada aplikasi lain sebaik sahaja ia berlaku, bermakna anda **mendapat data dengan serta-merta.**

Ini berguna sekiranya anda perlu mengintegrasikan atau menghantar data tertentu dari Ultimate Multisite ke CRM atau sistem lain setiap kali sesuatu event dicetuskan. Contohnya, anda perlu menghantar nama dan alamat email pengguna ke senarai mel setiap kali akaun pengguna baharu dicipta.

## Cara mencipta webhook

Untuk mencipta webhook, pergi ke dashboard network admin anda. Klik pada **Ultimate Multisite > Webhooks > Add New Webhook.**

![Halaman senarai Webhooks dengan butang Add New Webhook](/img/admin/webhooks-list.png)

Semasa mencipta webhook baharu, anda akan diminta untuk maklumat seperti **Name, URL,** dan **Event**. Anda boleh menggunakan apa-apa nama yang anda mahu untuk webhook anda. Medan yang paling penting adalah URL dan Event.

![Borang webhook baharu dengan medan Name, URL, dan Event](/img/admin/webhooks-list.png)

URL adalah **endpoint atau destinasi** di mana Ultimate Multisite akan menghantar **payload atau data**. Ini adalah aplikasi yang akan menerima data tersebut.

Zapier adalah penyelesaian paling biasa yang digunakan pengguna untuk memudahkan integrasi dengan aplikasi pihak ketiga. Tanpa platform seperti Zapier, anda perlu mencipta fungsi khas secara manual untuk menangkap data dan memprosesnya. Lihat artikel ini tentang **cara menggunakan webhook Ultimate Multisite dengan Zapier.**

Dalam artikel ini, kita akan melihat konsep asas bagaimana webhook berfungsi dan event yang tersedia dalam Ultimate Multisite. Kita akan menggunakan laman pihak ketiga yang dipanggil [requestbin.com](https://requestbin.com/). Laman ini akan membolehkan kita mencipta endpoint dan menangkap payload tanpa perlu menulis kod. _**Penafian: apa yang ia lakukan hanyalah menunjukkan kepada kita bahawa data telah diterima.**_ Tiada pemprosesan atau sebarang tindakan akan dilakukan terhadap payload tersebut.

Pergi ke [requestbin.com](https://requestbin.com/) dan klik Create Request Bin.

![Butang Create Request Bin di laman RequestBin](/img/admin/webhooks-list.png)

Selepas mengklik butang itu, ia akan meminta anda untuk log masuk jika anda sudah mempunyai akaun atau mendaftar. Jika anda sudah mempunyai akaun, ia akan membawa anda terus ke dashboard mereka. Di dashboard mereka, anda akan terus melihat endpoint atau URL yang boleh anda gunakan untuk mencipta webhook Ultimate Multisite anda.

![Dashboard RequestBin menunjukkan URL endpoint](/img/admin/webhooks-list.png)

Teruskan dan salin URL tersebut dan kembali ke Ultimate Multisite. Letakkan endpoint pada medan URL dan pilih event dari dropdown. Dalam contoh ini, kita akan memilih **Payment Received**.

Event ini dicetuskan setiap kali pengguna membuat pembayaran. Semua event yang tersedia, penerangan, dan payload disenaraikan di bahagian bawah halaman. Klik butang **Add New Webhook** untuk menyimpan webhook.

![Webhook dikonfigurasi dengan event Payment Received](/img/admin/webhooks-list.png)

Kita kini boleh menghantar test event ke endpoint untuk melihat sama ada webhook yang kita cipta berfungsi. Kita boleh melakukan ini dengan mengklik **Send Test Event** di bawah webhook yang kita cipta.

![Pilihan Send Test Event di bawah webhook](/img/admin/webhooks-list.png)

Ini menunjukkan tetingkap pengesahan yang menyatakan bahawa ujian telah berjaya.

![Pengesahan test event webhook berjaya](/img/admin/webhooks-list.png)

Sekarang jika kita kembali ke laman _Requestbin_, kita akan melihat bahawa payload telah diterima mengandungi beberapa data ujian.

![RequestBin menunjukkan data payload webhook yang diterima](/img/admin/webhooks-list.png)

Ini adalah prinsip asas bagaimana webhook dan endpoint berfungsi. Jika anda ingin mencipta endpoint khas, anda perlu mencipta fungsi khas untuk memproses data yang anda terima dari Ultimate Multisite.
