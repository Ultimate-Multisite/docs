---
title: Panelusuran Domain Sesirah
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Panelusuran Domain ing Header

Gunakake tata pasang iki nalika sampeyan pengin formulir cilik ing header sing miwiti panelusuran domain, banjur ngidini pelanggan milih saka domain sing kasedhiya ing njero pambayaran Ultimate Multisite.

## Syarat

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Paling ora ana siji produk pendhaftaran domain aktif kanthi:
  - `domain_provider` disetel menyang panyedhiya sing wis dikonfigurasi.
  - TLD sing didhukung wis dikonfigurasi, contone `com`, `net`, lan `org`.
- Formulir pambayaran sing sah ngemot kolom **Pilihan Domain**.

## Formulir pambayaran

1. Gawe utawa owahi formulir pambayaran sing digunakake dening kaca pendhaftaran.
2. Tambah kolom pambayaran/Account wajib sing normal, kalebu **Jeneng Panganggo**. Formulir pambayaran sing mung ngemot kolom domain bakal ditolak dening validasi Ultimate Multisite.
3. Tambah kolom **Pilihan Domain**.
4. Setel mode Pilihan Domain dadi **Mung Ndhaptar** nalika alur kudu fokus marang domain sing didhaptar tinimbang subdomain gratis utawa domain sing wis ana.
5. Pasang produk pendhaftaran domain menyang kolom kasebut.

Kaca pendhaftaran kudu nampilake formulir pambayaran, contone:

```text
[wu_checkout slug="domain-form"]
```

## Formulir header

Tambah formulir `GET` cilik ing header situs sing ngirim tembung panelusuran sing dilebokake menyang kaca pambayaran minangka `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Aja milih domain luwih dhisik ing JavaScript header kustom. Header mung kudu nerusake tembung panelusuran. Skrip pambayaran Domain Seller maca `?domain_name=example`, ngisi kothak panelusuran pambayaran, lan mbukak panelusuran kasedhiyan supaya pelanggan bisa milih saka domain sing dibalekake.

## Tumindak sing diarepake

Nggoleki `example` ing header kudu mbukak:

```text
/register/?domain_name=example
```

Pambayaran banjur kudu nampilake asil sing bisa dipilih kayata:

- `example.com`
- `example.net`
- `example.org` ora kasedhiya
- TLD liyane sing didhukung panyedhiya

Sawise milih asil sing kasedhiya, ringkesan pesenan kudu nyakup produk pendhaftaran domain lan jeneng domain sing dipilih.

## Verifikasi

1. Bukak kaca ngarep.
2. Goleki jeneng polos, contone `example`.
3. Pesthekake URL pambayaran ngemot `?domain_name=example`.
4. Pesthekake kolom domain pambayaran ngemot `example`.
5. Pesthekake dhaptar pilihan domain katon.
6. Klik **Pilih** kanggo domain sing kasedhiya.
7. Pesthekake ringkesan pesenan ngemot `Domain Registration - example.com` utawa domain sing dipilih.

## Ngatasi masalah

- Yen ora ana dhaptar sing katon, priksa tab jaringan browser kanggo `admin-ajax.php?action=wu_domain_search` lan pesthekake iku mbalekake `domains` utawa `results` sing ora kosong.
- Yen formulir pambayaran gagal validasi nalika disimpen, tambah kolom Account sing wajib kayata **Jeneng Panganggo**.
- Yen milih domain ora nganyari kranjang, pesthekake `window.wu_checkout_form` ana lan aset pambayaran Domain Seller dimuat ing kaca pambayaran.
