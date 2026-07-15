---
title: 'Pelajaran 9: Penetapan Harga untuk Keuntungan'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Pelajaran 9: Penetapan Harga untuk Keuntungan

Di Pelajaran 5, kita sudah menetapkan harga awal untuk paket FitSite. Sekarang, kita akan menyempurnakan strategi harga dengan teknik-teknik yang dapat meningkatkan pendapatan, mendorong peningkatan paket (upgrade), dan mengurangi tingkat *churn* (pelanggan yang berhenti).

## Titik Awal Kita {#where-we-left-off}

FitSite sudah memiliki paket, template, *checkout*, *branding*, dan *onboarding*. Harga awal yang kita tetapkan adalah $49/$99/$199 per bulan. Sekarang, kita akan membuat harga tersebut bekerja lebih keras.

## Prinsip Penetapan Harga untuk Platform Niche {#pricing-principles-for-niche-platforms}

### Harga Berdasarkan Nilai, Bukan Biaya {#price-on-value-not-cost}

Biaya *hosting* Anda mungkin $5-$15 per situs pelanggan. Itu tidak berarti harga Anda harus $20. Anda tidak menjual *hosting*. Anda menjual:

- Situs web kebugaran profesional yang jika dibuat secara kustom biayanya $2.000-$5.000
- Pemeliharaan, pembaruan, dan keamanan berkelanjutan yang tidak perlu mereka pikirkan
- Fitur spesifik niche yang tidak ditawarkan oleh *builder* generik
- Kredibilitas platform yang dibangun khusus untuk industri mereka

Tetapkan harga berdasarkan nilai yang Anda berikan, bukan biaya untuk menyediakannya.

### Kaitkan dengan Alternatif {#anchor-to-alternatives}

Ketika pemilik studio kebugaran mengevaluasi FitSite, mereka membandingkannya dengan:

- **Mempekerjakan pengembang web**: $2.000-$5.000 di muka + $50-$100/bulan untuk pemeliharaan
- **Wix/Squarespace**: $16-$45/bulan tetapi tanpa fitur spesifik kebugaran, mereka membuatnya sendiri
- **Tidak melakukan apa-apa**: Kehilangan anggota yang tidak dapat menemukan mereka secara daring

Dengan harga $49-$199/bulan, FitSite lebih murah daripada menyewa pengembang, lebih mumpuni daripada *builder* generik, dan jauh lebih baik daripada tidak memiliki situs web sama sekali.

## Menerapkan Variasi Harga {#implementing-price-variations}

