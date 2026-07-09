---
title: Ngaraksa Integrasi Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Tingkatkan Integrasi Control Panel {#enhance-control-panel-integration}

## Gambaran Umum {#overview}
Enhance téh mangrupakeun control panel modérn anu méré kamampuhan otomatisasi je ngatur hosting anu kuat. Integrasi ieu ngabantu sinkronisasi domain otomatis je ngaturan sertifikat SSL antara Ultimate Multisite je Enhance Control Panel.

**Diskusi Terkait:** Tingali [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) pikeun tips komunitas je informasi tambahan.

## Fitur {#features}
- Sinkronisasi domain otomatis nalika domain di-map dina Ultimate Multisite
- Penyediaan sertifikat SSL otomatis via LetsEncrypt nalika DNS resolve
- Dukungan subdomain pikeun jaringan anu jalan dina mode subdomain
- Penghapusan domain nalika pemetaan dihapus
- Uji koneksi pikeun ngabuktian kredensial API

## Persyaratan {#requirements}

### Persyaratan Sistem {#system-requirements}
- Enhance Control Panel geus dipasang je gampang diakses
- Instalasi WordPress Multisite di-host dina atawa terhubung ka server Enhance
- Apache web server (Enhance ayeuna dukung konfigurasi Apache; LiteSpeed Enterprise aya kalayan harga leuwih murah)

### Akses API {#api-access}
Anjeun kudu boga akses administrator ka Enhance Control Panel pikeun ngabentuk API tokens.

## Ngajak Kredensial API Anjeun {#getting-your-api-credentials}

### 1. Buat API Token {#1-create-an-api-token}

1. Login ka Enhance Control Panel anjeun salaku administrator
2. Klik **Settings** dina menu navigasi
3. Pindah ka **Access Tokens**
4. Klik **Create Token**
5. Kasih ngaran anu deskriptif ka token (contona: "Ultimate Multisite Integration")
6. Tunjuk peran **System Administrator**
7. Pikeun tanggal kadaluwarsa:
   - Tinggali kosong lamun anjeun hoyong tokenna teu pernah kadaluwarsa
   - Atawa atur tanggal kadaluwarsa anu spesifik pikeun tujuan keamanan
8. Klik **Create**

Sanggeupna samémutan, **Access Token** je **Organization ID** bakal dipajang. **Simpan ini segera** karena token ngan ukur bakal ditunjukin sekali.

### 2. Dapatkan Organization ID Anda {#2-get-your-organization-id}

Organization ID bakal dipajang di halaman Access Tokens dina kotak informasi warna biru anu ngabedah "Org ID: {your_id}".

Organization ID téh formatna UUID saperti: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Anjeun ogé bisa manggihan Organization ID pelanggan ku cara:
1. Pergi ka halaman **Customers**
2. Klik **Manage customer** pikeun pelanggan anu dipikahoyong
3. Tingali URL - Organization ID téh nyaéta aksara alfanumerik sanggeus `/customers/`

### 3. Dapatkan Server ID Anda {#3-get-your-server-id}

Supaya manggihan Server ID anjeun (dipersangkeun kanggo operasi domain):

1. Di Enhance Control Panel, pergi ka **Servers**
2. Klik kana server di mana instalasi WordPress anjeun keur jalan
3. Server ID (format UUID) bakal katingali dina URL atawa detail server
4. Atanapi, anjeun bisa ngagunake API pikeun mendaftar server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID ngikut format UUID: `00000000-0000-0000-0000-000000000000`

### 4. Dapatkan API URL Anda {#4-get-your-api-url}

API URL anjeun nyaéta URL Enhance Control Panel anjeun anu ditambihan `/api/`:

```
https://your-enhance-panel.com/api/
```

**Penting:** Jalur `/api/` téh wajib aya. Salahna umum nyaéta:
- Ngagunake ngan domain tanpa `/api/`
- Ngagunake HTTP alih ka HTTPS (HTTPS dipersangkeun pikeun keamanan)

## Konfigurasi {#configuration}

### Konstanta Wajib {#required-constants}

Tambah konstanta ieu kana file `wp-config.php` anjeun:

// Tingkatkan Integrasi Control Panel
define('WU_ENHANCE_API_TOKEN', 'token-anda-di-sini');
define('WU_ENHANCE_API_URL', 'https://panel-enhance-anda.com/api/');
define('WU_ENHANCE_SERVER_ID', 'uuid-server-anda-di-sini');

### Setup Lewat Integration Wizard {#setup-via-integration-wizard}

1. Di admin WordPress kamu, buka **Ultimate Multisite** > **Settings**
2. Pindah ke tab **Integrations**
3. Cari **Enhance Control Panel Integration** lalu klik **Configuration**
4. Wizard bakal pandu kamu ngatur:
   - **Langkah 1:** Perkenalan dan gambaran fitur
   - **Langkah 2:** Masukkan kredensial API kamu (Token, API URL, Server ID)
   - **Langkah 3:** Uji koneksi
   - **Langkah 4:** Tinjau dan aktifkan

Kamu bisa pilih mau:
- Biarin wizard langsung masukan konstanta ke file `wp-config.php` kamu secara otomatis
- Salin definisi konstanta terus tambahin manual

## Konfigurasi WordPress Tambahan {#additional-wordpress-configuration}

Berdasarkan masukan komunitas ([Diskusi #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), mungkin kamu perlu ngatur pengaturan tambahan ini:

### Konfigurasi .htaccess {#htaccess-configuration}

Muncul masalah sama pemetaan domain?
1. Hapus file `.htaccess` Enhance yang asli
2. Ganti dengan file `.htaccess` Multisite WordPress standar

### Konstanta Cookie {#cookie-constants}

Tambahkan konstanta ini ke `wp-config.php` biar penanganan cookie di domain yang dipetakan jadi benar:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Gimana Cara Kerjanya {#how-it-works}

### Saat Domain Dipetakan {#when-a-domain-is-mapped}

1. Pengguna memetakan domain kustom di Ultimate Multisite (atau situs baru dibuat dalam mode subdomain)
2. Integrasi mengirimkan permintaan POST ke API Enhance: `/servers/{server_id}/domains`
3. Enhance menambahkan domain tersebut ke konfigurasi server Anda
4. Ketika DNS mengarah ke server Anda, Enhance secara otomatis menyediakan sertifikat SSL melalui LetsEncrypt
5. Domain menjadi aktif dengan HTTPS

### Saat Domain Dihapus {#when-a-domain-is-removed}

1. Pemetaan domain dihapus di Ultimate Multisite
2. Integrasi menanyakan ke Enhance untuk mencari ID domain tersebut
3. Permintaan DELETE dikirim ke: `/servers/{server_id}/domains/{domain_id}`
4. Enhance menghapus domain dari konfigurasi server Anda

### Pemeriksaan DNS dan SSL {#dns-and-ssl-checking}

Ultimate Multisite sudah punya fitur cek DNS dan SSL bawaan:
- Anda bisa atur interval pengecekan di **Domain Mapping Settings** (default: 300 detik/5 menit)
- Sistem akan verifikasi propagasi DNS sebelum menandai domain sebagai aktif
- Keabsahan sertifikat SSL dicek otomatis
- Enhance menangani penyediaan SSL secara otomatis, jadi konfigurasi SSL manual tidak perlu dilakukan

## Memverifikasi Pengaturan {#verifying-setup}

### Uji Koneksi {#test-the-connection}

1. Di Wizard Integrasi, gunakan langkah **Test Connection**
2. Plugin akan mencoba mendaftar domain di server Anda
3. Pesan sukses akan mengonfirmasi:
   - Kredensial API sudah benar
   - URL API bisa diakses
   - Server ID valid
   - Izin sudah diatur dengan benar

### Setelah Memetakan Domain {#after-mapping-a-domain}

1. Petakan domain uji di Ultimate Multisite
2. Cek log Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifikasi di Enhance Control Panel bahwa domain sudah ditambahkan:
   - Buka **Servers** > **Your Server** > **Domains**
   - Domain baru seharusnya muncul di daftar
4. Setelah DNS menyebar, pastikan SSL sudah disediakan secara otomatis

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}

**Error: "Failed to connect to Enhance API"** (Gagal terhubung ke API Enhance)
- Cek apakah `WU_ENHANCE_API_URL` diakhiri dengan `/api/`
- Pastikan kamu menggunakan HTTPS, bukan HTTP
- Periksa apakah panel Enhance bisa diakses dari server WordPress kamu
- Cek apakah ada aturan firewall yang memblokir koneksi

**Error: "Enhance API Token not found"** (Token API Enhance tidak ditemukan)
- Pastikan `WU_ENHANCE_API_TOKEN` sudah didefinisikan di `wp-config.php`
- Cek apakah tokennya sudah dihapus atau kedaluwarsa di Enhance
- Periksa apakah ada salah ketik pada nilai token

**Error: "Server ID is not configured"** (ID Server tidak dikonfigurasi)
- Pastikan `WU_ENHANCE_SERVER_ID` sudah didefinisikan di `wp-config.php`
- Pastikan ID Server itu format UUID yang valid
- Konfirmasi apakah server tersebut sudah ada di panel Enhance kamu

### Domain Belum Ditambahkan {#domain-not-added}

**Cek log:**
1. Buka **Ultimate Multisite** > **Logs**
2. Filter berdasarkan **integration-enhance**
3. Cari pesan error yang menunjukkan masalahnya

**Penyebab umum:**
- Format nama domain tidak valid
- Domain sudah ada di Enhance
- Izin API kurang (pastikan token punya peran System Administrator)
- ID Server tidak cocok dengan server yang sebenarnya di Enhance

### Masalah Sertifikat SSL {#ssl-certificate-issues}

**SSL belum terpasang:**
- Cek apakah DNS mengarah ke alamat IP server kamu
- Periksa apakah domainnya terselesaikan dengan benar: `nslookup yourdomain.com`
- Enhance butuh DNS sudah terselesaikan sebelum bisa memasang SSL
- Proses pemasangan SSL biasanya butuh waktu 5-10 menit setelah DNS menyebar (propagation)
- Cek log Control Panel Enhance untuk error spesifik SSL

**Troubleshooting SSL manual di Enhance:**
1. Buka **Servers** > **Your Server** > **Domains**
2. Cari domain kamu dan cek status SSL-nya
3. Kamu bisa memicu pemasangan SSL secara manual jika diperlukan

### Interval Cek DNS {#dns-check-interval}

Lamun domain atawa sertifikat SSL lila pisan aktifna:
1. Pindah ka **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Cari pengaturan **DNS Check Interval**
3. Ubah ti nilai default 300 detik jadi nilai leuwih leutik (minimum: 10 detik)
4. **Catetan:** Interval leutik hartina pengecekan leuwih sering tapi beban serverna bisa naék

### Error Otentikasi {#authentication-errors}

**Error HTTP 401/403:**
- Buat deui API token anjeun di Enhance
- Pastike tokenna boga peran **System Administrator**
- Cek yén tokenna teu kadaluwarsa
- Pastike anjeun ngagunake Organization ID anu bener (sanajan biasana mah teu dipiharep dina URL)

### Analisis Log {#log-analysis}

Aktifkeun logging anu detail:
```php
// Tambah ka wp-config.php pikeun debugging leuwih hadé
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Terus cek log di:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Aya di antarmuka admin Enhance

## Referensi API {#api-reference}

### Otentikasi {#authentication}
Sakabéh permintaan API ngagunake otentikasi Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint Umum anu Dipaké {#common-endpoints-used}

**Daftar Server:**
```
GET /servers
```

**Daftar Domain dina hiji Server:**
```
GET /servers/{server_id}/domains
```

**Tambah Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Hapus Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Dokumentasi API Lengkep {#full-api-documentation}
Dokumentasi API lengkap: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Prakték Pangwangunan (Best Practices) {#best-practices}

### Keamanan (Security) {#security}
- **Jangan pernah simpan API tokens di versi kontrol (version control)**
- Simpan token di `wp-config.php` yang harus dikecualikan dari Git
- Gunakan token dengan izin yang sesuai (System Administrator untuk integrasi penuh)
- Atur tanggal kedaluwarsa token untuk lingkungan produksi
- Putar ulang token secara berkala

### Performa (Performance) {#performance}
- Gunakan interval pengecekan DNS default (300 detik) untuk menghindari panggilan API yang berlebihan
- Pantau sumber daya server Enhance saat menjalankan operasi domain skala besar
- Pertimbangkan untuk menyebar penambahan domain jika memetakan banyak domain sekaligus

### Pemantauan (Monitoring) {#monitoring}
- Periksa log Ultimate Multisite secara rutin untuk kesalahan integrasi
- Siapkan pemantauan untuk penambahan domain yang gagal
- Verifikasi bahwa sertifikat SSL terpasang dengan benar
- Awasi kapasitas server Enhance dan batas domain

## Sumber Daya Tambahan (Additional Resources) {#additional-resources}

- **Dokumentasi Resmi Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentasi API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum Komunitas Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Diskusi GitHub:** [Issue #265 - Tips Integrasi Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Panduan Pemetaan Domain Ultimate Multisite:** Lihat halaman wiki "Cara Mengkonfigurasi Pemetaan Domain v2"

## Dukungan (Support) {#support}

Jika Anda menemui masalah:
1. Periksa bagian Troubleshooting di atas
2. Tinjau log Ultimate Multisite
3. Konsultasikan [Diskusi GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Hubungi dukungan Enhance untuk masalah spesifik panel
5. Buat diskusi baru dengan log kesalahan yang detail untuk bantuan komunitas

## Catatan (Notes) {#notes}

- Integrasi ieu ngan ukur ngurus alias domain; Fitur Enhance ngatur SSL otomatis.
- Integrasi ieu bisa ngadukung pemetaan domain kustom je situs berbasis subdomain.
- Pembuatan subdomain www otomatis bisa diatur dina pengaturan Domain Mapping.
- Enhance ayeuna ngadukung konfigurasi Apache (LiteSpeed Enterprise tersedia).
- Ngapus domain tina Ultimate Multisite bakal ngapus domain tina Enhance tapi mungkin teu langsung ngapus sertifikat SSL anu patali.
