---
title: Validasi Kontras Palet
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validasi Kontras Palet {#validate-palette-contrast}

Fitur **Validasi Kontras Palet** memeriksa pasangan warna dalam palet desain Anda untuk memastikan kepatuhan terhadap WCAG (Web Content Accessibility Guidelines) sebelum diterapkan ke tema Anda.

## Gambaran Umum {#overview}

Fitur ini memastikan skema warna situs Anda memenuhi standar aksesibilitas dengan memvalidasi rasio kontras antara warna teks dan latar belakang. Ini membantu mencegah kombinasi warna yang mungkin sulit dibaca oleh pengguna dengan gangguan penglihatan.

## Format Input {#input-format}

Fitur ini menerima palet warna sebagai input:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parameter {#parameters}

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|----------|-------------|
| `colors` | array | Ya | Array objek warna dengan properti `name` dan `hex` |
| `wcag_level` | string | Tidak | Tingkat kepatuhan WCAG: "A", "AA" (default), atau "AAA" |
| `pairs_to_check` | array | Tidak | Pasangan warna spesifik yang akan divalidasi (misalnya, `["primary-text", "background-text"]`) |

## Tingkat WCAG yang Diperiksa {#wcag-levels-checked}

Fitur ini memvalidasi rasio kontras sesuai standar WCAG:

| Level | Teks Normal | Teks Besar | Rasio Minimum |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Teks Normal** — teks berukuran kurang dari 18pt (atau 14pt tebal)
- **Teks Besar** — teks berukuran 18pt atau lebih (atau 14pt tebal atau lebih)

## Skema Output {#output-schema}

Fitur ini mengembalikan laporan validasi terperinci:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Bidang Output {#output-fields}

| Field | Tipe | Deskripsi |
|-------|------|-------------|
| `compliant` | boolean | Apakah seluruh palet memenuhi tingkat WCAG yang ditentukan |
| `wcag_level` | string | Tingkat WCAG yang diperiksa |
| `pairs` | array | Hasil terperinci untuk setiap pasangan warna |
| `contrast_ratio` | number | Rasio kontras yang dihitung (1:1 hingga 21:1) |
| `status` | string | "pass" atau "fail" untuk setiap pasangan |
| `recommendations` | array | Saran untuk meningkatkan pasangan yang gagal |

## Contoh Penggunaan {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Hasil:**
Fitur ini memvalidasi semua kombinasi warna dan mengembalikan:
- ✅ Primary + Text: rasio 5.2:1 (lulus WCAG AA)
- ✅ Background + Text: rasio 12.1:1 (lulus WCAG AAA)
- Keseluruhan: Sesuai dengan WCAG AA

## Integrasi dengan Theme Builder {#integration-with-theme-builder}

Saat menggunakan pemilihan arah desain di Theme Builder, fitur Validasi Kontras Palet:

1. Menganalisis palet warna yang Anda pilih
2. Memeriksa semua kombinasi teks-latar belakang
3. Memvalidasi terhadap tingkat WCAG yang Anda pilih
4. Memberikan rekomendasi untuk pasangan yang tidak sesuai standar
5. Mencegah penerapan skema warna yang tidak dapat diakses

## Praktik Terbaik {#best-practices}

- **Mulai dengan tingkat AA** — WCAG AA adalah standar untuk sebagian besar situs web
- **Uji sebelum menerapkan** — validasi palet Anda sebelum berkomitmen pada desain
- **Periksa semua kombinasi** — pastikan teks, tautan, dan elemen UI semuanya memenuhi standar
- **Pertimbangkan preferensi pengguna** — beberapa pengguna mungkin memiliki sensitivitas warna tambahan
- **Gunakan pemeriksa kontras** — gabungkan fitur ini dengan alat browser untuk verifikasi

## Pasangan yang Gagal dan Rekomendasi {#failing-pairs-and-recommendations}

Jika pasangan warna gagal validasi, fitur ini akan memberikan rekomendasi:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Terangkan warna teks menjadi #ffffff (rasio akan menjadi 5.2:1)",
    "Gelapkan warna latar belakang menjadi #556b2f (rasio akan menjadi 4.8:1)",
    "Gunakan warna primer yang berbeda seperti #4a6b1f (rasio akan menjadi 6.1:1)"
  ]
}
```

## Fitur Terkait {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — buat logo dengan palet warna Anda yang sudah divalidasi
- [Create Menu](./create-menu.md) — bangun navigasi dengan warna yang mudah diakses
