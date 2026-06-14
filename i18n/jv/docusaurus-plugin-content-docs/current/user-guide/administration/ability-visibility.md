---
title: Keterlihatan Kemampuan
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibilitas Kemampuan (Ability Visibility)

Superdav AI Agent v1.12.0 nggawa kontrol **Ability Visibility** sing ngatur kemampuan apa wae sing bakal krosokake saben permukaan (surface). Iki menehi kesempatan marang administrator kanggo ngatur kanthi teliti kemampuan agent piye sing bisa diakses liwat REST API, MCP servers, integrasi WooCommerce, lan antarmuka liyane.

## Apa iku Ability Visibility?

Ability Visibility iku sistem izin sing ngontrol:

- **Kemampuan apa wae** sing bisa diakses dening agen
- **Ing ngendi kemampuan kuwi krosokake** (REST API, MCP, WooCommerce, lsp.)
- **Sapa sing bisa nggunakake** (liwat daftar ijin mitra/partner)
- **Piye klasifikasié** (diakoni vs. ora diakoni)

Sabowang kemampuan duwe tingkat visibilitas sing nuduhake ketersediaane ing permukaan sing beda.

## Tingkat Visibilitas

### Publik (Public)

**Kemampuan publik** bisa diakses nang mana wae:

- REST API endpoints
- MCP servers
- Integrasi WooCommerce
- Antarmuka obrolan (Chat interfaces)
- Kabeh peran pengguna (karo izin sing pas)

Conto: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal

**Kemampuan internal** mung bisa diakses ing instalasi WordPress sampeyan dhewe:

- Antarmuka obrolan
- Admin panels
- Pengguna sing wis login wae
- Ora krosokake liwat REST API utawa integrasi eksternal

Conto: `manage-settings`, `view-analytics`, `export-data`

### Partner

**Kemampuan mitra (Partner abilities)** mung bisa diakses dening mitra sing wis didaftar (whitelisted):

- Perlu mlebu daftar ijin mitra kanthi gamblang
- Bisa diakses liwat REST API nganggo kredensial mitra
- Bisa diakses liwat MCP nganggo otentikasi mitra
- Ora bisa diakses dening pengguna biasa

Conto: `bulk-import-users`, `modify-billing`, `access-analytics`

### Dinonaktifkan (Disabled)

**Kemampuan sing dinonaktifake** ora bisa diakses nang ngendi wae:

- Ora krosokake liwat permukaan apa wae
- Ora bisa diakses ing obrolan
- Ora bisa diakses ing admin panels
- Berguna kanggo kemampuan sing wis usang utawa eksperimental

## Ngaturake Keterlihatan Kemampuan (Managing Ability Visibility)

### Akses Pengaturan Keterlihatan Kemampuan (Accessing Ability Visibility Settings)

1. Tindakake menyang **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klik tab **Abilities**
3. Sampeyan bakal nemokake daftar kabeh kemampuan sing wis dipasang karo tingkat keterlihatané.

### Melihat Detail Kemampuan (Viewing Ability Details)

Klik siji kemampuan kanggo ndelok:

- **Name**: ID saka kemampuan kuwi
- **Description**: Apa gunane kemampuan kuwi
- **Current visibility**: Publik, Internal, Partner, utawa Dinontekake (Disabled)
- **Partner allow-list**: Mitra sing bisa akses (yen keterlihatan Partner)
- **Last updated**: Kapan keterlihatan terakhir diubah
- **Status**: Wis dikenali utawa Belum diklasifikasi

### Ngowahi Tingkat Keterlihatan (Changing Visibility Levels)

Kanggo ngowahi keterlihatan siji kemampuan:

1. Klik kemampuan ing daftar kuwi
2. Pilih tingkat keterlihatan anyar saka dropdown
3. Yen milih "Partner", tambahkan ID mitra menyang allow-list
4. Klik **Save**

Conto:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operasi Massal (Bulk Operations)

Kanggo ngowahi keterlihatan kanggo sawetara kemampuan:

