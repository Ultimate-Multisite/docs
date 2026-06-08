---
title: Bidang Checkout dan DNS Pelanggan
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Manajemen Bidang Checkout dan DNS Pelanggan

## Bidang Pemilihan Domain

Bidang **Pemilihan Domain** adalah elemen checkout yang memberikan pilihan kepada pelanggan mengenai cara mendapatkan domain situs mereka. Tambahkan bidang ini ke formulir checkout mana pun untuk mengaktifkan penjualan domain.

### Menambahkan bidang ke formulir checkout

1. Buka **Network Admin › Ultimate Multisite › Checkout Forms**
2. Buka atau buat formulir checkout
3. Di editor checkout, klik **Add Field**
4. Pilih **Domain Selection** dari daftar bidang
5. Konfigurasikan opsi bidang (lihat di bawah)
6. Simpan formulir

### Opsi bidang

**Mode Domain** — Pilih tab mana yang akan dilihat pelanggan. Setiap mode dapat diaktifkan atau dinonaktifkan secara independen:

| Mode | Fungsinya |
|---|---|
| **Subdomain** | Pelanggan menggunakan subdomain gratis di jaringan Anda (misalnya, `mysite.yournetwork.com`). Tidak perlu pembayaran. |
| **Register New Domain** | Pelanggan mencari domain baru dan mendaftarkannya melalui penyedia yang telah Anda konfigurasikan. Menggunakan produk domain yang cocok untuk penetapan harga. |
| **Existing Domain** | Pelanggan memetakan domain yang sudah mereka miliki. Tanpa biaya pendaftaran. Domain akan dipetakan secara otomatis ke situs mereka. |

**Mode Default** — Ketika ketiga mode diaktifkan, tab mana yang akan terbuka terlebih dahulu. Atur ke **Subdomain** untuk menjaga pendaftaran domain tetap opsional, atau **Register New Domain** untuk mendorong pembelian.

**Domain product** — Secara opsional sematkan bidang ini ke produk domain tertentu. Jika tidak diatur, addon akan secara otomatis memilih produk yang cocok berdasarkan TLD yang dicari pelanggan.

### Bidang kontak pemegang hak (Registrant contact fields)

Ketika pelanggan memilih tab **Register New Domain**, formulir checkout akan menambahkan bidang kontak pemegang hak secara *inline*:

- Nama depan / Nama belakang
- Alamat email
- Alamat (baris 1, kota, negara bagian/provinsi, kode pos, negara)
- Nomor telepon

Ini wajib diisi oleh semua registrar dan divalidasi sebelum panggilan API pendaftaran dibuat. Nomor telepon secara otomatis diformat ke format internasional `+CC.NNN` yang diharapkan oleh registrar.

### URL situs yang dibuat otomatis

Ketika pelanggan mendaftarkan atau memetakan domain, bidang URL situs akan diisi secara otomatis dari domain yang dipilih. Pelanggan tidak perlu mengisi bidang URL terpisah.

### Perilaku pencarian

- Ketersediaan domain diperiksa secara *real-time* menggunakan AJAX saat pelanggan mengetik
- Saran TLD alternatif ditampilkan ketika domain pilihan tidak tersedia
- Harga diambil secara langsung dan ditampilkan dengan jelas (harga pendaftaran, harga perpanjangan, biaya privasi WHOIS opsional)
- Kode kupon berlaku untuk produk domain sama seperti produk lainnya

**Menyesuaikan responsivitas pencarian:**

```php
// Tingkatkan jeda debounce (milidetik) untuk mengurangi panggilan API pada koneksi lambat
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Menambahkan bidang kustom ke formulir pencarian domain:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Catatan tambahan',
    ];
    return $fields;
});
```

---

## Manajemen DNS Pelanggan

Pelanggan dapat mengelola catatan DNS untuk domain terdaftar mereka dari halaman **My Account**, di bawah entri domain mereka.

### Jenis catatan yang didukung

| Tipe | Kegunaan |
|---|---|
| **A** | Memetakan hostname ke alamat IPv4 |
| **AAAA** | Memetakan hostname ke alamat IPv6 |
| **CNAME** | Membuat alias yang menunjuk ke hostname lain |
| **MX** | Mengatur server pertukaran surat (mail exchange server) |
| **TXT** | Menambahkan catatan teks SPF, DMARC, verifikasi, atau catatan teks lainnya |

### Penyedia mana yang mendukung manajemen DNS?

Manajemen DNS (menambah, mengedit, menghapus catatan) tersedia dengan **OpenSRS**, **ResellerClub**, dan **Enom**. Domain Namecheap, GoDaddy, dan NameSilo menampilkan status dan informasi kedaluwarsa, tetapi DNS harus dikelola langsung di panel kontrol registrar.

### Catatan DNS default

Anda dapat mengonfigurasi catatan DNS default yang akan diterapkan secara otomatis ketika domain didaftarkan. Buka **Settings › Domain Seller › Default DNS Records**.

Nilai catatan default mendukung dua *token*:

| Token | Diganti dengan |
|---|---|
| `{DOMAIN}` | Nama domain terdaftar (misalnya, `example.com`) |
| `{SITE_URL}` | URL situs WordPress untuk situs pelanggan |

**Contoh — menunjuk domain apex dan www ke IP server Anda:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: melihat dan mengedit DNS

Admin jaringan dapat melihat dan mengedit catatan DNS untuk domain pelanggan mana pun dari halaman edit domain di **Network Admin › Ultimate Multisite › Domains**.
