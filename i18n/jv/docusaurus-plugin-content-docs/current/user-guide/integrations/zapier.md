---
title: Integrasi Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ngintegrasikan Ultimate Multisite dengan Zapier

Dalam salah satu artikel, kita sudah bahas tentang [Webhooks](webhooks.md) dan gimana cara menggunakannya buat nyambungin sama aplikasi pihak ketiga.

Pakai webhook itu agak ribet karena butuh ilmu coding yang udah canggih buat nangkap data (payload). Pakai **Zapier** adalah cara biar kamu bisa menghindari kerumitan itu.

Zapier punya koneksi ke lebih dari 5000+ aplikasi, jadi komunikasi antar aplikasi jadi gampang banget.

Kamu bisa bikin **Triggers** yang bakal jalan otomatis pas ada kejadian di jaringan kamu (misalnya akun baru dibuat dan memicu event `account_create`) atau bikin **Actions** di jaringan kamu yang bereaksi terhadap kejadian dari luar (misalnya membuat keanggotaan akun baru di jaringan Ultimate Multisite kamu).

Ini bisa dilakukan karena **triggers** dan **actions Zapier Ultimate Multisite** itu ditenagai oleh [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cara Mulai

Pertama, cari Ultimate Multisite di daftar aplikasi Zapier. Atau, kamu bisa klik [link ini](https://zapier.com/apps/wp-ultimo/integrations).

Buka dashboard kamu dan tekan tombol **+** **Create Zap** di sidebar kiri untuk bikin Zap baru.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Kamu akan diarahkan ke halaman pembuatan Zap.

Di kotak pencarian, ketik "wp ultimo". Klik untuk pilih opsi versi **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Setelah memilih aplikasi kita, pilih event yang tersedia: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Sekarang kita perlu kasih akses ke **jaringan kamu** buat Zapier. Klik di **Sign in** akan membuka jendela baru yang minta **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Tuju menyambung ini, silakan buka panel admin jaringan sampeyan lan tindakake **Ultimate Multisite > Settings** > **API & Webhooks** lan goleki bagian API Settings.

Pilih opsi **Enable API** amarga iki wajib kanggo sambungan iki bisa makarya.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Gunakan ikon **Copy to Clipboard** ing kolom API Key lan API Secret terus tempelake nilai-nilai kuwi ing layar integrasi (integration screen).

Ing kolom URL, tulis URL jaringan lengkap sampeyan, kalebu protokolé (HTTP utawa HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Klik tombol **Yes, Continue** kanggo lanjut menyang langkah sabanjure. Yen kabeh wis lancar, sampeyan bakal disambut karo akun anyar sing wis terhubung! Klik **Continue** kanggo nggawe pemicu (trigger) anyar.

## Cara nggawe Trigger anyar

Saiki saiki akunmu wis terhubung, sampeyan bisa ndelok event-event sing ana. Ayo pilih event **payment_received** kanggo tutorial iki.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Sawise event dipilih lan sampeyan klik **continue**, bakal muncul **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Ing tahap iki, Zapier bakal nyoba yen Zap sampeyan bisa **ngambil data (payload) sing spesifik kanggo event kuwi**. Kanggo event liyane kanthi tipe sing padha ing masa depan, informasi kanthi struktur sing padha bakal dikirim.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Ing tutorial kita, tesnya udah **selesai dengan sukses** lan ngirim contoh informasi payload. Contoh informasi iki bakal nggampangake awake dhewe nalika nggawe action. Trigger sampeyan wis digawe lan siap dihubungkan karo aplikasi liyane.

## Cara Nggawe Actions

Actions nganggo informasi saka trigger liyane kanggo nggawe entri anyar ing jaringanmu.

Ing **nggawe langkah action**, sampeyan bakal milih Ultimate Multisite **Beta** lan pilihan **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Ing langkah sabanjure, sampeyan bisa nggawe otentikasi (authentication), kaya sing wis awake dhewe lakoni ing **How to start**, utawa milih otentikasi sing wis digawe. Ing tutorial iki, kita bakal milih otentikasi sing wis digawe sadurunge.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Ngatur Action

Iki **langkah utama saka action** lan kene babagan rada beda. Informasi kapisan sing bakal sampeyan pilih yaiku **Item**. Item iku model informasi jaringanmu kaya **Customers, Payments, Sites, Emails** lan liyane.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Nalika milih item, form bakal **ngatur ulang kanggo nggawa field sing dibutuhake lan optional** kanggo item sing dipilih.

Contone, nalika milih item **Customer**, field form bakal nggawa kabeh sing perlu diisi kanggo nggawe Customer anyar ing jaringan.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Sawise ngisi kabeh field sing ditandai kaya **required** lan klik continue, layar terakhir bakal nuduhake field sing wis diisi lan field sing isih kosong.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Begitu tes sampeyan rampung lan sukses, aksi sampeyan wis diatur. Penting uga kanggo ngecek jaringan sampeyan yen item kasebut wis digawe nganggo tes aksi sampeyan.
