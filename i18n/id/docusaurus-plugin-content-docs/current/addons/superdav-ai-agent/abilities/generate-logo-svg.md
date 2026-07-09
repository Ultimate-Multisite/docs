---
title: Hasilkan Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Membuat Logo SVG {#generate-logo-svg}

Kemampuan **Membuat Logo SVG** memungkinkan Theme Builder untuk membuat dan menyematkan logo SVG kustom langsung ke situs WordPress Anda dengan sanitasi otomatis yang aman dari *namespace*.

## Gambaran Umum {#overview}

Kemampuan ini menghasilkan logo *vector graphics* (SVG) yang dapat diskalakan berdasarkan arah *branding* dan preferensi desain situs Anda. SVG yang dihasilkan akan disanitasi secara otomatis untuk memastikan keamanannya saat digunakan di WordPress, sambil tetap mempertahankan integritas visualnya.

## Parameter {#parameters}

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|----------|-------------|
| `site_name` | string | Ya | Nama situs untuk pembuatan logo |
| `style` | string | Ya | Gaya desain (misalnya, "modern", "klasik", "minimalis", "ceria") |
| `colors` | array | Tidak | Array kode warna heksadesimal yang akan digunakan dalam logo (misalnya, `["#678233", "#ffffff"]`) |
| `width` | number | Tidak | Lebar SVG dalam piksel (default: 200) |
| `height` | number | Tidak | Tinggi SVG dalam piksel (default: 200) |
| `include_text` | boolean | Tidak | Apakah akan menyertakan nama situs sebagai teks dalam logo (default: true) |

## Format Output {#output-format}

Kemampuan ini mengembalikan *string* SVG dengan struktur berikut:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Perilaku Sanitasi SVG {#svg-sanitisation-behaviour}

SVG yang dihasilkan akan menjalani sanitasi otomatis yang aman dari *namespace* untuk:

- **Menghapus atribut yang tidak aman** — menghapus *event handler*, *script*, dan atribut yang berpotensi berbahaya
- **Mempertahankan *namespace*** — menjaga *namespace* SVG (xmlns, xlink) agar dapat dirender dengan benar
- **Memvalidasi struktur** — memastikan SVG sesuai dengan standar W3C
- **Mengkodekan entitas** — mengenkripsi karakter khusus dalam konten teks dengan benar
- **Menghapus referensi eksternal** — menghapus *stylesheet* dan referensi gambar eksternal

Ini memastikan SVG aman disematkan langsung di WordPress tanpa memerlukan sanitasi tambahan.

## Contoh Penggunaan {#usage-example}

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Hasil:**
Kemampuan ini membuat logo SVG yang:
- Menggabungkan nama situs "CloudSync"
- Menggunakan skema warna biru dan putih yang ditentukan
- Mengikuti prinsip desain modern
- Disanitasi secara otomatis dan siap digunakan

## Integrasi dengan Theme Builder {#integration-with-theme-builder}

Ketika menggunakan pemilihan arah desain dari Theme Builder, kemampuan Generate Logo SVG:

1. Menganalisis arah desain dan palet warna Anda
2. Menghasilkan logo SVG kustom yang sesuai dengan preferensi Anda
3. Secara otomatis menyematkan logo ke area *header*/branding situs Anda
4. Menyimpan SVG sebagai logo kustom di media WordPress

## Praktik Terbaik {#best-practices}

- **Berikan preferensi gaya yang jelas** — jelaskan gaya desain yang Anda inginkan (modern, klasik, ceria, dll.).
- **Tentukan warna** — sertakan warna merek Anda untuk konsistensi.
- **Uji tampilan** — verifikasi logo ditampilkan dengan benar di berbagai ukuran layar.
- **Kustomisasi lebih lanjut** — gunakan alat kustomisasi logo WordPress untuk menyesuaikan ukuran dan penempatan.

## Keterbatasan {#limitations}

- Logo SVG dihasilkan sebagai grafis statis (tidak animasi).
- Logo kompleks dengan banyak elemen mungkin memerlukan penyempurnaan manual.
- Font kustom tidak didukung; teks menggunakan *system fonts*.
- Dimensi yang sangat besar atau sangat kecil dapat memengaruhi kualitas.

## Kemampuan Terkait {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — periksa kontras warna untuk aksesibilitas
- [Create Menu](./create-menu.md) — buat menu navigasi untuk situs Anda
