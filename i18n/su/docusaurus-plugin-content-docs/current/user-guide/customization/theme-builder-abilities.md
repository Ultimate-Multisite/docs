---
title: Kamampuh Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Kemampuan Theme Builder: Scaffold dan Aktifkan Block Themes

Superdav AI Agent v1.12.0 ngajang dua kemampuan ampuh anu bisa ngabantu anjeun nyiptake je ngalaksanake block theme kustom langsung tina antarmuka obrolan (chat).

## Gambaran Umum

Kemampuan **scaffold-block-theme** je **activate-theme** ngabantu agen pikeun:
- Ngajoréng block theme anu siap diproduksi dumasar kana panangtayangan anjeun
- Otomatis ngalaksanake (activate) theme dina situs anjeun tanpa perlu intervensi manual
- Ngadamel identitas visual anu nyambung liwat keputusan desain anu dibimbing

## Scaffold Block Theme

Kemampuan **scaffold-block-theme** bakal ngajoréng block theme WordPress anyar kalayan struktur theme anu lengkep, kaasup:

- konfigurasi `theme.json` je design tokens
- file template blok pikeun tata letak umum
- gaya je variasi blok kustom
- metadata theme je deklarasi dukungan

### Kumaha Cara Ngagunake (How to Invoke)

Dina obrolan anjeun je Superdav AI Agent, anjeun bisa ngarepkeun pembuatan theme:

```
"Buat block theme anu ngaranna 'Modern Agency' kalayan skema warna biru je putih,
tipografi sans-serif, sarta tata letak profesional"
```

Agen bakal:
1. Ngumpulkeun pamilihan desain anjeun liwat obrolan
2. Ngajoréng struktur theme anu lengkep
3. Ngadamel sakabéh file theme anu peryogi
4. Nyiapkeun theme pikeun diaktifkeun

### Hasil Anu Diprediksi (Expected Output)

Lamun kemampuan éta lumangsung kalayan hadé, anjeun bakal ningali:

- Konfirmasi yén theme geus di-*scaffold*
- Ngaran je lokasi theme
- Ringkesan design tokens anu dipaké (warna, tipografi, spacing)
- Status siap diaktifkeun

Contona hasil outputna:
```
✓ Theme "Modern Agency" geus di-*scaffold* kalayan hadé
  Lokasi: /wp-content/themes/modern-agency/
  Warna: Primary #0066CC, Secondary #FFFFFF
  Tipografi: Inter (sans-serif)
  Status: Siap diaktifkeun
```

## Aktifkan Theme

Kemampuan **activate-theme** akan ganti situs kamu ke tema blok yang baru dibuat atau yang sudah ada.

### Cara Menggunakan

Setelah membuat (scaffolding) tema, kamu bisa langsung mengaktifkannya:

```
"Aktifkan tema Modern Agency"
```

Atau aktifkan tema yang sudah ada:

```
"Ganti ke tema Twentytwentyfour"
```

### Hasil yang Diharapkan

Saat aktivasi berhasil:

- Konfirmasi tema yang sedang aktif
- Nama tema sebelumnya (untuk referensi)
- URL situs tempat tema sekarang berjalan
- Catatan pengaturan spesifik tema

Contoh hasil:
```
✓ Tema berhasil diaktifkan
  Tema Aktif: Modern Agency
  Tema Sebelumnya: Twentytwentyfour
  Berjalan di: https://yoursite.com
  Catatan: Cek halaman utama kamu untuk memastikan tata letaknya sudah benar
```

## Alur Kerja: Buat dan Aktifkan (Scaffold and Activate)

Alur kerja yang biasa menggabungkan kedua kemampuan ini:

1. **Minta pembuatan tema**: "Buatkan tema blok untuk landing page SaaS saya"
2. **Agent membuat kerangka tema**: Membuat file dan token desain
3. **Tinjau dan sempurnakan**: Diskusikan perubahan desain jika diperlukan
4. **Aktifkan**: "Aktifkan temanya sekarang"
5. **Verifikasi**: Kunjungi situs kamu untuk memastikan desain baru sudah tayang

## Design Tokens dan Kustomisasi

Tema yang dibuat (scaffolded themes) menggunakan design tokens WordPress (melalui `theme.json`) untuk:

- **Warna**: Palet utama, sekunder, aksen, netral
- **Tipografi**: Keluarga font, ukuran, ketebalan, tinggi baris
- **Jarak**: Padding, margin, skala gap
- **Batas (Borders)**: Token radius dan lebar
- **Bayangan (Shadows)**: Tingkat elevasi

Token-token ini dikumpulkan di `theme.json`, jadi gampang banget buat ngubah seluruh sistem desain kamu dari satu file saja.

## Batasan dan Catatan

- Tema diatur (scaffolded) di `/wp-content/themes/` dan kudu ngikuti aturan penamaan WordPress
- Aktivasi butuh izin yang pas di situs WordPress kamu
- Kode PHP kustom di tema itu minim; pakai plugin buat fungsi yang rumit

## Pemecahan Masalah (Troubleshooting)

**Tema teu muncul saatos diatur (scaffolding)**
- Cek apakah direktori tema aya jeung izinna bener
- Pastike `theme.json` itu JSON anu valid
- Pastike nama temana teu bentrok jeung tema anu geus aya

**Aktivasi gagal**
- Konfirmasi yén kamu punya izin admin
- Cek apakah direktori tema bisa dibaca ku WordPress
- Tingali log error WordPress pikeun rincianna

**Design tokens teu dipaké**
- Pastike sintaks `theme.json` bener
- Hapus plugin caching anu aya
- Cek yén versi WordPress kamu ngajak token anu lagi dipaké

## Langkah Salajengna (Next Steps)

Sanggeus mengaktifkan tema, kamu bisa:
- Pakai **Design System Aesthetics skill** pikeun ngatur ulang tipografi, warna, jeung jarak antar elemen
- Kustomisasi gaya blok individual ngaliwatan WordPress block editor
- Tambah CSS kustom di file `style.css` tema
- Bikin template blok kustom pikeun tipe halaman anu spesifik
