---
title: Pangwangun Lapangan Checkout sareng DNS Pelanggan
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Pengelolaan Bidang Checkout dan DNS Pelanggan

## Kolom Pemilihan Domain

Kolom **Domain Selection** adalah elemen checkout yang memberikan pilihan kepada pelanggan tentang cara mendapatkan domain situs mereka. Tambahkan ini ke setiap formulir checkout untuk mengaktifkan penjualan domain.

### Menambahkan kolom ke formulir checkout

1. Buka **Network Admin › Ultimate Multisite › Checkout Forms**
2. Buka atau buat formulir checkout
3. Di editor checkout, klik **Add Field** (Tambahkan Kolom)
4. Pilih **Domain Selection** dari daftar kolom
5. Konfigurasikan opsi kolom (lihat di bawah)
6. Simpan formulir

### Opsi kolom

**Domain modes** — Pilih tab mana yang dilihat pelanggan. Setiap mode bisa diaktifkan atau dinonaktifkan secara terpisah:

| Mode | Fungsinya |
|---|---|
| **Subdomain** | Pelanggan menggunakan subdomain gratis di jaringan Anda (contoh: `mysite.yournetwork.com`). Tidak perlu pembayaran. |
| **Register New Domain** | Pelanggan mencari domain baru dan mendaftarkannya melalui penyedia yang sudah Anda konfigurasikan. Menggunakan produk domain yang cocok untuk penentuan harga. |
| **Existing Domain** | Pelanggan memetakan domain yang sudah mereka miliki. Tidak ada biaya pendaftaran. Domain akan otomatis dipetakan ke situs mereka. |

**Default mode** — Ketika ketiga mode ini diaktifkan, tab mana yang terbuka lebih dulu. Atur ke **Subdomain** untuk menjaga pendaftaran domain tetap opsional, atau **Register New Domain** untuk mendorong pembelian.

**Domain product** — Secara opsional, sematkan kolom ini ke produk domain tertentu. Jika tidak diatur, addon akan secara otomatis memilih produk yang cocok berdasarkan TLD (Top-Level Domain) yang dicari pelanggan.

### Kolom kontak pemegang pendaftaran

Ketika pelanggan memilih tab **Register New Domain**, formulir checkout menambahkan kolom kontak pemegang pendaftaran secara langsung:

- Nama Depan / Nama Belakang
- Alamat Email
- Alamat (baris 1, kota, negara bagian/provinsi, kode pos, negara)
- Nomor Telepon

Ieu dipersyaratkeun ku sakabé pendaftar je diuji saméméh panggilan API registrasi dilakukeun. Nomina telepon otomatis diformat jadi format internasional `+CC.NNN` anu ditunggu ku para pendaftar.

### Auto-generated site URL

Lamun pelanggan mendaftar atawa mapkeun domain, kolom site URL bakal diisi otomatis tina domain anu dipilih. Pelanggan teu perlu ngisian kolom URL séjén.

### Perilaku pencarian (Search behaviour)

- Ketersediaan domain diuji sacara *real-time* ku AJAX nalika pelanggan ngetik
- Saran TLD alternatif bakal ditunjuke lamun domain pilihan teu aya
- Harga diangkut langsung je dipidangkeun jelas (harga registrasi, harga perpanjangan, biaya privasi WHOIS anu optional)
- Kode kupon mangpaat pikeun produk domain saperti produk séjén

**Ngatur tanggapan pencarian:**

```php
// Naékkeun debounce delay (milidetik) kanggo ngurangan panggilan API dina koneksi lambat
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Nambahan kolom kustom kana formulir pencarian domain:**

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

## Ngatur DNS Pelanggan (Customer DNS management)

Pelanggan bisa ngatur *DNS record* pikeun domain anu geus didaftarkeun tina halaman **My Account**, di bawah entri domainna.

### Jenis record anu didukung

| Tipe | Panggoan |
|---|---|
| **A** | Map hostname ka alamat IPv4 |
| **AAAA** | Map hostname ka alamat IPv6 |
| **CNAME** | Ngadamel alias nu nunjukkeun hostname séjén |
| **MX** | Ngatur server *mail exchange* |
| **TXT** | Nambahan SPF, DMARC, verifikasi, atawa record téks séjén |

### Provider mana anu ngajak ngatur DNS?

Manajemen DNS (tambah, edit, hapus record) bisa dilakukan dengan **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, dan **Openprovider**. Domain **Hostinger** bisa memperbarui nameserver lewat Domain Seller; untuk domain yang di-host, pengaturan DNS dikelola oleh integrasi pemetaan domain inti Hostinger. Domain dari Namecheap, GoDaddy, dan NameSilo akan menampilkan status dan tanggal kedaluwarsa, tapi DNS harus dikelola langsung di panel kontrol registrar.

### Default DNS records (Record DNS Bawaan)

Anda bisa mengatur record DNS bawaan yang otomatis diterapkan saat sebuah domain didaftarkan. Pergi ke **Settings › Domain Seller › Default DNS Records**.

Nilai default record mendukung dua token:

| Token | Diganti dengan |
|---|---|
| `{DOMAIN}` | Nama domain yang terdaftar (contoh: `example.com`) |
| `{SITE_URL}` | URL situs WordPress untuk situs pelanggan |

**Contoh — arahkan apex domain dan www ke IP server Anda:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: melihat dan mengedit DNS

Admin jaringan bisa melihat dan mengedit record DNS untuk domain pelanggan mana pun dari halaman edit domain di **Network Admin › Ultimate Multisite › Domains**.
