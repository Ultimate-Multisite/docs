---
title: Keterampilan Estetika Sistem Desain
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Keterampilan Estetika Design System

**Keterampilan Estetika Design System** nya teh cara pandang yang dipandu pikeun ngarapi tampilan visual situs anjeun. Ieu ngabantosan anjeun mutuskeun hal-hal konsisten ngeunaan tipografi, warna, jarak (spacing), jeung token gerak (motion tokens) anu ngawangun design system anjeun.

## Naonna Design System Aesthetics?

Design System Aesthetics téh keterampilan terstruktur anu ngawengku:

- **Tipografi**: Keluarga font, ukuran, bobot (weight), jeung tinggi baris (line height)
- **Warna**: Palet utama (primary), sekunder (secondary), aksen (accent), jeung netral (neutral)
- **Jarak (Spacing)**: Padding, margin, jeung skala jarak antar elemen (gap scales)
- **Borders**: Token radius jeung lebar border
- **Bayangan (Shadows)**: Token elevasi jeung kedalaman (depth)
- **Gerak (Motion)**: Animasi jeung transisi

Keputusan-keputusan ieu dicatet dina file `theme.json` tema anjeun, ngajadikeun sistem visual anu padu.

## Kunaon Ngagunake Design System Aesthetics?

### Konsistensi

Design system ngajamin yén:

- Sakabé téks nganggo skala tipografi anu sarua
- Warna dipaké sacara konsisten di sakuliah situs anjeun
- Jarak (spacing) ngikut pola anu bisa diprediksi
- Animasi karasa padu

### Efisiensi

Alih-alih mutuskeun desain ti halaman ka halaman, anjeun:

- Ngadéfinisike token ngan sakali
- Nerapkeun éta di mana waé
- Ngabaharui sacara global ku ngarobah hiji nilai

### Fleksibilitas

Anjeun bisa:

- Ngatur sakuliah design system anjeun gancang
- Nyoba estetika anu béda-béda
- Ngajaga konsistensi brand bari terus maju (evolving)

## Ngajak Keterampilan Design System Aesthetics

### Aktivasi Manual

Anjeun bisa ngamimitian keterampilan ieu kapan waé:

```
"Tolong perbaiki design system saya"
```

atawa

```
"Mari tingkatkan estetika situs saya"
```

atawa

```
"Pandu saya ngarobah desain system"
```

### Saran Otomatis

Agen bisa ngajak anjeun ngagunake keterampilan ieu nalika anjeun:

- Nanya pikeun ganti desain
- Ngarepkeun desain ulang anu "modern" atawa "profesional"
- Hoyong ningkatkeun konsistensi visual
- Keur nyiapkeun peluncuran situs anjeun

## Proses Estetika Sistem Desain

### Langkah 1: Tipografi

Agen bakal nanya soal pilihan font kamu:

```
Bagaimana gaya tipografi yang kamu suka?
- Serif (tradisional, elegan)
- Sans-serif (modern, bersih)
- Monospace (teknis, fokus ke kode)

Untuk font judul kamu:
- Mau pakai font judul yang beda, atau pakai yang sama dengan teks biasa?
- Preferensi: tebal, elegan, ceria, minimalis?

Untuk font badan teks:
- Keterbacaan itu penting. Kamu lebih suka:
  - Teks yang lebih besar dan lapang
  - Teks yang ringkas dan efisien
  - Ukuran standar
```

Agen kemudian bakal mendefinisikan:

- **Font Judul (Heading font)**: Font utama buat judul dan heading
- **Font Badan Teks (Body font)**: Font buat paragraf dan teks biasa
- **Font Monospace (Monospace font)**: Font buat kode dan konten teknis
- **Skala Ukuran (Size scale)**: Ukuran yang sudah ditentukan (kecil, dasar/base, besar, XL, dll.)
- **Skala Ketebalan (Weight scale)**: Ketebalan font (reguler, medium, tebal, dll.)
- **Jarak Baris (Line height)**: Jarak antar baris biar gampang dibaca