Harga tahunan mendorong komitmen dan mengurangi *churn*. Arahkan ke tab **Price Variations** pada setiap paket dan tambahkan opsi tahunan:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Tambahkan *field* **Period Selection** ke formulir *checkout* Anda sehingga pelanggan dapat beralih antara penagihan bulanan dan tahunan. Lihat [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Mengapa Harga Tahunan Berhasil {#why-annual-pricing-works}

- **Untuk Anda**: Uang tunai di muka, *churn* yang lebih rendah (pelanggan yang membayar tahunan cenderung tidak membatalkan di tengah periode)
- **Untuk Mereka**: Penghematan nyata, prediksi anggaran

## Biaya Pengaturan (*Setup Fees*) {#setup-fees}

Pertimbangkan biaya pengaturan satu kali untuk paket yang mencakup konfigurasi langsung:

- **Starter**: Tanpa biaya pengaturan (menghilangkan hambatan masuk)
- **Growth**: Biaya pengaturan $99 (mencakup konfigurasi domain kustom dan konsultasi awal)
- **Pro**: Biaya pengaturan $299 (mencakup pengaturan multi-lokasi dan panggilan *onboarding*)

Konfigurasikan biaya pengaturan di bagian harga setiap paket. Lihat [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) untuk detailnya.

## Masa Percobaan (*Trial Periods*) {#trial-periods}

Menawarkan masa percobaan dapat mengurangi hambatan pendaftaran, tetapi memperkenalkan risiko tidak dikonversi. Untuk FitSite:

- **Masa percobaan gratis 7 hari** hanya untuk paket Starter
- Tidak ada masa percobaan untuk Growth dan Pro (pelanggan ini lebih berkomitmen dan mengharapkan untuk membayar)

Konfigurasikan masa percobaan di bagian harga paket Starter dengan mengaktifkan *toggle* **Offer Trial** dan mengatur durasinya menjadi 7 hari.

### Membuat Masa Percobaan Berkonversi {#making-trials-convert}

Masa percobaan hanya berhasil jika pelanggan merasakan nilai selama periode tersebut. Urutan *onboarding* Anda (Pelajaran 8) sangat penting di sini — email sambutan harus dijadwalkan untuk mendorong keterlibatan dalam jendela 7 hari.

## Kode Diskon (*Discount Codes*) {#discount-codes}

Buat kode diskon strategis untuk tujuan tertentu:

- **FITLAUNCH** -- Diskon 30% untuk 3 bulan pertama (untuk promosi peluncuran)
- **ANNUAL20** -- Diskon 20% untuk paket tahunan (jika belum didiskon)
- **REFERRAL** -- 1 bulan gratis (untuk rujukan pelanggan)

Arahkan ke **Ultimate Multisite > Discount Codes** untuk membuatnya. Lihat [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) untuk panduan lengkapnya.

:::tip Jangan Mendiskon Secara Default
Diskon harus menjadi alat strategis, bukan perlengkapan permanen. Jika semua orang mendapatkan diskon, itu bukan diskon — itu adalah harga asli Anda. Gunakan diskon untuk kampanye, rujukan, dan promosi terbatas waktu tertentu.
:::

## Penanganan Pajak (*Tax Handling*) {#tax-handling}

Jika Anda beroperasi di yurisdiksi yang mewajibkan pengumpulan pajak:

1. Konfigurasikan tarif pajak di **Ultimate Multisite > Settings > Taxes**
2. Terapkan kategori pajak ke paket Anda
3. Pastikan faktur menampilkan pajak dengan benar

Lihat [Tax Handling](/user-guide/payment-gateways/tax-handling) untuk konfigurasi detail. Jika Anda melayani pelanggan secara internasional, pertimbangkan *addon* [VAT](/addons/vat) untuk kepatuhan Uni Eropa.

## Meninjau Harga Anda {#reviewing-your-pricing}

Setelah peluncuran, tinjau kembali harga setiap kuartal. Perhatikan:

- **Tingkat konversi per paket**: Jika Starter berkonversi dengan baik tetapi Growth tidak, kesenjangan di antara keduanya mungkin terlalu besar
- **Tingkat peningkatan (*Upgrade rate*)**: Jika sedikit pelanggan yang meningkatkan dari Starter ke Growth, paket Growth mungkin tidak menawarkan nilai tambahan yang cukup
- **Tingkat *churn* per paket**: Jika pelanggan tahunan memiliki *churn* yang lebih rendah, dorong harga tahunan lebih keras
- **Harga pesaing**: Berapa yang dikenakan alternatif? Apakah posisi Anda sudah tepat?

## Jaringan FitSite Sejauh Ini {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (dikonfigurasi + di-branding)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo atau $468/yr) + masa percobaan 7 hari
│   ├── FitSite Growth ($99/mo atau $948/yr) + biaya pengaturan $99
│   ├── FitSite Pro ($199/mo atau $1,908/yr) + biaya pengaturan $299
│   └── Order Bumps + Kode Diskon
├── Checkout Flow (dengan *toggle* pemilihan periode)
├── Branding (login, dashboard, email, faktur, situs pemasaran)
├── Customer Onboarding (Quick Start, email, sumber daya bantuan)
├── Strategi Harga
│   ├── Diskon tahunan (20% off)
│   ├── Biaya pengaturan strategis
│   ├── Masa percobaan 7 hari di Starter
│   ├── Kode diskon untuk kampanye dan rujukan
│   └── Konfigurasi pajak
└── Siap diluncurkan (pelajaran berikutnya)
```

## Apa yang Kita Bangun di Pelajaran Ini {#what-we-built-this-lesson}

- **Harga tahunan** dengan diskon 20% untuk mendorong komitmen
- **Biaya pengaturan** pada tingkatan yang lebih tinggi untuk menutupi upaya *onboarding*
- **Masa percobaan** pada paket tingkat pemula untuk mengurangi hambatan pendaftaran
- **Kode diskon strategis** untuk peluncuran, rujukan, dan kampanye
- **Konfigurasi pajak** untuk penagihan yang patuh
- **Kerangka tinjauan harga** untuk optimalisasi berkelanjutan

---

**Selanjutnya:** [Pelajaran 10: Hari Peluncuran](lesson-10-launch) — daftar periksa pra-peluncuran dan mulai tayang.
