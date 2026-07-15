---
title: Tools und Konfiguration
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Tools und Konfiguration

Theme Builder verwendet eine Reihe von Tools, um deine WordPress-Website zu analysieren, zu entwerfen und zu erstellen. In Version 1.16.0 ist **sd-ai-agent/site-scrape jetzt ein Tool der Stufe 1**, wodurch es standardmäßig in Theme Builder verfügbar ist. Superdav AI Agent v1.18.0 führt außerdem ein separat verteiltes Advanced-Begleitpaket für vertrauenswürdige Entwickler-Workflows ein; diese Tools sind nicht Teil des WordPress.org-Kernpakets und müssen separat installiert und autorisiert werden.

## Verfügbare Tools {#available-tools}

### Tools der Stufe 1 (immer verfügbar) {#tier-1-tools-always-available}

Tools der Stufe 1 sind standardmäßig in Theme Builder ohne zusätzliche Konfiguration verfügbar.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Zweck:** Bestehende Websites analysieren, um Design-Inspiration, Inhaltsstruktur und Funktionalität zu extrahieren.

**Fähigkeiten:**

- **Website-Analyse** — Websites von Mitbewerbern oder Inspirationsquellen scrapen und analysieren
- **Design-Extraktion** — Farben, Schriftarten und Layout-Muster identifizieren
- **Inhaltsstruktur** — Seitenorganisation und Hierarchie verstehen
- **Funktionserkennung** — Plugins und Funktionalität identifizieren
- **Performance-Analyse** — Seitengeschwindigkeit und Optimierung prüfen
- **SEO-Analyse** — Meta-Tags und strukturierte Daten überprüfen

**Verwendung:**

```
Analysiere das Design von example.com und nutze es als Inspiration für meine Website.
```

**Was es extrahiert:**

- Farbpalette und Farbverwendung
- Typografie (Schriftarten und Größen)
- Layout-Struktur und Abstände
- Navigationsmuster
- Inhaltsorganisation
- Verwendung von Bildern und Medien
- Interaktive Elemente
- Mobile Responsiveness

**Einschränkungen:**

- Kann keine passwortgeschützten Websites scrapen
- Respektiert robots.txt und Website-Richtlinien
- Erfasst möglicherweise keine dynamischen Inhalte
- JavaScript-lastige Websites können nur eingeschränkt analysiert werden
- Große Websites benötigen möglicherweise länger für die Analyse

### Tools der Stufe 2 (optional) {#tier-2-tools-optional}

Tools der Stufe 2 sind verfügbar, wenn sie ausdrücklich in den Theme Builder-Einstellungen aktiviert werden.

#### Erweiterte Analysen {#advanced-analytics}

Stellt detaillierte Performance-Metriken bereit:

- Ladezeiten von Seiten
- Core Web Vitals
- SEO-Bewertung
- Barrierefreiheitsbewertung
- Bewertung der Best Practices

#### Content-Optimierer {#content-optimizer}

Analysiert und schlägt Verbesserungen vor für:

- Lesbarkeit
- SEO-Optimierung
- Keyword-Verwendung
- Inhaltsstruktur
- Platzierung von Call-to-Actions

### Tools der Stufe 3 (Premium) {#tier-3-tools-premium}

Tools der Stufe 3 erfordern zusätzliche Konfiguration oder Premium-Funktionen.

#### AI-Inhaltsgenerator {#ai-content-generator}

Generiert Inhalte für:

- Produktbeschreibungen
- Dienstleistungsseiten
- Blogbeiträge
- Meta-Beschreibungen
- Call-to-Action-Texte

#### Erweiterte Design-Tools {#advanced-design-tools}

Stellt erweiterte Design-Fähigkeiten bereit:

- Generierung von benutzerdefiniertem CSS
- Erstellung von Animationen
- Design interaktiver Elemente
- Erweiterte Farbtheorie
- Typografie-Optimierung

### Advanced-Begleit-Tools (separates Paket) {#advanced-companion-tools-separate-package}

Das Advanced-Begleitpaket wird separat vom Kern-Release von Superdav AI Agent verteilt. Es ist für vertrauenswürdige Entwickler- und Website-Betreiberumgebungen gedacht, in denen Administratoren dem Agent ausdrücklich erlauben, wirkungsstarke Tooling-Funktionen zu verwenden.

