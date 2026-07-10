---
title: Lulugu Pilarian Domain
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Pilarian Domain Header {#header-domain-search}

Paké setélan ieu nalika anjeun hoyong formulir header leutik anu ngamimitian pilarian domain, tuluy ngamungkinkeun palanggan milih tina domain anu sadia di jero checkout Ultimate Multisite.

## Sarat {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Sahenteuna hiji produk pendaptaran domain aktip kalayan:
  - `domain_provider` disetél ka panyadia anu geus dikonfigurasi.
  - TLD anu dirojong geus dikonfigurasi, contona `com`, `net`, jeung `org`.
- Formulir checkout anu sah anu ngandung widang **Domain Selection**.

## Formulir checkout {#checkout-form}

1. Jieun atawa édit formulir checkout anu dipaké ku kaca pendaptaran.
2. Tambahkeun widang checkout/account wajib biasa, kaasup **Username**. Formulir checkout anu ngan ngandung widang domain bakal ditolak ku validasi Ultimate Multisite.
3. Tambahkeun widang **Domain Selection**.
4. Setél modeu Domain Selection ka **Register Only** nalika alur kudu museur kana domain anu didaptarkeun tibatan subdomain gratis atawa domain anu geus aya.
5. Pasangkeun produk pendaptaran domain ka widang éta.

Kaca pendaptaran kudu nembongkeun formulir checkout, contona:

```text
[wu_checkout slug="domain-form"]
```

## Formulir header {#header-form}

Tambahkeun formulir `GET` leutik dina header situs anu ngirimkeun istilah pilarian anu diasupkeun ka kaca checkout salaku `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ulah milih domain ti heula dina JavaScript header kustom. Header ngan kudu ngaliwatkeun istilah pilarian. Skrip checkout Domain Seller maca `?domain_name=example`, ngeusian kotak pilarian checkout, jeung ngajalankeun pilarian kasadiaan supaya palanggan bisa milih tina domain anu dibalikeun.

## Paripolah anu dipiharep {#expected-behaviour}

Milarian `example` dina header kudu muka:

```text
/register/?domain_name=example
```

Checkout tuluy kudu nembongkeun hasil anu bisa dipilih sapertos:

- `example.com`
- `example.net`
- `example.org` teu sadia
- TLD séjén anu dirojong ku panyadia

Sanggeus milih hasil anu sadia, ringkesan pesenan kudu ngawengku produk pendaptaran domain jeung ngaran domain anu dipilih.

## Verifikasi {#verification}

1. Buka kaca utama.
2. Pilarian ngaran polos, contona `example`.
3. Pastikeun URL checkout ngawengku `?domain_name=example`.
4. Pastikeun widang domain checkout ngandung `example`.
5. Pastikeun daptar pilihan domain mucunghul.
6. Klik **Select** pikeun domain anu sadia.
7. Pastikeun ringkesan pesenan ngandung `Domain Registration - example.com` atawa domain anu dipilih.

## Ngaréngsékeun masalah {#troubleshooting}

- Lamun euweuh daptar anu mucunghul, pariksa tab jaringan browser pikeun `admin-ajax.php?action=wu_domain_search` jeung pastikeun éta mulangkeun `domains` atawa `results` anu henteu kosong.
- Lamun formulir checkout gagal validasi nalika disimpen, tambahkeun widang account anu wajib sapertos **Username**.
- Lamun milih domain henteu ngamutahirkeun karanjang, pastikeun `window.wu_checkout_form` aya jeung aset checkout Domain Seller dimuat dina kaca checkout.
