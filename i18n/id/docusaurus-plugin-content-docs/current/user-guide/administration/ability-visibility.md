---
title: Visibilitas Kemampuan
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilitas Kemampuan

Superdav AI Agent v1.12.0 memperkenalkan kontrol **Ability Visibility** yang mengatur permukaan mana yang menampilkan setiap kemampuan. Ini memungkinkan administrator untuk menyempurnakan kemampuan agen mana yang tersedia melalui REST API, server MCP, integrasi WooCommerce, dan antarmuka lainnya.

## Apa itu Ability Visibility?

Ability Visibility adalah sistem izin yang mengontrol:

- **Kemampuan apa** yang tersedia untuk agen
- **Di mana kemampuan itu ditampilkan** (REST API, MCP, WooCommerce, dll.)
- **Siapa yang dapat mengaksesnya** (melalui daftar izinkan mitra/partner)
- **Bagaimana kemampuan itu diklasifikasikan** (terkenal/recognized vs. tidak diklasifikasikan/unclassified)

Setiap kemampuan membawa tingkat visibilitas yang menentukan ketersediaannya di berbagai permukaan.

## Tingkat Visibilitas

### Publik (Public)

**Kemampuan Publik** tersedia di mana-mana:

- Endpoint REST API
- Server MCP
- Integrasi WooCommerce
- Antarmuka Chat
- Semua peran pengguna (dengan izin yang sesuai)

Contoh: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal

**Kemampuan Internal** hanya tersedia di dalam instalasi WordPress Anda:

- Antarmuka Chat
- Panel Admin
- Hanya pengguna yang masuk (logged-in users)
- Tidak ditampilkan melalui REST API atau integrasi eksternal

Contoh: `manage-settings`, `view-analytics`, `export-data`

### Mitra (Partner)

**Kemampuan Mitra** hanya tersedia untuk mitra yang terdaftar dalam daftar izinkan (whitelisted partners):

- Memerlukan entri daftar izinkan mitra yang eksplisit
- Tersedia melalui REST API dengan kredensial mitra
- Tersedia melalui MCP dengan otentikasi mitra
- Tidak tersedia untuk pengguna biasa

Contoh: `bulk-import-users`, `modify-billing`, `access-analytics`

### Dinonaktifkan (Disabled)

**Kemampuan Dinonaktifkan** tidak tersedia di mana pun:

- Tidak ditampilkan melalui permukaan apa pun
- Tidak tersedia di chat
- Tidak tersedia di panel admin
- Berguna untuk kemampuan yang sudah usang (deprecated) atau eksperimental

## Mengelola Ability Visibility

### Mengakses Pengaturan Ability Visibility

1. Buka **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klik tab **Abilities**
3. Anda akan melihat daftar semua kemampuan yang terinstal beserta tingkat visibilitasnya

### Melihat Detail Kemampuan

Klik pada kemampuan apa pun untuk melihat:

- **Name**: Pengenal kemampuan tersebut
- **Description**: Apa yang dilakukan kemampuan tersebut
- **Current visibility**: Publik, Internal, Mitra, atau Dinonaktifkan
- **Partner allow-list**: Mitra mana yang dapat mengakses (jika visibilitas Mitra)
- **Last updated**: Kapan visibilitas terakhir diubah
- **Status**: Terkenal (Recognized) atau Tidak Diklasifikasikan (Unclassified)

### Mengubah Tingkat Visibilitas

Untuk mengubah visibilitas kemampuan:

1. Klik kemampuan di daftar
2. Pilih tingkat visibilitas baru dari menu tarik-turun (dropdown)
3. Jika memilih "Partner", tambahkan pengenal mitra ke daftar izinkan
4. Klik **Save**

Contoh:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operasi Massal (Bulk Operations)

Untuk mengubah visibilitas beberapa kemampuan:

1. Centang kotak di samping kemampuan
2. Pilih tingkat visibilitas baru dari menu tarik-turun tindakan massal
3. Klik **Apply**

## Partner Allow-List

**Partner allow-list** mengontrol mitra eksternal mana yang dapat mengakses kemampuan tingkat Mitra.

### Menambahkan Mitra

1. Buka **Superdav AI Agent** → **Settings** → **Partners**
2. Klik **Add Partner**
3. Masukkan pengenal mitra (biasanya kunci API atau ID organisasi)
4. Opsional tambahkan nama dan deskripsi mitra
5. Klik **Save**

### Menetapkan Kemampuan ke Mitra

Setelah menambahkan mitra:

1. Buka tab **Abilities**
2. Temukan kemampuan dengan visibilitas Mitra
3. Klik untuk mengedit
4. Di bagian "Partner allow-list", centang kotak untuk mitra yang seharusnya memiliki akses
5. Klik **Save**

### Mencabut Akses Mitra

Untuk menghapus akses mitra:

1. Edit kemampuan
2. Hapus centang kotak mitra di daftar izinkan
3. Klik **Save**

Mitra tersebut akan segera kehilangan akses ke kemampuan itu.

## Kemampuan yang Tidak Diklasifikasikan (Unclassified Abilities)

Ketika Anda menginstal kemampuan pihak ketiga yang tidak dikenali oleh Superdav AI Agent, kemampuan tersebut ditandai sebagai **Unclassified**.

### Pemberitahuan Admin untuk Kemampuan yang Tidak Diklasifikasikan

Anda akan melihat pemberitahuan admin:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Meninjau Kemampuan yang Tidak Diklasifikasikan

