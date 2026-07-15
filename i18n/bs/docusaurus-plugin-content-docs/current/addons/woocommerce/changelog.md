---
title: Dnevnik promjena WooCommerce integracije
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Dnevnik promjena WooCommerce integracije

Verzija 2.2.0 - Objavljeno 2026-07-01
* Novo: Iznosi poreza za Ultimate Multisite sada se prikazuju kao zasebne WooCommerce stavke naknada pri plaćanju, čineći ukupne iznose poreza jasnijim prije plaćanja.
* Novo: Dodana je opcionalna postavka "Odmah suspenduj članstva pri neuspjelim obnovama" i filter `wu_woo_suspend_on_payment_failure` za stranice koje žele suspenziju zbog neuspjele obnove tokom WooCommerce Subscriptions perioda ponovnog pokušaja.
* Ispravka: Usklađeni su statusi WooCommerce Subscription koji su mogli ostati nesinhronizovani s Ultimate Multisite članstvima nakon neuspjelih ili oporavljenih obnova.
* Ispravka: Dodana je valuta WooCommerce trgovine na Ultimate Multisite listu valuta kada je nedostajala.
* Ispravka: Sačuvani su podaci za naplatu kupca pri preusmjeravanju pretplatnika na WooCommerce plaćanje.
* Poboljšano: Dodana kompatibilnost s Jetpack Autoloader 5.
* Poboljšano: Očišćeno generisanje paketa izdanja tako da GitHub i marketplace zip datoteke izbjegavaju ugniježđene staging direktorije i razvojne datoteke.

Verzija 2.0.6 - Objavljeno 2026-01-16
* Poboljšanje: Uključi osnovne pretplate u addon. Više ne zahtijeva WooCommerce Subscriptinos ekstenziju.

Verzija 2.0.5 - Objavljeno 2026-01-09
* Poboljšanje: Učitaj prevode iz glotpress API-ja.
* Ispravka: Fatalna greška u nekim builderima stranica.
* Ispravka: Beskonačno preusmjeravanje kada je kupac član glavne stranice.

Verzija 2.0.4 - Objavljeno 2025-11-14
* Dodano: Prevodi za mnogo više jezika.
* Promijenjeno: Preimenovano u Ultimate Multisite: WooCommerce Integration.
* Dodano: Kompatibilnost s WooCommerce 10.2.1.
* Dodano: Kompatibilnost s WooCommerce Subscriptions 7.7.0.
* Ispravka: Kompatibilnost s PHP 8.4
* Ispravka: Preusmjeravanje kada ne postoji stranica WC računa.

Verzija 2.0.3 - Objavljeno 2025-08-13
* Promijenjeno: Omogućena automatska ažuriranja s novim marketplaceom.

Verzija 2.0.2 - Objavljeno 2025-07-05
* Promijenjeno: Preimenovano u Multisite Ultimate: WooCommerce Integration.
* Dodano: Kompatibilnost s WooCommerce 9.8.1.
* Dodano: Kompatibilnost s WooCommerce Subscriptions 7.3.0.
* Ispravka: Otkazivanje pretplate od strane kupca.
* Ispravka: Fatalna greška pri korištenju bloka za plaćanje.
* Poboljšanje: Sada kompatibilno s WooCommerce prilagođenim tabelama narudžbi visokih performansi.
* Ispravka: Otkazivanje na WooCommerce plaćanju i dalje može nadograditi članstvo.

Verzija 2.0.1 - Objavljeno 2023-08-09

* Dodano: Kompatibilnost s WooCommerce 7.9.0.
* Dodano: Kompatibilnost s WooCommerce Subscriptions 5.3.0.
* Dodano: Podrška za ažuriranja članstva.
* Dodano: Obavještenja o probnim periodima i naknadama za postavljanje u WooCommerce.
* Dodano: Identifikacija Ultimate Multisite WooCommerce proizvoda s meta vrijednošću.
* Dodano: Umetnuta jednokratna ispravka za označavanje svih WooCommerce proizvoda povezanih s Ultimate Multisite.
* Dodano: Uklonjeni proizvodi koje je kreirao Ultimate Multisite s WooCommerce liste.
* Poboljšanje: Kreiran neponavljajući WooCommerce popust za primjenu na korpu.
* Poboljšanje: Vraćen ponavljajući popust na WooCommerce proizvod.
* Poboljšanje: Dodana oznaka ponavljajućeg popusta na WooCommerce proizvod.
* Poboljšanje: Osiguran tip proizvoda pri plaćanju.
* Ispravka: Održan status članstva tokom procesa prelaska na niži plan.
* Ispravka: Provjereno da li pretplata postoji kako bi se izbjegle greške tokom procesa otkazivanja.
* Ispravka: Dodan datum početka pretplate za korištenje u WooCommerce pretplatama.
* Interno: Implementiran novi proces izgradnje za PHP 8.1.

