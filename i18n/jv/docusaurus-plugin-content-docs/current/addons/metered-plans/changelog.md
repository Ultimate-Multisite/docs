---
title: Cathetan Owah-owahan Paket Meteran
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Cathetan Owah-owahan Plan Miturut Panggunaan

Versi 1.1.0 - Dirilis tanggal 2026-05-05
- Anyar: tagihan AI token kanggo subsite multisite — lacak lan tagih panggunaan AI token ing sakabehing situs pelanggan nganggo tarif saben-token sing bisa dikonfigurasi
- Anyar: panegakan konektor dibangun maneh nganggo panemuan wates dinamis lan write-through, njamin akurasi wektu-nyata ing kabeh konektor
- Ndandani: paningkatan tabel database saiki wis selaras kanthi bener karo definisi skema BerlinDB, nyegah kegagalan paningkatan ing instalasi anyar
- Ndandani: callback paningkatan database diowahi menyang format sing bener, ngrampungake kegagalan paningkatan sing meneng
- Ndandani: nilai pecahan saiki ditampa ing kolom input AI Usage Overage Markup
- Ndandani: ngrampungake galat fatal lan masalah inisialisasi kaping pindho nalika ekstensi dimuat
- Ditambah apik: nambahake skrip npm check-env supaya lingkungan pangembang ngatur awake dhewe nalika pisanan dijalanke

### 1.0.3 {#103}
* Dianyari menyang Plugin Update Checker v5
* Nambahake header ekstensi WordPress modern
* Nambah kompatibilitas karo versi WordPress paling anyar
* Ningkatake kinerja pelacakan panggunaan

### 1.0.2 {#102}
* Ndandani bug lan ningkatake kinerja
* Ningkatake pelaporan panggunaan

### 1.0.0 {#100}
* Rilis wiwitan
* Fungsi inti tagihan miturut panggunaan
* Pelacakan panggunaan lan pangitungan overage
* Ngasilake invoice otomatis
