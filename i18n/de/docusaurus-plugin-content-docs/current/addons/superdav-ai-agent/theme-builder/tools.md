---
title: Tools und Konfiguration
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Tools und Konfiguration

Theme Builder verwendet eine Reihe von Tools, um Ihre WordPress-Website zu analysieren, zu gestalten und zu erstellen. In Version 1.16.0 ist **sd-ai-agent/site-scrape nun ein Tier-1-Tool**, wodurch es standardmäßig in Theme Builder verfügbar ist.

## Verfügbare Tools

### Tier 1 Tools (Immer verfügbar)

Tier-1-Tools sind ohne zusätzliche Konfiguration standardmäßig in Theme Builder verfügbar.

#### sd-ai-agent/site-scrape

**Zweck:** Analysiert bestehende Websites, um Design-Inspiration, Content-Struktur und Funktionalität zu extrahieren.

**Fähigkeiten:**

- **Website-Analyse** — Crawlt und analysiert Websites von Wettbewerbern oder Inspirationsquellen
- **Design-Extraktion** — Identifiziert Farben, Schriftarten und Layout-Muster
- **Content-Struktur** — Versteht die Seitenorganisation und Hierarchie
- **Feature-Erkennung** — Identifiziert Plugins und Funktionalitäten
- **Performance-Analyse** — Überprüft die Seitenladezeit und Optimierung
- **SEO-Analyse** — Überprüft Meta-Tags und strukturierte Daten

**Verwendung:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Was es extrahiert:**

- Farbpalette und Farbnutzung
- Typografie (Schriftarten und Größen)
- Layout-Struktur und Abstände
- Navigationsmuster
- Content-Organisation
- Bilder- und Mediennutzung
- Interaktive Elemente
- Mobile Responsiveness

**Einschränkungen:**

- Kann keine passwortgeschützten Seiten crawlen
- Beachtet robots.txt und Seitenrichtlinien
- Kann keinen dynamischen Inhalt erfassen
- Websites mit viel JavaScript können eine eingeschränkte Analyse aufweisen
- Sehr große Websites können länger zum Analysieren benötigen

### Tier 2 Tools (Optional)

Tier-2-Tools sind verfügbar, wenn sie in den Theme Builder Einstellungen explizit aktiviert werden.

#### Advanced Analytics

Liefert detaillierte Performance-Metriken:

- Seitenladezeiten
- Core Web Vitals
- SEO-Score
- Barrierefreiheits-Score
- Best Practices Score

#### Content Optimizer

Analysiert und schlägt Verbesserungen für vor:

- Lesbarkeit
- SEO-Optimierung
- Keyword-Nutzung
- Content-Struktur
- Platzierung von Call-to-Action

### Tier 3 Tools (Premium)

Tier-3-Tools erfordern zusätzliche Konfiguration oder Premium-Funktionen.

#### AI Content Generator

Generiert Inhalte für:

- Produktbeschreibungen
- Service-Seiten
- Blogbeiträge
- Meta-Beschreibungen
- Call-to-Action-Texte

#### Advanced Design Tools

Bietet erweiterte Design-Fähigkeiten:

- Generierung von Custom CSS
- Erstellung von Animationen
- Design interaktiver Elemente
- Erweiterte Farbtheorie
- Typografie-Optimierung

## Tool-Konfiguration

### Tools aktivieren

Um zusätzliche Tools in Theme Builder zu aktivieren:

1. Navigieren Sie zu **Gratis AI Agent → Settings**
2. Gehen Sie zu **Theme Builder → Tools**
3. Schalten Sie die Tools bei Bedarf ein/aus
4. Speichern Sie die Einstellungen

### Tool-Berechtigungen

Einige Tools erfordern Berechtigungen:

- **Site scraping** — erfordert Internetzugriff
- **Analytics** — erfordert Google Analytics Integration
- **Content generation** — erfordert API-Schlüssel
- **Advanced features** — kann ein Premium-Abonnement erfordern

### API-Schlüssel und Anmeldedaten

Konfigurieren Sie API-Schlüssel für Tools, die diese erfordern:

1. Gehen Sie zu **Gratis AI Agent → Settings → API Keys**
2. Geben Sie die Anmeldedaten für jedes Tool ein
3. Testen Sie die Verbindung
4. Speichern Sie die Daten sicher

## Verwendung von sd-ai-agent/site-scrape

### Grundlegende Verwendung

