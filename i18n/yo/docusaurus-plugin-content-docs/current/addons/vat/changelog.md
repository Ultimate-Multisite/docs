---
title: Àkọsílẹ̀ àwọn àyípadà VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Àkọsílẹ̀ Ìyípadà VAT {#vat-changelog}

Ẹ̀yà 1.0.7 - Tí a tu sílẹ̀ ní 2026-02-03

* Àtúnṣe: Àwọn nọ́mbà VAT German (DE) tí ń kuna ìjẹ́risi nítorí àwọn àṣìṣe VIES SOAP service MS_MAX_CONCURRENT_REQ. A yí padà láti legacy SOAP API sí official EU VIES REST API fún ìjẹ́risi tó ṣeé gbẹ́kẹ̀lé síi.
* Àtúnṣe: Àwọn nọ́mbà VAT ni a ń gba báyìí nígbà tí VIES service kò bá sí fún ìgbà díẹ̀, dípò kí a kọ̀ wọ́n ní aṣìṣe. A ṣẹ̀dá àkọsílẹ̀ log fún àyẹ̀wò nígbà míì.
* Àtúnṣe: Pápá VAT/Tax ID ti hàn báyìí fún gbogbo àwọn orílẹ̀-èdè, kì í ṣe àwọn ọmọ ẹgbẹ́ EU nìkan. Àwọn ID owó orí tí kì í ṣe ti EU (fún àpẹẹrẹ, àwọn nọ́mbà Swiss CHE) ni a fi pamọ́ fún ìfihàn lórí ìwé ìsanwó láìsí ìjẹ́risi VIES.
* Àtúnṣe: Wíwá prefix VAT fún Greece (GR), Monaco (MC), àti Isle of Man (IM) bàjẹ́ nítorí ọgbọ́n wíwá array tí kò tọ́.
* Ìmúdára: Yọ dev dependency wp-cli-bundle tí kò ṣe dandan, tí ó lè fa àwọn àṣìṣe fatal nígbà tí a bá lò ó pẹ̀lú addon Site Exporter.
* Ìmúdára: Ṣàfikún unit test suite tó péye (àwọn ìdánwò 53).

Ẹ̀yà 1.0.6 - Tí a tu sílẹ̀ ní 2026-01-25

* Àtúnṣe: Àwọn ìṣòwò Domestic B2B ń gba VAT lọ́nà tó tọ́ báyìí. Gẹ́gẹ́ bí àwọn òfin EU VAT, reverse charge kan àwọn ìṣòwò B2B ààlà-orílẹ̀-èdè-n kọjá nìkan, kì í ṣe nígbà tí orílẹ̀-èdè oníbàárà bá bá orílẹ̀-èdè ilé-iṣẹ́ mu.

Ẹ̀yà 1.0.5 - Tí a tu sílẹ̀ ní 2026-01-22

* Àtúnṣe: Addon kò ń rù tàbí ṣiṣẹ́ dáadáa.
* Ìyípadà: Yí orísun data oṣùwọ̀n VAT padà láti euvatrates.com sí repository ibericode/vat-rates fún data tó ṣeé gbẹ́kẹ̀lé síi tí a sì ń tọ́jú lọ́wọ́lọ́wọ́.
* Àtúnṣe: Ṣàtúnṣe typo iye aṣayan super_reduced_rates.
* Ìmúdára: Ṣàfikún àwọn àyẹ̀wò null fún mímú kóòdù orílẹ̀-èdè ṣiṣẹ́ láti dènà àwọn àṣìṣe.
* Ìyípadà: Yọ àwọn fáìlì ìtumọ̀ tí a dì pọ̀ mọ́ ọn, kí ìmúdójúìwọ̀n laifọwọ́yi lè wáyé nípasẹ̀ Traduttore.

Ẹ̀yà: 1.0.3 - Tí a tu sílẹ̀ ní 2025-09-28

* Tún orúkọ prefix ṣe sí ultimate-multisite; ṣe ìmúdójúìwọ̀n text domain; gbé ẹ̀yà sókè.

Ẹ̀yà 1.0.0-beta.4 - 2021-09-24

* A ṣàfikún: filter wp_ultimo_skip_network_active_check fún àwọn setup tó dá lórí mu-plugins;

Ẹ̀yà 1.0.0 - 05/08/2021 - Ìtúsílẹ̀ Àkọ́kọ́
