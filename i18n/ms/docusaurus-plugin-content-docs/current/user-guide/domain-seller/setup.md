---
title: Persediaan dan Konfigurasi Penyedia
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Persediaan dan Konfigurasi Penyedia

Addon Domain Seller dilengkapi dengan wizard persediaan berpandu yang akan membimbing anda melalui setiap langkah yang diperlukan. Halaman ini meliputi aliran wizard dan cara untuk mengkonfigurasi atau mengkonfigurasi semula penyedia selepas itu.

## Keperluan

- **Multisite Ultimate** v2.4.12 atau lebih tinggi, diaktifkan di peringkat rangkaian (network-activated)
- **PHP** 7.4+
- Kredensial API untuk sekurang-kurangnya satu pendaftar (registrar) yang disokong

## Wizard persediaan kali pertama

Wizard persediaan ini akan dilancarkan secara automatik kali pertama anda mengaktifkan plugin di peringkat rangkaian. Ia juga boleh diakses pada bila-bila masa dari **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Langkah 1 — Pilih penyedia

Pilih pendaftar (registrar) yang anda ingin sambungkan. Pilihan yang disokong:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Langkah 2 — Masukkan kredensial

Setiap penyedia mempunyai medan kredensial yang berbeza:

**OpenSRS** — Username dan private key (daripada OpenSRS Reseller Control Panel)

**Namecheap** — Username dan API key (daripada Account › Tools › API Access)

**GoDaddy** — API key dan secret (daripada developer.godaddy.com)

**ResellerClub** — Reseller ID dan API key (daripada papan kawalan ResellerClub)

**NameSilo** — API key (daripada namesilo.com › Account › API Manager)

**Enom** — Account ID dan API token

Semak **Sandbox mode** jika ada untuk menguji terhadap persekitaran ujian penyedia sebelum menggunakannya secara langsung (going live).

### Langkah 3 — Uji sambungan

Klik **Test Connection**. Wizard akan menghantar panggilan API ringan untuk mengesahkan kredensial dan sambungan. Sila betulkan sebarang isu kredensial sebelum meneruskan.

### Langkah 4 — Import TLDs

Klik **Import TLDs** untuk menarik semua TLD dan harga borong yang tersedia daripada penyedia yang disambungkan. Ini akan mengisi senarai TLD yang digunakan oleh produk domain. Import mungkin mengambil masa 30–60 saat untuk penyedia dengan katalog TLD yang besar.

TLD juga akan disegerakkan semula secara automatik sekali sehari melalui tugas cron terjadual.

### Langkah 5 — Cipta produk domain

Wizard akan mencipta produk domain *catch-all* lalai dengan markup 10%. Anda boleh menyunting produk ini dengan serta-merta atau melangkau dan mencipta produk secara manual di bawah **Ultimate Multisite › Products**.

Lihat [Domain Products and Pricing](./domain-products) untuk panduan konfigurasi produk penuh.

---

## Mengkonfigurasi semula penyedia

Pergi ke **Network Admin › Ultimate Multisite › Settings › Domain Seller** (atau klik **Settings** dalam senarai plugin).

Halaman tetapan ini mengandungi:

- **Enable domain selling** — suis ciri keseluruhan ini hidup/mati
- **Default provider** — penyedia yang digunakan untuk carian domain dan produk baharu
- **Max TLDs per search** — berapa banyak TLD yang perlu diperiksa apabila pelanggan membuat carian; nilai yang lebih tinggi menunjukkan lebih banyak pilihan tetapi lebih perlahan
- **Availability cache duration** — berapa lama untuk menyimpan hasil ketersediaan dan harga; nilai yang lebih rendah lebih tepat tetapi meningkatkan panggilan API
- **Manage domain products** — pautan pantas ke senarai Produk
- **Configure providers** — membuka Integration Wizard untuk menambah atau mengkonfigurasi semula penyedia

### Menambah penyedia kedua

Klik **Configure providers** dan jalankan wizard itu sekali lagi untuk pendaftar baharu. Anda boleh mempunyai pelbagai penyedia yang dikonfigurasi serentak. Tetapkan setiap produk domain kepada penyedia tertentu, atau biarkan pada lalai.

### Menyelaraskan TLDs secara manual

Dalam halaman tetapan, klik **Sync TLDs** di sebelah mana-mana penyedia yang dikonfigurasi untuk menarik harga terkini. Ini berguna selepas penyedia mengemas kini harga borong atau menambah TLD baharu.

---

## Log

Setiap penyedia menulis ke saluran lognya sendiri. Log boleh dilihat di bawah **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Semua percubaan pendaftaran (berjaya dan gagal) |
| `domain-seller-renewal` | Keputusan tugas pembaharuan |
| `domain-seller-opensrs` | Aktiviti API OpenSRS mentah |
| `domain-seller-namecheap` | Aktiviti API Namecheap mentah |
| `domain-seller-godaddy` | Aktiviti API GoDaddy mentah |
| `domain-seller-resellerclub` | Aktiviti API ResellerClub mentah |
| `domain-seller-namesilo` | Aktiviti API NameSilo mentah |
| `domain-seller-enom` | Aktiviti API Enom mentah |
