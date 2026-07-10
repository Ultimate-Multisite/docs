---
title: Menginstal Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Menginstal Ultimate Multisite {#installing-ultimate-multisite}

:::note
Tutorial ini mengasumsikan Anda sudah menginstal dan mengonfigurasi WordPress Multisite. Untuk mempelajari caranya, lihat [tutorial ini](https://www.wpbeginner.com/glossary/multisite/) dari WP Beginner.
:::

## Menginstal Plugin {#installing-the-plugin}

Ultimate Multisite tersedia secara gratis di [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Dari **Dasbor Admin Jaringan** Anda, buka **Plugin → Tambah Plugin Baru**.

![Halaman Tambah Plugin Baru di Dasbor Admin Jaringan](/img/installation/add-new-plugin.png)

Cari **"Ultimate Multisite"** (dengan tanda kutip untuk pencocokan yang tepat), dan itu akan muncul sebagai hasil pertama. Klik **Instal Sekarang**.

![Hasil pencarian menampilkan Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Setelah diinstal, klik **Aktifkan Jaringan** untuk mengaktifkan plugin di seluruh jaringan Anda.

![Plugin terinstal dengan tombol Aktifkan Jaringan](/img/installation/plugin-installed.png)

Setelah aktivasi, Anda akan secara otomatis dialihkan ke Wizard Pengaturan.

![Plugin diaktifkan dan dialihkan ke wizard](/img/installation/plugin-activated.png)

## Wizard Pengaturan {#setup-wizard}

Wizard Pengaturan akan memandu Anda dalam mengonfigurasi Ultimate Multisite dalam waktu sekitar 10 menit.

### Selamat Datang {#welcome}

Klik **Mulai** untuk memulai.

![Layar selamat datang Wizard Pengaturan](/img/installation/wizard-welcome.png)

### Pemeriksaan Pra-instalasi {#pre-install-checks}

Langkah ini memeriksa informasi sistem dan instalasi WordPress Anda untuk memastikan bahwa itu memenuhi persyaratan Ultimate Multisite. Jika semuanya terlihat baik, klik **Lanjutkan ke Langkah Berikutnya**.

![Pemeriksaan pra-instalasi menampilkan persyaratan sistem](/img/installation/wizard-pre-install-checks.png)

:::note Tombol Aktifkan Jaringan (v2.6.1+)
Jika Ultimate Multisite telah diinstal tetapi **belum diaktifkan di seluruh jaringan** — misalnya, jika Anda mengklik **Aktifkan** (situs tunggal) alih-alih **Aktifkan Jaringan** dari layar plugin jaringan — langkah Pemeriksaan Pra-instalasi akan mendeteksinya dan menampilkan tombol **Aktifkan Jaringan**.

Mengklik **Aktifkan Jaringan** akan mengaktifkan plugin di seluruh jaringan multisite Anda secara otomatis. Setelah diaktifkan, wizard akan melanjutkan seperti biasa ke langkah instalasi. Anda tidak perlu meninggalkan wizard untuk memperbaiki status aktivasi.
:::

### Instalasi {#installation}

Penginstal akan membuat tabel basis data yang diperlukan dan menginstal file `sunrise.php` yang dibutuhkan Ultimate Multisite agar berfungsi. Klik **Instal** untuk melanjutkan.

![Langkah instalasi menampilkan tabel basis data dan sunrise.php](/img/installation/wizard-installation.png)

### Perusahaan Anda {#your-company}

Isi informasi perusahaan Anda dan atur mata uang default Anda. Informasi ini akan digunakan di seluruh platform WaaS Anda. Klik **Lanjutkan** setelah selesai.

![Langkah konfigurasi Perusahaan Anda](/img/installation/wizard-your-company.png)

### Konten Default {#default-content}

Langkah ini memungkinkan Anda untuk menginstal templat yang telah ditentukan sebelumnya, produk, dan konten awal lainnya. Ini adalah cara yang bagus untuk membiasakan diri dengan fitur Ultimate Multisite. Klik **Instal** untuk menambahkan konten default, atau lewati langkah ini jika Anda lebih suka memulai dari awal.

![Langkah instalasi konten default](/img/installation/wizard-default-content.png)

### Plugin yang Direkomendasikan {#recommended-plugins}

Secara opsional, instal plugin pendamping yang direkomendasikan. Klik **Instal** untuk menambahkannya atau lewati untuk melanjutkan.

![Langkah plugin yang direkomendasikan](/img/installation/wizard-recommended-plugins.png)

### Siap! {#ready}

Selesai! Instalasi Ultimate Multisite Anda telah selesai. Sekarang Anda dapat mulai membangun platform Website as a Service dari **Dasbor Admin Jaringan**.

![Pengaturan selesai - Layar Siap](/img/installation/wizard-ready.png)

![Dasbor Admin Jaringan dengan Ultimate Multisite aktif](/img/installation/network-dashboard.png)

Silakan, bersenang-senanglah!
