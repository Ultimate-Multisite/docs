---
title: Fähigkeiten-Referenz
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Fähigkeiten-Referenz

Fähigkeiten sind die atomaren Aktionen, die der Gratis AI Agent auf Ihrer WordPress-Installation ausführen kann. Jede Fähigkeit ist eine registrierte PHP-Klasse, die ein JSON-Schema bereitstellt – der Agent liest dieses Schema zur Laufzeit aus, um zu verstehen, welche Parameter erforderlich sind und was die Fähigkeit zurückgibt.

Diese Seite dokumentiert alle Fähigkeiten, die mit Gratis AI Agent v1.9.0 geliefert werden.

---

## Benutzerdefinierte Beitragstypen (Custom Post Types)

Diese Fähigkeiten verwalten benutzerdefinierte Beitragstypen (CPTs), die über den Agenten registriert wurden. Die Registrierungen werden in der WordPress-Optionstabelle gespeichert, sodass sie auch nach Deaktivierung und Reaktivierung des Plugins bestehen bleiben.

### `register_post_type`

Registriert einen neuen benutzerdefinierten Beitragstyp.

**Parameter**

| Parameter | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `slug` | string | Ja | Der Post-Typ-Schlüssel (max. 20 Zeichen, keine Großbuchstaben, keine Leerzeichen) |
| `singular_label` | string | Ja | Der lesbare Singularname für Menschen, z. B. `Portfolio Item` |
| `plural_label` | string | Ja | Der lesbare Pluralname für Menschen, z. B. `Portfolio Items` |
| `public` | boolean | Nein | Ob der Beitragstyp öffentlich zugänglich ist. Standardwert `true` |
| `supports` | array | Nein | Unterstützte Funktionen: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Standardwert `["title","editor"]` |
| `has_archive` | boolean | Nein | Ob eine Archivseite für den Beitragstyp aktiviert ist. Standardwert `false` |
| `menu_icon` | string | Nein | Dashicons-Klasse oder URL für das Admin-Menüsymbol. Standardwert `"dashicons-admin-post"` |
| `rewrite_slug` | string | Nein | Der URL-Slug für den Beitragstyp. Standard ist `slug` |

**Beispiel**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Rückgabe** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Gibt alle vom Agenten registrierten benutzerdefinierten Beitragstypen zurück.

**Parameter** — keine

**Rückgabe**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type`

Deaktiviert einen zuvor vom Agenten registrierten benutzerdefinierten Beitragstyp. Bestehende Beiträge dieses Typs bleiben in der Datenbank erhalten, sind aber über den Beitragstyp nicht mehr zugänglich.

**Parameter**

| Parameter | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `slug` | string | Ja | Der Post-Typ-Schlüssel zum Entfernen |

**Rückgabe** `{ "success": true, "slug": "portfolio" }`

---

## Benutzerdefinierte Taxonomien (Custom Taxonomies)

Diese Fähigkeiten verwalten benutzerdefinierte Taxonomien. Genau wie CPTs werden auch die Registrierungen gespeichert.

### `register_taxonomy`

Registriert eine neue benutzerdefinierte Taxonomie.

**Parameter**

| Parameter | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `slug` | string | Ja | Der Schlüssel der Taxonomie (max. 32 Zeichen) |
| `singular_label` | string | Ja | Der lesbare Singularname für Menschen, z. B. `Project Category` |
| `plural_label` | string | Ja | Der lesbare Pluralname für Menschen, z. B. `Project Categories` |
| `post_types` | array | Ja | Die Post-Typ-Slugs, denen diese Taxonomie zugeordnet werden soll |
| `hierarchical` | boolean | Nein | `true` für kategoriespezifische Struktur, `false` für Tag-Stil. Standardwert `true` |
| `public` | boolean | Nein | Ob die Begriffe öffentlich zugänglich sind. Standardwert `true` |
| `rewrite_slug` | string | Nein | Der URL-Slug für die Taxonomie. Standard ist `slug` |

**Beispiel**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Rückgabe** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Gibt alle vom Agenten registrierten benutzerdefinierten Taxonomien zurück.

**Parameter** — keine

**Rückgabe**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy`

