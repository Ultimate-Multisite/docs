---
title: Medan Checkout dan DNS Pelanggan
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Field dan Pengurusan DNS Pelanggan {#checkout-field-and-customer-dns-management}

## Field checkout Pemilihan Domain {#the-domain-selection-checkout-field}

Field **Domain Selection** ialah elemen checkout yang memberi pelanggan pilihan tentang cara mendapatkan domain tapak mereka. Tambahkannya pada mana-mana borang checkout untuk mendayakan penjualan domain.

### Menambah field pada borang checkout {#adding-the-field-to-a-checkout-form}

1. Pergi ke **Network Admin › Ultimate Multisite › Checkout Forms**
2. Buka atau cipta borang checkout
3. Dalam editor checkout, klik **Add Field**
4. Pilih **Domain Selection** daripada senarai field
5. Konfigurasikan pilihan field (lihat di bawah)
6. Simpan borang

### Pilihan field {#field-options}

**Mod domain** — Pilih tab yang pelanggan lihat. Setiap mod boleh didayakan atau dinyahdayakan secara berasingan:

| Mod | Perkara yang dilakukan |
|---|---|
| **Subdomain** | Pelanggan menggunakan subdomain percuma pada rangkaian anda (cth., `mysite.yournetwork.com`). Tiada bayaran diperlukan. |
| **Register New Domain** | Pelanggan mencari domain baharu dan mendaftarkannya melalui penyedia yang telah anda konfigurasikan. Menggunakan produk domain yang sepadan untuk harga. |
| **Existing Domain** | Pelanggan memetakan domain yang sudah mereka miliki. Tiada yuran pendaftaran. Domain dipetakan secara automatik ke tapak mereka. |

**Mod lalai** — Apabila ketiga-tiga mod didayakan, tab mana yang dibuka dahulu. Tetapkan kepada **Subdomain** untuk menjadikan pendaftaran domain pilihan, atau **Register New Domain** untuk menggalakkan pembelian.

**Produk domain** — Secara pilihan, pin field ini kepada produk domain tertentu. Jika tidak ditetapkan, addon memilih produk yang sepadan secara automatik berdasarkan TLD yang dicari oleh pelanggan.

### Field hubungan pendaftar {#registrant-contact-fields}

Apabila pelanggan memilih tab **Register New Domain**, borang checkout menambah field hubungan pendaftar secara sebaris:

- Nama pertama / Nama akhir
- Alamat e-mel
- Alamat (baris 1, bandar, negeri/wilayah, poskod, negara)
- Nombor telefon

Ini diperlukan oleh semua pendaftar dan disahkan sebelum panggilan API pendaftaran dibuat. Nombor telefon diformatkan secara automatik kepada format antarabangsa `+CC.NNN` yang dijangka oleh pendaftar.

### URL tapak yang dijana automatik {#auto-generated-site-url}

Apabila pelanggan mendaftarkan atau memetakan domain, field URL tapak diisi secara automatik daripada domain yang dipilih. Pelanggan tidak perlu mengisi field URL yang berasingan.

### Tingkah laku carian {#search-behaviour}

- Ketersediaan domain disemak secara masa nyata dengan AJAX semasa pelanggan menaip
- Cadangan TLD alternatif ditunjukkan apabila domain pilihan tidak tersedia
- Harga diambil secara langsung dan dipaparkan dengan jelas (harga pendaftaran, harga pembaharuan, yuran privasi WHOIS pilihan)
- Kod kupon digunakan pada produk domain sama seperti mana-mana produk lain

**Melaras respons carian:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Menambah field tersuai pada borang carian domain:**

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

## Pengurusan DNS pelanggan {#customer-dns-management}

Pelanggan boleh mengurus rekod DNS untuk domain berdaftar mereka daripada halaman **My Account**, di bawah entri domain mereka.

### Jenis rekod yang disokong {#supported-record-types}

| Jenis | Kegunaan |
|---|---|
| **A** | Petakan nama hos kepada alamat IPv4 |
| **AAAA** | Petakan nama hos kepada alamat IPv6 |
| **CNAME** | Cipta alias yang menunjuk kepada nama hos lain |
| **MX** | Tetapkan pelayan pertukaran mel |
| **TXT** | Tambah SPF, DMARC, pengesahan, atau rekod teks lain |

### Penyedia manakah yang menyokong pengurusan DNS? {#which-providers-support-dns-management}

Pengurusan DNS (tambah, edit, padam rekod) tersedia dengan **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, dan **Openprovider**. Domain **Hostinger** boleh mengemas kini nameserver melalui Domain Seller; rekod DNS untuk domain yang dihoskan diurus oleh integrasi pemetaan domain Hostinger teras. Domain Namecheap, GoDaddy, dan NameSilo memaparkan status dan maklumat tamat tempoh tetapi DNS mesti diurus terus dalam panel kawalan pendaftar.

### Rekod DNS lalai {#default-dns-records}

Anda boleh mengkonfigurasikan rekod DNS lalai yang digunakan secara automatik apabila domain didaftarkan. Pergi ke **Settings › Domain Seller › Default DNS Records**.

Nilai rekod lalai menyokong dua token:

| Token | Digantikan dengan |
|---|---|
| `{DOMAIN}` | Nama domain berdaftar (cth., `example.com`) |
| `{SITE_URL}` | URL tapak WordPress untuk tapak pelanggan |

**Contoh — halakan domain apex dan www ke IP pelayan anda:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: melihat dan mengedit DNS {#admin-viewing-and-editing-dns}

Admin rangkaian boleh melihat dan mengedit rekod DNS untuk mana-mana domain pelanggan daripada halaman edit domain dalam **Network Admin › Ultimate Multisite › Domains**.
