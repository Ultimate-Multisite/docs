---
title: Field Checkout lan DNS Pelanggan
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Pengelolaan Field Checkout dan DNS Pelanggan

## Field Pemilihan Domain Checkout

Field **Domain Selection** iku elemen di checkout sing menehi pilihan marang pelanggan babagan kepiye carane nggolek domain kanggo situsé. Tambah iki menyang form checkout apa wae supaya bisa ngaktifake penjualan domain.

### Nambah field menyang form checkout

1. Tindakake **Network Admin › Ultimate Multisite › Checkout Forms**
2. Buka utawa gawe form checkout
3. Ing editor checkout, klik **Add Field**
4. Pilih **Domain Selection** saka daftar field
5. Konfigurasi pilihan field (deloken ing ngisor)
6. Simpan form

### Pilihan field

**Domain modes** — Pilih tab-tab apa sing bakal didelokake pelanggan. Saben mode bisa diaktifake utawa dinonaktifake kanthi mandiri:

| Mode | Apa gunane |
|---|---|
| **Subdomain** | Pelanggan nggunakake subdomain gratis ing jaringanmu (contone, `mysite.yournetwork.com`). Ora perlu bayar. |
| **Register New Domain** | Pelanggan nyari domain anyar lan mendaftar liwat penyedia sing wis dikonfigurasi dening sampeyan. Nggunakake produk domain sing cocok kanggo penentuan harga. |
| **Existing Domain** | Pelanggan nggandheng domain sing wis duwe. Ora ana biaya pendaftaran. Domain bakal otomatis digandhengake menyang situsé. |

**Default mode** — Nalika ketigane mode diaktifake, tab endi sing bakal mbukak dhisik. Set maneh dadi **Subdomain** supaya pendaftaran domain tetep optional, utawa **Register New Domain** supaya ngajak tuku.

**Domain product** — Opsi iki bisa dipatok (pin) menyang produk domain tartamtu. Yen ora di-set, addon bakal otomatis milih produk sing cocok adhedhasar TLD sing dicari pelanggan.

### Field kontak pendaftar

Nalika pelanggan milih tab **Register New Domain**, form checkout nambah field kontak pendaftar langsung:

- Nama Depan / Nama Belakang
- Alamat Email
- Alamat (baris 1, kutha, provinsi/negara bagian, kode pos, negara)
- Nomor Telepon

Iki iki sing dibutuhake dening kabeh pendaftar lan ditimbang sadurunge API registration dikirim. Nomor telepon otomatis diformat dadi format internasional `+CC.NNN` sing ditunggu dening pendaftar.

### Auto-generated site URL

Yen pelanggan daftar utawa nggandheng domain, kolom site URL bakal otomatis diisi saka domain sing dipilih. Pelanggan ora perlu ngisi kolom URL terpisah.

### Perilaku pencarian (Search behaviour)

- Ketersediaan domain dicek real-time nganggo AJAX nalika pelanggan mengetik
- Saran TLD alternatif bakal ditunjuka yen domain pilihan ora tersedia
- Harga dijangkepi langsung lan ditunjuka kanthi jelas (harga registrasi, harga renewal, biaya WHOIS privacy opsional)
- Kode kupon berlaku kanggo produk domain kaya produk liyane

**Nyetel responsivitas pencarian:**

```php
// Nambah jeda debounce (milliseconds) kanggo ngurangi panggilan API ing koneksi alon
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Nambah kolom kustom menyang form pencarian domain:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Cathetan tambahan',
    ];
    return $fields;
});
```

---

## Manajemen DNS Pelanggan (Customer DNS management)

Pelanggan bisa ngatur record DNS kanggo domain sing wis didaftar saka halaman **My Account**, ing bawah entri domain kasebut.

### Tipe record sing didukung

| Tipe | Kegunaan |
|---|---|
| **A** | Nggandheng hostname menyang alamat IPv4 |
| **AAAA** | Nggandheng hostname menyang alamat IPv6 |
| **CNAME** | Nggawe alias sing nunjukake hostname liyane |
| **MX** | Nentokake server tukar surat (mail exchange) |
| **TXT** | Nambah record teks SPF, DMARC, verifikasi, utawa record teks liyane |

### Provider endi sing ndukung manajemen DNS?

Manajemen DNS (menambah, mengedit, menghapus record) bisa dilakukan pakai **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, dan **Openprovider**. Domain **Hostinger** bisa diupdate nameserver-nya lewat Domain Seller. Untuk domain yang sudah di-host, pengaturan DNS-nya dikelola langsung oleh integrasi *domain-mapping* inti Hostinger. Domain dari Namecheap, GoDaddy, dan NameSilo akan menampilkan status dan tanggal kedaluwarsa, tapi DNS harus dikelola langsung di panel kontrol registrar masing-masing.

### Default DNS records

Kamu bisa atur default DNS record yang bakal otomatis dipakai pas domain didaftarkan. Langsung aja buka **Settings › Domain Seller › Default DNS Records**.

Nilai default record ini dukung dua *token*:

| Token | Diganti dengan |
|---|---|
| `{DOMAIN}` | Nama domain yang terdaftar (contoh: `example.com`) |
| `{SITE_URL}` | URL situs WordPress untuk situs pelanggan |

**Contoh — arahkan domain utama (*apex*) dan www ke IP server kamu:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: melihat dan mengedit DNS

Admin jaringan bisa lihat dan edit record DNS untuk domain pelanggan mana pun dari halaman edit domain di **Network Admin › Ultimate Multisite › Domains**.
