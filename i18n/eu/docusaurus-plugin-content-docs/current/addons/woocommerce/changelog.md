---
title: WooCommerce integrazioaren aldaketa-erregistroa
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce integrazioaren aldaketa-erregistroa

2.2.0 bertsioa - 2026-07-01ean argitaratua
* Berria: Ultimate Multisite zerga-kopuruak orain WooCommerce kuota-lerro bereizi gisa agertzen dira checkout-en, ordainketa egin aurretik zergen guztizkoak argiago eginez.
* Berria: "Suspend Memberships Immediately on Failed Renewals" hautazko ezarpena eta `wu_woo_suspend_on_payment_failure` iragazkia gehitu dira WooCommerce Subscriptions berriro saiatzeko leihoan berritze hutsengatiko etetea nahi duten guneetarako.
* Konponketa: huts egindako edo berreskuratutako berritzeen ondoren Ultimate Multisite kidetzekin sinkronizatuta ez gera zitezkeen WooCommerce Subscription egoerak bateratu dira.
* Konponketa: WooCommerce dendaren moneta Ultimate Multisite moneta-zerrendara gehitu da falta zenean.
* Konponketa: bezeroen fakturazio-xehetasunak mantendu dira harpidedunak WooCommerce checkout-era birbideratzean.
* Hobetua: Jetpack Autoloader 5ekin bateragarritasuna gehitu da.
* Hobetua: bertsio-paketearen sorrera garbitu da, GitHub eta marketplace zip-ek tarteko direktorio habiaratuak eta garapen-fitxategiak saihesteko.

2.0.6 bertsioa - 2026-01-16an argitaratua
* Hobekuntza: core harpidetzak gehitu addonean. Jada ez du Woocommerce Subscriptinos luzapena behar.

2.0.5 bertsioa - 2026-01-09an argitaratua
* Hobekuntza: itzulpenak glotpress API-tik kargatu.
* Konponketa: errore larria orri-eraikitzaile batzuetan.
* konponketa: birbideratze infinitua bezeroa gune nagusiko kidea denean.

2.0.4 bertsioa - 2025-11-14an argitaratua
* Gehitua: hizkuntza askoz gehiagotarako itzulpenak.
* Aldatua: izena Ultimate Multisite: Woocommerce Integration bihurtu da.
* Gehitua: Woocommerce 10.2.1ekin bateragarritasuna.
* Gehitua: Woocommerce Subscriptions 7.7.0rekin bateragarritasuna.
* Konponketa: PHP 8.4rekin bateragarritasuna
* Konponketa: birbideratzea, baina WC Account orririk ez dagoenean.

2.0.3 bertsioa - 2025-08-13an argitaratua
* Aldatua: marketplace berriarekin eguneratze automatikoak gaitu dira.

2.0.2 bertsioa - 2025-07-05ean argitaratua
* Aldatua: izena Multisite Ultimate: Woocommerce Integration bihurtu da.
* Gehitua: Woocommerce 9.8.1ekin bateragarritasuna.
* Gehitua: Woocommerce Subscriptions 7.3.0rekin bateragarritasuna.
* Konponketa: bezeroak harpidetza bertan behera uztea.
* Konponketa: errore larria checkout blokea erabiltzean.
* Hobekuntza: orain bateragarria da Woocommerce errendimendu handiko eskaera-taula pertsonalizatuekin.
* Konponketa: WooCommerce checkout-en bertan behera uzteak oraindik kidetza bat berritu dezake.

2.0.1 bertsioa - 2023-08-09an argitaratua

* Gehitua: Woocommerce 7.9.0rekin bateragarritasuna.
* Gehitua: Woocommerce Subscriptions 5.3.0rekin bateragarritasuna.
* Gehitua: kidetza-eguneratzeetarako euskarria.
* Gehitua: probaldiei eta konfigurazio-kuotei buruzko oharrak Woocommerce-n.
* Gehitua: Ultimate Multisite Woocommerce produktuen identifikazioa meta balio batekin.
* Gehitua: behin bakarrik exekutatzen den konponketa bat txertatu da Ultimate Multisite-rekin lotutako Woocommerce produktu guztiak markatzeko.
* Gehitua: Ultimate Multisite-k sortutako produktuak Woocommerce zerrendatik kendu dira.
* Hobekuntza: saskiari aplikatzeko Woocommerce deskontu ez-errepikakorra sortu da.
* Hobekuntza: deskontu errepikakorra Woocommerce produktura leheneratu da.
* Hobekuntza: deskontu errepikakorraren etiketa gehitu zaio Woocommerce produktuari.
* Hobekuntza: produktu mota ziurtatu da checkout-en.
* Konponketa: kidetzaren egoera mantendu da mailaz jaisteko prozesuan.
* Konponketa: harpidetza bat badagoen egiaztatu da, bertan behera uzteko prozesuan erroreak saihesteko.
* Konponketa: harpidetzaren hasiera-data gehitu da Woocommerce harpidetzetan erabiltzeko.
* Barnekoa: PHP 8.1 eraikitze-prozesu berria inplementatu da.

