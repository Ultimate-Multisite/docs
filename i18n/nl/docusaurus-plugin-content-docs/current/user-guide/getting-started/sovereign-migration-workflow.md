---
title: Soevereine Migratieflow
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migratie Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0 voegt migratieverificatiepoorten toe voor het verplaatsen van een standaard subsite naar sovereign tenant infrastructuur.

## Voordat je begint

Bevestig dat je het volgende hebt:

- Een actuele back-up van de bronwebsite.
- De Multi-Tenancy addon actief is.
- De doeltenant database, bestandssysteem root en domeinnaam klaar zijn.
- Een database hostbinding die overeenkomt met de doelomgeving.
- Toegang tot WP-CLI commando's voor het netwerk.

## Aanbevolen workflow

1. Bereid de doeltenant database en het bestandssysteem voor.
2. Registreer of update de tenantisolatiestellingen.
3. Voer de tenantmigratie uit.
4. Provisioneer of verifieer de tenant gebruikers.
5. Led de asynchrone migratiejobs leeg.
6. Voer de sovereign migratieverificatie uit.
7. Bezoek de tenant met SSO.
8. Schakel DNS of routing pas in na succesvolle verificatie.

## Verificatiepoorten

De verificatieworkflow controleert de migratie vanuit verschillende hoeken:

- Het schema van de tenant bestaat en kan worden geschreven door de database schrijver van de tenant.
- De geconfigureerde database host heeft geldige rechten.
- Tenant gebruikers zijn aanwezig en komen overeen met het verwachte aantal installatiegebruikers voor sovereign.
- De asynchrone push queue kan succesvol geleegd worden.
- Legacy netwerk-side data paths zijn niet langer vereist voor de sovereign tenant.

Behandel verificatiefouten als blokkerende factoren vóór de lancering. Herstel het gerapporteerde probleem met betrekking tot de database, gebruiker, queue of routing, en voer de verificatie opnieuw uit voordat je de tenant blootstelt aan klanten.

## Eerste productiebezoek

Nadat de verificatie is geslaagd, gebruik je **Bezoek (SSO)** vanaf het scherm voor sitebeheer voor het eerste adminbezoek. Dit bevestigt de tenantrouting, SSO token-afhandeling, origin pinning en tenant-side gebruikersprovisioning in één gecontroleerde stap.
