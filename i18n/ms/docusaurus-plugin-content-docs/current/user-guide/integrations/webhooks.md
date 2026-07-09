---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Pandangan Pertama tentang Webhooks (v2)

_**PERHATIAN: Sila ambil perhatian bahawa ciri atau artikel ini adalah untuk pengguna lanjutan.**_

**webhook** ialah cara untuk aplikasi atau perisian seperti Ultimate Multisite menyediakan maklumat masa nyata kepada aplikasi lain. webhook menghantar data atau payload kepada aplikasi lain ketika ia berlaku, bermaksud anda **mendapat data serta-merta.**

Ini berguna jika anda perlu mengintegrasikan atau menghantar data tertentu daripada Ultimate Multisite ke CRM atau sistem lain setiap kali sesuatu peristiwa dicetuskan. Contohnya, anda perlu menghantar nama dan alamat e-mel pengguna ke senarai mel setiap kali Account pengguna baharu dibuat.

## Cara mencipta webhook

Untuk mencipta webhook, pergi ke Dashboard pentadbir rangkaian anda. Klik pada **Ultimate Multisite > Webhooks > Tambah Webhook Baharu.**

![Halaman senarai Webhooks kosong dengan butang Tambah Webhook Baharu](/img/admin/webhooks-list-empty.png)

Anda kemudian boleh mengedit konfigurasi webhook:

![Borang Tambah Webhook Baharu dengan medan Nama, Peristiwa, dan URL](/img/admin/webhook-add-modal.png)

Apabila mencipta webhook baharu, anda akan diminta memberikan maklumat seperti **Nama, URL,** dan **Peristiwa**. Anda boleh menggunakan mana-mana nama yang anda mahu untuk webhook anda. Medan paling penting ialah URL dan Peristiwa.

![Antara muka edit webhook yang menunjukkan medan URL dan pratonton payload](/img/admin/webhook-url-field.png)

URL ialah **endpoint atau destinasi** yang Ultimate Multisite akan hantar **payload atau data** kepadanya. Ini ialah aplikasi yang akan menerima data tersebut.

Zapier ialah penyelesaian paling lazim yang digunakan pengguna untuk memudahkan integrasi dengan aplikasi pihak ketiga. Tanpa platform seperti Zapier, anda perlu mencipta fungsi tersuai secara manual yang akan menangkap data dan memprosesnya. Lihat artikel ini tentang **cara menggunakan webhook Ultimate Multisite dengan Zapier.**

Dalam artikel ini, kita akan melihat konsep asas bagaimana webhook berfungsi dan peristiwa yang tersedia dalam Ultimate Multisite. Kita akan menggunakan site pihak ketiga yang dipanggil [requestbin.com](https://requestbin.com/). Site ini akan membolehkan kita mencipta endpoint dan menangkap payload tanpa melakukan sebarang pengekodan. _**Penafian: semua yang akan dilakukannya hanyalah menunjukkan kepada kita bahawa data telah diterima.**_ Tiada pemprosesan atau sebarang jenis tindakan akan dilakukan terhadap payload.

Pergi ke [requestbin.com](https://requestbin.com/) dan klik Cipta Request Bin.

Selepas mengklik butang itu, ia akan meminta anda log masuk jika anda sudah mempunyai Account atau mendaftar. Jika anda sudah mempunyai Account, ia akan membawa anda terus ke Dashboard mereka. Pada Dashboard mereka, anda akan serta-merta melihat endpoint atau URL yang boleh anda gunakan dalam mencipta webhook Ultimate Multisite anda.

Teruskan dan salin URL tersebut, kemudian kembali ke Ultimate Multisite. Letakkan endpoint pada medan URL dan pilih satu peristiwa daripada dropdown. Dalam contoh ini, kita akan memilih **Pembayaran Diterima**.

Peristiwa ini dicetuskan setiap kali pengguna membuat pembayaran. Semua peristiwa yang tersedia, penerangannya, dan payload disenaraikan di bahagian bawah halaman. Klik butang **Tambah Webhook Baharu** untuk menyimpan webhook.

![Dropdown peristiwa webhook dengan Pembayaran Diterima dipilih](/img/admin/webhook-event-picker.png)

Kita kini boleh menghantar peristiwa ujian ke endpoint supaya kita dapat melihat sama ada webhook yang kita cipta berfungsi. Kita boleh melakukan ini dengan mengklik **Hantar Peristiwa Ujian** di bawah webhook yang kita cipta.

![Senarai Webhooks yang menunjukkan satu webhook dikonfigurasikan dan tindakan Hantar Ujian](/img/admin/webhooks-list-populated.png)

Ini menunjukkan tetingkap pengesahan yang menyatakan bahawa ujian berjaya.

![Keputusan peristiwa ujian webhook selepas menghantar payload ujian](/img/admin/webhook-test-result.png)

Sekarang jika kita kembali ke site _Requestbin_, kita akan melihat bahawa payload telah diterima dan mengandungi beberapa data ujian.

Ini ialah prinsip asas bagaimana webhook dan endpoint berfungsi. Jika anda ingin mencipta endpoint tersuai, anda perlu mencipta fungsi tersuai untuk memproses data yang anda terima daripada Ultimate Multisite.
