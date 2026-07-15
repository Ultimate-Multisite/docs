---
title: Migrasi Mode Pihak Ketiga
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrasi Mode Pihak Ketiga

Superdav AI Agent v1.12.0 mengubah cara penanganan kemampuan (abilities) pihak ketiga. **Mode pihak ketiga sekarang secara default menggunakan auto**, memungkinkan integrasi API Abilities WordPress secara *native* pada WordPress 7.0+ tanpa konfigurasi manual.

## Apa yang Berubah? {#what-changed}

### Sebelum v1.12.0 {#before-v1120}

Kemampuan pihak ketiga memerlukan konfigurasi manual:

- Anda harus secara eksplisit mengaktifkan "third-party mode"
- Kemampuan dimuat dari *registry* kustom
- Integrasi dengan WordPress Abilities API bersifat opsional
- Mode *Legacy* adalah *default*-nya

### Setelah v1.12.0 {#after-v1120}

Kemampuan pihak ketiga bekerja secara otomatis:

- Mode pihak ketiga *default*-nya adalah "auto"
- Kemampuan terintegrasi secara *native* dengan WordPress Abilities API
- Tidak perlu konfigurasi manual pada WordPress 7.0+
- Mode *Legacy* masih tersedia untuk versi WordPress yang lebih lama

## Siapa yang Terdampak? {#who-is-affected}

### Instalasi Baru (WordPress 7.0+) {#new-installations-wordpress-70}

**Tidak perlu tindakan.** Mode pihak ketiga secara otomatis diatur ke "auto", dan kemampuan berfungsi langsung (*out of the box*).

### Instalasi yang Sudah Ada {#existing-installations}

**Pengaturan Anda dipertahankan.** Jika Anda menggunakan:

- **Legacy mode**: Anda tetap berada dalam mode *legacy* (tidak ada perubahan)
- **Manual third-party mode**: Anda tetap dalam mode manual (tidak ada perubahan)
- **Auto mode**: Anda melanjutkan dengan mode auto (tidak ada perubahan)

### Versi WordPress Sebelum 7.0 {#wordpress-versions-before-70}

**Mode *Legacy* masih tersedia.** Jika Anda menggunakan WordPress 6.x atau lebih awal:

- Mode pihak ketiga *default*-nya adalah "legacy"
- Anda dapat mengaktifkan mode pihak ketiga secara manual jika diinginkan
- Tingkatkan ke WordPress 7.0+ untuk menggunakan Abilities API *native*

## Memahami Mode {#understanding-the-modes}

### Auto Mode (Default Baru) {#auto-mode-new-default}

**Auto mode** menggunakan integrasi WordPress Abilities API *native*:

- Kemampuan didaftarkan melalui *hook* WordPress
- Kompatibilitas penuh dengan WordPress 7.0+ Abilities API
- Penemuan kemampuan pihak ketiga secara otomatis
- Tidak perlu konfigurasi manual

**Kapan digunakan**: WordPress 7.0+ dengan kemampuan pihak ketiga

### Manual Mode {#manual-mode}

**Manual mode** memerlukan konfigurasi eksplisit:

- Anda menentukan kemampuan pihak ketiga mana yang akan dimuat
- Berguna untuk pengujian atau pemuatan kemampuan yang selektif
- Memerlukan pengeditan file konfigurasi
- Kontrol lebih besar, tetapi pengaturan lebih banyak

**Kapan digunakan**: Pengujian, pemuatan kemampuan selektif, atau konfigurasi kustom

### Legacy Mode {#legacy-mode}

**Legacy mode** menggunakan sistem kemampuan pihak ketiga lama:

- *Registry* kemampuan kustom (bukan WordPress Abilities API)
- Kompatibel mundur dengan versi WordPress yang lebih lama
- Tidak ada integrasi WordPress *native*
- Sudah usang (*deprecated*) tetapi masih didukung

**Kapan digunakan**: WordPress 6.x atau lebih awal, atau ketika Anda memerlukan kompatibilitas *legacy*

## Memeriksa Mode Anda Saat Ini {#checking-your-current-mode}

### Melalui Admin Panel {#via-admin-panel}

1. Buka **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Cari pengaturan **Third-Party Mode**
3. Anda akan melihat mode Anda saat ini dan opsi untuk mengubahnya

