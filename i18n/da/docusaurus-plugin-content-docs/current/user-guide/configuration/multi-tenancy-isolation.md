---
title: Multi-tenancy isolation
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-Tenancy Isolation {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 understøtter database- og filsystemisolering pr. undersite for suveræne lejere. Dette sikrer, at lejerdata forbliver adskilt, samtidig med at netværksniveauprovisionering, fakturering og administration bevares.

## Isoleringstrategi {#isolation-strategy}

Brug suveræn isolering til kunder, der kræver stærkere datadeling, dedikeret filsystemopbevaring eller en separat hostgrænse.

Hver suveræn lejer skal have:

- En dedikeret lejerdatabase eller en databasepræfikst strategi godkendt for hosten.
- Et dedikeret lejerfilsystemrod.
- En registreringseindgang, der kortlægger sitet til dets database, rodsti, hostname og isoleringsmodel.
- Et migrationsverifikationsresultat før lejeren betragtes som live.

## Databasehostbinding {#database-host-binding}

Version 1.2.0 ændrer standardadfærden for hostbinding på samme maskine for suveræne installationer. Samme-maskine værdier som `localhost` normaliseres, så Bedrock, FrankenPHP og containeriserede WordPress-installationer kan give og verificere tilladelser mod den hoststreng MySQL rent faktisk ser.

Når du konfigurerer en suveræn lejer:

1. Sæt databasehost til værdien, som lejers runtime kræver.
2. Brug `localhost` for lokale socket installationer, når hosten forventer lokale forbindelser.
3. Brug `127.0.0.1` eller et service-hostname kun, hvis databasen serveren giver privilegier til den host.
4. Kør migrationsverifikation efter ændring af hostbindingen.

Hvis verifikationen rapporterer tilladelsesfejl, sammenlign de brugerrettigheder i lejerdatabasen med den konfigurerede hostbinding. En bruger tildelt for `user@localhost` er forskellig fra `user@127.0.0.1` eller `user@%`.

## Filsystemrod {#filesystem-root}

Tenant rootet skal være stabilt på tværs af genstart og udrulninger. Undgå midlertidige monteringsstier. For Bedrock-stil installationer skal du bekræfte, at tenant root peger på WordPress webroten, som tenant bootstrap forventer, ikke kun projektrootet.

## Provisioneringsrækkefølge {#provisioning-order}

For nye suveræne tenants skal du bruge denne rækkefølge:

1. Opret en opføring i tenant registry.
2. Opret tenant-databasen og databasebrugeren.
3. Bootstrap tenant-skemaet.
4. Provisioner tenant-brugere.
5. Konfigurer tenantets filsystemstier.
6. Kør migrationsverifikation.
7. Skift routing eller DNS efter, at verifikationen er bestået.

Denne rækkefølge forhindrer delvist isolerede tenants i at modtage trafik, før databasen, brugerne og filsystemet er klar.

## Flow til styring af suveræne kunder {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 bevarer kundehandlingsfunktionerne på hovedsitet, når suverænemode er aktiveret. En tenant kan stadig køre som en isoleret WordPress-installation, men kundevendte handlinger, der afhænger af nettilregning, medlemskab eller delt kontodata, skal sende kunden tilbage til hovedsitet i stedet for at forsøge at fuldføre handlingen inde i tenantets runtime.

Hovedsite-flowet gælder for:

- Checkout og planer.
- Kontooversigt og kundeprofilhandlinger.
- Opdateringer af faktureringsadresse og betalingsstyrings-skærme.
- Visninger af fakturaer og betalingshistorik.
- Site management handlinger som tilføjelse eller sletning af sites.
- Skift mellem templates.
- Domænemapping og ændringer af primærdomænet.

Når en kunde starter en af disse handlinger fra et suverænt tenant, bygger Ultimate Multisite den tilsvarende hovedsite URL og bevarer kildeten som returmål, når det er sikkert at gøre det. Dette lader kunder færdiggøre den administrerede handling mod netværksregistrene og derefter vende tilbage til tenant-konteksten uden at duplikere fakturerings- eller medlemskabstilstand i den suveræne database.

For operatører er den praktiske regel: hold fakturerings-, kontodetaljer, checkout-, faktura-, skabelon- og domæneadministrationssider tilgængelige på hovedsiden for de suveræne netværk. Tenant dashboards kan linke til disse sider, men hovedsiden forbliver kilden til sandheden for handlingen.
