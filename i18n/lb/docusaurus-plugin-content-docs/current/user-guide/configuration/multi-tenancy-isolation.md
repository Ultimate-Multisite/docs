---
title: Multi-Tenant Isolierig
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-Tenancy Isolation

Ultimate Multisite: Multi-Tenancy 1.2.0 unterstützt per-subsite Datenbank- und Dateisystemisolation für souveräne Mieter. Das hält die Kundendaten getrennt, während Provisionierung auf Netzwerkebene, Abrechnung und Administration erhalten bleibt.

## Isolationsstrategie {#isolation-strategy}

Verwendet Sie souveräne Isolation für Kunden, die eine stärkere Datenabtrennung, dedizierten Dateisystemspeicher oder eine separate Host-Grenze benötigen.

Jeder souveräne Mieter sollte Folgendes haben:

- Eine dedizierte Datenbank des Mieters oder eine Strategie mit Datenbankpräfixen, die vom Host genehmigt wurde.
- Einen dedizierten Dateisystem-Root für den Mieter.
- Einen Eintrag im Tenant Registry, der die Seite mit ihrer Datenbank, dem Root-Pfad, dem Hostnamen und dem Isolationsmodell verknüpft.
- Ein Migrationsverifizierungsresultat, bevor der Mieter als live betrachtet wird.

## Datenbankhostbindung {#database-host-binding}

Version 1.2.0 ändert das Standardverhalten der gleichen Maschinen Hostbindung für souveräne Installationen. Gleiche Maschinenwerte wie `localhost` werden normalisiert, sodass Bedrock, FrankenPHP und containerisierte WordPress-Installationen Berechtigungen gegenüber dem tatsächlichen MySQL-Hoststring gewähren und verifizieren können.

Wenn Sie einen souveränen Mieter konfigurieren:

1. Stellen Sie den Datenbankhost auf den Wert ein, den die Laufzeitumgebung des Mieters benötigt.
2. Verwenden Sie `localhost` für lokale Socket-Installationen, wenn der Host lokale Verbindungen erwartet.
3. Verwenden Sie `127.0.0.1` oder einen Dienstnamen nur dann, wenn der Datenbankserver diesem Host Berechtigungen gewährt.
4. Führen Sie die Migrationsverifizierung nach Änderung der Hostbindung aus.

Wenn die Verifizierung Fehler bei den Berechtigungen meldet, vergleichen Sie die Benutzerberechtigungen der Mieterdatenbank mit der konfigurierten Hostbindung. Ein für `user@localhost` gewährter Benutzer ist anders als ein für `user@127.0.0.1` oder `user@%` gewährter Benutzer.

## Dateisystem-Root {#filesystem-root}

De root van de huurder moet stabiel zijn na herstarts en deployments. Vermijd tijdelijke mount paden. Voor Bedrock-stijl installaties, bevestig dat de tenant root wijst naar de WordPress webroot die verwacht wordt door de tenant bootstrap, niet alleen naar de project root.

## Provisioneringsvolgorde {#provisioning-order}

Voor nieuwe soevereine huurders gebruik je deze volgorde:

1. Maak het entry in de tenant registry aan.
2. Maak de tenant database en de database gebruiker aan.
3. Bootstrap de tenant schema.
4. Provisioneer de tenant gebruikers.
5. Configureer de filesystem paden van de tenant.
6. Voer de migatieverificatie uit.
7. Schakel routing of DNS om na succesvolle verificatie.

Deze volgorde voorkomt dat gedeeltelijk geïsoleerde huurders verkeer ontvangen voordat de databasewriter, gebruikers en het bestandssysteem klaar zijn.

## Sovereign klantbeheersingsflows {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 houdt klantbeheersingsacties op de hoofdwebsite wanneer soevereine modus is ingeschakeld. Een tenant kan nog steeds als een geïsoleerde WordPress-installatie draaien, maar klantgerichte acties die afhankelijk zijn van netwerkfacturering, lidmaatschappen of gedeelde accountgegevens moeten de klant terugsturen naar de hoofdwebsite in plaats van proberen de actie binnen de tenant runtime af te ronden.

De flow voor de hoofdwebsite geldt voor:

- Checkout en planwijzigingen.
- Overzicht van het account en acties voor het klantprofiel.
- Updates van factuuradressen en betalingsbeheersingsschermen.
- Weergaven van facturen en betalingsgeschiedenis.
- Beheeracties zoals het toevoegen of verwijderen van websites.
- Template-wisselingen.
- Domeinmapping en wijzigingen in de primaire domeinnaam.

Wann de Kunde eine vo dene Aktionen us eme souveräne Tenant startet, baut Ultimate Multisite d'entsprechendi Haupt-Site URL uf und behaltet de Quelltenant als Rückkehrsziel, wenn das sicher isch. Das erlaubt de Kunde, d'verwalteti Aktion gege d'Netzwerkdate abzschlüsse, und kehrt denn zrugg in de Tenant-Kontext, ohni dass d'Rechnigs- oder Mitgliedschaftszustand im souveräne Database dupliziert wird.

Für Operator isch d'praktischi Regel: Halt d'Seiten für Rechnig, Konto, Checkout, Rechnung, Template und Domain-Management uf de Haupt-Site verfügbar für souveräni Netzwerke. Tenant-Dashboards chönne zu dene Site verlinke, aber d'Haupt-Site blibt immer d'Quelle vo de Aktion.
