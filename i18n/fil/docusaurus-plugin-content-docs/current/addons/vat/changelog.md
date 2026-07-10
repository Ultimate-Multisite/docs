---
title: VAT Changelog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Talaan ng Pagbabago sa VAT {#vat-changelog}

Version 1.0.7 - Released on 2026-02-03

* Fix: Hindi na gumagana ang VAT numbers ng Germany (DE) dahil sa mga error ng VIES SOAP service na MS_MAX_CONCURRENT_REQ. Pinalitan namin ang lumang SOAP API ng opisyal na EU VIES REST API para mas maaasahang validation.
* Fix: Tinatanggap na ang VAT numbers kahit pansamantalang walang serbisyo ang VIES, sa halip na mali itong tanggihan. Gumagawa ng log entry para sa pagre-review mamaya.
* Fix: Ang VAT/Tax ID field ay nakikita na para sa lahat ng bansa, hindi lang para sa mga miyembro ng EU. Ang mga non-EU tax ID (hal. Swiss CHE numbers) ay iniimbak para sa pagpapakita sa invoice kahit walang VIES validation.
* Fix: Nasira ang paghahanap ng VAT prefix para sa Greece (GR), Monaco (MC), at Isle of Man (IM) dahil sa maling logic sa paghahanap sa array.
* Improvement: Tinanggal ang hindi kinakailangang wp-cli-bundle dev dependency na maaaring magdulot ng fatal errors kapag ginamit kasama ang Site Exporter addon.
* Improvement: Nagdagdag ng kumpletong unit test suite (53 tests).

Version 1.0.6 - Released on 2026-01-25

* Fix: Tama nang kinakalkula ang VAT sa mga domestic B2B transactions. Ayon sa EU VAT rules, ang reverse charge ay para lang sa cross-border B2B transactions, hindi kapag tugma ang bansa ng customer sa bansa ng kumpanya.

Version 1.0.5 - Released on 2026-01-22

* Fix: Hindi naglo-load o hindi gumagana nang maayos ang Addon.
* Change: Pinalitan ang pinagmumulan ng VAT rate data mula sa euvatrates.com patungo sa ibericode/vat-rates repository para sa mas maaasahan at aktibong napapanatiling data.
* Fix: Inayos ang typo sa option value ng super_reduced_rates.
* Improvement: Nagdagdag ng null checks para sa paghawak ng country code upang maiwasan ang mga error.
* Change: Tinanggal ang mga bundled translation files at ginamit na ang automatic updates via Traduttore.

Version: 1.0.3 - Released on 2025-09-28

* Binago ang prefix sa ultimate-multisite; in-update ang text domain; at nag-bump ng version.

Version 1.0.0-beta.4 - 2021-09-24

* Added: filter wp_ultimo_skip_network_active_check para sa mga setup na gumagamit ng mu-plugins;

Version 1.0.0 - 05/08/2021 - Paunang Paglabas
