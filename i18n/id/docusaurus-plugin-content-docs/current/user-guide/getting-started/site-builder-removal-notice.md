---
title: Pemberitahuan Penghapusan Mode Site Builder
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Pemberitahuan Penghapusan Mode Site Builder {#site-builder-mode-removal-notice}

**Mode Site Builder telah dihapus di Superdav AI Agent v1.12.0.** Jika Anda menggunakan Mode Site Builder, Anda harus beralih ke **agent Setup Assistant** untuk pembuatan tema dan penyiapan situs.

## Apa yang Terjadi? {#what-happened}

### Mode Site Builder (Lama) {#site-builder-mode-legacy}

Mode Site Builder adalah antarmuka berbasis wizard untuk:

- Membuat situs dari template
- Mengkonfigurasi pengaturan dasar
- Memilih tema
- Menyiapkan konten awal

### Apa yang Menggantikannya? {#what-replaced-it}

**Agent Setup Assistant** kini menangani semua fungsi Site Builder dengan:

- Penyiapan yang lebih fleksibel dan dipandu oleh agent
- Opsi kustomisasi tema yang lebih baik
- Integrasi dengan *onboarding* Theme Builder
- Memori *site_brief* yang persisten untuk sesi mendatang

## Jika Anda Menggunakan Mode Site Builder {#if-you-were-using-site-builder-mode}

### Situs Anda Aman {#your-sites-are-safe}

- Situs yang sudah dibuat dengan Mode Site Builder akan terus berfungsi
- Tidak ada kehilangan data atau gangguan situs
- Anda dapat terus mengelola situs Anda secara normal

### Pindah ke Agent Setup Assistant {#migrate-to-setup-assistant-agent}

Untuk penyiapan situs baru atau perubahan tema, gunakan agent Setup Assistant:

```
"Help me set up a new site"
```

atau

```
"Start the Theme Builder onboarding"
```

Agent Setup Assistant menyediakan fungsionalitas yang sama dengan fleksibilitas yang lebih besar.

## Perbandingan: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Fitur | Site Builder (Dihapus) | Setup Assistant (Baru) |
|---------|----------------------|----------------------|
| Metode penyiapan | Formulir wizard | Percakapan agent |
| Pemilihan tema | Template yang telah ditentukan | Generasi kustom |
| Kustomisasi | Opsi terbatas | Sistem desain penuh |
| Site brief | Tidak disimpan | Memori persisten |
| Sesi mendatang | Pengaturan berulang | Menggunakan site_brief tersimpan |
| Fleksibilitas | Alur kerja tetap | Percakapan adaptif |

## Migrasi ke Agent Setup Assistant {#migrating-to-setup-assistant-agent}

### Untuk Situs Baru {#for-new-sites}

Daripada menggunakan Mode Site Builder:

1. Minta: "Help me set up a new site"
2. Agent Setup Assistant akan memandu Anda melalui:
   - Tujuan dan sasaran situs
   - Target audiens
   - Identitas merek
   - Generasi tema
   - Konfigurasi awal

### Untuk Situs yang Sudah Ada {#for-existing-sites}

Jika Anda memiliki situs yang sudah ada dari Mode Site Builder:

1. Anda dapat terus menggunakannya apa adanya
2. Untuk memperbarui tema, minta: "Redesign my site"
3. Agent Setup Assistant akan membantu Anda membuat tema baru
4. Data situs Anda tetap tidak berubah

### Untuk Perubahan Tema {#for-theme-changes}

Daripada pemilihan tema Mode Site Builder:

1. Minta: "Change my theme"
2. Agent Setup Assistant akan:
   - Bertanya tentang preferensi desain Anda
   - Menghasilkan tema kustom
   - Mengaktifkannya di situs Anda

## Perbedaan Utama {#key-differences}

### Mode Site Builder {#site-builder-mode}

```
1. Pilih template
2. Pilih tema
3. Konfigurasi pengaturan dasar
4. Selesai
```

### Agent Setup Assistant {#setup-assistant-agent}

```
1. Jelaskan tujuan situs Anda
2. Tentukan target audiens Anda
3. Pilih preferensi desain
4. Agent menghasilkan tema kustom
5. Agent mengaktifkan tema
6. site_brief disimpan untuk sesi mendatang
```

## Keuntungan Agent Setup Assistant {#benefits-of-setup-assistant-agent}

### Lebih Fleksibel {#more-flexible}

- Jelaskan situs Anda dalam bahasa alami
- Dapatkan rekomendasi kustom
- Beradaptasi dengan kebutuhan spesifik Anda

### Kustomisasi Lebih Baik {#better-customization}

- Generasi tema kustom
- Keputusan sistem desain
- Token desain yang persisten

### Memori Persisten {#persistent-memory}

- site_brief Anda disimpan
- Agent di masa depan memahami situs Anda
- Tidak perlu mengulang informasi penyiapan

### Alur Kerja Terintegrasi {#integrated-workflow}

- *Onboarding* Theme Builder
- Skill Estetika Sistem Desain
- Kontrol Visibilitas Kemampuan
- Semua bekerja bersama secara mulus

## Pemecahan Masalah {#troubleshooting}

### Saya tidak dapat menemukan Mode Site Builder {#i-cant-find-site-builder-mode}

Mode Site Builder telah dihapus. Gunakan agent Setup Assistant sebagai gantinya:

```
"Help me set up a new site"
```

### Saya ingin membuat ulang situs dari Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Anda dapat membuatnya ulang dengan agent Setup Assistant:

1. Minta: "Help me set up a new site"
2. Jelaskan tujuan dan desain situs asli Anda
3. Agent akan menghasilkan tema yang serupa
4. site_brief Anda akan disimpan untuk referensi di masa mendatang

### Situs Site Builder saya yang sudah ada tidak berfungsi {#my-existing-site-builder-site-isnt-working}

Situs yang sudah dibuat dengan Mode Site Builder akan terus berfungsi. Jika Anda mengalami masalah:

1. Periksa apakah tema Anda masih aktif
2. Verifikasi bahwa plugin Anda telah diaktifkan
3. Periksa log kesalahan WordPress
4. Hubungi dukungan jika masalah berlanjut

### Bisakah saya masih menggunakan template Site Builder lama saya? {#can-i-still-use-my-old-site-builder-templates}

Template Site Builder tidak tersedia lagi. Namun:

- Situs Anda yang sudah ada tetap berfungsi
- Anda dapat membuat ulang situs serupa dengan agent Setup Assistant
- Agent Setup Assistant menyediakan opsi kustomisasi yang lebih banyak

## Langkah Selanjutnya {#next-steps}

1. **Untuk situs baru**: Gunakan agent Setup Assistant
2. **Untuk situs yang sudah ada**: Lanjutkan menggunakannya apa adanya
3. **Untuk perubahan tema**: Minta bantuan dari agent Setup Assistant
4. **Untuk penyempurnaan desain**: Gunakan skill Estetika Sistem Desain

## Topik Terkait {#related-topics}

- **Theme Builder Onboarding**: Penyiapan terpandu untuk tema kustom
- **Setup Assistant Agent**: Penyiapan situs yang dipandu agent
- **Site Specification Skill**: Tentukan tujuan dan audiens situs Anda
- **Design System Aesthetics Skill**: Perbaiki identitas visual situs Anda
