---
title: Suveræn Migrationsworkflow
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migrations Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0 tilføjer migrationsverifikationsporte til flytning af en standard subsite ind i sovereign tenant infrastruktur.

## Før du starter

Bekræft, at du har:

- En opdateret backup af kildesitet.
- Multi-Tenancy addon aktiv.
- Destination tenant database, filsystem rod og domæne klar.
- En database host binding, der matcher destination miljøet.
- Adgang til at køre WP-CLI kommandoer for netværket.

## Anbefalet workflow

1. Forbered destination tenant database og filsystem.
2. Registrer eller opdater tenant isolation indstillingerne.
3. Kør tenant migrationen.
4. Provisionér eller verificér tenant brugere.
5. Tøm asynkrone migrationsjobs.
6. Kør sovereign migration verifikation.
7. Besøg tenanten med SSO.
8. Skift DNS eller routing først efter, at verifikationen er bestået.

## Verifikationsporte

Verifikationsworkflown tjekker migrationen fra flere vinkler:

- Tenant skemaet eksisterer og kan skrives af tenantens databasewriter.
- Den konfigurerede databasehost har gyldige tilladelser (grants).
- Tenant brugere er til stede og matcher det forventede antal sovereign installerede brugere.
- Den asynkrone push queue kan tømmes succesfuldt.
- Legacy netværksbaserede datastier er ikke længere nødvendige for den sovereign tenant.

Behandl verifikationsfejl som blokeringer før lancering. Ret det rapporterede database-, bruger-, kø- eller routingproblem, og kør derefter verifikationen igen, før du eksponerer tenanten for kunder.

## Første produktionsbesøg

Efter at verifikationen er bestået, brug **Visit (SSO)** fra skærmen til sidestyring til det første admin-besøg. Dette bekræfter tenant routing, SSO token håndtering, origin pinning og brugerprovisionering på tenant-siden i ét kontrolleret trin.
