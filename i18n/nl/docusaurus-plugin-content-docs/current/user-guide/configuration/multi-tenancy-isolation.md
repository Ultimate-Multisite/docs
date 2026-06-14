---
title: Multi-tenant isolatie
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-tenant Isolatie

Ultimate Multisite: Multi-Tenancy 1.2.0 ondersteunt per-subsite database- en bestandssysteemisolatie voor soevereine tenants. Dit houdt tenantdata gescheiden terwijl netwerkgebaseerde provisioning, facturering en beheer behouden blijven.

## Isolatiestrategie

Gebruik soevereine isolatie voor klanten die een sterkere gegevensscheiding, dedicated opslagruimte voor het bestandssysteem of een aparte hostgrens vereisen.

Elke soevereine tenant moet hebben:

- Een dedicated tenant database of een strategie met een databaseprefix die door de host is goedgekeurd.
- Een dedicated tenant filesystem root.
- Een registry-entry van de tenant die de site koppelt aan zijn database, rootpad, hostname en isolatiemodel.
- Een migratieverificatie-resultaat voordat de tenant als live wordt beschouwd.

## Database host binding

Versie 1.2.0 wijzigt het standaard gedrag voor dezelfde machine hostbinding bij soevereine installaties. Dezelfde machine waarden zoals `localhost` worden genormaliseerd zodat Bedrock, FrankenPHP en containerized WordPress installaties rechten kunnen verlenen en verifiëren tegen de hoststring die MySQL daadwerkelijk ziet.

Bij het configureren van een soevereine tenant:

1. Stel de databasehost in op de waarde die door de tenant runtime wordt vereist.
2. Gebruik `localhost` voor lokale socket installaties wanneer de host lokale verbindingen verwacht.
3. Gebruik `127.0.0.1` of een service-hostname alleen als de database-server privileges aan die host verleent.
4. Voer migratieverificatie uit nadat u de hostbinding heeft gewijzigd.

Als de verificatie rapportage fouten in de rechten aangeeft, vergelijk dan de gebruikersrechten van de tenantdatabase met de ingestelde hostbinding. Een gebruiker die is toegekend voor `user@localhost` is anders dan `user@127.0.0.1` of `user@%`.

## Filesystem root

De root van de huurder moet stabiel zijn na herstarts en deployments. Vermijd tijdelijke mount paden. Voor Bedrock-stijl installaties, bevestig dat de tenant root wijst naar de WordPress webroot die verwacht wordt door de tenant bootstrap, niet alleen naar de project root.

## Provisioneringsvolgorde

Voor nieuwe soevereine tenants gebruik je deze volgorde:

1. Maak het entry in de tenant registry aan.
2. Maak de tenant database en de database gebruiker aan.
3. Bootstrap de tenant schema.
4. Provisioneer tenant gebruikers.
5. Configureer de filesystem paden van de tenant.
6. Voer migratieverificatie uit.
7. Schakel routing of DNS om na succesvolle verificatie.

Deze volgorde voorkomt dat gedeeltelijk geïsoleerde tenants verkeer ontvangen voordat de databasewriter, gebruikers en het bestandssysteem klaar zijn.

## Sovereign klantbeheersingsflows

Ultimate Multisite v2.13.0 houdt klantbeheersingsacties op de hoofdwebsite vast wanneer soevereine modus is ingeschakeld. Een tenant kan nog steeds als een geïsoleerde WordPress-installatie draaien, maar klantgerichte acties die afhankelijk zijn van netwerkfacturering, lidmaatschappen of gedeelde accountgegevens moeten de klant terugsturen naar de hoofdwebsite in plaats van proberen de actie binnen de runtime van de tenant af te ronden.

De flow voor de hoofdwebsite geldt voor:

- Checkout en planwijzigingen.
- Overzicht van het account en acties voor het klantprofiel.
- Updates van factuuradressen en schermen voor betalingsbeheer.
- Weergaven van facturen en betalingsgeschiedenis.
- Beheersacties zoals het toevoegen of verwijderen van sites.
- Template-wisselingen.
- Domeinmapping en wijzigingen in de primaire domeinnaam.

Wanneer een klant een van deze acties start vanuit een soeverein tenant, bouwt Ultimate Multisite de bijbehorende hoofdsite URL en behoudt de brontenant als terugkerend doel wanneer dit veilig kan gebeuren. Dit stelt klanten in staat om de beheerde actie af te ronden tegen de netwerkgegevens, en vervolgens terug te keren naar de tenantcontext zonder facturatie- of lidmaatschapsstatus dubbel vast te leggen in de soevereine database.

Voor operators is de praktische regel: houd de pagina's voor facturatie, accountbeheer, afrekening, factuur, template en domeinbeheer beschikbaar op de hoofdsite voor soevereine netwerken. Tenant dashboards kunnen naar die pagina's linken, maar de hoofdsite blijft de bron van waarheid voor de actie.