1. Centak kotak sebelah kemampuan sing arep diubah
2. Pilih tingkat keterlihatan anyar saka dropdown aksi massal
3. Klik **Apply**

## Partner Allow-List

**Partner allow-list** kuwi ngatur mitra eksternal sing bisa akses kemampuan level Partner.

### Nambah Mitra (Adding Partners)

1. Tindakake menyang **Superdav AI Agent** → **Settings** → **Partners**
2. Klik **Add Partner**
3. Masukkan ID mitra (biasane API key utawa organization ID)
4. Opsi, tambahkan nama lan deskripsi mitra
5. Klik **Save**

### Ngeneni Kemampuan Marang Mitra (Assigning Abilities to Partners)

Sawise nambah mitra:

1. Tindakake menyang tab **Abilities**
2. Cari kemampuan (ability) yang punya visibilitas Partner
3. Klik untuk mengeditnya
4. Di bagian "Partner allow-list", centang kotak untuk partner yang seharusnya bisa akses
5. Klik **Save**

### Mencabut Akses Partner

Untuk menghilangkan akses partner:

1. Edit kemampuan tersebut
2. Batalkan centang pada kotak partner di daftar izinkan (allow-list)
3. Klik **Save**

Partner akan langsung kehilangan akses ke kemampuan itu.

## Abilities yang Belum Diklasifikasikan (Unclassified Abilities)

Ketika kamu menginstal kemampuan pihak ketiga yang tidak dikenali oleh Superdav AI Agent, itu akan ditandai sebagai **Unclassified**.

### Pemberitahuan Admin untuk Abilities yang Belum Diklasifikasikan

Kamu akan melihat pemberitahuan admin seperti ini:

```
⚠️ Abilities yang Belum Diklasifikasikan Terdeteksi

Kemampuan berikut telah diinstal tetapi belum dikenali:
- custom-import-tool
- external-api-wrapper

Kemampuan ini mungkin menimbulkan risiko keamanan atau kompatibilitas.
Mohon ditinjau dan diklasifikasikan.

[Review Abilities] [Dismiss]
```

### Meninjau Abilities yang Belum Diklasifikasikan

1. Klik **Review Abilities** di dalam pemberitahuan itu
2. Untuk setiap kemampuan yang belum diklasifikasikan, kamu akan melihat:
   - Nama dan deskripsi kemampuan
   - Sumber (plugin/addon mana yang menginstalnya)
   - Tingkat visibilitas yang disarankan
   - Penilaian keamanan

3. Pilih tingkat visibilitas:
   - **Public**: Percaya pada kemampuan tersebut; buka di mana saja
   - **Internal**: Batasi hanya untuk penggunaan internal saja
   - **Partner**: Batasi hanya untuk partner tertentu
   - **Disabled**: Jangan gunakan kemampuan ini

4. Klik **Classify** untuk menyimpan keputusanmu

### Kenapa Perlu Mengklasifikasikan Abilities yang Belum Diklasifikasikan?

Mengklasifikasikan kemampuan:

- **Meningkatkan keamanan**: Kamu secara eksplisit menyetujui apa yang akan ditampilkan
- **Mencegah kecelakaan**: Kemampuan yang belum diklasifikasikan dinonaktifkan secara default
- **Memungkinkan fitur**: Setelah diklasifikasikan, kemampuan tersebut bisa digunakan
- **Mendokumentasikan keputusan**: Pilihanmu dicatat untuk keperluan audit

## Visibility ing Berbagai Permukaan

### REST API

**Kemampuan publik** bisa diakses lewat REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Kemampuan internal dan mitra** nggak bisa diakses lewat REST API.

### MCP Servers

**Kemampuan publik** bisa diakses lewat MCP:

```
MCP Server: Superdav AI Agent
Kemampuan yang tersedia:
- scaffold-block-theme
- activate-theme
- send-email
```

**Kemampuan internal** nggak ditampilkan lewat MCP.

**Kemampuan mitra** cuma bisa dipakai kalau punya kredensial mitra.

