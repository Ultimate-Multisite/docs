---
title: Cofnod newidiadau Integreiddio WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Cofnod Newidiadau Integreiddiad WooCommerce {#woocommerce-integration-changelog}

Fersiwn 2.2.0 - Rhyddhawyd ar 2026-07-01
* Newydd: Mae symiau treth Ultimate Multisite bellach yn ymddangos fel llinellau ffi WooCommerce ar wahân wrth checkout, gan wneud cyfansymiau treth yn gliriach cyn talu.
* Newydd: Ychwanegwyd gosodiad optio i mewn "Atal Aelodaethau ar Unwaith ar Adnewyddiadau a Fethodd" a hidlydd `wu_woo_suspend_on_payment_failure` ar gyfer safleoedd sydd eisiau atal ar ôl adnewyddiad a fethodd yn ystod ffenestr ailgeisio WooCommerce Subscriptions.
* Trwsiad: Cysonwyd statysau WooCommerce Subscription a allai aros allan o gydamseriad ag aelodaethau Ultimate Multisite ar ôl adnewyddiadau a fethodd neu a adferwyd.
* Trwsiad: Ychwanegwyd arian cyfred storfa WooCommerce at restr arian cyfred Ultimate Multisite pan oedd ar goll.
* Trwsiad: Cadwyd manylion bilio cwsmeriaid wrth ailgyfeirio tanysgrifwyr i checkout WooCommerce.
* Gwellhawyd: Ychwanegwyd cydnawsedd â Jetpack Autoloader 5.
* Gwellhawyd: Glanhawyd cynhyrchu pecynnau rhyddhau fel bod ffeiliau zip GitHub a marchnad yn osgoi cyfeiriaduron llwyfannu nythu a ffeiliau datblygu.

Fersiwn 2.0.6 - Rhyddhawyd ar 2026-01-16
* Gwelliant: Cynnwys tanysgrifiadau craidd yn yr ychwanegyn. Nid oes angen estyniad Woocommerce Subscriptinos mwyach.

Fersiwn 2.0.5 - Rhyddhawyd ar 2026-01-09
* Gwelliant: Llwytho cyfieithiadau o API glotpress.
* Trwsiad: Gwall angheuol mewn rhai adeiladwyr tudalennau.
* trwsiad: Ailgyfeirio anfeidrol pan fo'r cwsmer yn aelod o'r prif safle.

Fersiwn 2.0.4 - Rhyddhawyd ar 2025-11-14
* Ychwanegwyd: Cyfieithiadau ar gyfer llawer mwy o ieithoedd.
* Newidiwyd: Ailenwyd i Ultimate Multisite: Integreiddiad Woocommerce.
* Ychwanegwyd: Cydnawsedd â Woocommerce 10.2.1.
* Ychwanegwyd: Cydnawsedd â Woocommerce Subscriptions 7.7.0.
* Trwsiad: Cydnawsedd â PHP 8.4
* Trwsiad: Ailgyfeirio ond pan nad oes tudalen Account WC yn bodoli.

Fersiwn 2.0.3 - Rhyddhawyd ar 2025-08-13
* Newidiwyd: Galluogwyd diweddariadau awtomatig gyda marchnad newydd.

Fersiwn 2.0.2 - Rhyddhawyd ar 2025-07-05
* Newidiwyd: Ailenwyd i Multisite Ultimate: Integreiddiad Woocommerce.
* Ychwanegwyd: Cydnawsedd â Woocommerce 9.8.1.
* Ychwanegwyd: Cydnawsedd â Woocommerce Subscriptions 7.3.0.
* Trwsiad: Canslo tanysgrifiad gan y cwsmer.
* Trwsiad: Gwall angheuol wrth ddefnyddio bloc checkout.
* Gwelliant: Bellach yn gydnaws â thablau archebion personol perfformiad uchel Woocommerce.
* Trwsiad: Gall canslo yn checkout WooCommerce uwchraddio aelodaeth o hyd.

Fersiwn 2.0.1 - Rhyddhawyd ar 2023-08-09

* Ychwanegwyd: Cydnawsedd â Woocommerce 7.9.0.
* Ychwanegwyd: Cydnawsedd â Woocommerce Subscriptions 5.3.0.
* Ychwanegwyd: Cefnogaeth ar gyfer diweddariadau aelodaeth.
* Ychwanegwyd: Hysbysiadau am dreialon a ffioedd sefydlu yn Woocommerce.
* Ychwanegwyd: Adnabod cynhyrchion Ultimate Multisite Woocommerce gyda gwerth meta.
* Ychwanegwyd: Mewnosodwyd trwsiad un tro i farcio pob cynnyrch Woocommerce cysylltiedig ag Ultimate Multisite.
* Ychwanegwyd: Tynnwyd cynhyrchion a grëwyd gan Ultimate Multisite o restr Woocommerce.
* Gwelliant: Crëwyd disgownt Woocommerce nad yw'n ailadroddus i'w gymhwyso i'r drol.
* Gwelliant: Adferwyd y disgownt ailadroddus i gynnyrch Woocommerce.
* Gwelliant: Ychwanegwyd label disgownt ailadroddus at gynnyrch Woocommerce.
* Gwelliant: Sicrhawyd math cynnyrch ar checkout.
* Trwsiad: Cynhaliwyd statws aelodaeth yn ystod y broses israddio.
* Trwsiad: Gwiriwyd a yw tanysgrifiad yn bodoli i osgoi gwallau yn ystod y broses ganslo.
* Trwsiad: Ychwanegwyd dyddiad dechrau'r tanysgrifiad i'w ddefnyddio mewn tanysgrifiadau Woocommerce.
* Mewnol: Gweithredwyd proses adeiladu PHP 8.1 newydd.

Fersiwn 2.0.0 - Ailysgrifennu cyflawn.

* Ychwanegwyd: Dull prosesu canslo i dynnu tanysgrifiad woo wrth newid y gateway neu ganslo'r aelodaeth;
* Ychwanegwyd: Triniwr i israddio ac uwchraddio aelodaethau;
* Gwelliant: Llwytho dibyniaethau woocommerce ar ffurflen diweddaru cwsmer mewn is-safleoedd i ganiatáu diweddaru Account;
* Gwelliant: Llwytho cart Woocommerce yn gywir os nad yw'n bodoli;
* Gwelliant: Sicrhau ein bod ar dablau'r prif safle wrth brosesu checkout;
* Gwelliant: Gwneud archeb adnewyddu Ultimo yn seiliedig ar werth archeb tanysgrifiad Woocommerce ac nid ar y taliad diwethaf;
* Trwsiad: Dolen botwm Ewch i Aelodaeth WU;
* Trwsiad: Gosod archeb Ultimo fel wedi'i thalu pan fo adnewyddiad tanysgrifiadau Woocommerce wedi talu;
* Adeiladu: Ychwanegu MPB fel adeiladwr;

Fersiwn 2.0.0-beta-5 - Rhyddhawyd ar 2022-01-21

* Mewnol: Ychwanegwyd cynhyrchydd hooks a hidlyddion;
* Mewnol: Ychwanegwyd stubs Ultimate Multisite ar gyfer ansawdd bywyd datblygwyr;
* Trwsiwyd: Atal creu cynhyrchion lluosog pan nad oedd angen;

Fersiwn 2.0.0-beta.4 - 2021-09-23

* Trwsiad: mynnu bod WooCommerce yn weithredol ar y rhwydwaith yn hytrach nag ar y prif safle yn unig;
* Gwelliant: ychwanegwyd hidlydd i ganiatáu defnyddio'r ychwanegyn fel mu-plugin;

Fersiwn 2.0.0-beta.3 - 2021-05-28

* Trwsiad: roedd rheolaeth mynediad Dashboard yn rhy ymosodol;
* Gwelliant: Ychwanegwyd dolenni cymorth WooCommerce at ddewislen uchaf Ultimate Multisite;

Fersiwn 2.0.0-beta.2 - 2021-05-04

* Gwelliant: yn creu taliadau arfaethedig ar Ultimo wrth greu archeb adnewyddu WCS;
* Gwelliant: yn rhag-lenwi meysydd bilio â data cwsmer Ultimate Multisite;
* Gwelliant: yn ychwanegu meysydd bilio yn ôl ar gyfer gateways;

Fersiwn 2.0.0-beta.1 - 2021-05-04

* Rhyddhad beta cychwynnol

-- Fersiynau Etifeddol --

Fersiwn 1.2.6 - 26/03/2020

* Trwsiwyd: Anghydnawsedd bach â fersiynau mwy newydd o WooCommerce Subscriptions;

Fersiwn 1.2.5 - 26/08/2019

* Trwsiwyd: Gwall ar y rhyddhad blaenorol;

Fersiwn 1.2.4 - 22/08/2019

* Gwellhawyd: Ychwanegwyd opsiwn i ailgyfeirio i sgrin checkout WooCommerce ar unwaith ar ôl integreiddio;

Fersiwn 1.2.3 - 26/05/2019

* Trwsiwyd: Diflannodd e-bost talu ar gyfer WooCommerce mewn rhai achosion ymylol;

Fersiwn 1.2.2 - 27/02/2019

* Ychwanegwyd: Cefnogaeth i ffioedd sefydlu ar integreiddiad WooCommerce Subscription;

Fersiwn 1.2.1 - 17/11/2018

* Trwsiwyd: Problemau cydnawsedd â fersiwn Ultimate Multisite 1.9.0;

Fersiwn 1.2.0 - 10/09/2018

* Gwellhawyd: URL diweddariadau newydd ar gyfer ychwanegion;
* Ychwanegwyd: Cefnogaeth beta i WooCommerce Subscription;

Fersiwn 1.1.2 - 11/02/2018

* Trwsiwyd: Dolen Talu yn cael ei chynhyrchu'n ddeinamig i ymateb i newidiadau i endpoints WooCommerce;
* Gwellhawyd: Rydym bellach yn gorfodi statws wedi'i gwblhau ar gyfer ein harchebion pan gaiff payment_completed ei alw i sicrhau bod ein hooks adnewyddu yn rhedeg pan ddylent;

Fersiwn 1.1.1 - 24/01/2018

* Wedi trwsio: Nawr mae hefyd yn gwirio i weld a yw WooCommerce newydd gael ei actifadu ar y prif safle;
* Wedi trwsio: Wedi cynnwys gor-lwythiadau i ganiatáu i greu archeb gynnwys trethi;

Fersiwn 1.1.0 - 04/11/2017

* Wedi trwsio: Nawr mae label y botwm integreiddio yn newid mewn gwirionedd i adlewyrchu’r gosodiadau. Mae angen Ultimate Multisite 1.5.0;
* Wedi trwsio: Mae Integreiddio WooCommerce bellach yn gweithio hyd yn oed os nad yw WooCommerce yn weithredol ar y rhwydwaith ac wedi’i actifadu yn unig yn t^he prif safle;

1.0.0 - Rhyddhad Cychwynnol
