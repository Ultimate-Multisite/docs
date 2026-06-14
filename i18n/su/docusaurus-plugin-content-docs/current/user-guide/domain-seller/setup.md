---
title: Panataan sareng Konfigurasi Pemasok
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Penjual Domain: Pengaturan dan Konfigurasi Penyedia

Addon Domain Seller dikirim dengan panduan pengaturan (setup wizard) yang akan memandu Anda melalui setiap langkah yang diperlukan. Halaman ini membahas alur wizard dan cara mengkonfigurasi atau mengkonfigurasi ulang penyedia setelahnya.

## Persyaratan

- **Multisite Ultimate** v2.4.12 atau lebih tinggi, diaktifkan jaringan (network-activated)
- **PHP** 7.4+
- Kredensial API untuk setidaknya satu registrar yang didukung

## Wizard pengaturan pertama

Wizard pengaturan akan otomatis berjalan saat Anda mengaktifkan plugin untuk pertama kalinya melalui jaringan. Ini juga bisa diakses kapan saja dari **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Langkah 1 — Pilih penyedia (provider)

Pilih registrar yang ingin Anda hubungkan. Pilihan yang didukung:

| Penyedia | Manajemen DNS | Privasi WHOIS |
|---|---|---|
| OpenSRS | Ya | Ya |
| Namecheap | Tidak | Ya (WhoisGuard, gratis) |
| HostAfrica | Ya | Ya (ID protection) |
| Openprovider | Ya | Ya |
| Hostinger | Melalui pemetaan domain Hostinger inti untuk domain yang di-host | Ya |
| GoDaddy | Tidak | Tidak |
| ResellerClub | Ya | Tidak |
| NameSilo | Tidak | Tidak |
| Enom | Ya | Tidak |

### Langkah 2 — Masukkan kredensial (credentials)

Setiap penyedia punya kolom kredensial yang berbeda:

**OpenSRS** — Username dan private key (dari OpenSRS Reseller Control Panel)

**Namecheap** — Username dan API key (dari Account › Tools › API Access)

**HostAfrica** — Endpoint API Domains Reseller dan kredensial dari modul reseller HostAfrica. Saat ini belum ada endpoint sandbox terpisah yang didokumentasikan; coba lakukan pengecekan baca saja (read-only checks) yang aman sebelum menjalankan registrasi langsung (live registrations).

**Openprovider** — Username dan password dengan akses API diaktifkan. Mode sandbox opsional menggunakan Openprovider sandbox API, dan handle pelanggan default opsional bisa digunakan kembali untuk registrasi.

**Hostinger** — Token hPanel shared Hostinger tumpukan API ti inti integrasi Hostinger. Token anu sarua ngahontal pemetaan domain inti je operasi pendaftaran Penjual Domain.

**GoDaddy** — API key je rahasia (ti developer.godaddy.com)

**ResellerClub** — ID Reseller je API key (ti panel kontrol ResellerClub)

**NameSilo** — API key (ti namesilo.com › Account › API Manager)

**Enom** — ID Akun je token akun

Cek **mode Sandbox** lamun aya pikeun nguji lawan lingkungan tes panayang samémé langsung dipaké.

### Langkah 3 — Uji koneksi

Klik **Test Connection**. Wizard bakal ngirimkeun panggilan API leutik pikeun ngabuktian kredensial je kaitan. Perbaiki masalah kredensial samémé neraskeun.

### Langkah 4 — Impor TLDs

Klik **Import TLDs** pikeun narik sakabé TLD (Top-Level Domain) je harga grosir ti panayang anu terhubung. Ieu bakal ngaganti daftar TLD anu dipaké ku produk domain. Impor bisa butuh waktu 30–60 detik pikeun panayang anu katalog TLD-na gedé.

TLDs ogé otomatis disinkronkeun deui sakali sapoe dina hiji poé lewat jadwal cron job.

### Langkah 5 — Buat produk domain

Wizard bakal nyiptake produk domain *catch-all* default kalayan markup 10%. Anjeun bisa ngedit produk ieu langsung atawa lewati je nyiptake produk secara manual di bawah **Ultimate Multisite › Products**.

Lihat [Domain Products and Pricing](./domain-products) pikeun panduan konfigurasi produk anu lengkap.

