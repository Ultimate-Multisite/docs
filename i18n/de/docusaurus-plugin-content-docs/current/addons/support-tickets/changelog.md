---
title: Support-Tickets Änderungsprotokoll
sidebar_position: 99
_i18n_hash: 91c4823bf40d597f272f50b6de5d3c98
---
# Support-Ticket-Changelog

### 1.0.2 - 2025-12-11
* Hinzugefügt: Vollständige Ticket-Anzeige-Funktionalität für Admin und Frontend
* Hinzugefügt: AJAX-Handler für Ticket-Antwort-Übermittlungen
* Hinzugefügt: Unterstützung für Ticket-Antwort-Funktionalität mit korrekter Formularbehandlung
* Hinzugefügt: Korrekte Anzeige von Benachrichtigungen für Ticket-Übermittlungen und Antworten im Admin-Bereich
* Hinzugefügt: Automatische Ticketzuordnung zum aktuellen Benutzer bei selbstständigen Kunden-Übermittlungen
* Hinzugefügt: Sicherheitsverbesserung, um zu verhindern, dass Kunden die Ticket-Eigentümerschaft überschreiben
* Hinzugefügt: Fehlende Hilfsfunktionen (wu_format_date, wu_user_can_view_ticket, etc.)
* Hinzugefügt: Korrektes Herunterladen und Verarbeiten von Dateianhängen
* Hinzugefügt: E-Mail-Benachrichtigungssystem für Ticket-Antworten und Statusänderungen
* Behebt: Ticket-Antwortformular enthält jetzt die notwendige Ticket-ID
* Behebt: Sichtbarkeitsprobleme bei Benachrichtigungen in Admin-Ticket-Ansichten
* Behebt: Syntaxfehler in Support-Ticket-Funktionen
* Verbessert: Datenbankstruktur mit korrekten Abfrage- und Schema-Klassen für Antworten und Anhänge
* Verbessert: Migration zu echten Eigenschaften anstelle von Attributen für Ticket-Modelle

### 1.0.1 - 2025-09-28
* Aktualisiert: Präfix in ultimate-multisite für Konsistenz umbenannt
* Aktualisiert: Standardisierung des Textdomains
* Behebt: Kleinere Fehlerbehebungen und Verbesserungen

### 1.0.0 - 2025-09-01
* Erstveröffentlichung
* Vollständiges Ticket-Management-System
* Mehrstufige Zugriffskontrolle
* Threaded-Konversationssystem
* Unterstützung von Dateianhängen
* E-Mail-Benachrichtigungssystem
* Admin- und Kundeninterfaces
* Statistiken und Berichte
