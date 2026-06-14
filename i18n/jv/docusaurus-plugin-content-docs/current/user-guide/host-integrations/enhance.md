---
title: Nambah Integrasi Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Nambah Integrasi Control Panel

## Gambaran Umum
Enhance iku control panel modern sing nawakake kemampuan otomatisasi lan manajemen hosting sing kuat. Integrasi iki bisa nggawe sinkronisasi domain lan manajemen sertifikat SSL otomatis antara Ultimate Multisite lan Enhance Control Panel.

**Diskusi Terkait:** Deleng [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) kanggo tips komunitas lan informasi tambahan.

## Fitur
- Sinkronisasi domain otomatis nalika domain wis dipetakan ing Ultimate Multisite
- Penyediaan sertifikat SSL otomatis liwat LetsEncrypt nalika DNS wis resik
- Dukungan subdomain kanggo jaringan sing dijalankan nganggo mode subdomain
- Penghapusan domain nalika pemetaan dihapus
- Uji koneksi kanggo verifikasi kredensial API

## Persyaratan

### Persyaratan Sistem
- Enhance Control Panel wis terpasang lan gampang diakses
- Instalasi WordPress Multisite di-host ing utawa terhubung menyang server Enhance
- Apache web server (Enhance saiki duwe dukungan konfigurasi Apache; LiteSpeed Enterprise kersa kanthi biaya sing luwih murah)

### Akses API
Sampeyan kudu duwe akses administrator menyang Enhance Control Panel kanggo nggawe API tokens.

## Nggoleki Kredensial API Sampeyan

### 1. Buat API Token

1. Masuk menyang Enhance Control Panel nganggo admin
2. Klik **Settings** ing menu navigasi
3. Tindakake menyang **Access Tokens**
4. Klik **Create Token**
5. Wenehi nama sing deskriptif kanggo token kuwi (contone, "Ultimate Multisite Integration")
6. Tunjuk peran **System Administrator**
7. Kanggo tanggal kedaluwarsa:
   - Wangsulana kosong yen sampeyan arep token kasebut ora bakal kadaluwarsa
   - Utawa atur tanggal kedaluwarsa spesifik kanggo tujuan keamanan
8. Klik **Create**

Sawise wisokake, **Access Token** lan **Organization ID** bakal ditampilake sawise sampeyan nggawe akun. **Simpen iki langsung** mergo token kuwi mung bakal ditunjuka sakali wae.

### 2. Entuk Organization ID Sampeyan

Organization ID iku katon ing halaman Access Tokens ing kotak informasi biru sing jenenge "Org ID: {your_id}".

Organization ID iku duwe format UUID kaya ngene: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Sampeyan uga bisa nemokake Organization ID pelanggan kanthi cara iki:
1. Tindakake halaman **Customers**
2. Klik **Manage customer** kanggo pelanggan sing relevan
3. Deleng URL - Organization ID iku karakter alfanumerik sawise `/customers/`

### 3. Entuk Server ID Sampeyan

Kanggo nemokake Server ID sampeyan (sing dibutuhake kanggo operasi domain):

1. Ing Enhance Control Panel, tindakake menyang **Servers**
2. Klik server sing lagi dijalanke WordPress sampeyan
3. Server ID (format UUID) bakal katon ing URL utawa detail server
4. Alternatifé, sampeyan bisa nggunakake API kanggo milih server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID iku duwe format UUID kaya ngene: `00000000-0000-0000-0000-000000000000`

### 4. Entuk API URL Sampeyan

API URL sampeyan iku URL Enhance Control Panel sampeyan karo `/api/` ditambahi:

```
https://your-enhance-panel.com/api/
```

**Penting:** Jalur `/api/` kuwi kudu ana. Kesalahan umum yaiku:
- Nggunakake mung domain tanpa `/api/`
- Nggunakake HTTP tinimbang HTTPS (HTTPS dibutuhake kanggo keamanan)

## Konfigurasi

### Konstanta sing Diwajibake

Tambahkan konstanta iki menyang file `wp-config.php` sampeyan:

// Nambah Integrasi Control Panel
define('WU_ENHANCE_API_TOKEN', 'token-bearer-sampe-sini');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'uuid-server-mu-sini');

### Setup liwat Integration Wizard

1. Ing admin WordPress sampeyan, tindakake **Ultimate Multisite** > **Settings**
2. Tindakake menyang tab **Integrations**
3. Temokake **Enhance Control Panel Integration** lan klik **Configuration**
4. Wizard bakal nuntun sampeyan kanggo setup:
   - **Langkah 1:** Pengenalan lan gambaran fitur
   - **Langkah 2:** Masukkan kredensial API sampeyan (Token, API URL, Server ID)
   - **Langkah 3:** Uji koneksi
   - **Langkah 4:** Tinjau lan aktifake

