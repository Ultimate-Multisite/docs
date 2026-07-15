---
title: Workflow für die souveräne Migration
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migration Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0 fügt Migrationsprüfungsstellen hinzu, um einen Standard-Subsite in die Infrastruktur eines souveränen Tenants zu verschieben.

## Bevor Sie beginnen {#before-you-start}

Stellen Sie sicher, dass Sie Folgendes haben:

- Ein aktuelles Backup der Quellseite.
- Das Multi-Tenancy Addon ist aktiv.
- Die Zieltenant-Datenbank, das Dateisystem-Root und die Domain sind bereit.
- Eine Datenbank-Hostbindung, die mit der Zielumgebung übereinstimmt.
- Zugriff auf WP-CLI-Befehle für das Netzwerk.

## Empfohlener Workflow {#recommended-workflow}

1. Bereiten Sie die Zieltenant-Datenbank und das Dateisystem vor.
2. Registrieren oder aktualisieren Sie die Einstellungen zur Tenant-Isolation.
3. Führen Sie die Tenant-Migration durch.
4. Richten oder verifizieren Sie die Tenant-Benutzer.
5. Entleeren Sie asynchrone Migrationsjobs.
6. Führen Sie die souveräne Migrationsprüfung durch.
7. Besuchen Sie den Tenant mit SSO.
8. Wechseln Sie DNS oder Routing erst nach erfolgreicher Überprüfung vor.

## Verifizierungsstellen {#verification-gates}

Der Verifizierungsworkflow prüft die Migration aus verschiedenen Blickwinkeln:

- Das Schema des Tenants existiert und kann vom Datenbankwriter des Tenants geschrieben werden.
- Der konfigurierte Datenbank-Host hat gültige Berechtigungen.
- Die Tenant-Benutzer sind vorhanden und stimmen mit der erwarteten Anzahl von souveränen Installationsbenutzern überein.
- Die asynchrone Push-Warteschlange kann erfolgreich geleert werden.
- Legacy Netzwerk-seitige Datenpfade sind für den souveränen Tenant nicht mehr erforderlich.

Behandeln Sie Verifizierungsfehler als Blockaden vor dem Start. Beheben Sie das gemeldete Problem mit der Datenbank, dem Benutzer, der Warteschlange oder dem Routing und führen Sie die Überprüfung dann erneut durch, bevor Sie den Tenant Kunden zur Verfügung stellen.

## Erste Produktionsbesuch {#first-production-visit}

Nachdem die Verifizierung erfolgreich war, verwenden Sie **Besuch (SSO)** aus dem Seitenverwaltungsbildschirm für den ersten Admin-Besuch. Dies bestätigt das Tenant-Routing, die SSO-Token-Handhabung, das Origin Pinning und die Benutzerbereitstellung auf der Tenant-Seite in einem kontrollierten Schritt.
