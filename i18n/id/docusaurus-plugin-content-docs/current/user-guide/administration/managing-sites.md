---
title: Mengelola Situs
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Mengelola Situs

Situs (atau subsite) adalah inti dari bisnis WaaS Anda. Ultimate Multisite memiliki 3 jenis situs:

- **Milik Pelanggan** — Situs yang dimiliki oleh pelanggan tertentu
- **Template Situs** — Situs yang sudah disiapkan sebelumnya dan dapat dipilih pelanggan sebagai titik awal
- **Situs Utama** — Situs jaringan utama Anda

## Melihat Situs

Buka **Ultimate Multisite → Sites** untuk melihat semua subsite di jaringan Anda. Setiap situs diberi label berdasarkan jenisnya dan Anda dapat memfilter berdasarkan All Sites, Customer-Owned, Templates, atau Pending.

![Halaman daftar situs](/img/admin/sites-list.png)

## Menambahkan Situs Baru

Klik tombol **Add Site** untuk membuat situs baru. Anda perlu mengisi:

- **Site Title** — Nama situs baru
- **Site URL** — Domain/path untuk situs tersebut
- **Site Type** — Apakah ini situs pelanggan, template, atau situs biasa

Opsi **Copy Site** memungkinkan Anda membuat situs baru berdasarkan template situs yang sudah ada. Jika diaktifkan, Anda dapat memilih template mana yang akan digunakan sebagai titik awal. Pastikan **Copy Media on Duplication** diaktifkan untuk menyertakan file media.

## Mengelola Situs yang Sudah Ada

Klik **Manage** pada situs mana pun untuk membuka halaman **Edit Site**. Di sini Anda akan menemukan:

### Informasi Dasar

Nama situs, jenis, site ID, dan deskripsi. Anda juga akan melihat domain yang dipetakan, membership yang terkait, dan akun pelanggan yang memiliki situs tersebut.

### Opsi Situs

Atur kemampuan dan batasan situs:

- **Visit limits** — Jumlah maksimum kunjungan situs
- **User account limits** — Batasan per peran pengguna
- **Disk space** — Kuota penyimpanan untuk situs
- **Custom domain** — Aktifkan pemetaan domain untuk situs ini
- **Plugin and theme visibility** — Kontrol plugin dan tema mana yang terlihat, tersembunyi, atau diaktifkan secara otomatis

Secara default, situs mengikuti batasan yang ditetapkan di tingkat membership. Mengatur batasan di tingkat situs akan menimpa pengaturan membership.

### Asosiasi

Di bawah opsi situs, Anda akan menemukan informasi tentang:

- **Domain yang dipetakan** yang terkait dengan situs
- **Membership** tempat situs berada
- **Akun pelanggan** yang terhubung dengan situs

### Sidebar Kanan

Di sisi kanan Anda dapat:

- **Mengaktifkan/menonaktifkan situs** dengan tombol toggle
- **Mengubah jenis situs** atau mengalihkan kepemilikan
- **Mengatur gambar/thumbnail situs** (ditampilkan di frontend untuk template situs)
- **Menghapus situs** secara permanen

:::warning
Menghapus situs tidak dapat dibatalkan. Situs dan semua kontennya akan dihapus secara permanen.
:::
