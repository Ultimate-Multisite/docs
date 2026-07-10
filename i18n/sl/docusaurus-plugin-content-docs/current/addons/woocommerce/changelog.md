---
title: Dnevnik sprememb integracije WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Dnevnik sprememb integracije WooCommerce {#woocommerce-integration-changelog}

Različica 2.2.0 - izdana dne 2026-07-01
* Novo: Zneski davkov Ultimate Multisite so zdaj prikazani kot ločene vrstice pristojbin WooCommerce ob zaključku nakupa, zaradi česar so skupni zneski davkov jasnejši pred plačilom.
* Novo: Dodana je izbirna nastavitev "Takoj prekini članstva ob neuspelih obnovitvah" in filter `wu_woo_suspend_on_payment_failure` za spletna mesta, ki želijo prekinitev ob neuspeli obnovitvi med oknom ponovnih poskusov WooCommerce Subscriptions.
* Popravek: Usklajeni so statusi WooCommerce Subscription, ki so lahko ostali nesinhronizirani s članstvi Ultimate Multisite po neuspelih ali obnovljenih obnovitvah.
* Popravek: Valuta trgovine WooCommerce je bila dodana na seznam valut Ultimate Multisite, ko je manjkala.
* Popravek: Podrobnosti obračuna strank so bile ohranjene pri preusmerjanju naročnikov na zaključek nakupa WooCommerce.
* Izboljšano: Dodana je združljivost z Jetpack Autoloader 5.
* Izboljšano: Izčiščeno je ustvarjanje paketa izdaje, tako da zipi za GitHub in tržnico ne vsebujejo ugnezdenih pripravljalnih imenikov in razvojnih datotek.

Različica 2.0.6 - izdana dne 2026-01-16
* Izboljšava: V dodatek vključene osnovne naročnine. Razširitev Woocommerce Subscriptinos ni več potrebna.

Različica 2.0.5 - izdana dne 2026-01-09
* Izboljšava: Nalaganje prevodov iz glotpress API.
* Popravek: Usodna napaka v nekaterih gradnikih strani.
* popravek: Neskončna preusmeritev, ko je stranka član glavnega spletnega mesta.

Različica 2.0.4 - izdana dne 2025-11-14
* Dodano: Prevodi za veliko več jezikov.
* Spremenjeno: Preimenovano v Ultimate Multisite: Woocommerce Integration.
* Dodano: Združljivost z Woocommerce 10.2.1.
* Dodano: Združljivost z Woocommerce Subscriptions 7.7.0.
* Popravek: Združljivost s PHP 8.4
* Popravek: Preusmeritev, ko stran WC Account ne obstaja.

Različica 2.0.3 - izdana dne 2025-08-13
* Spremenjeno: Omogočene samodejne posodobitve z novo tržnico.

Različica 2.0.2 - izdana dne 2025-07-05
* Spremenjeno: Preimenovano v Multisite Ultimate: Woocommerce Integration.
* Dodano: Združljivost z Woocommerce 9.8.1.
* Dodano: Združljivost z Woocommerce Subscriptions 7.3.0.
* Popravek: Preklic naročnine s strani stranke.
* Popravek: Usodna napaka pri uporabi bloka zaključka nakupa.
* Izboljšava: Zdaj združljivo z visokozmogljivimi tabelami naročil po meri Woocommerce.
* Popravek: Preklic ob zaključku nakupa WooCommerce lahko še vedno nadgradi članstvo.

Različica 2.0.1 - izdana dne 2023-08-09

* Dodano: Združljivost z Woocommerce 7.9.0.
* Dodano: Združljivost z Woocommerce Subscriptions 5.3.0.
* Dodano: Podpora za posodobitve članstva.
* Dodano: Obvestila o preizkusnih obdobjih in stroških nastavitve v Woocommerce.
* Dodano: Prepoznavanje izdelkov Ultimate Multisite Woocommerce z meta vrednostjo.
* Dodano: Vstavljen enkratni popravek za označitev vseh povezanih izdelkov Ultimate Multisite v Woocommerce.
* Dodano: Izdelki, ustvarjeni z Ultimate Multisite, so bili odstranjeni s seznama Woocommerce.
* Izboljšava: Ustvarjen neponavljajoči se popust Woocommerce za uporabo v košarici.
* Izboljšava: Obnovljen ponavljajoči se popust za izdelek Woocommerce.
* Izboljšava: Izdelku Woocommerce dodana oznaka ponavljajočega se popusta.
* Izboljšava: Zagotovljena vrsta izdelka ob zaključku nakupa.
* Popravek: Ohranjen status članstva med postopkom prehoda na nižji paket.
* Popravek: Preverjeno, ali naročnina obstaja, da se izognemo napakam med postopkom preklica.
* Popravek: Dodan začetni datum naročnine za uporabo v naročninah Woocommerce.
* Interno: Implementiran nov postopek gradnje za PHP 8.1.

Različica 2.0.0 - Popolna prenova.

* Dodano: Metoda obdelave preklica za odstranitev naročnine woo pri spreminjanju prehoda ali preklicu članstva;
* Dodano: Upravljalnik za prehode članstev na nižji in višji paket;
* Izboljšava: Nalaganje odvisnosti woocommerce v obrazcu za posodobitev stranke na podmestih za omogočanje posodobitve računa;
* Izboljšava: Pravilno nalaganje košarice Woocommerce, če ne obstaja;
* Izboljšava: Zagotovljeno, da smo na tabelah glavnega spletnega mesta pri obdelavi zaključka nakupa;
* Izboljšava: Naročilo za obnovitev Ultimo temelji na vrednosti naročila naročnine Woocommerce in ne na zadnjem plačilu;
* Popravek: Povezava gumba za prehod na članstvo WU;
* Popravek: Nastavitev naročila Ultimo kot plačanega, ko je obnovitev naročnin Woocommerce plačana;
* Gradnja: Dodan MPB kot gradnik;

Različica 2.0.0-beta-5 - izdana dne 2022-01-21

* Interno: Dodan generator kavljev in filtrov;
* Interno: Dodani nadomestki Ultimate Multisite za boljšo razvijalsko izkušnjo;
* Popravljeno: Preprečeno ustvarjanje več izdelkov, kadar ni potrebno;

Različica 2.0.0-beta.4 - 2021-09-23

* Popravek: zahteva, da je WooCommerce aktiven v omrežju namesto samo na glavnem spletnem mestu;
* Izboljšava: dodan filter, ki omogoča uporabo dodatka kot mu-plugin;

Različica 2.0.0-beta.3 - 2021-05-28

* Popravek: nadzor dostopa do nadzorne plošče je bil preveč agresiven;
* Izboljšava: Dodane povezave za pomoč WooCommerce v zgornji meni Ultimate Multisite;

Različica 2.0.0-beta.2 - 2021-05-04

* Izboljšava: ustvari čakajoča plačila v Ultimo ob ustvarjanju naročila za obnovitev WCS;
* Izboljšava: vnaprej izpolni obračunska polja s podatki stranke Ultimate Multisite;
* Izboljšava: znova doda obračunska polja za prehode;

Različica 2.0.0-beta.1 - 2021-05-04

* Začetna beta izdaja

-- Starejše različice --

Različica 1.2.6 - 26/03/2020

* Popravljeno: Majhna nezdružljivost z novejšimi različicami WooCommerce Subscriptions;

Različica 1.2.5 - 26/08/2019

* Popravljeno: Napaka v prejšnji izdaji;

Različica 1.2.4 - 22/08/2019

* Izboljšano: Dodana možnost za takojšnjo preusmeritev na zaslon zaključka nakupa WooCommerce po integraciji;

Različica 1.2.3 - 26/05/2019

* Popravljeno: E-pošta za plačilo za WooCommerce je v nekaterih robnih primerih izginila;

Različica 1.2.2 - 27/02/2019

* Dodano: Podpora za stroške nastavitve pri integraciji WooCommerce Subscription;

Različica 1.2.1 - 17/11/2018

* Popravljeno: Težave z združljivostjo z Ultimate Multisite različice 1.9.0;

Različica 1.2.0 - 10/09/2018

* Izboljšano: Nov URL za posodobitve dodatkov;
* Dodano: Beta podpora za WooCommerce Subscription;

Različica 1.1.2 - 11/02/2018

* Popravljeno: Povezava za plačilo se ustvarja dinamično, da se odzove na spremembe endpointov WooCommerce;
* Izboljšano: Zdaj vsilimo dokončan status za naša naročila, ko je poklican payment_completed, da zagotovimo, da se naši kavlji za obnovitev zaženejo takrat, ko se morajo;

Različica 1.1.1 - 24/01/2018

* Popravljeno: Zdaj preveri tudi, ali je WooCommerce pravkar aktiviran na glavnem spletnem mestu;
* Popravljeno: Vključene so preobremenitve, ki omogočajo, da ustvarjanje naročila vključuje davke;

Različica 1.1.0 - 04/11/2017

* Popravljeno: Zdaj se oznaka gumba za integracijo dejansko spremeni tako, da odraža nastavitve. Zahteva Ultimate Multisite 1.5.0;
* Popravljeno: WooCommerce Integration zdaj deluje tudi, če WooCommerce ni aktiven v omrežju in je aktiviran samo na glavnem spletnem mestu;

1.0.0 - Začetna izdaja
