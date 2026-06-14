---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 voegt een Hostinger multi-tenancy functionaliteit toe, zodat gehoste domeinen kunnen deelnemen aan soevereine tenantprovisioning naast de bestaande Hostinger domain-mapping integratie.

Gebruik deze functionaliteit wanneer tenantdomeinen en geïsoleerde tenantinfrastructuur worden beheerd via Hostinger hPanel.

## Setup notities

1. Configureer de kernintegratie met Hostinger onder **Ultimate Multisite > Settings > Host Integrations**.
2. Controleer of de Hostinger API token het doel-domein of subdomain kan beheren.
3. Schakel de Multi-Tenancy addon in.
4. Configureer de strategie voor tenantisolatie voordat je de tenant publiceert.
5. Voer de migratieverificatie workflow uit voordat je productie verkeer naar de tenant stuurt.

De Hostinger functionaliteit maakt gebruik van de gedeelde Hostinger verbinding voor host-side operaties. Het DNS moet nog steeds wijzen naar het juiste Hostinger account, en de hPanel accountlimieten gelden nog steeds.

## Functionaliteitsspecifieke wijzigingen

- Soevereine tenants kunnen worden aangemaakt met hostbewuste domeinoperaties.
- Database hoststrings op dezelfde machine worden genormaliseerd voordat de verificatie wordt uitgevoerd.
- Hostinger beheerde tenants moeten het database hostwaarde gebruiken die in hPanel wordt weergegeven, tenzij de WordPress runtime een lokale override vereist.
- SSO bezoeken zijn afhankelijk van het tenantdomein dat resulteert in de door Hostinger gehoste tenant.

## Probleemoplossing voor Hostinger tenants

- Als een installatie van een tenant mislukt, controleer dan of het domein al aan het Hostinger account is gekoppeld.
- Als de databaseverificatie faalt, vergelijk dan de DB-gebruikersnaam, de databasenaam en de hostbinding van de tenant met hPanel.
- Als **Visit (SSO)** faalt, bevestig dan of DNS en SSL actief zijn voor het tenantdomein.
- Als je een teardown achterlaat met resterende hostbronnen, verwijder dan alle overgebleven databases, gebruikers of mappen uit hPanel nadat je de back-ups hebt bevestigd.
