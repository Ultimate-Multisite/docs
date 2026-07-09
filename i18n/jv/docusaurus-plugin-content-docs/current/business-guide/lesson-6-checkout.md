---
title: 'Piwulang 6: Pengalaman Pendaftaran'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Piwulang 6: Pengalaman Pendaftaran {#lesson-6-the-signup-experience}

Alur checkout iku papan ing ngendi minat dadi penghasilan. Proses pendaftaran sing mbingungake utawa umum banget bisa ngilangake pelanggan. Alur khusus niche sing nganggo basane pelanggan lan krasa gampang bakal ngowahi dheweke dadi pelanggan.

## Ing Endi Kita Mandheg {#where-we-left-off}

FitSite wis nduweni template lan plan sing dikonfigurasi. Saiki kita mbangun pengalaman registrasi lan checkout sing ngowahi pemilik studio fitness dadi pelanggan sing mbayar.

## Ngerti Alur Registrasi {#understanding-the-registration-flow}

Form checkout Ultimate Multisite iku form multi-langkah sing bisa dikustomisasi kanthi lengkap. Kanggo FitSite, kita pengin alur sing:

1. Krasa kaya dibangun khusus kanggo bisnis fitness
2. Mung nglumpukake apa sing dibutuhake
3. Nggawa pelanggan menyang situs sing bisa digunakake kanthi cepet

Delengen [Alur Registrasi](/user-guide/configuration/the-registration-flow) kanggo referensi teknis lengkap.

## Ngrancang Checkout FitSite {#designing-the-fitsite-checkout}

Navigasi menyang **Ultimate Multisite > Checkout Forms** lan gawe form anyar.

### Langkah 1: Milih Plan {#step-1-plan-selection}

Bab pisanan sing dideleng pemilik studio fitness kudune yaiku plan, ditampilake nganggo istilah sing padha paham.

- Tambah field **Pricing Table**
- Konfigurasi supaya nuduhake telung plan FitSite kabeh
- Deskripsi plan sing koktulis ing Piwulang 5 katon ing kene -- pesthekake deskripsi kuwi nyambung karo kabutuhan bisnis fitness, dudu fitur teknis

:::tip Basa Niche Iku Penting
"1 GB storage" ora ana tegesé kanggo pemilik gym. "Kabeh sing kokbutuhake kanggo situs web studio profesional" kuwi tegesé akeh. Tulis deskripsi plan nganggo basa pelangganmu.
:::

### Langkah 2: Milih Template {#step-2-template-selection}

Sawise milih plan, pelanggan milih template wiwitané.

- Tambah field **Template Selection**
- Template sing kasedhiya disaring miturut plan sing dipilih (dikonfigurasi ing Piwulang 5)
- Saben template kudu nduweni gambar pratinjau sing nuduhake desain khusus fitness

### Langkah 3: Nggawe Account {#step-3-account-creation}

Gawe iki tetep minimal. Mung kumpulake:

- Alamat email
- Tembung sandhi
- Jeneng studio/bisnis (iki dadi jeneng situsé)

Aja njaluk informasi sing ora kokbutuhake nalika pendaftaran. Saben field tambahan nyuda konversi.

### Langkah 4: Nyetel Situs {#step-4-site-setup}

- **Judhul situs**: Isi otomatis saka jeneng studio sing dilebokake ing Langkah 3
- **URL situs**: Gawe otomatis saka jeneng studio (contone, `ironworks.fitsite.com`)

### Langkah 5: Pembayaran {#step-5-payment}

- Tambah field **Payment**
- Konfigurasi gateway pembayaranmu ([Stripe](/user-guide/payment-gateways/stripe) dianjurake kanggo tagihan langganan)
- Yen kowe nggawe order bump ing Piwulang 5, tambah field **Order Bump** sadurunge langkah pembayaran

### Langkah 6: Konfirmasi {#step-6-confirmation}

- Kustomisasi pesen konfirmasi nganggo basa khusus fitness
- Conto: "Situs web studio fitness sampeyan lagi digawe. Sampeyan bakal dialihake menyang situs anyar sampeyan ing sawetara detik."

## Nambah Toggle Pilihan Periode {#adding-a-period-selection-toggle}

Yen kowe nyetel variasi rega ing plan-mu (saben wulan vs. tahunan), tambah field **Period Selection** menyang form checkout supaya pelanggan bisa ngalih antarane periode tagihan. Delengen [Form Checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) kanggo pandhuan.

## Ngonfigurasi Pembayaran {#configuring-payment}

Yen kowe durung nyetel gateway pembayaran:

1. Navigasi menyang **Ultimate Multisite > Settings > Payment Gateways**
2. Tindakake [pandhuan nyetel Stripe](/user-guide/payment-gateways/stripe) utawa gateway pilihanmu
3. Tes alur checkout lengkap nganggo pembayaran tes

Delengen [Nampa Pembayaran](/user-guide/payment-gateways/getting-paid) kanggo rincian babagan carane pembayaran mili menyang account-mu.

## Nguji Alur {#testing-the-flow}

Sadurunge nerusake, rampungake pendaftaran tes lengkap:

1. Bukak form checkout ing jendhela browser incognito/private
2. Pilih plan
3. Pilih template
4. Gawe account
5. Rampungake pembayaran (gunakake mode tes)
6. Verifikasi manawa situs digawe nganggo template sing bener

Priksa manawa:

- [ ] Deskripsi plan cetha lan khusus niche
- [ ] Pratinjau template nuduhake desain sing cocog kanggo fitness
- [ ] URL situs digawe kanthi bener saka jeneng studio
- [ ] Proses pembayaran kasil
- [ ] Pelanggan tekan situs sing bisa digunakake nganggo template sing dipilih
- [ ] Email konfirmasi nganggo basa khusus fitness

## Jaringan FitSite Nganti Saiki {#the-fitsite-network-so-far}

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

## Sing Wis Kita Bangun Ing Piwulang Iki {#what-we-built-this-lesson}

- **Form checkout multi-langkah** sing disesuaikake kanggo pemilik studio fitness
- **Basa khusus niche** ing saindhenging alur pendaftaran
- **Gesekan minimal** -- mung field penting, jalur cepet menyang situs sing bisa digunakake
- **Integrasi pembayaran** nganggo verifikasi tes
- **Alur end-to-end sing wis dites** saka milih plan nganti situs bisa digunakake

---

**Sabanjure:** [Piwulang 7: Nggawe Dadi Duwekmu](lesson-7-branding) -- kita nggawe platform dadi white-label lan netepake FitSite minangka brand.