Advanced-Begleitfähigkeiten können umfassen:

- **Dateisystem-Tools** — genehmigte Dateien in vertrauenswürdigen Umgebungen prüfen und ändern
- **Datenbank-Tools** — Website-Daten abfragen oder aktualisieren, wenn dies ausdrücklich autorisiert wurde
- **WP-CLI-Tools** — WordPress-Wartungs- und Prüfungsbefehle ausführen
- **REST-Dispatcher-Tools** — registrierte REST-Endpoints über kontrollierte Dispatch-Workflows aufrufen
- **Plugin-Builder-Tools** — Plugin-Code scaffolden und iterieren
- **Git-Snapshot-Tools** — Snapshots vor riskanten Entwickleroperationen erstellen
- **Benutzerverwaltungs-Tools** — Benutzer-Datensätze überprüfen oder anpassen helfen, sofern erlaubt
- **Benchmark-Tools** — Performance- oder Fähigkeits-Benchmarks für die Entwicklungsprüfung ausführen

Dokumentiere diese nicht als allgemein verfügbare Theme Builder-Tools für jede Installation. Sie sind nur verfügbar, wenn das Advanced-Begleitpaket installiert, aktiviert und auf vertrauenswürdige Administratoren beschränkt ist.

## Tool-Konfiguration {#tool-configuration}

### Tools aktivieren {#enabling-tools}

So aktivierst du zusätzliche Tools in Theme Builder:

1. Navigiere zu **Gratis AI Agent → Settings**
2. Gehe zu **Theme Builder → Tools**
3. Schalte Tools nach Bedarf ein/aus
4. Einstellungen speichern

### Tool-Berechtigungen {#tool-permissions}

Einige Tools erfordern Berechtigungen:

- **Website-Scraping** — erfordert Internetzugang
- **Analysen** — erfordert Google Analytics-Integration
- **Inhaltsgenerierung** — erfordert API-Schlüssel
- **Erweiterte Funktionen** — erfordern möglicherweise ein Premium-Abonnement
- **Advanced-Begleit-Tools** — erfordern das separat verteilte Advanced-Paket und ausdrückliches Administratorvertrauen

### API-Schlüssel und Zugangsdaten {#api-keys-and-credentials}

Konfiguriere API-Schlüssel für Tools, die sie erfordern:

1. Gehe zu **Gratis AI Agent → Settings → API Keys**
2. Gib Zugangsdaten für jedes Tool ein
3. Verbindung testen
4. Sicher speichern

### Installation des Advanced-Begleitpakets {#installing-the-advanced-companion-package}

Das Advanced-Begleitpaket wird separat vom WordPress.org-Kern-ZIP veröffentlicht. Installiere es nur aus dem offiziellen Projekt-Vertriebskanal für das Release und beschränke den Zugriff anschließend auf vertrauenswürdige Administratoren. Prüfe menschliche Genehmigungsschritte und das Verhalten von Git-Snapshots, bevor du Dateisystem-, Datenbank-, WP-CLI-, REST-Dispatcher-, Plugin-Builder-, Benutzerverwaltungs- oder Benchmark-Tools auf einer Produktions-Website aktivierst.

## Verwendung von sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Grundlegende Verwendung {#basic-usage}

Bitte Theme Builder, eine Website zu analysieren:

```
Analysiere das Design der Website meines Mitbewerbers unter competitor.com
und schlage Design-Verbesserungen für meine Website vor.
```

### Spezifische Analyse {#specific-analysis}

Fordere bestimmte Arten von Analysen an:

```
Extrahiere die Farbpalette von example.com und nutze sie als Inspiration.
```

```
Analysiere die Navigationsstruktur von example.com und wende eine ähnliche
Organisation auf meine Website an.
```

```
Prüfe die Mobile Responsiveness von example.com und stelle sicher, dass meine Website
ebenso responsiv ist.
```

### Vergleichsanalyse {#comparison-analysis}

Vergleiche mehrere Websites:

```
Vergleiche die Designs von site1.com und site2.com und erstelle ein Design,
das die besten Elemente beider kombiniert.
```

