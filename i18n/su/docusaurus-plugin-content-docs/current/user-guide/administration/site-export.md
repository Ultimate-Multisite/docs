---
title: Ekspor Situs
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Ekspor Situs {#site-export}

Halaman admin **Site Export** ngajak administrator jaringan ngemas satu situs, atau seluruh jaringan, jadi arsip yang bisa diunduh pikeun migrasi, backup, atawa tugas serah terima.

## Ekspor satu situs {#exporting-one-site}

Pindah ka **Ultimate Multisite > Site Export** terus pilih **Generate new Site Export**. Pilih subsite anu rék diekspor, tuluy pilih naha arsipna kudu ngawengkeun uploads, plugins, jeung themes.

Lamun ekspor geus réngsé, unduh ZIP ti daftar **Existing Exports**. ZIP ekspor ayeuna ngandung `index.php` anu bisa ngabutan sorangan (self-booting) jeung `readme.txt`, jadi arsipna bisa diupload ka host anyar jeur dimimitian tanpa kudu nginstal plugin importer teras.

## Ekspor sakuliah jaringan {#exporting-the-whole-network}

Gunakan **Network Export** dina halaman Site Export lamun anjeun butuh hiji arsip anu ngandung sadaya subsite dina jaringan. Ieu pantes pisan saméméah migrasi host, latihan pemulihan bencana (disaster-recovery drills), atawa pembangunan ulang staging di mana unggal subsite kudu leumpang bareng.

Sabab ekspor jaringan bisa jauh leuwih gedé tibatan ekspor satu situs, jalankeun éta nalika waktu lalu lintas rada saeutik jeung pastikeun storage tujuan geus cukup ruang kosong pikeun uploads, plugins, themes, jeung file ZIP anu geus dibentuk.

### Network Import Bundles {#network-import-bundles}

Dimimitian ti Ultimate Multisite 2.12.0, Site Exporter bisa ngahasilkeun **network import bundles** — arsip khusus anu dirancang pikeun restorasi situs sakuliah jaringan sacara leuwih lancar. Satu network import bundle ngandung sadaya file jeung metadata anu peryogi keur ngabalikeun sababaraha situs ka instalasi jaringan anyar.

#### Ngahasilkeun Network Import Bundle {#generating-a-network-import-bundle}

1. Pergi ka **Ultimate Multisite > Site Export**
2. Klik **Generate new Network Export**
3. Pilih **Network Import Bundle** sebagai tipe ekspor
4. Pilih apakah mau sertakan unggahan (uploads), plugin, dan tema
5. Klik **Generate**
6. Unduh ZIP bundle dari daftar **Existing Exports**

#### Memulihkan dari Network Import Bundle {#restoring-from-a-network-import-bundle}

Untuk memulihkan situs dari paket import jaringan:

1. Instal Ultimate Multisite di host tujuan Anda
2. Selesaikan panduan pengaturan multisite (multisite setup wizard)
3. Pergi ke **Ultimate Multisite > Site Export** di jaringan baru
4. Klik **Import Network Bundle**
5. Unggah file ZIP network import bundle
6. Ikuti petunjuk impor yang ada di layar
7. Proses impor akan memulihkan semua situs, kontennya, dan konfigurasinya

Network import bundles menyimpan:
- Konten situs (posts, pages, custom post types)
- Pengaturan dan opsi situs
- Peran pengguna dan izin (user roles and permissions)
- Plugin dan tema (jika termasuk dalam bundle)
- Unggahan media (media uploads) (jika termasuk dalam bundle)
- Tabel database kustom dan data

## Menginstal ZIP ekspor yang bisa booting sendiri {#installing-a-self-booting-export-zip}

Untuk memulihkan ZIP yang bisa booting sendiri di host baru:

1. Unggah isi ZIP yang diekspor ke root web tujuan.
2. Buka `index.php` yang sudah diunggah di browser.
3. Ikuti petunjuk installer di layar dari paket ekspor yang dibundel.
4. Periksa `readme.txt` yang dibundel untuk catatan spesifik ekspor sebelum menghapus file sementara.

Untuk detail instalasi dan impor spesifik addon, lihat [Site Exporter addon documentation](/addons/site-exporter).

Untuk alat single-site yang ditambahkan di Ultimate Multisite 2.9.0, lihat [Export & Import](/user-guide/administration/export-import).
