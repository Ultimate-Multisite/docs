---
title: Kamampuhan Katinggalian
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Keterlihatan Kemampuan (Ability Visibility)

Superdav AI Agent v1.12.0 ngajang kontrol **Ability Visibility** anu ngatur kemampuan mana waé nu dipapancake ku permukaan (surface). Ieu ngidinan admin pikeun ngatur leuwih detail kemampuan agent mana nu bisa diakses lewat REST API, MCP servers, integrasi WooCommerce, jeung antarmuka séjénna.

## Naon éta Ability Visibility? {#what-is-ability-visibility}

Ability Visibility téh sistem izin anu ngontrol:

- **Kemampuan naon** waé nu bisa dipaké ku agent
- **Di mana pangawasa éta dipapancake** (REST API, MCP, WooCommerce, jsb, jsb, jsb, jsb)
- **Siapa waé nu bisa ngagunake** (lewat daftar diizinke partner/allow-list)
- **Kumaha klasifikasina** (diakui vs. teu diakui)

Unggal kemampuan miboga tingkat keterlihatan (visibility level) anu nentueun kaperluanana di unggal permukaan.

## Tingkat Keterlihatan (Visibility Levels) {#visibility-levels}

### Publik (Public) {#public}

**Kemampuan publik** bisa dipaké di mana waé:

- Endpoint REST API
- MCP servers
- Integrasi WooCommerce
- Antarmuka obrolan (Chat interfaces)
- Sadaya peran pengguna (kalawan izin anu pas)

