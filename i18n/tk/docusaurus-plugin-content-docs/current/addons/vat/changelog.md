---
title: VAT üýtgeşmeler taryhy
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Üýtgeşmeler žurnaly {#vat-changelog}

Wersiýa 1.0.7 - 2026-02-03 senesinde çykaryldy

* Düzediş: German (DE) VAT belgileriniň VIES SOAP service MS_MAX_CONCURRENT_REQ ýalňyşlyklary sebäpli barlagdan geçmezligi. Has ygtybarly barlag üçin miras galan SOAP API-den resmi EU VIES REST API-ä geçirildi.
* Düzediş: VIES service wagtlaýyn elýeterli bolmadyk ýagdaýynda VAT belgileri indi nädogry ret edilmegiň ýerine kabul edilýär. Soňraky gözden geçirmek üçin log ýazgysy döredilýär.
* Düzediş: VAT/Tax ID meýdany indi diňe EU agzalary üçin däl-de, ähli ýurtlar üçin görünýär. EU däl salgyt ID-leri (mysal üçin, Swiss CHE belgileri) VIES barlagy bolmazdan invoice görkezilişi üçin saklanýar.
* Düzediş: Greece (GR), Monaco (MC) we Isle of Man (IM) üçin VAT prefiks gözlegi nädogry array gözleg logikasy sebäpli bozulan.
* Gowulandyrma: Site Exporter addon bilen bile ulanylanda fatal errors döredip biljek gereksiz wp-cli-bundle dev dependency aýryldy.
* Gowulandyrma: Giňişleýin unit test toplumy goşuldy (53 test).

Wersiýa 1.0.6 - 2026-01-25 senesinde çykaryldy

* Düzediş: Içerki B2B geleşikler indi VAT-y dogry alýar. EU VAT düzgünlerine görä, reverse charge diňe serhetara B2B geleşiklere degişli, müşderiniň ýurdy kompaniýanyň ýurdy bilen gabat gelende däl.

Wersiýa 1.0.5 - 2026-01-22 senesinde çykaryldy

* Düzediş: Addon ýüklenmeýärdi ýa-da dogry işlemeýärdi.
* Üýtgeşme: VAT stawka maglumat çeşmesi has ygtybarly we işjeň goldanylýan maglumatlar üçin euvatrates.com-dan ibericode/vat-rates repository-e geçirildi.
* Düzediş: super_reduced_rates option bahasyndaky ýazuw ýalňyşy düzedildi.
* Gowulandyrma: Ýalňyşlyklaryň öňüni almak üçin country code işlenişine null barlaglary goşuldy.
* Üýtgeşme: Traduttore arkaly awtomatik täzelenmeleriň peýdasyna, bukjalaýyn terjime faýllary aýryldy.

Wersiýa: 1.0.3 - 2025-09-28 senesinde çykaryldy

* Prefiks ultimate-multisite edilip üýtgedildi; text domain täzelendi; wersiýa ýokarlandyryldy.

Wersiýa 1.0.0-beta.4 - 2021-09-24

* Goşuldy: mu-plugins esasly sazlamalar üçin wp_ultimo_skip_network_active_check filter;

Wersiýa 1.0.0 - 05/08/2021 - Ilkinji çykarylyş
