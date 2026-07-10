---
title: Pencatatan Perubahan Tiket Sokongan
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Senarai Perubahan Tiket Sokongan {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Peningkatan: Menanggalkan direktori vendor/ daripada pengesanan Git (sudah dilindungi oleh .gitignore), mengurangkan saiz repositori
* Peningkatan: Diuji sehingga WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Pembetulan: Menerima nilai null dalam penetap model tiket yang boleh null
* Pembetulan: Menyimpan semua tiket dalam jadual global seluruh rangkaian untuk sokongan multisite yang betul
* Pembetulan: Menyembunyikan medan kakitangan dan membetulkan pengalihan halaman kosong pada borang tiket baharu pelanggan
* Pembetulan: Menggantikan panggilan add_meta() yang tidak ditakrifkan dengan update_meta() yang betul untuk penyimpanan metadata
* Pembetulan: Menggantikan semakan keupayaan (capability) yang tidak berdaftar dengan wu_view_all_support_tickets yang betul
* Pembetulan: Menambah pengendali AJAX yang hilang untuk tindakan status tiket, penetapan, dan suntingan pantas
* Pembetulan: Membetulkan nama kaedah untuk pengesanan respons kakitangan dalam paparan tiket
* Pembetulan: Menggabungkan pengendali balasan duplikat dan menyelaraskan nama tindakan nonce
* Pembetulan: Menambah paparan bahagian hadapan (frontend) yang hilang untuk shortcode [wu_submit_ticket]
* Pembetulan: Menambah lajur user_id yang hilang dan membetulkan kaedah Support_Ticket::get_user_id()
* Pembetulan: Menanggalkan tanda petikan berganda tambahan dalam tag pilihan penapis keutamaan
* Pembetulan: Menambah panel pengurusan tiket pentadbir rangkaian untuk super admin
* Peningkatan: Menggabungkan CSS pentadbir ke dalam satu helaian gaya luaran
* Peningkatan: Menanggalkan submenu Tetapan daripada menu pentadbir subsite
* Peningkatan: Memuatkan aset bahagian hadapan (frontend) secara bersyarat hanya pada halaman tiket sokongan
* Peningkatan: Melangkau autoloader plugin apabila autoloader root Bedrock sudah memuatkan kebergantungan

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Penambahan: Fungsi melihat tiket sepenuhnya untuk pentadbir dan bahagian hadapan (frontend)
* Penambahan: Pengendali AJAX untuk penghantaran balasan tiket
* Penambahan: Sokongan untuk fungsi balasan tiket dengan pengendalian borang yang betul
* Penambahan: Paparan pemberitahuan yang betul untuk penghantaran dan balasan tiket dalam pentadbir
* Penambahan: Pengaitan tiket automatik dengan pengguna semasa untuk penghantaran tiket sendiri oleh pelanggan
* Penambahan: Peningkatan keselamatan untuk menghalang pelanggan daripada menimpa pemilikan tiket
* Penambahan: Fungsi pembantu yang hilang (wu_format_date, wu_user_can_view_ticket, dsb.)
* Penambahan: Muat turun dan pengendalian lampiran fail yang betul
* Penambahan: Sistem pemberitahuan e-mel untuk balasan dan perubahan status tiket
* Pembetulan: Borang balasan tiket kini termasuk ID tiket yang diperlukan
* Pembetulan: Isu kebolehlihatan pemberitahuan dalam paparan tiket pentadbir
* Pembetulan: Ralat sintaks dalam fungsi tiket sokongan
* Peningkatan: Struktur pangkalan data dengan kelas pertanyaan dan skema yang betul untuk balasan dan lampiran
* Peningkatan: Migrasi kepada sifat (properties) sebenar berbanding atribut untuk model tiket

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Dikemas kini: Menukar nama prefix kepada ultimate-multisite untuk konsistensi
* Dikemas kini: Penyeragaman domain teks
* Pembetulan: Pembetulan pepijat dan peningkatan kecil

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Pelancaran awal
* Sistem pengurusan tiket yang lengkap
* Kawalan akses pelbagai peringkat
* Sistem perbualan berbenang (threaded conversation)
* Sokongan lampiran fail
* Sistem pemberitahuan e-mel
* Antaramuka pentadbir dan pelanggan
* Statistik dan pelaporan
