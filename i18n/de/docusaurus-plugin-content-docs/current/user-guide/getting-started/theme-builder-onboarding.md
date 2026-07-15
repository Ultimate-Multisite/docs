---
title: Theme Builder Onboarding Flow
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Onboarding-Prozess für den Theme Builder

Superdav AI Agent v1.12.0 führt einen geführten **Onboarding-Prozess für den Theme Builder** ein, der Ihnen hilft, während der ersten Einrichtung ein individuelles Block-Theme zu erstellen. Dies ersetzt den älteren Site Builder Modus durch einen flexibleren, agentengestützten Ansatz.

## Was ist der Onboarding-Prozess für den Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Der Onboarding-Prozess für den Theme Builder ist ein interaktiver Einrichtungswizard, der:

- Sie durch Designentscheidungen führt (Farben, Typografie, Layout)
- Ihre visuellen Identitätspräferenzen für die Website erfasst
- Ein individuelles Block-Theme generiert, das auf Ihre Bedürfnisse zugeschnitten ist
- Das Theme nach Abschluss automatisch aktiviert

Der Prozess wird vom **Setup Assistant Agent** angetrieben, der klärende Fragen stellt und Ihr Theme schrittweise aufbaut.

## Starten des Theme Builder Onboardings {#starting-the-theme-builder-onboarding}

### Erstmalige Einrichtung {#first-run-setup}

Wenn Sie Superdav AI Agent zum ersten Mal auf einer neuen WordPress-Installation starten, sehen Sie:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Wählen Sie **„Build a custom theme“**, um den Onboarding-Prozess des Theme Builders zu starten.

### Manuelle Aktivierung {#manual-activation}

Sie können den Theme Builder Onboarding-Prozess jederzeit starten, indem Sie anfordern:

```
"Start the Theme Builder onboarding"
```

oder

```
"Help me create a custom theme"
```

## Die Onboarding-Schritte {#the-onboarding-steps}

### Schritt 1: Modusauswahl {#step-1-mode-selection}

Der Setup Assistant Agent fragt nach Ihrer Präferenz:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** wird für die meisten Benutzer empfohlen; der Agent gibt Designempfehlungen basierend auf Ihrer Branche und Ihren Zielen ab.

### Schritt 2: Website-Spezifikation {#step-2-site-specification}

Sie werden nach Ihrer Website gefragt:

- **Site purpose**: E-Commerce, Blog, Portfolio, SaaS usw.
- **Target audience**: Wer sind Ihre Besucher?
- **Brand colors**: Primär- und Sekundärfarben (oder „Ich bin mir nicht sicher“)
- **Tone**: Professionell, kreativ, verspielt, minimalistisch usw.

Diese Informationen werden in Ihrem **site_brief** Speicher gespeichert, auf den Agenten in zukünftigen Sitzungen zurückgreifen.

### Schritt 3: Design System Entscheidungen {#step-3-design-system-decisions}

Der Agent führt Sie durch die Auswahl von Design Tokens:

- **Typography**: Schriftfamilie (serif, sans-serif, monospace) und Größenstaffelung
- **Color palette**: Primär-, Sekundär-, Akzent- und Neutralfarben
- **Spacing**: Kompakte, normale oder geräumige Layouts
- **Motion**: Animationen und Übergänge (falls gewünscht)

### Schritt 4: Theme-Generierung {#step-4-theme-generation}

Der Setup Assistant Agent erstellt Ihr individuelles Block-Theme mit:

- `theme.json`, das alle Ihre Design Tokens enthält
- Block-Templates für gängige Layouts (Homepage, Blog, Kontakt)
- Benutzerdefinierte Block-Styles, die zu Ihrem Design System passen
- Theme-Metadaten und WordPress-Support-Deklarationen

### Schritt 5: Aktivierung und Verifizierung {#step-5-activation-and-verification}

Das Theme wird automatisch aktiviert, und Sie sehen:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Sie können dann Ihre Website besuchen, um zu überprüfen, ob das Theme korrekt angezeigt wird.

## Website-Spezifikation und site_brief Speicher {#site-specification-and-sitebrief-memory}

Während des Onboardings erfasst der Agent die Spezifikation Ihrer Website in einer **site_brief** Speicherkategorie. Dies umfasst:

- Website-Zweck und Ziele
- Zielgruppe
- Markenfarben und Ton
- Designpräferenzen
- Inhaltsstruktur

### Warum site_brief wichtig ist {#why-sitebrief-matters}

In zukünftigen Sitzungen greifen Agenten auf Ihren site_brief zu, um:

- Die Designkonsistenz bei Änderungen zu gewährleisten
- Funktionen vorzuschlagen, die zum Zweck Ihrer Website passen
- Kontextbezogene Empfehlungen zu geben
- Die Wiederholung von Einrichtungfragen zu vermeiden

### Anzeigen Ihres site_brief {#viewing-your-sitebrief}

Sie können den Agenten fragen:

```
"Show me my site brief"
```

oder

```
"What do you know about my site?"
```

Der Agent zeigt Ihre gespeicherte Website-Spezifikation an.

## Anpassung nach dem Onboarding {#customizing-after-onboarding}

Nach Abschluss des Theme Builder Onboardings können Sie:

### Die Design System Aesthetics Skill nutzen {#use-the-design-system-aesthetics-skill}

Design-Verfeinerungen anfordern:

```
"Refine the typography to be more modern"
```

oder

```
"Adjust the color palette to be warmer"
```

Die **Design System Aesthetics skill** führt Sie durch gezielte Design-Updates.

### theme.json direkt bearbeiten {#edit-themejson-directly}

Für fortgeschrittene Benutzer bearbeiten Sie `/wp-content/themes/[theme-name]/theme.json`, um anzupassen:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Benutzerdefinierte Block-Templates erstellen {#create-custom-block-templates}

Verwenden Sie den WordPress Block Editor, um benutzerdefinierte Templates für:

- Homepage-Layouts
- Blog-Beiträge
- Produktseiten
- Kontaktformulare

## Vergleich: Alt vs. Neu Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Fehlerbehebung {#troubleshooting}

**Der Onboarding-Prozess wurde nicht abgeschlossen**
- Prozess neu starten: "Start the Theme Builder onboarding"
- Überprüfen Sie, ob Ihre WordPress-Installation aktuell ist
- Vergewissern Sie sich, dass der Setup Assistant Agent aktiviert ist

**Mein site_brief wird nicht verwendet**
- Bestätigen Sie, dass der Agent Zugriff auf den Speicher hat
- Bitten Sie den Agenten, meinen site brief abzurufen ("recall my site brief")
- Überprüfen Sie, ob der Speicher in Ihren Einstellungen aktiviert ist

**Das generierte Theme entspricht nicht meinen Präferenzen**
- Verwenden Sie die Design System Aesthetics skill, um es zu verfeinern
- Bitten Sie den Agenten, das Theme mit [spezifischen Änderungen] neu zu generieren ("regenerate the theme with [specific changes]")
- Bearbeiten Sie theme.json direkt für präzise Kontrolle

## Nächste Schritte {#next-steps}

Nach Abschluss des Theme Builder Onboardings:

1. **Ihre Website überprüfen**: Besuchen Sie Ihre Website, um das neue Theme zu sehen
2. **Design verfeinern**: Nutzen Sie die Design System Aesthetics skill für Anpassungen
3. **Inhalte hinzufügen**: Beginnen Sie mit dem Erstellen der Inhalte Ihrer Website
4. **Fähigkeiten erkunden**: Erfahren Sie mehr über andere Agent-Fähigkeiten wie scaffold-block-theme und activate-theme