Deaktiviert eine zuvor vom Agenten registrierte benutzerdefinierte Taxonomie.

**Parameter**

| Parameter | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `slug` | string | Ja | Der Schlüssel der Taxonomie zum Entfernen |

**Rückgabe** `{ "success": true, "slug": "project-category" }`

---

## Designsystem (Design System)

Fähigkeiten des Designsystems modifizieren die visuelle Darstellung der WordPress-Seite – von benutzerdefiniertem CSS über Blockmuster bis hin zum Seitensymbol.

### `inject_custom_css`

Fügt CSS über `wp_add_inline_style` in den `<head>` der Seite hinzu. Das CSS wird in der Option `gratis_ai_agent_custom_css` gespeichert und sauber entfernt, wenn die Fähigkeit zurückgesetzt wird.

**Parameter**

| Parameter | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `css` | string | Ja | Gültiges CSS zum Einfügen |
| `label` | string | Nein | Lesbarer Name für diesen CSS-Block, verwendet in Debug-Logs. Standardwert `"agent-injected"` |
| `replace` | boolean | Nein | Wenn `true`, ersetzt es alle zuvor eingefügten CSS. Standardwert `false` (fügt an) |

**Beispiel**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Rückgabe** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Registriert ein wiederverwendbares Blockmuster in der WordPress Pattern Library.

**Parameter**

| Parameter | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `slug` | string | Ja | Identifikator des Musters, z. B. `gratis/hero-dark` |
| `title` | string | Ja | Lesbarer Name des Musters, der im Editor angezeigt wird |
| `content` | string | Ja | Serialisierter Block-Markup (HTML) für das Muster |
| `categories` | array | Nein | Slug-Kategorien des Musters, z. B. `["featured", "hero"]` |
| `description` | string | Nein | Kurzbeschreibung, die im Muster-Picker angezeigt wird |
| `keywords` | array | Nein | Suchbegriffe |

**Rückgabe** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Listet alle vom Agenten registrierten Blockmuster auf.

**Parameter** — keine

### `set_site_logo`

Setzt das WordPress-Webseiten-Logo auf eine bestimmte Attachment-ID oder eine entfernte Bild-URL. Wenn eine URL angegeben wird, wird das Bild heruntergeladen und in der Media Library importiert.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `attachment_id` | integer | Nein | ID einer vorhandenen Media Library Attachment |
| `url` | string | Nein | Entfernte Bild-URL zum Importieren und als Logo festlegen |

Einer von `attachment_id` oder `url` muss angegeben werden.

**Rückgabe** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Wendet ein benanntes Farbbe-/Typografie-Preset auf die `theme.json` (oder `global-styles`) des aktiven Themes an. Presets sind gebündelte Sammlungen, die vom Gratis AI Agent Team gepflegt werden.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `preset` | string | Ja | Name des Presets, z. B. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nein | Wenn `true`, werden die Werte mit den bestehenden Werten zusammengeführt, anstatt sie zu ersetzen. Standardwert ist `false`. |

**Verfügbare Presets**

| Preset | Beschreibung |
|---|---|
| `minimal-dark` | Fast schwarzer Hintergrund, weißer Text, eine Akzentfarbe |
| `warm-editorial` | Warmer Off-White-Hintergrund, Serifenschriften, erdige Akzentfarben |
| `corporate-blue` | Marineblau und Weiß Palette mit professioneller Typografie |
| `vibrant-startup` | Leuchtende Farbverläufe, abgerundete Ecken, moderne serifenlose Schriftart |
| `classic-blog` | Neutrale Grautöne, angenehme Zeilenhöhe, traditionelles Layout-Abstand |

**Rückgabe** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Global Styles ermöglichen das Lesen und Schreiben von `theme.json`-Werten über die WordPress Global Styles API, was alle Blöcke und Vorlagen sitewide beeinflusst.

