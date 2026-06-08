---
title: Keterlihatan Kebolehan
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Kebolehlihatan Kebolehan (Ability Visibility)

Superdav AI Agent v1.12.0 memperkenalkan kawalan **Kebolehlihatan Kebolehan (Ability Visibility)** yang mengawal permukaan mana yang boleh mengakses setiap kebolehan. Ini membolehkan pentadbir menyempurnakan keupayaan agen mana yang tersedia melalui REST APIs, pelayan MCP, integrasi WooCommerce, dan antara muka lain.

## Apakah Kebolehlihatan Kebolehan?

Kebolehlihatan Kebolehan ialah sistem kebenaran yang mengawal:

- **Kebolehan mana** yang tersedia untuk agen
- **Di mana ia didedahkan** (REST API, MCP, WooCommerce, dsb.)
- **Siapa yang boleh mengaksesnya** (melalui senarai kebenaran rakan kongsi)
- **Bagaimana ia diklasifikasikan** (dikenali vs. tidak diklasifikasikan)

Setiap kebolehan membawa tahap kebolehlihatan yang menentukan ketersediaannya merentasi permukaan yang berbeza.

## Tahap Kebolehlihatan

### Awam (Public)

**Kebolehan Awam** tersedia di mana-mana sahaja:

- Endpoint REST API
- Pelayan MCP
- Integrasi WooCommerce
- Antara muka sembang (Chat interfaces)
- Semua peranan pengguna (dengan kebenaran yang sesuai)

Contoh: `scaffold-block-theme`, `activate-theme`, `send-email`

### Dalaman (Internal)

**Kebolehan Dalaman** hanya tersedia di dalam pemasangan WordPress anda:

- Antara muka sembang
- Panel pentadbir (Admin panels)
- Hanya pengguna yang log masuk
- Tidak didedahkan melalui REST API atau integrasi luaran

Contoh: `manage-settings`, `view-analytics`, `export-data`

### Rakan Kongsi (Partner)

**Kebolehan Rakan Kongsi** hanya tersedia untuk rakan kongsi yang disenaraikan (whitelisted):

- Memerlukan kemasukan senarai kebenaran rakan kongsi yang eksplisit
- Tersedia melalui REST API dengan kelayakan rakan kongsi
- Tersedia melalui MCP dengan pengesahan rakan kongsi
- Tidak tersedia untuk pengguna biasa

Contoh: `bulk-import-users`, `modify-billing`, `access-analytics`

### Dinonaktifkan (Disabled)

**Kebolehan Dinonaktifkan** tidak tersedia di mana-mana sahaja:

- Tidak didedahkan melalui sebarang permukaan
- Tidak tersedia dalam sembang
- Tidak tersedia dalam panel pentadbir
- Berguna untuk kebolehan yang telah usang atau eksperimen

## Mengurus Kebolehlihatan Kebolehan

### Mengakses Tetapan Kebolehlihatan Kebolehan

1. Pergi ke **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klik tab **Abilities**
3. Anda akan melihat senarai semua kebolehan yang dipasang dengan tahap kebolehlihatan masing-masing

### Melihat Butiran Kebolehan

Klik pada mana-mana kebolehan untuk melihat:

- **Name**: Pengenal kebolehan
- **Description**: Apa yang dilakukan oleh kebolehan itu
- **Current visibility**: Awam, Dalaman, Rakan Kongsi, atau Dinonaktifkan
- **Partner allow-list**: Rakan kongsi mana yang boleh mengakses (jika kebolehlihatan Rakan Kongsi)
- **Last updated**: Bila kebolehlihatan itu terakhir diubah
- **Status**: Dikenali atau Tidak Diklasifikasikan

### Mengubah Tahap Kebolehlihatan

Untuk mengubah kebolehlihatan kebolehan:

1. Klik kebolehan dalam senarai
2. Pilih tahap kebolehlihatan baharu daripada menu lungsur (dropdown)
3. Jika memilih "Partner", tambahkan pengenal rakan kongsi ke senarai kebenaran
4. Klik **Save**

