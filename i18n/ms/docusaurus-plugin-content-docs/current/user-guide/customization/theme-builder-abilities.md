---
title: Kebolehan Pembina Tema
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Keupayaan Theme Builder: Membina Rangka dan Mengaktifkan Block Theme {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 memperkenalkan dua keupayaan yang berkuasa yang membolehkan anda menjana dan menyebarkan *block theme* tersuai terus dari antara muka sembang.

## Gambaran Keseluruhan {#overview}

Keupayaan **scaffold-block-theme** dan **activate-theme** membolehkan agen untuk:
- Menjana *block theme* lengkap yang sedia untuk digunakan (production-ready) berdasarkan spesifikasi anda
- Mengaktifkan tema secara automatik pada laman web anda tanpa campur tangan manual
- Mencipta identiti visual yang padu melalui keputusan reka bentuk yang dibimbing

## Bina Rangka Block Theme (Scaffold Block Theme) {#scaffold-block-theme}

Keupayaan **scaffold-block-theme** menjana *block theme* WordPress baharu dengan struktur tema yang lengkap, termasuk:

- Konfigurasi `theme.json` dengan *design tokens*
- Fail templat blok untuk susun atur biasa
- Gaya dan variasi blok tersuai
- Metadata tema dan deklarasi sokongan

### Cara Memanggil {#how-to-invoke}

Dalam sembang anda dengan Superdav AI Agent, anda boleh meminta penjanaan tema:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agen akan:
1. Mengumpul pilihan reka bentuk anda melalui perbualan
2. Menjana struktur tema yang lengkap
3. Mencipta semua fail tema yang diperlukan
4. Menyediakan tema untuk diaktifkan

### Output Dijangka {#expected-output}

Apabila keupayaan ini berjaya dilaksanakan, anda akan melihat:

- Pengesahan bahawa tema telah dibina rangkanya (*scaffolded*)
- Nama dan lokasi tema
- Ringkasan *design tokens* yang digunakan (warna, tipografi, jarak)
- Status sedia untuk diaktifkan

Contoh output:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Aktifkan Tema (Activate Theme) {#activate-theme}

Keupayaan **activate-theme** menukar laman web anda kepada *block theme* baharu yang dibina rangkanya atau tema sedia ada.

### Cara Memanggil {#how-to-invoke-1}

Selepas membina rangka tema, anda boleh mengaktifkannya dengan serta-merta:

```
"Activate the Modern Agency theme"
```

Atau aktifkan mana-mana tema sedia ada:

```
"Switch to the Twentytwentyfour theme"
```

### Output Dijangka {#expected-output-1}

Apabila pengaktifan berjaya:

- Pengesahan tema yang aktif
- Nama tema sebelumnya (untuk rujukan)
- URL laman web di mana tema itu kini hidup
- Sebarang nota persediaan khusus tema

Contoh output:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Aliran Kerja: Bina Rangka dan Aktifkan {#workflow-scaffold-and-activate}

Aliran kerja tipikal menggabungkan kedua-dua keupayaan ini:

1. **Minta penjanaan tema**: "Create a block theme for my SaaS landing page"
2. **Agen membina rangka tema**: Menjana fail dan *design tokens*
3. **Semak dan perhalusi**: Bincangkan perubahan reka bentuk jika perlu
4. **Aktifkan**: "Activate the theme now"
5. **Sahkan**: Lawati laman web anda untuk mengesahkan reka bentuk baharu itu sudah hidup

## Design Tokens dan Penyesuaian {#design-tokens-and-customization}

Tema yang dibina rangkanya menggunakan *design tokens* WordPress (melalui `theme.json`) untuk:

- **Warna**: Palet utama (*primary*), sekunder (*secondary*), aksen (*accent*), neutral
- **Tipografi**: Keluarga fon, saiz, berat, ketinggian baris
- **Jarak**: Skala padding, margin, dan jurang (*gap*)
- **Sempadan**: Token radius dan lebar
- **Bayangan**: Tahap elevasi

Token-token ini disentralisasikan dalam `theme.json`, menjadikannya mudah untuk melaraskan keseluruhan sistem reka bentuk anda dari satu fail.

## Batasan dan Nota {#limitations-and-notes}

- Tema dibina rangkanya dalam `/wp-content/themes/` dan mesti mematuhi konvensyen penamaan WordPress
- Pengaktifan memerlukan kebenaran yang sesuai pada laman web WordPress anda
- Kod PHP tersuai dalam tema adalah minimum; gunakan *plugin* untuk fungsi yang kompleks
- *Block theme* berfungsi paling baik dengan WordPress 5.9 dan versi yang lebih baharu

## Penyelesaian Masalah {#troubleshooting}

**Tema tidak muncul selepas membina rangka**
- Sahkan direktori tema wujud dan mempunyai kebenaran yang betul
- Semak bahawa `theme.json` adalah JSON yang sah
- Pastikan nama tema tidak bercanggah dengan tema sedia ada

**Pengaktifan gagal**
- Sahkan anda mempunyai kebenaran pentadbir (*administrator*)
- Semak bahawa direktori tema boleh dibaca oleh WordPress
- Semak log ralat WordPress untuk butiran lanjut

**Design tokens tidak diaplikasikan**
- Sahkan sintaks `theme.json` adalah betul
- Kosongkan sebarang *caching plugin*
- Semak bahawa versi WordPress anda menyokong token yang anda gunakan

## Langkah Seterusnya {#next-steps}

Selepas mengaktifkan tema anda, anda boleh:
- Menggunakan kemahiran **Design System Aesthetics** untuk memperhalusi tipografi, warna, dan jarak
- Menyesuaikan gaya blok individu melalui editor blok WordPress
- Menambah CSS tersuai dalam fail `style.css` tema
- Mencipta templat blok tersuai untuk jenis halaman tertentu