### `get_global_styles`

Gibt die aktuelle Konfiguration der globalen Styles zurück.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `path` | string | Nein | JSON-Pointer zu einem spezifischen Wert, z. B. `/color/palette` oder `/typography/fontSizes`. Gibt das gesamte Objekt zurück, wenn es weggelassen wird. |

**Rückgabe** Das vollständige globale Styles-Objekt oder der Wert an `path`.

---

### `set_global_styles`

Aktualisiert einen oder mehrere Werte in der globalen Styles-Konfiguration.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `path` | string | Ja | JSON-Pointer zum Wert, den Sie festlegen möchten, z. B. `/color/palette` |
| `value` | any | Ja | Der neue Wert |

**Beispiel** — Eine Farbe zur Palette hinzufügen

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Rückgabe** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Setzt alle vom Agent angewendeten globalen Styles-Änderungen zurück und stellt die Standardeinstellungen des Themes wieder her.

**Parameter** — keine

**Rückgabe** `{ "success": true }`

---

## Navigation Menüs

Navigation Menü-Funktionen erstellen und verwalten WordPress Navigationsmenüs und deren Elemente.

### `create_menu`

Erstellt ein neues WordPress Navigationsmenü.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `name` | string | Ja | Name des Menüs, z. B. `Primary Navigation` |
| `location` | string | Nein | Theme-Standort, dem dieses Menü zugewiesen wird, z. B. `primary` |

**Rückgabe** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Benennt ein Menü um oder weist es einem Theme-Standort neu zu.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `menu_id` | integer | Ja | ID des Menüs, das aktualisiert werden soll |
| `name` | string | Nein | Neuer Menüname |
| `location` | string | Nein | Theme-Standort, dem zugewiesen oder neu zugewiesen wird |

**Rückgabe** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Fügt einen Eintrag zu einem bestehenden Navigationsmenü hinzu.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `menu_id` | integer | Ja | ID des Zielmenüs |
| `type` | string | Ja | Eintrags-Typ: `custom`, `post_type` oder `taxonomy` |
| `title` | string | Nein | Bezeichnung für den Menüpunkt (erforderlich für den Typ `custom`) |
| `url` | string | Nein | URL für `custom`-Einträge |
| `object_id` | integer | Nein | Post-ID oder Term-ID für Einträge vom Typ `post_type`/`taxonomy` |
| `parent_id` | integer | Nein | Menüpunkt-ID, unter dem dieser Eintrag verschachtelt werden soll |
| `position` | integer | Nein | Nullbasierte Position im Menü |

**Rückgabe** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Entfernt einen Eintrag aus einem Navigationsmenü.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `item_id` | integer | Ja | ID des Menüpunkts, der entfernt werden soll |

**Rückgabe** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Listet alle WordPress Navigationsmenüs auf, einschließlich ihrer zugewiesenen Theme-Standorte.

**Parameter** — keine

**Rückgabe**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Options Management

Optionen-Funktionen lesen und schreiben WordPress-Optionen über `get_option` / `update_option`. Ein integrierter Sicherheitsblocklist verhindert versehentliche Änderungen an kritischen Einstellungen.

### `get_option`

Liest eine WordPress-Option.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `option_name` | string | Ja | Der Option-Schlüssel, z. B. `blogname` |

**Rückgabe** `{ "option_name": "blogname", "value": "My Site" }`

Gibt einen Fehler zurück, wenn `option_name` auf der Sicherheitsblockliste steht.

---

### `set_option`

Schreibt eine WordPress-Option.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `option_name` | string | Ja | Der Option-Schlüssel |
| `value` | any | Ja | Der neue Wert (wird für Arrays/Objekte automatisch serialisiert) |
| `autoload` | string | Nein | `"yes"` oder `"no"`. Standardwert behält die bestehende Autoload-Einstellung bei. |

Gibt einen Fehler zurück, wenn `option_name` auf der Sicherheitsblockliste steht.

