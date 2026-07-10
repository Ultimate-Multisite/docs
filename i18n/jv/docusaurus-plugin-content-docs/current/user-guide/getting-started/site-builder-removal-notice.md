---
title: Pemberitahuan Penghapusan Mode Pembuat Situs
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Pemberitahuan Penghapusan Mode Pembuat Situs {#site-builder-mode-removal-notice}

**Mode Site Builder sudah dihapus di Superdav AI Agent v1.12.0.** Yen sampeyan lagi nggunakake mode Site Builder, saiki kudu pindah menyang **Setup Assistant agent** kanggo nggawe tema lan ngatur situs.

## Apa Sing Kedadeyan? {#what-happened}

### Mode Site Builder (Lama) {#site-builder-mode-legacy}

Mode Site Builder iku antarmuka sing nganggo alur langkah-langkah (wizard) kanggo:

- Nggawe situs saka template
- Ngatur pengaturan dasar
- Milih tema
- Ngatur konten awal

### Apa Sing Ngganti? {#what-replaced-it}

**Setup Assistant agent** saiki ngurus kabeh fungsi Site Builder kanthi:

- Pengaturan sing luwih fleksibel lan dipandu agen
- Pilihan kustomisasi tema sing luwih apik
- Integrasi karo onboarding Theme Builder
- ingatan `site_brief` sing permanen kanggo sesi sesuk

## Yen Sampeyan Nggunakake Mode Site Builder {#if-you-were-using-site-builder-mode}

### Situs Sampeyan Aman {#your-sites-are-safe}

- Situs-situs sing wis digawe nganggo mode Site Builder tetep bisa dienggo
- Ora ana ilang data utawa gangguan situs
- Sampeyan isih bisa ngelola situs sampeyan kanthi normal

### Pindah menyang Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Kanggo pengaturan situs anyar utawa ganti tema, nganggo Setup Assistant agent:

```
"Help me set up a new site"
```

utawa

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent nawakake fungsi sing padha nanging luwih fleksibel.

## Perbandingan: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Fitur | Site Builder (Dihapus) | Setup Assistant (Anyar) |
|---|---|---|
| Cara Ngatur | Formulir wizard | Obrolan agen |
| Pemilihan Tema | Template sing wis ana | Generasi kustom |
| Kustomisasi | Pilihan terbatas | Sistem desain lengkap |
| Site brief | Ora disimpan | Ingatan permanen |
| Sesi Sesuk | Pengaturan ulang | Nganggo site_brief sing wis tersimpan |
| Fleksibilitas | Alur kerja tetep | Obrolan adaptif |

## Migrasi menyang Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Kanggo Situs Anyar {#for-new-sites}

Ganti Mode Pembuat Situs (Site Builder mode):

1. Permintaan: "Tolong bantu saya membuat situs baru"
2. Agen Asisten Penyiapan (Setup Assistant agent) akan memandu Anda melalui:
   - Tujuan dan sasaran situs
   - Target audiens
   - Identitas merek (Brand identity)
   - Pembuatan tema (Theme generation)
   - Konfigurasi awal

### Untuk Situs yang Sudah Ada {#for-existing-sites}

Jika Anda sudah punya situs dari mode Site Builder:

1. Anda bisa terus menggunakannya seperti adanya
2. Untuk memperbarui temanya, minta: "Rancang ulang situs saya"
3. Agen Asisten Penyiapan akan bantu Anda membuat tema baru
4. Data situs Anda tetap tidak berubah

### Untuk Perubahan Tema {#for-theme-changes}

Daripada pemilihan tema di mode Site Builder:

1. Minta: "Ubah tema saya"
2. Agen Asisten Penyiapan akan:
   - Menanyakan preferensi desain Anda
   - Membuat tema kustom
   - Mengaktifkannya di situs Anda

## Perbedaan Utama {#key-differences}

### Mode Pembuat Situs (Site Builder Mode) {#site-builder-mode}

```
1. Pilih template
2. Pilih tema
3. Konfigurasi pengaturan dasar
4. Selesai
```

### Agen Asisten Penyiapan (Setup Assistant Agent) {#setup-assistant-agent}

```
1. Jelaskan tujuan situs Anda
2. Tentukan target audiens Anda
3. Pilih preferensi desain Anda
4. Agen membuat tema kustom
5. Agen mengaktifkan tema
6. Ringkasan singkat situs disimpan untuk sesi mendatang
```

## Keuntungan Agen Asisten Penyiapan (Setup Assistant Agent) {#benefits-of-setup-assistant-agent}

### Lebih Fleksibel {#more-flexible}

- Jelaskan situs Anda dengan bahasa sehari-hari
- Dapatkan rekomendasi khusus
- Sesuaikan dengan kebutuhan spesifik Anda

### Kustomisasi yang Lebih Baik {#better-customization}

- Pembuatan tema kustom
- Keputusan sistem desain (Design system decisions)
- Token desain yang tersimpan permanen (Persistent design tokens)

### Memori Permanen {#persistent-memory}

- `site_brief` Anda disimpan
- Agen di masa depan akan mengerti situs Anda
- Tidak perlu mengulang informasi penyiapan

### Alur Kerja Terintegrasi {#integrated-workflow}

- Onboarding Theme Builder
- Keterampilan Estetika Sistem Desain (Design System Aesthetics skill)
- Kemampuan Kontrol Visibilitas (Ability Visibility controls)
- Semua bekerja bersama dengan mulus

## Pemecahan Masalah (Troubleshooting) {#troubleshooting}

### Saya tidak bisa menemukan Mode Pembuat Situs (Site Builder mode) {#i-cant-find-site-builder-mode}

Mode Pembuat Situs sudah dihapus. Gunakan agen Asisten Penyiapan (Setup Assistant agent) sebagai gantinya:

"Tolong bantu saya membuat situs baru"

### Saya ingin membuat ulang situs dari Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Kamu bisa membuatnya lagi pakai agen Setup Assistant:

1. Minta bantuan: "Tolong bantu saya membuat situs baru"
2. Jelaskan tujuan dan desain situs aslimu
3. Agen akan membuat tema yang mirip
4. `site_brief` kamu akan tersimpan untuk referensi nanti

### Situs Site Builder saya yang lama tidak berfungsi {#my-existing-site-builder-site-isnt-working}

Situs yang sudah dibuat dengan mode Site Builder masih bisa dipakai. Kalau kamu mengalami masalah:

1. Cek apakah tema kamu masih aktif
2. Pastikan plugin kamu sudah diaktifkan
3. Cek log error WordPress
4. Hubungi dukungan kalau masalahnya masih ada

### Bisakah saya masih pakai template Site Builder lama saya? {#can-i-still-use-my-old-site-builder-templates}

Template Site Builder sudah tidak tersedia lagi. Tapi:

- Situs yang sudah ada tetap bisa dipakai
- Kamu bisa membuat situs serupa dengan agen Setup Assistant
- Agen Setup Assistant kasih pilihan kustomisasi yang lebih banyak

## Langkah Selanjutnya {#next-steps}

1. **Untuk situs baru**: Gunakan agen Setup Assistant
2. **Untuk situs yang sudah ada**: Tetap pakai seperti adanya
3. **Untuk ganti tema**: Minta bantuan dari agen Setup Assistant
4. **Untuk perbaikan desain**: Pakai skill Design System Aesthetics

## Topik Terkait {#related-topics}

- **Theme Builder Onboarding**: Panduan pengaturan untuk tema kustom
- **Setup Assistant Agent**: Pengaturan situs yang dibimbing oleh agen
- **Site Specification Skill**: Tentukan tujuan dan audiens situs kamu
- **Design System Aesthetics Skill**: Perbaiki identitas visual situs kamu