2.0.0 bertsioa - Berridazketa osoa.

* Gehitua: ezeztapen-metodoa prozesatu woo harpidetza kentzeko gateway-a aldatzean edo kidetza bertan behera uztean;
* Gehitua: kidetzak mailaz jaisteko eta igotzeko kudeatzailea;
* Hobekuntza: woocommerce mendekotasunak kargatu bezeroaren eguneratze-inprimakian azpiguneetan, account eguneratzea ahalbidetzeko;
* Hobekuntza: Woocommerce saskia behar bezala kargatu existitzen ez bada;
* Hobekuntza: checkout bat prozesatzean gune nagusiko tauletan gaudela ziurtatu;
* Hobekuntza: Ultimo berritze-eskaera Woocommerce harpidetza-eskaeraren balioan oinarritu, eta ez azken ordainketan;
* Konponketa: WU Membership botoiaren esteka;
* Konponketa: Ultimo eskaera ordaindutzat ezarri Woocommerce harpidetzen berritzea ordaindu denean;
* Eraikuntza: MPB gehitu eraikitzaile gisa;

2.0.0-beta-5 bertsioa - 2022-01-21ean argitaratua

* Barnekoa: hook eta iragazki sortzailea gehitu da;
* Barnekoa: Ultimate Multisite stub-ak gehitu dira garatzaileen bizi-kalitatea hobetzeko;
* Konponduta: beharrezkoa ez denean produktu anitz sortzea saihestu da;

2.0.0-beta.4 bertsioa - 2021-09-23

* Konponketa: WooCommerce sarean aktibo egotea eskatzen zen, gune nagusian bakarrik izan beharrean;
* Hobekuntza: gehigarria mu-plugin gisa erabiltzea ahalbidetzeko iragazkia gehitu da;

2.0.0-beta.3 bertsioa - 2021-05-28

* Konponketa: dashboard sarbide-kontrola oldarkorregia zen;
* Hobekuntza: WooCommerce laguntza-estekak gehitu dira Ultimate Multisite goiko menuan;

2.0.0-beta.2 bertsioa - 2021-05-04

* Hobekuntza: Ultimo-n zain dauden ordainketak sortzen ditu WCS berritze-eskaera sortzean;
* Hobekuntza: fakturazio-eremuak aurrez betetzen ditu Ultimate Multisite bezeroaren datuekin;
* Hobekuntza: gateway-etarako fakturazio-eremuak berriro gehitzen ditu;

2.0.0-beta.1 bertsioa - 2021-05-04

* Hasierako beta bertsioa

-- Bertsio zaharrak --

1.2.6 bertsioa - 2020/03/26

* Konponduta: bateraezintasun txikia WooCommerce Subscriptions-en bertsio berriagoekin;

1.2.5 bertsioa - 2019/08/26

* Konponduta: errorea aurreko bertsioan;

1.2.4 bertsioa - 2019/08/22

* Hobetua: integrazioaren ondoren berehala WooCommerce checkout pantailara birbideratzeko aukera gehitu da;

1.2.3 bertsioa - 2019/05/26

* Konponduta: WooCommerce-ren ordainketa-posta elektronikoa desagertu egiten zen kasu berezi batzuetan;

1.2.2 bertsioa - 2019/02/27

* Gehitua: konfigurazio-kuoten euskarria WooCommerce Subscription integrazioan;

1.2.1 bertsioa - 2018/11/17

* Konponduta: bateragarritasun-arazoak Ultimate Multisite 1.9.0 bertsioarekin;

1.2.0 bertsioa - 2018/09/10

* Hobetua: add-onetarako eguneratzeen URL berria;
* Gehitua: beta euskarria WooCommerce Subscription-erako;

1.1.2 bertsioa - 2018/02/11

* Konponduta: Ordaintzeko esteka dinamikoki sortzen da WooCommerce endpoint-en aldaketei erantzuteko;
* Hobetua: orain gure eskaeretarako osatutako egoera behartzen dugu payment_completed deitzen denean, gure berritze-hook-ak behar dutenean exekutatzen direla ziurtatzeko;

Version 1.1.1 - 24/01/2018

* Konponduta: Orain WooCommerce gune nagusian bakarrik aktibatu den ere egiaztatzen du;
* Konponduta: Gainkargak gehitu dira eskaeren sorrera zergak barne hartzea ahalbidetzeko;

Version 1.1.0 - 04/11/2017

* Konponduta: Orain integrazio-botoiaren etiketa benetan aldatzen da ezarpenak islatzeko. Ultimate Multisite 1.5.0 behar du;
* Konponduta: WooCommerce Integration orain funtzionatzen du, nahiz eta WooCommerce sarean aktibo ez egon eta gune nagusian bakarrik aktibatuta egon;

1.0.0 - Hasierako argitalpena
