---
title: Integrasi Panel Kawalan Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrasi Hestia Control Panel

Panduan ini menerangkan cara mengkonfigurasi integrasi Hestia Ultimate Multisite supaya domain yang dipetakan dalam rangkaian anda ditambah (dan dibuang) secara automatik sebagai Web Domain Aliases dalam Hestia.

- Rujukan CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokumentasi rasmi REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Apa Yang Dilakukan
- Apabila domain dipetakan dalam Ultimate Multisite, integrasi ini memanggil API Hestia untuk menjalankan:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Apabila pemetaan domain dibuang, ia menjalankan:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Secara pilihan menambah/membuang alias `www.` bergantung pada tetapan "Auto-create www subdomain" dalam tetapan Domain Mapping.

## Prasyarat
- Web Domain Hestia sedia ada yang sudah menghala ke pemasangan WordPress anda. Integrasi ini akan melampirkan alias kepada domain asas ini.
- Akses API Hestia diaktifkan. Anda boleh mengesahkan menggunakan kata laluan atau API hash/token.

Lihat dokumentasi REST API Hestia untuk mengaktifkan akses API dan butiran pengesahan:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurasi (Wizard → Integrations → Hestia)
Berikan nilai-nilai berikut:

- `WU_HESTIA_API_URL` (wajib)
  - Endpoint asas API, biasanya `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (wajib)
  - Pengguna Hestia yang digunakan untuk arahan API (biasanya `admin`).
- `WU_HESTIA_API_PASSWORD` atau `WU_HESTIA_API_HASH` (sekurang-kurangnya satu)
  - Pilih satu kaedah pengesahan: kata laluan atau API hash/token.
- `WU_HESTIA_ACCOUNT` (wajib)
  - Akaun (pemilik) Web Domain dalam Hestia; ini adalah argumen pertama kepada CLI.
- `WU_HESTIA_WEB_DOMAIN` (wajib)
  - Web Domain Hestia sedia ada yang melayan WordPress anda (alias akan dilampirkan di sini).
- `WU_HESTIA_RESTART` (pilihan; lalai `yes`)
  - Sama ada untuk memulakan semula/memuat semula perkhidmatan selepas perubahan alias.

Anda boleh biarkan wizard memasukkan pemalar ini ke dalam `wp-config.php`, atau mentakrifkannya secara manual.

## Mengesahkan Persediaan
- Dalam langkah "Testing" wizard, plugin memanggil `v-list-web-domains <WU_HESTIA_ACCOUNT> json` melalui API. Respons berjaya mengesahkan ketersambungan dan pengesahan.
- Selepas memetakan domain, semak dalam Hestia: Web > domain asas > Aliases. Anda sepatutnya melihat alias baharu ditambah.

## Nota & Tips
- Pastikan `WU_HESTIA_WEB_DOMAIN` sudah wujud dan dimiliki oleh `WU_HESTIA_ACCOUNT`.
- Jika SSL diperlukan, uruskan sijil di Hestia. Integrasi ini pada masa ini hanya mengendalikan alias sahaja.
- Plugin juga mungkin menambah/membuang `www.<domain>` bergantung pada tetapan "www subdomain" Domain Mapping anda.

## Contoh Panggilan API (cURL)
Di bawah adalah contoh konseptual (sesuaikan dengan persekitaran anda). Rujuk dokumentasi rasmi untuk parameter yang tepat.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (atau &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias untuk ditambah)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Untuk memadam, gunakan `cmd=v-delete-web-domain-alias` dan args yang sama.

## Penyelesaian Masalah
- Ralat HTTP dari API: sahkan `WU_HESTIA_API_URL` boleh dicapai dan termasuk `/api`.
- Ralat pengesahan: sahkan `WU_HESTIA_API_USER` dan sama ada `WU_HESTIA_API_PASSWORD` atau `WU_HESTIA_API_HASH`.
- "Missing account/base domain" dalam log: pastikan `WU_HESTIA_ACCOUNT` dan `WU_HESTIA_WEB_DOMAIN` ditetapkan dan sah dalam Hestia.

## Rujukan
- REST API Hestia: https://hestiacp.com/docs/server-administration/rest-api.html
- Rujukan CLI Hestia (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
