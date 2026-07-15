---
title: Suverän migrationsarbetsflöde
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migreringsflöde

Ultimate Multisite: Multi-Tenancy 1.2.0 lägger till migrationsverifieringsgrindar för att flytta en standard-subsite till suverän tenantinfrastruktur.

## Innan du börjar {#before-you-start}

Kontrollera att du har:

- En aktuell backup av källsitsen.
- Multi-Tenancy-tillägget aktiverat.
- Destinationens tenantdatabas, filsystemets rot och domän redo.
- En databasvärdsinbindning som matchar destinationen.
- Tillgång till WP-CLI-kommandon för nätverket.

## Rekommenderat flöde {#recommended-workflow}

1. Förbered destinationens tenantdatabas och filsystem.
2. Registrera eller uppdatera inställningarna för tenantisolering.
3. Kör tenantmigreringen.
4. Provisionera eller verifiera tenantanvändare.
5. Töm asynkrona migrationsjobb.
6. Kör suverän migrationsverifiering.
7. Besök tenanten med SSO.
8. Växla DNS eller routing först efter att verifieringen har godkänts.

## Verifieringsgrindar {#verification-gates}

Verifieringsflödet kontrollerar migreringen från flera vinklar:

- Tenantschemat existerar och kan skrivas av tenantdatabasens skrivare.
- Den konfigurerade databasvärden har giltiga behörigheter.
- Tenantanvändare finns och matchar det förväntade antalet suveräna installationsanvändare.
- Den asynkrona push-köerna kan tömmas framgångsrikt.
- Äldre nätverksbaserade datastigar krävs inte längre för den suveräna tenanten.

Behandla verifieringsfel som blockeringar före lansering. Åtgärda det rapporterade problemet med databas, användare, kö eller routing, och kör sedan verifieringen igen innan du exponerar tenanten för kunder.

## Första produktionsbesöket {#first-production-visit}

Efter att verifieringen har godkänts, använd **Besök (SSO)** från skärmen för sidhantering för det första administratörsbesöket. Detta bekräftar tenantrouting, hantering av SSO-tokens, ursprungsfästning (origin pinning) och provisionering av användare på tenant-sidan i ett kontrollerat steg.
