---
title: Meldig über d'Entfernung vom Site Builder Modus
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Hinweis zur Entfernung des Site Builder Modus

**Der Site Builder Modus wurde in Superdav AI Agent v1.12.0 entfernt.** Wenn Sie den Site Builder Modus verwendet haben, sollten Sie auf den **Setup Assistant agent** für Theme-Erstellung und Seitenaufbau umsteigen.

## Was ist passiert? {#what-happened}

### Site Builder Modus (Legacy) {#site-builder-mode-legacy}

Der Site Builder Modus war eine Wizard-basierte Oberfläche für:

- Erstellen von Seiten aus Vorlagen
- Konfigurieren grundlegender Einstellungen
- Auswahl eines Themes
- Einrichten des ersten Inhalts

### Was hat ihn ersetzt? {#what-replaced-it}

Der **Setup Assistant agent** übernimmt jetzt alle Funktionen des Site Builders mit:

- Flexiblerer, durch den Agent geführter Einrichtung
- Besserer Optionen zur Theme-Anpassung
- Integration in die Theme Builder Onboarding
- Persistenter `site_brief` Speicher für zukünftige Sitzungen

## Wenn Sie den Site Builder Modus verwendet haben {#if-you-were-using-site-builder-mode}

### Ihre Seiten sind sicher {#your-sites-are-safe}

- Bestehende Seiten, die mit dem Site Builder Modus erstellt wurden, funktionieren weiterhin einwandfrei.
- Kein Datenverlust oder Unterbrechung der Seitenverwaltung.
- Sie können Ihre Seiten wie gewohnt weiter verwalten.

### Wechseln Sie zum Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Für den Aufbau neuer Seiten oder Theme-Änderungen verwenden Sie bitte den Setup Assistant agent:

```
"Help me set up a new site"
```

oder

```
"Start the Theme Builder onboarding"
```

Der Setup Assistant agent bietet dieselbe Funktionalität, aber mit mehr Flexibilität.

## Vergleich: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Feature | Site Builder (Entfernt) | Setup Assistant (Neu) |
|---------|----------------------|----------------------|
| Einrichtungsmethode | Wizard-Formular | Agentenkonversation |
| Theme-Auswahl | Vordefinierte Vorlagen | Individuelle Erstellung |
| Anpassung | Eingeschränkte Optionen | Vollständiges Designsystem |
| Seitenzusammenfassung (Site brief) | Nicht gespeichert | Persistenter Speicher |
| Zukünftige Sitzungen | Wiederholte Einrichtung | Nutzung des gespeicherten `site_brief` |
| Flexibilität | Fester Arbeitsablauf | Anpassungsfähiges Gespräch |

## Migration zum Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Für neue Seiten {#for-new-sites}

Anstatt den Site Builder Modus zu verwenden:

1. Bitte: "Hilf mir, eine neue Seite einzurichten"
2. Der Setup Assistant Agent führt dich durch:
   - Zweck und Ziele der Seite
   - Zielgruppe
   - Markenidentität
   - Theme-Generierung
   - Erste Konfiguration

### Für bestehende Seiten {#for-existing-sites}

Wenn du eine bestehende Seite aus dem Site Builder Modus hast:

1. Du kannst sie einfach so weiterverwenden
2. Um das Theme zu aktualisieren, bitte: "Überarbeite meine Seite"
3. Der Setup Assistant Agent hilft dir dabei, ein neues Theme zu erstellen
4. Deine Seitendaten bleiben unverändert

### Für Theme-Änderungen {#for-theme-changes}

Anstelle der Theme-Auswahl im Site Builder Modus:

1. Bitte: "Ändere mein Theme"
2. Der Setup Assistant Agent wird:
   - Nach deinen Designvorlieben fragen
   - Ein benutzerdefiniertes Theme generieren
   - Es auf deiner Seite aktivieren

## Hauptunterschiede {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Vorlage wählen
2. Theme auswählen
3. Grundlegende Einstellungen konfigurieren
4. Fertig
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Beschreibe den Zweck deiner Seite
2. Definiere deine Zielgruppe
3. Wähle deine Designvorlieben
4. Der Agent generiert ein benutzerdefiniertes Theme
5. Der Agent aktiviert das Theme
6. Kurzbeschreibung der Seite wird für zukünftige Sitzungen gespeichert
```

## Vorteile des Setup Assistant Agents {#benefits-of-setup-assistant-agent}

### Flexibler {#more-flexible}

- Beschreibe deine Seite in natürlicher Sprache
- Erhalte individuelle Empfehlungen
- Passe dich deinen spezifischen Bedürfnissen an

### Bessere Anpassungsmöglichkeiten {#better-customization}

- Generierung eines benutzerdefinierten Themes
- Entscheidungen über das Designsystem
- Persistente Design-Tokens

### Persistentes Gedächtnis {#persistent-memory}

- Deine `site_brief` wird gespeichert
- Zukünftige Agent verstehen deine Seite
- Du musst Setup-Informationen nicht wiederholen

### Integrierter Workflow {#integrated-workflow}

- Onboarding des Theme Builders
- Fähigkeit zur Ästhetik des Design Systems
- Möglichkeit, Sichtbarkeitskontrollen zu nutzen
- Alles arbeitet nahtlos zusammen

## Fehlerbehebung {#troubleshooting}

### Ich finde den Site Builder Modus nicht {#i-cant-find-site-builder-mode}

Der Site Builder Modus wurde entfernt. Verwende stattdessen den Setup Assistant Agent:

"Hilf mir, e neui Site ufbaue"

### Ich wott e Site vo eme Site Builder neu mache {#i-want-to-recreate-a-site-from-site-builder}

Du chasch sie mit em Setup Assistant Agent neu ufbaue:

1. Aafrog: "Hilf mir, e neui Site ufbaue"
2. Beschriib de Zweck und s'Design vo dinere alte Site
3. De Agent generiert en ähnliche Theme
4. Din `site_brief` wird für zukünftigi Referenz gspeicheret

### Mini bestehendi Site Builder Site funktioniert nöd {#my-existing-site-builder-site-isnt-working}

Bestehende Sites, wo mit em Site Builder Modus erstellt worde sind, wiiterhin funktioniere. Falls du Problem hesch:

1. Prüef, ob dini Theme no aktiv isch
2. Überprüef, ob dini Plugins aktiviert sind
3. Prüef d'WordPress Error Logs
4. Kontaktier de Support, falls d'Problem wiiterhärblebe

### Chann ich mini alte Site Builder Templates no bruche? {#can-i-still-use-my-old-site-builder-templates}

Site Builder Templates sind nümme verfügbar. Aber:

- Dini bestehende Sites funktioniere wiiterhin
- Du chasch ähnlechi Sites mit em Setup Assistant Agent neu ufbaue
- De Setup Assistant Agent bietet meh Anpassigsmöglichkeite

## Nächsti Schritt {#next-steps}

1. **Für neui Sites**: Bruuch de Setup Assistant Agent
2. **Für bestehendi Sites**: Halt wiiterhin so, wie sie sind
3. **Für Theme-Änderige**: Frag de Setup Assistant Agent um Hilf
4. **Für Design-Verfeinerig**: Bruuch d'Design System Aesthetics Skill

## Verwandti Themen {#related-topics}

- **Theme Builder Onboarding**: Gfüehrti Ufbau für benutzerdefinierti Themes
- **Setup Assistant Agent**: Site-Ufbau mit Agent-Leitig
- **Site Specification Skill**: Definiere dini Zuel und Zielgruppe vo de Site
- **Design System Aesthetics Skill**: Verfeinere d'visuelli Identität vo dinere Site