### Langkah 2: Palet Warna

```
Yuk, kita tentukan palet warna kamu.

Warna Primer (warna brand kamu):
- Saat ini: [menampilkan warna yang ada]
- Ubah ke: [pemilih warna atau kode hex]

Warna Sekunder (warna pendukung):
- Saat ini: [menampilkan warna yang ada]
- Ubah ke: [pemilih warna atau kode hex]

Warna Aksen (untuk sorotan dan tombol CTA):
- Saat ini: [menampilkan warna yang ada]
- Ubah ke: [pemilih warna atau kode hex]

Palet Netral (abu-abu untuk teks, border, latar belakang):
- Terang (Light): [warna]
- Sedang (Medium): [warna]
- Gelap (Dark): [warna]
```

Agen bakal bikin palet lengkap yang meliputi:

- Warna primer, sekunder, dan aksen
- Abu-abu netral (terang, sedang, gelap)
- Warna semantik (sukses, peringatan, error)
- Status saat di-*hover* dan aktif

### Langkah 3: Spasi

Saha naon ruang napas anu anjeun hoyong?

Pilihan skala jarak (Spacing scale preference):
- Compact (layout leutik, éfisien)
- Normal (jarak seimbang)
- Spacious (ruang lega)

Ieu ngarék:
- Padding di jero tombol je kartu
- Margin antara bagian-bagian
- Jarak antar item grid

Si agen ngadéfinisike token jarak (spacing tokens):

