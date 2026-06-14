---
title: Ngatur Situs
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Ngelola Situs

Situs (atau subsites) iku inti saka bisnis WaaS sampeyan. Ultimate Multisite duwe 3 jenis situs:

- **Customer-owned** — Situs sing duwe hak kanggo pelanggan tartamtu
- **Site Templates** — Situs sing wis disiapake dadi titik awal sing bisa dipilih dening pelanggan
- **Main Site** — Situs jaringan utama sampeyan

## Melihat Situs

Tuju menyang **Ultimate Multisite → Sites** kanggo ndeleng kabeh subsites ing jaringan sampeyan. Saben situs diwenehi label adhedhasar jenis lan sampeyan bisa filter nganggo Kabeh Situs, Customer-Owned, Templates, utawa Pending.

![Sites list page](/img/admin/sites-list.png)

## Nambah Situs Anyar

Klik tombol **Add Site** kanggo nggawe situs anyar. Sampeyan bakal perlu menehi:

- **Site Title** — Jeneng situs anyar
- **Site URL** — Domain/jalur kanggo situs kasebut
- **Site Type** — Apa iku situs pelanggan, template, utawa situs biasa

Opsi **Copy Site** ngidini sampeyan nggawe situs anyar adhedhasar template situs sing wis ana. Nalika diaktifake, sampeyan bisa milih template sing arep digunakake minangka titik awal. Pastikan **Copy Media on Duplication** aktif supaya file media uga kalebu.

## Ngelola Situs Sing Ana

Klik **Manage** ing saben situs kanggo mbukak halaman **Edit Site**. Ing kene sampeyan bakal nemokake:

### Informasi Dasar

Jeneng situs, jenisnya, site ID, lan deskripsi. Sampeyan uga bakal weruh domain sing dipetakan, keanggotaan sing terkait, lan akun pelanggan sing duwe situs kasebut.

### Opsi Situs

Konfigurasi kemampuan lan batasan situs:

- **Visit limits** — Jumlah maksimum kunjungan situs
- **User account limits** — Batasan per peran pengguna
- **Disk space** — Alokasi penyimpanan kanggo situs
- **Custom domain** — Aktifake pemetaan domain kanggo situs iki
- **Plugin and theme visibility** — Ngontrol plugin lan tema sing bisa diwenehake, disembunyikake, utawa wis aktif



Secara *default*, situs akan mengikuti batasan yang sudah diatur di level keanggotaan (*membership*). Kalau kamu mengatur batas di level situs, itu akan menimpa pengaturan keanggotaan.

### Hubungan (Associations)

Di bawah pilihan situs, kamu bakal nemu informasi tentang:

- **Mapped domains** yang terkait dengan situs
- **Membership** tempat situs ini berada
- **Customer account** yang terhubung dengan situs

### Sidebar Kanan

Di sisi kanan kamu bisa:

- **Enable/disable site** pakai tombol *toggle*
- **Ganti tipe situs** atau menunjuk pemiliknya lagi
- **Atur gambar/thumbnail situs** (yang bakal muncul di bagian depan untuk template situs)
- **Hapus situs** secara permanen

:::warning
Menghapus situs itu tidak bisa dibatalkan. Situs dan semua isinya akan dihapus selamanya.
:::
