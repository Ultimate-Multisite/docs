---
title: Izolacija za više najmirenja
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolacija u više najma (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 podržava izolaciju baze podataka i datoteka po podsajtu za suverene najmehne (tenants). Ovo održava podatke najmena odvojenim dok se zadržavaju podešavanja na nivou mreže, fakturisanje i administracija.

## Strategija izolacije

Koristite suverenu izolaciju za klijente koji zahtevaju jaču separaciju podataka, posvećeno skladište datoteka ili odvojeni granice hosta.

Svaki suveren najem treba da ima:

- Posvećanu bazu podataka najema ili strategiju prefiksa baze podataka odobrenu za host.
- Posvećeni root direktorijum datoteka najema.
- Unos u registar najema koji mapira sajt na njegovu bazu podataka, root putanju, ime hosta i model izolacije.
- Rezultat verifikacije migracije pre nego što se najem smatra aktivnim (live).

## Povezivanje hosta baze podataka (Database host binding)

Verzija 1.2.0 menja podrazumevano ponašanje povezivanja hosta na istoj mašini za suverene instalacije. Vrednosti kao što su `localhost` se normalizuju tako da Bedrock, FrankenPHP i WordPress instalacije u kontejnerima mogu dodeliti i proveravati dozvole protiv string-a hosta koji MySQL zapravo vidi.

Prilikom konfigurisanja suverenog najema:

1. Postavite host baze podataka na vrednost koju zahteva runtime najema.
2. Koristite `localhost` za lokalne socket instalacije kada host očekuje lokalne konekcije.
3. Koristite `127.0.0.1` ili ime servisa hosta samo kada baza podataka daje privilegije tom hostu.
4. Pokrenite verifikaciju migracije nakon promene povezivanja hosta.

Ako verifikacija prijavljuje neuspehe dodeljivanja, uporedite dozvole korisnika u bazi podataka najema sa podešenim povezivanjem hosta. Korisnik koji je dodeljen za `user@localhost` je drugačiji od `user@127.0.0.1` ili `user@%`.

## Root direktorijum datoteka (Filesystem root)

Koren suštinski direktorijum najmoprimca (tenant root) treba da bude stabilan tokom ponavljanja startova i deploy-ova. Izbegavajte privremene putanje za mountovanje. Za instalacije u stilu Bedrock, proverite da li se koreni najmoprimca upućuju na WordPress web korijen koji očekuje bootstrap najmoprimca, a ne samo na projekatni korijen.

## Redosled provizije (Provisioning order)

Za nove suverene najmoprimce koristite ovaj redosled:

1. Kreirajte unos u registar najmoprimaca (tenant registry entry).
2. Kreirajte bazu podataka i korisnika baze podataka za najmoprimca.
3. Bootstrap-ujte šemu najmoprimca.
4. Providite korisnike najmoprimca.
5. Konfigurišite putanje sistema datoteka (filesystem paths) najmoprimca.
6. Pokrenite verifikaciju migracije.
7. Prebacite rutiranje ili DNS nakon uspešne verifikacije.

Ovaj redosled sprečava da se delimično izolovani najmoprimci dobiju saobraćaj pre nego što su baza podataka, korisnici i sistem datoteka spremni.

## Tokovi upravljanja suverenim klijentima (Sovereign customer management flows)

Ultimate Multisite v2.13.0 zadržava akcije upravljanja klijentima na glavnoj lokaciji kada je aktiviran suvereni režim (sovereign mode). Najmoprimac se i dalje može pokrenuti kao izolovan WordPress instalacija, ali akcije koje se odnose na korisnike, a koje zavise od mreže fakturisanja, članstva ili podataka zajedničkog naloga, treba da vrate klijenta na glavnu lokaciju umesto da pokušavaju da završe akciju unutar runtime-a najmoprimca.

Glavni tok se primenjuje za:

- Proveru (checkout) i promene plana.
- Pregled naloga i akcije profila klijenta.
- Ažuriranje adrese fakturisanja i ekrane upravljanja plaćanjem.
- Pogledove na račune i istoriju plaćanja.
- Akcije upravljanja lokacijom kao što su dodavanje ili brisanje lokacije.
- Promenu šablona (template switching).
- Mapiranje domena i promene primarnog domena.

Када корисник започне било какву од ових радњи из суверинног тентанта, Ultimate Multisite гради повезану URL за основну локацију (main-site) и чува изворни тентант као циљ враћања када је то безбедно. Ово омогућава корисницима да заврше управљају радње према мрежним записама, а затим се врате у контекст тентанта без дуплирања билинга или статуса члановинства у суверинској бази података.

За оператере, практична правила је: оставите странице за билингу (billing), налогу (account), заказување (checkout), фактурима (invoice), шаблоне (template) и управљању доменима (domain-management) доступним на основној локацији за суверинске мреже. Тентент дашбордови могу повезивати са овим страницама, али основна локација остаје извор истине за радњу.
