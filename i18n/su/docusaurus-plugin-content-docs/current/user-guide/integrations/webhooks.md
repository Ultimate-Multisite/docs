---
title: Webhook
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Pandangan Pertama Tentang Webhooks (v2)

_**PERHATIAN: Catatan bahwa fitur atau artikel ini untuk pengguna tingkat lanjut.**_

**Webhook** itu cara buat aplikasi atau software kayak Ultimate Multisite ngirim informasi *real-time* ka aplikasi lian. Webhook bakal ngirim data atawa *payload* ka aplikasi séjén pas kejadianna keur jadi, hartina anjeun **langsung dapat datana**.

Ieu bisa ngebantu lamun anjeun perlu integrasi atawa ngirim data tartamtu ti Ultimate Multisite ka CRM atawa sistem séjén tiap kali aya kejadian. Contona, anjeun perlu ngirimkeun nama je alamat email pengguna ka *mailing list* saben akun pengguna anyar dibentuk.

## Kumaha cara bikin webhook {#how-to-create-a-webhook}

Kanggo bikin webhook, ulah lila ka *network admin dashboard* anjeun. Klik **Ultimate Multisite > Webhooks > Add New Webhook.**

![Halaman daftar Webhooks kosong dengan tombol Tambah Webhook](/img/admin/webhooks-list-empty.png)

Terus anjeun bisa ngedit konfigurasi webhookna:

![Form Tambah Webhook dengan kolom Nama, Event, je URL](/img/admin/webhook-add-modal.png)

Lamun nuju bikin webhook anyar, anjeun bakal ditanya informasi saperti **Nama, URL,** je **Event**. Anjeun bisa nganggo nama naon waé keur webhook anjeun. Bagian paling penting nya nyaéta URL je Event.

![Antarmuka edit Webhook nunjukkeun kolom URL je pratinjau payload](/img/admin/webhook-url-field.png)

URL téh nyaéta **titik akhir atawa tujuan** ka mana Ultimate Multisite bakal ngirimkeun **payload atawa data**. Ieu téh aplikasi anu bakal nampa datana.

Zapier téh solusi paling umum anu dipaké ku pengguna keur ngajadikeun integrasi je aplikasi pihak ketiga jadi leuwih gampang. Tanpa platform saperti Zapier, anjeun kudu nyieun fungsi kustom sorangan anu bakal nangkap data je ngolahna. Tingali artikel ieu ngeunaan **kumaha ngagunake Ultimate Multisite webhook je Zapier.**

Dina artikel ieu, urang bakal ngabahas konsep dasar kumaha cara kerja webhook jeung acara (event) anu aya di Ultimate Multisite. Urang bakal ngagunake situs pihak ketiga nyaéta [requestbin.com](https://requestbin.com/). Situs ieu bakal ngajadikeun urang bisa nyiptake endpoint jeung nangkap payload tanpa kudu nulis kode nanaon. _**Peringatan: éta ngan ukur nunjukkeun yén data geus ditampa.**_ Teu aya pemrosesan atawa tindakan nanaon anu dilakuke kana payload éta.

Tingali [requestbin.com](https://requestbin.com/) teras klik Create Request Bin.

Sanggeus ngagantungkeun tombol éta, situs éta bakal nanya lamun anjeun geus boga akun atanapi nyiptake akun. Lamun anjeun geus boga akun, éta langsung bakal mawa anjeun ka dashboard maranéhna. Di dashboard maranéhna, anjeun langsung bakal ningali endpoint atawa URL anu bisa dipaké dina nyiptake webhook Ultimate Multisite anjeun.

Tong sieun salin URL éta terus balik deui ka Ultimate Multisite. Letakkeun endpoint éta dina kolom URL jeung pilih acara (event) tina dropdown. Dina conto ieu, urang bakal milih **Payment Received**.

Acara ieu bakal dipicu nalika aya pengguna ngalakukeun pembayaran. Sadaya acara anu aya, kateranganana, jeung payloadna aya di handap halaman. Klik tombol **Add New Webhook** pikeun nyimpen webhook éta.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Ayeuna urang bisa ngirimkeun acara uji ka endpoint sangkan urang ningali naha webhook anu geus urang ciptake geus lumangsung. Urang bisa ngalakukeun éta ku klik **Send Test Event** di handap webhook anu geus urang ciptake.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Ieu nunjukkeun jendela konfirmasi yén uji coba éta sukses.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Lamun urang balik deui ka situs _Requestbin_, urang bakal ningali yén payload geus ditampa kalayan aya sababaraha data uji.

Ieu téh prinsip dasar kumaha cara kerja webhook je endpoint. Lamun anjeun rék ngadamel endpoint kustom, anjeun kedah nyieun fungsi kustom pikeun ngolah data anu anjeun terima ti Ultimate Multisite.
