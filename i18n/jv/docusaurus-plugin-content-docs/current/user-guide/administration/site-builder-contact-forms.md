---
title: Form Kontak Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formulir Kontak Pembuat Situs

Superdav AI Agent v1.10.0 nambah kemampuan buat formulir kontak langsung dari antarmuka obrolan pakai agen Site Builder. Ini memungkinkan kamu nambah formulir kontak yang berfungsi penuh di halaman mana pun tanpa harus keluar dari obrolan.

## Gambaran Umum

Kemampuan formulir kontak Site Builder (`create_contact_form`) bakal otomatis mendeteksi plugin formulir yang sudah terpasang dan bikin formulir kontak pakai kemampuan bawaan plugin itu. Plugin formulir yang didukung antara lain:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistennya bakal otomatis milih plugin formulir terbaik di situs kamu dan bikin formulir kontak yang disesuaikan dengan plugin itu.

## Membuat Formulir Kontak

Untuk membuat formulir kontak pakai Site Builder:

1. Buka panel obrolan **Gratis AI Agent** di admin WordPress.
2. Ganti ke agen **Site Builder** dengan klik ikon agen di header obrolan.
3. Jelaskan formulir kontak yang mau kamu buat. Contohnya:

   > "Tambah formulir kontak ke halaman Kontak dengan kolom untuk nama, email, pesan, dan nomor telepon."

   Atau sederhananya:

   > "Buat formulir kontak untuk halaman Kontak."

4. Site Builder bakal bikin formulir kontak dan kasih shortcode yang siap kamu sematkan (embed).

## Menggunakan Shortcode yang Dihasilkan

Setelah Site Builder bikin formulir kontak, dia bakal kasih shortcode (contohnya, `[contact-form-7 id="123"]`). Kamu bisa:

1. **Sematkan di halaman atau postingan** — Salin shortcode itu dan tempelkan ke halaman atau postingan mana pun pakai block editor atau classic editor.
2. **Tambahkan melalui Site Builder** — Minta Site Builder untuk otomatis nambah formulir ke halaman tertentu:

   > "Tambah formulir kontak ke halaman Kontak."

3. **Gunakan di template** — Yen wis nyaman nganggo PHP, sampeyan bisa nambah shortcode ku nang file template tema.

## Ngatur Formulir Kontak (Customizing the Contact Form)

Sawise Site Builder nggawe formulir kontak, sampeyan isih iso ngatur maneh:

### Lewat Antarmuka Chat

Minta Site Builder kanggo ngowahi formulir kasebut:

> "Update formulir kontak kanggo nambah kolom subjek lan gawe kolom pesan dadi wajib diisi."

Site Builder bakal ngowahi formulir lan mbalekake shortcode sing wis diupdate.

### Lewat Admin Interface Plugin Formulir (Form Plugin's Admin Interface)

Sampeyan uga iso ngatur formulir langsung nang pengaturan plugin formulir sampeyan:

1. Tindakake **Contact Form 7** (utawa plugin formulir sing wis dipasang) ing admin WordPress.
2. Temokake formulir sing digawe dening Site Builder.
3. Edit kolom formulir, aturan validasi, lan notifikasi email kaya sing dibutuhake.

## Plugin Formulir lan Kompatibilitas (Form Plugins and Compatibility)

Site Builder otomatis bakal ngetok plugin formulir endi sing wis dipasang nang situs sampeyan lan nganggo iku kanggo nggawe formulir kontak. Yen ana luwih saka siji plugin formulir sing dipasang, Site Builder bakal milih urutan iki:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Yen ora ana salah siji plugin kasebut sing dipasang, Site Builder bakal rekomendasi kanggo nggawe salah siji sadurunge nggawe formulir kontak.

## Notifikasi Email (Email Notifications)

Formulir kontak sing digawe dening Site Builder wis diatur kanggo ngirim notifikasi email marang administrator situs secara default. Sampeyan iso ngowahi alamat email penerima lan pesan notifikasi:

1. Tindakake admin interface plugin formulir sampeyan.
2. Temokake formulir sing digawe dening Site Builder.
3. Edit pengaturan notifikasi email.

Kanggo instruksi rinci, deleng dokumentasi plugin formulir sampeyan:

- [Pemberitahuan Email Contact Form 7](https://contactform7.com/docs/)
- [Pemberitahuan Email WPForms](https://wpforms.com/docs/)
- [Pemberitahuan Email Fluent Forms](https://fluentforms.com/docs/)
- [Pemberitahuan Email Gravity Forms](https://docs.gravityforms.com/)

## Contoh Penggunaan

### Formulir Kontak Sederhana

> "Buat formulir kontak sederhana dengan kolom nama, email, dan pesan."

### Formulir Bertahap (Multi-Step Form)

> "Buat formulir kontak yang punya langkah pertama untuk informasi kontak dan langkah kedua untuk pesan serta metode kontak yang diinginkan."

### Formulir dengan Logika Bersyarat (Conditional Logic)

> "Buat formulir kontak yang menampilkan kolom berbeda tergantung pilihan pengguna di dropdown."

### Formulir dengan Unggah File (File Upload)

> "Buat formulir kontak yang mengizinkan pengguna untuk mengunggah file atau lampiran."

:::note
Pembuatan formulir kontak tersedia di Superdav AI Agent v1.10.0 dan versi yang lebih baru. Agen Site Builder harus aktif untuk menggunakan kemampuan ini.
:::
