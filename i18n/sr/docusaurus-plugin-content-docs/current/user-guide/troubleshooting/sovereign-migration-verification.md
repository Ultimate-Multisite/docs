---
title: Verifikacija suverenskog migracije
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Provera migracije suverenog stanara

Ultimate Multisite: Multi-Tenancy 1.2.0 uključuje WP-CLI komande za proveru pri migracijama suverenih stanara (sovereign tenant migrations). Koristite ih kada migracija stanara, poseta putem SSO ili izolirana instalacija ne funkcionišu kao što se očekuje.

## Komande za izvršavanje

Pokrenite proveru sa instalacije WordPress-a u mreži:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Koristite ID stanara koji migrirate. Prva komanda proverava da li se stalar više oslanja na stare podatke sa strane mreže (legacy network-side data). Druga komanda proverava da li su zadaci za push suverenog stanara sposobni da obrađuju i ispuštaju (drain).

## Česte neusaglawości

### Dotičeni dozvole baze podataka se ne poklapaju sa hostom

Ako verifikacija prijavljuje neusaglašene dozvole ili greške korisnika pisca (writer-user failures), proverite podešen host baze podataka. `localhost`, `127.0.0.1` i ime servisa kontejnera su različiti MySQL hostovi za dozvole. Ažurirajte vezu stanara na host ili dozvole baze podataka, a zatim ponovo pokrenite proveru.

### Bedrock ili lokal instalacije ne mogu da se povežu

Bedrock i lokal soket instalacije mogu prijaviti bazu podataka kao `localhost` dok se runtime povezuje putem normalizovane adrese. Verzija 1.2.0 normalizuje stringove hostova na istoj mašini, ali prilagođene preurede hostova (custom host overrides) i dalje mogu da izazovu konflikte sa dozvolama baze podataka.

### Asinhna redosled za push nije ispraznjen (drain)

Ako `verify-sovereign-push` ne završi, proverite Action Scheduler ili podešen asinhni runner. O prazne zadatke obrišite tek nakon što potvrdite da su bezbedni za ponovno pokušavanje ili bacanje u propast.

### Broj korisnika stanara je pogrešan

Migracija bi trebalo da proviziše korisnike za suverenog stanara. Ako nedostaje očekivani broj instaliranih korisnika, ponovite korak provizije korisnika pre nego što pokušate ponovo SSO-verifikaciju.

### Poseta putem SSO je odbijena

Za automatski prijavljivanje korisnika u aloju bez stanja (stateless tenant autologin), moraju biti ispravni domen tenanta, origin pin, svrha tokena, nonce i datum isteka. Potvrđite da je URL tenanta ispravan i da se pokušaj prijave vrši nedugo nakon generisan SSO posete.

## Kada ponovo pokušati

Ponovite proveru nakon svake promene infrastrukture. Ne menjajte saobraćaj u produkciji, ne brišite izvorne podatke niti uklanjate kredencijale za migraciju dok se svi proveri ne završe uspešno.
