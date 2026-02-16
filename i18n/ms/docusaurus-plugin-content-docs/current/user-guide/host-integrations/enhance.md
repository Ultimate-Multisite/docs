---
title: Tingkatkan Integrasi Panel Kawalan
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Integrasi Enhance Control Panel

## Gambaran Keseluruhan
Enhance ialah panel kawalan moden yang menyediakan keupayaan automasi dan pengurusan hosting yang berkuasa. Integrasi ini membolehkan penyegerakan domain secara automatik dan pengurusan sijil SSL antara Ultimate Multisite dan Enhance Control Panel.

**Perbincangan Berkaitan:** Lihat [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) untuk tips daripada komuniti dan maklumat tambahan.

## Ciri-ciri
- Penyegerakan domain automatik apabila domain dipetakan dalam Ultimate Multisite
- Peruntukan sijil SSL automatik melalui LetsEncrypt apabila DNS telah diselesaikan
- Sokongan subdomain untuk rangkaian yang beroperasi dalam mod subdomain
- Pembuangan domain apabila pemetaan dipadamkan
- Ujian sambungan untuk mengesahkan kelayakan API

## Keperluan

### Keperluan Sistem
- Enhance Control Panel dipasang dan boleh diakses
- Pemasangan WordPress Multisite yang dihoskan pada atau disambungkan kepada pelayan Enhance
- Pelayan web Apache (Enhance kini menyokong konfigurasi Apache; LiteSpeed Enterprise tersedia pada harga yang lebih rendah)

### Akses API
Anda mesti mempunyai akses pentadbir kepada Enhance Control Panel untuk mencipta token API.

## Mendapatkan Kelayakan API Anda

### 1. Cipta Token API

1. Log masuk ke Enhance Control Panel anda sebagai pentadbir
2. Klik pada **Settings** dalam menu navigasi
3. Pergi ke **Access Tokens**
4. Klik **Create Token**
5. Berikan nama yang deskriptif untuk token (contohnya, "Ultimate Multisite Integration")
6. Tetapkan peranan **System Administrator**
7. Untuk tarikh tamat tempoh:
   - Biarkan kosong jika anda mahu token tidak pernah tamat tempoh
   - Atau tetapkan tarikh tamat tempoh tertentu untuk tujuan keselamatan
8. Klik **Create**

Selepas dicipta, **Access Token** dan **Organization ID** anda akan dipaparkan. **Simpan ini dengan segera** kerana token hanya akan ditunjukkan sekali sahaja.

### 2. Dapatkan Organization ID Anda

Organization ID dipaparkan pada halaman Access Tokens dalam kotak maklumat biru berlabel "Org ID: {your_id}".

Organization ID adalah dalam format UUID seperti: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Anda juga boleh mencari Organization ID pelanggan dengan cara:
1. Pergi ke halaman **Customers**
2. Klik **Manage customer** untuk pelanggan yang berkaitan
3. Lihat URL - Organization ID ialah aksara alfanumerik selepas `/customers/`

### 3. Dapatkan Server ID Anda

Untuk mencari Server ID anda (diperlukan untuk operasi domain):

1. Dalam Enhance Control Panel, pergi ke **Servers**
2. Klik pada pelayan di mana pemasangan WordPress anda berjalan
3. Server ID (format UUID) akan kelihatan dalam URL atau butiran pelayan
4. Sebagai alternatif, anda boleh menggunakan API untuk menyenaraikan pelayan:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID mengikuti format UUID: `00000000-0000-0000-0000-000000000000`

### 4. Dapatkan API URL Anda

API URL anda ialah URL Enhance Control Panel anda dengan `/api/` ditambah di hujung:

```
https://your-enhance-panel.com/api/
```

**Penting:** Laluan `/api/` diperlukan. Kesilapan biasa termasuk:
- Menggunakan hanya domain tanpa `/api/`
- Menggunakan HTTP dan bukannya HTTPS (HTTPS diperlukan untuk keselamatan)

## Konfigurasi

### Constant yang Diperlukan

Tambahkan constant berikut ke fail `wp-config.php` anda:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Persediaan melalui Wizard Integrasi

1. Dalam admin WordPress anda, pergi ke **Ultimate Multisite** > **Settings**
2. Pergi ke tab **Integrations**
3. Cari **Enhance Control Panel Integration** dan klik **Configuration**
4. Wizard akan membimbing anda melalui persediaan:
   - **Langkah 1:** Pengenalan dan gambaran keseluruhan ciri
   - **Langkah 2:** Masukkan kelayakan API anda (Token, API URL, Server ID)
   - **Langkah 3:** Uji sambungan
   - **Langkah 4:** Semak dan aktifkan

