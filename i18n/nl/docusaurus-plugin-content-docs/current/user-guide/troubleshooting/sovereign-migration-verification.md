---
title: Soevereine Migratie Verificatie
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migratie Verificatie

Ultimate Multisite: Multi-Tenancy 1.2.0 bevat WP-CLI verificatiecommando's voor migraties naar soevereine tenants. Gebruik deze wanneer een tenantmigratie, SSO-bezoek of geïsoleerde installatie niet als verwacht werkt.

## Commando's uitvoeren {#commands-to-run}

Voer de verificatie uit vanaf de WordPress-installatie op het netwerk:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gebruik de site ID van de tenant die je migreert. Het eerste commando controleert of de tenant niet langer afhankelijk is van legacy data op het netwerk. Het tweede commando controleert of soevereine push jobs kunnen verwerken en leegmaken (drain).

## Veelvoorkomende fouten {#common-failures}

### Databasegrants komen niet overeen met de host {#database-grants-do-not-match-the-host}

Als de verificatie melding maakt van fouten bij grants of writer-user, controleer dan de geconfigureerde database host. `localhost`, `127.0.0.1` en een container service naam zijn verschillende MySQL grant hosts. Update dan de tenant hostbinding of de databasegrants en voer de verificatie opnieuw uit.

### Bedrock of lokale installs kunnen niet verbinden {#bedrock-or-local-installs-cannot-connect}

Bedrock- en lokale socket-installaties kunnen de database als `localhost` rapporteren terwijl de runtime via een genormaliseerde adres verbindt. Versie 1.2.0 normaliseert hoststrings op dezelfde machine, maar aangepaste host-overrides kunnen nog steeds conflicteren met databasegrants.

### De asynchrone push wachtrij wordt niet geleegd (drain) {#async-push-queue-does-not-drain}

Als `verify-sovereign-push` niet klaar is, controleer dan Action Scheduler of de geconfigureerde async runner. Wis mislukte jobs alleen nadat je bevestigd hebt dat ze veilig opnieuw kunnen worden geprobeerd of weggegooid kunnen worden.

### Het aantal gebruikers van de tenant is verkeerd {#tenant-user-count-is-wrong}

De migratie moet gebruikers provisioneren voor de soevereine tenant. Als de verwachte installatiegebruiker ontbreekt, voer dan de gebruikersprovisioneringsstap opnieuw uit voordat je SSO opnieuw probeert.

### SSO-bezoek wordt geweigerd {#sso-visit-is-rejected}

Stateless tenant autologin vereist dat de domeinnaam van de tenant, de origin pin, het token doel, de nonce en de vervaldatum overeenkomen. Controleer of de URL van de tenant correct is en probeer de inlogprocedure kort na het genereren van de SSO-bezoek te starten.

## Wanneer opnieuw proberen {#when-to-retry}

Probeer de verificatie na elke infrastructuurwijziging opnieuw. Wissel niet de productie-trak, verwijder de brongegevens of verwijder migratiegegevens totdat alle verificatiecontroles zijn doorlopen.