---

## Ngatur ulang panayang (Reconfiguring a provider)

Pindah ka **Network Admin › Ultimate Multisite › Settings › Domain Seller** (atawa klik **Settings** dina daftar plugin).

Halaman pengaturan eusina:

- **Aktifkeun penjualan domain** — on/offkeun fitur sakabéh fitur ieu
- **Penyedia default** — penyedia anu dipaké pikeun pencarian domain jeung produk anyar
- **Max TLD per pencarian** — sabaraha TLD (Top-Level Domain) anu dicek nalika pelanggan nyari; nilai leuwih loba nunjukkeun pilihan leuwih loba tapi leuwih lambat
- **Durasi cache ketersediaan** — nanjungna durasi nge-cache hasil ketersediaan jeung harga; nilai leuwih leutik leuwih akurat tapi nambahan panggilan API

- **Kelola produk domain** — tautan cepet ka daftar Produk
- **Konfigurasi penyedia** — muka Integration Wizard pikeun nambahan atawa ngatur deui penyedia

### Nambihan penyedia kadua

Klik **Configure providers** jeung jalankan wizard deui pikeun registrar anyar. Anjeun bisa ngabogaan sababaraha penyedia anu diatur barengan. Tentukan unggal produk domain ka penyedia anu spesifik, atawa tinggalikeun dina defaultna.

### Sinkronisasi TLD secara manual

Di halaman pengaturan (settings page), klik **Sync TLDs** di sisi unggal penyedia anu geus diatur pikeun narik harga pang anyar. Ieu mantep pisan sanggeus hiji penyedia ngabaharuan harga grosir atawa nambahan TLD anyar.

---

## Logs

Unggal penyedia bakal nulis ka saluran logna sorangan. Log bisa dipandang di bawah **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Isi |
|---|---|
| `domain-seller-registration` | Semua upaya registrasi (berhasil dan gagal) |
| `domain-seller-renewal` | Hasil pekerjaan perpanjangan domain |
| `domain-seller-opensrs` | Aktivitas API OpenSRS mentah |
| `domain-seller-namecheap` | Aktivitas API Namecheap mentah |
| `domain-seller-hostafrica` | Aktivitas API HostAfrica mentah |
| `domain-seller-openprovider` | Aktivitas API Openprovider mentah |
| `domain-seller-hostinger` | Aktivitas API Hostinger mentah |
| `domain-seller-godaddy` | Aktivitas API GoDaddy mentah |
| `domain-seller-resellerclub` | Aktivitas API ResellerClub mentah |
| `domain-seller-namesilo` | Aktivitas API NameSilo mentah |
| `domain-seller-enom` | Aktivitas API Enom mentah |

---

## Catatan kemampuan penyedia layanan (Provider capability notes)

Sabenerna, teu sakabékeun API registrar téh teu pati ngungkabkeun operasi anu sarua. Addon ieu nunjukkeun operasi anu teu didukung ku error anu jelas ka admin, lain ngan ukur gagal tanpa kabar.

- **HostAfrica** mendukung alur kerja reseller *live* anu paling lega, kaasup pencarian (lookup), sinkronisasi TLD/harga, registrasi, perpanjangan (renewal), transfer, pembaruan nameserver, record DNS, kode EPP, kunci registrar, jeung perlindungan ID.
- **Openprovider** mendukung sinkronisasi TLD harga reseller, registrasi, perpanjangan, transfer, pembaruan nameserver, zona DNS, kode EPP, kunci registrar, sarta privasi WHOIS. Ieu autentikasi ku *bearer token* anu gancang dipaké (short-lived) anu di-*refresh* otomatis ku addon ieu.
- **Hostinger** mendukung pencarian ketersediaan (*availability search*), registrasi, pencarian portofolio, pembaruan nameserver, kunci registrar, sarta privasi WHOIS ngaliwatan token API hPanel anu dipaké barengan. API Domain publik Hostinger teu nunjukkeun harga reseller/grosir, transfer masuk (*inbound transfer*), perpanjangan eksplisit (*explicit renewal*), atawa panarapan kode EPP; perpanjangan ngan ukur otomatis (*auto-renew only*).