Contona: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal {#internal}

**Kemampuan internal** ngan bisa dipaké di jero instalasi WordPress anjeun:

- Antarmuka obrolan
- Panel admin
- Perangkat anu udah login (logged-in users) waé
- Teu dipapancake lewat REST API atawa integrasi luar (external integrations)

Contona: `manage-settings`, `view-analytics`, `export-data`

### Partner {#partner}

**Kemampuan partner** ngan bisa dipaké ku partner anu udah diizinke (whitelisted):

- Perlu aya dina daftar izin partner anu jelas
- Bisa dipaké lewat REST API kalawan kredensial partner
- Bisa dipaké lewat MCP kalawan otentikasi partner
- Teu bisa dipaké ku pengguna biasa (regular users)

Contona: `bulk-import-users`, `modify-billing`, `access-analytics`

### Dinonaktifkeun (Disabled) {#disabled}

**Kemampuan anu dinonaktifkeun** teu bisa dipaké di mana waé:

- Teu dipapancake lewat permukaan naon waé
- Teu bisa dipaké dina obrolan
- Teu bisa dipaké dina panel admin
- Berguna pikeun kemampuan anu geus usang (deprecated) atawa eksperimental

## Ngaturkeun Visibilitas Kemampuan {#managing-ability-visibility}

### Aksés Pengaturan Visibilitas Kemampuan {#accessing-ability-visibility-settings}

1. Pergi ka **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klik tab **Abilities** (Kemampuan)
3. Di sana, anjeun bakal nempo daftar semua kemampuan anu geus dipasang jeung tingkat visibilitasna.

### Ngajak Nélak Détail Kemampuan {#viewing-ability-details}

Klik kana hiji kemampuan pikeun nempo:

- **Name**: Idénifikasi kemampuan éta
- **Description**: Naon fungsi kemampuan éta
- **Current visibility**: Publik (Public), Internal, Partner, atawa Dinonaktifkeun (Disabled)
- **Partner allow-list**: Saha waé partner anu bisa ngagunakeun (upami visibilitas Partner)
- **Last updated**: Imahna kapan visibilitas terakhir dirobah
- **Status**: Geus dikenali (Recognized) atawa Belum diklasifikasi (Unclassified)

### Ngaganti Tingkat Visibilitas {#changing-visibility-levels}

Kanggo ngarobah visibilitas hiji kemampuan:

1. Klik kana kemampuan dina daftar éta
2. Pilih tingkat visibilitas anyar tina dropdown
3. Upami milih "Partner", tambihan idénifikasi partner ka allow-listna
4. Klik **Save** (Simpan)

Contona:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operasi Massal (Bulk Operations) {#bulk-operations}

Kanggo ngarobah visibilitas kanggo sababaraha kemampuan:

1. Centang kotak di sisi kemampuan anu rék dirobah
2. Pilih tingkat visibilitas anyar tina dropdown aksi massal (bulk action)
3. Klik **Apply** (Terapkan)

## Partner Allow-List {#partner-allow-list}

**Partner allow-list** ngatur partner luar mana waé anu bisa ngagunakeun kemampuan level Partner.

### Nambihan Partner {#adding-partners}

1. Pergi ka **Superdav AI Agent** → **Settings** → **Partners**
2. Klik **Add Partner** (Tambah Partner)
3. Masukkan idénifikasi partnerna (biasana mangrupa API key atawa organization ID)
4. Upami perlu, tambihan ngaran jeung deskripsi partner
5. Klik **Save** (Simpan)

### Ngatentukan Kemampuan ka Partner {#assigning-abilities-to-partners}

Sanggeus nambihan hiji partner:

1. Pindah ka tab **Abilities**
2. Cari kemampuan (ability) anu keur aya visibilitas Partner
3. Klik pikeun ngeditna
4. Di bagian "Partner allow-list", centang kotak pikeun partner nu kudu boga akses
5. Klik **Save**

### Ngabaturan Akses Partner {#revoking-partner-access}

Pikeun ngahapus akses hiji partner:

1. Edit kemampuan éta
2. Batalkan centang kotak partner dina allow-list
3. Klik **Save**

Partner bakal langsung teu boga akses ka kemampuan éta deui.

## Abilities Nu Belum Diklasifikasi (Unclassified Abilities) {#unclassified-abilities}

Lamun anjeun nginstal kemampuan pihak ketiga anu teu dikenali ku Superdav AI Agent, éta bakal ditandai salaku **Unclassified**.

### Pemberitahuan Admin pikeun Abilities Unclassified {#admin-notice-for-unclassified-abilities}

Anjeun bakal nempo pemberitahuan admin:

```
⚠️ Abilities Unclassified Ditempatkeun

Abilities berikut diinstal tapi teu dikenali:
- custom-import-tool
- external-api-wrapper

Abilities ieu bisa ngabalukarkeun risiko keamanan atawa kompatibilitas.
Mangga ditinjau sareng diklasifikasi.

[Review Abilities] [Dismiss]
```

### Meninjau Abilities Unclassified {#reviewing-unclassified-abilities}

1. Klik **Review Abilities** dina pemberitahuan éta
2. Pikeun unggal kemampuan nu teu diklasifikasi, anjeun bakal nempo:
   - Ngaran je deskripsi kemampuan
   - Sumber (plugin/addon mana anu nginstale éta)
   - Tingkat visibilitas anu disaranakeun
   - Penilaian keamanan

3. Pilih tingkat visibilitas:
   - **Public**: Percaya kana kemampuan éta; paparin di mana waé
   - **Internal**: Batasi ngan ukur kanggo panganggo internal
   - **Partner**: Batasi ka partner-partner tartamtu
   - **Disabled**: Tong anggo kemampuan ieu

4. Klik **Classify** pikeun nyimpen keputusan anjeun

### Naha Perlu Ngaklasifikasi Abilities Unclassified? {#why-classify-unclassified-abilities}

Ngaklasifikasi kemampuan:

- **Ngaraksa keamanan**: Anjeun ngaluarkeun sacara eksplisit naon anu dipaparin
- **Mencegah kajadian salah**: Abilities nu teu diklasifikasi bakal dibatalkan secara default
- **Ngabagéake fitur**: Sakali diklasifikasi, kemampuan éta jadi bisa dianggo
- **Nuliskeun keputusan**: Pilihan anjeun dicatet pikeun tujuan audit

## Kelihatan di Permukaan Berbeda {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Kemampuan publik** bisa diakses lewat REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Kemampuan internal dan mitra** tidak bisa diakses lewat REST API.

### MCP Servers {#mcp-servers}

**Kemampuan publik** tersedia lewat MCP:

```
MCP Server: Superdav AI Agent
Kemampuan yang tersedia:
- scaffold-block-theme
- activate-theme
- send-email
```

**Kemampuan internal** tidak ditampilkan lewat MCP.

**Kemampuan mitra** hanya bisa diakses dengan kredensial mitra.

### Integrasi WooCommerce {#woocommerce-integration}

**Kemampuan publik** terkait WooCommerce tersedia:

- Manajemen produk
- Pemrosesan pesanan
- Komunikasi pelanggan

**Kemampuan internal** tidak ditampilkan ke WooCommerce.

### Antarmuka Chat {#chat-interface}

**Semua kemampuan** (Publik, Internal, Mitra) bisa diakses di chat, tergantung izin pengguna:

- Administrator melihat semua kemampuan
- Pengguna biasa hanya melihat kemampuan Publik
- Mitra melihat kemampuan Publik + kemampuan Mitra (jika sudah masuk daftar putih/whitelisted)

## Praktik Terbaik Keamanan {#security-best-practices}

### Prinsip Hak Istimewa Paling Kecil (Principle of Least Privilege) {#principle-of-least-privilege}

- Atur kemampuan ke tingkat visibilitas yang paling ketat tapi masih memungkinkan untuk digunakan
- Gunakan visibilitas Mitra untuk operasi yang sensitif
- Matikan kemampuan yang tidak kamu pakai

### Audit Rutin {#regular-audits}

- Periksa visibilitas kemampuan setiap bulan
- Cek apakah ada kemampuan yang belum diklasifikasikan
- Hapus akses untuk mitra yang sudah tidak dipakai

### Pencatatan dan Pemantauan (Logging and Monitoring) {#logging-and-monitoring}

- Pantau kemampuan mana yang paling sering dipakai
- Lacak pola akses mitra
- Beri peringatan jika ada penggunaan kemampuan yang tidak biasa

### Kemampuan Pihak Ketiga (Third-Party Abilities) {#third-party-abilities}

- Periksa kemampuan pihak ketiga sebelum mengaktifkannya
- Klasifikasikan mereka secara jelas
- Mulai dengan visibilitas Internal atau Mitra dulu
- Baru promosikan ke Publik setelah sudah diperiksa/diverifikasi

## Troubleshooting {#troubleshooting}

**Sebuah kemampuan tidak muncul di daftar**
- Pastikan kemampuan sudah terpasang dan aktif
- Cek apakah plugin/addon sudah diaktifkan
- Segarkan halaman (refresh)

**Saya tidak bisa mengubah visibilitas sebuah kemampuan**
- Pastikan Anda punya izin administrator
- Cek apakah kemampuan terkunci oleh plugin tertentu
- Coba matikan plugin yang mungkin bentrok

**Mitra tidak bisa mengakses suatu kemampuan**
- Pastikan mitra sudah ada di daftar izinkan (allow-list)
- Cek apakah visibilitas kemampuan sudah diatur ke Partner
- Konfirmasi bahwa kredensial mitra sudah benar
- Periksa log API untuk mencari kesalahan otentikasi

**Kemampuan yang belum diklasifikasikan terus muncul**
- Tinjau dan klasifikasikan kemampuan tersebut di notifikasi admin
- Cek apakah klasifikasi Anda sudah tersimpan
- Pastikan plugin yang menyediakan kemampuan tersebut sudah diperbarui (up to date)

## Migrasi dari Mode Lama (Legacy Mode) {#migration-from-legacy-mode}

Jika Anda sedang meng-*upgrade* dari versi Superdav AI Agent yang lebih lama:

- Semua kemampuan yang sudah ada akan otomatis diklasifikasikan sebagai Publik (Public)
- Tinjau dan sesuaikan visibilitas sesuai kebutuhan
- Tidak perlu melakukan tindakan kecuali Anda ingin membatasi aksesnya

Lihat **Migrasi Mode Pihak Ketiga (Third-Party Mode Migration)** untuk detail lebih lanjut tentang transisi ke integrasi API Kemampuan asli (native Abilities API).

## Langkah Selanjutnya {#next-steps}

Setelah mengatur visibilitas kemampuan:

1. **Tinjau kemampuan Anda**: Audit semua kemampuan yang sudah terpasang
2. **Klasifikasikan kemampuan yang belum diklasifikasikan**: Tanggapi notifikasi admin
3. **Siapkan mitra**: Tambahkan mitra jika Anda menggunakan visibilitas Partner
4. **Pantau penggunaan**: Lacak kemampuan mana yang paling sering digunakan
5. **Dokumentasikan keputusan**: Catat alasan mengapa Anda memilih setiap tingkat visibilitas
