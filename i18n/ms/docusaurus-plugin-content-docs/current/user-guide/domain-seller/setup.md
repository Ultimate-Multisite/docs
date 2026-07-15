---
title: Persediaan dan Konfigurasi Penyedia
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Persediaan dan Konfigurasi Penyedia

Addon Domain Seller disertakan dengan wizard persediaan berpandu yang membimbing anda melalui setiap langkah yang diperlukan. Halaman ini merangkumi aliran wizard dan cara mengkonfigurasi atau mengkonfigurasi semula penyedia selepas itu.

## Keperluan {#requirements}

- **Multisite Ultimate** v2.4.12 atau lebih tinggi, diaktifkan rangkaian
- **PHP** 7.4+
- Kelayakan API untuk sekurang-kurangnya satu pendaftar yang disokong

## Wizard persediaan kali pertama {#first-run-setup-wizard}

Wizard persediaan dilancarkan secara automatik pada kali pertama anda mengaktifkan plugin pada rangkaian. Ia juga tersedia pada bila-bila masa daripada **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Langkah 1 — Pilih penyedia {#step-1--choose-a-provider}

Pilih pendaftar yang ingin anda sambungkan. Pilihan yang disokong:

| Penyedia | Pengurusan DNS | Privasi WHOIS |
|---|---|---|
| OpenSRS | Ya | Ya |
| Namecheap | Tidak | Ya (WhoisGuard, percuma) |
| HostAfrica | Ya | Ya (perlindungan ID) |
| Openprovider | Ya | Ya |
| Hostinger | Melalui pemetaan domain Hostinger teras untuk domain yang dihoskan | Ya |
| GoDaddy | Tidak | Tidak |
| ResellerClub | Ya | Tidak |
| NameSilo | Tidak | Tidak |
| Enom | Ya | Tidak |

### Langkah 2 — Masukkan kelayakan {#step-2--enter-credentials}

Setiap penyedia mempunyai medan kelayakan yang berbeza:

**OpenSRS** — Nama pengguna dan kunci peribadi (daripada OpenSRS Reseller Control Panel)

**Namecheap** — Nama pengguna dan kunci API (daripada Account › Tools › API Access)

**HostAfrica** — Endpoint API Domains Reseller dan kelayakan daripada modul penjual semula HostAfrica. Tiada endpoint sandbox berasingan yang didokumenkan pada masa ini; uji dengan semakan baca-sahaja yang selamat sebelum menjalankan pendaftaran langsung.

**Openprovider** — Nama pengguna dan kata laluan dengan akses API didayakan. Mod sandbox pilihan menggunakan API sandbox Openprovider, dan pemegang pelanggan lalai pilihan boleh digunakan semula untuk pendaftaran.

**Hostinger** — Token API Hostinger hPanel dikongsi daripada integrasi Hostinger teras. Token yang sama menggerakkan pemetaan domain teras dan operasi pendaftaran Domain Seller.

**GoDaddy** — Kunci API dan rahsia (daripada developer.godaddy.com)

**ResellerClub** — ID penjual semula dan kunci API (daripada panel kawalan ResellerClub)

**NameSilo** — Kunci API (daripada namesilo.com › Account › API Manager)

**Enom** — ID Account dan token API

Tandakan **Mod sandbox** jika tersedia untuk menguji terhadap persekitaran ujian penyedia sebelum disiarkan secara langsung.

### Langkah 3 — Uji sambungan {#step-3--test-the-connection}

Klik **Test Connection**. Wizard menghantar panggilan API ringan untuk mengesahkan kelayakan dan kesambungan. Betulkan sebarang isu kelayakan sebelum meneruskan.

### Langkah 4 — Import TLD {#step-4--import-tlds}

Klik **Import TLDs** untuk mengambil semua TLD yang tersedia dan harga borong daripada penyedia yang disambungkan. Ini mengisi senarai TLD yang digunakan oleh produk domain. Import mungkin mengambil masa 30–60 saat untuk penyedia dengan katalog TLD yang besar.

TLD juga disegerakkan semula secara automatik sekali sehari melalui kerja cron berjadual.

### Langkah 5 — Cipta produk domain {#step-5--create-a-domain-product}

Wizard mencipta produk domain lalai tangkap-semua dengan markup 10%. Anda boleh mengedit produk ini dengan serta-merta atau langkau dan cipta produk secara manual di bawah **Ultimate Multisite › Products**.

Lihat [Produk Domain dan Harga](./domain-products) untuk panduan konfigurasi produk penuh.

---

## Mengkonfigurasi semula penyedia {#reconfiguring-a-provider}

Pergi ke **Network Admin › Ultimate Multisite › Settings › Domain Seller** (atau klik **Settings** dalam senarai plugin).

Halaman tetapan mengandungi:

- **Dayakan penjualan domain** — togol keseluruhan ciri hidup/mati
- **Penyedia lalai** — penyedia yang digunakan untuk carian domain dan produk baharu
- **TLD maksimum setiap carian** — berapa banyak TLD untuk disemak apabila pelanggan mencari; nilai yang lebih tinggi memaparkan lebih banyak pilihan tetapi lebih perlahan
- **Tempoh cache ketersediaan** — berapa lama untuk menyimpan cache hasil ketersediaan dan harga; nilai yang lebih rendah lebih tepat tetapi meningkatkan panggilan API
- **Urus produk domain** — pautan pantas ke senarai Products
- **Konfigurasi penyedia** — membuka Integration Wizard untuk menambah atau mengkonfigurasi semula penyedia

### Menambah penyedia kedua {#adding-a-second-provider}

Klik **Configure providers** dan jalankan wizard sekali lagi untuk pendaftar baharu. Anda boleh mempunyai berbilang penyedia yang dikonfigurasi serentak. Tetapkan setiap produk domain kepada penyedia tertentu, atau biarkan pada lalai.

### Menyegerakkan TLD secara manual {#syncing-tlds-manually}

Pada halaman tetapan, klik **Sync TLDs** di sebelah mana-mana penyedia yang dikonfigurasi untuk mengambil harga terkini. Ini berguna selepas penyedia mengemas kini harga borong atau menambah TLD baharu.

---

## Log {#logs}

Setiap penyedia menulis ke saluran lognya sendiri. Log boleh dilihat di bawah **Network Admin › Ultimate Multisite › Logs**:

| Saluran log | Kandungan |
|---|---|
| `domain-seller-registration` | Semua percubaan pendaftaran (berjaya dan gagal) |
| `domain-seller-renewal` | Hasil kerja pembaharuan |
| `domain-seller-opensrs` | Aktiviti API OpenSRS mentah |
| `domain-seller-namecheap` | Aktiviti API Namecheap mentah |
| `domain-seller-hostafrica` | Aktiviti API HostAfrica mentah |
| `domain-seller-openprovider` | Aktiviti API Openprovider mentah |
| `domain-seller-hostinger` | Aktiviti API Hostinger mentah |
| `domain-seller-godaddy` | Aktiviti API GoDaddy mentah |
| `domain-seller-resellerclub` | Aktiviti API ResellerClub mentah |
| `domain-seller-namesilo` | Aktiviti API NameSilo mentah |
| `domain-seller-enom` | Aktiviti API Enom mentah |

---

## Nota keupayaan penyedia {#provider-capability-notes}

Tidak setiap API pendaftar mendedahkan operasi yang sama. Addon memaparkan operasi yang tidak disokong dengan ralat jelas yang menghadap admin dan bukannya gagal secara senyap.

- **HostAfrica** menyokong aliran kerja reseller langsung yang paling luas, termasuk carian, penyegerakan TLD/harga, pendaftaran, pembaharuan, pemindahan, kemas kini nameserver, rekod DNS, kod EPP, kunci registrar, dan perlindungan ID.
- **Openprovider** menyokong penyegerakan TLD berharga reseller, pendaftaran, pembaharuan, pemindahan, kemas kini nameserver, zon DNS, kod EPP, kunci registrar, dan privasi WHOIS. Ia mengesahkan dengan bearer token jangka hayat pendek yang addon segarkan semula secara automatik.
- **Hostinger** menyokong carian ketersediaan, pendaftaran, carian portfolio, kemas kini nameserver, kunci registrar, dan privasi WHOIS melalui token API hPanel berkongsi. Domains API awam Hostinger tidak mendedahkan harga reseller/borong, pemindahan masuk, pembaharuan eksplisit, atau pengambilan kod EPP; pembaharuan hanya auto-renew.
