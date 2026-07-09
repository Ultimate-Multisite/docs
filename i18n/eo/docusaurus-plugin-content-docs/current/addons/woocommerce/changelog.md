---
title: Ŝanĝprotokolo de la WooCommerce-integriĝo
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration Ŝanĝoprotokolo

Versio 2.2.0 - Eldonita je 2026-07-01
* Nova: Ultimate Multisite impostaj sumoj nun aperas kiel apartaj WooCommerce kotizaj linioj ĉe checkout, igante impostajn totalojn pli klaraj antaŭ pago.
* Nova: Aldonita elektebla agordo "Tuj Suspendi Membrecojn ĉe Malsukcesaj Renovigoj" kaj `wu_woo_suspend_on_payment_failure` filter por retejoj kiuj volas suspendon pro malsukcesa renovigo dum la WooCommerce Subscriptions reprova fenestro.
* Riparo: Akordigis WooCommerce Subscription statusojn kiuj povis resti malsinkronaj kun Ultimate Multisite membrecoj post malsukcesaj aŭ reakirintaj renovigoj.
* Riparo: Aldonis la WooCommerce butikan valuton al la Ultimate Multisite valuta listo kiam ĝi mankis.
* Riparo: Konservis klientajn fakturajn detalojn dum alidirektado de abonantoj al WooCommerce checkout.
* Plibonigita: Aldonita kongruo kun Jetpack Autoloader 5.
* Plibonigita: Purigita eldona pakaĵa generado tiel ke GitHub kaj vendoplacaj zip-oj evitu nestitajn preparajn dosierujojn kaj evoluigajn dosierojn.

Versio 2.0.6 - Eldonita je 2026-01-16
* Plibonigo: Inkluzivas kernajn abonojn en la aldonaĵo. Ne plu postulas la Woocommerce Subscriptinos etendaĵon.

Versio 2.0.5 - Eldonita je 2026-01-09
* Plibonigo: Ŝargi tradukojn el glotpress API.
* Riparo: Mortiga eraro en iuj paĝkonstruiloj.
* riparo: Senfina alidirektado kiam la kliento estas membro de la ĉefa retejo.

Versio 2.0.4 - Eldonita je 2025-11-14
* Aldonita: Tradukoj por multe pli da lingvoj.
* Ŝanĝita: Renomita al Ultimate Multisite: Woocommerce Integration.
* Aldonita: Kongruo kun Woocommerce 10.2.1.
* Aldonita: Kongruo kun Woocommerce Subscriptions 7.7.0.
* Riparo: Kongruo kun PHP 8.4
* Riparo: Alidirektado sed kiam neniu WC Account paĝo ekzistas.

Versio 2.0.3 - Eldonita je 2025-08-13
* Ŝanĝita: Ebligitaj aŭtomataj ĝisdatigoj kun nova vendoplaco.

Versio 2.0.2 - Eldonita je 2025-07-05
* Ŝanĝita: Renomita al Multisite Ultimate: Woocommerce Integration.
* Aldonita: Kongruo kun Woocommerce 9.8.1.
* Aldonita: Kongruo kun Woocommerce Subscriptions 7.3.0.
* Riparo: Nuligo de abono fare de la kliento.
* Riparo: Mortiga eraro dum uzado de checkout bloko.
* Plibonigo: Nun kongrua kun Woocommerce alt-efikecaj propraj mendaj tabeloj.
* Riparo: Nuligo ĉe WooCommerce checkout ankoraŭ povas ĝisdatigi membrecon.

Versio 2.0.1 - Eldonita je 2023-08-09

* Aldonita: Kongruo kun Woocommerce 7.9.0.
* Aldonita: Kongruo kun Woocommerce Subscriptions 5.3.0.
* Aldonita: Subteno por membreco-ĝisdatigoj.
* Aldonita: Sciigoj pri provperiodoj kaj instalaj kotizoj en Woocommerce.
* Aldonita: Identigo de Ultimate Multisite Woocommerce produktoj kun meta-valoro.
* Aldonita: Enmetita unufoja riparo por marki ĉiujn Ultimate Multisite-rilatajn Woocommerce produktojn.
* Aldonita: Forigis produktojn kreitajn de Ultimate Multisite el la Woocommerce listo.
* Plibonigo: Kreis nerevenan Woocommerce rabaton por apliki al la ĉaro.
* Plibonigo: Restarigis la revenan rabaton al la Woocommerce produkto.
* Plibonigo: Aldonis revenan rabatan etikedon al la Woocommerce produkto.
* Plibonigo: Certigis produktan tipon ĉe checkout.
* Riparo: Konservis membrecan staton dum la malaltiga procezo.
* Riparo: Kontrolis ĉu abono ekzistas por eviti erarojn dum la nuliga procezo.
* Riparo: Aldonis la abona komencdato por uzi en Woocommerce abonoj.
* Interna: Efektivigis novan PHP 8.1 konstruprocezon.

