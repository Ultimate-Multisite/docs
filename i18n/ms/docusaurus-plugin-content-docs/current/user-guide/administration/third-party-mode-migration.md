---
title: Migrasi Mod Pihak Ketiga
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrasi Mod Pihak Ketiga

Superdav AI Agent v1.12.0 mengubah cara keupayaan pihak ketiga (third-party abilities) dikendalikan. **Mod pihak ketiga kini lalai kepada auto**, membolehkan integrasi API Abilities WordPress asli pada WordPress 7.0+ tanpa konfigurasi manual.

## Apa yang Berubah? {#what-changed}

### Sebelum v1.12.0 {#before-v1120}

Keupayaan pihak ketiga memerlukan konfigurasi manual:

- Anda perlu mengaktifkan "third-party mode" secara eksplisit
- Keupayaan dimuatkan daripada pendaftaran (registry) tersuai
- Integrasi dengan WordPress Abilities API adalah pilihan
- Mod warisan (Legacy mode) adalah lalai

### Selepas v1.12.0 {#after-v1120}

Keupayaan pihak ketiga berfungsi secara automatik:

- Mod pihak ketiga lalai kepada "auto"
- Keupayaan berintegrasi secara asli dengan WordPress Abilities API
- Tiada konfigurasi manual diperlukan pada WordPress 7.0+
- Mod warisan masih tersedia untuk versi WordPress yang lebih lama

## Siapa yang Terjejas? {#who-is-affected}

### Pemasangan Baharu (WordPress 7.0+) {#new-installations-wordpress-70}

**Tiada tindakan diperlukan.** Mod pihak ketiga ditetapkan secara automatik kepada "auto", dan keupayaan berfungsi terus (out of the box).

### Pemasangan Sedia Ada {#existing-installations}

**Tetapan anda dikekalkan.** Jika anda menggunakan:

- **Legacy mode**: Anda kekal dalam mod warisan (tiada perubahan)
- **Third-party mode manual**: Anda kekal dalam mod manual (tiada perubahan)
- **Auto mode**: Anda meneruskan dengan mod auto (tiada perubahan)

### Versi WordPress Sebelum 7.0 {#wordpress-versions-before-70}

**Mod warisan masih tersedia.** Jika anda menggunakan WordPress 6.x atau lebih awal:

- Mod pihak ketiga lalai kepada "legacy"
- Anda boleh mengaktifkan mod pihak ketiga secara manual jika dikehendaki
- Naik taraf ke WordPress 7.0+ untuk menggunakan Abilities API asli

## Memahami Mod {#understanding-the-modes}

### Auto Mode (Laluan Baharu) {#auto-mode-new-default}

**Auto mode** menggunakan integrasi WordPress Abilities API asli:

- Keupayaan didaftarkan melalui *hooks* WordPress
- Keserasian penuh dengan WordPress 7.0+ Abilities API
- Pengesanan automatik keupayaan pihak ketiga
- Tiada konfigurasi manual diperlukan

**Bila guna**: WordPress 7.0+ dengan keupayaan pihak ketiga

### Manual Mode {#manual-mode}

**Manual mode** memerlukan konfigurasi eksplisit:

- Anda menentukan keupayaan pihak ketiga mana yang perlu dimuatkan
- Berguna untuk pengujian atau pemuatan keupayaan secara terpilih
- Memerlukan penyuntingan fail konfigurasi
- Kawalan lebih banyak, tetapi persediaan lebih banyak

**Bila guna**: Pengujian, pemuatan keupayaan terpilih, atau konfigurasi tersuai

### Legacy Mode {#legacy-mode}

**Legacy mode** menggunakan sistem keupayaan pihak ketiga yang lama:

- Pendaftaran keupayaan tersuai (bukan WordPress Abilities API)
- Serasi dengan versi WordPress yang lebih lama
- Tiada integrasi WordPress asli
- Sudah luput (deprecated) tetapi masih disokong

**Bila guna**: WordPress 6.x atau lebih awal, atau apabila anda memerlukan keserasian warisan

## Menyemak Mod Semasa Anda {#checking-your-current-mode}

### Melalui Admin Panel {#via-admin-panel}

1. Pergi ke **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Cari tetapan **Third-Party Mode**
3. Anda akan melihat mod semasa anda dan pilihan untuk mengubahnya

