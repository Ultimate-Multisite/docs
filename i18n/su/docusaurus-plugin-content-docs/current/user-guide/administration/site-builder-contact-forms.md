---
title: Form Kontak Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formulir Kontak Pembuat Situs

Superdav AI Agent v1.10.0 nambah kemampuan buat formulir kontak langsung dari antarmuka obrolan pakai Site Builder agent. Ini memungkinkan kamu nambah formulir kontak yang berfungsi penuh di halaman mana aja tanpa harus keluar dari obrolan.

## Gambaran Umum

Kemampuan formulir kontak Site Builder (`create_contact_form`) bakal otomatis mendeteksi plugin formulir yang sudah terpasang dan bikin formulir kontak pakai kemampuan bawaan plugin itu. Plugin formulir yang didukung antara lain:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistennya bakal otomatis milih plugin formulir terbaik yang ada di situs kamu dan bikin formulir kontak yang disesuaikan dengan plugin itu.

## Membuat Formulir Kontak

Untuk membuat formulir kontak pakai Site Builder:

1. Buka panel obrolan **Gratis AI Agent** di admin WordPress.
2. Ganti ke agent **Site Builder** dengan klik ikon agent di header obrolan.
3. Jelaskan formulir kontak yang mau kamu buat. Contohnya:

   > "Tambah formulir kontak ke halaman Contact dengan kolom untuk nama, email, pesan, dan nomor telepon."

   Atau sederhananya:

   > "Buat formulir kontak untuk halaman Contact."

4. Site Builder bakal bikin formulir kontak dan kasih shortcode yang siap kamu sematkan (embed).

## Menggunakan Shortcode yang Dibuat

Setelah Site Builder bikin formulir kontak, dia bakal ngasih shortcode (contohnya, `[contact-form-7 id="123"]`). Kamu bisa:

1. **Sematkan di halaman atau postingan** — Salin shortcode-nya dan tempel di halaman atau postingan mana pun pakai block editor atau classic editor.
2. **Tambahkan lewat Site Builder** — Minta Site Builder buat nambah formulir ke halaman tertentu secara otomatis:

   > "Tambah formulir kontak ke halaman Contact."

3. **Gunakan di template** — Lamun anjeun pinter soal PHP, anjeun bisa nambahan shortcode éta ka file template tema.

## Ngubah Bentuk Form Kontak (Contact Form)

Sanggeus Site Builder nyiptake form kontakna, anjeun masih bisa ngubahna deui:

### Via Chat Interface

Tanya ka Site Builder pikeun ngarobah formna:

> "Update form kontak jadi nambahan kolom subjek jeatkeun kolom pesan jadi wajib diisi."

Site Builder bakal ngubah formna terus mawa shortcode anu geus diupdate.

### Via Admin Interface Plugin Form

Anjeun ogé bisa ngubah form langsung dina pengaturan plugin form anjeun:

1. Ka **Contact Form 7** (atawa plugin form nu dipasang) di WordPress admin.
2. Cari form anu geus diciptake ku Site Builder.
3. Edit kolom-kolom form, aturan validasi, jeung notifikasi email sakumaha perlu.

## Plugin Form je Compatibility

Site Builder bakal otomatis ngadeukeutan plugin form mana nu dipasang di situs anjeun terus maké éta pikeun nyiptake form kontakna. Lamun aya sababaraha plugin form nu dipasang, Site Builder bakal milih urutan ieu:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Lamun teu aya di antara plugin-plugin éta, Site Builder bakal ngarekomendasi pikeun nyanghareupan hiji saméméh nyiptake form kontakna.

## Notifikasi Email

Form kontak anu diciptake ku Site Builder biasana geus dikonfigurasi pikeun ngirim notifikasi email ka administrator situs. Anjeun masih bisa ngubah alamat email penerima jeung pesan notifikasina:

1. Ka admin interface plugin form anjeun.
2. Cari form anu geus diciptake ku Site Builder.
3. Edit pengaturan notifikasi emailna.

Kanggo instruksi leuwih jéntré, silaturahkeun ka dokumentasi plugin form anjeun:

- [Notifikasi Email Contact Form 7](https://contactform7.com/docs/)
- [Notifikasi Email WPForms](https://wpforms.com/docs/)
- [Notifikasi Email Fluent Forms](https://fluentforms.com/docs/)
- [Notifikasi Email Gravity Forms](https://docs.gravityforms.com/)

## Contoh Penggunaan

### Formulir Kontak Sederhana

> "Buat formulir kontak sederhana dengan kolom nama, email, dan pesan."

### Formulir Bertahap (Multi-Step Form)

> "Buat formulir kontak yang punya langkah pertama untuk informasi kontak dan langkah kedua untuk pesan serta metode kontak pilihan."

### Formulir dengan Logika Bersyarat (Conditional Logic)

> "Buat formulir kontak yang menampilkan kolom berbeda tergantung pilihan pengguna di dropdown."

### Formulir dengan Unggah File (File Upload)

> "Buat formulir kontak yang mengizinkan pengguna mengunggah file atau lampiran."

:::note
Pembuatan formulir kontak tersedia di Superdav AI Agent v1.10.0 dan versi yang lebih baru. Agen Site Builder harus aktif untuk menggunakan kemampuan ini.
:::
