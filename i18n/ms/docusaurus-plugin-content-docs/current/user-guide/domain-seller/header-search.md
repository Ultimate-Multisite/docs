---
title: Carian Domain Pengepala
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Carian Domain Header

Gunakan tetapan ini apabila anda mahu borang header kecil yang memulakan carian domain, kemudian membolehkan pelanggan memilih daripada domain yang tersedia dalam checkout Ultimate Multisite.

## Keperluan

- Rangkaian Ultimate Multisite aktif.
- Rangkaian Multisite Ultimate Domain Seller aktif.
- Sekurang-kurangnya satu produk pendaftaran domain aktif dengan:
  - `domain_provider` ditetapkan kepada penyedia yang dikonfigurasikan.
  - TLD yang disokong dikonfigurasikan, contohnya `com`, `net`, dan `org`.
- Borang checkout yang sah mengandungi medan **Pemilihan Domain**.

## Borang checkout

1. Cipta atau edit borang checkout yang digunakan oleh halaman pendaftaran.
2. Tambahkan medan checkout/account biasa yang diperlukan, termasuk **Username**. Borang checkout yang hanya mengandungi medan domain ditolak oleh pengesahan Ultimate Multisite.
3. Tambahkan medan **Pemilihan Domain**.
4. Tetapkan mod Domain Selection kepada **Register Only** apabila aliran harus memfokuskan pada domain berdaftar berbanding subdomain percuma atau domain sedia ada.
5. Tetapkan produk pendaftaran domain kepada medan tersebut.

Halaman pendaftaran harus memaparkan borang checkout, contohnya:

```text
[wu_checkout slug="domain-form"]
```

## Borang header

Tambahkan borang `GET` kecil dalam header site yang menghantar istilah carian yang dimasukkan ke halaman checkout sebagai `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Jangan pra-pilih domain dalam JavaScript header tersuai. Header hanya harus menghantar istilah carian. Skrip checkout Domain Seller membaca `?domain_name=example`, mengisi kotak carian checkout, dan menjalankan carian ketersediaan supaya pelanggan boleh memilih daripada domain yang dikembalikan.

## Tingkah laku dijangka

Mencari `example` dalam header harus membuka:

```text
/register/?domain_name=example
```

Checkout kemudian harus memaparkan hasil yang boleh dipilih seperti:

- `example.com`
- `example.net`
- `example.org` tidak tersedia
- TLD lain yang disokong penyedia

Selepas memilih hasil yang tersedia, ringkasan pesanan harus menyertakan produk pendaftaran domain dan nama domain yang dipilih.

## Pengesahan

1. Buka halaman utama.
2. Cari nama kosong, contohnya `example`.
3. Sahkan URL checkout menyertakan `?domain_name=example`.
4. Sahkan medan domain checkout mengandungi `example`.
5. Sahkan senarai pilihan domain muncul.
6. Klik **Select** untuk domain yang tersedia.
7. Sahkan ringkasan pesanan mengandungi `Domain Registration - example.com` atau domain yang dipilih.

## Penyelesaian masalah

- Jika tiada senarai muncul, semak tab rangkaian pelayar untuk `admin-ajax.php?action=wu_domain_search` dan sahkan ia mengembalikan `domains` atau `results` yang tidak kosong.
- Jika borang checkout gagal pengesahan semasa menyimpan, tambahkan medan account yang diperlukan seperti **Username**.
- Jika memilih domain tidak mengemas kini troli, sahkan `window.wu_checkout_form` wujud dan aset checkout Domain Seller dimuatkan pada halaman checkout.
