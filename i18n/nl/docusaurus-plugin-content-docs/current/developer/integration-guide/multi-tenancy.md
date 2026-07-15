---
title: Multi-tenancy-integratie
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy-integratie

Ultimate Multisite: Multi-Tenancy 1.2.0 wijzigt verschillende integratiepunten voor soevereine tenants, migratieverificatie en automatisering van de tenant-levenscyclus.

## Tenant-bootstrapflow {#tenant-bootstrap-flow}

Integraties die tenants aanmaken of wijzigen, moeten deze volgorde volgen:

1. Los het tenant-registerrecord en het isolatiemodel op.
2. Maak of verifieer de tenant-databaseschrijver.
3. Bootstrap het tenant-schema.
4. Voorzie tenant-gebruikers.
5. Registreer tenant-routering en bestandssysteempaden.
6. Voer migratieverificatie uit voordat de tenant beschikbaar wordt gemaakt.

Ga er niet van uit dat een soevereine tenant de netwerkdatabaseverbinding kan hergebruiken. Gebruik het tenant-register en de schrijversabstracties die door de addon worden geleverd.

## SSO- en REST-hooks {#sso-and-rest-hooks}

Stateless tenant-autologin gebruikt kortlevende tokens met een purpose-claim, JTI-replaybescherming, een vervallimiet en origin-pinning. Integraties die login-knoppen of links voor extern beheer toevoegen, moeten tenant-bezoeken genereren via de ondersteunde SSO-flow in plaats van tenant-login-URL's rechtstreeks samen te stellen.

API-auditgebeurtenissen aan netwerkzijde en dagelijkse samenvattingen zijn beschikbaar voor soevereine tenant-gateways. Gebruik die logs bij het debuggen van externe systemen die tenant-levenscyclus-endpoints aanroepen.

## Actie-URL's voor soevereine klanten {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 routeert klantacties voor soevereine tenants terug naar de hoofdsite voor account-, checkout-, facturering-, factuur-, site-, template-wissel- en domeinmappingflows. Integraties die beheerlinks aan tenant-zijde weergeven, moeten die acties naar het klantpaneel van de hoofdsite laten verwijzen en een gevalideerd terugkeerdoel opnemen wanneer de gebruiker na het voltooien van de actie terug naar de tenant moet kunnen navigeren.

Gebruik de core SSO-wrapper voor cross-domain-beheerlinks:

```php
$url = wu_with_sso($main_site_customer_url);
```

De gegenereerde URL blijft filterbaar via `wu_sso_url`, die de SSO-URL, huidige gebruiker, doel-site-ID en redirect-context ontvangt. Add-ons kunnen dat filter gebruiken om providerspecifieke context toe te voegen of om de broker-URL te vervangen terwijl de tokenvalidatie van Ultimate Multisite behouden blijft.

Dupliceer geen membership-, factuur-, factuuradres-, template- of domeinbeheerstatus binnen de soevereine tenant. Behandel het tenant-dashboard als de launcher en het klantpaneel van de hoofdsite als de system of record voor beheerde acties.

## Migratieverificatie {#migration-verification}

Nadat een migratie- of levenscyclusintegratie tenant-gegevens wijzigt, voer je de verificatiepoorten uit:

- `wp tenant verify-no-legacy --site=<site-id>` bevestigt dat de tenant niet langer afhankelijk is van legacy paden aan netwerkzijde.
- `wp tenant verify-sovereign-push --site=<site-id>` bevestigt dat soevereine push-taken kunnen verwerken en leeg kunnen lopen.

Integraties moeten mislukte verificatie behandelen als een blokkade voor deployment en vermijden een tenant live te markeren totdat de fout is opgelost.

## Tenant-verwijdering {#tenant-deletion}

Verwijderingsflows moeten het teardown-pad van de addon aanroepen, zodat tenant-databasegegevens worden opgeschoond. Externe integraties mogen providerresources verwijderen nadat teardown is geslaagd, maar mogen geen hostdatabases of mappen verwijderen terwijl verificatie of asynchrone push-taken nog actief zijn.

## Verouderde databaserouter {#deprecated-database-router}

De legacy `Database_Router` is vervangen door een deprecation-stub. Nieuwe integraties moeten tenants oplossen via de huidige site-router en tenant-register-API's in plaats van afhankelijk te zijn van de oude routerklasse.
