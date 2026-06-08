---
title: WooCommerce Integracija Dnevnik promjena
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Dnevnik promjena za WooCommerce Integraciju

Verzija 2.0.6 - Objavljeno 2026-01-16
* Unapređenje: Uključili smo osnovne pretplate u addon. Više nije potrebna WooCommerce Subscriptions ekstenzija.

Verzija 2.0.5 - Objavljeno 2026-01-09
* Unapređenje: Učitavanje preizvodnji (translations) sa glotpress API-ja.
* Popravak: Došlo je do smrtonosnog errora u nekim page builderima.
* Popravak: Beskonačno preusmjeravanje kada je korisnik član glavne stranice.

Verzija 2.0.4 - Objavljeno 2025-11-14
* Dodato: Preizvodnji za mnogo više jezika.
* Promijenjeno: Preimenovano u Ultimate Multisite: Woocommerce Integration.
* Dodato: Kompatibilnost sa Woocommerce 10.2.1.
* Dodato: Kompatibilnost sa Woocommerce Subscriptions 7.7.0.
* Popravak: Kompatibilnost sa PHP 8.4
* Popravak: Preusmjeravanje, ali kada ne postoji stranica WC računa.

Verzija 2.0.3 - Objavljeno 2025-08-13
* Promijenjeno: Omogućeno automatsko ažuriranje sa novim marketplace-om.

Verzija 2.0.2 - Objavljeno 2025-07-05
* Promijenjeno: Preimenovano u Multisite Ultimate: Woocommerce Integration.
* Dodato: Kompatibilnost sa Woocommerce 9.8.1.
* Dodato: Kompatibilnost sa Woocommerce Subscriptions 7.3.0.
* Popravak: Otkazivanje pretplate od strane korisnika.
* Popravak: Smrtonosni error prilikom korištenja checkout bloka.
* Unapređenje: Sada je kompatibilno sa WooCommerce high performance custom order tables.
* Popravak: Otkazivanje na WooCommerce checkoutu i dalje može nadograditi članstvo.

Verzija 2.0.1 - Objavljeno 2023-08-09

* Dodato: Kompatibilnost sa Woocommerce 7.9.0.
* Dodato: Kompatibilnost sa Woocommerce Subscriptions 5.3.0.
* Dodato: Podrška za ažuriranje članstva.
* Dodato: Obavještenja o probnim periodima i naknadama za postavljanje u Woocommerce.
* Dodato: Identifikacija Ultimate Multisite WooCommerce proizvoda meta vrijednošću.
* Dodato: Ubačen je jednokratni popravak za označavanje svih Ultimate Multisite povezanih WooCommerce proizvoda.
* Dodato: Uklonjeni Ultimate Multisite kreirani proizvodi iz WooCommerce liste.
* Unapređenje: Kreiran je neponavljajući WooCommerce popust za primjenu na korpu.
* Unapređenje: Vraćeno je ponavljajuće popuste na WooCommerce proizvod.
* Unapređenje: Dodata je oznaka ponavljajućeg popusta na WooCommerce proizvod.
* Unapređenje: Osigurano je tip proizvoda na checkoutu.
* Popravak: Očuvan je status članstva tokom procesa degradacije.
* Popravak: Provjereno je da li postoji pretplata kako bi se izbjegli greške tokom procesa otkazivanja.
* Popravak: Dodat je datum početka pretplate za korištenje u WooCommerce pretplatama.
* Interno: Implementiran je novi PHP 8.1 build proces.

Verzija 2.0.0 - Potpuno prepravljeno.