### Melalui Kode {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', atau 'legacy'
```

## Mengubah Mode Anda {#changing-your-mode}

### Beralih ke Auto Mode {#switch-to-auto-mode}

Jika Anda menggunakan WordPress 7.0+ dan ingin menggunakan mode auto:

1. Buka **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Auto (WordPress Abilities API)**
4. Klik **Save**

Superdav AI Agent akan secara otomatis menemukan dan mendaftarkan kemampuan pihak ketiga.

### Beralih ke Manual Mode {#switch-to-manual-mode}

Jika Anda ingin mengontrol secara manual kemampuan mana yang dimuat:

1. Buka **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Manual**
4. Klik **Save**
5. Edit file konfigurasi Anda untuk menentukan kemampuan mana yang akan dimuat

### Beralih ke Legacy Mode {#switch-to-legacy-mode}

Jika Anda memerlukan kompatibilitas *legacy*:

1. Buka **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Legacy**
4. Klik **Save**

## Keuntungan Auto Mode {#benefits-of-auto-mode}

### Penemuan Otomatis {#automatic-discovery}

Kemampuan ditemukan secara otomatis dari:

- Plugin yang terinstal
- Tema aktif
- Plugin *must-use*
- Plugin *drop-in*

Tidak perlu pendaftaran manual.

### Integrasi *Native* {#native-integration}

Kemampuan terintegrasi dengan WordPress Abilities API:

- Konsisten dengan *core* WordPress
- Berfungsi dengan admin WordPress
- Kompatibel dengan plugin lain yang menggunakan Abilities API
- Tahan masa depan seiring perkembangan WordPress

### Manajemen yang Disederhanakan {#simplified-management}

- Tidak ada file konfigurasi yang perlu diedit
- Tidak ada pendaftaran kemampuan manual
- Kontrol Visibilitas Kemampuan bekerja secara otomatis
- Pemberitahuan admin memberi tahu Anda tentang kemampuan yang belum diklasifikasikan

### Performa Lebih Baik {#better-performance}

- Kemampuan di-*cache*
- Dimuat secara malas (*lazy-loaded*) sesuai permintaan
- Dioptimalkan untuk WordPress 7.0+

## Jalur Migrasi {#migration-path}

### Jika Anda Menggunakan WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Tingkatkan ke WordPress 7.0+** (ketika siap)
2. **Perbarui Superdav AI Agent** ke v1.12.0+
3. **Ubah mode pihak ketiga ke Auto** (opsional; mode *legacy* masih berfungsi)
4. **Tinjau visibilitas kemampuan** untuk memastikan kontrol akses yang tepat

### Jika Anda Menggunakan WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Perbarui Superdav AI Agent** ke v1.12.0+
2. **Verifikasi mode pihak ketiga diatur ke Auto** (seharusnya sudah *default*)
3. **Tinjau visibilitas kemampuan** untuk memastikan kontrol akses yang tepat
4. **Uji kemampuan pihak ketiga** untuk memastikan berfungsi

## Pemecahan Masalah {#troubleshooting}

### Kemampuan tidak dimuat dalam mode auto {#abilities-arent-loading-in-auto-mode}

- Verifikasi Anda menggunakan WordPress 7.0+
- Periksa bahwa mode pihak ketiga diatur ke "Auto"
- Verifikasi plugin yang menyediakan kemampuan tersebut aktif
- Periksa *error log* WordPress untuk kesalahan pendaftaran

### Saya ingin mempertahankan mode *legacy* {#i-want-to-keep-legacy-mode}

- Buka **Settings** → **Third-Party Mode**
- Pilih **Legacy**
- Klik **Save**
- Mode *legacy* akan terus berfungsi

### Kemampuan kustom saya tidak muncul {#my-custom-abilities-arent-showing}

- Verifikasi bahwa kemampuan tersebut didaftarkan melalui *hook* WordPress
- Periksa bahwa mereka mengimplementasikan Abilities API dengan benar
- Tinjau *error log* WordPress
- Gunakan halaman admin **Ability Visibility** untuk melihat semua kemampuan yang terdaftar

### Saya mendapatkan pemberitahuan "unclassified ability" {#im-getting-unclassified-ability-notices}

- Ini normal untuk kemampuan pihak ketiga yang baru
- Tinjau dan klasifikasikan di pemberitahuan admin
- Lihat **Ability Visibility** untuk detail klasifikasi

## Kompatibilitas Mundur {#backward-compatibility}

### Konfigurasi yang Ada {#existing-configurations}

Jika Anda memiliki konfigurasi kemampuan pihak ketiga yang sudah ada:

- **Legacy mode**: Konfigurasi Anda terus berfungsi
- **Manual mode**: Konfigurasi Anda terus berfungsi
- **Auto mode**: Konfigurasi Anda diabaikan (mode auto mengambil alih)

Untuk mempertahankan konfigurasi kustom Anda, tetaplah dalam mode Manual atau Legacy.

### Linimasa Penghentian Dukungan (*Deprecation Timeline*) {#deprecation-timeline}

- **v1.12.0**: Mode *Legacy* dan Manual masih sepenuhnya didukung
- **v1.13.0+**: Mode *Legacy* mungkin menampilkan pemberitahuan *deprecation*
- **v2.0.0**: Mode *Legacy* mungkin dihapus (Akan ditentukan)

## Praktik Terbaik {#best-practices}

### Untuk Instalasi Baru {#for-new-installations}

- Gunakan Auto mode (ini *default*-nya)
- Biarkan Superdav AI Agent menemukan kemampuan secara otomatis
- Gunakan Ability Visibility untuk mengontrol akses

### Untuk Instalasi yang Sudah Ada {#for-existing-installations}

- Tingkatkan ke WordPress 7.0+ jika memungkinkan
- Beralih ke Auto mode untuk manajemen yang lebih sederhana
- Tinjau dan klasifikasikan kemampuan menggunakan Ability Visibility

### Untuk Kemampuan Kustom {#for-custom-abilities}

- Daftarkan kemampuan melalui *hook* WordPress (Abilities API)
- Hindari *registry* kemampuan kustom
- Uji pada WordPress 7.0+ dengan Auto mode

## Langkah Selanjutnya {#next-steps}

1. **Periksa versi WordPress Anda**: Verifikasi Anda menggunakan 7.0+ untuk Auto mode
2. **Tinjau mode pihak ketiga Anda**: Buka Settings dan periksa mode Anda saat ini
3. **Perbarui jika perlu**: Beralih ke Auto mode jika Anda menggunakan WordPress 7.0+
4. **Klasifikasikan kemampuan**: Tinjau dan klasifikasikan kemampuan apa pun yang belum diklasifikasikan
5. **Uji**: Verifikasi kemampuan pihak ketiga Anda berfungsi dengan benar

## Topik Terkait {#related-topics}

- **Ability Visibility**: Mengontrol kemampuan mana yang ditampilkan di mana
- **WordPress Abilities API**: Pelajari tentang pendaftaran kemampuan WordPress *native*
- **Third-Party Ability Development**: Membuat kemampuan yang bekerja dengan Auto mode
