---
title: Radni tok migracije suverenog sistema
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Potok migracije suverenog sistema {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaje provere za migraciju prilikom premještanja standardnog subsitea u infrastrukturu suverenog najmoprimca (tenant).

## Prije nego što počnete {#before-you-start}

Provjerite da imate:

- Trenutnu rezervnu kopiju izvornog sajta.
- A aktivni addon Multi-Tenancy.
- Ciljnu bazu podataka najmoprimca, korijen datotečnog sistema i domen spremne.
- Povezivanje hosta baze podataka koje odgovara ciljnom okruženju.
- Pristup za pokretanje WP-CLI naredbi za mrežu.

## Preporučeni radni tok (workflow) {#recommended-workflow}

1. Pripremite ciljnu bazu podataka najmoprimca i datotečni sistem.
2. Registrujte ili ažurirajte postavke izolacije najmoprimaca.
3. Pokrenite migraciju najmoprimca.
4. Proviđite ili provjerite korisnike najmoprimca.
5. Osvojite (drain) asinhrono zadatke migracije.
6. Pokrenite provjeru migracije suverenog sistema.
7. Posjetite najmoprimca s SSO-om.
8. Promijenite DNS ili rutiranje tek nakon što provera prođe.

## Provere (Verification gates) {#verification-gates}

Radni tok provjere migracije iz nekoliko uglova:

- Da li je šema najmoprimca prisutna i da li je pisana od strane pisca baze podataka najmoprimca.
- Da li konfigurirani host baze podataka ima važeće dozvole (grants).
- Da li su korisnici najmoprimca prisutni i da li odgovaraju očekivanom broju korisnika instaliranog u suverenom sistemu.
- Da li se asinhrono istekavanje (async push queue) uspješno može obaviti.
- Da li više nisu potrebni stari putovi podataka na strani mreže za najmoprimca suverenog sistema.

Osvojite neuspjehe provjere kao blokade prije pokretanja. Popravite prijavljeni problem sa bazom podataka, korisnicima, redom (queue) ili rutiranjem, a zatim ponovite provjeru prije nego što najmoprimca izložite kupcima.

## Prvi prodajni posjet (First production visit) {#first-production-visit}

Nakon što provera prođe, koristite **Posjeti (SSO)** sa ekrana upravljanja sajtom za prvi admin posjet. Ovo potvrđuje rutiranje najmoprimca, obradu SSO tokena, origin pinovanje i proviziju korisnika na strani najmoprimca u jednom kontrolisanom koraku.
