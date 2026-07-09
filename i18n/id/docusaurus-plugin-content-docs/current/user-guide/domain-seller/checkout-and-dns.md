---
title: Bidang Checkout dan DNS Pelanggan
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Field Checkout dan Pengelolaan DNS Pelanggan {#checkout-field-and-customer-dns-management}

## Field checkout Pemilihan Domain {#the-domain-selection-checkout-field}

Field **Pemilihan Domain** adalah elemen checkout yang memberi pelanggan pilihan tentang cara mendapatkan domain situs mereka. Tambahkan ke formulir checkout apa pun untuk mengaktifkan penjualan domain.

### Menambahkan field ke formulir checkout {#adding-the-field-to-a-checkout-form}

1. Buka **Network Admin › Ultimate Multisite › Formulir Checkout**
2. Buka atau buat formulir checkout
3. Di editor checkout, klik **Tambah Field**
4. Pilih **Pemilihan Domain** dari daftar field
5. Konfigurasikan opsi field (lihat di bawah)
6. Simpan formulir

### Opsi field {#field-options}

**Mode domain** — Pilih tab mana yang dilihat pelanggan. Setiap mode dapat diaktifkan atau dinonaktifkan secara independen:

| Mode | Fungsinya |
|---|---|
| **Subdomain** | Pelanggan menggunakan subdomain gratis di jaringan Anda (mis., `mysite.yournetwork.com`). Tidak perlu pembayaran. |
| **Daftarkan Domain Baru** | Pelanggan mencari domain baru dan mendaftarkannya melalui penyedia yang telah Anda konfigurasikan. Menggunakan produk domain yang cocok untuk penetapan harga. |
| **Domain yang Sudah Ada** | Pelanggan memetakan domain yang sudah mereka miliki. Tidak ada biaya pendaftaran. Domain dipetakan secara otomatis ke situs mereka. |

**Mode default** — Ketika ketiga mode diaktifkan, tab mana yang terbuka terlebih dahulu. Atur ke **Subdomain** agar pendaftaran domain tetap opsional, atau **Daftarkan Domain Baru** untuk mendorong pembelian.

**Produk domain** — Secara opsional, sematkan field ini ke produk domain tertentu. Jika tidak diatur, addon secara otomatis memilih produk yang cocok berdasarkan TLD yang dicari pelanggan.

### Field kontak pendaftar {#registrant-contact-fields}

Ketika pelanggan memilih tab **Daftarkan Domain Baru**, formulir checkout menambahkan field kontak pendaftar secara inline:

- Nama depan / Nama belakang
- Alamat email
- Alamat (baris 1, kota, negara bagian/provinsi, kode pos, negara)
- Nomor telepon

Ini diwajibkan oleh semua registrar dan divalidasi sebelum panggilan API pendaftaran dibuat. Nomor telepon secara otomatis diformat ke format internasional `+CC.NNN` yang diharapkan oleh registrar.

### URL situs yang dibuat otomatis {#auto-generated-site-url}

Ketika pelanggan mendaftarkan atau memetakan domain, field URL situs secara otomatis diisi dari domain yang dipilih. Pelanggan tidak perlu mengisi field URL terpisah.

### Perilaku pencarian {#search-behaviour}

- Ketersediaan domain diperiksa secara real-time dengan AJAX saat pelanggan mengetik
- Saran TLD alternatif ditampilkan ketika domain yang diinginkan tidak tersedia
- Harga diambil secara live dan ditampilkan dengan jelas (harga pendaftaran, harga perpanjangan, biaya privasi WHOIS opsional)
- Kode kupon berlaku untuk produk domain sama seperti produk lainnya

**Menyesuaikan responsivitas pencarian:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Menambahkan field kustom ke formulir pencarian domain:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Pengelolaan DNS pelanggan {#customer-dns-management}

Pelanggan dapat mengelola catatan DNS untuk domain terdaftar mereka dari halaman **My Account**, di bawah entri domain mereka.

### Jenis catatan yang didukung {#supported-record-types}

| Jenis | Penggunaan |
|---|---|
| **A** | Petakan hostname ke alamat IPv4 |
| **AAAA** | Petakan hostname ke alamat IPv6 |
| **CNAME** | Buat alias yang mengarah ke hostname lain |
| **MX** | Atur server pertukaran email |
| **TXT** | Tambahkan catatan SPF, DMARC, verifikasi, atau teks lainnya |

### Penyedia mana yang mendukung pengelolaan DNS? {#which-providers-support-dns-management}

Pengelolaan DNS (menambah, mengedit, menghapus catatan) tersedia dengan **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, dan **Openprovider**. Domain **Hostinger** dapat memperbarui nameserver melalui Domain Seller; catatan DNS untuk domain yang di-host dikelola oleh integrasi pemetaan domain inti Hostinger. Domain Namecheap, GoDaddy, dan NameSilo menampilkan informasi status dan kedaluwarsa, tetapi DNS harus dikelola langsung di panel kontrol registrar.

### Catatan DNS default {#default-dns-records}

Anda dapat mengonfigurasi catatan DNS default yang diterapkan secara otomatis saat domain didaftarkan. Buka **Settings › Domain Seller › Catatan DNS Default**.

Nilai catatan default mendukung dua token:

| Token | Diganti dengan |
|---|---|
| `{DOMAIN}` | Nama domain terdaftar (mis., `example.com`) |
| `{SITE_URL}` | URL situs WordPress untuk situs pelanggan |

**Contoh — arahkan domain apex dan www ke IP server Anda:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: melihat dan mengedit DNS {#admin-viewing-and-editing-dns}

Admin jaringan dapat melihat dan mengedit catatan DNS untuk domain pelanggan mana pun dari halaman edit domain di **Network Admin › Ultimate Multisite › Domains**.
