---
title: Integrasi Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ngajukeun Ultimate Multisite sareng Zapier

Dina salah sahiji artikel, urang ngabahas ngeunaan [Webhooks](webhooks.md) jeung kumaha éta bisa dipaké pikeun ngajalin hubungan jeung aplikasi pihak katilu (3rd party applications).

Ngagunake webhook rada rumit sabab butuh élmu coding anu luhur jeung nangkap *payload*. Ngagunake **Zapier** mangrupikeun cara pikeun ngalampahan éta.

Zapier boga integrasi jeung lebih dari 5000+ aplikasi nu ngajadikeun komunikasi antara aplikasi-aplikasi béda jadi leuwih gampang.

Anjeun bisa nyiptake **Triggers** anu bakal dipicu lamun aya kajadian dina jaringan anjeun (misal, akun ditambahan jeung mémangkeun *event* `account_create`) atawa ngahasilkeun **Actions** dina jaringan anjeun réaksi kana kajadian luar (misal, nyiptake anggota akun anyar dina jaringan Ultimate Multisite anjeun).

Ieu bisa dilakukeun sabab **triggers** jeung **actions Zapier Ultimate Multisite** dipasihan tenaga ku [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kumaha mimiti {#how-to-start}

Éta, cari Ultimate Multisite dina daftar aplikasi Zapier. Atanapi, anjeun bisa klik [link ieu](https://zapier.com/apps/wp-ultimo/integrations).

Pindah ka *dashboard* anjeun teras pencét tombol **+** **Create Zap** di sisi kiri pikeun ngatur Zap anyar.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Anjeun bakal dialihkeun ka halaman pembuatan Zap.

Di kotak pencarian, ketik "wp ultimo". Klik pikeun milih opsi versi **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Sanggeus milih aplikasi urang, pilih *event* anu aya: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Ayeuna urang kudu ngahaja Zapier akses ka **jaringan anjeun**. Klik dina **Sign in** bakal muka jandéng anyar anu nuntut **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Pindah ka panel admin jaringan anjeun, teruskeun ka **Ultimate Multisite > Settings** > **API & Webhooks** teras cari bagian API Settings.

Pilih opsi **Enable API** sabab éta dipikawanoh kanggo koneksi ieu bisa jalan.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Gunakan ikon **Copy to Clipboard** dina kolom API Key jeung API Secret terus salin nilai éta, tuluy tempelkeun di layar integrasi.

Di kolom URL, masukkan URL jaringan anjeun anu lengkep, kaasup protokolna (HTTP atawa HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Klik tombol **Yes, Continue** pikeun lanjut ka langkah salajengna. Lamun sagala aya nu lancar, anjeun bakal disambut ku akun anyar anu geus terhubung! Klik **Continue** pikeun nyiptake pemicu (trigger) anyar.

## Kumaha cara nyiptake Trigger anyar {#how-to-create-a-new-trigger}

Ayeuna sabab akun anjeun geus terhubung, anjeun bisa ningali acara-acara (events) anu aya. Hayu pilih acara **payment_received** kanggo tutorial ieu.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Lamun acara geus dipilih jeung anjeun klik **continue**, bakal muncul **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Dina tahap ieu, Zapier bakal nguji upami Zap anjeun bisa **ngahontal payload anu spesifik ka acara éta**. Pikeun acara jenis anu sarua di masa hareup, informasi kalayan struktur anu sarua bakal dikirim.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Di tutorial urang, tesna geus **selesai sukses** jeung ngirimkeun conto informasi payload. Informasi conto ieu bakal mantuan urang nalika nyiptake aksi-aksi. Trigger anjeun ayeuna geus aya jeung siap dihubungkeun ka aplikasi séjén.

## Kumaha cara nyiptake Actions {#how-to-create-actions}

Actions ngagunake informasi tina trigger séjén pikeun nyiptake entri anyar dina jaringan anjeun.

Dina **nyiptake langkah action**, anjeun bakal milih Ultimate Multisite **Beta** jeung pilihan **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Di langkah salajengna, anjeun bakal nyiptake otentikasi anjeun, saperti anu urang geus laksanake dina **How to start**, atawa milih otentikasi anu geus aya. Dina tutorial ieu, urang bakal milih otentikasi anu geus aya saméméhna.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Ngatur Action {#setting-up-the-action}

Ieu mangrupake **langkah utama tina action**, jeung di dieu sagala rupa rada béda. Informasi kahiji anu bakal anjeun milih nyaéta **Item**. Item téh mangrupa **model informasi** jaringan anjeun saperti **Customers, Payments, Sites, Emails** jeung séjénna.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Nalika milih item, form bakal **ngatur deui pikeun ngabawa kolom anu dipikawanoh jeung anu pilihan** pikeun item anu dipilih.

Contona, nalika milih item **Customer**, kolom form bakal ngabawa sagala hal anu peryogi diisi pikeun nyiptake Customer anyar dina jaringan.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Sanggeus ngisian sakabéh kolom anu ditandukeun **required** jeung klik continue, hiji layar pamungkas bakal nunjukkeun kolom anu geus diisi jeung kolom anu masih kosong.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Begitu tes anjeun réngsé je sukses, aksi anjeun ge geus diatur. Penting ogé pikeun ngcek dina jaringan anjeun lamun barang éta diciptake ku tes aksi anjeun.
