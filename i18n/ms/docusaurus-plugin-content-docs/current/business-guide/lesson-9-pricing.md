---
title: 'Pelajaran 9: Penetapan Harga untuk Keuntungan'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Pelajaran 9: Penetapan Harga untuk Keuntungan

Dalam Pelajaran 5, kita telah menetapkan harga awal untuk pelan FitSite. Kini, kita akan menyempurnakan strategi penetapan harga dengan teknik yang dapat meningkatkan pendapatan, menggalakkan peningkatan pakej (upgrade), dan mengurangkan kadar pelanggan berhenti (churn).

## Di Mana Kita Berhenti {#where-we-left-off}

FitSite kini mempunyai pelan, templat, checkout, branding, dan onboarding yang lengkap. Penetapan harga awal adalah $49/$99/$199 sebulan. Kini, kita akan membuat penetapan harga itu berfungsi dengan lebih baik.

## Prinsip Penetapan Harga untuk Platform Niche {#pricing-principles-for-niche-platforms}

### Harga Berdasarkan Nilai, Bukan Kos {#price-on-value-not-cost}

Kos hosting anda mungkin antara $5-$15 bagi setiap tapak pelanggan. Itu tidak bermakna harga anda harus $20. Anda tidak menjual hosting. Anda menjual:

- Sebuah laman web kecergasan profesional yang kos pembinaannya secara custom boleh mencecah $2,000-$5,000
- Penyelenggaraan, kemas kini, dan keselamatan berterusan yang tidak perlu difikirkan oleh mereka
- Ciri-ciri khusus niche yang tidak ditawarkan oleh pembina (builder) generik
- Kredibiliti platform yang dibina khas untuk industri mereka

Tetapkan harga berdasarkan nilai yang anda berikan, bukan kos untuk menyediakannya.

### Kaitkan dengan Alternatif {#anchor-to-alternatives}

Apabila pemilik studio kecergasan menilai FitSite, mereka akan membandingkannya dengan:

- **Mengupah web developer**: $2,000-$5,000 pendahuluan + $50-$100/bulan penyelenggaraan
- **Wix/Squarespace**: $16-$45/bulan tetapi tiada ciri khusus kecergasan, mereka membina sendiri
- **Tidak melakukan apa-apa**: Kehilangan ahli yang tidak dapat mencari mereka secara dalam talian

Pada harga $49-$199/bulan, FitSite lebih murah daripada web developer, lebih berupaya daripada pembina generik, dan jauh lebih baik daripada tidak mempunyai laman web langsung.

## Melaksanakan Variasi Harga {#implementing-price-variations}