### Melalui Kod {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', atau 'legacy'
```

## Mengubah Mod Anda {#changing-your-mode}

### Tukar ke Auto Mode {#switch-to-auto-mode}

Jika anda menggunakan WordPress 7.0+ dan ingin menggunakan auto mode:

1. Pergi ke **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Auto (WordPress Abilities API)**
4. Klik **Save**

Superdav AI Agent akan mengesan dan mendaftarkan keupayaan pihak ketiga secara automatik.

### Tukar ke Manual Mode {#switch-to-manual-mode}

Jika anda ingin mengawal secara manual keupayaan mana yang dimuatkan:

1. Pergi ke **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Manual**
4. Klik **Save**
5. Sunting fail konfigurasi anda untuk menentukan keupayaan mana yang perlu dimuatkan

### Tukar ke Legacy Mode {#switch-to-legacy-mode}

Jika anda memerlukan keserasian warisan:

1. Pergi ke **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Legacy**
4. Klik **Save**

## Faedah Auto Mode {#benefits-of-auto-mode}

### Pengesanan Automatik {#automatic-discovery}

Keupayaan didedahkan secara automatik daripada:

- Plugin yang dipasang
- Tema aktif
- Plugin must-use
- Plugin drop-in

Tiada pendaftaran manual diperlukan.

### Integrasi Asli {#native-integration}

Keupayaan berintegrasi dengan WordPress Abilities API:

- Konsisten dengan teras WordPress
- Berfungsi dengan admin WordPress
- Serasi dengan plugin lain yang menggunakan Abilities API
- Tahan masa hadapan apabila WordPress berkembang

### Pengurusan Ringkas {#simplified-management}

- Tiada fail konfigurasi untuk disunting
- Tiada pendaftaran keupayaan manual
- Kawalan Keterlihatan Keupayaan (Ability Visibility) berfungsi secara automatik
- Notis admin akan memberi amaran tentang keupayaan yang tidak diklasifikasikan

### Prestasi Lebih Baik {#better-performance}

- Keupayaan disimpan dalam cache
- Dimuat secara malas (lazy-loaded) mengikut permintaan
- Dioptimumkan untuk WordPress 7.0+

## Laluan Migrasi {#migration-path}

### Jika Anda Menggunakan WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Naik taraf ke WordPress 7.0+** (apabila bersedia)
2. **Kemas kini Superdav AI Agent** kepada v1.12.0+
3. **Tukar mod pihak ketiga kepada Auto** (pilihan; mod warisan masih berfungsi)
4. **Semak keterlihatan keupayaan** untuk memastikan kawalan akses yang betul

### Jika Anda Menggunakan WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Kemas kini Superdav AI Agent** kepada v1.12.0+
2. **Sahkan mod pihak ketiga ditetapkan kepada Auto** (seharusnya lalai)
3. **Semak keterlihatan keupayaan** untuk memastikan kawalan akses yang betul
4. **Uji keupayaan pihak ketiga** untuk mengesahkan ia berfungsi

## Penyelesaian Masalah {#troubleshooting}

### Keupayaan tidak dimuat dalam auto mode {#abilities-arent-loading-in-auto-mode}

- Sahkan anda menggunakan WordPress 7.0+
- Semak bahawa mod pihak ketiga ditetapkan kepada "Auto"
- Sahkan plugin yang menyediakan keupayaan itu aktif
- Semak log ralat WordPress untuk ralat pendaftaran

### Saya ingin mengekalkan mod warisan {#i-want-to-keep-legacy-mode}

- Pergi ke **Settings** → **Third-Party Mode**
- Pilih **Legacy**
- Klik **Save**
- Mod warisan akan terus berfungsi

### Keupayaan tersuai saya tidak dipaparkan {#my-custom-abilities-arent-showing}

- Sahkan ia didaftarkan melalui *hooks* WordPress
- Semak bahawa ia melaksanakan Abilities API dengan betul
- Semak log ralat WordPress
- Gunakan halaman admin **Ability Visibility** untuk melihat semua keupayaan yang didaftarkan

### Saya menerima notis "keupayaan tidak diklasifikasikan" {#im-getting-unclassified-ability-notices}

- Ini normal untuk keupayaan pihak ketiga yang baharu
- Semak dan klasifikasikan ia dalam notis admin
- Lihat **Ability Visibility** untuk butiran klasifikasi

## Keserasian Warisan (Backward Compatibility) {#backward-compatibility}

### Konfigurasi Sedia Ada {#existing-configurations}

Jika anda mempunyai konfigurasi keupayaan pihak ketiga yang sedia ada:

- **Legacy mode**: Konfigurasi anda terus berfungsi
- **Manual mode**: Konfigurasi anda terus berfungsi
- **Auto mode**: Konfigurasi anda diabaikan (auto mode mengambil alih)

Untuk mengekalkan konfigurasi tersuai anda, kekal dalam mod Manual atau Legacy.

### Garis Masa Pelupusan (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Mod Legacy dan Manual masih disokong sepenuhnya
- **v1.13.0+**: Mod warisan mungkin menunjukkan notis pelupusan
- **v2.0.0**: Mod warisan mungkin dikeluarkan (TBD)

## Amalan Terbaik {#best-practices}

### Untuk Pemasangan Baharu {#for-new-installations}

- Gunakan Auto mode (ia adalah lalai)
- Biarkan Superdav AI Agent mengesan keupayaan secara automatik
- Gunakan Ability Visibility untuk mengawal akses

### Untuk Pemasangan Sedia Ada {#for-existing-installations}

- Naik taraf ke WordPress 7.0+ apabila mungkin
- Tukar ke Auto mode untuk pengurusan yang ringkas
- Semak dan klasifikasikan keupayaan menggunakan Ability Visibility

### Untuk Keupayaan Tersuai {#for-custom-abilities}

- Daftar keupayaan melalui *hooks* WordPress (Abilities API)
- Elakkan pendaftaran keupayaan tersuai
- Uji pada WordPress 7.0+ dengan Auto mode

## Langkah Seterusnya {#next-steps}

1. **Semak versi WordPress anda**: Sahkan anda menggunakan 7.0+ untuk Auto mode
2. **Semak mod pihak ketiga anda**: Pergi ke Settings dan semak mod semasa anda
3. **Kemas kini jika perlu**: Tukar ke Auto mode jika anda menggunakan WordPress 7.0+
4. **Klasifikasikan keupayaan**: Semak dan klasifikasikan sebarang keupayaan yang tidak diklasifikasikan
5. **Uji**: Sahkan keupayaan pihak ketiga anda berfungsi dengan betul

## Topik Berkaitan {#related-topics}

- **Ability Visibility**: Kawal keupayaan mana yang didedahkan di mana
- **WordPress Abilities API**: Ketahui tentang pendaftaran keupayaan WordPress asli
- **Pembangunan Keupayaan Pihak Ketiga**: Cipta keupayaan yang berfungsi dengan Auto mode
