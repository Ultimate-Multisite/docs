---
title: Ekspor Situs
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Ekspor Situs

Halaman admin **Site Export** memungkinkan administrator jaringan untuk mengemas satu situs, atau seluruh jaringan, ke dalam arsip yang dapat diunduh untuk keperluan migrasi, pencadangan (backup), atau penyerahan pekerjaan.

## Mengekspor satu situs

Buka **Ultimate Multisite > Site Export** dan pilih **Generate new Site Export**. Pilih subsite yang ingin Anda ekspor, lalu tentukan apakah arsip tersebut harus menyertakan unggahan (uploads), plugin, dan tema.

Setelah ekspor selesai, unduh ZIP dari daftar **Existing Exports**. ZIP Ekspor kini sudah menyertakan `index.php` yang dapat berjalan sendiri (self-booting) dan `readme.txt`, sehingga arsip tersebut dapat diunggah ke host baru dan dijalankan tanpa perlu menginstal plugin importer terpisah terlebih dahulu.

## Mengekspor seluruh jaringan

Gunakan **Network Export** di halaman Site Export jika Anda membutuhkan satu arsip yang berisi semua subsite dalam jaringan. Ini berguna sebelum migrasi host, latihan pemulihan bencana, atau pembangunan ulang staging di mana setiap subsite perlu dipindahkan bersama-sama.

Karena ekspor jaringan bisa jauh lebih besar daripada ekspor satu situs, jalankan proses ini saat lalu lintas rendah dan pastikan penyimpanan target memiliki ruang kosong yang cukup untuk unggahan, plugin, tema, dan file ZIP yang dihasilkan.

### Network Import Bundles

Mulai dari Ultimate Multisite 2.12.0, Site Exporter dapat membuat **network import bundles** — arsip khusus yang dirancang untuk pemulihan situs skala jaringan yang lebih mudah. Network import bundle berisi semua file dan metadata yang diperlukan untuk memulihkan banyak situs ke instalasi jaringan baru.

#### Membuat Network Import Bundle

1. Buka **Ultimate Multisite > Site Export**
2. Klik **Generate new Network Export**
3. Pilih **Network Import Bundle** sebagai jenis ekspor
4. Tentukan apakah akan menyertakan unggahan, plugin, dan tema
5. Klik **Generate**
6. Unduh bundle ZIP dari daftar **Existing Exports**

#### Memulihkan dari Network Import Bundle

Untuk memulihkan situs dari network import bundle:

1. Instal Ultimate Multisite di host target Anda
2. Selesaikan wizard pengaturan multisite
3. Buka **Ultimate Multisite > Site Export** di jaringan baru
4. Klik **Import Network Bundle**
5. Unggah file ZIP network import bundle
6. Ikuti instruksi impor di layar
7. Proses impor akan memulihkan semua situs, konten, dan konfigurasinya

Network import bundles akan menyimpan:
- Konten situs (postingan, halaman, custom post types)
- Pengaturan dan opsi situs
- Peran dan izin pengguna
- Plugin dan tema (jika disertakan dalam bundle)
- Unggahan media (jika disertakan dalam bundle)
- Tabel dan data database kustom

## Menginstal ZIP ekspor yang dapat berjalan sendiri

Untuk memulihkan ZIP yang dapat berjalan sendiri di host baru:

1. Unggah isi ZIP yang diekspor ke root web target.
2. Buka `index.php` yang telah diunggah di browser.
3. Ikuti instruksi installer di layar dari paket ekspor yang dibundel.
4. Periksa `readme.txt` yang dibundel untuk catatan spesifik ekspor sebelum menghapus file sementara.

Untuk detail instalasi dan impor spesifik addon, lihat [dokumentasi addon Site Exporter](/addons/site-exporter).

Untuk alat satu situs yang ditambahkan di Ultimate Multisite 2.9.0, lihat [Export & Import](/user-guide/administration/export-import).
