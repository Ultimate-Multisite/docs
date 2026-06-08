---
title: Kemampuan Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Kemampuan Theme Builder: Membuat Kerangka dan Mengaktifkan Block Theme

Superdav AI Agent v1.12.0 memperkenalkan dua kemampuan kuat yang memungkinkan Anda menghasilkan dan menerapkan *block theme* kustom langsung dari antarmuka chat.

## Gambaran Umum

Kemampuan **scaffold-block-theme** dan **activate-theme** memungkinkan agen untuk:
- Menghasilkan *block theme* lengkap yang siap produksi berdasarkan spesifikasi Anda
- Mengaktifkan tema secara otomatis di situs Anda tanpa intervensi manual
- Menciptakan identitas visual yang kohesif melalui keputusan desain yang terpandu

## Membuat Kerangka Block Theme (Scaffold Block Theme)

Kemampuan **scaffold-block-theme** menghasilkan *block theme* WordPress baru dengan struktur tema yang lengkap, termasuk:

- Konfigurasi `theme.json` dengan *design tokens*
- File *block template* untuk tata letak umum
- Gaya dan variasi *block* kustom
- Metadata dan deklarasi dukungan tema

### Cara Memanggil

Dalam chat Anda dengan Superdav AI Agent, Anda dapat meminta pembuatan tema:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agen akan:
1. Mengumpulkan preferensi desain Anda melalui percakapan
2. Menghasilkan struktur tema yang lengkap
3. Membuat semua file tema yang diperlukan
4. Menyiapkan tema untuk diaktifkan

### Hasil yang Diharapkan

Ketika kemampuan ini berhasil dijalankan, Anda akan melihat:

- Konfirmasi bahwa tema telah dibuat kerangkanya (*scaffolded*)
- Nama dan lokasi tema
- Ringkasan *design tokens* yang diterapkan (warna, tipografi, spasi)
- Status siap untuk diaktifkan

Contoh output:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Mengaktifkan Tema (Activate Theme)

Kemampuan **activate-theme** akan mengganti situs Anda ke *block theme* yang baru dibuat kerangkanya atau yang sudah ada.

### Cara Memanggil

Setelah membuat kerangka tema, Anda dapat mengaktifkannya segera:

```
"Activate the Modern Agency theme"
```

Atau aktifkan tema yang sudah ada:

```
"Switch to the Twentytwentyfour theme"
```

### Hasil yang Diharapkan

Ketika aktivasi berhasil:

- Konfirmasi tema yang aktif
- Nama tema sebelumnya (sebagai referensi)
- URL situs tempat tema tersebut kini aktif
- Catatan pengaturan spesifik tema apa pun

Contoh output:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Alur Kerja: Membuat Kerangka dan Mengaktifkan

Alur kerja tipikal menggabungkan kedua kemampuan ini:

1. **Meminta pembuatan tema**: "Create a block theme for my SaaS landing page"
2. **Agen membuat kerangka tema**: Menghasilkan file dan *design tokens*
3. **Meninjau dan menyempurnakan**: Mendiskusikan perubahan desain jika diperlukan
4. **Mengaktifkan**: "Activate the theme now"
5. **Memverifikasi**: Mengunjungi situs Anda untuk memastikan desain baru sudah aktif

## Design Tokens dan Kustomisasi

Tema yang dibuat kerangkanya menggunakan *design tokens* WordPress (melalui `theme.json`) untuk:

- **Warna**: Palet primer, sekunder, aksen, dan netral
- **Tipografi**: Keluarga font, ukuran, ketebalan, tinggi baris
- **Spasi**: Skala *padding*, margin, dan *gap*
- **Batas**: *Token* radius dan lebar
- **Bayangan**: Tingkat elevasi

*Token* ini terpusat di `theme.json`, sehingga memudahkan Anda menyesuaikan seluruh sistem desain Anda dari satu file.

## Keterbatasan dan Catatan

- Tema dibuat kerangkanya di `/wp-content/themes/` dan harus mengikuti konvensi penamaan WordPress
- Aktivasi memerlukan izin yang sesuai di situs WordPress Anda
- Kode PHP kustom dalam tema sangat minimal; gunakan *plugin* untuk fungsionalitas yang kompleks
- *Block theme* bekerja paling baik dengan WordPress 5.9 dan yang lebih baru

## Pemecahan Masalah

**Tema tidak muncul setelah membuat kerangka**
- Verifikasi bahwa direktori tema ada dan memiliki izin yang benar
- Periksa bahwa `theme.json` adalah JSON yang valid
- Pastikan nama tema tidak bentrok dengan tema yang sudah ada

**Aktivasi gagal**
- Konfirmasi bahwa Anda memiliki izin administrator
- Periksa bahwa direktori tema dapat dibaca oleh WordPress
- Tinjau *error log* WordPress untuk detailnya

**Design tokens tidak diterapkan**
- Verifikasi sintaks `theme.json` sudah benar
- Hapus *caching* dari *plugin* *caching* apa pun
- Periksa bahwa versi WordPress Anda mendukung *token* yang Anda gunakan

## Langkah Selanjutnya

Setelah mengaktifkan tema Anda, Anda dapat:
- Menggunakan **Design System Aesthetics skill** untuk menyempurnakan tipografi, warna, dan spasi
- Mengkustomisasi gaya *block* individual melalui *block editor* WordPress
- Menambahkan CSS kustom di file `style.css` tema
- Membuat *block template* kustom untuk jenis halaman tertentu
