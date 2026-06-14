---
title: Provjera suverenskog migracije
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Provjera migracije suverenog najma (Sovereign Migration Verification)

Ultimate Multisite: Multi-Tenancy 1.2.0 uključuje WP-CLI komande za provjeru pri migracijama suverenih najmama (tenant migrations). Koristite ih kada migracija najma, posjet putem SSO ili izolirana instalacija ne ponašaju se kao što očekujete.

## Komande za pokretanje

Pokrenite provjeru s mrežne WordPress instalacije:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Koristite ID najma koji migrirate. Prva komanda provjerava da najam više ne ovisi o starim podacima na mreži (legacy network-side data). Druga komanda provjerava da se zadaci za suverenki push mogu obraditi i isprazniti (drain).

## Česte greške

### Dotičeni korisnički resursi baze podataka ne odgovaraju hostu

Ako provjera prijavljuje probleme s dozvolama ili korisnicima pisaca (writer-user failures), provjerite podešavani host baze podataka. `localhost`, `127.0.0.1` i ime servisa kontejnera su različiti MySQL hostovi za dozvole. Ažurirajte vezu najma na host ili dozvole baze podataka, a zatim ponovite provjeru.

### Bedrock ili lokalne instalacije ne mogu se povezati

Bedrock i lokalne soketske instalacije mogu prijaviti bazu podataka kao `localhost` dok se runtime povezuje putem normalizovane adrese. Verzija 1.2.0 normalizuje stringove hosta na istoj mašini, ali prilagođene prebacivanja hostova (custom host overrides) i dalje mogu uzrokovati konflikte s dozvolama baze podataka.

### Asinhna redosled za push nije ispraznjen (Async push queue does not drain)

Ako `verify-sovereign-push` ne završi, provjerite Action Scheduler ili podešeni asinhni runner. O prazne zadatke obrišite tek nakon što potvrdite da su sigurni za ponovno pokušavanje ili bacanje (discard).

### Broj korisnika najma je pogrešan

Migracija bi trebala osigurati korisnike za suverenog najma. Ako nedostaje očekivani broj instaliranih korisnika, ponovite korak provizije korisnika prije ponovnog pokušaja SSO-a.

### Posjet putem SSO-a se odbija

Za automatsko prijavljivanje korisnika u aloju bez stanja (stateless tenant autologin), moraju biti ispravni domen aloju, pin izvora, svrha tokena, nonce-a i datum isteka. Potvrdite da je URL aloju ispravan i da se pokušaj prijave vrši nedugo nakon generisanja SSO posete.

## Kada ponoviti
Ponovite proveru nakon svake promene infrastrukture. Ne menjajte promet na produkciju, ne brišite izvorne podatke niti uklanjate kredencijale za migraciju dok svi proveri ne budu uspešno prošli.
