---
title: Integrasi Panel Kontrol Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrasi Hestia Control Panel

Panduan ini menjelaskan cara mengonfigurasi integrasi Hestia di Ultimate Multisite agar domain yang dipetakan di jaringan Anda secara otomatis ditambahkan (dan dihapus) sebagai Web Domain Alias di Hestia.

- Referensi CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokumentasi resmi REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Apa Fungsinya
- Ketika sebuah domain dipetakan di Ultimate Multisite, integrasi ini akan memanggil API Hestia untuk menjalankan:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ketika pemetaan domain dihapus, integrasi akan menjalankan:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Secara opsional menambahkan/menghapus alias `www.` tergantung pengaturan "Auto-create www subdomain" di pengaturan Domain Mapping.

## Prasyarat
- Web Domain Hestia yang sudah ada dan sudah mengarah ke instalasi WordPress Anda. Integrasi ini akan menambahkan alias ke domain dasar tersebut.
- Akses API Hestia sudah diaktifkan. Anda dapat melakukan autentikasi menggunakan password atau API hash/token.

Lihat dokumentasi REST API Hestia untuk mengaktifkan akses API dan detail autentikasi:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurasi (Wizard → Integrations → Hestia)
Isi nilai-nilai berikut:

- `WU_HESTIA_API_URL` (wajib)
  - Endpoint dasar API, biasanya `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (wajib)
  - User Hestia yang digunakan untuk perintah API (biasanya `admin`).
- `WU_HESTIA_API_PASSWORD` atau `WU_HESTIA_API_HASH` (minimal salah satu)
  - Pilih salah satu metode autentikasi: password atau API hash/token.
- `WU_HESTIA_ACCOUNT` (wajib)
  - Akun (pemilik) dari Web Domain di Hestia; ini adalah argumen pertama untuk CLI.
- `WU_HESTIA_WEB_DOMAIN` (wajib)
  - Web Domain Hestia yang sudah ada dan melayani WordPress Anda (alias akan ditambahkan di sini).
- `WU_HESTIA_RESTART` (opsional; default `yes`)
  - Apakah akan restart/reload layanan setelah perubahan alias.

Anda bisa membiarkan wizard memasukkan konstanta ini ke `wp-config.php`, atau mendefinisikannya secara manual.

## Memverifikasi Pengaturan
- Di langkah "Testing" pada wizard, plugin akan memanggil `v-list-web-domains <WU_HESTIA_ACCOUNT> json` melalui API. Respons sukses mengonfirmasi konektivitas dan autentikasi.
- Setelah memetakan domain, periksa di Hestia: Web > domain dasar > Aliases. Anda akan melihat alias baru yang ditambahkan.

## Catatan & Tips
- Pastikan `WU_HESTIA_WEB_DOMAIN` sudah ada dan dimiliki oleh `WU_HESTIA_ACCOUNT`.
- Jika SSL diperlukan, kelola sertifikat di Hestia. Integrasi ini saat ini hanya menangani alias.
- Plugin juga dapat menambahkan/menghapus `www.<domain>` tergantung pengaturan "www subdomain" di Domain Mapping.

## Contoh Panggilan API (cURL)
Berikut adalah contoh konseptual (sesuaikan dengan lingkungan Anda). Lihat dokumentasi resmi untuk parameter yang tepat.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (atau &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias yang ditambahkan)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Untuk menghapus, gunakan `cmd=v-delete-web-domain-alias` dengan argumen yang sama.

## Pemecahan Masalah
- Error HTTP dari API: pastikan `WU_HESTIA_API_URL` dapat dijangkau dan menyertakan `/api`.
- Error autentikasi: konfirmasi `WU_HESTIA_API_USER` dan salah satu dari `WU_HESTIA_API_PASSWORD` atau `WU_HESTIA_API_HASH`.
- "Missing account/base domain" di log: pastikan `WU_HESTIA_ACCOUNT` dan `WU_HESTIA_WEB_DOMAIN` sudah diatur dan valid di Hestia.

## Referensi
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referensi CLI Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
