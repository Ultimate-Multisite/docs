---
title: Nhoroondo yeshanduko dzeVAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Shanduko dzeVAT {#vat-changelog}

Version 1.0.7 - Yakaburitswa musi wa2026-02-03

* Kugadzirisa: Nhamba dzeVAT dzeGerman (DE) dzaitadza validation nekuda kwezvikanganiso zveVIES SOAP service MS_MAX_CONCURRENT_REQ. Yakachinjwa kubva kuSOAP API yekare kuenda kuEU VIES REST API yepamutemo kuti validation ive yakavimbika zvikuru.
* Kugadzirisa: Nhamba dzeVAT dzava kugamuchirwa kana VIES service isingawanikwi kwechinguvana, panzvimbo pekurambwa zvisiri izvo. Chinyorwa chelog chinogadzirwa kuti chizoongororwa gare gare.
* Kugadzirisa: Field yeVAT/Tax ID yava kuoneka kunyika dzose, kwete nhengo dzeEU chete. MaTax ID asiri eEU (semuenzaniso nhamba dzeSwiss CHE) anochengetwa kuti aratidzwe painvoice pasina VIES validation.
* Kugadzirisa: Kutsvaga prefix yeVAT yeGreece (GR), Monaco (MC), neIsle of Man (IM) kwainge kwakanganisika nekuda kwearray lookup logic isiriyo.
* Kuvandudza: Yakabviswa dev dependency ye wp-cli-bundle isingadiwi yaigona kukonzera zvikanganiso zvakakomba kana yashandiswa pamwe chete neaddon yeSite Exporter.
* Kuvandudza: Yakawedzerwa unit test suite yakazara (53 tests).

Version 1.0.6 - Yakaburitswa musi wa2026-01-25

* Kugadzirisa: Domestic B2B transactions dzava kubhadharisa VAT nemazvo. Maererano nemitemo yeEU VAT, reverse charge inoshanda chete ku cross-border B2B transactions, kwete kana nyika yemutengi ichienderana nenyika yekambani.

Version 1.0.5 - Yakaburitswa musi wa2026-01-22

* Kugadzirisa: Addon isiri kuload kana kushanda zvakanaka.
* Shanduko: Yakachinjwa sosi yedata reVAT rate kubva ku euvatrates.com kuenda ku ibericode/vat-rates repository kuti pave nedata rakavimbika zvikuru uye rinochengetedzwa nguva dzose.
* Kugadzirisa: Yakagadziriswa typo yevalue ye super_reduced_rates option.
* Kuvandudza: Yakawedzerwa null checks pakubata country code kudzivirira zvikanganiso.
* Shanduko: Yakabviswa mafaera eshanduro akabatanidzwa kuitira kushandisa automatic updates kuburikidza neTraduttore.

Version: 1.0.3 - Yakaburitswa musi wa2025-09-28

* Kutumidza patsva prefix kuti ive ultimate-multisite; gadziridza text domain; version bump.

Version 1.0.0-beta.4 - 2021-09-24

* Yakawedzerwa: filter wp_ultimo_skip_network_active_check ye setups dzakavakirwa pa mu-plugins;

Version 1.0.0 - 05/08/2021 - Kuburitswa Kwekutanga
