---
title: Hinweis zur Entfernung des Site Builder-Modus
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Entfernung des Site Builder Mode

**Der Site Builder Mode wurde in Superdav AI Agent v1.12.0 entfernt.** Wenn Sie den Site Builder Mode verwendet haben, sollten Sie stattdessen den **Setup Assistant agent** für die Theme-Erstellung und die Site-Einrichtung nutzen.

## Was ist passiert? {#what-happened}

### Site Builder Mode (Legacy) {#site-builder-mode-legacy}

Der Site Builder Mode war eine wizzardbasierte Oberfläche für:

- Die Erstellung von Websites aus Templates
- Die Konfiguration grundlegender Einstellungen
- Die Auswahl eines Themes
- Die Einrichtung von Anfangsinhalten

### Was hat ihn ersetzt? {#what-replaced-it}

Der **Setup Assistant agent** übernimmt nun alle Funktionalitäten des Site Builders mit:

- Einem flexibleren, agent-gesteuerten Setup
- Besserem Theme-Customization-Angebot
- Integration mit dem Theme Builder Onboarding
- Einem persistenten `site_brief` Speicher für zukünftige Sitzungen

## Wenn Sie den Site Builder Mode verwendet haben {#if-you-were-using-site-builder-mode}

### Ihre Websites sind sicher {#your-sites-are-safe}

- Bestehende Websites, die mit dem Site Builder Mode erstellt wurden, funktionieren weiterhin
- Kein Datenverlust oder Ausfall der Website
- Sie können Ihre Websites weiterhin normal verwalten

### Migrieren Sie zum Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Für die Einrichtung neuer Websites oder Theme-Änderungen verwenden Sie den Setup Assistant agent:

```
"Help me set up a new site"
```

oder

```
"Start the Theme Builder onboarding"
```

Der Setup Assistant agent bietet dieselbe Funktionalität, jedoch mit mehr Flexibilität.

## Vergleich: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (Entfernt) | Setup Assistant (Neu) |
|---------|----------------------|----------------------|
| Setup method | Wizard Formular | Agenten-Konversation |
| Theme selection | Vordefinierte Templates | Individuelle Generierung |
| Customization | Eingeschränkte Optionen | Vollständiges Design System |
| Site brief | Nicht gespeichert | Permanenter Speicher |
| Future sessions | Wiederholung des Setups | Nutzung des gespeicherten site_brief |
| Flexibility | Fester Workflow | Adaptative Konversation |

## Migration zum Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Für neue Websites {#for-new-sites}

Anstatt den Site Builder Mode zu verwenden:

1. Bitten Sie um: "Help me set up a new site"
2. Der Setup Assistant agent führt Sie durch:
   - Zweck und Ziele der Website
   - Zielgruppe
   - Markenidentität
   - Theme-Generierung
   - Erstkonfiguration

### Für bestehende Websites {#for-existing-sites}

Wenn Sie eine bestehende Website aus dem Site Builder Mode haben:

1. Sie können sie so wie bisher weiterverwenden
2. Um das Theme zu aktualisieren, bitten Sie um: "Redesign my site"
3. Der Setup Assistant agent hilft Ihnen bei der Erstellung eines neuen Themes
4. Ihre Website-Daten bleiben unverändert

### Für Theme-Änderungen {#for-theme-changes}

Anstatt der Theme-Auswahl im Site Builder Mode:

1. Bitten Sie um: "Change my theme"
2. Der Setup Assistant agent wird:
   - Nach Ihren Design-Präferenzen fragen
   - Ein individuelles Theme generieren
   - Dieses auf Ihrer Website aktivieren

## Hauptunterschiede {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Template auswählen
2. Theme auswählen
3. Grundlegende Einstellungen konfigurieren
4. Fertig
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Zweck Ihrer Website beschreiben
2. Zielgruppe definieren
3. Design-Präferenzen wählen
4. Agent generiert individuelles Theme
5. Agent aktiviert Theme
6. Site brief wird für zukünftige Sitzungen gespeichert
```

## Vorteile des Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Flexibler {#more-flexible}

- Beschreiben Sie Ihre Website in natürlicher Sprache
- Erhalten Sie individuelle Empfehlungen
- Passt sich Ihren spezifischen Bedürfnissen an

### Bessere Anpassung {#better-customization}

- Individuelle Theme-Generierung
- Entscheidungen des Design Systems
- Permanente Design Tokens

### Permanenter Speicher {#persistent-memory}

- Ihr `site_brief` wird gespeichert
- Zukünftige Agents verstehen Ihre Website
- Sie müssen Setup-Informationen nicht wiederholen

### Integrierter Workflow {#integrated-workflow}

- Theme Builder Onboarding
- Design System Aesthetics Skill
- Ability Visibility Controls
- Alles arbeitet nahtlos zusammen

## Fehlerbehebung {#troubleshooting}

### Ich finde den Site Builder Mode nicht {#i-cant-find-site-builder-mode}

Der Site Builder Mode wurde entfernt. Verwenden Sie stattdessen den Setup Assistant agent:

```
"Help me set up a new site"
```

### Ich möchte eine Website aus dem Site Builder Mode nachbauen {#i-want-to-recreate-a-site-from-site-builder}

Sie können sie mit dem Setup Assistant agent nachbauen:

1. Bitten Sie um: "Help me set up a new site"
2. Beschreiben Sie den Zweck und das Design Ihrer ursprünglichen Website
3. Der Agent wird ein ähnliches Theme generieren
4. Ihr `site_brief` wird für zukünftige Referenzen gespeichert

### Meine bestehende Site Builder Website funktioniert nicht {#my-existing-site-builder-site-isnt-working}

Bestehende Websites, die mit dem Site Builder Mode erstellt wurden, funktionieren weiterhin. Wenn Sie Probleme feststellen:

1. Überprüfen Sie, ob Ihr Theme noch aktiv ist
2. Vergewissern Sie sich, dass Ihre Plugins aktiviert sind
3. Überprüfen Sie die WordPress Error Logs
4. Kontaktieren Sie den Support, wenn die Probleme anhalten

### Kann ich meine alten Site Builder Templates noch verwenden? {#can-i-still-use-my-old-site-builder-templates}

Site Builder Templates sind nicht mehr verfügbar. Allerdings:

- Ihre bestehenden Websites funktionieren weiterhin
- Sie können ähnliche Websites mit dem Setup Assistant agent nachbauen
- Der Setup Assistant agent bietet mehr Anpassungsoptionen

## Nächste Schritte {#next-steps}

1. **Für neue Websites**: Verwenden Sie den Setup Assistant agent
2. **Für bestehende Websites**: Nutzen Sie diese weiterhin so wie bisher
3. **Für Theme-Änderungen**: Bitten Sie den Setup Assistant agent um Hilfe
4. **Für Design-Verfeinerungen**: Nutzen Sie den Design System Aesthetics skill

## Verwandte Themen {#related-topics}

- **Theme Builder Onboarding**: Geführte Einrichtung für Custom Themes
- **Setup Assistant Agent**: Agenten-gesteuerte Site-Einrichtung
- **Site Specification Skill**: Definieren Sie die Ziele und die Zielgruppe Ihrer Website
- **Design System Aesthetics Skill**: Verfeinern Sie die visuelle Identität Ihrer Website
