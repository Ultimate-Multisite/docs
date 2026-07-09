---
title: 'Pawulangan 5: Ngrancang Rencana Panjenengan'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Piwulang 5: Ngrancang Paket Sampeyan {#lesson-5-designing-your-plans}

Tingkatan paket sampeyan ora mung tingkat rega -- kuwi minangka gambaran carane pelanggan ceruk sampeyan sejatine makarya. Ing piwulang iki sampeyan bakal ngrancang tingkatan produk sing cocog karo kabutuhan nyata bisnis kebugaran ing tahap sing beda-beda.

## Panggonan Pungkasan Kita {#where-we-left-off}

FitSite wis nduweni telung template siap (Studio Essential, Gym Pro, Fitness Chain). Saiki kita nggawe paket sing nemtokake apa wae sing bisa diakses pelanggan lan pira sing kudu dibayar.

## Mikir Miturut Segmen Pelanggan {#thinking-in-customer-segments}

Kesalahan sing paling kerep ditindakake wong yaiku ngrancang paket adhedhasar fitur teknis (panyimpenan, bandwidth, jumlah kaca). Pelanggan ceruk sampeyan ora mikir nganggo istilah kuwi. Pemilik gym mikir babagan apa sing dibutuhake kanggo nglakokake bisnise.

Kanggo studio kebugaran, ana telung segmen alami:

| Segmen | Sapa Wong-wonge | Apa Sing Dibutuhake |
|---------|-------------|----------------|
| **Pelatih solo / studio cilik** | 1-3 staf, siji lokasi, lagi miwiti | Situs profesional, info kelas, formulir kontak |
| **Gym sing wis mapan** | 5-20 staf, siji lokasi, lagi tuwuh | Kabeh ing ndhuwur plus booking, blog, galeri, domain khusus |
| **Rantai kebugaran** | Akeh lokasi, merek wis mapan | Kabeh ing ndhuwur plus multi-situs, kaca lokasi, direktori staf |

Paket sampeyan kudu dipetakake menyang segmen-segmen iki, dudu menyang kumpulan fitur sing sembarangan.

## Nggawe Paket FitSite {#creating-the-fitsite-plans}

Navigasi menyang **Ultimate Multisite > Produk > Tambah Produk** kanggo saben paket.

### Paket 1: FitSite Starter -- $49/sasi {#plan-1-fitsite-starter----49month}

**Target**: Pelatih solo lan studio cilik

**Tab katrangan**:
- Jeneng: FitSite Starter
- Katrangan: "Kabeh sing dibutuhake pelatih pribadi utawa studio cilik supaya katon profesional ing online."

**Tab umum**:
- Jinis produk: Paket
- Peran pelanggan: Administrator

**Tab template situs**:
- Idini template situs: Diaktifake
- Template sing kasedhiya: Mung Studio Essential

**Watesan**:
- Situs: 1
- Ruang disk: 1 GB
- Domain khusus: Dipateni (nggunakake `studioname.fitsite.com`)

**Tab plugin**:
- Plugin formulir kontak: Paksa Aktifake
- Plugin SEO: Paksa Aktifake
- Plugin booking: Ora Kasedhiya (insentif upgrade)

**Tab tema**:
- Tema pilihan sampeyan: Paksa Aktifake
- Kabeh tema liyane: Didhelikake

### Paket 2: FitSite Growth -- $99/sasi {#plan-2-fitsite-growth----99month}

**Target**: Gym siji lokasi sing wis mapan

**Tab katrangan**:
- Jeneng: FitSite Growth
- Katrangan: "Kanggo gym sing wis mapan lan siap nggedhekake kehadiran online lan narik anggota anyar."

**Tab template situs**:
- Template sing kasedhiya: Studio Essential lan Gym Pro

**Watesan**:
- Situs: 1
- Ruang disk: 5 GB
- Domain khusus: Diaktifake

**Tab plugin**:
- Kabeh ing Starter, plus:
- Plugin booking: Paksa Aktifake
- Plugin galeri: Paksa Aktifake
- Fungsionalitas blog: Kasedhiya

**Tab Nganyarke & Mudhunake**:
- Grup paket: FitSite Plans
- Urutan produk: 2

### Paket 3: FitSite Pro -- $199/sasi {#plan-3-fitsite-pro----199month}

**Target**: Rantai kebugaran multi-lokasi

**Tab katrangan**:
- Jeneng: FitSite Pro
- Katrangan: "Platform lengkap kanggo merek kebugaran kanthi akeh lokasi."

**Tab template situs**:
- Template sing kasedhiya: Kabeh telung template

**Watesan**:
- Situs: 5 (siji saben lokasi)
- Ruang disk: 20 GB
- Domain khusus: Diaktifake

**Tab plugin**:
- Kabeh ing Growth, plus:
- Kabeh plugin premium: Paksa Aktifake

**Tab Nganyarke & Mudhunake**:
- Grup paket: FitSite Plans
- Urutan produk: 3

## Nyetel Grup Paket {#setting-up-the-plan-group}

Grup paket mesthekake pelanggan mung bisa upgrade utawa downgrade ing njero kulawarga paket FitSite. Ing tab **Nganyarke & Mudhunake** saben paket:

1. Setel **Grup Paket** dadi "FitSite Plans" kanggo kabeh telung paket
2. Setel **Urutan Produk** dadi 1 (Starter), 2 (Growth), 3 (Pro)

Iki nggawe jalur upgrade sing cetha: Starter → Growth → Pro.

## Nambahake Tambahan Pesenan {#adding-order-bumps}

Tambahan pesenan yaiku produk tambahan sing ditawakake nalika checkout. Kanggo FitSite, pikirna:

- **Paket Panyimpenan Ekstra** ($19/sasi) -- tambahan ruang disk 5 GB
- **Dhukungan Prioritas** ($29/sasi) -- wektu tanggapan luwih cepet
- **Situs Tambahan** ($39/sasi) -- kanggo pelanggan sing butuh situs luwih akeh tinimbang sing diidini pakete

Gawe iki minangka produk jinis **Paket** ing Ultimate Multisite lan gandhengake karo paket sing relevan.

## Napa Struktur Iki Bisa Mlaku {#why-this-structure-works}

- **Starter** ngilangake alangan mlebu -- rega murah, tawaran prasaja, nggawe pelatih online kanthi cepet
- **Growth** nambah fitur sing sejatine dijaluk gym -- booking, galeri, domain khusus
- **Pro** nglayani segmen bernilai dhuwur sing butuh dhukungan multi-lokasi
- **Tambahan pesenan** ngidini pelanggan ngatur miturut kabutuhan tanpa nggawe paket inti dadi ruwet
- **Jalur upgrade sing cetha** tegese pelanggan tuwuh bareng sampeyan tinimbang lunga

## Jaringan FitSite Nganti Saiki {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Apa Sing Wis Kita Bangun Ing Piwulang Iki {#what-we-built-this-lesson}

- **Telung tingkatan paket** sing dipetakake menyang segmen bisnis kebugaran nyata
- **Pambatesan fitur** nggunakake kontrol plugin lan template Ultimate Multisite
- **Grup paket** kanthi jalur upgrade sing cetha
- **Produk tambahan pesenan** kanggo penghasilan tambahan
- **Struktur rega** adhedhasar nilai pelanggan, dudu spesifikasi teknis

---

**Sabanjure:** [Piwulang 6: Pengalaman Ndaftar](lesson-6-checkout) -- kita mbangun alur checkout sing ngowahi pemilik studio kebugaran dadi pelanggan sing mbayar.
