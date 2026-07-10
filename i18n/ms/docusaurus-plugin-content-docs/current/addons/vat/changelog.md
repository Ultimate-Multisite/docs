---
title: Pembaruan Log VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Log Perubahan VAT {#vat-changelog}

Version 1.0.7 - Released on 2026-02-03

* Fix: Nombor VAT Jerman (DE) gagal pengesahan kerana ralat MS_MAX_CONCURRENT_REQ perkhidmatan VIES SOAP. Kami telah menukar daripada SOAP API lama kepada EU VIES REST API rasmi untuk pengesahan yang lebih boleh dipercayai.
* Fix: Nombor VAT kini diterima walaupun perkhidmatan VIES tidak tersedia buat sementara waktu, berbanding ditolak secara salah. Entri log akan dibuat untuk semakan kemudian.
* Fix: Medan VAT/ID Cukai kini kelihatan untuk semua negara, bukan hanya ahli EU. ID cukai bukan EU (cth. nombor CHE Swiss) disimpan untuk paparan invois tanpa pengesahan VIES.
* Fix: Pencarian awalan VAT untuk Greece (GR), Monaco (MC), dan Isle of Man (IM) rosak kerana logik carian tatasusunan (array) yang salah.
* Improvement: Membuang kebergantungan dev wp-cli-bundle yang tidak perlu yang boleh menyebabkan ralat kritikal apabila digunakan bersama addon Site Exporter.
* Improvement: Menambah set ujian unit yang komprehensif (53 ujian).

Version 1.0.6 - Released on 2026-01-25

* Fix: Transaksi B2B domestik kini mengenakan VAT dengan betul. Mengikut peraturan VAT EU, caj songsang (reverse charge) hanya terpakai untuk transaksi B2B rentas sempadan, bukan apabila negara pelanggan sama dengan negara syarikat.

Version 1.0.5 - Released on 2026-01-22

* Fix: Addon tidak dimuatkan atau berfungsi dengan betul.
* Change: Menukar sumber data kadar VAT daripada euvatrates.com kepada repositori ibericode/vat-rates untuk data yang lebih boleh dipercayai dan diselenggara secara aktif.
* Fix: Membetulkan kesilapan menaip nilai pilihan super_reduced_rates.
* Improvement: Menambah semakan null untuk pengendalian kod negara bagi mengelakkan ralat.
* Change: Membuang fail terjemahan yang dibundel demi kemas kini automatik melalui Traduttore.

Version: 1.0.3 - Released on 2025-09-28

* Tukar nama prefix kepada ultimate-multisite; kemas kini domain teks; peningkatan versi.

Version 1.0.0-beta.4 - 2021-09-24

* Added: filter wp_ultimo_skip_network_active_check untuk persediaan berasaskan mu-plugins;

Version 1.0.0 - 05/08/2021 - Initial Release
