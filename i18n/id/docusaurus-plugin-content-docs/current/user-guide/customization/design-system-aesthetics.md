---
title: Keterampilan Estetika Sistem Desain
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Keahlian Estetika Design System

**Keahlian Estetika Design System** adalah pendekatan terpandu untuk menyempurnakan identitas visual situs Anda. Keahlian ini membantu Anda membuat keputusan yang konsisten mengenai tipografi, warna, spasi, dan *motion tokens* yang mendefinisikan *design system* Anda.

## Apa itu Estetika Design System? {#what-is-design-system-aesthetics}

Design System Aesthetics adalah keahlian terstruktur yang mencakup:

- **Tipografi**: Keluarga font, ukuran, ketebalan (*weight*), dan tinggi baris (*line height*)
- **Warna**: Palet warna utama (*primary*), sekunder (*secondary*), aksen (*accent*), dan netral
- **Spasi**: Skala *padding*, *margin*, dan *gap*
- **Batas (*Borders*)**: *Radius* dan *width tokens*
- **Bayangan (*Shadows*)**: *Elevation* dan *depth tokens*
- **Gerakan (*Motion*)**: Animasi dan transisi

Keputusan-keputusan ini dicatat dalam file `theme.json` tema Anda, menciptakan sistem visual yang kohesif.

## Mengapa Menggunakan Estetika Design System? {#why-use-design-system-aesthetics}

### Konsistensi {#consistency}

Sebuah *design system* memastikan:

- Semua teks menggunakan skala tipografi yang sama
- Warna digunakan secara konsisten di seluruh situs Anda
- Spasi mengikuti pola yang dapat diprediksi
- Animasi terasa seragam

### Efisiensi {#efficiency}

Daripada membuat keputusan desain halaman demi halaman, Anda:

- Mendefinisikan *tokens* sekali
- Menerapkannya di mana saja
- Memperbarui secara global hanya dengan mengubah satu nilai

### Fleksibilitas {#flexibility}

Anda dapat:

- Menyesuaikan seluruh *design system* Anda dengan cepat
- Bereksperimen dengan estetika yang berbeda
- Mempertahankan konsistensi merek sambil terus berkembang

## Memicu Keahlian Estetika Design System {#triggering-the-design-system-aesthetics-skill}

### Aktivasi Manual {#manual-activation}

Anda dapat memulai keahlian ini kapan saja:

```
"Bantu saya menyempurnakan design system saya"
```

atau

```
"Mari tingkatkan estetika situs saya"
```

atau

```
"Pandu saya melalui keputusan design system"
```

### Saran Otomatis {#automatic-suggestions}

Agen mungkin menyarankan penggunaan keahlian ini ketika Anda:

- Meminta perubahan desain
- Meminta desain ulang yang "modern" atau "profesional"
- Ingin meningkatkan konsistensi visual
- Bersiap untuk meluncurkan situs Anda

## Proses Estetika Design System {#the-design-system-aesthetics-process}

### Langkah 1: Tipografi {#step-1-typography}

Agen akan menanyakan tentang pilihan font Anda:

```
Apa gaya tipografi pilihan Anda?
- Serif (tradisional, elegan)
- Sans-serif (modern, bersih)
- Monospace (teknis, fokus kode)

Untuk font judul Anda:
- Apakah Anda ingin font judul yang berbeda, atau menggunakan yang sama dengan teks isi?
- Preferensi: tebal (*bold*), elegan, ceria, minimalis?

Untuk font isi Anda:
- Keterbacaan adalah kuncinya. Apakah Anda lebih suka:
  - Teks yang lebih besar dan lapang
  - Teks yang ringkas dan efisien
  - Ukuran standar
```

Agen kemudian akan mendefinisikan:

- **Font judul**: Font utama untuk judul dan *heading*
- **Font isi**: Font untuk paragraf dan teks isi
- **Font monospace**: Font untuk kode dan konten teknis
- **Skala ukuran (*Size scale*)**: Ukuran yang sudah ditentukan (kecil, dasar, besar, XL, dll.)
- **Skala ketebalan (*Weight scale*)**: Ketebalan font (reguler, medium, bold, dll.)
- **Tinggi baris (*Line height*)**: Jarak antar baris untuk keterbacaan

