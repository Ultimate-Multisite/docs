---
title: Fähigkeiten des Theme Builders
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Fähigkeiten: Block-Themes erstellen und aktivieren

Superdav AI Agent v1.12.0 führt zwei leistungsstarke Fähigkeiten ein, mit denen Sie benutzerdefinierte Block-Themes direkt über die Chat-Oberfläche erstellen und einsetzen können.

## Überblick {#overview}

Die Fähigkeiten **scaffold-block-theme** und **activate-theme** ermöglichen es Agenten, Folgendes zu tun:
- Vollständige, produktionsreife Block-Themes basierend auf Ihren Vorgaben zu erstellen
- Themes automatisch auf Ihrer Website zu aktivieren, ohne dass manuelle Eingriffe nötig sind
- Durch geführte Designentscheidungen ein stimmiges visuelles Erscheinungsbild zu schaffen

## Block-Theme erstellen (Scaffold Block Theme) {#scaffold-block-theme}

Die Fähigkeit **scaffold-block-theme** generiert ein neues WordPress Block-Theme mit einer vollständigen Theme-Struktur, einschließlich:

- `theme.json`-Konfiguration mit Design-Tokens
- Block-Template-Dateien für gängige Layouts
- Benutzerdefinierte Block-Styles und Variationen
- Theme-Metadaten und Support-Deklarationen

### Wie man es aufruft {#how-to-invoke}

In Ihrem Chat mit Superdav AI Agent können Sie die Theme-Erstellung anfordern:

```
"Erstelle ein Block-Theme namens 'Modern Agency' mit einem blau-weißen Farbschema,
sans-serif Typografie und einem professionellen Layout"
```

Der Agent wird:
1. Ihre Designpräferenzen durch ein Gespräch erfragen
2. Die vollständige Theme-Struktur generieren
3. Alle notwendigen Theme-Dateien erstellen
4. Das Theme für die Aktivierung vorbereiten

### Erwartete Ausgabe {#expected-output}

Wenn die Fähigkeit erfolgreich ausgeführt wird, sehen Sie:

- Die Bestätigung, dass das Theme erstellt wurde
- Den Namen und den Speicherort des Themes
- Eine Zusammenfassung der angewendeten Design-Tokens (Farben, Typografie, Abstände)
- Den Status „Bereit zur Aktivierung“

Beispielausgabe:
```
✓ Theme "Modern Agency" erfolgreich erstellt
  Speicherort: /wp-content/themes/modern-agency/
  Farben: Primär #0066CC, Sekundär #FFFFFF
  Typografie: Inter (sans-serif)
  Status: Bereit zur Aktivierung
```

## Theme aktivieren (Activate Theme) {#activate-theme}

Die Fähigkeit **activate-theme** schaltet Ihre Website auf ein neu erstelltes oder bereits existierendes Block-Theme um.

### Wie man es aufruft {#how-to-invoke-1}

Nachdem Sie ein Theme erstellt haben, können Sie es sofort aktivieren:

```
"Aktiviere das Theme Modern Agency"
```

Oder ein beliebiges bestehendes Theme aktivieren:

```
"Wechsle zum Theme Twentytwentyfour"
```

### Erwartete Ausgabe {#expected-output-1}

Wenn die Aktivierung erfolgreich ist:

- Die Bestätigung des aktiven Themes
- Der Name des vorherigen Themes (zu Ihrer Information)
- Die URL der Website, auf der das Theme nun live ist
- Eventuelle Hinweise zur Theme-spezifischen Einrichtung

Beispielausgabe:
```
✓ Theme erfolgreich aktiviert
  Aktives Theme: Modern Agency
  Vorheriges Theme: Twentytwentyfour
  Live unter: https://yoursite.com
  Hinweis: Überprüfen Sie Ihre Startseite, um das Layout zu verifizieren
```

## Workflow: Erstellen und Aktivieren {#workflow-scaffold-and-activate}

Ein typischer Workflow kombiniert beide Fähigkeiten:

1. **Theme-Erstellung anfordern**: "Erstelle ein Block-Theme für meine SaaS-Landingpage"
2. **Agent erstellt das Theme**: Generiert Dateien und Design-Tokens
3. **Überprüfen und verfeinern**: Besprechen Sie Designänderungen bei Bedarf
4. **Aktivieren**: "Aktiviere das Theme jetzt"
5. **Verifizieren**: Besuchen Sie Ihre Website, um zu bestätigen, dass das neue Design live ist

## Design-Tokens und Anpassung {#design-tokens-and-customization}

Erstellte Themes verwenden WordPress Design-Tokens (über `theme.json`) für:

- **Farben**: Primär, sekundär, Akzent, neutrale Palette
- **Typografie**: Schriftfamilien, Größen, Gewichte, Zeilenhöhen
- **Abstände**: Padding, Margin, Gap-Skalen
- **Bordüren**: Radius- und Breiten-Tokens
- **Schatten**: Elevationsstufen

Diese Tokens sind in `theme.json` zentralisiert, was es einfach macht, Ihr gesamtes Designsystem aus einer einzigen Datei anzupassen.

## Einschränkungen und Hinweise {#limitations-and-notes}

- Themes werden in `/wp-content/themes/` erstellt und müssen die WordPress-Namenskonventionen einhalten
- Die Aktivierung erfordert entsprechende Berechtigungen auf Ihrer WordPress-Website
- Benutzerdefinierter PHP-Code in Themes ist minimal; verwenden Sie Plugins für komplexe Funktionalität
- Block-Themes funktionieren am besten mit WordPress 5.9 und neuer

## Fehlerbehebung {#troubleshooting}

**Das Theme erscheint nicht nach der Erstellung**
- Überprüfen Sie, ob das Theme-Verzeichnis existiert und die korrekten Berechtigungen hat
- Stellen Sie sicher, dass `theme.json` ein gültiges JSON ist
- Vergewissern Sie sich, dass der Theme-Name nicht mit bestehenden Themes kollidiert

**Die Aktivierung schlägt fehl**
- Bestätigen Sie, dass Sie Administratorberechtigungen haben
- Überprüfen Sie, ob das Theme-Verzeichnis von WordPress lesbar ist
- Überprüfen Sie die WordPress-Fehlerprotokolle auf Details

**Design-Tokens werden nicht angewendet**
- Überprüfen Sie die Syntax von `theme.json`
- Löschen Sie alle Caching-Plugins
- Überprüfen Sie, ob Ihre WordPress-Version die verwendeten Tokens unterstützt

## Nächste Schritte {#next-steps}

Nach der Aktivierung Ihres Themes können Sie:
- Die **Design System Aesthetics skill** verwenden, um Typografie, Farben und Abstände zu verfeinern
- Einzelne Block-Styles über den WordPress Block Editor anpassen
- Benutzerdefiniertes CSS in der `style.css`-Datei des Themes hinzufügen
- Benutzerdefinierte Block-Templates für bestimmte Seitentypen erstellen
