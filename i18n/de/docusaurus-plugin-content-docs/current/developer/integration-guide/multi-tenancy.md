---
title: Multi-Tenancy-Integration
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy-Integration

Ultimate Multisite: Multi-Tenancy 1.2.0 ändert mehrere Integrationsberührungspunkte für souveräne Tenants, Migrationsverifizierung und Automatisierung des Tenant-Lebenszyklus.

## Tenant-Bootstrap-Ablauf

Integrationen, die Tenants erstellen oder ändern, sollten diese Reihenfolge einhalten:

1. Den Tenant-Registrierungsdatensatz und das Isolationsmodell auflösen.
2. Den Tenant-Datenbank-Writer erstellen oder verifizieren.
3. Das Tenant-Schema bootstrappen.
4. Tenant-Benutzer bereitstellen.
5. Tenant-Routing und Dateisystempfade registrieren.
6. Die Migrationsverifizierung ausführen, bevor der Tenant verfügbar gemacht wird.

Gehe nicht davon aus, dass ein souveräner Tenant die Netzwerk-Datenbankverbindung wiederverwenden kann. Verwende die vom Add-on bereitgestellten Tenant-Registry- und Writer-Abstraktionen.

## SSO- und REST-Hooks

Statusloser Tenant-Autologin verwendet kurzlebige Tokens mit einem Purpose-Claim, JTI-Replay-Schutz, einer Ablaufobergrenze und Origin-Pinning. Integrationen, die Login-Buttons oder Remote-Verwaltungslinks hinzufügen, sollten Tenant-Besuche über den unterstützten SSO-Ablauf generieren, anstatt Tenant-Login-URLs direkt zu erstellen.

Netzwerkseitige API-Audit-Events und tägliche Zusammenfassungen sind für souveräne Tenant-Gateways verfügbar. Verwende diese Protokolle beim Debuggen externer Systeme, die Tenant-Lebenszyklus-Endpoints aufrufen.

## Aktions-URLs für souveräne Kunden

Ultimate Multisite v2.13.0 leitet Kundenaktionen von souveränen Tenants zurück zur Haupt-Site für Account-, Checkout-, Abrechnungs-, Rechnungs-, Site-, Template-Wechsel- und Domain-Mapping-Abläufe. Integrationen, die tenantseitige Verwaltungslinks rendern, sollten diese Aktionen auf das Kundenpanel der Haupt-Site verweisen lassen und ein validiertes Rückkehrziel einschließen, wenn der Benutzer nach Abschluss der Aktion zurück zum Tenant navigieren können soll.

Verwende den Core-SSO-Wrapper für domainübergreifende Verwaltungslinks:

```php
$url = wu_with_sso($main_site_customer_url);
```

Die generierte URL bleibt über `wu_sso_url` filterbar, das die SSO-URL, den aktuellen Benutzer, die Ziel-Site-ID und den Weiterleitungskontext erhält. Add-ons können diesen Filter verwenden, um anbieterspezifischen Kontext anzuhängen oder die Broker-URL zu ersetzen, während die Token-Validierung von Ultimate Multisite erhalten bleibt.

Dupliziere keine Mitgliedschafts-, Rechnungs-, Rechnungsadress-, Template- oder Domain-Verwaltungszustände innerhalb des souveränen Tenants. Behandle das Tenant-Dashboard als Starter und das Kundenpanel der Haupt-Site als führendes System für verwaltete Aktionen.

## Migrationsverifizierung

Nachdem eine Migration oder Lebenszyklusintegration Tenant-Daten ändert, führe die Verifizierungs-Gates aus:

- `wp tenant verify-no-legacy --site=<site-id>` bestätigt, dass der Tenant nicht mehr von alten netzwerkseitigen Pfaden abhängt.
- `wp tenant verify-sovereign-push --site=<site-id>` bestätigt, dass souveräne Push-Jobs verarbeitet und geleert werden können.

Integrationen sollten eine fehlgeschlagene Verifizierung als Bereitstellungsblocker behandeln und vermeiden, einen Tenant als live zu markieren, bis der Fehler behoben ist.

## Tenant-Löschung

Löschabläufe sollten den Teardown-Pfad des Add-ons aufrufen, damit Tenant-Datenbank-Zugangsdaten bereinigt werden. Externe Integrationen können Anbieterressourcen entfernen, nachdem der Teardown erfolgreich war, sollten jedoch keine Host-Datenbanken oder Ordner löschen, solange Verifizierung oder asynchrone Push-Jobs noch laufen.

## Veralteter Datenbank-Router

Der alte `Database_Router` wurde durch einen Deprecation-Stub ersetzt. Neue Integrationen sollten Tenants über die aktuellen Site-Router- und Tenant-Registry-APIs auflösen, anstatt von der alten Router-Klasse abzuhängen.
