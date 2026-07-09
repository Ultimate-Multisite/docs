---
title: Dnevnik promjena integracije WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Dnevnik promjena WooCommerce integracije {#woocommerce-integration-changelog}

Verzija 2.2.0 - Objavljeno 2026-07-01
* Novo: Iznosi poreza za Ultimate Multisite sada se prikazuju kao zasebne stavke naknade u WooCommerce blagajni, što ukupne iznose poreza čini jasnijima prije plaćanja.
* Novo: Dodana je opcijska postavka "Odmah obustavi članstva pri neuspjelim obnovama" i filter `wu_woo_suspend_on_payment_failure` za web-mjesta koja žele obustavu zbog neuspjele obnove tijekom razdoblja ponovnih pokušaja WooCommerce Subscriptions.
* Ispravak: Usklađeni su statusi WooCommerce Subscription koji su mogli ostati nesinkronizirani s Ultimate Multisite članstvima nakon neuspjelih ili oporavljenih obnova.
* Ispravak: Dodana je valuta WooCommerce trgovine na popis valuta Ultimate Multisite kada je nedostajala.
* Ispravak: Sačuvani su podaci za naplatu kupca pri preusmjeravanju pretplatnika na WooCommerce blagajnu.
* Poboljšano: Dodana je kompatibilnost s Jetpack Autoloader 5.
* Poboljšano: Očišćeno je generiranje paketa izdanja kako bi GitHub i marketplace zip datoteke izbjegle ugniježđene staging direktorije i razvojne datoteke.

Verzija 2.0.6 - Objavljeno 2026-01-16
* Poboljšanje: Uključi osnovne pretplate u dodatak. Više ne zahtijeva proširenje Woocommerce Subscriptinos.

Verzija 2.0.5 - Objavljeno 2026-01-09
* Poboljšanje: Učitaj prijevode iz glotpress API-ja.
* Ispravak: Fatalna pogreška u nekim page builderima.
* Ispravak: Beskonačno preusmjeravanje kada je kupac član glavnog web-mjesta.

Verzija 2.0.4 - Objavljeno 2025-11-14
* Dodano: Prijevodi za mnogo više jezika.
* Promijenjeno: Preimenovano u Ultimate Multisite: Woocommerce Integration.
* Dodano: Kompatibilnost s Woocommerce 10.2.1.
* Dodano: Kompatibilnost s Woocommerce Subscriptions 7.7.0.
* Ispravak: Kompatibilnost s PHP 8.4
* Ispravak: Preusmjeravanje, ali kada ne postoji stranica WC računa.

Verzija 2.0.3 - Objavljeno 2025-08-13
* Promijenjeno: Omogućena automatska ažuriranja s novim marketplaceom.

Verzija 2.0.2 - Objavljeno 2025-07-05
* Promijenjeno: Preimenovano u Multisite Ultimate: Woocommerce Integration.
* Dodano: Kompatibilnost s Woocommerce 9.8.1.
* Dodano: Kompatibilnost s Woocommerce Subscriptions 7.3.0.
* Ispravak: Otkazivanje pretplate od strane kupca.
* Ispravak: Fatalna pogreška pri korištenju bloka blagajne.
* Poboljšanje: Sada je kompatibilno s Woocommerce prilagođenim tablicama narudžbi visokih performansi.
* Ispravak: Otkazivanje na WooCommerce blagajni i dalje može nadograditi članstvo.

Verzija 2.0.1 - Objavljeno 2023-08-09

* Dodano: Kompatibilnost s Woocommerce 7.9.0.
* Dodano: Kompatibilnost s Woocommerce Subscriptions 5.3.0.
* Dodano: Podrška za ažuriranja članstva.
* Dodano: Obavijesti o probnim razdobljima i naknadama za postavljanje u Woocommerce.
* Dodano: Identifikacija Ultimate Multisite Woocommerce proizvoda pomoću meta vrijednosti.
* Dodano: Umetnut jednokratni ispravak za označavanje svih Woocommerce proizvoda povezanih s Ultimate Multisite.
* Dodano: Uklonjeni proizvodi koje je stvorio Ultimate Multisite s Woocommerce popisa.
* Poboljšanje: Stvoren neponavljajući Woocommerce popust za primjenu na košaricu.
* Poboljšanje: Vraćen ponavljajući popust na Woocommerce proizvod.
* Poboljšanje: Dodana oznaka ponavljajućeg popusta na Woocommerce proizvod.
* Poboljšanje: Osigurana vrsta proizvoda na blagajni.
* Ispravak: Održan status članstva tijekom procesa prelaska na niži paket.
* Ispravak: Provjereno postoji li pretplata kako bi se izbjegle pogreške tijekom procesa otkazivanja.
* Ispravak: Dodan datum početka pretplate za korištenje u Woocommerce pretplatama.
* Interno: Implementiran novi proces izgradnje za PHP 8.1.

Verzija 2.0.0 - Potpuno prepisivanje.

* Dodano: Metoda obrade otkazivanja za uklanjanje woo pretplate pri promjeni pristupnika ili otkazivanju članstva;
* Dodano: Rukovatelj za prelazak članstava na niži i viši paket;
* Poboljšanje: Učitaj woocommerce ovisnosti na obrascu za ažuriranje kupca u podweb-mjestima kako bi se omogućilo ažuriranje računa;
* Poboljšanje: Ispravno učitaj Woocommerce košaricu ako ne postoji;
* Poboljšanje: Osiguraj da smo na tablicama glavnog web-mjesta pri obradi naplate;
* Poboljšanje: Postavi Ultimo narudžbu obnove na temelju vrijednosti Woocommerce narudžbe pretplate, a ne prema zadnjoj uplati;
* Ispravak: Poveznica gumba Idi na WU članstvo;
* Ispravak: Postavi Ultimo narudžbu kao plaćenu kada je obnova Woocommerce pretplata plaćena;
* Izgradnja: Dodaj MPB kao builder;

Verzija 2.0.0-beta-5 - Objavljeno 2022-01-21

* Interno: Dodan generator hookova i filtera;
* Interno: Dodani Ultimate Multisite stubovi za bolju kvalitetu života developera;
* Ispravljeno: Spriječeno stvaranje više proizvoda kada nije potrebno;

Verzija 2.0.0-beta.4 - 2021-09-23

* Ispravak: zahtijevanje da WooCommerce bude aktivan na mreži umjesto samo na glavnom web-mjestu;
* Poboljšanje: dodan filter koji omogućuje korištenje dodatka kao mu-plugin;

Verzija 2.0.0-beta.3 - 2021-05-28

* Ispravak: kontrola pristupa nadzornoj ploči bila je preagresivna;
* Poboljšanje: Dodane WooCommerce poveznice za pomoć u gornji izbornik Ultimate Multisite;

Verzija 2.0.0-beta.2 - 2021-05-04

* Poboljšanje: stvara plaćanja na čekanju u Ultimo pri stvaranju WCS narudžbe obnove;
* Poboljšanje: unaprijed popunjava polja za naplatu podacima kupca iz Ultimate Multisite;
* Poboljšanje: vraća polja za naplatu za pristupnike;

Verzija 2.0.0-beta.1 - 2021-05-04

* Početno beta izdanje

-- Naslijeđene verzije --

Verzija 1.2.6 - 26/03/2020

* Ispravljeno: Mala nekompatibilnost s novijim verzijama WooCommerce Subscriptions;

Verzija 1.2.5 - 26/08/2019

* Ispravljeno: Pogreška u prethodnom izdanju;

Verzija 1.2.4 - 22/08/2019

* Poboljšano: Dodana opcija za odmah preusmjeravanje na zaslon WooCommerce blagajne nakon integracije;

Verzija 1.2.3 - 26/05/2019

* Ispravljeno: E-pošta za plaćanje za WooCommerce nestala je u nekim rubnim slučajevima;

Verzija 1.2.2 - 27/02/2019

* Dodano: Podrška za naknade za postavljanje u integraciji WooCommerce Subscription;

Verzija 1.2.1 - 17/11/2018

* Ispravljeno: Problemi s kompatibilnošću s Ultimate Multisite verzijom 1.9.0;

Verzija 1.2.0 - 10/09/2018

* Poboljšano: Novi URL za ažuriranja dodataka;
* Dodano: Beta podrška za WooCommerce Subscription;

Verzija 1.1.2 - 11/02/2018

* Ispravljeno: Poveznica za plaćanje generira se dinamički kako bi reagirala na promjene WooCommerce endpointa;
* Poboljšano: Sada prisiljavamo dovršeni status za naše narudžbe kada se pozove payment_completed kako bismo bili sigurni da se naši hookovi za obnovu pokreću kada trebaju;

Version 1.1.1 - 24/01/2018

* Ispravljeno: Sada također provjerava je li WooCommerce upravo aktiviran na glavnom siteu;
* Ispravljeno: Uključena su preopterećenja kako bi se omogućilo da izrada narudžbe uključuje poreze;

Version 1.1.0 - 04/11/2017

* Ispravljeno: Sada se oznaka gumba za integraciju zaista mijenja kako bi odražavala postavke. Zahtijeva Ultimate Multisite 1.5.0;
* Ispravljeno: WooCommerce Integration sada radi čak i ako WooCommerce nije aktivan na mreži i aktiviran je samo na t^he glavnom siteu;

1.0.0 - Početno izdanje
