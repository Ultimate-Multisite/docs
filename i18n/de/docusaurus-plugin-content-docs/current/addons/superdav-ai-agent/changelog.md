---
title: Änderungsprotokoll
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Veröffentlicht am 2026-05-20

### Neu

- **Logo-SVG-Generierung** — Der Theme Builder kann nun benutzerdefinierte Logo-SVGs mit namenraum-sicherer Bereinigung generieren und einbetten.
- **Foto-Upload im Discovery Interview** — Das Discovery Interview im Theme Builder enthält nun einen Schritt zum Hochladen von Fotos, um einen reichhaltigeren Design-Kontext zu erhalten.
- **Palette-Kontrast-Validierung** — Überprüfen Sie Farbkombinationen auf WCAG-Konformität, bevor Sie sie einem Theme zuweisen.
- **Gastronomie-Menüs** — Der Theme Builder kann nun strukturierte Speise- und Getränkekarten für Gastgewerbebetriebe erstellen.
- **Desktop- und Mobilvorschau-Rendering** — Sehen Sie sich Ihr Design während der Auswahl der Design-Richtlinie auf Desktop- und mobilen Geräten an.
- **Navigations-Label-Parameter** — Die Funktion „Menü erstellen“ unterstützt nun ein separates `navigation_label`, das vom Seitentitel getrennt ist.
- **Verfügbarkeit von Tier 1 Tools** — sd-ai-agent/site-scrape ist nun ein Tier-1-Tool, das standardmäßig im Theme Builder verfügbar ist.

### Behoben

- **AI Client Cache** — Wird nun durch Transienten unterstützt, um die Persistenz über verschiedene Anfragen hinweg zu gewährleisten und Datenverlust bei lang laufenden Agenten-Aufgaben zu verhindern.
- **Aktionslinks in Plugin-Zeilen** — Korrigiert und für mehr Klarheit umbenannt.

## 1.10.0 — Veröffentlicht am 2026-05-05

### Neu

- **Tavily Internet-Suche** — Fügt Tavily als Suchanbieter hinzu, um neben Brave Search reichhaltigere Internet-Suchergebnisse zu erhalten.
- **Theme-spezifische integrierte Fähigkeiten** — Block Themes, Classic Themes, Kadence Blocks und Kadence Theme Skill Guides werden nun mit dem Plugin mitgeliefert.
- **Website-Baukasten-Kontaktformular-Funktion** — Fügen Sie ein Kontaktformular direkt aus der Chat-Oberfläche zu jeder Seite hinzu.

### Verbessert

- **WooCommerce-Integration refaktorisiert** — Nutzt nun die nativen WooCommerce APIs für eine bessere Zuverlässigkeit und Kompatibilität.
- **Anbieterliste wird automatisch aktualisiert** — Wenn ein Plugin aktiviert oder deaktiviert wird.

### Behoben

- **navigate-to-Funktion** — Behebt Endlosschleifen-Neuladungen auf einigen Admin-Seiten.
- **list-posts-Funktion** — Löst nun korrekt Kategorien- und Tagnamen zu Slugs auf.
- **WP-CLI-Befehle** — Stellt fehlende Namespace-Aliase nach einem vorherigen Refactoring wieder her.
- **Event-Automatisierung** — Behandelt Seiten, auf denen die Automatisierungstabellen noch nicht erstellt wurden, sauber.
- **memory-save-Funktion** — Verwendet nun den korrekten Namespace-Präfix im System-Instruction-Builder.
- **Scalar Tool-Ergebnisse** — Werden nun korrekt verpackt, bevor sie an die KI zurückgegeben werden.
- **Nutzungsstatistiken** — Behandeln bei Upgrades von älteren Versionen nun korrekt das Legacy-Funktionsschlüsselformat.
