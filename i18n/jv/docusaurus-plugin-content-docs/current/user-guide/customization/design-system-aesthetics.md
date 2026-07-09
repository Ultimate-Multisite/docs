---
title: Keterampilan Estetika Sistem Desain
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Keterampilan Estetika Design System {#design-system-aesthetics-skill}

**Keterampilan Estetika Design System** iku cara pandang terarah kanggo ngresiki identitas visual situsmu. Iki mbantu sampeyan nggawe keputusan sing konsisten babagan tipografi, warna, jarak (spacing), lan *motion tokens* sing ndadekake desain sistemmu dadi siji.

## Apa kuwi Design System Aesthetics? {#what-is-design-system-aesthetics}

Design System Aesthetics iku keterampilan terstruktur sing ngliputi:

- **Tipografi**: Keluarga font, ukuran, bobot (*weights*), lan tinggi baris (*line heights*)
- **Warna**: Palet utama (*primary*), sekunder (*secondary*), aksen (*accent*), lan netral (*neutral*)
- **Jarak (Spacing)**: *Padding*, *margin*, lan skala jarak antar elemen
- **Batas (Borders)**: Token radius lan lebar
- **Bayangan (Shadows)**: Token elevasi lan kedalaman
- **Gerakan (Motion)**: Animasi lan transisi

Keputusan-keputusan iki direkam ing file `theme.json` tema sampeyan, nggawe sistem visual sing padu.

## Kenapa Nganggo Design System Aesthetics? {#why-use-design-system-aesthetics}

### Konsistensi {#consistency}

Sistem desain njamin:

- Kabeh teks nganggo skala tipografi sing padha
- Warna digunakake kanthi konsisten ing sak situsmu
- Jarak (spacing) manut pola sing bisa diprediksi
- Animasi krasa nyatu (*unified*)

### Efisiensi {#efficiency}

Tinimbang nggawe keputusan desain siji-siji per halaman, sampeyan:

- Nentokake *tokens* mung sekali
- Nerapake ing saben papan
- Ngupdate sacara global kanthi ngowahi siji nilai

### Fleksibilitas {#flexibility}

Sampeyan bisa:

- Ngatur kabeh desain sistemmu kanthi cepet
- Eksperimen karo estetika sing beda
- Njaga konsistensi merek nalika terus berkembang

## Memicu Keterampilan Design System Aesthetics {#triggering-the-design-system-aesthetics-skill}

### Aktivasi Manual {#manual-activation}

Sampeyan bisa miwiti keterampilan iki kapan wae:

```
"Tolong perbaiki desain sistem saya"
```

utawa

```
"Ayo tingkatkan estetika situs saya"
```

utawa

```
"Pandu saya nggawe keputusan design system"
```

### Saran Otomatis {#automatic-suggestions}

Agen bisa ngajak nggunakake keterampilan iki nalika sampeyan:

- Nyuwun perubahan desain
- Nyuwun desain ulang sing "modern" utawa "profesional"
- Pengin ningkatake konsistensi visual
- Lagi nyiapake peluncuran situsmu

## Proses Estetika Design System {#the-design-system-aesthetics-process}

### Langkah 1: Tipografi {#step-1-typography}

Agen bakal nanya soal pilihan font sampeyan:

```
Gaya tipografi apa yang paling diutamakan?
- Serif (tradisional, elegan)
- Sans-serif (modern, rapi)
- Monospace (teknis, fokus ke kode)

Untuk font judul (heading):
- Mau font judul yang beda dari teks biasa, atau pakai yang sama kayak teks badan?
- Preferensi: tebal, elegan, ceria, minimal?

Untuk font badan (body text):
- Keterbacaan itu penting. Lebih suka:
  - Teks lebih besar, jarak antar baris lebih lega
  - Teks ringkas, efisien
  - Ukuran standar
```

Terus agen bakal mendefinisikan:

- **Font Judul (Heading font)**: Font utama buat judul dan heading
- **Font Badan (Body font)**: Font kanggo paragraf lan teks biasa
- **Font Monospace**: Font kanggo kode lan konten teknis
- **Skala Ukuran (Size scale)**: Ukuran yang sudah ditentukan (kecil, dasar, besar, XL, lsp.)
- **Skala Ketebalan (Weight scale)**: Ketebalan font (reguler, medium, bold, lsp.)
- **Jarak Baris (Line height)**: Jarak antar baris kanggo keterbacaan

### Langkah 2: Palet Warna {#step-2-color-palette}

```
Yuk, kita tentukan palet warna.

Warna Primer (warna brand sampeyan):
- Saat ini: [menampilkan warna yang ada]
- Ubah ke: [pemilih warna atau kode hex]

Warna Sekunder (warna pendukung):
- Saat ini: [menampilkan warna yang ada]
- Ubah ke: [pemilih warna atau kode hex]

Warna Aksen (untuk sorotan dan tombol CTA):
- Saat ini: [menampilkan warna yang ada]
- Ubah ke: [pemilih warna atau kode hex]

Palet Netral (abu-abu untuk teks, border, background):
- Terang (Light): [warna]
- Sedang (Medium): [warna]
- Gelap (Dark): [warna]
```

Agen bakal bikin palet lengkap yang meliputi:

- Warna primer, sekunder, dan aksen
- Abu-abu netral (terang, sedang, gelap)
- Warna semantik (sukses, peringatan, error)
- Status hover dan aktif

Pripun ake kowe arep nggolek ruang (breathing room) kaya ngene?

Pilihan skala jarak (Spacing scale preference):
- Compact (layout sing padhet lan efisien)
- Normal (jarak sing seimbang)
- Spacious (ruang kosong sing jembar)

Iki bakal nggayah:
- Padding ing njero tombol lan card
- Margin antar bagian
- Jarak antar item grid

Agen iki ngapungake token jarak (spacing tokens):

- Unit dasar (biasane 4px utawa 8px)
- Skala: xs, sm, md, lg, xl, 2xl
- Nilai spesifik kanggo padding, margin, gap

### Langkah 4: Border lan Bayangan (Borders and Shadows) {#step-3-spacing}

```
Kedalaman visual lan wujud:

Pilihan radius border:
- Sharp (ora ana pembulatan)
- Subtle (radius cilik)
- Rounded (radius menengah)
- Very rounded (radius gedhe)

Kedalaman bayangan (Shadow depth):
- Flat (ora ana bayangan)
- Subtle (bayangan alit)
- Pronounced (bayangan kuat)
```

Agen iki bakal nggawe:

- Border radius tokens (kanggo tombol, card, input)
- Shadow tokens kanggo tingkat ketinggian (elevation levels)
- Border width tokens

### Langkah 5: Gerakan lan Animasi (Motion and Animation) {#step-4-borders-and-shadows}

```
Kepiye rasane website sampeyan nalika interaktif?

Pilihan animasi:
- Minimal (ora ana animasi)
- Subtle (transisi alon-alon)
- Playful (animasi sing katon jelas)

Animasi spesifik:
- Transisi halaman: fade, slide, utawa ora ana?
- Hover tombol: scale, ganti warna, utawa loro?
- Loading states: spinner, skeleton, utawa progress bar?
```

Agen iki bakal ngapungake:

- Durasi transisi (cepat, normal, alon)
- Fungsi easing (ease-in, ease-out, ease-in-out)
- Keyframes animasi kanggo interaksi umum

## Nggo Nerapake Estetika Design System {#step-5-motion-and-animation}

### Penerapan Otomatis (Automatic Application) {#applying-design-system-aesthetics}

Sawise sampeyan ngrampungake skill iki, agen bakal:

1. Ngupdate `theme.json` tema sampeyan karo kabeh token
2. Nerapake design system ing tema aktif sampeyan
3. Ngregenerasi gaya blok supaya cocok karo sistem anyar
4. Aktifake tema sing wis diupdate

### Penerapan Manual (Manual Application) {#automatic-application}

Sampeyan uga bisa ngedit `theme.json` langsung:

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

## Ndelengake Sistem Desainmu (Viewing Your Design System) {#manual-application}

### Takon Agen (Ask the Agent) {#viewing-your-design-system}

```
"Tunjukkan sistem desainku"
```

utawa

```
"Apa token desainku saiki?"
```

Agen bakal nampilake tipografi, warna, jarak antar elemen (spacing), lan token liyane.

### Tonton theme.json {#ask-the-agent}

Buka `/wp-content/themes/[theme-name]/theme.json` ing editor teks kanggo ndelok definisi token asli.

## Ngupdate Sistem Desainmu (Updating Your Design System) {#view-themejson}

### Update Cepet (Quick Updates) {#updating-your-design-system}

Takon agen kanggo owah-owahan tartamtu:

```
"Bikin warna primer luwih peteng"
```

utawa

```
"Naikake skala spacing rong persen"
```

utawa

```
"Ganti font judul dadi serif"
```

### Desain Ulang Lengkap (Full Redesign) {#quick-updates}

Lakoni maneh skill Design System Aesthetics:

```
"Ayo desain ulang sistem desainku kabeh"
```

Iki bakal nuntun sampeyan ngliwati kabeh keputusan maneh, wiwit saka nilai saiki.

### Update Parsial (Partial Updates) {#full-redesign}

Update aspek tartamtu wae:

```
"Cukup update palet warna, sisane tetep kaya ngono"
```

## Praktik Desain Sistem Terbaik (Design System Best Practices) {#partial-updates}

### Konsistensi (Consistency) {#design-system-best-practices}

- Gunakake token sing padha ing saben papan.
- Aja nggawe warna utawa ukuran sing mung digawe sekali.
- Referensake token tinimbang langsung nulis nilaine.

### Penamaan (Naming) {#consistency-1}

Gunakake jeneng sing jelas lan gampang dingerteni:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Skalabilitas (Scalability) {#naming}

Rancang sistemmu agar bisa berkembang (scale):

- Gunakan satuan relatif (rem, em) daripada piksel
- Buat skala (xs, sm, md, lg, xl) daripada nilai acak
- Rencanakan untuk penambahan di masa depan

### Dokumentasikan desain sistemmu: {#scalability}

- Kenapa kamu memilih warna tertentu
- Kapan menggunakan setiap token
- Pengecualian dan kasus sulit (edge cases)

## Pola Desain Sistem Umum {#documentation}

### Modern Minimalis {#common-design-system-patterns}

- Tipografi tanpa kait (Sans-serif) (Inter, Helvetica)
- Palet warna terbatas (2-3 warna)
- Jarak yang lega (generous spacing)
- Bayangan yang halus (subtle shadows)
- Animasi yang mulus dan cepat

### Hangat dan Ramah {#modern-minimalist}

- Campuran serif dan sans-serif
- Palet warna hangat (oranye, abu-abu hangat)
- Sudut yang membulat (rounded corners)
- Bayangan yang lembut (soft shadows)
- Animasi yang ceria (playful animations)

### Profesional Korporat {#warm-and-friendly}

- Sans-serif yang bersih (Roboto, Open Sans)
- Palet netral dengan warna aksen
- Jarak yang terstruktur (structured spacing)
- Bayangan minimalis
- Transisi yang halus (subtle transitions)

### Kreatif dan Berani {#professional-corporate}

- Tipografi yang khas (distinctive typography)
- Palet warna yang berani (bold color palette)
- Jarak yang bervariasi
- Bayangan yang kuat (strong shadows)
- Animasi yang mencolok (noticeable animations)

## Pemecahan Masalah (Troubleshooting) {#creative-and-bold}

**Perubahan desain sistemku tidak muncul**
- Bersihkan cache browser kamu
- Bangun ulang situsmu jika menggunakan static generator
- Cek apakah theme.json itu JSON yang valid
- Pastikan tema sudah aktif

**Warna terlihat berbeda di halaman yang berbeda**
- Periksa CSS yang bertentangan di plugin
- Verifikasi semua halaman menggunakan tema yang sama
- Bersihkan plugin caching apa pun

**Aku ingin kembali ke desain sistem sebelumnya**
- Tanyakan pada agen: "Tunjukkan riwayat desain sistemku" (Show me my design system history)
- Edit manual theme.json ke nilai sebelumnya
- Jalankan lagi skill dengan pilihan yang berbeda

## Langkah Selanjutnya {#troubleshooting}

Setelah mendefinisikan desain sistemmu:

1. **Tinjau situsmu**: Kunjungi situsmu kanggo ndelok desain anyar

2. **Perbaiki maneh**: Lakukan penyesuaian nganggo skill (kemampuan)mu maneh

3. **Buat template**: Bangun template blok kustom nganggo design tokens-mu

4. **Dokumentasikan**: Bagikan sistem desainmu marang anggota tim
