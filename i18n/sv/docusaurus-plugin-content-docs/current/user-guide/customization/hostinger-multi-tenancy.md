---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 lägger till en Hostinger multi-tenancy funktionalitet så värdiga domäner kan delta i suverän tenantprovisionering tillsammans med den befintliga integrationen för domänmappning hos Hostinger.

Använd denna funktionalitet när tenantdomäner och isolerad tenantinfrastruktur hanteras via Hostinger hPanel.

## Inställningsanteckningar {#setup-notes}

1. Konfigurera den grundläggande Hostinger-integrationen under **Ultimate Multisite > Settings > Host Integrations**.
2. Bekräfta att Hostinger API-token kan hantera måndomen eller subdomänen.
3. Aktivera Multi-Tenancy addon.
4. Konfigurera strategin för tenantisolering innan du publicerar tenanten.
5. Kör migrationsverifieringsflödet innan du skickar produktionstrafik till tenanten.

Hostinger-funktionaliteten använder den delade Hostinger-anslutningen för host-sida operationer. DNS måste fortfarande peka mot rätt Hostinger-konto, och hPanel-kontolimit gäller fortfarande.

## Funktion-specifika ändringar {#capability-specific-changes}

- Suveräna tenants kan skapas med hostmedvetna domänoperationer.
- Database hoststrängar på samma maskin normaliseras innan verifiering av behörighet.
- Hostinger-hanterade tenants bör använda värdet för database host som visas i hPanel om WordPress runtime inte kräver en lokal överstyrning.
- SSO-besök vilar på att tenantdomänen löser sig till den Hostinger-hostade tenanten.

## Problemhantering av Hostinger tenants {#troubleshooting-hostinger-tenants}

- Om en tenantinstallation misslyckas, kontrollera att domänen redan är kopplad till Hostinger-kontot.
- Om databaseverifieringen misslyckas, jämför tenantens DB-användarnamn, databasnamn och hostbinding med hPanel.
- Om **Visit (SSO)** misslyckas, bekräfta att DNS och SSL är aktiva för tenantdomänen.
- Om nedmonteringen lämnar kvar hostresurser, ta bort eventuella återstående databaser, användare eller mappar från hPanel efter att ha bekräftat backuperna.