**Rückgabe** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Löscht eine WordPress-Option.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `option_name` | string | Ja | Der Option-Schlüssel, der gelöscht werden soll |

Gibt einen Fehler zurück, wenn `option_name` auf der Sicherheitsblockliste steht.

**Rückgabe** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Listet WordPress-Optionen auf, die einem Muster entsprechen.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `pattern` | string | Nein | SQL LIKE-Muster zur Filterung der Optionennamen, z. B. `gratis_%`. Wenn weggelassen wird, werden alle Optionen zurückgegeben (Vorsicht bei großen Datenbanken). |
| `limit` | integer | Nein | Maximale Anzahl der Ergebnisse. Standardwert `50`, maximal `500` |

**Rückgabe**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Content Management

Content Management-Funktionen ermöglichen das Erstellen und Bearbeiten von WordPress-Posts und Seiten. Post-IDs werden zurückgegeben, damit nachfolgende Schritte in Multi-Ability-Plänen auf den erstellten Inhalt verweisen können.

### `create_post`

Erstellt einen neuen WordPress-Post, eine Seite oder einen Eintrag für einen benutzerdefinierten Post-Typ.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `title` | string | Ja | Titel des Posts |
| `content` | string | Nein | Post-Inhalt – akzeptiert reinen Text, HTML oder serialisierten Block-Markup |
| `status` | string | Nein | Status: `draft`, `publish`, `pending`, `private`. Standardwert `draft` |
| `post_type` | string | Nein | Slug des Post-Typs, z. B. `post`, `page` oder jeder registrierte CPT. Standardwert `post` |
| `excerpt` | string | Nein | Kurze Zusammenfassung, die in Archiven und Suchergebnissen angezeigt wird |
| `categories` | array | Nein | Array von Kategorienamen oder -IDs zur Zuordnung |
| `tags` | array | Nein | Array von Tag-Namen oder -IDs zur Zuordnung |
| `author` | integer | Nein | WordPress Benutzer-ID, die als Autor des Posts festgelegt wird. Standardmäßig der aktuelle Benutzer |
| `date` | string | Nein | Veröffentlichungsdatum im ISO 8601 Format, z. B. `2026-05-01T09:00:00` |
| `page_template` | string | Nein | Vorlagen-Datei, die diesem Post oder dieser Seite zugewiesen wird, z. B. `page-full-width.php`. Nur sinnvoll, wenn `post_type` `page` ist oder ein CPT verwendet, der Seitenvorlagen unterstützt. |

**Beispiel**

