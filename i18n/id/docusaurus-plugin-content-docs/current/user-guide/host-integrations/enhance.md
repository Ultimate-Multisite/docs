---
title: Tingkatkan Integrasi Panel Kontrol
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Integrasi Enhance Control Panel

## Ringkasan
Enhance adalah control panel modern yang menyediakan kemampuan otomatisasi hosting dan manajemen yang powerful. Integrasi ini memungkinkan sinkronisasi domain otomatis dan pengelolaan sertifikat SSL antara Ultimate Multisite dan Enhance Control Panel.

**Diskusi Terkait:** Lihat [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) untuk tips dari komunitas dan informasi tambahan.

## Fitur
- Sinkronisasi domain otomatis saat domain dipetakan di Ultimate Multisite
- Penyediaan sertifikat SSL otomatis melalui LetsEncrypt saat DNS ter-resolve
- Dukungan subdomain untuk jaringan yang berjalan dalam mode subdomain
- Penghapusan domain saat pemetaan dihapus
- Pengujian koneksi untuk memverifikasi kredensial API

## Persyaratan

### Persyaratan Sistem
- Enhance Control Panel sudah terinstal dan dapat diakses
- Instalasi WordPress Multisite yang di-hosting pada atau terhubung ke server Enhance
- Web server Apache (Enhance saat ini mendukung konfigurasi Apache; LiteSpeed Enterprise tersedia dengan harga lebih terjangkau)

### Akses API
Anda harus memiliki akses administrator ke Enhance Control Panel untuk membuat token API.

## Mendapatkan Kredensial API Anda

### 1. Membuat Token API

1. Login ke Enhance Control Panel Anda sebagai administrator
2. Klik **Settings** di menu navigasi
3. Buka **Access Tokens**
4. Klik **Create Token**
5. Berikan nama deskriptif untuk token (misalnya, "Ultimate Multisite Integration")
6. Tetapkan role **System Administrator**
7. Untuk tanggal kedaluwarsa:
   - Biarkan kosong jika Anda ingin token tidak pernah kedaluwarsa
   - Atau tetapkan tanggal kedaluwarsa tertentu untuk tujuan keamanan
8. Klik **Create**

Setelah dibuat, **Access Token** dan **Organization ID** Anda akan ditampilkan. **Simpan segera** karena token hanya akan ditampilkan satu kali.

### 2. Mendapatkan Organization ID Anda

Organization ID ditampilkan di halaman Access Tokens dalam kotak informasi biru berlabel "Org ID: {your_id}".

Organization ID memiliki format UUID seperti: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Anda juga dapat menemukan Organization ID pelanggan dengan cara:
1. Buka halaman **Customers**
2. Klik **Manage customer** untuk pelanggan yang relevan
3. Lihat URL - Organization ID adalah karakter alfanumerik setelah `/customers/`

### 3. Mendapatkan Server ID Anda

Untuk menemukan Server ID Anda (diperlukan untuk operasi domain):

1. Di Enhance Control Panel, buka **Servers**
2. Klik server tempat instalasi WordPress Anda berjalan
3. Server ID (format UUID) akan terlihat di URL atau detail server
4. Sebagai alternatif, Anda dapat menggunakan API untuk melihat daftar server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID mengikuti format UUID: `00000000-0000-0000-0000-000000000000`

### 4. Mendapatkan URL API Anda

URL API Anda adalah URL Enhance Control Panel Anda dengan tambahan `/api/`:

```
https://your-enhance-panel.com/api/
```

**Penting:** Path `/api/` diperlukan. Kesalahan umum meliputi:
- Menggunakan domain saja tanpa `/api/`
- Menggunakan HTTP alih-alih HTTPS (HTTPS diperlukan untuk keamanan)

## Konfigurasi

### Konstanta yang Diperlukan

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Pengaturan melalui Integration Wizard

1. Di admin WordPress Anda, buka **Ultimate Multisite** > **Settings**
2. Buka tab **Integrations**
3. Temukan **Enhance Control Panel Integration** dan klik **Configuration**
4. Wizard akan memandu Anda melalui pengaturan:
   - **Langkah 1:** Pendahuluan dan ringkasan fitur
   - **Langkah 2:** Masukkan kredensial API Anda (Token, URL API, Server ID)
   - **Langkah 3:** Uji koneksi
   - **Langkah 4:** Tinjau dan aktifkan

