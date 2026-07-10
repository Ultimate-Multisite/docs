---
title: Catatan Perubahan VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Catatan Perubahan PPN {#vat-changelog}

Version 1.0.7 - Dirilis pada 2026-02-03

* Perbaikan: Nomor PPN Jerman (DE) gagal validasi karena error MS_MAX_CONCURRENT_REQ layanan SOAP VIES. Kami beralih dari API SOAP lama ke API REST VIES resmi Uni Eropa untuk validasi yang lebih andal.
* Perbaikan: Nomor PPN kini diterima meskipun layanan VIES sedang tidak tersedia sementara, alih-alih ditolak secara keliru. Entri log dibuat untuk ditinjau nanti.
* Perbaikan: Kolom ID PPN/Pajak kini terlihat untuk semua negara, tidak hanya anggota UE. ID pajak non-UE (misalnya, nomor CHE Swiss) disimpan untuk tampilan faktur tanpa validasi VIES.
* Perbaikan: Pencarian awalan PPN untuk Yunani (GR), Monako (MC), dan Isle of Man (IM) rusak karena logika pencarian array yang salah.
* Peningkatan: Menghapus dependensi dev wp-cli-bundle yang tidak perlu yang dapat menyebabkan error fatal saat digunakan bersama addon Site Exporter.
* Peningkatan: Menambahkan rangkaian unit test yang komprehensif (53 tes).

Version 1.0.6 - Dirilis pada 2026-01-25

* Perbaikan: Transaksi B2B domestik kini mengenakan PPN dengan benar. Sesuai aturan PPN UE, *reverse charge* hanya berlaku untuk transaksi B2B lintas batas, bukan ketika negara pelanggan sama dengan negara perusahaan.

Version 1.0.5 - Dirilis pada 2026-01-22

* Perbaikan: Addon tidak memuat atau berfungsi dengan benar.
* Perubahan: Sumber data tarif PPN dialihkan dari euvatrates.com ke repositori ibericode/vat-rates untuk data yang lebih andal dan aktif dikelola.
* Perbaikan: Memperbaiki kesalahan ketik nilai opsi super_reduced_rates.
* Peningkatan: Menambahkan pemeriksaan null untuk penanganan kode negara guna mencegah error.
* Perubahan: Menghapus file terjemahan yang dibundel demi pembaruan otomatis melalui Traduttore.

Version: 1.0.3 - Dirilis pada 2025-09-28

* Mengganti awalan menjadi ultimate-multisite; memperbarui domain teks; peningkatan versi.

Version 1.0.0-beta.4 - 2021-09-24

* Ditambahkan: filter wp_ultimo_skip_network_active_check untuk pengaturan berbasis mu-plugins;

Version 1.0.0 - 05/08/2021 - Rilis Awal