Verzija 2.0.0 - Potpuno prepisivanje.

* Dodano: Metoda procesa otkazivanja za uklanjanje woo pretplate pri promjeni pristupnika ili otkazivanju članstva;
* Dodano: Handler za prelazak članstava na niži i viši plan;
* Poboljšanje: Učitaj WooCommerce zavisnosti na obrascu za ažuriranje kupca u podstranicama kako bi se omogućilo ažuriranje računa;
* Poboljšanje: Ispravno učitaj WooCommerce korpu ako ne postoji;
* Poboljšanje: Osiguraj da smo na tabelama glavne stranice pri obradi plaćanja;
* Poboljšanje: Napravi Ultimo narudžbu obnove na osnovu vrijednosti WooCommerce narudžbe pretplate, a ne iz posljednje uplate;
* Ispravka: Link dugmeta Idi na WU članstvo;
* Ispravka: Postavi Ultimo narudžbu kao plaćenu kada je obnova WooCommerce pretplata plaćena;
* Build: Dodaj MPB kao builder;

Verzija 2.0.0-beta-5 - Objavljeno 2022-01-21

* Interno: Dodan generator hookova i filtera;
* Interno: Dodani Ultimate Multisite stubovi za bolji rad programera;
* Ispravljeno: Spriječeno kreiranje više proizvoda kada nije potrebno;

Verzija 2.0.0-beta.4 - 2021-09-23

* Ispravka: zahtijevanje da WooCommerce bude aktivan na mreži umjesto samo na glavnoj stranici;
* Poboljšanje: dodan filter koji omogućava da se dodatak koristi kao mu-plugin;

Verzija 2.0.0-beta.3 - 2021-05-28

* Ispravka: kontrola pristupa kontrolnoj ploči bila je previše agresivna;
* Poboljšanje: Dodani WooCommerce linkovi za pomoć u Ultimate Multisite gornji meni;

Verzija 2.0.0-beta.2 - 2021-05-04

* Poboljšanje: kreira uplate na čekanju u Ultimo pri kreiranju WCS narudžbe obnove;
* Poboljšanje: unaprijed popunjava polja za naplatu podacima Ultimate Multisite kupca;
* Poboljšanje: vraća polja za naplatu za pristupnike;

Verzija 2.0.0-beta.1 - 2021-05-04

* Početno beta izdanje

-- Naslijeđene verzije --

Verzija 1.2.6 - 26/03/2020

* Ispravljeno: Mala nekompatibilnost s novijim verzijama WooCommerce Subscriptions;

Verzija 1.2.5 - 26/08/2019

* Ispravljeno: Greška u prethodnom izdanju;

Verzija 1.2.4 - 22/08/2019

* Poboljšano: Dodana opcija za preusmjeravanje na WooCommerce ekran za plaćanje odmah nakon integracije;

Verzija 1.2.3 - 26/05/2019

* Ispravljeno: Email za plaćanje za WooCommerce nestao je u nekim rubnim slučajevima;

Verzija 1.2.2 - 27/02/2019

* Dodano: Podrška za naknade za postavljanje u WooCommerce Subscription integraciji;

Verzija 1.2.1 - 17/11/2018

* Ispravljeno: Problemi s kompatibilnošću s Ultimate Multisite verzijom 1.9.0;

Verzija 1.2.0 - 10/09/2018

* Poboljšano: Novi URL za ažuriranja dodataka;
* Dodano: Beta podrška za WooCommerce Subscription;

Verzija 1.1.2 - 11/02/2018

* Ispravljeno: Link za plaćanje se generiše dinamički kako bi odgovorio na promjene WooCommerce endpointa;
* Poboljšano: Sada forsiramo završeni status za naše narudžbe kada se pozove payment_completed kako bismo osigurali da se naši hookovi za obnovu pokrenu kada trebaju;

Verzija 1.1.1 - 24/01/2018

* Ispravljeno: Sada također provjerava da li je WooCommerce upravo aktiviran na glavnoj stranici;
* Ispravljeno: Uključena su preopterećenja kako bi se omogućilo da kreiranje narudžbe uključuje poreze;

Verzija 1.1.0 - 04/11/2017

* Ispravljeno: Sada se oznaka integracijskog dugmeta zaista mijenja kako bi odražavala postavke. Zahtijeva Ultimate Multisite 1.5.0;
* Ispravljeno: WooCommerce Integration sada radi čak i ako WooCommerce nije aktivan na mreži i aktiviran je samo na glavnoj stranici;

1.0.0 - Početno izdanje
