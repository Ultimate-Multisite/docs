---
title: Buat Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Membuat Menu

Fitur **Membuat Menu** memungkinkan pembuatan menu navigasi WordPress dengan dukungan label navigasi yang berbeda dari judul halaman.

## Gambaran Umum {#overview}

Fitur ini memperluas fungsi pembuatan menu standar dengan kemampuan untuk menentukan parameter `navigation_label`. Ini memungkinkan Anda membuat menu di mana label yang ditampilkan di navigasi berbeda dari judul halaman, sehingga memberikan fleksibilitas lebih dalam struktur situs dan pengalaman pengguna.

## Parameter {#parameters}

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|----------|-------------|
| `name` | string | Ya | Nama menu, contoh: `Navigasi Utama` |
| `location` | string | Tidak | Lokasi tema untuk menetapkan menu ini, contoh: `primary` |
| `navigation_label` | string | Tidak | Label yang akan ditampilkan di navigasi (berbeda dari judul halaman) |

## Nilai Kembalian (Return Value) {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Label Navigasi vs Judul Halaman {#navigation-label-vs-page-title}

Parameter `navigation_label` memungkinkan Anda memisahkan nama menu internal dari label yang ditampilkan kepada pengguna:

- **`name`** — Pengenal menu internal yang digunakan oleh WordPress (contoh: "Primary Navigation")
- **`navigation_label`** — Label yang ditampilkan kepada pengunjung situs di navigasi (contoh: "Main Menu")

Ini berguna ketika:
- Konvensi penamaan internal Anda berbeda dari label yang dilihat pengguna
- Anda menginginkan label yang lebih pendek di navigasi dibandingkan di panel admin
- Anda perlu mendukung banyak bahasa dengan panjang label yang berbeda
- Anda sedang membuat menu untuk wilayah atau grup pengguna tertentu

## Contoh Penggunaan {#usage-examples}

### Contoh 1: Menu Sederhana dengan Label Navigasi {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Buat menu navigasi utama bernama "Main Navigation" dengan label navigasi "Menu".
```

**Hasil:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Contoh 2: Menu untuk Lokasi Tema Tertentu {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Buat menu footer bernama "Footer Links" dengan label navigasi "Quick Links" dan tetapkan ke lokasi footer.
```

**Hasil:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrasi dengan Theme Builder {#integration-with-theme-builder}

Saat menggunakan Theme Builder, fitur Membuat Menu:

1. Secara otomatis mendeteksi lokasi menu tema yang tersedia
2. Membuat menu dengan label navigasi yang sesuai untuk desain Anda
3. Menetapkan menu ke lokasi tema yang benar
4. Mendukung penambahan item menu setelah pembuatan

## Fitur Terkait {#related-abilities}

- **`add_menu_item`** — Menambahkan item ke menu yang sudah ada
- **`update_menu`** — Mengganti nama menu atau menetapkannya kembali ke lokasi tema
- **`delete_menu`** — Menghapus menu dari situs Anda

## Praktik Terbaik {#best-practices}

- **Gunakan label navigasi yang jelas** — jaga agar label tetap ringkas dan deskriptif untuk pengguna
- **Sesuaikan lokasi tema** — tetapkan menu ke lokasi tema yang benar agar tampil dengan baik
- **Rencanakan struktur menu** — putuskan hierarki menu Anda sebelum membuat item
- **Uji responsivitas** — verifikasi menu ditampilkan dengan benar di perangkat seluler
- **Lokalisisasi label** — gunakan label navigasi yang berbeda untuk versi bahasa yang berbeda

## Keterbatasan {#limitations}

- Label navigasi hanya untuk tampilan; `name` internal tetap digunakan untuk identifikasi WordPress
- Dukungan tema bervariasi; tidak semua tema mendukung semua lokasi menu
- Item menu harus ditambahkan secara terpisah setelah pembuatan menu
- Mengubah label navigasi memerlukan pembaruan menu

## Fitur Terkait {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — membuat logo untuk header situs Anda
- [Validate Palette Contrast](./validate-palette-contrast.md) — memastikan skema warna yang mudah diakses
