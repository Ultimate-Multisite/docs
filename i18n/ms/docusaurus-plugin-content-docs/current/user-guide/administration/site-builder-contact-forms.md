---
title: Borang Hubungi Pembina Laman
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Borang Kontak Site Builder {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 menambah keupayaan untuk mencipta borang kontak terus dari antara muka sembang menggunakan agen Site Builder. Ini membolehkan anda menambah borang kontak yang berfungsi sepenuhnya ke mana-mana halaman tanpa perlu meninggalkan sembang.

## Gambaran Keseluruhan {#overview}

Keupayaan borang kontak Site Builder (`create_contact_form`) akan secara automatik mengesan plugin borang yang telah anda pasang dan mencipta borang kontak menggunakan keupayaan asli plugin tersebut. Plugin borang yang disokong termasuk:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Pembantu ini akan memilih plugin borang terbaik yang tersedia di laman anda secara automatik dan menjana borang kontak yang disesuaikan untuk plugin tersebut.

## Mencipta Borang Kontak {#creating-a-contact-form}

Untuk mencipta borang kontak menggunakan Site Builder:

1. Buka panel sembang **Gratis AI Agent** dalam pentadbiran WordPress.
2. Tukar kepada agen **Site Builder** dengan mengklik ikon agen di bahagian atas sembang.
3. Huraikan borang kontak yang anda ingin cipta. Contohnya:

   > "Tambah borang kontak ke halaman Kontak dengan medan untuk nama, emel, mesej, dan nombor telefon."

   Atau ringkasnya:

   > "Cipta borang kontak untuk halaman Kontak."

4. Site Builder akan menjana borang kontak dan mengembalikan shortcode yang sedia untuk disematkan.

## Menggunakan Shortcode yang Dijana {#using-the-generated-shortcode}

Selepas Site Builder mencipta borang kontak, ia akan mengembalikan shortcode (contohnya, `[contact-form-7 id="123"]`). Anda boleh:

1. **Sematkan dalam halaman atau pos** — Salin shortcode itu dan tampalkannya ke mana-mana halaman atau pos menggunakan block editor atau classic editor.
2. **Tambah melalui Site Builder** — Minta Site Builder untuk menambah borang ke halaman tertentu secara automatik:

   > "Tambah borang kontak ke halaman Kontak."

3. **Gunakan dalam templat** — Jika anda selesa dengan PHP, anda boleh menambah shortcode ke fail templat tema.

## Menyesuaikan Borang Kontak {#customizing-the-contact-form}

Selepas Site Builder mencipta borang kontak, anda boleh menyesuaikannya lagi:

### Melalui Antara Muka Sembang {#via-the-chat-interface}

Minta Site Builder untuk mengubah suai borang:

> "Kemas kini borang kontak untuk menambah medan subjek dan menjadikan medan mesej sebagai wajib."

Site Builder akan mengemas kini borang dan mengembalikan shortcode yang telah dikemas kini.

### Melalui Antara Muka Pentadbiran Plugin Borang {#via-the-form-plugins-admin-interface}

Anda juga boleh menyesuaikan borang secara langsung dalam tetapan plugin borang anda:

1. Pergi ke **Contact Form 7** (atau plugin borang yang dipasang) dalam pentadbiran WordPress.
2. Cari borang yang dicipta oleh Site Builder.
3. Sunting medan borang, peraturan pengesahan, dan pemberitahuan emel mengikut keperluan.

## Plugin Borang dan Keserasian {#form-plugins-and-compatibility}

Site Builder akan mengesan secara automatik plugin borang mana yang dipasang di laman anda dan menggunakannya untuk mencipta borang kontak. Jika terdapat pelbagai plugin borang yang dipasang, Site Builder akan mengutamakan dalam urutan ini:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Jika tiada plugin ini yang dipasang, Site Builder akan mengesyorkan memasang salah satu daripadanya sebelum mencipta borang kontak.

## Pemberitahuan Emel {#email-notifications}

Borang kontak yang dicipta oleh Site Builder dikonfigurasikan untuk menghantar pemberitahuan emel kepada pentadbir laman secara lalai. Anda boleh menyesuaikan alamat emel penerima dan mesej pemberitahuan:

1. Pergi ke antara muka pentadbiran plugin borang anda.
2. Cari borang yang dicipta oleh Site Builder.
3. Sunting tetapan pemberitahuan emel.

Untuk arahan terperinci, rujuk dokumentasi plugin borang anda:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Contoh Penggunaan {#example-use-cases}

### Borang Kontak Ringkas {#simple-contact-form}

> "Cipta borang kontak ringkas dengan medan nama, emel, dan mesej."

### Borang Berbilang Langkah {#multi-step-form}

> "Cipta borang kontak dengan langkah pertama untuk maklumat kontak dan langkah kedua untuk mesej dan kaedah kontak pilihan."

### Borang dengan Logik Bersyarat {#form-with-conditional-logic}

> "Cipta borang kontak yang memaparkan medan yang berbeza berdasarkan pilihan pengguna dalam menu tarik-turun."

### Borang dengan Muat Naik Fail {#form-with-file-upload}

> "Cipta borang kontak yang membenarkan pengguna memuat naik fail atau lampiran."

:::note
Penciptaan borang kontak tersedia dalam Superdav AI Agent v1.10.0 dan versi yang lebih baharu. Agen Site Builder mesti diaktifkan untuk menggunakan keupayaan ini.
:::