```json
{
  "title": "Willkommen auf unserer neuen Seite",
  "content": "<!-- wp:paragraph --><p>Hallo Welt!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Rückgabe** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Aktualisiert einen bestehenden WordPress-Post oder eine Seite.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `post_id` | integer | Ja | ID des zu aktualisierenden Posts |
| `title` | string | Nein | Neuer Posttitel |
| `content` | string | Nein | Neuer Post-Inhalt |
| `status` | string | Nein | Neuer Status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Nein | Neue Zusammenfassung |
| `categories` | array | Nein | Ersetzt die vollständige Kategorienliste durch dieses Array von Namen oder IDs |
| `tags` | array | Nein | Ersetzt die vollständige Tag-Liste durch dieses Array von Namen oder IDs |
| `page_template` | string | Nein | Neue Vorlagen-Datei, die diesem Post oder dieser Seite zugewiesen wird, z. B. `page-full-width.php`. Geben Sie einen leeren String an, um die Vorlagenzuweisung zu entfernen und zur Standardvorlage des Themes zurückzukehren. |

**Beispiel** — Vorlage nach Erstellung ändern

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Rückgabe** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Erstellt mehrere Posts in einem einzigen Aufruf der Fähigkeit, um Round-Trips bei der Website-Erstellung oder dem Bulk-Content-Import zu reduzieren. Die Posts werden nacheinander erstellt; wenn einer fehlschlägt, fahren die anderen fort und der Fehler wird im Ergebnisarray gemeldet.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `posts` | array | Ja | Array von Post-Objekten, wobei jedes dieselben Parameter wie `create_post` akzeptiert |
| `stop_on_error` | boolean | Nein | Wenn `true`, wird die Verarbeitung nach dem ersten Fehler gestoppt. Standardwert `false` |

**Beispiel**

```json
{
  "posts": [
    {
      "title": "Über uns",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Dienstleistungen",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Kontakt",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Rückgabe**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "Über uns" },
    { "success": true, "post_id": 43, "title": "Dienstleistungen" },
    { "success": true, "post_id": 44, "title": "Kontakt" }
  ]
}
```

---

### `set_featured_image`

Weist ein Vorschaubild (Post-Thumbnail) einem bestehenden Post oder einer Seite zu. Es akzeptiert eine vorhandene ID aus der Media Library oder eine entfernte Bild-URL; wenn eine URL angegeben wird, wird das Bild automatisch heruntergeladen und importiert.

**Parameter**

| Parameter | Typ | Pflicht | Beschreibung |
|---|---|---|---|
| `post_id` | integer | Ja | ID des zu aktualisierenden Posts oder der Seite |
| `attachment_id` | integer | Nein | ID eines vorhandenen Media Library-Anhangs |
| `url` | string | Nein | Entfernte Bild-URL, die importiert und als Vorschaubild festgelegt wird |
| `alt_text` | string | Nein | Alternativtext, der dem Anhang zugewiesen wird, wenn er aus einer URL importiert wird |

Eines von `attachment_id` oder `url` muss angegeben werden.

**Rückgabe** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Erstellt ein Kontaktformular unter Verwendung des aktiven Formular-Plugins (Contact Form 7, WPForms, Fluent Forms oder Gravity Forms, je nachdem, welches installiert ist). Es gibt einen Shortcode zurück, der in jedem Post oder jeder Seite eingebettet werden kann.

**Parameter**

## Visuelle Überprüfung

Die Funktion Visual Review ermöglicht es dem Agenten, Screenshots von Live-Seiten aufzunehmen und diese zu analysieren. Dadurch können Design-Überprüfungen autonom durchgeführt werden, Vergleiche vor und nach Änderungen sowie visuelle Regressionsprüfungen – ganz ohne dass Sie eine Browser-Erweiterung installieren müssen.

### `capture_screenshot`

Diese Funktion nimmt einen Screenshot einer WordPress-Seite an einer bestimmten URL mithilfe eines serverseitigen Headless Browsers auf. Das Bild wird in der Media Library gespeichert und es wird eine CDN-URL zurückgegeben.

**Parameter**

| Parameter | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `url` | string | Ja | Die vollständige URL der Seite, die als Screenshot aufgenommen werden soll, z. B. `https://example.com/about/` |
| `width` | integer | Nein | Breite des Viewports in Pixeln. Standardwert: `1280` |
| `height` | integer | Nein | Höhe des Viewports in Pixeln. Standardwert: `800` |
| `full_page` | boolean | Nein | Nimmt die gesamte scrollbare Seite auf, anstatt nur den sichtbaren Bereich. Standardwert: `false` |
| `delay_ms` | integer | Nein | Millisekunden, die nach dem Laden der Seite gewartet werden, bevor die Aufnahme erfolgt (nützlich für animierten Inhalt). Standardwert: `500` |
| `label` | string | Nein | Eine lesbare Bezeichnung, die mit dem Attachment in der Media Library gespeichert wird. |

