---
title: Buat Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Cipta Menu {#create-menu}

Keupayaan **Cipta Menu** membolehkan anda mencipta menu navigasi WordPress dengan sokongan untuk label navigasi yang berbeza daripada tajuk halaman.

## Gambaran Keseluruhan {#overview}

Keupayaan ini memperluaskan fungsi penciptaan menu standard dengan keupayaan untuk menetapkan parameter `navigation_label`. Ini membolehkan anda mencipta menu di mana label yang dipaparkan dalam navigasi berbeza daripada tajuk halaman, memberikan fleksibiliti yang lebih besar dalam struktur tapak dan pengalaman pengguna.

## Parameter {#parameters}

| Parameter | Jenis | Wajib | Penerangan |
|-----------|------|----------|-------------|
| `name` | string | Ya | Nama menu, cth: `Navigasi Utama` |
| `location` | string | Tidak | Lokasi tema untuk menetapkan menu ini, cth: `primary` |
| `navigation_label` | string | Tidak | Label untuk dipaparkan dalam navigasi (berbeza daripada tajuk halaman) |

## Nilai Pulangan {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Label Navigasi vs Tajuk Halaman {#navigation-label-vs-page-title}

Parameter `navigation_label` membolehkan anda memisahkan nama menu dalaman daripada label yang dipaparkan kepada pengguna:

- **`name`** — Pengenal menu dalaman yang digunakan oleh WordPress (cth., "Primary Navigation")
- **`navigation_label`** — Label yang dipaparkan kepada pelawat tapak dalam navigasi (cth., "Main Menu")

Ini berguna apabila:
- Konvensyen penamaan dalaman anda berbeza daripada label yang dilihat pengguna
- Anda mahukan label yang lebih pendek dalam navigasi berbanding di panel pentadbir
- Anda perlu menyokong pelbagai bahasa dengan panjang label yang berbeza
- Anda membina menu untuk kawasan atau kumpulan pengguna tertentu

## Contoh Penggunaan {#usage-examples}

### Contoh 1: Menu Ringkas dengan Label Navigasi {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
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
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
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

Apabila menggunakan Theme Builder, keupayaan Cipta Menu:

1. Secara automatik mengesan lokasi menu tema yang tersedia
2. Mencipta menu dengan label navigasi yang sesuai untuk reka bentuk anda
3. Menetapkan menu ke lokasi tema yang betul
4. Menyokong penambahan item menu selepas penciptaan

## Keupayaan Berkaitan {#related-abilities}

- **`add_menu_item`** — Tambah item ke menu sedia ada
- **`update_menu`** — Tukar nama menu atau tetapkan semula ke lokasi tema
- **`delete_menu`** — Buang menu dari tapak anda

## Amalan Terbaik {#best-practices}

- **Gunakan label navigasi yang jelas** — pastikan label ringkas dan deskriptif untuk pengguna
- **Padankan lokasi tema** — tetapkan menu ke lokasi tema yang betul untuk paparan yang sempurna
- **Rancang struktur menu** — putuskan hierarki menu anda sebelum mencipta item
- **Uji responsif** — sahkan menu dipaparkan dengan betul pada peranti mudah alih
- **Lokalikan label** — gunakan label navigasi yang berbeza untuk versi bahasa yang berbeza

## Batasan {#limitations}

- Label navigasi hanya untuk paparan; `name` dalaman masih digunakan untuk pengenalan WordPress
- Sokongan tema berbeza-beza; tidak semua tema menyokong semua lokasi menu
- Item menu mesti ditambah secara berasingan selepas menu dicipta
- Mengubah label navigasi memerlukan kemas kini menu

## Keupayaan Berkaitan {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — cipta logo untuk tajuk tapak anda
- [Validate Palette Contrast](./validate-palette-contrast.md) — pastikan skema warna boleh diakses
