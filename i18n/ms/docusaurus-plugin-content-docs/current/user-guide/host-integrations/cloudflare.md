---
title: Integrasi Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrasi Cloudflare

## Gambaran Keseluruhan {#overview}
Cloudflare ialah rangkaian penghantaran kandungan (CDN) dan penyedia keselamatan terkemuka yang membantu melindungi dan mempercepatkan laman web. Integrasi ini membolehkan pengurusan domain automatik antara Ultimate Multisite dan Cloudflare, khususnya untuk pemasangan multisite subdomain.

## Ciri-ciri {#features}
- Penciptaan subdomain automatik dalam Cloudflare
- Sokongan subdomain berproksi
- Pengurusan rekod DNS
- Paparan rekod DNS yang dipertingkat dalam pentadbir Ultimate Multisite

## Keperluan {#requirements}
Pemalar berikut mesti ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Arahan Persediaan {#setup-instructions}

### 1. Dapatkan Cloudflare API Key Anda {#1-get-your-cloudflare-api-key}

1. Log masuk ke Dashboard Cloudflare anda
2. Pergi ke "Profil Saya" (klik pada e-mel anda di penjuru kanan atas)
3. Pilih "Token API" daripada menu
4. Cipta token API baharu dengan kebenaran berikut:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Salin token API anda

### 2. Dapatkan Zone ID Anda {#2-get-your-zone-id}

1. Dalam Dashboard Cloudflare anda, pilih domain yang ingin anda gunakan
2. Zone ID boleh dilihat dalam tab "Gambaran Keseluruhan", di bar sisi kanan di bawah "API"
3. Salin Zone ID

### 3. Tambahkan Pemalar ke wp-config.php {#3-add-constants-to-wp-configphp}

Tambahkan pemalar berikut ke fail `wp-config.php` anda:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Dayakan Integrasi {#4-enable-the-integration}

1. Dalam pentadbir WordPress anda, pergi ke Ultimate Multisite > Tetapan
2. Navigasi ke tab "Pemetaan Domain"
3. Tatal ke bawah ke "Integrasi Hos"
4. Dayakan integrasi Cloudflare
5. Klik "Simpan Perubahan"

## Cara Ia Berfungsi {#how-it-works}

### Pengurusan Subdomain {#subdomain-management}

Apabila laman baharu dicipta dalam pemasangan multisite subdomain:

1. Integrasi menghantar permintaan kepada API Cloudflare untuk menambahkan rekod CNAME bagi subdomain
2. Subdomain dikonfigurasikan untuk diproksikan melalui Cloudflare secara lalai (ini boleh diubah dengan penapis)
3. Apabila laman dipadamkan, integrasi akan mengalih keluar subdomain daripada Cloudflare

### Paparan Rekod DNS {#dns-record-display}

Integrasi mempertingkat paparan rekod DNS dalam pentadbir Ultimate Multisite dengan:

1. Mengambil rekod DNS secara terus daripada Cloudflare
2. Memaparkan sama ada rekod diproksikan atau tidak
3. Menunjukkan maklumat tambahan tentang rekod DNS

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (sebelum ini dipanggil "Cloudflare for SaaS") ialah ciri Cloudflare yang membolehkan pelanggan anda menggunakan domain mereka sendiri dengan SSL pada rangkaian multisite anda. Ini ialah pendekatan yang disyorkan untuk pemasangan multisite yang dipetakan domain dan menggunakan Cloudflare, kerana Cloudflare mengurus pengeluaran dan pembaharuan sijil SSL untuk setiap domain tersuai secara automatik.

### Perbezaannya daripada integrasi Cloudflare standard {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integrasi standard | Cloudflare Custom Hostnames |
|---|---|---|
| **Tujuan** | Mencipta rekod DNS secara automatik untuk subdomain | Membolehkan domain tersuai (dipetakan) dengan SSL yang diurus Cloudflare |
| **Terbaik untuk** | Multisite subdomain | Multisite dipetakan domain |
| **SSL** | Dikendalikan secara berasingan | Diurus oleh Cloudflare secara automatik |

### Menyediakan Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Dalam Dashboard Cloudflare anda, buka zon untuk domain utama anda.
2. Pergi ke **SSL/TLS > Custom Hostnames**.
3. Tambahkan asal sandaran yang menunjuk kepada IP pelayan atau nama hos anda.
4. Untuk setiap domain pelanggan yang dipetakan dalam Ultimate Multisite, tambahkan entri Custom Hostname dalam Cloudflare. Anda boleh mengautomasikan langkah ini menggunakan Cloudflare API.
5. Cloudflare mengeluarkan dan memperbaharui sijil TLS untuk setiap nama hos tersuai secara automatik sebaik sahaja DNS pelanggan dihalakan ke rangkaian anda.

Untuk rujukan API penuh, lihat [dokumentasi Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Kemas kini terminologi
Mulai Ultimate Multisite v2.6.1, ciri ini dirujuk sebagai **Cloudflare Custom Hostnames** dalam semua tetapan dan label plugin. Versi terdahulu menggunakan nama "Cloudflare for SaaS", iaitu nama produk Cloudflare yang mendasarinya.
:::

## Nota Penting {#important-notes}

Sejak kemas kini terbaru Cloudflare, proksi wildcard kini tersedia untuk semua pelanggan. Ini bermakna integrasi DNS Cloudflare standard kurang kritikal untuk pemasangan multisite subdomain berbanding dahulu, kerana anda hanya boleh menyediakan rekod DNS wildcard dalam Cloudflare.

## Penyelesaian Masalah {#troubleshooting}

### Isu Sambungan API {#api-connection-issues}
- Sahkan bahawa token API anda betul dan mempunyai kebenaran yang diperlukan
- Semak bahawa Zone ID anda betul
- Pastikan Account Cloudflare anda mempunyai kebenaran yang diperlukan

### Subdomain Tidak Ditambahkan {#subdomain-not-added}
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Sahkan bahawa subdomain belum ditambahkan ke Cloudflare
- Pastikan plan Cloudflare anda menyokong bilangan rekod DNS yang anda cipta

### Isu Proksi {#proxying-issues}
- Jika anda tidak mahu subdomain diproksikan, anda boleh menggunakan penapis `wu_cloudflare_should_proxy`
- Sesetengah ciri mungkin tidak berfungsi dengan betul apabila diproksikan (cth., fungsi pentadbir WordPress tertentu)
- Pertimbangkan untuk menggunakan Page Rules Cloudflare untuk memintas cache bagi halaman pentadbir
