---
title: Izolacija za više najmirenja
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolacija za više korisnika (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 podržava izolaciju baze podataka i datoteka po podsajtu za suverene najmove. Ovo održava podatke najmove odvojenima dok se zadržavaju podešavanja na nivou mreže, fakturisanje i administracija.

## Strategija izolacije

Koristite suverenu izolaciju za klijente koji zahtijevaju jaču separaciju podataka, posvećeno skladište datoteka ili zasebnu granicu hosta.

Svaki suveren najmove bi trebao imati:

- Posvećenu bazu podataka najmove ili strategiju prefiksa baze podataka odobrenu za host.
- Posvećeni korijen (root) sistema datoteka najmove.
- Unos u registar najmove koji mapira sajt na njegovu bazu podataka, korijen putanja, ime hosta i model izolacije.
- Rezultat verifikacije migracije prije nego što se najmove smatra aktivnim.

## Povezivanje hosta baze podataka (Database host binding)

Verzija 1.2.0 mijenja podrazumevanu ponašanje povezivanja hosta na istoj mašini za suverene instalacije. Vrijednosti na istoj mašini, kao što je `localhost`, normalizirane tako da Bedrock, FrankenPHP i containerized WordPress instalacije mogu dodijeliti i provjeriti dozvole protiv stringa hosta koji MySQL zapravo vidi.

Prilikom konfiguriranja suverene najmove:

1. Postavite host baze podataka na vrijednost koju zahtijeva runtime najmove.
2. Koristite `localhost` za lokalne socket instalacije kada host očekuje lokalne veze.
3. Koristite `127.0.0.1` ili ime servisa hosta samo ako je baza podataka server dodijelio privilegije tom hostu.
4. Pokrenite verifikaciju migracije nakon promjene povezivanja hosta.

Ako izvještaji o verifikaciji pokazuju neuspjeh u dodjeli, uporedite dozvole korisnika baze podataka najmove sa podešenim povezivanjem hosta. Korisnik dodijeljen za `user@localhost` je drugačiji od `user@127.0.0.1` ili `user@%`.

## Korijen sistema datoteka (Filesystem root)

Korenje root korisnika treba biti stabilan pri ponovnom pokretanju i nadogradnji. Izbjegavajte privremene putanje za mount (mount paths). Za instalacije u stilu Bedrocka, potvrdite da se korek root korisnika usmjeruje na WordPress web root koji očekuje tenant bootstrap, a ne samo na projekt root.

## Redoslijed provizije

Za nove suverenske tenanate koristite ovaj redoslijed:

1. Kreirajte unos u registar tenanata (tenant registry entry).
2. Kreirajte bazu podataka i korisnika baze podataka za tenanta.
3. Bootstrap-ujte šemu tenanta.
4. Providite korisnike tenanta.
5. Konfigurišite putanje na datotekama (filesystem paths) tenanta.
6. Pokrenite provjeru migracije (migration verification).
7. Prebacite rutiranje ili DNS nakon što provera prođe.

Ovaj redoslijed sprečava da se tenanti koji su djelimično izolirani počnu primati promet prije nego što je baza podataka, korisnici i datoteka za sistem spremni.

## Tokovi upravljanja suverenim klijentima

Ultimate Multisite v2.13.0 zadržava akcije upravljanja klijentima na glavnoj lokaciji kada je aktiviran suvereni način rada (sovereign mode). Tenant se može i dalje pokrenuti kao izolirana WordPress instalacija, ali akcije koje su usmjerene prema klijentu i zavisne od mrežnog fakturiranja, članstva ili podataka zajedničkog računa trebaju vratiti klijenta na glavnu lokaciju umjesto da pokušavaju završiti akciju unutar runtime-a tenanta.

Tok glavni lokacije primjenjuje se na:

- Proizvod i promjene plana (Checkout and plan changes).
- Pregled računa i akcije profila klijenta.
- Ažuriranje adrese fakturiranja i ekrani za upravljanje plaćanjem.
- Pogledi na račune i povijest plaćanja.
- Akcije upravljanja lokacijom kao što su dodavanje ili brisanje lokacija.
- Promjena šablona (Template switching).
- Mapiranje domena i promjene primarnog domena (primary-domain changes).

Kada kupac počne s nekom od ovih radnji iz suverenog najma (tenant), Ultimate Multisite kreira odgovarajuću URL glavnog sajta i zadržava izvorno najamo kao cilj povratka kada je to sigurno. To omogućuje kupcima da završe upravljenu radnju prema podacima mreže, a zatim se vrate u kontekst najama bez dupliranja fakturiranja ili stanja članstva u suverenoj bazi podataka.

Za operatore, praktična pravila je: držite stranice za fakturiranje (billing), račun (account), plaćanje na blagajni (checkout), račune (invoice), šablone (template) i upravljanje domenom dostupnim na glavnom sajtu za suverene mreže. Dashboardovi najama mogu linkati na te stranice, ali glavni sajt ostaje izvor istine za tu radnju.
