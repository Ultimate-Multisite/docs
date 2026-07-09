---
title: Ekspor Situs
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Ekspor Situs {#site-export}

Halaman admin **Site Export** ngidini administrator jaringan kanggo ngemas siji situs, utawa sak jaringan kabeh, dadi arsip sing bisa diunduh kanggo migrasi, backup, utawa kerja serah terima.

## Mengekspor satu situs {#exporting-one-site}

Tuju menyang **Ultimate Multisite > Site Export** lan pilih **Generate new Site Export**. Pilih subsite sing arep diekspor, banjur pilih apa arsip kasebut kudu ngemot unggahan (uploads), plugin, lan tema.

Nalika ekspor rampung, unduh ZIP saka daftar **Existing Exports**. ZIP ekspor saiki kalebu `index.php` sing bisa mbantu situs mandiri (`self-booting`) lan `readme.txt`, dadi arsip kasebut bisa diunggah menyang host anyar lan diwiwiti tanpa kudu instal plugin importer terpisah dhisik.

## Mengekspor sak jaringan {#exporting-the-whole-network}

Gunakake **Network Export** ing halaman Site Export nalika sampeyan butuh arsip tunggal sing ngemot kabeh subsite ing jaringan. Iki migunani sadurunge migrasi host, latihan pemulihan bencana (disaster-recovery drills), utawa pembangunan ulang staging yaiku nalika saben subsite kudu mlaku bareng.

Amarga ekspor jaringan bisa luwih gedhe tinimbang ekspor satu situs, jalankan nalika jendela lalu lintas rendah lan konfirmasi yen penyimpanan tujuan wis duwe cukup ruang kosong kanggo unggahan, plugin, tema, lan file ZIP sing wis digawe.

### Network Import Bundles {#network-import-bundles}

Miturut Ultimate Multisite 2.12.0, Site Exporter bisa ngasilake **network import bundles** — arsip khusus sing dirancang kanggo restorasi situs sak jaringan kanthi alur sing luwih lancar. Network import bundle ngemot kabeh file lan metadata sing dibutuhake kanggo ngrestore sawetara situs menyang instalasi jaringan anyar.

#### Membuat Network Import Bundle {#generating-a-network-import-bundle}

1. Tindakake menyang **Ultimate Multisite > Site Export**
2. Klik **Generate new Network Export**
3. Pilih **Network Import Bundle** sebagai tipe ekspor
4. Pilih apakah mau termasuk unggahan (uploads), plugin, dan tema
5. Klik **Generate**
6. Unduh bundle ZIP dari daftar **Existing Exports**

#### Memulihkan dari Network Import Bundle {#restoring-from-a-network-import-bundle}

Kanggo ngresiki situs saka network import bundle:

1. Install Ultimate Multisite ing host tujuanmu
2. Rampungane wizard multisite setup
3. Tindakake menyang **Ultimate Multisite > Site Export** ing network anyar kuwi
4. Klik **Import Network Bundle**
5. Upload file ZIP network import bundle
6. Ikuti instruksi impor sing ana ing layar
7. Proses impor bakal ngresiki kabeh situs, kontené, lan konfigurasi

Network import bundles njaga:
- Konten situs (posts, pages, custom post types)
- Pengaturan lan opsi situs
- Peran lan izin pengguna (User roles and permissions)
- Plugin lan tema (yen diwenehake ing bundle)
- Unggahan media (Media uploads) (yen diwenehake ing bundle)
- Tabel database kustom lan datane

## Install ZIP ekspor sing bisa ngawuh dhewe (self-booting) {#installing-a-self-booting-export-zip}

Kanggo ngresiki ZIP sing bisa ngawuh dhewe ing host anyar:

1. Upload isi ZIP ekspor menyang web root tujuanmu.
2. Buka `index.php` sing diupload ing browser.
3. Ikuti instruksi installer ing layar saka paket ekspor sing wis di-bundle.
4. Cek `readme.txt` sing di-bundle kanggo cathet khusus ekspor sadurunge ngresiki file sementara.

Kanggo detail instalasi lan impor spesifik kanggo addon, deleng [Site Exporter addon documentation](/addons/site-exporter).

Kanggo alat single-site sing ditambahi ing Ultimate Multisite 2.9.0, deleng [Export & Import](/user-guide/administration/export-import).