* Dodato: Metoda procesiranja otkazivanja za uklanjanje woo pretplate prilikom promjene gateway-a ili otkazivanja članstva;
* Dodato: Handler za degradaciju i nadogradnju članstava;
* Unapređenje: Učitavanje WooCommerce zavisnosti na formularu za ažuriranje korisnika u subsajtovima kako bi se omogućilo ažuriranje računa;
* Unapređenje: Ispravno učitavanje WooCommerce korpe ako ne postoji;
* Unapređenje: Osigurano je da smo na glavnim stranicama tabele prilikom procesiranja checkouta;
* Unapređenje: Napravljeno je da Ultimate renewal narudžbina bude zasnovana na vrijednosti WooCommerce pretplatne narudžbine, a ne na zadnjoj uplati;
* Popravak: Link na gumb "Go to WU Membership";
* Popravak: Postavljen je Ultimate narudžbina kao plaćena kada je WooCommerce pretplatnik obnovljen i plaćen;
* Build: Dodat MPB kao builder;

Verzija 2.0.0-beta-5 - Objavljeno 2022-01-21

* Interno: Dodat generator hooks-ova i filtera;
* Interno: Dodati Ultimate Multisite stubs za kvalitet života developera;
* Popravljeno: Spriječeno kreiranje više proizvoda kada to nije potrebno;

Verzija 2.0.0-beta.4 - 2021-09-23

* Popravak: Zahtijevanje da je WooCommerce aktivan na mreži, a ne samo na glavnoj stranici;
* Unapređenje: Dodat filter koji omogućava da se addon koristi kao mu-plugin;

Verzija 2.0.0-beta.3 - 2021-05-28

* Popravak: Kontrola pristupa dashboarda bila je previše agresivna;
* Unapređenje: Dodani WooCommerce pomoćni linkovi u Ultimate Multisite gornje menije;

Verzija 2.0.0-beta.2 - 2021-05-04

* Unapređenje: Kreira pending payments na Ultimo prilikom kreiranja WooCommerce Subscriptions renewal narudžbine;
* Unapređenje: Predpopunjavanje polja za naplatu podacima o korisniku Ultimate Multisite;
* Unapređenje: Dodata su polja za naplatu za gateway-e;

Verzija 2.0.0-beta.1 - 2021-05-04

* Početno beta izdanje

-- Starije verzije --

Verzija 1.2.6 - 26/03/2020

* Popravljeno: Mala nekompatibilnost sa novijim verzijama WooCommerce Subscriptions;

Verzija 1.2.5 - 26/08/2019

* Popravljeno: Greška u prethodnom izdanju;

Verzija 1.2.4 - 22/08/2019

* Unapređenje: Dodata opcija za preusmjeravanje na WooCommerce checkout ekran odmah nakon integracije;

Verzija 1.2.3 - 26/05/2019

* Popravak: E-mail za plaćanje za WooCommerce nestao je u nekim slučajevima;

Verzija 1.2.2 - 27/02/2019

* Dodato: Podrška za naknade za postavljanje (setup fees) u WooCommerce Subscription integraciji;

Verzija 1.2.1 - 17/11/2018

* Popravak: Problemi kompatibilnosti sa Ultimate Multisite verzijom 1.9.0;

Verzija 1.2.0 - 10/09/2018

* Unapređenje: Nova URL adresa za ažuriranje za dodatke;
* Dodato: Beta podrška za WooCommerce Subscription;

Verzija 1.1.2 - 11/02/2018

* Popravak: Link na "Pay" generisan je dinamički kako bi odgovorio na promjene WooCommerce endpointa;
* Unapređenje: Sada prisiljavamo status "completed" za naše narudžbine kada se pozove payment_completed kako bismo bili sigurni da se naši renewal hooks pokreću kada treba;

Verzija 1.1.1 - 24/01/2018

* Popravak: Sada provjerava i da li je WooCommerce tek aktiviran na glavnoj stranici;
* Popravak: Uključene su over-loadings da bi se omogućilo kreiranje narudžbine sa porezima;

Verzija 1.1.0 - 04/11/2017

* Popravak: Sada oznaka integracionog gumba zaista mijenja kako bi odražavala postavke. Zahtijeva Ultimate Multisite 1.5.0;
* Popravak: WooCommerce Integracija sada radi čak i ako WooCommerce nije aktivan na mreži i aktiviran je samo na glavnoj stranici;

1.0.0 - Početno izdanje
