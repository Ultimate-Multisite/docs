---
title: VAT Cathetan Owah-owahan
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Changelog VAT {#vat-changelog}

Versi 1.0.7 - Dirilis ing 2026-02-03

* Ndandani: Nomer VAT Jerman (DE) gagal divalidasi amarga kesalahan MS_MAX_CONCURRENT_REQ saka layanan VIES SOAP. Dialihake saka SOAP API lawas menyang EU VIES REST API resmi supaya validasi luwih andal.
* Ndandani: Nomer VAT saiki ditampa nalika layanan VIES sementara ora kasedhiya, tinimbang ditolak kanthi kliru. Entri log digawe kanggo ditinjau mengko.
* Ndandani: Field VAT/Tax ID saiki katon kanggo kabeh negara, ora mung anggota EU. ID pajak non-EU (umpamane nomer CHE Swiss) disimpen kanggo tampilan invoice tanpa validasi VIES.
* Ndandani: Lookup prefiks VAT kanggo Yunani (GR), Monaco (MC), lan Isle of Man (IM) rusak amarga logika lookup array sing ora bener.
* Panyempurnaan: Mbusak dependensi dev wp-cli-bundle sing ora perlu sing bisa nyebabake kesalahan fatal nalika digunakake bebarengan karo tambahan Site Exporter.
* Panyempurnaan: Nambah suite unit test lengkap (53 test).

Versi 1.0.6 - Dirilis ing 2026-01-25

* Ndandani: Transaksi B2B domestik saiki kanthi bener ngenakake VAT. Miturut aturan VAT EU, reverse charge mung ditrapake kanggo transaksi B2B lintas wates, dudu nalika negara pelanggan padha karo negara perusahaan.

Versi 1.0.5 - Dirilis ing 2026-01-22

* Ndandani: Tambahan ora dimuat utawa ora bisa mlaku kanthi bener.
* Owah-owahan: Sumber data tarif VAT dialihake saka euvatrates.com menyang repository ibericode/vat-rates supaya data luwih andal lan aktif dirumat.
* Ndandani: Mbenerake salah ketik nilai opsi super_reduced_rates.
* Panyempurnaan: Nambah null checks kanggo penanganan kode negara supaya nyegah kesalahan.
* Owah-owahan: Mbusak file terjemahan bawaan lan luwih milih pembaruan otomatis liwat Traduttore.

Versi: 1.0.3 - Dirilis ing 2025-09-28

* Ganti jeneng prefiks dadi ultimate-multisite; nganyari text domain; bump versi.

Versi 1.0.0-beta.4 - 2021-09-24

* Ditambahake: filter wp_ultimo_skip_network_active_check kanggo setup adhedhasar mu-plugins;

Versi 1.0.0 - 05/08/2021 - Rilis Wiwitan