1. Klik **Review Abilities** di pemberitahuan
2. Untuk setiap kemampuan yang tidak diklasifikasikan, Anda akan melihat:
   - Nama dan deskripsi kemampuan
   - Sumber (plugin/addon mana yang menginstalnya)
   - Tingkat visibilitas yang disarankan
   - Penilaian keamanan

3. Pilih tingkat visibilitas:
   - **Public**: Percayai kemampuan tersebut; tampilkan di mana-mana
   - **Internal**: Batasi hanya untuk penggunaan internal
   - **Partner**: Batasi untuk mitra tertentu
   - **Disabled**: Jangan gunakan kemampuan ini

4. Klik **Classify** untuk menyimpan keputusan Anda

### Mengapa Mengklasifikasikan Kemampuan yang Tidak Diklasifikasikan?

Mengklasifikasikan kemampuan:

- **Meningkatkan keamanan**: Anda secara eksplisit menyetujui apa yang ditampilkan
- **Mencegah kecelakaan**: Kemampuan yang tidak diklasifikasikan dinonaktifkan secara default
- **Mengaktifkan fitur**: Setelah diklasifikasikan, kemampuan tersebut menjadi tersedia
- **Mendokumentasikan keputusan**: Pilihan Anda dicatat untuk tujuan audit

## Visibilitas di Berbagai Permukaan

### REST API

**Kemampuan Publik** tersedia melalui endpoint REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Kemampuan Internal dan Mitra** tidak tersedia melalui REST API.

### Server MCP

**Kemampuan Publik** tersedia melalui MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Kemampuan Internal** tidak ditampilkan melalui MCP.

**Kemampuan Mitra** hanya tersedia dengan kredensial mitra.

### Integrasi WooCommerce

**Kemampuan Publik** yang terkait dengan WooCommerce tersedia:

- Manajemen produk
- Pemrosesan pesanan
- Komunikasi pelanggan

**Kemampuan Internal** tidak ditampilkan ke WooCommerce.

### Antarmuka Chat

**Semua kemampuan** (Publik, Internal, Mitra) tersedia di chat, tergantung pada izin pengguna:

- Administrator melihat semua kemampuan
- Pengguna biasa hanya melihat kemampuan Publik
- Mitra melihat kemampuan Publik + Mitra (jika terdaftar dalam daftar izinkan)

## Praktik Terbaik Keamanan

### Prinsip Hak Akses Terkecil (Principle of Least Privilege)

- Atur kemampuan ke visibilitas paling ketat yang masih memungkinkan penggunaannya
- Gunakan visibilitas Mitra untuk operasi sensitif
- Nonaktifkan kemampuan yang tidak Anda gunakan

### Audit Rutin

- Tinjau visibilitas kemampuan setiap bulan
- Periksa kemampuan yang tidak diklasifikasikan
- Hapus akses untuk mitra yang tidak digunakan

### Pencatatan dan Pemantauan (Logging and Monitoring)

- Pantau kemampuan mana yang paling sering digunakan
- Lacak pola akses mitra
- Beri peringatan atas penggunaan kemampuan yang tidak biasa

### Kemampuan Pihak Ketiga

- Tinjau kemampuan pihak ketiga sebelum mengaktifkannya
- Klasifikasikan secara eksplisit
- Mulai dengan visibilitas Internal atau Mitra
- Promosikan ke Publik hanya setelah melalui pemeriksaan menyeluruh

## Pemecahan Masalah (Troubleshooting)

**Sebuah kemampuan tidak muncul di daftar**
- Verifikasi bahwa kemampuan tersebut terinstal dan aktif
- Periksa bahwa plugin/addon telah diaktifkan
- Muat ulang halaman

**Saya tidak bisa mengubah visibilitas kemampuan**
- Verifikasi bahwa Anda memiliki izin administrator
- Periksa bahwa kemampuan tersebut tidak dikunci oleh plugin
- Coba nonaktifkan plugin yang bertentangan

**Seorang mitra tidak dapat mengakses kemampuan**
- Verifikasi bahwa mitra tersebut ada dalam daftar izinkan
- Periksa bahwa visibilitas kemampuan diatur ke Mitra
- Konfirmasi bahwa kredensial mitra sudah benar
- Periksa log API untuk kesalahan otentikasi

**Kemampuan yang tidak diklasifikasikan terus muncul**
- Tinjau dan klasifikasikan di pemberitahuan admin
- Periksa bahwa klasifikasi Anda telah disimpan
- Verifikasi bahwa plugin yang menyediakan kemampuan tersebut sudah diperbarui

## Migrasi dari Mode Lama (Legacy Mode)

Jika Anda meningkatkan dari versi Superdav AI Agent yang lebih lama:

- Semua kemampuan yang ada secara otomatis diklasifikasikan sebagai Publik
- Tinjau dan sesuaikan visibilitas sesuai kebutuhan
- Tidak ada tindakan yang diperlukan kecuali Anda ingin membatasi akses

Lihat **Third-Party Mode Migration** untuk detail lebih lanjut tentang transisi ke integrasi Abilities API asli.

## Langkah Selanjutnya

Setelah mengonfigurasi visibilitas kemampuan:

1. **Tinjau kemampuan Anda**: Audit semua kemampuan yang terinstal
2. **Klasifikasikan kemampuan yang tidak diklasifikasikan**: Tanggapi pemberitahuan admin
3. **Siapkan mitra**: Tambahkan mitra jika menggunakan visibilitas Mitra
4. **Pantau penggunaan**: Lacak kemampuan mana yang paling sering digunakan
5. **Dokumentasikan keputusan**: Buat catatan tentang alasan Anda memilih setiap tingkat visibilitas
