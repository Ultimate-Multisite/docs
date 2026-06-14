---
title: Souveräne Migrationsverifizierung
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Überprüfung

Ultimate Multisite: Multi-Tenancy 1.2.0 enthält WP-CLI Verifizierungscodes für Migrations von souveränen Tenants. Verwenden Sie diese Befehle, wenn eine Tenantmigration, ein SSO-Besuch oder eine isolierte Installation nicht wie erwartet funktioniert.

## Befehle zum Ausführen

Führen Sie die Überprüfung von der WordPress-Installation im Netzwerk aus:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Verwenden Sie die Site ID des Tenants, den Sie migrieren. Der erste Befehl prüft, ob der Tenant nicht mehr von Legacy-Netzwerkdaten abhängt. Der zweite Befehl überprüft, ob souveräne Push-Jobs verarbeitet und entleert werden können.

## Häufige Fehler

### Datenbankberechtigungen stimmen nicht mit dem Host überein

Wenn die Überprüfung Berechtigungsprobleme oder Writer-User-Fehler meldet, überprüfen Sie den konfigurierten Datenbankhost. `localhost`, `127.0.0.1` und ein Container-Dienstname sind unterschiedliche MySQL-Berechtigungs-Hosts. Aktualisieren Sie dann die Tenant-Hostbindung oder die Datenbankberechtigungen und führen Sie die Überprüfung erneut aus.

### Bedrock- oder lokale Installationen können nicht verbinden

Bedrock- und lokale Socket-Installationen geben möglicherweise als Datenbank `localhost` an, während die Laufzeit über eine normalisierte Adresse verbindet. Version 1.2.0 normalisiert Host-Strings auf derselben Maschine, aber benutzerdefinierte Host-Überschreibungen können immer noch mit den Datenbankberechtigungen kollidieren.

### Die asynchrone Push-Warteschlange wird nicht geleert

Wenn `verify-sovereign-push` nicht abgeschlossen ist, überprüfen Sie Action Scheduler oder den konfigurierten asynchronen Runner. Leeren Sie fehlgeschlagene Jobs erst, nachdem Sie bestätigt haben, dass sie sicher neu gestartet oder verworfen werden können.

### Die Benutzeranzahl des Tenants ist falsch

Die Migration sollte Benutzer für den souveränen Tenant bereitstellen. Wenn der erwartete Installationsbenutzer fehlt, führen Sie den Schritt zur Benutzerbereitstellung erneut aus, bevor Sie SSO erneut versuchen.

### SSO-Besuch wird abgelehnt

Der statische Tenant-Autologin erfordert, dass die Tenant-Domain, der Origin Pin, der Token-Zweck, der Nonce und das Ablaufdatum übereinstimmen. Bestätigen Sie, dass die URL des Tenants korrekt ist, und versuchen Sie sich kurz nach Erstellung des SSO-Besuchs anzumelden.

## Wann neu versuchen?

Versuchen Sie die Überprüfung nach jeder Infrastrukturänderung erneut. Wechseln Sie den Produktionsverkehr nicht, löschen Sie die Quelldaten oder entfernen Sie Migrationsanmeldeinformationen, bis alle Überprüfungschecks bestanden sind.
