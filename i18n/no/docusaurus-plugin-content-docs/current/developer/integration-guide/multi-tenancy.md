---
title: Integrasjon med flerleietakerarkitektur
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy-integrasjon

Ultimate Multisite: Multi-Tenancy 1.2.0 endrer flere integrasjonskontaktpunkter for suverene leietakere, migreringsverifisering og automatisering av leietakerlivssyklus.

## Oppstartsflyt for leietaker

Integrasjoner som oppretter eller endrer leietakere, bør følge denne rekkefølgen:

1. Finn leietakerens registeroppføring og isolasjonsmodell.
2. Opprett eller verifiser leietakerens databaseskriver.
3. Start opp leietakerens skjema.
4. Klargjør leietakerbrukere.
5. Registrer leietakerruting og filsystemstier.
6. Kjør migreringsverifisering før leietakeren eksponeres.

Ikke anta at en suveren leietaker kan gjenbruke nettverkets databasetilkobling. Bruk leietakerregisteret og skriverabstraksjonene som tilbys av tillegget.

## SSO- og REST-hooks

Tilstandsløs automatisk innlogging for leietakere bruker kortlivede tokens med et formålskrav, JTI-beskyttelse mot gjenbruk, en utløpsgrense og opprinnelseslåsing. Integrasjoner som legger til innloggingsknapper eller lenker for fjernadministrasjon, bør generere leietakerbesøk gjennom den støttede SSO-flyten i stedet for å konstruere innloggings-URL-er for leietakere direkte.

API-revisjonshendelser på nettverkssiden og daglige sammendrag er tilgjengelige for suverene leietakergatewayer. Bruk disse loggene ved feilsøking av eksterne systemer som kaller endepunkter for leietakerlivssyklus.

## URL-er for suverene kundehandlinger

Ultimate Multisite v2.13.0 ruter kundehandlinger for suverene leietakere tilbake til hovednettstedet for konto-, kasse-, fakturering-, faktura-, nettsted-, malbytte- og domenekartleggingsflyter. Integrasjoner som gjengir administrasjonslenker på leietakersiden, bør peke disse handlingene til hovednettstedets kundepanel og inkludere et validert returmål når brukeren skal kunne navigere tilbake til leietakeren etter å ha fullført handlingen.

Bruk den innebygde SSO-innpakningen for administrasjonslenker på tvers av domener:

```php
$url = wu_with_sso($main_site_customer_url);
```

Den genererte URL-en kan fortsatt filtreres gjennom `wu_sso_url`, som mottar SSO-URL-en, gjeldende bruker, målnettstedets ID og omdirigeringskontekst. Tillegg kan bruke dette filteret til å legge til leverandørspesifikk kontekst eller erstatte megler-URL-en, samtidig som Ultimate Multisite sin token-validering bevares.

Ikke dupliser tilstand for medlemskap, faktura, faktureringsadresse, mal eller domeneadministrasjon inne i den suverene leietakeren. Behandle leietakerens Dashboard som startpunktet og hovednettstedets kundepanel som autoritativ kilde for administrerte handlinger.

## Migreringsverifisering

Etter at en migrering eller livssyklusintegrasjon endrer leietakerdata, kjør verifiseringsportene:

- `wp tenant verify-no-legacy --site=<site-id>` bekrefter at leietakeren ikke lenger avhenger av eldre stier på nettverkssiden.
- `wp tenant verify-sovereign-push --site=<site-id>` bekrefter at suverene push-jobber kan behandles og tømmes.

Integrasjoner bør behandle mislykket verifisering som en distribusjonsblokkering og unngå å merke en leietaker som live før feilen er løst.

## Sletting av leietaker

Sletteflyter bør kalle tilleggets nedbyggingssti slik at leietakerens databaselegitimasjon blir ryddet opp. Eksterne integrasjoner kan fjerne leverandørressurser etter at nedbyggingen er fullført, men bør ikke slette vertdatabaser eller mapper mens verifisering eller asynkrone push-jobber fortsatt kjører.

## Utdatert databaseruter

Den eldre `Database_Router` er erstattet av en deprecation-stubb. Nye integrasjoner bør finne leietakere gjennom de gjeldende API-ene for nettstedruter og leietakerregister i stedet for å avhenge av den gamle ruterklassen.
