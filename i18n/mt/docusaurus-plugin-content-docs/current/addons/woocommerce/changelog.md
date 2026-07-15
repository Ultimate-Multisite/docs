---
title: Reġistru tal-Bidliet tal-Integrazzjoni ma’ WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Reġistru tal-Bidliet tal-Integrazzjoni WooCommerce

Verżjoni 2.2.0 - Rilaxxata fi 2026-07-01
* Ġdid: L-ammonti tat-taxxa ta' Ultimate Multisite issa jidhru bħala linji separati ta' tariffi WooCommerce waqt il-ħlas, u jagħmlu t-totali tat-taxxa aktar ċari qabel il-ħlas.
* Ġdid: Żidna issettjar opt-in "Issospendi s-Sħubijiet Immedjatament meta jfallu t-Tiġdidiet" u l-filtru `wu_woo_suspend_on_payment_failure` għal siti li jridu sospensjoni minħabba tiġdid fallut matul it-tieqa ta' provi mill-ġdid ta' WooCommerce Subscriptions.
* Tiswija: Irrikonċiljajna l-istatuses ta' WooCommerce Subscription li setgħu jibqgħu mhux sinkronizzati mas-sħubijiet ta' Ultimate Multisite wara tiġdidiet falluti jew irkuprati.
* Tiswija: Żidna l-munita tal-ħanut WooCommerce mal-lista tal-muniti ta' Ultimate Multisite meta kienet nieqsa.
* Tiswija: Żammejna d-dettalji tal-kontijiet tal-klijent meta l-abbonati jintbagħtu mill-ġdid lejn il-ħlas ta' WooCommerce.
* Imtejjeb: Żidna kompatibbiltà ma' Jetpack Autoloader 5.
* Imtejjeb: Naddafna l-ġenerazzjoni tal-pakkett tar-rilaxx sabiex il-fajls zip ta' GitHub u tas-suq jevitaw direttorji ta' staging imbeżżgħin u fajls tal-iżvilupp.

Verżjoni 2.0.6 - Rilaxxata fi 2026-01-16
* Titjib: Inkludi abbonamenti ewlenin fl-addon. M'għadux jeħtieġ l-estensjoni Woocommerce Subscriptinos.

Verżjoni 2.0.5 - Rilaxxata fi 2026-01-09
* Titjib: Għabbi t-traduzzjonijiet mill-API ta' glotpress.
* Tiswija: Żball fatali f'xi bennejja tal-paġni.
* tiswija: Ridirezzjoni infinita meta l-klijent ikun membru tas-sit ewlieni.

Verżjoni 2.0.4 - Rilaxxata fi 2025-11-14
* Miżjud: Traduzzjonijiet għal ħafna aktar lingwi.
* Mibdul: Ingħata isem ġdid għal Ultimate Multisite: Integrazzjoni Woocommerce.
* Miżjud: Kompatibbiltà ma' Woocommerce 10.2.1.
* Miżjud: Kompatibbiltà ma' Woocommerce Subscriptions 7.7.0.
* Tiswija: Kompatibbiltà ma' PHP 8.4
* Tiswija: Ridirezzjoni iżda meta ma teżistix paġna tal-account WC.

Verżjoni 2.0.3 - Rilaxxata fi 2025-08-13
* Mibdul: Aġġornamenti awtomatiċi attivati bis-suq il-ġdid.

Verżjoni 2.0.2 - Rilaxxata fi 2025-07-05
* Mibdul: Ingħata isem ġdid għal Multisite Ultimate: Integrazzjoni Woocommerce.
* Miżjud: Kompatibbiltà ma' Woocommerce 9.8.1.
* Miżjud: Kompatibbiltà ma' Woocommerce Subscriptions 7.3.0.
* Tiswija: Kanċellazzjoni ta' abbonament mill-klijent.
* Tiswija: Żball fatali meta jintuża blokka tal-ħlas.
* Titjib: Issa kompatibbli mat-tabelli tal-ordnijiet personalizzati ta' prestazzjoni għolja ta' Woocommerce.
* Tiswija: Kanċellazzjoni waqt il-ħlas ta' WooCommerce xorta tista' taġġorna sħubija għal livell ogħla.

Verżjoni 2.0.1 - Rilaxxata fi 2023-08-09

* Miżjud: Kompatibbiltà ma' Woocommerce 7.9.0.
* Miżjud: Kompatibbiltà ma' Woocommerce Subscriptions 5.3.0.
* Miżjud: Appoġġ għal aġġornamenti tas-sħubija.
* Miżjud: Avviżi dwar provi u tariffi ta' setup f'Woocommerce.
* Miżjud: Identifikazzjoni ta' prodotti Ultimate Multisite Woocommerce b'valur meta.
* Miżjud: Daħħalna tiswija ta' darba biex nimmarkaw il-prodotti kollha ta' Woocommerce relatati ma' Ultimate Multisite.
* Miżjud: Neħħejna prodotti maħluqa minn Ultimate Multisite mil-lista ta' Woocommerce.
* Titjib: Ħloqna skont Woocommerce mhux rikorrenti biex jiġi applikat għall-karrettun.
* Titjib: Irrestawrajna l-iskont rikorrenti għall-prodott Woocommerce.
* Titjib: Żidna tikketta ta' skont rikorrenti mal-prodott Woocommerce.
* Titjib: Żgurajna t-tip ta' prodott waqt il-ħlas.
* Tiswija: Żammejna l-istatus tas-sħubija matul il-proċess ta' tnaqqis għal livell aktar baxx.
* Tiswija: Iċċekkjajna jekk jeżistix abbonament biex jiġu evitati żbalji matul il-proċess ta' kanċellazzjoni.
* Tiswija: Żidna d-data tal-bidu tal-abbonament biex tintuża fl-abbonamenti ta' Woocommerce.
* Intern: Implimentajna proċess ta' bini ġdid għal PHP 8.1.