Anda dapat memilih untuk:
- Membiarkan wizard menyisipkan konstanta ke file `wp-config.php` Anda secara otomatis
- Menyalin definisi konstanta dan menambahkannya secara manual

## Konfigurasi WordPress Tambahan

Berdasarkan masukan dari komunitas ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), Anda mungkin perlu mengonfigurasi pengaturan tambahan berikut:

### Konfigurasi .htaccess

Jika Anda mengalami masalah dengan pemetaan domain:
1. Hapus file `.htaccess` Enhance yang asli
2. Ganti dengan file `.htaccess` WordPress Multisite standar

### Konstanta Cookie

Tambahkan konstanta ini ke `wp-config.php` untuk memastikan penanganan cookie yang benar di seluruh domain yang dipetakan:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Cara Kerjanya

### Saat Domain Dipetakan

1. Pengguna memetakan domain kustom di Ultimate Multisite (atau situs baru dibuat dalam mode subdomain)
2. Integrasi mengirim permintaan POST ke API Enhance: `/servers/{server_id}/domains`
3. Enhance menambahkan domain ke konfigurasi server Anda
4. Saat DNS ter-resolve ke server Anda, Enhance secara otomatis menyediakan sertifikat SSL melalui LetsEncrypt
5. Domain menjadi aktif dengan HTTPS

### Saat Domain Dihapus

1. Pemetaan domain dihapus di Ultimate Multisite
2. Integrasi melakukan query ke Enhance untuk menemukan ID domain
3. Permintaan DELETE dikirim ke: `/servers/{server_id}/domains/{domain_id}`
4. Enhance menghapus domain dari konfigurasi server Anda

### Pengecekan DNS dan SSL

Ultimate Multisite menyertakan pengecekan DNS dan SSL bawaan:
- Anda dapat mengonfigurasi interval pengecekan di **Domain Mapping Settings** (default: 300 detik/5 menit)
- Sistem akan memverifikasi propagasi DNS sebelum menandai domain sebagai aktif
- Validitas sertifikat SSL dicek secara otomatis
- Enhance menangani penyediaan SSL secara otomatis, jadi konfigurasi SSL manual tidak diperlukan

## Memverifikasi Pengaturan

### Menguji Koneksi

1. Di Integration Wizard, gunakan langkah **Test Connection**
2. Plugin akan mencoba menampilkan daftar domain di server Anda
3. Pesan sukses mengkonfirmasi:
   - Kredensial API benar
   - URL API dapat diakses
   - Server ID valid
   - Izin diatur dengan benar

### Setelah Memetakan Domain

1. Petakan domain percobaan di Ultimate Multisite
2. Periksa log Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifikasi di Enhance Control Panel bahwa domain telah ditambahkan:
   - Buka **Servers** > **Your Server** > **Domains**
   - Domain baru seharusnya muncul dalam daftar
4. Setelah DNS terpropagasi, verifikasi bahwa SSL tersedia secara otomatis

## Troubleshooting

### Masalah Koneksi API

**Error: "Failed to connect to Enhance API"**
- Verifikasi bahwa `WU_ENHANCE_API_URL` menyertakan `/api/` di akhir
- Pastikan Anda menggunakan HTTPS, bukan HTTP
- Periksa apakah panel Enhance dapat diakses dari server WordPress Anda
- Verifikasi tidak ada aturan firewall yang memblokir koneksi

**Error: "Enhance API Token not found"**
- Pastikan `WU_ENHANCE_API_TOKEN` didefinisikan di `wp-config.php`
- Verifikasi token belum dihapus atau kedaluwarsa di Enhance
- Periksa apakah ada kesalahan ketik pada nilai token

**Error: "Server ID is not configured"**
- Verifikasi `WU_ENHANCE_SERVER_ID` didefinisikan di `wp-config.php`
- Pastikan Server ID dalam format UUID yang valid
- Konfirmasi server ada di panel Enhance Anda

### Domain Tidak Ditambahkan

**Periksa log:**
1. Buka **Ultimate Multisite** > **Logs**
2. Filter berdasarkan **integration-enhance**
3. Cari pesan error yang menunjukkan masalahnya

**Penyebab umum:**
- Format nama domain tidak valid
- Domain sudah ada di Enhance
- Izin API tidak mencukupi (pastikan token memiliki role System Administrator)
- Server ID tidak cocok dengan server yang sebenarnya di Enhance

