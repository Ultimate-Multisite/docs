---
title: Eingebaute Agenten
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Eingebaute Agenten

Gratis AI Agent v1.9.0 liefert fünf eingebaute Agenten, die jeweils mit einem fokussierten Satz von Tools, einem zugeschnittenen System-Prompt und Startvorschlägen ausgestattet sind, die auf gängige Aufgaben in diesem Bereich abgestimmt sind. Der Wechsel zwischen den Agenten ändert, was der Assistent tun kann und wie er antwortet – und das ohne jegliche Konfiguration Ihrerseits.

## Was ist ein Agent?

Jeder Agent ist ein benannter Konfigurations-Profil, das Folgendes kombiniert:

- **Tools** — die Fähigkeiten, die der Agent aufrufen darf (z. B. hat ein Content Writer Zugriff auf Funktionen zur Erstellung von Beiträgen; ein Design Studio hat Zugriff auf CSS- und theme.json-Funktionen)
- **System-Prompt** — Anweisungen, die den Ton, die Prioritäten und die Einschränkungen des Agenten festlegen
- **Vorschläge** — vorab verfasste Prompts, die in der Chat-Oberfläche angezeigt werden, um Ihnen einen schnellen Start zu ermöglichen

## Zugriff auf den Agenten-Auswähler (Agent Picker)

1. Öffnen Sie das **Gratis AI Agent**-Panel in der WordPress-Admin-Sidebar.
2. Klicken Sie auf das **Agenten-Symbol** oben links im Chat-Header (das Symbol ändert sich, um den aktiven Agenten widerzuspiegeln).
3. Der **Agenten-Auswähler (Agent Picker)** öffnet sich als Overlay-Formular. Jeder Agent ist mit seinem Symbol, Namen und einer Kurzbeschreibung aufgelistet.
4. Klicken Sie auf eine Agentenzeile, um ihn zu aktivieren. Der Chat-Header wird sofort aktualisiert.

Sie können Agenten auch mitten im Gespräch wechseln – der System-Prompt des neuen Agenten tritt mit der nächsten Nachricht in Kraft.

## Die fünf eingebauten Agenten

### Content Writer

**Fokus:** Erstellen und Bearbeiten von Beiträgen, Seiten und Kontaktformularen.

**Verfügbare Tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Was er gut kann:**
- Entwürfe und Veröffentlichung von Blogbeiträgen basierend auf einem Kurzbeschreibung oder einem Entwurf
- Erstellen von Batches von Landingpages für eine neue Website
- Erstellen von Kontakt- und Anfragenformularen
- Festlegen von Hauptbildern (Featured Images) für Beiträge anhand einer URL oder einer Suche

**Startvorschläge:**
- *Schreibe einen 500 Wörter langen Blogbeitrag über die Vorteile von WordPress Multisite.*
- *Erstelle eine Über uns-, Dienstleistungen- und Kontaktseite und veröffentliche sie.*
- *Füge ein Buchungsanfrageformular zur Kontaktseite hinzu.*

---

### Site Builder

**Fokus:** End-to-End-Website-Erstellung aus einem einzigen Prompt.

**Verfügbare Tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Was er gut kann:**
- Generieren eines mehrstufigen Site-Build-Plans für einen beschriebenen Geschäftstyp
- Autonomes Ausführen jeder Phase – Struktur, Inhalt, Navigation, Design
- Wiederherstellen nach Fehlern während des Plans, ohne manuelle Eingriffe zu erfordern
- Installation empfohlener Plugins im Rahmen des Builds
- Erstellen von Kontaktformularen direkt über die Chat-Oberfläche (Superdav AI Agent v1.10.0+)

**Startvorschläge:**
- *Baue eine Fotografie-Portfolio-Website mit einem Galerie-Post-Typ, einer Buchungsseite und einem Kontaktformular.*
- *Erstelle eine Restaurant-Website mit einer Online-Speisekarte, Öffnungszeiten und einem Tischreservierungsanfrageformular.*
- *Richte eine Website für freiberufliche Beratung mit Dienstleistungsseiten, einem Portfolio-Bereich und einem Blog ein.*
- *Füge ein Kontaktformular zur Kontaktseite mit dem Site Builder hinzu.*

---

### Design Studio

**Fokus:** Visuelle Anpassung – Farben, Typografie, CSS und Block-Muster.

**Verfügbare Tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Was es gut kann:**
- Anwendung benannter Theme-Presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Feinabstimmung der globalen Typografie und Farbpaletten über theme.json
- Einfügen von benutzerdefiniertem CSS für markenspezifische Überschreibungen
- Aufnehmen eines Screenshots einer Seite und Überprüfung auf Designprobleme

**Startvorschläge:**
- *Wende das warm-editorial Preset an und setze dann die Primärfarbe auf #2d6a4f.*
- *Mache einen Screenshot der Startseite und sage mir, was du verbessern würdest.*
- *Erstelle ein wiederverwendbares Hero-Block-Muster mit einem Full-Width-Hintergrundbild und einer zentrierten Überschrift.*

---

### Plugin Manager

**Fokus:** Entdecken, Installieren und Verwalten von WordPress-Plugins.

**Verfügbare Tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Was er gut kann:**
- Empfehlen des besten Plugins für einen beschriebenen Anwendungsfall
- Installation von Ability-Paketen aus dem Verzeichnis
- Durchsuchen des verfügbaren Ability-Katalogs nach Kategorien

**Startvorschläge:**
- *Was ist das beste Plugin für ein Mitgliederverzeichnis?*
- *Installiere das WooCommerce Ability-Paket.*
- *Zeige mir alle verfügbaren E-Commerce Ability-Pakete.*

---

### Support Assistant

**Fokus:** Beantwortung von Fragen zu Seiteninhalten, Einstellungen und WordPress-Konfiguration.

**Verfügbare Tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Was er gut kann:**
- Nachschlagen aktueller Seiteneinstellungen und Optionen
- Erklären, welche Post-Typen, Taxonomien und Menüs auf der Seite konfiguriert sind
- Beantworten von Fragen wie „Was macht diese Einstellung?“ durch Lesen von Live-Werten
- Dienen als schreibgeschichteter Diagnose-Layer, bevor Änderungen vorgenommen werden

**Startvorschläge:**
- *Welche Plugins und Einstellungen sind auf dieser Seite aktiv?*
- *Liste alle auf dieser Seite registrierten benutzerdefinierten Post-Typen auf.*
- *Welche Navigationsmenüs gibt es und wo sind sie zugewiesen?*

---

## Agenten anpassen

Jeder eingebaute Agent kann über den Filter `gratis_ai_agent_agents` erweitert oder ersetzt werden.

### Einen benutzerdefinierten System-Prompt zu einem bestehenden Agenten hinzufügen

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Einen neuen Agenten registrieren

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Der neue Agent erscheint im Agenten-Auswähler sofort, nachdem der Filter ausgeführt wurde.

### Einen eingebauten Agenten entfernen

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
