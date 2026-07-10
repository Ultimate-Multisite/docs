---
title: Integrasi Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integrasi Hostinger (hPanel) {#hostinger-hpanel-integration}

## Gambaran Umum {#overview}

Hostinger iku penyedia hosting yang populer dengan panel kontrol modern namanya hPanel. Integrasi Ultimate Multisite Hostinger memungkinkan sinkronisasi domain otomatis antara Ultimate Multisite dan hPanel Hostinger, sehingga kamu bisa mengatur pemetaan domain dan subdomain secara otomatis langsung dari admin WordPress kamu.

## Fitur {#features}

- Pembuatan addon domain otomatis di hPanel
- Pembuatan subdomain otomatis di hPanel (untuk instalasi subdomain multisite)
- Penghapusan domain saat pemetaan dihapus
- Integrasi mulus dengan API manajemen domain hPanel

## Persyaratan {#requirements}

Untuk menggunakan integrasi Hostinger, kamu perlu:

1. Akun Hostinger yang punya akses ke hPanel
2. Token API dari Hostinger
3. Konstanta berikut harus didefinisikan di file `wp-config.php` kamu:

```php
define('WU_HOSTINGER_API_TOKEN', 'token_api_hostinger_kamu');
define('WU_HOSTINGER_ACCOUNT_ID', 'id_akun_hostinger_kamu');
```

Secara opsional, kamu juga bisa mendefinisikan:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API default
```

## Petunjuk Pengaturan {#setup-instructions}

### 1. Buat Token API Hostinger Kamu {#1-generate-your-hostinger-api-token}

1. Masuk ke akun Hostinger kamu dan akses hPanel
2. Pergi ke **Account Settings** → **API Tokens**
3. Klik **Create New Token**
4. Beri nama yang jelas untuk token kamu (contoh: "Ultimate Multisite")
5. Pilih izin yang diperlukan:
   - Domain management
   - Subdomain management
6. Salin token yang sudah dibuat dan simpan dengan aman

### 2. Temukan ID Akun Kamu {#2-find-your-account-id}

1. Di hPanel, pergi ke **Account Settings** → **Account Information**
2. ID Akun kamu akan ditampilkan di halaman ini
3. Salin dan simpan ID ini untuk langkah selanjutnya

### 3. Tambahkan Konstanta ke wp-config.php {#3-add-constants-to-wp-configphp}

Tambahkan konstanta berikut ke file `wp-config.php` kamu:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Yen akun Hostinger sampeyan nganggo endpoint API sing beda, sampeyan bisa ngowahi (customize) kaya ngene iki:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktifake Integrasi {#4-enable-the-integration}

1. Ing admin WordPress panjenengan, tindak menyang **Ultimate Multisite > Settings**
2. Tindak menyang tab **Domain Mapping**
3. Gulung ngisor tekan **Host Integrations**
4. Aktifake integrasi **Hostinger (hPanel)**
5. Klik **Save Changes**

## Kepiye Carane Nggunakake {#how-it-works}

### Addon Domains {#addon-domains}

Nalika panjenengan map domain ing Ultimate Multisite:

1. Integrasi kuwi ngirim request menyang API Hostinger kanggo nambah domain kuwi minangka addon domain
2. Domain kasebut dikonfigurasi supaya nunjuk marang direktori utama (root directory) panjenengan
3. Nalika pemetaan domain dihapus, integrasi kuwi otomatis bakal ngapus addon domain saka hPanel

### Subdomains {#subdomains}

Kanggo instalasi subdomain multisite, nalika situs anyar digawe:

1. Integrasi kuwi njupuk bagian subdomain saka domain lengkap
2. Integrasi kuwi ngirim request menyang API Hostinger kanggo nambah subdomain kasebut
3. Subdomain kasebut dikonfigurasi supaya nunjuk marang direktori utama (root directory) panjenengan

## Cathetan Penting {#important-notes}

- Integrasi iki nganggo REST API Hostinger kanggo komunikasi karo akun panjenengan
- API token panjenengan kudu duwe izin sing perlu kanggo ngelola domain lan subdomain
- Integrasi iki ora ngurus konfigurasi DNS; domain wis kudu nunjuk marang akun Hostinger panjenengan sadurunge
- Request API dikirim kanthi aman liwat HTTPS
- Jagaake api token panjenengan supaya aman lan aja tau diwenehake publik

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}

- Pastikan token API sampeyan bener lan ora kedaluwarsa
- Cek yen Account ID sampeyan bener
- Pastikan token API sampeyan duwe izin sing dibutuhake kanggo manajemen domain
- Pastikan akun Hostinger sampeyan aktif lan dalam kondisi baik

### Domain Ora Ditambah {#domain-not-added}

- Cek log Ultimate Multisite kanggo pesan error apa wae
- Verifikasi yen domain wis ora ditambahi ing akun Hostinger sampeyan
- Pastikan akun Hostinger sampeyan durung nggo batas domain tambahan (addon domains)
- Konfirmasi yen domain wis diarahkan kanthi bener menyang nameserver Hostinger sampeyan

### Masalah Sertifikat SSL {#ssl-certificate-issues}

- Integrasi iki ora ngurus penerbitan sertifikat SSL
- Hostinger biasane nyedhiyakake sertifikat SSL gratis liwat AutoSSL
- Sampeyan bisa ngatur sertifikat SSL langsung ing hPanel ing bagian **SSL/TLS**
- Alternatifé, gunakna Let's Encrypt kanthi fitur AutoSSL saka Hostinger

## Dukungan (Support) {#support}

Kanggo bantuan tambahan babagan integrasi Hostinger, silakan merujuk menyang:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
