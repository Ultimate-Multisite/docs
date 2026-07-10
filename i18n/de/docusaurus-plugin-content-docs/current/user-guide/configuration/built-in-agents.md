---
title: Integrierte Agenten
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Integrierte Agents {#built-in-agents}

Gratis AI Agent v1.9.0 wird mit fünf integrierten Agents ausgeliefert, die jeweils mit einem fokussierten Satz von Tools, einem angepassten System-Prompt und Starter-Vorschlägen vorkonfiguriert sind, die zu häufigen Aufgaben in diesem Bereich passen. Das Wechseln zwischen Agents ändert, was der Assistent tun kann und wie er antwortet — ganz ohne Konfiguration Ihrerseits. Superdav AI Agent v1.18.0 kann diesen Workflows zeitplanbezogene Tools, Erinnerungsdatensätze, Freigabe-Gates und SMS-Benachrichtigungen hinzufügen, wenn die zugehörigen Integrationen konfiguriert sind.

## Was ist ein Agent? {#what-is-an-agent}

Jeder Agent ist ein benanntes Konfigurationsprofil, das Folgendes kombiniert:

- **Tools** — die Fähigkeiten, die der Agent aufrufen darf (z. B. hat ein Content Writer Zugriff auf Fähigkeiten zur Beitragserstellung; ein Design Studio hat Zugriff auf CSS- und theme.json-Fähigkeiten)
- **System-Prompt** — Anweisungen, die Ton, Prioritäten und Einschränkungen des Agents festlegen
- **Vorschläge** — vorformulierte Prompts, die in der Chat-Oberfläche angezeigt werden, damit Sie schnell loslegen können

## Zugriff auf den Agent Picker {#accessing-the-agent-picker}

1. Öffnen Sie das **Gratis AI Agent**-Panel in der WordPress-Admin-Seitenleiste.
2. Klicken Sie auf das **Agent-Symbol** oben links im Chat-Header (das Symbol ändert sich entsprechend dem aktiven Agent).
3. Der **Agent Picker** öffnet sich als Formular-Tabellen-Overlay. Jeder Agent wird mit Symbol, Name und einer einzeiligen Beschreibung aufgeführt.
4. Klicken Sie auf eine Agent-Zeile, um ihn zu aktivieren. Der Chat-Header wird sofort aktualisiert.

Sie können Agents auch mitten in einer Unterhaltung wechseln — der System-Prompt des neuen Agents gilt ab der nächsten Nachricht.

## Die fünf integrierten Agents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Fokus:** Erstellen und Bearbeiten von Beiträgen, Seiten und Kontaktformularen.

**Verfügbare Tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Mit aktivierten Superdav AI Agent v1.18.0-Integrationen können konfigurierter Kalenderkontext, Freigabe-Gates, Erinnerungen und SMS-Benachrichtigungstools auch für genehmigte Workflows verfügbar sein.

**Was er gut kann:**
- Blogbeiträge aus einem Briefing oder einer Gliederung entwerfen und veröffentlichen
- Stapel von Landingpages für eine neue Website erstellen
- Kontakt- und Anfrageformulare erstellen
- Beitragsbilder für Beiträge über eine URL oder Suche festlegen
- Nachfassnachrichten zu Veranstaltungen aus dem konfigurierten Google Calendar-Kontext entwerfen und dann vor dem Senden von Benachrichtigungen zur Freigabe pausieren

**Starter-Vorschläge:**
- *Schreibe einen Blogbeitrag mit 500 Wörtern über die Vorteile von WordPress multisite.*
- *Erstelle eine Über-uns-, Leistungen- und Kontaktseite und veröffentliche sie.*
- *Füge der Kontaktseite ein Buchungsanfrageformular hinzu.*
- *Entwirf eine Erinnerung für Teilnehmende zum konfigurierten Kalenderereignis von morgen und warte vor dem Senden auf Freigabe.*

---

### Site Builder {#site-builder}

**Fokus:** End-to-End-Erstellung von Websites aus einem einzigen Prompt.

**Verfügbare Tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Mit Superdav AI Agent v1.18.0 können konfigurierte Managed-Service-, Freigabe-, Erinnerungs-, Kalender- und SMS-Tools verfügbar sein, sofern Administratoren sie aktivieren.

**Was er gut kann:**
- Einen mehrphasigen Website-Erstellungsplan für einen beschriebenen Geschäftstyp generieren
- Jede Phase autonom ausführen — Struktur, Inhalte, Navigation, Design
- Fehler während eines Plans beheben, ohne manuelles Eingreifen zu erfordern
- Empfohlene Plugins als Teil der Erstellung installieren
- Kontaktformulare direkt über die Chat-Oberfläche erstellen (Superdav AI Agent v1.10.0+)
- Launch-Erinnerungen oder Teilnehmer-Nachfassaktionen koordinieren, ohne doppelte Benachrichtigungen zu senden, wenn Freigabe-Gates und Erinnerungsdatensätze aktiviert sind

**Starter-Vorschläge:**
- *Erstelle eine Fotografie-Portfolio-Website mit einem Galerie-Beitragstyp, einer Buchungsseite und einem Kontaktformular.*
- *Erstelle eine Restaurant-Website mit einer Online-Speisekarte, Öffnungszeiten und einem Anfrageformular für Tischreservierungen.*
- *Richte eine Website für freiberufliche Beratung mit Leistungsseiten, einem Portfolio-Bereich und einem Blog ein.*
- *Füge der Kontaktseite mit dem Site Builder ein Kontaktformular hinzu.*
- *Nachdem die Website-Launch-Checkliste freigegeben wurde, sende eine SMS-Erinnerung an den konfigurierten Stakeholder-Kontakt.*

---

### Design Studio {#design-studio}

**Fokus:** Visuelle Anpassung — Farben, Typografie, CSS und Blockmuster.

**Verfügbare Tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Was es gut kann:**
- Benannte Theme-Voreinstellungen anwenden (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Globale Typografie und Farbpaletten über theme.json feinabstimmen
- Benutzerdefiniertes CSS für markenspezifische Überschreibungen einfügen
- Einen Screenshot einer Seite aufnehmen und sie auf Designprobleme prüfen

**Starter-Vorschläge:**
- *Wende die warm-editorial-Voreinstellung an und setze dann die Primärfarbe auf #2d6a4f.*
- *Erstelle einen Screenshot der Startseite und sag mir, was du verbessern würdest.*
- *Erstelle ein wiederverwendbares Hero-Blockmuster mit einem vollflächigen Hintergrundbild und zentrierter Überschrift.*

### Plugin Manager {#plugin-manager}

**Fokus:** Entdecken, Installieren und Verwalten von WordPress-Plugins.

**Verfügbare Tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Was er gut kann:**
- Das beste Plugin für einen beschriebenen Anwendungsfall empfehlen
- Fähigkeitspakete aus der Registry installieren
- Den verfügbaren Fähigkeitskatalog nach Kategorie durchsuchen

**Starter-Vorschläge:**
- *Was ist das beste Plugin für ein Mitgliederverzeichnis?*
- *Installiere das WooCommerce-Fähigkeitenpaket.*
- *Zeige mir alle verfügbaren E-Commerce-Fähigkeitspakete.*

---

### Support Assistant {#support-assistant}

**Fokus:** Fragen zu Website-Inhalten, Einstellungen und WordPress-Konfiguration beantworten.

**Verfügbare Tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Was es gut kann:**
- Aktuelle Einstellungen und Optionen der Site nachschlagen
- Erklären, welche Beitragstypen, Taxonomien und Menüs auf der Site konfiguriert sind
- Fragen wie „Was bewirkt diese Einstellung?“ durch Auslesen von Live-Werten beantworten
- Als schreibgeschützte Diagnoseschicht dienen, bevor Änderungen vorgenommen werden

**Starter-Vorschläge:**
- *Welche Plugins und Einstellungen sind derzeit auf dieser Site aktiv?*
- *Liste alle benutzerdefinierten Beitragstypen auf, die auf dieser Site registriert sind.*
- *Welche Navigationsmenüs gibt es und wo sind sie zugewiesen?*

---

## Superdav Automation-Integrationen {#superdav-automation-integrations}

Wenn Superdav AI Agent v1.18.0-Integrationen konfiguriert sind, können integrierte Agenten an sichereren, zeitplanbewussten Automatisierungs-Workflows teilnehmen:

- **Google Calendar-Lesetools** ermöglichen es Agenten, konfigurierte Kalender und Ereignisse zu prüfen, bevor Folgearbeiten entworfen werden.
- **Kontakt- und Teilnehmerzuordnung** hilft dabei, Ereignisteilnehmer WordPress-Benutzern oder bekannten Kontakten zuzuordnen.
- **Freigabeschleusen durch Menschen** pausieren sensible Aktionen, bis ein autorisierter Benutzer sie überprüft und bestätigt.
- **Erinnerungsdatensätze** verhindern doppelte Benachrichtigungen, wenn geplante Jobs erneut versuchen oder wiederholt werden.
- **TextBee SMS-Benachrichtigungen** senden konfigurierte Textnachrichten nur, wenn SMS-Zugangsdaten und Workflow-Berechtigungen aktiviert sind.

Empfohlener Workflow: Bitte den Agenten, die Nachricht oder Aktion vorzubereiten, prüfe die Freigabeaufforderung und erlaube dann die Fortsetzung der genehmigten Aktion. Lasse bei wiederkehrenden Erinnerungen die Erinnerungs-Deduplizierung aktiviert, damit dasselbe Ereignis oder derselbe Kontakt nicht wiederholt benachrichtigt wird.

---

## Agenten anpassen {#customising-agents}

Jeder integrierte Agent kann über den `gratis_ai_agent_agents`-Filter erweitert oder ersetzt werden.

### Eine benutzerdefinierte Systemaufforderung zu einem bestehenden Agenten hinzufügen {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Einen neuen Agenten registrieren {#registering-a-new-agent}

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

Der neue Agent erscheint im Agent Picker, sobald der Filter ausgeführt wurde.

### Einen integrierten Agenten entfernen {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
