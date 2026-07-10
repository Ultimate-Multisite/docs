---
title: Kemahiran Sedar Tema
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Kemahiran Berdasarkan Tema (Theme-Aware Skills) {#theme-aware-skills}

Superdav AI Agent v1.10.0 memperkenalkan empat kemahiran terbina dalam baharu yang peka tema (theme-aware). Kemahiran ini secara automatik menyesuaikan diri dengan tema WordPress anda yang sedang aktif. Kemahiran ini menyediakan panduan dan keupayaan khusus yang disesuaikan dengan seni bina dan ciri tema anda.

## Apakah Kemahiran Berdasarkan Tema? {#what-are-theme-aware-skills}

Kemahiran berdasarkan tema ialah pangkalan pengetahuan dan set alat yang telah dikonfigurasi terlebih dahulu yang akan dipilih secara automatik oleh pembantu AI berdasarkan tema WordPress yang sedang aktif di laman web anda. Apabila anda menukar tema, kemahiran yang tersedia untuk pembantu akan dikemas kini secara automatik — anda tidak perlu membuat konfigurasi manual.

Setiap kemahiran merangkumi:

- **Dokumentasi khusus tema** — panduan tentang cara menggunakan dan menyesuaikan tema
- **Rujukan blok dan corak** — blok, corak, dan pilihan reka bentuk yang tersedia
- **Contoh penyesuaian** — cebisan kod dan corak konfigurasi untuk tugas biasa
- **Amalan terbaik** — cadangan untuk seni bina dan aliran kerja tema

## Kemahiran Berdasarkan Tema yang Tersedia {#available-theme-aware-skills}

### Block Themes {#block-themes}

**Berkenaan dengan:** Tema yang menggunakan seni bina berasaskan blok WordPress (Full Site Editing).

Kemahiran Block Themes menyediakan panduan tentang:

- Mencipta dan menyunting templat menggunakan editor blok
- Bekerja dengan corak blok dan blok boleh guna semula
- Menyesuaikan gaya global dan tetapan theme.json
- Menggunakan blok tema dan variasinya
- Membina corak blok tersuai untuk laman web anda

**Diaktifkan secara automatik apabila:** Tema aktif anda ialah tema blok (menyokong ciri `block-templates`).

### Classic Themes {#classic-themes}

**Berkenaan dengan:** Tema WordPress tradisional yang menggunakan templat PHP dan editor klasik.

Kemahiran Classic Themes menyediakan panduan tentang:

- Bekerja dengan fail templat PHP dan *hook*
- Menyesuaikan penampilan tema melalui Customizer
- Menggunakan kawasan widget dan sidebar
- Mengubah suai CSS dan pembangunan tema anak (*child theme*)
- Memahami hierarki tema dan tag templat

**Diaktifkan secara automatik apabila:** Tema aktif anda ialah tema klasik (bukan blok).

### Kadence Blocks {#kadence-blocks}

**Berkenaan dengan:** Laman web yang menggunakan plugin Kadence Blocks untuk reka bentuk berasaskan blok yang canggih.

Kemahiran Kadence Blocks menyediakan panduan tentang:

- Menggunakan perpustakaan blok canggih Kadence (Hero, Testimonials, Pricing, dsb.)
- Mengkonfigurasi tetapan blok dan pilihan responsif Kadence
- Membina susun atur tersuai dengan blok grid dan kontena Kadence
- Mengintegrasikan blok Kadence dengan tema anda
- Memanfaatkan sistem reka bentuk dan pratetap Kadence

**Diaktifkan secara automatik apabila:** Plugin Kadence Blocks aktif di laman web anda.

### Kadence Theme {#kadence-theme}

**Berkenaan dengan:** Laman web yang menggunakan tema Kadence untuk reka bentuk dan penyesuaian berasaskan blok.

Kemahiran Kadence Theme menyediakan panduan tentang:

- Menyesuaikan tema Kadence melalui gaya global dan theme.json
- Menggunakan corak blok dan templat terbina dalam Kadence
- Mengkonfigurasi tetapan dan pilihan tema Kadence
- Membina reka bentuk tersuai dengan sistem reka bentuk Kadence
- Mengintegrasikan Kadence dengan plugin dan alat popular

**Diaktifkan secara automatik apabila:** Tema Kadence ialah tema aktif anda.

## Cara Kemahiran Dipilih {#how-skills-are-selected}

Pembantu akan mengesan tema aktif dan plugin yang dipasang secara automatik pada setiap mesej. Jika kemahiran berdasarkan tema yang sepadan tersedia, ia akan dimuatkan ke dalam konteks pembantu secara automatik. Anda tidak perlu mengaktifkan atau menukar kemahiran secara manual.

### Pelbagai Kemahiran {#multiple-skills}

Jika pelbagai kemahiran terpakai pada laman web anda (contohnya, jika anda mempunyai Kadence Blocks dan Kadence Theme yang aktif), pembantu mempunyai akses kepada semua kemahiran yang berkenaan dan boleh merujuk panduan daripada setiap satunya.

### Menukar Tema {#switching-themes}

Apabila anda menukar tema aktif anda, kemahiran yang tersedia untuk pembantu akan dikemas kini secara automatik pada mesej seterusnya. Contohnya:

1. Anda menggunakan tema blok dengan kemahiran **Block Themes** yang aktif.
2. Anda menukar kepada tema klasik.
3. Pada mesej anda yang seterusnya, kemahiran **Classic Themes** akan dimuatkan secara automatik, dan kemahiran **Block Themes** tidak lagi tersedia.

## Menggunakan Kemahiran Berdasarkan Tema {#using-theme-aware-skills}

Untuk memanfaatkan kemahiran berdasarkan tema, cukup huraikan apa yang anda ingin lakukan dalam antara muka sembang. Pembantu akan merujuk panduan kemahiran yang sesuai secara automatik.

### Contoh Prompts {#example-prompts}

**Untuk Block Themes:**
> "Cipta bahagian hero dengan imej latar belakang dan teks berpusat menggunakan corak blok."

**Untuk Classic Themes:**
> "Tambah kawasan widget tersuai pada sidebar menggunakan tema anak (*child theme*)."

**Untuk Kadence Blocks:**
> "Bina bahagian testimoni menggunakan blok Testimonials Kadence."

**Untuk Kadence Theme:**
> "Sesuaikan susun atur header dan gaya menu navigasi."

Pembantu akan memberikan panduan khusus tema dan contoh kod yang disesuaikan dengan tema dan plugin aktif anda.

:::note
Kemahiran berdasarkan tema tersedia secara automatik dalam Superdav AI Agent v1.10.0 dan versi yang lebih baharu. Tiada persediaan atau konfigurasi tambahan diperlukan.
:::
