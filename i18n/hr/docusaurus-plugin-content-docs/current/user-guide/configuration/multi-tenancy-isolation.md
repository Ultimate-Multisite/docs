---
title: Izolacija za više najmirenja
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolacija u više najma (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 podržava izolaciju baze podataka i datoteka po podsajtu za suverene najmehne (tenants). Ovo osigurava da se podaci najmena drže odvojeni, dok se zadržavaju mrežna podešavanja, fakturiranje i administracija na nivou mreže.

## Strategija izolacije {#isolation-strategy}

Koristite suverenu izolaciju za klijente koji zahtijevaju jaču separaciju podataka, posvećeno skladištenje datoteka ili zasebnu granicu hosta.

Svaki suveren najem treba imati:

- Posvećenu bazu podataka najema ili strategiju prefiksa baze podataka odobrenu za host.
- Posvećeni korijen (root) sustava datoteka najema.
- Unos u registar najema koji mapira sajt na njegovu bazu podataka, korijen putanja, ime hosta i model izolacije.
- Rezultat provjere migracije prije nego što se najem smatra aktivnim.

## Povezivanje hosta baze podataka (Database host binding) {#database-host-binding}

Verzija 1.2.0 mijenja podrazumijevano ponašanje povezivanja hosta na istoj mašini za suverene instalacije. Vrijednosti na istoj mašini, kao što je `localhost`, normalizirane tako da Bedrock, FrankenPHP i containerizirani WordPress instalacije mogu dodijeliti i provjeriti dozvole prema stringu hosta koji MySQL zapravo vidi.

Prilikom konfiguriranja suverenog najema:

1. Postavite host baze podataka na vrijednost koju zahtijeva runtime najema.
2. Koristite `localhost` za lokalne socket instalacije kada host očekuje lokalne veze.
3. Koristite `127.0.0.1` ili ime servisa hosta samo ako je baza podataka server dodijelio privilegije tom hostu.
4. Pokrenite provjeru migracije nakon promjene povezivanja hosta.

Ako provjera prijavljuje neuspjeve u dodjeli, uporedite dozvole korisnika baze podataka najema s podešenim povezivanjem hosta. Korisnik dodijeljen za `user@localhost` je drugačiji od `user@127.0.0.1` ili `user@%`.

## Korijen sustava datoteka (Filesystem root) {#filesystem-root}

Korenski korijen (tenant root) treba biti stabilan pri ponovnom pokretanju i deployu. Izbjegavajte privremene putanje za mountove. Za instalacije u stilu Bedrocka, provjerite da li se tenant root usmjeruje na WordPress web root koji očekuje bootstrap tenancy-ja, a ne samo na projekt root.

## Redoslijed provizije (Provisioning order) {#provisioning-order}

Za nove suverene tenanate koristite ovaj redoslijed:

1. Kreirajte unos u registar tenanata (tenant registry entry).
2. Kreirajte bazu podataka i korisnika baze podataka za tenanta.
3. Bootstrap-ujte šemu tenanta (tenant schema).
4. Providite korisnike tenanta.
5. Konfigurišajte putanje na sustavnoj datoteci (filesystem paths) tenanta.
6. Pokrenite provjeru migracije (migration verification).
7. Prebacite rutiranje ili DNS nakon što provera prođe.

Ovaj redoslijed sprečava da se tenanti koji su djelomično izolirani primaju promet prije nego što je baza podataka, korisnici i sustavna datoteka spremni.

## Tokovi upravljanja suverenim klijentima (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 zadržava akcije upravljanja klijentima na glavnoj lokaciji kada je aktiviran suvereni način rada (sovereign mode). Tenant se može i dalje pokrenuti kao izolirana WordPress instalacija, ali akcije koje su usmjerene prema klijentu i ovisne o mrežnom obračunu, članstvu ili podacima zajedničkog računa trebaju vratiti klijenta na glavnu lokaciju umjesto pokušavanja dovršiti akciju unutar runtime-a tenanta.

Tokovi za glavnu lokaciju primjenjuju se na:

- Proizvod i promjene plana (Checkout and plan changes).
- Pregled računa i akcije profila klijenta (Account overview and customer profile actions).
- Ažuriranje adrese obračuna i zaslona za upravljanje plaćanjem (Billing address updates and payment-management screens).
- Poglednice faktura i povijesti plaćanja (Invoice and payment-history views).
- Akcije upravljanja lokacijom kao što su dodavanje ili brisanje lokacija (Site management actions such as adding sites or deleting a site).
- Promjena šablona (Template switching).
- Mapiranje domena i promjene primarnog domena (Domain mapping and primary-domain changes).

Kada klijent započne jednu od ovih radnji iz suverenog najma (tenant), Ultimate Multisite kreira odgovarajuću URL glavne stranice i zadržava izvorno najmo kao cilj povratka kada je to sigurno. To omogućuje klijentu da završi upravljenu radnju prema podacima mreže, a zatim se vrati u kontekst najma bez dupliranja stanja plaćanja ili članstva u suverenoj bazi podataka.

Za operatore, praktična pravila je: zadržite stranice za plaćanje (billing), račun (account), prijavu na plaćanje (checkout), fakturu (invoice), šablon (template) i upravljanje domenom (domain-management) dostupne na glavnoj stranici za suverene mreže. Dashboardovi najma mogu linkati na te stranice, ali glavna stranica ostaje izvor istine za radnju.
