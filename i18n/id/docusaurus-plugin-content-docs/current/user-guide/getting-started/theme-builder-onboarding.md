---
title: Alur Orientasi Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Alur Orientasi Theme Builder {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 memperkenalkan **alur orientasi Theme Builder** terpandu yang membantu Anda membuat tema blok kustom selama pengaturan awal. Ini menggantikan mode Site Builder lama dengan pendekatan yang lebih fleksibel dan dibantu oleh agen.

## Apa itu Alur Orientasi Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Alur orientasi Theme Builder adalah *setup wizard* interaktif yang akan:

- Memandu Anda melalui keputusan desain (warna, tipografi, tata letak)
- Menangkap preferensi identitas visual situs Anda
- Menghasilkan tema blok kustom yang disesuaikan dengan kebutuhan Anda
- Mengaktifkan tema secara otomatis setelah selesai

Alur ini didukung oleh **Setup Assistant agent**, yang akan mengajukan pertanyaan klarifikasi dan membangun tema Anda secara bertahap.

## Memulai Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### Pengaturan Pertama Kali {#first-run-setup}

Saat pertama kali meluncurkan Superdav AI Agent pada instalasi WordPress baru, Anda akan melihat:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Pilih **"Build a custom theme"** untuk masuk ke alur orientasi Theme Builder.

### Aktivasi Manual {#manual-activation}

Anda juga dapat memulai Theme Builder onboarding kapan saja dengan meminta:

```
"Start the Theme Builder onboarding"
```

atau

```
"Help me create a custom theme"
```

## Langkah-Langkah Onboarding {#the-onboarding-steps}

### Langkah 1: Pemilihan Mode {#step-1-mode-selection}

Setup Assistant agent akan menanyakan preferensi Anda:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Mode Guided** direkomendasikan untuk sebagian besar pengguna; agen akan memberikan rekomendasi desain berdasarkan industri dan tujuan Anda.

### Langkah 2: Spesifikasi Situs {#step-2-site-specification}

Anda akan ditanya tentang situs Anda:

- **Tujuan situs**: E-commerce, blog, portofolio, SaaS, dll.
- **Audiens target**: Siapa pengunjung Anda?
- **Warna merek**: Warna utama dan sekunder (atau "Saya tidak yakin")
- **Nada**: Profesional, kreatif, ceria, minimalis, dll.

Informasi ini disimpan dalam memori **site_brief** Anda, yang akan dirujuk oleh agen di sesi mendatang.

### Langkah 3: Keputusan Sistem Desain {#step-3-design-system-decisions}

Agen akan memandu Anda melalui pemilihan *design token*:

- **Tipografi**: Keluarga font (serif, sans-serif, monospace) dan skala ukuran
- **Palet warna**: Warna utama, sekunder, aksen, dan netral
- **Jarak (Spacing)**: Tata letak ringkas, normal, atau lapang
- **Gerakan (Motion)**: Animasi dan transisi (jika diinginkan)

### Langkah 4: Pembuatan Tema {#step-4-theme-generation}

Setup Assistant agent akan membuat kerangka (scaffold) tema blok kustom Anda dengan:

- `theme.json` yang berisi semua *design token* Anda
- Template blok untuk tata letak umum (beranda, blog, kontak)
- Gaya blok kustom yang sesuai dengan sistem desain Anda
- Metadata tema dan deklarasi dukungan WordPress

### Langkah 5: Aktivasi dan Verifikasi {#step-5-activation-and-verification}

Tema akan diaktifkan secara otomatis, dan Anda akan melihat:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Anda kemudian dapat mengunjungi situs Anda untuk memverifikasi bahwa tema ditampilkan dengan benar.

## Spesifikasi Situs dan Memori site_brief {#site-specification-and-sitebrief-memory}

Selama onboarding, agen menangkap spesifikasi situs Anda dalam kategori memori **site_brief**. Ini mencakup:

- Tujuan dan sasaran situs
- Audiens target
- Warna dan nada merek
- Preferensi desain
- Struktur konten

### Mengapa site_brief Penting {#why-sitebrief-matters}

Di sesi mendatang, agen akan merujuk site_brief Anda untuk:

- Mempertahankan konsistensi desain di berbagai perubahan
- Menyarankan fitur yang selaras dengan tujuan situs Anda
- Memberikan rekomendasi yang sesuai konteks
- Menghindari pengulangan pertanyaan pengaturan

### Melihat site_brief Anda {#viewing-your-sitebrief}

Anda dapat meminta agen:

```
"Show me my site brief"
```

atau

```
"What do you know about my site?"
```

Agen akan menampilkan spesifikasi situs yang tersimpan.

## Kustomisasi Setelah Onboarding {#customizing-after-onboarding}

Setelah Theme Builder onboarding selesai, Anda dapat:

### Menggunakan Skill Estetika Sistem Desain {#use-the-design-system-aesthetics-skill}

Meminta penyempurnaan desain:

```
"Refine the typography to be more modern"
```

atau

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** akan memandu Anda melalui pembaruan desain yang ditargetkan.

### Mengedit theme.json Secara Langsung {#edit-themejson-directly}

Untuk pengguna tingkat lanjut, edit `/wp-content/themes/[theme-name]/theme.json` untuk menyesuaikan:

- Token warna
- Skala tipografi
- Nilai jarak (spacing)
- Definisi batas dan bayangan (border and shadow)

### Membuat Template Blok Kustom {#create-custom-block-templates}

Gunakan editor blok WordPress untuk membuat template kustom untuk:

- Tata letak beranda
- Halaman postingan blog
- Halaman produk
- Formulir kontak

## Perbandingan: Onboarding Lama vs. Baru {#comparison-old-vs-new-onboarding}

| Fitur | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Metode pengaturan | Berbasis wizard formulir | Percakapan terpandu agen |
| Pembuatan tema | Template terbatas | Kerangka kustom |
| Token desain | Entri manual | Keputusan terpandu |
| Fleksibilitas | Opsi tetap | Dapat disesuaikan |
| Pembaruan di masa depan | Tidak dirujuk | Disimpan di site_brief |

## Pemecahan Masalah (Troubleshooting) {#troubleshooting}

**Alur onboarding tidak selesai**
- Mulai ulang alur: "Start the Theme Builder onboarding"
- Periksa bahwa instalasi WordPress Anda sudah diperbarui
- Verifikasi bahwa Setup Assistant agent sudah diaktifkan

**site_brief saya tidak digunakan**
- Konfirmasi bahwa agen memiliki akses ke memori
- Minta agen untuk "recall my site brief"
- Periksa bahwa memori sudah diaktifkan di pengaturan Anda

**Tema yang dihasilkan tidak sesuai dengan preferensi saya**
- Gunakan Design System Aesthetics skill untuk menyempurnakannya
- Minta agen untuk "regenerate the theme with [specific changes]"
- Edit theme.json secara langsung untuk kontrol yang presisi

## Langkah Selanjutnya {#next-steps}

Setelah menyelesaikan Theme Builder onboarding:

1. **Verifikasi situs Anda**: Kunjungi situs Anda untuk melihat tema baru
2. **Sempurnakan desain**: Gunakan Design System Aesthetics skill untuk penyesuaian
3. **Tambahkan konten**: Mulai membangun konten situs Anda
4. **Jelajahi kemampuan**: Pelajari kemampuan agen lain seperti scaffold-block-theme dan activate-theme