Anda boleh memilih untuk:
- Biarkan wizard memasukkan constant ke dalam fail `wp-config.php` anda secara automatik
- Salin definisi constant dan tambahkan secara manual

## Konfigurasi WordPress Tambahan

Berdasarkan maklum balas komuniti ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), anda mungkin perlu mengkonfigurasi tetapan tambahan ini:

### Konfigurasi .htaccess

Jika anda mengalami masalah dengan pemetaan domain:
1. Padam fail `.htaccess` asal Enhance
2. Gantikan dengan fail `.htaccess` standard WordPress Multisite

### Constant Cookie

Tambahkan constant ini ke `wp-config.php` untuk memastikan pengendalian cookie yang betul merentasi domain yang dipetakan:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Cara Ia Berfungsi

### Apabila Domain Dipetakan

1. Pengguna memetakan domain tersuai dalam Ultimate Multisite (atau laman baharu dicipta dalam mod subdomain)
2. Integrasi menghantar permintaan POST kepada API Enhance: `/servers/{server_id}/domains`
3. Enhance menambah domain ke konfigurasi pelayan anda
4. Apabila DNS diselesaikan ke pelayan anda, Enhance secara automatik memperuntukkan sijil SSL melalui LetsEncrypt
5. Domain menjadi aktif dengan HTTPS

### Apabila Domain Dibuang

1. Pemetaan domain dipadam dalam Ultimate Multisite
2. Integrasi membuat pertanyaan kepada Enhance untuk mencari ID domain
3. Permintaan DELETE dihantar ke: `/servers/{server_id}/domains/{domain_id}`
4. Enhance membuang domain daripada konfigurasi pelayan anda

### Semakan DNS dan SSL

Ultimate Multisite mempunyai semakan DNS dan SSL terbina dalam:
- Anda boleh mengkonfigurasi selang semakan dalam **Domain Mapping Settings** (lalai: 300 saat/5 minit)
- Sistem akan mengesahkan penyebaran DNS sebelum menandakan domain sebagai aktif
- Kesahihan sijil SSL disemak secara automatik
- Enhance mengendalikan peruntukan SSL secara automatik, jadi konfigurasi SSL manual tidak diperlukan

## Mengesahkan Persediaan

### Uji Sambungan

1. Dalam Wizard Integrasi, gunakan langkah **Test Connection**
2. Plugin akan cuba menyenaraikan domain pada pelayan anda
3. Mesej kejayaan mengesahkan:
   - Kelayakan API adalah betul
   - API URL boleh diakses
   - Server ID adalah sah
   - Kebenaran ditetapkan dengan betul

### Selepas Memetakan Domain

1. Petakan domain ujian dalam Ultimate Multisite
2. Semak log Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Sahkan dalam Enhance Control Panel bahawa domain telah ditambah:
   - Pergi ke **Servers** > **Your Server** > **Domains**
   - Domain baharu sepatutnya muncul dalam senarai
4. Setelah DNS tersebar, sahkan SSL diperuntukkan secara automatik

## Penyelesaian Masalah

### Masalah Sambungan API

**Ralat: "Failed to connect to Enhance API"**
- Sahkan `WU_ENHANCE_API_URL` menyertakan `/api/` di hujung
- Pastikan anda menggunakan HTTPS, bukan HTTP
- Periksa bahawa panel Enhance boleh diakses dari pelayan WordPress anda
- Sahkan tiada peraturan firewall yang menyekat sambungan

**Ralat: "Enhance API Token not found"**
- Pastikan `WU_ENHANCE_API_TOKEN` ditakrifkan dalam `wp-config.php`
- Sahkan token tidak dipadam atau tamat tempoh dalam Enhance
- Periksa kesilapan taip dalam nilai token

**Ralat: "Server ID is not configured"**
- Sahkan `WU_ENHANCE_SERVER_ID` ditakrifkan dalam `wp-config.php`
- Pastikan Server ID dalam format UUID yang sah
- Pastikan pelayan wujud dalam panel Enhance anda

### Domain Tidak Ditambah

**Semak log:**
1. Pergi ke **Ultimate Multisite** > **Logs**
2. Tapis mengikut **integration-enhance**
3. Cari mesej ralat yang menunjukkan masalah

**Punca biasa:**
- Format nama domain tidak sah
- Domain sudah wujud dalam Enhance
- Kebenaran API tidak mencukupi (pastikan token mempunyai peranan System Administrator)
- Server ID tidak sepadan dengan pelayan sebenar dalam Enhance

