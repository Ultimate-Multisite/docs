---
title: Log newidiadau TAW
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Cofnod Newidiadau VAT {#vat-changelog}

Fersiwn 1.0.7 - Rhyddhawyd ar 2026-02-03

* Atgyweiriad: Roedd rhifau VAT Almaenig (DE) yn methu dilysu oherwydd gwallau MS_MAX_CONCURRENT_REQ gwasanaeth VIES SOAP. Newidiwyd o'r SOAP API etifeddol i'r EU VIES REST API swyddogol ar gyfer dilysu mwy dibynadwy.
* Atgyweiriad: Mae rhifau VAT bellach yn cael eu derbyn pan fo'r gwasanaeth VIES dros dro ddim ar gael, yn lle cael eu gwrthod yn anghywir. Crëir cofnod log i'w adolygu'n ddiweddarach.
* Atgyweiriad: Mae maes VAT/Tax ID bellach yn weladwy ar gyfer pob gwlad, nid aelodau'r UE yn unig. Caiff tax IDs nad ydynt o'r UE (e.e. rhifau CHE y Swistir) eu storio ar gyfer arddangos ar anfonebau heb ddilysu VIES.
* Atgyweiriad: Roedd chwilio rhagddodiad VAT ar gyfer Gwlad Groeg (GR), Monaco (MC), ac Ynys Manaw (IM) wedi torri oherwydd rhesymeg chwilio array anghywir.
* Gwelliant: Tynnwyd dibyniaeth datblygu wp-cli-bundle ddiangen a allai achosi gwallau angheuol pan gaiff ei defnyddio ochr yn ochr â'r addon Site Exporter.
* Gwelliant: Ychwanegwyd cyfres gynhwysfawr o brofion uned (53 prawf).

Fersiwn 1.0.6 - Rhyddhawyd ar 2026-01-25

* Atgyweiriad: Mae trafodion B2B domestig bellach yn codi VAT yn gywir. Yn ôl rheolau VAT yr UE, mae reverse charge yn berthnasol i drafodion B2B trawsffiniol yn unig, nid pan fo gwlad y cwsmer yn cyfateb i wlad y cwmni.

Fersiwn 1.0.5 - Rhyddhawyd ar 2026-01-22

* Atgyweiriad: Addon ddim yn llwytho nac yn gweithio'n iawn.
* Newid: Newidiwyd ffynhonnell data cyfraddau VAT o euvatrates.com i ystorfa ibericode/vat-rates ar gyfer data mwy dibynadwy ac sy'n cael ei gynnal yn weithredol.
* Atgyweiriad: Cywirwyd teipio anghywir gwerth opsiwn super_reduced_rates.
* Gwelliant: Ychwanegwyd gwiriadau null ar gyfer trin codau gwlad i atal gwallau.
* Newid: Tynnwyd ffeiliau cyfieithu wedi'u bwndelu o blaid diweddariadau awtomatig drwy Traduttore.

Fersiwn: 1.0.3 - Rhyddhawyd ar 2025-09-28

* Ailenwi'r rhagddodiad i ultimate-multisite; diweddaru'r parth testun; codiad fersiwn.

Fersiwn 1.0.0-beta.4 - 2021-09-24

* Ychwanegwyd: hidlydd wp_ultimo_skip_network_active_check ar gyfer gosodiadau sy'n seiliedig ar mu-plugins;

Fersiwn 1.0.0 - 05/08/2021 - Rhyddhad Cychwynnol
