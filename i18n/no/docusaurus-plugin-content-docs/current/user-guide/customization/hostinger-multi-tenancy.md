---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 legger til en Hostinger multi-tenancy funksjonalitet, slik at hostede domener kan delta i suveren tenant-provisjonering sammen med den eksisterende Hostinger domene-mapping integrasjonen.

Bruk denne funksjonaliteten når du administrerer tenant-domener og isolert tenant-infrastruktur gjennom Hostinger hPanel.

## Oppsettnotater

1. Konfigurer kjernen i Hostinger-integrasjonen under **Ultimate Multisite > Settings > Host Integrations**.
2. Bekreft at Hostinger API-tokenet kan administrere måldomenet eller subdomenet.
3. Aktiver Multi-Tenancy addon.
4. Konfigurer isoleringsstrategien for tenanten før du publiserer tenanten.
5. Kjør migrasjonsverifiseringsflyten før du sender produksjonstrafikk til tenanten.

Hostinger-funksjonaliteten bruker den delte Hostinger-tilkoblingen for operasjoner på host-siden. DNS må fortsatt peke til riktig Hostinger-konto, og begrensningene i hPanel gjelder fortsatt.

## Endringer spesifikke for funksjonalitet

- Suverene tenenter kan opprettes med domeneoperasjoner som er bevisste om hosten.
- Database-host-strenger på samme maskin normaliseres før verifisering av tildeling.
- Hostinger-administrerte tenenter skal bruke database-hostverdien som vises i hPanel, med mindre WordPress runtime krever en lokal overstyring.
- SSO-besøk er avhengige av at tenant-domenet løser opp til den Hostinger-hostede tenanten.

## Feilsøking av Hostinger tenenter

- Hvis installasjonen av en tenant feiler, bekreft at domenet allerede er knyttet til Hostinger-kontoen.
- Hvis databaseverifiseringen feiler, sammenlign brukernavn for DB, databasenavn og hostbinding med hPanel.
- Hvis **Visit (SSO)** feiler, bekreft at DNS og SSL er aktive for tenant-domenet.
- Hvis nedstengningen etterlater seg hostressurser, fjern eventuelle gjenværende databaser, brukere eller mapper fra hPanel etter å ha bekreftet sikkerhetskopier.
