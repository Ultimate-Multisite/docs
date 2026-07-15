---
title: Changelog
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Änderungsprotokoll

## 1.18.0 — Veröffentlicht am 2026-06-29 {#1180--released-on-2026-06-29}

### Neu {#new}

- **Google Calendar-Tools** — konfigurierte Kalender und Ereignisse für zeitplanbewusste Automatisierungen lesen
- **Kontaktzuordnung und Teilnehmer-Helfer** — Kalenderteilnehmer mit Website-Benutzern und Kontakten abgleichen
- **Freigabeschranken durch Menschen und Erinnerungsdatensätze** — Automatisierungen zur Prüfung pausieren und doppelte Benachrichtigungen vermeiden
- **TextBee-SMS-Anbieter** — konfigurierte Textnachrichten-Benachrichtigungen über TextBee senden
- **Erweitertes Begleitpaket** — separat vom WordPress.org-Build bereitgestellte Tools für vertrauenswürdige Entwickler: Dateisystem, Datenbank, WP-CLI, REST-Dispatcher, Plugin-Builder, Git-Snapshot, Benutzerverwaltung und Benchmark

### Verbessert {#improved}

- **Einrichtung des verwalteten Superdav-Dienstes** — gehostete Dienst-Endpunkte und automatische Verbindungsbereitstellung für unterstützte Websites hinzufügen
- **Release-Paketierung** — separate Core- und Advanced-ZIP-Dateien erstellen, beide auf GitHub veröffentlichen und nur das Core-Paket an WordPress.org senden

### Behoben {#fixed}

- **Zuverlässigkeit von AI-Anfragen** — Modellauswahl, Anfrage-Timeouts, Standard-Einrichtungsmodell, Verarbeitung von Reasoning-Text und Wiederholungsanleitungen für ungültige Tool-Aufrufe verbessern
- **Härtung von Kalender und Erinnerungen** — Google Calendar-Tokens und Deduplizierung von Erinnerungen stärken
- **Onboarding und Fortsetzung nach Freigaben** — Starts des Frontend-Onboardings und Fortsetzungen bestätigter Fähigkeiten korrigieren
- **Prüfprobleme bei der WordPress.org-Paketierung** — Feedback aus der Paketierungsprüfung für das Core-Release adressieren

## 1.16.0 — Veröffentlicht am 2026-05-20 {#1160--released-on-2026-05-20}

### Neu {#new-1}

- **Fähigkeit zum Generieren von Logo-SVGs** — Theme Builder kann jetzt benutzerdefinierte Logo-SVGs mit namespace-sicherer Bereinigung generieren und einbetten
- **Foto-Upload im Discovery-Interview** — das Discovery-Interview des Theme Builder enthält jetzt einen Foto-Upload-Schritt für reicheren Designkontext
- **Fähigkeit zur Validierung des Palettenkontrasts** — Farbpaare vor der Anwendung auf ein Theme auf WCAG-Konformität prüfen
- **Menüs für das Gastgewerbe** — Theme Builder kann jetzt strukturierte Speise- und Getränkemenü-Seiten für Unternehmen im Gastgewerbe generieren
- **Rendering der Desktop- und Mobilvorschau** — sehen Sie während der Auswahl der Designrichtung eine Vorschau Ihres Designs auf Desktop- und Mobilgeräten
- **Parameter für Navigationsbeschriftung** — die Fähigkeit „Menü erstellen“ unterstützt jetzt ein eigenes `navigation_label`, getrennt vom Seitentitel
- **Verfügbarkeit von Tier-1-Tools** — sd-ai-agent/site-scrape ist jetzt ein Tier-1-Tool, das standardmäßig in Theme Builder verfügbar ist

### Behoben {#fixed-1}

- **AI Client-Cache** — jetzt durch Transients für anfrageübergreifende Persistenz gestützt, um Datenverlust bei lang laufenden Agent-Aufgaben zu verhindern
- **Aktionslinks in der Plugin-Zeile** — zur besseren Klarheit korrigiert und umbenannt

## 1.10.0 — Veröffentlicht am 2026-05-05 {#1100--released-on-2026-05-05}

### Neu {#new-2}

- **Tavily-Internetsuche** — Tavily als Suchanbieter für reichhaltigere Internetsuchergebnisse neben Brave Search hinzufügen
- **Theme-bewusste integrierte Fähigkeiten** — Skill-Leitfäden für Block-Themes, Classic Themes, Kadence Blocks und Kadence Theme werden jetzt mit dem Plugin ausgeliefert
- **Kontaktformular-Fähigkeit für den Website-Builder** — ein Kontaktformular direkt über die Chat-Oberfläche zu jeder Seite hinzufügen

### Verbessert {#improved-1}

- **WooCommerce-Integration überarbeitet** — verwendet jetzt native WooCommerce-APIs für bessere Zuverlässigkeit und Kompatibilität
- **Anbieterliste wird automatisch aktualisiert** — wenn ein Plugin aktiviert oder deaktiviert wird

### Behoben {#fixed-2}

- **navigate-to-Fähigkeit** — Endlos-Neuladeschleife auf einigen Admin-Seiten behoben
- **list-posts-Fähigkeit** — löst Kategorie- und Schlagwortnamen jetzt korrekt zu Slugs auf
- **WP-CLI-Befehle** — fehlende Namespace-Aliase nach einem früheren Refactoring wiederhergestellt
- **Ereignisautomatisierung** — behandelt Websites ordnungsgemäß, bei denen Automatisierungstabellen noch nicht erstellt wurden
- **memory-save-Fähigkeit** — verwendet jetzt das korrekte Namespace-Präfix im Systemanweisungs-Builder
- **Skalare Tool-Ergebnisse** — werden jetzt korrekt umschlossen, bevor sie an die AI zurückgegeben werden
- **Nutzungsstatistiken** — verarbeiten beim Upgrade von älteren Versionen jetzt korrekt das alte Format für Fähigkeitsschlüssel