### Integrasi WooCommerce

**Kemampuan publik** terkait WooCommerce bisa diakses:

- Manajemen produk
- Pemrosesan pesanan
- Komunikasi pelanggan

**Kemampuan internal** nggak ditampilkan ke WooCommerce.

### Antarmuka Chat

**Semua kemampuan** (Publik, Internal, Mitra) bisa dipakai di chat, tergantung izin pengguna:

- Administrator lihat semua kemampuan
- Pengguna biasa cuma lihat kemampuan Publik
- Mitra lihat kemampuan Publik + Mitra (kalau sudah masuk daftar putih/whitelisted)

## Praktik Terbaik Keamanan

### Prinsip Hak Istimewa Paling Minimal (Principle of Least Privilege)

- Atur kemampuan ke visibilitas yang paling ketat tapi masih bisa dipakai.
- Gunakan visibilitas Mitra untuk operasi yang sensitif.
- Matikan kemampuan yang nggak kamu pakai.

### Audit Rutin

- Cek visibilitas kemampuan setiap bulan.
- Periksa apakah ada kemampuan yang belum diklasifikasikan.
- Hapus akses untuk mitra yang sudah tidak dipakai.

### Pencatatan dan Pemantauan (Logging and Monitoring)

- Pantau kemampuan mana yang paling sering dipakai.
- Lacak pola akses mitra.
- Beri peringatan kalau ada penggunaan kemampuan yang aneh.

### Kemampuan Pihak Ketiga (Third-Party Abilities)

- Cek kemampuan pihak ketiga sebelum mengaktifkannya.
- Klasifikasikan mereka secara jelas.
- Mulai dengan visibilitas Internal atau Mitra dulu.
- Baru naikkan ke Publik setelah sudah diperiksa baik.

## Troubleshooting

**Sebutan kemampuan ora muncul ing daftar**
- Cek yen kemampuan wis terpasang lan aktif
- Pastikan plugin/addon wis diaktifake
- Segarkan (refresh) halaman

**Aku ora bisa ngubah visibilitas suatu kemampuan**
- Pastikan sampeyan duwe izin administrator
- Cek yen kemampuan ora dikunci dening plugin
- Coba matikan plugin sing mungkin bentrok

**Mitra ora bisa akses kemampuan**
- Pastikan mitra wis ana ing daftar izone (allow-list)
- Cek yen visibilitas kemampuan wis diatur dadi Partner
- Konfirmasi manawa kredensial mitra bener
- Cek log API kanggo error otentikasi

**Kemampuan sing ora diklasifikasi terus muncul**
- Tinjau lan klasifikasi ing notifikasi admin
- Cek manawa klasifikasi sampeyan wis tersimpan
- Pastikan plugin sing nyediakake kemampuan kuwi wis update

## Migrasi saka Mode Lawas (Legacy Mode)

Yen sampeyan lagi ng-upgrade saka versi Superdav AI Agent sing luwih lawas:

- Kabeh kemampuan sing ana saiki otomatis diklasifikasi dadi Publik (Public)
- Tinjau lan sesuaikan visibilitas miturut kaperluane
- Ora perlu tumindak yen sampeyan ora arep ngetokake akses

Lihat **Migrasi Mode Pihak Ketiga (Third-Party Mode Migration)** kanggo rincian luwih lanjut babagan transisi menyang integrasi API Kemampuan asli.

## Langkah Salajengipun

Sawise ngatur visibilitas kemampuan:

1. **Tinjau kemampuan sampeyan**: Audit kabeh kemampuan sing wis terpasang
2. **Klasifikasi kemampuan sing ora diklasifikasi**: Wangsulake notifikasi admin
3. **Siapake mitra**: Tambah mitra yen nggunakake visibilitas Partner
4. **Pantau pemakaian**: Lacak kemampuan sing paling akeh dienggo
5. **Dokumentasi keputusan**: Jaga catatan kenapa sampeyan milih tingkat visibilitas saben kemampuan
