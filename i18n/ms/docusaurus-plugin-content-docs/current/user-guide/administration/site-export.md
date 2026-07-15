---
title: Pengeksport Tapak
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Eksport Tapak

Halaman pentadbir **Eksport Tapak** membolehkan pentadbir rangkaian membungkus satu tapak, atau keseluruhan rangkaian, ke dalam arkib boleh dimuat turun untuk tujuan migrasi, sandaran, atau penyerahan kerja.

## Eksport satu tapak {#exporting-one-site}

Pergi ke **Ultimate Multisite > Site Export** dan pilih **Generate new Site Export**. Pilih tapak anak yang anda ingin eksport, kemudian pilih sama ada arkib tersebut perlu memasukkan muat naik, plugin, dan tema.

Apabila eksport selesai, muat turun ZIP daripada senarai **Existing Exports**. Fail ZIP Eksport kini termasuk `index.php` yang boleh but semula sendiri dan `readme.txt`, jadi arkib tersebut boleh dimuat naik ke hos baharu dan dimulakan tanpa perlu memasang plugin pengimport berasingan terlebih dahulu.

## Eksport keseluruhan rangkaian {#exporting-the-whole-network}

Gunakan **Network Export** pada halaman Site Export apabila anda memerlukan satu arkib yang mengandungi semua tapak anak dalam rangkaian. Ini berguna sebelum migrasi hos, latihan pemulihan bencana, atau pembinaan semula staging di mana setiap tapak anak perlu bergerak bersama.

Oleh kerana eksport rangkaian boleh menjadi jauh lebih besar daripada eksport satu tapak, jalankan ia semasa waktu trafik rendah dan sahkan storan sasaran mempunyai ruang kosong yang mencukupi untuk muat naik, plugin, tema, dan fail ZIP yang dijana.

### Pakej Import Rangkaian (Network Import Bundles) {#network-import-bundles}

Bermula dengan Ultimate Multisite 2.12.0, Site Exporter boleh menjana **pakej import rangkaian** — arkib khusus yang direka untuk pemulihan tapak seluruh rangkaian yang lancar. Pakej import rangkaian mengandungi semua fail dan metadata yang diperlukan untuk memulihkan pelbagai tapak ke pemasangan rangkaian baharu.

#### Menjana Pakej Import Rangkaian {#generating-a-network-import-bundle}

1. Pergi ke **Ultimate Multisite > Site Export**
2. Klik **Generate new Network Export**
3. Pilih **Network Import Bundle** sebagai jenis eksport
4. Pilih sama ada untuk memasukkan muat naik, plugin, dan tema
5. Klik **Generate**
6. Muat turun pakej ZIP daripada senarai **Existing Exports**

#### Memulihkan dari Pakej Import Rangkaian {#restoring-from-a-network-import-bundle}

Untuk memulihkan tapak dari pakej import rangkaian:

1. Pasang Ultimate Multisite pada hos sasaran anda
2. Lengkapkan wizard persediaan multisite
3. Pergi ke **Ultimate Multisite > Site Export** pada rangkaian baharu
4. Klik **Import Network Bundle**
5. Muat naik fail ZIP pakej import rangkaian
6. Ikuti arahan import di skrin
7. Proses import akan memulihkan semua tapak, kandungan, dan konfigurasi mereka

Pakej import rangkaian memelihara:
- Kandungan tapak (post, page, custom post types)
- Tetapan dan pilihan tapak
- Peranan dan kebenaran pengguna
- Plugin dan tema (jika dimasukkan dalam pakej)
- Muat naik media (jika dimasukkan dalam pakej)
- Jadual dan data pangkalan data tersuai

## Memasang ZIP eksport yang boleh but semula sendiri {#installing-a-self-booting-export-zip}

Untuk memulihkan ZIP yang boleh but semula sendiri pada hos baharu:

1. Muat naik kandungan ZIP yang dieksport ke akar web sasaran.
2. Buka `index.php` yang dimuat naik dalam pelayar.
3. Ikuti arahan pemasang di skrin daripada pakej eksport yang dibundel.
4. Semak `readme.txt` yang dibundel untuk nota khusus eksport sebelum membuang fail sementara.

Untuk butiran pemasangan dan import khusus addon, lihat [Site Exporter addon documentation](/addons/site-exporter).

Untuk alat satu tapak yang ditambah dalam Ultimate Multisite 2.9.0, lihat [Export & Import](/user-guide/administration/export-import).
