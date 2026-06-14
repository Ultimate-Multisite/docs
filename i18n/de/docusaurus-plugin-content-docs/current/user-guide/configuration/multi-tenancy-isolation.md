---
title: Multi-Tenant-Isolation
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-Tenancy Isolation

Ultimate Multisite: Multi-Tenancy 1.2.0 unterstützt die Datenbank- und Dateisystemisolation pro Subsite für souveräne Mieter. Dies hält die Kundendaten getrennt, während die Netzwerkbereitstellung, Abrechnung und Verwaltung beibehalten werden.

## Isolationsstrategie

Verwenden Sie die souveräne Isolation für Kunden, die eine stärkere Datenabtrennung, dedizierten Dateisystemspeicher oder eine separate Host-Grenze benötigen.

Jeder souveräne Mieter sollte Folgendes haben:

- Eine dedizierte Datenbank oder eine Strategie mit Datenbankpräfixen, die vom Host genehmigt wurde.
- Einen dedizierten Wurzelpfad für das Dateisystem des Mieters.
- Einen Eintrag im Mieterregister, der die Site mit ihrer Datenbank, dem Wurzelpfad, dem Hostnamen und dem Isolationsmodell verknüpft.
- Ein Migrationsverifizierungsresultat, bevor der Mieter als live betrachtet wird.

## Datenbankhostbindung

Version 1.2.0 ändert das Standardverhalten der Hostbindung auf derselben Maschine für souveräne Installationen. Gleiche Maschinenwerte wie `localhost` werden normalisiert, sodass Bedrock, FrankenPHP und containerisierte WordPress-Installationen Berechtigungen gegenüber dem tatsächlichen MySQL-Hoststring gewähren und überprüfen können.

Wenn Sie einen souveränen Mieter konfigurieren:

1. Stellen Sie den Datenbankhost auf den Wert ein, den die Laufzeitumgebung des Mieters erfordert.
2. Verwenden Sie `localhost` für lokale Socket-Installationen, wenn der Host lokale Verbindungen erwartet.
3. Verwenden Sie `127.0.0.1` oder einen Dienstnamen nur dann, wenn der Datenbankserver diesem Host Berechtigungen gewährt.
4. Führen Sie die Migrationsverifizierung nach Änderung der Hostbindung aus.

Wenn die Verifizierung Fehler bei den Berechtigungen meldet, vergleichen Sie die Benutzerberechtigungen der Mieterdatenbank mit der konfigurierten Hostbindung. Ein für `user@localhost` gewährter Benutzer unterscheidet sich von `user@127.0.0.1` oder `user@%`.

## Dateisystemwurzel

Die Root des Tenants sollte über Neustarts und Deployments stabil sein. Vermeiden Sie temporäre Mount-Pfade. Bei Bedrock-Installationen stellen Sie sicher, dass die Tenant-Root auf die WordPress-Web-Root verweist, die vom Tenant Bootstrap erwartet wird, und nicht nur auf das Projekt-Root.

## Bereitstellungsreihenfolge

Für neue souveräne Tenants verwenden Sie diese Reihenfolge:

1. Erstellen des Eintrags im Tenant Registry.
2. Erstellung der Tenant-Datenbank und des Datenbankbenutzers.
3. Bootstrap des Tenant-Schemas.
4. Bereitstellung der Tenant-Benutzer.
5. Konfiguration der Tenant-Dateisystempfade.
6. Ausführen der Migrationsüberprüfung.
7. Umschalten der Routen oder DNS nach erfolgreicher Überprüfung.

Diese Reihenfolge verhindert, dass teilweise isolierte Tenants Traffic erhalten, bevor die Datenbankwriter, Benutzer und das Dateisystem bereit sind.

## Workflows für souveräne Kundenverwaltung

Ultimate Multisite v2.13.0 führt Kundenverwaltungsaktionen auf der Hauptseite aus, wenn der souveräne Modus aktiviert ist. Ein Tenant kann immer noch als isolierte WordPress-Installation laufen, aber kundenorientierte Aktionen, die von Netzwerkabrechnung, Mitgliedschaft oder Daten gemeinsamer Konten abhängen, sollten den Kunden anstelle des Versuchs, die Aktion innerhalb der Tenant-Runtime abzuschließen, zur Hauptseite zurücksenden.

Der Hauptseiten-Workflow gilt für:

- Checkout und Planänderungen.
- Kontoübersicht und Aktionen zum Kundenprofil.
- Aktualisierungen der Rechnungsadresse und Zahlungsmanagement-Bildschirme.
- Ansichten von Rechnungen und Zahlungshistorien.
- Seitenverwaltungsaktionen wie das Hinzufügen oder Löschen von Seiten.
- Vorlagenwechsel.
- Domain-Mapping und Änderungen der primären Domain.

Wenn ein Kunde eine dieser Aktionen von einem souveränen Tenant aus startet, erstellt Ultimate Multisite die entsprechende Hauptseiten-URL und speichert den Quelltenant als Rückkehrsziel, wenn dies sicher möglich ist. Das ermöglicht Kunden, die verwaltete Aktion anhand der Netzwerkaufzeichnungen abzuschließen und dann in den Tenant-Kontext zurückzukehren, ohne dass die Abrechnung oder der Mitgliedschaftszustand in der souveränen Datenbank dupliziert werden müssen.

Für Betreiber gilt die praktische Regel: Halten Sie die Seiten für Abrechnung, Konto, Checkout, Rechnung, Vorlage und Domänenverwaltung auf der Hauptseite für souveräne Netzwerke verfügbar. Tenant-Dashboards können zu diesen Seiten verlinken, aber die Hauptseite bleibt die Quelle der Wahrheit für die Aktion.
