---
title: Pencarian Domain Header
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Pencarian Domain Header

Gunakan pengaturan ini saat Anda menginginkan formulir header kecil yang memulai pencarian domain, lalu memungkinkan pelanggan memilih dari domain yang tersedia di dalam checkout Ultimate Multisite.

## Persyaratan {#requirements}

- Ultimate Multisite aktif-jaringan.
- Multisite Ultimate Domain Seller aktif-jaringan.
- Setidaknya satu produk pendaftaran domain aktif dengan:
  - `domain_provider` diatur ke penyedia yang dikonfigurasi.
  - TLD yang didukung dikonfigurasi, misalnya `com`, `net`, dan `org`.
- Formulir checkout valid yang berisi field **Pemilihan Domain**.

## Formulir checkout {#checkout-form}

1. Buat atau edit formulir checkout yang digunakan oleh halaman pendaftaran.
2. Tambahkan field checkout/Account wajib yang normal, termasuk **Username**. Formulir checkout yang hanya berisi field domain ditolak oleh validasi Ultimate Multisite.
3. Tambahkan field **Pemilihan Domain**.
4. Atur mode Pemilihan Domain ke **Hanya Daftar** saat alur harus berfokus pada domain terdaftar, bukan subdomain gratis atau domain yang sudah ada.
5. Tetapkan produk pendaftaran domain ke field tersebut.

Halaman pendaftaran harus merender formulir checkout, misalnya:

```text
[wu_checkout slug="domain-form"]
```

## Formulir header {#header-form}

Tambahkan formulir `GET` kecil di header situs yang mengirim istilah pencarian yang dimasukkan ke halaman checkout sebagai `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Jangan memilih domain terlebih dahulu di JavaScript header kustom. Header hanya boleh meneruskan istilah pencarian. Skrip checkout Domain Seller membaca `?domain_name=example`, mengisi kotak pencarian checkout, dan menjalankan pencarian ketersediaan agar pelanggan dapat memilih dari domain yang dikembalikan.

## Perilaku yang diharapkan {#expected-behaviour}

Mencari `example` di header harus membuka:

```text
/register/?domain_name=example
```

Checkout kemudian harus menampilkan hasil yang dapat dipilih seperti:

- `example.com`
- `example.net`
- `example.org` tidak tersedia
- TLD lain yang didukung penyedia

Setelah memilih hasil yang tersedia, ringkasan pesanan harus mencakup produk pendaftaran domain dan nama domain yang dipilih.

## Verifikasi {#verification}

1. Buka halaman beranda.
2. Cari nama polos, misalnya `example`.
3. Konfirmasi URL checkout menyertakan `?domain_name=example`.
4. Konfirmasi field domain checkout berisi `example`.
5. Konfirmasi daftar pilihan domain muncul.
6. Klik **Pilih** untuk domain yang tersedia.
7. Konfirmasi ringkasan pesanan berisi `Domain Registration - example.com` atau domain yang dipilih.

## Pemecahan Masalah {#troubleshooting}

- Jika tidak ada daftar yang muncul, periksa tab jaringan browser untuk `admin-ajax.php?action=wu_domain_search` dan konfirmasi itu mengembalikan `domains` atau `results` yang tidak kosong.
- Jika formulir checkout gagal validasi saat menyimpan, tambahkan field Account wajib seperti **Username**.
- Jika memilih domain tidak memperbarui keranjang, konfirmasi `window.wu_checkout_form` ada dan bahwa aset checkout Domain Seller dimuat di halaman checkout.
