---
title: Pemberitahuan Penghapusan Mode Pembuat Situs
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Pemberitahuan Penghapusan Mode Pembuat Situs

**Mode Site Builder sudah dihapus di Superdav AI Agent v1.12.0.** Muncul mode Site Builder, silakan pindah ke **Setup Assistant agent** untuk pembuatan tema dan pengaturan situs.

## Apa yang Terjadi?

### Mode Site Builder (Lama)

Mode Site Builder itu adalah antarmuka berbasis panduan (wizard) untuk:

- Membuat situs dari template
- Mengatur pengaturan dasar
- Memilih tema
- Menyiapkan konten awal

### Apa yang Menggantikannya?

**Setup Assistant agent** sekarang menangani semua fungsi Site Builder dengan:

- Pengaturan yang lebih fleksibel dan dipandu oleh agen
- Pilihan kustomisasi tema yang lebih baik
- Integrasi dengan onboarding Theme Builder
- Memori `site_brief` yang tersimpan untuk sesi di masa depan

## Jika Anda Menggunakan Mode Site Builder

### Situs Anda Aman

- Situs yang sudah dibuat dengan mode Site Builder masih bisa dipakai
- Tidak ada kehilangan data atau gangguan pada situs
- Anda tetap bisa mengelola situs Anda seperti biasa

### Migrasi ke Setup Assistant Agent

Untuk pengaturan situs baru atau perubahan tema, gunakan Setup Assistant agent:

```
"Bantu saya menyiapkan situs baru"
```

atau

```
"Mulai onboarding Theme Builder"
```

Setup Assistant agent memberikan fungsi yang sama dengan lebih fleksibel.

## Perbandingan: Site Builder vs. Setup Assistant

| Fitur | Site Builder (Dihapus) | Setup Assistant (Baru) |
|---------|----------------------|----------------------|
| Metode Pengaturan | Formulir wizard | Percakapan agen |
| Pemilihan Tema | Template yang sudah ditentukan | Pembuatan kustom |
| Kustomisasi | Pilihan terbatas | Sistem desain penuh |
| Ringkasan Situs (Site brief) | Tidak tersimpan | Memori persisten |
| Sesi Mendatang | Pengaturan ulang | Menggunakan `site_brief` yang tersimpan |
| Fleksibilitas | Alur kerja tetap | Percakapan adaptif |

## Migrasi ke Setup Assistant Agent

### Untuk Situs Baru

Dibanding menggunakan mode Site Builder:

1. Permintaan: "Tolong bantu saya membuat situs baru"
2. Agen Asisten Pengaturan (Setup Assistant agent) akan memandu Anda melalui:
   - Tujuan dan sasaran situs
   - Target audiens
   - Identitas merek (Brand identity)
   - Pembuatan tema (Theme generation)
   - Konfigurasi awal

### Untuk Situs yang Sudah Ada

Jika Anda sudah punya situs dari mode Site Builder:

1. Anda bisa terus menggunakannya seperti adanya
2. Untuk memperbarui temanya, minta: "Rancang ulang situs saya"
3. Agen Asisten Pengaturan akan bantu Anda membuat tema baru
4. Data situs Anda tetap tidak berubah

### Untuk Perubahan Tema

Dibandingkan pemilihan tema di mode Site Builder:

1. Minta: "Ubah tema saya"
2. Agen Asisten Pengaturan akan:
   - Menanyakan preferensi desain Anda
   - Membuat tema kustom
   - Mengaktifkannya di situs Anda

## Perbedaan Utama

### Mode Site Builder

```
1. Pilih template
2. Pilih tema
3. Konfigurasi pengaturan dasar
4. Selesai
```

### Agen Asisten Pengaturan (Setup Assistant Agent)

```
1. Jelaskan tujuan situs Anda
2. Tentukan target audiens Anda
3. Pilih preferensi desain Anda
4. Agen membuat tema kustom
5. Agen mengaktifkan tema
6. Ringkasan singkat situs disimpan untuk sesi mendatang
```

## Keuntungan Agen Asisten Pengaturan (Setup Assistant Agent)

### Lebih Fleksibel

- Jelaskan situs Anda dengan bahasa sehari-hari
- Dapatkan rekomendasi kustom
- Sesuaikan dengan kebutuhan spesifik Anda

### Kustomisasi Lebih Baik

- Pembuatan tema kustom
- Keputusan sistem desain (Design system decisions)
- Token desain yang tersimpan (Persistent design tokens)

### Memori Permanen

- `site_brief` Anda disimpan
- Agen di masa depan akan mengerti situs Anda
- Tidak perlu mengulang informasi pengaturan

### Alur Kerja Terintegrasi

- Onboarding Theme Builder
- Keterampilan Estetika Sistem Desain (Design System Aesthetics skill)
- Kemampuan Kontrol Visibilitas (Ability Visibility controls)
- Semuanya bekerja bersama dengan mulus

## Pemecahan Masalah (Troubleshooting)

### Saya tidak bisa menemukan mode Site Builder

Mode Site Builder sudah dihapus. Gunakan agen Asisten Pengaturan (Setup Assistant agent) sebagai gantinya:

"Tolong bantu saya membuat situs baru"

### Saya ingin membuat ulang situs dari Site Builder

Anjeun bisa bikin ulang pakai agen Setup Assistant:

1. Minta bantuan: "Tolong bantu saya membuat situs baru"
2. Jelaskan tujuan dan desain situs aslimu
3. Agen bakal bikin tema yang mirip
4. `site_brief` kamu bakal disimpan buat referensi nanti

### Situs Site Builder saya yang lama nggak jalan lagi

Situs yang udah dibuat pakai mode Site Builder masih bisa jalan. Muncul masalah?

1. Cek apakah tema kamu masih aktif
2. Pastikan plugin kamu sudah diaktifkan
3. Cek log error WordPress
4. Hubungi support kalau masalahnya masih ada

### Boleh nggak saya masih pakai template Site Builder lama?

Template Site Builder udah nggak tersedia lagi. Tapi:

- Situs yang sudah ada tetap bisa jalan
- Kamu bisa bikin situs mirip pakai agen Setup Assistant
- Agen Setup Assistant kasih pilihan kustomisasi lebih banyak

## Langkah Selanjutnya

1. **Untuk situs baru**: Pakai agen Setup Assistant
2. **Untuk situs yang sudah ada**: Tetap pakai seperti adanya
3. **Untuk ganti tema**: Minta bantuan dari agen Setup Assistant
4. **Untuk perbaikan desain**: Pakai skill Design System Aesthetics

## Topik Terkait

- **Theme Builder Onboarding**: Panduan setup untuk tema kustom
- **Setup Assistant Agent**: Setup situs yang dibimbing oleh agen
- **Site Specification Skill**: Tentukan tujuan dan audiens situs kamu
- **Design System Aesthetics Skill**: Perbaiki identitas visual situs kamu
