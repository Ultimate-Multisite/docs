---
title: Suveræn Migrationsverifikation
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verificering af suveræn migration {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 inkluderer WP-CLI verifikationskommandoer til migrations af suveræne lejere (tenants). Brug dem, hvis en tenantmigration, SSO-besøg eller isoleret installation ikke opfører sig som forventet.

## Kommandoer til kørsel {#commands-to-run}

Kør verifikationen fra din WordPress-installation på netværket:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Brug site ID'et for den tenant, du migrerer. Det første kommando tjekker, at tenanten ikke længere er afhængig af legacy data fra netværket. Det andet kommando bekræfter, at suveræne push jobs kan behandles og drænes (drain).

## Almindelige fejl {#common-failures}

### Database-tilladelser matcher ikke værten {#database-grants-do-not-match-the-host}

Hvis verifikationen rapporterer fejl i tilladelser til database eller writer-user, skal du tjekke den konfigurerede database-host. `localhost`, `127.0.0.1` og et container service navn er forskellige MySQL grant hosts. Opdater derefter bindingen af tenantens host eller de database-tilladelser og kør verifikationen igen.

### Bedrock eller lokale installationer kan ikke forbinde {#bedrock-or-local-installs-cannot-connect}

Bedrock- og lokale socket-installationer kan rapportere databasen som `localhost`, mens runtime'et forbinder via en normaliseret adresse. Version 1.2.0 normaliserer host-strenge på samme maskine, men brugerdefinerede host-overstyrrelser kan stadig komme i konflikt med database-tilladelserne.

### Asynkron push-køen drænes ikke {#async-push-queue-does-not-drain}

Hvis `verify-sovereign-push` ikke slutter, skal du tjekke Action Scheduler eller den konfigurerede asynkrone runner. Ryd kun de fejlede jobs efter at have bekræftet, at de er sikre at forsøge igen eller kassere.

### Antal brugere i tenanten er forkert {#tenant-user-count-is-wrong}

Migrationen skal provisionere brugere til den suveræne tenant. Hvis det forventede antal installationsbrug mangler, skal du køre brugerprovisioneringssteget igen, før du prøver SSO igen.

### SSO-besøg bliver afvist {#sso-visit-is-rejected}

Stateless tenant autologin kræver, at domænet for lejemålet, origin pin, token-formål, nonce og udløbsdato matcher hinanden. Bekræft, at lejemålets URL er korrekt, og forsøg på login foretages kort efter generering af SSO-besøget.

## Hvornår skal du prøve igen {#when-to-retry}

Prøv verifikationen efter hver infrastrukturændring. Skift ikke produktions-trafik, slet ikke kildedata eller fjern migrationsoplysninger, før alle verifikationskontroller er bestået.
