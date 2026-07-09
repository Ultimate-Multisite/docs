---
title: Catetan Parobahan Tikét Pangrojong
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Changelog Tikét Rojongan

### 1.0.4 - 2026-05-05
* Dironjatkeun: Ngahapus diréktori vendor/ tina pelacakan Git (geus kacangking ku .gitignore), ngurangan ukuran repository
* Dironjatkeun: Diuji nepi ka WordPress 7.0

### 1.0.3 - 2026-05-01
* Dilereskeun: Narima nilai null dina setter modél tikét nullable
* Dilereskeun: Nyimpen sakabéh tikét dina tabel global sa-jaringan pikeun rojongan multisite anu bener
* Dilereskeun: Nyumputkeun field staf jeung ngalereskeun redirect kaca kosong dina formulir tikét anyar palanggan
* Dilereskeun: Ngaganti panggero add_meta() anu teu ditetepkeun ku update_meta() anu bener pikeun neundeun metadata
* Dilereskeun: Ngaganti pamariksaan capability anu teu kadaptar ku wu_view_all_support_tickets anu bener
* Dilereskeun: Nambahkeun handler AJAX anu leungit pikeun status tikét, assignment, jeung aksi quick-edit
* Dilereskeun: Ngalereskeun ngaran métode pikeun deteksi réspon staf dina tampilan tikét
* Dilereskeun: Ngahijikeun handler balesan duplikat jeung nyaluyukeun ngaran aksi nonce
* Dilereskeun: Nambahkeun tampilan frontend anu leungit pikeun shortcode [wu_submit_ticket]
* Dilereskeun: Nambahkeun kolom user_id anu leungit jeung ngalereskeun métode Support_Ticket::get_user_id()
* Dilereskeun: Ngahapus tanda kutip ganda tambahan dina tag pilihan filter prioritas
* Dilereskeun: Nambahkeun panel manajemén tikét admin jaringan pikeun super admin
* Dironjatkeun: Ngahijikeun CSS admin kana hiji stylesheet éksternal
* Dironjatkeun: Ngahapus submenu Settings tina ménu admin subsite
* Dironjatkeun: Ngamuat aset frontend sacara kondisional ngan dina kaca tikét rojongan
* Dironjatkeun: Ngaliwatan autoloader plugin nalika autoloader root Bedrock geus ngamuat dependencies

### 1.0.2 - 2025-12-11
* Ditambahkeun: Fungsionalitas ningali tikét lengkep pikeun admin jeung frontend
* Ditambahkeun: Handler AJAX pikeun kiriman balesan tikét
* Ditambahkeun: Rojongan pikeun fungsionalitas balesan tikét kalayan penanganan formulir anu bener
* Ditambahkeun: Tampilan béwara anu bener pikeun kiriman tikét jeung balesan di admin
* Ditambahkeun: Asosiasi tikét otomatis jeung pamaké ayeuna pikeun kiriman mandiri palanggan
* Ditambahkeun: Paningkatan kaamanan pikeun nyegah palanggan ngaganti kapamilikan tikét
* Ditambahkeun: Fungsi pembantu anu leungit (wu_format_date, wu_user_can_view_ticket, jsb.)
* Ditambahkeun: Undeuran jeung penanganan lampiran file anu bener
* Ditambahkeun: Sistem béwara email pikeun balesan tikét jeung parobahan status
* Dilereskeun: Formulir balesan tikét ayeuna ngawengku ID tikét anu diperlukeun
* Dilereskeun: Masalah katempo béwara dina tampilan tikét admin
* Dilereskeun: Kasalahan sintaks dina fungsi tikét rojongan
* Dironjatkeun: Struktur database kalayan query jeung kelas schema anu bener pikeun réspon jeung lampiran
* Dironjatkeun: Migrasi ka sipat nyata tibatan atribut pikeun modél tikét

### 1.0.1 - 2025-09-28
* Diropéa: Ngaganti ngaran prefix jadi ultimate-multisite pikeun konsistensi
* Diropéa: Standarisasi domain téks
* Dilereskeun: Perbaikan bug leutik jeung paningkatan

### 1.0.0 - 2025-09-01
* Rilis awal
* Sistem manajemén tikét lengkep
* Kontrol aksés multi-tingkat
* Sistem paguneman berutas
* Rojongan lampiran file
* Sistem béwara email
* Antarmuka admin jeung palanggan
* Statistik jeung laporan
