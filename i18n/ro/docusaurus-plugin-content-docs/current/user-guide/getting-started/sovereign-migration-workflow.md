---
title: Flux de migrare sovereignă
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Flux de Migrare Soveran {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 adaugă etape de verificare a migrației pentru mutarea unui subsite standard în infrastructura clientului souverain.

## Înainte de a începe {#before-you-start}

Asigurați-vă că aveți:

- Un backup actual al site-ului sursă.
- Addonul Multi-Tenancy activat.
- Baza de date, rădăcina sistemului de fișiere și domeniul țintă (tenant) gata.
- O legătură a hostului de bază de date care se potrivește cu mediul țintă.
- Acces pentru a executa comenzi WP-CLI pentru rețea.

## Flux de lucru recomandat {#recommended-workflow}

1. Pregătiți baza de date și sistemul de fișiere al tenantului țintă.
2. Înregistrați sau actualizați setările de izolare a tenantului.
3. Rulați migrarea tenantului.
4. Provisionați sau verificați utilizatorii tenantului.
5. Descărcați (drain) joburile de migrare asincrone.
6. Rulați verificarea migrației souverane.
7. Vizitați tenantul cu SSO.
8. Schimbați DNS-ul sau rutarea doar după ce verificarea este trecută cu succes.

## Etapa de verificare (Verification gates) {#verification-gates}

Fluxul de verificare inspectează migrarea din mai multe aspect:

- Schema-ul tenantului există și poate fi scrisă de către scriitorul bazei de date a tenantului.
- Hostul de bază de date configurat are permisiuni valide.
- Utilizatorii tenantului sunt prezenți și se potrivesc cu numărul așteptat de utilizatori instalai souverani.
- Coada de push asincron poate fi descărcată (drained) cu succes.
- Căile de date vechi din partea rețelei nu mai sunt necesare pentru tenantul souverain.

Tratați eșecurile verificării ca blocaje pre-lansare. Reparați problema raportată de bază de date, utilizator, coadă sau rutare, apoi rulați din nou verificarea înainte de a expune tenantul clienților.

## Prima vizită în producție {#first-production-visit}

După ce verificarea este trecută cu succes, folosiți **Visit (SSO)** din ecranul de management al site-ului pentru prima vizită administrativă. Acest lucru confirmă rutarea tenantului, gestionarea token-urilor SSO, fixarea sursei și provisionarea utilizatorilor pe partea clientului într-o singură etapă controlată.
