---
title: Kemampuan Sadar Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Keterampilan Sadar Tema (Theme-Aware Skills)

Superdav AI Agent v1.10.0 hadir dengan empat keterampilan bawaan baru yang sadar tema (*theme-aware*). Keterampilan ini secara otomatis beradaptasi dengan tema WordPress Anda yang sedang aktif. Keterampilan ini menyediakan panduan dan kemampuan khusus yang disesuaikan dengan arsitektur dan fitur tema Anda.

## Apa Itu Keterampilan Sadar Tema?

Keterampilan sadar tema adalah basis pengetahuan dan set alat yang sudah dikonfigurasi sebelumnya yang secara otomatis dipilih oleh asisten AI berdasarkan tema WordPress yang sedang aktif di situs Anda. Ketika Anda mengganti tema, keterampilan yang tersedia pada asisten akan diperbarui secara otomatis — tanpa perlu konfigurasi manual.

Setiap keterampilan mencakup:

- **Dokumentasi spesifik tema** — panduan tentang cara menggunakan dan menyesuaikan tema
- **Referensi blok dan pola** — blok, pola, dan opsi desain yang tersedia
- **Contoh kustomisasi** — cuplikan kode dan pola konfigurasi untuk tugas umum
- **Praktik terbaik** — rekomendasi untuk arsitektur dan alur kerja tema

## Keterampilan Sadar Tema yang Tersedia

### Block Themes (Tema Blok)

**Berlaku untuk:** Tema yang menggunakan arsitektur berbasis blok WordPress (Full Site Editing).

Keterampilan Block Themes memberikan panduan tentang:

- Membuat dan mengedit *template* menggunakan editor blok
- Bekerja dengan pola blok (*block patterns*) dan blok yang dapat digunakan kembali (*reusable blocks*)
- Menyesuaikan gaya global dan pengaturan `theme.json`
- Menggunakan blok tema dan variasinya
- Membuat pola blok kustom untuk situs Anda

**Aktif secara otomatis ketika:** Tema aktif Anda adalah tema blok (mendukung fitur `block-templates`).

### Classic Themes (Tema Klasik)

**Berlaku untuk:** Tema WordPress tradisional yang menggunakan *template* PHP dan editor klasik.

Keterampilan Classic Themes memberikan panduan tentang:

- Bekerja dengan file *template* PHP dan *hook*
- Menyesuaikan tampilan tema melalui Customizer
- Menggunakan area widget dan sidebar
- Memodifikasi CSS dan pengembangan *child theme*
- Memahami hierarki tema dan *template tags*

**Aktif secara otomatis ketika:** Tema aktif Anda adalah tema klasik (non-blok).

### Kadence Blocks

**Berlaku untuk:** Situs yang menggunakan *plugin* Kadence Blocks untuk desain berbasis blok tingkat lanjut.

Keterampilan Kadence Blocks memberikan panduan tentang:

- Menggunakan pustaka blok canggih Kadence (Hero, Testimonials, Pricing, dll.)
- Mengonfigurasi pengaturan blok dan opsi responsif Kadence
- Membuat tata letak kustom dengan blok grid dan container Kadence
- Mengintegrasikan blok Kadence dengan tema Anda
- Memanfaatkan sistem desain dan prasetel Kadence

**Aktif secara otomatis ketika:** *plugin* Kadence Blocks aktif di situs Anda.

### Kadence Theme

**Berlaku untuk:** Situs yang menggunakan tema Kadence untuk desain dan kustomisasi berbasis blok.

Keterampilan Kadence Theme memberikan panduan tentang:

- Menyesuaikan tema Kadence melalui gaya global dan `theme.json`
- Menggunakan pola blok dan *template* bawaan Kadence
- Mengonfigurasi pengaturan dan opsi tema Kadence
- Membuat desain kustom dengan sistem desain Kadence
- Mengintegrasikan Kadence dengan *plugin* dan alat populer

**Aktif secara otomatis ketika:** Tema Kadence adalah tema aktif Anda.

## Cara Keterampilan Dipilih

Asisten secara otomatis mendeteksi tema aktif dan *plugin* yang terpasang pada setiap pesan. Jika keterampilan sadar tema yang cocok tersedia, keterampilan tersebut akan dimuat ke dalam konteks asisten secara otomatis. Anda tidak perlu mengaktifkan atau mengganti keterampilan secara manual.

### Beberapa Keterampilan

Jika beberapa keterampilan berlaku untuk situs Anda (misalnya, jika Anda mengaktifkan Kadence Blocks dan Kadence Theme), asisten memiliki akses ke semua keterampilan yang berlaku dan dapat merujuk panduan dari masing-masing.

### Mengganti Tema

Ketika Anda mengubah tema aktif, keterampilan yang tersedia pada asisten akan diperbarui secara otomatis pada pesan berikutnya. Contohnya:

1. Anda menggunakan tema blok dengan keterampilan **Block Themes** yang aktif.
2. Anda beralih ke tema klasik.
3. Pada pesan Anda berikutnya, keterampilan **Classic Themes** akan dimuat secara otomatis, dan keterampilan **Block Themes** tidak lagi tersedia.

## Menggunakan Keterampilan Sadar Tema

Untuk memanfaatkan keterampilan sadar tema, cukup jelaskan apa yang ingin Anda lakukan di antarmuka obrolan. Asisten akan secara otomatis merujuk panduan keterampilan yang sesuai.

### Contoh Prompt

**Untuk Block Themes:**
> "Buat bagian hero dengan gambar latar belakang dan teks di tengah menggunakan pola blok."

**Untuk Classic Themes:**
> "Tambahkan area widget kustom ke sidebar menggunakan *child theme*."

**Untuk Kadence Blocks:**
> "Buat bagian testimoni menggunakan blok Testimonials Kadence."

**Untuk Kadence Theme:**
> "Sesuaikan tata letak header dan gaya menu navigasi."

Asisten akan memberikan panduan spesifik tema dan contoh kode yang disesuaikan dengan tema dan *plugin* aktif Anda.

:::note
Keterampilan sadar tema tersedia secara otomatis di Superdav AI Agent v1.10.0 dan versi yang lebih baru. Tidak diperlukan pengaturan atau konfigurasi tambahan.
:::
