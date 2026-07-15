---
title: Hostinger Multi-tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 tilføjer en Hostinger multi-tenancy funktionalitet, så hostede domæner kan deltage i suveræn tenantprovisionering sammen med den eksisterende Hostinger domæne-mapping integration.

Brug denne funktionalitet, når tenant domæner og isoleret tenant infrastruktur administreres gennem Hostinger hPanel.

## Opsætningsemner {#setup-notes}

1. Konfigurer den grundlæggende Hostinger integration under **Ultimate Multisite > Settings > Host Integrations**.
2. Bekræft, at Hostinger API-tokenet kan administrere det målrettede domæne eller subdomain.
3. Aktiver Multi-Tenancy addon'en.
4. Konfigurer isoleringsstrategien for tenanten før du udgiver tenanten.
5. Kør migrationsverifikationsworkfloden før du sender produktions-trafik til tenanten.

Hostinger funktionaliteten bruger den delte Hostinger forbindelse til host-side operationer. DNS skal stadig pege på den korrekte Hostinger konto, og hPanel-kontolimits gælder stadig.

## Specifikke ændringer for funktionalitet {#capability-specific-changes}

- Suveræne tenants kan oprettes med host-bevidste domæneoperationer.
- Database host strenge på samme maskine normaliseres før godkendelsesverifikation.
- Hostinger-administrerede tenants skal bruge databasehostværdien vist i hPanel, medmindre WordPress runtime kræver en lokal overstyring.
- SSO-besøg er afhængige af, at tenantens domæne opløses til den Hostinger-hostede tenant.

## Fejlfinding for Hostinger tenants {#troubleshooting-hostinger-tenants}

- Hvis en tenantinstallation fejler, bekræft, at domænet allerede er tilknyttet Hostinger-kontoen.
- Hvis databaseverifikationen fejler, sammenlign tenantens DB-brugernavn, databasenavn og hostbinding med hPanel.
- Hvis **Visit (SSO)** fejler, bekræft, at DNS og SSL er aktive for tenantens domæne.
- Hvis nedtagning efterlader hostressourcer bag sig, fjern eventuelle resterende databaser, brugere eller mapper fra hPanel efter at have bekræftet backups.
