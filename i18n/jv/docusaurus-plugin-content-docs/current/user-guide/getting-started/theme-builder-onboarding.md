---
title: Alur Orientasi Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Alur Onboarding Theme Builder

Superdav AI Agent v1.12.0 nggawa **alur onboarding Theme Builder** sing dipandu supaya sampeyan bisa nggawe tema blok kustom pas setup awal. Iki ngumbah mode Site Builder lawas karo cara sing luwih fleksibel lan dibantu agen.

## Apa iku Alur Onboarding Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Alur onboarding Theme Builder kuwi kaya wizard setup interaktif sing:

- Ngandhani sampeyan babagan keputusan desain (warna, tipografi, tata letak)
- Nangkep pilihan identitas visual situs sampeyan
- Nggawe tema blok kustom sing disesuaikan karo kebutuhan sampeyan
- Otomatis ngaktifake tema pas wis rampung

Alur iki didukung dening **Setup Assistant agent**, sing bakal nanya pitakon kanggo njelasake lan mbangun tema sampeyan langkah-langkah.

## Mulai Onboarding Theme Builder {#starting-the-theme-builder-onboarding}

### Setup Pertama Kali Pakai {#first-run-setup}

Pas sampeyan pertama kali njalankan Superdav AI Agent ing instalasi WordPress anyar, sampeyan bakal weruh:

```
Selamat datang di Superdav AI Agent!

Apa yang ingin Anda lakukan?
1. Bangun tema kustom (Theme Builder)
2. Gunakan tema yang sudah ada
3. Lewati setup untuk saat ini
```

Pilih **"Bangun tema kustom"** kanggo mlebu alur onboarding Theme Builder.

### Aktivasi Manual {#manual-activation}

Sampeyan uga bisa mulai onboarding Theme Builder kapan wae kan njaluk:

```
"Mulai onboarding Theme Builder"
```

utawa

```
"Bantu saya membuat tema kustom"
```

## Langkah-Langkah Onboarding {#the-onboarding-steps}

### Langkah 1: Pemilihan Mode {#step-1-mode-selection}

Setup Assistant agent bakal nanya babagan pilihan sampeyan:

```
Bagaimana Anda ingin membangun tema Anda?
- Terpandu (Saya akan bertanya dan membuatnya untuk Anda)
- Praktis (Saya akan tunjukkan pilihan dan Anda yang memutuskan)
```

**Mode Terpandu (Guided mode)** direkomendasikake kanggo sabarane pengguna; agent bakal menehi rekomendasi desain adhedhasar industri lan tujuan sampeyan.

### Langkah 2: Spesifikasi Situs {#step-2-site-specification}

Sampeyan bakal ditanya babagan situs sampeyan:

- **Tujuan Situs**: E-commerce, blog, portofolio, SaaS, lspos.
- **Target Audiens**: Sapaanmu iki sapa sing arep mampir?
- **Warna Brand**: Warna utama lan sekunder (utawa "aku ora yakin").
- **Nada Bicara (Tone)**: Profesional, kreatif, santai/playful, minimal, lspos.

Informasi iki disimpen ing memori **site_brief**-mu, sing diacu dening agen ing sesi-sesi sabanjure.

### Langkah 3: Keputusan Sistem Desain (Design System Decisions) {#step-3-design-system-decisions}

Agen bakal nuntun sampeyan milih elemen desain kaya ngene:

- **Tipografi**: Jenis font (serif, sans-serif, monospace) lan skala ukurane
- **Palet Warna**: Warna utama, sekunder, aksen, lan warna netral
- **Jarak (Spacing)**: Tata letak sing padhet (compact), biasa (normal), utawa lega (spacious)
- **Gerakan (Motion)**: Animasi lan transisi (yen arep).

### Langkah 4: Pembuatan Tema (Theme Generation) {#step-4-theme-generation}

Agen Setup Assistant bakal mbangun tema blok kustommu kanthi nggunakake:

- `theme.json` sing ngemot kabeh design token-mu
- Template blok kanggo tata letak umum (homepage, blog, kontak)
- Gaya blok kustom sing cocog karo sistem desainmu
- Metadata tema lan deklarasi dukungan WordPress

### Langkah 5: Aktivasi lan Verifikasi (Activation and Verification) {#step-5-activation-and-verification}

Tema bakal otomatis aktif, lan sampeyan bakal weruh:

```
✓ Tema kustommu wis online!
  Nama Tema: Theme [Nama Situsmu]
  Warna: [Primary] / [Secondary]
  Tipografi: [Font Family]

  Kunjungi situsmu kanggo ndelok desain anyar.
```

Saiki sampeyan bisa mampir menyang situsmu kanggo mastiake tema kuwi tampil kanthi bener.

