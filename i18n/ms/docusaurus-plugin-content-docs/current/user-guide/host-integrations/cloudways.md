---
title: Integrasi Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrasi Cloudways

## Gambaran Keseluruhan {#overview}
Cloudways ialah platform pengehosan awan terurus yang membolehkan anda melaksanakan tapak WordPress pada pelbagai penyedia awan seperti DigitalOcean, AWS, Google Cloud, dan banyak lagi. Integrasi ini membolehkan penyegerakan domain automatik dan pengurusan sijil SSL antara Ultimate Multisite dan Cloudways.

## Ciri-ciri {#features}
- Penyegerakan domain automatik
- Pengurusan sijil SSL
- Sokongan untuk domain tambahan
- Pengesahan DNS untuk sijil SSL

## Keperluan {#requirements}
Pemalar berikut mesti ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Secara pilihan, anda juga boleh mentakrifkan:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Arahan Persediaan {#setup-instructions}

### 1. Dapatkan Kelayakan API Cloudways Anda {#1-get-your-cloudways-api-credentials}

1. Log masuk ke Dashboard Cloudways anda
2. Pergi ke "Account" > "API Keys"
3. Jana kunci API jika anda belum mempunyainya
4. Salin e-mel dan kunci API anda

### 2. Dapatkan ID Pelayan dan Aplikasi Anda {#2-get-your-server-and-application-ids}

1. Dalam Dashboard Cloudways anda, pergi ke "Servers"
2. Pilih pelayan tempat multisite WordPress anda dihoskan
3. Server ID kelihatan dalam URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Pergi ke "Applications" dan pilih aplikasi WordPress anda
5. App ID kelihatan dalam URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Tambahkan Pemalar ke wp-config.php {#3-add-constants-to-wp-configphp}

Tambahkan pemalar berikut ke fail `wp-config.php` anda:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Jika anda mempunyai domain **luaran** tambahan (di luar rangkaian multisite anda) yang harus sentiasa dikekalkan dalam senarai alias Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Jangan sertakan wildcard rangkaian anda sendiri
Jangan **sekali-kali** tambahkan `*.your-network.com` (atau sebarang corak subdomain rangkaian anda sendiri) ke
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Lihat [Penting — perangkap SSL wildcard](#important--wildcard-ssl-pitfall)
di bawah untuk mengetahui sebab ini menghalang sijil SSL setiap penyewa daripada dikeluarkan.
:::

### 4. Dayakan Integrasi {#4-enable-the-integration}

1. Dalam pentadbir WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Dayakan integrasi Cloudways
5. Klik "Save Changes"

## Cara Ia Berfungsi {#how-it-works}

### Penyegerakan Domain {#domain-syncing}

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi mendapatkan semua domain yang dipetakan pada masa ini
2. Ia menambahkan domain baharu ke senarai (bersama-sama dengan versi www jika berkenaan)
3. Ia menghantar senarai lengkap ke Cloudways melalui API
4. Cloudways mengemas kini alias domain untuk aplikasi anda

Nota: API Cloudways memerlukan penghantaran senarai lengkap domain setiap kali, bukan sekadar menambah atau mengalih keluar domain individu.

### Pengurusan Sijil SSL {#ssl-certificate-management}

Selepas domain disegerakkan:

1. Integrasi menyemak domain mana yang mempunyai rekod DNS sah yang menunjuk ke pelayan anda
2. Ia menghantar permintaan kepada Cloudways untuk memasang sijil SSL Let's Encrypt bagi domain tersebut
3. Cloudways mengendalikan pengeluaran dan pemasangan sijil SSL

Integrasi ini sentiasa meminta sijil Let's Encrypt **standard** (bukan wildcard) daripada
Cloudways. Jika corak wildcard dibekalkan dalam `WU_CLOUDWAYS_EXTRA_DOMAINS`, awalan
`*.` dibuang sebelum permintaan SSL — wildcard itu sendiri tidak pernah dipasang oleh
integrasi ini. Untuk menggunakan sijil wildcard pada Cloudways, anda perlu memasangnya
secara manual, tetapi berbuat demikian menyekat pengeluaran Let's Encrypt setiap domain untuk domain tersuai yang dipetakan
(lihat perangkap di bawah).

## Domain Tambahan {#extra-domains}

Pemalar `WU_CLOUDWAYS_EXTRA_DOMAINS` membolehkan anda menentukan domain **luaran**
tambahan yang harus sentiasa dikekalkan dalam senarai alias aplikasi Cloudways. Gunakannya untuk:

- Domain luaran yang tidak diurus oleh Ultimate Multisite (cth. tapak pemasaran berasingan yang berkongsi aplikasi Cloudways yang sama)
- Domain diparkir atau pementasan yang anda mahu dikekalkan dalam senarai alias aplikasi

Jangan **sekali-kali** gunakan pemalar ini untuk wildcard subdomain rangkaian anda sendiri
(cth. `*.your-network.com`). Lihat perangkap SSL wildcard di bawah.

## Penting — Perangkap SSL Wildcard {#important--wildcard-ssl-pitfall}

Kesilapan biasa apabila mengikuti persediaan lalai Cloudways ialah menambahkan wildcard seperti
`*.your-network.com` ke `WU_CLOUDWAYS_EXTRA_DOMAINS`, atau memasang sijil SSL wildcard Cloudways
secara manual untuk wildcard tersebut.

**Jika anda melakukan ini, Cloudways akan menolak untuk mengeluarkan sijil Let's Encrypt bagi
domain tersuai setiap penyewa yang dipetakan oleh Ultimate Multisite.** Cloudways menggantikan sijil
SSL aktif pada aplikasi setiap kali, dan sijil wildcard sedia ada pada
aplikasi menyekat pengeluaran Let's Encrypt setiap domain yang bergantung padanya integrasi ini.

### Persediaan SSL Cloudways yang disyorkan untuk rangkaian Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Dalam tab **SSL Certificate** aplikasi Cloudways, pasang sijil Let's Encrypt **standard
   ** yang meliputi hanya `your-network.com` dan `www.your-network.com`
   — **bukan** wildcard.
2. Jangan **sekali-kali** letakkan `*.your-network.com` (atau sebarang corak subdomain rangkaian anda sendiri) dalam
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Simpan pemalar itu untuk domain **luaran** sahaja.
3. Cipta wildcard subdomain setiap penyewa pada tahap **DNS** sahaja (rekod `A` untuk
   `*.your-network.com` yang menunjuk ke IP pelayan Cloudways anda) supaya subtapak dapat diselesaikan. SSL
   untuk domain tersuai dipetakan individu kemudiannya dikeluarkan secara automatik oleh integrasi
   melalui Let's Encrypt.

Jika domain tersuai tenant anda tersekat tanpa SSL, semak tab SSL Cloudways. Jika sijil
wildcard aktif di sana, buangnya, keluarkan semula sijil Let's Encrypt standard
untuk domain rangkaian utama sahaja, dan buang sebarang entri wildcard daripada
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Kemudian cetuskan semula pemetaan domain (atau tunggu yang seterusnya)
dan integrasi akan mula mengeluarkan sijil per-domain semula.

## Penyelesaian Masalah {#troubleshooting}

### Isu Sambungan API {#api-connection-issues}
- Sahkan bahawa email dan API key anda betul
- Semak bahawa ID server dan aplikasi anda betul
- Pastikan Account Cloudways anda mempunyai keizinan yang diperlukan

### Isu Sijil SSL {#ssl-certificate-issues}
- Cloudways memerlukan domain mempunyai rekod DNS yang sah yang menghala ke server anda sebelum mengeluarkan sijil SSL
- Integrasi mengesahkan rekod DNS sebelum meminta sijil SSL
- Jika sijil SSL tidak dikeluarkan, semak bahawa domain anda menghala dengan betul ke alamat IP server anda
- **Domain tersuai per-tenant tersekat tanpa SSL?** Semak tab SSL Certificate aplikasi Cloudways. Jika sijil wildcard (dipasang secara manual, atau meliputi `*.your-network.com`) aktif, Cloudways tidak akan mengeluarkan sijil Let's Encrypt untuk domain tersuai yang dipetakan secara individu. Gantikannya dengan sijil Let's Encrypt standard yang meliputi hanya domain rangkaian utama (`your-network.com`, `www.your-network.com`) dan buang sebarang entri wildcard daripada `WU_CLOUDWAYS_EXTRA_DOMAINS`. Kemudian cetuskan semula pemetaan domain (atau tunggu yang seterusnya) dan integrasi akan meminta sijil per-domain.

### Domain Tidak Ditambah {#domain-not-added}
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Sahkan bahawa domain belum ditambah ke Cloudways
- Pastikan plan Cloudways anda menyokong bilangan domain yang anda tambah
