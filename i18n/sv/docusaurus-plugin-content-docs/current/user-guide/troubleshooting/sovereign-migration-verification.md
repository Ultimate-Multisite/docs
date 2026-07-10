---
title: Souverän migrationsverifiering
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifiering av suverän migrering {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 inkluderar WP-CLI verifikationskommandon för migrationer till suveräna tenants. Använd dem när en tenantmigration, ett SSO-besök eller en isolerad installation inte beter sig som förväntat.

## Kommandon att köra {#commands-to-run}

Kör verifieringen från din nätverksinstallation av WordPress:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Använd site ID för den tenant du migrerar. Det första kommandot kontrollerar att tenanten inte längre är beroende av äldre nätverksdata. Det andra kommandot verifierar att suveräna push-jobb kan bearbetas och tömmas (drain).

## Vanliga fel {#common-failures}

### Databassbehörigheter stämmer inte överens med värden {#database-grants-do-not-match-the-host}

Om verifikationen rapporterar fel vid behörigheter för databas eller writer-user, kontrollera den konfigurerade databasvärden. `localhost`, `127.0.0.1` och ett container service namn är olika MySQL grant hosts. Uppdatera bindningen av tenant host eller databassbehörigheterna, och kör sedan verifikationen igen.

### Bedrock- eller lokala installationer kan inte ansluta {#bedrock-or-local-installs-cannot-connect}

Bedrock- och lokala socketinstallationer kan rapportera databasen som `localhost` medan runtime ansluter via en normaliserad adress. Version 1.2.0 normaliserar hoststräng på samma maskin, men anpassade host-överskridanden kan fortfarande krocka med databassbehörigheter.

### Asynkron push-kö var inte tömd (drained) {#async-push-queue-does-not-drain}

Om `verify-sovereign-push` inte slutförs, kontrollera Action Scheduler eller den konfigurerade asynkrona köraren. Rensa misslyckade jobb först efter att du har bekräftat att de är säkra att försöka igen eller kassera dem.

### Antal användare för tenanten är felaktigt {#tenant-user-count-is-wrong}

Migrationen ska provisionera användare för den suveräna tenanten. Om den förväntade installerade användaren saknas, kör om steget för användarprovisionering innan du försöker med SSO igen.

### SSO-besök nekas {#sso-visit-is-rejected}

Stateless tenant autologin kräver att domän, origin pin, token-syfte, nonce och utgångstid matchar. Bekräfta att tenant URL är korrekt och försök inloggning kort efter att SSO-besöket har genererats.

## När du ska försöka igen {#when-to-retry}

Försök verifieringen efter varje infrastrukturändring. Växla inte produktionstrafik, radera inte källdata eller ta bort migrationsuppgifter förrän alla verifieringskontroller har godkänts.