- Unit dasar (biasana 4px atawa 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Nilai spesifik pikeun padding, margin, gap

### Langkah 4: Border je Bayangan (Borders and Shadows)

```
Kaliaksan je definisi visual:

Pilihan radius border:
- Sharp (teu aya pembulatan)
- Subtle (radius leutik)
- Rounded (radius sedang)
- Very rounded (radius gedé)

Kedalaman bayangan (Shadow depth):
- Flat (teu aya bayangan)
- Subtle (bayangan leutik)
- Pronounced (bayangan kuat)
```

Si agen ngabentuk:

- Border radius tokens (pikeun tombol, kartu, input)
- Shadow tokens pikeun tingkat élégan (elevation levels)
- Border width tokens

### Langkah 5: Gerakan je Animasi (Motion and Animation)

```
Kumaha tampilan situs anjeun lamun interaktif?

Pilihan animasi:
- Minimal (teu aya animasi)
- Subtle (transisi lemes)
- Playful (animasi anu katingali)

Animasi spesifik:
- Transisi halaman: fade, slide, atawa teu aya?
- Hover tombol: scale, ganti warna, atawa duana?
- Loading states: spinner, skeleton, atawa progress bar?
```

Si agen ngadéfinisike:

- Durasi transisi (gancang, normal, laun)
- Fungsi easing (ease-in, ease-out, ease-in-out)
- Keyframe animasi pikeun interaksi umum

## Ngagunake Estetika Design System

### Aplikasi Otomatis (Automatic Application)

Sanggeus anjeun réngsékeun skill ieu, si agen bakal:

1. Ngabaharuan `theme.json` tema anjeun jeung sakabéh token
2. Ngagunake design system kana tema anu aktif
3. Ngagédékeun deui gaya blok sangkan cocong jeung sistem anyar
4. Ngaktifkeun tema anu diupdate

### Aplikasi Manual (Manual Application)

Anjeun ogé bisa ngedit `theme.json` langsung:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Ngajéngan Sistem Desain Anjeun (Viewing Your Design System)

### Tanya Agenna (Ask the Agent)

```
"Tunjukkan sistem desain jeung abdi"
```

atawa

```
"Naon token desain abdi ayeuna?"
```

Agen bakal nunjukkeun tipografi, warna, jarak antar elemen (spacing), sareng token lianna.

### Tingali theme.json

Buka `/wp-content/themes/[theme-name]/theme.json` dina editor teks pikeun ningali definisi token anu asli.

## Ngabaharui Sistem Desain Anjeun (Updating Your Design System)

### Pembaruan Cepat (Quick Updates)

Tanya agenna kanggo ganti hal-hal husus:

```
"Ubah warna utama jadi leuwih gelap"
```

atawa

```
"Naikkeun skala jarak antar elemen ku 20%"
```

atawa

```
"Ganti font judul jadi serif"
```

### Desain Ulang Lengkep (Full Redesign)

Jalankeun deui skill Design System Aesthetics:

```
"Hayu urang desain ulang sistem desain abdi sapoe"
```

Ieu bakal ngararotkeun anjeun dina sadaya keputusan deui, dimimitian ku nilai ayeuna.

### Pembaruan Parsial (Partial Updates)

Baharui aspek-aspek husus:

```
"Cukup perbarui palet warna, sisake sakabéhna"
```

## Prakték Desain Sistem anu Hadé (Design System Best Practices)

### Konsistensi (Consistency)

- Gunake token anu sarua di mana waé.
- Tong nyieun warna atawa ukuran anu ngan ukur aya hiji.
- Rujuk kana token tibatan ngitung nilai langsung dina kode.

### Ngaran (Naming)

Gunakan nama anu jelas jeung hartina:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalabilitas (Scalability)

Rancang sistem Anda agar bisa berkembang (scale):

- Gunakan satuan relatif (rem, em) daripada piksel
- Buat skala (xs, sm, md, lg, xl) daripada nilai acak
- Rencanakan untuk penambahan di masa depan

### Dokumentasikan sistem desain Anda:

- Kenapa Anda memilih warna tertentu
- Kapan menggunakan setiap token
- Pengecualian dan kasus khusus (edge cases)

## Pola Desain Sistem Umum

### Modern Minimalis

- Tipografi sans-serif (Inter, Helvetica)
- Palet warna terbatas (2-3 warna)
- Jarak yang lega (generous spacing)
- Bayangan halus (subtle shadows)
- Animasi yang mulus dan cepat

### Hangat dan Ramah

- Campuran serif dan sans-serif
- Palet warna hangat (oranye, abu-abu hangat)
- Sudut yang membulat (rounded corners)
- Bayangan lembut (soft shadows)
- Animasi yang ceria (playful animations)

### Profesional Korporat

- Sans-serif yang bersih (Roboto, Open Sans)
- Palet netral dengan warna aksen
- Jarak yang terstruktur (structured spacing)
- Bayangan minimalis
- Transisi halus

### Kreatif dan Berani

- Tipografi yang khas (distinctive typography)
- Palet warna yang berani (bold color palette)
- Jarak yang bervariasi
- Bayangan yang kuat (strong shadows)
- Animasi yang mencolok (noticeable animations)

## Pemecahan Masalah (Troubleshooting)

**Perubahan sistem desain saya tidak muncul**
- Bersihkan cache browser Anda
- Bangun ulang situs Anda jika menggunakan static generator
- Periksa apakah theme.json valid JSON
- Verifikasi bahwa tema sudah aktif

**Warna terlihat berbeda di halaman yang berbeda**
- Periksa adanya CSS yang bertentangan di plugin
- Pastikan semua halaman menggunakan tema yang sama
- Bersihkan plugin caching apa pun

**Saya ingin kembali ke sistem desain sebelumnya**
- Tanyakan pada agen: "Tunjukkan riwayat sistem desain saya" (Show me my design system history)
- Edit manual theme.json ke nilai sebelumnya
- Jalankan lagi skill dengan pilihan yang berbeda

## Langkah Selanjutnya

Setelah mendefinisikan sistem desain Anda:

1. **Tinjau situs anjeun**: Datang ka situs anjeun pikeun ningali desain anyarana
2. **Perbaiki deui**: Lakukan penyesuaian deui nganggo kapabilitas (skill) anjeun
3. **Buat template**: Bangun template blok kustom nganggo design tokens anjeun
4. **Dokumentasi**: Bagike sistem desain anjeun ka anggota tim
