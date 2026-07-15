---
title: Integrasi Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrasi Panel Kontrol Hestia

Panduan iki njelasake carane ngatur integrasi Ultimate Multisite Hestia supaya domain sing wis dipetakan ing jaringanmu otomatis ditambahi (lan dihilangi) minangka Web Domain Alias ing Hestia.

- Referensi CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokumen REST API resmi: https://hestiacp.com/docs/server-administration/rest-api.html

## Apa Sing Dilakoni {#what-it-does}
- Nalika domain dipetakan ing Ultimate Multisite, integrasi iki bakal ngirimake panggilan marang Hestia API kanggo njalankan:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Nalika pemetaan domain dihilangi, program iki bakal njalankan:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opsi kanggo nambah/ngilangake alias `www.` gumantung marang pengaturan “Auto-create www subdomain” ing pengaturan Domain Mappingmu.

## Prasyarat {#prerequisites}
- Ana Hestia Web Domain sing wis ana lan wis nunjuk menyang instalasi WordPress-mu. Integrasi iki bakal nempelake alias marang domain dasar iki.
- Akses API Hestia aktif. Sampeyan bisa otentikasi nganggo password utawa hash/token API.

Lihat dokumen REST API Hestia kanggo ngaktifake akses API lan detail otentikasi:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurasi (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Wenehana nilai-nilai berikut:

- `WU_HESTIA_API_URL` (wajib)
  - Titik akhir API dasar, biasanya `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (wajib)
  - User Hestia sing dienggo kanggo perintah API (seringake `admin`).
- `WU_HESTIA_API_PASSWORD` utawa `WU_HESTIA_API_HASH` (pilih salah siji)
  - Pilih cara otentikasi: password utawa API hash/token.
- `WU_HESTIA_ACCOUNT` (wajib)
  - Akun (pemilik) Web Domain ing Hestia; iki argumen kapisan kanggo CLI.
- `WU_HESTIA_WEB_DOMAIN` (wajib)
  - Web Domain Hestia sing wis ana lan nglayani WordPress sampeyan (alias bakal ditambahi ing kene).
- `WU_HESTIA_RESTART` (opsional; default `yes`)
  - Apa arep nge-restart/reload layanan sawise ganti alias.

Sampeyan bisa ngidini wizard iki nyuntikake konstanta iki menyang `wp-config.php`, utawa nentokake dhewe.

## Verifikasi Setup {#verifying-setup}
- Ing langkah wizard “Testing”, plugin iki bakal menehi panggil `v-list-web-domains <WU_HESTIA_ACCOUNT> json` liwat API. Respon sukses ngonfirmasi konektivitas lan otentikasi wis bener.
- Sawise pemetaan domain, cek ing Hestia: Web > domain dasar > Aliases. Sampeyan bakal weruh alias anyar wis ditambahi.

## Cathetan & Tips {#notes--tips}
- Pastikan `WU_HESTIA_WEB_DOMAIN` wis ana lan duwe hak milik saka `WU_HESTIA_ACCOUNT`.
- Yen SSL dibutuhake, kelola sertifikat ing Hestia. Integrasi iki saiki mung ngurus alias wae.
- Plugin iki uga bisa nambah/ngilang `www.<domain>` gumantung setelan Domain Mapping “www subdomain” sampeyan.

## Contoh Panggilan API (cURL) {#example-api-call-curl}
Ing ngisor iki conto konseptual (atur sesuai lingkunganmu). Referensiake dokumentasi resmi kanggo parameter sing pas.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (utawa &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias sing kanggo nambah)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Kanggo ngapus, nganggo `cmd=v-delete-web-domain-alias` lan argumen sing padha.

## Masalah (Troubleshooting) {#troubleshooting}
- Error HTTP saka API: cek yen `WU_HESTIA_API_URL` bisa dijangkau lan kalebu `/api`.
- Error otentikasi (Auth errors): konfirmasi `WU_HESTIA_API_USER` lan salah siji, yaiku `WU_HESTIA_API_PASSWORD` utawa `WU_HESTIA_API_HASH`.
- “Missing account/base domain” ing log: pastikan `WU_HESTIA_ACCOUNT` lan `WU_HESTIA_WEB_DOMAIN` wis diatur lan bener nang Hestia.

## Referensi {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