### Langkah 2: Palet Warna {#step-2-color-palette}

```
Mari kita definisikan palet warna Anda.

Warna utama (*Primary color*) (warna merek Anda):
- Saat ini: [menampilkan warna yang ada]
- Ubah ke: [pemilih warna atau kode hex]

Warna sekunder (*Secondary color*) (warna pendukung):
- Saat ini: [menampilkan warna yang ada]
- Ubah ke: [pemilih warna atau kode hex]

Warna aksen (*Accent color*) (sorotan dan CTA):
- Saat ini: [menampilkan warna yang ada]
- Ubah ke: [pemilih warna atau kode hex]

Palet netral (abu-abu untuk teks, batas, latar belakang):
- Terang (*Light*): [warna]
- Sedang (*Medium*): [warna]
- Gelap (*Dark*): [warna]
```

Agen membuat palet lengkap termasuk:

- Warna utama, sekunder, dan aksen
- Abu-abu netral (terang, sedang, gelap)
- Warna semantik (sukses, peringatan, error)
- Status *hover* dan aktif

### Langkah 3: Spasi {#step-3-spacing}

```
Berapa banyak ruang bernapas yang Anda inginkan?

Preferensi skala spasi:
- Ringkas (*Compact*) (tata letak yang rapat, efisien)
- Normal (spasi yang seimbang)
- Lapang (*Spacious*) (ruang kosong yang luas)

Ini memengaruhi:
- Padding di dalam tombol dan kartu
- Margin antar bagian
- Gap antar item *grid*
```

Agen mendefinisikan *spacing tokens*:

- Unit dasar (biasanya 4px atau 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Nilai spesifik untuk *padding*, *margin*, *gap*

### Langkah 4: Batas dan Bayangan {#step-4-borders-and-shadows}

```
Kedalaman dan definisi visual:

Preferensi radius batas (*Border radius*):
- Tajam (tanpa pembulatan)
- Halus (*Subtle*) (radius kecil)
- Membulat (*Rounded*) (radius sedang)
- Sangat membulat (*Very rounded*) (radius besar)

Kedalaman bayangan (*Shadow depth*):
- Datar (*Flat*) (tanpa bayangan)
- Halus (*Subtle*) (bayangan ringan)
- Menonjol (*Pronounced*) (bayangan kuat)
```

Agen membuat:

- *Tokens* radius batas (untuk tombol, kartu, input)
- *Tokens* bayangan untuk tingkat elevasi
- *Tokens* lebar batas

### Langkah 5: Gerakan dan Animasi {#step-5-motion-and-animation}

```
Bagaimana situs Anda seharusnya terasa saat interaktif?

Preferensi animasi:
- Minimal (tanpa animasi)
- Halus (*Subtle*) (transisi lembut)
- Ceria (*Playful*) (animasi yang terlihat)

Animasi spesifik:
- Transisi halaman: memudar (*fade*), meluncur (*slide*), atau tidak sama sekali?
- *Hover* tombol: skala, perubahan warna, atau keduanya?
- Status pemuatan: *spinner*, *skeleton*, atau bilah kemajuan (*progress bar*)?
```

Agen mendefinisikan:

- Durasi transisi (cepat, normal, lambat)
- Fungsi *easing* (ease-in, ease-out, ease-in-out)
- *Keyframes* animasi untuk interaksi umum

## Menerapkan Estetika Design System {#applying-design-system-aesthetics}

### Penerapan Otomatis {#automatic-application}

Setelah Anda menyelesaikan keahlian ini, agen:

1. Memperbarui `theme.json` tema Anda dengan semua *tokens*
2. Menerapkan *design system* ke tema aktif Anda
3. Meregenerasi gaya blok agar sesuai dengan sistem baru
4. Mengaktifkan tema yang diperbarui

### Penerapan Manual {#manual-application}

Anda juga dapat mengedit `theme.json` secara langsung:

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

## Melihat Design System Anda {#viewing-your-design-system}

### Tanya Agen {#ask-the-agent}

```
"Tunjukkan design system saya"
```

atau

```
"Apa saja design tokens saya saat ini?"
```

Agen akan menampilkan tipografi, warna, spasi, dan *tokens* lainnya.

### Lihat theme.json {#view-themejson}

Buka `/wp-content/themes/[nama-tema]/theme.json` di editor teks untuk melihat definisi *token* mentah.

## Memperbarui Design System Anda {#updating-your-design-system}

### Pembaruan Cepat {#quick-updates}

Minta agen untuk perubahan spesifik:

```
"Buat warna utama lebih gelap"
```

atau

```
"Tingkatkan skala spasi sebesar 20%"
```

atau

```
"Ubah font judul menjadi serif"
```

### Desain Ulang Penuh {#full-redesign}

Jalankan kembali keahlian Estetika Design System:

```
"Mari desain ulang seluruh design system saya"
```

Ini akan memandu Anda melalui semua keputusan lagi, dimulai dari nilai Anda saat ini.

### Pembaruan Parsial {#partial-updates}

Perbarui aspek tertentu:

```
"Hanya perbarui palet warna, biarkan sisanya"
```

## Praktik Terbaik Design System {#design-system-best-practices}

### Konsistensi {#consistency-1}

- Gunakan *tokens* yang sama di mana saja
- Jangan membuat warna atau ukuran yang hanya sekali pakai
- Merujuk pada *tokens* daripada *hardcoding* nilai

### Penamaan {#naming}

Gunakan nama yang jelas dan semantik:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalabilitas {#scalability}

Rancang sistem Anda agar dapat diskalakan:

- Gunakan unit relatif (rem, em) daripada piksel
- Buat skala (xs, sm, md, lg, xl) daripada nilai sembarang
- Rencanakan penambahan di masa depan

### Dokumentasi {#documentation}

Dokumentasikan *design system* Anda:

- Mengapa Anda memilih warna tertentu
- Kapan menggunakan setiap *token*
- Pengecualian dan kasus tepi

## Pola Design System Umum {#common-design-system-patterns}

### Minimalis Modern {#modern-minimalist}

- Tipografi sans-serif (Inter, Helvetica)
- Palet warna terbatas (2-3 warna)
- Spasi yang lapang
- Bayangan halus
- Animasi yang mulus dan cepat

### Hangat dan Ramah {#warm-and-friendly}

- Campuran serif dan sans-serif
- Palet warna hangat (oranye, abu-abu hangat)
- Sudut membulat
- Bayangan lembut
- Animasi ceria

### Korporat Profesional {#professional-corporate}

- Sans-serif bersih (Roboto, Open Sans)
- Palet netral dengan warna aksen
- Spasi terstruktur
- Bayangan minimal
- Transisi halus

### Kreatif dan Berani {#creative-and-bold}

- Tipografi khas
- Palet warna berani
- Spasi bervariasi
- Bayangan kuat
- Animasi yang terlihat

## Pemecahan Masalah (*Troubleshooting*) {#troubleshooting}

**Perubahan design system saya tidak terlihat**
- Bersihkan *cache* peramban Anda
- Bangun ulang situs Anda jika menggunakan *static generator*
- Periksa apakah `theme.json` adalah JSON yang valid
- Verifikasi bahwa tema sedang aktif

**Warna terlihat berbeda di halaman yang berbeda**
- Periksa CSS yang bertentangan di *plugin*
- Verifikasi bahwa semua halaman menggunakan tema yang sama
- Bersihkan *caching plugin* apa pun

**Saya ingin kembali ke design system sebelumnya**
- Tanyakan pada agen: "Tunjukkan riwayat design system saya"
- Edit `theme.json` secara manual ke nilai sebelumnya
- Jalankan kembali keahlian dengan pilihan yang berbeda

## Langkah Selanjutnya {#next-steps}

Setelah mendefinisikan *design system* Anda:

1. **Tinjau situs Anda**: Kunjungi situs Anda untuk melihat desain baru
2. **Sempurnakan lebih lanjut**: Lakukan penyesuaian menggunakan keahlian ini lagi
3. **Buat *template***: Bangun *template* blok kustom menggunakan *design tokens* Anda
4. **Dokumentasikan**: Bagikan *design system* Anda dengan anggota tim
