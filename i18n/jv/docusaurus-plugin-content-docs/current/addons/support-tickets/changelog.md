---
title: Cathetan Owah-owahan Tiket Dhukungan
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Cathetan Owah-owahan Tiket Dhukungan {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Ditingkataké: Mbusak direktori vendor/ saka pelacakan Git (wis kacakup déning .gitignore), nyuda ukuran repository
* Ditingkataké: Diuji nganti WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Ndandani: Nampa nilai null ing setter model tiket sing nullable
* Ndandani: Nyimpen kabèh tiket ing tabel global saindhenging jaringan kanggo dhukungan multisite sing bener
* Ndandani: Ndhelikaké field staf lan ndandani pangalihan kaca kosong ing formulir tiket anyar pelanggan
* Ndandani: Ngganti panggilan add_meta() sing ora ditemtokaké nganggo update_meta() sing bener kanggo panyimpenan metadata
* Ndandani: Ngganti pamriksa capability sing ora kadhaftar nganggo wu_view_all_support_tickets sing bener
* Ndandani: Nambah handler AJAX sing kurang kanggo status tiket, penugasan, lan tumindak sunting-cepet
* Ndandani: Mbeneraké jeneng method kanggo deteksi tanggapan staf ing tampilan tiket
* Ndandani: Nggabungaké handler balesan dobel lan nyelarasaké jeneng tumindak nonce
* Ndandani: Nambah tampilan frontend sing kurang kanggo shortcode [wu_submit_ticket]
* Ndandani: Nambah kolom user_id sing kurang lan ndandani method Support_Ticket::get_user_id()
* Ndandani: Mbusak tandha kutip pindho ekstra ing tag pilihan filter prioritas
* Ndandani: Nambah panel manajemen tiket admin jaringan kanggo super admin
* Ditingkataké: Nggabungaké CSS admin dadi siji stylesheet eksternal
* Ditingkataké: Mbusak submenu Settings saka menu admin subsite
* Ditingkataké: Mung ngemot aset frontend kanthi kondisional ing kaca tiket dhukungan
* Ditingkataké: Nglewati autoloader plugin nalika autoloader oyod Bedrock wis ngemot dependensi

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Ditambahaké: Fungsi tampilan tiket lengkap kanggo admin lan frontend
* Ditambahaké: Handler AJAX kanggo pangiriman balesan tiket
* Ditambahaké: Dhukungan kanggo fungsi balesan tiket nganggo penanganan formulir sing bener
* Ditambahaké: Tampilan kabar sing bener kanggo pangiriman tiket lan balesan ing admin
* Ditambahaké: Asosiasi tiket otomatis karo pangguna saiki kanggo pangiriman mandiri pelanggan
* Ditambahaké: Peningkatan keamanan kanggo nyegah pelanggan ngganti kepemilikan tiket
* Ditambahaké: Fungsi pambantu sing kurang (wu_format_date, wu_user_can_view_ticket, lsp.)
* Ditambahaké: Undhuhan lan penanganan lampiran berkas sing bener
* Ditambahaké: Sistem notifikasi email kanggo balesan tiket lan owah-owahan status
* Didandani: Formulir balesan tiket saiki nyakup ID tiket sing dibutuhaké
* Didandani: Masalah visibilitas kabar ing tampilan tiket admin
* Didandani: Kasalahan sintaks ing fungsi tiket dhukungan
* Ditingkataké: Struktur database nganggo query lan kelas skema sing bener kanggo tanggapan lan lampiran
* Ditingkataké: Migrasi menyang properti nyata tinimbang atribut kanggo model tiket

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Dianyari: Ngganti jeneng prefix dadi ultimate-multisite kanggo konsistensi
* Dianyari: Standarisasi domain teks
* Didandani: Ndandani bug cilik lan peningkatan

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Rilis wiwitan
* Sistem manajemen tiket lengkap
* Kontrol akses multi-tingkat
* Sistem pacelathon berutas
* Dhukungan lampiran berkas
* Sistem notifikasi email
* Antarmuka admin lan pelanggan
* Statistik lan pelaporan