Contoh:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Operasi Secara Pukal (Bulk Operations)

Untuk mengubah kebolehlihatan bagi beberapa kebolehan:

1. Tandakan kotak di sebelah kebolehan
2. Pilih tahap kebolehlihatan baharu daripada menu lungsur tindakan pukal
3. Klik **Apply**

## Senarai Kebenaran Rakan Kongsi (Partner Allow-List)

**Senarai kebenaran rakan kongsi** mengawal rakan kongsi luaran mana yang boleh mengakses kebolehan tahap Rakan Kongsi.

### Menambah Rakan Kongsi

1. Pergi ke **Superdav AI Agent** → **Settings** → **Partners**
2. Klik **Add Partner**
3. Masukkan pengenal rakan kongsi (biasanya kunci API atau ID organisasi)
4. Secara pilihan tambahkan nama dan penerangan rakan kongsi
5. Klik **Save**

### Menetapkan Kebolehan kepada Rakan Kongsi

Selepas menambah rakan kongsi:

1. Pergi ke tab **Abilities**
2. Cari kebolehan dengan kebolehlihatan Rakan Kongsi
3. Klik untuk menyunting
4. Dalam bahagian "Partner allow-list", tandakan kotak untuk rakan kongsi yang sepatutnya mempunyai akses
5. Klik **Save**

### Mencabut Akses Rakan Kongsi

Untuk menghapuskan akses rakan kongsi:

1. Sunting kebolehan
2. Batalkan tanda kotak rakan kongsi dalam senarai kebenaran
3. Klik **Save**

Rakan kongsi itu akan serta-merta kehilangan akses kepada kebolehan itu.

## Kebolehan Tidak Diklasifikasikan (Unclassified Abilities)

Apabila anda memasang kebolehan pihak ketiga yang tidak dikenali oleh Superdav AI Agent, ia ditandakan sebagai **Tidak Diklasifikasikan (Unclassified)**.

### Notis Pentadbir untuk Kebolehan Tidak Diklasifikasikan

Anda akan melihat notis pentadbir:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Menyemak Kebolehan Tidak Diklasifikasikan

1. Klik **Review Abilities** dalam notis
2. Untuk setiap kebolehan yang tidak diklasifikasikan, anda akan melihat:
   - Nama dan penerangan kebolehan
   - Sumber (plugin/addon mana yang memasangnya)
   - Tahap kebolehlihatan yang dicadangkan
   - Penilaian keselamatan

3. Pilih tahap kebolehlihatan:
   - **Public**: Percayai kebolehan itu; dedahkan ke mana-mana sahaja
   - **Internal**: Hadkan kepada kegunaan dalaman sahaja
   - **Partner**: Hadkan kepada rakan kongsi tertentu
   - **Disabled**: Jangan gunakan kebolehan ini

4. Klik **Classify** untuk menyimpan keputusan anda

### Mengapa Mengklasifikasikan Kebolehan Tidak Diklasifikasikan?

Mengklasifikasikan kebolehan:

- **Meningkatkan keselamatan**: Anda secara eksplisit meluluskan apa yang didedahkan
- **Mencegah kemalangan**: Kebolehan yang tidak diklasifikasikan dilumpuhkan secara lalai
- **Membolehkan ciri**: Setelah diklasifikasikan, kebolehan itu menjadi tersedia
- **Mendokumentasikan keputusan**: Pilihan anda direkodkan untuk tujuan audit

## Kebolehlihatan dalam Permukaan Berbeza

### REST API

**Kebolehan Awam** tersedia melalui endpoint REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Kebolehan Dalaman dan Rakan Kongsi** tidak tersedia melalui REST API.

### Pelayan MCP

**Kebolehan Awam** tersedia melalui MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Kebolehan Dalaman** tidak didedahkan melalui MCP.

**Kebolehan Rakan Kongsi** hanya tersedia dengan kelayakan rakan kongsi.

### Integrasi WooCommerce

**Kebolehan Awam** yang berkaitan dengan WooCommerce tersedia:

