---
title: 'Pangajaran 6: Pangalaman Signup'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Pangajaran 6: Pangalaman Pendaptaran

Alur pameseran nyaéta tempat minat robah jadi panghasilan. Prosés pendaptaran anu ngabingungkeun atawa umum teuing bakal kaleungitan palanggan. Alur anu husus pikeun nis anu nyarita ku basa maranéhna jeung karasa gampang bakal ngarobah maranéhna jadi palanggan.

## Tempat Urang Eureun

FitSite geus boga témplat jeung paket anu dikonfigurasi. Ayeuna urang ngawangun pangalaman pendaptaran jeung pameseran anu ngarobah nu boga studio kabugaran jadi palanggan anu mayar.

## Ngartos Alur Pendaptaran

Formulir pameseran Ultimate Multisite nyaéta formulir sababaraha léngkah anu bisa disaluyukeun pinuh. Pikeun FitSite, urang hoyong alur anu:

1. Karasa siga diwangun pikeun usaha kabugaran
2. Ngumpulkeun ngan ukur anu diperlukeun
3. Nganteurkeun palanggan ka situs anu jalan sagancang-gancangna

Tingali [Alur Pendaptaran](/user-guide/configuration/the-registration-flow) pikeun rujukan téknis lengkep.

## Ngarancang Pameseran FitSite

Buka **Ultimate Multisite > Formulir Pameseran** jeung jieun formulir anyar.

### Léngkah 1: Milih Paket

Hal kahiji anu kudu katingali ku nu boga studio kabugaran nyaéta paket, dipidangkeun ku istilah anu maranéhna ngarti.

- Tambahkeun widang **Tabél Harga**
- Konpigurasikeun sangkan nembongkeun tilu paket FitSite
- Pedaran paket anu anjeun tulis dina Pangajaran 5 mucunghul di dieu -- pastikeun éta nyarita kana kabutuhan usaha kabugaran, lain fitur téknis

:::tip Niche Language Matters
"1 GB storage" means nothing to a gym owner. "Everything you need for a professional studio website" means everything. Write plan descriptions in your customer's language.
:::

### Léngkah 2: Milih Témplat

Sanggeus milih paket, palanggan milih témplat awalna.

- Tambahkeun widang **Milih Témplat**
- Témplat anu sadia disaring dumasar kana paket anu dipilih (dikonfigurasi dina Pangajaran 5)
- Unggal témplat kudu boga gambar sawangan anu nembongkeun desain husus kabugaran

### Léngkah 3: Nyieun Account

Tetepkeun minimal. Kumpulkeun ngan ukur:

- Alamat email
- Kecap akses
- Ngaran studio/usaha (ieu jadi ngaran situsna)

Ulah ménta inpormasi anu henteu diperlukeun dina waktu pendaptaran. Unggal widang tambahan ngurangan konvérsi.

### Léngkah 4: Nyetél Situs

- **Judul situs**: Eusian saméméhna tina ngaran studio anu diasupkeun dina Léngkah 3
- **URL situs**: Hasilkeun otomatis tina ngaran studio (contona, `ironworks.fitsite.com`)

### Léngkah 5: Pamayaran

- Tambahkeun widang **Pamayaran**
- Konpigurasikeun gerbang pamayaran anjeun ([Stripe](/user-guide/payment-gateways/stripe) disarankeun pikeun tagihan langganan)
- Lamun anjeun nyieun tambahan pesenan dina Pangajaran 5, tambahkeun widang **Tambahan Pesenan** saméméh léngkah pamayaran

### Léngkah 6: Konfirmasi

- Saluyukeun pesen konfirmasi ku basa husus kabugaran
- Conto: "Situs wéb studio kabugaran anjeun keur dijieun. Anjeun bakal dialihkeun ka situs anyar anjeun dina sababaraha detik."

## Nambahkeun Tombol Pilihan Periode

Lamun anjeun nyetél variasi harga dina paket anjeun (bulanan vs. taunan), tambahkeun widang **Pilihan Periode** kana formulir pameseran sangkan palanggan bisa ngalih antara periode tagihan. Tingali [Formulir Pameseran](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) pikeun parentah.

## Ngonpigurasikeun Pamayaran

Lamun anjeun can nyetél gerbang pamayaran:

1. Buka **Ultimate Multisite > Setélan > Gerbang Pamayaran**
2. Turutan [pituduh nyetél Stripe](/user-guide/payment-gateways/stripe) atawa gerbang anu anjeun pikaresep
3. Uji alur pameseran lengkep ku pamayaran tés

Tingali [Narima Pamayaran](/user-guide/payment-gateways/getting-paid) pikeun rinci ngeunaan kumaha pamayaran ngalir ka Account anjeun.

## Nguji Alur

Saméméh neraskeun, réngsékeun pendaptaran tés lengkep:

1. Buka formulir pameseran dina jandéla panyungsi incognito/pribadi
2. Pilih paket
3. Pilih témplat
4. Jieun Account
5. Réngsékeun pamayaran (paké mode tés)
6. Pastikeun situs dijieun ku témplat anu bener

Pariksa yén:

- [ ] Pedaran paket jelas jeung husus pikeun nis
- [ ] Sawangan témplat nembongkeun desain anu merenah pikeun kabugaran
- [ ] URL situs dihasilkeun kalayan bener tina ngaran studio
- [ ] Prosés pamayaran hasil
- [ ] Palanggan nepi ka situs anu jalan jeung témplat anu dipilih
- [ ] Email konfirmasi maké basa husus kabugaran

## Jaringan FitSite Nepi ka Ayeuna

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Anu Urang Bangun dina Pangajaran Ieu

- **Formulir pameseran sababaraha léngkah** anu disaluyukeun pikeun nu boga studio kabugaran
- **Basa husus pikeun nis** sapanjang alur pendaptaran
- **Gesekan minimal** -- ngan widang penting, jalur gancang ka situs anu jalan
- **Integrasi pamayaran** jeung verifikasi tés
- **Alur tungtung-ka-tungtung anu geus diuji** ti milih paket nepi ka situs anu jalan

---

**Salajengna:** [Pangajaran 7: Ngajadikeun Ieu Milik Anjeun](lesson-7-branding) -- urang nyieun platform jadi white-label jeung netepkeun FitSite salaku brand.
