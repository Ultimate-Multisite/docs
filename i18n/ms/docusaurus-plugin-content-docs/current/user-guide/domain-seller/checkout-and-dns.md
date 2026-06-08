---
title: Medan Checkout dan DNS Pelanggan
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Pengurusan Medan Checkout dan DNS Pelanggan

## Medan Pemilihan Domain (Domain Selection checkout field)

Medan **Domain Selection** adalah elemen checkout yang memberikan pilihan kepada pelanggan tentang cara mendapatkan domain untuk laman web mereka. Tambahkan medan ini ke mana-mana borang checkout untuk membolehkan penjualan domain.

### Menambah medan ke borang checkout

1. Pergi ke **Network Admin › Ultimate Multisite › Checkout Forms**
2. Buka atau cipta borang checkout
3. Dalam editor checkout, klik **Add Field**
4. Pilih **Domain Selection** dari senarai medan
5. Konfigurasi pilihan medan (lihat di bawah)
6. Simpan borang

### Pilihan medan (Field options)

**Domain modes** — Pilih tab mana yang akan dilihat oleh pelanggan. Setiap mod boleh diaktifkan atau dinyahaktifkan secara berasingan:

| Mode | Fungsi |
|---|---|
| **Subdomain** | Pelanggan menggunakan subdomain percuma pada rangkaian anda (cth., `mysite.yournetwork.com`). Tiada bayaran diperlukan. |
| **Register New Domain** | Pelanggan mencari domain baharu dan mendaftarkannya melalui penyedia yang telah anda konfigurasikan. Menggunakan produk domain yang sepadan untuk penetapan harga. |
| **Existing Domain** | Pelanggan memetakan domain yang sudah mereka miliki. Tiada yuran pendaftaran. Domain akan dipetakan secara automatik ke laman web mereka. |

**Default mode** — Apabila ketiga-tiga mod diaktifkan, tab mana yang akan dibuka dahulu. Tetapkan kepada **Subdomain** untuk menjadikan pendaftaran domain pilihan, atau **Register New Domain** untuk menggalakkan pembelian.

**Domain product** — Secara pilihan, pin medan ini kepada produk domain tertentu. Jika tidak ditetapkan, addon akan memilih produk yang sepadan secara automatik berdasarkan TLD yang dicari oleh pelanggan.

### Medan kontak pendaftar (Registrant contact fields)

Apabila pelanggan memilih tab **Register New Domain**, borang checkout akan menambah medan kontak pendaftar secara dalam talian:

- Nama depan / Nama belakang
- Alamat e-mel
- Alamat (baris 1, bandar, negeri/provinsi, kod pos, negara)
- Nombor telefon

Ini adalah wajib oleh semua pendaftar dan disahkan sebelum panggilan API pendaftaran dibuat. Nombor telefon akan diformatkan secara automatik kepada format antarabangsa `+CC.NNN` yang dijangkakan oleh pendaftar.

### URL laman web yang dijana secara automatik (Auto-generated site URL)

Apabila pelanggan mendaftar atau memetakan domain, medan URL laman web akan diisi secara automatik daripada domain yang dipilih. Pelanggan tidak perlu mengisi medan URL berasingan.

### Tingkah laku carian (Search behaviour)

- Ketersediaan domain diperiksa secara masa nyata dengan AJAX semasa pelanggan menaip
- Cadangan TLD alternatif ditunjukkan apabila domain pilihan tidak tersedia
- Harga diambil secara langsung dan dipaparkan dengan jelas (harga pendaftaran, harga pembaharuan, yuran privasi WHOIS pilihan)
- Kod kupon dikenakan pada produk domain sama seperti produk lain

**Menala kebolehresponsifan carian:**

```php
// Tingkatkan kelewatan debounce (milisaat) untuk mengurangkan panggilan API pada sambungan perlahan
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Menambah medan tersuai ke borang carian domain:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Nota tambahan',
    ];
    return $fields;
});
```

---

## Pengurusan DNS Pelanggan (Customer DNS management)

Pelanggan boleh menguruskan rekod DNS untuk domain yang didaftarkan dari halaman **My Account**, di bawah entri domain mereka.

### Jenis rekod yang disokong (Supported record types)

| Jenis | Kegunaan |
|---|---|
| **A** | Memetakan nama hos kepada alamat IPv4 |
| **AAAA** | Memetakan nama hos kepada alamat IPv6 |
| **CNAME** | Mencipta alias yang menunjuk ke nama hos lain |
| **MX** | Menetapkan pelayan pertukaran mel (mail exchange server) |
| **TXT** | Menambah rekod teks SPF, DMARC, pengesahan, atau teks lain |

### Penyedia mana yang menyokong pengurusan DNS?

Pengurusan DNS (tambah, edit, padam rekod) tersedia dengan **OpenSRS**, **ResellerClub**, dan **Enom**. Domain Namecheap, GoDaddy, dan NameSilo memaparkan status dan maklumat luput, tetapi DNS mesti diuruskan terus dalam panel kawalan pendaftar.

### Rekod DNS lalai (Default DNS records)

Anda boleh mengkonfigurasi rekod DNS lalai yang akan digunakan secara automatik apabila domain didaftarkan. Pergi ke **Settings › Domain Seller › Default DNS Records**.

Nilai rekod lalai menyokong dua token:

| Token | Digantikan dengan |
|---|---|
| `{DOMAIN}` | Nama domain yang didaftarkan (cth., `example.com`) |
| `{SITE_URL}` | URL laman web WordPress untuk laman web pelanggan |

**Contoh — menunjuk domain apex dan www ke IP pelayan anda:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Pentadbir: melihat dan menyunting DNS

Pentadbir rangkaian boleh melihat dan menyunting rekod DNS untuk mana-mana domain pelanggan dari halaman suntingan domain di **Network Admin › Ultimate Multisite › Domains**.
