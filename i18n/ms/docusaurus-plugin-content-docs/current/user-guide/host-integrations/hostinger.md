---
title: Integrasi Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integrasi Hostinger (hPanel)

## Gambaran Keseluruhan {#overview}

Hostinger ialah penyedia hosting web popular dengan panel kawalan moden yang dipanggil hPanel. Integrasi Ultimate Multisite Hostinger membolehkan penyegerakan domain automatik antara Ultimate Multisite dan hPanel Hostinger, membolehkan anda menguruskan pemetaan domain dan subdomain secara automatik terus dari pentadbiran WordPress anda.

## Ciri-ciri {#features}

- Penciptaan addon domain automatik dalam hPanel
- Penciptaan subdomain automatik dalam hPanel (untuk pemasangan multisite subdomain)
- Pembuangan domain apabila pemetaan dipadamkan
- Integrasi lancar dengan API pengurusan domain hPanel

## Keperluan {#requirements}

Untuk menggunakan integrasi Hostinger, anda memerlukan:

1. Akaun Hostinger dengan akses hPanel
2. Token API daripada Hostinger
3. Pemalar berikut ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Secara pilihan, anda juga boleh mentakrifkan:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API lalai
```

## Arahan Persediaan {#setup-instructions}

### 1. Jana Token API Hostinger Anda {#1-generate-your-hostinger-api-token}

1. Log masuk ke akaun Hostinger anda dan akses hPanel
2. Navigasi ke **Account Settings** → **API Tokens**
3. Klik **Create New Token**
4. Beri nama deskriptif pada token anda (cth., "Ultimate Multisite")
5. Pilih kebenaran yang diperlukan:
   - Pengurusan domain
   - Pengurusan subdomain
6. Salin token yang dijana dan simpan ia dengan selamat

### 2. Cari ID Akaun Anda {#2-find-your-account-id}

1. Dalam hPanel, pergi ke **Account Settings** → **Account Information**
2. ID Akaun anda dipaparkan pada halaman ini
3. Salin dan simpan ID ini untuk langkah seterusnya

### 3. Tambah Pemalar ke wp-config.php {#3-add-constants-to-wp-configphp}

Tambahkan pemalar berikut ke fail `wp-config.php` anda:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Jika akaun Hostinger anda menggunakan endpoint API yang berbeza, anda boleh menyesuaikannya:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktifkan Integrasi {#4-enable-the-integration}

1. Dalam pentadbiran WordPress anda, pergi ke **Ultimate Multisite > Settings**
2. Navigasi ke tab **Domain Mapping**
3. Gulir ke bawah ke **Host Integrations**
4. Aktifkan integrasi **Hostinger (hPanel)**
5. Klik **Save Changes**

## Cara Ia Berfungsi {#how-it-works}

### Addon Domains {#addon-domains}

Apabila anda memetakan domain dalam Ultimate Multisite:

1. Integrasi menghantar permintaan ke API Hostinger untuk menambah domain sebagai addon domain
2. Domain dikonfigurasikan untuk menunjuk ke direktori utama anda
3. Apabila pemetaan domain dipadamkan, integrasi secara automatik membuang addon domain daripada hPanel

### Subdomains {#subdomains}

Untuk pemasangan multisite subdomain, apabila tapak baharu dicipta:

1. Integrasi mengekstrak bahagian subdomain daripada domain penuh
2. Ia menghantar permintaan ke API Hostinger untuk menambah subdomain
3. Subdomain dikonfigurasikan untuk menunjuk ke direktori utama anda

## Nota Penting {#important-notes}

- Integrasi ini menggunakan REST API Hostinger untuk berkomunikasi dengan akaun anda
- Token API anda mesti mempunyai kebenaran yang diperlukan untuk pengurusan domain dan subdomain
- Integrasi ini tidak menguruskan konfigurasi DNS; domain mesti sudah ditunjuk ke akaun Hostinger anda
- Permintaan API dibuat dengan selamat melalui HTTPS
- Simpan token API anda dengan selamat dan jangan pernah berkongsi ia secara terbuka

## Penyelesaian Masalah {#troubleshooting}

### Isu Sambungan API {#api-connection-issues}

- Sahkan bahawa token API anda betul dan belum luput
- Semak bahawa ID Akaun anda adalah betul
- Pastikan token API anda mempunyai kebenaran yang diperlukan untuk pengurusan domain
- Sahkan bahawa akaun Hostinger anda aktif dan dalam keadaan baik

### Domain Tidak Ditambah {#domain-not-added}

- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Sahkan bahawa domain tersebut belum ditambah kepada akaun Hostinger anda
- Pastikan akaun Hostinger anda belum mencapai had untuk addon domain
- Sahkan bahawa domain tersebut ditunjuk dengan betul ke nameserver Hostinger anda

### Isu Sijil SSL {#ssl-certificate-issues}

- Integrasi ini tidak menguruskan pengeluaran sijil SSL
- Hostinger biasanya menyediakan sijil SSL percuma melalui AutoSSL
- Anda boleh menguruskan sijil SSL terus dalam hPanel di bawah **SSL/TLS**
- Alternatifnya, gunakan Let's Encrypt dengan ciri AutoSSL Hostinger

## Sokongan {#support}

Untuk bantuan tambahan mengenai integrasi Hostinger, sila rujuk:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