Penetapan harga tahunan menggalakkan komitmen dan mengurangkan kadar pelanggan berhenti (churn). Navigasi ke tab **Price Variations** bagi setiap pelan dan tambahkan pilihan tahunan:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Tambahkan medan **Period Selection** pada borang checkout anda supaya pelanggan boleh menukar antara bil bulanan dan tahunan. Lihat [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Mengapa Penetapan Harga Tahunan Berkesan {#why-annual-pricing-works}

- **Untuk anda**: Tunai pendahuluan, kadar churn yang lebih rendah (pelanggan yang membayar tahunan kurang berkemungkinan membatalkan di tengah tempoh)
- **Untuk mereka**: Penjimatan sebenar, jangkaan bajet yang boleh diramal

## Yuran Persediaan (Setup Fees) {#setup-fees}

Pertimbangkan yuran persediaan sekali bayar untuk pelan yang merangkumi konfigurasi secara manual:

- **Starter**: Tiada yuran persediaan (menghilangkan halangan kemasukan)
- **Growth**: Yuran persediaan $99 (meliputi konfigurasi domain custom dan konsultasi awal)
- **Pro**: Yuran persediaan $299 (meliputi persediaan pelbagai lokasi dan panggilan onboarding)

Konfigurasikan yuran persediaan pada bahagian harga setiap pelan. Lihat [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) untuk butiran lanjut.

## Tempoh Percubaan (Trial Periods) {#trial-periods}

Menawarkan tempoh percubaan mengurangkan geseran pendaftaran tetapi memperkenalkan risiko tidak bertukar kepada pelanggan berbayar. Untuk FitSite:

- **Percubaan percuma 7 hari** hanya pada pelan Starter
- Tiada percubaan pada Growth dan Pro (pelanggan ini lebih komited dan menjangkakan untuk membayar)

Konfigurasikan percubaan pada bahagian harga pelan Starter dengan mengaktifkan toggle **Offer Trial** dan menetapkan tempoh kepada 7 hari.

### Membuat Percubaan Berjaya {#making-trials-convert}

Percubaan hanya akan berfungsi jika pelanggan mengalami nilai sepanjang tempoh percubaan. Urutan onboarding anda (Pelajaran 8) sangat penting di sini — e-mel selamat datang harus dijadualkan untuk mendorong penglibatan dalam tempoh 7 hari.

## Kod Diskaun (Discount Codes) {#discount-codes}

Cipta kod diskaun strategik untuk tujuan tertentu:

- **FITLAUNCH** -- Diskaun 30% untuk 3 bulan pertama (untuk promosi pelancaran)
- **ANNUAL20** -- Diskaun 20% untuk pelan tahunan (jika belum didiskaun)
- **REFERRAL** -- 1 bulan percuma (untuk rujukan pelanggan)

Navigasi ke **Ultimate Multisite > Discount Codes** untuk mencipta ini. Lihat [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) untuk panduan lengkap.

:::tip Jangan Diskaun Secara Lalai
Diskaun harus menjadi alat strategik, bukan kemudahan kekal. Jika semua orang mendapat diskaun, itu bukan diskaun — itu harga sebenar anda. Gunakannya untuk kempen, rujukan, dan promosi terhad masa tertentu.
:::

## Pengendalian Cukai (Tax Handling) {#tax-handling}

Jika anda beroperasi di bidang kuasa yang memerlukan kutipan cukai:

1. Konfigurasikan kadar cukai dalam **Ultimate Multisite > Settings > Taxes**
2. Terapkan kategori cukai pada pelan anda
3. Pastikan invois memaparkan cukai dengan betul

Lihat [Tax Handling](/user-guide/payment-gateways/tax-handling) untuk konfigurasi terperinci. Jika anda melayani pelanggan antarabangsa, pertimbangkan [VAT addon](/addons/vat) untuk pematuhan EU.

## Menyemak Penetapan Harga Anda {#reviewing-your-pricing}

Selepas pelancaran, semak semula penetapan harga setiap suku tahun. Perhatikan:

- **Kadar penukaran mengikut pelan**: Jika Starter menukar dengan baik tetapi Growth tidak, jurang antara kedua-duanya mungkin terlalu besar
- **Kadar peningkatan (Upgrade rate)**: Jika sedikit pelanggan yang menaik taraf dari Starter ke Growth, pelan Growth mungkin tidak menawarkan nilai tambahan yang mencukupi
- **Churn mengikut pelan**: Jika pelanggan tahunan kurang churn, galakkan penetapan harga tahunan dengan lebih kuat
- **Harga pesaing**: Berapa yang dikenakan oleh alternatif? Adakah anda berada pada kedudukan yang betul?

## Rangkaian FitSite Setakat Ini {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo atau $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo atau $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo atau $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Apa Yang Kita Bina Dalam Pelajaran Ini {#what-we-built-this-lesson}

- **Penetapan harga tahunan** dengan diskaun 20% untuk menggalakkan komitmen
- **Yuran persediaan** pada peringkat yang lebih tinggi untuk menampung usaha onboarding
- **Tempoh percubaan** pada pelan peringkat kemasukan untuk mengurangkan geseran pendaftaran
- **Kod diskaun strategik** untuk pelancaran, rujukan, dan kempen
- **Konfigurasi cukai** untuk bil yang patuh
- **Kerangka semakan harga** untuk pengoptimuman berterusan

---

**Seterusnya:** [Pelajaran 10: Hari Pelancaran](lesson-10-launch) -- senarai semak pra-pelancaran dan mula beroperasi.
