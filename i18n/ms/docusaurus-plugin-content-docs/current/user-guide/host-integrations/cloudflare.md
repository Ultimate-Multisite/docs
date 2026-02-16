---
title: Integrasi Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Integrasi Cloudflare

## Gambaran Keseluruhan
Cloudflare ialah rangkaian penghantaran kandungan (CDN) dan penyedia keselamatan terkemuka yang membantu melindungi dan mempercepatkan laman web. Integrasi ini membolehkan pengurusan domain secara automatik antara Ultimate Multisite dan Cloudflare, terutamanya untuk pemasangan multisite subdomain.

## Ciri-ciri
- Penciptaan subdomain automatik dalam Cloudflare
- Sokongan subdomain yang diproksi
- Pengurusan rekod DNS
- Paparan rekod DNS yang dipertingkatkan dalam admin Ultimate Multisite

## Keperluan
Pemalar berikut mesti ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Arahan Persediaan

### 1. Dapatkan Kunci API Cloudflare Anda

1. Log masuk ke dashboard Cloudflare anda
2. Pergi ke "My Profile" (klik pada e-mel anda di penjuru kanan atas)
3. Pilih "API Tokens" dari menu
4. Cipta token API baharu dengan kebenaran berikut:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Salin token API anda

### 2. Dapatkan Zone ID Anda

1. Dalam dashboard Cloudflare anda, pilih domain yang ingin anda gunakan
2. Zone ID boleh dilihat dalam tab "Overview", di bar sisi kanan di bawah "API"
3. Salin Zone ID tersebut

### 3. Tambah Pemalar ke wp-config.php

Tambahkan pemalar berikut ke dalam fail `wp-config.php` anda:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktifkan Integrasi

1. Dalam admin WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Aktifkan integrasi Cloudflare
5. Klik "Save Changes"

## Cara Ia Berfungsi

### Pengurusan Subdomain

Apabila laman baharu dicipta dalam pemasangan multisite subdomain:

1. Integrasi menghantar permintaan ke API Cloudflare untuk menambah rekod CNAME bagi subdomain tersebut
2. Subdomain dikonfigurasi untuk diproksi melalui Cloudflare secara lalai (ini boleh diubah menggunakan filter)
3. Apabila laman dipadamkan, integrasi akan membuang subdomain dari Cloudflare

### Paparan Rekod DNS

Integrasi ini mempertingkatkan paparan rekod DNS dalam admin Ultimate Multisite dengan:

1. Mengambil rekod DNS terus dari Cloudflare
2. Memaparkan sama ada rekod diproksi atau tidak
3. Menunjukkan maklumat tambahan tentang rekod DNS

## Nota Penting

Berdasarkan kemas kini terkini Cloudflare, proksi wildcard kini tersedia untuk semua pelanggan. Ini bermakna integrasi Cloudflare tidak lagi sepenting dahulu untuk pemasangan multisite subdomain, kerana anda boleh menyediakan rekod DNS wildcard dalam Cloudflare dengan mudah.

## Penyelesaian Masalah

### Isu Sambungan API
- Pastikan token API anda betul dan mempunyai kebenaran yang diperlukan
- Semak bahawa Zone ID anda adalah betul
- Pastikan akaun Cloudflare anda mempunyai kebenaran yang diperlukan

### Subdomain Tidak Ditambah
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Pastikan subdomain tersebut belum ditambah ke Cloudflare
- Pastikan pelan Cloudflare anda menyokong bilangan rekod DNS yang anda cipta

### Isu Proksi
- Jika anda tidak mahu subdomain diproksi, anda boleh menggunakan filter `wu_cloudflare_should_proxy`
- Sesetengah ciri mungkin tidak berfungsi dengan betul apabila diproksi (contohnya, fungsi admin WordPress tertentu)
- Pertimbangkan untuk menggunakan Page Rules Cloudflare untuk memintas cache bagi halaman admin
