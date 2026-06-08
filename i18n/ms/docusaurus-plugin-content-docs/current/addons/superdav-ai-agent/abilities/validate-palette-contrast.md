---
title: Sahkan Kontras Palet
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Sahkan Kontras Palet

Keupayaan **Sahkan Kontras Palet** menyemak pasangan warna dalam palet reka bentuk anda untuk pematuhan WCAG (Garis Panduan Kebolehcapaian Kandungan Web) sebelum menerapkannya pada tema anda.

## Gambaran Keseluruhan

Keupayaan ini memastikan skema warna laman web anda memenuhi piawaian kebolehcapaian dengan menyahkan nisbah kontras antara warna teks dan latar belakang. Ia membantu mengelakkan gabungan warna yang mungkin sukar dibaca oleh pengguna dengan masalah penglihatan.

## Format Input

Keupayaan ini menerima palet warna sebagai input:

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

### Parameter

| Parameter | Jenis | Wajib | Penerangan |
|-----------|------|----------|-------------|
| `colors` | array | Ya | Array objek warna dengan sifat `name` dan `hex` |
| `wcag_level` | string | Tidak | Tahap pematuhan WCAG: "A", "AA" (lalai), atau "AAA" |
| `pairs_to_check` | array | Tidak | Pasangan warna spesifik untuk disahkan (cth., `["primary-text", "background-text"]`) |

## Tahap WCAG yang Disemak

Keupayaan ini menyahkan nisbah kontras mengikut piawaian WCAG:

| Tahap | Teks Normal | Teks Besar | Nisbah Minimum |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Teks Normal** — teks yang lebih kecil daripada 18pt (atau 14pt tebal)
- **Teks Besar** — teks 18pt atau lebih besar (atau 14pt tebal atau lebih besar)

## Skema Output

Keupayaan ini mengembalikan laporan pengesahan terperinci:

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

### Medan Output

| Medan | Jenis | Penerangan |
|-------|------|-------------|
| `compliant` | boolean | Sama ada keseluruhan palet memenuhi tahap WCAG yang ditetapkan |
| `wcag_level` | string | Tahap WCAG yang telah disemak |
| `pairs` | array | Keputusan terperinci untuk setiap pasangan warna |
| `contrast_ratio` | number | Nisbah kontras yang dikira (1:1 hingga 21:1) |
| `status` | string | "pass" atau "fail" untuk setiap pasangan |
| `recommendations` | array | Cadangan untuk meningkatkan pasangan yang gagal |

## Contoh Penggunaan

**Prompt:**
```
Sahkan sama ada palet warna saya memenuhi piawaian WCAG AA. Saya mempunyai warna utama #678233, warna teks #ffffff, dan latar belakang #f5f5f5.
```

**Hasil:**
Keupayaan ini menyahkan semua gabungan warna dan mengembalikan:
- ✅ Utama + Teks: Nisbah 5.2:1 (lulus WCAG AA)
- ✅ Latar Belakang + Teks: Nisbah 12.1:1 (lulus WCAG AAA)
- Keseluruhan: Mematuhi WCAG AA

## Integrasi dengan Theme Builder

Apabila menggunakan pemilihan arah reka bentuk (design-direction selection) Theme Builder, keupayaan Sahkan Kontras Palet:

1. Menganalisis palet warna yang anda pilih
2. Menyemak semua gabungan teks-latar belakang
3. Menyahkan mengikut tahap WCAG pilihan anda
4. Memberikan cadangan untuk pasangan yang tidak patuh
5. Mencegah penggunaan skema warna yang tidak boleh diakses

## Amalan Terbaik

- **Mulakan dengan tahap AA** — WCAG AA adalah standard untuk kebanyakan laman web
- **Uji sebelum menggunakan** — sahkan palet anda sebelum menetapkan reka bentuk
- **Semak semua gabungan** — pastikan teks, pautan, dan elemen UI semuanya memenuhi piawaian
- **Pertimbangkan keutamaan pengguna** — sesetengah pengguna mungkin mempunyai sensitiviti warna tambahan
- **Gunakan penyemak kontras** — gabungkan keupayaan ini dengan alat pelayar untuk pengesahan

## Pasangan yang Gagal dan Cadangan

Jika pasangan warna gagal pengesahan, keupayaan ini akan memberikan cadangan:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Terangkan warna teks kepada #ffffff (nisbah akan menjadi 5.2:1)",
    "Gelapkan warna latar belakang kepada #556b2f (nisbah akan menjadi 4.8:1)",
    "Gunakan warna utama yang berbeza seperti #4a6b1f (nisbah akan menjadi 6.1:1)"
  ]
}
```

## Keupayaan Berkaitan

- [Generate Logo SVG](./generate-logo-svg.md) — cipta logo dengan palet warna anda yang disahkan
- [Create Menu](./create-menu.md) — bina navigasi dengan warna yang boleh diakses