## Tool-Einschränkungen und Überlegungen {#tool-limitations-and-considerations}

### Ratenbegrenzung {#rate-limiting}

- Scraping ist ratenbegrenzt, um eine Serverüberlastung zu verhindern
- Mehrere Anfragen an dieselbe Website können gedrosselt werden
- Große Websites können länger für die Analyse benötigen

### Inhaltsgenauigkeit {#content-accuracy}

- Dynamische Inhalte werden möglicherweise nicht vollständig erfasst
- Durch JavaScript gerenderte Inhalte können unvollständig sein
- Echtzeitdaten werden möglicherweise nicht wiedergegeben
- Einige Inhalte können sich hinter Paywalls befinden

### Rechtliche und ethische Überlegungen {#legal-and-ethical-considerations}

- Respektiere robots.txt und Website-Richtlinien
- Scrape keine urheberrechtlich geschützten Inhalte zur Vervielfältigung
- Verwende die Analyse zur Inspiration, nicht zum Kopieren
- Stelle sicher, dass du die Rechte zur Nutzung extrahierter Inhalte hast
- Befolge die Nutzungsbedingungen der analysierten Websites

### Auswirkungen auf die Leistung {#performance-impact}

- Das Scraping großer Websites kann Zeit in Anspruch nehmen
- Mehrere gleichzeitige Scrapes können langsamer sein
- Die Netzwerkverbindung beeinflusst die Geschwindigkeit
- Große Datensätze können mehr Verarbeitung erfordern

## Best Practices {#best-practices}

### Verwendung der Website-Analyse {#using-site-analysis}

1. **Analysiere mehrere Websites** — sammle Inspiration aus mehreren Quellen
2. **Konzentriere dich auf die Struktur** — lerne Layout- und Organisationsmuster kennen
3. **Extrahiere Farben** — verwende Farbpaletten als Ausgangspunkte
4. **Untersuche Typografie** — identifiziere Schriftkombinationen, die dir gefallen
5. **Prüfe die Navigation** — verstehe die Menüorganisation

### Ethisches Scraping {#ethical-scraping}

1. **Respektiere robots.txt** — befolge die Website-Richtlinien
2. **Kopiere keine Inhalte** — verwende die Analyse nur zur Inspiration
3. **Überprüfe Rechte** — stelle sicher, dass du extrahierte Inhalte verwenden darfst
4. **Nenne Quellen** — würdige Inspirationsquellen
5. **Befolge Bedingungen** — halte die Nutzungsbedingungen der Website ein

### Maximierung der Tool-Effektivität {#maximizing-tool-effectiveness}

1. **Sei spezifisch** — fordere bestimmte Arten von Analysen an
2. **Gib Kontext** — erkläre den Zweck deiner Website
3. **Setze Erwartungen** — beschreibe deine Designziele
4. **Iteriere** — verfeinere basierend auf Ergebnissen
5. **Kombiniere Tools** — nutze mehrere Tools für eine umfassende Analyse

## Fehlerbehebung {#troubleshooting}

### Website lässt sich nicht scrapen {#site-wont-scrape}

- Prüfe, ob die Website öffentlich zugänglich ist
- Überprüfe, ob robots.txt Scraping erlaubt
- Versuche es mit einer anderen Website
- Prüfe die Internetverbindung
- Kontaktiere den Support, wenn das Problem weiterhin besteht

### Unvollständige Analyse {#incomplete-analysis}

- Die Website kann dynamische Inhalte haben
- JavaScript wird möglicherweise nicht vollständig gerendert
- Bei großen Websites kann ein Timeout auftreten
- Versuche stattdessen, bestimmte Seiten zu analysieren
- Fordere bestimmte Analysetypen an

### Langsame Leistung {#slow-performance}

- Die Analyse großer Websites dauert länger
- Mehrere gleichzeitige Scrapes sind langsamer
- Die Netzwerkverbindung beeinflusst die Geschwindigkeit
- Versuche es außerhalb der Stoßzeiten
- Analysiere zuerst kleinere Abschnitte

## Zugehörige Dokumentation {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — Designinformationen sammeln
- [Design Direction](./design-direction.md) — dein Design verfeinern
- [Hospitality Menus](./hospitality-menus.md) — Menüseiten erstellen
