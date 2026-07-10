---
title: Menü erstellen
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menü erstellen {#create-menu}

Die Funktion **Menü erstellen** ermöglicht die Erstellung von WordPress-Navigationsmenüs und unterstützt dabei separate Navigationsbezeichnungen, die sich vom Seitentitel unterscheiden können.

## Überblick {#overview}

Diese Funktion erweitert die Standardfunktionalität zur Menüerstellung, indem sie die Möglichkeit bietet, einen `navigation_label`-Parameter festzulegen. Dadurch können Sie Menüs erstellen, bei denen das in der Navigation angezeigte Label vom Seitentitel abweicht. Das bietet mehr Flexibilität bei der Seitenstruktur und der Benutzererfahrung.

## Parameter {#parameters}

| Parameter | Typ | Erforderlich | Beschreibung |
|-----------|------|----------|-------------|
| `name` | string | Ja | Name des Menüs, z. B. `Hauptnavigation` |
| `location` | string | Nein | Theme-Standort, an dem dieses Menü zugewiesen werden soll, z. B. `primary` |
| `navigation_label` | string | Nein | Label, das in der Navigation angezeigt wird (unterscheidet sich vom Seitentitel) |

## Rückgabewert {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigations-Label vs. Seitentitel {#navigation-label-vs-page-title}

Der Parameter `navigation_label` ermöglicht es Ihnen, den internen Menünamen vom Label zu trennen, das den Benutzern angezeigt wird:

- **`name`** — Interner Menübezeichner, der von WordPress verwendet wird (z. B. "Primary Navigation")
- **`navigation_label`** — Das Label, das den Website-Besuchern in der Navigation angezeigt wird (z. B. "Main Menu")

Dies ist nützlich, wenn:
- Ihre interne Namenskonvention von den für Benutzer sichtbaren Labels abweicht
- Sie in der Navigation kürzere Labels wünschen als im Admin-Bereich
- Sie mehrere Sprachen unterstützen müssen, die unterschiedliche Label-Längen erfordern
- Sie Menüs für bestimmte Regionen oder Benutzergruppen erstellen

## Anwendungsbeispiele {#usage-examples}

### Beispiel 1: Einfaches Menü mit Navigations-Label {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Erstelle ein Hauptnavigationsmenü mit dem Namen "Main Navigation" und dem Navigations-Label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Beispiel 2: Menü für einen bestimmten Theme-Standort {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Erstelle ein Footer-Menü namens "Footer Links" mit dem Navigations-Label "Quick Links" und weise es dem Footer-Standort zu.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integration mit Theme Builder {#integration-with-theme-builder}

Wenn Sie den Theme Builder verwenden, erledigt die Funktion Menü erstellen Folgendes:

1. Erkennt automatisch verfügbare Theme-Menü-Standorte
2. Erstellt Menüs mit passenden Navigations-Labels für Ihr Design
3. Weist die Menüs den korrekten Theme-Standorten zu
4. Unterstützt das Hinzufügen von Menüpunkten nach der Erstellung

## Verwandte Funktionen {#related-abilities}

- **`add_menu_item`** — Elemente zu einem bestehenden Menü hinzufügen
- **`update_menu`** — Einen Menünamen ändern oder ihn einem Theme-Standort neu zuweisen
- **`delete_menu`** — Ein Menü von Ihrer Website entfernen

## Best Practices {#best-practices}

- **Verwenden Sie klare Navigations-Labels** — Halten Sie die Labels prägnant und beschreibend für die Benutzer
- **Passen Sie Theme-Standorte an** — Weisen Sie Menüs dem korrekten Theme-Standort zu, damit sie richtig angezeigt werden
- **Planen Sie die Menüstruktur** — Entscheiden Sie über Ihre Menühierarchie, bevor Sie Elemente erstellen
- **Testen Sie die Responsivität** — Überprüfen Sie, ob die Menüs auf mobilen Geräten korrekt angezeigt werden
- **Lokalisieren Sie Labels** — Verwenden Sie für verschiedene Sprachversionen unterschiedliche Navigations-Labels

## Einschränkungen {#limitations}

- Navigations-Labels dienen nur der Anzeige; der interne `name` wird weiterhin zur Identifizierung durch WordPress verwendet
- Die Theme-Unterstützung variiert; nicht alle Themes unterstützen alle Menü-Standorte
- Menüpunkte müssen nach der Menüerstellung separat hinzugefügt werden
- Eine Änderung des Navigations-Labels erfordert ein Update des Menüs

## Verwandte Funktionen {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — Logos für Ihren Seitenkopf erstellen
- [Validate Palette Contrast](./validate-palette-contrast.md) — Farbschemata auf Barrierefreiheit prüfen
