---
title: Formulir Kontak Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formulir Kontak Site Builder

Superdav AI Agent v1.10.0 menambahkan kemampuan untuk membuat formulir kontak langsung dari antarmuka obrolan menggunakan agen Site Builder. Ini memungkinkan Anda menambahkan formulir kontak yang berfungsi penuh ke halaman mana pun tanpa harus meninggalkan obrolan.

## Gambaran Umum {#overview}

Kemampuan formulir kontak Site Builder (`create_contact_form`) secara otomatis mendeteksi plugin formulir yang terpasang dan membuat formulir kontak menggunakan kemampuan asli plugin tersebut. Plugin formulir yang didukung meliputi:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asisten akan secara otomatis memilih plugin formulir terbaik yang tersedia di situs Anda dan menghasilkan formulir kontak yang disesuaikan dengan plugin tersebut.

## Membuat Formulir Kontak {#creating-a-contact-form}

Untuk membuat formulir kontak menggunakan Site Builder:

1. Buka panel obrolan **Gratis AI Agent** di admin WordPress.
2. Beralih ke agen **Site Builder** dengan mengeklik ikon agen di header obrolan.
3. Jelaskan formulir kontak yang ingin Anda buat. Contohnya:

   > "Tambahkan formulir kontak ke halaman Kontak dengan kolom untuk nama, email, pesan, dan nomor telepon."

   Atau cukup:

   > "Buat formulir kontak untuk halaman Kontak."

4. Site Builder akan menghasilkan formulir kontak dan mengembalikan shortcode yang siap disematkan.

## Menggunakan Shortcode yang Dihasilkan {#using-the-generated-shortcode}

Setelah Site Builder membuat formulir kontak, ia akan mengembalikan shortcode (contohnya, `[contact-form-7 id="123"]`). Anda dapat:

1. **Menyematkannya di halaman atau postingan** — Salin shortcode dan tempelkan ke halaman atau postingan mana pun menggunakan block editor atau classic editor.
2. **Menambahkannya melalui Site Builder** — Minta Site Builder untuk menambahkan formulir ke halaman tertentu secara otomatis:

   > "Tambahkan formulir kontak ke halaman Kontak."

3. **Menggunakannya dalam template** — Jika Anda nyaman dengan PHP, Anda dapat menambahkan shortcode ke file template tema.

## Menyesuaikan Formulir Kontak {#customizing-the-contact-form}

Setelah Site Builder membuat formulir kontak, Anda dapat menyesuaikannya lebih lanjut:

### Melalui Antarmuka Obrolan {#via-the-chat-interface}

Minta Site Builder untuk memodifikasi formulir:

> "Perbarui formulir kontak untuk menambahkan kolom subjek dan membuat kolom pesan wajib diisi."

Site Builder akan memperbarui formulir dan mengembalikan shortcode yang sudah diperbarui.

### Melalui Antarmuka Admin Plugin Formulir {#via-the-form-plugins-admin-interface}

Anda juga dapat menyesuaikan formulir langsung di pengaturan plugin formulir Anda:

1. Buka **Contact Form 7** (atau plugin formulir yang terpasang) di admin WordPress.
2. Temukan formulir yang dibuat oleh Site Builder.
3. Edit kolom formulir, aturan validasi, dan notifikasi email sesuai kebutuhan.

## Plugin Formulir dan Kompatibilitas {#form-plugins-and-compatibility}

Site Builder secara otomatis mendeteksi plugin formulir mana yang terpasang di situs Anda dan menggunakannya untuk membuat formulir kontak. Jika terdapat beberapa plugin formulir yang terpasang, Site Builder akan memprioritaskannya dalam urutan ini:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Jika tidak ada plugin ini yang terpasang, Site Builder akan merekomendasikan untuk menginstal salah satunya sebelum membuat formulir kontak.

## Notifikasi Email {#email-notifications}

Formulir kontak yang dibuat oleh Site Builder secara *default* dikonfigurasi untuk mengirim notifikasi email ke administrator situs. Anda dapat menyesuaikan alamat email penerima dan pesan notifikasi:

1. Buka antarmuka admin plugin formulir Anda.
2. Temukan formulir yang dibuat oleh Site Builder.
3. Edit pengaturan notifikasi email.

Untuk petunjuk terperinci, silakan merujuk ke dokumentasi plugin formulir Anda:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Contoh Kasus Penggunaan {#example-use-cases}

### Formulir Kontak Sederhana {#simple-contact-form}

> "Buat formulir kontak sederhana dengan kolom nama, email, dan pesan."

### Formulir Multi-Langkah {#multi-step-form}

> "Buat formulir kontak dengan langkah pertama untuk informasi kontak dan langkah kedua untuk pesan dan metode kontak yang disukai."

### Formulir dengan Logika Kondisional {#form-with-conditional-logic}

> "Buat formulir kontak yang menampilkan kolom berbeda berdasarkan pilihan pengguna di *dropdown*."

### Formulir dengan Unggah File {#form-with-file-upload}

> "Buat formulir kontak yang memungkinkan pengguna mengunggah file atau lampiran."

:::note
Pembuatan formulir kontak tersedia di Superdav AI Agent v1.10.0 dan versi yang lebih baru. Agen Site Builder harus aktif untuk menggunakan kemampuan ini.
:::
