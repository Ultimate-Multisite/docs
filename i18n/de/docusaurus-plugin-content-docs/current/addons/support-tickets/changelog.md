---
title: Support-Tickets-Änderungsprotokoll
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Support-Tickets-Änderungsprotokoll

### 1.0.4 - 2026-05-05
* Verbessert: vendor/-Verzeichnis aus der Git-Nachverfolgung entfernt (bereits durch .gitignore abgedeckt), wodurch die Repository-Größe reduziert wird
* Verbessert: Getestet bis WordPress 7.0

### 1.0.3 - 2026-05-01
* Korrektur: Nullwerte in nullbaren Ticket-Modell-Settern akzeptieren
* Korrektur: Alle Tickets in globalen netzwerkweiten Tabellen speichern, für korrekte Multisite-Unterstützung
* Korrektur: Mitarbeiterfelder ausblenden und Weiterleitung auf leere Seite im Kundenformular für neue Tickets beheben
* Korrektur: Undefinierte add_meta()-Aufrufe durch korrektes update_meta() für die Metadatenspeicherung ersetzen
* Korrektur: Nicht registrierte Berechtigungsprüfung durch korrektes wu_view_all_support_tickets ersetzen
* Korrektur: Fehlende AJAX-Handler für Ticketstatus-, Zuweisungs- und Schnellbearbeitungsaktionen hinzufügen
* Korrektur: Methodennamen für die Erkennung von Mitarbeiterantworten in Ticketansichten korrigieren
* Korrektur: Doppelte Antwort-Handler zusammenführen und Nonce-Aktionsnamen angleichen
* Korrektur: Fehlende Frontend-Ansicht für [wu_submit_ticket]-Shortcode hinzufügen
* Korrektur: Fehlende user_id-Spalte hinzufügen und Support_Ticket::get_user_id()-Methode beheben
* Korrektur: Zusätzliches doppeltes Anführungszeichen im Options-Tag des Prioritätsfilters entfernen
* Korrektur: Ticket-Verwaltungspanel im Netzwerk-Admin für Super-Admins hinzufügen
* Verbessert: Admin-CSS in einem einzigen externen Stylesheet zusammenführen
* Verbessert: Settings-Untermenü aus dem Admin-Menü der Unterseite entfernen
* Verbessert: Frontend-Assets nur auf Support-Ticket-Seiten bedingt laden
* Verbessert: Plugin-Autoloader überspringen, wenn der Bedrock-Root-Autoloader Abhängigkeiten bereits geladen hat

### 1.0.2 - 2025-12-11
* Hinzugefügt: Vollständige Ticket-Anzeigefunktionalität für Admin und Frontend
* Hinzugefügt: AJAX-Handler für das Einreichen von Ticket-Antworten
* Hinzugefügt: Unterstützung für Ticket-Antwortfunktionalität mit korrekter Formularverarbeitung
* Hinzugefügt: Korrekte Hinweisanzeige für Ticket-Einreichungen und Antworten im Admin
* Hinzugefügt: Automatische Ticket-Zuordnung zum aktuellen Benutzer für Selbst-Einreichungen von Kunden
* Hinzugefügt: Sicherheitsverbesserung, um zu verhindern, dass Kunden den Ticket-Besitz überschreiben
* Hinzugefügt: Fehlende Hilfsfunktionen (wu_format_date, wu_user_can_view_ticket usw.)
* Hinzugefügt: Korrekter Download und Umgang mit Dateianhängen
* Hinzugefügt: E-Mail-Benachrichtigungssystem für Ticket-Antworten und Statusänderungen
* Behoben: Ticket-Antwortformular enthält jetzt die notwendige Ticket-ID
* Behoben: Probleme mit der Sichtbarkeit von Hinweisen in Admin-Ticketansichten
* Behoben: Syntaxfehler in Support-Ticket-Funktionen
* Verbessert: Datenbankstruktur mit korrekten Abfrage- und Schema-Klassen für Antworten und Anhänge
* Verbessert: Migration zu echten Eigenschaften anstelle von Attributen für Ticket-Modelle

### 1.0.1 - 2025-09-28
* Aktualisiert: Präfix aus Konsistenzgründen in ultimate-multisite umbenannt
* Aktualisiert: Standardisierung der Textdomain
* Behoben: Kleinere Fehlerkorrekturen und Verbesserungen

### 1.0.0 - 2025-09-01
* Erstveröffentlichung
* Vollständiges Ticket-Verwaltungssystem
* Mehrstufige Zugriffskontrolle
* System für verschachtelte Konversationen
* Unterstützung für Dateianhänge
* E-Mail-Benachrichtigungssystem
* Admin- und Kundenschnittstellen
* Statistiken und Berichterstattung