Verżjoni 2.0.0 - Kitba mill-ġdid sħiħa.

* Miżjud: Metodu ta' proċess ta' kanċellazzjoni biex jitneħħa l-abbonament woo meta jinbidel il-gateway jew tiġi kkanċellata s-sħubija;
* Miżjud: Handler biex jitnaqqsu u jiżdiedu s-sħubijiet;
* Titjib: Għabbi d-dipendenzi ta' woocommerce fuq il-formola ta' aġġornament tal-klijent fis-subsiti biex tippermetti aġġornament tal-account;
* Titjib: Ikkoreġi t-tagħbija tal-karrettun ta' Woocommerce jekk ma jeżistix;
* Titjib: Żgura li nkunu fuq it-tabelli tas-sit ewlieni meta nipproċessaw ħlas;
* Titjib: Agħmel l-ordni ta' tiġdid ta' Ultimo bbażata fuq il-valur tal-ordni tal-abbonament ta' Woocommerce u mhux mill-aħħar ħlas;
* Tiswija: Link tal-buttuna Mur għal WU Membership;
* Tiswija: Issettja l-ordni ta' Ultimo bħala mħallsa meta t-tiġdid ta' Woocommerce subscriptions ikun tħallas;
* Bini: Żid MPB bħala bennej;

Verżjoni 2.0.0-beta-5 - Rilaxxata fi 2022-01-21

* Intern: Żidna ġeneratur ta' hooks u filtri;
* Intern: Żidna stubs ta' Ultimate Multisite għall-kwalità tal-ħajja tal-iżviluppatur;
* Irranġat: Ipprevjeni l-ħolqien ta' prodotti multipli meta mhux meħtieġ;

Verżjoni 2.0.0-beta.4 - 2021-09-23

* Tiswija: teħtieġ li WooCommerce ikun attiv fin-network minflok fuq is-sit ewlieni biss;
* Titjib: żidna filtru biex l-add-on ikun jista' jintuża bħala mu-plugin;

Verżjoni 2.0.0-beta.3 - 2021-05-28

* Tiswija: il-kontroll tal-aċċess għad-dashboard kien aggressiv wisq;
* Titjib: Żidna links ta' għajnuna ta' WooCommerce mal-menu ta' fuq ta' Ultimate Multisite;

Verżjoni 2.0.0-beta.2 - 2021-05-04

* Titjib: joħloq ħlasijiet pendenti fuq Ultimo meta tinħoloq ordni ta' tiġdid WCS;
* Titjib: jimla minn qabel l-oqsma tal-kontijiet bid-data tal-klijent ta' Ultimate Multisite;
* Titjib: iżid lura l-oqsma tal-kontijiet għall-gateways;

Verżjoni 2.0.0-beta.1 - 2021-05-04

* Rilaxx beta inizjali

-- Verżjonijiet Antiki --

Verżjoni 1.2.6 - 26/03/2020

* Irranġat: Inkompatibbiltà żgħira ma' verżjonijiet aktar ġodda ta' WooCommerce Subscriptions;

Verżjoni 1.2.5 - 26/08/2019

* Irranġat: Żball fir-rilaxx preċedenti;

Verżjoni 1.2.4 - 22/08/2019

* Imtejjeb: Żidna għażla biex, wara l-integrazzjoni, issir ridirezzjoni immedjatament lejn l-iskrin tal-ħlas ta' WooCommerce;

Verżjoni 1.2.3 - 26/05/2019

* Irranġat: L-email tal-ħlas għal WooCommerce sparixxiet f'xi każijiet estremi;

Verżjoni 1.2.2 - 27/02/2019

* Miżjud: Appoġġ għal tariffi ta' setup fuq l-integrazzjoni ta' WooCommerce Subscription;

Verżjoni 1.2.1 - 17/11/2018

* Irranġat: Kwistjonijiet ta' kompatibbiltà ma' Ultimate Multisite verżjoni 1.9.0;

Verżjoni 1.2.0 - 10/09/2018

* Imtejjeb: URL ġdid tal-aġġornamenti għall-add-ons;
* Miżjud: Appoġġ beta għal WooCommerce Subscription;

Verżjoni 1.1.2 - 11/02/2018

* Irranġat: Link għal Ħallas li qed tiġi ġġenerata dinamikament biex tirrispondi għal bidliet fl-endpoints ta' WooCommerce;
* Imtejjeb: Issa nisfurzaw status komplut għall-ordnijiet tagħna meta payment_completed jissejjaħ biex niżguraw li l-hooks tat-tiġdid tagħna jitħaddmu meta għandhom;

Verżjoni 1.1.1 - 24/01/2018

* Irranġat: Issa jiċċekkja wkoll biex jara jekk WooCommerce għadux kemm ġie attivat fuq is-sit ewlieni;
* Irranġat: Ġew inklużi over-loadings biex il-ħolqien tal-ordni jkun jista’ jinkludi t-taxxi;

Verżjoni 1.1.0 - 04/11/2017

* Irranġat: Issa t-tikketta tal-buttuna tal-integrazzjoni fil-fatt tinbidel biex tirrifletti s-settings. Jeħtieġ Ultimate Multisite 1.5.0;
* Irranġat: WooCommerce Integration issa taħdem anke jekk WooCommerce mhuwiex attiv fuq in-network u huwa attivat biss fis-sit ewlieni;

1.0.0 - Ħruġ Inizjali
