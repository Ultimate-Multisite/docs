---
title: Theme-Aware Skills
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills

Superdav AI Agent v1.10.0 enthält vier neue, an das Theme angepasste (theme-aware) integrierte Skills, die sich automatisch an Ihr aktives WordPress-Theme anpassen. Diese Skills bieten spezialisierte Anleitungen und Funktionen, die auf die Architektur und die Funktionen Ihres Themes zugeschnitten sind.

## Was sind Theme-Aware Skills?

Theme-aware Skills sind vordefinierte Wissensdatenbanken und Werkzeugsätze, die der KI-Assistent automatisch basierend auf dem aktuell auf Ihrer Website aktiven WordPress-Theme auswählt. Wenn Sie Themes wechseln, aktualisieren sich die verfügbaren Skills des Assistenten automatisch – Sie müssen keine manuelle Konfiguration vornehmen.

Jeder Skill beinhaltet:

- **Theme-spezifische Dokumentation** – Anleitungen zur Verwendung und Anpassung des Themes
- **Block- und Pattern-Referenzen** – Verfügbare Blöcke, Patterns und Designoptionen
- **Anpassungsbeispiele** – Code-Snippets und Konfigurationsmuster für häufige Aufgaben
- **Best Practices** – Empfehlungen für die Architektur und den Workflow des Themes

## Verfügbare Theme-Aware Skills

### Block Themes

**Gilt für:** Themes, die die blockbasierte (Full Site Editing) Architektur von WordPress verwenden.

Der Block Themes Skill bietet Anleitungen zu:

- Erstellen und Bearbeiten von Templates mithilfe des Block Editors
- Arbeiten mit Block Patterns und wiederverwendbaren Blöcken
- Anpassung globaler Styles und theme.json Einstellungen
- Nutzung von Theme Blocks und Variationen
- Erstellen benutzerdefinierter Block Patterns für Ihre Website

**Aktiviert automatisch, wenn:** Ihr aktives Theme ein Block Theme ist (die Funktion `block-templates` unterstützt).

### Classic Themes

**Gilt für:** Traditionelle WordPress-Themes, die PHP-Templates und den klassischen Editor verwenden.

Der Classic Themes Skill bietet Anleitungen zu:

- Arbeiten mit PHP Template-Dateien und Hooks
- Anpassung des Theme-Erscheinungsbilds über den Customizer
- Nutzung von Widget-Bereichen und Sidebars
- Modifizieren von CSS und Child-Theme-Entwicklung
- Verständnis der Theme-Hierarchie und Template-Tags

**Aktiviert automatisch, wenn:** Ihr aktives Theme ein klassisches (nicht-blockbasiertes) Theme ist.

### Kadence Blocks

**Gilt für:** Websites, die das Kadence Blocks Plugin für erweitertes blockbasiertes Design verwenden.

Der Kadence Blocks Skill bietet Anleitungen zu:

- Nutzung der erweiterten Block-Bibliothek von Kadence (Hero, Testimonials, Pricing usw.)
- Konfigurieren von Kadence Block-Einstellungen und responsiven Optionen
- Erstellen benutzerdefinierter Layouts mit Kadence's Grid- und Container-Blöcken
- Integration von Kadence Blocks in Ihr Theme
- Nutzung von Kadence's Design System und Presets

**Aktiviert automatisch, wenn:** Das Kadence Blocks Plugin auf Ihrer Website aktiv ist.

### Kadence Theme

**Gilt für:** Websites, die das Kadence Theme für blockbasiertes Design und Anpassung verwenden.

Der Kadence Theme Skill bietet Anleitungen zu:

- Anpassung des Kadence Themes über globale Styles und theme.json
- Nutzung von Kadence's integrierten Block Patterns und Templates
- Konfigurieren der Kadence Theme-Einstellungen und Optionen
- Erstellen benutzerdefinierter Designs mit Kadence's Design System
- Integration von Kadence mit beliebten Plugins und Tools

**Aktiviert automatisch, wenn:** Das Kadence Theme Ihr aktives Theme ist.

## Wie Skills ausgewählt werden

Der Assistent erkennt Ihr aktives Theme und die installierten Plugins automatisch bei jeder Nachricht. Ist ein passender theme-aware Skill verfügbar, wird dieser automatisch in den Kontext des Assistenten geladen. Sie müssen die Skills nicht manuell aktivieren oder wechseln.

### Mehrere Skills

Wenn mehrere Skills für Ihre Website gelten (zum Beispiel, wenn sowohl Kadence Blocks als auch Kadence Theme aktiv sind), hat der Assistent Zugriff auf alle anwendbaren Skills und kann Anleitungen aus jedem beziehen.

### Themes wechseln

Wenn Sie Ihr aktives Theme ändern, aktualisieren sich die verfügbaren Skills des Assistenten automatisch bei der nächsten Nachricht. Zum Beispiel:

1. Sie verwenden ein Block Theme mit dem **Block Themes** Skill aktiv.
2. Sie wechseln zu einem klassischen Theme.
3. Bei Ihrer nächsten Nachricht wird der **Classic Themes** Skill automatisch geladen und der **Block Themes** Skill ist nicht mehr verfügbar.

## Nutzung von Theme-Aware Skills

Um einen theme-aware Skill zu nutzen, beschreiben Sie einfach im Chat-Interface, was Sie tun möchten. Der Assistent bezieht automatisch die entsprechende Anleitung des Skills.

### Beispiel-Prompts

**Für Block Themes:**
> "Erstelle einen Hero-Bereich mit einem Hintergrundbild und zentriertem Text mithilfe von Block Patterns."

**Für Classic Themes:**
> "Füge einen benutzerdefinierten Widget-Bereich zur Sidebar hinzu, indem ich ein Child Theme verwende."

**Für Kadence Blocks:**
> "Erstelle einen Testimonials-Bereich mithilfe des Kadence Testimonials Blocks."

**Für Kadence Theme:**
> "Passe das Header-Layout und die Navigation-Menü-Styling an."

Der Assistent liefert theme-spezifische Anleitungen und Code-Beispiele, die auf Ihr aktives Theme und Ihre Plugins zugeschnitten sind.

:::note
Theme-aware Skills sind ab Superdav AI Agent v1.10.0 und neuer automatisch verfügbar. Es ist keine zusätzliche Einrichtung oder Konfiguration erforderlich.
:::
