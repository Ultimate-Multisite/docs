---
title: Integrasi Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrasi Panel Kontrol Hestia

Panduan ieu ngajelaskeun kumaha carana ngatur integrasi Ultimate Multisite Hestia supados domain anu dipetakan di jaringan anjeun otomatis ditambihan (sarta dileupaskeun) salaku Web Domain Alias dina Hestia.

- Referensi CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokumen REST API resmi: https://hestiacp.com/docs/server-administration/rest-api.html

## Naonna Fungsi {#what-it-does}
- Lamun hiji domain dipetakan dina Ultimate Multisite, integrasi bakal ngirimkeun (call) Hestia API pikeun ngalakukeun:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Lamun pemetaan domain dileupaskeun, éta bakal ngalakukeun:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Salaku pilihan, bisa nambihan/ngaleupaskeun alias `www.` gumantung kana pengaturan “Auto-create www subdomain” dina pengaturan Domain Mapping anjeun.

## Persyaratan (Prerequisites) {#prerequisites}
- Aya Web Domain Hestia anu geus aya nu nunjukkeun instalasi WordPress anjeun. Integrasi bakal nambihan alias ka domain dasar ieu.
- Aksés API Hestia diaktifkeun. Anjeun bisa autentikasi maké sandi atawa hash/token API.

Tingali dokumen REST API Hestia pikeun ngaktifkeun akses API sarta rincian autentikasi:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurasi (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Pasihkeun nilai-nilai ieu:

- `WU_HESTIA_API_URL` (diperlukan)
  - Endpoint API dasar, biasana nya `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (diperlukan)
  - User Hestia yang dipakai buat perintah API (biasanya `admin`).
- `WU_HESTIA_API_PASSWORD` atau `WU_HESTIA_API_HASH` (pilih salah satu)
  - Pilih salah satu cara otentikasi: password atau API hash/token.
- `WU_HESTIA_ACCOUNT` (diperlukan)
  - Akun (pemilik) Web Domain di Hestia; ini adalah argumen pertama buat CLI.
- `WU_HESTIA_WEB_DOMAIN` (diperlukan)
  - Web Domain Hestia yang sudah ada dan melayani WordPress Anda (alias akan ditambahkan di sini).
- `WU_HESTIA_RESTART` (opsional; default `yes`)
  - Apakah mau me-restart/reload layanan setelah perubahan alias.

Anda bisa biarin wizard ini memasukkan konstanta ini ke dalam `wp-config.php`, atau definisikan secara manual.

## Memverifikasi Pengaturan {#verifying-setup}
- Di langkah wizard “Testing”, plugin akan memanggil `v-list-web-domains <WU_HESTIA_ACCOUNT> json` lewat API. Respon sukses akan mengonfirmasi koneksi dan otentikasi sudah benar.
- Setelah domain dipetakan, cek di Hestia: Web > domain dasar > Aliases. Anda akan lihat alias baru sudah ditambahkan.

## Catatan & Tips {#notes--tips}
- Pastikan `WU_HESTIA_WEB_DOMAIN` sudah ada dan dimiliki oleh `WU_HESTIA_ACCOUNT`.
- Kalau butuh SSL, kelola sertifikatnya di Hestia. Integrasi ini saat ini hanya menangani alias saja.
- Plugin juga bisa menambah/menghapus `www.<domain>` tergantung pengaturan Domain Mapping “www subdomain” Anda.

## Contoh Panggilan API (cURL) {#example-api-call-curl}
Di bawah ini contoh konseptual (sesuaikan dengan lingkungan Anda). Lihat dokumentasi resmi untuk parameter yang tepat.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (atawa &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias anu bade nambahan)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Kanggo hapus (delete), pake `cmd=v-delete-web-domain-alias` jeung arguna nu sarua.

## Troubleshooting {#troubleshooting}
- Error HTTP ti API: cek yén `WU_HESTIA_API_URL` bisa dijangkau jeung ngandung `/api`.
- Error otentikasi (Auth errors): pastikeun `WU_HESTIA_API_USER` jeung salah sahiji tina `WU_HESTIA_API_PASSWORD` atawa `WU_HESTIA_API_HASH`.
- "Missing account/base domain" dina log: pastikeun `WU_HESTIA_ACCOUNT` jeung `WU_HESTIA_WEB_DOMAIN` geus diatur jeung valid di Hestia.

## References {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referensi Hestia CLI (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