- Pengurusan produk
- Pemprosesan pesanan
- Komunikasi pelanggan

**Kebolehan Dalaman** tidak didedahkan kepada WooCommerce.

### Antara Muka Sembang (Chat Interface)

**Semua kebolehan** (Awam, Dalaman, Rakan Kongsi) tersedia dalam sembang, bergantung pada kebenaran pengguna:

- Pentadbir melihat semua kebolehan
- Pengguna biasa hanya melihat kebolehan Awam
- Rakan kongsi melihat kebolehan Awam + Rakan Kongsi (jika disenaraikan)

## Amalan Terbaik Keselamatan

### Prinsip Keistimewaan Paling Rendah (Principle of Least Privilege)

- Tetapkan kebolehan kepada kebolehlihatan paling ketat yang masih membenarkan penggunaannya
- Gunakan kebolehlihatan Rakan Kongsi untuk operasi sensitif
- Nyahaktifkan kebolehan yang anda tidak gunakan

### Audit Berkala

- Semak kebolehlihatan kebolehan setiap bulan
- Semak kebolehan yang tidak diklasifikasikan
- Tanggalkan akses untuk rakan kongsi yang tidak digunakan

### Log dan Pemantauan

- Pantau kebolehan mana yang paling banyak digunakan
- Jejaki corak akses rakan kongsi
- Beri amaran tentang penggunaan kebolehan yang luar biasa

### Kebolehan Pihak Ketiga

- Semak kebolehan pihak ketiga sebelum mengaktifkannya
- Klasifikasikan ia secara eksplisit
- Mulakan dengan kebolehlihatan Dalaman atau Rakan Kongsi
- Promosikan kepada Awam hanya selepas semakan menyeluruh

## Penyelesaian Masalah (Troubleshooting)

**Kebolehan tidak muncul dalam senarai**
- Sahkan kebolehan itu dipasang dan aktif
- Semak bahawa plugin/addon telah diaktifkan
- Segarkan halaman

**Saya tidak boleh mengubah kebolehlihatan kebolehan**
- Sahkan anda mempunyai kebenaran pentadbir
- Semak bahawa kebolehan itu tidak dikunci oleh plugin
- Cuba nyahaktifkan plugin yang bercanggah

**Rakan kongsi tidak boleh mengakses kebolehan**
- Sahkan rakan kongsi itu berada dalam senarai kebenaran
- Semak bahawa kebolehlihatan kebolehan ditetapkan kepada Rakan Kongsi
- Sahkan kelayakan rakan kongsi adalah betul
- Semak log API untuk ralat pengesahan

**Kebolehan tidak diklasifikasikan terus muncul**
- Semak dan klasifikasikan ia dalam notis pentadbir
- Semak bahawa klasifikasi anda telah disimpan
- Sahkan plugin yang menyediakan kebolehan itu adalah terkini

## Migrasi dari Mod Lama (Legacy Mode)

Jika anda menaik taraf dari versi Superdav AI Agent yang lebih lama:

- Semua kebolehan sedia ada secara automatik diklasifikasikan sebagai Awam
- Semak dan laraskan kebolehlihatan mengikut keperluan
- Tiada tindakan diperlukan melainkan anda ingin menghadkan akses

Sila lihat **Third-Party Mode Migration** untuk butiran lanjut mengenai peralihan kepada integrasi Abilities API asli.

## Langkah Seterusnya

Selepas mengkonfigurasi kebolehlihatan kebolehan:

1. **Semak kebolehan anda**: Audit semua kebolehan yang dipasang
2. **Klasifikasikan kebolehan yang tidak diklasifikasikan**: Bertindak balas terhadap notis pentadbir
3. **Sediakan rakan kongsi**: Tambah rakan kongsi jika menggunakan kebolehlihatan Rakan Kongsi
4. **Pantau penggunaan**: Jejaki kebolehan mana yang paling banyak digunakan
5. **Dokumentasikan keputusan**: Simpan nota tentang sebab anda memilih setiap tahap kebolehlihatan
