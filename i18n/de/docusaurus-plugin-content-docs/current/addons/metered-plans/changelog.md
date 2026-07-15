---
title: Änderungsprotokoll für verbrauchsabhängige Tarife
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Changelog für nutzungsabhängige Tarife

Version 1.1.0 - Veröffentlicht am 2026-05-05
- Neu: AI-Token-Abrechnung für Multisite-Subsites — AI-Token-Nutzung über Kundenseiten hinweg verfolgen und mit konfigurierbaren Raten pro Token abrechnen
- Neu: Connector-Durchsetzung mit dynamischer Limit-Erkennung und Write-through neu aufgebaut, wodurch Echtzeitgenauigkeit über alle Connectors hinweg sichergestellt wird
- Fix: Datenbanktabellen-Upgrades sind jetzt korrekt an BerlinDB-Schemadefinitionen ausgerichtet, wodurch Upgrade-Fehler bei Neuinstallationen verhindert werden
- Fix: Datenbank-Upgrade-Callbacks wurden in das korrekte Format konvertiert, wodurch stille Upgrade-Fehler behoben werden
- Fix: Bruchwerte werden jetzt im Eingabefeld für den AI-Nutzungsaufschlag akzeptiert
- Fix: Fatale Fehler und Probleme mit doppelter Initialisierung beim Laden des Plugins behoben
- Verbessert: check-env-npm-Skript hinzugefügt, damit Entwicklerumgebungen sich beim ersten Ausführen selbst konfigurieren

### 1.0.3 {#103}
* Auf Plugin Update Checker v5 aktualisiert
* Moderne WordPress-Plugin-Header hinzugefügt
* Kompatibilität mit den neuesten WordPress-Versionen verbessert
* Leistung der Nutzungsverfolgung verbessert

### 1.0.2 {#102}
* Fehlerbehebungen und Leistungsverbesserungen
* Verbesserte Nutzungsberichte

### 1.0.0 {#100}
* Erstveröffentlichung
* Kernfunktionalität für nutzungsabhängige Abrechnung
* Nutzungsverfolgung und Berechnung von Mehrnutzung
* Automatische Rechnungserstellung