Versio 2.0.0 - Kompleta reverko.

* Aldonita: Proceza nuligmetodo por forigi woo-abonon kiam ŝanĝante la gateway aŭ nuligante la membrecon;
* Aldonita: Traktilo por malaltigi kaj altigi membrecojn;
* Plibonigo: Ŝargi woocommerce dependecojn ĉe klienta ĝisdatiga formularo en subretejoj por permesi Account ĝisdatigon;
* Plibonigo: Ĝuste ŝargi Woocommerce ĉaron se ĝi ne ekzistas;
* Plibonigo: Certigi ke ni estas ĉe ĉefaj retejaj tabeloj kiam prilaborante checkout;
* Plibonigo: Fari Ultimo renovigan mendon bazita sur Woocommerce abona menda valoro kaj ne sur lasta pago;
* Riparo: Iri al WU Membership butona ligilo;
* Riparo: Agordi Ultimo mendon kiel pagitan kiam Woocommerce subscriptions renovigo estas pagita;
* Konstruo: Aldoni MPB kiel konstruanton;

Versio 2.0.0-beta-5 - Eldonita je 2022-01-21

* Interna: Aldonita generatoro de hooks kaj filters;
* Interna: Aldonitaj Ultimate Multisite stubs por plibonigi evoluigistan laborkvaliton;
* Riparita: Malhelpi la kreadon de pluraj produktoj kiam ne necesas;

Versio 2.0.0-beta.4 - 2021-09-23

* Riparo: postuli ke WooCommerce estu rete aktiva anstataŭ nur en la ĉefa retejo;
* Plibonigo: aldonita filter por permesi ke la aldonaĵo estu uzata kiel mu-plugin;

Versio 2.0.0-beta.3 - 2021-05-28

* Riparo: Dashboard alirkontrolo estis tro agresema;
* Plibonigo: Aldonitaj WooCommerce helpoligiloj al Ultimate Multisite supra-menuo;

Versio 2.0.0-beta.2 - 2021-05-04

* Plibonigo: kreas pritraktatajn pagojn en Ultimo ĉe kreado de WCS renoviga mendo;
* Plibonigo: antaŭplenigas fakturajn kampojn per Ultimate Multisite klientaj datumoj;
* Plibonigo: realdonas fakturajn kampojn por gateways;

Versio 2.0.0-beta.1 - 2021-05-04

* Komenca beta eldono

-- Heredaj Versioj --

Versio 1.2.6 - 26/03/2020

* Riparita: Malgranda nekongruo kun pli novaj versioj de WooCommerce Subscriptions;

Versio 1.2.5 - 26/08/2019

* Riparita: Eraro en antaŭa eldono;

Versio 1.2.4 - 22/08/2019

* Plibonigita: Aldonita opcio por alidirekti al WooCommerce checkout ekrano tuj post integriĝo;

Versio 1.2.3 - 26/05/2019

* Riparita: Paga retpoŝto por WooCommerce malaperis en iuj randokazoj;

Versio 1.2.2 - 27/02/2019

* Aldonita: Subteno por instalaj kotizoj ĉe la WooCommerce Subscription integriĝo;

Versio 1.2.1 - 17/11/2018

* Riparita: Kongruaj problemoj kun Ultimate Multisite versio 1.9.0;

Versio 1.2.0 - 10/09/2018

* Plibonigita: Nova ĝisdatiga URL por aldonaĵoj;
* Aldonita: Beta subteno por WooCommerce Subscription;

Versio 1.1.2 - 11/02/2018

* Riparita: Ligilo por Pagi generata dinamike por respondi al ŝanĝoj en WooCommerce endpoints;
* Plibonigita: Ni nun devigas kompletigitan staton por niaj mendoj kiam payment_completed estas vokita por certigi ke niaj renovigaj hooks ruliĝas kiam ili devus;

Versio 1.1.1 - 24/01/2018

* Korektite: Nun ĝi ankaŭ kontrolas ĉu WooCommerce ĵus estas aktivigita ĉe la ĉefa retejo;
* Korektite: Inkluzivitaj superŝarĝoj por permesi ke mendokreo inkluzivu impostojn;

Versio 1.1.0 - 04/11/2017

* Korektite: Nun la etikedo de la integriga butono efektive ŝanĝiĝas por reflekti la agordojn. Postulas Ultimate Multisite 1.5.0;
* Korektite: WooCommerce Integration nun funkcias eĉ se WooCommerce ne estas aktive en la reto kaj estas aktivigita nur en t^he ĉefa retejo;

1.0.0 - Komenca Eldono