### Masalah Sijil SSL

**SSL tidak diperuntukkan:**
- Sahkan DNS menghala ke alamat IP pelayan anda
- Periksa bahawa domain diselesaikan dengan betul: `nslookup yourdomain.com`
- Enhance memerlukan DNS diselesaikan sebelum ia boleh memperuntukkan SSL
- Peruntukan SSL biasanya mengambil masa 5-10 minit selepas penyebaran DNS
- Semak log Enhance Control Panel untuk ralat khusus SSL

**Penyelesaian masalah SSL manual dalam Enhance:**
1. Pergi ke **Servers** > **Your Server** > **Domains**
2. Cari domain anda dan semak status SSL-nya
3. Anda boleh mencetuskan peruntukan SSL secara manual jika perlu

### Selang Semakan DNS

Jika domain atau sijil SSL mengambil masa terlalu lama untuk diaktifkan:
1. Pergi ke **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Cari tetapan **DNS Check Interval**
3. Laraskan dari nilai lalai 300 saat ke nilai yang lebih rendah (minimum: 10 saat)
4. **Nota:** Selang yang lebih rendah bermakna semakan lebih kerap tetapi beban pelayan lebih tinggi

### Ralat Pengesahan

**Ralat HTTP 401/403:**
- Jana semula token API anda dalam Enhance
- Sahkan token mempunyai peranan **System Administrator**
- Periksa bahawa token tidak tamat tempoh
- Pastikan anda menggunakan Organization ID yang betul (walaupun ia biasanya tidak diperlukan dalam URL)

### Analisis Log

Aktifkan pengelogan terperinci:
```php
// Tambah ke wp-config.php untuk debugging yang lebih baik
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Kemudian semak log di:
- Log Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Log debug WordPress: `wp-content/debug.log`
- Log panel Enhance: Tersedia dalam antara muka admin Enhance

## Rujukan API

### Pengesahan
Semua permintaan API menggunakan pengesahan token Bearer:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoint Biasa yang Digunakan

**Senarai Pelayan:**
```
GET /servers
```

**Senarai Domain pada Pelayan:**
```
GET /servers/{server_id}/domains
```

**Tambah Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Padam Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Dokumentasi API Penuh
Dokumentasi API lengkap: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Amalan Terbaik

### Keselamatan
- **Jangan sekali-kali commit token API ke kawalan versi**
- Simpan token dalam `wp-config.php` yang sepatutnya dikecualikan dari Git
- Gunakan token dengan kebenaran yang sesuai (System Administrator untuk integrasi penuh)
- Tetapkan tarikh tamat tempoh token untuk persekitaran pengeluaran
- Tukar token secara berkala

### Prestasi
- Gunakan selang semakan DNS lalai (300 saat) untuk mengelakkan panggilan API yang berlebihan
- Pantau sumber pelayan Enhance apabila menjalankan operasi domain berskala besar
- Pertimbangkan untuk menyusun penambahan domain jika memetakan banyak domain sekaligus

### Pemantauan
- Semak log Ultimate Multisite secara berkala untuk ralat integrasi
- Sediakan pemantauan untuk penambahan domain yang gagal
- Sahkan sijil SSL diperuntukkan dengan betul
- Perhatikan kapasiti pelayan Enhance dan had domain

## Sumber Tambahan

- **Dokumentasi Rasmi Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentasi API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum Komuniti Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Perbincangan GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Panduan Pemetaan Domain Ultimate Multisite:** Lihat halaman wiki "How to Configure Domain Mapping v2"

## Sokongan

Jika anda menghadapi masalah:
1. Semak bahagian Penyelesaian Masalah di atas
2. Semak log Ultimate Multisite
3. Rujuk [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Hubungi sokongan Enhance untuk masalah khusus panel
5. Cipta perbincangan baharu dengan log ralat terperinci untuk bantuan komuniti

## Nota

- Integrasi ini hanya mengendalikan alias domain; Enhance menguruskan SSL secara automatik
- Integrasi ini menyokong kedua-dua pemetaan domain tersuai dan laman berasaskan subdomain
- Penciptaan subdomain www automatik boleh dikonfigurasi dalam tetapan Domain Mapping
- Enhance kini menyokong konfigurasi Apache (LiteSpeed Enterprise tersedia)
- Pembuangan domain dari Ultimate Multisite akan membuang domain dari Enhance tetapi mungkin tidak memadamkan sijil SSL yang berkaitan dengan serta-merta
