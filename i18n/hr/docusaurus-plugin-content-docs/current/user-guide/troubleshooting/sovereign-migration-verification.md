---
title: Provjera migracije suverenog sustava
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Provjera migracije suverenog hosta

Ultimate Multisite: Multi-Tenancy 1.2.0 uključuje WP-CLI komande za provjeru pri migracijama suverenih tenantera. Koristite ih kada se migracija tenantera, posjet putem SSO ili izolirana instalacija ne ponašaju kako treba.

## Komande za pokretanje

Pokrenite provjeru s mrežne WordPress instalacije:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Koristite ID tenantera koji migrirate. Prva komanda provjerava da tenent više ne ovisi o starim podacima s mrežne strane. Druga komanda provjerava da se zadaci sovereign push mogu obraditi i isprazniti (drain).

## Česte greške

### Dotičitelj baze podataka se ne poklapa s hostom

Ako provjera prijavljuje probleme s dozvolama ili korisnicima za pisanje, provjerite podešavani host baze podataka. `localhost`, `127.0.0.1` i ime servisa kontejnera su različiti MySQL hostovi za dozvole. Ažurirajte vezu tenanta na host ili dozvole baze podataka, a zatim ponovite provjeru.

### Bedrock ili lokalne instalacije ne mogu se povezati

Bedrock i lokalne socket instalacije mogu prijaviti bazu podataka kao `localhost` dok runtime povezuje putem normalizirane adrese. Verzija 1.2.0 normalizira stringove hosta na istoj mašini, ali prilagođene nadgrade hostove se i dalje mogu sukobiti s dozvolama baze podataka.

### Asinhna redoslov za push nije ispraznjen (drain)

Ako `verify-sovereign-push` ne završi, provjerite Action Scheduler ili podešavani asinhni runner. Obrišite neuspješne zadatke tek nakon što potvrdite da su sigurni za ponovno pokušaj ili bacanje u propast.

### Broj korisnika tenantera je pogrešan

Migracija bi trebala providjeti korisnike za suverenog tenanta. Ako nedostaje očekivani broj instaliranih korisnika, ponovite korak provizije korisnika prije ponovnog pokušaja SSO-a.

### Posjet putem SSO-a se odbija

Za automatski prijavljivanje najemtjenika bez stanja (stateless tenant autologin), moraju biti ispravni domena tenanta, origin pin, svrha tokena, nonce i datum isteka. Potvrdite da je URL tenanta ispravan i da će se pokušaj prijave dogoditi čim generirate SSO posjet.

## Kada ponoviti pokušaj

Ponovite provjeru nakon svake promjene infrastrukture. Ne prebacujte promet u produkciju, ne brišite izvorne podatke niti uklanjate kredencijale za migraciju dok se svi provjeri ispravno ne izvrše.
