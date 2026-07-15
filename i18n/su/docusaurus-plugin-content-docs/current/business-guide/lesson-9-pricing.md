---
title: 'Palajaran 9: Nangtukeun Harga pikeun Kauntungan'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Palajaran 9: Harga pikeun Kauntungan

Dina Palajaran 5 urang netepkeun harga awal pikeun rencana FitSite. Ayeuna urang nyaluyukeun deui strategi harga ku téknik anu ningkatkeun panghasilan, ngadorong pamutahiran, jeung ngurangan churn.

## Dimana Urang Eureun {#where-we-left-off}

FitSite geus boga rencana, témplat, prosés pamayaran, branding, jeung onboarding. Harga awalna $49/$99/$199 per bulan. Ayeuna urang nyieun éta harga digawé leuwih kuat.

## Prinsip Harga pikeun Platform Niche {#pricing-principles-for-niche-platforms}

### Harga Dumasar kana Nilai, Henteu kana Biaya {#price-on-value-not-cost}

Biaya hosting anjeun bisa waé $5-$15 per situs palanggan. Éta henteu hartina harga anjeun kudu $20. Anjeun lain ngajual hosting. Anjeun ngajual:

- Situs wéb kabugaran profésional anu lamun dijieun custom bisa ngahontal $2,000-$5,000
- Pangropéa, apdet, jeung kaamanan anu lumangsung terus-terusan anu teu kudu dipikiran ku maranéhna
- Fitur husus niche anu henteu ditawarkeun ku builder umum
- Kredibilitas tina platform anu diwangun pikeun industri maranéhna

Tetepkeun harga dumasar kana nilai anu anjeun pasihkeun, lain kana biaya pikeun nyadiakeunana.

### Jieun Patokan kana Alternatif {#anchor-to-alternatives}

Nalika boga studio kabugaran nalungtik FitSite, maranéhna ngabandingkeunana jeung:

- **Nyewa pamekar wéb**: $2,000-$5,000 di awal + $50-$100/bulan pikeun pangropéa
- **Wix/Squarespace**: $16-$45/bulan tapi teu boga fitur husus kabugaran, sarta maranéhna kudu ngawangun sorangan
- **Teu ngalakukeun nanaon**: Leungit anggota anu teu bisa manggihan maranéhna sacara online

Dina $49-$199/bulan, FitSite leuwih murah tibatan pamekar, leuwih mumpuni tibatan builder umum, jeung jauh leuwih hadé tibatan teu boga situs wéb.

## Nerapkeun Variasi Harga {#implementing-price-variations}

Harga taunan ngadorong komitmen jeung ngurangan churn. Buka tab **Price Variations** dina unggal rencana sarta tambahkeun pilihan taunan:

| Rencana | Bulanan | Taunan (per bulan) | Total Taunan | Hemat |
|------|---------|-------------------|--------------|---------|
| Starter | $49/bln | $39/bln | $468/taun | diskon 20% |
| Growth | $99/bln | $79/bln | $948/taun | diskon 20% |
| Pro | $199/bln | $159/bln | $1,908/taun | diskon 20% |

