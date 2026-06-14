---
title: Radni tok migracije suverenog sustava
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Rad Sovereign Migracijski Proces

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaje proge za provjeru migracije prilikom premještanja standardnog subsitea u infrastrukturu suverenog najmoprimca (tenant).

## Prije nego što počnete

Provjerite da imate sljedeće spremno:

- Trenutnu rezervnu kopiju izvornog sajta.
- Dodatak Multi-Tenancy aktivan.
- Ciljnu bazu podataka najmoprimca, korijen sustava datoteka (filesystem root) i domen spremne.
- Povezivanje baze podataka na host koji odgovara ciljnom okruženju.
- Pristup za pokretanje WP-CLI naredbi za mrežu.

## Preporučeni proces

1. Pripremite ciljnu bazu podataka najmoprimca i sustav datoteka.
2. Registrirajte ili ažurirajte postavke izolacije najmoprimca (tenant isolation settings).
3. Pokrenite migraciju najmoprimca.
4. Postavite ili provjerite korisnike najmoprimca.
5. Osvobolijte asinhrono zadatke migracije (drain async migration jobs).
6. Pokrenite provjeru suverene migracije.
7. Posjetite najmoprimca s SSO-om.
8. Promijenite DNS ili rutiranje tek nakon što provera prođe.

## Proge za provjeru (Verification gates)

Proces provjere provjerava migraciju iz nekoliko uglova:

- Je li šema najmoprimca prisutna i može je pisati programirajući bazu podataka najmoprimca?
- Ima li konfigurirani host baze podataka važeće dozvole.
- Jesu li korisnici najmoprimca prisutni i odgovaraju očekivanom broju korisnika instaliranih u suverenoj postavci?
- Može li se asinhrono zadatko za push uspješno osvobolijeti (drain)?
- Je li više ne potrebna stara putanja podataka na strani mreže za suvereni najmoprimac.

Osvojećite neuspjehe provjere kao blokade prije pokretanja. Popravite navedenu problematičnu bazu podataka, korisnika, zadatka ili rutiranja, a zatim ponovite provjeru prije nego što otvorite najmoprimca za kupce.

## Prvi prodajni posjet (First production visit)

Nakon što provera prođe, koristite **Posjeti (SSO)** s ekrana upravljanja sajtom za prvi administrativni posjet. Ovo potvrđuje rutiranje najmoprimca, obradu SSO tokena, origin pinning i postavljanje korisnika na strani najmoprimca u jednom kontroliranom koraku.
