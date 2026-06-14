---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 fügt eine Hostinger Multi-Tenancy-Funktionalität hinzu, sodass gehostete Domains neben der bestehenden Hostinger Domain-Mapping-Integration an der Bereitstellung souveräner Mieter teilnehmen können.

Nutzen Sie diese Funktionalität, wenn Tenant-Domains und isolierte Tenant-Infrastruktur über das Hostinger hPanel verwaltet werden.

## Einrichtungshinweise

1. Konfigurieren Sie die Kernintegration von Hostinger unter **Ultimate Multisite > Settings > Host Integrations**.
2. Bestätigen Sie, dass der Hostinger API-Token die Zieldomain oder Unterdomain verwalten kann.
3. Aktivieren Sie das Multi-Tenancy Addon.
4. Konfigurieren Sie die Isolierungsstrategie für den Tenant vor der Veröffentlichung des Tenants.
5. Führen Sie den Migrationsverifizierungs-Workflow aus, bevor Produktionsverkehr auf den Tenant gesendet wird.

Die Hostinger-Funktionalität verwendet die gemeinsame Hostinger-Verbindung für hostseitige Operationen. Die DNS muss weiterhin auf das korrekte Hostinger-Konto zeigen, und die Kontogrenzen von hPanel gelten weiterhin.

## Funktionalitätsabhängige Änderungen

- Souveräne Tenants können mit hostbewussten Domänenoperationen erstellt werden.
- Datenbankhost-Strings auf derselben Maschine werden vor der Berechtigungsprüfung normalisiert.
- Hostinger verwaltete Tenants sollten den in hPanel angezeigten Datenbankhostwert verwenden, es sei denn, die WordPress-Runtime erfordert eine lokale Überschreibung.
- SSO-Besuche basieren darauf, dass die Tenant-Domain auf den von Hostinger gehosteten Tenant aufgelöst wird.

## Fehlerbehebung bei Hostinger Tenants

- Wenn die Installation eines Tenants fehlschlägt, überprüfen Sie, ob die Domain bereits an das Hostinger-Konto gebunden ist.
- Wenn die Datenbankverifizierung fehlschlägt, vergleichen Sie den Benutzernamen der Tenant-Datenbank, den Datenbanknamen und die Hostbindung mit hPanel.
- Wenn **Visit (SSO)** fehlschlägt, bestätigen Sie, dass DNS und SSL für die Tenant-Domain aktiv sind.
- Wenn das Aufräumen von Ressourcen nach dem Teardown Reste hinterlässt, entfernen Sie alle verbleibenden Datenbanken, Benutzer oder Ordner aus hPanel, nachdem Sie die Backups bestätigt haben.