Tambahkeun widang **Period Selection** kana formulir pamayaran anjeun supaya palanggan bisa ngalih antara tagihan bulanan jeung taunan. Tingali [Formulir Pamayaran](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Kunaon Harga Taunan Éféktif {#why-annual-pricing-works}

- **Pikeun anjeun**: Kas awal, churn leuwih handap (palanggan anu mayar taunan leuwih jarang ngabatalkeun di tengah mangsa)
- **Pikeun maranéhna**: Hemat nyata, anggaran leuwih bisa diprediksi

## Biaya Setup {#setup-fees}

Pertimbangkeun biaya setup sakali pikeun rencana anu ngawengku konfigurasi langsung:

- **Starter**: Euweuh biaya setup (ngaleungitkeun halangan pikeun ngamimitian)
- **Growth**: Biaya setup $99 (ngawengku konfigurasi domain custom jeung konsultasi awal)
- **Pro**: Biaya setup $299 (ngawengku setup sababaraha lokasi jeung telepon onboarding)

Konfigurasikeun biaya setup dina bagian harga unggal rencana. Tingali [Nyieun Produk Langganan Kahiji Anjeun](/user-guide/configuration/creating-your-first-subscription-product) pikeun rinci.

## Mangsa Uji Coba {#trial-periods}

Nawarkeun uji coba ngurangan halangan pikeun daptar tapi nambahan résiko teu jadi konvérsi. Pikeun FitSite:

- **Uji coba gratis 7 poé** ngan dina rencana Starter
- Teu aya uji coba dina Growth jeung Pro (palanggan ieu leuwih komitmen jeung nyangka kudu mayar)

Konfigurasikeun uji coba dina bagian harga rencana Starter ku ngaktipkeun toggle **Offer Trial** jeung netepkeun lilana jadi 7 poé.

### Nyieun Uji Coba Jadi Konvérsi {#making-trials-convert}

Uji coba ngan jalan lamun palanggan ngarasa meunang nilai salila mangsa uji coba. Runtuyan onboarding anjeun (Palajaran 8) penting pisan di dieu -- surelek wilujeng sumping kudu dijadwalkeun pikeun ngadorong kalibet dina jandéla 7 poé.

## Kode Diskon {#discount-codes}

Jieun kode diskon stratégis pikeun tujuan husus:

- **FITLAUNCH** -- diskon 30% pikeun 3 bulan kahiji (pikeun promosi peluncuran)
- **ANNUAL20** -- diskon 20% pikeun rencana taunan (lamun tacan didiskon)
- **REFERRAL** -- gratis 1 bulan (pikeun rujukan palanggan)

Buka **Ultimate Multisite > Discount Codes** pikeun nyieun ieu. Tingali [Nyieun Kode Diskon](/user-guide/configuration/creating-discount-codes) pikeun pituduh lengkep.

:::tip Ulah Méré Diskon sacara Bawaan
Diskon kudu jadi alat stratégis, lain unsur permanén. Lamun kabéh jalma meunang diskon, éta lain diskon -- éta harga sabenerna anjeun. Paké pikeun kampanye husus, rujukan, jeung promosi anu diwatesan ku waktu.
:::

## Penanganan Pajeg {#tax-handling}

Lamun anjeun beroperasi dina yurisdiksi anu merlukeun ngumpulkeun pajeg:

1. Konfigurasikeun tarif pajeg dina **Ultimate Multisite > Settings > Taxes**
2. Larapkeun kategori pajeg kana rencana anjeun
3. Pastikeun invoice mintonkeun pajeg kalayan bener

Tingali [Penanganan Pajeg](/user-guide/payment-gateways/tax-handling) pikeun konfigurasi rinci. Lamun anjeun ngalayanan palanggan sacara internasional, pertimbangkeun [addon PPN](/addons/vat) pikeun patuh kana aturan EU.

## Marios Harga Anjeun {#reviewing-your-pricing}

Sanggeus peluncuran, pariksa deui harga unggal kuartal. Tingali kana:

- **Laju konvérsi dumasar rencana**: Lamun Starter konvérsina alus tapi Growth henteu, jarak antara duanana bisa jadi kaleuleuwihi
- **Laju pamutahiran**: Lamun saeutik palanggan ningkatkeun ti Starter ka Growth, rencana Growth bisa jadi teu nawarkeun nilai tambahan anu cekap
- **Churn dumasar rencana**: Lamun palanggan taunan churn-na leuwih saeutik, dorong harga taunan leuwih kuat
- **Harga pesaing**: Sabaraha anu ditagihkeun ku alternatif? Naha posisi anjeun geus luyu?

## Jaringan FitSite Nepi ka Ayeuna {#the-fitsite-network-so-far}

```
Jaringan FitSite
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (dikonfigurasi + dibranding)
├── Domain Platform (fitsite.com + wildcard SSL)
├── Témplat Situs (Studio Essential, Gym Pro, Fitness Chain)
├── Produk
│   ├── FitSite Starter ($49/bln atawa $468/thn) + uji coba 7 poé
│   ├── FitSite Growth ($99/bln atawa $948/thn) + biaya setup $99
│   ├── FitSite Pro ($199/bln atawa $1,908/thn) + biaya setup $299
│   └── Order Bumps + Kode Diskon
├── Alur Pamayaran (kalayan toggle pilihan mangsa)
├── Branding (login, Dashboard, surelek, invoice, situs pamasaran)
├── Onboarding Palanggan (Quick Start, surelek, sumber daya pitulung)
├── Strategi Harga
│   ├── Diskon taunan (diskon 20%)
│   ├── Biaya setup stratégis
│   ├── Uji coba 7 poé dina Starter
│   ├── Kode diskon pikeun kampanye jeung rujukan
│   └── Konfigurasi pajeg
└── Siap pikeun peluncuran (palajaran salajengna)
```

## Naon Anu Urang Wangun Dina Pangajaran Ieu {#what-we-built-this-lesson}

- **Harga taunan** kalayan diskon 20% pikeun ngadorong komitmen
- **Waragad setup** dina tingkatan leuwih luhur pikeun nutupan usaha onboarding
- **Mangsa trial** dina plan tingkat awal pikeun ngurangan halangan nalika signup
- **Kode diskon strategis** pikeun peluncuran, rujukan, jeung kampanye
- **Konfigurasi pajeg** pikeun tagihan anu patuh
- **Kerangka ulasan harga** pikeun optimasi anu lumangsung terus

---

**Salajengna:** [Pangajaran 10: Poé Peluncuran](lesson-10-launch) -- daptar pariksa saméméh peluncuran jeung mimiti live.
