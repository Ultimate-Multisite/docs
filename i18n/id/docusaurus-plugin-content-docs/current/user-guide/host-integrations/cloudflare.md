---
title: Integrasi Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrasi Cloudflare

## Gambaran Umum {#overview}
Cloudflare adalah penyedia jaringan pengiriman konten (CDN) dan keamanan terkemuka yang membantu melindungi dan mempercepat situs web. Integrasi ini memungkinkan pengelolaan domain otomatis antara Ultimate Multisite dan Cloudflare, khususnya untuk instalasi multisite subdomain.

## Fitur {#features}
- Pembuatan subdomain otomatis di Cloudflare
- Dukungan subdomain yang diproksi
- Pengelolaan catatan DNS
- Tampilan catatan DNS yang ditingkatkan di admin Ultimate Multisite

## Persyaratan {#requirements}
Konstanta berikut harus didefinisikan dalam file `wp-config.php` Anda:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instruksi Penyiapan {#setup-instructions}

### 1. Dapatkan Kunci API Cloudflare Anda {#1-get-your-cloudflare-api-key}

1. Masuk ke Cloudflare Dashboard Anda
2. Buka "Profil Saya" (klik email Anda di sudut kanan atas)
3. Pilih "Token API" dari menu
4. Buat token API baru dengan izin berikut:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Salin token API Anda

### 2. Dapatkan Zone ID Anda {#2-get-your-zone-id}

1. Di Cloudflare Dashboard Anda, pilih domain yang ingin Anda gunakan
2. Zone ID terlihat di tab "Gambaran Umum", di bilah sisi kanan di bawah "API"
3. Salin Zone ID

### 3. Tambahkan Konstanta ke wp-config.php {#3-add-constants-to-wp-configphp}

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktifkan Integrasi {#4-enable-the-integration}

1. Di admin WordPress Anda, buka Ultimate Multisite > Pengaturan
2. Buka tab "Pemetaan Domain"
3. Gulir ke bawah ke "Integrasi Host"
4. Aktifkan integrasi Cloudflare
5. Klik "Simpan Perubahan"

## Cara Kerjanya {#how-it-works}

### Pengelolaan Subdomain {#subdomain-management}

Saat situs baru dibuat dalam instalasi multisite subdomain:

1. Integrasi mengirim permintaan ke API Cloudflare untuk menambahkan catatan CNAME bagi subdomain
2. Subdomain dikonfigurasi untuk diproksi melalui Cloudflare secara default (ini dapat diubah dengan filter)
3. Saat situs dihapus, integrasi akan menghapus subdomain dari Cloudflare

### Tampilan Catatan DNS {#dns-record-display}

Integrasi meningkatkan tampilan catatan DNS di admin Ultimate Multisite dengan:

1. Mengambil catatan DNS langsung dari Cloudflare
2. Menampilkan apakah catatan diproksi atau tidak
3. Menampilkan informasi tambahan tentang catatan DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (sebelumnya disebut "Cloudflare for SaaS") adalah fitur Cloudflare yang memungkinkan pelanggan Anda menggunakan domain mereka sendiri dengan SSL di jaringan multisite Anda. Ini adalah pendekatan yang direkomendasikan untuk instalasi multisite dengan domain yang dipetakan yang menggunakan Cloudflare, karena Cloudflare mengelola penerbitan dan pembaruan sertifikat SSL untuk setiap domain khusus secara otomatis.

### Perbedaannya dari integrasi Cloudflare standar {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integrasi standar | Cloudflare Custom Hostnames |
|---|---|---|
| **Tujuan** | Membuat catatan DNS secara otomatis untuk subdomain | Mengaktifkan domain khusus (yang dipetakan) dengan SSL yang dikelola Cloudflare |
| **Terbaik untuk** | Multisite subdomain | Multisite dengan domain yang dipetakan |
| **SSL** | Ditangani secara terpisah | Dikelola oleh Cloudflare secara otomatis |

### Menyiapkan Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Di Cloudflare Dashboard Anda, buka zona untuk domain utama Anda.
2. Buka **SSL/TLS > Custom Hostnames**.
3. Tambahkan origin fallback yang mengarah ke IP atau hostname server Anda.
4. Untuk setiap domain pelanggan yang dipetakan di Ultimate Multisite, tambahkan entri Custom Hostname di Cloudflare. Anda dapat mengotomatiskan langkah ini menggunakan API Cloudflare.
5. Cloudflare menerbitkan dan memperbarui sertifikat TLS untuk setiap custom hostname secara otomatis setelah DNS pelanggan diarahkan ke jaringan Anda.

Untuk referensi API lengkap, lihat [dokumentasi Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Pembaruan terminologi
Mulai Ultimate Multisite v2.6.1, fitur ini disebut sebagai **Cloudflare Custom Hostnames** di semua pengaturan dan label plugin. Versi sebelumnya menggunakan nama "Cloudflare for SaaS", yang merupakan nama produk Cloudflare yang mendasarinya.
:::

## Catatan Penting {#important-notes}

Sejak pembaruan terbaru Cloudflare, proxy wildcard kini tersedia untuk semua pelanggan. Ini berarti integrasi DNS Cloudflare standar tidak lagi sepenting sebelumnya untuk instalasi multisite subdomain, karena Anda cukup menyiapkan catatan DNS wildcard di Cloudflare.

## Pemecahan Masalah {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Verifikasi bahwa token API Anda benar dan memiliki izin yang diperlukan
- Periksa bahwa Zone ID Anda benar
- Pastikan Account Cloudflare Anda memiliki izin yang diperlukan

### Subdomain Tidak Ditambahkan {#subdomain-not-added}
- Periksa log Ultimate Multisite untuk pesan kesalahan apa pun
- Verifikasi bahwa subdomain belum ditambahkan ke Cloudflare
- Pastikan paket Cloudflare Anda mendukung jumlah catatan DNS yang Anda buat

### Masalah Proxy {#proxying-issues}
- Jika Anda tidak ingin subdomain diproksi, Anda dapat menggunakan filter `wu_cloudflare_should_proxy`
- Beberapa fitur mungkin tidak berfungsi dengan benar saat diproksi (misalnya, fungsi admin WordPress tertentu)
- Pertimbangkan untuk menggunakan Page Rules Cloudflare untuk melewati cache bagi halaman admin
