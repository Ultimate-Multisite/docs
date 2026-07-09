---
title: Notis Pembuangan Mod Pembina Laman
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Notis Penyingkiran Mode Site Builder {#site-builder-mode-removal-notice}

**Mode Site Builder telah dikeluarkan dalam Superdav AI Agent v1.12.0.** Jika anda menggunakan Mode Site Builder, anda harus beralih ke **Setup Assistant agent** untuk penciptaan tema dan persediaan tapak.

## Apa Yang Berlaku? {#what-happened}

### Mode Site Builder (Lama) {#site-builder-mode-legacy}

Mode Site Builder adalah antara muka berasaskan panduan (wizard) untuk:

- Mencipta tapak daripada templat
- Mengkonfigurasi tetapan asas
- Memilih tema
- Menetapkan kandungan awal

### Apa Yang Menggantikannya? {#what-replaced-it}

**Setup Assistant agent** kini mengendalikan semua fungsi Site Builder dengan:

- Persediaan berpandu agen yang lebih fleksibel
- Pilihan penyesuaian tema yang lebih baik
- Integrasi dengan onboarding Theme Builder
- Memori site_brief yang kekal untuk sesi akan datang

## Jika Anda Menggunakan Mode Site Builder {#if-you-were-using-site-builder-mode}

### Tapak Anda Selamat {#your-sites-are-safe}

- Tapak sedia ada yang dicipta dengan Mode Site Builder terus berfungsi
- Tiada kehilangan data atau gangguan tapak
- Anda masih boleh menguruskan tapak anda seperti biasa

### Berpindah ke Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Untuk persediaan tapak baharu atau perubahan tema, gunakan Setup Assistant agent:

```
"Help me set up a new site"
```

atau

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent menyediakan fungsi yang sama dengan lebih fleksibiliti.

## Perbandingan: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Ciri | Site Builder (Dikeluarkan) | Setup Assistant (Baharu) |
|---------|----------------------|----------------------|
| Kaedah persediaan | Borang panduan (Wizard) | Perbualan agen (Agent conversation) |
| Pemilihan tema | Templat pra-definisi | Penjanaan tersuai |
| Penyesuaian | Pilihan terhad | Sistem reka bentuk penuh |
| Site brief | Tidak disimpan | Memori kekal |
| Sesi akan datang | Ulang persediaan | Gunakan site_brief yang disimpan |
| Fleksibiliti | Aliran kerja tetap | Perbualan adaptif |

## Berpindah ke Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Untuk Tapak Baharu {#for-new-sites}

Daripada menggunakan Mode Site Builder:

1. Minta: "Help me set up a new site"
2. Setup Assistant agent akan membimbing anda melalui:
   - Tujuan dan matlamat tapak
   - Audiens sasaran
   - Identiti jenama
   - Penjanaan tema
   - Konfigurasi awal

### Untuk Tapak Sedia Ada {#for-existing-sites}

Jika anda mempunyai tapak sedia ada daripada Mode Site Builder:

1. Anda boleh terus menggunakannya seperti sedia ada
2. Untuk mengemas kini tema, minta: "Redesign my site"
3. Setup Assistant agent akan membantu anda mencipta tema baharu
4. Data tapak anda kekal tidak berubah

### Untuk Perubahan Tema {#for-theme-changes}

Daripada pemilihan tema Mode Site Builder:

1. Minta: "Change my theme"
2. Setup Assistant agent akan:
   - Bertanya tentang pilihan reka bentuk anda
   - Menjana tema tersuai
   - Mengaktifkannya pada tapak anda

## Perbezaan Utama {#key-differences}

### Mode Site Builder {#site-builder-mode}

```
1. Pilih templat
2. Pilih tema
3. Konfigurasi tetapan asas
4. Selesai
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Huraikan tujuan tapak anda
2. Tentukan audiens sasaran anda
3. Pilih pilihan reka bentuk
4. Agen menjana tema tersuai
5. Agen mengaktifkan tema
6. site_brief disimpan untuk sesi akan datang
```

## Kelebihan Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Lebih Fleksibel {#more-flexible}

- Huraikan tapak anda dalam bahasa semula jadi
- Dapatkan cadangan tersuai
- Menyesuaikan diri dengan keperluan spesifik anda

### Penyesuaian Lebih Baik {#better-customization}

- Penjanaan tema tersuai
- Keputusan sistem reka bentuk
- Token reka bentuk yang kekal

### Memori Kekal {#persistent-memory}

- site_brief anda disimpan
- Agen masa depan memahami tapak anda
- Tiada keperluan untuk mengulangi maklumat persediaan

### Aliran Kerja Bersepadu {#integrated-workflow}

- Onboarding Theme Builder
- Design System Aesthetics skill
- Ability Visibility controls
- Semua berfungsi bersama dengan lancar

## Penyelesaian Masalah {#troubleshooting}

### Saya tak jumpa Mode Site Builder {#i-cant-find-site-builder-mode}

Mode Site Builder telah dikeluarkan. Gunakan Setup Assistant agent pula:

```
"Help me set up a new site"
```

### Saya mahu mencipta semula tapak dari Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Anda boleh menciptanya semula dengan Setup Assistant agent:

1. Minta: "Help me set up a new site"
2. Huraikan tujuan dan reka bentuk tapak asal anda
3. Agen akan menjana tema yang serupa
4. site_brief anda akan disimpan untuk rujukan masa depan

### Site Builder sedia ada saya tak berfungsi {#my-existing-site-builder-site-isnt-working}

Tapak sedia ada yang dicipta dengan Mode Site Builder terus berfungsi. Jika anda mengalami masalah:

1. Semak sama ada tema anda masih aktif
2. Sahkan plugin anda telah diaktifkan
3. Semak log ralat WordPress
4. Hubungi sokongan jika masalah berterusan

### Boleh saya masih guna templat Site Builder lama saya? {#can-i-still-use-my-old-site-builder-templates}

Templat Site Builder tidak lagi tersedia. Walau bagaimanapun:

- Tapak sedia ada anda terus berfungsi
- Anda boleh mencipta semula tapak serupa dengan Setup Assistant agent
- Setup Assistant agent menyediakan lebih banyak pilihan penyesuaian

## Langkah Seterusnya {#next-steps}

1. **Untuk tapak baharu**: Gunakan Setup Assistant agent
2. **Untuk tapak sedia ada**: Teruskan menggunakannya seperti biasa
3. **Untuk perubahan tema**: Minta bantuan daripada Setup Assistant agent
4. **Untuk penambahbaikan reka bentuk**: Gunakan Design System Aesthetics skill

## Topik Berkaitan {#related-topics}

- **Theme Builder Onboarding**: Persediaan berpandu untuk tema tersuai
- **Setup Assistant Agent**: Persediaan tapak berpandu agen
- **Site Specification Skill**: Tentukan matlamat dan audiens tapak anda
- **Design System Aesthetics Skill**: Perhalusi identiti visual tapak anda
