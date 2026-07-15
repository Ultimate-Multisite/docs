---
title: Kemampuan Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Kemampuan Theme Builder: Membuat Kerangka dan Mengaktifkan Block Themes

Superdav AI Agent v1.12.0 ngeniake rong kemampuan gedhe sing bisa mbok gawe lan pasang custom block themes langsung saka antarmuka obrolan.

## Gambaran Umum {#overview}

Kemampuan **scaffold-block-theme** lan **activate-theme** ngidini agent kanggo:
- Gawe theme block lengkap sing siap produksi adhedhasar panemu sampeyan
- Otomatis ngaktifake theme ing situsmu tanpa perlu intervensi manual
- Nggawe identitas visual sing nyambung liwat keputusan desain sing dipandu

## Scaffold Block Theme {#scaffold-block-theme}

Kemampuan **scaffold-block-theme** nggawé tema block WordPress anyar kanthi struktur tema lengkap, kalebu:

- konfigurasi `theme.json` karo design tokens
- file template Block kanggo tata letak umum
- gaya lan variasi block kustom
- metadata tema lan deklarasi dukungan

### Cara Ngajak (Invoke) {#how-to-invoke}

Ing obrolanmu karo Superdav AI Agent, sampeyan bisa njaluk pembuatan tema:

```
"Gawe theme block jenenge 'Modern Agency' nganggo skema warna biru lan putih,
tipografi sans-serif, lan tata letak profesional"
```

Agent bakal:
1. Ngumpulake panemu desainmu liwat obrolan
2. Nggawé struktur tema lengkap
3. Gawe kabeh file tema sing dibutuhake
4. Nyiapake tema kanggo diaktifake

### Hasil Sing Diprediksi (Expected Output) {#expected-output}

Nalika kemampuan iki eksekusi kanthi sukses, sampeyan bakal weruh:

- Konfirmasi yen theme wis di-scaffold
- Jeneng lan lokasi temane
- Ringkesan design tokens sing dipasang (warna, tipografi, spacing)
- Status siap diaktifake

Conto hasil:
```
✓ Theme "Modern Agency" di-scaffold kanthi sukses
  Lokasi: /wp-content/themes/modern-agency/
  Warna: Primary #0066CC, Secondary #FFFFFF
  Tipografi: Inter (sans-serif)
  Status: Siap diaktifake
```

## Aktifkan Theme {#activate-theme}

Kemampuan **activate-theme** iku kanggo ganti situsmu menyang tema block sing wis digawe ulang utawa sing wis ana.

### Cara Ngajak (Invoke) {#how-to-invoke-1}

Sawise nggawe scaffold tema, sampeyan bisa langsung ngaktifake:

```
"Aktifke tema Modern Agency"
```

Utawa aktifake tema sing wis ana:

```
"Ganti menyang tema Twentytwentyfour"
```

### Hasil Sing Diwatesi (Expected Output) {#expected-output-1}

Nalika aktivasi sukses:

- Konfirmasi tema sing lagi aktif
- Jeneng tema sadurunge (kanggo referensi)
- URL situs papan panggonan tema saiki
- Cathet khusus spesifik tema

Conto hasil:
```
✓ Tema berhasil diaktifkan
  Tema Aktif: Modern Agency
  Tema Sebelumnya: Twentytwentyfour
  Aktif ing: https://yoursite.com
  Catatan: Cek homepage sampeyan kanggo verifikasi tata letak
```

## Alur Kerja: Scaffold lan Aktifke (Workflow: Scaffold and Activate) {#workflow-scaffold-and-activate}

Alur kerja lumrah gabungake kemampuan loro iki:

1. **Minta pembuatan tema**: "Gawe tema block kanggo landing page SaaS-ku"
2. **Agent nggawe scaffold tema**: Ngasilake file lan design tokens
3. **Tinjau lan rapii (Review and refine)**: Diskusi perubahan desain yen perlu
4. **Aktifke**: "Aktifke temane saiki"
5. **Verifikasi**: Kunjungi situsmu kanggo mastiake desain anyar wis aktif

## Design Tokens lan Personalisasi (Design Tokens and Customization) {#design-tokens-and-customization}

Tema sing digawe ulang nggunakake WordPress design tokens (lewat `theme.json`) kanggo:

- **Warna (Colors)**: Palette primer, sekunder, aksen, netral
- **Tipografi (Typography)**: Keluarga font, ukuran, bobot, tinggi baris
- **Jarak (Spacing)**: Padding, margin, skala gap
- **Batas (Borders)**: Token radius lan lebar
- **Bayangan (Shadows)**: Tingkat elevasi

Token-token iki dikumpulake ing `theme.json`, dadi gampang kanggo ngatur sistem desain kabeh saka siji file.

## Batasan lan Cathet (Limitations and Notes) {#limitations-and-notes}

- Tema diatur (scaffolded) di `/wp-content/themes/` lan kudu manut aturan penamaan WordPress
- Aktivasi butuh izin sing pas kanggo situs WordPressmu
- Kode PHP kustom ing tema minimal; gunakna plugin kanggo fungsi sing rumit

## Troubleshooting {#troubleshooting}

**Tema ora muncul saatos diatur (scaffolding)**
- Cek yen direktori tema wis ana lan duwe izin sing bener
- Pastikan `theme.json` iku JSON sing bener
- Pastikan jeneng temane ora bentrok karo tema sing wis ana

**Aktivasi gagal**
- Konfirmasi yen sampeyan duwe izin administrator
- Cek yen direktori tema bisa dibaca dening WordPress
- Tinjau log error WordPress kanggo detail luwih jero

**Design tokens ora diterapkan**
- Pastikan sintaks `theme.json` iku bener
- Bersihkan plugin caching apa wae sing ana
- Cek yen versi WordPressmu ndukung token sing sampeyan gunakake

## Langkah Salajengipun {#next-steps}

Sawise mengaktifkan tema, sampeyan bisa:
- Gunakake **Design System Aesthetics skill** kanggo ngresiki tipografi, warna, lan jarak antar elemen (spacing)
- Sesuaikan gaya blok per blok liwat WordPress block editor
- Tambah CSS kustom ing file `style.css` tema

- Buat template blok kustom kanggo jenis halaman sing spesifik
