---
title: Suveræn lejerdrift
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Driftsovereign Tenant Drift {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 tilføjer operationelle værktøjer til suveræne lejere (sovereign tenants): subsites, der kører med deres egen database, filsystemrod og routingkontekst, mens de forbliver synlige for netværksadministratoren.

Brug denne side, når du administrerer isolerede kundesider, fjernede site-overleveringer eller migreringer, der flytter en standard subsite ind i suveræn infrastruktur.

## Hvad ændrer sig for administratorer {#what-changes-for-administrators}

- **Stateless tenant autologin** — Netværksadministratorer kan besøge en suveræn lejer uden at skulle stole på langlivede delt sessionstilstande. SSO-tokenet er formålsbestemt, oprindelsesbundet (origin-pinned), replay-beskyttet og begrænset til et kort udløbsvindue.
- **Sovereign-aware routing** — Ældre isolerede netværk og suveræne lejere opløses gennem den samme site router sti, hvilket reducerer forskelle i opstart mellem gamle og nye isolerede installationer.
- **Verified migration state** — Migrationsverifikationskontroller tjekker brugerprovisionering, databasewriter-tilladelser, kødræningsstatus og fravær af legacy-tabeller, før en lejer betragtes som fuldført.
- **Safer teardown** — Suveræn nedlukning fjerner nu lejeroplysninger rent, så slettede lejere ikke efterlader gammel databaseadgang bag sig.

## Besøgelse af en suveræn lejer {#visiting-a-sovereign-tenant}

1. Åbn **Network Admin > Ultimate Multisite > Sites**.
2. Vælg den suveræne lejer.
3. Brug **Visit (SSO)**, når det er tilgængeligt, i stedet for at kopiere adgangskoder eller oprette midlertidige administrator-konti.

Besøgsflowet opretter et kortlivet login-token for den pågældende lejer og registrerer SSO-begivenheden i lejerens audit trail. Hvis knappen fejler, tjek, at domænet for lejeren opløses til den forventede installation og at lejeren kan nå netværks-side SSO-endpointet.

## Tjekliste for fjernsite-operationer {#remote-site-operations-checklist}

Før du ændrer en suveræn eller fjern site, bekræft:

## Sletning af suveræne tenants {#deleting-sovereign-tenants}

Sletning af en suveræn tenant er destruktiv. Bekræft først backup- og eksportstatus, hvorefter du sletter den fra administrationsskærmen for sitet. Teardown-flowet i version 1.2.0 fjerner databasecredentials som en del af oprydningen, men administratorer bør stadig kontrollere, at host-niveau databasebrugere og mapper er væk, når man bruger eksterne hostingpaneler.

:::warning
Slet ikke en suveræn tenant, mens migrationen stadig kører eller mens asynkrone push jobs er i kø. Vent på, at verifikationen er færdig, så teardown ikke fjerner de credentials, der er nødvendige for de ventende jobs.
:::
