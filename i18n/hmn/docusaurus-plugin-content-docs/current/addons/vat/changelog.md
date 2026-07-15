---
title: Daim ntawv teev kev hloov pauv VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Keeb kwm hloov tshiab

Version 1.0.7 - Tso tawm thaum 2026-02-03

* Kho: German (DE) VAT numbers tsis dhau kev kuaj xyuas vim VIES SOAP service muaj MS_MAX_CONCURRENT_REQ yuam kev. Hloov ntawm SOAP API qub mus rau EU VIES REST API uas yog nom tswv kom kev kuaj xyuas ntseeg tau dua.
* Kho: VAT numbers tam sim no raug lees txais thaum VIES service tsis muaj siv ib ntus, es tsis yog raug tsis lees yuam kev. Tsim ib qho log entry cia rau kev tshuaj xyuas tom qab.
* Kho: VAT/Tax ID field tam sim no pom rau txhua lub teb chaws, tsis yog tsuas yog EU members xwb. Non-EU tax IDs (piv txwv Swiss CHE numbers) raug khaws cia rau invoice display yam tsis muaj VIES validation.
* Kho: VAT prefix lookup rau Greece (GR), Monaco (MC), thiab Isle of Man (IM) puas lawm vim array lookup logic tsis raug.
* Kev txhim kho: Tshem wp-cli-bundle dev dependency uas tsis tsim nyog thiab yuav ua rau muaj fatal errors thaum siv ua ke nrog Site Exporter addon.
* Kev txhim kho: Ntxiv unit test suite dav (53 tests).

Version 1.0.6 - Tso tawm thaum 2026-01-25

* Kho: Domestic B2B transactions tam sim no charge VAT raug lawm. Raws li EU VAT rules, reverse charge tsuas siv rau cross-border B2B transactions xwb, tsis yog thaum tus customer lub teb chaws phim lub company lub teb chaws.

Version 1.0.5 - Tso tawm thaum 2026-01-22

* Kho: Addon tsis load lossis tsis ua haujlwm raug.
* Hloov: Hloov VAT rate data source ntawm euvatrates.com mus rau ibericode/vat-rates repository kom muaj data uas ntseeg tau dua thiab muaj kev saib xyuas tas li.
* Kho: Kho super_reduced_rates option value typo.
* Kev txhim kho: Ntxiv null checks rau country code handling kom tiv thaiv errors.
* Hloov: Tshem translation files uas bundled los siv automatic updates ntawm Traduttore hloov.

Version: 1.0.3 - Tso tawm thaum 2025-09-28

* Hloov npe prefix mus rau ultimate-multisite; hloov text domain; version bump.

Version 1.0.0-beta.4 - 2021-09-24

* Ntxiv: filter wp_ultimo_skip_network_active_check rau setups uas raws mu-plugins;

Version 1.0.0 - 05/08/2021 - Tso tawm thawj zaug
