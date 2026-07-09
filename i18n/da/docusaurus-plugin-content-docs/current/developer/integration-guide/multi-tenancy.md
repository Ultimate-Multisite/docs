---
title: Integration af multi-tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy-integration

Ultimate Multisite: Multi-Tenancy 1.2.0 ændrer flere integrationskontaktpunkter for suveræne tenants, migreringsverificering og automatisering af tenant-livscyklus.

## Tenant-bootstrap-flow

Integrationer, der opretter eller ændrer tenants, bør følge denne rækkefølge:

1. Find tenant-registerposten og isolationsmodellen.
2. Opret eller verificer tenant-databasens writer.
3. Bootstrap tenant-skemaet.
4. Klargør tenant-brugere.
5. Registrer tenant-routing og filsystemstier.
6. Kør migreringsverificering, før tenant gøres tilgængelig.

Antag ikke, at en suveræn tenant kan genbruge netværkets databaseforbindelse. Brug tenant-registeret og writer-abstraktionerne, som leveres af tilføjelsen.

## SSO- og REST-hooks

Stateless tenant-autologin bruger kortlivede tokens med et purpose claim, JTI-replaybeskyttelse, en udløbsmaksimumgrænse og origin-pinning. Integrationer, der tilføjer login-knapper eller links til fjernadministration, bør generere tenant-besøg via det understøttede SSO-flow i stedet for at konstruere tenant-login-URL'er direkte.

API-revisionshændelser på netværkssiden og daglige oversigter er tilgængelige for suveræne tenant-gateways. Brug disse logs ved fejlfinding af eksterne systemer, der kalder endpoints for tenant-livscyklus.

## Handlings-URL'er for suveræne kunder

Ultimate Multisite v2.13.0 router kundehandlinger for suveræne tenants tilbage til hovedsiden for flows til Account, checkout, fakturering, faktura, side, skabelonskift og domænemapping. Integrationer, der viser administrationslinks på tenant-siden, bør pege disse handlinger mod kundepanelet på hovedsiden og inkludere et valideret returneringsmål, når brugeren skal kunne navigere tilbage til tenant efter at have fuldført handlingen.

Brug den centrale SSO-wrapper til administrationslinks på tværs af domæner:

```php
$url = wu_with_sso($main_site_customer_url);
```

Den genererede URL kan fortsat filtreres via `wu_sso_url`, som modtager SSO-URL'en, den aktuelle bruger, målsite-ID'et og redirect-konteksten. Tilføjelser kan bruge dette filter til at tilføje udbyderspecifik kontekst eller til at erstatte broker-URL'en, samtidig med at Ultimate Multisite's tokenvalidering bevares.

Dupliker ikke medlemskab, faktura, faktureringsadresse, skabelon eller domæneadministrationstilstand inde i den suveræne tenant. Betragt tenant-dashboardet som launcheren og kundepanelet på hovedsiden som system of record for administrerede handlinger.

## Migreringsverificering

Når en migrering eller livscyklusintegration ændrer tenant-data, skal verificeringsgates køres:

- `wp tenant verify-no-legacy --site=<site-id>` bekræfter, at tenant ikke længere afhænger af ældre stier på netværkssiden.
- `wp tenant verify-sovereign-push --site=<site-id>` bekræfter, at suveræne push-jobs kan behandle og tømmes.

Integrationer bør behandle mislykket verificering som en deployment-blokering og undgå at markere en tenant som live, indtil fejlen er løst.

## Sletning af tenant

Sletningsflows bør kalde tilføjelsens teardown-sti, så tenant-databaselegitimationsoplysninger ryddes op. Eksterne integrationer kan fjerne udbyderressourcer, efter teardown er lykkedes, men bør ikke slette host-databaser eller mapper, mens verificering eller asynkrone push-jobs stadig kører.

## Forældet databaserouter

Den ældre `Database_Router` er blevet erstattet af en deprecation-stub. Nye integrationer bør finde tenants via de aktuelle site-router- og tenant-register-API'er i stedet for at afhænge af den gamle router-klasse.