**Rückgabe**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots`

Diese Funktion nimmt zwei Screenshots auf und gibt einen visuellen Differenzwert sowie ein Differenzbild zurück, das die geänderten Bereiche hervorhebt. Sie ist nützlich, um zu bestätigen, dass eine Designänderung das erwartete Ergebnis erzielt hat, oder um unbeabsichtigte Regressionsfehler zu erkennen.

**Parameter**

| Parameter | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `before_url` | string | Ja | URL der Seite, die als "vorher"-Zustand aufgenommen werden soll. |
| `after_url` | string | Ja | URL der Seite, die als "nachher"-Zustand aufgenommen wird. Kann dieselbe URL sein, wenn man über die Zeit vergleicht. |
| `width` | integer | Nein | Viewportbreite für beide Aufnahmen. Standardwert: `1280` |
| `threshold` | float | Nein | Pixel-Differenzschwellenwert (0,0–1,0). Pixel innerhalb dieser Toleranz gelten als unverändert. Standardwert: `0.1` |

**Rückgabe**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

Ein `diff_score` von `0.0` bedeutet keine sichtbare Änderung; `1.0` bedeutet, dass jedes Pixel geändert wurde.

---

### `review_page_design`

Diese Funktion nimmt einen Screenshot einer Seite auf und sendet ihn an das Sprachmodell zur visuellen Analyse. Sie gibt eine strukturierte Bewertung zurück, die Layout, Typografie, Farbverwendung und Barrierefreiheitsaspekte abdeckt.

**Parameter**

| Parameter | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `url` | string | Ja | Die vollständige URL der Seite, die überprüft werden soll. |
| `focus` | string | Nein | Komma-getrennter Listenbereich für Bereiche, die hervorgehoben werden sollen: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Standardwert: alle Bereiche. |
| `width` | integer | Nein | Viewportbreite. Standardwert: `1280` |

**Rückgabe**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "Die Seitenstruktur ist sauber und lesbar. Zwei Barrierefreiheitsprobleme wurden festgestellt.",
    "layout": "Gute visuelle Hierarchie. Der Hero-Bereich ist prominent platziert.",
    "typography": "Der Fließtext hat 15px – ziehen Sie in Betracht, ihn auf 16px zu erhöhen, um die Lesbarkeit zu verbessern.",
    "colour": "Das Kontrastverhältnis für den CTA-Button (#fff auf #4a90e2) beträgt 3,1:1 – unter der WCAG AA-Schwelle von 4,5:1.",
    "accessibility": ["Niedriger Kontrast beim CTA-Button", "Fehlender Alt-Text bei dem Hero-Bild"],
    "suggestions": ["Dunkleren CTA-Button auf #1a5cb0 anpassen, um WCAG AA zu erfüllen", "Beschreibenden Alt-Text für das Hero-Bild hinzufügen"]
  }
}
```

---

## Installierbare Fähigkeiten

Das Register installierbarer Fähigkeiten ermöglicht es Ihnen, den Agenten mit zusätzlichen Fähigkeitspaketen zu erweitern, die als WordPress-Plugins verteilt werden. Jedes Paket registriert eine oder mehrere Fähigkeiten mithilfe der Standard-Ability API.

### `list_available_abilities`

Gibt das Katalog der Fähigkeitspakete zurück, die aus dem Register zur Installation verfügbar sind.

**Parameter**

| Parameter | Type | Required | Beschreibung |
|---|---|---|---|
| `category` | string | Nein | Filtern nach Kategorie: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Rückgabe**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability`

Lädt und aktiviert ein Ability Pack aus dem Registry herunter.

**Parameter**

| Parameter | Type | Required | Beschreibung |
|---|---|---|---|
| `slug` | string | Ja | Slug des Ability Pack Plugins |

**Rückgabe** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Abfragt das Ability Registry nach dem besten Plugin für einen beschriebenen Anwendungsfall und installiert es optional.

**Parameter**

| Parameter | Type | Required | Beschreibung |
|---|---|---|---|
| `description` | string | Ja | Natürliche Sprachbeschreibung der gewünschten Funktionalität |
| `install` | boolean | Nein | Wenn `true`, wird das empfohlene Plugin sofort installiert. Standardwert ist `false` |

**Beispiel**

```json
{
  "description": "Ich brauche ein Kontaktformular mit Dateiupload-Unterstützung und Spam-Schutz",
  "install": false
}
```

**Rückgabe**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Weit verbreitet, unterstützt Dateiuploads und integriert sich mit Akismet zur Spamfilterung.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
