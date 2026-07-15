---
title: Soevereine Huurderoperaties
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operationen voor Soevereine Huurders

Ultimate Multisite: Multi-Tenancy 1.2.0 voegt operationele hulpmiddelen toe voor soevereine huurders: subsites die draaien met hun eigen database, bestandssysteemroot en routingcontext, terwijl ze nog steeds zichtbaar blijven voor de netwerkbeheerder.

Gebruik deze pagina bij het beheren van geïsoleerde klantlocaties, remote-site overdrachten of migraties waarbij een standaard subsite wordt verplaatst naar soevereine infrastructuur.

## Wat verandert er voor beheerders {#what-changes-for-administrators}

- **Stateless tenant autologin** — Netwerkbeheerders kunnen een soevereine huurder bezoeken zonder afhankelijk te zijn van langlopende gedeelde sessiestaten. De SSO token is doelgericht, bronvastgelegd (origin-pinned), replay-beschermd en beperkt tot een korte vervalduur.
- **Soeverein-bewuste routing** — Legacy geïsoleerde netwerken en soevereine huurders resolven via hetzelfde site router pad, wat de verschillen bij het opstarten tussen oude en nieuwe geïsoleerde installaties vermindert.
- **Geverifieerde migratiestatus** — Migratieverificatiecontrole controleert gebruikersprovisioning, database schrijferemissies, wachtrijontlosstatus en afwezigheid van legacy tabellen voordat een huurder als compleet wordt beschouwd.
- **Veiliger afbouw (teardown)** — Soevereine afbouw verwijdert nu de huurdergegevens schoon, zodat verwijderde huurders geen verouderde database-toegang achterlaten.

## Bezoeken van een soevereine huurder {#visiting-a-sovereign-tenant}

1. Open **Network Admin > Ultimate Multisite > Sites**.
2. Selecteer de soevereine huurder.
3. Gebruik **Bezoek (SSO)** wanneer beschikbaar in plaats van wachtwoorden te kopiëren of tijdelijke beheerdersaccounts aan te maken.

De bezoekstroom creëert een kortlevend login token voor die huurder en registreert het SSO-even in het auditspoor van de huurder. Als de knop faalt, controleer dan of het domein van de huurder overeenkomt met de verwachte installatie en dat de huurder de netwerk-side SSO endpoint kan bereiken.

## Checklist voor remote-site operaties {#remote-site-operations-checklist}

Voordat je een soevereine of remote huurder wijzigt, bevestig:

- Het domein van de huurder wijst naar de host die het bestandssysteem van de huurder beheert.
- De databasehost van de huurder komt overeen met de geconfigureerde hostbinding voor die installatie.
- De migratieverificatiecommando's slagen voor de huurder.
- Asynchrone migratielijsten worden geleegd voordat DNS- of eigendomswijzigingen worden doorgevoerd.
- De admin gebruiker van de huurder is tijdens de migratie geregistreerd en kan inloggen via SSO.

## Het verwijderen van soevereine tenants {#deleting-sovereign-tenants}

Het verwijderen van een soevereine tenant is destructief. Controleer eerst de back-up- en exportstatus, en verwijder vervolgens vanaf het scherm voor sitebeheer. De 1.2.0 teardown flow verwijdert de databasecredentials van de tenant als onderdeel van de opruiming, maar beheerders moeten nog steeds controleren of hostniveau databasegebruikers en mappen verdwenen zijn wanneer ze externe hostingpanels gebruiken.

:::warning
Verwijder een soevereine tenant niet terwijl de migratieverificatie nog loopt of terwijl asynchrone pushjobs in de wachtrij staan. Wacht tot de verificatie is voltooid, zodat teardown geen credentials verwijdert die nodig zijn voor lopende jobs.
:::