### Masalah Sertifikat SSL

**SSL tidak tersedia:**
- Verifikasi DNS mengarah ke alamat IP server Anda
- Periksa apakah domain ter-resolve dengan benar: `nslookup yourdomain.com`
- Enhance memerlukan DNS ter-resolve sebelum dapat menyediakan SSL
- Penyediaan SSL biasanya memakan waktu 5-10 menit setelah propagasi DNS
- Periksa log Enhance Control Panel untuk error spesifik SSL

**Troubleshooting SSL manual di Enhance:**
1. Buka **Servers** > **Your Server** > **Domains**
2. Temukan domain Anda dan periksa status SSL-nya
3. Anda dapat memicu penyediaan SSL secara manual jika diperlukan

### Interval Pengecekan DNS

Jika domain atau sertifikat SSL terlalu lama untuk aktif:
1. Buka **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Temukan pengaturan **DNS Check Interval**
3. Sesuaikan dari default 300 detik ke nilai yang lebih rendah (minimum: 10 detik)
4. **Catatan:** Interval yang lebih rendah berarti pengecekan lebih sering tetapi beban server lebih tinggi

### Error Autentikasi

**Error HTTP 401/403:**
- Buat ulang token API Anda di Enhance
- Verifikasi token memiliki role **System Administrator**
- Periksa apakah token belum kedaluwarsa
- Pastikan Anda menggunakan Organization ID yang benar (meskipun biasanya tidak diperlukan di URL)

### Analisis Log

Aktifkan logging detail:
```php
// Tambahkan ke wp-config.php untuk debugging yang lebih detail
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Kemudian periksa log di:
- Log Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Log debug WordPress: `wp-content/debug.log`
- Log panel Enhance: Tersedia di antarmuka admin Enhance

## Referensi API

### Autentikasi
Semua permintaan API menggunakan autentikasi Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint Umum yang Digunakan

**Daftar Server:**
```
GET /servers
```

**Daftar Domain di Server:**
```
GET /servers/{server_id}/domains
```

**Menambahkan Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Menghapus Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Dokumentasi API Lengkap
Dokumentasi API lengkap: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Praktik Terbaik

### Keamanan
- **Jangan pernah commit token API ke version control**
- Simpan token di `wp-config.php` yang harus dikecualikan dari Git
- Gunakan token dengan izin yang sesuai (System Administrator untuk integrasi penuh)
- Tetapkan tanggal kedaluwarsa token untuk lingkungan produksi
- Rotasi token secara berkala

### Performa
- Gunakan interval pengecekan DNS default (300 detik) untuk menghindari panggilan API yang berlebihan
- Pantau sumber daya server Enhance saat menjalankan operasi domain skala besar
- Pertimbangkan untuk menjadwalkan penambahan domain secara bertahap jika memetakan banyak domain sekaligus

### Pemantauan
- Periksa log Ultimate Multisite secara rutin untuk error integrasi
- Siapkan pemantauan untuk penambahan domain yang gagal
- Verifikasi sertifikat SSL tersedia dengan benar
- Perhatikan kapasitas server Enhance dan batas domain

## Sumber Daya Tambahan

- **Dokumentasi Resmi Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentasi API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum Komunitas Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Panduan Domain Mapping Ultimate Multisite:** Lihat halaman wiki "How to Configure Domain Mapping v2"

## Dukungan

Jika Anda mengalami masalah:
1. Periksa bagian Troubleshooting di atas
2. Tinjau log Ultimate Multisite
3. Konsultasikan [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Hubungi dukungan Enhance untuk masalah spesifik panel
5. Buat diskusi baru dengan log error yang detail untuk bantuan dari komunitas

## Catatan

- Integrasi ini hanya menangani alias domain; Enhance mengelola SSL secara otomatis
- Integrasi ini mendukung pemetaan domain kustom dan situs berbasis subdomain
- Pembuatan subdomain www otomatis dapat dikonfigurasi di pengaturan Domain Mapping
- Enhance saat ini mendukung konfigurasi Apache (LiteSpeed Enterprise tersedia)
- Penghapusan domain dari Ultimate Multisite akan menghapus domain dari Enhance tetapi mungkin tidak langsung menghapus sertifikat SSL yang terkait
