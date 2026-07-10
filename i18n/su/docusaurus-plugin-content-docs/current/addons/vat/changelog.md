---
title: Catetan Parobahan VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Log Parobahan VAT {#vat-changelog}

Vérsi 1.0.7 - Dileupaskeun dina 2026-02-03

* Perbaikan: Nomer VAT Jérman (DE) gagal validasi alatan kasalahan MS_MAX_CONCURRENT_REQ dina layanan VIES SOAP. Dipindahkeun tina SOAP API lami ka EU VIES REST API resmi pikeun validasi anu leuwih andal.
* Perbaikan: Nomer VAT ayeuna ditarima nalika layanan VIES keur samentara teu sadia, tibatan ditolak sacara salah. Éntri log dijieun pikeun ditinjau engké.
* Perbaikan: Widang VAT/Tax ID ayeuna katingali pikeun sadaya nagara, henteu ngan anggota EU. Tax ID non-EU (contona nomer CHE Swiss) disimpen pikeun tampilan tagihan tanpa validasi VIES.
* Perbaikan: Pilarian prefiks VAT pikeun Yunani (GR), Monako (MC), jeung Isle of Man (IM) rusak alatan logika pilarian array anu salah.
* Pamutahiran: Ngahapus dependensi dev wp-cli-bundle anu teu perlu anu bisa nyababkeun kasalahan fatal nalika dipaké babarengan jeung addon Site Exporter.
* Pamutahiran: Nambahkeun suite unit test lengkep (53 tés).

Vérsi 1.0.6 - Dileupaskeun dina 2026-01-25

* Perbaikan: Transaksi B2B domestik ayeuna leres-leres ngecas VAT. Nurutkeun aturan VAT EU, reverse charge ngan lumaku pikeun transaksi B2B lintas wates, lain nalika nagara palanggan sarua jeung nagara pausahaan.

Vérsi 1.0.5 - Dileupaskeun dina 2026-01-22

* Perbaikan: Addon henteu dimuat atawa henteu jalan kalayan bener.
* Parobahan: Sumber data tarif VAT dipindahkeun ti euvatrates.com ka repositori ibericode/vat-rates pikeun data anu leuwih andal jeung aktip dijaga.
* Perbaikan: Ngabenerkeun typo nilai pilihan super_reduced_rates.
* Pamutahiran: Nambahkeun pamariksaan null pikeun pananganan kode nagara pikeun nyegah kasalahan.
* Parobahan: Ngahapus berkas tarjamahan bawaan pikeun ngagunakeun apdet otomatis liwat Traduttore.

Vérsi: 1.0.3 - Dileupaskeun dina 2025-09-28

* Ngaganti ngaran prefiks jadi ultimate-multisite; ngapdet text domain; naékkeun vérsi.

Vérsi 1.0.0-beta.4 - 2021-09-24

* Ditambahkeun: filter wp_ultimo_skip_network_active_check pikeun setup dumasar mu-plugins;

Vérsi 1.0.0 - 05/08/2021 - Rilis Awal