Sampeyan bisa milih kanggo:
- Biar wizard masukan konstanta kuwi langsung menyang file `wp-config.php` sampeyan
- Salin definisi konstanta lan tambahkan manual

## Konfigurasi WordPress Tambahan

Miturut masukan komunitas ([Diskusi #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), sampeyan mungkin perlu ngatur setting tambahan iki:

### Konfigurasi .htaccess

Yen sampeyan nemokake masalah karo pemetaan domain:
1. Hapus file `.htaccess` Enhance sing asli
2. Ganti nganggo file `.htaccess` Multisite WordPress standar

### Konstanta Cookie

Tambahkan konstanta iki menyang `wp-config.php` kanggo mesthekake penanganan cookie sing bener antar domain sing dipet:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Kepiye Carane Nggunakake

### Nalika Domain Dipet

1. Pengguna memetakan domain kustom di Ultimate Multisite (atau situs baru dibuat dalam mode subdomain)
2. Integrasi mengirimkan permintaan POST ke API Enhance: `/servers/{server_id}/domains`
3. Enhance menambahkan domain tersebut ke konfigurasi server Anda
4. Ketika DNS mengarah ke server Anda, Enhance secara otomatis menyediakan sertifikat SSL melalui LetsEncrypt
5. Domain menjadi aktif dengan HTTPS

### Saat Domain Dihapus

1. Pemetaan domain dihapus di Ultimate Multisite
2. Integrasi menanyakan ke Enhance untuk menemukan ID domain tersebut
3. Permintaan DELETE dikirim ke: `/servers/{server_id}/domains/{domain_id}`
4. Enhance menghapus domain dari konfigurasi server Anda

### Pemeriksaan DNS dan SSL

Ultimate Multisite sudah punya fitur cek DNS dan SSL bawaan:
- Anda bisa atur interval pengecekan di **Domain Mapping Settings** (default: 300 detik/5 menit)
- Sistem akan verifikasi propagasi DNS sebelum menandai domain sebagai aktif
- Validitas sertifikat SSL dicek otomatis
- Enhance menangani penyediaan SSL secara otomatis, jadi konfigurasi SSL manual tidak perlu dilakukan

## Memverifikasi Pengaturan

### Uji Koneksi

1. Di Wizard Integrasi, gunakan langkah **Test Connection**
2. Plugin akan mencoba mendaftar domain di server Anda
3. Pesan sukses akan mengonfirmasi:
   - Kredensial API sudah benar
   - URL API bisa diakses
   - Server ID valid
   - Izin sudah diatur dengan benar

### Setelah Memetakan Domain

1. Petakan domain uji di Ultimate Multisite
2. Cek log Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifikasi di Enhance Control Panel bahwa domain sudah ditambahkan:
   - Buka **Servers** > **Your Server** > **Domains**
   - Domain baru seharusnya muncul di daftar
4. Setelah DNS menyebar, pastikan SSL sudah disediakan secara otomatis

## Troubleshooting

### Masalah Koneksi API

**Error: "Failed to connect to Enhance API"**
- Cek apakah `WU_ENHANCE_API_URL` diakhiri dengan `/api/`
- Pastikan kamu pakai HTTPS, bukan HTTP
- Cek apakah panel Enhance bisa diakses dari server WordPress kamu
- Pastikan tidak ada aturan firewall yang memblokir koneksi

**Error: "Enhance API Token not found"**
- Pastikan `WU_ENHANCE_API_TOKEN` sudah didefinisikan di `wp-config.php`
- Cek apakah tokennya sudah dihapus atau kedaluwarsa di Enhance
- Periksa apakah ada salah ketik (typo) pada nilai token

**Error: "Server ID is not configured"**
- Pastikan `WU_ENHANCE_SERVER_ID` sudah didefinisikan di `wp-config.php`
- Pastikan Server ID itu format UUID yang benar
- Konfirmasi apakah server tersebut sudah ada di panel Enhance kamu

### Domain Belum Ditambahkan

**Cek log:**
1. Buka **Ultimate Multisite** > **Logs**
2. Filter berdasarkan **integration-enhance**
3. Cari pesan error yang menunjukkan masalahnya

**Penyebab umum:**
- Format nama domain tidak valid
- Domain sudah ada di Enhance
- Izin API kurang (pastikan token punya peran System Administrator)
- Server ID tidak cocok dengan server yang sebenarnya di Enhance

### Masalah Sertifikat SSL

**SSL belum terpasang:**
- Cek apakah DNS mengarah ke alamat IP server kamu
- Pastikan domain terbaca dengan benar: `nslookup yourdomain.com`
- Enhance butuh DNS sudah terbaca sebelum bisa memasang SSL
- Proses pemasangan SSL biasanya butuh waktu 5-10 menit setelah DNS menyebar (propagation)
- Cek log di Enhance Control Panel untuk error spesifik SSL

**Troubleshooting SSL manual di Enhance:**
1. Buka **Servers** > **Your Server** > **Domains**
2. Cari domain kamu dan cek status SSL-nya
3. Kamu bisa memicu pemasangan SSL secara manual kalau perlu

### Interval Cek DNS

Yen domain utawa SSL certificate kake suwe banget kanggo aktif:
1. Tindakake **Ultimate Multisite** > **Settings** > **Domain Mapping**.
2. Cari pengaturan **DNS Check Interval**.
3. Ubah saka nilai default 300 detik dadi nilai luwih cilik (minimal: 10 detik).
4. **Cathetan:** Interval sing luwih cilik tegese pengecekan luwih kerep nanging beban server uga bakal luwih gedhe.

### Kesalahan Otentikasi (Authentication Errors)

**Kesalahan HTTP 401/403:**
- Gawe maneh API tokenmu ing Enhance.
- Verifikasi yen token kuwi duwe peran **System Administrator**.
- Cek yen token wis ora kedaluwarsa.
- Pastikan sampeyan nggunakake Organization ID sing bener (sanajan biasane ora perlu ana ing URL).

### Analisis Log

Aktifake logging rinci:
```php
// Tambah ing wp-config.php kanggo debugging luwih apik
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Terus cek log ing:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**.
- WordPress debug log: `wp-content/debug.log`.
- Enhance panel logs: Tersedia ing antarmuka admin Enhance.

## Referensi API (API Reference)

### Otentikasi
Kabeh permintaan API nggunakake otentikasi Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint Umum sing Digunakake

**Daftar Server:**
```
GET /servers
```

**Daftar Domain ing Server:**
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

### Dokumentasi API Lengkap
Dokumentasi API lengkap: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Praktik Terbaik (Best Practices)

### Keamanan (Security)
- **Jangan pernah simpan API tokens di versi kontrol (version control)**
- Simpan token di `wp-config.php` yang harus dikecualikan dari Git
- Gunakan token dengan izin yang sesuai (System Administrator untuk integrasi penuh)
- Atur tanggal kedaluwarsa token untuk lingkungan produksi
- Putar ulang token secara berkala

### Performa (Performance)
- Gunakan interval pengecekan DNS default (300 detik) untuk menghindari panggilan API yang berlebihan
- Pantau sumber daya server Enhance saat menjalankan operasi domain skala besar
- Pertimbangkan untuk menyebar penambahan domain jika memetakan banyak domain sekaligus

### Pemantauan (Monitoring)
- Periksa log Ultimate Multisite secara rutin untuk kesalahan integrasi
- Siapkan pemantauan untuk penambahan domain yang gagal
- Verifikasi sertifikat SSL dipasang dengan benar
- Awasi kapasitas server Enhance dan batas domain

## Sumber Daya Tambahan (Additional Resources)

- **Dokumentasi Resmi Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentasi API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum Komunitas Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Diskusi GitHub:** [Issue #265 - Tips Integrasi Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Panduan Pemetaan Domain Ultimate Multisite:** Lihat halaman wiki "Cara Mengkonfigurasi Pemetaan Domain v2"

## Dukungan (Support)

Jika Anda menemui masalah:
1. Periksa bagian Troubleshooting di atas
2. Tinjau log Ultimate Multisite
3. Konsultasikan [Diskusi GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Hubungi dukungan Enhance untuk masalah spesifik panel
5. Buat diskusi baru dengan log error yang detail untuk bantuan komunitas

## Catatan (Notes)

- Integrasi iki mung ngurus alias domain; Enhance bakal ngatur SSL otomatis.
- Integrasi iki ndukung pemetaan domain kustom lan situs berbasis subdomain.
- Pembuatan subdomain www otomatis bisa diatur ing pengaturan Domain Mapping.
- Enhance saiki ndhukung konfigurasi Apache (LiteSpeed Enterprise uga tersedia).
- Penghapusan domain saka Ultimate Multisite bakal ngapus domain saka Enhance, nanging mungkin ora langsung ngapus sertifikat SSL sing terkait.