Bitten Sie Theme Builder, eine Website zu analysieren:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Spezifische Analyse

Fordern Sie spezifische Arten von Analysen an:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Vergleichsanalyse

Vergleichen Sie mehrere Websites:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Tool-Einschränkungen und Überlegungen

### Rate Limiting

- Das Crawling ist begrenzt, um Überlastung des Servers zu verhindern
- Mehrere Anfragen an dieselbe Website können gedrosselt werden
- Sehr große Websites können länger zum Analysieren benötigen

### Content-Genauigkeit

- Dynamischer Inhalt kann nicht vollständig erfasst werden
- Mit JavaScript gerenderter Inhalt kann unvollständig sein
- Echtzeitdaten können nicht widergespiegelt werden
- Einige Inhalte können hinter Paywalls liegen

### Rechtliche und ethische Überlegungen

- Beachten Sie robots.txt und Seitenrichtlinien
- Crawlen Sie keinen urheberrechtlich geschützten Inhalt zur Reproduktion
- Nutzen Sie die Analyse zur Inspiration, nicht zum Kopieren
- Vergewissern Sie sich, dass Sie das Recht haben, den extrahierten Inhalt zu verwenden
- Beachten Sie die Nutzungsbedingungen der analysierten Websites

### Performance-Auswirkungen

- Das Crawlen großer Websites kann Zeit in Anspruch nehmen
- Mehrere gleichzeitige Crawls können langsamer sein
- Die Netzwerkverbindung beeinflusst die Geschwindigkeit
- Große Datensätze erfordern möglicherweise mehr Rechenleistung

## Best Practices

### Website-Analyse nutzen

1. **Analysieren Sie mehrere Websites** — sammeln Sie Inspiration aus verschiedenen Quellen
2. **Konzentrieren Sie sich auf die Struktur** — lernen Sie Layout- und Organisationsmuster kennen
3. **Farben extrahieren** — nutzen Sie Farbpaletten als Ausgangspunkt
4. **Typografie studieren** — identifizieren Sie Schriftkombinationen, die Ihnen gefallen
5. **Navigation überprüfen** — verstehen Sie die Menüorganisation

### Ethisches Crawling

1. **Beachten Sie robots.txt** — folgen Sie den Richtlinien der Website
2. **Keinen Inhalt kopieren** — nutzen Sie die Analyse nur zur Inspiration
3. **Rechte überprüfen** — stellen Sie sicher, dass Sie den extrahierten Inhalt verwenden dürfen
4. **Quellen nennen** — geben Sie die Inspirationsquellen an
5. **Bedingungen beachten** — halten Sie sich an die Nutzungsbedingungen der Website

### Tool-Effektivität maximieren

1. **Seien Sie spezifisch** — fordern Sie spezifische Arten von Analysen an
2. **Geben Sie Kontext** — erklären Sie den Zweck Ihrer Website
3. **Erwartungen festlegen** — beschreiben Sie Ihre Designziele
4. **Iterieren** — verfeinern Sie basierend auf den Ergebnissen
5. **Tools kombinieren** — nutzen Sie mehrere Tools für eine umfassende Analyse

## Fehlerbehebung

### Website kann nicht gecrawlt werden

- Überprüfen Sie, ob die Website öffentlich zugänglich ist
- Vergewissern Sie sich, dass robots.txt das Crawling erlaubt
- Versuchen Sie es mit einer anderen Website
- Überprüfen Sie die Internetverbindung
- Kontaktieren Sie den Support, wenn das Problem weiterhin besteht

### Unvollständige Analyse

- Die Website kann dynamischen Inhalt haben
- JavaScript kann nicht vollständig gerendert werden
- Sehr große Websites können einen Timeout erreichen
- Versuchen Sie stattdessen, spezifische Seiten zu analysieren
- Fordern Sie spezifische Analysearten an

### Langsame Performance

- Große Websites benötigen mehr Zeit zur Analyse
- Mehrere gleichzeitige Crawls sind langsamer
- Die Netzwerkverbindung beeinflusst die Geschwindigkeit
- Versuchen Sie es während der Randzeiten
- Analysieren Sie zuerst kleinere Abschnitte

## Verwandte Dokumentation

- [Discovery Interview](./discovery-interview.md) — Designinformationen sammeln
- [Design Direction](./design-direction.md) — Ihr Design verfeinern
- [Hospitality Menus](./hospitality-menus.md) — Menüseiten erstellen