## Spesifikasi Situs lan Memori site_brief {#site-specification-and-sitebrief-memory}

Wektu nggawe akun (onboarding), agen bakal nyimpen spesifikasi situsmu ing kategori memori **site_brief**. Iki kalebu:

- Tujuan lan cita-cita situs
- Target audiens
- Warna brand lan nada bicara
- Preferensi desain
- Struktur konten

### Kenapa site_brief Penting {#why-sitebrief-matters}

Ing sesi sabanjure, agen bakal ngacu marang site_brief-mu kanggo:

### Menjaga Konsistensi Desain Saat Ada Perubahan {#viewing-your-sitebrief}

*   Jaga tampilan desain tetap serasi meskipun ada perubahan.
*   Saran fitur yang sesuai dengan tujuan situs Anda.
*   Berikan rekomendasi yang pas dengan konteksnya.
*   Hindari mengulang pertanyaan pengaturan yang sudah pernah ditanyakan.

### Melihat Ringkasan Situs_brief Anda {#customizing-after-onboarding}

Anda bisa tanya agen:

```
"Tunjukkan ringkasan situs saya"
```

atau

```
"Apa yang kamu tahu tentang situs saya?"
```

Agen akan menampilkan spesifikasi situs yang sudah tersimpan.

## Mengubah Setelah Onboarding Selesai {#use-the-design-system-aesthetics-skill}

Setelah proses onboarding Theme Builder selesai, Anda bisa melakukan hal-hal berikut:

### Gunakan Skill Estetika Sistem Desain (Design System Aesthetics) {#edit-themejson-directly}

Minta perbaikan desain seperti ini:

```
"Perbaiki tipografinya agar lebih modern"
```

atau

```
"Sesuaikan palet warnanya agar lebih hangat"
```

**Skill Design System Aesthetics** akan memandu Anda untuk melakukan pembaruan desain yang spesifik.

### Edit theme.json Secara Langsung {#create-custom-block-templates}

Untuk pengguna yang mahir, edit file `/wp-content/themes/[theme-name]/theme.json` untuk menyesuaikan:

*   Token warna
*   Skala tipografi (ukuran huruf)
*   Nilai jarak antar elemen (spacing values)
*   Definisi batas (border) dan bayangan (shadow)

### Buat Template Blok Kustom {#comparison-old-vs-new-onboarding}

Gunakan editor blok WordPress untuk membuat template khusus untuk:

*   Tata letak halaman utama (Homepage layouts)
*   Halaman postingan blog (Blog post pages)
*   Halaman produk (Product pages)
*   Form kontak (Contact forms)

## Perbandingan: Onboarding Lama vs. Baru {#troubleshooting}

| Fitur | Site Builder (Lama) | Theme Builder (Baru) |
| :--- | :--- | :--- |
| Metode Pengaturan | Formulir berbasis Wizard | Percakapan yang dipandu Agen |
| Pembuatan Tema | Template terbatas | Kerangka kustom (Custom scaffolding) |
| Token Desain | Input manual | Keputusan yang dipandu |
| Fleksibilitas | Pilihan tetap | Dapat disesuaikan |
| Pembaruan Masa Depan | Tidak dirujuk | Tersimpan di site_brief |

## Pemecahan Masalah (Troubleshooting) {#next-steps}

**Alur onboarding tidak selesai**
*   Mulai ulang alurnya: "Start the Theme Builder onboarding"
*   Pastikan instalasi WordPress Anda sudah terbaru
*   Periksa apakah agen Setup Assistant sudah aktif

**site_brief saya ora digunakake**
- Konfirmasi agen duwe akses ke memori (memory)
- Minta agen kanggo "mengingat site brief saya" ("recall my site brief")
- Cek yen memori wis aktif ing pengaturan sampeyan

**Tema sing digawe ora cocok karo preferensi saya**
- Gunakake skill Design System Aesthetics kanggo ngresiki maneh
- Minta agen kanggo "nggawe ulang tema kanthi [perubahan spesifik]" ("regenerate the theme with [specific changes]")
- Edit file theme.json langsung kanggo kontrol sing luwih pas

## Langkah Salajengipun

Sawise ngrampungake onboarding Theme Builder:

1. **Verifikasi situs sampeyan**: Kunjungi situs sampeyan kanggo ndelok tema anyar kasebut
2. **Rileksake desain**: Gunakake skill Design System Aesthetics kanggo ngatur-atur (adjustments)
3. **Tambah konten**: Mulai bangun konten situs sampeyan
4. **Eksplorasi kemampuan**: Pelajari babagan kemampuan agen liyane kaya scaffold-block-theme lan activate-theme
